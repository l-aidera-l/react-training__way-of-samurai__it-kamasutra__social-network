(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[6],{299:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__azdOc",dialogsList:"Dialogs_dialogsList__3HEzI",sendMessageBlock:"Dialogs_sendMessageBlock__2OxWB"}},300:function(e,a,t){e.exports={dialog:"Dialog_dialog__2dEEq",active:"Dialog_active__2dkw_"}},301:function(e,a,t){e.exports={message:"Message_message__2LqB3",messageInnerContainer:"Message_messageInnerContainer__eXKYE"}},302:function(e,a,t){e.exports={formControl:"FormsControls_formControl__2FQCU",wide:"FormsControls_wide__2shYY",textInputLabel:"FormsControls_textInputLabel__JN4a4",error:"FormsControls_error__3ILIl",errorField:"FormsControls_errorField__2ZznA"}},356:function(e,a,t){"use strict";t.r(a);var n,s=t(55),r=t(0),o=t.n(r),i=t(299),l=t.n(i),c=t(300),m=t.n(c),u=t(15),d=o.a.memo((function(e){var a=e.userID,t=e.name;Object(s.a)(e,["userID","name"]);return o.a.createElement("div",{className:m.a.dialog},o.a.createElement(u.b,{to:"/dialogs/"+a,activeClassName:m.a.active},t))})),g=t(301),b=t.n(g),f=o.a.memo((function(e){var a=e.messageText;Object(s.a)(e,["messageText"]);return o.a.createElement("div",{className:b.a.message},o.a.createElement("div",{className:b.a.messageInnerContainer},o.a.createElement("div",{className:"messageText"},a)))})),_=t(355),E=t(353),p=t(58),h=t(302),v=t.n(h),O=t(26),x=t.n(O),j=function(e){var a,t=e.input,n=e.meta,r=(e.child,e.Element),i=e.label,l=Object(s.a)(e,["input","meta","child","Element","label"]),c=n.touched&&n.error;return o.a.createElement("div",{className:x()(v.a.formControl,(a={},Object(p.a)(a,v.a.error,c),Object(p.a)(a,v.a.wide,l.wide),a))},i&&"checkbox"!==l.type&&o.a.createElement("label",{className:v.a.textInputLabel,htmlFor:"".concat(l.id)},i),o.a.createElement(r,Object.assign({},t,l)),i&&"checkbox"===l.type&&o.a.createElement("label",{htmlFor:"".concat(l.id)},i),c&&o.a.createElement("div",null,o.a.createElement("span",null,n.error)))},C=function(e){return o.a.createElement(j,Object.assign({},e,{Element:"textarea"}))},I=function(e){if(!e)return"Field is required"},N=(n=100,function(e){if(e&&e.length>n)return"Max length is ".concat(n," symbols")}),F=o.a.memo((function(e){var a=e.dialogs,t=e.messages,n=Object(s.a)(e,["dialogs","messages"]);return o.a.createElement("div",{className:l.a.dialogs},o.a.createElement("div",{className:l.a.dialogsList},a.map((function(e){return o.a.createElement(d,{key:e.id,name:e.name,userID:e.id})}))),o.a.createElement("div",{className:l.a.messagesList},t.map((function(e){return o.a.createElement(f,{key:e.id,messageID:e.id,from:e.from,messageText:e.messageText})})),o.a.createElement(M,{onSubmit:function(e){n.sendMessage(e.sendMessageTextarea)}})))})),k=o.a.memo((function(e){var a=e.handleSubmit;Object(s.a)(e,["handleSubmit"]);return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",{className:l.a.sendMessageBlock},o.a.createElement(_.a,{name:"sendMessageTextarea",component:C,placeholder:"write your message",validate:[I,N]}),o.a.createElement("button",{className:"button"},"Send")))})),M=Object(E.a)({form:"sendMessageForm"})(k),w=F,y=t(76),D=t(24),L=t(32),T=t(33),B=t(35),S=t(34),A=t(5),q=function(e){return{isAuth:e.auth.isAuth}},z=t(16),J=function(e){return e.dialogsPage.messages},Y=function(e){return e.dialogsPage.dialogs};a.default=Object(z.d)(Object(D.b)((function(e){return{dialogs:Y(e),messages:J(e)}}),(function(e){return{sendMessage:function(a){e(Object(y.b)(a))}}})),(function(e){var a=function(a){Object(B.a)(n,a);var t=Object(S.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(A.a,{to:"/login"})}}]),n}(o.a.Component);return Object(D.b)(q)(a)}))(w)}}]);
//# sourceMappingURL=6.4d706b7e.chunk.js.map