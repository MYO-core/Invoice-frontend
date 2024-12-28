"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[1679],{78845:(e,t,s)=>{s.r(t),s.d(t,{default:()=>U});var l=s(65043),i=s(33307),n=s(30912),a=s(89421),r=s(28440),d=s(47419),c=s(11645),o=s(94406),m=s(33946),u=s(37122),h=s(64435),x=s(10444),p=s(86178),g=s.n(p),j=s(48646),v=s(78240),A=s(50289),b=s(48193),y=s(5397),_=s(3428),f=s(88655),S=s(45904),I=s(65239),w=s.n(I),C=s(53815),k=s(47807),N=s(2543),P=s(89680),O=s(19662),F=s(70579);const{Option:D}=o.A,V=e=>{let{setisAddCms:t,getAllData:s,setIsEditCms:n,isEditCms:r,currentStore:m}=e;const[u,h]=(0,l.useState)(!1),[x,p]=(0,l.useState)([]),[g,j]=(0,l.useState)(""),[v,I]=(0,l.useState)(!1),[V,z]=(0,l.useState)([]),[E,q]=(0,l.useState)({orderNumber:"",tableNumber:"",items:[],subtotal:0,tax:0,total:0}),[T]=A.A.useForm();(0,l.useEffect)((()=>{null!==r&&void 0!==r&&r.cmsId&&(h(!0),(0,C.W8)({id:null===r||void 0===r?void 0:r.cmsId}).then((e=>{T.setFieldsValue(null===e||void 0===e?void 0:e.data);let t=null===e||void 0===e?void 0:e.data,s={orderNumber:t.id,customer_name:t.customer_name,tableNumber:t.table_number,items:t.order_items,subtotal:t.total_price||0,tax:t.tax_precent||0,total:t.total_price||0,organisation:t.Organisation,store:t.Store,user:t.User};q(s),h(!1)})).catch((e=>{var t;b.Ay.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Something Went Wrong"),console.log("err",e),h(!1)})))}),[null===r||void 0===r?void 0:r.cmsId]),(0,l.useEffect)((()=>{(0,k.hV)({search:g}).then((e=>{p(e.data.rows)})).catch((e=>{b.Ay.error("Error While Fetching Items")}))}),[g]),(0,l.useEffect)((()=>{(0,N.xH)({}).then((e=>{z(e.data.rows)})).catch((e=>{b.Ay.error("Error While Fetching Items")}))}),[]);const H=()=>{var e;let t=T.getFieldsValue(["order_items"]),s=0;null===t||void 0===t||null===(e=t.order_items)||void 0===e||e.map((e=>{let t=Number(null===e||void 0===e?void 0:e.price)*Number(null===e||void 0===e?void 0:e.quantity);s+=t}));let l=T.getFieldValue("tax_precent"),i=T.getFieldValue("discount_precent");s+=.01*l*s,s-=.01*i*s,T.setFieldValue("total_price",s)},W=async e=>{h(!0),(0,C.W8)({id:e}).then((e=>{T.setFieldsValue(null===e||void 0===e?void 0:e.data);let t=null===e||void 0===e?void 0:e.data,s={orderNumber:t.id,customer_name:t.customer_name,tableNumber:t.table_id,items:t.order_items,subtotal:t.total_price||0,tax:t.tax_precent||0,total:t.total_price||0,organisation:t.Organisation,store:t.Store,user:t.User};q(s),h(!1)})).catch((e=>{var t;b.Ay.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Something Went Wrong"),console.log("err",e),h(!1)}))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(y.A,{spinning:u,children:(0,F.jsx)("div",{children:(0,F.jsxs)(A.A,{name:"order",form:T,layout:"vertical",onFinish:e=>{const l=e;var i;(l.table_id=null===l||void 0===l?void 0:l.table_id.toString(),null!==r&&void 0!==r&&r.cmsId)?(0,C.FM)({id:null===r||void 0===r?void 0:r.cmsId,body:l}).then((e=>{n({isOpen:!1,cmsId:""}),s(),b.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e))):(l.store_id=m,null===(i=(0,C.zF)({body:l}))||void 0===i||i.then((e=>{t(!1),s(),b.Ay.success("Data added successfully")})).catch((e=>{console.log("err :>> ",e)})))},onChange:H,autoComplete:"off",children:[(0,F.jsxs)(d.A,{gutter:16,children:[(0,F.jsx)(c.A,{span:12,children:(0,F.jsx)(A.A.Item,{label:"Table number",name:"table_id",rules:[{required:!0,message:"Please select the table ID"}],children:(0,F.jsx)(o.A,{children:V.map((e=>(0,F.jsxs)(D,{value:e.id,children:[e.table_number," - "," ("+e.no_of_seats+" Seater )"]})))})})}),(0,F.jsx)(c.A,{span:12,children:(0,F.jsx)(A.A.Item,{label:"Customer Name",name:"customer_name",children:(0,F.jsx)(i.A,{})})})]}),(0,F.jsxs)(d.A,{gutter:16,children:[(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:8,children:(0,F.jsx)(A.A.Item,{label:"Total Price",name:"total_price",rules:[{required:!0,message:"Please enter the total price"}],children:(0,F.jsx)(_.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:8,children:(0,F.jsx)(A.A.Item,{label:"Discount Percent",name:"discount_precent",initialValue:0,children:(0,F.jsx)(_.A,{min:0,max:100,precision:2,style:{width:"100%"}})})}),(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:8,children:(0,F.jsx)(A.A.Item,{label:"Tax Percent",name:"tax_precent",initialValue:0,children:(0,F.jsx)(_.A,{min:0,max:100,precision:2,style:{width:"100%"}})})})]}),(0,F.jsx)(d.A,{gutter:16,children:(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:8,children:(0,F.jsx)(A.A.Item,{label:"Order Status",name:"status",initialValue:"pending",children:(0,F.jsxs)(o.A,{children:[(0,F.jsx)(D,{value:"pending",children:"Pending"}),(0,F.jsx)(D,{value:"preparing",children:"Preparing"}),(0,F.jsx)(D,{value:"served",children:"Served"}),(0,F.jsx)(D,{value:"paid",children:"Paid"}),(0,F.jsx)(D,{value:"canceled",children:"Canceled"})]})})})}),(0,F.jsx)(A.A.List,{name:"order_items",children:(e,t)=>{let{add:s,remove:l}=t;return(0,F.jsxs)(F.Fragment,{children:[e.map((e=>{let{key:t,name:s,fieldKey:n,...a}=e;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("hr",{style:{margin:"20px 0",borderColor:"#e8e8e8"}}),(0,F.jsxs)(d.A,{gutter:16,align:"middle",children:[(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:6,children:(0,F.jsx)(A.A.Item,{...a,name:[s,"item_id"],fieldKey:[n,"item_id"],label:"Item Code",rules:[{required:!0,message:"Please select the item ID"}],children:(0,F.jsx)(o.A,{showSearch:!0,onSearch:e=>{j(e)},onChange:e=>{const t=x.find((t=>t.id===e));T.setFieldsValue({order_items:{[s]:{item_name:null===t||void 0===t?void 0:t.name,price:null===t||void 0===t?void 0:t.price,quantity:1}}}),H()},children:x.map((e=>(0,F.jsxs)(D,{value:e.id,children:[e.item_code," - ",e.name]},e.id)))})})}),(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:6,children:(0,F.jsx)(A.A.Item,{...a,name:[s,"item_name"],fieldKey:[n,"item_name"],label:"Item Name",rules:[{required:!0,message:"Please enter the item name"}],children:(0,F.jsx)(i.A,{})})}),(0,F.jsx)(c.A,{xs:8,sm:12,md:12,lg:4,children:(0,F.jsx)(A.A.Item,{...a,name:[s,"quantity"],fieldKey:[n,"quantity"],label:"Quantity",rules:[{required:!0,message:"Please enter the quantity"}],children:(0,F.jsx)(_.A,{min:0,defaultValue:1,style:{width:"100%"}})})}),(0,F.jsx)(c.A,{xs:12,sm:12,md:12,lg:6,children:(0,F.jsx)(A.A.Item,{...a,name:[s,"price"],fieldKey:[n,"price"],label:"Unit Price",rules:[{required:!0,message:"Please enter the price"}],children:(0,F.jsx)(_.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,F.jsx)(c.A,{span:2,children:(0,F.jsx)(f.A,{onClick:()=>{l(s),H()},style:{fontSize:"20px",color:"red"}})})]},t)]})})),(0,F.jsx)(A.A.Item,{children:(0,F.jsx)(a.A,{type:"dashed",onClick:()=>s(),block:!0,children:"Add Item"})})]})}}),(0,F.jsxs)("div",{className:"flex justify-end gap-2 mt-5",children:[(0,F.jsx)(a.A,{htmlType:"button",onClick:()=>{setVisible(!1)},children:"Cancel"}),(0,F.jsx)(a.A,{onClick:async()=>{try{h(!0),await W(null===r||void 0===r?void 0:r.cmsId);const e=await(0,O.J)(E),t=document.createElement("div");t.style.position="absolute",document.body.appendChild(t),t.innerHTML=e,w()(t).then((e=>{const s=e.toDataURL("image/png"),l=e.width,i=e.height*(80/l),n=new S.Ay("p","mm",[80,i]);n.addImage(s,"PNG",0,0,80,i);const a=n.output("blob"),r=URL.createObjectURL(a),d=window.open(r,"_blank");d.onload=function(){d.print()},document.body.removeChild(t)})),h(!1)}catch(e){h(!1),b.Ay.warning("Something went wrong."),console.log(e)}},htmlType:"button",children:"Print"}),(0,F.jsx)(a.A,{type:"primary",htmlType:"submit",loading:u,children:"Submit"})]})]})})}),(0,F.jsx)("div",{className:"mt-4",children:v&&(0,F.jsx)(P.A,{orderDetails:E})})]})};var z=s(40925),E=s(91734),q=s(57043),T=s(70495);const{Search:H}=i.A,{RangePicker:W}=n.A,U=()=>{const[e,t]=(0,l.useState)(!1),[s,i]=(0,l.useState)(0),[n,p]=(0,l.useState)(""),[A,b]=(0,l.useState)({isOpen:!1,cmsId:""}),[y,_]=(0,l.useState)([]),[f,S]=(0,l.useState)(0),[I,w]=(0,l.useState)(""),[k,N]=(0,l.useState)([]),[P,O]=(0,u.fp)(T.qt),D=[{title:"#Id",dataIndex:"id",key:"id",width:140},{title:"Total Price",dataIndex:"total_price",key:"total_price",width:140},{title:"Status",dataIndex:"status",key:"status",width:140},{title:"Date",dataIndex:"createdAt",render:(e,t)=>g()(t.createdAt).format("DD-MM-YYYY (HH:mm)"),width:140},{title:"Table",dataIndex:"table_id",key:"table_id",width:150},{title:"Action",key:"action",render:(e,t)=>(0,F.jsxs)(h.A,{size:"middle",children:[(0,F.jsx)(a.A,{size:"small",onClick:()=>b({isOpen:!0,cmsId:null===t||void 0===t?void 0:t.id}),children:(0,F.jsx)(j.A,{})}),(0,F.jsx)(r.A,{title:"Are you sure to delete this task?",onConfirm:()=>{(0,C.FN)({id:null===t||void 0===t?void 0:t._id}).then((e=>{console.log("res",e),message.success("Deleted Successfully"),H()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,F.jsx)(a.A,{danger:!0,size:"small",children:(0,F.jsx)(v.A,{})})})]}),width:150}],H=()=>{(0,C.hV)({start:s,limit:10,search:n,status:I,dates:k,currentStore:P}).then((e=>{var t,s;e&&(_(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows),S(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.count))})).catch((e=>console.log("err",e)))};(0,l.useEffect)((()=>{H()}),[s,n,I,k,P]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(E.z,{title:"Orders",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/products",breadcrumbName:"Products"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,F.jsx)(z.rQ,{className:"p-3",children:(0,F.jsx)(d.A,{gutter:16,children:(0,F.jsx)(c.A,{sm:24,xs:24,lg:24,className:"",children:(0,F.jsx)(q.C,{title:(0,F.jsx)("div",{children:(0,F.jsxs)(d.A,{gutter:[16,16],align:"middle",children:[(0,F.jsx)(c.A,{xs:24,sm:12,md:8,lg:6,children:(0,F.jsxs)(o.A,{style:{width:"100%"},size:"middle",placeholder:"Status",onChange:e=>{w(e)},children:[(0,F.jsx)(Option,{value:"",children:"All"}),(0,F.jsx)(Option,{value:"pending",children:"Pending"}),(0,F.jsx)(Option,{value:"preparing",children:"Preparing"}),(0,F.jsx)(Option,{value:"served",children:"Served"}),(0,F.jsx)(Option,{value:"paid",children:"Paid"}),(0,F.jsx)(Option,{value:"canceled",children:"Canceled"})]})}),(0,F.jsx)(c.A,{xs:24,sm:12,md:8,lg:6,children:(0,F.jsx)(W,{size:"middle",onChange:(e,t)=>{N(t)},style:{width:"100%"}})})]})}),moreBtn:(0,F.jsx)(a.A,{type:"primary",onClick:()=>t(!0),children:"Add"}),children:(0,F.jsx)(x.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:D,dataSource:y,pagination:{pageSize:10,total:f,showSizeChanger:!1},onChange:e=>{const{current:t}=e;i(10*(t-1))}})})})})}),(0,F.jsx)(m.A,{title:"".concat(e?"Add Order":"Edit Order"),destroyOnClose:!0,open:e||A.isOpen,width:1024,footer:!1,onCancel:()=>{t(!1),b({isOpen:!1,cmsId:""})},children:(0,F.jsx)(V,{setisAddCms:t,getAllData:H,isEditCms:A,setIsEditCms:b,currentStore:P})})]})}},78240:(e,t,s)=>{s.d(t,{A:()=>d});var l=s(89379),i=s(65043);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"};var a=s(22172),r=function(e,t){return i.createElement(a.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:n}))};r.displayName="DeleteFilled";const d=i.forwardRef(r)}}]);
//# sourceMappingURL=1679.4f1b53f5.chunk.js.map