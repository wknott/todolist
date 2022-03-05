import React, { ReactNode } from 'react';
import {
  SectionBody, SectionHeader, StyledSection, Title,
} from './styled';

type SectionProps = {
  title: String,
  extraHeaderContent?: ReactNode,
  sectionBody: ReactNode,
}

// eslint-disable-next-line react/function-component-definition
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

Section.defaultProps = {
  extraHeaderContent: null,
};

export default Section;
