import styled from 'styled-components';
import logo from '../assets/logo.png';
import secondaryLogo from '../assets/logo-bg.png';
import background from '../assets/background.png';
import { Content, Logo, Line, Button, SecondaryLogo } from '../styles/HomeStyle';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Logo src={logo} alt="redberry logo"></Logo>
      <Line></Line>
      <Content>
        <Link to='/personal'>
          <Button>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Button>
        </Link>
        <SecondaryLogo src={secondaryLogo}></SecondaryLogo>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 25px 70px 0 70px;
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
