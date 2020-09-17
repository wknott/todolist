import React from "react";
import { StyledSection, SectionHeader, Title, SectionBody } from "./styled";

const Section = ({ title, extraHeaderContent, sectionBody }) => (
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
)

export default Section;