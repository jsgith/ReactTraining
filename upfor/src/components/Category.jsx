import { IoBookSharp } from "react-icons/io5";
import {MdSportsSoccer, MdAgriculture} from "react-icons/md";
import {SiGoogleclassroom} from "react-icons/si";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import React from 'react';

function Category() {
  return (
    <List>
        <div>
            <IoBookSharp/>
            <h4>Catequese, Leitura</h4>
        </div>
        <div>
            <MdAgriculture/>
            <h4>Plantar, Semear, Colher, Alimentar Animais</h4>
        </div>
        <div>
            <MdSportsSoccer/>
            <h4>Futebol, Ténis, Badminton, Basquetebol, Natação</h4>
        </div>
        <div>
            <SiGoogleclassroom/>
            <h4>Aulas, Palestras</h4>
        </div>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category
