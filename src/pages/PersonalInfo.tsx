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
import ResumeContent from '../components/ResumeContent';
import { useEffect, useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type Inputs = {
  firstname: string;
  surname: string;
  email: string;
  phone: string;
  info: string;
};

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
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = () => {
    navigate('/experience');
  };

  const handleChange = (event: any, inputName: string) => {
    switch (inputName) {
      case 'firstname':
        setName(event.target.value);
        break;
      case 'surname':
        setSurname(event.target.value);
        break;
      case 'info':
        setInfo(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  };
  const validateGeorgian = (value: string): boolean | string => {
    const pattern = /^[\u10A0-\u10FF]+$/;
    return pattern.test(value) || '';
  };
  const validateGeorgianPhone = (value: any) => {
    // const phoneRegex = /^(\+995|00995|995)?(5[0-9]{8})$/;
    const phoneRegex =
      /^(\+995\s)?(5[0-9]{2}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2})$/;
    if (!phoneRegex.test(value)) return false;
    return true;
  };
  const validateEmail = (value: string) => {
    const emailRegex = /^\w+([.-]?\w+)*@redberry.ge$/;
    if (!emailRegex.test(value)) return false;
    return true;
  };

  const hiddenFileInput = useRef<HTMLInputElement>(null as any);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChangeInput = (event: any) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  const navigate = useNavigate();


  useEffect(() => {
    return () => {
      window.localStorage.clear();
    };
  }, [navigate]);

  const clearStorage = () => {
    setName('');
    setSurname('');
    setEmail('');
    setInfo('');
    setPhone('');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Container>
        <CaretCircleLeft
          size={38}
          style={{ color: 'black' }}
          onClick={clearStorage}
        />

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
                    border: errors.firstname ? '1px solid red' : '',
                  }}
                  {...register('firstname', {
                    required: true,
                    minLength: 2,
                    validate: validateGeorgian,
                  })}
                  onChange={(event) =>
                    handleChange(event, 'firstname')
                  }
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
                    border: errors.surname ? '1px solid red' : '',
                  }}
                  {...register('surname', {
                    required: true,
                    minLength: 2,
                    validate: validateGeorgian,
                  })}
                  onChange={(event) => handleChange(event, 'surname')}
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
          </ForInputs>
          <WrapperForPhoto>
            <Label style={{ fontSize: '18px' }}>
              პირადი ფოტოს ატვირთვა
            </Label>
            <UploadPhoto onClick={handleClick}>ატვირთვა</UploadPhoto>
            <InputForPhotoUpload
              type="file"
              ref={hiddenFileInput}
              onChange={handleChangeInput}
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
                  border: errors.email ? '1px solid red' : '',
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
                  border: errors.phone ? '1px solid red' : '',
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
      <ResumeContent
        name={name}
        surname={surname}
        email={email}
        phone={phone}
        info={info}
      />
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
