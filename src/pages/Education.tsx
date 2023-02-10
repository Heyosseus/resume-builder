import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  CaretCircleLeft,
  CheckCircle,
  Warning,
} from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import { OptionType } from '../Interfaces/ForEdu';
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
} from '../styles/ForPages';
import { validateGeorgian } from '../utils/Validation';

function Education(props: any) {
  const {
    position,
    employer,
    handleChange,
    setStartDate,
    setEndDate,
    setExperience,
    handleAddInput,
    setName,
    setSurname,
    setEmail,
    setPhone,
    setInfo,
    setImage,
    setPosition,
    setEmployer,
    school,
    setSchool,
    degree,
    setDegree,
    endOfStudy,
    setEndOfStudy,
    bio,
    setBio,
    display,
    setDisplay,
    message,
    setMessage,
    image,
    name,
    surname,
    email,
    phone,
    info,
    experience,
    startDate,
    endDate,
    educationContent,
    handleAddInputForEducation,
    handleChangeForEdu,
    experienceContent,
  } = props;

  const navigate = useNavigate();
  const clearStorageForEdu = () => {
    localStorage.clear();
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
    setSchool('');
    setDegree('');
    setEndOfStudy('');
    setBio('');
    setMessage('');
    navigate('/');
  };

  const endpoint = 'https://resume.redberryinternship.ge/api/degrees';
  const url = 'https://resume.redberryinternship.ge/api/cvs';

  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
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
  // const id = options.map((option) => option.id);
  const [degreeId, setDegreeId] = useState(id);

  const storedImage = JSON.parse(localStorage.getItem('image')!);
  const imageFile = new File([storedImage], 'profile photo', {
    type: 'image/png',
  });

  const data = {
    name: name,
    surname: surname,
    email: email,
    phone_number: phone.replace(/\s+/g, ''),
    experiences: [
      {
        position: experienceContent[0].position,
        employer: experienceContent[0].employer,
        start_date: experienceContent[0].startDate,
        due_date: experienceContent[0].endDate,
        description: experienceContent[0].experience,
      },
    ],
    educations: [
      {
        institute: educationContent[0].school,
        degree_id: id,
        due_date: educationContent[0].endOfStudy,
        description: educationContent[0].bio,
      },
    ],
    image: imageFile,
    about_me: info,
  };

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append('data', JSON.stringify(data));

    const response = await fetch(
      'https://resume.redberryinternship.ge/api/cvs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: formData,
      }
    );
    console.log(data);
    console.log(imageFile)

    if (response.status === 201) {
      setMessage('რეზიუმე წარმატებით გაიგზავნა  🎉');
      console.log('რეზიუმე წარმატებით გაიგზავნა', response);
    } else {
      setMessage('რეზიუმე ვერ გაიგზავნა :(');
      console.error(response);
    }
  };

  return (
    <div>
      <Container>
        <Link to="/" style={{ height: '38px' }}>
          <CaretCircleLeft
            size={38}
            style={{ color: 'black' }}
            onClick={clearStorageForEdu}
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
                        width: '100%',
                        border:
                          validateGeorgian(item.school) === false &&
                          item.school
                            ? '1px solid red'
                            : validateGeorgian(item.school) ===
                                true && item.school
                            ? '1px solid green'
                            : '1px solid gray',
                      }}
                      onChange={handleChangeForEdu(index, 'school')}
                    ></Input>
                    <Error>
                      {validateGeorgian(item.school) === false &&
                        item.school && (
                          <Warning size={16} color="red" />
                        )}
                      {validateGeorgian(item.school) === true &&
                        item.school && (
                          <CheckCircle size={22} color="green" />
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
                      border: item.degree
                        ? '1px solid green'
                        : '1px solid gray',
                    }}
                    value={item.degree}
                    onChange={handleChangeForEdu(index, 'degree')}
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
                      border: item.endOfStudy
                        ? '1px solid green'
                        : '1px solid gray',
                    }}
                    onChange={handleChangeForEdu(index, 'endOfStudy')}
                  ></Input>
                </AnotherWrapper>
              </ForDates>
              <AnotherWrapper>
                <Label>აღწერა</Label>
                <TextArea
                  placeholder="განათლების აღწერა"
                  style={{
                    height: '179px',
                    border: item.bio
                      ? '1px solid green'
                      : '1px solid gray',
                  }}
                  value={item.bio}
                  name="bio"
                  onChange={handleChangeForEdu(index, 'bio')}
                ></TextArea>
              </AnotherWrapper>
              <AnotherWrapper>
                <Line style={{ background: '#C1C1C1' }}></Line>
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
            <Link to="/finish">
              <Toggle onClick={handleSubmit}>დასრულება</Toggle>
            </Link>
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
