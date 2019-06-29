import React, { Component } from 'react';

class Profile extends Component {

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
  for(var i=0;i<user.length;i++)
  {
    if(user[i]._id===this.props.match.params.id)
    {
       var mainuser=(<div>
        <h2>Name :{user[i].name}</h2>
        <p>Email : {user[i].email}</p>
        <p>Votes : {user[i].votes}</p>
        <p>Facemashes:{user[i].facemashes}</p>
        <p>Ranking :{user[i].ranking}  </p>
        <p>Profile Views :{user[i].views}</p>
     </div>);

    }
  }
  
    return (
     <div>
        {mainuser}
     </div>

    );
  }
}

export default Profile;
