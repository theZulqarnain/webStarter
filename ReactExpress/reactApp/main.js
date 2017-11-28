import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import App from "./App.jsx"
import Register from './Users/register'
import Login from './Users/login'
import Logout from './Users/logout'
import Header from './Header'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:false
        }
        this.isLoggedIn=this.isLoggedIn.bind(this);
    }

    isLoggedIn(val){
         this.setState({
             isLoggedIn:val
         })
    }

    render(){
        return (
            <div>
                <Header isLoggedIn={this.state.isLoggedIn.toString()}/>
                <main>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login'  component={() => (<Login isLoggedIn={this.isLoggedIn} loggedState={this.state.isLoggedIn}/>)} />
                        <Route exact path='/logout' component={() => (<Logout isLoggedIn={this.isLoggedIn} loggedState={this.state.isLoggedIn}/>)} />
                        {/*<Route path="/signup"/>*/}
                        {/*<Route path='/update_venue' component={() => (<Update editValues={this.state.editValues} />)} />*/}
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Main