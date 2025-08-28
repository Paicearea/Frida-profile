import styled from "styled-components";
import raw from "@/../public/intro/seorae.json";
import type { SeoraeJson } from "@/types/seorae";
import SeoraeHeaderNav from "@/components/SeoraeHeaderNav";
import SeoraeImageSection from "@/components/SeoraeImageSection";
import SeoraeYoutubeSection from "@/components/SeoraeYoutubeSection";
import SeoraeMediaSection from "@/components/SeoraeMediaSection";
import SeoraeTheaterSection from "@/components/SeoraeTheaterSection";
import SeoraeIntroduce from "@/components/SeoraeIntroduce";

export default function SeoraeIntroPage() {
  const d = raw as SeoraeJson;

  return (
    <Main>
      <SeoraeHeaderNav />
      <Hero>
        <ProfileImage src="/images/seorae/large-profile.jpg" alt="프로필" />
      </Hero>
      <SeoraeIntroduce profile={d.profile} contact={d.contact} />
      <SeoraeImageSection images={d.assets?.images ?? []} />
      <SeoraeYoutubeSection youtube={d.assets?.youtube ?? []} />
      <SeoraeMediaSection
        screen={d.media?.screen ?? []}
        modelMv={d.media?.modelMv ?? []}
      />
      <SeoraeTheaterSection theater={d.media?.theater ?? []} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Hero = styled.header`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
