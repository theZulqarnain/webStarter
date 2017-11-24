import React,{Component} from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
const FileDownload = require('react-file-download');

// import './Home.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            val:''
        }
    }

    Home(){
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

    expressHtml(){
        axios.get('/api/download/expressHtml')
            .then(res=>{
                // res.json('wait until file downloaded!')
                FileDownload(res.data, 'ExpressEjs.zip');

            })
    }

    expressWithReact(){
        axios.get('/api/download/expressWithReact')
            .then(res=>{
                // res.json('wait until file downloaded!')
                FileDownload(res.data, 'ExpressReact.zip');

            })
    }

    expressWithVue(){
        axios.get('/api/download/expressWithReact')
            .then(res=>{
                // res.json('wait until file downloaded!')
                FileDownload(res.data, 'expressVue.zip');

            })
    }

    componentDidMount(){
        this.Home();
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
                <div>
                    <Button raised color="primary" onClick={this.expressWithReact}>
                        React with express
                    </Button>
                    <Button raised color="primary" onClick={this.expressWithVue}>
                        Vue with express
                    </Button>
                    <Button raised color="primary" onClick={this.expressWithVue}>
                        Angular with express
                    </Button>
                    <Button raised color="primary" onClick={this.expressHtml}>
                        Ejs with express
                    </Button>

                </div>
            </div>
        )
    }
}

export default Home;