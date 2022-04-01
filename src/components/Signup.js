import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';


import logotipo from '../img/logo-trackit.png';
import { ThreeDots } from "react-loader-spinner";


export default function Login() {

    const navigate = useNavigate();

    const [disabled, setDisabled] = React.useState(false);

    const [data, setData] = React.useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    
    function register (event) {
        event.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(URL, data);
        promise.then(response => {
            console.log(response);
            navigate("/");
        });
        promise.catch(err => {
            setDisabled(false);
            console.log(err.response);
            alert("Houve um erro no cadastro. Verifique os dados e tente novamente")
        });
        setDisabled(true);
    }

    return (
        <>
            <Screen>
                <img src={logotipo} alt='Logo' />
                <h1>TrackIt</h1>
                <form onSubmit={register}>
                    <input disabled={disabled} type="email" placeholder='email' required value={data.email} onChange={(e) => {
                        let newData = {...data};
                        newData.email = e.target.value;
                        setData(newData);
                    }} />
                    <input disabled={disabled} type="password" placeholder='senha' required value={data.password} onChange={(e) => {
                        let newData = {...data};
                        newData.password = e.target.value;
                        setData(newData);
                    }} />
                    <input disabled={disabled} type="text" placeholder='nome' required value={data.name} onChange={(e) => {
                        let newData = {...data};
                        newData.name = e.target.value;
                        setData(newData);
                    }} />
                    <input disabled={disabled} type="url" placeholder='foto' required value={data.image} onChange={(e) => {
                        let newData = {...data};
                        newData.image = e.target.value;
                        setData(newData);
                    }} />
                    <button type="submit">{disabled ? <ThreeDots {...{ color: "white" }} /> : "Cadastrar"}</button>
                </form>
                <Link to="/">Já tem uma conta? Faça login!</Link>
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

    input[disabled] {
        cursor: not-allowed;
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

        display: flex;
        align-items: center;
        justify-content: center;
    }

    button > div {
        width: 50px;
    }

    a {
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        text-decoration-line: underline;
    }
`;