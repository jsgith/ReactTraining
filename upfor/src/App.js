import React from 'react';
import './App.css';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { SiApacheairflow } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <SiApacheairflow/>
          <Logo to={"/"}>upfor</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Montserrat Alternates', sans-serif;
`;

const Nav = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 4rem, 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
  a{
    margin-left: 10px;
  }
`;

export default App;
