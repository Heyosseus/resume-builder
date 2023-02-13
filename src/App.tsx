import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { CaretCircleLeft, X } from "phosphor-react";
import { BrowserRouter as Router, HashRouter, Routes, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import ResumeContent from "./components/ResumeContent";
import { InputFields, InputFieldsForEducation } from "./Interfaces/ForApp";
import {
  Wrapper,
  Container,
  ResumeContainer,
  ResumeWrapper,
  SuccessCard,
} from "./styles/AppStyle";
import Output from "./components/Output";

function App() {
  //for personal info
  const [name, setName] = useLocalStorage("name", "");
  const [surname, setSurname] = useLocalStorage("surname", "");
  const [info, setInfo] = useLocalStorage("info", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [image, setImage] = useLocalStorage("image", "");
  const [imageData, setImageData] = useState<string | null>(null);
  const [showImage, setShowImage] = useState(false);
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

  //for post request
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState();
  const [container, setContainer] = useLocalStorage("response", "");
  const [imageUrl, setImageUrl] = useState<string>("");

  // clear local storage and redirect to home page
  const clearStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // for experience content, duplicate input fields
  const [experienceContent, setExperienceContent] = useLocalStorage(
    "experiences",
    [
      {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        experience: "",
      },
    ]
  );


  const handleAddInput = () => {
    setExperienceContent([
      ...experienceContent,
      {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        experience: "",
      },
    ]);
  };

 
  const handleChangeForExp = (index: number, name: keyof InputFields) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedContent = [...experienceContent];
    updatedContent[index][name] = e.target.value;
    setExperienceContent(updatedContent);
  };

  // for education content, duplicate input fields
  const [educationContent, setEducationContent] = useLocalStorage(
    "educations",
    [
      {
        school: "",
        degree: "",
        endOfStudy: "",
        bio: "",
      },
    ]
  );

  const handleAddInputForEducation = () => {
    setEducationContent([
      ...educationContent,
      {
        school: "",
        degree: "",
        endOfStudy: "",
        bio: "",
      },
    ]);
  };

  const handleChangeForEdu = (
    index: number,
    name: keyof InputFieldsForEducation
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedContentEdu = [...educationContent];
    updatedContentEdu[index][name] = e.target.value;
    setEducationContent(updatedContentEdu);
  };

  // for passing props to children components
  const childProps = {
    name,
    surname,
    email,
    phone,
    info,
    image,
    setImage,
    showImage,
    position,
    employer,
    startDate,
    endDate,
    experience,
    handleAddInput,
    handleChangeForEdu,
    experienceContent,
    educationContent,
    school,
    degree,
    endOfStudy,
    bio,
    setName,
    setSurname,
    setEmail,
    setPhone,
    setInfo,
    setShowImage,
    setPosition,
    setEmployer,
    setStartDate,
    setEndDate,
    setExperience,
    setSchool,
    setDegree,
    setEndOfStudy,
    setBio,
    message,
    setMessage,
    error,
    setError,
    imageData,
    setImageData,
    handleChangeForExp,
    handleAddInputForEducation,
    setContainer,
    container,
    imageUrl,
    setImageUrl,
    clearStorage,
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/personal"
            element={[
              <PersonalInfo {...childProps} />,
              <ResumeContent {...childProps} />,
            ]}
          />
          <Route
            path="/experience"
            element={[
              <Experience {...childProps} />,
              <ResumeContent {...childProps} />,
            ]}
          />
          <Route
            path="/education"
            element={[
              <Education {...childProps} />,
              <ResumeContent {...childProps} />,
            ]}
          />
          <Route
            path="/output"
            element={<Output {...childProps} />}
          />
        </Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
