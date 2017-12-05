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
        axios.post(`/api/auth/register`,{username:this.state.username,password:this.state.password})
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
                            label="username"
                            id="username"
                            type="text"
                            name="username"
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