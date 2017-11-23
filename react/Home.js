import React,{Component} from 'react';
import axios from 'axios';

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
                    console.log(res.data);
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
        // axios.get('/api/')
        //     .then(res=>{
        //         // console.log(res.data);
        //         this.setState={
        //             val:res.data
        //         }
        //     },function () {
        //         console.log(this.state.val)
        //     });

        // this.backendCall();
        return(
            <div>
                <div>Testing</div>
                <p>{this.state.val}</p>
            </div>
        )
    }
}

export default Home;