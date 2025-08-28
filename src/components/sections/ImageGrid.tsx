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

  const paginate = (newDirection: number) => {
    let next = page + newDirection;
    if (next < 0) next = items.length - 1;
    if (next >= items.length) next = 0;
    setPage(next);
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

      <ButtonLeft onClick={() => paginate(-1)}>‹</ButtonLeft>
      <ButtonRight onClick={() => paginate(1)}>›</ButtonRight>
    </Wrapper>
  );
}

/* ─ constants ─ */
const SLIDE_WIDTH = 100; // 슬라이드 하나의 너비 (%)
const GAP = 4; // 슬라이드 간 간격 (%)

/* ─ styled-components ─ */
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
`;

const SlideWindow = styled.div`
  overflow: visible;
  padding: 0 5%;
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
  transition: transform 0.3s ease;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* ✅ 비율 유지 + 이미지 전체 표시 */
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

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  background: transparent;
  color: black;
  border: none;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 50%;
  z-index: 10;
`;

const ButtonLeft = styled(Button)`
  left: 12px;
`;

const ButtonRight = styled(Button)`
  right: 12px;
`;
