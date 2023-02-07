import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { InputsType } from '../Interfaces/ForPersonal';

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
  ForFlex,
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

  //for react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();

  const navigate = useNavigate();
  const clearStorage = () => {
    setName('');
    setSurname('');
    setEmail('');
    setInfo('');
    setPhone('');
    setImage('');
  };

  const onSubmit = () => {
    navigate('/experience');
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

  return (
    <div>
      <Container>
        <Link to="/">
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
                  style={{
                    border: errors.firstname
                      ? '1px solid red'
                      : !errors.firstname
                      ? '1px solid gray'
                      : '1px solid green',
                  }}
                  {...register('firstname', {
                    required: true,
                    minLength: 2,
                    validate: validateGeorgian,
                  })}
                  onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                  ) => handleChange(event, 'firstname')}
                ></Input>
                <Error>
                  {errors.firstname && (
                    <Warning size={16} color="red" />
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
                    border: errors.surname
                      ? '1px solid red'
                      : '1px solid gray',
                  }}
                  {...register('surname', {
                    required: true,
                    minLength: 2,
                    validate: validateGeorgian,
                  })}
                  onChange={(event) => {
                    handleChange(event, 'surname');
                    if (!errors.surname) {
                      setSurname(event.target.value);
                    }
                  }}
                ></Input>
                <Error>
                  {errors.surname && (
                    <Warning size={16} color="red" />
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
                  border: errors.email
                    ? '1px solid red'
                    : !errors.firstname
                    ? '1px solid green'
                    : '',
                }}
                {...register('email', {
                  required: true,
                  minLength: 2,
                  validate: validateEmail,
                })}
                onChange={(event) => handleChange(event, 'email')}
              ></Input>
              <Error>
                {errors.email && <Warning size={16} color="red" />}
                {!errors.email && (
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
                  border: errors.phone
                    ? '1px solid red'
                    : !errors.firstname
                    ? '1px solid green'
                    : '',
                }}
                {...register('phone', {
                  required: true,
                  minLength: 2,
                  validate: validateGeorgianPhone,
                })}
                onChange={(event) => handleChange(event, 'phone')}
              ></Input>
              <Error>
                {errors.phone && <Warning size={16} color="red" />}
                {/* {!errors.phone && <CheckCircle size={22} color="green" />} */}
              </Error>
            </FormInput>
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

const FormInput = styled.form`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row-reverse;
`;

const Error = styled.div`
  margin-right: 12px;
  position: absolute;
`;

const InputForPhotoUpload = styled.input``;
