(window.webpackJsonpexpensey=window.webpackJsonpexpensey||[]).push([[0],{126:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=(n(77),n(21)),u=n(11),s=n(6),l=n(63),p=n(64),m=n(70),d=n(65),E=n(71),f=n(34),h=n.n(f),v=(n(125),n(126),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState((function(){return{description:t}}))},n.onNoteChange=function(e){var t=e.target.value;n.setState((function(){return{note:t}}))},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState((function(){return{amount:t}}))},n.onDateChange=function(e){e&&n.setState((function(){return{createdAt:e.getTime()}}))},n.onSubmit=function(e){e.preventDefault(),n.state.description&&n.state.amount?(n.setState({error:"",description:"",amount:""}),n.props.onSubmit({description:n.state.description,amount:parseFloat(n.state.amount),createdAt:n.state.createdAt,note:n.state.note})):n.setState({error:"Please provide description and amount."})},n.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?e.expense.amount.toString():"",createdAt:e.expense?e.expense.createdAt:(new Date).getTime(),error:""},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"expense-form"},this.state.error&&r.a.createElement("h1",null,this.state.error),r.a.createElement("form",{action:"",onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-item"},r.a.createElement("input",{type:"text",placeholder:"Description",autoFocus:!0,value:this.state.description,onChange:this.onDescriptionChange})),r.a.createElement("div",{className:"input-group-item"},r.a.createElement("input",{type:"number",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange})),r.a.createElement("div",{className:"input-group-item"},r.a.createElement(h.a,{selected:this.state.createdAt,onChange:function(t){return e.onDateChange(t)},dateFormat:"dd MMM yyyy"})),r.a.createElement("div",{className:"input-group-item"},r.a.createElement("textarea",{name:"",id:"",rows:"5",placeholder:"Add a note for your expense (optional)",value:this.state.note,onChange:this.onNoteChange,style:{width:"100%",resize:"vertical",padding:"5px"}})),r.a.createElement("div",{className:"input-group-item"},r.a.createElement("button",{type:"submit"},this.props.expense?"Update expense":"Add expense"),this.props.removeButton))))}}]),t}(a.Component)),g=n(30),y=n(35);n(127),n(145),n(129);y.initializeApp({apiKey:"AIzaSyAu9GeFE_wYXuALSDSiuOm1Ei4Csxrsf74",authDomain:"expensey-2e1eb.firebaseapp.com",databaseURL:"https://expensey-2e1eb.firebaseio.com",projectId:"expensey-2e1eb",storageBucket:"expensey-2e1eb.appspot.com",messagingSenderId:"378117595040",appId:"1:378117595040:web:74312596a530c346058ec5",measurementId:"G-DEFYYZEF4M"});var b=y.database(),O=new y.auth.GoogleAuthProvider;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){return{type:"ADD_EXPENSE",expense:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){var a=n().auth.uid,r=e.description,o=void 0===r?"":r,c=e.note,i=void 0===c?"":c,u=e.amount,s=void 0===u?0:u,l=e.createdAt,p={description:o,note:i,amount:s,createdAt:void 0===l?0:l};return b.ref("users/".concat(a,"/expenses")).push(p).then((function(e){t(j(D({id:e.key},p)))}))}},S=function(e){return function(t,n){var a=n().auth.uid;return b.ref("users/".concat(a,"/expenses/").concat(e)).remove().then((function(){t(function(e){return{type:"REMOVE_EXPENSE",expense:{id:e}}}(e))}))}},N=function(e,t){return function(n,a){var r=a().auth.uid;return b.ref("users/".concat(r,"/expenses/").concat(e)).update(t).then((function(){n(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(e,t))}))}};function T(e){var t=Object(s.c)((function(t){return t.expenses.find((function(t){return t.id===e.match.params.id}))})),n=Object(s.b)();return r.a.createElement("div",null,t&&r.a.createElement("div",null,r.a.createElement(v,{expense:t,removeButton:r.a.createElement("button",{onClick:function(){n(S(t.id)).then((function(){e.history.push("/expensey/")}))},type:"button"},"Remove"),onSubmit:function(a){n(N(t.id,a)).then((function(){return e.history.push("/expensey/")}))}})),!t&&r.a.createElement("h1",null,"Not valid expense!"))}function A(e){var t=Object(s.b)();return r.a.createElement("div",null,r.a.createElement("h1",{className:"page-title",style:{marginTop:"20px"}},"Add Expense"),r.a.createElement(v,{onSubmit:function(n){t(w(n)).then((function(){return e.history.push("/expensey/")}))}}))}var P=n(22);n(131);function _(e){var t=e.description,n=e.amount,a=e.createdAt,o=e.id,c=new Date(a),i=c.getDate(),u=c.getMonth(),s=c.getFullYear();return r.a.createElement("div",null,r.a.createElement(P.a,{to:"/expensey/edit/".concat(o),style:{},className:"list-item"},r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("p",{style:{color:"grey"}},(i<10?"0":"")+"".concat(i," ").concat(["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][u]," ").concat(s))),r.a.createElement("div",null,r.a.createElement("p",null,n,"$"))))}function C(e){var t=e.visibleExpenses.map((function(e){return r.a.createElement(_,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"content-container"},t.length>0&&r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{style:{color:"grey"}},r.a.createElement("p",null,t.length>1?"Expenses":"Expense")),r.a.createElement("div",{className:"hide-on-mobile"},r.a.createElement("p",null,"Amount"))),t.length>0?t:r.a.createElement("h1",{style:{textAlign:"center"}},"No expenses"))}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_TEXT_FILTER",newText:e}},k=function(){return{type:"SORT_BY_AMOUNT",sortBy:"amount"}},B=function(){return{type:"SORT_BY_DATE",sortBy:"date"}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return{type:"SET_START_DATE",startDate:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return{type:"SET_END_DATE",endDate:e}};n(133);function R(){var e=Object(s.c)((function(e){return e.filters.text})),t=Object(s.c)((function(e){return e.filters.sortBy})),n=Object(s.c)((function(e){return e.filters.startDate})),a=Object(s.c)((function(e){return e.filters.endDate})),o=Object(s.b)();return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-item"},r.a.createElement("input",{type:"text",value:e,onChange:function(e){return o(M(e.target.value))},placeholder:"Find expenses"})),r.a.createElement("div",{className:"input-group-item"},r.a.createElement("select",{name:"",id:"",value:t,onChange:function(e){return t=e.target.value,void o("date"===t?B():k());var t}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount"))),r.a.createElement("div",{className:"date-input"},r.a.createElement("div",{className:"input-group-item",style:{width:"auto"}},r.a.createElement(h.a,{selected:n,onChange:function(e){return function(e){e&&o(I(e.getTime()))}(e)},selectsStart:!0,startDate:n,endDate:a,placeholderText:"Start date",dateFormat:"dd MMM yyyy"})),r.a.createElement("span",null,"\u21a3"),r.a.createElement("div",{className:"input-group-item date-picker"},r.a.createElement(h.a,{selected:a,onChange:function(e){return function(e){e&&o(F(e.getTime()))}(e)},selectsEnd:!0,startDate:n,endDate:a,minDate:n,placeholderText:"End date",dateFormat:"dd MMM yyyy"})),r.a.createElement("div",{className:"input-group-item"},r.a.createElement("button",{onClick:function(){o(I()),o(F())}},"\u2a02")))))}n(134);function L(e){var t=0;e.visibleExpenses.forEach((function(e){t+=e.amount}));var n=1===e.visibleExpenses.length?"expense":"expenses",a=e.totalExpenses-e.visibleExpenses.length,o=r.a.createElement("h2",null,"Showing all expenses.");return a>0&&(o=r.a.createElement("h2",null,"Not showing",r.a.createElement("span",null," ",a," "),n)),r.a.createElement("div",{className:"showcase"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Viewing",r.a.createElement("span",null," ",e.visibleExpenses.length," ")," ",n," totalling ",r.a.createElement("span",null,t,"$")),o,r.a.createElement("button",{onClick:function(){return Z.push("/expensey/create")}},"Create Expense")))}var X=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter((function(e){if(o){var t=new Date(o);t.setDate(new Date(o).getDate()+1),o=t.getTime()}var a="number"!==typeof r||e.createdAt>=r,c="number"!==typeof o||e.createdAt<=o,i=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&i})).sort((function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:e.amount<t.amount?1:-1}))};function Y(){var e=Object(s.c)((function(e){return e.expenses})),t=Object(s.c)((function(e){return e.filters})),n=X(e,t);return r.a.createElement("div",null,r.a.createElement(L,{visibleExpenses:n,totalExpenses:e.length}),r.a.createElement(R,null),r.a.createElement(C,{visibleExpenses:n}))}function U(){return r.a.createElement("div",null,"404!")}var G=function(){return function(){return y.auth().signInWithPopup(O)}},J=function(){return function(){return y.auth().signOut()}};n(135);function V(){var e=Object(s.b)();return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-box"},r.a.createElement("h1",null,"Expensey"),r.a.createElement("p",null,"It's time to get your expenses under control!"),r.a.createElement("button",{onClick:function(){return e(G())}},"Login with Google")))}var $=n(43);n(136);function z(){var e=Object(s.b)();return r.a.createElement("div",{className:"header-container"},r.a.createElement("nav",null,r.a.createElement(P.a,{style:{textDecoration:"none"},to:"/dashboard"},r.a.createElement("h1",null,"Expensey")),r.a.createElement("button",{onClick:function(){return e(J())}},"Logout")))}var W=function(e){var t=e.component,n=Object($.a)(e,["component"]),a=Object(s.c)((function(e){return!!e.auth.uid}));return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return a?r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(t,e)):r.a.createElement(i.a,{to:"/expensey/"})}}))},K=function(e){var t=e.component,n=Object($.a)(e,["component"]),a=Object(s.c)((function(e){return!!e.auth.uid}));return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(i.a,{to:"/expensey/dashboard"}):r.a.createElement(t,e)}}))},Z=Object(u.a)();var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,{history:Z},r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(K,{path:"/expensey",exact:!0,component:V}),r.a.createElement(W,{path:"/expensey/dashboard",component:Y}),r.a.createElement(W,{path:"/expensey/create",component:A}),r.a.createElement(W,{path:"/expensey/edit/:id",component:T}),r.a.createElement(i.b,{component:U})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(26),Q=n(69);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return e.concat(t.expense);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==t.expense.id}));case"EDIT_EXPENSE":return e.map((function(e){return e.id===t.id?te({},e,{},t.updates):e}));case"SET_EXPENSES":return t.expenses;default:return e}};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=new Date,ce=new Date(oe.getFullYear(),oe.getMonth(),1),ie=new Date(oe.getFullYear(),oe.getMonth()+1,0),ue={text:"",sortBy:"date",startDate:ce.getTime(),endDate:ie.getTime()},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return re({},e,{text:t.newText});case"SORT_BY_AMOUNT":case"SORT_BY_DATE":return re({},e,{sortBy:t.sortBy});case"SET_START_DATE":return re({},e,{startDate:t.startDate});case"SET_END_DATE":return re({},e,{endDate:t.endDate});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d;n(137);n(138).config();var me=Object(H.e)(Object(H.c)({expenses:ne,filters:se,auth:le}),pe(Object(H.a)(Q.a))),de=r.a.createElement(s.a,{store:me},r.a.createElement(q,null)),Ee=!1,fe=function(){Ee||(c.a.render(de,document.getElementById("root")),Ee=!0)};c.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("img",{className:"loader-image",src:"/loader.gif",alt:"loading"}))}),null),document.getElementById("root")),y.auth().onAuthStateChanged((function(e){e?(me.dispatch({type:"LOGIN",uid:e.uid}),me.dispatch((function(e,t){var n=t().auth.uid;return b.ref("users/".concat(n,"/expenses")).once("value").then((function(t){var n=[];t.forEach((function(e){n.push(D({id:e.key},e.val()))})),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))}))})).then((function(){fe(),"/"===Z.location.pathname&&Z.push("/expensey/dashboard")}))):(me.dispatch({type:"LOGOUT"}),fe(),Z.push("/expensey/"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,n){e.exports=n(141)},77:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.53604845.chunk.js.map