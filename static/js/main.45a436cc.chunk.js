(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),c=a(9),s=a(21),l=a(109),u=a(2),m=a(3),p=a(5),d=a(4),h=a(6),f=a(111),v=a(107),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={textChange:!1},a.validation=function(e){var t=e.target.value;t.length>0?a.setState({textChange:!0}):a.setState({textChange:!1}),t.length>2?a.props.changeState(!1):a.props.changeState(!0)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.changeState(!0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container p-0 tit"},r.a.createElement("div",{className:"title"},"HATO"),r.a.createElement("div",{className:"formInp"},r.a.createElement("p",{className:"subtext m-0"},"What is your name?"),r.a.createElement("div",{className:"inputWithIcon row justify-content-center mx-0"},r.a.createElement("input",{className:this.state.textChange?"change":"",onChange:this.validation,type:"text",placeholder:"Name",ref:function(t){e.userName=t}}),r.a.createElement("i",{className:"fa fa-user fa-lg fa-fw","aria-hidden":"true"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(v.a,{to:"/RectDevTest/SpokenLanguages"},r.a.createElement("button",{onClick:function(){e.props.NameOfUser(e.userName.value)},className:"btn",disabled:this.props.ButtonState},"Next")))))}}]),t}(n.Component),b=Object(c.b)(function(e){return{ButtonState:e.statusBtn}},function(e){return{changeState:function(t){e({type:"STATUS_BUTTON",payload:t})},NameOfUser:function(t){e({type:"USER_NAME",payload:t})}}})(g),E=a(23),y=a(15),N=a(16);function S(){var e=Object(y.a)(["\n  border-radius: 3px;\n  padding: 16px 17px 16px 16px;\n  width: 51px;\n  height: 51px;\n  font-size: 15px;\n  border: none;\n  padding: 0px;\n  margin: 0 14px 0 14px;\n  cursor: pointer;\n  background-color: rgba(240, 241, 243, 0.58);\n  color: rgba(186, 186, 186, 1);\n"]);return S=function(){return e},e}var x=N.a.button(S()),O=[{id:0,name:"RO"},{id:1,name:"RU"},{id:2,name:"EN"},{id:3,name:"FR"}],j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setStatus=function(){a.props.changeLang(a.state.langs.join(", ")),a.state.langs.length>0?a.props.changeState(!1):a.props.changeState(!0)},a.onCheck=function(e){var t=Object(E.a)(a.state.langs),n=t.indexOf(e.target.value);-1===n?a.setState({langs:a.state.langs.concat(e.target.value)},function(){a.setStatus()}):(t.splice(n,1),a.setState({langs:t},function(){a.setStatus()}));var r=Object(E.a)(a.state.selectedBtn),i=r.indexOf(e.target.id);-1===i?a.setState({selectedBtn:a.state.selectedBtn.concat(e.target.id)}):(r.splice(i,1),a.setState({selectedBtn:r}))},a.state={langs:[],selectedBtn:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.changeState(!0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container p-0 tit"},r.a.createElement("div",{className:"title"},"HATO"),r.a.createElement("div",{className:"formInp"},r.a.createElement("p",{className:"subtext m-0"},"Spoken languages"),r.a.createElement("div",{className:"row justify-content-center"},O.map(function(t,a){return r.a.createElement(x,{key:a,id:t.id,style:{backgroundColor:-1!==e.state.selectedBtn.indexOf(String(t.id))?"white":"",border:-1!==e.state.selectedBtn.indexOf(String(t.id))?"solid 1px #0086f8":"",color:-1!==e.state.selectedBtn.indexOf(String(t.id))?"#151517":""},value:t.name,onClick:e.onCheck},t.name)})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(v.a,{to:"/RectDevTest/Email"},r.a.createElement("button",{className:"btn",disabled:this.props.ButtonState},"Next")))))}}]),t}(n.Component),C=Object(c.b)(function(e){return{ButtonState:e.statusBtn}},function(e){return{changeLang:function(t){e({type:"CHECKED_LANGUAGES",payload:t})},changeState:function(t){e({type:"STATUS_BUTTON",payload:t})}}})(j),k=a(18),T=a(35),w=a(110),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ValidT:!1,ValidB:!1},a.handleChange=function(e){a.form.validateFields(e.target)},a.contactSubmit=function(e){e.preventDefault(),a.form.validateFields(),e.target.value.length>0?a.setState({ValidT:!0}):a.setState({ValidT:!1}),a.form.isValid()?(a.setState({ValidB:!1}),a.props.changeState(!1)):(a.setState({ValidB:!0}),a.props.changeState(!0))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.changeState(!0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container p-0 tit"},r.a.createElement("div",{className:"title"},"HATO"),r.a.createElement("div",{className:"formInp"},r.a.createElement("p",{className:"subtext m-0"},"What is your email?"),r.a.createElement(k.a,{ref:function(t){return e.form=t},onChange:this.contactSubmit,noValidate:!0},r.a.createElement("div",{className:"inputWithIcon row justify-content-center mx-0"},r.a.createElement("input",{className:this.state.ValidT?"change":"",style:{border:this.state.ValidB?"solid 1px #D96A17":""},type:"email",name:"email",placeholder:"Email",required:!0,ref:function(t){e.userEmail=t},onChange:this.handleChange}),r.a.createElement("i",{className:"fa fa-envelope fa-lg fa-fw","aria-hidden":"true"})),r.a.createElement("div",{className:"row mx-0",style:{paddingLeft:"75px"}},r.a.createElement(T.a,{onChange:this.val,for:"email"},r.a.createElement(w.a,{style:{color:"#D96A17",position:"absolute",marginTop:"-42px"},when:"*"},"This is not an email")))),r.a.createElement("div",{className:"row justify-content-center mx-0"},r.a.createElement(v.a,{to:"/RectDevTest/PhoneNumber"},r.a.createElement("button",{onClick:function(){e.props.userMail(e.userEmail.value)},className:"btn",disabled:this.props.ButtonState},"Next")))))}}]),t}(n.Component),B=Object(c.b)(function(e){return{ButtonState:e.statusBtn}},function(e){return{changeState:function(t){e({type:"STATUS_BUTTON",payload:t})},userMail:function(t){e({type:"USER_EMAIL",payload:t})}}})(D),L=a(53),R=a.n(L),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).setWrapperRef=function(e){a.wrapperRef=e},a.handleClickOutside=function(e){a.wrapperRef&&!a.wrapperRef.contains(e.target)&&a.props.children.props.closeCalendar()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.setWrapperRef},this.props.children)}}]),t}(n.Component),A=a(24),I=a.n(A),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={date:new Date,visibleCalendar:!1,textChange:!1},a.selectDate=function(){a.setState({visibleCalendar:!0})},a.closeCalendar=function(){a.setState({visibleCalendar:!1})},a.onChange=function(e){a.setState({date:e,textChange:!0},function(){return a.date.value=I()(a.state.date).format("DD.MM.YYYY")}),""!==e?a.props.changeState(!1):a.props.changeState(!0),a.closeCalendar()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.changeState(!0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container p-0 tit"},r.a.createElement("div",{className:"title"},"HATO"),r.a.createElement("div",{className:"formInp"},r.a.createElement("p",{className:"subtext m-0"},"What is your date of birth?"),r.a.createElement("div",{className:"inputWithIcon row justify-content-center mx-0"},r.a.createElement("input",{className:this.state.textChange?"change":"",onChange:this.validation,onClick:this.selectDate,type:"text",placeholder:"Select a date",ref:function(t){e.date=t}}),r.a.createElement("i",{className:"fa fa-calendar fa-lg fa-fw","aria-hidden":"true"})),this.state.visibleCalendar?r.a.createElement("div",{style:{position:"absolute",zIndex:10,marginLeft:"50px"},className:"row justify-content-center pb-5  mb-5"},r.a.createElement(U,null,r.a.createElement(R.a,{format:"DD.MM.YYYY",onChange:this.onChange,value:this.state.date,closeCalendar:this.closeCalendar}))):"",r.a.createElement("div",{style:{position:"relative",zIndex:9},className:"row justify-content-center"},r.a.createElement(v.a,{to:"/RectDevTest/Workspace/Info"},r.a.createElement("button",{onClick:function(){e.props.userBirth(e.date.value)},className:"btn",disabled:this.props.ButtonState},"Next")))))}}]),t}(n.Component),_=Object(c.b)(function(e){return{ButtonState:e.statusBtn}},function(e){return{changeState:function(t){e({type:"STATUS_BUTTON",payload:t})},userBirth:function(t){e({type:"USER_BIRTH",payload:t})}}})(M),q=a(112),H=a(108),W=(a(96),function(e,t){var a=[];return e.map(function(e){return-1!==JSON.stringify(e).indexOf(t)&&a.push(e),a}),a}),Y=function(){for(var e=[],t=0,a=localStorage.length;t<a;++t)e.push(JSON.parse(localStorage.getItem(localStorage.key(t))));return e},P=function(e){localStorage.removeItem(e)},V=function(e,t,a){return a?e.sort(z(String(t))):e.sort(z(String(t))).reverse()};function z(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,n){return(a[e]<n[e]?-1:a[e]>n[e]?1:0)*t}}function F(){var e=Object(y.a)(["\n  font-size: 16px;\n  color: white;\n  padding-top: 8px;\n  padding-bottom: 7px;\n"]);return F=function(){return e},e}var J=N.a.th(F()),G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={date:I()(new Date).format("DD.MM.YYYY"),data:[],timeData:[],sort:!0},a.addUser=function(){a.props.onAddUser(a.userName.value,a.state.date),a.userName.value="",a.userDate.value=""},a.handleDayChange=function(e){a.setState({date:I()(e).format("DD.MM.YYYY")})},a.getFromLocalStor=function(){var e=Y();a.setState({data:e,timeData:e})},a.searchUser=function(){a.setState({timeData:W(a.state.data,a.search.value)})},a.DeleteUser=function(e){P(e.target.id),a.getFromLocalStor()},a.sort=function(e){a.setState({sort:!a.state.sort}),a.setState({timeData:V(a.state.timeData,e.target.id,a.state.sort)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getFromLocalStor()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row",style:{marginLeft:"126px",paddingTop:"35px",paddingRight:"72px"}},r.a.createElement("div",{className:"card w-100"},r.a.createElement("div",{className:"card-body px-5"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"fa fa-search"}),r.a.createElement("input",{placeholder:"Search\u2026",onChange:this.searchUser,ref:function(t){e.search=t}})),r.a.createElement("table",{className:"table  table-sm table-striped "},r.a.createElement("thead",{style:{backgroundColor:"#0086F8"}},r.a.createElement("tr",null,r.a.createElement(J,{className:"pl-5",scope:"col"},"ID"),r.a.createElement(J,{className:"clicktit",onClick:this.sort,id:"name",scope:"col"},"Name"),r.a.createElement(J,{scope:"col"},"Email"),r.a.createElement(J,{className:"clicktit",onClick:this.sort,id:"phone",scope:"col"},"Phone Number"),r.a.createElement(J,{className:"clicktit",onClick:this.sort,id:"birth",scope:"col"},"Date of birth"),r.a.createElement(J,{className:"clicktit",onClick:this.sort,id:"languages",scope:"col"},"Languages"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.timeData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"pl-5"},t.id),r.a.createElement("td",{onClick:e.sort},t.name),r.a.createElement("td",null,t.email),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,t.birth),r.a.createElement("td",null,t.languages),r.a.createElement("td",{className:"pl-5 deleteBtn",id:t.id,onClick:e.DeleteUser},"Delete"))}))))))}}]),t}(n.Component);function K(){var e=Object(y.a)(["\n  font-size: 14px;\n"]);return K=function(){return e},e}function X(){var e=Object(y.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  color: #151517;\n"]);return X=function(){return e},e}function Q(){var e=Object(y.a)(["\n  font-size: 14px;\n  padding-top: 8px;\n  font-weight: bold;\n  color: #151517;\n"]);return Q=function(){return e},e}function Z(){var e=Object(y.a)(["\n  font-size: 45px;\n  font-weight: bold;\n  color: #304459;\n  line-height: 60%;\n"]);return Z=function(){return e},e}var $=N.a.span(Z()),ee=N.a.p(Q()),te=N.a.p(X()),ae=N.a.div(K()),ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).mxKeyLocStor=function(){for(var e=0,t=0,a=localStorage.length;t<a;++t)localStorage.key(t)>e&&(e=localStorage.key(t));return e},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Number(this.mxKeyLocStor())+1,t={id:e,name:this.props.name,email:this.props.email,phone:this.props.phone,birth:this.props.birth,languages:this.props.languages};""!==t.name.name&&""!==t.email.email&&""!==t.phone.phone&&""!==t.birth.birth&&t.languages.languages!==[]&&localStorage.setItem(Number(e),JSON.stringify(t))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{marginLeft:"126px",paddingTop:"35px"}},r.a.createElement("div",{className:"col-4 card-menu"},r.a.createElement($,null,"HATO"),r.a.createElement("div",{id:"about pl-0"},r.a.createElement(ee,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),r.a.createElement(ae,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.a.createElement("div",{className:"col-4 card-menu "},r.a.createElement("div",{className:"card cardinfo scrollbar-dusty-grass thin",id:"about"},r.a.createElement(te,null,"About HATO"),r.a.createElement(ae,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))),r.a.createElement("div",{className:"col-4 card-menu"},r.a.createElement("div",{className:"card cardinfo scrollbar-dusty-grass thin",id:"about"},r.a.createElement(te,null,"About HATO"),r.a.createElement(ae,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}}]),t}(n.Component),re=Object(c.b)(function(e){return{ButtonState:e.statusBtn,name:e.userName,email:e.userMail,phone:e.userPhone,birth:e.userBirth,languages:e.checkLng}})(ne),ie=a(33),oe=a(58),ce=a.n(oe),se=a(59),le=a.n(se),ue=a(60),me=a.n(ue),pe=a(61),de=a.n(pe),he=a(62),fe=a.n(he),ve=a(63),ge=a.n(ve);function be(){var e=Object(y.a)(["\n  font-size: 48px;\n  font-weight: bold;\n  color: #304459;\n  cursor: default;\n"]);return be=function(){return e},e}var Ee=N.a.span(be()),ye=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onMouseEnterHandler=function(){a.setState({changeColor:!0})},a.onMouseLeaveHandler=function(){a.setState({changeColor:!1})},a.state={isList:!1,changeColor:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row",style:{backgroundColor:"white",height:"70px"}},r.a.createElement("nav",{className:"d-md-block sidebar p-0"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement("ul",{className:"nav flex-column ",style:{backgroundColor:"white",height:"100vh",width:"83px"}},r.a.createElement("li",{className:"h5 nav-item d-flex justify-content-center"},r.a.createElement(Ee,null,"H")),r.a.createElement(v.a,{to:"/RectDevTest/Workspace/Info"},r.a.createElement("li",{className:"nav-item d-flex justify-content-center ".concat(-1===this.props.location.pathname.indexOf("List")?"menu":""),style:{padding:"20px 26px 20px 26px",marginTop:"5px"}},r.a.createElement(ie.a,{src:-1!==this.props.location.pathname.indexOf("List")?ce.a:me.a,evalScripts:"always",renumerateIRIElements:!1,svgClassName:"svg-class-name",svgStyle:{width:-1!==this.props.location.pathname.indexOf("List")?22:30,height:-1!==this.props.location.pathname.indexOf("List")?22:30},className:"wrapper-class-name"}))),r.a.createElement(v.a,{to:"/RectDevTest/Workspace/List"},r.a.createElement("li",{className:"nav-item d-flex justify-content-center ".concat(-1===this.props.location.pathname.indexOf("Info")?"menu":""),style:{padding:"20px 26px 20px 26px"}},r.a.createElement(ie.a,{src:-1!==this.props.location.pathname.indexOf("Info")?le.a:de.a,evalScripts:"always",renumerateIRIElements:!1,svgClassName:"svg-class-name",svgStyle:{width:-1!==this.props.location.pathname.indexOf("Info")?22:30,height:-1!==this.props.location.pathname.indexOf("Info")?22:30},className:"wrapper-class-name"})))))),-1!==this.props.location.pathname.indexOf("List")?r.a.createElement(v.a,{className:"ml-auto row m-0 pr-5 pt-4 adduser",to:"/RectDevTest",onMouseEnter:this.onMouseEnterHandler,onMouseLeave:this.onMouseLeaveHandler},r.a.createElement(ie.a,{src:this.state.changeColor?ge.a:fe.a,evalScripts:"always",renumerateIRIElements:!1,svgClassName:"svg-class-name",svgStyle:{width:25,height:25},className:"wrapper-class-name pl-0"}),r.a.createElement("span",{className:"col pr-0"},"Add user")):""),r.a.createElement("main",{role:"main"},r.a.createElement(q.a,null,r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/Workspace/List",component:G}),r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/Workspace/Info",component:re}))))}}]),t}(n.Component),Ne=Object(c.b)(function(e){return{ButtonState:e.statusBtn,selectedLngs:e.checkLng}},null)(ye),Se=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={textChange:!1},a.validation=function(e){e.target.value.length>0?(a.setState({textChange:!0}),a.props.changeState(!1)):(a.setState({textChange:!1}),a.props.changeState(!0))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.changeState(!0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container p-0 tit"},r.a.createElement("div",{className:"title"},"HATO"),r.a.createElement("div",{className:"formInp"},r.a.createElement("p",{className:"subtext m-0"},"What is your phone number?"),r.a.createElement("div",{className:"inputWithIcon row justify-content-center mx-0"},r.a.createElement("form",null,r.a.createElement("input",{className:this.state.textChange?"change":"",onChange:this.validation,placeholder:"Phone Number",type:"number",ref:function(t){e.userPhone=t}}),r.a.createElement("i",{className:"fa fa-phone fa-lg fa-fw","aria-hidden":"true"}))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(v.a,{to:"/RectDevTest/Birthday"},r.a.createElement("button",{onClick:function(){e.props.userPhone(e.userPhone.value)},className:"btn",disabled:this.props.ButtonState},"Next")))))}}]),t}(n.Component),xe=Object(c.b)(function(e){return{ButtonState:e.statusBtn}},function(e){return{changeState:function(t){e({type:"STATUS_BUTTON",payload:t})},userPhone:function(t){e({type:"USER_PHONE",payload:t})}}})(Se),Oe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/",component:b}),r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/SpokenLanguages",component:C}),r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/Email",component:B}),r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/Birthday",component:_}),r.a.createElement(H.a,{exact:!0,path:"/RectDevTest/PhoneNumber",component:xe}),r.a.createElement(H.a,{path:"/RectDevTest/Workspace",component:Ne}))}}]),t}(n.PureComponent),je=Object(f.a)(Object(c.b)(function(e){return{ButtonState:e.statusBtn}},function(e){return{changeState:function(t){e({type:"STATUS_BUTTON",payload:t})}}})(Oe)),Ce=(a(100),!0);var ke=[];var Te="";var we={name:""};var De={email:""};var Be={phone:""};var Le={birth:""};var Re=Object(s.b)({statusBtn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;return"STATUS_BUTTON"===t.type?t.payload:e},checkLng:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;return"CHECKED_LANGUAGES"===t.type?t.payload:e},filterUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;return"FILTER_USER"===t.type?t.payload:e},userName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return"USER_NAME"===t.type?t.payload:e},userMail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;return"USER_EMAIL"===t.type?t.payload:e},userPhone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;return"USER_PHONE"===t.type?t.payload:e},userBirth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;return"USER_BIRTH"===t.type?t.payload:e}}),Ue=(a(102),Object(s.c)(Re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(c.a,{store:Ue},r.a.createElement(l.a,null,r.a.createElement(je,null))),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/house-black-silhouette-without-door.2855eb43.svg"},59:function(e,t,a){e.exports=a.p+"static/media/list.f0db5cd3.svg"},60:function(e,t,a){e.exports=a.p+"static/media/house-black-silhouette-without-door1.5debbfba.svg"},61:function(e,t,a){e.exports=a.p+"static/media/list1.458e462f.svg"},62:function(e,t,a){e.exports=a.p+"static/media/plus-button.32743245.svg"},63:function(e,t,a){e.exports=a.p+"static/media/plus-buttonB.29e41544.svg"},66:function(e,t,a){e.exports=a(105)}},[[66,2,1]]]);
//# sourceMappingURL=main.45a436cc.chunk.js.map