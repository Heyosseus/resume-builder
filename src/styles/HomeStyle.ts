import styled from "styled-components";



export const Logo = styled.img``;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #1a1a1a;
  margin-top: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  position: relative;
`;
export const Button = styled.button`
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

export const SecondaryLogo = styled.img`
  z-index: 0;
  position: absolute;
  top: 403px;
  left: 1006px;
`;
