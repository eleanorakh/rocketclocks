import style from './index.css'
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <div className={style.component}><h1>Hello, world</h1></div>,
  document.getElementById('rocketclocks')
)
