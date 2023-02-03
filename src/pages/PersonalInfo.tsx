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
  Toggle,
  ForInputs,
  FormContainer,
  Input,
  Label,
  Line,
  TextArea,
  UploadPhoto,
  Warning,
  WrapperForPhoto,
} from '../styles/StylesForPages';
function PersonalInfo() {
  return (
    <div>
      <Container>
        <Link to="/">
          <CaretCircleLeft size={38} style={{ color: 'black' }} />
        </Link>
        <Content>
          <Wrapper>
            <Header>პირადი ინფო</Header>
            <PageCount>1/3</PageCount>
          </Wrapper>
          <Line></Line>
          <ForInputs>
            <FormContainer>
              <Label>სახელი</Label>
              <Input type="text" placeholder="ანზორ"></Input>
              <Warning>მინიმუმ 2 ასო, ქართული ასოები</Warning>
            </FormContainer>
            <FormContainer>
              <Label>გვარი</Label>
              <Input type="text" placeholder="მუმლაძე"></Input>
              <Warning>მინიმუმ 2 ასო, ქართული ასოები</Warning>
            </FormContainer>
          </ForInputs>
          <WrapperForPhoto>
            <Label style={{ fontSize: '18px' }}>
              პირადი ფოტოს ატვირთვა
            </Label>
            <UploadPhoto>ატვირთვა</UploadPhoto>
          </WrapperForPhoto>
          <AnotherWrapper>
            <Label>ჩემ შესახებ (არასავალდებულო)</Label>
            <TextArea placeholder="ზოგადი ინფო შენ შესახებ"></TextArea>
          </AnotherWrapper>
          <AnotherWrapper>
            <Label>ელ.ფოსტა</Label>
            <Input
              type="email"
              placeholder="anzor666@redberry.ge"
              style={{ width: '100%' }}
            ></Input>
            <Warning>უნდა მთავრდებოდეს @redberry.ge-ით</Warning>
          </AnotherWrapper>
          <AnotherWrapper>
            <Label>მობილურის ნომერი</Label>
            <Input
              type="tel"
              placeholder="+995 551 12 34 56"
              style={{ width: '100%' }}
            ></Input>
            <Warning>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </Warning>
          </AnotherWrapper>
          <WrapperForButton>
            <Link to="/experience">
              <Toggle>შემდეგი</Toggle>
            </Link>
          </WrapperForButton>
        </Content>
      </Container>
    </div>
  );
}

export default PersonalInfo;

const WrapperForButton = styled(AnotherWrapper)`
  margin-left: auto;
  margin-top: 61px;
`;
