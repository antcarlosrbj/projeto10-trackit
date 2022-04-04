import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";

import Header from './Header';
import Footer from './Footer';
import HabitsList from './HabitsList';

export default function Habits({ token, setToken, renderAgain, setRenderAgain, percentage, setPercentage, perfilImage }) {

    const navigate = useNavigate();

    if(localStorage.getItem("token") != null) {
        setToken(localStorage.getItem("token"));
    } else {
        navigate("/");
    }

    const addHabitsDefault = {
        visible: false,
        name: "",
        daysOfTheWeek: {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
        }
    }

    const [addHabits, setAddHabits] = React.useState(addHabitsDefault);

    const [disabled, setDisabled] = React.useState(false);

    function save() {

        const allDays = [
            "sunday", 
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday"
        ]


        let days = [];

        for (let i = 0; i < allDays.length; i++) {
            if (addHabits.daysOfTheWeek[allDays[i]]) {
                days.push(i);
            }
        }

        let body = {
            name: addHabits.name,
            days: days
        };

        const config = {
            headers: {
                "Authorization": ("Bearer " + token)
            }
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(URL, body, config);
        promise.then(response => {
            console.log(response);
            let newAddHabits = { ...addHabitsDefault };
            setAddHabits(newAddHabits);
            setDisabled(false);
            setRenderAgain([]);
        });
        promise.catch(err => {
            setDisabled(false);
            console.log(err.response);
            alert("Não foi possível criar o hábito")
        });
        setDisabled(true);
    }

    return (
        <>
            <Header perfilImage={perfilImage} />
            <Main>
                <div className="habitsHeader">
                    <p>Meus hábitos</p>
                    <div className="plus" onClick={() => {
                        let newAddHabits = { ...addHabits };
                        if (newAddHabits.visible) {
                            newAddHabits.visible = false;
                        } else {
                            newAddHabits.visible = true;
                        };
                        setAddHabits(newAddHabits);
                    }}>+</div>
                </div>

                <AddHabits className={addHabits.visible ? "" : "hidden"}>
                    <input disabled={disabled} type="texto" placeholder='nome do habito' value={addHabits.name} onChange={(e) => {
                        let newAddHabits = { ...addHabits };
                        newAddHabits.name = e.target.value;
                        setAddHabits(newAddHabits);
                    }} required />
                    <div className="daysOfTheWeek">
                        <div className={addHabits.daysOfTheWeek.sunday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.sunday ? newAddHabits.daysOfTheWeek.sunday = false : newAddHabits.daysOfTheWeek.sunday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>D</div>
                        <div className={addHabits.daysOfTheWeek.monday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.monday ? newAddHabits.daysOfTheWeek.monday = false : newAddHabits.daysOfTheWeek.monday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>S</div>
                        <div className={addHabits.daysOfTheWeek.tuesday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.tuesday ? newAddHabits.daysOfTheWeek.tuesday = false : newAddHabits.daysOfTheWeek.tuesday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>T</div>
                        <div className={addHabits.daysOfTheWeek.wednesday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.wednesday ? newAddHabits.daysOfTheWeek.wednesday = false : newAddHabits.daysOfTheWeek.wednesday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>Q</div>
                        <div className={addHabits.daysOfTheWeek.thursday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.thursday ? newAddHabits.daysOfTheWeek.thursday = false : newAddHabits.daysOfTheWeek.thursday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>Q</div>
                        <div className={addHabits.daysOfTheWeek.friday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.friday ? newAddHabits.daysOfTheWeek.friday = false : newAddHabits.daysOfTheWeek.friday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>S</div>
                        <div className={addHabits.daysOfTheWeek.saturday ? "day selected" : "day"} onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => {
                                    let newAddHabits = { ...addHabits };
                                    newAddHabits.daysOfTheWeek.saturday ? newAddHabits.daysOfTheWeek.saturday = false : newAddHabits.daysOfTheWeek.saturday = true;
                                    setAddHabits(newAddHabits);
                                }
                        }>S</div>
                    </div>
                    <div className="buttons">
                        <button type="button" className="cancel" onClick={() => {
                            let newAddHabits = { ...addHabits };
                            newAddHabits.visible = false;
                            setAddHabits(newAddHabits);
                        }}>Cancelar</button>
                        <button type="button" className="save" onClick={
                            disabled ? 
                                () => console.log("Espere, deixe de ser aguniado")
                            :
                                () => save()
                        }>{
                            disabled ?
                                <ThreeDots {...{ color: "white", width: "45px", height: "30px" }} />
                            :
                                "Salvar"
                        }</button>
                    </div>
                </AddHabits>

                <HabitsList token={token} renderAgain={renderAgain} setRenderAgain={setRenderAgain} />

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

    .habitsHeader {
        height: 85px;
        width: 100%;
        padding: 0 18px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .habitsHeader > p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        color: #126BA5;
    }

    .habitsHeader > .plus {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        font-size: 27px;
    }

    .hidden {
        visibility: hidden;
        height: 0;
        margin: 0;
    }
`;

const AddHabits = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 29px;

    display: flex;
    flex-direction: column;

    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding: 0 11px;
        margin-left: 18.5px;
        margin-top: 18px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    input[disabled] {
        cursor: not-allowed;
    }

    .daysOfTheWeek {
        margin-left: 18.5px;
        margin-top: 8px;
        display: flex;
        align-items: center;
    }

    .day {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin-right: 4px;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #DBDBDB;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .selected {
        background-color: #CFCFCF;
        border: 1px solid #CFCFCF;
        color: white;
    }

    .buttons {
        width: 303px;
        margin-left: 18.5px;
        margin-top: 29px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: 'Lexend Deca', sans-serif;
    }

    .cancel {
        font-size: 16px;
        background-color: white;
        border: 0;
        margin-right: 23px;
        color: #52B6FF;
    }

    .save {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        font-size: 16px;
        color: white;
        border: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;