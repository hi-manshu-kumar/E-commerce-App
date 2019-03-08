import React, { Component } from 'react';
import FormField from '../utils/form/formfield';
 
import {connect } from 'react-redux';

class Login extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage : '' 
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage : '' 
            }
        }
    }

    updateForm = () => {
        const newFormdata = update(element, this.state.formdata, 'login');
    }

    submitForm = () => {

    }

    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={ (event) => this.submitForm() }>

                    <FormField
                        id = {'email'}
                        formdata = {this.state.formdata.email} 
                        change = {(element) => this.updateForm()}
                    />   
                </form>
            </div>
        );
    }
}

export default connect()(Login);