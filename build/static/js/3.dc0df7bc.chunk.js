(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{47:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(21),m=c(47),r=c.n(m),j=c(19),i=c(20),d=c(14),u=c(48),l=c.n(u),b=c(0),x=function(e){var t=Object(n.useRef)(),c=Object(j.a)(i.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var r=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:r,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:r,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(49),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(50),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e,t=Object(n.useState)(!1),c=Object(a.a)(t,2),o=c[0],m=c[1],u=Object(s.j)(),l=Object(j.a)(i.c),O=l.sendRequest,h=l.status,f=l.data,p=u.quoteId;Object(n.useEffect)((function(){O(p)}),[p,O]),"pending"===h&&(e=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===h&&f&&f.length&&(e=Object(b.jsx)(N,{comments:f})),"completed"!==h||f&&0!==f.length||(e=Object(b.jsx)("p",{className:"centered",children:"No Comments were added yet!"}));var _=Object(n.useCallback)((function(){O(p)}),[O,p]);return Object(b.jsxs)("section",{className:r.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!o&&Object(b.jsx)("button",{className:"btn",onClick:function(){m(!0)},children:"Add a Comment"}),o&&Object(b.jsx)(x,{quoteId:p,onAddedComment:_}),e]})},C=c(51),q=c.n(C),g=function(e){return Object(b.jsxs)("figure",{className:q.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)(),c=Object(j.a)(i.e,!0),a=c.sendRequest,m=c.status,r=c.data,u=c.error,l=t.quoteId;return Object(n.useEffect)((function(){a(l)}),[a,l]),"pending"===m?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):u?Object(b.jsx)("p",{className:"centered",children:u}):r.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{text:r.text,author:r.author}),Object(b.jsx)(s.c,{path:"/quotes/".concat(t.quoteId),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"/quotes/".concat(t.quoteId,"/comments"),children:"Load comments"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No Quote Found!"})}}}]);
//# sourceMappingURL=3.dc0df7bc.chunk.js.map