import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';


import logotipo from '../img/logo-trackit.png';

export default function Login() {

    const navigate = useNavigate();

    const [data, setData] = React.useState({
        email: "",
        password: ""
    });

    
    function logInTo (event) {
        event.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(URL, data);
        promise.then(response => {
            console.log(response);
            /* navigate("/hoje"); */
        });
        promise.catch(err => console.log(err.response));
    }

    return (
        <>
            <Screen>
                <img src={logotipo} alt='Logo'/>
                <h1>TrackIt</h1>
                <form onSubmit={logInTo}>
                    <input type="email" placeholder='email'required value={data.email} onChange={(e) => {
                        let newData = {...data};
                        newData.email = e.target.value;
                        setData(newData);
                    }} />
                    <input type="password" placeholder='senha'required value={data.password} onChange={(e) => {
                        let newData = {...data};
                        newData.password = e.target.value;
                        setData(newData);
                    }} />
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
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

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

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

    a {
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        text-decoration: underline;
    }
`;