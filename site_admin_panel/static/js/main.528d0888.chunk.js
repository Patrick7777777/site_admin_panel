(this.webpackJsonpgk_kontur_pro=this.webpackJsonpgk_kontur_pro||[]).push([[0],{21:function(t,e,c){},22:function(t,e,c){},23:function(t,e,c){},33:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){},69:function(t,e,c){},73:function(t,e,c){},74:function(t,e,c){},75:function(t,e,c){},76:function(t,e,c){},77:function(t,e,c){},81:function(t,e,c){},82:function(t,e,c){},84:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),i=c(34),s=c.n(i),o=(c(43),c(2)),j=(c(44),c(21),c(45),c(22),c(46),c(23),c(47),c(48),c(49),c(50),c(8)),b=c(3),r=c(4),l=c.n(r),d=(c(69),c(6)),u=c.n(d);var h=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/contact"}).then((function(t){s(t.data)}))}),[]);var j=Object(a.useState)([]),b=Object(o.a)(j,2),r=b[0],d=b[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){d(t.data)}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"PageAbout",children:[Object(n.jsx)("br",{}),i.map((function(t){return 8===t.id?Object(n.jsx)("h3",{children:t.name}):null})),Object(n.jsx)("br",{}),r.map((function(t){return 8===t.blog_category.id?Object(n.jsx)("div",{children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:t.content})})}):null})),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a - \u041f\u044f\u0442\u043d\u0438\u0446\u0430: 10:00 \u0434\u043e 19:00",Object(n.jsx)("br",{}),"\u0421\u0443\u0431\u0431\u043e\u0442\u0430 - \u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 - \u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0439"]}),Object(n.jsx)("br",{})]})})};c(73);var O=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/main"}).then((function(t){s(t.data)}))}),[]);var j=Object(a.useState)([]),b=Object(o.a)(j,2),r=b[0],d=b[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){d(t.data)}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"PageHome",children:[i.map((function(t){return 3===t.id?Object(n.jsx)("h3",{children:t.name}):null})),Object(n.jsx)("br",{}),r.map((function(t){return 3===t.blog_category.id?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.title}),t.content," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," "]}):null}))]})})};c(74);var v=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/services"}).then((function(t){s(t.data)}))}),[]);var j=Object(a.useState)([]),b=Object(o.a)(j,2),r=b[0],d=b[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){d(t.data)}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"PageServices",children:[i.map((function(t){return 4===t.id?Object(n.jsx)("h3",{children:t.name}):null})),Object(n.jsx)("br",{}),r.map((function(t){return 4===t.blog_category.id?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.title}),t.content," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," "]}):null}))]})})};c(75);var _=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/main"}).then((function(t){s(t.data)}))}),[]);var j=Object(a.useState)([]),b=Object(o.a)(j,2),r=b[0],d=b[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){d(t.data)}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"PageTechnologies",children:[i.map((function(t){return 6===t.id?Object(n.jsx)("h3",{children:t.name}):null})),Object(n.jsx)("br",{}),r.map((function(t){return 6===t.blog_category.id?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.title}),t.content," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," "]}):null}))]})})};c(76);var x=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/solutions"}).then((function(t){s(t.data)}))}),[]);var j=Object(a.useState)([]),b=Object(o.a)(j,2),r=b[0],d=b[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){d(t.data)}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"PageSolutions",children:[i.map((function(t){return 5===t.id?Object(n.jsx)("h3",{children:t.name}):null})),Object(n.jsx)("br",{}),r.map((function(t){return 5===t.blog_category.id?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.title}),t.content," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," "]}):null}))]})})};c(77),c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p;var p=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/main"}).then((function(t){s(t.data)}))}),[]);var j=Object(a.useState)([]),b=Object(o.a)(j,2),r=b[0],d=b[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){d(t.data)}))}),[]),Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"PageObjects",children:[i.map((function(t){return 7===t.id?Object(n.jsx)("h3",{children:t.name}):null})),Object(n.jsx)("br",{}),r.map((function(t){return 7===t.blog_category.id?Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:t.image,alt:""})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("div",{children:t.content})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," "]}):null}))]})})};var S=function(t){return Object(n.jsx)("div",{className:"article",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:O}),Object(n.jsx)(b.a,{path:"/main/",component:O}),Object(n.jsx)(b.a,{path:"/services/",component:v}),Object(n.jsx)(b.a,{path:"/technologies/",component:_}),Object(n.jsx)(b.a,{path:"/solutions/",component:x}),Object(n.jsx)(b.a,{path:"/objects/",component:p}),Object(n.jsx)(b.a,{path:"/contact/",component:h})]})})},f=(c(33),c(11)),m=c.n(f);var B=function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j.b,{to:"/main/",children:Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:t.BtMainState})})}),Object(n.jsx)(j.b,{to:"/services/",children:Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:t.BtServicesState})})}),Object(n.jsx)(j.b,{to:"/solutions/",children:Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:t.BtnSolutionsState})})}),Object(n.jsx)(j.b,{to:"/technologies/",children:Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:t.BtnTechnologiesState})})}),Object(n.jsx)(j.b,{to:"/objects/",children:Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:t.BtnObjectsState})})}),Object(n.jsx)(j.b,{to:"/contact/",children:Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:t.BtnContactsState})})})]})};var g=function(t){return Object(n.jsx)("div",{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/main",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/services",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/solutions",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/technologies",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/objects",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/contact",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_active",adaptiveWidth:t.adaptiveWidth,n:!0})}})]})})},W=c(36),N=c.n(W);var T=function(t){var e=Object(a.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://192.168.0.10:8000/api/blogpost/"}).then((function(t){s(t.data)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{children:Object(n.jsxs)("div",{className:"".concat(t.adaptiveWidth,"_contacts"),children:[i.map((function(e){return"\u0442\u0435\u043b\u0435\u0444\u043e\u043d"===e.title?Object(n.jsx)("li",{className:"".concat(t.adaptiveWidth,"_phones"),children:Object(n.jsx)("span",{children:e.content})}):null})),i.map((function(t){return"e-mail"===t.title?Object(n.jsx)("li",{className:"email",children:Object(n.jsx)("span",{children:t.content})}):null})),i.map((function(t){return"www"===t.title?Object(n.jsx)("li",{className:"www",children:Object(n.jsx)("span",{children:t.content})}):null}))]})})})};c(81);var E=function(t){return Object(n.jsx)("div",{onClick:t.resetVisiblePopup,children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/main",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/services",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/solutions",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/technologies",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/objects",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_active",BtnContactsState:"cb_no_active",adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/contact",render:function(e){e.match;return Object(n.jsx)(B,{BtMainState:"mb_no_active",BtServicesState:"yb_no_active",BtnSolutionsState:"sb_no_active",BtnTechnologiesState:"tb_no_active",BtnObjectsState:"ob_no_active",BtnContactsState:"cb_active",adaptiveWidth:t.adaptiveWidth})}})]})})};c(82);var C=function(t){return Object(n.jsx)("div",{className:"article",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(t){return Object(n.jsx)(O,{adaptiveWidth:t.adaptiveWidth})}}),Object(n.jsx)(b.a,{path:"/main",component:O}),Object(n.jsx)(b.a,{path:"/services",component:v}),Object(n.jsx)(b.a,{path:"/technologies",component:_}),Object(n.jsx)(b.a,{path:"/solutions",component:x}),Object(n.jsx)(b.a,{path:"/objects",component:p}),Object(n.jsx)(b.a,{path:"/contact",component:h})]})})};var y=function(t){return Object(n.jsx)("div",{className:"".concat(t.adaptiveWidth,"_slogan"),children:"\u0421\u0414\u0415\u041b\u0410\u0419\u0422\u0415 \u0412\u0410\u0428 \u0414\u041e\u041c \u0412\u041c\u0415\u0421\u0422\u0415 \u0421 \u041d\u0410\u041c\u0418!"})},M=c(37),w=c.n(M);var G=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),c=e[0],i=e[1],s=function(){i(!c)},b=Object(a.useState)(0),r=Object(o.a)(b,2),l=r[0],d=r[1],h=function(){d(window.innerWidth)};Object(a.useEffect)((function(){return h(),window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[l]);var O="";return l>1024?O="big":l<=1024&&(O="small"),Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"".concat(O,"_Content"),children:[Object(n.jsx)("div",{className:"".concat(O,"_Fon")}),Object(n.jsx)("div",{className:"".concat(O,"_Header")}),Object(n.jsx)(w.a,{children:Object(n.jsx)("div",{className:"".concat(O,"_Logo")})}),"small"!==O?Object(n.jsx)("div",{className:"".concat(O,"_Slogan"),children:Object(n.jsx)(u.a,{right:!0,children:Object(n.jsx)(y,{adaptiveWidth:O})})}):null,Object(n.jsx)("div",{className:"".concat(O,"_Contacts"),children:Object(n.jsx)(T,{adaptiveWidth:O})}),"small"===O?Object(n.jsx)("div",{className:"Button",children:Object(n.jsxs)("button",{onClick:s,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})}):null,"small"!==O?Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:"".concat(O,"_Menu"),children:Object(n.jsx)(g,{adaptiveWidth:O})})}):null,"small"!==O?Object(n.jsx)(m.a,{right:!0,children:Object(n.jsx)("div",{className:"".concat(O,"_Article"),children:Object(n.jsx)(S,{adaptiveWidth:O,toggleVisiblePopup:s,visiblePopup:c})})}):null,"small"===O&&c?Object(n.jsx)(m.a,{left:!0,children:Object(n.jsx)("div",{className:"MenuShow",children:Object(n.jsx)(E,{resetVisiblePopup:function(){return i(!1)}})})}):null,"small"!==O||c?null:Object(n.jsx)(m.a,{right:!0,children:Object(n.jsx)("div",{className:"ArticleShow",children:Object(n.jsx)(C,{adaptiveWidth:O})})}),Object(n.jsx)("div",{className:"".concat(O,"_Footer")})]})})},P=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),i(t),s(t)}))};c(83);s.a.render(Object(n.jsx)(G,{}),document.getElementById("root")),P()}},[[84,1,2]]]);
//# sourceMappingURL=main.528d0888.chunk.js.map