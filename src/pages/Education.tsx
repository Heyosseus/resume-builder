import React from 'react';
import styled from 'styled-components';
import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  Header,
  PageCount,
  Wrapper,
  AnotherWrapper,
  FormContainer,
  Input,
  Label,
  Line,
  TextArea,
  WarningMessage,
  Toggle,
} from '../styles/StylesForPages';
function Education() {
  return (
    <div>
      <Container>
        <Link to="/">
          <CaretCircleLeft size={38} style={{ color: 'black' }} />
        </Link>
        <Content>
          <Wrapper>
            <Header>განათლება</Header>
            <PageCount>3/3</PageCount>
          </Wrapper>
          <Line></Line>
          <ContainerForInputs>
            <FormContainer>
              <Label>სასწავლებელი</Label>
              <Input
                type="text"
                placeholder="სასწავლებელი"
                style={{ width: '100%' }}
              ></Input>
              <WarningMessage>მინიმუმ 2 სიმბოლო</WarningMessage>
            </FormContainer>
          </ContainerForInputs>
          <ForDates>
            <AnotherWrapper>
              <Label>ხარისხი</Label>
              <Input type="" placeholder='აირჩიეთ ხარისხი'></Input>
            </AnotherWrapper>
            <AnotherWrapper>
              <Label>დამთავრების რიცხვი</Label>
              <Input type="date"></Input>
            </AnotherWrapper>
          </ForDates>
          <AnotherWrapper>
            <Label>აღწერა</Label>
            <TextArea placeholder="განათლების აღწერა" style={{height: '179px'}}></TextArea>
          </AnotherWrapper>
          <AnotherWrapper>
            <Line style={{ background: '#C1C1C1' }}></Line>
          </AnotherWrapper>
            <Button>მეტი გამოცდილების დამატება</Button>
          <ButtonContainer>
            <Link to="/experience">
              <Toggle>უკან</Toggle>
            </Link>
            <Link to="/education">
              <Toggle>შემდეგი</Toggle>
            </Link>
          </ButtonContainer>
        </Content>
      </Container>
    </div>
  );
}

export default Education;

const ContainerForInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 215px;
  width: 100%;
`;

const ForDates = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 289px;
  height: 48px;
  border-radius: 4px;
  border: none;
  background: #62a1eb;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 44px;
  :hover {
    cursor: pointer;
  }
`;
