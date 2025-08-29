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
      <Header>
        <GreenTitle size="xl">YouTube</GreenTitle>
      </Header>
      <YouTubeGrid items={youtube} />
    </Section>
  );
}

const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Header = styled.div`
  margin-bottom: 12px;
`;

const GreenTitle = styled(GreenText)`
  display: block;
`;
