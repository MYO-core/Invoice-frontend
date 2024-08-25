"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[221],{1221:(e,t,l)=>{l.r(t),l.d(t,{default:()=>K});var s=l(5043),n=l(7122),a=l(3307),i=l(9800),r=l(1645),o=l(4406),c=l(1802),d=l(2217),u=l(289),m=l(8193),p=l(5397),h=l(3428),v=l(1966),x=l(2170);var b=l(579);const{Option:f}=o.A,A=e=>{let{setisAddCms:t,getAllData:l,setIsEditCms:n,isEditCms:d,currentStore:A}=e;const[j,y]=(0,s.useState)(!1),[g]=u.A.useForm();return(0,s.useEffect)((()=>{null!==d&&void 0!==d&&d.cmsId&&(y(!0),(async e=>{let{id:t}=e;return await x.p.get("/tables/".concat(t))})({id:null===d||void 0===d?void 0:d.cmsId}).then((e=>{g.setFieldsValue({tables:[null===e||void 0===e?void 0:e.data]}),y(!1)})).catch((e=>{console.log("err",e),y(!1)})))}),[null===d||void 0===d?void 0:d.cmsId]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(p.A,{spinning:j,children:(0,b.jsx)("div",{children:(0,b.jsxs)(u.A,{form:g,layout:"vertical",onFinish:e=>{const s=e.tables.map((e=>({...e,store_id:A})));if(null!==d&&void 0!==d&&d.cmsId){var a,i,r;let e={no_of_seats:null===(a=s[0])||void 0===a?void 0:a.no_of_seats,status:null===(i=s[0])||void 0===i?void 0:i.status,table_number:null===(r=s[0])||void 0===r?void 0:r.table_number};(async e=>{let{id:t,body:l}=e;return await x.p.patch("/tables/".concat(t),l)})({id:null===d||void 0===d?void 0:d.cmsId,body:e}).then((e=>{n({isOpen:!1,cmsId:""}),l(),m.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e)))}else{var o;null===(o=(async e=>{let{body:t}=e;return await x.p.post("/tables",t)})({body:s}))||void 0===o||o.then((e=>{t(!1),l(),m.Ay.success("Tables added successfully")})).catch((e=>{console.log("err :>> ",e)}))}},initialValues:{tables:[{status:"booked"}]},children:[(0,b.jsx)(u.A.List,{name:"tables",children:(e,t)=>{let{add:l,remove:s}=t;return(0,b.jsxs)(b.Fragment,{children:[e.map(((t,l)=>(0,b.jsx)("div",{style:{marginBottom:20},children:(0,b.jsxs)(i.A,{gutter:16,align:"middle",children:[(0,b.jsx)(r.A,{span:8,children:(0,b.jsx)(u.A.Item,{...t,label:"Table Number ".concat(l+1),name:[t.name,"table_number"],fieldKey:[t.fieldKey,"table_number"],rules:[{type:"string",message:"Table number must be a string."}],children:(0,b.jsx)(a.A,{placeholder:"Enter table number"})})}),(0,b.jsx)(r.A,{span:8,children:(0,b.jsx)(u.A.Item,{...t,label:"Number of Seats",name:[t.name,"no_of_seats"],fieldKey:[t.fieldKey,"no_of_seats"],rules:[{required:!0,message:"Please enter the number of seats."},{type:"number",min:1,message:"Number of seats must be at least 1."}],children:(0,b.jsx)(h.A,{min:1,placeholder:"Enter number of seats",style:{width:"100%"}})})}),(0,b.jsx)(r.A,{span:6,children:(0,b.jsx)(u.A.Item,{...t,label:"Status",name:[t.name,"status"],fieldKey:[t.fieldKey,"status"],rules:[{required:!0,message:"Please select the status."}],children:(0,b.jsxs)(o.A,{placeholder:"Select status",children:[(0,b.jsx)(f,{value:"available",children:"Available"}),(0,b.jsx)(f,{value:"booked",children:"Booked"}),(0,b.jsx)(f,{value:"service",children:"Service"}),(0,b.jsx)(f,{value:"preparing",children:"Preparing"})]})})}),(0,b.jsx)(r.A,{span:2,children:e.length>1&&(0,b.jsx)(v.A,{onClick:()=>s(t.name),style:{fontSize:"20px",color:"#ff4d4f",cursor:"pointer",marginTop:"30px"}})})]})},t.key))),!(null!==d&&void 0!==d&&d.cmsId)&&(0,b.jsx)(u.A.Item,{children:(0,b.jsx)(c.A,{type:"dashed",onClick:()=>l(),style:{width:"60%"},block:!0,children:"Add Another Table"})})]})}}),(0,b.jsxs)(u.A.Item,{style:{textAlign:"right"},children:[(0,b.jsx)(c.A,{onClick:()=>t(!1),style:{marginRight:8},children:"Cancel"}),(0,b.jsx)(c.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})})})};var j=l(7047),y=l(1068),g=l(2013),C=l(8387),O=l(6059),k=l(8646),E=l(8240);const{Text:w,Title:S}=j.A,{Panel:N}=y.A,T=e=>{let{allData:t,setIsEditCms:l}=e;return(0,b.jsx)("div",{style:{padding:"1px"},children:(0,b.jsx)(i.A,{gutter:[16,16],children:t.map((e=>(0,b.jsx)(r.A,{xs:24,sm:12,md:8,lg:6,children:(0,b.jsxs)(g.A,{title:(0,b.jsxs)(S,{level:5,children:["Table No:- ",e.table_number]}),bordered:!1,style:{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"8px"},children:[(0,b.jsx)(w,{strong:!0,children:"#ID: "}),(0,b.jsx)(w,{children:e.id}),(0,b.jsx)("br",{}),(0,b.jsx)(w,{strong:!0,children:"Total Seats: "}),(0,b.jsx)(w,{children:e.no_of_seats}),(0,b.jsx)("br",{}),(0,b.jsx)(w,{strong:!0,children:"Status: "}),"available"===e.status?(0,b.jsx)(C.A,{color:"green",children:e.status}):(0,b.jsx)(C.A,{color:"red",children:e.status}),(0,b.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,b.jsx)(k.A,{onClick:()=>l({isOpen:!0,cmsId:null===e||void 0===e?void 0:e.id}),style:{cursor:"pointer",color:"#1890ff"}}),(0,b.jsx)(O.A,{title:"Are you sure to delete this Room?",onConfirm:()=>{},okText:"Yes",cancelText:"No"}),(0,b.jsx)(E.A,{onClick:()=>{},style:{cursor:"pointer",color:"#ff4d4f"}})]})]})},e.id)))})})};var _=l(925),I=l(1734),P=l(7043),D=l(495);const{Search:z}=a.A,K=()=>{const[e,t]=(0,s.useState)(!1),[l,a]=(0,s.useState)(0),[u,m]=(0,s.useState)(""),[p,h]=(0,s.useState)(""),[v,f]=(0,n.fp)(D.qt),[j,y]=(0,s.useState)(!1),[g,C]=(0,s.useState)({isOpen:!1,cmsId:""}),[O,k]=(0,s.useState)([]),E=e=>{let{search:t,type:s,isAvailable:n}=e;(async e=>{let{start:t=0,limit:l=10,search:s,type:n,isAvailable:a,store_id:i}=e,r=s?"&search=".concat(s):"",o=n?"&roomType=".concat(n):"",c=i?"&store_id=".concat(i):"",d=a?"&isAvailable=".concat(a):"";return await x.p.get("/tables?start=".concat(t,"&limit=").concat(l).concat(r).concat(o).concat(d).concat(c))})({start:l,limit:10,search:t,type:s,isAvailable:n,store_id:v}).then((e=>{var t;e&&k(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)})).catch((e=>console.log("err",e)))};(0,s.useEffect)((()=>{E({search:u,type:p,isAvailable:j})}),[u,p,j,v]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(I.z,{title:"Rooms",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/tables",breadcrumbName:"Tables"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,b.jsx)(_.rQ,{className:"p-3",children:(0,b.jsx)(i.A,{gutter:16,children:(0,b.jsx)(r.A,{sm:24,xs:24,lg:24,className:"",children:(0,b.jsx)(P.C,{title:(0,b.jsx)("div",{className:"flex items-center gap-4",children:(0,b.jsx)("div",{children:(0,b.jsxs)(o.A,{style:{width:120},size:"medium",placeholder:"Status",onChange:e=>{h(e)},children:[(0,b.jsx)(Option,{value:"",children:"All"}),(0,b.jsx)(Option,{value:"booked",children:"Booked"}),(0,b.jsx)(Option,{value:"available",children:"Available"}),(0,b.jsx)(Option,{value:"service",children:"Service"}),(0,b.jsx)(Option,{value:"preparing",children:"Preparing"})]})})}),moreBtn:(0,b.jsx)(c.A,{type:"primary",onClick:()=>t(!0),children:"Add"}),children:(0,b.jsx)(T,{allData:O,setIsEditCms:C})})})})}),(0,b.jsx)(d.A,{title:"".concat(e?"Add":"Edit"),destroyOnClose:!0,open:e||g.isOpen,width:1024,footer:!1,onCancel:()=>{t(!1),C({isOpen:!1,cmsId:""})},children:(0,b.jsx)(A,{setisAddCms:t,getAllData:E,isEditCms:g,setIsEditCms:C,currentStore:v})})]})}},1966:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(9379),n=l(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var i=l(2172),r=function(e,t){return n.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:a}))};r.displayName="DeleteOutlined";const o=n.forwardRef(r)},6059:(e,t,l)=>{l.d(t,{A:()=>C});var s=l(8168),n=l(5544),a=l(1376),i=l(4600),r=l.n(i),o=l(8678),c=l(5001),d=l(5043),u=l(5296),m=l(6282),p=l(2701),h=l(1802),v=l(3085),x=l(8046),b=l(8097),f=l(8376),A=l(8986),j=function(e){var t=e.prefixCls,l=e.okButtonProps,n=e.cancelButtonProps,a=e.title,i=e.cancelText,r=e.okText,o=e.okType,c=e.icon,m=e.showCancel,p=void 0===m||m,j=e.close,y=e.onConfirm,g=e.onCancel,C=d.useContext(u.QO).getPrefixCls;return d.createElement(b.A,{componentName:"Popconfirm",defaultLocale:f.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,A.b)(a))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(h.A,(0,s.A)({onClick:g,size:"small"},n),null!==i&&void 0!==i?i:e.cancelText),d.createElement(x.A,{buttonProps:(0,s.A)((0,s.A)({size:"small"},(0,v.D)(o)),l),actionFn:y,close:j,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==r&&void 0!==r?r:e.okText)))}))},y=void 0,g=function(e,t){var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(l[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(l[s[n]]=e[s[n]])}return l};const C=d.forwardRef((function(e,t){var l=e.prefixCls,i=e.placement,h=void 0===i?"top":i,v=e.trigger,x=void 0===v?"click":v,b=e.okType,f=void 0===b?"primary":b,A=e.icon,C=void 0===A?d.createElement(a.A,null):A,O=e.children,k=e.overlayClassName,E=e.onOpenChange,w=e.onVisibleChange,S=g(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.QO).getPrefixCls,T=(0,o.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),_=(0,n.A)(T,2),I=_[0],P=_[1],D=function(e,t){P(e,!0),null===w||void 0===w||w(e,t),null===E||void 0===E||E(e,t)},z=N("popover",l),K=N("popconfirm",l),V=r()(K,k);return d.createElement(m.A,(0,s.A)({},S,{trigger:x,prefixCls:z,placement:h,onOpenChange:function(t){var l=e.disabled;void 0!==l&&l||D(t)},open:I,ref:t,overlayClassName:V,_overlay:d.createElement(j,(0,s.A)({okType:f,icon:C},e,{prefixCls:z,close:function(e){D(!1,e)},onConfirm:function(t){var l;return null===(l=e.onConfirm)||void 0===l?void 0:l.call(y,t)},onCancel:function(t){var l;D(!1,t),null===(l=e.onCancel)||void 0===l||l.call(y,t)}}))}),(0,p.Ob)(O,{onKeyDown:function(e){var t,l;d.isValidElement(O)&&(null===(l=null===O||void 0===O?void 0:(t=O.props).onKeyDown)||void 0===l||l.call(t,e)),function(e){e.keyCode===c.A.ESC&&I&&D(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=221.e535cc09.chunk.js.map