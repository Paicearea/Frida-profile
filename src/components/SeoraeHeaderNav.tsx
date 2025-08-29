import { useState } from "react";
import styled from "styled-components";
import { GreenText } from "./text/TextComponent";

const sections = [
  { id: "images", label: "Images" },
  { id: "youtube", label: "Video" },
  { id: "history", label: "History" },
];

export default function SeoraeHeaderNav() {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <Nav>
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
      <Right>
        <Hamburger onClick={() => setOpen(!open)}>☰</Hamburger>
      </Right>
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

const Nav = styled.nav`
  width: 100%;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  -webkit-tap-highlight-color: transparent;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled(GreenText).attrs({ size: "xl" })`
  color: #16bf00;
  font-weight: 600;
  user-select: none;
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
  background: transparent;
  padding: 4px 8px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #111;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #111;
  -webkit-tap-highlight-color: transparent;
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
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 200;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;
  touch-action: none;
`;

const SideNavButton = styled.button`
  text-align: left;
  background: transparent;
  border: none;
  font-size: 1rem;
  padding: 8px;
  cursor: pointer;
  color: #111;
  -webkit-tap-highlight-color: transparent;
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
  -webkit-tap-highlight-color: transparent;
`;
