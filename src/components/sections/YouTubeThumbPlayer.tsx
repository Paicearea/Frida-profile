import { useState, useMemo, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  url: string;
  label?: string;
  autoPlay?: boolean;
  startSeconds?: number;
};

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      if (u.pathname.startsWith("/shorts/"))
        return u.pathname.split("/")[2] || null;
      if (u.pathname.startsWith("/embed/"))
        return u.pathname.split("/")[2] || null;
    }
  } catch {
    return null;
  }
  return null;
}

export default function YouTubeThumbPlayer({
  url,
  label,
  autoPlay = true,
  startSeconds,
}: Props) {
  const [playing, setPlaying] = useState(false);

  const videoId = useMemo(() => extractVideoId(url), [url]);
  const thumb = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  const embedSrc = useMemo(() => {
    if (!videoId) return "";
    const params = new URLSearchParams({
      autoplay: autoPlay ? "1" : "0",
      modestbranding: "1",
      rel: "0",
      playsinline: "1",
      enablejsapi: "1",
    });
    if (startSeconds) params.set("start", String(startSeconds));
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId, autoPlay, startSeconds]);

  const onPlay = () => videoId && setPlaying(true);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPlay();
    }
  };

  return (
    <Wrapper>
      {playing && videoId ? (
        <iframe
          title={label || "YouTube player"}
          src={embedSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      ) : (
        <Thumb
          role="button"
          tabIndex={0}
          aria-label={label ? `${label} 재생` : "영상 재생"}
          onClick={onPlay}
          onKeyDown={onKey}
        >
          {thumb ? (
            <img src={thumb} alt={label || "YouTube thumbnail"} />
          ) : (
            <NoThumb>썸네일을 불러올 수 없습니다</NoThumb>
          )}
          <Overlay>
            <PlayButton
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="재생"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </PlayButton>
          </Overlay>
        </Thumb>
      )}

      {label && <Caption>{label}</Caption>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #000;
`;

const Thumb = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: none;
  }
`;

const NoThumb = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #9ca3af;
  font-size: 14px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.25));
`;

const PlayButton = styled(motion.button)`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.65);
  display: grid;
  place-items: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;

  svg {
    fill: #16bf00;
  }
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px 12px;
  color: #c4c4c4;
  font-size: 14px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
`;
