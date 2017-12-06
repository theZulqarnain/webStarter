import React,{Component} from 'react';
import axios from 'axios';
const FileDownload = require('react-file-download');
import classNames from 'classnames';

import classes from './Home.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            val:'',
            authentication:''
        }
        this.downloader=this.downloader.bind(this);
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
        axios.post('/api/download/zip',this.state )
            .then(res=>{
                // res.json('wait until file downloaded!')
                console.log(res,'React response')
                FileDownload(res.data, 'codeBase.zip');
            })
    }
    authenticate(e,data){

        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var obj  = {}
        obj[data] = !this.state[data]
        this.setState(obj)
        console.log(obj)
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

                           <li className="liMargin" onClick={()=>{this.authentication('mongodb')}}>

                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/mongodb.svg" width="70px" height="70px" alt="MongoDB"/>
                                   <p>MongoDB</p>
                               </a>
                           </li>
                           <li className="active liMargin" onClick={()=>{this.authentication('mysql')}} >
                               <a href="#schedule" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/mysql.svg" width="70px" height="70px" alt="mysql"/>
                                   <p>MySQL</p>
                               </a>
                           </li>
                       </ul>
                   </div>
                   <hr/>
                   <div>
                       <div className="title">
                           <h3>FrontEnd</h3>
                       </div>

                       <ul className="nav nav-pills" role="tablist">

                           <li className="liMargin" onClick={()=>{this.authentication('react')}}>
                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/react.svg" width="70px" height="70px" alt="React"/>
                                   <p>React</p>
                               </a>
                           </li>
                           <li className="active liMargin" onClick={()=>{this.authentication('vue')}} >
                               <a href="#schedule" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/vue-9.svg" width="70px" height="70px" alt="Vue"/>
                                   <p>Vue</p>
                               </a>
                           </li>
                           <li className="liMargin" onClick={()=>{this.authentication('angular')}}>
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/angular-icon-1.svg" width="70px" height="70px" alt="angular"/>
                                   <p>Angular</p>
                               </a>
                           </li>
                           <li className="liMargin" onClick={()=>{this.authentication('')}}>
                               <a href="#payments" role="tab" data-toggle="tab">
                                   <i className="material-icons">attach_money</i>
                                   Payments
                               </a>
                           </li>
                       </ul>
                   </div>
                   <hr/>
                   <div>
                       <div className="title">
                           <h3>Backend</h3>
                       </div>

                       <ul className="nav nav-pills" role="tablist">

                           <li className="liMargin" onClick={()=>{this.authentication('express')}}>
                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/express-109.svg" width="70px" height="70px" alt="Express"/>
                                   <p>Express</p>
                               </a>
                           </li>
                           <li className="active liMargin" onClick={()=>{this.authentication('sails')}} >
                               <a href="#schedule" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/sails.svg" width="70px" height="70px" alt="sails"/>
                                   <p>Sails</p>
                               </a>
                           </li>
                           <li className="liMargin" onClick={()=>{this.authentication('meteor')}}>
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/meteor-5.svg" width="70px" height="70px" alt="meteor"/>
                                   <p>Meteor</p>
                               </a>
                           </li>
                           <li className="liMargin" onClick={()=>{this.authentication('hapi')}}>
                               <a href="#payments" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/hapi.svg" width="70px" height="70px" alt="hapi"/>
                                   Hapi
                               </a>
                           </li>
                       </ul>
                   </div>
                   <hr/>
                   <div>
                       <div className="title">
                           <h3>Authentication</h3>
                       </div>

                       <ul className="nav nav-pills menu" role="tablist">

                           <li id="test"  className={classNames({active: this.state.facebook, liMargin: true})} onClick={(e) => this.authenticate(e, "facebook")}>
                               <a href="#FaceBook" role="tab" data-toggle="tab" >
                                   <img src="./assets/icons/facebook-icon.svg" width="70px" height="70px" alt="React"/>
                                   <p>FaceBook</p>
                               </a>
                           </li>

                           <li onClick={(e)=>{this.authenticate(e, 'google')}} className= {classNames({active: this.state.google, liMargin: true})} >
                               <a href="#Google" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/google-icon.svg" width="70px" height="70px" alt="Google"/>
                                   <p>Google</p>
                               </a>
                           </li>

                           <li onClick={(e)=>{this.authenticate(e,'twitter')}} className= {classNames({active: this.state.twitter, liMargin: true})} >
                               <a href="#Twitter" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/twitter-3.svg" width="70px" height="70px" alt="Twitter"/>
                                   <p>Twitter</p>
                               </a>
                           </li>

                           <li onClick={(e)=>{this.authenticate(e,'github')}} className= {classNames({active: this.state.github, liMargin: true})} >
                               <a href="#Github" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/github-icon-1.svg" width="70px" height="70px" alt="github"/>
                                   Github
                               </a>
                           </li>
                       </ul>
                   </div>
                   <hr/>
                   <div>
                       <div className="title">
                           <h3>CSS Frameworks</h3>
                       </div>

                       <ul className="nav nav-pills" role="tablist">

                           <li className="liMargin" onClick={()=>{this.authentication('bootstrap')}}>
                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/bootstrap-icon.svg" width="70px" height="70px" alt="bootstrap"/>
                                   <p>Bootstrap</p>
                               </a>
                           </li>
                           <li className="active liMargin" onClick={()=>{this.authentication('materialui')}} >
                               <a href="#schedule" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/material-ui.svg" width="70px" height="70px" alt="material ui"/>
                                   <p>Material UI</p>
                               </a>
                           </li>
                           <li className="liMargin" onClick={()=>{this.authentication('semanticui')}}>
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/semantic-ui.svg" width="70px" height="70px" alt="semantic ui"/>
                                   <p>Semantic UI</p>
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