"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[827],{42113:(e,t,s)=>{s.d(t,{A:()=>n});s(65043);const n=s.p+"static/media/home.f87e389a5c1850fe48b55156d6a0d7b7.svg"},91734:(e,t,s)=>{s.d(t,{z:()=>h});var n,l,r=s(97775),a=s(35475),i=s(31105),o=s(57528),c=s(67947),d=s(94574);const u=(0,d.Ay)(c.A)(n||(n=(0,o.A)(["\n  .ant-breadcrumb {\n    ol{\n      @media (max-width: 575px) {\n        justify-content: center;\n      }\n    }\n    li{\n        display:flex;\n        align-items:center;\n    }\n  }\n"]))),m=d.Ay.div(l||(l=(0,o.A)(["\n  \n"])));var p=s(70579);function h(e){const{title:t,subTitle:n,routes:l,buttons:o,ghost:c,bgColor:d,className:h}=e,x=l?(0,p.jsx)(r.A,{className:"flex order-2 relative top-1.5",separator:(0,p.jsx)("span",{className:"inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full"}),children:l.map(((e,t)=>t+1===l.length?(0,p.jsx)(r.A.Item,{className:"text-breadcrumbs dark:text-white30 text-15",children:e.breadcrumbName},t):(0,p.jsxs)(r.A.Item,{className:"inline-flex items-start",children:[(0,p.jsx)(i.k,{className:"relative top-0.5 ltr:mr-2 rtl:ml-2 [&>div>svg]:text-[#8c90a4] dark:[&>div>svg]:text-white60 ",src:s(42113).A})," ",(0,p.jsx)(a.N_,{to:e.path,className:"text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm",children:e.breadcrumbName})]},t)))}):"";return(0,p.jsx)(m,{bgColor:d,children:(0,p.jsx)(u,{className:"".concat(h),title:t,subTitle:n,breadcrumb:x,extra:o,ghost:c})})}},3827:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var n=s(65043),l=s(33307),r=s(64435),a=s(89421),i=s(28440),o=s(48193),c=s(47419),d=s(11645),u=s(10444),m=s(33946),p=s(94406),h=s(50289),x=s(5397),v=s(86178),f=s.n(v),A=s(57832),y=(s(46157),s(70579));const{Option:b}=p.A,g=e=>{let{setIsAddUsers:t,isEditUsers:s,setIsEditUsers:r,getAllUsers:i}=e;const[u,m]=(0,n.useState)(!1),[p]=h.A.useForm();return(0,n.useEffect)((()=>{null!==s&&void 0!==s&&s.userId&&(m(!0),(0,A.RL)({id:null===s||void 0===s?void 0:s.userId}).then((e=>{const t=e.data;t.date=f()(t.date),console.log("data",t),p.setFieldsValue(t),m(!1)})).catch((e=>{console.log("err",e),m(!1)})))}),[null===s||void 0===s?void 0:s.userId]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.A,{spinning:u}),(0,y.jsx)("div",{children:(0,y.jsxs)(h.A,{form:p,name:"Invoice",labelCol:{span:8},wrapperCol:{span:16},onFinish:e=>{const n=e;var l;(m(!0),null!==s&&void 0!==s&&s.userId)?(0,A.AU)({id:null===s||void 0===s?void 0:s.userId,body:n}).then((e=>{r({isOpen:!1,userId:""}),i(),o.Ay.success("Invoice updated successfully")})).catch((e=>{console.log(e)})):null===(l=(0,A.Kp)({body:n}))||void 0===l||l.then((e=>{o.Ay.success("Invoice added successfully"),t(!1),i({start:0,limit:10}),m(!1)})).catch((e=>{console.log("err :>> ",e),m(!1)}))},autoComplete:"off",children:[(0,y.jsxs)(c.A,{gutter:16,children:[(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"name is required!"}],children:(0,y.jsx)(l.A,{})})}),(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"Phone",name:"phoneNumber",rules:[{required:!0,message:"Phone is required!"}],children:(0,y.jsx)(l.A,{})})})]}),(0,y.jsxs)(c.A,{gutter:16,children:[(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"City",name:"city",rules:[{required:!0,message:"City is required!"}],children:(0,y.jsx)(l.A,{})})}),(0,y.jsx)(d.A,{span:12,children:(0,y.jsx)(h.A.Item,{label:"Address",name:"address",rules:[{required:!0,message:"address is required!"}],children:(0,y.jsx)(l.A,{})})})]}),(0,y.jsxs)("div",{className:"flex justify-end gap-2 mt-2",children:[(0,y.jsx)(a.A,{onClick:()=>{},children:"Cancel"}),(0,y.jsx)(a.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})]})};var j=s(40925),C=s(91734),N=s(57043);const{Search:w}=l.A,I=()=>{const[e,t]=(0,n.useState)([]),[s,l]=(0,n.useState)(!1),[p,h]=(0,n.useState)({}),[x,v]=(0,n.useState)(""),[f,b]=(0,n.useState)(""),I=()=>{(0,A.Ib)({search:x,roleId:f}).then((e=>{var s;e&&t(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.rows)})).catch((e=>console.log("err",e)))};(0,n.useEffect)((()=>{I()}),[x,f]);const k=[{title:"#Id",dataIndex:"id",key:"id",width:150},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Phone",dataIndex:"phoneNumber",key:"phoneNumber",width:150},{title:"City",dataIndex:"city",key:"city",width:150},{title:"Address",dataIndex:"address",key:"address",width:150},{title:"Action",key:"action",render:(e,t)=>(0,y.jsxs)(r.A,{size:"middle",children:[(0,y.jsx)(a.A,{size:"middle",onClick:()=>h({isOpen:!0,userId:null===t||void 0===t?void 0:t.id}),children:"Edit"}),(0,y.jsx)(i.A,{title:"Are you sure to delete this Store?",onConfirm:()=>{(0,A.q4)({id:null===t||void 0===t?void 0:t.id}).then((e=>{o.Ay.success("Store Deleted Successfully"),I()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,y.jsx)(a.A,{danger:!0,size:"middle",children:"Delete"})})]}),width:150}];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(C.z,{title:"Store",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/stores",breadcrumbName:"Stores"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,y.jsx)(j.rQ,{className:"p-3  ",children:(0,y.jsx)(c.A,{gutter:16,children:(0,y.jsx)(d.A,{sm:24,xs:24,lg:24,className:"",children:(0,y.jsx)(N.C,{title:(0,y.jsx)("div",{className:"flex items-center gap-4",children:(0,y.jsx)("div",{children:(0,y.jsx)(w,{placeholder:"search",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{v(e)}})})}),moreBtn:(0,y.jsx)(a.A,{type:"primary",onClick:()=>l(!0),children:"Add"}),children:(0,y.jsx)(u.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:k,dataSource:e})})})})}),(0,y.jsx)(m.A,{title:s?"Add Store":"Edit Store",destroyOnClose:!0,open:s||p.isOpen,width:1024,footer:!1,onCancel:()=>{l(!1),h({isOpen:!1,userId:null})},children:(0,y.jsx)(g,{setIsAddUsers:l,getAllUsers:I,isEditUsers:p,setIsEditUsers:h})})]})}},46157:(e,t,s)=>{s.d(t,{EO:()=>o,L_:()=>r,S0:()=>i,vZ:()=>l,xF:()=>a});var n=s(32170);const l=async e=>{let{body:t}=e;return await n.p.post("/roles",t)},r=async e=>{let{start:t,limit:s,RoleNumber:l,status:r}=e;return await n.p.get("/roles?start=".concat(t,"&limit=").concat(s))},a=async e=>{let{id:t}=e;return await n.p.get("/roles/".concat(t))},i=async e=>{let{id:t,body:s}=e;return await n.p.patch("/roles/".concat(t),s)},o=async e=>{let{id:t}=e;return await n.p.delete("/roles/".concat(t))}},28440:(e,t,s)=>{s.d(t,{A:()=>C});var n=s(58168),l=s(5544),r=s(51376),a=s(64600),i=s.n(a),o=s(28678),c=s(25001),d=s(65043),u=s(35296),m=s(36282),p=s(12701),h=s(89421),x=s(83085),v=s(38046),f=s(38097),A=s(8376),y=s(98986),b=function(e){var t=e.prefixCls,s=e.okButtonProps,l=e.cancelButtonProps,r=e.title,a=e.cancelText,i=e.okText,o=e.okType,c=e.icon,m=e.showCancel,p=void 0===m||m,b=e.close,g=e.onConfirm,j=e.onCancel,C=d.useContext(u.QO).getPrefixCls;return d.createElement(f.A,{componentName:"Popconfirm",defaultLocale:A.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,y.b)(r))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(h.A,(0,n.A)({onClick:j,size:"small"},l),null!==a&&void 0!==a?a:e.cancelText),d.createElement(v.A,{buttonProps:(0,n.A)((0,n.A)({size:"small"},(0,x.D)(o)),s),actionFn:g,close:b,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},g=void 0,j=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(s[n[l]]=e[n[l]])}return s};const C=d.forwardRef((function(e,t){var s=e.prefixCls,a=e.placement,h=void 0===a?"top":a,x=e.trigger,v=void 0===x?"click":x,f=e.okType,A=void 0===f?"primary":f,y=e.icon,C=void 0===y?d.createElement(r.A,null):y,N=e.children,w=e.overlayClassName,I=e.onOpenChange,k=e.onVisibleChange,O=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),E=d.useContext(u.QO).getPrefixCls,S=(0,o.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),P=(0,l.A)(S,2),T=P[0],q=P[1],z=function(e,t){q(e,!0),null===k||void 0===k||k(e,t),null===I||void 0===I||I(e,t)},U=E("popover",s),F=E("popconfirm",s),V=i()(F,w);return d.createElement(m.A,(0,n.A)({},O,{trigger:v,prefixCls:U,placement:h,onOpenChange:function(t){var s=e.disabled;void 0!==s&&s||z(t)},open:T,ref:t,overlayClassName:V,_overlay:d.createElement(b,(0,n.A)({okType:A,icon:C},e,{prefixCls:U,close:function(e){z(!1,e)},onConfirm:function(t){var s;return null===(s=e.onConfirm)||void 0===s?void 0:s.call(g,t)},onCancel:function(t){var s;z(!1,t),null===(s=e.onCancel)||void 0===s||s.call(g,t)}}))}),(0,p.Ob)(N,{onKeyDown:function(e){var t,s;d.isValidElement(N)&&(null===(s=null===N||void 0===N?void 0:(t=N.props).onKeyDown)||void 0===s||s.call(t,e)),function(e){e.keyCode===c.A.ESC&&T&&z(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=827.1655c5d1.chunk.js.map