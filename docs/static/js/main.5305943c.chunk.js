(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(62)},38:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(29),c=n.n(i),l=(n(38),n(39),n(12)),o=n(11),s=n(6),u=n(7),m=n(9),h=n(8),b=n(10),d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement("h1",null,"Home"),a.createElement("p",null))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement("h1",null,"About"),a.createElement("p",null,"The Grails of Dionysis are rare chalices of great power and debauchery. Their origins are shrouded in mystery but historians believe they originated somewhere in a garage in Ypsilanti during a inexplicable period of sobriety while in proximity to a lathe."),a.createElement("p",null,"Each hand-crafted Grail is a unique one-of-a-kind creation, a wonderous fusion of craftsmanship, skill, obscene humor, and whatever is lying around the garage."))}}]),t}(a.Component),p=n(30),E=n.n(p);var g=function(e){var t=e.data;return a.createElement("div",{className:"thumbnail-container"},a.createElement("h2",null,t.name),a.createElement("img",{src:"images/grail-".concat(t.id,"/thumbnail.jpg"),alt:"thumbnail"}))},v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={grails:[]},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data/gallery.data.json").then(function(e){return e.data}).then(function(t){e.setState({grails:t})})}},{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement("h1",null,"Grails"),this.state.grails.map(function(e){return a.createElement(g,{data:e})}))}}]),t}(a.Component),j=(n(57),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("nav",{className:"navbar-container"},a.createElement("h1",{className:"header"},"Grails of Dionysus"),a.createElement("div",{class:"links"},a.createElement(l.b,{className:"link",to:"/"},"Home"),a.createElement(l.b,{className:"link",to:"/grails"},"Grails"),a.createElement(l.b,{className:"link",to:"/about"},"About")))}}]),t}(a.Component));var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(j,null),r.a.createElement("div",{className:"page-container"},r.a.createElement(o.a,{path:"/",exact:!0,component:d}),r.a.createElement(o.a,{path:"/about",component:f}),r.a.createElement(o.a,{path:"/grails",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.5305943c.chunk.js.map