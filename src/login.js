import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';



class Login extends React.Component{

    constructor(){
        super()
    }
 
    render(){
        return(
            <div id='loginform'>
                <h2 id='logintext'>Please Login</h2>
                <Form />

            </div>
        )
            
        
    }
}

export default Login;

class Form extends React.Component{
    render(){
        return(
            <div>
<FormInput description="Username" placeholder="Enter your username" type="text" />
<FormInput description="Email" placeholder="Enter your email" type="text" />
<br />
<FormButton title="Log In"/>
</div>
        )
    }
}

class FormButton extends React.Component{
    render(){
        return(
            <div id="button" class="row-button">
       <Link to='/items' style={{ textDecoration: 'none', color: 'darkslategrey' }}>{this.props.title}</Link>
          
        </div>
        )
    }
}
 
 class FormInput extends React.Component{
     render(){
         return(
            <div class="row">
            <label>{this.props.description}</label>
            <input type={this.props.type} placeholder={this.props.placeholder}/>
           
          </div> 
         )
     }
 }
