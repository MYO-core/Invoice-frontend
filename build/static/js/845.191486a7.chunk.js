"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[845],{42113:(e,t,n)=>{n.d(t,{A:()=>a});n(65043);const a=n.p+"static/media/home.f87e389a5c1850fe48b55156d6a0d7b7.svg"},91734:(e,t,n)=>{n.d(t,{z:()=>x});var a,i,l=n(97775),r=n(35475),s=n(31105),o=n(57528),d=n(67947),c=n(94574);const m=(0,c.Ay)(d.A)(a||(a=(0,o.A)(["\n  .ant-breadcrumb {\n    ol{\n      @media (max-width: 575px) {\n        justify-content: center;\n      }\n    }\n    li{\n        display:flex;\n        align-items:center;\n    }\n  }\n"]))),h=c.Ay.div(i||(i=(0,o.A)(["\n  \n"])));var u=n(70579);function x(e){const{title:t,subTitle:a,routes:i,buttons:o,ghost:d,bgColor:c,className:x}=e,p=i?(0,u.jsx)(l.A,{className:"flex order-2 relative top-1.5",separator:(0,u.jsx)("span",{className:"inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full"}),children:i.map(((e,t)=>t+1===i.length?(0,u.jsx)(l.A.Item,{className:"text-breadcrumbs dark:text-white30 text-15",children:e.breadcrumbName},t):(0,u.jsxs)(l.A.Item,{className:"inline-flex items-start",children:[(0,u.jsx)(s.k,{className:"relative top-0.5 ltr:mr-2 rtl:ml-2 [&>div>svg]:text-[#8c90a4] dark:[&>div>svg]:text-white60 ",src:n(42113).A})," ",(0,u.jsx)(r.N_,{to:e.path,className:"text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm",children:e.breadcrumbName})]},t)))}):"";return(0,u.jsx)(h,{bgColor:c,children:(0,u.jsx)(m,{className:"".concat(x),title:t,subTitle:a,breadcrumb:p,extra:o,ghost:d})})}},78845:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(65043),i=n(33307),l=n(50525),r=n(89421),s=n(28440),o=n(47419),d=n(11645),c=n(94406),m=n(33946),h=n(37122),u=n(64435),x=n(10444),p=n(86178),g=n.n(p),b=n(48646),v=n(78240),y=n(50289),j=n(48193),A=n(5397),f=n(3428),w=n(88655),k=n(45904),S=n(65239),N=n.n(S),_=n(53815),I=n(47807),C=n(2543),z=n(89680),F=n(19662),T=n(70579);const{Option:D}=c.A,P=e=>{let{setisAddCms:t,getAllData:n,setIsEditCms:l,isEditCms:s,currentStore:m}=e;const[h,u]=(0,a.useState)(!1),[x,p]=(0,a.useState)([]),[g,b]=(0,a.useState)(""),[v,S]=(0,a.useState)(!1),[P,O]=(0,a.useState)([]),[q,V]=(0,a.useState)({orderNumber:"",tableNumber:"",items:[],subtotal:0,tax:0,total:0}),[E]=y.A.useForm();(0,a.useEffect)((()=>{null!==s&&void 0!==s&&s.cmsId&&(u(!0),(0,_.W8)({id:null===s||void 0===s?void 0:s.cmsId}).then((e=>{E.setFieldsValue(null===e||void 0===e?void 0:e.data);let t=null===e||void 0===e?void 0:e.data,n={orderNumber:t.id,customer_name:t.customer_name,tableNumber:t.table_number,items:t.order_items,subtotal:t.total_price||0,tax:t.tax_precent||0,total:t.total_price||0,organisation:t.Organisation,store:t.Store,user:t.User};V(n),u(!1)})).catch((e=>{var t;j.Ay.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Something Went Wrong"),console.log("err",e),u(!1)})))}),[null===s||void 0===s?void 0:s.cmsId]),(0,a.useEffect)((()=>{(0,I.hV)({search:g}).then((e=>{p(e.data.rows)})).catch((e=>{j.Ay.error("Error While Fetching Items")}))}),[g]),(0,a.useEffect)((()=>{(0,C.xH)({}).then((e=>{O(e.data.rows)})).catch((e=>{j.Ay.error("Error While Fetching Items")}))}),[]);const B=()=>{var e;let t=E.getFieldsValue(["order_items"]),n=0;null===t||void 0===t||null===(e=t.order_items)||void 0===e||e.map((e=>{let t=Number(null===e||void 0===e?void 0:e.price)*Number(null===e||void 0===e?void 0:e.quantity);n+=t}));let a=E.getFieldValue("tax_precent"),i=E.getFieldValue("discount_precent");n+=.01*a*n,n-=.01*i*n,E.setFieldValue("total_price",n)},W=async e=>{u(!0),(0,_.W8)({id:e}).then((e=>{E.setFieldsValue(null===e||void 0===e?void 0:e.data);let t=null===e||void 0===e?void 0:e.data,n={orderNumber:t.id,customer_name:t.customer_name,tableNumber:t.table_id,items:t.order_items,subtotal:t.total_price||0,tax:t.tax_precent||0,total:t.total_price||0,organisation:t.Organisation,store:t.Store,user:t.User};V(n),u(!1)})).catch((e=>{var t;j.Ay.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Something Went Wrong"),console.log("err",e),u(!1)}))};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(A.A,{spinning:h,children:(0,T.jsx)("div",{children:(0,T.jsxs)(y.A,{name:"order",form:E,layout:"vertical",onFinish:e=>{const a=e;var i;(a.table_id=null===a||void 0===a?void 0:a.table_id.toString(),null!==s&&void 0!==s&&s.cmsId)?(0,_.FM)({id:null===s||void 0===s?void 0:s.cmsId,body:a}).then((e=>{l({isOpen:!1,cmsId:""}),n(),j.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e))):(a.store_id=m,null===(i=(0,_.zF)({body:a}))||void 0===i||i.then((e=>{t(!1),n(),j.Ay.success("Data added successfully")})).catch((e=>{console.log("err :>> ",e)})))},onChange:B,autoComplete:"off",children:[(0,T.jsxs)(o.A,{gutter:16,children:[(0,T.jsx)(d.A,{span:12,children:(0,T.jsx)(y.A.Item,{label:"Table number",name:"table_id",rules:[{required:!0,message:"Please select the table ID"}],children:(0,T.jsx)(c.A,{children:P.map((e=>(0,T.jsxs)(D,{value:e.id,children:[e.table_number," - "," ("+e.no_of_seats+" Seater )"]})))})})}),(0,T.jsx)(d.A,{span:12,children:(0,T.jsx)(y.A.Item,{label:"Customer Name",name:"customer_name",children:(0,T.jsx)(i.A,{})})})]}),(0,T.jsxs)(o.A,{gutter:16,children:[(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:8,children:(0,T.jsx)(y.A.Item,{label:"Total Price",name:"total_price",rules:[{required:!0,message:"Please enter the total price"}],children:(0,T.jsx)(f.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:8,children:(0,T.jsx)(y.A.Item,{label:"Discount Percent",name:"discount_precent",initialValue:0,children:(0,T.jsx)(f.A,{min:0,max:100,precision:2,style:{width:"100%"}})})}),(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:8,children:(0,T.jsx)(y.A.Item,{label:"Tax Percent",name:"tax_precent",initialValue:0,children:(0,T.jsx)(f.A,{min:0,max:100,precision:2,style:{width:"100%"}})})})]}),(0,T.jsx)(o.A,{gutter:16,children:(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:8,children:(0,T.jsx)(y.A.Item,{label:"Order Status",name:"status",initialValue:"pending",children:(0,T.jsxs)(c.A,{children:[(0,T.jsx)(D,{value:"pending",children:"Pending"}),(0,T.jsx)(D,{value:"preparing",children:"Preparing"}),(0,T.jsx)(D,{value:"served",children:"Served"}),(0,T.jsx)(D,{value:"paid",children:"Paid"}),(0,T.jsx)(D,{value:"canceled",children:"Canceled"})]})})})}),(0,T.jsx)(y.A.List,{name:"order_items",children:(e,t)=>{let{add:n,remove:a}=t;return(0,T.jsxs)(T.Fragment,{children:[e.map((e=>{let{key:t,name:n,fieldKey:l,...r}=e;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("hr",{style:{margin:"20px 0",borderColor:"#e8e8e8"}}),(0,T.jsxs)(o.A,{gutter:16,align:"middle",children:[(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:6,children:(0,T.jsx)(y.A.Item,{...r,name:[n,"item_id"],fieldKey:[l,"item_id"],label:"Item Code",rules:[{required:!0,message:"Please select the item ID"}],children:(0,T.jsx)(c.A,{showSearch:!0,onSearch:e=>{b(e)},onChange:e=>{const t=x.find((t=>t.id===e));E.setFieldsValue({order_items:{[n]:{item_name:null===t||void 0===t?void 0:t.name,price:null===t||void 0===t?void 0:t.price,quantity:1}}}),B()},children:x.map((e=>(0,T.jsxs)(D,{value:e.id,children:[e.item_code," - ",e.name]},e.id)))})})}),(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:6,children:(0,T.jsx)(y.A.Item,{...r,name:[n,"item_name"],fieldKey:[l,"item_name"],label:"Item Name",rules:[{required:!0,message:"Please enter the item name"}],children:(0,T.jsx)(i.A,{})})}),(0,T.jsx)(d.A,{xs:8,sm:12,md:12,lg:4,children:(0,T.jsx)(y.A.Item,{...r,name:[n,"quantity"],fieldKey:[l,"quantity"],label:"Quantity",rules:[{required:!0,message:"Please enter the quantity"}],children:(0,T.jsx)(f.A,{min:0,defaultValue:1,style:{width:"100%"}})})}),(0,T.jsx)(d.A,{xs:12,sm:12,md:12,lg:6,children:(0,T.jsx)(y.A.Item,{...r,name:[n,"price"],fieldKey:[l,"price"],label:"Unit Price",rules:[{required:!0,message:"Please enter the price"}],children:(0,T.jsx)(f.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,T.jsx)(d.A,{span:2,children:(0,T.jsx)(w.A,{onClick:()=>{a(n),B()},style:{fontSize:"20px",color:"red"}})})]},t)]})})),(0,T.jsx)(y.A.Item,{children:(0,T.jsx)(r.A,{type:"dashed",onClick:()=>n(),block:!0,children:"Add Item"})})]})}}),(0,T.jsxs)("div",{className:"flex justify-end gap-2 mt-5",children:[(0,T.jsx)(r.A,{htmlType:"button",onClick:()=>{setVisible(!1)},children:"Cancel"}),(0,T.jsx)(r.A,{onClick:async()=>{try{u(!0),await W(null===s||void 0===s?void 0:s.cmsId);const e=await(0,F.J)(q),t=document.createElement("div");t.style.position="absolute",document.body.appendChild(t),t.innerHTML=e,N()(t).then((e=>{const n=e.toDataURL("image/png"),a=e.width,i=e.height*(80/a),l=new k.Ay("p","mm",[80,i]);l.addImage(n,"PNG",0,0,80,i);const r=l.output("blob"),s=URL.createObjectURL(r),o=window.open(s,"_blank");o.onload=function(){o.print()},document.body.removeChild(t)})),u(!1)}catch(e){u(!1),j.Ay.warning("Something went wrong."),console.log(e)}},htmlType:"button",children:"Print"}),(0,T.jsx)(r.A,{type:"primary",htmlType:"submit",loading:h,children:"Submit"})]})]})})}),(0,T.jsx)("div",{className:"mt-4",children:v&&(0,T.jsx)(z.A,{orderDetails:q})})]})};var O=n(40925),q=n(91734),V=n(57043),E=n(70495);const{Search:B}=i.A,{RangePicker:W}=l.A,L=()=>{const[e,t]=(0,a.useState)(!1),[n,i]=(0,a.useState)(0),[l,p]=(0,a.useState)(""),[y,j]=(0,a.useState)({isOpen:!1,cmsId:""}),[A,f]=(0,a.useState)([]),[w,k]=(0,a.useState)(0),[S,N]=(0,a.useState)(""),[I,C]=(0,a.useState)([]),[z,F]=(0,h.fp)(E.qt),D=[{title:"#Id",dataIndex:"id",key:"id",width:140},{title:"Total Price",dataIndex:"total_price",key:"total_price",width:140},{title:"Status",dataIndex:"status",key:"status",width:140},{title:"Date",dataIndex:"createdAt",render:(e,t)=>g()(t.createdAt).format("DD-MM-YYYY (HH:mm)"),width:140},{title:"Table",dataIndex:"table_id",key:"table_id",width:150},{title:"Action",key:"action",render:(e,t)=>(0,T.jsxs)(u.A,{size:"middle",children:[(0,T.jsx)(r.A,{size:"small",onClick:()=>j({isOpen:!0,cmsId:null===t||void 0===t?void 0:t.id}),children:(0,T.jsx)(b.A,{})}),(0,T.jsx)(s.A,{title:"Are you sure to delete this task?",onConfirm:()=>{(0,_.FN)({id:null===t||void 0===t?void 0:t._id}).then((e=>{console.log("res",e),message.success("Deleted Successfully"),B()})).catch((e=>console.log("err",e)))},okText:"Yes",cancelText:"No",children:(0,T.jsx)(r.A,{danger:!0,size:"small",children:(0,T.jsx)(v.A,{})})})]}),width:150}],B=()=>{(0,_.hV)({start:n,limit:10,search:l,status:S,dates:I,currentStore:z}).then((e=>{var t,n;e&&(f(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows),k(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.count))})).catch((e=>console.log("err",e)))};(0,a.useEffect)((()=>{B()}),[n,l,S,I,z]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(q.z,{title:"Orders",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/products",breadcrumbName:"Products"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,T.jsx)(O.rQ,{className:"p-3",children:(0,T.jsx)(o.A,{gutter:16,children:(0,T.jsx)(d.A,{sm:24,xs:24,lg:24,className:"",children:(0,T.jsx)(V.C,{title:(0,T.jsx)("div",{children:(0,T.jsxs)(o.A,{gutter:[16,16],align:"middle",children:[(0,T.jsx)(d.A,{xs:24,sm:12,md:8,lg:6,children:(0,T.jsxs)(c.A,{style:{width:"100%"},size:"middle",placeholder:"Status",onChange:e=>{N(e)},children:[(0,T.jsx)(Option,{value:"",children:"All"}),(0,T.jsx)(Option,{value:"pending",children:"Pending"}),(0,T.jsx)(Option,{value:"preparing",children:"Preparing"}),(0,T.jsx)(Option,{value:"served",children:"Served"}),(0,T.jsx)(Option,{value:"paid",children:"Paid"}),(0,T.jsx)(Option,{value:"canceled",children:"Canceled"})]})}),(0,T.jsx)(d.A,{xs:24,sm:12,md:8,lg:6,children:(0,T.jsx)(W,{size:"middle",onChange:(e,t)=>{C(t)},style:{width:"100%"}})})]})}),moreBtn:(0,T.jsx)(r.A,{type:"primary",onClick:()=>t(!0),children:"Add"}),children:(0,T.jsx)(x.A,{size:"small",scroll:{x:"100%",y:"auto"},columns:D,dataSource:A,pagination:{pageSize:10,total:w,showSizeChanger:!1},onChange:e=>{const{current:t}=e;i(10*(t-1))}})})})})}),(0,T.jsx)(m.A,{title:"".concat(e?"Add Order":"Edit Order"),destroyOnClose:!0,open:e||y.isOpen,width:1024,footer:!1,onCancel:()=>{t(!1),j({isOpen:!1,cmsId:""})},children:(0,T.jsx)(P,{setisAddCms:t,getAllData:B,isEditCms:y,setIsEditCms:j,currentStore:z})})]})}},89680:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(65043),i=n(37122),l=n(77047),r=n(48193),s=n(39998),o=n(10444),d=n(89421),c=n(45904),m=n(65239),h=n.n(m),u=n(18233),x=n.n(u),p=n(70495),g=n(70579);const{Title:b,Text:v}=l.A,y=e=>{var t;let{orderDetails:n}=e;(0,a.useRef)(null);const l=(0,a.useRef)(null),[m,u]=(0,i.fp)(p.Zr),y=(new Date).toLocaleString(),[j,A]=(0,a.useState)(.01*Number(n.tax)*Number(n.total)),[f,w]=(0,a.useState)(0);(0,a.useEffect)((()=>{let e=0;n.items.forEach((t=>{e+=t.price*t.quantity})),w(e)}),[]);return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{ref:l,style:{padding:"10px",width:"80mm",backgroundColor:"#fff",margin:"auto",fontFamily:"Arial, sans-serif",border:"1px solid #000",marginTop:"40px"},children:[(0,g.jsx)("style",{children:"\n                    .custom-row {\n                        color: #000 !important; \n                    }\n                    .custom-row td {\n                        color: #000 !important; \n                    }\n                "}),(0,g.jsx)(b,{level:5,style:{marginBottom:"5px"},children:m.name}),(0,g.jsx)(v,{style:{textAlign:"center",display:"block",fontSize:"14px",color:"#000"},children:m.address}),(0,g.jsxs)(v,{style:{textAlign:"center",display:"block",fontSize:"14px",color:"#000"},children:["Phone: ",m.phoneNumber]}),(0,g.jsxs)(v,{style:{textAlign:"center",display:"block",fontSize:"14px",marginBottom:"10px",color:"#000"},children:["GSTIN: ",null===n||void 0===n||null===(t=n.organisation)||void 0===t?void 0:t.gst]}),(0,g.jsx)(s.A,{style:{borderColor:"#000",margin:"0"}}),(0,g.jsxs)(v,{style:{textAlign:"left",fontSize:"14px",color:"#000",marginBottom:"10px"},children:["Name: ",n.customer_name]}),(0,g.jsx)(s.A,{style:{borderColor:"#000",margin:"0",color:"#000"}}),(0,g.jsx)("br",{}),(0,g.jsxs)(v,{style:{textAlign:"left",display:"block",fontSize:"14px",color:"#000"},children:["Date: ",y]}),(0,g.jsxs)(v,{style:{fontSize:"14px",color:"#000"},children:["Bill No: ",n.orderNumber]}),(0,g.jsx)("br",{}),(0,g.jsxs)(v,{style:{fontSize:"14px",color:"#000"},children:["Table: ",n.tableNumber]}),(0,g.jsx)(s.A,{style:{borderColor:"#000"}}),(0,g.jsx)(o.A,{dataSource:n.items,columns:[{title:"Item",dataIndex:"item_name",key:"item_name"},{title:"Qty",dataIndex:"quantity",key:"quantity",align:"center"},{title:"Price",dataIndex:"price",key:"price",align:"center",render:e=>"".concat(e.toFixed(2))},{title:"Amount",key:"total",align:"center",render:e=>"".concat((e.quantity*e.price).toFixed(2))}],pagination:!1,rowClassName:"custom-row td",size:"small",style:{marginBottom:"10px"}}),(0,g.jsxs)(v,{style:{textAlign:"right",display:"block",fontSize:"14px",color:"#000"},children:["Sub Total ",f]}),(0,g.jsxs)(v,{style:{textAlign:"right",display:"block",fontSize:"14px",color:"#000",marginBottom:"10px"},children:["gst ",n.tax,"% ",j.toFixed(2)]}),(0,g.jsx)(s.A,{style:{borderColor:"#000",margin:"0"}}),(0,g.jsx)(v,{style:{textAlign:"right",display:"block",fontSize:"10px",color:"#000"},children:"round off: 0.01"}),(0,g.jsx)(v,{style:{textAlign:"right",display:"block",fontSize:"16px",color:"#000",marginBottom:"10px"},children:(0,g.jsxs)("strong",{children:["Grand Total \u20b9 ",n.total]})}),(0,g.jsx)(s.A,{style:{borderColor:"#000",margin:"0"}}),(0,g.jsx)("br",{}),(0,g.jsx)(v,{style:{textAlign:"center",display:"block",fontSize:"14px",marginTop:"10px",color:"#000"},children:"Thank You Visit Again..."})]}),(0,g.jsx)(d.A,{style:{marginTop:"20px"},onClick:()=>{try{const e=l.current;h()(e).then((e=>{const t=e.toDataURL("image/png"),n=new c.Ay("p","mm",[80,e.height*(80/e.width)]);n.addImage(t,"PNG",0,0,80,e.height*(80/e.width));const a=n.output("blob"),i=URL.createObjectURL(a);x()({printable:i,type:"pdf",documentTitle:"Order Bill"})}))}catch(e){r.Ay.warning("Error While Printing Bill")}},children:"Download Bill"})]})}},19662:(e,t,n)=>{n.d(t,{J:()=>a});const a=e=>{var t;const n={orderDetails:{items:e.items,tax:e.tax,total:null===e||void 0===e?void 0:e.total},storeData:null===e||void 0===e?void 0:e.store,customerName:(null===e||void 0===e?void 0:e.customer_name)||"",orderNumber:null===e||void 0===e?void 0:e.orderNumber,cashier:null===e||void 0===e?void 0:e.user.name,tableNumber:(null===e||void 0===e?void 0:e.tableNumber)||""},a=n.orderDetails,i=n.storeData,l=null===e||void 0===e||null===(t=e.organisation)||void 0===t?void 0:t.gst;let r=0,s="",o=0;a.items.forEach((e=>{const t=e.quantity*e.price;r+=t,o+=e.quantity,s+='\n            <tr class="bill-details">\n                <td>'.concat(e.item_name,"</td>\n                <td>").concat(e.quantity,"</td>\n                <td>\u20b9").concat(e.price.toFixed(2),"</td>\n                <td>\u20b9").concat(t.toFixed(2),"</td>\n            </tr>\n        ")}));const d=r*a.tax/100,c=(a.tax/2).toFixed(1),m=r+d,h=d/2;return'\n    \n    <head>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n        }\n             hr {\n    border: 1px solid black;\n  }\n        td{\n          word-wrap: break-word;\n          white-space: normal;\n        }\n        .thora-khisakle{\n          margin-bottom: 3px;\n        }\n        .aage-khisakle{\n          margin-right: 20px;\n        }\n        .address-khisak{\n          word-wrap: break-word;\n          white-space: normal;\n        }\n        .bill-container {\n            width: 80mm;\n            // margin: 40px auto;\n            padding: 10px;\n            background-color: #fff;\n            border: 1px solid #000;\n        }\n        .bill-header,\n        .bill-footer {\n            text-align: center;\n            font-size: 14px;\n            color: #000;\n             margin-bottom: 10px;\n        }\n        .bill-header .store-name {\n            font-size: 18px;\n            font-weight: bold;\n        }\n        .bill-header,.store-address .bill-header .store-phone, .bill-header .gst {\n            font-size: 14px;\n        }\n        .bill-details {\n            font-size: 14px;\n            color: #000;\n            margin-bottom: 10px;\n        }\n        .table-container {\n            width: 100%;\n            margin-bottom: 10px;\n            border-collapse: collapse;\n        }\n        .table-container td, .table-container th {\n            padding: 8px;\n            text-align: center;\n        }\n        .table-container th {\n            font-weight: bold;\n            font-size: 14px;\n        }\n        .table-container td {\n            font-size: 14px;\n        }\n        .total {\n            text-align: right;\n            font-size: 14px;\n            margin-bottom: 10px;\n            color: #000;\n        }\n        .grand-total {\n            font-size: 16px;\n            font-weight: bold;\n            color: #000;\n        }\n        .divider {\n            border-top: 1px solid #000;\n            margin: 10px 0;\n        }\n        .text-center {\n            text-align: center;\n        }\n        .text-right {\n            text-align: right;\n        }\n    </style>\n</head>\n    <body>\n        <div class="bill-container">\n            <div class="bill-header">\n                <div class="store-name thora-khisakle">'.concat(i.name,'</div>\n                <div class="store-address thora-khisakle address-khisak">').concat(i.address,'</div>\n                <div class="store-phone thora-khisakle">Phone: ').concat(i.phoneNumber,'</div>\n                <div class="gst thora-khisakle">GSTIN: ').concat(l,'</div>\n            </div>\n\n            <hr>\n\n            <div class="bill-details">\n                <div class="thora-khisakle">Name: ').concat(n.customerName,'</div>\n            </div>\n            <hr>\n\n            <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">\n                <tr class="bill-details">\n                    <td>Date:</td>\n                    <td class="bill-details">').concat((()=>{const e=new Date,t=e.toLocaleDateString("en-US"),n=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return"".concat(t," (").concat(n,")")})(),"</td>\n                    <td>Bill No:</td>\n                    <td>").concat(n.orderNumber,'</td>\n                </tr>\n                <tr class="bill-details">\n                    <td>Cashier:</td>\n                    <td>').concat(n.cashier,"</td>\n                    <td>Table No:</td>\n                    <td>").concat(n.tableNumber,'</td>\n                </tr>\n            </table>\n\n            <hr>\n                 <table class="table-container">\n                    <tr class="bill-details">\n                        <td>Item</td>\n                        <td>Qty</td>\n                        <td>Price</td>\n                        <td>Amount</td>\n                    </tr>\n                    </table>\n                    <hr>\n            \n            <table class="table-container">\n                <tbody id="items-list">\n                    ').concat(s,'\n                </tbody>\n            </table>\n\n            <hr>\n            <div class="total" >\n            \t<span style="margin-right:10px;">Total Qty: ').concat(o," </span>\n                Sub Total: \u20b9").concat(r.toFixed(2),'\n            </div>\n            <div class="total">\n                sgst (').concat(c,"%): \u20b9").concat(h.toFixed(2),'\n            </div>\n            <div class="total">\n                cgst (').concat(c,"%): \u20b9").concat(h.toFixed(2),'\n            </div>\n            <hr>\n            <div class="total grand-total">\n                Grand Total: \u20b9').concat(m.toFixed(2),'\n            </div>\n\n            <hr>\n\n            <div class="bill-footer">\n                Thank You! Visit Again...\n            </div>\n        </div>\n    </body>\n    ')}},53815:(e,t,n)=>{n.d(t,{FM:()=>s,FN:()=>o,W8:()=>r,hV:()=>l,zF:()=>i});var a=n(32170);const i=async e=>{let{body:t}=e;return await a.p.post("/orders",t)},l=async e=>{let{start:t,limit:n,status:i,search:l,dates:r,currentStore:s}=e,o=l?"&search=".concat(l):"",d=i?"&status=".concat(i):"",c=s?"&store_id=".concat(s):"",m="";2===r.length&&(m="&start_date=".concat(r[0],"&end_date=").concat(r[1]));return await a.p.get("/orders?start=".concat(t,"&limit=").concat(n).concat(o).concat(d).concat(m).concat(c))},r=async e=>{let{id:t}=e;return await a.p.get("/orders/".concat(t))},s=async e=>{let{id:t,body:n}=e;return await a.p.patch("/orders/".concat(t),n)},o=async e=>{let{id:t}=e;return await a.p.delete("/orders/".concat(t))}},47807:(e,t,n)=>{n.d(t,{FM:()=>s,FN:()=>o,W8:()=>r,hV:()=>l,zF:()=>i});var a=n(32170);const i=async e=>{let{body:t}=e;return await a.p.post("/restroItems",t)},l=async e=>{let{start:t=0,limit:n=10,search:i}=e,l=i?"&search=".concat(i):"";return await a.p.get("/restroItems?start=".concat(t,"&limit=").concat(n).concat(l))},r=async e=>{let{id:t}=e;return await a.p.get("/restroItems/".concat(t))},s=async e=>{let{id:t,body:n}=e;return await a.p.patch("/restroItems/".concat(t),n)},o=async e=>{let{id:t}=e;return await a.p.delete("/restroItems/".concat(t))}},2543:(e,t,n)=>{n.d(t,{FM:()=>s,W8:()=>r,xH:()=>l,zF:()=>i});var a=n(32170);const i=async e=>{let{body:t}=e;return await a.p.post("/tables",t)},l=async e=>{let{start:t=0,limit:n=10,search:i,type:l,isAvailable:r,store_id:s}=e,o=i?"&search=".concat(i):"",d=l?"&status=".concat(l):"",c=s?"&store_id=".concat(s):"",m=r?"&isAvailable=".concat(r):"";return await a.p.get("/tables?start=".concat(t,"&limit=").concat(n).concat(o).concat(d).concat(m).concat(c))},r=async e=>{let{id:t}=e;return await a.p.get("/tables/".concat(t))},s=async e=>{let{id:t,body:n}=e;return await a.p.patch("/tables/".concat(t),n)}},78240:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(89379),i=n(65043);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"};var r=n(22172),s=function(e,t){return i.createElement(r.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:l}))};s.displayName="DeleteFilled";const o=i.forwardRef(s)}}]);
//# sourceMappingURL=845.191486a7.chunk.js.map