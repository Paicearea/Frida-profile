import { useState } from "react";
import styled from "styled-components";
import { GreenText } from "./text/TextComponent";

const sections = [
  { id: "images", label: "Images" },
  { id: "youtube", label: "Video" },
  { id: "media", label: "Media" },
  { id: "theater", label: "Theater / Mime" },
];

export default function SeoraeHeaderNav() {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <Nav>
      {/* 왼쪽: 로고 + (데스크탑 전용) 섹션 버튼 */}
      <Left>
        <Logo>Seorae</Logo>
        <DesktopMenu>
          {sections.map((s) => (
            <NavButton key={s.id} onClick={() => handleClick(s.id)}>
              {s.label}
            </NavButton>
          ))}
        </DesktopMenu>
      </Left>

      {/* 오른쪽: 햄버거 */}
      <Right>
        <Hamburger onClick={() => setOpen(!open)}>☰</Hamburger>
      </Right>

      {/* 사이드 네비 */}
      {open && (
        <>
          <Overlay onClick={() => setOpen(false)} />
          <SideNav>
            {sections.map((s) => (
              <SideNavButton key={s.id} onClick={() => handleClick(s.id)}>
                {s.label}
              </SideNavButton>
            ))}
            <CloseButton onClick={() => setOpen(false)}>✕</CloseButton>
          </SideNav>
        </>
      )}
    </Nav>
  );
}

/* ───────── 스타일 ───────── */
const Nav = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto; /* Safari에서 확실히 가운데 정렬 */
  justify-content: space-between;
  padding: 16px;
  position: relative;
  z-index: 100;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled(GreenText).attrs({ size: "xl" })`
  color: #16bf00;
  font-weight: 600;
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 16px;
  padding-left: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  background-color: transparent;
  padding: 4px 8px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: black;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  flex-shrink: 0;
  color: black;
  @media (min-width: 769px) {
    display: none;
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 200;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;
`;

const SideNavButton = styled.button`
  text-align: left;
  background: transparent;
  border: none;
  font-size: 1rem;
  padding: 8px;
  cursor: pointer;
  color: #111;
  &:hover {
    background: #f3f4f6;
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: auto;
  color: #111;
`;
