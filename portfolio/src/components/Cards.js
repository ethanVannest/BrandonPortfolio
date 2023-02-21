import React from 'react'


const Cards = () => {
  return (
    <div>
      <div className='productOne'>
        <img src={require('../imgs/20170119_171628.jpg')} alt='project 1' className='max-w-sm'/>
        <img src={require('../imgs/20180927_091420.jpg')} alt='project 1' className='max-w-sm'/>
        <p className='text-xl font-bold underline'>Beautiful Tree</p>
      </div>
    </div>
  )
}

export default Cards