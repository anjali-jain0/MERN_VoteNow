import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Topusers extends Component {

   constructor(){
    super();
    this.state={
      user:'',
    }
  }

  componentDidMount(){

    fetch('/topusers')
    .then(res => res.json())
    .then(data => this.setState({user:data}));
    
  }


  render() { 
    const user=this.state.user;

    return (
    <div>


     { user && user.map(user => {
        return (
          <div>
          <h4>Name : {user.name} , {user.votes} , {user.facemashes} </h4>
          <NavLink to={'/profile/' + user._id} >Profile</NavLink>
          </div>

      );
      })}
      </div>
  );
      }}

export default Topusers;