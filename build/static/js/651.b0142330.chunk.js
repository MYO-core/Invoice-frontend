"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[651],{651:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var s=t(5043),l=t(6558),a=t(3688),r=t(4435),i=t(1802),o=t(6059),c=t(8193),d=t(9800),u=t(1645),m=t(9524),p=t(2217),h=t(4406),x=t(289),A=t(5397),v=(t(6178),t(2170));t(6157);var g=t(579);const{Option:j}=h.A,y=e=>{let{setIsAddUsers:n,isEditUsers:t,setIsEditUsers:a,getAllUsers:r}=e;const[o,m]=(0,s.useState)(!1),[p]=x.A.useForm();(0,s.useEffect)((()=>{null!==t&&void 0!==t&&t.userId&&(m(!0),(async e=>{let{id:n}=e;return await v.p.get("/organisation/".concat(n))})({id:null===t||void 0===t?void 0:t.userId}).then((e=>{const n=e.data;p.setFieldsValue(n),m(!1)})).catch((e=>{console.log("err",e),m(!1)})))}),[null===t||void 0===t?void 0:t.userId]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(A.A,{spinning:o}),(0,g.jsx)("div",{children:(0,g.jsxs)(x.A,{form:p,name:"Organisation",labelCol:{span:8},wrapperCol:{span:16},onFinish:e=>{const s=e;var l;(m(!0),null!==t&&void 0!==t&&t.userId)?(async e=>{let{id:n,body:t}=e;return await v.p.put("/organisation/".concat(n),t)})({id:null===t||void 0===t?void 0:t.userId,body:s}).then((e=>{a({isOpen:!1,userId:""}),r(),c.Ay.success("Company updated successfully")})).catch((e=>{c.Ay.error("Something Went Wrong")})):null===(l=(async e=>{let{body:n}=e;return await v.p.post("/organisation",n)})({body:s}))||void 0===l||l.then((e=>{c.Ay.success("Company added successfully"),n(!1),r({start:0,limit:10}),m(!1)})).catch((e=>{console.log("err :>> ",e),m(!1)}))},autoComplete:"off",children:[(0,g.jsxs)(d.A,{gutter:16,children:[(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Required! "}],children:(0,g.jsx)(l.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"stregnth",name:"stregnth",rules:[{required:!0,message:"Required! "}],children:(0,g.jsxs)(h.A,{placeholder:"Select strength",children:[(0,g.jsx)(j,{value:"0-100",children:"0-100"}),(0,g.jsx)(j,{value:"101-500",children:"101-500"}),(0,g.jsx)(j,{value:"501-1000",children:"501-1000"}),(0,g.jsx)(j,{value:"1001-10000",children:"1001-10000"})]})})})]}),(0,g.jsxs)(d.A,{gutter:16,children:[(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Required! "}],children:(0,g.jsx)(l.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"City",name:"city",rules:[{required:!0,message:"Required! "}],children:(0,g.jsx)(l.A,{})})})]}),(0,g.jsxs)(d.A,{gutter:16,children:[(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"State",name:"state",rules:[{required:!0,message:"Required! "}],children:(0,g.jsx)(l.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Country",name:"country",rules:[{required:!0,message:"Required! "}],children:(0,g.jsx)(l.A,{})})})]}),(0,g.jsxs)(d.A,{gutter:16,children:[(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Phone Number",name:"phoneNumber",rules:[{required:!0,message:"Required! "}],children:(0,g.jsx)(l.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Required! "},{type:"email",message:"Please enter a valid email!"}],children:(0,g.jsx)(l.A,{})})})]}),(0,g.jsxs)(d.A,{gutter:16,children:[(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Website",name:"website",children:(0,g.jsx)(l.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(x.A.Item,{label:"Logo URL",name:"logoUrl",children:(0,g.jsx)(l.A,{})})})]}),(0,g.jsxs)("div",{className:"flex justify-end gap-2 mt-2",children:[(0,g.jsx)(i.A,{onClick:()=>{},children:"Cancel"}),(0,g.jsx)(i.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})]})};var f=t(925),b=t(1734),C=t(7043);const{Search:w}=l.A,I=()=>{const[e,n]=(0,s.useState)([]),[t,l]=(0,s.useState)([]),[h,x]=(0,s.useState)(!1),[A,j]=(0,s.useState)({}),[w,I]=(0,s.useState)(""),[O,E]=(0,s.useState)(""),N=()=>{(async e=>{let{start:n,limit:t,roleId:s,search:l}=e,a=s?"&roleId=".concat(s):"",r=l?"&search=".concat(l):"";return await v.p.get("/organisation?start=".concat(n||0,"&limit=").concat(t||10).concat(a).concat(r))})({search:w,roleId:O}).then((e=>{var t;e&&n(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)})).catch((e=>console.log("err",e)))};(0,s.useEffect)((()=>{N()}),[w,O]);const k=[{title:"Name",dataIndex:"name",key:"name",width:150,render:(e,n)=>{return(0,g.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,g.jsx)(a.A,{src:null===n||void 0===n?void 0:n.logoUrl,children:(t=null===n||void 0===n?void 0:n.name,t.split(" ").map((e=>e.charAt(0).toUpperCase())).join(""))}),(0,g.jsx)("div",{children:null===n||void 0===n?void 0:n.name})]});var t}},{title:"Strength",dataIndex:"stregnth",key:"stregnth",width:150},{title:"Phone Number",dataIndex:"phoneNumber",key:"phoneNumber",width:150},{title:"Email",dataIndex:"email",key:"email",width:150},{title:"Action",key:"action",render:(e,n)=>(0,g.jsxs)(r.A,{size:"middle",children:[(0,g.jsx)(i.A,{size:"middle",onClick:()=>j({isOpen:!0,userId:null===n||void 0===n?void 0:n.id}),children:"Edit"}),(0,g.jsx)(o.A,{title:"Are you sure to delete this User?",onConfirm:()=>{(async e=>await v.p.delete("/organisation/".concat(e)))({id:null===n||void 0===n?void 0:n.id}).then((e=>{c.Ay.success("Organisation Deleted Successfully"),N()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,g.jsx)(i.A,{danger:!0,size:"middle",disabled:!0,children:"Delete"})})]}),width:150}];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b.z,{title:"Company",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/company",breadcrumbName:"company"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,g.jsx)(f.rQ,{className:"p-3  ",children:(0,g.jsx)(d.A,{gutter:16,children:(0,g.jsx)(u.A,{sm:24,xs:24,lg:24,className:"",children:(0,g.jsx)(C.C,{moreBtn:(0,g.jsx)(i.A,{type:"primary",onClick:()=>x(!0),disabled:!0,children:"Add"}),children:(0,g.jsx)(m.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:k,dataSource:e})})})})}),(0,g.jsx)(p.A,{title:h?"Add Users":"Edit Users",destroyOnClose:!0,open:h||A.isOpen,width:1024,footer:!1,onCancel:()=>{x(!1),j({isOpen:!1,userId:null})},children:(0,g.jsx)(y,{setIsAddUsers:x,getAllUsers:N,isEditUsers:A,setIsEditUsers:j})})]})}},6157:(e,n,t)=>{t.d(n,{EO:()=>o,L_:()=>a,S0:()=>i,vZ:()=>l,xF:()=>r});var s=t(2170);const l=async e=>{let{body:n}=e;return await s.p.post("/roles",n)},a=async e=>{let{start:n,limit:t,RoleNumber:l,status:a}=e;return await s.p.get("/roles?start=".concat(n,"&limit=").concat(t))},r=async e=>{let{id:n}=e;return await s.p.get("/roles/".concat(n))},i=async e=>{let{id:n,body:t}=e;return await s.p.patch("/roles/".concat(n),t)},o=async e=>{let{id:n}=e;return await s.p.delete("/roles/".concat(n))}},6059:(e,n,t)=>{t.d(n,{A:()=>C});var s=t(8168),l=t(5544),a=t(1376),r=t(4600),i=t.n(r),o=t(8678),c=t(5001),d=t(5043),u=t(5296),m=t(6282),p=t(2701),h=t(1802),x=t(3085),A=t(8046),v=t(8097),g=t(8376),j=t(8986),y=function(e){var n=e.prefixCls,t=e.okButtonProps,l=e.cancelButtonProps,a=e.title,r=e.cancelText,i=e.okText,o=e.okType,c=e.icon,m=e.showCancel,p=void 0===m||m,y=e.close,f=e.onConfirm,b=e.onCancel,C=d.useContext(u.QO).getPrefixCls;return d.createElement(v.A,{componentName:"Popconfirm",defaultLocale:g.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(n,"-inner-content")},d.createElement("div",{className:"".concat(n,"-message")},c&&d.createElement("span",{className:"".concat(n,"-message-icon")},c),d.createElement("div",{className:"".concat(n,"-message-title")},(0,j.b)(a))),d.createElement("div",{className:"".concat(n,"-buttons")},p&&d.createElement(h.A,(0,s.A)({onClick:b,size:"small"},l),null!==r&&void 0!==r?r:e.cancelText),d.createElement(A.A,{buttonProps:(0,s.A)((0,s.A)({size:"small"},(0,x.D)(o)),t),actionFn:f,close:y,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},f=void 0,b=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)n.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(t[s[l]]=e[s[l]])}return t};const C=d.forwardRef((function(e,n){var t=e.prefixCls,r=e.placement,h=void 0===r?"top":r,x=e.trigger,A=void 0===x?"click":x,v=e.okType,g=void 0===v?"primary":v,j=e.icon,C=void 0===j?d.createElement(a.A,null):j,w=e.children,I=e.overlayClassName,O=e.onOpenChange,E=e.onVisibleChange,N=b(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),k=d.useContext(u.QO).getPrefixCls,S=(0,o.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),q=(0,l.A)(S,2),U=q[0],P=q[1],R=function(e,n){P(e,!0),null===E||void 0===E||E(e,n),null===O||void 0===O||O(e,n)},T=k("popover",t),z=k("popconfirm",t),F=i()(z,I);return d.createElement(m.A,(0,s.A)({},N,{trigger:A,prefixCls:T,placement:h,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||R(n)},open:U,ref:n,overlayClassName:F,_overlay:d.createElement(y,(0,s.A)({okType:g,icon:C},e,{prefixCls:T,close:function(e){R(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(f,n)},onCancel:function(n){var t;R(!1,n),null===(t=e.onCancel)||void 0===t||t.call(f,n)}}))}),(0,p.Ob)(w,{onKeyDown:function(e){var n,t;d.isValidElement(w)&&(null===(t=null===w||void 0===w?void 0:(n=w.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===c.A.ESC&&U&&R(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=651.b0142330.chunk.js.map