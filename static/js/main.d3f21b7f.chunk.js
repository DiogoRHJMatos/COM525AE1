(this.webpackJsonpcom525ae1=this.webpackJsonpcom525ae1||[]).push([[0],{203:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e.n(i),o=e(76),a=e.n(o),s=(e(90),e(47)),u=e(84),l=e(3),d=e(2),j=e.p+"static/media/bookmark-regular.61e9d3ba.svg",f=e.p+"static/media/bookmark-solid.d214e7a1.svg";function x(){var n=Object(l.a)(["\n    margin-right: 10px;\n    height: 18px;\n    width: 14px;\n    vertical-align: sub;\n"]);return x=function(){return n},n}function b(){var n=Object(l.a)(['\n  font-family: "Segoe UI semibold", Arial, Helvetica;\n  color: ',";\n  background-color: #ffffff;\n  padding: 10px 32px 14px 32px;\n  font-size: 18px;\n  border: 2.5px solid;\n  border-color: ",";\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 2%;\n  &:hover {\n    color:  #0A86E4;\n    border-color: #0A86E4;\n  }\n  &:active {\n    color: #007AD7;\n    border-color: #007AD7;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return n},n}var h=d.a.div(p()),O=d.a.button(b(),(function(n){return n.color}),(function(n){return n.color})),g=d.a.img(x()),v=function(n){var t=n.children,e=n.color,i=n.disabled,c=Object(u.a)(n,["children","color","disabled"]);return Object(r.jsxs)(O,Object(s.a)(Object(s.a)({color:i?"#90C7F1":e,disabled:i},c),{},{children:[" ",t," "]}))},m=function(){return Object(r.jsxs)(h,{children:[Object(r.jsxs)(v,{color:"#2894E7",children:[Object(r.jsx)(g,{src:j}),"Save"]}),Object(r.jsxs)(v,{color:"#2894E7",children:[Object(r.jsx)(g,{src:f}),"Save"]})]})},w=e(6),k=e(46),C=e(83),y=e(36),F=e.p+"static/media/hide.7e5c64cf.svg",S=e.p+"static/media/show.3466c274.svg";function E(){var n=Object(l.a)(["\n    color: #CBCBCB;\n    margin-left: 30px;\n"]);return E=function(){return n},n}function B(){var n=Object(l.a)(["\n    color: #CBCBCB;\n    margin-left: 5px;\n"]);return B=function(){return n},n}function z(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #ffffff;\n    background-color: #2894E7;\n    padding: 11px 56px 16px 56px;\n    font-size: 18px;\n    border: 0;\n    border-radius: 10px;\n    cursor: pointer;\n    width: 296px;\n    &:hover {\n        background: #0A86E4;\n    }\n    &:active {\n        background: #007AD7;\n    }\n']);return z=function(){return n},n}function A(){var n=Object(l.a)(["\n    margin-top: 5px;\n    margin-left: 5px;\n    color: red;\n"]);return A=function(){return n},n}function D(){var n=Object(l.a)(["\n    margin-left: 20px;\n"]);return D=function(){return n},n}function P(){var n=Object(l.a)(["\n    background: #ffffff;\n    border: 2px solid #EDEDED;\n    border-radius: 10px;\n    height: 51px;\n    width: 271px;\n    padding-left: 20px;\n    font-size: 18px;\n    color: #CBCBCB;\n"]);return P=function(){return n},n}function I(){var n=Object(l.a)(["\n    height: 24px;\n    width: 24px;\n    margin-left: -40px;\n    margin-bottom: -5px;\n"]);return I=function(){return n},n}function N(){var n=Object(l.a)(["\n    color: #3C4044;\n    font-size: 20px;\n    margin-left: 5px;\n"]);return N=function(){return n},n}function H(){var n=Object(l.a)(["\n  color: #FFFFFF;\n  width: 296px;\n"]);return H=function(){return n},n}function L(){var n=Object(l.a)(["\n    color: #3C4044;\n    margin-left: 20px;\n    font-size: 24px;\n"]);return L=function(){return n},n}function M(){var n=Object(l.a)(["\n    background: #ffffff;\n    border-radius: 15px;\n    height: 510px;\n    width: 337px;\n"]);return M=function(){return n},n}function U(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    background: #F1F3F5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 100vh;\n']);return U=function(){return n},n}var R=y.a().shape({email:y.b().required("Email is required").email("Not a valid email"),password:y.b().required("Password is required")}),W=d.a.div(U()),q=d.a.div(M()),V=d.a.h1(L()),J=d.a.hr(H()),T=d.a.h2(N()),G=d.a.img(I()),K=d.a.input(P()),Q=d.a.div(D()),X=d.a.p(A()),Y=d.a.button(z()),Z=d.a.div(B()),$=d.a.p(E()),_=function(){var n,t,e=Object(i.useState)(!1),c=Object(w.a)(e,2),o=c[0],a=c[1],s=Object(k.useForm)({resolver:Object(C.yupResolver)(R)}),u=s.register,l=s.handleSubmit,d=s.errors;return Object(r.jsx)(W,{children:Object(r.jsxs)(q,{children:[Object(r.jsx)(V,{children:"Sign In"}),Object(r.jsx)(J,{}),Object(r.jsx)(Q,{children:Object(r.jsxs)("form",{onSubmit:l((function(n){return console.log(n)})),children:[Object(r.jsx)(T,{children:"Email"}),Object(r.jsxs)("p",{children:[Object(r.jsx)(K,{type:"text",name:"email",placeholder:"example@email.com",ref:u()}),Object(r.jsx)(X,{children:null===(n=d.email)||void 0===n?void 0:n.message})]}),Object(r.jsx)(T,{children:"Password"}),Object(r.jsxs)("p",{children:[Object(r.jsx)(K,{type:o?"text":"password",name:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",ref:u()}),Object(r.jsx)(G,{src:o?F:S,onClick:function(){a(!o)}}),Object(r.jsx)(X,{children:null===(t=d.password)||void 0===t?void 0:t.message})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Forgot Password?"}),Object(r.jsx)("p",{children:Object(r.jsx)(Y,{children:"Sign In"})}),Object(r.jsx)($,{children:"Don't have an account? Sign up"})]})]})})]})})},nn=e.p+"static/media/times-solid.74c2ef04.svg",tn=e.p+"static/media/bars-solid.92b50a53.svg";function en(){var n=Object(l.a)(["\n  float: left;\n  width: 25px;\n  height: 25px;\n  fill: white;\n  margin: 25px;\n  cursor: pointer;\n"]);return en=function(){return n},n}function rn(){var n=Object(l.a)(["\n  display: flex;\n  color: white;\n  flex-direction: column;\n  & li {\n    list-style: none;\n    margin-top: 4rem;\n    cursor: pointer;\n    &:hover {\n      font-weight: bold;\n    }\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(l.a)(["\n  float: left;\n  width: 15px;\n  height: 15px;\n  fill: white;\n  margin: 25px;\n  cursor: pointer;\n"]);return cn=function(){return n},n}function on(){var n=Object(l.a)(["\n  height: 100vh;\n  border-radius: 40px 0 0 40px;\n  width: ",";\n  transition: 1s;\n  position: fixed;\n  top: 0;\n  right: 0;\n  background: #2894E7;\n"]);return on=function(){return n},n}function an(){var n=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n  float: right;\n"]);return an=function(){return n},n}var sn=d.a.div(an()),un=d.a.div(on(),(function(n){return n.open?"250px":"0px"})),ln=d.a.img(cn()),dn=d.a.ul(rn()),jn=d.a.img(en()),fn=function(){var n=Object(i.useState)(!1),t=Object(w.a)(n,2),e=t[0],c=t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(sn,{children:[Object(r.jsxs)(un,{open:e,children:[Object(r.jsx)(ln,{onClick:function(){c(!1)},src:nn}),e&&Object(r.jsxs)(dn,{children:[Object(r.jsx)("li",{children:"Home"}),Object(r.jsx)("li",{children:"About"}),Object(r.jsx)("li",{children:"Privacy"}),Object(r.jsx)("li",{children:"Contacts"})]})]}),Object(r.jsx)(jn,{onClick:function(){c(!e)},src:tn})]})})},xn=e.p+"static/media/WS.883a1d7e.jpg",bn=e.p+"static/media/times-icon.df100a62.svg";function pn(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #E89929;\n    border-color: #E89929;\n    background-color: #ffffff;\n    padding: 10px 45px 15px 45px;\n    font-size: 16px;\n    border: 2px solid;\n    border-radius: 10px;\n    cursor: pointer;\n    margin: 2%;\n    &:hover {\n        color:  #E58B0C;\n        border-color: #E58B0C;\n    }\n    &:active {\n        color: #D87F00;\n        border-color: #D87F00;\n    }\n']);return pn=function(){return n},n}function hn(){var n=Object(l.a)(['\n    position: absolute;\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #ffffff;\n    background-color: #E89929;\n    padding: 11px 56px 16px 56px;\n    font-size: 18px;\n    border: 0;\n    border-radius: 10px;\n    cursor: pointer;\n    right: 0px;\n    bottom: 0px;\n    margin-right: 267px;\n    margin-bottom: 67px;\n    width: 197px;\n    &:hover {\n        background: #E58B0C;\n    }\n    &:active {\n        background: #D87F00;\n    }\n']);return hn=function(){return n},n}function On(){var n=Object(l.a)(["\n    width: 334px;\n    text-align: center;\n    position: absolute;\n    margin-left: 198px;\n    margin-top: 139px;\n"]);return On=function(){return n},n}function gn(){var n=Object(l.a)(["\n    text-shadow: 0px 0px 10px rgba(0,0,0,0.16);\n    font-family: 'Rubik', sans-serif;\n    font-size: 32px;\n    margin: 0px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(l.a)(["\n    text-shadow: 0px 0px 10px rgba(0,0,0,0.16);\n    font-family: 'Rubik', sans-serif;\n    font-size: 52px;\n    margin: 0px;\n"]);return vn=function(){return n},n}function mn(){var n=Object(l.a)(["\n    width: 730px;\n    height: 450px;\n    border-radius: 10px;\n"]);return mn=function(){return n},n}function wn(){var n=Object(l.a)(["\n    margin: 6px;\n    height: 30px;\n    width: 30px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(l.a)(["\n    height: 42px;\n    width: 42px;\n    cursor: pointer;\n    margin-left: 772px;\n    margin-top: -500px;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n    position:fixed;\n    z-index: 2;\n    border-radius: 10px;\n"]);return Cn=function(){return n},n}function yn(){var n=Object(l.a)(['\n    font-family: "Poppins", sans-serif;\n    color: #ffffff;\n    animation: 0.1s '," linear;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    z-index: 1;\n    background-color: #11365360;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return yn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return Fn=function(){return n},n}var Sn=d.a.div(Fn()),En=d.a.div(yn(),Object(d.b)({from:{opacity:0},to:{opacity:1}})),Bn=d.a.div(Cn()),zn=d.a.div(kn()),An=d.a.img(wn()),Dn=d.a.img(mn()),Pn=d.a.h1(vn()),In=d.a.h2(gn()),Nn=d.a.div(On()),Hn=d.a.button(hn()),Ln=d.a.button(pn()),Mn=function(n){var t=n.show,e=n.onClose,i=n.children;return Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsxs)(En,{onClick:e,children:[Object(r.jsx)(zn,{onClick:e,children:Object(r.jsx)(An,{src:bn})}),Object(r.jsx)(Bn,{onClick:function(n){n.preventDefault(),n.stopPropagation()},children:i})]})})},Un=function(){var n=Object(i.useState)(!1),t=Object(w.a)(n,2),e=t[0],c=t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Sn,{children:[Object(r.jsx)(Ln,{onClick:function(){return c(!0)},children:"Show Modal"}),Object(r.jsxs)(Mn,{show:e,onClose:function(){return c(!1)},children:[Object(r.jsxs)(Nn,{children:[Object(r.jsx)(Pn,{children:"White Sands"}),Object(r.jsx)(In,{children:"National Park"})]}),Object(r.jsx)(Hn,{children:"Book Now"}),Object(r.jsx)(Dn,{src:xn})]})]})})},Rn=e.p+"static/media/ML.5394b690.jpg",Wn=e.p+"static/media/VF.2dc9ab95.jpg",qn=e.p+"static/media/WS.883a1d7e.jpg",Vn=e.p+"static/media/times-icon.df100a62.svg";function Jn(){var n=Object(l.a)(["\n    width: 730px;\n    height: 450px;\n    border-radius: 10px;\n"]);return Jn=function(){return n},n}function Tn(){var n=Object(l.a)(['\n    position: absolute;\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #ffffff;\n    background-color: ',";\n    padding: 11px 56px 16px 56px;\n    font-size: 18px;\n    border: 0;\n    border-radius: 10px;\n    cursor: pointer;\n    right: 0px;\n    bottom: 0px;\n    margin-right: 267px;\n    margin-bottom: 67px;\n    width: 197px;\n    &:hover {\n        background: ",";\n    }\n    &:active {\n        background: ",";\n    }\n"]);return Tn=function(){return n},n}function Gn(){var n=Object(l.a)(["\n    width: 334px;\n    text-align: center;\n    position: absolute;\n    margin-left: 198px;\n    margin-top: 139px;\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n    text-shadow: 0px 0px 10px rgba(0,0,0,0.16);\n    font-family: 'Rubik', sans-serif;\n    font-size: 32px;\n    margin: 0px;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n    text-shadow: 0px 0px 10px rgba(0,0,0,0.16);\n    font-family: 'Rubik', sans-serif;\n    font-size: 52px;\n    margin: 0px;\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n    position:fixed;\n    z-index: 2;\n    border-radius: 10px;\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(l.a)(["\n    margin: 6px;\n    height: 30px;\n    width: 30px;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(l.a)(["\n    height: 42px;\n    width: 42px;\n    cursor: pointer;\n    margin-left: 772px;\n    margin-top: -500px;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(l.a)(['\n    font-family: "Poppins", sans-serif;\n    color: #ffffff;\n    animation: 0.1s '," linear;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    z-index: 1;\n    background: #3C404480;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return $n=function(){return n},n}function _n(){var n=Object(l.a)(["\n    margin: 10px 10px 0px 10px;\n    width: 317px;\n    height: 195px;\n    border-radius: 10px;\n"]);return _n=function(){return n},n}function nt(){var n=Object(l.a)(["\n    color: #3C4044;\n    font-size: 24px;\n    margin: 4px 0px 0px 20px;\n"]);return nt=function(){return n},n}function tt(){var n=Object(l.a)(["\n    background: #ffffff;\n    border-radius: 15px;\n    width: 337px;\n    height: 257px;\n    margin-left: 80px;\n    cursor: pointer;\n"]);return tt=function(){return n},n}function et(){var n=Object(l.a)(["\n    background: #ffffff;\n    border-radius: 15px;\n    width: 337px;\n    height: 257px;\n    cursor: pointer;\n"]);return et=function(){return n},n}function rt(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    background: #F1F3F5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    height: 100vh;\n']);return rt=function(){return n},n}var it=d.a.div(rt()),ct=d.a.div(et()),ot=d.a.div(tt()),at=d.a.h2(nt()),st=d.a.img(_n()),ut=d.a.div($n(),Object(d.b)({from:{opacity:0},to:{opacity:1}})),lt=d.a.div(Zn()),dt=d.a.img(Yn()),jt=d.a.div(Xn()),ft=d.a.h1(Qn()),xt=d.a.h2(Kn()),bt=d.a.div(Gn()),pt=d.a.button(Tn(),(function(n){return n.color}),(function(n){return n.hover}),(function(n){return n.active})),ht=d.a.img(Jn()),Ot=function(n){var t=n.show,e=n.onClose,i=n.children;return Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsxs)(ut,{onClick:e,children:[Object(r.jsx)(lt,{onClick:e,children:Object(r.jsx)(dt,{src:Vn})}),Object(r.jsx)(jt,{onClick:function(n){n.preventDefault(),n.stopPropagation()},children:i})]})})},gt=function(){var n=Object(i.useState)(!1),t=Object(w.a)(n,2),e=t[0],c=t[1],o=Object(i.useState)(!1),a=Object(w.a)(o,2),s=a[0],u=a[1],l=Object(i.useState)(!1),d=Object(w.a)(l,2),j=d[0],f=d[1];return Object(r.jsxs)(it,{children:[Object(r.jsxs)(ct,{onClick:function(){return u(!0)},children:[Object(r.jsx)(st,{src:Wn}),Object(r.jsx)(at,{children:"Valley of Fire"})]}),Object(r.jsxs)(Ot,{show:s,onClose:function(){return u(!1)},children:[Object(r.jsxs)(bt,{children:[Object(r.jsx)(ft,{children:"Valley of Fire"}),Object(r.jsx)(xt,{children:"State Park"})]}),Object(r.jsx)(pt,{color:"#E86F29",hover:"#E65C0C",active:"#D84F00",children:"Book Now"}),Object(r.jsx)(ht,{src:Wn})]}),Object(r.jsxs)(ot,{onClick:function(){return c(!0)},children:[Object(r.jsx)(st,{src:qn}),Object(r.jsx)(at,{children:"White Sands"})]}),Object(r.jsxs)(Ot,{show:e,onClose:function(){return c(!1)},children:[Object(r.jsxs)(bt,{children:[Object(r.jsx)(ft,{children:"White Sands"}),Object(r.jsx)(xt,{children:"National Park"})]}),Object(r.jsx)(pt,{color:"#E89929",hover:"#E58B0C",active:"#D87F00",children:"Book Now"}),Object(r.jsx)(ht,{src:qn})]}),Object(r.jsxs)(ot,{onClick:function(){return f(!0)},children:[Object(r.jsx)(st,{src:Rn}),Object(r.jsx)(at,{children:"Moraine Lake"})]}),Object(r.jsxs)(Ot,{show:j,onClose:function(){return f(!1)},children:[Object(r.jsxs)(bt,{children:[Object(r.jsx)(ft,{children:"Banff"}),Object(r.jsx)(xt,{children:"National Park"})]}),Object(r.jsx)(pt,{color:"#2894E7",hover:"#0A86E4",active:"#007AD7",children:"Book Now"}),Object(r.jsx)(ht,{src:Rn})]})]})},vt=e(20),mt=e(5),wt=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(vt.b,{to:"/Login",children:"Login"})}),Object(r.jsx)("li",{children:Object(r.jsx)(vt.b,{to:"/Buttons",children:"Buttons"})}),Object(r.jsx)("li",{children:Object(r.jsx)(vt.b,{to:"/Nav",children:"Navigation Bar"})}),Object(r.jsx)("li",{children:Object(r.jsx)(vt.b,{to:"/Card",children:"Card"})}),Object(r.jsx)("li",{children:Object(r.jsx)(vt.b,{to:"/Modal",children:"Modal"})})]})})},kt=function(){return Object(r.jsx)(vt.a,{children:Object(r.jsxs)(mt.c,{children:[Object(r.jsx)(mt.a,{path:"/Login",children:Object(r.jsx)(_,{})}),Object(r.jsx)(mt.a,{path:"/Buttons",children:Object(r.jsx)(m,{})}),Object(r.jsx)(mt.a,{path:"/Nav",children:Object(r.jsx)(fn,{})}),Object(r.jsx)(mt.a,{path:"/Card",children:Object(r.jsx)(gt,{})}),Object(r.jsx)(mt.a,{path:"/Modal",children:Object(r.jsx)(Un,{})}),Object(r.jsx)(mt.a,{path:"/",children:Object(r.jsx)(wt,{})})]})})},Ct=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,204)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),i(n),c(n),o(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(kt,{})}),document.getElementById("root")),Ct()},90:function(n,t,e){}},[[203,1,2]]]);
//# sourceMappingURL=main.d3f21b7f.chunk.js.map