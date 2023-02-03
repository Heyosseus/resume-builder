import Home from './components/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalInfo />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
