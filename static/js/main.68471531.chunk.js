(this.webpackJsonpcom525ae1=this.webpackJsonpcom525ae1||[]).push([[0],{203:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),o=t(76),a=t.n(o),u=(t(90),t(47)),s=t(84),l=t(3),d=t(2),f=t.p+"static/media/bookmark-regular.61e9d3ba.svg",b=t.p+"static/media/bookmark-solid.d214e7a1.svg";function j(){var n=Object(l.a)(["\n    margin-right: 10px;\n    height: 18px;\n    width: 14px;\n    vertical-align: sub;\n"]);return j=function(){return n},n}function x(){var n=Object(l.a)(['\n  font-family: "Segoe UI semibold", Arial, Helvetica;\n  color: ',";\n  background-color: #ffffff;\n  padding: 10px 32px 14px 32px;\n  font-size: 18px;\n  border: 2.5px solid;\n  border-color: ",";\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 2%;\n  &:hover {\n    color:  #0A86E4;\n    border-color: #0A86E4;\n  }\n  &:active {\n    color: #007AD7;\n    border-color: #007AD7;\n  }\n"]);return x=function(){return n},n}function p(){var n=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return n},n}var h=d.a.div(p()),O=d.a.button(x(),(function(n){return n.color}),(function(n){return n.color})),g=d.a.img(j()),m=function(n){var e=n.children,t=n.color,i=n.disabled,c=Object(s.a)(n,["children","color","disabled"]);return Object(r.jsxs)(O,Object(u.a)(Object(u.a)({color:i?"#90C7F1":t,disabled:i},c),{},{children:[" ",e," "]}))},v=function(){return Object(r.jsxs)(h,{children:[Object(r.jsxs)(m,{color:"#2894E7",children:[Object(r.jsx)(g,{src:f}),"Save"]}),Object(r.jsxs)(m,{color:"#2894E7",children:[Object(r.jsx)(g,{src:b}),"Save"]})]})},w=t(6),k=t(46),y=t(83),C=t(36),A=t.p+"static/media/hide.7e5c64cf.svg",E=t.p+"static/media/show.3466c274.svg";function S(){var n=Object(l.a)(["\n    color: #CBCBCB;\n    margin-left: 30px;\n"]);return S=function(){return n},n}function B(){var n=Object(l.a)(["\n    color: #CBCBCB;\n    margin-left: 5px;\n"]);return B=function(){return n},n}function F(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #ffffff;\n    background-color: #2894E7;\n    padding: 11px 56px 16px 56px;\n    font-size: 18px;\n    border: 0;\n    border-radius: 10px;\n    cursor: pointer;\n    width: 296px;\n    &:hover {\n        background: #0A86E4;\n    }\n    &:active {\n        background: #007AD7;\n    }\n']);return F=function(){return n},n}function z(){var n=Object(l.a)(["\n    margin-top: 5px;\n    margin-left: 5px;\n    color: red;\n"]);return z=function(){return n},n}function D(){var n=Object(l.a)(["\n    margin-left: 20px;\n"]);return D=function(){return n},n}function P(){var n=Object(l.a)(["\n    background: #ffffff;\n    border: 2px solid #EDEDED;\n    border-radius: 10px;\n    height: 51px;\n    width: 271px;\n    padding-left: 20px;\n    font-size: 18px;\n    color: #CBCBCB;\n"]);return P=function(){return n},n}function I(){var n=Object(l.a)(["\n    height: 24px;\n    width: 24px;\n    margin-left: -40px;\n    margin-bottom: -5px;\n"]);return I=function(){return n},n}function N(){var n=Object(l.a)(["\n    color: #3C4044;\n    font-size: 20px;\n    margin-left: 5px;\n"]);return N=function(){return n},n}function L(){var n=Object(l.a)(["\n  color: #FFFFFF;\n  width: 296px;\n"]);return L=function(){return n},n}function H(){var n=Object(l.a)(["\n    color: #3C4044;\n    margin-left: 20px;\n    font-size: 24px;\n"]);return H=function(){return n},n}function M(){var n=Object(l.a)(["\n    background: #ffffff;\n    border-radius: 15px;\n    height: 510px;\n    width: 337px;\n"]);return M=function(){return n},n}function U(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    background: #F1F3F5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 100vh;\n']);return U=function(){return n},n}var q=C.a().shape({email:C.b().required("Email is required").email("Not a valid email"),password:C.b().required("Password is required")}),R=d.a.div(U()),J=d.a.div(M()),T=d.a.h1(H()),Y=d.a.hr(L()),G=d.a.h2(N()),K=d.a.img(I()),Q=d.a.input(P()),V=d.a.div(D()),W=d.a.p(z()),X=d.a.button(F()),Z=d.a.div(B()),$=d.a.p(S()),_=function(){var n,e,t=Object(i.useState)(!1),c=Object(w.a)(t,2),o=c[0],a=c[1],u=Object(k.useForm)({resolver:Object(y.yupResolver)(q)}),s=u.register,l=u.handleSubmit,d=u.errors;return Object(r.jsx)(R,{children:Object(r.jsxs)(J,{children:[Object(r.jsx)(T,{children:"Sign In"}),Object(r.jsx)(Y,{}),Object(r.jsx)(V,{children:Object(r.jsxs)("form",{onSubmit:l((function(n){return console.log(n)})),children:[Object(r.jsx)(G,{children:"Email"}),Object(r.jsxs)("p",{children:[Object(r.jsx)(Q,{type:"text",name:"email",placeholder:"example@email.com",ref:s()}),Object(r.jsx)(W,{children:null===(n=d.email)||void 0===n?void 0:n.message})]}),Object(r.jsx)(G,{children:"Password"}),Object(r.jsxs)("p",{children:[Object(r.jsx)(Q,{type:o?"text":"password",name:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",ref:s()}),Object(r.jsx)(K,{src:o?A:E,onClick:function(){a(!o)}}),Object(r.jsx)(W,{children:null===(e=d.password)||void 0===e?void 0:e.message})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Forgot Password?"}),Object(r.jsx)("p",{children:Object(r.jsx)(X,{children:"Sign In"})}),Object(r.jsx)($,{children:"Don't have an account? Sign up"})]})]})})]})})},nn=t.p+"static/media/times-solid.74c2ef04.svg",en=t.p+"static/media/bars-solid.92b50a53.svg";function tn(){var n=Object(l.a)(["\n  float: left;\n  width: 25px;\n  height: 25px;\n  fill: white;\n  margin: 25px;\n  cursor: pointer;\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  display: flex;\n  color: white;\n  flex-direction: column;\n  & li {\n    list-style: none;\n    margin-top: 4rem;\n    cursor: pointer;\n    &:hover {\n      font-weight: bold;\n    }\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(l.a)(["\n  float: left;\n  width: 15px;\n  height: 15px;\n  fill: white;\n  margin: 25px;\n  cursor: pointer;\n"]);return cn=function(){return n},n}function on(){var n=Object(l.a)(["\n  height: 100vh;\n  border-radius: 40px 0 0 40px;\n  width: ",";\n  transition: 1s;\n  position: fixed;\n  top: 0;\n  right: 0;\n  background: #2894E7;\n"]);return on=function(){return n},n}function an(){var n=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n  float: right;\n"]);return an=function(){return n},n}var un=d.a.div(an()),sn=d.a.div(on(),(function(n){return n.open?"250px":"0px"})),ln=d.a.img(cn()),dn=d.a.ul(rn()),fn=d.a.img(tn()),bn=function(){var n=Object(i.useState)(!1),e=Object(w.a)(n,2),t=e[0],c=e[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(un,{children:[Object(r.jsxs)(sn,{open:t,children:[Object(r.jsx)(ln,{onClick:function(){c(!1)},src:nn}),t&&Object(r.jsxs)(dn,{children:[Object(r.jsx)("li",{children:"Home"}),Object(r.jsx)("li",{children:"About"}),Object(r.jsx)("li",{children:"Privacy"}),Object(r.jsx)("li",{children:"Contacts"})]})]}),Object(r.jsx)(fn,{onClick:function(){c(!t)},src:en})]})})},jn=t.p+"static/media/backgroundModal.f5c5f920.jpg",xn=t.p+"static/media/times-icon.df100a62.svg";function pn(){var n=Object(l.a)(['\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #2894E7;\n    border-color: #2894E7;\n    background-color: #ffffff;\n    padding: 10px 45px 15px 45px;\n    font-size: 16px;\n    border: 2px solid;\n    border-radius: 8px;\n    cursor: pointer;\n    margin: 2%;\n    &:hover {\n        color:  #0A86E4;\n        border-color: #0A86E4;\n    }\n    &:active {\n        color: #007AD7;\n        border-color: #007AD7;\n    }\n']);return pn=function(){return n},n}function hn(){var n=Object(l.a)(['\n    position: absolute;\n    font-family: "Segoe UI semibold", Arial, Helvetica;\n    color: #ffffff;\n    background-color: #2894E7;\n    padding: 11px 56px 16px 56px;\n    font-size: 18px;\n    border: 0;\n    border-radius: 8px;\n    cursor: pointer;\n    right: 0px;\n    bottom: 0px;\n    margin-right: 65px;\n    margin-bottom: 87px;\n    width: 197px;\n    &:hover {\n        background: #0A86E4;\n    }\n    &:active {\n        background: #007AD7;\n    }\n']);return hn=function(){return n},n}function On(){var n=Object(l.a)(['\n    position: absolute;\n    font-family: "Poppins", sans-serif;\n    font-size: 18px;\n    width: 315px;\n    height: 52px;\n    bottom: 0px;\n    margin-left: 65px;\n    margin-bottom: 87px;\n']);return On=function(){return n},n}function gn(){var n=Object(l.a)(["\n    position: absolute;\n    font-family: 'Rubik', sans-serif;\n    font-size: 32px;\n    margin-left: 65px;\n    margin-top: 187.5px;\n"]);return gn=function(){return n},n}function mn(){var n=Object(l.a)(["\n    position: absolute;\n    font-family: 'Rubik', sans-serif;\n    font-size: 46px;\n    margin-left: 65px;\n    margin-top: 133px;\n"]);return mn=function(){return n},n}function vn(){var n=Object(l.a)(["\n    width: 730px;\n    height: 450px;\n    border-radius: 8px;\n"]);return vn=function(){return n},n}function wn(){var n=Object(l.a)(["\n    margin: 6px;\n    height: 30px;\n    width: 30px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(l.a)(["\n    height: 42px;\n    width: 42px;\n    cursor: pointer;\n    margin-left: 772px;\n    margin-top: -500px;\n"]);return kn=function(){return n},n}function yn(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: flex-end;\n    padding: 0.5rem 0.5rem;\n    font-size: 30px;\n    cursor: pointer;\n"]);return yn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n    position:fixed;\n    z-index: 2;\n    border-radius: 8px;\n"]);return Cn=function(){return n},n}function An(){var n=Object(l.a)(['\n    font-family: "Poppins", sans-serif;\n    color: #ffffff;\n    animation: 0.1s '," linear;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    z-index: 1;\n    background: #11365370;\n    oppacity: 0.6%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return An=function(){return n},n}function En(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return En=function(){return n},n}var Sn=d.a.div(En()),Bn=d.a.div(An(),Object(d.b)({from:{opacity:0},to:{opacity:1}})),Fn=d.a.div(Cn()),zn=(d.a.header(yn()),d.a.div(kn())),Dn=d.a.img(wn()),Pn=d.a.img(vn()),In=d.a.h1(mn()),Nn=d.a.h2(gn()),Ln=d.a.p(On()),Hn=d.a.button(hn()),Mn=d.a.button(pn()),Un=function(n){var e=n.show,t=n.onClose,i=n.children;return Object(r.jsx)(r.Fragment,{children:e&&Object(r.jsxs)(Bn,{onClick:t,children:[Object(r.jsx)(zn,{onClick:t,children:Object(r.jsx)(Dn,{src:xn})}),Object(r.jsx)(Fn,{onClick:function(n){n.preventDefault(),n.stopPropagation()},children:i})]})})},qn=function(){var n=Object(i.useState)(!1),e=Object(w.a)(n,2),t=e[0],c=e[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Sn,{children:[Object(r.jsx)(Mn,{onClick:function(){return c(!0)},color:"#2894E7",children:"Show Modal"}),Object(r.jsxs)(Un,{show:t,onClose:function(){return c(!1)},children:[Object(r.jsx)(In,{children:"Banff"}),Object(r.jsx)(Nn,{children:"National Park"}),Object(r.jsx)(Ln,{children:"You will never run out of places to discover in this winter wonderland."}),Object(r.jsx)(Hn,{color:"#2894E7",children:"Book Now"}),Object(r.jsx)(Pn,{src:jn})]})]})})};function Rn(){var n=Object(l.a)(["\n    border-radius: 5rem;\n    animation: "," "," linear;\n    animation-fill-mode: forwards;\n    border: solid 0.3125rem;\n    height: 9rem;\n    width: 8.125rem;\n    margin: 0.7rem;\n    background: linear-gradient(180deg, #4b4a49, #313130);\n    margin: 0.4rem 0 0.2rem 0.1rem;\n     \n"]);return Rn=function(){return n},n}function Jn(){var n=Object(l.a)(["\n    border-radius: 5rem;\n    border: solid 0.5rem;\n    background-color: #313130;\n    color: #b95951;\n    height: 10rem;\n    width: 20rem;\n"]);return Jn=function(){return n},n}function Tn(){var n=Object(l.a)(["\n    animation: "," "," linear;\n    animation-fill-mode: forwards;\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    justify-content: center;\n    align-items: center;\n"]);return Tn=function(){return n},n}var Yn=function(n,e){return Object(d.b)({from:n,to:e})},Gn=d.a.div(Tn(),"1s",(function(n){return n.showBackground&&Yn({background:"white"},{background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23d4ab)"})})),Kn=d.a.div(Jn()),Qn=d.a.div(Rn(),"1s",(function(n){return n.active&&Yn({marginLeft:0},{marginLeft:"180px"})})),Vn=function(n){var e=Object(i.useState)(!1),t=Object(w.a)(e,2),c=t[0],o=t[1],a=n.onActive,u=n.onNotActive;Object(i.useEffect)((function(){c?a():u()}),[c]);return Object(r.jsxs)(Kn,{children:[" ",Object(r.jsx)(Qn,{active:c,onClick:function(){return o(!c)}})," "]})},Wn=function(){var n=Object(i.useState)(!1),e=Object(w.a)(n,2),t=e[0],c=e[1];return Object(r.jsx)(Gn,{showBackground:t,children:Object(r.jsx)(Vn,{onNotActive:function(){return c(!1)},onActive:function(){return c(!0)}})})},Xn=t(20),Zn=t(5),$n=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(Xn.b,{to:"/Login",children:"Login"})}),Object(r.jsx)("li",{children:Object(r.jsx)(Xn.b,{to:"/Buttons",children:"Buttons"})}),Object(r.jsx)("li",{children:Object(r.jsx)(Xn.b,{to:"/Nav",children:"Navigation Bar"})}),Object(r.jsx)("li",{children:Object(r.jsx)(Xn.b,{to:"/Card",children:"Card"})}),Object(r.jsx)("li",{children:Object(r.jsx)(Xn.b,{to:"/Modal",children:"Modal"})})]})})},_n=function(){return Object(r.jsx)(Xn.a,{children:Object(r.jsxs)(Zn.c,{children:[Object(r.jsx)(Zn.a,{path:"/Login",children:Object(r.jsx)(_,{})}),Object(r.jsx)(Zn.a,{path:"/Buttons",children:Object(r.jsx)(v,{})}),Object(r.jsx)(Zn.a,{path:"/Nav",children:Object(r.jsx)(bn,{})}),Object(r.jsx)(Zn.a,{path:"/Card",children:Object(r.jsx)(Wn,{})}),Object(r.jsx)(Zn.a,{path:"/Modal",children:Object(r.jsx)(qn,{})}),Object(r.jsx)(Zn.a,{path:"/",children:Object(r.jsx)($n,{})})]})})},ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,204)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_n,{})}),document.getElementById("root")),ne()},90:function(n,e,t){}},[[203,1,2]]]);
//# sourceMappingURL=main.68471531.chunk.js.map