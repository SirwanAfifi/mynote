import React from "react";
import styled from "styled-components";
import CloseIcon from "../components/CloseIcon";

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <CloseIcon />
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
          <span>Forgot Password?</span>
          <button>Login</button>
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
  position: relative;
  width: 500px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0 14px 53px 0 rgba(84, 85, 144, 0.16);
  border-radius: 20px;

  svg {
    position: absolute;
    right: 30px;
    top: 30px;

    :hover {
      cursor: pointer;
    }
  }
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: lighter;
  color: #245373;
  letter-spacing: 0;
  text-align: center;
  margin-top: 40px;
`;

const Form = styled.div`
  padding: 40px;

  span {
    display: block;
    font-size: 18px;
    color: #1997f0;
    letter-spacing: 0;
    text-align: center;
  }

  button {
    width: 100%;
    height: 79px;
    background: #1997f0;
    border-radius: 5px;
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 0;
    margin-top: 30px;
    border: none;

    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
      background: #0c78c4;
    }
  }
`;

const FormGroup = styled.div`
  margin: 30px 0;
  label {
    display: block;
    font-size: 18px;
    color: #245373;
    letter-spacing: 0;
  }

  input {
    background: #ffffff;
    color: #0d3c5c;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    width: 100%;
    height: 75px;
    font-size: 25px;
    font-weight: lighter;
    margin-top: 10px;
    padding: 10px;

    :focus {
      outline: none;
      border-bottom: 5px solid #1997f0;
    }
  }
`;
