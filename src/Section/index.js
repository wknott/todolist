import React from "react";
import { StyledSection, SectionHeader, Title } from "./styled";

const Section = ({ title, extraHeaderContent, sectionBody }) => (
  <StyledSection>
    <SectionHeader>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </SectionHeader>
    {sectionBody}
  </StyledSection>
)

export default Section;