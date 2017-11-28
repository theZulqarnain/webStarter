import React,{Component} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { browserHistory } from 'react-router'
import { Route, Redirect } from 'react-router'

class Logout extends Component{
    constructor(props) {
        super(props);

        this.state = {
            logout:false
        }
    }
    logoutHandler(){
        axios.get(`/api/users/logout`)
            .then(res => {
                // this.context.router.history.push("/");
                // console.log(res);
                // this.setState({
                //     logout:true
                // })
                this.props.isLoggedIn(false);
            });
    }
    componentDidMount(){
        this.logoutHandler();
    }
    render(){
        return(
            <div>
                <button onClick={this.logoutHandler}>click</button>
                {this.props.loggedState ?
                    <Redirect to='/'/>
                    : null}
            </div>
        )
    }
}

export default Logout;