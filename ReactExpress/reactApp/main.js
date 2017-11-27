import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import App from "./App.jsx"
import Register from './Users/register'
import Login from './Users/login'
import Logout from './Users/logout'

class Main extends Component {
    constructor(props) {
        super(props);
    }



    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/logout' component={Logout} />
                    {/*<Route path="/signup"/>*/}
                    {/*<Route path='/update_venue' component={() => (<Update editValues={this.state.editValues} />)} />*/}
                </Switch>
            </main>

        )
    }
}

export default Main