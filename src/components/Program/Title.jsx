import React from "react";
import styled from 'styled-components';

const Title = () => (
  <Section >
    CHOOSE <span>PROGRAM</span>
  </Section>
);

const Section= styled.h2`
  color: #232d39;
  font-size: 26px;
  font-weight: 900;
  line-height: 1;
  span {
    color: #ed563b;
  }
`;

export default Title;
