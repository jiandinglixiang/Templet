import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import App from './page/App'
import { connect } from 'react-redux'

function RouterRoot (props) {
  const style = {
    'display': 'flex',
    'margin': '0 auto',
    'minHeight': `${ props.minHeight }px`,
    'width': `${ props.minWidth }px`,
    'backgroundColor': '#fff'
  }

  return (
    <BrowserRouter>
      <div style={ style }>
        <Switch>
          <Route path="/index" component={ App }/>
          <Route path="/index2" component={ (App) => (<div>321321</div>) }/>
          <Redirect to="/index"/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default connect(state => ({
  minHeight: state.device.height,
  minWidth: state.device.width > 640 ? 640 : state.device.width
}))(RouterRoot)
