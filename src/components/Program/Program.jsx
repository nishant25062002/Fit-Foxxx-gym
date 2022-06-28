import React from "react";
import Icon from "../GlobalComponents/Icon";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Box from "./Box";
import Container from "../GlobalComponents/Container";
import styled from 'styled-components';

const Program = () => (
  <Section className="gymProgram">
    {/* <Title /> */}
    {/* <Icon /> */}
    {/* <SubTitle /> */}
    <Container>
      <Box
        title="Basic Fitness"
        desc="Lorem Ipsum 50 Lorem Ipsum 50 Lorem Ipsum 50 Lorem Ipsum 50 Lorem Ipsum 50 Lorem Ipsum 50 v "
      />
      <Box
        title="Advanced Muscle Course"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
      />
      <Box
        title="New Gym Training"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
      />
      <Box
        title="Yoga Training"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
      />
      <Box
        title="Basic Muscle Course"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
      />
      <Box
        title="Body Building Course"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
      />
    </Container>
  </Section>
);

const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 0px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Program;
