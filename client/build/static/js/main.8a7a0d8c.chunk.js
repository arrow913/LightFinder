(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},56:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),s=a(11),i=a(2),o=a(17),m=a(12);var u=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},d=a(13),E=a.n(d);E.a.request({method:"GET",url:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBXqq-1Jq6i0QYq7-il5NRvUVldtNq0R-A&callback=initMap"}).then((function(e){console.log(e.data)})).catch((function(e){console.error(e)}));var h=function(){return E.a.get("/api/lights")},g=function(e){return E.a.post("/api/lights",e)};function p({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function f({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function b({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(56);function v({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function N({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function j(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function q(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var O=a(32),z=a(29),_=a(30),y=a.n(_);a(62);const A=({text:e})=>l.a.createElement("div",{className:"pin"},l.a.createElement(z.Icon,{icon:y.a,className:"pin-icon"}),l.a.createElement("p",{className:"pin-text"},e));var k=({lights:e,zoomLevel:t})=>l.a.createElement("div",{className:"map"},l.a.createElement("h2",{className:"map-h2"},"Come Visit The Lights"),l.a.createElement("div",{className:"google-map"},l.a.createElement(O.a,{bootstrapURLKeys:{key:"AIzaSyBXqq-1Jq6i0QYq7-il5NRvUVldtNq0R-A"},center:{lat:35.57429,lng:-86.57479},defaultZoom:t},e.map(e=>l.a.createElement(A,{lat:e.lat,lng:e.long,text:e.street_address})))));var x=function(){const e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),i=Object(m.a)(r,2),d=i[0],E=i[1],O=Object(n.useState)({email:""}),z=Object(m.a)(O,2),_=z[0],y=z[1];function A(e){const t=e.target,a=t.name,n=t.value;E(Object(o.a)(Object(o.a)({},d),{},{[a]:n}))}return Object(n.useEffect)(()=>{h().then(e=>c(e.data)).catch(e=>console.log(e))},[]),l.a.createElement(p,{fluid:!0},l.a.createElement(f,null,l.a.createElement(b,{size:"md-6"},l.a.createElement(u,null,l.a.createElement("h1",null,"Dancing Lights")),l.a.createElement("form",null,l.a.createElement(j,{name:"Email",placeholder:"Email (required)",onChange:e=>y({email:e.target.value})}),l.a.createElement(j,{onChange:A,name:"street_address",placeholder:"Street Address (required)"}),l.a.createElement(j,{onChange:A,name:"lat",placeholder:"lat (required)"}),l.a.createElement(j,{onChange:A,name:"long",placeholder:"long (required)"}),l.a.createElement(q,{disabled:!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(_.email),onClick:function(e){console.log(d),g({street_address:d.street_address,lat:d.lat,long:d.long}).then(e=>console.log(e)).catch(e=>console.log(e))}},"Lights"))),l.a.createElement(b,{size:"md-6 sm-12"},l.a.createElement(u,null,l.a.createElement("h1",null,"Where are the Lights?")),a.length?l.a.createElement(v,null,a.map(e=>l.a.createElement(N,{key:e._id},l.a.createElement(s.b,{to:"/lights/"+e._id},l.a.createElement("strong",null,e.street_address))))):l.a.createElement("h3",null,"No Results to Display"))),l.a.createElement(k,{lights:a,zoomLevel:10}))};var L=function(e){const t=Object(n.useState)({}),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(i.e)().id;return Object(n.useEffect)(()=>{h(o).then(e=>r(e.data)).catch(e=>console.log(e))}),l.a.createElement(p,{fluid:!0},l.a.createElement(f,null,l.a.createElement(b,{size:"md-12"},l.a.createElement(u,null,l.a.createElement("h1",null,c.place_id," - ",c.street_address)))),l.a.createElement(f,null,l.a.createElement(b,{size:"md-2"},l.a.createElement(s.b,{to:"/"},"\u2190 "))))};a(66);var S=function(){return l.a.createElement("nav",{className:"lightNav navbar navbar-expand-lg navbar-dark "},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Dancing Lights"))};var C=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(i.a,{exact:!0,path:["/","/lights"]},l.a.createElement(x,null)),l.a.createElement(i.a,{exact:!0,path:"/lights/:id"},l.a.createElement(L,null))))};r.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8a7a0d8c.chunk.js.map