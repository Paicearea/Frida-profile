// src/components/SeoraeMediaSection.tsx
import styled from "styled-components";
import type { SeoraeJson } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";

export default function SeoraeMediaSection({
  screen,
  modelMv,
}: {
  screen: SeoraeJson["media"]["screen"];
  modelMv: SeoraeJson["media"]["modelMv"];
}) {
  if (!screen.length && !modelMv.length) return null;

  return (
    <Section id="media">
      <GreenText size="xl">Media</GreenText>

      {screen.length > 0 && (
        <>
          <GreenText>Screen / Broadcast</GreenText>
          <List>
            {screen.map((s, i) => (
              <li key={`screen-${i}`}>
                {s.year ? `[${s.year}] ` : ""}
                {s.type ? `${s.type} ` : ""}
                <strong>{s.title}</strong>
                {s.broadcaster ? ` / ${s.broadcaster}` : ""}
                {s.producer ? ` / ${s.producer}` : ""}
                {s.role ? ` — ${s.role}` : ""}
              </li>
            ))}
          </List>
        </>
      )}

      {modelMv.length > 0 && (
        <>
          <GreenText size="xl">Model / MV</GreenText>
          <List>
            {modelMv.map((m, i) => (
              <li key={`mv-${i}`}>
                {m.year ? `[${m.year}] ` : ""}
                {m.type ? `${m.type} ` : ""}
                <strong>{m.title}</strong>
                {m.url && (
                  <>
                    {" — "}
                    <a href={m.url} target="_blank" rel="noreferrer">
                      링크
                    </a>
                  </>
                )}
              </li>
            ))}
          </List>
        </>
      )}
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
const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
  li {
    margin-bottom: 4px;
  }
`;
