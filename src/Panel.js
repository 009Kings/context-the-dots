import React from 'react'
import Dot from './Dot'

export default function Panel(props) {
  return(
    <div style={{height: '200px', width: '200px', background: "#888", postion: "relative", display: "flex", justifyContent: "space-around", flexFlow: "row wrap"}}>
      <Dot />
      <Dot />
      <Dot />
    </div>
  )
}