import styled from "styled-components";
import YouTubeGrid from "@/components/sections/YouTubeGrid";
import type { YoutubeItem } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";

export default function SeoraeYoutubeSection({
  youtube,
}: {
  youtube: YoutubeItem[];
}) {
  if (!youtube.length) return null;

  return (
    <Section id="youtube">
      <GreenText size="xl">YouTube</GreenText>
      <YouTubeGrid items={youtube} />
    </Section>
  );
}

const Section = styled.section`
  width: 90%;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;
