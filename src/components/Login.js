import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


import logotipo from '../img/logo-trackit.png';

export default function Login() {
    return (
        <>
            <Screen>
                <img src={logotipo} alt='Logo'/>
                <h1>TrackIt</h1>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='senha'/>
                <button type="button">Entrar</button>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Screen>
        </>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
        width: 166px;
        height: 98px;
    }

    h1 {
        font-family: 'Playball', cursive;
        font-size: 70px;
        color: #126BA5;
        margin-bottom: 35px;
    }

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin-bottom: 6px;
        font-size: 20px;
        box-sizing: border-box;
        padding-left: 10px;
    }

    button {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 0;
        background-color: #52B6FF;
        color: white;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        margin-bottom: 25px;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        text-decoration-line: underline;
    }
`;