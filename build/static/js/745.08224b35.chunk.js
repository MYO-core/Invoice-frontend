"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[745],{70745:(e,l,s)=>{s.r(l),s.d(l,{default:()=>q});var t=s(65043),i=s(89421),n=s(28440),d=s(47419),a=s(11645),c=s(33946),r=s(64435),o=s(10444),u=s(48646),m=s(78240),v=s(94406),h=s(50289),x=s(48193),p=s(5397),A=s(33307),j=s(65256),f=s(94733),y=s(41402),g=s(76191),b=s(61966),w=s(23906),I=s.n(w),C=s(80726),k=s.n(C),N=s(97975),S=s(32170);var z=s(70579);const{Option:D}=v.A,E=e=>{let{setisAddCms:l,getAllData:s,setIsEditCms:n,isEditCms:r}=e;const[o,u]=(0,t.useState)([]),[m,v]=(0,t.useState)(""),[w,C]=(0,t.useState)(!1),[D,E]=(0,t.useState)(),[O,L]=(0,t.useState)(!1),[F,q]=(0,t.useState)(!1),[H,R]=(0,t.useState)(null);console.log("content1Output",H);const[P,_]=(0,t.useState)(null),[B]=h.A.useForm();return(0,t.useEffect)((()=>{null!==r&&void 0!==r&&r.cmsId&&(L(!0),(async e=>{let{id:l}=e;return await S.p.get("/products/".concat(l))})({id:null===r||void 0===r?void 0:r.cmsId}).then((e=>{var l,s,t;B.setFieldsValue(null===e||void 0===e?void 0:e.data),_(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.description);const i=null===e||void 0===e||null===(s=e.data)||void 0===s||null===(t=s.media)||void 0===t?void 0:t.filesData;u(i),L(!1)})).catch((e=>{console.log("err",e),L(!1)})))}),[null===r||void 0===r?void 0:r.cmsId]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(p.A,{spinning:O,children:(0,z.jsx)("div",{children:(0,z.jsxs)(h.A,{name:"cms",form:B,layout:"vertical",onFinish:e=>{const t={name:null===e||void 0===e?void 0:e.name,inventory:null===e||void 0===e?void 0:e.inventory,media:{filesData:o},description:P};var i;null!==r&&void 0!==r&&r.cmsId?(async e=>{let{id:l,body:s}=e;return await S.p.patch("/products/".concat(l),s)})({id:null===r||void 0===r?void 0:r.cmsId,body:t}).then((e=>{n({isOpen:!1,cmsId:""}),s(),x.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e))):null===(i=(async e=>{let{body:l}=e;return await S.p.post("/products",l)})({body:t}))||void 0===i||i.then((e=>{l(!1),s(),x.Ay.success("Data added successfully")})).catch((e=>{console.log("err :>> ",e)}))},autoComplete:"off",children:[(0,z.jsxs)(d.A,{gutter:[16,0],children:[(0,z.jsx)(a.A,{xs:24,md:12,children:(0,z.jsx)(h.A.Item,{label:"name",name:"name",rules:[{required:!0,message:"Required! "}],children:(0,z.jsx)(A.A,{})})}),(0,z.jsx)(a.A,{span:12,children:(0,z.jsx)(h.A.Item,{label:"Inventory",name:"inventory",rules:[{required:!0,message:"inventory is required!"}],children:(0,z.jsx)(A.A,{})})})]}),(0,z.jsxs)(d.A,{gutter:[16,0],children:[(0,z.jsx)(a.A,{xs:24,md:12,children:(0,z.jsx)(h.A.Item,{label:"Actual Price",name:"actual_price",rules:[{required:!0,message:"Required! "}],children:(0,z.jsx)(A.A,{})})}),(0,z.jsx)(a.A,{span:12,children:(0,z.jsx)(h.A.Item,{label:"Retail Price",name:"retail_price",rules:[{required:!0,message:"inventory is required!"}],children:(0,z.jsx)(A.A,{})})})]}),(0,z.jsxs)("div",{className:"mt-4",children:[(0,z.jsx)("label",{children:"Description"}),(0,z.jsx)(I(),{data:P,editor:k(),onChange:(e,l)=>{_(l.getData())}})]}),(0,z.jsx)(d.A,{children:(0,z.jsx)(a.A,{xs:24,md:12,children:(0,z.jsxs)(h.A.Item,{label:"Image",name:"image",children:[(0,z.jsx)(j.A,{onChange:e=>{q(!0);const l=new FormData;l.append("file",e.file.originFileObj),(0,N.V)(l).then((e=>{u((l=>{var s;return[...l,{link:null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.link}]})),q(!1)})).catch((e=>{x.Ay.error("Error while uploading"),q(!1)}))},fileList:[],children:(0,z.jsx)(i.A,{className:"flex items-center",icon:(0,z.jsx)(f.A,{}),children:"Click to Upload"})}),(0,z.jsx)("div",{className:"w-full",style:{maxHeight:"230px",overflowY:"auto"},children:(null===o||void 0===o?void 0:o.length)>0&&(null===o||void 0===o?void 0:o.map((e=>(0,z.jsxs)("div",{className:"flex border rounded-md justify-between items-center p-1 px-3 my-1",children:[(0,z.jsxs)("div",{className:"flex",children:[(0,z.jsx)("span",{className:"mr-2",children:(0,z.jsx)(y.A,{})}),"Product Image"]}),(0,z.jsxs)("div",{className:"flex gap-3 text-base",children:[(0,z.jsx)("div",{className:"cursor-pointer",children:(0,z.jsx)("div",{onClick:()=>{(async e=>{var l;const s=e;v(null===s||void 0===s?void 0:s.link),C(!0),E(null!==s&&void 0!==s&&s.file?null===s||void 0===s||null===(l=s.file)||void 0===l?void 0:l.name:null===s||void 0===s?void 0:s.name)})(e)},children:(0,z.jsx)(g.A,{})})}),(0,z.jsx)("div",{className:"cursor-pointer",children:(0,z.jsx)("div",{onClick:()=>{const l=null===o||void 0===o?void 0:o.filter((l=>{var s;return null!==l&&void 0!==l&&l.file?(null===l||void 0===l||null===(s=l.file)||void 0===s?void 0:s.uid)!==(null===e||void 0===e?void 0:e.id):(null===l||void 0===l?void 0:l.id)!==(null===e||void 0===e?void 0:e.id)}));u(l)},children:(0,z.jsx)(b.A,{style:{color:"red"}})})})]})]},null===e||void 0===e?void 0:e.id))))})]})})}),(0,z.jsxs)("div",{className:"flex justify-end gap-2 mt-5",children:[(0,z.jsx)(i.A,{onClick:()=>{l(!1),n({isOpen:!1,cmsId:""})},children:"Cancel"}),(0,z.jsx)(i.A,{type:"primary",htmlType:"submit",loading:F,children:"Submit"})]})]})})}),(0,z.jsx)(c.A,{width:410,title:D,open:w,footer:null,onCancel:()=>{C(!1),v("")},destroyOnClose:!0,children:(0,z.jsx)("img",{src:m||"",alt:m,style:{width:"400px"}})})]})};var O=s(40925),L=s(91734),F=s(57043);const q=()=>{const[e,l]=(0,t.useState)(!1),[s,v]=(0,t.useState)(0),[h,x]=(0,t.useState)({isOpen:!1,cmsId:""}),[p,A]=(0,t.useState)([]),j=[{title:"#Id",dataIndex:"id",key:"id",width:140},{title:"Name",dataIndex:"name",key:"name",width:140},{title:"Inventory",dataIndex:"inventory",key:"inventroy",width:150},{title:"Action",key:"action",render:(e,l)=>(0,z.jsxs)(r.A,{size:"middle",children:[(0,z.jsx)(i.A,{size:"small",onClick:()=>x({isOpen:!0,cmsId:null===l||void 0===l?void 0:l.id}),children:(0,z.jsx)(u.A,{})}),(0,z.jsx)(n.A,{title:"Are you sure to delete this task?",onConfirm:()=>{(async e=>{let{id:l}=e;return await S.p.delete("/products/".concat(l))})({id:null===l||void 0===l?void 0:l._id}).then((e=>{console.log("res",e),message.success("Deleted Successfully"),f()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,z.jsx)(i.A,{danger:!0,size:"small",children:(0,z.jsx)(m.A,{})})})]}),width:150}],f=()=>{(async e=>{let{start:l,limit:s}=e;return await S.p.get("/products?start=".concat(l,"&limit=").concat(s))})({start:s,limit:10}).then((e=>{var l;e&&A(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.rows)})).catch((e=>console.log("err",e)))};return(0,t.useEffect)((()=>{f()}),[]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(L.z,{title:"Products",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/products",breadcrumbName:"Products"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,z.jsx)(O.rQ,{className:"p-3",children:(0,z.jsx)(d.A,{gutter:16,children:(0,z.jsx)(a.A,{sm:24,xs:24,lg:24,className:"",children:(0,z.jsx)(F.C,{moreBtn:(0,z.jsx)(i.A,{type:"primary",onClick:()=>l(!0),children:"Add"}),border:!1,size:"default",children:(0,z.jsx)(o.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:j,dataSource:p})})})})}),(0,z.jsx)(c.A,{title:"".concat(e?"Add":"Edit"),destroyOnClose:!0,open:e||h.isOpen,width:1024,footer:!1,onCancel:()=>{l(!1),x({isOpen:!1,cmsId:""})},children:(0,z.jsx)(E,{setisAddCms:l,getAllData:f,isEditCms:h,setIsEditCms:x})})]})}},97975:(e,l,s)=>{s.d(l,{V:()=>i});var t=s(32170);const i=async e=>await t.p.post("/upload",e)},78240:(e,l,s)=>{s.d(l,{A:()=>c});var t=s(89379),i=s(65043);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"};var d=s(22172),a=function(e,l){return i.createElement(d.A,(0,t.A)((0,t.A)({},e),{},{ref:l,icon:n}))};a.displayName="DeleteFilled";const c=i.forwardRef(a)},48646:(e,l,s)=>{s.d(l,{A:()=>c});var t=s(89379),i=s(65043);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"};var d=s(22172),a=function(e,l){return i.createElement(d.A,(0,t.A)((0,t.A)({},e),{},{ref:l,icon:n}))};a.displayName="EditFilled";const c=i.forwardRef(a)},41402:(e,l,s)=>{s.d(l,{A:()=>c});var t=s(89379),i=s(65043);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};var d=s(22172),a=function(e,l){return i.createElement(d.A,(0,t.A)((0,t.A)({},e),{},{ref:l,icon:n}))};a.displayName="LinkOutlined";const c=i.forwardRef(a)}}]);
//# sourceMappingURL=745.08224b35.chunk.js.map