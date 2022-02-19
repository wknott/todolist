import React, { ReactNode } from "react";
import { SectionBody, SectionHeader, StyledSection, Title } from "./styled";

type Props = {
  title: String,
  extraHeaderContent?: ReactNode,
  sectionBody: ReactNode, 
}

const Section = ({ title, extraHeaderContent, sectionBody }:Props) => (
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