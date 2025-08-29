import styled from "styled-components";
import type { SeoraeJson } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";

export default function SeoraeHistorySection({
  screen,
  modelMv,
  theater,
}: {
  screen: SeoraeJson["media"]["screen"];
  modelMv: SeoraeJson["media"]["modelMv"];
  theater: SeoraeJson["media"]["theater"];
}) {
  if (!screen.length && !modelMv.length && !theater.length) return null;

  const renderScreenRows = (items: SeoraeJson["media"]["screen"]) =>
    items.map((item, i) => (
      <Row key={i}>
        <Cell>{item.year ?? ""}</Cell>
        <Cell>{item.type ?? ""}</Cell>
        <Cell>{item.title}</Cell>
        <Cell>{item.broadcaster ?? item.producer ?? ""}</Cell>
        <Cell>{item.role ?? ""}</Cell>
      </Row>
    ));

  const renderModelMvRows = (items: SeoraeJson["media"]["modelMv"]) =>
    items.map((item, i) => (
      <Row key={i}>
        <Cell>{item.year ?? ""}</Cell>
        <Cell>{item.type ?? ""}</Cell>
        <Cell>{item.title}</Cell>
        <Cell></Cell>
        <Cell>
          {item.url ? (
            <Link href={item.url} target="_blank" rel="noreferrer">
              링크
            </Link>
          ) : (
            ""
          )}
        </Cell>
      </Row>
    ));

  const renderTheaterRows = (items: SeoraeJson["media"]["theater"]) =>
    items.map((t, i) => (
      <Row key={i}>
        <Cell>{t.year ?? ""}</Cell>
        <Cell>{t.type ?? ""}</Cell>
        <Cell>
          {t.highlight ? <Highlight>{t.title}</Highlight> : <>{t.title}</>}
        </Cell>
        <Cell colSpan={2}>
          {t.highlight ? (
            <Highlight>{t.award ?? t.note ?? ""}</Highlight>
          ) : (
            (t.award ?? t.note ?? "")
          )}
        </Cell>
      </Row>
    ));

  return (
    <Section id="history">
      <Title>Personal History</Title>

      {screen.length > 0 && (
        <>
          <SubTitle>Screen / Broadcast</SubTitle>
          <TableWrapper>
            <Table>
              <tbody>{renderScreenRows(screen)}</tbody>
            </Table>
          </TableWrapper>
        </>
      )}

      {modelMv.length > 0 && (
        <>
          <SubTitle>Model / MV</SubTitle>
          <TableWrapper>
            <Table>
              <tbody>{renderModelMvRows(modelMv)}</tbody>
            </Table>
          </TableWrapper>
        </>
      )}

      {theater.length > 0 && (
        <>
          <SubTitle>Theater / Mime</SubTitle>
          <TableWrapper>
            <Table>
              <tbody>{renderTheaterRows(theater)}</tbody>
            </Table>
          </TableWrapper>
        </>
      )}
    </Section>
  );
}

const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(GreenText)`
  display: block;
  margin-bottom: 12px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled(GreenText)`
  display: block;
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 1.05rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
`;

const Row = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const Cell = styled.td`
  padding: 6px 8px;
  font-size: clamp(14px, 1.5vw, 16px);
  color: #333;
  vertical-align: top;
  line-height: 1.6;
  word-break: break-word;

  & > strong {
    display: block;
  }

  @media (max-width: 768px) {
    padding: 4px 6px;
    font-size: clamp(13px, 2vw, 15px);
  }
`;

const Highlight = styled.span`
  color: #16bf00;
  font-weight: 600;
  line-height: 1.6;
  word-break: break-word;
`;

const Link = styled.a`
  color: #16bf00;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
