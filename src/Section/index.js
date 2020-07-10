import React from "react";
import "./styles.css";

const Section = ({ title, extraHeaderContent, sectionBody }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeaderContent}
    </header>
    {sectionBody}
  </section>
)

export default Section;