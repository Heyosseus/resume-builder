import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CaretCircleLeft,
  CheckCircle,
  Warning,
} from 'phosphor-react';
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
  Error,
  FormInput,
} from '../styles/ForPages';
import { validateGeorgian } from '../utils/Validation';
import { InputFields } from '../Interfaces/ForApp';

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
    start,
    end,
    experienceContent,
    setName,
    setSurname,
    setEmail,
    setPhone,
    setInfo,
    setImage,
    setPosition,
    setEmployer,
    startDate,
    endDate,
  } = props;

  // when user navigates to the home page, local storage would be cleared
  const navigate = useNavigate();

  const clearStorageForExp = () => {
    localStorage.clear();
    setStartDate('');
    setEndDate('');
    setPosition('');
    setName('');
    setSurname('');
    setImage('')
    setEmail('');
    setPhone('');
    setInfo('');
    setEmployer('');
    setExperience('');
    navigate('/');
  };

  const submitForm = () => {
    if (
      validateGeorgian(position) === false ||
      validateGeorgian(employer) === false
    ) {
      return false;
    } else {
      navigate('/education');
    }
    return true;
  };


  return (
    <ForFlex>
      <Container>
        <Link to="/" style={{ height: '38px' }}>
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

          {experienceContent.map((index: any) => (
            <div key={index} >
              <ContainerForInputs>
                <FormContainer>
                  <Label>თანამდებობა</Label>
                  <FormInput>
                    <Input
                      type="text"
                      placeholder="დეველოპერი, დიზაინერი, ა.შ"
                      maxLength={44}
                      value={position}
                      style={{
                        width: '100%',
                        border:
                          validateGeorgian(position) === false &&
                          position
                            ? '1px solid red'
                            : validateGeorgian(position) === true &&
                              position
                            ? '1px solid green'
                            : '1px solid gray',
                      }}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => handleChange(event, 'position')}
                    ></Input>
                    <Error>
                      {validateGeorgian(position) === false &&
                        position && <Warning size={16} color="red" />}
                      {validateGeorgian(position) === true &&
                        position && (
                          <CheckCircle size={22} color="green" />
                        )}
                    </Error>
                  </FormInput>
                  <WarningMessage>მინიმუმ 2 სიმბოლო</WarningMessage>
                </FormContainer>
                <FormContainer>
                  <Label>დამსაქმებელი</Label>
                  <FormInput>
                    <Input
                      type="text"
                      placeholder="დამსაქმებელი"
                      value={employer}
                      style={{
                        width: '100%',
                        border:
                          validateGeorgian(employer) === false &&
                          employer
                            ? '1px solid red'
                            : validateGeorgian(employer) === true &&
                              employer
                            ? '1px solid green'
                            : '1px solid gray',
                      }}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => handleChange(event, 'employer')}
                    ></Input>
                    <Error>
                      {validateGeorgian(employer) === false &&
                        employer && <Warning size={16} color="red" />}
                      {validateGeorgian(employer) === true &&
                        employer && (
                          <CheckCircle size={22} color="green" />
                        )}
                    </Error>
                  </FormInput>
                  <WarningMessage>
                    მინიმუმ 2 ასო სიმბოლო
                  </WarningMessage>
                </FormContainer>
              </ContainerForInputs>
              <ForDates>
                <AnotherWrapper>
                  <Label>დაწყების რიცხვი</Label>
                  <Input
                    type="date"
                    name={start}
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
                  onChange={(event) =>
                    handleChange(event, 'experience')
                  }
                ></TextArea>
              </AnotherWrapper>
              <AnotherWrapper>
                <Line style={{ background: '#C1C1C1' }}></Line>
              </AnotherWrapper>
              <Button onClick={handleAddInput}>
                მეტი გამოცდილების დამატება
              </Button>
            </div>
          ))}
          <ButtonContainer>
            <Link to="/personal">
              <Toggle>უკან</Toggle>
            </Link>
            <Link to="/education">
              <Toggle onClick={submitForm}>შემდეგი</Toggle>
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
