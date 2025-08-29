import styled from "styled-components";
import raw from "@/../public/intro/seorae.json";
import type { SeoraeJson } from "@/types/seorae";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SeoraeHeaderNav from "@/components/SeoraeHeaderNav";
import SeoraeImageSection from "@/components/SeoraeImageSection";
import SeoraeYoutubeSection from "@/components/SeoraeYoutubeSection";
import SeoraeIntroduce from "@/components/SeoraeIntroduce";
import SeoraeHistorySection from "@/components/SeoraeHistorySection";
import SeoraeFooter from "@/components/SeoraeFooter";
import SeoraeVideo from "@/components/SeoraeVideo";
import Footer from "@/components/sections/Footer";

export default function SeoraeIntroPage() {
  const d = raw as SeoraeJson;

  return (
    <Main>
      <MotionSection>
        <SeoraeHeaderNav />
      </MotionSection>

      <MotionSection>
        <Hero>
          <ProfileImage src="/images/seorae/largebanner.jpg" alt="프로필" />
        </Hero>
      </MotionSection>

      <MotionSection>
        <SeoraeIntroduce profile={d.profile} contact={d.contact} />
      </MotionSection>

      <MotionSection>
        <SeoraeImageSection images={d.assets?.images ?? []} />
      </MotionSection>

      <MotionSection>
        <SeoraeYoutubeSection youtube={d.assets?.youtube ?? []} />
      </MotionSection>

      <MotionSection>
        <SeoraeHistorySection
          screen={d.media?.screen ?? []}
          modelMv={d.media?.modelMv ?? []}
          theater={d.media?.theater ?? []}
        />
      </MotionSection>
      <MotionSection>
        <SeoraeFooter profile={d.profile} />
      </MotionSection>
      <MotionSection>
        <SeoraeVideo src={d.assets?.video?.[0]?.src ?? ""} />
      </MotionSection>
      <Footer
        developerName="Frida Pai"
        githubUrl="https://github.com/Paicearea/Frida-profile"
        email="01lily0302@naver.com"
      />
    </Main>
  );
}

// motion wrapper
const MotionSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const Hero = styled.header`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100vw;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  max-width: 100%;
`;
