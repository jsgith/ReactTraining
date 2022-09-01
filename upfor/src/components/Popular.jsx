import React from "react";
import styled from "styled-components"; 
import serviceData from "../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {

    const [allServices] = React.useState(serviceData);

    const serviceDataArray = allServices.data;

    console.log(serviceDataArray);
    
    return (
        <div>
            <Wrapper >
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "5rem",
                }}>
                    {serviceDataArray.map((service) => {
                        return(
                            <SplideSlide>
                                <Card>
                                    <p>{service.title}</p>
                                    <img src={service.img_url} alt={service.title}/>
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
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
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
    }

`;

export default Popular;