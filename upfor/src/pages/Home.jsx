import React from 'react';
import Services from "../components/Services";
import Popular from "../components/Popular";

function Home(props) {
    return (
        <div>
            <Popular/>
            <Services/>
        </div>
    );
}

export default Home;