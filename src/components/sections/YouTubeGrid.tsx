import YouTubeThumbPlayer from "./YouTubeThumbPlayer";
import type { YoutubeItem } from "@/types/seorae";
import styled from "styled-components";

export default function YouTubeGrid({
  items,
}: {
  items: ReadonlyArray<YoutubeItem>;
}) {
  if (!items?.length) return null;

  return (
    <Grid>
      {items.map((it, i) => (
        <Item key={i}>
          <YouTubeThumbPlayer url={it.url} label={it.label} />
        </Item>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const Item = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  @media (max-width: 768px) {
    aspect-ratio: 16/9;
  }
`;
