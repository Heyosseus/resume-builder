import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { CaretCircleLeft, X } from 'phosphor-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './components/Home';
import PersonalInfo from './pages/PersonalInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import ResumeContent from './components/ResumeContent';
import {
  InputFields,
  InputFieldsForEducation,
} from './Interfaces/ForApp';
import {
  Wrapper,
  Container,
  ResumeContainer,
  ResumeWrapper,
  SuccessCard,
} from './styles/AppStyle';
import {
  validateEmail,
  validateGeorgian,
  validateGeorgianPhone,
} from './utils/Validation';

function App() {
  //for personal info
  const [name, setName] = useLocalStorage('name', '');
  const [surname, setSurname] = useLocalStorage('surname', '');
  const [info, setInfo] = useLocalStorage('info', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [phone, setPhone] = useLocalStorage('phone', '');
  const [image, setImage] = useLocalStorage('image', '');
  const [imageData, setImageData] = useState<string | null>(null);
  const [showImage, setShowImage] = useLocalStorage('display', false);
  //for experience
  const [position, setPosition] = useLocalStorage('position', '');
  const [employer, setEmployer] = useLocalStorage('employer', '');
  const [startDate, setStartDate] = useLocalStorage('start', '');
  const [endDate, setEndDate] = useLocalStorage('end', '');
  const [experience, setExperience] = useLocalStorage(
    'experience',
    ''
  );
  //for education
  const [school, setSchool] = useLocalStorage('school', '');
  const [degree, setDegree] = useLocalStorage('degree', '');
  const [endOfStudy, setEndOfStudy] = useLocalStorage(
    'endOfStudy',
    ''
  );
  const [bio, setBio] = useLocalStorage('bio', '');
  const [display, setDisplay] = useState(true);

  //for post request
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState();
  const handleDisplay = () => {
    setDisplay(!display);
  };
  // for input fields

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
      case 'image':
        setImage(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      case 'position':
        setPosition(event.target.value);
        break;
      case 'employer':
        setEmployer(event.target.value);
        break;
      case 'start':
        setStartDate(event.target.value);
        break;
      case 'end':
        setEndDate(event.target.value);
        break;
      case 'experience':
        setExperience(event.target.value);
        break;
      case 'school':
        setSchool(event.target.value);
        break;
      case 'degree':
        setDegree(event.target.value);
        break;
      case 'endOfStudy':
        setEndOfStudy(event.target.value);
        break;
      case 'bio':
        setBio(event.target.value);
        break;
      default:
        break;
    }
  };

  // for duplicate input fields content when user clicks on button
  const [experienceContent, setExperienceContent] = useState<
    InputFields[]
  >([
    {
      position,
      employer,
      startDate,
      endDate,
      experience,
    },
  ]);

  const handleAddInput = () => {
    setExperienceContent([
      ...experienceContent,
      {
        position,
        employer,
        startDate,
        endDate,
        experience,
      },
    ]);
  };

  // const [experienceContent, setExperienceContent] = useState([
  //   { employer: "", start: "", end: "", experience: "" },
  // ]);

  // const handleAddInput = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   name: keyof typeof experienceContent[0],
  //   index: number
  // ) => {
  //   const updatedContent = [...experienceContent];
  //   updatedContent[index][name] = [position, employer, startDate, endDate, experience];
  //   setExperienceContent(updatedContent);
  // };
  const [educationContent, setEducationContent] = useState<
    InputFieldsForEducation[]
  >([
    {
      school,
      degree,
      endOfStudy,
      bio,
    },
  ]);

  const handleAddInputForEducation = () => {
    setEducationContent([
      ...educationContent,
      {
        school,
        degree,
        endOfStudy,
        bio,
      },
    ]);
  };

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
    handleAddInputForEducation,
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
    handleChange,
    validateEmail,
    validateGeorgian,
    validateGeorgianPhone,
    error,
    setError,
    imageData,
    setImageData,
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <Router>
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
            path="/finish"
            element={[
              <ResumeWrapper>
                <Container>
                  <Link to="/">
                    <CaretCircleLeft
                      size={38}
                      style={{ color: 'black' }}
                      // onClick={clearStorageForEdu}
                    />
                  </Link>
                </Container>
                <ResumeContainer>
                  <ResumeContent {...childProps} />
                </ResumeContainer>
                {message && display && (
                  <SuccessCard>
                    {message}
                    <X
                      size={22}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        marginTop: '6px',
                        marginRight: '3px',
                      }}
                      onClick={handleDisplay}
                    />
                  </SuccessCard>
                )}
              </ResumeWrapper>,
            ]}
          />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
