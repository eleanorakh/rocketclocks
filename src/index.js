import style from './index.css'
import React from 'react'
import ReactDom from 'react-dom'

const momentTz = require('moment-timezone')

const Clock = React.createClass({
  getInitialState () {
    return {date: new Date()}
  },

  componentDidMount () {
    setInterval(function () {
      this.setState({date: new Date()})
    }.bind(this), 100)
  },

  render () {
    const time = momentTz().tz(this.props.timezone).format('MMMM Do YYYY, h:mm:ss a')
    return (
      <p>
        {time}
      </p>
    )
  }
})

const App = React.createClass({
  render () {
    return (
      <div className={style.component}>
        <Clock timezone='Australia/Sydney' />
        <Clock timezone='America/New_York' />
      </div>
    )
  }
})

ReactDom.render(
  <App />,
  document.getElementById('rocketclocks')
)
