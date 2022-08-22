import React from "react";
import brainData from "../brain_tumorData";

export default function ImgSlide() {

    const [value, setValue] = React.useState("");

    const [allBrainImages] = React.useState(brainData)

    const brainDataArray = allBrainImages.data
    const randomNumber = Math.floor(Math.random() * brainDataArray.length)
    const url = brainDataArray[randomNumber].url
    const tumor = brainDataArray[randomNumber].tumor

    const [brainImage, setBrainImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://firebasestorage.googleapis.com/v0/b/reacttraining-8e53c.appspot.com/o/mri_brain_images_dataset%2Fyes%2FY1.jpg?alt=media&token=c7b26cfa-ea20-4819-bee4-62a8b5a7678f",
        hasTumor: "yes"
    })

    function getBrainImage() {
        setValue("")
        setBrainImage(prevBrainImage => ({
            ...prevBrainImage,
            randomImage: url,
            hasTumor: tumor
        }))
    }

    function hasTumor() {
            if(brainImage.hasTumor === "yes") {
                setValue("Correct!")
            } else {
                setValue("Wrong...")
            }
    }

    function hasNotTumor() {
        if(brainImage.hasTumor === "no") {
            setValue("Correct!")
        } else {
            setValue("Wrong...")
        }
}

    return (
        <main>
            <h3>Does this patient have a brain tumor?</h3>
            <div className="form">
                <button className="form--button" onClick={hasTumor}>Yes</button>
                <button className="form--button" onClick={hasNotTumor}>No</button>
                <button className="form--button_img" onClick={getBrainImage}>Get a new MRI Brain Image</button>
            </div>
            <div className="background">
                <h2 className="validate">{value}</h2>
                <img src={brainImage.randomImage} className="brainImage" alt="Displays the brain mri to evaluate"/>
            </div>
        </main>
    )
}