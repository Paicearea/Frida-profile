// src/components/SeoraeImageSection.tsx
import styled from "styled-components";
import ImageGrid from "@/components/sections/ImageGrid";
import type { ImageItem } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";

export default function SeoraeImageSection({
  images,
}: {
  images: ImageItem[];
}) {
  if (!images.length) return null;

  return (
    <Section id="images">
      <Header>
        <GreenTitle size="xl">Images</GreenTitle>
      </Header>
      <Content>
        <ImageGrid items={images} />
      </Content>
    </Section>
  );
}

const Section = styled.section`
  width: 90%;
  max-width: 800px;
  flex: 1 1 100%;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const Header = styled.div`
  display: block;
  margin: 0 0 12px;
`;

const GreenTitle = styled(GreenText)`
  display: block;
`;

const Content = styled.div`
  width: 100%;
  min-width: 0;
`;
