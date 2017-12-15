import React,{Component} from 'react';
import axios from 'axios';
const FileDownload = require('react-file-download');
import classNames from 'classnames';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            database:{mongodb:true},
            frontend:{react : true},
            backend:{express: true},
            authentication:{google: true},
            css:{material: true}
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
    downloader(){

        var state = this.state

        var serialize = function(obj, prefix) {
            var str = [], p;
            for(p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        serialize(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        }

        // window.open("/api/download/zip?"+serialize(state))

        window.open("/api/download/zip?"+serialize(state))



        // axios.get('/api/download/zip',this.state )
        //     .then(res=>{
        //         // res.json('wait until file downloaded!')
        //         console.log(res,'React response')
        //         FileDownload(res.data, 'codeBase.zip');
        //     })
    }
    authenticate(e, stack, option, multi){

        var obj = {};

        if(multi){
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        var t ={}
            t= {...this.state[stack]}

            obj[stack] = t;

            obj[stack][option] = !obj[stack][option]
        }else{

            obj[stack] = {};
            obj[stack][option]= true
        }


        this.setState(obj, function(){
            console.log(this.state)
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

                           <li onClick={(e)=>{this.authenticate(e,"database",'mongodb', false)}} className="liMargin active">

                               <a href="#mongodb" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/mongodb.svg" width="70px" height="70px" alt="MongoDB"/>
                                   <p>MongoDB</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,"database",'mysql', false)}} className="liMargin">
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

                           <li  onClick={(e)=>{this.authenticate(e,'frontend','react', false)}} className="liMargin">
                               <a href="#react" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/react.svg" width="70px" height="70px" alt="React"/>
                                   <p>React</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'frontend','vue', false)}} className="liMargin">
                               <a href="#vue" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/vue-9.svg" width="70px" height="70px" alt="Vue"/>
                                   <p>Vue</p>
                               </a>
                           </li>
                           <li  onClick={(e)=>{this.authenticate(e,'frontend','angular', false)}} className="liMargin">
                               <a href="#tasks" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/angular-icon-1.svg" width="70px" height="70px" alt="angular"/>
                                   <p>Angular</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'frontend','pug', false)}} className="liMargin">
                               <a href="#pug" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/pug.svg" width="70px" height="70px" alt="pug"/>
                                   <p>Pug</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'frontend','ejs', false)}} className="liMargin">
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

                           <li onClick={(e)=>{this.authenticate(e,'backend','express', false)}} className="liMargin">
                               <a href="#express" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/express-109.svg" width="70px" height="70px" alt="Express"/>
                                   <p>Express</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'backend','sails', false)}} className="liMargin">
                               <a href="#sails" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/sails.svg" width="70px" height="70px" alt="sails"/>
                                   <p>Sails</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'backend','meteor', false)}} className="liMargin">
                               <a href="#meteor" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/meteor-5.svg" width="70px" height="70px" alt="meteor"/>
                                   <p>Meteor</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'backend','hapi', false)}} className="liMargin">
                               <a href="#hapi" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/hapi.svg" width="70px" height="70px" alt="hapi"/>
                                   <p>Hapi</p>
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

                           <li id="test"  className={classNames({active: this.state.authentication && this.state.authentication.facebook, liMargin: true})} onClick={(e) => this.authenticate(e,"authentication",  "facebook", true)}>
                               <a href="#FaceBook" role="tab" data-toggle="tab" >
                                   <img src="./assets/icons/facebook-icon.svg" width="70px" height="70px" alt="React"/>
                                   <p>FaceBook</p>
                               </a>
                           </li>

                           <li onClick={(e)=>{this.authenticate(e,"authentication", 'google', true)}} className= {classNames({active: this.state.authentication&&  this.state.authentication.google, liMargin: true})} >
                               <a href="#Google" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/google-icon.svg" width="70px" height="70px" alt="Google"/>
                                   <p>Google</p>
                               </a>
                           </li>

                           <li onClick={(e)=>{this.authenticate(e,"authentication", 'twitter', true)}} className= {classNames({active: this.state.authentication && this.state.authentication.twitter, liMargin: true})} >
                               <a href="#Twitter" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/twitter-3.svg" width="70px" height="70px" alt="Twitter"/>
                                   <p>Twitter</p>
                               </a>
                           </li>

                           <li onClick={(e)=>{this.authenticate(e,"authentication", 'github', true)}} className= {classNames({active: this.state.authentication && this.state.authentication.github, liMargin: true})} >
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

                           <li onClick={(e)=>{this.authenticate(e,'css','bootstrap', false)}} className='liMargin'>
                               <a href="#bootstrap" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/bootstrap-icon.svg" width="70px" height="70px" alt="bootstrap"/>
                                   <p>Bootstrap</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'css','materialui', false)}} className="liMargin">
                               <a href="#materailUI" role="tab" data-toggle="tab">
                                   <img src="./assets/icons/material-ui.svg" width="70px" height="70px" alt="material ui"/>
                                   <p>Material UI</p>
                               </a>
                           </li>
                           <li onClick={(e)=>{this.authenticate(e,'css','semanticui', false)}} className="liMargin">
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