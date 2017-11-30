import React,{Component} from 'react';
import axios from 'axios';
const FileDownload = require('react-file-download');

import classNamees from './Home.css'
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
    expressWithAngular(){
        axios.get('/api/download/expressWithAngular')
            .then(res=>{
                // res.json('wait until file downloaded!')
                FileDownload(res.data, 'expressAngular.zip');

            })
    }
    downloader(){
        axios.get('/api/download/zip')
            .then(res=>{
                // res.json('wait until file downloaded!')
                console.log(res,'React response')
            })
    }
    componentDidMount(){
        this.Home();
    }
    render(){
        return(
           <div>
               <div className="container">
                   <h2 className="text-center">Let's,Customize Your Dream Project</h2>
                   <div>
                       <div className="title">
                           <h3>Database</h3>
                       </div>

                       <ul className="nav nav-pills" role="tablist">

                           <li className="liMargin">
                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <i className="material-icons">dashboard</i>
                                   Dashboard
                               </a>
                           </li>
                           <li className="active liMargin"  >
                               <a href="#schedule" role="tab" data-toggle="tab">
                                   <i className="material-icons">schedule</i>
                                   Schedule
                               </a>
                           </li>
                           <li className="liMargin">
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <i className="material-icons">list</i>
                                   Tasks
                               </a>
                           </li>
                           <li className="liMargin">
                               <a href="#payments" role="tab" data-toggle="tab">
                                   <i className="material-icons">attach_money</i>
                                   Payments
                               </a>
                           </li>
                       </ul>
                   </div>

                   <div>
                       <div className="title">
                           <h3>FrontEnd</h3>
                       </div>

                       <ul className="nav nav-pills" role="tablist">

                           <li className="liMargin">
                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <i className="material-icons">dashboard</i>
                                   Dashboard
                               </a>
                           </li>
                           <li className="active liMargin"  >
                               <a href="#schedule" role="tab" data-toggle="tab">
                                   <i className="material-icons">schedule</i>
                                   Schedule
                               </a>
                           </li>
                           <li className="liMargin">
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <i className="material-icons">list</i>
                                   Tasks
                               </a>
                           </li>
                           <li className="liMargin">
                               <a href="#payments" role="tab" data-toggle="tab">
                                   <i className="material-icons">attach_money</i>
                                   Payments
                               </a>
                           </li>
                       </ul>
                   </div>

                       <div className="text-center">
                           <button className="btn btn-primary " onClick={this.downloader}>Download</button>
                       </div>
               </div>
           </div>
        )
    }
}

export default Home;