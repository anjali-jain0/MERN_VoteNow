import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Logout from './logout';
import Login  from './login';
import Profile from './profile';
import Topusers from './topusers';
import Editprofile from './editprofile';
import Aftervote from './aftervote';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div className='App'>
      <Switch>
      <Route  exact path='/main' component={Dashboard} />
      <Route path='/logout' component={Logout} />
      <Route path='/login' component={Login} />
      <Route path='/topusers' component={Topusers} />
      <Route path='/editprofile/:id' component={Editprofile} />
      <Route path='/profile/:id' component={Profile} />
      <Route path='/vote/:id' component={Aftervote} />
      </Switch>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
