(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},49:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),s=a(8),i=a(1),m=a(16),o=a(10);var u=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},d=a(11),E=a.n(d),h=function(){return E.a.get("/api/lights")},f=function(e){return E.a.post("/api/lights",e)};function g({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function b({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function p({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(49);function v({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function j({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function N(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function O(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var _=function(){const e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(o.a)(c,2),d=i[0],E=i[1];function _(e){const t=e.target,a=t.name,n=t.value;E(Object(m.a)(Object(m.a)({},d),{},{[a]:n}))}return Object(n.useEffect)(()=>{h().then(e=>r(e.data)).catch(e=>console.log(e))},[]),l.a.createElement(g,{fluid:!0},l.a.createElement(b,null,l.a.createElement(p,{size:"md-6"},l.a.createElement(u,null,l.a.createElement("h1",null,"Dancing Lights")),l.a.createElement("form",null,l.a.createElement(N,{onChange:_,name:"Email",placeholder:"Email (required)"}),l.a.createElement(N,{onChange:_,name:"street_address",placeholder:"Street Address (required)"}),l.a.createElement(O,{onClick:function(e){console.log(d),f({street_address:d.street_address}).then(e=>console.log(e)).catch(e=>console.log(e))}},"Lights"))),l.a.createElement(p,{size:"md-6 sm-12"},l.a.createElement(u,null,l.a.createElement("h1",null,"Where are the Lights?")),a.length?l.a.createElement(v,null,a.map(e=>l.a.createElement(j,{key:e._id},l.a.createElement(s.b,{to:"/lights/"+e._id},l.a.createElement("strong",null,e.place_id," - ",e.street_address))))):l.a.createElement("h3",null,"No Results to Display"))))};var k=function(e){const t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],m=Object(i.e)().id;return Object(n.useEffect)(()=>{h(m).then(e=>c(e.data)).catch(e=>console.log(e))}),l.a.createElement(g,{fluid:!0},l.a.createElement(b,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(u,null,l.a.createElement("h1",null,r.place_id," - ",r.street_address)))),l.a.createElement(b,null,l.a.createElement(p,{size:"md-2"},l.a.createElement(s.b,{to:"/"},"\u2190 "))))};a(55);var x=function(){return l.a.createElement("nav",{className:"lightNav navbar navbar-expand-lg navbar-dark "},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Dancing Lights"))};var y=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(i.a,{exact:!0,path:["/","/lights"]},l.a.createElement(_,null)),l.a.createElement(i.a,{exact:!0,path:"/lights/:id"},l.a.createElement(k,null))))};c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bc0a44b5.chunk.js.map