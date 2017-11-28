import React,{Component} from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom'

// import './Home.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton  color="contrast" aria-label="Menu">

                        </IconButton>
                        <Typography type="title" color="inherit" >
                            Web Starter
                        </Typography>
                        <Button color="contrast" > <Link to="/" >Home</Link></Button>
                        {this.props.isLoggedIn ==="false"?
                            <div>
                                <Button color="contrast" > <Link to="/login" >Login</Link></Button>
                                <Button color="contrast" > <Link to="/register" >Register</Link></Button>
                            </div>
                            :
                            <Button color="contrast" > <Link to="/logout" >Logout</Link></Button> }



                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Home;