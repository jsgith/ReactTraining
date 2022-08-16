import React from 'react'

export default function Cell(props) {
     return (
        <div className='cell'>
            <h3 className='cell--name'>{props.item.cellName}</h3>
            {props.item.blackAndWhite && <div className='cell--badge'>B_W</div>}
            <img  src={`../../images/${props.item.image}`} className='cell--img' alt='Cell'/>
            <p className='cell--description'>{props.item.description}</p>
        </div>
     )
}