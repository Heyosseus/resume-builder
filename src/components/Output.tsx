import { At, CaretCircleLeft, Phone, X } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ForFlex, FormContainer, Label } from "../styles/ForPages";
import cv from "../assets/LOGO-cv.png";
import {
  Wrapper,
  About,
  AboutExperience,
  Bio,
  Content,
  ContentContainer,
  Dates,
  Email,
  ForImage,
  ForPhone,
  Header,
  HeaderForExperience,
  ImageContainer,
  Line,
  Logo,
  Position,
} from "../styles/ResumeStyle";
import { SuccessCard } from "../styles/AppStyle";

function Output(props: any) {
  const { container, imageUrl, message, stringImage , clearStorage} = props;

  const [display, setDisplay] = useState(true);
  const handleDisplay = () => {
    setDisplay(!display);
  };
  console.log(container);
  console.log(imageUrl);

  
  return (
    <ParentContainer>
      <div>
        <Link to="/" style={{ height: "38px" }}>
          <CaretCircleLeft
            size={38}
            style={{ color: "black" }}
            onClick={clearStorage}
          />
        </Link>
      </div>
      <ResumeContainer>
        <ForFlex>
          <Resume>
            <Header>
              {container.name} {container.surname}
            </Header>
            <>
              <Email>
                <At size={20} /> {container.email}
              </Email>
            </>
            <ForPhone>
              <Phone size={20} /> {container.phone_number}
            </ForPhone>
            <Content>
              <>
                <About>ჩემ შესახებ</About>
                <Bio>{container.about_me}</Bio>
              </>
            </Content>
          </Resume>
          <ForImage>
            <ImageContainer src={stringImage} alt="Profile" />
          </ForImage>
        </ForFlex>
        <div>
          {container.experiences &&
            container.experiences.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <Line></Line>
                  <HeaderForExperience>გამოცდილება</HeaderForExperience>
                  <Position>
                    {item.position}, {item.employer}
                  </Position>
                  <Dates>
                    {[item.start_date, "-"]}
                    {item.due_date}
                  </Dates>
                  <AboutExperience>{item.description}</AboutExperience>
                </div>
              );
            })}
        </div>

        <div>
          {container.educations &&
            container.educations.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <Line></Line>
                  <HeaderForExperience>განათლება</HeaderForExperience>
                  <Position>
                    {[item.institute, ","]} {item.degree}
                  </Position>
                  <Dates>{item.due_date}</Dates>
                  <AboutExperience>{item.description}</AboutExperience>
                </div>
              );
            })}
        </div>

        <Logo src={cv}></Logo>
      </ResumeContainer>
      <div>
        {display && (
          <SuccessCard>
            {message}
            <X
              size={22}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                marginTop: "6px",
                marginRight: "3px",
              }}
              onClick={handleDisplay}
            />
          </SuccessCard>
        )}
      </div>
    </ParentContainer>
  );
}

export default Output;

const Resume = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 68px 0 68px 60px;
  justify-content: space-between;
  border: 1px solid black;
  min-height: 90vh;
`;

const ParentContainer = styled.div`
  display: flex;
  padding: 45px 40px;
  justify-content: space-between;
  width: 100%;
`;
