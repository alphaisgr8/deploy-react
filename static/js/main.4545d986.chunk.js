(this.webpackJsonptrial=this.webpackJsonptrial||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),i=a.n(l),c=(a(15),a(1)),r=a(8),s=a(4),p=a(5),u=a(7),m=a(6),h=a(9),d=(a(16),function(e){return o.a.createElement("div",{className:"peeps",onClick:e.click},o.a.createElement("p",null,"Hi! I am ",e.name,". My age is ",e.age,"."),o.a.createElement("p",null,e.children),o.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}))}),g=(a(17),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={people:[{id:"qwq",name:"Aplha",age:13},{id:"wee",name:"Beta",age:34},{id:"weds",name:"Gamma",age:46}],showPeople:!1},a.getDetails=function(e,t){var n=a.state.people.findIndex((function(e){return e.id===t})),o=Object(r.a)({},a.state.people[n]);o.name=e.target.value;var l=Object(c.a)(a.state.people);l[n]=o,a.setState({people:l})},a.togglePeople=function(){a.setState({showPeople:!a.state.showPeople})},a.deleteGuys=function(e){var t=Object(c.a)(a.state.people);t.splice(e,1),a.setState({people:t})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.showPeople&&(t=o.a.createElement("div",null,this.state.people.map((function(t,a){return o.a.createElement(d,{key:t.id,name:t.name,age:t.age,changed:function(a){return e.getDetails(a,t.id)}})})))),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"List of People"),o.a.createElement("button",{onClick:this.togglePeople},"Change"),t)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.4545d986.chunk.js.map