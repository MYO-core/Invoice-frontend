"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[176],{4176:(e,t,l)=>{l.r(t),l.d(t,{default:()=>N});var r=l(5043),n=l(6558),s=l(4435),o=l(1802),a=l(6059),i=l(8193),d=l(9800),c=l(1645),u=l(4406),m=l(9524),h=l(2217),x=l(6178),p=l.n(x),v=l(289),A=l(5397),y=l(3428),j=l(6252),b=l(2170);l(8532);var f=l(579);const{Option:g}=u.A,k=e=>{let{setIsAddOrder:t,isEditOrder:l,setIsEditOrder:s,getAllOrder:a}=e;const[m,h]=(0,r.useState)(!1),[x,k]=(0,r.useState)([]),[C,O]=(0,r.useState)({}),[I]=v.A.useForm();(0,r.useEffect)((()=>{null!==l&&void 0!==l&&l.orderId&&(h(!0),(async e=>{let{id:t}=e;return await b.p.get("/bookings/".concat(t))})({id:null===l||void 0===l?void 0:l.orderId}).then((e=>{var t;const l=e.data;l.checkInDate=p()(l.checkInDate),l.checkOutDate=p()(l.checkOutDate),O({option:null===l||void 0===l||null===(t=l.Room)||void 0===t?void 0:t.roomNumber,value:null===l||void 0===l?void 0:l.Room.id}),k([l.Room]),I.setFieldsValue(l),h(!1)})).catch((e=>{console.log("err",e),h(!1)})))}),[null===l||void 0===l?void 0:l.orderId]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(A.A,{spinning:m,children:(0,f.jsx)("div",{children:(0,f.jsxs)(v.A,{form:I,layout:"vertical",onFinish:e=>{console.log(e);const r=e;var n;(h(!0),null!==l&&void 0!==l&&l.orderId)?(async e=>{let{id:t,body:l}=e;return await b.p.patch("/bookings/".concat(t),l)})({id:null===l||void 0===l?void 0:l.orderId,body:r}).then((e=>{s({isOpen:!1,orderId:""}),a(),i.Ay.success("Order updated successfully")})).catch((e=>{i.Ay.error("Room Already Booked")})):null===(n=(async e=>{let{body:t}=e;return await b.p.post("/bookings",t)})({body:r}))||void 0===n||n.then((e=>{i.Ay.success("Order added successfully"),t(!1),a({start:0,limit:10}),h(!1)})).catch((e=>{i.Ay.error("Room is already Booked"),console.log("err :>> ",e),h(!1)}))},autoComplete:"off",children:[(0,f.jsxs)(d.A,{gutter:[16,0],children:[(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Customer Name",name:"customerName",rules:[{required:!0,message:"Customer name is required!"}],children:(0,f.jsx)(n.A,{})})}),(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Customer Email",name:"customerEmail",rules:[{required:!0,message:"Customer email is required!"},{type:"email",message:"Please enter a valid email!"}],children:(0,f.jsx)(n.A,{})})})]}),(0,f.jsxs)(d.A,{gutter:[16,0],children:[(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Customer Phone",name:"customerPhone",rules:[{required:!0,message:"Customer phone is required!"}],children:(0,f.jsx)(n.A,{})})}),(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Number of Guests",name:"numberOfGuests",rules:[{required:!0,message:"Number of guests is required!"}],children:(0,f.jsx)(y.A,{min:1})})})]}),(0,f.jsxs)(d.A,{gutter:[16,0],children:[(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Check-In Date",name:"checkInDate",rules:[{required:!0,message:"Check-in date is required!"}],children:(0,f.jsx)(j.A,{style:{width:"100%"}})})}),(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Check-Out Date",name:"checkOutDate",children:(0,f.jsx)(j.A,{style:{width:"100%"}})})})]}),(0,f.jsxs)(d.A,{gutter:[16,0],children:[(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Room Number",name:"roomId",rules:[{required:!0,message:"Room ID is required!"}],children:(0,f.jsx)(u.A,{style:{width:"100%"},placeholder:"Select a room",value:(null===C||void 0===C?void 0:C.value)||void 0,loading:m,filterOption:!1,children:x.map((e=>(0,f.jsx)(g,{value:e.id,children:e.roomNumber},e.id)))})})}),(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Total Price",name:"totalPrice",rules:[{required:!0,message:"Total price is required!"}],children:(0,f.jsx)(y.A,{min:0,style:{width:"100%"}})})})]}),(0,f.jsx)(d.A,{gutter:[16,0],children:(0,f.jsx)(c.A,{xs:24,md:12,children:(0,f.jsx)(v.A.Item,{label:"Status",name:"status",rules:[{required:!0,message:"Status is required!"}],children:(0,f.jsxs)(u.A,{children:[(0,f.jsx)(u.A.Option,{value:"booked",children:"Booked"}),(0,f.jsx)(u.A.Option,{value:"checked-in",children:"Checked-In"}),(0,f.jsx)(u.A.Option,{value:"checked-out",children:"Checked-Out"}),(0,f.jsx)(u.A.Option,{value:"cancelled",children:"Cancelled"})]})})})}),(0,f.jsx)("div",{className:"flex justify-end gap-2 mt-5",children:(0,f.jsx)(o.A,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})})};var C=l(925),O=l(1734),I=l(7043);const{Search:w}=n.A,N=()=>{const[e,t]=(0,r.useState)([]),[l,n]=(0,r.useState)(!1),[x,v]=(0,r.useState)({}),[A,y]=(0,r.useState)(""),[j,g]=(0,r.useState)(""),N=()=>{(async e=>{let{start:t=0,limit:l=10,search:r,status:n}=e;return await b.p.get("/bookings?start=".concat(t,"&limit=").concat(l,"&status=").concat(n||"","&search=").concat(r||""))})({search:A,status:j}).then((e=>{var l;e&&t(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.rows)})).catch((e=>console.log("err",e)))};(0,r.useEffect)((()=>{N()}),[A,j]);const E=[{title:"Name",dataIndex:"customerName",key:"customerName",width:150},{title:"Email",dataIndex:"customerEmail",key:"customerEmail",width:180},{title:"Check In",dataIndex:"checkInDate",key:"checkInDate",width:150,render:e=>p()(e).format("YYYY-MM-DD")},{title:"Check Out",dataIndex:"checkOutDate",key:"checkOutDate",width:150,render:e=>p()(e).format("YYYY-MM-DD")},{title:"Room Number",dataIndex:"Room",width:150,render:e=>e.roomNumber||"-"},{title:"Status",dataIndex:"status",key:"status",width:150},{title:"Action",key:"action",render:(e,t)=>(0,f.jsxs)(s.A,{size:"middle",children:[(0,f.jsx)(o.A,{size:"middle",onClick:()=>v({isOpen:!0,orderId:null===t||void 0===t?void 0:t.id}),children:"Edit"}),(0,f.jsx)(a.A,{title:"Are you sure to delete this Order?",onConfirm:()=>{(async e=>{let{id:t}=e;return await b.p.delete("/bookings/".concat(t))})({id:null===t||void 0===t?void 0:t._id}).then((e=>{i.Ay.success("Order Deleted Successfully"),N()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,f.jsx)(o.A,{danger:!0,size:"middle",children:"Delete"})})]}),width:150}];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O.z,{title:"Bookings",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/bookings",breadcrumbName:"Bookings"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,f.jsx)(C.rQ,{className:"p-3  ",children:(0,f.jsx)(d.A,{gutter:16,children:(0,f.jsx)(c.A,{sm:24,xs:24,lg:24,className:"",children:(0,f.jsx)(I.C,{title:(0,f.jsxs)("div",{className:"flex items-center gap-4",children:[(0,f.jsx)("div",{children:(0,f.jsx)(u.A,{style:{width:120},size:"middle",placeholder:"Status",onChange:e=>{g(e)},options:[{value:"",label:"All"},{value:"booked",label:"booked"},{value:"checked-in",label:"checked-in"},{value:"checked-out",label:"checked-out"},{value:"cancelled",label:"cancelled"}]})}),(0,f.jsx)("div",{children:(0,f.jsx)(w,{placeholder:"search",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{y(e)}})})]}),moreBtn:(0,f.jsx)(o.A,{type:"primary",onClick:()=>n(!0),children:"Add"}),children:(0,f.jsx)(m.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:E,dataSource:e})})})})}),(0,f.jsx)(h.A,{title:l?"Add Order":"Edit Order",destroyOnClose:!0,open:l||x.isOpen,width:1024,footer:!1,onCancel:()=>{n(!1),v({isOpen:!1,orderId:null})},children:(0,f.jsx)(k,{setIsAddOrder:n,getAllOrder:N,isEditOrder:x,setIsEditOrder:v})})]})}},8532:(e,t,l)=>{l.d(t,{FM:()=>a,FN:()=>i,W8:()=>o,hV:()=>s,zF:()=>n});var r=l(2170);const n=async e=>{let{body:t}=e;return await r.p.post("/rooms",t)},s=async e=>{let{start:t=0,limit:l=10}=e;return await r.p.get("/rooms?start=".concat(t,"&limit=").concat(l))},o=async e=>{let{id:t}=e;return await r.p.get("/rooms/".concat(t))},a=async e=>{let{id:t,body:l}=e;return await r.p.patch("/rooms/".concat(t),l)},i=async e=>{let{id:t}=e;return await r.p.delete("/rooms/".concat(t))}},6059:(e,t,l)=>{l.d(t,{A:()=>k});var r=l(8168),n=l(5544),s=l(1376),o=l(4600),a=l.n(o),i=l(8678),d=l(5001),c=l(5043),u=l(5296),m=l(6282),h=l(2701),x=l(1802),p=l(3085),v=l(8046),A=l(8097),y=l(8376),j=l(8986),b=function(e){var t=e.prefixCls,l=e.okButtonProps,n=e.cancelButtonProps,s=e.title,o=e.cancelText,a=e.okText,i=e.okType,d=e.icon,m=e.showCancel,h=void 0===m||m,b=e.close,f=e.onConfirm,g=e.onCancel,k=c.useContext(u.QO).getPrefixCls;return c.createElement(A.A,{componentName:"Popconfirm",defaultLocale:y.A.Popconfirm},(function(e){return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},d&&c.createElement("span",{className:"".concat(t,"-message-icon")},d),c.createElement("div",{className:"".concat(t,"-message-title")},(0,j.b)(s))),c.createElement("div",{className:"".concat(t,"-buttons")},h&&c.createElement(x.A,(0,r.A)({onClick:g,size:"small"},n),null!==o&&void 0!==o?o:e.cancelText),c.createElement(v.A,{buttonProps:(0,r.A)((0,r.A)({size:"small"},(0,p.D)(i)),l),actionFn:f,close:b,prefixCls:k("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==a&&void 0!==a?a:e.okText)))}))},f=void 0,g=function(e,t){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]])}return l};const k=c.forwardRef((function(e,t){var l=e.prefixCls,o=e.placement,x=void 0===o?"top":o,p=e.trigger,v=void 0===p?"click":p,A=e.okType,y=void 0===A?"primary":A,j=e.icon,k=void 0===j?c.createElement(s.A,null):j,C=e.children,O=e.overlayClassName,I=e.onOpenChange,w=e.onVisibleChange,N=g(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),E=c.useContext(u.QO).getPrefixCls,D=(0,i.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),S=(0,n.A)(D,2),q=S[0],P=S[1],T=function(e,t){P(e,!0),null===w||void 0===w||w(e,t),null===I||void 0===I||I(e,t)},R=E("popover",l),z=E("popconfirm",l),B=a()(z,O);return c.createElement(m.A,(0,r.A)({},N,{trigger:v,prefixCls:R,placement:x,onOpenChange:function(t){var l=e.disabled;void 0!==l&&l||T(t)},open:q,ref:t,overlayClassName:B,_overlay:c.createElement(b,(0,r.A)({okType:y,icon:k},e,{prefixCls:R,close:function(e){T(!1,e)},onConfirm:function(t){var l;return null===(l=e.onConfirm)||void 0===l?void 0:l.call(f,t)},onCancel:function(t){var l;T(!1,t),null===(l=e.onCancel)||void 0===l||l.call(f,t)}}))}),(0,h.Ob)(C,{onKeyDown:function(e){var t,l;c.isValidElement(C)&&(null===(l=null===C||void 0===C?void 0:(t=C.props).onKeyDown)||void 0===l||l.call(t,e)),function(e){e.keyCode===d.A.ESC&&q&&T(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=176.96ef897e.chunk.js.map