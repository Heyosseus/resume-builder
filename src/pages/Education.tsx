import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CaretCircleLeft } from 'phosphor-react';
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
} from '../styles/ForPages';

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
  } = props;

  const navigate = useNavigate();

  const clearStorageForEdu = () => {
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
    navigate('/');
  };

  const [names, setNames] = useState('');

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
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const data = {
    name: name,
    surname: surname,
    email: email,
    phone_number: phone,
    experiences: [
      {
        position: position,
        employer: employer,
        start_date: startDate,
        due_date: endDate,
        description: experience,
      },
    ],
    educations: [
      {
        institute: school,
        degree: degree,
        due_date: endOfStudy,
        description: bio,
      },
    ],
    image: image,
    about_me: info,
  };
  const handleSubmit = async () => {
    const response = await fetch(
      'https://resume.redberryinternship.ge/api/cvs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status === 201) {
      setMessage('რეზიუმე წარმატებით გაიგზავნა  🎉');
      console.log('რეზიუმე წარმატებით გაიგზავნა', response);
    } else {
      setMessage('რეზიუმე ვერ გაიგზავნა');
      console.error(response);
    }
  };

  return (
    <div>
      <Container>
        <Link to="/">
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
          <ContainerForInputs>
            <FormContainer>
              <Label>სასწავლებელი</Label>
              <Input
                type="text"
                placeholder="სასწავლებელი"
                value={school}
                style={{ width: '100%' }}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'school')}
              ></Input>
              <WarningMessage>მინიმუმ 2 სიმბოლო</WarningMessage>
            </FormContainer>
          </ContainerForInputs>
          <ForDates>
            <AnotherWrapper>
              <Label>ხარისხი</Label>
              <Select
                onChange={(
                  event: React.ChangeEvent<HTMLSelectElement>
                ) => handleChange(event, 'degree')}
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
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => handleChange(event, 'endOfStudy')}
              ></Input>
            </AnotherWrapper>
          </ForDates>
          <AnotherWrapper>
            <Label>აღწერა</Label>
            <TextArea
              placeholder="განათლების აღწერა"
              style={{ height: '179px' }}
              value={bio}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ) => handleChange(event, 'bio')}
            ></TextArea>
          </AnotherWrapper>
          <AnotherWrapper>
            <Line style={{ background: '#C1C1C1' }}></Line>
          </AnotherWrapper>
          <Button>მეტი გამოცდილების დამატება</Button>
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
