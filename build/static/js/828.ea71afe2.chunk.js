"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[828],{18413:(e,t,s)=>{s.d(t,{A:()=>A});var l=s(65043),r=s(37122),i=s(77047),n=s(48193),a=s(39998),d=s(10444),c=s(89421),o=s(45904),m=s(65239),u=s.n(m),x=s(18233),h=s.n(x),p=s(70495),j=s(70579);const{Title:b,Text:g}=i.A,A=e=>{var t,s;let{orderDetails:i}=e;const m=(0,l.useRef)(null),x=(0,l.useRef)(null),[A,y]=(0,r.fp)(p.Zr),v=(new Date).toLocaleString(),[f,S]=(0,l.useState)(.01*Number(i.tax)*Number(i.total));return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{ref:m,style:{padding:"10px",width:"80mm",backgroundColor:"#fff",margin:"auto",fontFamily:"Arial, sans-serif",border:"1px solid #000"},children:[(0,j.jsx)(b,{level:4,style:{textAlign:"center",marginBottom:"5px"},children:A.name}),(0,j.jsx)(g,{style:{textAlign:"center",display:"block",fontSize:"10px"},children:A.address}),(0,j.jsxs)(g,{style:{textAlign:"center",display:"block",fontSize:"10px"},children:["Phone: ",A.phoneNumber]}),(0,j.jsxs)(g,{style:{textAlign:"center",display:"block",fontSize:"10px"},children:["Date: ",v]}),(0,j.jsxs)(g,{style:{textAlign:"center",display:"block",fontSize:"10px",marginBottom:"10px"},children:["GSTIN: ",null===i||void 0===i||null===(t=i.organisation)||void 0===t?void 0:t.gst]}),(0,j.jsx)(a.A,{dashed:!0}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Order #:"})," ",i.orderNumber]}),(0,j.jsx)("br",{}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Waiter:"})," ",i.waiterName||"N/A"]}),(0,j.jsx)("br",{}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Table #:"})," ",i.tableNumber]}),(0,j.jsx)(a.A,{dashed:!0}),(0,j.jsx)(d.A,{dataSource:i.items,columns:[{title:"Item",dataIndex:"item_name",key:"item_name"},{title:"Qty",dataIndex:"quantity",key:"quantity",align:"center"}],pagination:!1,size:"small",style:{marginBottom:"10px"}}),(0,j.jsx)(a.A,{dashed:!0}),(0,j.jsx)(g,{style:{textAlign:"center",display:"block",fontSize:"12px"},children:"Thank You!"})]}),(0,j.jsx)(c.A,{style:{marginTop:"20px"},onClick:()=>{const e=m.current;u()(e).then((e=>{const t=e.toDataURL("image/png"),s=new o.Ay("p","mm",[80,e.height*(80/e.width)]);s.addImage(t,"PNG",0,0,80,e.height*(80/e.width)),s.save("kot.pdf")}))},children:"Download KOT"}),(0,j.jsxs)("div",{ref:x,style:{padding:"10px",width:"80mm",backgroundColor:"#fff",margin:"auto",fontFamily:"Arial, sans-serif",border:"1px solid #000",marginTop:"40px"},children:[(0,j.jsx)(b,{level:4,style:{textAlign:"center",marginBottom:"5px"},children:A.name}),(0,j.jsx)(g,{style:{textAlign:"center",display:"block",fontSize:"10px"},children:A.address}),(0,j.jsxs)(g,{style:{textAlign:"center",display:"block",fontSize:"10px"},children:["Phone: ",A.phoneNumber]}),(0,j.jsxs)(g,{style:{textAlign:"center",display:"block",fontSize:"10px"},children:["Date: ",v]}),(0,j.jsxs)(g,{style:{textAlign:"center",display:"block",fontSize:"10px",marginBottom:"10px"},children:["GSTIN: ",null===i||void 0===i||null===(s=i.organisation)||void 0===s?void 0:s.gst]}),(0,j.jsx)(a.A,{dashed:!0}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Order #:"})," ",i.orderNumber]}),(0,j.jsx)("br",{}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Waiter:"})," ",i.waiterName||"N/A"]}),(0,j.jsx)("br",{}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Table #:"})," ",i.tableNumber]}),(0,j.jsx)(a.A,{dashed:!0}),(0,j.jsx)(d.A,{dataSource:i.items,columns:[{title:"Item",dataIndex:"item_name",key:"item_name"},{title:"Qty",dataIndex:"quantity",key:"quantity",align:"center"},{title:"Price",dataIndex:"price",key:"price",align:"center",render:e=>"\u20b9".concat(e.toFixed(2))},{title:"Total",key:"total",align:"center",render:e=>"\u20b9".concat((e.quantity*e.price).toFixed(2))}],pagination:!1,size:"small",style:{marginBottom:"10px"}}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Tax:"})," (",i.tax,"%)"]}),(0,j.jsx)("br",{}),(0,j.jsxs)(g,{style:{fontSize:"12px"},children:[(0,j.jsx)("strong",{children:"Total:"})," \u20b9",i.total]}),(0,j.jsx)(a.A,{dashed:!0}),(0,j.jsx)(g,{style:{textAlign:"center",display:"block",fontSize:"12px",marginTop:"10px"},children:"Thank you for dining with us!"})]}),(0,j.jsx)(c.A,{style:{marginTop:"20px"},onClick:()=>{try{const e=x.current;u()(e).then((e=>{const t=e.toDataURL("image/png"),s=new o.Ay("p","mm",[80,e.height*(80/e.width)]);s.addImage(t,"PNG",0,0,80,e.height*(80/e.width));const l=s.output("blob"),r=URL.createObjectURL(l);h()({printable:r,type:"pdf",documentTitle:"Order Bill"})}))}catch(e){n.Ay.warning("Error While Printing Bill")}},children:"Download Bill"})]})}},10828:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var l=s(65043),r=s(37122),i=s(33307),n=s(47419),a=s(11645),d=s(94406),c=s(89421),o=s(69602),m=s(33946),u=s(41554),x=s(50289),h=s(48193),p=s(5397),j=s(3428),b=s(61966),g=s(2543),A=s(70579);const{Option:y}=d.A,v=e=>{let{setisAddCms:t,getAllData:s,setIsEditCms:r,isEditCms:o,currentStore:m,setNewRecord:u,newRecord:v}=e;const[f,S]=(0,l.useState)(!1),[_]=x.A.useForm();return(0,l.useEffect)((()=>{null!==o&&void 0!==o&&o.cmsId&&(S(!0),(0,g.W8)({id:null===o||void 0===o?void 0:o.cmsId}).then((e=>{_.setFieldsValue({tables:[null===e||void 0===e?void 0:e.data]}),S(!1)})).catch((e=>{console.log("err",e),S(!1)})))}),[null===o||void 0===o?void 0:o.cmsId]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(p.A,{spinning:f,children:(0,A.jsx)("div",{children:(0,A.jsxs)(x.A,{form:_,layout:"vertical",onFinish:e=>{const s=e.tables.map((e=>({...e,store_id:m})));if(null!==o&&void 0!==o&&o.cmsId){var l,i,n;let e={no_of_seats:null===(l=s[0])||void 0===l?void 0:l.no_of_seats,status:null===(i=s[0])||void 0===i?void 0:i.status,table_number:null===(n=s[0])||void 0===n?void 0:n.table_number};(0,g.FM)({id:null===o||void 0===o?void 0:o.cmsId,body:e}).then((e=>{r({isOpen:!1,cmsId:""}),u(v+1),h.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e)))}else{var a;null===(a=(0,g.zF)({body:s}))||void 0===a||a.then((e=>{t(!1),u(v+1),h.Ay.success("Tables added successfully")})).catch((e=>{console.log("err :>> ",e)}))}},initialValues:{tables:[{status:"available"}]},children:[(0,A.jsx)(x.A.List,{name:"tables",children:(e,t)=>{let{add:s,remove:l}=t;return(0,A.jsxs)(A.Fragment,{children:[e.map(((t,s)=>(0,A.jsx)("div",{style:{marginBottom:20},children:(0,A.jsxs)(n.A,{gutter:16,align:"middle",children:[(0,A.jsx)(a.A,{xs:24,sm:24,md:24,lg:8,children:(0,A.jsx)(x.A.Item,{...t,label:"Table Number ".concat(s+1),name:[t.name,"table_number"],fieldKey:[t.fieldKey,"table_number"],rules:[{type:"string",message:"Table number must be a string."}],children:(0,A.jsx)(i.A,{placeholder:"Enter table number"})})}),(0,A.jsx)(a.A,{xs:24,sm:24,md:24,lg:8,children:(0,A.jsx)(x.A.Item,{...t,label:"Number of Seats",name:[t.name,"no_of_seats"],fieldKey:[t.fieldKey,"no_of_seats"],rules:[{required:!0,message:"Please enter the number of seats."},{type:"number",min:1,message:"Number of seats must be at least 1."}],children:(0,A.jsx)(j.A,{min:1,placeholder:"Enter number of seats",style:{width:"100%"}})})}),(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:6,children:(0,A.jsx)(x.A.Item,{...t,label:"Status",name:[t.name,"status"],fieldKey:[t.fieldKey,"status"],rules:[{required:!0,message:"Please select the status."}],children:(0,A.jsxs)(d.A,{placeholder:"Select status",children:[(0,A.jsx)(y,{value:"available",children:"Available"}),(0,A.jsx)(y,{value:"booked",children:"Booked"}),(0,A.jsx)(y,{value:"service",children:"Service"}),(0,A.jsx)(y,{value:"preparing",children:"Preparing"})]})})}),(0,A.jsx)(a.A,{span:2,children:e.length>1&&(0,A.jsx)(b.A,{onClick:()=>l(t.name),style:{fontSize:"20px",color:"#ff4d4f",cursor:"pointer",marginTop:"30px"}})})]})},t.key))),!(null!==o&&void 0!==o&&o.cmsId)&&(0,A.jsx)(x.A.Item,{children:(0,A.jsx)(c.A,{type:"dashed",onClick:()=>s(),style:{width:"60%"},block:!0,children:"Add Another Table"})})]})}}),(0,A.jsxs)(x.A.Item,{style:{textAlign:"right"},children:[(0,A.jsx)(c.A,{onClick:()=>t(!1),style:{marginRight:8},children:"Cancel"}),(0,A.jsx)(c.A,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})})})};var f=s(41264),S=s(9254),_=s(88655),w=s(18413),I=s(53815),k=s(47807);const{Option:N}=d.A,C=e=>{let{tableData:t,setVisible:s,visible:r,currentStore:o,allCms:m,setAllCms:u}=e;const[b,g]=(0,l.useState)(!1),[y,v]=(0,l.useState)([]),[C,T]=(0,l.useState)(!1),[F,z]=(0,l.useState)(""),[O,P]=(0,l.useState)([]),[D,V]=(0,l.useState)({orderNumber:"",tableNumber:"",items:[],subtotal:0,tax:0,total:0}),[q]=x.A.useForm(),W=(e,s)=>{let l=m.map((l=>l.id===t.id?(l.status=s,l.current_order=e,l):l));u(l)};(0,l.useEffect)((()=>{(0,k.hV)({search:F}).then((e=>{v(e.data.rows)})).catch((e=>{h.Ay.error("Error While Fetching Items")}))}),[q,F]),(0,l.useEffect)((()=>{P([]),T(!1),V({orderNumber:"",tableNumber:"",items:[],subtotal:0,tax:0,total:0})}),[r]);(0,l.useEffect)((()=>{var e;r&&(q.resetFields(),q.setFieldsValue({table_id:t.id}),t.current_order&&(e=t.current_order,g(!0),(0,I.W8)({id:e}).then((e=>{q.setFieldsValue(null===e||void 0===e?void 0:e.data);let s=null===e||void 0===e?void 0:e.data,l={orderNumber:s.id,tableNumber:t.table_number,items:s.order_items,subtotal:s.total_price||0,tax:s.tax_precent||0,total:s.total_price||0,organisation:s.Organisation};V(l),g(!1)})).catch((e=>{var t;h.Ay.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Something Went Wrong"),console.log("err",e),g(!1)}))))}),[q,r]);const B=()=>{var e;let t=q.getFieldsValue(["order_items"]),s=0;null===t||void 0===t||null===(e=t.order_items)||void 0===e||e.map((e=>{let t=Number(null===e||void 0===e?void 0:e.price)*Number(null===e||void 0===e?void 0:e.quantity);s+=t}));let l=q.getFieldValue("tax_precent"),r=q.getFieldValue("discount_precent");s+=.01*l*s,s-=.01*r*s,q.setFieldValue("total_price",s)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(p.A,{spinning:b,children:(0,A.jsx)("div",{children:(0,A.jsxs)(x.A,{name:"order",form:q,layout:"vertical",onChange:B,onFinish:e=>{const l=e;var r;(l.table_id=l.table_id.toString(),t.current_order)?(l.order_items=[...l.order_items,...O],(0,I.FM)({id:t.current_order,body:l}).then((e=>{let s="paid"===l.status?"available":"booked",r="paid"===l.status?null:t.current_order;W(r,s),h.Ay.success("Data updated successfully")})).catch((e=>{h.Ay.error("Something Went Wrong"),console.log("err :>> ",e)}))):(l.store_id=o,null===(r=(0,I.zF)({body:l}))||void 0===r||r.then((e=>{var t;let r="paid"===l.status?null:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id,i="paid"===l.status?"available":"booked";W(r,i),h.Ay.success("Data added successfully"),s(!1)})).catch((e=>{h.Ay.error("Something Went Wrong"),console.log("err :>> ",e)})))},autoComplete:"off",children:[(0,A.jsxs)(n.A,{gutter:16,children:[(0,A.jsx)(a.A,{span:12,children:(0,A.jsx)(x.A.Item,{label:"Table number",name:"table_id",rules:[{required:!0,message:"Please select the table ID"}],children:(0,A.jsx)(d.A,{children:(0,A.jsxs)(N,{value:t.id,children:[t.table_number," - "," ("+t.no_of_seats+" Seater )"]})})})}),(0,A.jsx)(a.A,{span:12,children:(0,A.jsx)(x.A.Item,{label:"Customer Name",name:"customer_name",children:(0,A.jsx)(i.A,{})})})]}),(0,A.jsxs)(n.A,{gutter:16,children:[(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:8,children:(0,A.jsx)(x.A.Item,{label:"Total Price",name:"total_price",rules:[{required:!0,message:"Please enter the total price"}],children:(0,A.jsx)(j.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:8,children:(0,A.jsx)(x.A.Item,{label:"Discount Percent",name:"discount_precent",initialValue:0,children:(0,A.jsx)(j.A,{min:0,max:100,precision:2,style:{width:"100%"}})})}),(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:8,children:(0,A.jsx)(x.A.Item,{label:"Tax Percent",name:"tax_precent",initialValue:0,children:(0,A.jsx)(j.A,{min:0,max:100,precision:2,style:{width:"100%"}})})})]}),(0,A.jsxs)(n.A,{gutter:16,children:[(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:8,children:(0,A.jsx)(x.A.Item,{label:"Order Status",name:"status",initialValue:"pending",children:(0,A.jsxs)(d.A,{children:[(0,A.jsx)(N,{value:"pending",children:"Pending"}),(0,A.jsx)(N,{value:"preparing",children:"Preparing"}),(0,A.jsx)(N,{value:"served",children:"Served"}),(0,A.jsx)(N,{value:"paid",children:"Paid"}),(0,A.jsx)(N,{value:"canceled",children:"Canceled"})]})})}),(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:8,children:(0,A.jsx)(x.A.Item,{label:"Table Status",name:"free_table",valuePropName:"checked",children:(0,A.jsx)(f.A,{checkedChildren:"Available",unCheckedChildren:"Booked"})})})]}),(0,A.jsx)(x.A.List,{name:"order_items",children:(e,s)=>{let{add:l,remove:r}=s;return(0,A.jsxs)(A.Fragment,{children:[e.map((e=>{let{key:s,name:l,fieldKey:d,...c}=e;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("hr",{style:{margin:"20px 0",borderColor:"#e8e8e8"}}),(0,A.jsxs)(n.A,{gutter:16,align:"middle",children:[(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:6,children:(0,A.jsx)(x.A.Item,{...c,name:[l,"item_id"],fieldKey:[d,"item_id"],label:"Item Code",rules:[{required:!0,message:"Please select the item ID"}],children:(0,A.jsx)(S.A,{onSearch:e=>{z(e)},onSelect:e=>{const t=y.find((t=>t.id===e));q.setFieldsValue({order_items:{[l]:{item_name:null===t||void 0===t?void 0:t.name,price:null===t||void 0===t?void 0:t.price,quantity:1}}}),B()},options:y.map((e=>({value:e.id,label:"".concat(e.item_code," - ").concat(e.name)})))})})}),(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:6,children:(0,A.jsx)(x.A.Item,{...c,name:[l,"item_name"],fieldKey:[d,"item_name"],label:"Item Name",rules:[{required:!0,message:"Please enter the item name"}],children:(0,A.jsx)(i.A,{})})}),(0,A.jsx)(a.A,{xs:8,sm:12,md:12,lg:4,children:(0,A.jsx)(x.A.Item,{...c,name:[l,"quantity"],fieldKey:[d,"quantity"],label:"Quantity",rules:[{required:!0,message:"Please enter the quantity"}],children:(0,A.jsx)(j.A,{min:0,style:{width:"100%"}})})}),(0,A.jsx)(a.A,{xs:12,sm:12,md:12,lg:6,children:(0,A.jsx)(x.A.Item,{...c,name:[l,"price"],fieldKey:[d,"price"],label:"Unit Price",rules:[{required:!0,message:"Please enter the price"}],children:(0,A.jsx)(j.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,A.jsx)(a.A,{span:2,children:(0,A.jsx)(_.A,{onClick:()=>{const e=q.getFieldValue("order_items")[l];if(r(l),t.current_order){let t=O;t.push({...e,deleted:!0}),P(t)}B()},style:{fontSize:"20px",color:"red"}})})]},s)]})})),(0,A.jsx)(x.A.Item,{children:(0,A.jsx)(c.A,{type:"dashed",onClick:()=>l(),block:!0,children:"Add Item"})})]})}}),(0,A.jsxs)("div",{className:"flex justify-end gap-2 mt-5",children:[(0,A.jsx)(c.A,{onClick:()=>{s(!1)},children:"Cancel"}),(0,A.jsx)(c.A,{onClick:()=>{(null===D||void 0===D?void 0:D.orderNumber)>""?T(!C):h.Ay.warning("Please Save the Order")},children:"View Bill"}),(0,A.jsx)(c.A,{type:"primary",htmlType:"submit",loading:b,children:"Submit"})]})]})})}),(0,A.jsx)("div",{className:"mt-4",children:C&&(0,A.jsx)(w.A,{orderDetails:D})})]})};var T=s(77047),F=s(1068),z=s(2013),O=s(8387),P=s(28440),D=s(76191),V=s(75337),q=s(48646),W=s(78240);const{Text:B,Title:E}=T.A,{Panel:K}=F.A,R=e=>{let{allData:t,setIsEditCms:s,setTableData:l,setVisible:r}=e;return(0,A.jsx)("div",{style:{padding:"1px"},children:(0,A.jsx)(n.A,{gutter:[16,16],children:t.map((e=>(0,A.jsx)(a.A,{xs:24,sm:12,md:8,lg:6,children:(0,A.jsxs)(z.A,{title:(0,A.jsx)(E,{level:5,children:(0,A.jsxs)("div",{className:"flex justify-between items-center",children:[(0,A.jsxs)("span",{className:"text-sm sm:text-base",children:["Table No:- ",e.table_number]}),(0,A.jsx)("span",{className:"ml-5 sm:ml-16 ",onClick:()=>{r(!0),l(e)},children:e.current_order?(0,A.jsxs)(O.A,{color:"blue",children:[(0,A.jsx)(D.A,{className:"mr-1"}),"view Order"]}):(0,A.jsxs)(O.A,{color:"green",children:[(0,A.jsx)(V.A,{className:"mr-1"}),"Add Order"]})})]})}),bordered:!1,style:{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"8px"},children:[(0,A.jsx)(B,{strong:!0,children:"#ID: "}),(0,A.jsx)(B,{children:e.id}),(0,A.jsx)("br",{}),(0,A.jsx)(B,{strong:!0,children:"Total Seats: "}),(0,A.jsx)(B,{children:e.no_of_seats}),(0,A.jsx)("br",{}),(0,A.jsx)(B,{strong:!0,children:"Status: "}),"available"===e.status?(0,A.jsx)(O.A,{color:"green",children:e.status}):(0,A.jsx)(O.A,{color:"red",children:e.status}),(0,A.jsx)("br",{}),e.current_order&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(B,{strong:!0,children:"Current Order: "}),"#"+e.current_order]}),!e.current_order&&(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(B,{strong:!0,children:"Waiting For Orders"})}),(0,A.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,A.jsx)(q.A,{onClick:()=>s({isOpen:!0,cmsId:null===e||void 0===e?void 0:e.id}),style:{cursor:"pointer",color:"#1890ff"}}),(0,A.jsx)(P.A,{title:"Are you sure to delete this Table?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:(0,A.jsx)(W.A,{onClick:()=>{},style:{cursor:"pointer",color:"#ff4d4f"}})})]})]})},e.id)))})})};var L=s(40925),U=s(91734),M=s(57043),G=s(70495);const{Search:Q}=i.A,H=()=>{const[e,t]=(0,l.useState)(!1),[s,i]=(0,l.useState)(0),[x,h]=(0,l.useState)(""),[p,j]=(0,l.useState)(""),[b,y]=(0,r.fp)(G.qt),[f,S]=(0,r.fp)(G.oc),[_,w]=(0,l.useState)(!1),[I,k]=(0,l.useState)(0),[N,T]=(0,l.useState)(0),[F,z]=(0,l.useState)(!1),[O,P]=(0,l.useState)({isOpen:!1,cmsId:""}),[D,V]=(0,l.useState)([]),q=e=>{let{search:t,type:l,isAvailable:r}=e;(0,g.xH)({start:s,limit:12,search:t,type:l,isAvailable:r,store_id:b}).then((e=>{var t,s;e&&(V(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows),T(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.count))})).catch((e=>console.log("err",e)))};(0,l.useEffect)((()=>{q({search:x,type:p,isAvailable:_})}),[x,p,_,b,I,s]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(U.z,{title:"Tables",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/tables",breadcrumbName:"Tables"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,A.jsx)(L.rQ,{className:"p-3",children:(0,A.jsx)(n.A,{gutter:16,children:(0,A.jsx)(a.A,{sm:24,xs:24,lg:24,className:"",children:(0,A.jsxs)(M.C,{title:(0,A.jsx)("div",{children:(0,A.jsxs)(n.A,{gutter:[16,16],align:"middle",children:[(0,A.jsx)(a.A,{xs:24,sm:12,md:6,children:(0,A.jsxs)(d.A,{style:{width:"100%"},size:"medium",placeholder:"Status",onChange:e=>{j(e)},children:[(0,A.jsx)(Option,{value:"",children:"All"}),(0,A.jsx)(Option,{value:"booked",children:"Booked"}),(0,A.jsx)(Option,{value:"available",children:"Available"}),(0,A.jsx)(Option,{value:"service",children:"Service"}),(0,A.jsx)(Option,{value:"preparing",children:"Preparing"})]})}),(0,A.jsx)(a.A,{xs:24,sm:8,md:6,children:(0,A.jsx)(Q,{placeholder:"Table number",allowClear:!0,enterButton:"Search",size:"medium",onSearch:e=>{h(e)},style:{width:"100%"}})})]})}),moreBtn:(0,A.jsx)(c.A,{type:"primary",onClick:()=>t(!0),children:"Add"}),children:[(0,A.jsx)(R,{allData:D,setIsEditCms:P,setTableData:S,setVisible:z}),(0,A.jsx)("div",{className:"mt-2 flex justify-end",children:(0,A.jsx)(o.A,{pageSize:12,total:N,onChange:e=>{i(10*(e-1))},showSizeChanger:!1})})]})})})}),(0,A.jsx)(m.A,{title:"".concat(e?"Add Tables":"Edit Table"),destroyOnClose:!0,open:e||O.isOpen,width:1024,footer:!1,onCancel:()=>{t(!1),P({isOpen:!1,cmsId:""})},children:(0,A.jsx)(v,{setisAddCms:t,getAllData:q,isEditCms:O,setIsEditCms:P,currentStore:b,newRecord:I,setNewRecord:k})}),(0,A.jsx)(u.A,{title:f.current_order?"Update Order #"+f.current_order:"Add Order",placement:"right",onClose:()=>{z(!1)},open:F,width:window.innerWidth<768?300:600,children:(0,A.jsx)(C,{setVisible:z,tableData:f,visible:F,allCms:D,setAllCms:V,currentStore:b})})]})}},53815:(e,t,s)=>{s.d(t,{FM:()=>a,FN:()=>d,W8:()=>n,hV:()=>i,zF:()=>r});var l=s(32170);const r=async e=>{let{body:t}=e;return await l.p.post("/orders",t)},i=async e=>{let{start:t,limit:s,status:r,search:i,dates:n,currentStore:a}=e,d=i?"&search=".concat(i):"",c=r?"&status=".concat(r):"",o=a?"&store_id=".concat(a):"",m="";2===n.length&&(m="&start_date=".concat(n[0],"&end_date=").concat(n[1]));return await l.p.get("/orders?start=".concat(t,"&limit=").concat(s).concat(d).concat(c).concat(m).concat(o))},n=async e=>{let{id:t}=e;return await l.p.get("/orders/".concat(t))},a=async e=>{let{id:t,body:s}=e;return await l.p.patch("/orders/".concat(t),s)},d=async e=>{let{id:t}=e;return await l.p.delete("/orders/".concat(t))}},47807:(e,t,s)=>{s.d(t,{FM:()=>a,FN:()=>d,W8:()=>n,hV:()=>i,zF:()=>r});var l=s(32170);const r=async e=>{let{body:t}=e;return await l.p.post("/restroItems",t)},i=async e=>{let{start:t=0,limit:s=10,search:r}=e,i=r?"&search=".concat(r):"";return await l.p.get("/restroItems?start=".concat(t,"&limit=").concat(s).concat(i))},n=async e=>{let{id:t}=e;return await l.p.get("/restroItems/".concat(t))},a=async e=>{let{id:t,body:s}=e;return await l.p.patch("/restroItems/".concat(t),s)},d=async e=>{let{id:t}=e;return await l.p.delete("/restroItems/".concat(t))}},2543:(e,t,s)=>{s.d(t,{FM:()=>a,W8:()=>n,xH:()=>i,zF:()=>r});var l=s(32170);const r=async e=>{let{body:t}=e;return await l.p.post("/tables",t)},i=async e=>{let{start:t=0,limit:s=10,search:r,type:i,isAvailable:n,store_id:a}=e,d=r?"&search=".concat(r):"",c=i?"&status=".concat(i):"",o=a?"&store_id=".concat(a):"",m=n?"&isAvailable=".concat(n):"";return await l.p.get("/tables?start=".concat(t,"&limit=").concat(s).concat(d).concat(c).concat(m).concat(o))},n=async e=>{let{id:t}=e;return await l.p.get("/tables/".concat(t))},a=async e=>{let{id:t,body:s}=e;return await l.p.patch("/tables/".concat(t),s)}}}]);
//# sourceMappingURL=828.ea71afe2.chunk.js.map