import styled from "styled-components";
import type { SeoraeJson } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";

export default function SeoraeTheaterSection({
  theater,
}: {
  theater: SeoraeJson["media"]["theater"];
}) {
  if (!theater.length) return null;

  return (
    <Section id="theater">
      <GreenText size="xl">Theater / Mime</GreenText>
      <List>
        {theater.map((t, i) => (
          <li key={`theater-${i}`}>
            {t.year ? `[${t.year}] ` : ""}
            <strong>{t.title}</strong>
            {t.type ? ` (${t.type})` : ""}
            {t.award ? ` — 🏆 ${t.award}` : ""}
            {t.note ? ` — ${t.note}` : ""}
          </li>
        ))}
      </List>
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
const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
  li {
    margin-bottom: 4px;
  }
`;
