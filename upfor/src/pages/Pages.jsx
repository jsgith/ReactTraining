import React from 'react';
import Home from "./Home";
import Activities from './Activities';
import Searched from './Searched';
import Details from './Details';
import { Route, Routes} from "react-router-dom";

function Pages(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/actividades/:type" element={<Activities/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/details/:name" element={<Details/>}/>
        </Routes>
    );
}

export default Pages;