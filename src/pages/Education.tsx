import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CaretCircleLeft, CheckCircle, Warning } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { OptionType } from "../Interfaces/ForEdu";
import { Buffer } from "buffer";
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
  Error,
  FormInput,
  Check,
} from "../styles/ForPages";
import { validateGeorgian } from "../utils/Validation";
import axios from "axios";

function Education(props: any) {
  const {
    setMessage,
    name,
    surname,
    email,
    phone,
    info,
    educationContent,
    handleAddInputForEducation,
    handleChangeForEdu,
    experienceContent,
    setContainer,
    setImageUrl,
    setStringImage,
    clearStorage,
  } = props;

  const endpoint = "https://resume.redberryinternship.ge/api/degrees";
  const url = "https://resume.redberryinternship.ge/api/cvs";

  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const id = 1;

  // Get the image data from local storage
  const storedData = localStorage.getItem("image");
  if (!storedData) {
    console.error("No image data found in local storage.");
    return null;
  }

  // Decode the Base64-encoded image data
  const base64Image = storedData;
  const type = base64Image.split(";")[0].split(":")[1];
  const binaryData = new Uint8Array(
    Buffer.from(base64Image.split(",")[1], "base64")
  );

  // Create a Blob and File object from the binary data to file type
  const imageBlob = new Blob([binaryData], { type });
  const imageFile = new File([imageBlob], "profile photo", {
    type: "image/png",
  });

  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = () => {
    const base64 = reader.result;
    setStringImage(base64);
  };

 
// costumize experience and education objects
  const experienceData = experienceContent.map((exp: any, index: number) => ({
    key: `exp_${index}`,
    position: exp.position,
    employer: exp.employer,
    start_date: exp.startDate,
    due_date: exp.endDate,
    description: exp.experience,
  }));

  const educationData = educationContent.map((edu: any, index: number) => ({
    key: `edu_${index}`,
    institute: edu.school,
    degree_id: id,
    due_date: edu.endOfStudy,
    description: edu.bio,
  }));

  const formData = {
    name: name,
    surname: surname,
    email: email,
    phone_number: phone.replace(/\s+/g, ""),
    experiences: experienceData,
    educations: educationData,
    image: imageFile,
    about_me: info,
  };

  const navigate = useNavigate()
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  const handleSubmit = () => {
    setIsButtonClicked(true);
    if (!isButtonClicked) {
      return false;
    } else {
      axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            setContainer(response.data);
            console.log(response.data)
            const objectUrl = URL.createObjectURL(imageFile);
            setImageUrl(objectUrl);
            setMessage("რეზიუმე წარმატებით გაიგზავნა 🎉");
          } else {
            console.log("რეზიუმე ვერ გაიგზავნა :(");
            setMessage("რეზიუმე ვერ გაიგზავნა :(");
          }
        })
        .catch((err) => {
          console.error(err);
        });
      navigate('/output')
    }
  };
  return (
    <div>
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
            <Header>განათლება</Header>
            <PageCount>3/3</PageCount>
          </Wrapper>
          <Line></Line>

          {educationContent.map((item: any, index: number) => (
            <div key={index}>
              <ContainerForInputs>
                <FormContainer>
                  <Label>სასწავლებელი</Label>
                  <FormInput>
                    <Input
                      type="text"
                      placeholder="სასწავლებელი"
                      name="school"
                      value={item.school}
                      style={{
                        width: "100%",
                        border:
                          item.school.length === 0 && isButtonClicked
                            ? "1px solid red"
                            : item.school
                            ? "1px solid green"
                            : "1px solid gray",
                      }}
                      onChange={handleChangeForEdu(index, "school")}
                    ></Input>
                    <Error>
                      {item.school.length === 0 &&
                        isButtonClicked &&
                        item.school && <Warning size={16} color="red" />}
                      {item.school.length >= 2 && item.school && (
                        <Check src={check} />
                      )}
                    </Error>
                  </FormInput>
                  <WarningMessage>მინიმუმ 2 სიმბოლო</WarningMessage>
                </FormContainer>
              </ContainerForInputs>
              <ForDates>
                <AnotherWrapper>
                  <Label>ხარისხი</Label>
                  <Select
                    style={{
                      border:
                        item.degree.length === 0 && isButtonClicked
                          ? "1px solid red"
                          : item.degree
                          ? "1px solid green"
                          : "1px solid gray",
                    }}
                    value={item.degree}
                    onChange={handleChangeForEdu(index, "degree")}
                  >
                    {options.map((option) => (
                      <Option key={option.id} value={option.title}>
                        {option.title}
                      </Option>
                    ))}
                  </Select>
                </AnotherWrapper>
                <AnotherWrapper>
                  <Label>დამთავრების რიცხვი</Label>
                  <Input
                    type="date"
                    name="endOfStudy"
                    value={item.endOfStudy}
                    style={{
                      border:
                        item.endOfStudy.length === 0 && isButtonClicked
                          ? "1px solid red"
                          : item.endOfStudy
                          ? "1px solid green"
                          : "1px solid gray",
                    }}
                    onChange={handleChangeForEdu(index, "endOfStudy")}
                  ></Input>
                </AnotherWrapper>
              </ForDates>
              <AnotherWrapper>
                <Label>აღწერა</Label>
                <TextArea
                  placeholder="განათლების აღწერა"
                  style={{
                    height: "179px",
                    border:
                      item.bio.length === 0 && isButtonClicked
                        ? "1px solid red"
                        : item.endOfStudy
                        ? "1px solid green"
                        : "1px solid gray",
                  }}
                  value={item.bio}
                  name="bio"
                  onChange={handleChangeForEdu(index, "bio")}
                ></TextArea>
              </AnotherWrapper>
              <AnotherWrapper>
                <Line style={{ background: "#C1C1C1" }}></Line>
              </AnotherWrapper>
              <Button onClick={handleAddInputForEducation}>
                მეტი სასწავლებლის დამატება
              </Button>
            </div>
          ))}

          <ButtonContainer>
            <Link to="/experience">
              <Toggle>უკან</Toggle>
            </Link>         
            <Toggle onClick={handleSubmit}>დასრულება</Toggle>    
          </ButtonContainer>
        </Content>
      </Container>
    </div>
  );
}

export default Education;

const ContainerForInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 215px;
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

const Select = styled.select`
  width: 371px;
  height: 48px;
  align-items: center;
  display: flex;
  outline: none;
  border: 1px solid #c1c1c1;
  padding-left: 12px;
`;

const Option = styled.option`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: black;
`;
