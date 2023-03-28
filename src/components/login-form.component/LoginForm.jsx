import React, { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Wrapper, Form, Input, ErrorMassage, Button } from './styles';
import * as yup from 'yup';
import { userSchema } from '../../validation/loginFormValidation';

export default function LoginForm() {
    const [user, setUser] = useState({login: '', password: ''});
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {
            await userSchema.validate(user);
            console.log('Data is valid');
            setErrors([]);
          } catch (error) {
            console.log('Data is invalid', error.errors);
            setErrors(error.errors);
          }       

        if (user.login === "admin" && user.password === "password") {
            localStorage.setItem("userToken", "true");
            navigate("/");
        } else {
            localStorage.setItem("userToken", "false");
        }       
    }  

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevData) => ({ ...prevData, [name]: value }));
    };
    
  return (
    <Wrapper>
        <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input value={user.login} onChange={handleChange}  type="text" placeholder="Login" id="login" name="login" required></Input>
        <Input value={user.password} onChange={handleChange} type="password" placeholder="Password" id="password" name="password" required></Input>
        {errors.map((error, index) => (<ErrorMassage key={index}>{error}</ErrorMassage>))}       
        <Button type="submit">Log in</Button>
      </Form>
    </Wrapper>
  );
}