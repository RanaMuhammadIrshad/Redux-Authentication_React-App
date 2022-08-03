(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{11:function(e,t,n){e.exports={counter:"Counter_counter__1U4hj",value:"Counter_value__2JpT-"}},16:function(e,t,n){e.exports={header:"Header_header__3mObx"}},17:function(e,t,n){e.exports={profile:"UserProfile_profile__1BiAu"}},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(14),i=n.n(r),o=n(3),u=(n(27),n(5)),s=Object(u.b)({name:"counter",initialState:{counter:0,showCounter:!0},reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter=e.counter+t.payload},toggleCounter:function(e){e.showCounter=!e.showCounter}}}),a=s.actions,j=s.reducer,l=n(11),b=n.n(l),d=n(1),h=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.counter.counter})),n=Object(o.c)((function(e){return e.counter.showCounter}));return Object(d.jsxs)("main",{className:b.a.counter,children:[Object(d.jsx)("h1",{children:"Redux Counter"}),n&&Object(d.jsx)("div",{className:b.a.value,children:t}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){e(a.increment())},children:"Increment"}),Object(d.jsx)("button",{onClick:function(){e(a.increase(10))},children:"Increase by 10"}),Object(d.jsx)("button",{onClick:function(){e(a.decrement())},children:"Decrement"})]}),Object(d.jsx)("button",{onClick:function(){e(a.toggleCounter())},children:"Toggle Counter"})]})},O=n(16),x=n.n(O),f=Object(u.b)({name:"authentication",initialState:{isAuthenticated:!1},reducers:{login:function(e){e.isAuthenticated=!0},logout:function(e){e.isAuthenticated=!1}}}),m=f.actions,p=f.reducer,_=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth.isAuthenticated}));return Object(d.jsxs)("header",{className:x.a.header,children:[Object(d.jsx)("h1",{children:"Redux Auth"}),t&&Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"My Products"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"My Sales"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){e(m.logout())},children:"Logout"})})]})})]})},v=n(7),C=n.n(v),g=function(){var e=Object(o.b)();return Object(d.jsx)("main",{className:C.a.auth,children:Object(d.jsx)("section",{children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(m.login())},children:[Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",id:"email"})]}),Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password"})]}),Object(d.jsx)("button",{children:"Login"})]})})})},w=n(17),A=n.n(w),k=function(){return Object(d.jsx)("main",{className:A.a.profile,children:Object(d.jsx)("h2",{children:"My User Profile"})})};var y=function(){var e=Object(o.c)((function(e){return e.auth.isAuthenticated}));return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(_,{}),!e&&Object(d.jsx)(g,{}),e&&Object(d.jsx)(k,{}),Object(d.jsx)(h,{})]})},N=Object(u.a)({reducer:{counter:j,auth:p}});i.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(o.a,{store:N,children:Object(d.jsx)(y,{})}))},7:function(e,t,n){e.exports={auth:"Auth_auth__3QLaR",control:"Auth_control__3bkp4"}}},[[29,1,2]]]);
//# sourceMappingURL=main.714b5abf.chunk.js.map