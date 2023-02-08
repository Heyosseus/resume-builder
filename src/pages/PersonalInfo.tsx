import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


import {
  CaretCircleLeft,
  Warning,
  CheckCircle,
} from 'phosphor-react';

import {
  validateEmail,
  validateGeorgian,
  validateGeorgianPhone,
} from '../utils/Validation';
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
  WarningMessage,
  WrapperForPhoto,
  Error,
  FormInput,
} from '../styles/ForPages';

function PersonalInfo(props: any) {
  const {
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    phone,
    setPhone,
    info,
    setInfo,
    image,
    setImage,
    setShowImage,
    handleChange,
  } = props;


  const navigate = useNavigate();
  const clearStorage = () => {
    setName('');
    setSurname('');
    setEmail('');
    setInfo('');
    setPhone('');
    setImage('');
  };

  //For image upload
  const hiddenFileInput = useRef<HTMLInputElement>(null as any);
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImage(event.target.files![0]);
  };

  const handleButtonClick = () => {
    setShowImage(true);
    hiddenFileInput.current.click();
  };

// for button that navigates to next page
const submitForm = () => {
  if (validateGeorgian(name) === false ||  validateGeorgian(surname) === false || validateEmail(email) === false || validateGeorgianPhone(phone) === false) {
    return false;
  }
  else {navigate('/experience')};
    return true;
};

  return (
    <Container>
      <Link to="/" style={{ height: '38px' }}>
        <CaretCircleLeft
          size={38}
          style={{ color: 'black' }}
          onClick={clearStorage}
        />
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
            <FormInput>
              <Input
                type="text"
                placeholder="ანზორ"
                maxLength={14}
                value={name}
                required={true}
                style={{
                  border:
                    validateGeorgian(name) === false && name 
                      ? '1px solid red'
                      : validateGeorgian(name) === true && name
                      ? '1px solid green'
                      : '1px solid gray',
                }}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'firstname')}
              ></Input>
              <Error>
                {validateGeorgian(name) === false && name && (
                  <Warning size={16} color="red" />
                )}
                {validateGeorgian(name) === true && name && (
                  <CheckCircle size={22} color="green" />
                )}
              </Error>
            </FormInput>
            <WarningMessage>
              მინიმუმ 2 ასო, ქართული ასოები
            </WarningMessage>
          </FormContainer>
          <FormContainer>
            <Label>გვარი</Label>
            <FormInput>
              <Input
                type="text"
                placeholder="მუმლაძე"
                maxLength={20}
                value={surname}
                style={{
                  border:
                    validateGeorgian(surname) === false && surname
                      ? '1px solid red'
                      : validateGeorgian(surname) === true && surname
                      ? '1px solid green'
                      : '1px solid gray',
                }}
                onChange={(event) => {
                  handleChange(event, 'surname');
                }}
              ></Input>
              <Error>
                {validateGeorgian(surname) === false && surname && (
                  <Warning size={16} color="red" />
                )}
                {validateGeorgian(surname) === true && surname && (
                  <CheckCircle size={22} color="green" />
                )}
              </Error>
            </FormInput>
            <WarningMessage>
              მინიმუმ 2 ასო, ქართული ასოები
            </WarningMessage>
          </FormContainer>
        </ForInputs>
        <WrapperForPhoto>
          <Label style={{ fontSize: '18px' }}>
            პირადი ფოტოს ატვირთვა
          </Label>
          <UploadPhoto onClick={handleButtonClick}>
            ატვირთვა
          </UploadPhoto>
          <InputForPhotoUpload
            type="file"
            ref={hiddenFileInput}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </WrapperForPhoto>
        <AnotherWrapper>
          <Label>ჩემ შესახებ (არასავალდებულო)</Label>
          <TextArea
            placeholder="ზოგადი ინფო შენ შესახებ"
            name="info"
            value={info}
            onChange={(event) => handleChange(event, 'info')}
          ></TextArea>
        </AnotherWrapper>
        <AnotherWrapper>
          <Label>ელ.ფოსტა</Label>
          <FormInput>
            <Input
              type="email"
              placeholder="anzor666@redberry.ge"
              value={email}
              style={{
                width: '100%',
                border:
                  validateEmail(email) === false && email
                    ? '1px solid red'
                    : validateEmail(email) === true && email
                    ? '1px solid green'
                    : '1px solid gray',
              }}
              onChange={(event) => handleChange(event, 'email')}
            ></Input>
            <Error>
              {validateEmail(email) === false && email && (
                <Warning size={16} color="red" />
              )}
              {validateEmail(email) === true && email && (
                <CheckCircle size={22} color="green" />
              )}
            </Error>
          </FormInput>
          <WarningMessage>
            უნდა მთავრდებოდეს @redberry.ge-ით
          </WarningMessage>
        </AnotherWrapper>
        <AnotherWrapper>
          <Label>მობილურის ნომერი</Label>
          <FormInput>
            <Input
              type="tel"
              placeholder="+995 551 12 34 56"
              value={phone}
              style={{
                width: '100%',
                border:
                  validateGeorgianPhone(phone) === false && phone
                    ? '1px solid red'
                    : validateGeorgianPhone(phone) === true && phone
                    ? '1px solid green'
                    : '1px solid gray',
              }}
              onChange={(event) => handleChange(event, 'phone')}
            ></Input>
            <Error>
              {validateGeorgianPhone(phone) === false && phone && (
                <Warning size={16} color="red" />
              )}
              {validateGeorgianPhone(phone) === true && phone && (
                <CheckCircle size={22} color="green" />
              )}
            </Error>
          </FormInput>
          <WarningMessage>
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </WarningMessage>
        </AnotherWrapper>
        <WrapperForButton>
          <Toggle onClick={submitForm}>შემდეგი</Toggle>
        </WrapperForButton>
      </Content>
    </Container>
  );
}

export default PersonalInfo;

const WrapperForButton = styled(AnotherWrapper)`
  margin-left: auto;
  margin-top: 61px;
`;


const InputForPhotoUpload = styled.input``;
