import React from 'react'

function Image(props) {
  return (
    <div >
      <img src={props.link} alt="not available" height={props.height} style={{borderRadius:"50rem"}}/>
      
    </div>
  )
}

export default Image
