import React from "react";
import styled from "styled-components";
import { At, Phone } from "phosphor-react";
type Props = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
};
const ResumeContent: React.FC<Props> = ({ name, surname, email, phone }) => {
  return (
    <div>
      <Container>
        <Header>
          {name} {surname}
        </Header>
        <Email>
          {email ? (
            <div>
              <At size={16} /> {email}
            </div>
          ) : (
            ""
          )}
        </Email>
        <ForPhone>
          {phone ? (<div>
              <Phone size={16} /> {phone}
            </div>) : ""}
        </ForPhone>
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
  font-size: 18px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #1a1a1a;
`;

const ForPhone = styled(Email)`

`