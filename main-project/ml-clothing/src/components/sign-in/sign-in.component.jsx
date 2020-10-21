import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(); //prevents standard behavior

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target; //destructuring

    this.setState({ [name]: value }); //dynamic key, passing whichever name gets passed
  };

  render() {
    return (
      <div className='sing-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
          />

          <FormInput
            required
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
          />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
