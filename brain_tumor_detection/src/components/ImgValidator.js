import React from "react";
import brainData from "../brain_tumorData";

export default function ImgValidator() {

    const [brainImage, setBrainImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://firebasestorage.googleapis.com/v0/b/reacttraining-8e53c.appspot.com/o/mri_brain_images_dataset%2Fyes%2FY1.jpg?alt=media&token=c7b26cfa-ea20-4819-bee4-62a8b5a7678f"
    })

    const [allBrainImages] = React.useState(brainData)

    function getBrainImage() {
        const brainDataArray = allBrainImages.data
        const randomNumber = Math.floor(Math.random() * brainDataArray.length)
        const url = brainDataArray[randomNumber].url
        setBrainImage(prevBrainImage => ({
            ...prevBrainImage,
            randomImage: url
        }))
    }

    return (
        <main>
            <h3>Does this patient have a brain tumor?</h3>
            <div className="form">
                <button className="form--button">Yes</button>
                <button className="form--button">No</button>
                <button onClick={getBrainImage} className="form--button_img">Get a new MRI Brain Image</button>
            </div>
            <img src={brainImage.randomImage} className="brainImage" alt="Displays the brain mri to evaluate"/>
        </main>
    )
}