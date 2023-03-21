import React, { FormEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
`;
const ErrorMassage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin: 0;
`;


const Button = styled.button`
    padding: 10px;
`;

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [loginDirty, setloginDirty] = useState(false);
    const [loginError, setLoginError] = useState("");

    const [password, setPassword] = useState('');    
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        const user = {
            login: login,
            password: password,
        }        
        if (user.login === "admin" && user.password === "password") {
            localStorage.setItem("userToken", "true");
            navigate("/");
        } else {
            localStorage.setItem("userToken", "false");
        }       
    }  
    
    const handleBlur = (e: { target: { name: string; }; }) => {
        switch (e.target.name) {
            case "login": 
                setloginDirty(true);
                break;
            case "password": 
                setPasswordDirty(true);
                break;
        }
    }

    const handleLogin = (e: { target: { value: string; }; }) => {
        setLogin(e.target.value);
        const reLogin = /^[A-Za-z0-9]{3,16}$/;
        if(!reLogin.test(String(e.target.value))) {
            setLoginError("Login should be 3-16 characters");
        } else {
            setLoginError("");
        }
    }

    const handlePassword = (e: { target: { value: string; }; }) => {
        setPassword(e.target.value);
        const rePassword = /^[A-Za-z0-9]{8,20}$/;
        if(!rePassword.test(String(e.target.value))) {
            setPasswordError("Password should be 8-20 letters or numbers");
            if(!e.target.value) {
                setPasswordError("Password shouldn't be empty");
            }
        }else {
            setPasswordError("");
        }
    }

  return (
    <Wrapper>
        <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {(loginDirty && loginError) && <ErrorMassage>{loginError}</ErrorMassage>}
        <Input value={login} onChange={handleLogin} onBlur={handleBlur} type="text" placeholder="Login" id="login" name="login" required></Input>
        {(passwordDirty && passwordError) && <ErrorMassage>{passwordError}</ErrorMassage>}
        <Input value={password} onChange={handlePassword} onBlur={handleBlur} type="password" placeholder="Password" id="password" name="password" required></Input>        
        <Button type="submit">Log in</Button>
      </Form>
    </Wrapper>
  );
}