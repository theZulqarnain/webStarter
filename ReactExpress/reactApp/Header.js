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
                        <Button color="contrast" > <Link to="/login" >Login</Link></Button>
                        {/*<Link to="/update_venue" onClick={this.sendEditData}>Update</Link>*/}
                        <Button color="contrast" > <Link to="/register" >Register</Link></Button>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Home;