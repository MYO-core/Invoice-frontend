"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[956],{9956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var s=n(5043),a=n(3307),l=n(8193),i=n(4435),r=n(1802),c=n(6059),o=n(5397),d=n(9800),p=n(1645),m=n(4406),u=n(802),h=n(2217),x=n(3216),j=n(5475),y=n(5337),A=n(6080),g=n(903),f=n(289),v=n(3428),b=n(8655),C=n(579);const w=e=>{var t;let{item:n,removeObject:s}=e;let l={EARNING:"Earning",DEDUCTION:"Deduction",TAX:"Tax"},i={PERCENTAGE:"% of "+(null===n||void 0===n||null===(t=n.component)||void 0===t?void 0:t.name),FLAT_AMOUNT:"Flat Amount",PERCENT_OF_CTC:"% of CTC"};return(0,C.jsxs)(d.A,{gutter:16,children:[(0,C.jsx)(p.A,{span:6,children:(0,C.jsx)(f.A.Item,{name:"component",children:n.name})}),(0,C.jsx)(p.A,{span:4,children:(0,C.jsx)(f.A.Item,{name:"component",children:l["".concat(n.type)]})}),(0,C.jsx)(p.A,{span:8,children:(0,C.jsxs)(f.A.Item,{name:"monthlyAmount",children:[(0,C.jsx)(v.A,{defaultValue:n.pay_amount,style:{width:"50%"}}),(0,C.jsx)(a.A,{value:i["".concat(n.calculation_type)],disabled:!0,style:{width:"50%"}})]})}),(0,C.jsx)(p.A,{span:4,children:(0,C.jsx)(f.A.Item,{name:"annualAmount",children:n.monthly+", "+n.annualy})}),(0,C.jsx)(p.A,{span:2,children:(0,C.jsx)(f.A.Item,{children:(0,C.jsx)(b.A,{onClick:()=>{s(n,l["".concat(n.type)])}})})})]})};var E=n(1734),N=n(2170);var k=n(1816);const{SubMenu:S}=A.A,{Header:T,Sider:O,Content:I}=g.A,{Option:_}=m.A,z=()=>{const[e]=f.A.useForm(),[t,n]=(0,s.useState)(!1),[i,c]=(0,s.useState)(0),[o,m]=(0,s.useState)(0),[u,h]=(0,s.useState)(0),[x,j]=(0,s.useState)(0),[b,_]=(0,s.useState)([]),[z,R]=(0,s.useState)([]),[F,P]=(0,s.useState)([]);(0,s.useEffect)((()=>{(0,k.Hc)({start:0,limit:10,type:"EARNING"}).then((e=>{var t;const n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows;R(n)})).catch((e=>{l.Ay.error("Error fetching room suggestions")})),(0,k.Hc)({start:0,limit:10,type:"DEDUCTION"}).then((e=>{var t;const n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows;P(n)})).catch((e=>{l.Ay.error("Error fetching room suggestions")}))}),[]);const D=(e,t)=>e.filter((e=>e.id!==t)),B=(e,t)=>{let n=D(b,e.id);q(n),"Earning"===t&&R([...z,e]),"Deduction"===t&&P([...F,e])},U=(e,t,n)=>{let s=[...b,e];if(q(s),"earning"===t){let t=D(z,e.id);R(t)}if("deduction"===t){let t=D(F,e.id);P(t)}},q=e=>{let t=0;const n=e.map((e=>{if("PERCENTAGE"===e.calculation_type){let t=.01*(e.component.pay_amount*o*.01)*e.pay_amount;e.annualy=t,e.monthly=(t/12).toFixed(1)}else if("PERCENT_OF_CTC"===e.calculation_type){let t=o*e.pay_amount*.01;e.annualy=t,e.monthly=(t/12).toFixed(1)}else e.annualy=e.pay_amount,e.monthly=(e.pay_amount/12).toFixed(1);return t+=e.annualy,e}));let s=o-t;s<0?alert("Sum of Components cannot be more than "):(h(s),j((s/12).toFixed(1)),console.log(n),_(n))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(E.z,{title:"Users",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/users",breadcrumbName:"Users"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,C.jsxs)(g.A,{style:{minHeight:"100vh"},children:[(0,C.jsx)(O,{width:250,className:"site-layout-background",style:{background:"#fff",borderRight:"1px solid #f0f0f0",borderLeft:"1px solid #f0f0f0"},children:(0,C.jsxs)(A.A,{mode:"inline",style:{height:"100%",borderRight:0,marginTop:"20px"},children:[(0,C.jsx)(S,{title:(0,C.jsx)("span",{style:{fontSize:"16px"},children:"Earnings"}),children:z.map(((e,t)=>(0,C.jsxs)(A.A.Item,{style:{padding:"30px"},children:[(0,C.jsx)("span",{style:{marginRight:"20px"},children:e.name}),(0,C.jsx)(y.A,{onClick:()=>{U(e,"earning")}})]},e.id)))},"sub1"),(0,C.jsx)(S,{title:(0,C.jsx)("span",{style:{fontSize:"16px"},children:"Deductions"}),children:F.map(((e,t)=>(0,C.jsxs)(A.A.Item,{children:[(0,C.jsx)("span",{style:{marginRight:"20px"},children:e.name}),(0,C.jsx)(y.A,{onClick:()=>{U(e,"deduction")}})]},e.id)))},"sub2"),(0,C.jsx)(S,{title:(0,C.jsx)("span",{style:{fontSize:"16px"},children:"Reimbursements"})},"sub3"),(0,C.jsx)(S,{title:(0,C.jsx)("span",{style:{fontSize:"16px"},children:"Taxes"})},"sub4")]})}),(0,C.jsxs)(g.A,{style:{padding:"20px",backgroundColor:"#fff"},children:[(0,C.jsx)(T,{className:"site-layout-background",style:{padding:0,border:"1px solid #f0f0f0"},children:(0,C.jsx)("h1",{className:"ml-2",children:"New Salary Template"})}),(0,C.jsx)(I,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:(0,C.jsx)("div",{children:(0,C.jsxs)(f.A,{form:e,name:"User",labelCol:{span:8},wrapperCol:{span:16},onFinish:e=>{var t;n(!0);let s=b;null===(t=(async e=>{let{body:t}=e;return await N.p.post("/packages",t)})({body:{name:e.name,description:e.description,ctc:e.ctc,components:s,cost_to_company:o}}))||void 0===t||t.then((e=>{l.Ay.success("Package added successfully"),n(!1)})).catch((e=>{l.Ay.error("Something Went Wrong"),console.log("err :>> ",e),n(!1)})),n(!1)},autoComplete:"off",children:[(0,C.jsxs)(d.A,{gutter:16,children:[(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(f.A.Item,{label:"Package Name",name:"name",rules:[{required:!0,message:"Required!"}],children:(0,C.jsx)(a.A,{})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(f.A.Item,{label:"description",name:"description",rules:[{required:!0,message:"Required!"}],children:(0,C.jsx)(a.A,{})})})]}),(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:24,style:{marginBottom:"16px"}})}),(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:24,style:{marginBottom:"16px"}})}),(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:24,style:{marginBottom:"16px"},children:(0,C.jsx)("hr",{})})}),(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:24,style:{marginBottom:"16px"},children:(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(f.A.Item,{label:"Annual CTC",name:"ctc",rules:[{required:!0,message:"Required!"}],children:(0,C.jsx)(v.A,{min:0,style:{width:"100%"},onChange:e=>{m(e),c(e/12),q(b)}})})})})})}),(0,C.jsxs)(d.A,{gutter:16,style:{marginBottom:"16px"},children:[(0,C.jsx)(p.A,{span:6,children:(0,C.jsx)("h3",{children:"Component Name"})}),(0,C.jsx)(p.A,{span:4,children:(0,C.jsx)("h3",{children:"Type"})}),(0,C.jsx)(p.A,{span:8,children:(0,C.jsx)("h3",{children:"Calculation Type"})}),(0,C.jsx)(p.A,{span:4,children:(0,C.jsx)("h3",{children:"Monthly, Annually"})})]}),(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:24,style:{marginBottom:"16px"},children:(0,C.jsx)("hr",{})})}),b.map(((e,t)=>(0,C.jsx)(w,{item:e,removeObject:B},t))),(0,C.jsxs)(d.A,{gutter:16,style:{marginBottom:"8px"},children:[(0,C.jsx)(p.A,{span:6,children:(0,C.jsx)(f.A.Item,{name:"compoment",children:"Fixed Allowance"})}),(0,C.jsx)(p.A,{span:4,children:"Earning"}),(0,C.jsx)(p.A,{span:8,children:(0,C.jsx)(f.A.Item,{children:"Flat Amount"})}),(0,C.jsx)(p.A,{span:4,children:(0,C.jsxs)(f.A.Item,{children:[x,",",u]})})]}),(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{span:24,style:{marginBottom:"16px"},children:(0,C.jsx)("hr",{})})}),(0,C.jsxs)(d.A,{gutter:16,children:[(0,C.jsx)(p.A,{span:6,children:(0,C.jsx)("h4",{children:"Cost To Company"})}),(0,C.jsx)(p.A,{span:4}),(0,C.jsx)(p.A,{span:8}),(0,C.jsx)(p.A,{span:4,children:(0,C.jsx)("h3",{children:i+", "+o})})]}),(0,C.jsxs)("div",{className:"flex justify-end gap-2 mt-2",children:[(0,C.jsx)(r.A,{onClick:()=>{},children:"Cancel"}),(0,C.jsx)(r.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})})]})]})]})};var R=n(925),F=n(7043),P=n(6157);const{Search:D}=a.A,B=()=>{const[e,t]=(0,s.useState)([]),[n,a]=(0,s.useState)([]),[y,A]=(0,s.useState)(!1),[g,f]=(0,s.useState)({}),[v,b]=(0,s.useState)(""),[w,k]=(0,s.useState)("");(0,s.useEffect)((()=>{(0,P.L_)({}).then((e=>{var t;const n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;let s=[{value:"",label:"All"}];n.map((e=>{s.push({value:e.id,label:e.name})})),a(s)})).catch((e=>{l.Ay.error("Error fetching room suggestions")}))}),[]);const S=()=>{(async e=>{let{start:t,limit:n,roleId:s,search:a}=e,l=s?"&roleId=".concat(s):"",i=a?"&search=".concat(a):"";return await N.p.get("/packages?start=".concat(t||0,"&limit=").concat(n||10).concat(l).concat(i))})({search:v,roleId:w}).then((e=>{var n;e&&t(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.rows)})).catch((e=>console.log("err",e)))};(0,s.useEffect)((()=>{S()}),[v,w]);const T=[{title:"#ID",dataIndex:"id",key:"id",width:150},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Mentioned CTC",dataIndex:"ctc",key:"ctc",width:200},{title:"Cost To Company",dataIndex:"cost_to_company",key:"cost_to_company",width:150},{title:"Action",key:"action",render:(e,t)=>(0,C.jsxs)(i.A,{size:"middle",children:[(0,C.jsx)(r.A,{size:"middle",onClick:()=>f({isOpen:!0,userId:null===t||void 0===t?void 0:t.id}),children:"Edit"}),(0,C.jsx)(c.A,{title:"Are you sure to delete this ?",onConfirm:()=>{(async e=>await N.p.delete("/packages/".concat(e)))({id:null===t||void 0===t?void 0:t._id}).then((e=>{l.Ay.success("User Deleted Successfully"),S()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,C.jsx)(r.A,{danger:!0,size:"middle",children:"Delete"})})]}),width:150}];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s.Suspense,{fallback:(0,C.jsx)("div",{className:"spin flex items-center justify-center bg-white dark:bg-dark h-screen w-full fixed z-[999] ltr:left-0 rtl:right-0 top-0",children:(0,C.jsx)(o.A,{})}),children:(0,C.jsxs)(x.BV,{children:[(0,C.jsx)(x.qh,{index:!0,path:"/add",element:(0,C.jsx)(z,{})})," //dashboard"]})}),(0,C.jsx)(E.z,{title:"Users",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/users",breadcrumbName:"Users"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,C.jsx)(R.rQ,{className:"p-3  ",children:(0,C.jsx)(d.A,{gutter:16,children:(0,C.jsx)(p.A,{children:(0,C.jsx)(F.C,{title:(0,C.jsxs)("div",{className:"flex items-center gap-4",children:[(0,C.jsx)("div",{children:(0,C.jsx)(m.A,{style:{width:120},size:"middle",placeholder:"Role",onChange:e=>{k(e)},options:n})}),(0,C.jsx)("div",{children:(0,C.jsx)(D,{placeholder:"search",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{b(e)}})})]}),moreBtn:(0,C.jsx)(r.A,{type:"primary",children:(0,C.jsx)(j.k2,{to:"./add",children:"Add"})}),children:(0,C.jsx)(u.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:T,dataSource:e})})})})}),(0,C.jsx)(h.A,{title:y?"Add Users":"Edit Users",destroyOnClose:!0,open:y||g.isOpen,width:1024,footer:!1,onCancel:()=>{A(!1),f({isOpen:!1,userId:null})},children:(0,C.jsx)(z,{})})]})}},6157:(e,t,n)=>{n.d(t,{EO:()=>c,L_:()=>l,S0:()=>r,vZ:()=>a,xF:()=>i});var s=n(2170);const a=async e=>{let{body:t}=e;return await s.p.post("/roles",t)},l=async e=>{let{start:t,limit:n,RoleNumber:a,status:l}=e;return await s.p.get("/roles?start=".concat(t,"&limit=").concat(n))},i=async e=>{let{id:t}=e;return await s.p.get("/roles/".concat(t))},r=async e=>{let{id:t,body:n}=e;return await s.p.patch("/roles/".concat(t),n)},c=async e=>{let{id:t}=e;return await s.p.delete("/roles/".concat(t))}},1816:(e,t,n)=>{n.d(t,{Hc:()=>l,J4:()=>r,cQ:()=>i,nj:()=>a,zs:()=>c});var s=n(2170);const a=async e=>{let{body:t}=e;return await s.p.post("/components",t)},l=async e=>{let{start:t=0,limit:n=10,search:a,type:l,is_basic:i}=e,r=a?"&search=".concat(a):"",c=l?"&type=".concat(l):"",o=i?"&is_basic=".concat(i):"";return await s.p.get("/components?start=".concat(t,"&limit=").concat(n).concat(r).concat(c).concat(o))},i=async e=>{let{id:t}=e;return await s.p.get("/components/".concat(t))},r=async e=>{let{id:t,body:n}=e;return await s.p.put("/components/".concat(t),n)},c=async e=>{let{id:t}=e;return await s.p.delete("/components/".concat(t))}},8655:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(9379),a=n(5043);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};var i=n(2172),r=function(e,t){return a.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:l}))};r.displayName="MinusCircleOutlined";const c=a.forwardRef(r)},6059:(e,t,n)=>{n.d(t,{A:()=>C});var s=n(8168),a=n(5544),l=n(1376),i=n(4600),r=n.n(i),c=n(8678),o=n(5001),d=n(5043),p=n(5296),m=n(6282),u=n(2701),h=n(1802),x=n(3085),j=n(8046),y=n(8097),A=n(8376),g=n(8986),f=function(e){var t=e.prefixCls,n=e.okButtonProps,a=e.cancelButtonProps,l=e.title,i=e.cancelText,r=e.okText,c=e.okType,o=e.icon,m=e.showCancel,u=void 0===m||m,f=e.close,v=e.onConfirm,b=e.onCancel,C=d.useContext(p.QO).getPrefixCls;return d.createElement(y.A,{componentName:"Popconfirm",defaultLocale:A.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},o&&d.createElement("span",{className:"".concat(t,"-message-icon")},o),d.createElement("div",{className:"".concat(t,"-message-title")},(0,g.b)(l))),d.createElement("div",{className:"".concat(t,"-buttons")},u&&d.createElement(h.A,(0,s.A)({onClick:b,size:"small"},a),null!==i&&void 0!==i?i:e.cancelText),d.createElement(j.A,{buttonProps:(0,s.A)((0,s.A)({size:"small"},(0,x.D)(c)),n),actionFn:v,close:f,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==r&&void 0!==r?r:e.okText)))}))},v=void 0,b=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]])}return n};const C=d.forwardRef((function(e,t){var n=e.prefixCls,i=e.placement,h=void 0===i?"top":i,x=e.trigger,j=void 0===x?"click":x,y=e.okType,A=void 0===y?"primary":y,g=e.icon,C=void 0===g?d.createElement(l.A,null):g,w=e.children,E=e.overlayClassName,N=e.onOpenChange,k=e.onVisibleChange,S=b(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),T=d.useContext(p.QO).getPrefixCls,O=(0,c.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),I=(0,a.A)(O,2),_=I[0],z=I[1],R=function(e,t){z(e,!0),null===k||void 0===k||k(e,t),null===N||void 0===N||N(e,t)},F=T("popover",n),P=T("popconfirm",n),D=r()(P,E);return d.createElement(m.A,(0,s.A)({},S,{trigger:j,prefixCls:F,placement:h,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||R(t)},open:_,ref:t,overlayClassName:D,_overlay:d.createElement(f,(0,s.A)({okType:A,icon:C},e,{prefixCls:F,close:function(e){R(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(v,t)},onCancel:function(t){var n;R(!1,t),null===(n=e.onCancel)||void 0===n||n.call(v,t)}}))}),(0,u.Ob)(w,{onKeyDown:function(e){var t,n;d.isValidElement(w)&&(null===(n=null===w||void 0===w?void 0:(t=w.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===o.A.ESC&&_&&R(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=956.314fe774.chunk.js.map