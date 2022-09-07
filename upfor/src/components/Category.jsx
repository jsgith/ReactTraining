import React from 'react';
import { IoBookSharp } from "react-icons/io5";
import {MdSportsSoccer, MdAgriculture} from "react-icons/md";
import {SiGoogleclassroom} from "react-icons/si";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink to={"/actividades/literatura"}>
            <IoBookSharp/>
            <h4>Literatura</h4>
        </SLink>
        <SLink to={"/actividades/agricultura"}>
            <MdAgriculture/>
            <h4>Agricultura</h4>
        </SLink>
        <SLink to={"/actividades/desporto"}>
            <MdSportsSoccer/>
            <h4>Desporto</h4>
        </SLink>
        <SLink to={"/actividades/aprendizagem"}>
            <SiGoogleclassroom/>
            <h4>Aulas</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;

export default Category
