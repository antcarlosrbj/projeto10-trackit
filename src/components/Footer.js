import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function calculatePercentage(setPercentage, token) {
    let countOK = 0;
    let countAll = 0;
    let today = "";
    let dataToday = "";

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
    const config = {
        headers: {
            "Authorization": ("Bearer " + token)
        }
    }
    const promise = axios.get(URL, config);
    promise.then(response => {
        countOK = 0;
        countAll = 0;
        today = String(new Date().getDate()).padStart(2, '0') + "/" + String(new Date().getMonth() + 1).padStart(2, '0') + "/" + String(new Date().getFullYear());
        response.data.forEach((day) => {
            if (day.day == today) {
                dataToday = { ...day }
            }
        })
        dataToday.habits.forEach((habit) => {
            countAll++;
            if (habit.done) {
                countOK++
            }
        })
    
        setPercentage(Math.round((countOK / countAll) * 100));
    });

    promise.catch(err => {
        console.log(err.response);
        alert("Não foi possível carregar seus historico de hábitos")
    });

}


export default function Footer({renderAgain, token, percentage, setPercentage }) {

    const navigate = useNavigate();
    
    React.useEffect(() => {
        calculatePercentage(setPercentage, token);
    }, [renderAgain]);

    return (
        <FooterDiv>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <p onClick={() => navigate("/historico")}>Histórico</p>
            <div className="circle" onClick={() => navigate("/hoje")}>
                <p>Hoje</p>
                <CircularProgressbar
                    value={percentage}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#00000000",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </div>
        </FooterDiv>
    );
}

const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
    height: 70px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        height: 65px;
        width: 35%;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #52B6FF;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .circle {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        background-color: #52B6FF;
        
        position: fixed;
        left: calc((100vw - 90px)/2);
        bottom: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .circle > p {
        color: white;
    }

    .circle > svg {
        width: 90px;

        position: fixed;
        left: calc((100vw - 92px)/2);
        bottom: 10px;
    }
`;