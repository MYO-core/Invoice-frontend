"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[2870],{42113:(e,t,l)=>{l.d(t,{A:()=>a});l(65043);const a=l.p+"static/media/home.f87e389a5c1850fe48b55156d6a0d7b7.svg"},91734:(e,t,l)=>{l.d(t,{z:()=>x});var a,s,i=l(97775),n=l(35475),r=l(31105),d=l(57528),c=l(67947),o=l(94574);const u=(0,o.Ay)(c.A)(a||(a=(0,d.A)(["\n  .ant-breadcrumb {\n    ol{\n      @media (max-width: 575px) {\n        justify-content: center;\n      }\n    }\n    li{\n        display:flex;\n        align-items:center;\n    }\n  }\n"]))),m=o.Ay.div(s||(s=(0,d.A)(["\n  \n"])));var h=l(70579);function x(e){const{title:t,subTitle:a,routes:s,buttons:d,ghost:c,bgColor:o,className:x}=e,v=s?(0,h.jsx)(i.A,{className:"flex order-2 relative top-1.5",separator:(0,h.jsx)("span",{className:"inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full"}),children:s.map(((e,t)=>t+1===s.length?(0,h.jsx)(i.A.Item,{className:"text-breadcrumbs dark:text-white30 text-15",children:e.breadcrumbName},t):(0,h.jsxs)(i.A.Item,{className:"inline-flex items-start",children:[(0,h.jsx)(r.k,{className:"relative top-0.5 ltr:mr-2 rtl:ml-2 [&>div>svg]:text-[#8c90a4] dark:[&>div>svg]:text-white60 ",src:l(42113).A})," ",(0,h.jsx)(n.N_,{to:e.path,className:"text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm",children:e.breadcrumbName})]},t)))}):"";return(0,h.jsx)(m,{bgColor:o,children:(0,h.jsx)(u,{className:"".concat(x),title:t,subTitle:a,breadcrumb:v,extra:d,ghost:c})})}},62870:(e,t,l)=>{l.r(t),l.d(t,{default:()=>B});var a=l(65043),s=l(33307),i=l(89421),n=l(28440),r=l(47419),d=l(11645),c=l(33946),o=l(37122),u=l(64435),m=l(10444),h=l(48646),x=l(78240),v=l(94406),p=l(50289),A=l(48193),f=l(5397),j=l(3428),g=l(41264),y=l(65256),b=l(94733),C=l(41402),w=l(76191),N=l(61966),k=l(23906),I=l.n(k),S=l(80726),E=l.n(S),O=l(97975),z=l(47807),D=l(70579);const{Option:F}=v.A,_=e=>{let{setisAddCms:t,getAllData:l,setIsEditCms:n,isEditCms:o,currentStore:u}=e;const[m,h]=(0,a.useState)([]),[x,k]=(0,a.useState)(""),[S,_]=(0,a.useState)(!1),[L,q]=(0,a.useState)(),[M,T]=(0,a.useState)(!1),[P,H]=(0,a.useState)(!1),[B,R]=(0,a.useState)(null);console.log("content1Output",B);const[V,K]=(0,a.useState)(null),[W]=p.A.useForm();return(0,a.useEffect)((()=>{null!==o&&void 0!==o&&o.cmsId&&(T(!0),(0,z.W8)({id:null===o||void 0===o?void 0:o.cmsId}).then((e=>{var t,l,a;W.setFieldsValue(null===e||void 0===e?void 0:e.data),K(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.description);const s=null===e||void 0===e||null===(l=e.data)||void 0===l||null===(a=l.media)||void 0===a?void 0:a.filesData;h(s),T(!1)})).catch((e=>{console.log("err",e),T(!1)})))}),[null===o||void 0===o?void 0:o.cmsId]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(f.A,{spinning:M,children:(0,D.jsx)("div",{children:(0,D.jsxs)(p.A,{name:"cms",form:W,layout:"vertical",onFinish:e=>{const a={...e,name:null===e||void 0===e?void 0:e.name,inventory:null===e||void 0===e?void 0:e.inventory,media:{filesData:m},description:V};var s;null!==o&&void 0!==o&&o.cmsId?(0,z.FM)({id:null===o||void 0===o?void 0:o.cmsId,body:a}).then((e=>{n({isOpen:!1,cmsId:""}),l(),A.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e))):(a.store_id=u,null===(s=(0,z.zF)({body:a}))||void 0===s||s.then((e=>{t(!1),l(),A.Ay.success("Data added successfully")})).catch((e=>{console.log("err :>> ",e)})))},autoComplete:"off",children:[(0,D.jsxs)(r.A,{gutter:[16,0],children:[(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsx)(p.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Name is required!"}],children:(0,D.jsx)(s.A,{placeholder:"Enter item name"})})}),(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsx)(p.A.Item,{label:"Item Code",name:"item_code",rules:[{required:!0,message:"Item code is required!"}],children:(0,D.jsx)(s.A,{placeholder:"Enter item code"})})})]}),(0,D.jsxs)(r.A,{gutter:[16,0],children:[(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsx)(p.A.Item,{label:"Category",name:"category",rules:[{required:!0,message:"Category is required!"}],children:(0,D.jsxs)(v.A,{placeholder:"Select category",children:[(0,D.jsx)(F,{value:"food",children:"Food"}),(0,D.jsx)(F,{value:"drink",children:"Drink"}),(0,D.jsx)(F,{value:"snack",children:"Snack"})]})})}),(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsx)(p.A.Item,{label:"Meal Type",name:"meal_type",rules:[{required:!0,message:"Meal type is required!"}],children:(0,D.jsxs)(v.A,{placeholder:"Select meal type",children:[(0,D.jsx)(F,{value:"starter",children:"Starter"}),(0,D.jsx)(F,{value:"lunch",children:"Lunch"}),(0,D.jsx)(F,{value:"main_course",children:"Main Course"}),(0,D.jsx)(F,{value:"dessert",children:"Dessert"}),(0,D.jsx)(F,{value:"side",children:"Side"}),(0,D.jsx)(F,{value:"beverage",children:"Beverage"})]})})})]}),(0,D.jsxs)(r.A,{gutter:[16,0],children:[(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsx)(p.A.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Price is required!"}],children:(0,D.jsx)(j.A,{min:0,step:.01,placeholder:"Enter price",style:{width:"100%"}})})}),(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsx)(p.A.Item,{label:"Availability Status",name:"availability_status",valuePropName:"checked",children:(0,D.jsx)(g.A,{defaultChecked:!0})})})]}),(0,D.jsxs)("div",{className:"mt-4",children:[(0,D.jsx)("label",{children:"Description"}),(0,D.jsx)(I(),{data:V,editor:E(),onChange:(e,t)=>{K(t.getData())}})]}),(0,D.jsx)(r.A,{children:(0,D.jsx)(d.A,{xs:24,md:12,children:(0,D.jsxs)(p.A.Item,{label:"Image",name:"image",children:[(0,D.jsx)(y.A,{onChange:e=>{H(!0);const t=new FormData;t.append("file",e.file.originFileObj),(0,O.V)(t).then((e=>{h((t=>{var l;return[...t,{link:null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.link}]})),H(!1)})).catch((e=>{A.Ay.error("Error while uploading"),H(!1)}))},fileList:[],children:(0,D.jsx)(i.A,{className:"flex items-center",icon:(0,D.jsx)(b.A,{}),children:"Click to Upload"})}),(0,D.jsx)("div",{className:"w-full",style:{maxHeight:"230px",overflowY:"auto"},children:(null===m||void 0===m?void 0:m.length)>0&&(null===m||void 0===m?void 0:m.map((e=>(0,D.jsxs)("div",{className:"flex border rounded-md justify-between items-center p-1 px-3 my-1",children:[(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("span",{className:"mr-2",children:(0,D.jsx)(C.A,{})}),"Product Image"]}),(0,D.jsxs)("div",{className:"flex gap-3 text-base",children:[(0,D.jsx)("div",{className:"cursor-pointer",children:(0,D.jsx)("div",{onClick:()=>{(async e=>{var t;const l=e;k(null===l||void 0===l?void 0:l.link),_(!0),q(null!==l&&void 0!==l&&l.file?null===l||void 0===l||null===(t=l.file)||void 0===t?void 0:t.name:null===l||void 0===l?void 0:l.name)})(e)},children:(0,D.jsx)(w.A,{})})}),(0,D.jsx)("div",{className:"cursor-pointer",children:(0,D.jsx)("div",{onClick:()=>{const t=null===m||void 0===m?void 0:m.filter((t=>{var l;return null!==t&&void 0!==t&&t.file?(null===t||void 0===t||null===(l=t.file)||void 0===l?void 0:l.uid)!==(null===e||void 0===e?void 0:e.id):(null===t||void 0===t?void 0:t.id)!==(null===e||void 0===e?void 0:e.id)}));h(t)},children:(0,D.jsx)(N.A,{style:{color:"red"}})})})]})]},null===e||void 0===e?void 0:e.id))))})]})})}),(0,D.jsxs)("div",{className:"flex justify-end gap-2 mt-5",children:[(0,D.jsx)(i.A,{onClick:()=>{t(!1),n({isOpen:!1,cmsId:""})},children:"Cancel"}),(0,D.jsx)(i.A,{type:"primary",htmlType:"submit",loading:P,children:"Submit"})]})]})})}),(0,D.jsx)(c.A,{width:410,title:L,open:S,footer:null,onCancel:()=>{_(!1),k("")},destroyOnClose:!0,children:(0,D.jsx)("img",{src:x||"",alt:x,style:{width:"400px"}})})]})};var L=l(40925),q=l(91734),M=l(57043),T=l(70495);const{Search:P}=s.A,H={starter:"Starter",lunch:"Lunch",main_course:"Main Course",dessert:"Dessert",side:"Side",beverage:"Beverage"},B=()=>{const[e,t]=(0,a.useState)(!1),[l,s]=(0,a.useState)(0),[v,p]=(0,a.useState)(""),[A,f]=(0,a.useState)({isOpen:!1,cmsId:""}),[j,g]=(0,a.useState)([]),[y,b]=(0,a.useState)(0),[C,w]=(0,o.fp)(T.qt),N=[{title:"#Id",dataIndex:"id",key:"id",width:140},{title:"Name",dataIndex:"name",key:"name",width:140},{title:"Item Code",dataIndex:"item_code",key:"item_code",width:140},{title:"Price",dataIndex:"price",key:"price",width:150},{title:"Category",dataIndex:"category",key:"category",width:150},{title:"Meal Type",dataIndex:"meal_type",width:150,render:(e,t)=>H[t.meal_type]},{title:"Action",key:"action",render:(e,t)=>(0,D.jsxs)(u.A,{size:"middle",children:[(0,D.jsx)(i.A,{size:"small",onClick:()=>f({isOpen:!0,cmsId:null===t||void 0===t?void 0:t.id}),children:(0,D.jsx)(h.A,{})}),(0,D.jsx)(n.A,{title:"Are you sure to delete this Item?",onConfirm:()=>{(0,z.FN)({id:null===t||void 0===t?void 0:t._id}).then((e=>{console.log("res",e),message.success("Deleted Successfully"),k()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,D.jsx)(i.A,{danger:!0,size:"small",children:(0,D.jsx)(x.A,{})})})]}),width:150}],k=()=>{(0,z.hV)({start:l,limit:10,search:v}).then((e=>{var t,l;e&&(g(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows),b(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.count))})).catch((e=>console.log("err",e)))};(0,a.useEffect)((()=>{k()}),[v,l]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.z,{title:"Items",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/products",breadcrumbName:"Products"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,D.jsx)(L.rQ,{className:"p-3",children:(0,D.jsx)(r.A,{gutter:16,children:(0,D.jsx)(d.A,{sm:24,xs:24,lg:24,className:"",children:(0,D.jsx)(M.C,{title:(0,D.jsxs)("div",{className:"flex items-center gap-4",children:[(0,D.jsx)("div",{}),(0,D.jsx)("div",{children:(0,D.jsx)(P,{placeholder:"Name or code",allowClear:!0,enterButton:"Search",size:"middle",onSearch:e=>{p(e)}})})]}),moreBtn:(0,D.jsx)(i.A,{type:"primary",onClick:()=>t(!0),children:"Add"}),children:(0,D.jsx)(m.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:N,dataSource:j,pagination:{pageSize:10,total:y,showSizeChanger:!1},onChange:e=>{const{current:t}=e;s(10*(t-1))}})})})})}),(0,D.jsx)(c.A,{title:"".concat(e?"Add":"Edit"),destroyOnClose:!0,open:e||A.isOpen,width:1024,footer:!1,onCancel:()=>{t(!1),f({isOpen:!1,cmsId:""})},children:(0,D.jsx)(_,{setisAddCms:t,getAllData:k,isEditCms:A,setIsEditCms:f,currentStore:C})})]})}},47807:(e,t,l)=>{l.d(t,{FM:()=>r,FN:()=>d,W8:()=>n,hV:()=>i,zF:()=>s});var a=l(32170);const s=async e=>{let{body:t}=e;return await a.p.post("/restroItems",t)},i=async e=>{let{start:t=0,limit:l=10,search:s}=e,i=s?"&search=".concat(s):"";return await a.p.get("/restroItems?start=".concat(t,"&limit=").concat(l).concat(i))},n=async e=>{let{id:t}=e;return await a.p.get("/restroItems/".concat(t))},r=async e=>{let{id:t,body:l}=e;return await a.p.patch("/restroItems/".concat(t),l)},d=async e=>{let{id:t}=e;return await a.p.delete("/restroItems/".concat(t))}},97975:(e,t,l)=>{l.d(t,{V:()=>s});var a=l(32170);const s=async e=>await a.p.post("/upload",e)},78240:(e,t,l)=>{l.d(t,{A:()=>d});var a=l(89379),s=l(65043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"};var n=l(22172),r=function(e,t){return s.createElement(n.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:i}))};r.displayName="DeleteFilled";const d=s.forwardRef(r)},48646:(e,t,l)=>{l.d(t,{A:()=>d});var a=l(89379),s=l(65043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"};var n=l(22172),r=function(e,t){return s.createElement(n.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:i}))};r.displayName="EditFilled";const d=s.forwardRef(r)},41402:(e,t,l)=>{l.d(t,{A:()=>d});var a=l(89379),s=l(65043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};var n=l(22172),r=function(e,t){return s.createElement(n.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:i}))};r.displayName="LinkOutlined";const d=s.forwardRef(r)},41264:(e,t,l)=>{l.d(t,{A:()=>y});var a=l(58168),s=l(64467),i=l(40164),n=l(64600),r=l.n(n),d=l(5544),c=l(80045),o=l(65043),u=l(28678),m=l(25001),h=o.forwardRef((function(e,t){var l,a=e.prefixCls,i=void 0===a?"rc-switch":a,n=e.className,h=e.checked,x=e.defaultChecked,v=e.disabled,p=e.loadingIcon,A=e.checkedChildren,f=e.unCheckedChildren,j=e.onClick,g=e.onChange,y=e.onKeyDown,b=(0,c.A)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,u.A)(!1,{value:h,defaultValue:x}),w=(0,d.A)(C,2),N=w[0],k=w[1];function I(e,t){var l=N;return v||(k(l=e),null===g||void 0===g||g(l,t)),l}var S=r()(i,n,(l={},(0,s.A)(l,"".concat(i,"-checked"),N),(0,s.A)(l,"".concat(i,"-disabled"),v),l));return o.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":N,disabled:v,className:S,ref:t,onKeyDown:function(e){e.which===m.A.LEFT?I(!1,e):e.which===m.A.RIGHT&&I(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var t=I(!N,e);null===j||void 0===j||j(t,e)}}),p,o.createElement("span",{className:"".concat(i,"-inner")},N?A:f))}));h.displayName="Switch";const x=h;var v=l(35296),p=l(78440),A=l(87063),f=l(16021),j=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(l[a[s]]=e[a[s]])}return l},g=o.forwardRef((function(e,t){var l,n=e.prefixCls,d=e.size,c=e.disabled,u=e.loading,m=e.className,h=void 0===m?"":m,g=j(e,["prefixCls","size","disabled","loading","className"]),y=o.useContext(v.QO),b=y.getPrefixCls,C=y.direction,w=o.useContext(A.A),N=o.useContext(p.A),k=(null!==c&&void 0!==c?c:N)||u,I=b("switch",n),S=o.createElement("div",{className:"".concat(I,"-handle")},u&&o.createElement(i.A,{className:"".concat(I,"-loading-icon")})),E=r()((l={},(0,s.A)(l,"".concat(I,"-small"),"small"===(d||w)),(0,s.A)(l,"".concat(I,"-loading"),u),(0,s.A)(l,"".concat(I,"-rtl"),"rtl"===C),l),h);return o.createElement(f.A,{insertExtraNode:!0},o.createElement(x,(0,a.A)({},g,{prefixCls:I,className:E,disabled:k,ref:t,loadingIcon:S})))}));g.__ANT_SWITCH=!0;const y=g}}]);
//# sourceMappingURL=2870.2e5891be.chunk.js.map