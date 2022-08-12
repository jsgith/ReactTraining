import React from 'react'

export default function Cell(props) {
     return (
        <div className='cell'>
            <div className='cell--badge'>B_W</div>
            <h3 className='cell--name'>{props.cellName}</h3>
            <img  src={`../../images/${props.img}`} className='cell--img' alt='Cell'/>
            <p className='cell--description'>{props.description}</p>
        </div>
     )
}