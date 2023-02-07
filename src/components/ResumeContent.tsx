import React, { useEffect, useState } from 'react';
import { At, Phone } from 'phosphor-react';
import cv from '../assets/LOGO-cv.png';
import { Wrapper, Container, About,AboutExperience,Bio,Content,ContentContainer,Dates,Email,ForImage,ForPhone,Header,HeaderForExperience,ImageContainer,Line,Logo,Position } from '../styles/ResumeStyle';
import {Props} from '../Interfaces/ForResume'


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
      <div>
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
            {showImage && image && (
              <ImageContainer src={image} alt="Preview" />
            )}
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
              {[startDate, '-']} {endDate}
            </Dates>
            <AboutExperience>{experience}</AboutExperience>
          </div>
        )}
        {school && (
          <div>
            <Line></Line>
            <HeaderForExperience>განათლება</HeaderForExperience>
            <Position>
              {[school, ',']} {degree}
            </Position>
            <Dates>{endOfStudy}</Dates>
            <AboutExperience>{bio}</AboutExperience>
          </div>
        )}
      </div>
      <Logo src={cv}></Logo>
    </Wrapper>
  );
 
};
export default ResumeContent;


