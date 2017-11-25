import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import App from "./App.jsx"
import Register from './Users/register'

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
                    <Route exact path='/login' component={login} />
                    {/*<Route path="/signup"/>*/}
                    {/*<Route path='/update_venue' component={() => (<Update editValues={this.state.editValues} />)} />*/}
                </Switch>
            </main>

        )
    }
}

export default Main