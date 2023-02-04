import { useState } from 'react';
import useLocalStorage  from './hooks/useLocalStorage';

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

function App() {
  const [name, setName] = useLocalStorage('name','');
  const [surname, setSurname] = useLocalStorage( 'surname', '');
  const [info, setInfo] = useLocalStorage('info','');
  const [email, setEmail] = useLocalStorage('email','');
  const [phone, setPhone] = useLocalStorage('phone','');
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/personal"
            element={
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
              />
            }
          />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
