(this["webpackJsonpreact-02-feedback"]=this["webpackJsonpreact-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={statistics:"Statistics_statistics__2Ylg0",menu:"Statistics_menu__2AaRO",item:"Statistics_item__1Wyp8"}},,function(e,t,n){e.exports={section:"Section_section__23eiY",title:"Section_title__q6z0W"}},function(e,t,n){e.exports={container:"FeedbackOptions_container__1e-1J",button__size:"FeedbackOptions_button__size__16Z1t"}},,,,,function(e,t,n){e.exports={container:"Notification_container__3RFVO"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=(n(17),n(7)),o=n(8),l=n(9),u=n(12),b=n(11),d=n(4),j=n.n(d),_=n(0),f=function(e){var t=e.title,n=e.children;return Object(_.jsxs)("div",{className:j.a.section,children:[Object(_.jsx)("h1",{className:j.a.title,children:t}),n]})},h=n(5),v=n.n(h),O=function(e){var t=e.options,n=e.onLeaveFeedback,a=[];for(var c in t)a.push(c);return Object(_.jsx)("div",{className:v.a.container,children:a.map((function(e){return Object(_.jsx)("button",{className:v.a.button__size,onClick:function(){return n(e)},children:e},e)}))})},m=n(2),p=n.n(m),x=function(e){var t=Object.keys(e).map((function(t,n){var a={};return a[t]=e[t],"positivePercentage"===t?Object(_.jsxs)("li",{className:p.a.item,children:[" Positive feedback: ",a[t],"%"]},n):Object(_.jsxs)("li",{className:p.a.item,children:[" ",t,": ",a[t]]},n)}));return Object(_.jsxs)("div",{className:p.a.statistics,children:[Object(_.jsx)("h2",{children:"Statistics"}),Object(_.jsx)("ul",{className:p.a.menu,children:t})]})},k=n(10),g=n.n(k),N=function(e){var t=e.message;return Object(_.jsx)("div",{className:g.a.container,children:t})};N.defaultProps={message:"No feedback given"};var S=N,F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){console.log(t),e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=t+n+a,s=Math.round(100*t/c);return Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(f,{title:"Please leave feedback",state:this.state,children:[Object(_.jsx)(O,{options:this.state,onLeaveFeedback:this.onLeaveFeedback}),c?Object(_.jsx)(x,{good:t,neutral:n,bad:a,total:c,positivePercentage:s}):Object(_.jsx)(S,{message:"No feedback given"})]})})}}]),n}(a.Component);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.78932e8a.chunk.js.map