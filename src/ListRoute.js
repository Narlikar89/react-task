import React from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './List'
import Description from './Description'

// The Roster component matches one of two different routes
// depending on the full pathname
const ListRoute = () => (
  <Switch>
    <Route exact path='/issue' component={List}/>
    <Route path='/issue/:number' component={Description}/>
  </Switch>
)

export default ListRoute;