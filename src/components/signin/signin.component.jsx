import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithPopup, auth,  } from '../../firebase/firebase.utils';

import './signin.styles.scss';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label="email"/>
                    
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label="password"/>
                    
                    <div className="button">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithPopup} isGoogleSignIn>Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
