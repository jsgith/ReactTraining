import React from "react";

export default function ImgValidator() {
    return (
        <main>
            <h3>Does this patient have a brain tumor?</h3>
            <form className="form">
                <button className="form--button">Yes</button>
                <button className="form--button">No</button>
                <button className="form--button_img">Get a new MRI Brain Image</button>
            </form>
        </main>
    )
}