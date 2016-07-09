import style from './index.css'
import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'

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
    return (
      <p>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </p>
    )
  }
})

const App = React.createClass({
  render () {
    return (
      <div className={style.component}>
        <Clock />
      </div>
    )
  }
})

ReactDom.render(
  <App />,
  document.getElementById('rocketclocks')
)
