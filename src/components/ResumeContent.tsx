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
  experienceContent,
  educationContent,
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
            {image && (
              <ImageContainer src={image} alt="Preview" />
            )}
          </ForImage>
        </ContentContainer>
        {experienceContent &&
          experienceContent.map((item: any, index: number) => (
            <div key={index}>
              {item.position && (
                <div>
                  <Line></Line>
                  <HeaderForExperience>
                    გამოცდილება
                  </HeaderForExperience>
                  <Position>
                    {item.position}, {item.employer}
                  </Position>
                  <Dates>
                    {[item.startDate, '-']} {item.endDate}
                  </Dates>
                  <AboutExperience>{item.experience}</AboutExperience>
                </div>
              )}
            </div>
          ))}
        {educationContent &&
          educationContent.map((item: any, index: number) => (
            <div key={index}>
              {item.school && (
                <div>
                  <Line></Line>
                  <HeaderForExperience>განათლება</HeaderForExperience>
                  <Position>
                    {[item.school, ',']} {item.degree}
                  </Position>
                  <Dates>{item.endOfStudy}</Dates>
                  <AboutExperience>{item.bio}</AboutExperience>
                </div>
              )}
            </div>
          ))}
      </div>
      <Logo src={cv}></Logo>
    </Wrapper>
  );
 
};
export default ResumeContent;


