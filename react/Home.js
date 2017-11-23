import React,{Component} from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
// import './Home.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            val:''
        }
    }

    backendCall(){
        {
            axios.get('/api/')
                .then(res=>{
                    // console.log(res.data);
                    this.setState({
                        val:res.data
                    })
                })
        }
    }

    componentDidMount(){
        this.backendCall();
    }
    render(){
        return(
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton  color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" >
                            Web Starter
                        </Typography>
                        <Button color="contrast">Login</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Typography type="display3" gutterBottom >
                        Welcome to the Web Starter
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Home;