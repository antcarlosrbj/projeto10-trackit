import React from 'react';
import styled from 'styled-components';

export default function Header({perfilImage}) {
    return (
        <HeaderDiv>
            <p>TrackIt</p>
            <img src={perfilImage} alt='Perfil' />
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-left: 18px;
        font-family: 'Playball', cursive;
        font-size: 40px;
        color: white;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        object-fit: cover;
        margin-right: 18px;
    }
`;