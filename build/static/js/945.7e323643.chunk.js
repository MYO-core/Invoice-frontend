(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[945],{2113:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});r(5043);const n=r.p+"static/media/home.f87e389a5c1850fe48b55156d6a0d7b7.svg"},1734:(e,t,r)=>{"use strict";r.d(t,{z:()=>m});var n,a,s=r(7775),l=r(5475),o=r(1105),c=r(7528),i=r(1872),u=r(4574);const d=(0,u.Ay)(i.A)(n||(n=(0,c.A)(["\n  .ant-breadcrumb {\n    ol{\n      @media (max-width: 575px) {\n        justify-content: center;\n      }\n    }\n    li{\n        display:flex;\n        align-items:center;\n    }\n  }\n"]))),f=u.Ay.div(a||(a=(0,c.A)(["\n  \n"])));var v=r(579);function m(e){const{title:t,subTitle:n,routes:a,buttons:c,ghost:i,bgColor:u,className:m}=e,x=a?(0,v.jsx)(s.A,{className:"flex order-2 relative top-1.5",separator:(0,v.jsx)("span",{className:"inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full"}),children:a.map(((e,t)=>t+1===a.length?(0,v.jsx)(s.A.Item,{className:"text-breadcrumbs dark:text-white30 text-15",children:e.breadcrumbName},t):(0,v.jsxs)(s.A.Item,{className:"inline-flex items-start",children:[(0,v.jsx)(o.k,{className:"relative top-0.5 ltr:mr-2 rtl:ml-2 [&>div>svg]:text-[#8c90a4] dark:[&>div>svg]:text-white60 ",src:r(2113).A})," ",(0,v.jsx)(l.N_,{to:e.path,className:"text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm",children:e.breadcrumbName})]},t)))}):"";return(0,v.jsx)(f,{bgColor:u,children:(0,v.jsx)(d,{className:"".concat(m),title:t,subTitle:n,breadcrumb:x,extra:c,ghost:i})})}},1945:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var n=r(5043),a=r(9800),s=r(1645),l=r(5704),o=r(8168),c=r(4210),i=r(2701),u=r(4467),d=r(4600),f=r.n(d),v=r(5296),m=r(460),x=r(7439),p=r.n(x);const h=function(e){var t,r=e.value,a=e.formatter,s=e.precision,l=e.decimalSeparator,o=e.groupSeparator,c=void 0===o?"":o,i=e.prefixCls;if("function"===typeof a)t=a(r);else{var u=String(r),d=u.match(/^(-?)(\d*)(\.(\d+))?$/);if(d&&"-"!==u){var f=d[1],v=d[2]||"0",m=d[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,c),"number"===typeof s&&(m=p()(m,s,"0").slice(0,s>0?s:0)),m&&(m="".concat(l).concat(m)),t=[n.createElement("span",{key:"int",className:"".concat(i,"-content-value-int")},f,v),m&&n.createElement("span",{key:"decimal",className:"".concat(i,"-content-value-decimal")},m)]}else t=u}return n.createElement("span",{className:"".concat(i,"-content-value")},t)};const g=(0,v.by)({prefixCls:"statistic"})((function(e){var t=e.prefixCls,r=e.className,a=e.style,s=e.valueStyle,l=e.value,c=void 0===l?0:l,i=e.title,d=e.valueRender,v=e.prefix,x=e.suffix,p=e.loading,g=void 0!==p&&p,b=e.direction,j=e.onMouseEnter,A=e.onMouseLeave,N=e.decimalSeparator,y=void 0===N?".":N,S=e.groupSeparator,w=void 0===S?",":S,E=n.createElement(h,(0,o.A)({decimalSeparator:y,groupSeparator:w},e,{value:c})),k=f()(t,(0,u.A)({},"".concat(t,"-rtl"),"rtl"===b),r);return n.createElement("div",{className:k,style:a,onMouseEnter:j,onMouseLeave:A},i&&n.createElement("div",{className:"".concat(t,"-title")},i),n.createElement(m.A,{paragraph:!1,loading:g,className:"".concat(t,"-skeleton")},n.createElement("div",{style:s,className:"".concat(t,"-content")},v&&n.createElement("span",{className:"".concat(t,"-content-prefix")},v),d?d(E):E,x&&n.createElement("span",{className:"".concat(t,"-content-suffix")},x))))}));var b=r(5544),j=r(5106),A=r.n(j),N=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function y(e,t){var r=t.format,n=void 0===r?"":r,a=new Date(e).getTime(),s=Date.now();return function(e,t){var r=e,n=/\[[^\]]*]/g,a=(t.match(n)||[]).map((function(e){return e.slice(1,-1)})),s=t.replace(n,"[]"),l=N.reduce((function(e,t){var n=(0,b.A)(t,2),a=n[0],s=n[1];if(e.includes(a)){var l=Math.floor(r/s);return r-=l*s,e.replace(new RegExp("".concat(a,"+"),"g"),(function(e){var t=e.length;return A()(l.toString(),t,"0")}))}return e}),s),o=0;return l.replace(n,(function(){var e=a[o];return o+=1,e}))}(Math.max(a-s,0),n)}var S=function(e){var t=e.value,r=e.format,a=void 0===r?"HH:mm:ss":r,s=e.onChange,l=e.onFinish,u=(0,c.A)(),d=n.useRef(null),f=function(){var e=function(e){return new Date(e).getTime()}(t);e>=Date.now()&&(d.current=setInterval((function(){u(),null===s||void 0===s||s(e-Date.now()),e<Date.now()&&(null===l||void 0===l||l(),d.current&&(clearInterval(d.current),d.current=null))}),33.333333333333336))};n.useEffect((function(){return f(),function(){d.current&&(clearInterval(d.current),d.current=null)}}),[t]);return n.createElement(g,(0,o.A)({},e,{valueRender:function(e){return(0,i.Ob)(e,{title:void 0})},formatter:function(e,t){return y(e,(0,o.A)((0,o.A)({},t),{format:a}))}}))};const w=n.memo(S);g.Countdown=w;const E=g;var k=r(1734),C=r(579);const{getStats:D}=r(695);const M=function(){const[e,t]=(0,n.useState)({}),[r,o]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{o(!0),D().then((e=>{e&&e.data?t(e.data):(console.error("Invalid response data:",e),t({})),o(!1)})).catch((e=>{console.error("Error fetching stats:",e),o(!1)}))}),[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(k.z,{className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col",title:"Dashboard",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Demo 7"}]}),(0,C.jsxs)("main",{className:"min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent",children:[(0,C.jsxs)(a.A,{gutter:[16,16],children:[(0,C.jsx)(s.A,{xs:24,sm:12,md:6,children:(0,C.jsx)(l.A,{children:(0,C.jsx)(E,{title:"Total Stores",value:(null===e||void 0===e?void 0:e.store_count)||0,valueStyle:{color:"#3f8600"}})})}),(0,C.jsx)(s.A,{xs:24,sm:12,md:6,children:(0,C.jsx)(l.A,{children:(0,C.jsx)(E,{title:"Total Sales",value:(null===e||void 0===e?void 0:e.total_sales)||0,precision:2,valueStyle:{color:"#cf1322"},prefix:"\u20b9"})})}),(0,C.jsx)(s.A,{xs:24,sm:12,md:6,children:(0,C.jsx)(l.A,{children:(0,C.jsx)(E,{title:"Total Users",value:(null===e||void 0===e?void 0:e.user_count)||0,valueStyle:{color:"#3f8600"}})})}),(0,C.jsx)(s.A,{xs:24,sm:12,md:6,children:(0,C.jsx)(l.A,{children:(0,C.jsx)(E,{title:"Invoice Generated",value:(null===e||void 0===e?void 0:e.invoice_count)||0,valueStyle:{color:"#3f8600"}})})})]}),(0,C.jsx)(a.A,{gutter:[16,16],className:"mt-4",children:(0,C.jsx)(s.A,{xs:24,sm:12,md:6,children:(0,C.jsx)(l.A,{children:(0,C.jsx)(E,{title:"Total Customers",value:(null===e||void 0===e?void 0:e.store_count)||0,valueStyle:{color:"#3f8600"}})})})})]})]})}},695:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getStats:()=>a});var n=r(2170);const a=async()=>await n.p.get("/stats")},4724:(e,t,r)=>{var n=r(396)("length");e.exports=n},396:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},5430:e=>{var t=Math.floor;e.exports=function(e,r){var n="";if(!e||r<1||r>9007199254740991)return n;do{r%2&&(n+=e),(r=t(r/2))&&(e+=e)}while(r);return n}},4387:(e,t,r)=>{var n=r(5430),a=r(8541),s=r(8189),l=r(6311),o=r(1632),c=r(9115),i=Math.ceil;e.exports=function(e,t){var r=(t=void 0===t?" ":a(t)).length;if(r<2)return r?n(t,e):t;var u=n(t,i(e/o(t)));return l(t)?s(c(u),0,e).join(""):u.slice(0,e)}},1632:(e,t,r)=>{var n=r(4724),a=r(6311),s=r(7168);e.exports=function(e){return a(e)?s(e):n(e)}},7168:e=>{var t="\\ud800-\\udfff",r="["+t+"]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",s="[^"+t+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+n+"|"+a+")"+"?",i="[\\ufe0e\\ufe0f]?",u=i+c+("(?:\\u200d(?:"+[s,l,o].join("|")+")"+i+c+")*"),d="(?:"+[s+n+"?",n,l,o,r].join("|")+")",f=RegExp(a+"(?="+a+")|"+d+u,"g");e.exports=function(e){for(var t=f.lastIndex=0;f.test(e);)++t;return t}},7439:(e,t,r)=>{var n=r(4387),a=r(1632),s=r(9140),l=r(1069);e.exports=function(e,t,r){e=l(e);var o=(t=s(t))?a(e):0;return t&&o<t?e+n(t-o,r):e}},5106:(e,t,r)=>{var n=r(4387),a=r(1632),s=r(9140),l=r(1069);e.exports=function(e,t,r){e=l(e);var o=(t=s(t))?a(e):0;return t&&o<t?n(t-o,r)+e:e}},7303:(e,t,r)=>{var n=r(801),a=1/0;e.exports=function(e){return e?(e=n(e))===a||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},9140:(e,t,r)=>{var n=r(7303);e.exports=function(e){var t=n(e),r=t%1;return t===t?r?t-r:t:0}}}]);
//# sourceMappingURL=945.7e323643.chunk.js.map