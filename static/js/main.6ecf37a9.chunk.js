(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(8),r=n.n(i),l=(n(15),n(9)),s=n(2),d=n(3),h=n(5),m=n(4);var u=function(e){return Object(c.jsxs)("table",{className:"table table-dark",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{onClick:e.handleSort,children:[Object(c.jsx)("th",{scope:"col",children:"ID"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",onClick:e.handleSort,children:"Occupation"}),Object(c.jsx)("th",{scope:"col",children:"Email"})]})}),e.children]})};var j=function(e){return Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e.id}),Object(c.jsx)("th",{scope:"row",children:e.name}),Object(c.jsx)("th",{scope:"row",children:e.occupation}),Object(c.jsx)("th",{scope:"row",children:e.location})]})})},p=n(7),b={fontWeight:"bold"},f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsx)("label",{style:b,htmlFor:"filter",children:"Filter by Name: "}),Object(c.jsx)("input",{type:"text",id:"filter",onChange:this.props.handleChange})]})}}]),n}(o.Component),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={employees:p,filteredEmployees:Object(l.a)(p)},e.handleChange=function(t){e.setState({filteredEmployees:e.state.employees.filter((function(e){return e.name.includes(t.target.value)}))})},e.handleSort=function(t){e.setState({filteredEmployees:e.state.employees.sort((function(e,t){var n=e.occupation.toUpperCase(),c=t.occupation.toUpperCase();return n<c?-1:n>c?1:0}))})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.filteredEmployees||this.state.employees;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(f,{handleChange:this.handleChange}),Object(c.jsx)(u,{handleSort:this.handleSort,children:e.map((function(e){return Object(c.jsx)(j,{id:e.id,name:e.name,occupation:e.occupation,location:e.email},e.id)}))})]})}}]),n}(o.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};n(16);r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),y()},7:function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob","occupation":"Cook","email":"bob@gmail.com"},{"id":2,"name":"Carl","occupation":"Restaurant Owner","email":"carl@gmail.com"},{"id":3,"name":"Jack","occupation":"Cashier","email":"jack@gmail.com"},{"id":4,"name":"Dexter","occupation":"Manager","email":"Dexter@gmail.com"},{"id":5,"name":"Jeff","occupation":"Manager","email":"JeffdaBoss@gmail.com"},{"id":6,"name":"Doug","occupation":"Server","email":"DougKitchen@gmail.com"},{"id":7,"name":"Dolly","occupation":"Server","email":"dollyisSweet@gmail.com"},{"id":8,"name":"Johnny","occupation":"Cook","email":"Johnnyboy@gmail.com"},{"id":9,"name":"Joanne","occupation":"Host","email":"Joanne@gmail.com"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.6ecf37a9.chunk.js.map