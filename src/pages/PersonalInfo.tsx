import React, {useState} from "react";
import styled from "styled-components";
import { CaretCircleLeft, Warning, CheckCircle } from "phosphor-react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
} from "../styles/StylesForPages";
import ResumeContent from "../components/ResumeContent";

type Inputs = {
  firstname: string;
  surname: string;
  email: string;
  phone: string;
};
function PersonalInfo() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/experience");
  };
 

  const handleChange = (event: any, inputName: string) => {
    switch (inputName) {
      case "firstname":
        setName(event.target.value);
        break;
      case "surname":
        setSurname(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  };
  function validateGeorgian(value: string): boolean | string {
    const pattern = /^[\u10A0-\u10FF]+$/;
    return pattern.test(value) || "";
  }
   const validateGeorgianPhone = (value: string) => {
     const phoneRegex = /^(\+995|00995|995)?(5[0-9]{8})$/;
     if (!phoneRegex.test(value)) return false;
     return true;
  };
  const validateEmail = (value: string) => {
    const emailRegex = /^\w+([.-]?\w+)*@redberry.ge$/;
    if (!emailRegex.test(value)) return false;
    return true;
  };

  return (
    <div style={{ display: "flex" }}>
      <Container>
        <Link to="/">
          <CaretCircleLeft size={38} style={{ color: "black" }} />
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
                  border: errors.firstname ? "1px solid red" : "",
                }}
                {...register("firstname", {
                  required: true,
                  minLength: 2,
                  validate: validateGeorgian,
                })}
                onChange={(event) => handleChange(event, "firstname")}
              ></Input>
              <WarningMessage>მინიმუმ 2 ასო, ქართული ასოები</WarningMessage>
            </FormContainer>
            <FormContainer>
              <Label>გვარი</Label>
              <Input
                type="text"
                placeholder="მუმლაძე"
                style={{
                  border: errors.surname ? "1px solid red" : "",
                }}
                {...register("surname", {
                  required: true,
                  minLength: 2,
                  validate: validateGeorgian,
                })}
                onChange={(event) => handleChange(event, "surname")}
              ></Input>
              <WarningMessage>მინიმუმ 2 ასო, ქართული ასოები</WarningMessage>
            </FormContainer>
          </ForInputs>
          <WrapperForPhoto>
            <Label style={{ fontSize: "18px" }}>პირადი ფოტოს ატვირთვა</Label>
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
              style={{
                width: "100%",
                border: errors.email ? "1px solid red" : "",
              }}
              {...register("email", {
                required: true,
                minLength: 2,
                validate: validateEmail,
              })}
              onChange={(event) => handleChange(event, "email")}
            ></Input>
            <WarningMessage>უნდა მთავრდებოდეს @redberry.ge-ით</WarningMessage>
          </AnotherWrapper>
          <AnotherWrapper>
            <Label>მობილურის ნომერი</Label>
            <Input
              type="tel"
              placeholder="+995 551 12 34 56"
              style={{
                width: "100%",
                border: errors.phone ? "1px solid red" : "",
              }}
              {...register("phone", {
                required: true,
                validate: validateGeorgianPhone,
              })}
              onChange={(event) => handleChange(event, "phone")}
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
      <ResumeContent
        name={name}
        surname={surname}
        email={email}
        phone={phone}
      />
    </div>
  );
}

export default PersonalInfo;

const WrapperForButton = styled(AnotherWrapper)`
  margin-left: auto;
  margin-top: 61px;
`;

