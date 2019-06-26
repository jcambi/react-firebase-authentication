(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=(a(71),a(21)),c=a(15),s=a(23),u=a(22),m=a(24),d=a(56),p=a.n(d).a.initializeApp({apiKey:"AIzaSyAM9mtOefT3XDfXVTXWC6lvrf_nEGbbcZk",authDomain:"my-firebase-project-324c4.firebaseapp.com",databaseURL:"https://my-firebase-project-324c4.firebaseio.com",projectId:"my-firebase-project-324c4",storageBucket:"",messagingSenderId:"420272381670"}),h=a(142),f=a(144),g=a(62),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,{color:"primary",position:"static"},i.a.createElement(f.a,null,i.a.createElement(g.a,{variant:"title",color:"inherit"},this.props.title))))}}]),t}(n.Component),v=a(58),E=a(150),y=a(151),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.inputKeyPress=function(e){"Enter"===e.key&&a.login(e)},a.passwordChange=function(e){a.setState({password:e.target.value})},a.login=function(e){e.preventDefault(),p.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){}).catch(function(e){a.setState({error:e})})},a.signup=function(e){e.preventDefault(),p.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){}).catch(function(e){a.setState({error:e})})},a.state={email:"",password:"",error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(E.a,{id:"outlined-email-input",value:this.state.email,onChange:this.onChange,label:"Email",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",style:{width:280}})),i.a.createElement("div",null,i.a.createElement(E.a,{id:"outlined-password-input",value:this.state.password,onChange:this.passwordChange,onKeyPress:this.inputKeyPress,label:"Password",type:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",style:{width:280}})),i.a.createElement("div",null,i.a.createElement(y.a,{size:"medium",onClick:this.login,style:{margin:10},variant:"contained",color:"primary"},"Log In"),i.a.createElement(y.a,{size:"medium",onClick:this.signup,style:{margin:10},variant:"contained",color:"primary"},"Sign Up")),this.state.error&&i.a.createElement("p",null,this.state.error.message))}}]),t}(n.Component),j=a(153),w=a(149),C=a(147),k=a(148),A=a(146),S=a(145),D=a(105),P=i.a.forwardRef(function(e,t){return i.a.createElement(S.a,Object.assign({direction:"up",ref:t},e))}),U={padding:60,margin:50},z={margin:10,marginTop:50},I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).logout=function(){p.auth().signOut()},a.deleteUser=function(){p.auth().currentUser.delete().then(function(){console.log("User deleted")}).catch(function(e){console.log(e)})},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.open?i.a.createElement("div",null,i.a.createElement(j.a,{open:this.state.open,TransitionComponent:P,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},i.a.createElement(A.a,{id:"alert-dialog-slide-title"},"Delete Account?"),i.a.createElement(C.a,null,i.a.createElement(k.a,{id:"alert-dialog-slide-description"},"Deleting account results to an irreversible action.")),i.a.createElement(w.a,null,i.a.createElement(y.a,{onClick:this.handleClose,color:"primary"},"Disagree"),i.a.createElement(y.a,{onClick:this.deleteUser,color:"primary"},"Agree")))):i.a.createElement("div",null,i.a.createElement(D.a,{style:U},i.a.createElement(g.a,{variant:"h1",component:"h3"},"Home Page"),i.a.createElement(g.a,{component:"p",style:{marginTop:20}},"Routes for Account Page, Password Update, Admin, etc. can be added."),i.a.createElement(y.a,{size:"medium",onClick:this.logout,style:z,variant:"contained",color:"primary"},"Log Out"),i.a.createElement(y.a,{size:"medium",onClick:this.handleClickOpen,style:z,variant:"contained",color:"primary"},"Delete Account")))}}]),t}(n.Component),T=(a(97),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",style:{marginTop:50}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},this.props.children)))}}]),t}(n.Component)),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,{title:"React with Google Firebase"}),i.a.createElement(T,null,this.state.user?i.a.createElement(I,null):i.a.createElement(O,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98).config(),o.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(101)},71:function(e,t,a){},97:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.620be219.chunk.js.map