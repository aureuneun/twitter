(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(34),i=n.n(r),s=n(12),o=n(25),u=(n(41),n(53),n(54),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID});o.a.initializeApp(u);var l=o.a,j=o.a.auth(),d=o.a.firestore(),O=o.a.storage(),b=n(21),p=n(6),h=n(23),m=n(36),x=n(13),f=n(1),v=function(){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"/",style:{marginRight:10},children:Object(f.jsx)(x.a,{icon:h.c,color:"#04AAFF",size:"2x"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:Object(f.jsx)(x.a,{icon:m.a,color:"#04AAFF",size:"2x"})})})]})})},_=n(11),S=n(9),E=n.n(S),g=n(18),T=n(24),w=function(e){var t,n=e.id,a=e.text,r=e.creatorId,i=e.attachmentUrl,o=Object(c.useState)({isEditing:!1,tweet:a}),u=Object(s.a)(o,2),l=u[0],b=u[1],p=function(e){b((function(e){return{tweet:a,isEditing:!e.isEditing}}))},h=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.doc("tweets/".concat(n)).update({text:l.tweet});case 3:b(Object(_.a)(Object(_.a)({},l),{},{isEditing:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"nweet",children:l.isEditing?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:h,className:"container nweetEdit",children:[Object(f.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:l.tweet,onChange:function(e){var t=e.currentTarget.value;b(Object(_.a)(Object(_.a)({},l),{},{tweet:t}))},maxLength:100,required:!0,autoFocus:!0,className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Update tweet",className:"formBtn"})]}),Object(f.jsx)("span",{onClick:p,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{children:a}),i&&Object(f.jsx)("img",{src:i,alt:"attachment"}),r===(null===(t=j.currentUser)||void 0===t?void 0:t.uid)&&Object(f.jsxs)("div",{className:"nweet__actions",children:[Object(f.jsx)("span",{onClick:Object(g.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=7;break}return e.next=4,d.doc("tweets/".concat(n)).delete();case 4:if(!i){e.next=7;break}return e.next=7,O.refFromURL(i).delete();case 7:case"end":return e.stop()}}),e)}))),children:Object(f.jsx)(x.a,{icon:T.d})}),Object(f.jsx)("span",{onClick:p,children:Object(f.jsx)(x.a,{icon:T.a})})]})]})})},A=n(56),C=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],u=i[1],l=function(){var e=Object(g.a)(E.a.mark((function e(t){var c,r,i,s,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r="",""===o){e.next=10;break}return s=O.ref().child("".concat(null===(i=j.currentUser)||void 0===i?void 0:i.uid,"/").concat(Object(A.a)())),e.next=6,s.putString(o,"data_url");case 6:return l=e.sent,e.next=9,l.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=12,d.collection("tweets").add({text:n,createdAt:Date.now(),creatorId:null===(c=j.currentUser)||void 0===c?void 0:c.uid,attachmentUrl:r});case 12:a(""),u("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{onSubmit:l,className:"factoryForm",children:[Object(f.jsxs)("div",{className:"factoryInput__container",children:[Object(f.jsx)("input",{className:"factoryInput__input",type:"text",placeholder:"What is on your mind?",value:n,onChange:function(e){var t=e.currentTarget.value;a(t)},maxLength:100,required:!0}),Object(f.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(f.jsxs)("label",{className:"factoryInput__label",children:[Object(f.jsx)("span",{children:"Add photos"}),Object(f.jsx)(x.a,{icon:T.b}),Object(f.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.currentTarget.files;if(t){var n=t[0],c=new FileReader;n?c.readAsDataURL(n):u(""),c.onloadend=function(){u(String(c.result))}}},id:"attach-file",style:{display:"none"}})]}),o&&Object(f.jsxs)("div",{className:"factoryForm__attachment",children:[Object(f.jsx)("img",{src:o,alt:"attachment",style:{backgroundImage:o}}),Object(f.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return u("")},children:[Object(f.jsx)("span",{children:"Remove"}),Object(f.jsx)(x.a,{icon:T.c})]})]})]})},y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=d.collection("tweets").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(_.a)({id:e.id},e.data())}));a(t)}));return function(){return e()}}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(C,{}),Object(f.jsx)("div",{style:{marginTop:30},children:n.map((function(e){return Object(f.jsx)(w,Object(_.a)({},e),e.id)}))})]})},N=function(){var e,t=Object(p.f)(),n=Object(c.useState)(String(null===(e=j.currentUser)||void 0===e?void 0:e.displayName)),a=Object(s.a)(n,2),r=a[0],i=a[1],o=function(){var e=Object(g.a)(E.a.mark((function e(n){var c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),(null===(c=j.currentUser)||void 0===c?void 0:c.displayName)===r){e.next=4;break}return e.next=4,null===(a=j.currentUser)||void 0===a?void 0:a.updateProfile({displayName:r});case 4:t.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("form",{onSubmit:o,className:"profileForm",children:[Object(f.jsx)("input",{type:"text",placeholder:"Display name",value:r,onChange:function(e){var t=e.currentTarget.value;i(t)},autoFocus:!0,className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Update profile",className:"formBtn",style:{marginTop:10}})]}),Object(f.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){j.signOut(),t.push("/")},children:"Sign out"})]})},R=[{path:"/",component:Object(f.jsx)(y,{})},{path:"/profile",component:Object(f.jsx)(N,{})}],P=function(){return Object(f.jsxs)(b.a,{children:[Object(f.jsx)(v,{}),Object(f.jsx)(p.c,{children:Object(f.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:R.map((function(e){return Object(f.jsx)(p.a,{exact:!0,path:e.path,children:e.component},e.path)}))})})]})},I=n(27),D=function(){var e=Object(c.useState)({email:"",password:"",newAccount:!0,error:""}),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(e){var t=e.currentTarget,c=t.name,r=t.value;a(Object(_.a)(Object(_.a)({},n),{},Object(I.a)({},c,r)))},i=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!n.newAccount){e.next=7;break}return e.next=5,j.createUserWithEmailAndPassword(n.email,n.password);case 5:e.next=9;break;case 7:return e.next=9,j.signInWithEmailAndPassword(n.email,n.password);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a(Object(_.a)(Object(_.a)({},n),{},{error:e.t0.message}));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:i,className:"container",children:[Object(f.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:n.email,onChange:r,required:!0,className:"authInput"}),Object(f.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:r,required:!0,className:"authInput"}),Object(f.jsx)("input",{type:"submit",className:"authInput authSubmit",value:n.newAccount?"Create account":"sign in"}),n.error&&Object(f.jsx)("span",{className:"authError",children:n.error})]}),Object(f.jsx)("span",{onClick:function(){return a((function(e){return Object(_.a)(Object(_.a)({},e),{},{newAccount:!e.newAccount})}))},className:" authSwitch",children:n.newAccount?"Sign In":"Create Account"})]})},F=function(){var e=function(){var e=Object(g.a)(E.a.mark((function e(t){var n,c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("google"!==(n=t.currentTarget.name)){e.next=7;break}return c=new l.auth.GoogleAuthProvider,e.next=5,j.signInWithPopup(c);case 5:e.next=11;break;case 7:if("github"!==n){e.next=11;break}return a=new l.auth.GithubAuthProvider,e.next=11,j.signInWithPopup(a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"authContainer",children:[Object(f.jsx)(x.a,{icon:h.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(f.jsx)(D,{}),Object(f.jsxs)("div",{className:"authBtns",children:[Object(f.jsxs)("button",{name:"google",onClick:e,className:"authBtn",children:["Continue with Google ",Object(f.jsx)(x.a,{icon:h.b})]}),Object(f.jsxs)("button",{name:"github",onClick:e,className:"authBtn",children:["Continue with Github ",Object(f.jsx)(x.a,{icon:h.a})]})]})]})},k=[{path:"/",component:Object(f.jsx)(F,{})}],U=function(){return Object(f.jsx)(b.a,{children:Object(f.jsx)(p.c,{children:Object(f.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",display:"flex",justifyContent:"center"},children:k.map((function(e){return Object(f.jsx)(p.a,{exact:!0,path:e.path,children:e.component},e.path)}))})})})},B=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),o=i[0],u=i[1];return Object(c.useEffect)((function(){j.onAuthStateChanged((function(e){u(!!e),a(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?o?Object(f.jsx)(P,{}):Object(f.jsx)(U,{}):Object(f.jsx)("span",{children:"Initialization..."})})};n(51);i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e14fbc93.chunk.js.map