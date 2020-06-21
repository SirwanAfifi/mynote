import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <Header>Login to Continue</Header>
        <Form>
          <FormGroup>
            <label>Email</label>
            <input type="text" />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <input type="password" />
          </FormGroup>
        </Form>
      </LoginBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0 14px 53px 0 rgba(84, 85, 144, 0.16);
  border-radius: 20px;
`;

const Header = styled.div`
  font-size: 30px;
  color: #245373;
  letter-spacing: 0;
  text-align: center;
`;

const Form = styled.div`
  padding: 40px;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  label {
    display: block;
    font-size: 18px;
    color: #245373;
    letter-spacing: 0;
  }

  input {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    width: 100%;
    height: 75px;
    font-size: 30px;
    margin-top: 10px;
    padding: 10px;
  }
`;
