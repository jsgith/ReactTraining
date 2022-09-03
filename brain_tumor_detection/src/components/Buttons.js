import React from 'react'

function Buttons(props) {

  return (
    <div className="form">
        <button className="form--button" onClick={props.hasTumor}>Yes</button>
        <button className="form--button" onClick={props.hasNotTumor}>No</button>
        <button className="form--button_img" onClick={props.getBrainImage}>Get a new MRI Brain Image</button>
    </div>
  )
}

export default Buttons