import React, {Component} from 'react'
import Header from '../Header'
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import { browserHistory } from 'react-router'

class register extends Component{
    constructor(props){
        super(props);
        this.state={
            isRegistered:false
        }
        this.updateForm=this.updateForm.bind(this);
        this.registerFormHandler=this.registerFormHandler.bind(this);
    }

    registerFormHandler(){
        // console.log('entered')
        // axios.post(`/api/Sauth/register`,{username:this.state.username,password:this.state.password})
        //     .then(res => {
        //         console.log(res.data)
        //         if(res.data){
        //             this.setState({
        //                 isRegistered:res.data
        //             })
        //
        //         }
        //
        //     });
        axios.post(`/api/Sauth/register`,{firstname:this.state.firstname,lastname:this.state.lastname, email:this.state.email,password:this.state.password})
            .then(res => {
                console.log(res.data)
                if(res.data){
                    this.setState({
                        isRegistered:res.data
                    })

                }

            });
    }
    updateForm(e){
        var obj ={};
        obj[e.target.name] = e.target.value;
        this.setState(obj, function(){

        })
    }

    render(){
        return(
            <div>

                <div>
                    <Typography type="display1" gutterBottom >
                        Registration Form
                    </Typography>
                    <FormControl>
                        <TextField
                            label="First Name"
                            id="firstname"
                            type="text"
                            name="firstname"
                            onChange={this.updateForm}/>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Last Name"
                            id="lastname"
                            type="text"
                            name="lastname"
                            onChange={this.updateForm}/>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Email"
                            id="email"
                            type="email"
                            name="email"
                            onChange={this.updateForm}/>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            name="password"
                            onChange={this.updateForm}/>
                    </FormControl>
                    <Button raised dense onClick={this.registerFormHandler}>
                        <Save  />
                        Save
                    </Button>
                </div>
                {this.state.isRegistered ?
                    <Redirect to='/login'/>
                    : null}
            </div>
        )
    }
}

export default register;