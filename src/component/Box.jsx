import React from 'react'

const Box = ({title, item, gameResult}) => {
  console.log('item:', item, gameResult);

  const getBorderColor = () => {

    if (gameResult === 'WIN') {
      return 'green'
    }
    else if (gameResult === 'LOSE') {
      return 'red'
    }
    else {
      return 'black'
    }
  }

  return (
    <div 
      className='box'
      style={{ border: '7px solid ' + getBorderColor() }}
    >
      <h1 style={{color: getBorderColor()}}>{title}</h1>
      <img className='item-img' src={item && item.img} />
      <h2 style={{color: getBorderColor()}}>{gameResult}</h2>
    </div>
  )
}

export default Box