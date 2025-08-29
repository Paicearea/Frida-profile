import { useRef, useState } from "react";
import styled from "styled-components";

interface SeoraeVideoProps {
  src: string;
}

const SeoraeVideo: React.FC<SeoraeVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.loop = false;
      setIsPlaying(false);
    }
  };

  return (
    <VideoWrapper
      onMouseEnter={() => !isMobile() && playVideo()}
      onMouseLeave={() => !isMobile() && pauseVideo()}
      onTouchStart={() => isMobile() && playVideo()}
      onTouchEnd={() => isMobile() && pauseVideo()}
    >
      <Video ref={videoRef} src={src} muted />
    </VideoWrapper>
  );
};

export default SeoraeVideo;

// 모바일 감지
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const VideoWrapper = styled.div`
  cursor: pointer;
  max-width: 1000px;
  width: 90%;
  height: 90vh;
  margin: 0 auto;
`;

const Video = styled.video`
  width: 100%;
  height: 480px;
  display: block;
  object-fit: contain;
  transition: transform 0.3s ease;
`;
