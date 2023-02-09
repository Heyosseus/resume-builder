import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 62px;
  flex-grow: 0;
`;
export const ResumeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 44px;
  width: 100vw;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 91vh;
  border: 1px solid black;
  width: 788px;
  padding-left: 20px;
`;

export const SuccessCard = styled.div`
  width: 427px;
  height: 167px;
  border-radius: 8px;
  padding: 28px 30px;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  line-height: 43px;
  font-weight: 500;
  position: relative;
`;
