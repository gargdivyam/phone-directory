(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c);a(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);var i=a(4),l=a(5),o=a(7),m=a(6),u=a(8),d=a(9),b=(a(22),function(e){return r.a.createElement("div",{className:"header"},e.heading)}),h=(a(23),a(30)),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).inputChangedHandler=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onFormSubmitted=function(t){t.preventDefault(),e.props.addSubscriberHandler(e.state),e.setState({id:0,name:"",phone:" "}),e.props.history.push("/")},e.state={id:0,name:"",phone:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.phone;return r.a.createElement("div",null,r.a.createElement(b,{heading:"Add Subscriber"}),r.a.createElement("div",{className:"component-body-container"},r.a.createElement("button",{className:"custom-btn"},"Back"),r.a.createElement(h.a,{to:"/"},r.a.createElement("button",{className:"custom-btn"},"Back")),r.a.createElement("form",{className:"subscriber-form",onSubmit:this.onFormSubmitted.bind(this)},r.a.createElement("label",{htmlFor:"name",className:"label-control"},"Name: "),r.a.createElement("br",null),r.a.createElement("input",{id:"name",type:"text",className:"input-control",name:"name",onChange:this.inputChangedHandler}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"phone",className:"label-control"},"Phone: "),r.a.createElement("br",null),r.a.createElement("input",{id:"phone",type:"text",className:"input-control",name:"phone",onChange:this.inputChangedHandler}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"subscriber-info-container"},r.a.createElement("span",{className:"subscriber-to-add-heading"},"Subscriber to be added: "),r.a.createElement("br",null),r.a.createElement("span",{className:"subscriber-info"},"Name: ",t),r.a.createElement("br",null),r.a.createElement("span",{className:"subscriber-info"},"Phone: ",a),r.a.createElement("br",null)),r.a.createElement("button",{type:"submit",className:"custom-btn add-btn"},"Add"))))}}]),t}(n.Component),E=(a(26),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onDeletedClick=function(e){a.props.deleteSubscriberHandler(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{heading:"Phone Directory"}),r.a.createElement("div",{className:"component-body-container"},r.a.createElement(h.a,{to:"/add"},r.a.createElement("button",{className:"custom-btn add-btn"},"Add")),r.a.createElement("div",{className:"grid-container heading-container"},r.a.createElement("span",{className:"grid-item name-heading"},"Name"),r.a.createElement("span",{className:"grid-item phone-heading"},"Phone")),this.props.subscribersList.map(function(t){return r.a.createElement("div",{key:t.id,className:"grid-container"},r.a.createElement("span",{className:"grid-item"},t.name),r.a.createElement("span",{className:"grid-item"},t.phone),r.a.createElement("span",{className:"grid-item action-btn-container"},r.a.createElement("button",{className:"custom-btn delete-btn",onClick:e.onDeletedClick.bind(e,t.id)},"Delete")))})))}}]),t}(n.Component)),f=a(31),v=a(32),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).deleteSubscriberHandler=function(t){var a=e.state.subscribersList,n=0;a.forEach(function(e,a){e.id===t&&(n=a)},Object(d.a)(Object(d.a)(e)));var r=a;r.splice(n,1),e.setState({subscribers:r})},e.addSubscriberHandler=function(t){var a=e.state.subscribersList;a.length>0?t.id=a[a.length-1].id+1:t.id=1,a.push(t),e.setState({subscribersList:a})},e.state={subscribersList:[{id:1,name:"Shilpa Bhat",phone:"9999999999"},{id:2,name:"Srishti Gupta",phone:"8888888888"}]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(E,Object.assign({},t,{subscribersList:e.state.subscribersList,deleteSubscriberHandler:e.deleteSubscriberHandler}))}}),r.a.createElement(v.a,{exact:!0,path:"/add",render:function(t,a){var n=t.history;return r.a.createElement(p,Object.assign({history:n},a,{addSubscriberHandler:e.addSubscriberHandler}))}})))}}]),t}(n.Component);s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.96ff01c6.chunk.js.map