import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-buttom.components'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
const initialState = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ...initialState
        }
    }
    handleChange=(event)=>{
        const {value,name}=event.target
        this.setState({[name]:value})
    }
    handleSubmit = async event=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword} = this.state
        if(password.length < 6){
            alert('A senha deve ter no mínimo 6 caracteres')
            return
        }
        if(password!==confirmPassword){
            alert('Os campos "password" e "confirm password" não batem')
            return
        }
        try{
            const {user}  =  await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({...initialState})
        }catch(err){
            console.log('Erro ao criar user(forma tradicional):',err.message)
        }
    }
    render(){
        return(
            <div className='sign-up'>
                <h2>Create a new account with email and password</h2>
                <span>Please inform your data</span>

                <form className = 'sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                        name='displayName'
                        label='Name'
                        handleChange={this.handleChange}
                        value={this.state.displayName}
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
                                            <FormInput 
                        name='confirmPassword'
                        type='password'
                        label='confirm password'
                        value={this.state.confirmPassword} 
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