import React from 'react';
import Home from "./Home";
import Activities from './Activities';
import { Route, Routes} from "react-router-dom";

function Pages(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/actividades/:type" element={<Activities/>}/>
        </Routes>
    );
}

export default Pages;