import React from 'react';
import Home from "./Home";
import Activities from './Activities';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Pages(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/activities" element={<Activities/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Pages;