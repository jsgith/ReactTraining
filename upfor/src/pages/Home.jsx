import Services from "../components/Services";
import Popular from "../components/Popular";

import React from 'react';

function Home(props) {
    return (
        <div>
            <Popular/>
            <Services/>
        </div>
    );
}

export default Home;