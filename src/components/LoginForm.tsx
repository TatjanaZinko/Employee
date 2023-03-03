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

const Button = styled.button`
    padding: 10px;
`;

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
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

  return (
    <Wrapper>
        <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" id="login" name="login"></Input>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password"></Input>
        <Button type="submit">Log in</Button>
      </Form>
    </Wrapper>
  );
}