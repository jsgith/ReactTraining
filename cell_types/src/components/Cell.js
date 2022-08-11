import React from 'react'

export default function Cell() {
     return (
        <div className='cell'>
            <h2 className='cell--name'>Astrocyte</h2>
            <img  src="../../images/astrocyte.jpg" className='cell--img'/>
            <h3 className='description'>Intracellular dye injections of protoplasmic astrocytes from the CA1 region of hippocampus of a 1 month old rat reveals highly ramified spongiform processes that span territories with minimal overlap. Astrocytes were filled with Lucifer Yellow. Optical sections were generated with a single photon confocal microscope. This image has been downsampled from the raw data image which can be accessed using the link provided to the Cell Centered Database.</h3>
        </div>
     )
}