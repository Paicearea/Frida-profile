// src/components/SeoraeImageSection.tsx
import { useState } from "react";
import styled from "styled-components";
import type { ImageItem } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";
import ImageCarousel from "./sections/ImageCarousel";

export default function SeoraeImageSection({
  images,
}: {
  images: ImageItem[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 9;

  if (!images.length) return null;

  const totalPages = Math.ceil(images.length / PAGE_SIZE);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const pageImages = images.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <Section id="images">
      <Header>
        <GreenTitle size="xl">Images</GreenTitle>
      </Header>
      <Content>
        <DesktopGrid>
          {pageImages.map((item, i) => (
            <GridItem key={i} onClick={() => setSelectedImage(item.src)}>
              <Img src={item.src} alt={item.label || `image-${i}`} />
            </GridItem>
          ))}
        </DesktopGrid>

        {totalPages > 1 && (
          <Pagination>
            <PageButton onClick={handlePrevPage}>‹</PageButton>
            <PageIndicator>
              {currentPage + 1} / {totalPages}
            </PageIndicator>
            <PageButton onClick={handleNextPage}>›</PageButton>
          </Pagination>
        )}

        <MobileCarousel>
          <ImageCarousel items={images} />
        </MobileCarousel>
      </Content>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalImg src={selectedImage} alt="fullscreen" />
        </Modal>
      )}
    </Section>
  );
}

const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 12px;
`;

const GreenTitle = styled(GreenText)`
  display: block;
`;

const Content = styled.div`
  width: 100%;
  min-width: 0;
`;

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const GridItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 360px;
  height: 480px;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PageButton = styled.button`
  color: #16bf00;
  border: none;
  font-size: 1.2rem;
  padding: 4px 10px;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageIndicator = styled.div`
  font-size: 1rem;
  color: #646464;
  line-height: 1;
  min-width: 30px;
  text-align: center;
`;

const MobileCarousel = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImg = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;
