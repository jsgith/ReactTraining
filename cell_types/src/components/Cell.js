import React from 'react'

export default function Cell(props) {
     return (
        <div className='cell'>
            <h3 className='cell--name'>{props.cellName}</h3>
            <img  src={`../../images/${props.img}`} className='cell--img'/>
            <p className='description'>{props.description}</p>
        </div>
     )
}