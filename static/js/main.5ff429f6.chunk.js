(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(16),i=a.n(c),l=(a(23),a(3)),o=a(4),d=a(6),h=a(5);a(24);var j=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(n.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,s=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(n.jsx)("img",{src:s.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(n.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(n.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(n.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(n.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(n.jsx)("td",{"data-th":"DOB",className:"align-middle",children:a(l.date)})]},t.uuid)})):Object(n.jsx)(n.Fragment,{})})};a(25);var u=function(e){var t=e.headings,a=e.users,r=e.handleSort;return Object(n.jsx)("div",{className:"datatable mt-5",children:Object(n.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(n.jsxs)("th",{className:"col",style:{width:a},onClick:function(){r(t.toLowerCase())},children:[t,Object(n.jsx)("span",{className:"pointer"})]},t)}))})}),Object(n.jsx)(j,{users:a})]})})};a(26);var b=function(e){var t=e.handleSearchChange;return Object(n.jsx)("div",{className:"searchbox",children:Object(n.jsxs)("form",{className:"form-inline",children:[Object(n.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}}),Object(n.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})};a(27);var m=function(e){var t=e.handleSearchChange;return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:[Object(n.jsxs)("div",{className:"input-group col-8",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"",children:"DOB"})}),Object(n.jsx)("input",{type:"date",className:"form-control"}),Object(n.jsx)("input",{type:"date",className:"form-control"})]}),Object(n.jsx)("div",{className:"search-area col-4",children:Object(n.jsx)(b,{handleSearchChange:t})})]})]})},v=a(17),O=a.n(v),f=function(){return O.a.get("https://randomuser.me/api/?results=15&nat=AU")},p=(a(46),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={users:[{}],order:"descend",filteredUsers:[{}],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],handleSort:function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},handleSearchChange:function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{handleSearchChange:this.state.handleSearchChange}),Object(n.jsx)("div",{className:"data-area",children:Object(n.jsx)(u,{headings:this.state.headings,users:this.state.filteredUsers,handleSort:this.state.handleSort})})]})}}]),a}(r.Component)),x=(a(47),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p,{})})}}]),a}(r.Component));a(48);var g=function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})},N=(a(49),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsx)("p",{children:"Search on box to filter results."})]})}}]),a}(r.Component));a(50);var y=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(g,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(x,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5ff429f6.chunk.js.map