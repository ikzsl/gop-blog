(this["webpackJsonpblog-articles"]=this["webpackJsonpblog-articles"]||[]).push([[0],{223:function(e,a,t){e.exports=t(395)},248:function(e,a,t){},254:function(e,a,t){},298:function(e,a,t){},378:function(e,a,t){},393:function(e,a,t){},394:function(e,a,t){},395:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),u=t(14),s=t(190),o=t(67),i=t(191),m=t(85),p=t(401),d=t(28),f=t.n(d),E=t(62),b=t(76),v=t.n(b),h=t(404);v.a.defaults.baseURL="https://conduit.productionready.io/api/";var g,O=function(){return"users"},j=function(){return"users/login"},w=function(){return"user"},N=function(e){return"articles/".concat(e)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"articles?limit=".concat(e,"&offset=").concat(a)},x=Object(h.a)("CHANGE_FETCH_STATUS"),S=Object(h.a)("CHANGE_LOADING_STATUS"),I=Object(h.a)("LOGIN_USER"),y=Object(h.a)("LOGOUT_USER"),C=Object(h.a)("LOAD_ARTICLES_LIST"),A=Object(h.a)("LOAD_CURRENT_ARTICLE"),L=function(){var e=Object(E.a)(f.a.mark((function e(a,t,n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(n,{user:a});case 2:r=e.sent,c=r.data,localStorage.setItem("token",c.user.token),t(x(null)),t(I(c.user));case 7:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),z=function(e,a){return function(){var t=Object(E.a)(f.a.mark((function t(n){var r,c,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S(!0)),t.prev=1,r=k(e,a),t.next=5,v.a.get(r);case 5:c=t.sent,l=c.data,n(C(l)),n(S(!1)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(S(!1));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e,a){return function(){var t=Object(E.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S(!0)),t.prev=1,t.next=4,L(e,n,j());case 4:n(S(!1)),t.next=14;break;case 7:t.prev=7,t.t0=t.catch(1),r=t.t0.response,c=r.data.errors,n(x(c)),n(S(!1)),a("password","email or password ".concat(c["email or password"]));case 14:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},U=Object(p.a)((g={},Object(m.a)(g,y,(function(){})),Object(m.a)(g,I,(function(e,a){return a.payload})),g),{}),q=Object(p.a)(Object(m.a)({},x,(function(e,a){return a.payload})),{}),F=Object(p.a)(Object(m.a)({},S,(function(e,a){return a.payload})),!1),_=Object(p.a)(Object(m.a)({},C,(function(e,a){return a.payload})),{}),D=Object(p.a)(Object(m.a)({},A,(function(e,a){return a.payload})),{}),R=Object(o.combineReducers)({currentUser:U,errors:q,loading:F,articlesData:_,currentArticle:D}),G=(t(247),t(248),t(32)),B=t(9),H=t(192),W=t.n(H),J=t(139),P=t(405),V=(t(254),function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.currentUser})),t=!!a.id,n=r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(G.c,{to:"/login",className:"link"},"Sign In")),r.a.createElement("li",null,r.a.createElement(G.c,{to:"/signup",className:"link"},"Sign Up")))),c=r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(J.a,{size:"large"},"Create Article")),r.a.createElement("li",{className:"link"},a.username),r.a.createElement("li",{className:"link"},r.a.createElement(J.a,{disabled:!1,size:"large",icon:r.a.createElement(P.a,null),onClick:function(a){a.preventDefault(),localStorage.removeItem("token"),e(y())}},"\u0412\u044b\u0439\u0442\u0438"))));return r.a.createElement("header",{className:"header"},r.a.createElement(G.c,{to:"/",className:"headline"},"\u0413\u043e\u043f-\u0431\u043b\u043e\u0433"),t?c:n)}),Z=t(26),M=t(64),Y=t(400),$=t(402),K=t(397),Q=t(406),X=t(407),ee=t(408),ae=(t(298),M.a().shape({username:M.b().max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e - \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:M.b().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{6,40}$/,"\u043e\u0442 6 \u0434\u043e 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:M.b().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")})),te={username:"",password:"",email:""},ne=function(){var e=Object(u.b)();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(Z.c,{initialValues:te,validationSchema:ae,onSubmit:function(a,t){var n=t.setFieldError;e(function(e,a){return function(){var t=Object(E.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S(!0)),t.prev=1,t.next=4,L(e,n,O());case 4:n(S(!1)),t.next=16;break;case 7:t.prev=7,t.t0=t.catch(1),r=t.t0.response,c=r.data.errors,n(x(c)),n(S(!1)),a("email",c.email),a("username",c.username),a("password",c.password);case 16:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(a,n))}},r.a.createElement(Y.a,{className:"form"},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"username"},"\u0418\u043c\u044f",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(Y.a.Item,{name:"username"},r.a.createElement($.a,{id:"username",name:"username",placeholder:"\u0418\u0432\u0430\u043d",size:"large",suffix:r.a.createElement(Q.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(Y.a.Item,{name:"email"},r.a.createElement($.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(X.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(Y.a.Item,{name:"password"},r.a.createElement($.a.Password,{id:"pwd",name:"password",placeholder:"bu7UYvjl2nkj9WNshd",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(K.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(ee.a,null),className:"button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),r.a.createElement("div",{className:"link-container"},r.a.createElement("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? "),r.a.createElement(G.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438")))},re=t(409),ce=(t(378),{password:"",email:""}),le=M.a().shape({password:M.b().required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:M.b().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")}),ue=function(){var e=Object(u.b)(),a=function(){var a=Object(E.a)(f.a.mark((function a(t,n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=n.setFieldError,e(T(t,r));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(Z.c,{initialValues:ce,validationSchema:le,onSubmit:a},r.a.createElement(Y.a,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(Y.a.Item,{name:"email"},r.a.createElement($.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(X.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(Y.a.Item,{name:"password"},r.a.createElement($.a.Password,{id:"pwd",name:"password",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(K.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(re.a,null),className:"button"},"\u0412\u043e\u0439\u0442\u0438")))),r.a.createElement("div",{className:"link-container"},r.a.createElement(G.b,{to:"/signup"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},se=t(399),oe=t(398),ie=t(156),me=t(157);function pe(){var e=Object(ie.a)(["\n  background-color: rgb(240, 239, 239);\n  margin: 10px;\n  padding: 10px;\n  text-decoration: none;\n  list-style: none;\n"]);return pe=function(){return e},e}function de(){var e=Object(ie.a)(["\n  padding: 0;\n  margin: 0 auto;\n  width: 70%;\n"]);return de=function(){return e},e}var fe=me.a.ul(de()),Ee=me.a.li(pe()),be=function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.articlesData})),t=a.articles,n=a.articlesCount,c=r.a.createElement(fe,{className:"articlesList"},t?t.map((function(e){var a=e.slug,t=e.title,n=e.tagList,c=e.author,l=e.createdAt,u=e.favoritesCount;return r.a.createElement(Ee,{key:a,className:"article"},r.a.createElement(G.c,{to:"/articles/".concat(a),className:"navLink"},r.a.createElement("h2",null,t),"tags:"," ",n.map((function(e){return r.a.createElement("span",{key:e,className:"tag"},e)})),r.a.createElement("br",null),"author:"," ",c.username,r.a.createElement("br",null),"created:"," ",Object(oe.a)(new Date(l),Date.now(),{includeSeconds:!0})," ","ago"),r.a.createElement("br",null),"likes:"," ",u)})):null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{total:n,onChange:function(a,t){e(z(t,(a-1)*t))},showSizeChanger:!1}),c)},ve=(t(393),function(){var e=Object(u.b)(),a=Object(B.g)().slug;Object(n.useEffect)((function(){e(function(e){return function(){var a=Object(E.a)(f.a.mark((function a(t){var n,r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(S(!0)),a.prev=1,n=N(e),a.next=5,v.a.get(n);case 5:r=a.sent,c=r.data.article,t(A(c)),t(S(!1)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t(S(!1));case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}(a))}),[]);var t=Object(u.c)((function(e){return e.currentArticle})),c=t.title,l=t.body,s=t.createdAt,o=t.updatedAt,i=t.tagList,m=t.description,p=t.author,d=t.favorited,b=t.favoritesCount;return r.a.createElement("div",{className:"form-container"},c||null,r.a.createElement("br",null),m,r.a.createElement("br",null),i,r.a.createElement("br",null),l,r.a.createElement("br",null),s,r.a.createElement("br",null),o,r.a.createElement("br",null),p?p.username:null,r.a.createElement("br",null),d?r.a.createElement("p",null,"liked"):r.a.createElement("p",null,"notLiked"),r.a.createElement("br",null),b)}),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"))},ge=t(220),Oe=function(e){var a=e.component,t=Object(ge.a)(e,["component"]);return r.a.createElement(B.b,Object.assign({},t,{render:function(){return localStorage.getItem("token")?r.a.createElement(B.a,{to:"/"}):r.a.createElement(a,null)}}))},je=(t(394),function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.currentUser})),t=Object(u.c)((function(e){return e.loading}));return Object(n.useEffect)((function(){e(function(){var e=Object(E.a)(f.a.mark((function e(a){var t,n,r,c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage,n=t.token){e.next=3;break}return e.abrupt("return");case 3:return a(S(!0)),e.prev=4,e.next=7,v.a.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(n),e}));case 7:return r=w(),e.next=10,v.a.get(r);case 10:c=e.sent,l=c.data,a(I(l.user)),a(S(!1)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),401===e.t0.response.status&&localStorage.removeItem("token"),a(S(!1));case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(a){return e.apply(this,arguments)}}())}),[a.id]),Object(n.useEffect)((function(){e(z())}),[]),r.a.createElement(G.a,null,r.a.createElement(V,null),r.a.createElement(W.a,{loaded:!t}),r.a.createElement(B.d,null,r.a.createElement(B.b,{exact:!0,path:"/",component:be}),r.a.createElement(B.b,{path:"/articles/:slug",component:ve}),r.a.createElement(Oe,{exact:!0,path:"/login",component:ue}),r.a.createElement(Oe,{exact:!0,path:"/signup",component:ne}),r.a.createElement(B.b,{path:"*",component:he})))}),we=Object(o.createStore)(R,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(s.a)));l.a.render(r.a.createElement(u.a,{store:we},r.a.createElement(je,null)),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.3a3edcfa.chunk.js.map