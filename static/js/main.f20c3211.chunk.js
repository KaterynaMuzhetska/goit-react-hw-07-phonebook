(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__3hd0B",contact:"contactListItem_contact__Ny_3r",buttonDelete:"contactListItem_buttonDelete__2tOBg"}},16:function(t,e,n){t.exports={container:"App_container__qdaE4",title:"App_title__Fdpjf",subtitle:"App_subtitle__32jc0"}},20:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__1mkGR",filterInput:"filter_filterInput__2fEgR"}},30:function(t,e,n){t.exports={contactList:"contactList_contactList__X91q1"}},8:function(t,e,n){t.exports={form:"ContactForm_form__3Fd3a",formLabel:"ContactForm_formLabel__3ETmQ",formInput:"ContactForm_formInput__27jo6",buttonSubmit:"ContactForm_buttonSubmit__2ZXYc"}},81:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),u=n(5),s=n(21),i=n(12),b=n.n(i),l=n(3),j=Object(l.b)("contacts/fetchContactsRequest"),f=Object(l.b)("contacts/fetchContactsSuccess"),m=Object(l.b)("contacts/fetchContactsError"),d=Object(l.b)("contacts/addContactRequest"),O=Object(l.b)("contacts/addContactSuccess"),h=Object(l.b)("contacts/addContactError"),p=Object(l.b)("contacts/deleteContactRequest"),_=Object(l.b)("contacts/deleteContactSuccess"),x=Object(l.b)("contacts/deleteContactError"),v=Object(l.b)("contacts/changeFilter");b.a.defaults.baseURL="http://localhost:3000";var C=function(){return function(t){t(j()),b.a.get("/contacts").then((function(e){var n=e.data;return t(f(n))})).catch((function(e){return t(m(e))}))}},L=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(d()),b.a.post("/contacts",c).then((function(e){var n=e.data;return t(O(n))})).catch((function(e){return t(h(e))}))}},N=function(t){return function(e){e(p()),b.a.delete("/contacts/".concat(t)).then((function(n){n.data;return e(_(t))})).catch((function(t){return e(x(t))}))}},g=n(10),y=function(t){return t.contacts.items},I=function(t){return t.contacts.filter},F=function(t){return t.contacts.loading},k=Object(g.a)([y,I],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),A=n(8),S=n.n(A),w=n(1);function D(){var t=Object(u.c)(y),e=Object(u.b)(),n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),b=Object(s.a)(i,2),l=b[0],j=b[1],f=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":j(c);break;default:return}};return Object(w.jsxs)("form",{onSubmit:function(n){var c;(n.preventDefault(),c=r,t.some((function(t){return t.name===c})))?alert("".concat(r," is already in contacts!")):(e(L({name:r,number:l})),o(""),j(""))},className:S.a.form,children:[Object(w.jsxs)("label",{className:S.a.formLabel,children:["Name",Object(w.jsx)("input",{className:S.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f})]}),Object(w.jsxs)("label",{className:S.a.formLabel,children:["Number",Object(w.jsx)("input",{className:S.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:f})]}),Object(w.jsx)("button",{type:"submit",className:S.a.buttonSubmit,children:"Add contact"})]})}var E,q,R=n(15),z=n.n(R),B=function(t){var e=t.name,n=t.number,c=t.id,a=t.onDeletContact;return Object(w.jsxs)("li",{className:z.a.contactListItem,children:[Object(w.jsxs)("p",{className:z.a.contact,children:[" ",e,": ",n]}),Object(w.jsx)("button",{className:z.a.buttonDelete,type:"button",onClick:function(){return a(c)},children:"Delete"})]})},Z=n(30),J=n.n(Z),T=function(){var t=Object(u.c)(k),e=Object(u.b)();return Object(w.jsx)("ul",{className:J.a.contactList,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(w.jsx)(B,{id:n,name:c,number:a,onDeletContact:function(){return function(t){return e(N(t))}(n)}},n)}))})},M=n(20),X=n.n(M),G=function(){var t=Object(u.c)(I),e=Object(u.b)();return Object(w.jsxs)("label",{className:X.a.filterLabel,children:["Find contacts by name",Object(w.jsx)("input",{className:X.a.filterInput,type:"text",name:"filter",value:t,onChange:function(t){return e(v(t.target.value))}})]})},P=n(31),Q=n.n(P),U=n(16),Y=n.n(U),$=function(){var t=Object(u.c)(F),e=Object(u.b)();return Object(c.useEffect)((function(){e(C())}),[e]),Object(w.jsxs)("div",{className:Y.a.container,children:[Object(w.jsx)("h1",{className:Y.a.title,children:"Phonebook"}),Object(w.jsx)(D,{}),Object(w.jsx)("h2",{className:Y.a.subtitle,children:"Contacts"}),Object(w.jsx)(G,{}),t&&Object(w.jsx)(Q.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),Object(w.jsx)(T,{})]})},H=n(32),K=n.n(H),V=n(9),W=n(6),tt=n(33),et=n(4),nt=Object(l.c)([],(E={},Object(W.a)(E,f,(function(t,e){return e.payload})),Object(W.a)(E,O,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(W.a)(E,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),E)),ct=Object(l.c)(!1,(q={},Object(W.a)(q,j,(function(){return!0})),Object(W.a)(q,f,(function(){return!1})),Object(W.a)(q,m,(function(){return!1})),Object(W.a)(q,d,(function(){return!0})),Object(W.a)(q,O,(function(){return!1})),Object(W.a)(q,h,(function(){return!1})),Object(W.a)(q,p,(function(){return!0})),Object(W.a)(q,_,(function(){return!1})),Object(W.a)(q,x,(function(){return!1})),q)),at=Object(l.c)("",Object(W.a)({},v,(function(t,e){return e.payload}))),rt=Object(et.b)({items:nt,filter:at,loading:ct}),ot=Object(l.a)({reducer:{contacts:rt},middleware:function(t){return t({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}}).concat(K.a)},devTools:!1});n(79),n(80);o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(u.a,{store:ot,children:Object(w.jsx)($,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.f20c3211.chunk.js.map