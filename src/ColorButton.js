import React from 'react'
import {ColorContext} from './ColorContext'
import './ColorButton.css'

export default function Colorbutton(props) {
  return(
    <ColorContext.Consumer>
      {
        context => <button className="Button" onClick={context.changeColor}>CHANGE THE COLOR</button> // yup, just like that
      }
    </ColorContext.Consumer>
  )
}