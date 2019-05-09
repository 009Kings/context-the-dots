import React from 'react'
import './Dot.css'
import {ColorContext} from './ColorContext'

export default function Dot() {
  return (
    <ColorContext.Consumer>
    { // open a block
      ({color}) => { // Anonymous function with destructuring syntax to access `color` from the Context
        let style = {
          background: color, // this is our Context color!
          boxShadow: `0 .2em 0 0 ${color}80` 
        }
        return (
          <div style={style} className="Dot"></div>
        )
      }
    }
  </ColorContext.Consumer>
  )
}