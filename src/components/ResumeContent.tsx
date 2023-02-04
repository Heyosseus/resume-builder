import React from 'react';
import styled from 'styled-components';
import { At, Phone } from 'phosphor-react';
type Props = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  info: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
};
const ResumeContent: React.FC<Props> = ({
  name,
  surname,
  email,
  phone,
  info,
}) => {
  return (
    <div>
      <Container>
        <Header>
          {name} {surname}
        </Header>
        <>
          <Email>
            {email && (
              <div>
                <At size={20} /> {email}
              </div>
            )}
          </Email>
        </>
        <ForPhone>
          {phone && (
            <div>
              <Phone size={20} /> {phone}
            </div>
          )}
        </ForPhone>
        <Content>
          {info && (
            <>
              <About>ჩემ შესახებ</About>
              <Bio>{info}</Bio>
            </>
          )}
        </Content>
      </Container>
    </div>
  );
};

export default ResumeContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 68px 80px;
`;
const Header = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #f93b1d;
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Email = styled.div`
  display: flex;
  font-weight: 400;
  line-height: 21px;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #1a1a1a;
  margin-right: auto;
  margin-top: 16px;
`;

const ForPhone = styled(Email)`
  margin-right: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-top: 32px;
  font-size: 16px;
`;

const About = styled(Header)`
 font-size: 22px;
`
const Bio = styled.p`
  font-weight: 400;
  line-height: 22px;
  font-size: 16px;
  color: black;
  margin-top: 16px;
`;
