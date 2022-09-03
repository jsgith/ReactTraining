import React from "react";

export default function ImgSlide(props) {

    return (
        <div className="background">
            <h2 className="validate">{props.value}</h2>
            <img src={props.brainImage.randomImage} className="brainImage" alt="Displays the brain mri to evaluate"/>
        </div>
    )
}