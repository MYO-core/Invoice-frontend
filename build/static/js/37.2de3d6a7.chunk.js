"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[37],{55037:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var o=n(65043),l=n(33307),a=n(89421),s=n(28440),i=n(48193),r=n(47419),c=n(11645),d=n(33946),u=n(64435),m=n(10444),p=n(50289),v=n(5397),h=n(32170);var f=n(70579);const x=e=>{let{setisAddRoom:t,isEditRoom:n,setIsEditRoom:s,getAllRoomList:r}=e;const[c,u]=(0,o.useState)(!1),[m,x]=(0,o.useState)(),[y,g]=(0,o.useState)(!1),[b,A]=(0,o.useState)(!1),[j]=p.A.useForm();return(0,o.useEffect)((()=>{null!==n&&void 0!==n&&n.roomId&&(g(!0),(async e=>{let{id:t}=e;return await h.p.get("/subject/".concat(t))})({id:null===n||void 0===n?void 0:n.roomId}).then((e=>{j.setFieldsValue(null===e||void 0===e?void 0:e.data),g(!1)})).catch((e=>{console.log("err",e),g(!1)})))}),[null===n||void 0===n?void 0:n.roomId]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v.A,{spinning:y,children:(0,f.jsx)("div",{children:(0,f.jsxs)(p.A,{form:j,name:"Roles",labelCol:{span:8},wrapperCol:{span:16},onFinish:e=>{const o={name:null===e||void 0===e?void 0:e.name,code:null===e||void 0===e?void 0:e.code};var l;null!==n&&void 0!==n&&n.roomId?(async e=>{let{id:t,body:n}=e;return await h.p.put("/subject/".concat(t),n)})({id:null===n||void 0===n?void 0:n.roomId,body:o}).then((e=>{s({isOpen:!1,roomId:""}),r(),i.Ay.success("Role updated successfully")})).catch((e=>{console.log("err",e),i.Ay.error("Something Went Wrong")})):null===(l=(async e=>{let{body:t}=e;return await h.p.post("/subject",t)})({body:o}))||void 0===l||l.then((e=>{t(!1),r(),i.Ay.success("Role added successfully")})).catch((e=>{console.log("err :>> ",e),i.Ay.error("Something Went Wrong")}))},autoComplete:"off",children:[(0,f.jsx)(p.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Required! "}],children:(0,f.jsx)(l.A,{})}),(0,f.jsx)(p.A.Item,{label:"Code",name:"code",rules:[{required:!0,message:"Required! "}],children:(0,f.jsx)(l.A,{})}),(0,f.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,f.jsx)(a.A,{onClick:()=>{t(!1),s({isOpen:!1,RoleId:""})},children:"Cancel"}),(0,f.jsx)(a.A,{type:"primary",htmlType:"submit",loading:b,children:"Submit"})]})]})})}),(0,f.jsx)(d.A,{width:410,title:m,open:c,footer:null,onCancel:()=>{u(!1)},destroyOnClose:!0})]})};var y=n(40925),g=n(91734),b=n(57043);const{Search:A}=l.A,j=()=>{const[e,t]=(0,o.useState)(0),[n,l]=(0,o.useState)(0),[p,v]=(0,o.useState)(!1),[j,C]=(0,o.useState)({isOpen:!1,roomId:""}),[S,O]=(0,o.useState)([]),[w,E]=(0,o.useState)(""),[k,N]=(0,o.useState)(""),I=[{title:"name",dataIndex:"name",key:"name",width:140},{title:"code",dataIndex:"code",key:"code",width:140},{title:"Action",key:"action",render:(e,t)=>(0,f.jsxs)(u.A,{size:"middle",children:[(0,f.jsx)(a.A,{size:"middle",onClick:()=>C({isOpen:!0,roomId:null===t||void 0===t?void 0:t.id}),children:"Edit"}),(0,f.jsx)(s.A,{title:"Are you sure to delete this subject?",onConfirm:()=>{(async e=>{let{id:t}=e;return await h.p.delete("/subject/".concat(t))})({id:null===t||void 0===t?void 0:t.id}).then((e=>{console.log("res",e),i.Ay.success("subject Deleted Successfully"),R()})).catch((e=>{console.log("err",e),i.Ay.error("Something Went Wrong")}))},okText:"Yes",cancelText:"No",children:(0,f.jsx)(a.A,{danger:!0,size:"middle",children:"Delete"})})]}),width:150}],R=()=>{(async e=>{let{start:t,limit:n,search:o}=e,l=o?"&search=".concat(o):"";return await h.p.get("/subject?start=".concat(t,"&limit=").concat(n).concat(l))})({start:n,search:w}).then((e=>{var n,o;e&&(O(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data),t(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.totalCount))})).catch((e=>{console.log("err",e),i.Ay.error("Something Went Wrong")}))};(0,o.useEffect)((()=>{R()}),[w,k,n]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g.z,{title:"Subjects",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/subjects",breadcrumbName:"Subject"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,f.jsx)(y.rQ,{className:"p-3",children:(0,f.jsx)(r.A,{gutter:16,children:(0,f.jsx)(c.A,{sm:24,xs:24,lg:24,className:"",children:(0,f.jsx)(b.C,{title:(0,f.jsx)("div",{className:"flex items-center gap-4",children:(0,f.jsx)("div",{children:(0,f.jsx)(A,{placeholder:"Search",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{E(e)}})})}),moreBtn:(0,f.jsx)(a.A,{type:"primary",onClick:()=>v(!0),children:"Add"}),border:!1,size:"default",children:(0,f.jsx)(m.A,{scroll:{x:"100%",y:"auto"},columns:I,dataSource:S,pagination:{total:e,onChange:e=>{l(10*(e-1))}}})})})})}),(0,f.jsx)(d.A,{title:"".concat(p?"Add Subject":"Edit Subject"),destroyOnClose:!0,open:p||j.isOpen,footer:!1,onCancel:()=>{v(!1),C({isOpen:!1,roomId:""})},children:(0,f.jsx)(x,{setisAddRoom:v,isEditRoom:j,setIsEditRoom:C,getAllRoomList:R})})]})}},28440:(e,t,n)=>{n.d(t,{A:()=>C});var o=n(58168),l=n(5544),a=n(51376),s=n(64600),i=n.n(s),r=n(28678),c=n(25001),d=n(65043),u=n(35296),m=n(36282),p=n(12701),v=n(89421),h=n(83085),f=n(38046),x=n(38097),y=n(8376),g=n(98986),b=function(e){var t=e.prefixCls,n=e.okButtonProps,l=e.cancelButtonProps,a=e.title,s=e.cancelText,i=e.okText,r=e.okType,c=e.icon,m=e.showCancel,p=void 0===m||m,b=e.close,A=e.onConfirm,j=e.onCancel,C=d.useContext(u.QO).getPrefixCls;return d.createElement(x.A,{componentName:"Popconfirm",defaultLocale:y.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,g.b)(a))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(v.A,(0,o.A)({onClick:j,size:"small"},l),null!==s&&void 0!==s?s:e.cancelText),d.createElement(f.A,{buttonProps:(0,o.A)((0,o.A)({size:"small"},(0,h.D)(r)),n),actionFn:A,close:b,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},A=void 0,j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const C=d.forwardRef((function(e,t){var n=e.prefixCls,s=e.placement,v=void 0===s?"top":s,h=e.trigger,f=void 0===h?"click":h,x=e.okType,y=void 0===x?"primary":x,g=e.icon,C=void 0===g?d.createElement(a.A,null):g,S=e.children,O=e.overlayClassName,w=e.onOpenChange,E=e.onVisibleChange,k=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.QO).getPrefixCls,I=(0,r.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),R=(0,l.A)(I,2),T=R[0],P=R[1],z=function(e,t){P(e,!0),null===E||void 0===E||E(e,t),null===w||void 0===w||w(e,t)},W=N("popover",n),V=N("popconfirm",n),D=i()(V,O);return d.createElement(m.A,(0,o.A)({},k,{trigger:f,prefixCls:W,placement:v,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||z(t)},open:T,ref:t,overlayClassName:D,_overlay:d.createElement(b,(0,o.A)({okType:y,icon:C},e,{prefixCls:W,close:function(e){z(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(A,t)},onCancel:function(t){var n;z(!1,t),null===(n=e.onCancel)||void 0===n||n.call(A,t)}}))}),(0,p.Ob)(S,{onKeyDown:function(e){var t,n;d.isValidElement(S)&&(null===(n=null===S||void 0===S?void 0:(t=S.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===c.A.ESC&&T&&z(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=37.2de3d6a7.chunk.js.map