import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  height: 100%;
`;
export const SubWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const Logo = styled.img`
  width: 200px;
  height: 150px;
`;
export const InputBox = styled.input`
  width: 460px;
  height: 70px;
  padding-left: 20px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  font-size: 18px;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const LoginButton = styled.button`
  width: 460px;
  height: 70px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #512771;
  color: white;
  font-size: 26px;
  border: none;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignInButton = styled.div`
  font-size: 20px;
  margin: 15px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
export const Error = styled.div`
  color: red;
  margin-bottom: 10px;
`;
