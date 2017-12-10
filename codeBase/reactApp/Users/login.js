import React, {Component} from 'react';
import { Route, Redirect } from 'react-router';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import axios from 'axios';

class login extends Component{
    constructor(props){
        super(props);
        this.updateForm=this.updateForm.bind(this);
        this.loginHandler=this.loginHandler.bind(this);
        this.GoogleloginHandler=this.GoogleloginHandler.bind(this);
    }
    username
    GoogleloginHandler(){
        console.log('googleHandler')
        axios.get(`/api/auth/google`)
            .then(res => {
                console.log(res.data);
                this.props.isLoggedIn(res.data.isLoggedin)
            });
    }

    fbloginHandler(){
        axios.get(`/api/auth/facebook`)
            .then(res => {
                console.log(res.data);
                this.props.isLoggedIn(res.data.isLoggedin)
            });
    }
    githubloginHandler(){
        axios.get(`/api/auth/github`)
            .then(res => {
                console.log(res.data);
                this.props.isLoggedIn(res.data.isLoggedin)
            });
    }
    /*sequel login start*/
    loginHandler(){
        axios.post(`/api/auth/login`,{email:this.state.email,password:this.state.password})
            .then(res => {
                this.props.isLoggedIn(res.data.isLoggedin)
            });
    }
    /* sequel login end*/
    /* mongo login start*/
    loginHandler(){
        axios.post(`/api/auth/login`,{:this.state.username,password:this.state.password})
            .then(res => {
                this.props.isLoggedIn(res.data.isLoggedin)
            });
    }
    /* mongo login end*/
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
                        Login Form
                    </Typography>
                    {/*sequel form start*/}
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
                    {/*sequel form end*/}
                    <Button raised dense onClick={this.loginHandler}>
                        <Save  />
                        Login
                    </Button>
                </div>
                <div>
                    <Typography type="display1" gutterBottom >
                        Social Login
                    </Typography>
                    {/*google button*/}
                    <Button raised dense onClick={this.GoogleloginHandler}>
                        Google
                    </Button>
                    {/*google button end*/}
                    {/*facebook button*/}
                    <Button raised dense onClick={this.fbloginHandler}>
                        Facebook
                    </Button>
                    /*facebook button end*/
                    {/*github button*/}
                    <Button raised dense onClick={this.githubloginHandler}>
                        Github
                    </Button>
                    {/*github button end*/}
                </div>
                {this.props.loggedState ?
                    <Redirect to='/'/>
                    : null}
            </div>
        )
    }
}

export default login;