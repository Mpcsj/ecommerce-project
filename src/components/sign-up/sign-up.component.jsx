import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-buttom.components'

export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    handleChange=(event)=>{
        const {value,name}=event.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-up'>
                <h2>Create a new account</h2>
                <span>Please inform your data</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput 
                        name='email'
                        label='Name'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required={true}/>

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
                    <div className='buttons'>
                        <CustomButtom type='submit'>SIGN UP</CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}