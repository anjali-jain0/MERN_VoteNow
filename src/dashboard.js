import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './nav';

class Dashboard extends Component {


	constructor(){
    super();
    this.state={
      user:'',
      me:''
    }
  }

   componentDidMount(){

    this.setState({me:this.props.location.state.usr});

    fetch('/mainpage')
    .then(res => res.json())
    .then(data => this.setState({user:data}));
    
  }
  
  render() {
  	 const user=this.state.user;
     const nav = (this.state.me) ? (<Nav  user={this.state.me} />) : null;
     return (
    <div>
    {nav}
     <div className="row">
    { user && user.map(user => {
        return (
         
    <div className="col s12 m3">
			      <div className="card">
			        <div className="card-image">
			          <img src="..." alt="pic1" />
			          <span className="card-title">Pic</span>
			        </div>
			        <div className="card-content">
			          <p>Name : {user.name}</p>
			        </div>
			        <Link to={'/vote/' + user._id}>
              <button>Vote</button>
              </Link>
			      </div>
      	 			
    </div>
      );
   
     
    })} </div> </div>
    );
  }
}

export default Dashboard;
