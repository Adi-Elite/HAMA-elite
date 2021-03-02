import React, { Component } from 'react';
import './SignIn.css';
import {Card,FormCheck,Button} from 'react-bootstrap';
import 'firebase/auth';
import {auth} from '../firebaseConfig';


 class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:''
       }
    }
    login = (e) =>{
        e.preventDefault();
        console.log(this.state);
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
    }).catch((err)=>{
        console.log();
    })
    }
    handleonchange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    
    render() {
        const {
            user,
            signIn
          } = this.props;          
        return (
            <div className='card'>
                <Card style={{backgroundColor:"gray",color:"white"}}>
                    <Card.Title>Sign In</Card.Title>
                    <Card.Body>
                        <div className='icons'>
                            <i className="fas fa-user"style={{marginTop:"0.5rem"}} ></i>
                            <input placeholder='username' name="email" type='text' onChange={this.handleonchange}/>
                        </div>
                        <br/>
                        <div className="icons">
                            <i className="fas fa-key" style={{marginTop:"0.5rem"}} ></i>
                            <input placeholder='password' name="password" type='password' onChange={this.handleonchange} />
                        </div>
                        <div style={{display:'flex',justifyContent:"flex-start"}}>
                            <FormCheck/>
                            Remember me
                        </div>
                        <div style={{textAlign:"center",padding:"0.5rem"}} >
                        <Button  onClick={this.login}style={{backgroundColor:"orange",color:"black"}}>Login</Button>
                        </div>
                    </Card.Body>
                </Card>                
            </div>
        )
    }
}

export default SignIn;