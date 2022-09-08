import React from "react";
import styled from "styled-components"; 
import serviceData from "../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {

    const [allServices] = React.useState(serviceData);

    const serviceDataArray = allServices.popular;
    
    return (
        <div>
            <Wrapper >
                <h3>Populares</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "3rem",
                }}>
                    {serviceDataArray.map((service) => {
                        return(
                            <SplideSlide key={service.id}>
                                <Card>
                                    <p>{service.title}</p>
                                    <img src={service.img_url} alt={service.title}/>
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: 0rem 0rem;
`;

const Card = styled.div`
    min-height: 13rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 0 3px black, 0 0 5px black;
    }

`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular;