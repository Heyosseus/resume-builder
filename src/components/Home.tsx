import styled from 'styled-components';
import logo from '../assets/logo.png';
import secondaryLogo from '../assets/logo-bg.png';
import background from '../assets/background.png';
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
`;

const Logo = styled.img``;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #1a1a1a;
  margin-top: 24px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  position: relative;
`
const Button = styled.button`
  width: 464px;
  height: 60px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 25px;
  font-size: 20px;
  background-color: #1a1a1a;
  color: #fff;
  z-index: 11;
  :hover {
    cursor: pointer;
  }
`;

const SecondaryLogo = styled.img`
  z-index: 0;
  position: absolute;
  top: 413px;
  left: 1006px;
`;
