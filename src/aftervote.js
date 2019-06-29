import React, { Component } from 'react';

class Aftervote extends Component {

   constructor(){
    super();
    this.state={
      user:'',
    }
  }
  
  componentWillMount(){

    fetch('/topusers')
    .then(res => res.json())
    .then(data => this.setState({user:data}));
    
  }
  
  handleClick = (e) => {
    e.preventDefault();
    const nid = this.props.match.params.id;
    fetch('/votedUser/' + nid)
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
        <button onClick={this.handleClick}>Vote</button>
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

export default Aftervote;
