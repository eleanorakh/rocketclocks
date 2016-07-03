import style from './index.css'
import React from 'react'
import ReactDom from 'react-dom'

const App = React.createClass({
  render () {
    return <div className={style.component}><h1>Hello, world</h1></div>
  }
})

ReactDom.render(
  <App />,
  document.getElementById('rocketclocks')
)
