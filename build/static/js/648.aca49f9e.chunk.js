"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[648],{648:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var s=n(5043),l=n(6558),a=n(4435),r=n(1802),o=n(6059),i=n(8193),c=n(9800),d=n(1645),u=n(9524),m=n(2217),p=n(4406),h=n(289),x=n(5397),v=n(6178),A=n.n(v),y=n(2170);n(6157);var f=n(579);const{Option:g}=p.A,j=e=>{let{setIsAddUsers:t,isEditUsers:n,setIsEditUsers:a,getAllUsers:o}=e;const[u,m]=(0,s.useState)(!1),[v,j]=(0,s.useState)([]),[b,C]=(0,s.useState)({}),[w]=h.A.useForm();return(0,s.useEffect)((()=>{null!==n&&void 0!==n&&n.userId&&(m(!0),(async e=>{let{id:t}=e;return await y.p.get("/customers/".concat(t))})({id:null===n||void 0===n?void 0:n.userId}).then((e=>{const t=e.data;t.Dob=A()(t.Dob),j([{_id:t.roomId,roomNumber:t.roomNumber}]),w.setFieldsValue(t),m(!1)})).catch((e=>{console.log("err",e),m(!1)})))}),[null===n||void 0===n?void 0:n.userId]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.A,{spinning:u}),(0,f.jsx)("div",{children:(0,f.jsxs)(h.A,{form:w,name:"Organisation",labelCol:{span:8},wrapperCol:{span:16},onFinish:e=>{const s=e;var l;(m(!0),null!==n&&void 0!==n&&n.userId)?(async e=>{let{id:t,body:n}=e;return await y.p.patch("/customers/".concat(t),n)})({id:null===n||void 0===n?void 0:n.userId,body:s}).then((e=>{var t;200!==e.status?i.Ay.warning(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message):(a({isOpen:!1,userId:""}),o(),i.Ay.success("updated successfully"))})).catch((e=>{i.Ay.error("Something Went Wrong")})):null===(l=(async e=>{let{body:t}=e;return await y.p.post("/customers",t)})({body:s}))||void 0===l||l.then((e=>{var n;200!==e.status?i.Ay.warning(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message):(i.Ay.success("added successfully"),t(!1),o({start:0,limit:10}));m(!1),console.log("res",e.data)})).catch((e=>{i.Ay.error("Something Went Wrong"),console.log("err :>> ",e),m(!1)}))},autoComplete:"off",children:[(0,f.jsxs)(c.A,{gutter:16,children:[(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(h.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input name!"}],children:(0,f.jsx)(l.A,{})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(h.A.Item,{label:"Email",name:"email",children:(0,f.jsx)(l.A,{})})})]}),(0,f.jsxs)(c.A,{gutter:16,children:[(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(h.A.Item,{label:"Date of Birth",name:"dob",children:(0,f.jsx)(l.A,{type:"date"})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(h.A.Item,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input your phone number!"}],children:(0,f.jsx)(l.A,{})})})]}),(0,f.jsx)(c.A,{gutter:16,children:(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(h.A.Item,{label:"Gender",name:"gender",children:(0,f.jsxs)(p.A,{children:[(0,f.jsx)(g,{value:"male",children:"Male"}),(0,f.jsx)(g,{value:"female",children:"Female"}),(0,f.jsx)(g,{value:"other",children:"Other"})]})})})}),(0,f.jsx)(c.A,{gutter:16,children:(0,f.jsx)(d.A,{span:24,children:(0,f.jsx)(h.A.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Please input your address!"}],children:(0,f.jsx)(l.A.TextArea,{})})})}),(0,f.jsxs)("div",{className:"flex justify-end gap-2 mt-2",children:[(0,f.jsx)(r.A,{onClick:()=>{t(!1),a({isOpen:!1,StatusId:""})},children:"Cancel"}),(0,f.jsx)(r.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})]})};var b=n(925),C=n(1734),w=n(7043);const{Search:I}=l.A,O=()=>{const[e,t]=(0,s.useState)([]),[n,l]=(0,s.useState)(!1),[p,h]=(0,s.useState)({}),[x,v]=(0,s.useState)(""),[A,g]=(0,s.useState)(""),O=()=>{(async e=>{let{start:t,limit:n,roleId:s,search:l}=e;console.log(s);let a=s?"&phone=".concat(s):"",r=l?"&search=".concat(l):"";return await y.p.get("/customers?start=".concat(t||0,"&limit=").concat(n||10).concat(a).concat(r))})({search:x,roleId:A}).then((e=>{var n;e&&t(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.rows)})).catch((e=>console.log("err",e)))};(0,s.useEffect)((()=>{O()}),[x,A]);const E=[{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Email",dataIndex:"email",key:"email",width:150},{title:"Phone",dataIndex:"phone",key:"phone",width:150},{title:"Invoice Count",dataIndex:"invoice_count",key:"invoice_count",width:150},{title:"Action",key:"action",render:(e,t)=>(0,f.jsxs)(a.A,{size:"middle",children:[(0,f.jsx)(r.A,{size:"middle",onClick:()=>h({isOpen:!0,userId:null===t||void 0===t?void 0:t.id}),children:"Edit"}),(0,f.jsx)(o.A,{title:"Are you sure to delete this Customer?",onConfirm:()=>{(async e=>await y.p.delete("/customers/".concat(e)))({id:null===t||void 0===t?void 0:t.id}).then((e=>{i.Ay.success("Customer Deleted Successfully"),O()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,f.jsx)(r.A,{danger:!0,size:"middle",children:"Delete"})})]}),width:150}];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(C.z,{title:"Customers",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/customers",breadcrumbName:"Customers"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,f.jsx)(b.rQ,{className:"p-3  ",children:(0,f.jsx)(c.A,{gutter:16,children:(0,f.jsx)(d.A,{sm:24,xs:24,lg:24,className:"",children:(0,f.jsx)(w.C,{title:(0,f.jsx)("div",{className:"flex items-center gap-4",children:(0,f.jsx)("div",{children:(0,f.jsx)(I,{placeholder:"Name or Phone",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{v(e)}})})}),moreBtn:(0,f.jsx)(r.A,{type:"primary",onClick:()=>l(!0),children:"Add"}),children:(0,f.jsx)(u.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:E,dataSource:e})})})})}),(0,f.jsx)(m.A,{title:n?"Add Customer":"Edit Customer",destroyOnClose:!0,open:n||p.isOpen,width:1024,footer:!1,onCancel:()=>{l(!1),h({isOpen:!1,userId:null})},children:(0,f.jsx)(j,{setIsAddUsers:l,getAllUsers:O,isEditUsers:p,setIsEditUsers:h})})]})}},6157:(e,t,n)=>{n.d(t,{EO:()=>i,L_:()=>a,S0:()=>o,vZ:()=>l,xF:()=>r});var s=n(2170);const l=async e=>{let{body:t}=e;return await s.p.post("/roles",t)},a=async e=>{let{start:t,limit:n,RoleNumber:l,status:a}=e;return await s.p.get("/roles?start=".concat(t,"&limit=").concat(n))},r=async e=>{let{id:t}=e;return await s.p.get("/roles/".concat(t))},o=async e=>{let{id:t,body:n}=e;return await s.p.patch("/roles/".concat(t),n)},i=async e=>{let{id:t}=e;return await s.p.delete("/roles/".concat(t))}},6059:(e,t,n)=>{n.d(t,{A:()=>C});var s=n(8168),l=n(5544),a=n(1376),r=n(4600),o=n.n(r),i=n(8678),c=n(5001),d=n(5043),u=n(5296),m=n(6282),p=n(2701),h=n(1802),x=n(3085),v=n(8046),A=n(8097),y=n(8376),f=n(8986),g=function(e){var t=e.prefixCls,n=e.okButtonProps,l=e.cancelButtonProps,a=e.title,r=e.cancelText,o=e.okText,i=e.okType,c=e.icon,m=e.showCancel,p=void 0===m||m,g=e.close,j=e.onConfirm,b=e.onCancel,C=d.useContext(u.QO).getPrefixCls;return d.createElement(A.A,{componentName:"Popconfirm",defaultLocale:y.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,f.b)(a))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(h.A,(0,s.A)({onClick:b,size:"small"},l),null!==r&&void 0!==r?r:e.cancelText),d.createElement(v.A,{buttonProps:(0,s.A)((0,s.A)({size:"small"},(0,x.D)(i)),n),actionFn:j,close:g,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==o&&void 0!==o?o:e.okText)))}))},j=void 0,b=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(n[s[l]]=e[s[l]])}return n};const C=d.forwardRef((function(e,t){var n=e.prefixCls,r=e.placement,h=void 0===r?"top":r,x=e.trigger,v=void 0===x?"click":x,A=e.okType,y=void 0===A?"primary":A,f=e.icon,C=void 0===f?d.createElement(a.A,null):f,w=e.children,I=e.overlayClassName,O=e.onOpenChange,E=e.onVisibleChange,N=b(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),k=d.useContext(u.QO).getPrefixCls,S=(0,i.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),P=(0,l.A)(S,2),T=P[0],D=P[1],z=function(e,t){D(e,!0),null===E||void 0===E||E(e,t),null===O||void 0===O||O(e,t)},F=k("popover",n),U=k("popconfirm",n),V=o()(U,I);return d.createElement(m.A,(0,s.A)({},N,{trigger:v,prefixCls:F,placement:h,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||z(t)},open:T,ref:t,overlayClassName:V,_overlay:d.createElement(g,(0,s.A)({okType:y,icon:C},e,{prefixCls:F,close:function(e){z(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(j,t)},onCancel:function(t){var n;z(!1,t),null===(n=e.onCancel)||void 0===n||n.call(j,t)}}))}),(0,p.Ob)(w,{onKeyDown:function(e){var t,n;d.isValidElement(w)&&(null===(n=null===w||void 0===w?void 0:(t=w.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===c.A.ESC&&T&&z(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=648.aca49f9e.chunk.js.map