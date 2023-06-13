import React from 'react'

function Cards(props) {

    const itemClass = props.item.stats ? " active " + props.item.stats : "" 

  return (
    <div onClick={() => props.handleClick(props.id)} className={"card" + itemClass}>
        <img className='img' src={props.item.img} alt="img" />
    </div>
  )
}

export default Cards