// Text.tsx
import styled from "styled-components";

type TextProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

export const GreenText = styled.p<TextProps>`
  color: #16bf00;
  font-weight: 300;
  margin: 0;

  font-size: ${({ size }) => {
    switch (size) {
      case "sm":
        return "0.85rem";
      case "md":
        return "1rem";
      case "lg":
        return "1.25rem";
      case "xl":
        return "1.5rem";
      default:
        return "1rem";
    }
  }};
`;
