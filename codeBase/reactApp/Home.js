import React,{Component} from 'react';
import Typography from 'material-ui/Typography';
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