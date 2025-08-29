import styled from "styled-components";
import type { FooterProps } from "@/types/frida";

export default function Footer({
  developerName = "Your Name",
  githubUrl,
  email,
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <FooterWrapper>
      <FooterContent>
        <span>
          &copy; {year} {developerName}
        </span>
        <ContactList>
          {githubUrl && (
            <ContactItem>
              <ContactLink href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </ContactLink>
            </ContactItem>
          )}
          {email && (
            <ContactItem>
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            </ContactItem>
          )}
        </ContactList>
      </FooterContent>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 16px 24px;
  background-color: #ffffff;
  color: #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.825rem;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    max-width: 1000px;
  }
`;

const ContactList = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ContactItem = styled.li``;

const ContactLink = styled.a`
  color: #16bf00;
  text-decoration: none;
  border-bottom: 1px dashed rgba(22, 191, 0, 0.35);
  padding: 2px 0;
  &:hover {
    border-bottom-color: rgba(22, 191, 0, 0.7);
  }
`;
