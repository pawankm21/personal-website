(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);n(88);var a=n(8),c=n(37),s=n.n(c),i=n(14),o=(n(93),n(22)),r=n.n(o),l=(n(100),n(101),n(2));function d(e){return Object(l.jsxs)("div",{className:"window",children:[Object(l.jsx)("button",{onClick:function(){e.setAppear(!1)},className:"dot",style:{backgroundColor:"#FF453A"}}),Object(l.jsx)("button",{onClick:function(){e.setMaximize(!e.isMax)},className:"dot",style:{backgroundColor:"#FFD60A"}}),Object(l.jsx)("button",{onClick:function(){e.setMinimize(!0)},className:"dot",style:{backgroundColor:"#32D74B"}})]})}function j(e){return Object(l.jsx)(r.a,{handle:".page-window",children:Object(l.jsx)("div",{className:"window-position",children:Object(l.jsxs)("div",{className:"page-window",children:[Object(l.jsx)(d,{setAppear:e.setAppear}),"sorry! This doesn't have anything yet\ud83d\ude14"]})})})}function b(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(l.jsxs)("section",{children:[Object(l.jsx)(r.a,{grid:[50,50],children:Object(l.jsxs)("button",{className:"container",onClick:function(){s(!c)},children:[Object(l.jsx)("img",{draggable:"false",className:"file-icon",alt:"file icon",src:"/personal-website"+"/images/".concat(e.icon,".png")}),Object(l.jsx)("p",{children:e.name})]})}),c?Object(l.jsx)(j,{text:"Sorry this doesn't have any text yet!",setAppear:s}):""]})}function p(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(l.jsxs)("section",{children:[Object(l.jsx)(r.a,{grid:[50,50],children:Object(l.jsxs)("button",{className:"container",onClick:function(){s(!c)},children:[Object(l.jsx)("img",{draggable:"false",className:"folder-icon",alt:"folder icon",src:"/personal-website"+"/images/".concat(e.icon,".png")}),Object(l.jsx)("p",{children:e.name})]})}),c?Object(l.jsx)(j,{text:"Sorry this doesn't have any text yet!",setAppear:s}):""]})}n(103);var m,x=function(){var e=new Date,t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],s=n[1];return setInterval((function(){s(new Date)}),1e3),Object(l.jsxs)("div",{className:"taskbar",children:[Object(l.jsx)("span",{id:"date",children:"".concat(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][c.getDay()]," ").concat(c.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][c.getMonth()]," ").concat(c.getFullYear())}),Object(l.jsxs)("span",{id:"icons-container",children:[Object(l.jsx)("span",{children:Object(l.jsx)("img",{"data-tip":"wifi","data-for":"wifi",className:"taskbar-icons",src:"/personal-website/images/wifi.png",alt:"wifi"})}),Object(l.jsx)("span",{children:Object(l.jsx)("img",{"data-tip":"battery","data-for":"battery",className:"taskbar-icons",src:"/personal-website/images/battery-status.png",alt:"battery"})}),Object(l.jsx)("span",{children:Object(l.jsx)("img",{"data-tip":"settings","data-for":"settings",className:"taskbar-icons",src:"/personal-website/images/settings.png",alt:"settings"})}),Object(l.jsx)("span",{children:Object(l.jsx)("img",{"data-tip":"power","data-for":"power",className:"taskbar-icons",src:"/personal-website/images/power.png",alt:"power"})})]}),Object(l.jsx)("span",{id:"time",children:c.toLocaleTimeString()})]})},u=(n(104),n(84));n(105);var h=function(e){var t=[String.raw(m||(m=Object(u.a)(["\n  /$$$$$$\n /$$__  $$\n| $$   $$\n| $$  | $$\n| $$$$$$$/\n| $$____/ \n| $$      \n| $$      \n|__/"],["\n  /$$$$$$\n /$$__  $$\n| $$  \\ $$\n| $$  | $$\n| $$$$$$$/\n| $$____/ \n| $$      \n| $$      \n|__/"])))],n="",c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=(s[0],s[1]);function j(e){var t=e.key;n.length<10&&(o(!0),n+=t),console.log(n)}function b(e){e.key;o(!1)}Object(a.useEffect)((function(){return document.getElementById("command-line").addEventListener("keydown",j),document.getElementById("command-line").addEventListener("keyup",b),function(){try{document.getElementById("command-line").removeEventListener("keydown",j),document.getElementById("command-line").removeEventListener("keyup",b)}catch(e){console.log("removed")}}}),[]);var p=Object(a.useState)(!1),x=Object(i.a)(p,2),h=x[0],f=x[1];return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{id:"terminal",style:h?{width:"500px",height:"500px"}:{},children:[Object(l.jsx)("div",{className:"window",children:Object(l.jsx)(d,{setAppear:e.setAppear,setMinimize:e.setMinimize,setMaximize:f,isMax:h})}),Object(l.jsx)("div",{id:"command-line",tabIndex:"0",children:Object(l.jsx)("span",{children:"$"})}),Object(l.jsx)("pre",{children:t[0]})]})})};n(106);function f(e){return Object(l.jsx)("span",{"data-tip":e.name,"data-for":e.name,children:Object(l.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:Object(l.jsx)("img",{className:"dock-icons",alt:e.name+" icon",src:"/personal-website"+"/images/".concat(e.name,".png")})})})}var O=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(!1),r=Object(i.a)(o,2),d=r[0],j=r[1];return Object(l.jsxs)("div",{children:[c&&!d?Object(l.jsx)(h,{setAppear:s,minimize:d,setMinimize:j,appear:c}):"",Object(l.jsx)("div",{className:"dock",children:Object(l.jsxs)("span",{id:"dock-container",children:[Object(l.jsx)("button",{href:"#","data-tip":"Terminal","data-for":"Terminal",onClick:function(){c?j(!d):s(!0)},style:c?{borderBottom:"solid grey"}:{border:"none"},children:Object(l.jsx)("img",{className:"dock-icons",alt:"Terminal icon",src:"/personal-website/images/terminal.png"})}),Object(l.jsx)(f,{name:"github",link:"https://github.com/pawankm21"}),Object(l.jsx)(f,{name:"leetcode",link:"https://leetcode.com/pawan994567/"}),Object(l.jsx)(f,{name:"linkedin",link:"https://www.linkedin.com/in/pawan-kumar-mishra/"}),Object(l.jsx)(f,{name:"devpost",link:"https://devpost.com/pawan994567?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"}),Object(l.jsx)(f,{name:"binarysearch",link:"https://binarysearch.com/@/pawan"})]})})]})},g=n(15),v=n(38),y=n.n(v);n(107),n(108);function $(){return Object(l.jsx)("div",{className:"name",children:Object(l.jsxs)(y.a,{avgTypingDelay:120,stdTypingDelay:5,startDelay:1e3,children:[Object(l.jsxs)("span",{children:["I am Paw$n",Object(l.jsx)(y.a.Backspace,{count:2,delay:200}),"an."]}),Object(l.jsx)("br",{}),Object(l.jsx)(y.a.Delay,{ms:1e3}),Object(l.jsx)("span",{children:"An aspiring "}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:" Web Developer."})]})})}n(109);var w=n(85),k=n(86),_=n.n(k),N=n(87);n(442);function D(e){return Object(l.jsx)("div",{className:"circle-position",style:{right:e.right,top:e.top},children:Object(l.jsx)(N.a,{tiltMaxAngleX:15,tiltMaxAngleY:15,gyroscope:!0,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"10%",tiltReverse:!0,perspective:100,scale:1,children:Object(l.jsx)("div",{className:"circle",style:{background:e.color},children:Object(l.jsx)("img",{src:e.src,alt:e.alt})})})})}var A=function(){return document.getElementById("terminal"),Object(l.jsxs)("div",{id:"app",children:[Object(l.jsx)(x,{}),Object(l.jsx)(_.a,{className:"particles",height:"100vh",width:"100vw",params:w}),Object(l.jsx)($,{}),Object(l.jsx)(D,{top:"50px",right:"300px",src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",alt:"javaScript",color:"#F0DB4F"}),Object(l.jsx)($,{}),Object(l.jsx)(D,{top:"50px",right:"180px",src:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",alt:"css",color:"#379AD6"}),Object(l.jsx)(D,{top:"160px",right:"230px",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",alt:"react",color:"#379AD6"}),Object(l.jsx)(D,{top:"160px",right:"110px",src:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",alt:"html",color:"#E44D26"}),Object(l.jsx)(D,{top:"270px",right:"300px",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",alt:"python",color:"white"}),Object(l.jsx)(D,{top:"270px",right:"180px",src:"https://icon-library.com/images/django-icon/django-icon-0.jpg",alt:"python",color:"#092D1F"}),Object(l.jsx)("div",{className:"folders",children:Object(l.jsx)(p,{icon:"folder",name:"About me"})}),Object(l.jsx)("div",{className:"folders",children:Object(l.jsx)(p,{icon:"folder",name:"Projects"})}),Object(l.jsx)("div",{className:"folders",children:Object(l.jsx)(b,{icon:"text",name:"Hobbies"})}),Object(l.jsx)("div",{className:"folders",children:Object(l.jsx)(b,{icon:"text",name:"Contact Me"})}),Object(l.jsx)(O,{}),Object(l.jsx)(g.a,{id:"battery",effect:"solid",children:Object(l.jsx)("span",{children:"I am ".concat((new Date).getFullYear()-2001," years old")})}),Object(l.jsx)(g.a,{id:"settings",effect:"solid",children:Object(l.jsx)("span",{children:"settings"})}),Object(l.jsx)(g.a,{id:"power",effect:"solid",children:Object(l.jsx)("span",{children:"power"})}),Object(l.jsx)(g.a,{id:"wifi",effect:"solid",children:"Connect with me"}),Object(l.jsx)(g.a,{id:"BinarySearch",effect:"solid"}),Object(l.jsx)(g.a,{id:"GitHub",effect:"solid"}),Object(l.jsx)(g.a,{id:"Leetcode",effect:"solid"}),Object(l.jsx)(g.a,{id:"LinkedIn",effect:"solid"}),Object(l.jsx)(g.a,{id:"Devpost",effect:"solid"}),Object(l.jsx)(g.a,{id:"Terminal",effect:"solid"})]})},S=Object(l.jsx)(A,{});s.a.render(S,document.getElementById("root"))},85:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":60,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":100,"duration":0.4},"push":{"particles_nb":2},"remove":{"particles_nb":2}}},"retina_detect":true}')},88:function(e,t,n){},93:function(e,t,n){}},[[443,1,2]]]);
//# sourceMappingURL=main.441472f6.chunk.js.map