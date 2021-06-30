import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Event from './Event';
//import Profile from'./Profile'
//import Life from './Life'
//import Forms from './Forms';

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"",
      password:"",
      nameError:"",
      passwordError:""
    }
  }
  valid()
  {
    if(!this.state.name.includes("@")&& this.state.password.length<5){
      this.setState(
        {nameError:"Invalid Name",passwordError:"Password lenght should be more than 5"})
    }
    else if(!this.state.name.includes("@")){
      this.setState(
        {nameError:"Invalid Name"})
    }
    else if(this.state.password.length<5){
      this.setState(
        {passwordError:"Password lenght should be more than 5"})
    }
    else 
    return true 

  }
  submit()
  {
    this.setState(
      {nameError:"",passwordError:""})
    if(this.valid())
    {
      alert("form has been submited")
    }
    
  }
  render(){
  return (
    <div className="App">
      <h1>Form Validation</h1>
      <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} />
      <p style={{color:"red",fontSize:"12px"}}>{this.state.nameError}</p>
      <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
      <p style={{color:"red",fontSize:"12px"}}>{this.state.passwordError}</p>
      <button onClick={()=>this.submit()}>Submit</button>
    
    </div>
  );
}
}

export default App;
