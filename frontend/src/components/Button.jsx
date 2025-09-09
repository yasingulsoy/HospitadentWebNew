import React from 'react'

const Button = ({text,btnStyle}) => {
  return (
    <>
    <button className={`bg-primary text-white rounded-lg py-4 px-12 font-semibold hover:bg-accent transition-colors duration-200 inline-block ${btnStyle}`}>{text}</button>
    </>
  )
}

export default Button
