import React,{Component} from 'react';
import axios from 'axios';
const FileDownload = require('react-file-download');
import classNames from 'classnames';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
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

                           <li onClick={(e)=>{this.authenticate(e,  'mongodb')}} className={classNames({active: this.state.mongodb, liMargin: true})}>

                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/mongodb.svg" width="70px" height="70px" alt="MongoDB"/>
                                   <p>MongoDB</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'mysql')}} className={classNames({active: this.state.mysql, liMargin: true})} >
                               <a href="#mysql" role="tab" data-toggle="tab">
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

                           <li  onClick={(e)=>{this.authenticate(e,'react')}} className={classNames({active: this.state.react, liMargin: true})}>
                               <a href="#react" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/react.svg" width="70px" height="70px" alt="React"/>
                                   <p>React</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'vue')}} className={classNames({active: this.state.vue, liMargin: true})}>
                               <a href="#vue" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/vue-9.svg" width="70px" height="70px" alt="Vue"/>
                                   <p>Vue</p>
                               </a>
                           </li>
                           <li  onClick={(e)=>{this.authenticate(e,'angular')}} className={classNames({active: this.state.angular, liMargin: true})}>
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/angular-icon-1.svg" width="70px" height="70px" alt="angular"/>
                                   <p>Angular</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'jade')}} className={classNames({active: this.state.jade, liMargin: true})}>
                               <a href="#jade" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/jade-3.svg" width="70px" height="70px" alt="Jade"/>
                                   <p>Jade</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'ejs')}} className={classNames({active: this.state.ejs, liMargin: true})}>
                               <a href="#ejs" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/ejs.png" width="70px" height="70px" alt="Ejs"/>
                                   <p>Ejs</p>
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

                           <li onClick={(e)=>{this.authenticate(e,'express')}} className={classNames({active: this.state.express, liMargin: true})}>
                               <a href="#dashboard" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/express-109.svg" width="70px" height="70px" alt="Express"/>
                                   <p>Express</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'sails')}} className={classNames({active: this.state.sails, liMargin: true})} >
                               <a href="#sails" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/sails.svg" width="70px" height="70px" alt="sails"/>
                                   <p>Sails</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'meteor')}} className={classNames({active: this.state.meteor, liMargin: true})}>
                               <a href="#meteor" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/meteor-5.svg" width="70px" height="70px" alt="meteor"/>
                                   <p>Meteor</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'hapi')}} className={classNames({active: this.state.hapi, liMargin: true})}>
                               <a href="#hapi" role="tab" data-toggle="tab">
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
                                   <p>Github</p>
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

                           <li onClick={(e)=>{this.authenticate(e,'bootstrap')}} className={classNames({active: this.state.bootstrap, liMargin: true})}>
                               <a href="#bootstrap" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/bootstrap-icon.svg" width="70px" height="70px" alt="bootstrap"/>
                                   <p>Bootstrap</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'materialui')}} className={classNames({active: this.state.materialui, liMargin: true})}>
                               <a href="#materailUI" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/material-ui.svg" width="70px" height="70px" alt="material ui"/>
                                   <p>Material UI</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'semanticui')}} className={classNames({active: this.state.semanticui, liMargin: true})}>
                               <a href="#semanticUI" role="tab" data-toggle="tab">
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