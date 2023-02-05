import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import ResumeContent from "./components/ResumeContent";
import { InputContext } from "./contexts/InputContext";
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
      <div style={{ display: "flex" }}>
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
                />,
              ]}
            />
            <Route
              path="/experience"
              element={[
                <Experience
                  position={position}
                  setPosition={setPosition}
                  employer={employer}
                  setEmployer={setEmployer}
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
                />,
              ]}
            />
            <Route
              path="/education"
              element={[
                <Education />,
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
                />,
              ]}
            />
          </Routes>
        </Router>
      </div>
    </InputContext.Provider>
  );
}

export default App;
