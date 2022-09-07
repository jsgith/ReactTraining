import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import allData from '../data';

function Activities() {

  let params = useParams();

  const [data, setData] = useState([]);

  function getActivities(name) {

    switch(name) {
      case "literatura":
        setData(allData.literature)
        break;
      case "agricultura":
        setData(allData.agriculture)
        break;
    }  
  } 
  
  useEffect(()=>{
    getActivities(params.type)
  }, [params.type]);
  
  return (
    <Grid>
      {data.map((image) => {
        return(
          <Card key={image.id}>
              <img src={image.img_url} alt=""/>
              <h4>{image.title}</h4>
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

export default Activities