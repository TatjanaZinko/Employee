import styled from 'styled-components';

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

export { Wrapper, Form, Input, ErrorMassage, Button };
