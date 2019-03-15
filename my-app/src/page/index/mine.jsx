import React, { Component } from 'react'
import { ReduxRoute } from '../../tool/router-redux'
import { Button } from 'antd-mobile'
import { Link } from 'react-router-dom'

class Mine extends Component {
  render () {
    return (<div>
      <Link to="/index2"><p> { this.props.a }测试{ this.props.b }</p></Link>
      <Button type='primary' onClick={ this.props.cClick1 }>实时1</Button><br/>
      <Button type='warning' onClick={ this.props.cClick2 }>实时2</Button><br/>
      <Button type='primary' onClick={ this.props.cClick3 }>异步3</Button><br/>
      <Button type='warning' onClick={ this.props.cClick4 }>异步4</Button><br/>
      <Button type='primary' onClick={ this.props.cClick5 }>随机5</Button><br/>
      <Button type='warning' onClick={ this.props.cClick6 }>随机6</Button><br/>
    </div>)
  }
}

export default ReduxRoute(
  (state, props) => ({
    a: state.home.count,
    b: state.mine.count
  }),
  (dispatch, props) => ({
    cClick1: () => dispatch({ type: 'ADD_HOME', payload: 10 }),
    cClick2: () => dispatch({ type: 'DEL_HOME', payload: 10 }),
    cClick3: () => dispatch({ type: 'ADD_HOME_ASYNC', payload: 10 }),
    cClick4: () => dispatch({ type: 'DEL_HOME_ASYNC', payload: 10 }),
    cClick5: () => dispatch({ type: 'ADD_MINE_ASYNC', payload: Math.random() * 100 }),
    cClick6: () => dispatch({ type: 'DEL_MINE_ASYNC', payload: Math.random() * 100 })
  })
)(Mine)
