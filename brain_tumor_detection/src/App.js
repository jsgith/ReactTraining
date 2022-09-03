import './App.css';
import Header from './components/Header';
import ImgSlide from './components/ImgSlide';
import Buttons from './components/Buttons';

import brainData from "./brain_tumorData";

import React from 'react';

function App() {

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
    <div className="App">
      <Header/>
      <h3>Does this patient have a brain tumor?</h3>
      <main>
        <Buttons getBrainImage={getBrainImage} hasNotTumor={hasNotTumor} hasTumor={hasTumor}/>
        <ImgSlide brainImage={brainImage} value={value}/>
      </main>
    </div>
  );
}

export default App;
