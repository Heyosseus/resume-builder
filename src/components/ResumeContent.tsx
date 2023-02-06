import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { At, Phone } from 'phosphor-react';
import cv from '../assets/LOGO-cv.png';

type Props = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  info: string;
  image: any;
  setImage: any;
  showImage: boolean;
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  experience: string;
  handleAddInput: any;
  inputs: any;
  school: string;
  degree: string;
  endOfStudy: string;
  bio: string;
  display: string;
  setDisplay: any;
  setName?: React.Dispatch<React.SetStateAction<string>>;
};

const ResumeContent: React.FC<Props> = ({
  name,
  surname,
  email,
  phone,
  info,
  image,
  setImage,
  showImage,
  position,
  employer,
  startDate,
  experience,
  endDate,
  school,
  degree,
  endOfStudy,
  bio,
  display,
  setDisplay,
}) => {
  useEffect(() => {
    if (showImage && image instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setImage(reader.result as string);
        window.localStorage.setItem(
          'image',
          JSON.stringify(reader.result)
        );
      };
    }
  }, [showImage, image]);

  return (
    <Wrapper>
      <ContentContainer>
        <Container>
          <Header>
            {name} {surname}
          </Header>
          <>
            <Email>
              {email && (
                <div>
                  <At size={20} /> {email}
                </div>
              )}
            </Email>
          </>
          <ForPhone>
            {phone && (
              <div>
                <Phone size={20} /> {phone}
              </div>
            )}
          </ForPhone>
          <Content>
            {info && (
              <>
                <About>ჩემ შესახებ</About>
                <Bio>{info}</Bio>
              </>
            )}
          </Content>
        </Container>
        <ForImage>
          {showImage && image && <ImageContainer src={image} alt="Preview" />}
        </ForImage>
      </ContentContainer>
      {position && (
        <div>
          <Line></Line>
          <HeaderForExperience>გამოცდილება</HeaderForExperience>
          <Position>
            {position}, {employer}
          </Position>
          <Dates>
            {[startDate, "-"]} {endDate}
          </Dates>
          <AboutExperience>{experience}</AboutExperience>
        </div>
      )}
      {school && (
        <div>
          <Line></Line>
          <HeaderForExperience>განათლება</HeaderForExperience>
          <Position>
            {[school, ","]} {degree}
          </Position>
          <Dates>{endOfStudy}</Dates>
          <AboutExperience>{bio}</AboutExperience>
          <Logo src={cv} alt="logo" />
        </div>
      )}
    </Wrapper>
  );
};

export default ResumeContent;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 68px 0 68px 60px;
`;
const ContentContainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #f93b1d;
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Email = styled.div`
  display: flex;
  font-weight: 400;
  line-height: 21px;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #1a1a1a;
  margin-right: auto;
  margin-top: 16px;
`;

const ForPhone = styled(Email)`
  margin-right: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-top: 32px;
  font-size: 16px;
  width: 430px;
`;

const About = styled(Header)`
  font-size: 22px;
`;
const Bio = styled.p`
  font-weight: 400;
  line-height: 23px;
  font-size: 16px;
  color: black;
  margin-top: 16px;
  word-wrap: break-word;
`;

const ImageContainer = styled.img`
  border-radius: 50%;
  width: 246px;
  height: 246px;
  background-size: cover;
`;

const ForImage = styled.div`
  right: 0;
  padding-right: 64px;
`;

const Line = styled.div`
  height: 1px;
  background: #c8c8c8;
  width: 662px;
  margin-top: 18px;
`;

const HeaderForExperience = styled(About)`
  margin-top: 21px;
`;

const Position = styled.h2`
  color: #1a1a1a;
  font-size: 16px;
  line-height: 21px;
  margin-top: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

const Dates = styled.div`
  font-weight: 400;
  line-height: 21px;
  font-size: 16px;
  font-style: italic;
  color: #909090;
  margin-top: 4px;
`;

const AboutExperience = styled(Bio)``;


const Logo = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 0;
  margin-bottom: 64px;
`