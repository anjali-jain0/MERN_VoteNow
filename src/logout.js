import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component {
  
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      user:''
    }
  }

  handleChange(e){
    this.setState({[e.target.id]:e.target.value});
  }

  handleSubmit = (e) => {

     const email=this.state.email;
     const pwd=this.state.password;
     const fname=this.state.firstname;
     const lname=this.state.lastname;

    e.preventDefault();
     fetch('/newuser/' + email + '/' + pwd + '/' + fname + '/' + lname, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    })
     .then(res => res.json())
     .then(data => this.setState({user:data}))
  }
 

  render() {
    const usr = this.state.user;
     if(usr){
        return (
            <Redirect to={{pathname:'/main' , state:{usr:usr}}} />
            );
    }
    else {
      return (

      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange.bind(this)} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange.bind(this)} />
          </div>
           <div className='input-field'>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' id='firstname' onChange={this.handleChange.bind(this)} />
          </div>
           <div className='input-field'>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' id='lastname' onChange={this.handleChange.bind(this)} />
          </div>
          <div className='input-field'>
            <button type="submit" className='btn #009688 lighten-1 z-dpth-0'>Sign Up</button>
          </div>
        </form>
      </div>

    );
  }
}}

export default Logout;
