import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { map } from 'lodash'

import configRouting from './configRouting'

const Routing = ({ setRefreshCheckLogin }) => {
  return (
    <Router>
      <Switch>
        {map(configRouting, (route, index) => (
          <Route key={index} path={route.path} exact={route.exact} >
            <route.page setRefreshCheckLogin={setRefreshCheckLogin}/>
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default Routing
