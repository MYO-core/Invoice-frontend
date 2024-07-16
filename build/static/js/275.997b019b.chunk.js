"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[275],{79275:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(91415),a=n(19524),i=n(65043),s=n(35475),o=n(57043),d=n(40925),p=n(39452),c=n(70579);const{revenueGenerated:l}=p,m=[{title:"Source",dataIndex:"source",key:"source",className:"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4"},{title:"Visitors",dataIndex:"visitors",key:"visitors",className:"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden"},{title:"Page View",dataIndex:"pageView",key:"pageView",className:"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden"},{title:"Revenue",dataIndex:"revenue",key:"revenue",className:"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden"},{title:"Trend",dataIndex:"trend",key:"trend",className:"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-start border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4"}],g=i.memo((()=>{const[e,t]=(0,i.useState)({revenueTab:"today"}),{revenueTab:n}=e,p=[];null!==l&&l[n].map((e=>{const{key:t,name:n,icon:a,visitors:i,pageView:s,revenue:o,trend:d,type:l}=e;return p.push({key:t,source:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("div",{className:"bg-".concat(a,"-transparent text-").concat(a," flex items-center justify-center w-8 h-8 text-[15px] ltr:mr-2.5 rtl:ml-2.5 rounded-[8px]"),children:(0,c.jsx)("i",{className:"fa fa-".concat(a)})}),(0,c.jsx)("span",{className:"font-medium capitalize text-dark dark:text-white87 text-15",children:n})]}),visitors:(0,c.jsx)("span",{className:"font-normal capitalize text-[14px] text-dark dark:text-white87",children:i}),pageView:(0,c.jsx)("span",{className:"font-normal capitalize text-[14px] text-dark dark:text-white87",children:s}),revenue:(0,c.jsx)("span",{className:"font-normal capitalize text-[14px] text-dark dark:text-white87",children:o}),trend:(0,c.jsxs)("div",{className:"flex items-center gap-[14px] text-".concat(a),children:[(0,c.jsxs)("span",{className:"font-normal capitalize text-[14px] text-dark dark:text-white87",children:[d,"%"]}),"secondary"===l?(0,c.jsx)(r.A,{percent:d,strokeWidth:4,status:"active",showInfo:!1,className:"min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-secondary"}):"success"===l?(0,c.jsx)(r.A,{percent:d,strokeWidth:4,status:"active",showInfo:!1,className:"min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-success"}):"info"===l?(0,c.jsx)(r.A,{percent:d,strokeWidth:4,status:"active",showInfo:!1,className:"min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-info"}):"warning"===l?(0,c.jsx)(r.A,{percent:d,strokeWidth:4,status:"active",showInfo:!1,className:"min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-warning"}):"violet"===l?(0,c.jsx)(r.A,{percent:d,strokeWidth:4,status:"active",showInfo:!1,className:"min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-violet"}):(0,c.jsx)(r.A,{percent:d,strokeWidth:4,status:"active",showInfo:!1,className:"min-w-[70px] [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg]:bg-primary"})]})})}));const g=(n,r)=>{r.preventDefault(),t({...e,revenueTab:n})};return(0,c.jsx)("div",{className:"full-width-table h-full bg-white dark:bg-whiteDark rounded-[10px]",children:(0,c.jsx)(d.rQ,{children:(0,c.jsx)(o.C,{isbutton:(0,c.jsxs)("ul",{className:"flex items-center mb-0",children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{className:"today"===n?"inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md":"inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13",onClick:e=>g("today",e),to:"#",children:"Today"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{className:"week"===n?"inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md":"inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md",onClick:e=>g("week",e),to:"#",children:"Week"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.N_,{className:"month"===n?"inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md":"inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md",onClick:e=>g("month",e),to:"#",children:"Month"})})]}),title:"Source Of Revenue Generated",size:"large",className:"border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base",children:(0,c.jsx)(d.Hr,{children:(0,c.jsx)("div",{className:"table-pl-0 hover-tr-none table-pt-15 table-responsive ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none",children:(0,c.jsx)(a.A,{columns:m,dataSource:p,pagination:!1})})})})})})}))},39452:e=>{e.exports=JSON.parse('{"revenueGenerated":{"today":[{"key":"1","icon":"google","name":"Google","visitors":"23,397","pageView":"17,201","revenue":"$5,536","trend":"90","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"23,397","pageView":"14,201","revenue":"$5,536","trend":"57","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"78","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,397","pageView":"13,201","revenue":"$5,536","trend":"96","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"21","type":"warning"}],"week":[{"key":"1","icon":"google","name":"Google","visitors":"26,397","pageView":"53,465","revenue":"$4,617","trend":"70","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"22,454","pageView":"83,734","revenue":"$4,328","trend":"53","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"29,364","pageView":"74,345","revenue":"$6,438","trend":"86","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"24,565","pageView":"24,572","revenue":"$4,257","trend":"98","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"16,637","pageView":"30,234","revenue":"$8,559","trend":"20","type":"warning"}],"month":[{"key":"1","icon":"google","name":"Google","visitors":"29,575","pageView":"11,317","revenue":"$8,472","trend":"60","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"11,159","pageView":"10,470","revenue":"$6,538","trend":"54","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"21,341","pageView":"22,010","revenue":"$6,017","trend":"71","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,258","pageView":"11,184","revenue":"$6,368","trend":"92","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"22,249","pageView":"10,151","revenue":"$5,536","trend":"20","type":"warning"}]},"newProduct":{"today":[{"key":"1","img":"6.png","name":"UV Protected Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Black Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Women Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Mackbook Pro","price":"$38,536"}],"week":[{"key":"1","img":"6.png","name":"New Model Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Smart Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Men Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Toshiba Pro","price":"$38,536"}],"month":[{"key":"1","img":"6.png","name":"Computer Light Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Large Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"High Quality Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Lenovo Pro","price":"$38,536"}]},"bestSeller":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"On Process"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Richard Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Pending"},{"key":"2","img":"11.png","name":"Jhon Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"David Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Pending"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Michel Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"On Process"},{"key":"2","img":"11.png","name":"Christopher Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Joseph White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Richard Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]}}')}}]);
//# sourceMappingURL=275.997b019b.chunk.js.map