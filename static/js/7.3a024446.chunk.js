(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[7],{228:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(n){if(n.length>e)return"Max lenght is ".concat(e," simbols")}}},229:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return m}));var r=t(57),a=t(0),o=t.n(a),i=t(230),c=t.n(i),l=function(e){var n=e.input,t=e.meta,a=(e.child,e.Element),i=Object(r.a)(e,["input","meta","child","Element"]),l=t.touched&&t.error;return o.a.createElement("div",{className:c.a.formControl+" "+(l&&c.a.error)},o.a.createElement(a,Object.assign({},n,i)),o.a.createElement("br",null),l&&o.a.createElement("span",null,t.error))},u=function(e){return o.a.createElement(l,Object.assign({},e,{Element:"textarea"}))},m=function(e){return o.a.createElement(l,Object.assign({},e,{Element:"input"}))}},230:function(e,n,t){e.exports={formControl:"FormsControls_formControl__2FQCU",error:"FormsControls_error__3ILIl"}},300:function(e,n,t){e.exports={loginPage:"Login_loginPage__1fEiE",formSummaryError:"Login_formSummaryError__1Lkbc"}},310:function(e,n,t){"use strict";t.r(n);var r=t(33),a=t(34),o=t(36),i=t(35),c=t(0),l=t.n(c),u=t(57),m=t(300),s=t.n(m),f=t(111),b=t(112),E=t(229),d=t(228),p=Object(d.a)(40),g=l.a.memo((function(e){var n=e.handleSubmit,t=e.error;Object(u.a)(e,["handleSubmit","error"]);return l.a.createElement("form",{onSubmit:n},l.a.createElement("div",null,l.a.createElement(f.a,{component:E.a,name:"login",placeholder:"Login",validate:[d.b,p]})),l.a.createElement("div",null,l.a.createElement(f.a,{component:E.a,name:"password",placeholder:"Password",type:"password",validate:[d.b,p]})),l.a.createElement("div",null,l.a.createElement(f.a,{component:"input",name:"rememberMe",type:"checkbox"})," remember me"),l.a.createElement("div",{className:s.a.formSummaryError},t),l.a.createElement("div",null,l.a.createElement("button",{className:"button"},"Login")))})),h=Object(b.a)({form:"login"})(g),v=function(e){var n=e.login;Object(u.a)(e,["login"]);return l.a.createElement("div",{className:s.a.loginPage},l.a.createElement("h1",null,"Login"),l.a.createElement(h,{onSubmit:function(e){n(e.login,e.password,e.rememberMe)}}))},j=t(24),O=t(27),_=t(19),y=t(54),w=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var e=this.props,n=e.isAuth,t=e.login;return n?l.a.createElement(_.a,{to:"/profile"}):l.a.createElement(v,{login:t})}}]),t}(l.a.PureComponent),C={login:j.c};n.default=Object(O.b)((function(e){return{isAuth:Object(y.a)(e)}}),C)(w)}}]);
//# sourceMappingURL=7.3a024446.chunk.js.map