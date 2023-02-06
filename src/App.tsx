import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import cvLogo from './assets/LOGO-cv.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import ResumeContent from "./components/ResumeContent";
import { InputContext } from "./contexts/InputContext";
import styled from "styled-components";
import Output from "./components/Output";

interface InputFields {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  experience: string;
}
function App() {
  //for personal info
  const [name, setName] = useLocalStorage("name", "");
  const [surname, setSurname] = useLocalStorage("surname", "");
  const [info, setInfo] = useLocalStorage("info", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [image, setImage] = useLocalStorage("image", "");
  const [showImage, setShowImage] = useLocalStorage("display", false);
  //for experience
  const [position, setPosition] = useLocalStorage("position", "");
  const [employer, setEmployer] = useLocalStorage("employer", "");
  const [startDate, setStartDate] = useLocalStorage("start", "");
  const [endDate, setEndDate] = useLocalStorage("end", "");
  const [experience, setExperience] = useLocalStorage("experience", "");
  //for education
  const [school, setSchool] = useLocalStorage("school", "");
  const [degree, setDegree] = useLocalStorage("degree", "");
  const [endOfStudy, setEndOfStudy] = useLocalStorage("endOfStudy", "");
  const [bio, setBio] = useLocalStorage("bio", "");
  const [display, setDisplay] = useLocalStorage("display", false);
  // for input fields
  const handleChange = (event: any, inputName: string) => {
    switch (inputName) {
      case "firstname":
        setName(event.target.value);
        break;
      case "surname":
        setSurname(event.target.value);
        break;
      case "info":
        setInfo(event.target.value);
        break;
      case "image":
        setImage(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "position":
        setPosition(event.target.value);
        break;
      case "employer":
        setEmployer(event.target.value);
        break;
      case "start":
        setStartDate(event.target.value);
        break;
      case "end":
        setEndDate(event.target.value);
        break;
      case "experience":
        setExperience(event.target.value);
        break;
      case "school":
        setSchool(event.target.value);
        break;
      case "degree":
        setDegree(event.target.value);
        break;
      case "endOfStudy":
        setEndOfStudy(event.target.value);
        break;
      case "bio":
        setBio(event.target.value);
        break;
      default:
        break;
    }
  };

  const [inputs, setInputs] = useState<InputFields[]>([
    {
      position,
      employer,
      startDate,
      endDate,
      experience,
    },
  ]);

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      {
        position,
        employer,
        startDate,
        endDate,
        experience,
      },
    ]);
  };
  return (
    <InputContext.Provider
      value={{
        name,
        surname,
        info,
        email,
        phone,
        image,
        showImage,
        setEmail,
        setImage,
        setInfo,
        setName,
        setPhone,
        setSurname,
        setShowImage,
      }}
    >
      <Wrapper>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/personal"
              element={[
                <PersonalInfo
                  name={name}
                  setName={setName}
                  surname={surname}
                  setSurname={setSurname}
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                  info={info}
                  setInfo={setInfo}
                  image={image}
                  setImage={setImage}
                  showImage={showImage}
                  setShowImage={setShowImage}
                  handleChange={handleChange}
                />,
                <ResumeContent
                  name={name}
                  surname={surname}
                  email={email}
                  phone={phone}
                  info={info}
                  image={image}
                  setImage={setImage}
                  showImage={showImage}
                  position={position}
                  employer={employer}
                  startDate={startDate}
                  endDate={endDate}
                  experience={experience}
                  handleAddInput={handleAddInput}
                  inputs={inputs}
                  school={school}
                  degree={degree}
                  endOfStudy={endOfStudy}
                  bio={bio}
                  display={display}
                  setDisplay={setDisplay}
                />,
              ]}
            />
            <Route
              path="/experience"
              element={[
                <Experience
                  setName={setName}
                  setSurname={setSurname}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  setImage={setImage}
                  position={position}
                  setPosition={setPosition}
                  employer={employer}
                  setEmployer={setEmployer}
                  handleChange={handleChange}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  setExperience={setExperience}
                  endDate={endDate}
                  experience={experience}
                  handleAddInput={handleAddInput}
                  inputs={inputs}
                />,
                <ResumeContent
                  name={name}
                  surname={surname}
                  email={email}
                  phone={phone}
                  info={info}
                  image={image}
                  setImage={setImage}
                  showImage={showImage}
                  position={position}
                  employer={employer}
                  startDate={startDate}
                  endDate={endDate}
                  experience={experience}
                  handleAddInput={handleAddInput}
                  inputs={inputs}
                  school={school}
                  degree={degree}
                  endOfStudy={endOfStudy}
                  bio={bio}
                  display={display}
                  setDisplay={setDisplay}
                />,
              ]}
            />
            <Route
              path="/education"
              element={[
                <Education
                  setName={setName}
                  setSurname={setSurname}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  setImage={setImage}
                  position={position}
                  setPosition={setPosition}
                  employer={employer}
                  setEmployer={setEmployer}
                  handleChange={handleChange}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  setExperience={setExperience}
                  endDate={endDate}
                  experience={experience}
                  handleAddInput={handleAddInput}
                  inputs={inputs}
                  school={school}
                  setSchool={setSchool}
                  degree={degree}
                  setDegree={setDegree}
                  endOfStudy={endOfStudy}
                  setEndOfStudy={setEndOfStudy}
                  bio={bio}
                  setBio={setBio}
                  display={display}
                  setDisplay={setDisplay}
                />,
                <ResumeContent
                  name={name}
                  surname={surname}
                  email={email}
                  phone={phone}
                  info={info}
                  image={image}
                  setImage={setImage}
                  showImage={showImage}
                  position={position}
                  employer={employer}
                  startDate={startDate}
                  endDate={endDate}
                  experience={experience}
                  handleAddInput={handleAddInput}
                  inputs={inputs}
                  school={school}
                  degree={degree}
                  endOfStudy={endOfStudy}
                  bio={bio}
                  display={display}
                  setDisplay={setDisplay}
                />,
              ]}
            />
            <Route
              path="/finish"
              element={[
                <ResumeWrapper>
                  <Output />,
                  <ResumeContainer>
                    <ResumeContent
                      name={name}
                      surname={surname}
                      email={email}
                      phone={phone}
                      info={info}
                      image={image}
                      setImage={setImage}
                      showImage={showImage}
                      position={position}
                      employer={employer}
                      startDate={startDate}
                      endDate={endDate}
                      experience={experience}
                      handleAddInput={handleAddInput}
                      inputs={inputs}
                      school={school}
                      degree={degree}
                      endOfStudy={endOfStudy}
                      bio={bio}
                      display={display}
                      setDisplay={setDisplay}
                    />
                    {/* <Image src={cvLogo} alt="" /> */}
                  </ResumeContainer>
                  ,
                </ResumeWrapper>,
              ]}
            />
          </Routes>
        </Router>
      </Wrapper>
    </InputContext.Provider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;


const ResumeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 44px;
  width: 100%;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content:  space-between;
  border: 1px solid black;
  height: 1080px;
`

// const Image = styled.img`
//   width: 42px;
//   height: 42px;
//   margin: 0 0 44px 62px;
// `