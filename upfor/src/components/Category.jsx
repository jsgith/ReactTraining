import React from 'react';
import { IoBookSharp } from "react-icons/io5";
import {MdSportsSoccer, MdAgriculture} from "react-icons/md";
import {SiGoogleclassroom} from "react-icons/si";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
        <NavLink to={"/actividades/literatura"}>
            <IoBookSharp/>
            <h4>Catequese, Leitura</h4>
        </NavLink>
        <NavLink to={"/actividades/agricultura"}>
            <MdAgriculture/>
            <h4>Plantar, Semear, Colher, Alimentar Animais</h4>
        </NavLink>
        <NavLink to={"/actividades/desporto"}>
            <MdSportsSoccer/>
            <h4>Futebol, Ténis, Badminton, Basquetebol, Natação</h4>
        </NavLink>
        <NavLink to={"/actividades/aprendizagem"}>
            <SiGoogleclassroom/>
            <h4>Aulas, Palestras</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category
