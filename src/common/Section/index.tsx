import React, { ReactNode } from "react";
import { SectionBody, SectionHeader, StyledSection, Title } from "./styled";

type SectionProps = {
  title: String,
  extraHeaderContent?: ReactNode,
  sectionBody: ReactNode, 
}

const Section: React.FC<SectionProps> = ({ title, extraHeaderContent, sectionBody }) => (
  <StyledSection>
    <SectionHeader>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </SectionHeader>
    <SectionBody>
      {sectionBody}
    </SectionBody>
  </StyledSection>
);

export default Section;