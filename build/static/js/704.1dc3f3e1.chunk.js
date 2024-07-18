"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[704],{5704:(e,t,n)=>{n.d(t,{A:()=>ke});var a=n(4467),r=n(8168),c=n(4600),o=n.n(c),i=n(8574),l=n(5043),s=n(5296),u=n(7063),d=n(460),f=n(3727),v=n(4235),m=n(9379);const p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var b=n(2172),h=function(e,t){return l.createElement(b.A,(0,m.A)((0,m.A)({},e),{},{ref:t,icon:p}))};h.displayName="PlusOutlined";const y=l.forwardRef(h);var A=n(5544),g=n(2284),E=n(45),x=n(6765),C=n(8678),N=n(7419);const w=(0,l.createContext)(null);const k=l.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,c=e.id,i=e.active,s=e.tabKey,u=e.children;return l.createElement("div",{id:c&&"".concat(c,"-panel-").concat(s),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(s),"aria-hidden":!i,style:r,className:o()(n,i&&"".concat(n,"-active"),a),ref:t},u)}));var P=["key","forceRender","style","className"];function O(e){var t=e.id,n=e.activeKey,c=e.animated,i=e.tabPosition,s=e.destroyInactiveTabPane,u=l.useContext(w),d=u.prefixCls,f=u.tabs,v=c.tabPane,p="".concat(d,"-tabpane");return l.createElement("div",{className:o()("".concat(d,"-content-holder"))},l.createElement("div",{className:o()("".concat(d,"-content"),"".concat(d,"-content-").concat(i),(0,a.A)({},"".concat(d,"-content-animated"),v))},f.map((function(e){var a=e.key,i=e.forceRender,u=e.style,d=e.className,f=(0,E.A)(e,P),b=a===n;return l.createElement(N.Ay,(0,r.A)({key:a,visible:b,forceRender:i,removeOnLeave:!!s,leavedClassName:"".concat(p,"-hidden")},c.tabPaneMotion),(function(e,n){var c=e.style,i=e.className;return l.createElement(k,(0,r.A)({},f,{prefixCls:p,id:t,tabKey:a,animated:v,active:b,style:(0,m.A)((0,m.A)({},u),c),className:o()(d,i),ref:n}))}))}))))}var S=n(436),T=n(8802),I=n(2375),M=n(5818),R=n(3758),B={width:0,height:0,left:0,top:0};function j(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,A.A)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var z=.1,L=.01,q=20,K=Math.pow(.995,q);var D=n(2664);function Q(e){var t=(0,l.useState)(0),n=(0,A.A)(t,2),a=n[0],r=n[1],c=(0,l.useRef)(0),o=(0,l.useRef)();return o.current=e,(0,D.o)((function(){var e;null===(e=o.current)||void 0===e||e.call(o)}),[a]),function(){c.current===a&&(c.current+=1,r(c.current))}}var G={width:0,height:0,left:0,top:0,right:0};function V(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}var W="TABS_DQ";function _(e){return String(e).replace(/"/g,W)}function H(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,c=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}const F=l.forwardRef(H);const X=l.forwardRef((function(e,t){var n,a=e.position,r=e.prefixCls,c=e.extra;if(!c)return null;var o={};return"object"!==(0,g.A)(c)||l.isValidElement(c)?o.right=c:o=c,"right"===a&&(n=o.right),"left"===a&&(n=o.left),n?l.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}));var Y=n(7258),J=n(4915),U=n(5001);function Z(e,t){var n=e.prefixCls,r=e.id,c=e.tabs,i=e.locale,s=e.mobile,u=e.moreIcon,d=void 0===u?"More":u,f=e.moreTransitionName,v=e.style,m=e.className,p=e.editable,b=e.tabBarGutter,h=e.rtl,y=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,x=e.popupClassName,C=(0,l.useState)(!1),N=(0,A.A)(C,2),w=N[0],k=N[1],P=(0,l.useState)(null),O=(0,A.A)(P,2),S=O[0],T=O[1],I="".concat(r,"-more-popup"),M="".concat(n,"-dropdown"),R=null!==S?"".concat(I,"-").concat(S):null,B=null===i||void 0===i?void 0:i.dropdownAriaLabel;var j=l.createElement(J.Ay,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),k(!1)},prefixCls:"".concat(M,"-menu"),id:I,tabIndex:-1,role:"listbox","aria-activedescendant":R,selectedKeys:[S],"aria-label":void 0!==B?B:"expanded dropdown"},c.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return l.createElement(J.Dr,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),p.onEdit("remove",{key:a,event:n})}},e.closeIcon||p.removeIcon||"\xd7"))})));function z(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void T(o.key)}}(0,l.useEffect)((function(){var e=document.getElementById(R);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),(0,l.useEffect)((function(){w||T(null)}),[w]);var L=(0,a.A)({},h?"marginRight":"marginLeft",b);c.length||(L.visibility="hidden",L.order=1);var q=o()((0,a.A)({},"".concat(M,"-rtl"),h)),K=s?null:l.createElement(Y.A,{prefixCls:M,overlay:j,trigger:["hover"],visible:!!c.length&&w,transitionName:f,onVisibleChange:k,overlayClassName:o()(q,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:L,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case U.A.UP:z(-1),e.preventDefault();break;case U.A.DOWN:z(1),e.preventDefault();break;case U.A.ESC:k(!1);break;case U.A.SPACE:case U.A.ENTER:null!==S&&g(S,e)}else[U.A.DOWN,U.A.SPACE,U.A.ENTER].includes(t)&&(k(!0),e.preventDefault())}},d));return l.createElement("div",{className:o()("".concat(n,"-nav-operations"),m),style:v,ref:t},K,l.createElement(F,{prefixCls:n,locale:i,editable:p}))}const $=l.memo(l.forwardRef(Z),(function(e,t){return t.tabMoving}));const ee=function(e){var t,n=e.prefixCls,r=e.id,c=e.active,i=e.tab,s=i.key,u=i.label,d=i.disabled,f=i.closeIcon,v=e.closable,m=e.renderWrapper,p=e.removeAriaLabel,b=e.editable,h=e.onClick,y=e.onFocus,A=e.style,g="".concat(n,"-tab"),E=b&&!1!==v&&!d;function x(e){d||h(e)}var C=l.createElement("div",{key:s,"data-node-key":_(s),className:o()(g,(t={},(0,a.A)(t,"".concat(g,"-with-remove"),E),(0,a.A)(t,"".concat(g,"-active"),c),(0,a.A)(t,"".concat(g,"-disabled"),d),t)),style:A,onClick:x},l.createElement("div",{role:"tab","aria-selected":c,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(g,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[U.A.SPACE,U.A.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:y},u),E&&l.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(g,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),b.onEdit("remove",{key:s,event:t})}},f||b.removeIcon||"\xd7"));return m?m(C):C};var te=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,r=t.offsetHeight;return[a,void 0===r?0:r]},ne=function(e,t){return e[t?0:1]};function ae(e,t){var n,c=l.useContext(w),i=c.prefixCls,s=c.tabs,u=e.className,d=e.style,f=e.id,v=e.animated,p=e.activeKey,b=e.rtl,h=e.extra,y=e.editable,g=e.locale,E=e.tabPosition,x=e.tabBarGutter,C=e.children,N=e.onTabClick,k=e.onTabScroll,P=(0,l.useRef)(),O=(0,l.useRef)(),D=(0,l.useRef)(),W=(0,l.useRef)(),H=(0,l.useRef)(),Y=(0,l.useRef)(),J=(0,l.useRef)(),U="top"===E||"bottom"===E,Z=j(0,(function(e,t){U&&k&&k({direction:e>t?"left":"right"})})),ae=(0,A.A)(Z,2),re=ae[0],ce=ae[1],oe=j(0,(function(e,t){!U&&k&&k({direction:e>t?"top":"bottom"})})),ie=(0,A.A)(oe,2),le=ie[0],se=ie[1],ue=(0,l.useState)([0,0]),de=(0,A.A)(ue,2),fe=de[0],ve=de[1],me=(0,l.useState)([0,0]),pe=(0,A.A)(me,2),be=pe[0],he=pe[1],ye=(0,l.useState)([0,0]),Ae=(0,A.A)(ye,2),ge=Ae[0],Ee=Ae[1],xe=(0,l.useState)([0,0]),Ce=(0,A.A)(xe,2),Ne=Ce[0],we=Ce[1],ke=function(e){var t=(0,l.useRef)([]),n=(0,l.useState)({}),a=(0,A.A)(n,2)[1],r=(0,l.useRef)("function"===typeof e?e():e),c=Q((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Pe=(0,A.A)(ke,2),Oe=Pe[0],Se=Pe[1],Te=function(e,t,n){return(0,l.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||B,c=r.left+r.width,o=0;o<e.length;o+=1){var i,l=e[o].key,s=t.get(l);s||(s=t.get(null===(i=e[o-1])||void 0===i?void 0:i.key)||B);var u=a.get(l)||(0,m.A)({},s);u.right=c-u.left-u.width,a.set(l,u)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(s,Oe,be[0]),Ie=ne(fe,U),Me=ne(be,U),Re=ne(ge,U),Be=ne(Ne,U),je=Ie<Me+Re,ze=je?Ie-Be:Ie-Re,Le="".concat(i,"-nav-operations-hidden"),qe=0,Ke=0;function De(e){return e<qe?qe:e>Ke?Ke:e}U&&b?(qe=0,Ke=Math.max(0,Me-ze)):(qe=Math.min(0,ze-Me),Ke=0);var Qe=(0,l.useRef)(),Ge=(0,l.useState)(),Ve=(0,A.A)(Ge,2),We=Ve[0],_e=Ve[1];function He(){_e(Date.now())}function Fe(){window.clearTimeout(Qe.current)}!function(e,t){var n=(0,l.useState)(),a=(0,A.A)(n,2),r=a[0],c=a[1],o=(0,l.useState)(0),i=(0,A.A)(o,2),s=i[0],u=i[1],d=(0,l.useState)(0),f=(0,A.A)(d,2),v=f[0],m=f[1],p=(0,l.useState)(),b=(0,A.A)(p,2),h=b[0],y=b[1],g=(0,l.useRef)(),E=(0,l.useRef)(),x=(0,l.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var d=Date.now();u(d),m(d-s),y({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),y(null),h)){var e=h.x/v,n=h.y/v,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<z)return;var i=e,l=n;g.current=window.setInterval((function(){Math.abs(i)<L&&Math.abs(l)<L?window.clearInterval(g.current):t((i*=K)*q,(l*=K)*q)}),q)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,c=Math.abs(n),o=Math.abs(a);c===o?r="x"===E.current?n:a:c>o?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(W,(function(e,t){function n(e,t){e((function(e){return De(e+t)}))}return!!je&&(U?n(ce,e):n(se,t),Fe(),He(),!0)})),(0,l.useEffect)((function(){return Fe(),We&&(Qe.current=window.setTimeout((function(){_e(0)}),100)),Fe}),[We]);var Xe=function(e,t,n,a,r,c,o){var i,s,u,d=o.tabs,f=o.tabPosition,v=o.rtl;return["top","bottom"].includes(f)?(i="width",s=v?"right":"left",u=Math.abs(n)):(i="height",s="top",u=-n),(0,l.useMemo)((function(){if(!d.length)return[0,0];for(var n=d.length,a=n,r=0;r<n;r+=1){var c=e.get(d[r].key)||G;if(c[s]+c[i]>u+t){a=r-1;break}}for(var o=0,l=n-1;l>=0;l-=1)if((e.get(d[l].key)||G)[s]<u){o=l+1;break}return[o,a]}),[e,t,a,r,c,u,f,d.map((function(e){return e.key})).join("_"),v])}(Te,ze,U?re:le,Me,Re,Be,(0,m.A)((0,m.A)({},e),{},{tabs:s})),Ye=(0,A.A)(Xe,2),Je=Ye[0],Ue=Ye[1],Ze=(0,I.A)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Te.get(e)||{width:0,height:0,left:0,right:0,top:0};if(U){var n=re;b?t.right<re?n=t.right:t.right+t.width>re+ze&&(n=t.right+t.width-ze):t.left<-re?n=-t.left:t.left+t.width>-re+ze&&(n=-(t.left+t.width-ze)),se(0),ce(De(n))}else{var a=le;t.top<-le?a=-t.top:t.top+t.height>-le+ze&&(a=-(t.top+t.height-ze)),ce(0),se(De(a))}})),$e={};"top"===E||"bottom"===E?$e[b?"marginRight":"marginLeft"]=x:$e.marginTop=x;var et=s.map((function(e,t){var n=e.key;return l.createElement(ee,{id:f,prefixCls:i,key:n,tab:e,style:0===t?void 0:$e,closable:e.closable,editable:y,active:n===p,renderWrapper:C,removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,onClick:function(e){N(n,e)},onFocus:function(){Ze(n),He(),W.current&&(b||(W.current.scrollLeft=0),W.current.scrollTop=0)}})})),tt=function(){return Se((function(){var e=new Map;return s.forEach((function(t){var n,a=t.key,r=null===(n=H.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(_(a),'"]'));r&&e.set(a,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})})),e}))};(0,l.useEffect)((function(){tt()}),[s.map((function(e){return e.key})).join("_")]);var nt=Q((function(){var e=te(P),t=te(O),n=te(D);ve([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=te(J);Ee(a);var r=te(Y);we(r);var c=te(H);he([c[0]-a[0],c[1]-a[1]]),tt()})),at=s.slice(0,Je),rt=s.slice(Ue+1),ct=[].concat((0,S.A)(at),(0,S.A)(rt)),ot=(0,l.useState)(),it=(0,A.A)(ot,2),lt=it[0],st=it[1],ut=Te.get(p),dt=(0,l.useRef)();function ft(){M.A.cancel(dt.current)}(0,l.useEffect)((function(){var e={};return ut&&(U?(b?e.right=ut.right:e.left=ut.left,e.width=ut.width):(e.top=ut.top,e.height=ut.height)),ft(),dt.current=(0,M.A)((function(){st(e)})),ft}),[ut,U,b]),(0,l.useEffect)((function(){Ze()}),[p,qe,Ke,V(ut),V(Te),U]),(0,l.useEffect)((function(){nt()}),[b]);var vt,mt,pt,bt,ht=!!ct.length,yt="".concat(i,"-nav-wrap");return U?b?(mt=re>0,vt=re!==Ke):(vt=re<0,mt=re!==qe):(pt=le<0,bt=le!==qe),l.createElement(T.A,{onResize:nt},l.createElement("div",{ref:(0,R.xK)(t,P),role:"tablist",className:o()("".concat(i,"-nav"),u),style:d,onKeyDown:function(){He()}},l.createElement(X,{ref:O,position:"left",extra:h,prefixCls:i}),l.createElement("div",{className:o()(yt,(n={},(0,a.A)(n,"".concat(yt,"-ping-left"),vt),(0,a.A)(n,"".concat(yt,"-ping-right"),mt),(0,a.A)(n,"".concat(yt,"-ping-top"),pt),(0,a.A)(n,"".concat(yt,"-ping-bottom"),bt),n)),ref:W},l.createElement(T.A,{onResize:nt},l.createElement("div",{ref:H,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(re,"px, ").concat(le,"px)"),transition:We?"none":void 0}},et,l.createElement(F,{ref:J,prefixCls:i,locale:g,editable:y,style:(0,m.A)((0,m.A)({},0===et.length?void 0:$e),{},{visibility:ht?"hidden":null})}),l.createElement("div",{className:o()("".concat(i,"-ink-bar"),(0,a.A)({},"".concat(i,"-ink-bar-animated"),v.inkBar)),style:lt})))),l.createElement($,(0,r.A)({},e,{removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:Y,prefixCls:i,tabs:ct,className:!ht&&Le,tabMoving:!!We})),l.createElement(X,{ref:D,position:"right",extra:h,prefixCls:i})))}const re=l.forwardRef(ae);var ce=["renderTabBar"],oe=["label","key"];function ie(e){var t=e.renderTabBar,n=(0,E.A)(e,ce),a=l.useContext(w).tabs;return t?t((0,m.A)((0,m.A)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,E.A)(e,oe);return l.createElement(k,(0,r.A)({tab:t,key:n,tabKey:n},a))}))}),re):l.createElement(re,n)}n(7907);var le=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],se=0;function ue(e,t){var n,c=e.id,i=e.prefixCls,s=void 0===i?"rc-tabs":i,u=e.className,d=e.items,f=e.direction,v=e.activeKey,p=e.defaultActiveKey,b=e.editable,h=e.animated,y=e.tabPosition,N=void 0===y?"top":y,k=e.tabBarGutter,P=e.tabBarStyle,S=e.tabBarExtraContent,T=e.locale,I=e.moreIcon,M=e.moreTransitionName,R=e.destroyInactiveTabPane,B=e.renderTabBar,j=e.onChange,z=e.onTabClick,L=e.onTabScroll,q=e.getPopupContainer,K=e.popupClassName,D=(0,E.A)(e,le),Q=l.useMemo((function(){return(d||[]).filter((function(e){return e&&"object"===(0,g.A)(e)&&"key"in e}))}),[d]),G="rtl"===f,V=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,m.A)({inkBar:!0},"object"===(0,g.A)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(h),W=(0,l.useState)(!1),_=(0,A.A)(W,2),H=_[0],F=_[1];(0,l.useEffect)((function(){F((0,x.A)())}),[]);var X=(0,C.A)((function(){var e;return null===(e=Q[0])||void 0===e?void 0:e.key}),{value:v,defaultValue:p}),Y=(0,A.A)(X,2),J=Y[0],U=Y[1],Z=(0,l.useState)((function(){return Q.findIndex((function(e){return e.key===J}))})),$=(0,A.A)(Z,2),ee=$[0],te=$[1];(0,l.useEffect)((function(){var e,t=Q.findIndex((function(e){return e.key===J}));-1===t&&(t=Math.max(0,Math.min(ee,Q.length-1)),U(null===(e=Q[t])||void 0===e?void 0:e.key));te(t)}),[Q.map((function(e){return e.key})).join("_"),J,ee]);var ne=(0,C.A)(null,{value:c}),ae=(0,A.A)(ne,2),re=ae[0],ce=ae[1];(0,l.useEffect)((function(){c||(ce("rc-tabs-".concat(se)),se+=1)}),[]);var oe={id:re,activeKey:J,animated:V,tabPosition:N,rtl:G,mobile:H},ue=(0,m.A)((0,m.A)({},oe),{},{editable:b,locale:T,moreIcon:I,moreTransitionName:M,tabBarGutter:k,onTabClick:function(e,t){null===z||void 0===z||z(e,t);var n=e!==J;U(e),n&&(null===j||void 0===j||j(e))},onTabScroll:L,extra:S,style:P,panes:null,getPopupContainer:q,popupClassName:K});return l.createElement(w.Provider,{value:{tabs:Q,prefixCls:s}},l.createElement("div",(0,r.A)({ref:t,id:c,className:o()(s,"".concat(s,"-").concat(N),(n={},(0,a.A)(n,"".concat(s,"-mobile"),H),(0,a.A)(n,"".concat(s,"-editable"),b),(0,a.A)(n,"".concat(s,"-rtl"),G),n),u)},D),undefined,l.createElement(ie,(0,r.A)({},ue,{renderTabBar:B})),l.createElement(O,(0,r.A)({destroyInactiveTabPane:R},oe,{animated:V}))))}const de=l.forwardRef(ue);var fe=n(3290),ve={motionAppear:!1,motionEnter:!0,motionLeave:!0};var me=n(2149),pe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const be=function(){return null};var he=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ye(e){var t,n=e.type,c=e.className,i=e.size,d=e.onEdit,m=e.hideAdd,p=e.centered,b=e.addIcon,h=e.children,A=e.items,E=e.animated,x=he(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),C=x.prefixCls,N=x.moreIcon,w=void 0===N?l.createElement(v.A,null):N,k=l.useContext(s.QO),P=k.getPrefixCls,O=k.direction,S=k.getPopupContainer,T=P("tabs",C);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===d||void 0===d||d("add"===e?a:n,e)},removeIcon:l.createElement(f.A,null),addIcon:b||l.createElement(y,null),showAdd:!0!==m});var I=P(),M=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,me.A)(t).map((function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,c=pe(n,["tab"]);return(0,r.A)((0,r.A)({key:String(t)},c),{label:a})}return null})))}(A,h),R=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,r.A)({inkBar:!0},"object"===(0,g.A)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.A)((0,r.A)({},ve),{motionName:(0,fe.by)(e,"switch")})),t}(T,E);return l.createElement(u.A.Consumer,null,(function(e){var s,u=void 0!==i?i:e;return l.createElement(de,(0,r.A)({direction:O,getPopupContainer:S,moreTransitionName:"".concat(I,"-slide-up")},x,{items:M,className:o()((s={},(0,a.A)(s,"".concat(T,"-").concat(u),u),(0,a.A)(s,"".concat(T,"-card"),["card","editable-card"].includes(n)),(0,a.A)(s,"".concat(T,"-editable-card"),"editable-card"===n),(0,a.A)(s,"".concat(T,"-centered"),p),s),c),editable:t,moreIcon:w,prefixCls:T,animated:R}))}))}ye.TabPane=be;const Ae=ye;var ge=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const Ee=function(e){var t=e.prefixCls,n=e.className,c=e.hoverable,i=void 0===c||c,u=ge(e,["prefixCls","className","hoverable"]);return l.createElement(s.TG,null,(function(e){var c=(0,e.getPrefixCls)("card",t),s=o()("".concat(c,"-grid"),n,(0,a.A)({},"".concat(c,"-grid-hoverable"),i));return l.createElement("div",(0,r.A)({},u,{className:s}))}))};var xe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var Ce=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const Ne=function(e){return l.createElement(s.TG,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,i=e.avatar,s=e.title,u=e.description,d=Ce(e,["prefixCls","className","avatar","title","description"]),f=n("card",a),v=o()("".concat(f,"-meta"),c),m=i?l.createElement("div",{className:"".concat(f,"-meta-avatar")},i):null,p=s?l.createElement("div",{className:"".concat(f,"-meta-title")},s):null,b=u?l.createElement("div",{className:"".concat(f,"-meta-description")},u):null,h=p||b?l.createElement("div",{className:"".concat(f,"-meta-detail")},p,b):null;return l.createElement("div",(0,r.A)({},d,{className:v}),m,h)}))};var we=l.forwardRef((function(e,t){var n,c,f,v=l.useContext(s.QO),m=v.getPrefixCls,p=v.direction,b=l.useContext(u.A),h=e.prefixCls,y=e.className,A=e.extra,g=e.headStyle,E=void 0===g?{}:g,x=e.bodyStyle,C=void 0===x?{}:x,N=e.title,w=e.loading,k=e.bordered,P=void 0===k||k,O=e.size,S=e.type,T=e.cover,I=e.actions,M=e.tabList,R=e.children,B=e.activeTabKey,j=e.defaultActiveTabKey,z=e.tabBarExtraContent,L=e.hoverable,q=e.tabProps,K=void 0===q?{}:q,D=xe(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),Q=m("card",h),G=l.createElement(d.A,{loading:!0,active:!0,paragraph:{rows:4},title:!1},R),V=void 0!==B,W=(0,r.A)((0,r.A)({},K),(n={},(0,a.A)(n,V?"activeKey":"defaultActiveKey",V?B:j),(0,a.A)(n,"tabBarExtraContent",z),n)),_=M&&M.length?l.createElement(Ae,(0,r.A)({size:"large"},W,{className:"".concat(Q,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)},items:M.map((function(e){var t;return{label:e.tab,key:e.key,disabled:null!==(t=e.disabled)&&void 0!==t&&t}}))})):null;(N||A||_)&&(f=l.createElement("div",{className:"".concat(Q,"-head"),style:E},l.createElement("div",{className:"".concat(Q,"-head-wrapper")},N&&l.createElement("div",{className:"".concat(Q,"-head-title")},N),A&&l.createElement("div",{className:"".concat(Q,"-extra")},A)),_));var H=T?l.createElement("div",{className:"".concat(Q,"-cover")},T):null,F=l.createElement("div",{className:"".concat(Q,"-body"),style:C},w?G:R),X=I&&I.length?l.createElement("ul",{className:"".concat(Q,"-actions")},function(e){return e.map((function(t,n){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},l.createElement("span",null,t))}))}(I)):null,Y=(0,i.A)(D,["onTabChange"]),J=O||b,U=o()(Q,(c={},(0,a.A)(c,"".concat(Q,"-loading"),w),(0,a.A)(c,"".concat(Q,"-bordered"),P),(0,a.A)(c,"".concat(Q,"-hoverable"),L),(0,a.A)(c,"".concat(Q,"-contain-grid"),function(){var t;return l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===Ee&&(t=!0)})),t}()),(0,a.A)(c,"".concat(Q,"-contain-tabs"),M&&M.length),(0,a.A)(c,"".concat(Q,"-").concat(J),J),(0,a.A)(c,"".concat(Q,"-type-").concat(S),!!S),(0,a.A)(c,"".concat(Q,"-rtl"),"rtl"===p),c),y);return l.createElement("div",(0,r.A)({ref:t},Y,{className:U}),f,H,F,X)}));we.Grid=Ee,we.Meta=Ne;const ke=we},460:(e,t,n)=>{n.d(t,{A:()=>P});var a=n(4467),r=n(8168),c=n(2284),o=n(4600),i=n.n(o),l=n(5043),s=n(5296),u=n(8574);const d=function(e){var t,n,c=e.prefixCls,o=e.className,s=e.style,u=e.size,d=e.shape,f=i()((t={},(0,a.A)(t,"".concat(c,"-lg"),"large"===u),(0,a.A)(t,"".concat(c,"-sm"),"small"===u),t)),v=i()((n={},(0,a.A)(n,"".concat(c,"-circle"),"circle"===d),(0,a.A)(n,"".concat(c,"-square"),"square"===d),(0,a.A)(n,"".concat(c,"-round"),"round"===d),n)),m=l.useMemo((function(){return"number"===typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{}}),[u]);return l.createElement("span",{className:i()(c,f,v,o),style:(0,r.A)((0,r.A)({},m),s)})};const f=function(e){var t=e.prefixCls,n=e.className,c=e.active,o=e.shape,f=void 0===o?"circle":o,v=e.size,m=void 0===v?"default":v,p=(0,l.useContext(s.QO).getPrefixCls)("skeleton",t),b=(0,u.A)(e,["prefixCls","className"]),h=i()(p,"".concat(p,"-element"),(0,a.A)({},"".concat(p,"-active"),c),n);return l.createElement("div",{className:h},l.createElement(d,(0,r.A)({prefixCls:"".concat(p,"-avatar"),shape:f,size:m},b)))};const v=function(e){var t,n=e.prefixCls,c=e.className,o=e.active,f=e.block,v=void 0!==f&&f,m=e.size,p=void 0===m?"default":m,b=(0,l.useContext(s.QO).getPrefixCls)("skeleton",n),h=(0,u.A)(e,["prefixCls"]),y=i()(b,"".concat(b,"-element"),(t={},(0,a.A)(t,"".concat(b,"-active"),o),(0,a.A)(t,"".concat(b,"-block"),v),t),c);return l.createElement("div",{className:y},l.createElement(d,(0,r.A)({prefixCls:"".concat(b,"-button"),size:p},h)))};var m=n(9379);const p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};var b=n(2172),h=function(e,t){return l.createElement(b.A,(0,m.A)((0,m.A)({},e),{},{ref:t,icon:p}))};h.displayName="DotChartOutlined";const y=l.forwardRef(h);const A=function(e){var t=e.prefixCls,n=e.className,r=e.style,c=e.active,o=e.children,u=(0,l.useContext(s.QO).getPrefixCls)("skeleton",t),d=i()(u,"".concat(u,"-element"),(0,a.A)({},"".concat(u,"-active"),c),n),f=null!==o&&void 0!==o?o:l.createElement(y,null);return l.createElement("div",{className:d},l.createElement("div",{className:i()("".concat(u,"-image"),n),style:r},f))};const g=function(e){var t=e.prefixCls,n=e.className,r=e.style,c=e.active,o=(0,l.useContext(s.QO).getPrefixCls)("skeleton",t),u=i()(o,"".concat(o,"-element"),(0,a.A)({},"".concat(o,"-active"),c),n);return l.createElement("div",{className:u},l.createElement("div",{className:i()("".concat(o,"-image"),n),style:r},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(o,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(o,"-image-path")}))))};const E=function(e){var t,n=e.prefixCls,c=e.className,o=e.active,f=e.block,v=e.size,m=void 0===v?"default":v,p=(0,l.useContext(s.QO).getPrefixCls)("skeleton",n),b=(0,u.A)(e,["prefixCls"]),h=i()(p,"".concat(p,"-element"),(t={},(0,a.A)(t,"".concat(p,"-active"),o),(0,a.A)(t,"".concat(p,"-block"),f),t),c);return l.createElement("div",{className:h},l.createElement(d,(0,r.A)({prefixCls:"".concat(p,"-input"),size:m},b)))};var x=n(436);const C=function(e){var t=function(t){var n=e.width,a=e.rows,r=void 0===a?2:a;return Array.isArray(n)?n[t]:r-1===t?n:void 0},n=e.prefixCls,a=e.className,r=e.style,c=e.rows,o=(0,x.A)(Array(c)).map((function(e,n){return l.createElement("li",{key:n,style:{width:t(n)}})}));return l.createElement("ul",{className:i()(n,a),style:r},o)};const N=function(e){var t=e.prefixCls,n=e.className,a=e.width,c=e.style;return l.createElement("h3",{className:i()(t,n),style:(0,r.A)({width:a},c)})};function w(e){return e&&"object"===(0,c.A)(e)?e:{}}var k=function(e){var t=e.prefixCls,n=e.loading,c=e.className,o=e.style,u=e.children,f=e.avatar,v=void 0!==f&&f,m=e.title,p=void 0===m||m,b=e.paragraph,h=void 0===b||b,y=e.active,A=e.round,g=l.useContext(s.QO),E=g.getPrefixCls,x=g.direction,k=E("skeleton",t);if(n||!("loading"in e)){var P,O,S,T=!!v,I=!!p,M=!!h;if(T){var R=(0,r.A)((0,r.A)({prefixCls:"".concat(k,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(I,M)),w(v));O=l.createElement("div",{className:"".concat(k,"-header")},l.createElement(d,(0,r.A)({},R)))}if(I||M){var B,j;if(I){var z=(0,r.A)((0,r.A)({prefixCls:"".concat(k,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(T,M)),w(p));B=l.createElement(N,(0,r.A)({},z))}if(M){var L=(0,r.A)((0,r.A)({prefixCls:"".concat(k,"-paragraph")},function(e,t){var n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}(T,I)),w(h));j=l.createElement(C,(0,r.A)({},L))}S=l.createElement("div",{className:"".concat(k,"-content")},B,j)}var q=i()(k,(P={},(0,a.A)(P,"".concat(k,"-with-avatar"),T),(0,a.A)(P,"".concat(k,"-active"),y),(0,a.A)(P,"".concat(k,"-rtl"),"rtl"===x),(0,a.A)(P,"".concat(k,"-round"),A),P),c);return l.createElement("div",{className:q,style:o},O,S)}return"undefined"!==typeof u?u:null};k.Button=v,k.Avatar=f,k.Input=E,k.Image=g,k.Node=A;const P=k}}]);
//# sourceMappingURL=704.1dc3f3e1.chunk.js.map