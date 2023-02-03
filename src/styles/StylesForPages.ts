import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 45px 48px 0 48px;
  background: #f1efef;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 798px;
  margin-left: 64px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #1a1a1a;
`;
export const PageCount = styled.span`
  font-size: 20px;
  line-height: 24px;
`;
export const Line = styled.div`
  height: 1px;
  background: #1a1a1a;
  margin-top: 12px;
`;

export const ForInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Label = styled.label`
  font-weight: 700;
  line-height: 21px;
  color: black;
`;
export const Input = styled.input`
  width: 371px;
  height: 48px;
  border-radius: 4px;
  outline: none; 
  border: 1px solid #bcbcbc;
  background: white;
  padding: 13px 15px;
  font-size: 16px;
  ::placeholder {
    font-weight: 400;
    line-height: 21px;
    color: black;
    opacity: 60%;
  }
`;

export const Warning = styled.span`
  font-weight: 300;
  line-height: 21px;
  font-size: 14px;
  color: #2e2e2e;
`;

export const WrapperForPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-top: 64px;
`;
export const UploadPhoto = styled.button`
  width: 107px;
  height: 27px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  background: #0e80bf;
  outline: none;
  border: none;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  width: 798px;
  height: 108px;
  border-radius: 4px;
  color: #bcbcbc;
  resize: none;
  padding: 16px;
  font-size: 16px;
  ::placeholder {
    font-weight: 400;
    color: black;
    opacity: 60%;
  }
`;

export const AnotherWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Toggle = styled.button`
  width: 151px;
  height: 48px;
  border-radius: 4px;
  border: none;
  background: #6b40e3;
  color: white;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-top: 24px;
  :hover {
    cursor: pointer;
  }
`;
