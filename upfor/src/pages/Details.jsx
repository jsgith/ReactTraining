import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import dataAll from '../data'

function Details() {

    const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState('summary');
    let params = useParams();

    function getDetails(id) {
        const service = dataAll.services.find(service => service.id ===id);
        setDetails(service);
    }

    useEffect(() => {
        getDetails(params.name);
    },[params.name]);

    return(
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.img_url} alt=""/>
            </div>
            <Info>
                <Button className={activeTab === 'summary' ? 'active' : ''} onClick={() => setActiveTab('summary')}>Summary</Button>
                <Button className={activeTab === 'information' ? 'active' : ''} onClick={() => setActiveTab('information')}>Information</Button>
                {activeTab === "summary" && (
                    <div>
                        <h3>{details.summary}</h3>
                    </div>
                )
                }
                {activeTab === "information" && (
                    <div>
                    <h3>{details.info}</h3>
                </div>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    img {
        border-radius: 1rem;
        position: absolute;
        width: 300px;
        height: 200px;
        left: 10%;
        object-fit: cover;
    }

    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }

`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Details;