"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[827],{3827:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var s=n(5043),l=n(3307),r=n(4435),i=n(1802),a=n(6059),o=n(8193),c=n(9800),d=n(1645),u=n(802),m=n(2217),p=n(4406),h=n(289),x=n(5397),v=n(6178),f=n.n(v),A=n(7832),y=(n(6157),n(579));const{Option:C}=p.A,b=e=>{let{setIsAddUsers:t,isEditUsers:n,setIsEditUsers:r,getAllUsers:a}=e;const[u,m]=(0,s.useState)(!1),[p]=h.A.useForm();return(0,s.useEffect)((()=>{null!==n&&void 0!==n&&n.userId&&(m(!0),(0,A.RL)({id:null===n||void 0===n?void 0:n.userId}).then((e=>{const t=e.data;t.date=f()(t.date),console.log("data",t),p.setFieldsValue(t),m(!1)})).catch((e=>{console.log("err",e),m(!1)})))}),[null===n||void 0===n?void 0:n.userId]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.A,{spinning:u}),(0,y.jsx)("div",{children:(0,y.jsxs)(h.A,{form:p,name:"Invoice",labelCol:{span:8},wrapperCol:{span:16},onFinish:e=>{const s=e;var l;(m(!0),null!==n&&void 0!==n&&n.userId)?(0,A.AU)({id:null===n||void 0===n?void 0:n.userId,body:s}).then((e=>{r({isOpen:!1,userId:""}),a(),o.Ay.success("Invoice updated successfully")})).catch((e=>{console.log(e)})):null===(l=(0,A.Kp)({body:s}))||void 0===l||l.then((e=>{o.Ay.success("Invoice added successfully"),t(!1),a({start:0,limit:10}),m(!1)})).catch((e=>{console.log("err :>> ",e),m(!1)}))},autoComplete:"off",children:[(0,y.jsxs)(c.A,{gutter:16,children:[(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"name is required!"}],children:(0,y.jsx)(l.A,{})})}),(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"Phone",name:"phoneNumber",rules:[{required:!0,message:"Phone is required!"}],children:(0,y.jsx)(l.A,{})})})]}),(0,y.jsxs)(c.A,{gutter:16,children:[(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"City",name:"city",rules:[{required:!0,message:"City is required!"}],children:(0,y.jsx)(l.A,{})})}),(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"Address",name:"address",rules:[{required:!0,message:"address is required!"}],children:(0,y.jsx)(l.A,{})})})]}),(0,y.jsxs)("div",{className:"flex justify-end gap-2 mt-2",children:[(0,y.jsx)(i.A,{onClick:()=>{},children:"Cancel"}),(0,y.jsx)(i.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})]})};var g=n(925),j=n(1734),I=n(7043);const{Search:w}=l.A,O=()=>{const[e,t]=(0,s.useState)([]),[n,l]=(0,s.useState)(!1),[p,h]=(0,s.useState)({}),[x,v]=(0,s.useState)(""),[f,C]=(0,s.useState)(""),O=()=>{(0,A.Ib)({search:x,roleId:f}).then((e=>{var n;e&&t(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.rows)})).catch((e=>console.log("err",e)))};(0,s.useEffect)((()=>{O()}),[x,f]);const k=[{title:"#Id",dataIndex:"id",key:"id",width:150},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Phone",dataIndex:"phoneNumber",key:"phoneNumber",width:150},{title:"City",dataIndex:"city",key:"city",width:150},{title:"Address",dataIndex:"address",key:"address",width:150},{title:"Action",key:"action",render:(e,t)=>(0,y.jsxs)(r.A,{size:"middle",children:[(0,y.jsx)(i.A,{size:"middle",onClick:()=>h({isOpen:!0,userId:null===t||void 0===t?void 0:t.id}),children:"Edit"}),(0,y.jsx)(a.A,{title:"Are you sure to delete this Store?",onConfirm:()=>{(0,A.q4)({id:null===t||void 0===t?void 0:t.id}).then((e=>{o.Ay.success("Store Deleted Successfully"),O()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,y.jsx)(i.A,{danger:!0,size:"middle",children:"Delete"})})]}),width:150}];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.z,{title:"Store",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/stores",breadcrumbName:"Stores"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,y.jsx)(g.rQ,{className:"p-3  ",children:(0,y.jsx)(c.A,{gutter:16,children:(0,y.jsx)(d.A,{sm:24,xs:24,lg:24,className:"",children:(0,y.jsx)(I.C,{title:(0,y.jsx)("div",{className:"flex items-center gap-4",children:(0,y.jsx)("div",{children:(0,y.jsx)(w,{placeholder:"search",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{v(e)}})})}),moreBtn:(0,y.jsx)(i.A,{type:"primary",onClick:()=>l(!0),children:"Add"}),children:(0,y.jsx)(u.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:k,dataSource:e})})})})}),(0,y.jsx)(m.A,{title:n?"Add Store":"Edit Store",destroyOnClose:!0,open:n||p.isOpen,width:1024,footer:!1,onCancel:()=>{l(!1),h({isOpen:!1,userId:null})},children:(0,y.jsx)(b,{setIsAddUsers:l,getAllUsers:O,isEditUsers:p,setIsEditUsers:h})})]})}},6157:(e,t,n)=>{n.d(t,{EO:()=>o,L_:()=>r,S0:()=>a,vZ:()=>l,xF:()=>i});var s=n(2170);const l=async e=>{let{body:t}=e;return await s.p.post("/roles",t)},r=async e=>{let{start:t,limit:n,RoleNumber:l,status:r}=e;return await s.p.get("/roles?start=".concat(t,"&limit=").concat(n))},i=async e=>{let{id:t}=e;return await s.p.get("/roles/".concat(t))},a=async e=>{let{id:t,body:n}=e;return await s.p.patch("/roles/".concat(t),n)},o=async e=>{let{id:t}=e;return await s.p.delete("/roles/".concat(t))}},6059:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(8168),l=n(5544),r=n(1376),i=n(4600),a=n.n(i),o=n(8678),c=n(5001),d=n(5043),u=n(5296),m=n(6282),p=n(2701),h=n(1802),x=n(3085),v=n(8046),f=n(8097),A=n(8376),y=n(8986),C=function(e){var t=e.prefixCls,n=e.okButtonProps,l=e.cancelButtonProps,r=e.title,i=e.cancelText,a=e.okText,o=e.okType,c=e.icon,m=e.showCancel,p=void 0===m||m,C=e.close,b=e.onConfirm,g=e.onCancel,j=d.useContext(u.QO).getPrefixCls;return d.createElement(f.A,{componentName:"Popconfirm",defaultLocale:A.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,y.b)(r))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(h.A,(0,s.A)({onClick:g,size:"small"},l),null!==i&&void 0!==i?i:e.cancelText),d.createElement(v.A,{buttonProps:(0,s.A)((0,s.A)({size:"small"},(0,x.D)(o)),n),actionFn:b,close:C,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==a&&void 0!==a?a:e.okText)))}))},b=void 0,g=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(n[s[l]]=e[s[l]])}return n};const j=d.forwardRef((function(e,t){var n=e.prefixCls,i=e.placement,h=void 0===i?"top":i,x=e.trigger,v=void 0===x?"click":x,f=e.okType,A=void 0===f?"primary":f,y=e.icon,j=void 0===y?d.createElement(r.A,null):y,I=e.children,w=e.overlayClassName,O=e.onOpenChange,k=e.onVisibleChange,E=g(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.QO).getPrefixCls,S=(0,o.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),P=(0,l.A)(S,2),T=P[0],q=P[1],U=function(e,t){q(e,!0),null===k||void 0===k||k(e,t),null===O||void 0===O||O(e,t)},z=N("popover",n),F=N("popconfirm",n),V=a()(F,w);return d.createElement(m.A,(0,s.A)({},E,{trigger:v,prefixCls:z,placement:h,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||U(t)},open:T,ref:t,overlayClassName:V,_overlay:d.createElement(C,(0,s.A)({okType:A,icon:j},e,{prefixCls:z,close:function(e){U(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(b,t)},onCancel:function(t){var n;U(!1,t),null===(n=e.onCancel)||void 0===n||n.call(b,t)}}))}),(0,p.Ob)(I,{onKeyDown:function(e){var t,n;d.isValidElement(I)&&(null===(n=null===I||void 0===I?void 0:(t=I.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===c.A.ESC&&T&&U(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=827.ac3f1f86.chunk.js.map