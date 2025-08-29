import styled from "styled-components";
import type { SeoraeJson } from "@/types/seorae";
import { GreenText } from "./text/TextComponent";

type SeoraeProfileSectionProps = {
  profile?: SeoraeJson["profile"];
  contact?: SeoraeJson["contact"];
};

const normalizeHandle = (h?: string) => (h || "").trim().replace(/^@+/, "");

function SeoraeProfileSection({ profile, contact }: SeoraeProfileSectionProps) {
  if (!profile) return null;

  const {
    introduction,
    name,
    englishname,
    education,
    specialties,
    affiliations,
    dateOfBirth,
    heightCm,
    weightKg,
  } = profile;

  const { phone, email, instagramHandle, youtubeHandle } = contact ?? {};

  return (
    <Section>
      <Header>
        <GreenText size="xl">Introduction</GreenText>
      </Header>

      {introduction && <IntroText>{introduction}</IntroText>}

      <TwoColumn>
        <Column>
          <GroupTitle>Profile</GroupTitle>
          <InfoGrid as="dl">
            {(name || englishname) && (
              <>
                <Key as="dt">이름</Key>
                <Val as="dd">
                  {name} {englishname ? ` | ${englishname}` : ""}
                </Val>
              </>
            )}
            {dateOfBirth && (
              <>
                <Key as="dt">생년월일</Key>
                <Val as="dd">{dateOfBirth}</Val>
              </>
            )}
            {(heightCm || weightKg) && (
              <>
                <Key as="dt">신체</Key>
                <Val as="dd">
                  {heightCm ? `${heightCm}cm` : ""}
                  {heightCm && weightKg ? " / " : ""}
                  {weightKg ? `${weightKg}kg` : ""}
                </Val>
              </>
            )}
            {education && (
              <>
                <Key as="dt">학력</Key>
                <Val as="dd">{education}</Val>
              </>
            )}
            {!!specialties?.length && (
              <>
                <Key as="dt">특기</Key>
                <Val as="dd">{specialties.join(" · ")}</Val>
              </>
            )}
            {!!affiliations?.length && (
              <>
                <Key as="dt">소속/협회</Key>
                <Val as="dd">{affiliations.join(" · ")}</Val>
              </>
            )}
          </InfoGrid>
        </Column>

        <Column>
          {(phone || email || instagramHandle || youtubeHandle) && (
            <>
              <GroupTitle>Contact</GroupTitle>
              <InfoGrid as="dl">
                {phone && (
                  <>
                    <Key as="dt">전화</Key>
                    <Val as="dd">
                      <A href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                        {phone}
                      </A>
                    </Val>
                  </>
                )}
                {email && (
                  <>
                    <Key as="dt">이메일</Key>
                    <Val as="dd">
                      <A href={`mailto:${email}`}>{email}</A>
                    </Val>
                  </>
                )}
                {instagramHandle && (
                  <>
                    <Key as="dt">인스타그램</Key>
                    <Val as="dd">
                      <A
                        href={`https://www.instagram.com/${normalizeHandle(
                          instagramHandle
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{normalizeHandle(instagramHandle)}
                      </A>
                    </Val>
                  </>
                )}
                {youtubeHandle && (
                  <>
                    <Key as="dt">유튜브</Key>
                    <Val as="dd">
                      <A
                        href={`https://www.youtube.com/@${normalizeHandle(
                          youtubeHandle
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{normalizeHandle(youtubeHandle)}
                      </A>
                    </Val>
                  </>
                )}
              </InfoGrid>
            </>
          )}
        </Column>
      </TwoColumn>
    </Section>
  );
}

export default SeoraeProfileSection;

const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 8px;
`;

const IntroText = styled.p`
  font-size: clamp(14px, 2vw, 16px);
  margin: 12px 0 16px;
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(16px, 4vw, 24px);
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  min-width: 0;
`;

const GroupTitle = styled(GreenText).attrs({ size: "sm" })`
  display: block;
  margin: 16px 0 8px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  column-gap: 12px;
  row-gap: 10px;
  align-items: start;
  min-width: 0;

  @media (max-width: 480px) {
    grid-template-columns: 92px 1fr;
  }
`;

const Key = styled.div`
  color: #666;
  font-size: clamp(13px, 2vw, 15px);
  line-height: 1.6;
  word-break: keep-all;
`;

const Val = styled.div`
  color: #111;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.6;
  word-break: break-word;
`;

const A = styled.a`
  color: #111;
  text-decoration: none;
  border-bottom: 1px dashed rgba(22, 191, 0, 0.35);
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  padding: 2px 0;
  &:hover {
    color: #16bf00;
    border-bottom-color: rgba(22, 191, 0, 0.6);
  }
`;
