import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.css} card-shadow`}>{props.children}</div>
  )
}

export default Card