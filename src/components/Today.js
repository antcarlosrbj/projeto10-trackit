import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

export default function Today({ token, setToken, renderAgain, setRenderAgain, percentage, setPercentage, perfilImage}) {

    const navigate = useNavigate();

    const [habits, setHabits] = React.useState([]);

    if (localStorage.getItem("token") != null) {
        setToken(localStorage.getItem("token"));
    } else {
        navigate("/");
    }

    React.useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                "Authorization": ("Bearer " + token)
            }
        }
        const promise = axios.get(URL, config);

        promise.then(response => {
            setHabits(response.data);
        });

        promise.catch(err => {
            console.log(err.response);
            alert("Não foi possível carregar seus hábitos")
        });
    }, [renderAgain]);

    function clickCheck(id, done) {
        let URL = "";

        if (done) {
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        } else {
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        }

        let body = {};

        const config = {
            headers: {
                "Authorization": ("Bearer " + token)
            }
        }
        const promise = axios.post(URL, body, config);

        promise.then(() => {
            setRenderAgain([]);
        });

        promise.catch(err => {
            console.log(err.response);
            alert("Não foi possível marcar esse hábito")
        });
    }


    return (
        <>
            <Header perfilImage={perfilImage} />
            <Main>
                <p className="today">{["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"][new Date().getDay()] + ", " + String(new Date().getDate()).padStart(2, '0') + "/" + String(new Date().getMonth() + 1).padStart(2, '0')}</p>
                <p className={percentage == 0 ? "percentage" : "percentage green"}>{percentage == 0 ? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`}</p>
                <div className="habits">
                    {habits.map((element, index) => {

                        return (
                            <div className="habit" key={index}>
                                <div className="infoHabit">
                                    <p className="title">{element.name}</p>
                                    <p className="record">Sequência atual: {element.currentSequence} {element.currentSequence < 2 ? "dia" : "dias"}</p>
                                    <p className="record">Seu recorde: {element.highestSequence} {element.highestSequence < 2 ? "dia" : "dias"}</p>
                                </div>
                                <div className={"checkHabit" + (element.done ? " ok" : "")} onClick={() => clickCheck(element.id, element.done)}>
                                    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;

    .today {
        width: 341px;
        margin-top: 28px;
        color: #126BA5;
        font-size: 23px;
    }

    .percentage {
        width: 341px;
        color: #BABABA;
        font-size: 18px;
    }

    .green {
        color: #8FC549;
    }

    .habits {
        margin-top: 28px;
    }

    .habit {
        width: 340px;
        height: 94px;
        border-radius: 5px;
        background-color: white;
        margin-bottom: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .infoHabit {
        height: 69px;
        width: 243px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .checkHabit {
        height: 69px;
        width: 69px;
        border-radius: 5px;
        border: 1px solid #E7E7E7;
        background-color: #EBEBEB;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ok {
        background-color: #8FC549;
    }

    .title {
        color: #666666;
        font-size: 20px;
        margin-bottom: 7px;
    }

    .record {
        color: #666666;
        font-size: 13px;        
    }
`;