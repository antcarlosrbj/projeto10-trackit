import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";

import Header from './Header';
import Footer from './Footer';
import HabitsList from './HabitsList';

export default function Historic({ perfilImage, renderAgain, token, percentage, setPercentage }) {

    const navigate = useNavigate();

    return (
        <>
            <Header perfilImage={perfilImage} />
            <Main>
                <div className="historicHeader">
                    <p className="title">Histórico</p>
                    <p className="message">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </div>

            </Main>
            <Footer renderAgain={renderAgain} token={token} percentage={percentage} setPercentage={setPercentage} />
        </>
    );
}

const Main = styled.div`
    margin-top: 70px;
    height: calc(100vh - 140px);
    background-color: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;

    .historicHeader {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 23px;
        color: #126BA5;
        margin-top: 28px;
        margin-left: 17px;
    }

    .message {
        font-size: 18px;
        color: #666666;
        margin-top: 17px;
        margin-left: 15px;
    }
`;