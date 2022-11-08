import React, { Component } from 'react'
import './App.css';

class ClassForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        person: [
            {
            name:"Kingsly",
            email:"Arhin.kingsley1@gmail.com",
            password:"", 
        },
        {
            name:"Kingsly",
            email:"Arhin.kingsley1@gmail.com",
            password:"", 
        },
        ],
            name: "",
            email: "",
            password: "",
        };
    }

    handleChange =(e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
        this.setState({[e.target.email] : e.target.value});
        this.setState({[e.target.password] : e.target.value});

    }

    handleSubmit = (e)=>{
       e.preventDefault();
       const newPerson = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
       };
        console.log(newPerson)
       this.setState({
        persons: [...this.state.person, newPerson]
       })
    };

  render() {
    return (
        <section style={{margin: '2rem'}}>
        <form onSubmit={this.handleSubmit} className="top">
         <label>Name</label>
         <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
         <br/>
         <label>Email</label>
         <input type="text" Name="email" value={this.state.email} onChange={this.handleChange}></input>
         <br/>
         <label>Password</label>
         <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
         <br/>
         <button onClick={this.handleSubmit}>Submit</button>
        </form>

        {this.state.person.map((item, index)=> {
            return(
                <div className='myform' key={index}>
        <h4>{item.name}</h4>
        <p>{item.email}</p>
        <p>{item.password}</p>
        <hr/> 
      </div>
            )
        })}
      
      </section>
    )
  }
}

export default ClassForm;
