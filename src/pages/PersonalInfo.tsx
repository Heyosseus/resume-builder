import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import check from '../assets/correct.png'
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
  Check
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
    showImage,
    clearStorage,
  } = props;


  const navigate = useNavigate();


  //For image upload
  const hiddenFileInput = useRef<HTMLInputElement>(null as any);
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImage(event.target.files![0]);
    const blob = new Blob([image!], { type: image!.type });
    localStorage.setItem('image', JSON.stringify(blob));
  };

  const handleButtonClick = () => {
    setShowImage(true);
    hiddenFileInput.current.click();
  };

  const formData = new FormData();
  formData.append('image', image);

  const [isError, setIsError] = useState(true);
  // for button that navigates to next page
  const submitForm = () => {
    if (
      validateGeorgian(name) === false ||
      validateGeorgian(surname) === false ||
      validateEmail(email) === false ||
      validateGeorgianPhone(phone) === false ||
      showImage === false
    ) {
      return false;
    } else {
      navigate('/experience');
    }
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
          <Header>?????????????????? ????????????</Header>
          <PageCount>1/3</PageCount>
        </Wrapper>
        <Line></Line>
        <ForInputs>
          <FormContainer>
            <Label>??????????????????</Label>
            <FormInput onSubmit={submitForm}>
              <Input
                type="text"
                placeholder="???????????????"
                maxLength={14}
                required={true}
                value={name}
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
                ) => {
                  setName(event.target.value);
                }}
              ></Input>
              <Error>
                {validateGeorgian(name) === false && name && (
                  <Warning size={16} color="red" />
                )}
                {validateGeorgian(name) === true && name && (
                  <Check src={check} />
                )}
              </Error>
            </FormInput>
            <WarningMessage>
              ????????????????????? 2 ?????????, ????????????????????? ??????????????????
            </WarningMessage>
          </FormContainer>
          <FormContainer>
            <Label>???????????????</Label>
            <FormInput>
              <Input
                type="text"
                placeholder="?????????????????????"
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
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  setSurname(event.target.value);
                }}
              ></Input>
              <Error>
                {validateGeorgian(surname) === false && surname && (
                  <Warning size={16} color="red" />
                )}
                {validateGeorgian(surname) === true && surname && (
                  <Check src={check} />
                )}
              </Error>
            </FormInput>
            <WarningMessage>
              ????????????????????? 2 ?????????, ????????????????????? ??????????????????
            </WarningMessage>
          </FormContainer>
        </ForInputs>
        <WrapperForPhoto>
          <Label
            style={{
              fontSize: '18px',
              color: image ? 'black' : !image ? '' : 'red',
            }}
          >
            ?????????????????? ??????????????? ????????????????????????
          </Label>
          <UploadPhoto onClick={handleButtonClick}>
            ????????????????????????
          </UploadPhoto>
          <InputForPhotoUpload
            type="file"
            ref={hiddenFileInput}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </WrapperForPhoto>
        <AnotherWrapper>
          <Label>????????? ????????????????????? (??????????????????????????????????????????)</Label>
          <TextArea
            placeholder="?????????????????? ???????????? ????????? ?????????????????????"
            name="info"
            value={info}
            style={{
              border: info ? '1px solid green' : '1px solid gray',
            }}
            onChange={(
              event: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
              setInfo(event.target.value);
            }}
          ></TextArea>
        </AnotherWrapper>
        <AnotherWrapper>
          <Label>??????.???????????????</Label>
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
              onChange={(
                event: React.ChangeEvent<HTMLInputElement>
              ) => {
                setEmail(event.target.value);
              }}
            ></Input>
            <Error>
              {validateEmail(email) === false && email && (
                <Warning size={16} color="red" />
              )}
              {validateEmail(email) === true && email && (
                <Check src={check} />
              )}
            </Error>
          </FormInput>
          <WarningMessage>
            ???????????? ???????????????????????????????????? @redberry.ge-??????
          </WarningMessage>
        </AnotherWrapper>
        <AnotherWrapper>
          <Label>??????????????????????????? ??????????????????</Label>
          <FormInput>
            <StyledMaskedInput
              type="tel"
              placeholder="+995 551 12 34 56"
              mask={[
                /\+/,
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
              ]}
              guide={false}
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
              onChange={(
                event: React.ChangeEvent<HTMLInputElement>
              ) => {
                setPhone(event.target.value);
              }}
            ></StyledMaskedInput>
            <Error>
              {validateGeorgianPhone(phone) === false && phone && (
                <Warning size={16} color="red" />
              )}
              {validateGeorgianPhone(phone) === true && phone && (
                <Check src={check} />
              )}
            </Error>
          </FormInput>
          <WarningMessage>
            ???????????? ?????????????????????????????????????????? ????????????????????? ??????????????????????????? ?????????????????? ?????????????????????
          </WarningMessage>
        </AnotherWrapper>
        <WrapperForButton>
          <Toggle onClick={submitForm}>?????????????????????</Toggle>
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

const StyledMaskedInput = styled(MaskedInput)`
  width: 371px;
  height: 48px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bcbcbc;
  border: none;
  background: white;
  padding: 13px 15px;
  font-size: 16px;

  ::placeholder {
    font-weight: 400;
    line-height: 21px;
    color: black;
    opacity: 60%;
  }
`;

