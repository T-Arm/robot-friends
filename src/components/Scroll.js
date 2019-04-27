import React from 'react'

const Scroll = (props) => {
  return (
    <div style= {{height: '500px',
                  overflowY: 'scroll',
                  border: '1px solid rgb(0,0,0,.5'}}>
      {props.children}
    </div>
  )
}

export default Scroll