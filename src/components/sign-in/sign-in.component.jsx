import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-buttom.components'
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }

    handleChange=(event)=>{
        const {value,name}=event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required={true}/>

                    <FormInput 
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required={true}/>
                    <CustomButtom type='submit'>SIGN IN</CustomButtom>
                </form>
            </div>
        )
    }
}


export default SignIn