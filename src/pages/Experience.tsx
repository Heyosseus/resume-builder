import React from 'react';
import styled from 'styled-components';
import { CaretCircleLeft } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
  ForFlex,
} from '../styles/ForPages';

function Experience(props: any) {
  const {
    position,
    employer,
    experience,
    handleChange,
    setStartDate,
    setEndDate,
    setExperience,
    handleAddInput,
    inputs,
    setName,
    setSurname,
    setEmail,
    setPhone,
    setInfo,
    setImage,
    setPosition,
    setEmployer,
  } = props;

  // when user navigates to the home page, local storage would be cleared
  const navigate = useNavigate();

  const clearStorageForExp = () => {
    setStartDate('');
    setEndDate('');
    setPosition('');
    setName('');
    setSurname('');
    setEmail('');
    setPhone('');
    setInfo('');
    setEmployer('');
    setExperience('');
    navigate('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ForFlex>
      <Container>
        <Link to="/">
          <CaretCircleLeft
            size={38}
            style={{ color: 'black' }}
            onClick={clearStorageForExp}
          />
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
                maxLength={44}
                value={position}
                style={{
                  width: '100%',
                  border: errors.position
                    ? '1px solid red'
                    : !errors.position
                    ? '1px solid gray'
                    : '1px solid green',
                }}
                {...register('firstname', {
                  required: true,
                  minLength: 2,
                })}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'position')}
              ></Input>
              <WarningMessage>მინიმუმ 2 სიმბოლო</WarningMessage>
            </FormContainer>
            <FormContainer>
              <Label>დამსაქმებელი</Label>
              <Input
                type="text"
                placeholder="დამსაქმებელი"
                value={employer}
                style={{
                  width: '100%',
                  border: errors.employer
                    ? '1px solid red'
                    : !errors.employer
                    ? '1px solid gray'
                    : '1px solid green',
                }}
                {...register('employer', {
                  required: true,
                  minLength: 2,
                })}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'employer')}
              ></Input>
              <WarningMessage>მინიმუმ 2 ასო სიმბოლო</WarningMessage>
            </FormContainer>
          </ContainerForInputs>
          <ForDates>
            <AnotherWrapper>
              <Label>დაწყების რიცხვი</Label>
              <Input
                type="date"
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'start')}
              ></Input>
            </AnotherWrapper>
            <AnotherWrapper>
              <Label>დამთავრების რიცხვი</Label>
              <Input
                type="date"
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'end')}
              ></Input>
            </AnotherWrapper>
          </ForDates>
          <AnotherWrapper>
            <Label>აღწერა</Label>
            <TextArea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              value={experience}
              onChange={(event) => handleChange(event, 'experience')}
            ></TextArea>
          </AnotherWrapper>
          <AnotherWrapper>
            <Line style={{ background: '#C1C1C1' }}></Line>
            <Button onClick={handleAddInput}>
              მეტი გამოცდილების დამატება
            </Button>
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
    </ForFlex>
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
