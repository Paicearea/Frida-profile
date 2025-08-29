import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import type { ImageItem } from "@/types/seorae";

export default function ImageCarousel({
  items,
}: {
  items: ReadonlyArray<ImageItem>;
}) {
  const [page, setPage] = useState(0);

  if (!items?.length) return null;

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <Wrapper>
      <SlideWindow>
        <SlideWrapper
          as={motion.div}
          animate={{ x: `-${page * (SLIDE_WIDTH + GAP)}%` }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, i) => (
            <Slide key={i}>
              <Img src={item.src} alt={item.label || `image-${i}`} />
              {item.label && <Caption>{item.label}</Caption>}
            </Slide>
          ))}
        </SlideWrapper>
      </SlideWindow>
      <Controls>
        <Button onClick={prevSlide}>‹</Button>
        <Indicator>
          {page + 1}/{items.length}
        </Indicator>
        <Button onClick={nextSlide}>›</Button>
      </Controls>
    </Wrapper>
  );
}

const SLIDE_WIDTH = 100;
const GAP = 4;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
`;

const SlideWindow = styled.div`
  overflow: hidden;
`;

const SlideWrapper = styled(motion.div)`
  display: flex;
  gap: ${GAP}%;
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: ${SLIDE_WIDTH}%;
  height: 420px;
  position: relative;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  color: #c4c4c4;
  border-radius: 0 0 12px 12px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  gap: 8px;
`;

const Button = styled.button`
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

const Indicator = styled.div`
  font-size: 0.825rem;
  color: #646464;
  line-height: 1;
  min-width: 30px;
  text-align: center;
`;
