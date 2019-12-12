import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListRoute from './ListRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/issue'>Issues</Link></li> 
            </ul>
          </section>
          <hr />
        </div>
        <main>
          <Switch>
            {/* <Route exact path='/' component={App}/> */}
            <Route path='/issue' component={ListRoute}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;