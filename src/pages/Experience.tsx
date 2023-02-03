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
  Warning,
  Toggle,
} from '../styles/StylesForPages';
function Experience() {
  return (
    <div>
      <Container>
        <Link to="/">
          <CaretCircleLeft size={38} style={{ color: 'black' }} />
        </Link>
        <Content>
          <Wrapper>
            <Header>გამოცდილება</Header>
            <PageCount>2/3</PageCount>
          </Wrapper>
          <Line></Line>
          <ContainerForInputs>
            <FormContainer>
              <Label>თანამდებობა</Label>
              <Input
                type="text"
                placeholder="დეველოპერი, დიზაინერი, ა.შ"
                style={{ width: '100%' }}
              ></Input>
              <Warning>მინიმუმ 2 სიმბოლო</Warning>
            </FormContainer>
            <FormContainer>
              <Label>დამსაქმებელი</Label>
              <Input
                type="text"
                placeholder="დამსაქმებელი"
                style={{ width: '100%' }}
              ></Input>
              <Warning>მინიმუმ 2 ასო სიმბოლო</Warning>
            </FormContainer>
          </ContainerForInputs>
          <ForDates>
            <AnotherWrapper>
              <Label>დაწყების რიცხვი</Label>
              <Input type="date"></Input>
            </AnotherWrapper>
            <AnotherWrapper>
              <Label>დამთავრების რიცხვი</Label>
              <Input type="date"></Input>
            </AnotherWrapper>
          </ForDates>
          <AnotherWrapper>
            <Label>აღწერა</Label>
            <TextArea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></TextArea>
          </AnotherWrapper>
          <AnotherWrapper>
            <Line style={{ background: '#C1C1C1' }}></Line>
            <Button>მეტი გამოცდილების დამატება</Button>
          </AnotherWrapper>
          <ButtonContainer>
            <Link to="/personal">
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

export default Experience;

const ContainerForInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
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
