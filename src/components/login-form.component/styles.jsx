import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
`;

export const ErrorMassage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin: 0;
`;

export const Button = styled.button`
    padding: 10px;
`;
