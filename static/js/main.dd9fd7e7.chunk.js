(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{15:function(e,a,t){e.exports=t(41)},20:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=t(2),i=t(14),m=r.a.createContext({}),o=function(){var e=Object(n.useContext)(m);return r.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(s.date)))})):r.a.createElement(r.a.Fragment,null))},d=function(){var e=Object(n.useContext)(m);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name,n=a.width;return r.a.createElement("th",{className:"col",key:t,style:{width:n},onClick:function(){e.handleSort(t.toLowerCase())}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(o,null)))},u=(t(20),function(){var e=Object(n.useContext)(m);return r.a.createElement("div",{className:"row justify-content-center text-center"},r.a.createElement("div",{className:"searchbox justify-content-center"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control md-6",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}}),r.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},"Search"))))});var f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(u,null)))},h=t(13),E=t.n(h),v=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")},p=function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"20%"},{name:"Name",width:"20%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"20%"}]}),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){v().then((function(e){l(Object(s.a)(Object(s.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(m.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(a.toLowerCase())}));l(Object(s.a)(Object(s.a)({},t),{},{filteredUsers:n}))},handleSort:function(e){"descend"===t.order?l({order:"ascend"}):l({order:"descend"});var a=t.filteredUsers.sort((function(a,n){return"ascend"===t.order?void 0===a[e]?1:void 0===n[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):n[e]-a[e]:void 0===a[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):n[e]-a[e]}));l(Object(s.a)(Object(s.a)({},t),{},{filteredUsers:a}))}}},r.a.createElement(f,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(d,null):r.a.createElement("div",null)))};var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))};t(38);var g=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on name to sort alphabetically or use the search bar to narrow your results."))};t(39);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement(N,null),r.a.createElement(b,null)))};t(40);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dd9fd7e7.chunk.js.map