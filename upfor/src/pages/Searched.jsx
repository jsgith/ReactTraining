import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import allData from '../data';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    function getSearched(name) {

        switch(name) {
            case "literatura":
                setSearchedRecipes(allData.literature)
                break;
            case "agricultura":
                setSearchedRecipes(allData.agriculture)
                break;
        }  
    }
    
    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return (
        <Grid>
            {searchedRecipes.map((item) => { 
                return(
                    <Card key={item.id}>
                    <img src={item.img_url} alt="" />
                    <h4>{item.title}</h4>
                </Card>
                );
            })}
        </Grid>
    )
}

//Auto-fit varies the amout of columns according to the width
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
  grid-auto-rows: 300px;
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched