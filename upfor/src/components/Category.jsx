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
            <h4>Literatura</h4>
        </NavLink>
        <NavLink to={"/actividades/agricultura"}>
            <MdAgriculture/>
            <h4>Agricultura</h4>
        </NavLink>
        <NavLink to={"/actividades/desporto"}>
            <MdSportsSoccer/>
            <h4>Desporto</h4>
        </NavLink>
        <NavLink to={"/actividades/aprendizagem"}>
            <SiGoogleclassroom/>
            <h4>Aulas</h4>
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
