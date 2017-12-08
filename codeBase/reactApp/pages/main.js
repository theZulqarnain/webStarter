import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import App from "../components/App"
import Register from '../Users/register'
import Login from '../Users/login'
import Header from '../containers/Header'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:false
        }
        this.isLoggedIn=this.isLoggedIn.bind(this);
    }

    isLoggedIn(val){
        // debugger;
         this.setState({
             isLoggedIn:val
         }, function(){
             console.log(this.state.isLoggedIn);
         })
    }


    render(){
        return (
            <div>
                <Header isLoggedIn={this.state.isLoggedIn} isLoggedInfn={this.isLoggedIn}/>
                <main>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login'  component={() => (<Login isLoggedIn={this.isLoggedIn} loggedState={this.state.isLoggedIn}/>)} />
                        {/*<Route path="/signup"/>*/}
                        {/*<Route path='/update_venue' component={() => (<Update editValues={this.state.editValues} />)} />*/}
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Main