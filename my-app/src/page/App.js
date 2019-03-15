import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Home from './index/home'
import Mine from './index/mine'
import style from './App.module.scss'

class App extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  RouterPush (path) {
    this.props.history.push(path)
  }

  render () {
    return (
      <div className={ style['app-page'] }>
        <Switch>
          <Route exact path="/index" component={ Home }/>
          <Route exact path='/index/mine' component={ Mine }/>
        </Switch>
        <div className={ style['nav-index'] }>
          <TabBar tabBarPosition="bottom">
            <TabBar.Item
              title="Home"
              key="Home"
              icon={ { uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' } }
              selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' } }
              selected={ this.props.location.pathname === '/index' }
              onPress={ this.RouterPush.bind(this, '/index') }
            />
            <TabBar.Item
              title="Mine"
              key="Mine"
              icon={ { uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' } }
              selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' } }
              selected={ this.props.location.pathname === '/index/mine' }
              onPress={ this.RouterPush.bind(this, '/index/mine') }
            />
          </TabBar>
        </div>
      </div>
    )
  }
}

export default App
