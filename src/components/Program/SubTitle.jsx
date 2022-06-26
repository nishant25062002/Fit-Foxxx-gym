import React from "react";
import styled from 'styled-components';

const Subtitle = () => (
  <Section >
    Training Studio is free CSS template for gyms and fitness centers. You are{" "}
    <br />
    allowed to use this layout for your business website.
  </Section>
);

const Section= styled.p`
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  @media (max-width: 700px) {
    padding: 0 40px;
    br {
      display: none;
    }
  }
`;

export default Subtitle;
