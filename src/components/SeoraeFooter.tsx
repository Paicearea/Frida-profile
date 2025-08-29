import type { SeoraeJson } from "@/types/seorae";
import styled from "styled-components";

type FooterProps = {
  profile?: SeoraeJson["profile"];
};
function SeoraeFooter({ profile }: FooterProps) {
  const { englishname } = profile || {};
  return <FooterContainer>{englishname}</FooterContainer>;
}

export default SeoraeFooter;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  text-align: center;
  font-size: 3rem;
  color: #16bf00;
`;
