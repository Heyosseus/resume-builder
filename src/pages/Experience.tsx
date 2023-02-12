import React, { useState } from "react";
import styled from "styled-components";
import { CaretCircleLeft, CheckCircle, Warning } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import check from "../assets/correct.png";
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
  Check,
} from "../styles/ForPages";

function Experience(props: any) {
  const {
    handleAddInput,
    experienceContent,
    handleChangeForExp,
    clearStorage,
  } = props;

  // when user navigates to the home page, local storage would be cleared
  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const submitForm = () => {
    setIsButtonClicked(true);
    if (!isButtonClicked) {
      return null;
    } else {
      navigate("/education");
    }
  };

  return (
    <ForFlex>
      <Container>
        <Link to="/" style={{ height: "38px" }}>
          <CaretCircleLeft
            size={38}
            style={{ color: "black" }}
            onClick={clearStorage}
          />
        </Link>
        <Content>
          <Wrapper>
            <Header>გამოცდილება</Header>
            <PageCount>2/3</PageCount>
          </Wrapper>
          <Line></Line>

          {experienceContent.map((item: any, index: number) => (
            <div key={index}>
              <ContainerForInputs>
                <FormContainer>
                  <Label>თანამდებობა</Label>
                  <FormInput>
                    <Input
                      type="text"
                      placeholder="დეველოპერი, დიზაინერი, ა.შ"
                      maxLength={44}
                      name="position"
                      value={item.position}
                      style={{
                        width: "100%",
                        border:
                          item.position.length === 0 && isButtonClicked
                            ? "1px solid red"
                            : item.position.length >= 2
                            ? "1px solid green"
                            : "1px solid gray",
                      }}
                      onChange={handleChangeForExp(index, "position")}
                    ></Input>
                    <Error>
                      {item.position.length === 0 && isButtonClicked && (
                        <Warning size={16} color="red" />
                      )}
                      {item.position.length >= 2 && item.position && (
                        <Check src={check} />
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
                      value={item.employer}
                      style={{
                        width: "100%",
                        border:
                          item.employer.length === 0 && isButtonClicked
                            ? "1px solid red"
                            : item.employer
                            ? "1px solid green"
                            : "1px solid gray",
                      }}
                      // onBlur={() => setStyle({  isFocused: false })}
                      onChange={handleChangeForExp(index, "employer")}
                    ></Input>
                    <Error>
                      {item.employer.length === 0 && isButtonClicked && (
                        <Warning size={16} color="red" />
                      )}
                      {item.employer.length >= 2 && item.employer && (
                        <Check src={check} />
                      )}
                    </Error>
                  </FormInput>
                  <WarningMessage>მინიმუმ 2 ასო სიმბოლო</WarningMessage>
                </FormContainer>
              </ContainerForInputs>
              <ForDates>
                <AnotherWrapper>
                  <Label>დაწყების რიცხვი</Label>
                  <Input
                    type="date"
                    name="start"
                    style={{
                      border:
                        item.startDate.length === 0 && isButtonClicked
                          ? "1px solid red"
                          : item.startDate.length >= 2
                          ? "1px solid green"
                          : "1px solid gray",
                    }}
                    value={item.startDate}
                    onChange={handleChangeForExp(index, "startDate")}
                  ></Input>
                </AnotherWrapper>
                <AnotherWrapper>
                  <Label>დამთავრების რიცხვი</Label>
                  <Input
                    type="date"
                    name="end"
                    style={{
                      border:
                        item.endDate.length === 0 && isButtonClicked
                          ? "1px solid red"
                          : item.endDate.length >= 2
                          ? "1px solid green"
                          : "1px solid gray",
                    }}
                    value={item.endDate}
                    onChange={handleChangeForExp(index, "endDate")}
                  ></Input>
                </AnotherWrapper>
              </ForDates>
              <AnotherWrapper>
                <Label>აღწერა</Label>
                <TextArea
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  name="experience"
                  style={{
                    border: item.experience
                      ? "1px solid green"
                      : "1px solid gray",
                  }}
                  value={item.experience}
                  onChange={handleChangeForExp(index, "experience")}
                ></TextArea>
              </AnotherWrapper>
              <AnotherWrapper>
                <Line style={{ background: "#C1C1C1" }}></Line>
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
            {/* <Link to="/education"> */}
            <Toggle onClick={submitForm}>შემდეგი</Toggle>
            {/* </Link> */}
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
