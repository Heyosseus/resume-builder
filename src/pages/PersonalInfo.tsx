import React from 'react';
import styled from 'styled-components';
import {
  CaretCircleLeft,
  Warning,
  CheckCircle,
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
} from '../styles/StylesForPages';

type Inputs = {
  firstname: string;
  surname: string;
};
function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/experience');
  };

  function validateGeorgian(value: string) : boolean | string{
    const pattern = /^[\u10A0-\u10FF]+$/;
    return (
      pattern.test(value) ||
      ''
    );
  }
  
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
              <Input
                type="text"
                placeholder="ანზორ"
                maxLength={28}
                style={{
                  border: errors.firstname ? '1px solid red' : '',
                }}
                {...register('firstname', {
                  required: true,
                  minLength: 2,
                  validate: validateGeorgian,
                })}
              ></Input>
              <WarningMessage>
                მინიმუმ 2 ასო, ქართული ასოები
              </WarningMessage>
            </FormContainer>
            <FormContainer>
              <Label>გვარი</Label>
              <Input
                type="text"
                placeholder="მუმლაძე"
                style={{
                  border: errors.surname
                    ? '1px solid red'
                    : '',
                }}
                {...register('surname', {
                  required: true,
                  minLength: 2,
                  validate: validateGeorgian,
                })}
              ></Input>
              <WarningMessage>
                მინიმუმ 2 ასო, ქართული ასოები
              </WarningMessage>
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
            <WarningMessage>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </WarningMessage>
          </AnotherWrapper>
          <AnotherWrapper>
            <Label>მობილურის ნომერი</Label>
            <Input
              type="tel"
              placeholder="+995 551 12 34 56"
              style={{ width: '100%' }}
            ></Input>
            <WarningMessage>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </WarningMessage>
          </AnotherWrapper>
          <WrapperForButton>
            <Toggle onClick={handleSubmit(onSubmit)}>შემდეგი</Toggle>
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
