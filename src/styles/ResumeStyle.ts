import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 68px 0 68px 60px;
  justify-content: space-between;
`;
export const ContentContainer = styled.div`
  display: flex;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #f93b1d;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Email = styled.div`
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

export const ForPhone = styled(Email)`
  margin-right: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-top: 32px;
  font-size: 16px;
  width: 430px;
`;

export const About = styled(Header)`
  font-size: 22px;
`;
export const Bio = styled.p`
  font-weight: 400;
  line-height: 23px;
  font-size: 16px;
  color: black;
  margin-top: 16px;
  word-wrap: break-word;
`;

export const ImageContainer = styled.img`
  border-radius: 50%;
  width: 246px;
  height: 246px;
  background-size: cover;
`;

export const ForImage = styled.div`
  right: 0;
  padding-right: 58px;
`;

export const Line = styled.div`
  height: 1px;
  background: #c8c8c8;
  width: 662px;
  margin-top: 18px;
`;

export const HeaderForExperience = styled(About)`
  margin-top: 21px;
`;

export const Position = styled.h2`
  color: #1a1a1a;
  font-size: 16px;
  line-height: 21px;
  margin-top: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

export const Dates = styled.div`
  font-weight: 400;
  line-height: 21px;
  font-size: 16px;
  font-style: italic;
  color: #909090;
  margin-top: 4px;
`;

export const AboutExperience = styled(Bio)`
  width: 630px;
  letter-spacing: 0.6px;
  word-wrap: break-word;
`;

export const Logo = styled.img`
  width: 42px;
  height: 42px;
  bottom: 0;
  margin-top: 64px;
`;
