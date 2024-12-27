"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[733],{91471:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var l=n(65043),r=n(37122),a=n(33307),s=n(47419),i=n(11645),o=n(94406),c=n(89421),d=n(69602),u=n(33946),m=n(58168),h=n(64467),v=n(5544),p=n(53727),x=n(64600),b=n.n(x),f=n(89379),A=n(44347),y=n(52664),g=n(7419),j=n(25001),C=n(48060);const w=l.createContext(null);const k=function(e){var t=e.prefixCls,n=e.className,r=e.style,a=e.children,s=e.containerRef,i=e.id,o={onMouseEnter:e.onMouseEnter,onMouseOver:e.onMouseOver,onMouseLeave:e.onMouseLeave,onClick:e.onClick,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp};return l.createElement(l.Fragment,null,l.createElement("div",(0,m.A)({id:i,className:b()("".concat(t,"-content"),n),style:(0,f.A)({},r),"aria-modal":"true",role:"dialog",ref:s},o),a))};var S=n(97907);function _(e){return"string"===typeof e&&String(Number(e))===e?((0,S.Ay)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var N={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function E(e,t){var n,r,a,s,i=e.prefixCls,o=e.open,c=e.placement,d=e.inline,u=e.push,p=e.forceRender,x=e.autoFocus,A=e.keyboard,y=e.rootClassName,S=e.rootStyle,E=e.zIndex,O=e.className,I=e.id,T=e.style,D=e.motion,F=e.width,P=e.height,K=e.children,M=e.contentWrapperStyle,R=e.mask,V=e.maskClosable,L=e.maskMotion,z=e.maskClassName,U=e.maskStyle,W=e.afterOpenChange,q=e.onClose,B=e.onMouseEnter,H=e.onMouseOver,G=e.onMouseLeave,Q=e.onClick,J=e.onKeyDown,X=e.onKeyUp,Y=l.useRef(),Z=l.useRef(),$=l.useRef();l.useImperativeHandle(t,(function(){return Y.current}));l.useEffect((function(){var e;o&&x&&(null===(e=Y.current)||void 0===e||e.focus({preventScroll:!0}))}),[o]);var ee=l.useState(!1),te=(0,v.A)(ee,2),ne=te[0],le=te[1],re=l.useContext(w),ae=null!==(n=null!==(r=null===(a=!1===u?{distance:0}:!0===u?{}:u||{})||void 0===a?void 0:a.distance)&&void 0!==r?r:null===re||void 0===re?void 0:re.pushDistance)&&void 0!==n?n:180,se=l.useMemo((function(){return{pushDistance:ae,push:function(){le(!0)},pull:function(){le(!1)}}}),[ae]);l.useEffect((function(){var e,t;o?null===re||void 0===re||null===(e=re.push)||void 0===e||e.call(re):null===re||void 0===re||null===(t=re.pull)||void 0===t||t.call(re)}),[o]),l.useEffect((function(){return function(){var e;null===re||void 0===re||null===(e=re.pull)||void 0===e||e.call(re)}}),[]);var ie=R&&l.createElement(g.Ay,(0,m.A)({key:"mask"},L,{visible:o}),(function(e,t){var n=e.className,r=e.style;return l.createElement("div",{className:b()("".concat(i,"-mask"),n,z),style:(0,f.A)((0,f.A)({},r),U),onClick:V&&o?q:void 0,ref:t})})),oe="function"===typeof D?D(c):D,ce={};if(ne&&ae)switch(c){case"top":ce.transform="translateY(".concat(ae,"px)");break;case"bottom":ce.transform="translateY(".concat(-ae,"px)");break;case"left":ce.transform="translateX(".concat(ae,"px)");break;default:ce.transform="translateX(".concat(-ae,"px)")}"left"===c||"right"===c?ce.width=_(F):ce.height=_(P);var de={onMouseEnter:B,onMouseOver:H,onMouseLeave:G,onClick:Q,onKeyDown:J,onKeyUp:X},ue=l.createElement(g.Ay,(0,m.A)({key:"panel"},oe,{visible:o,forceRender:p,onVisibleChanged:function(e){null===W||void 0===W||W(e)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),(function(t,n){var r=t.className,a=t.style;return l.createElement("div",(0,m.A)({className:b()("".concat(i,"-content-wrapper"),r),style:(0,f.A)((0,f.A)((0,f.A)({},ce),a),M)},(0,C.A)(e,{data:!0})),l.createElement(k,(0,m.A)({id:I,containerRef:n,prefixCls:i,className:O,style:T},de),K))})),me=(0,f.A)({},S);return E&&(me.zIndex=E),l.createElement(w.Provider,{value:se},l.createElement("div",{className:b()(i,"".concat(i,"-").concat(c),y,(s={},(0,h.A)(s,"".concat(i,"-open"),o),(0,h.A)(s,"".concat(i,"-inline"),d),s)),style:me,tabIndex:-1,ref:Y,onKeyDown:function(e){var t=e.keyCode,n=e.shiftKey;switch(t){case j.A.TAB:var l;if(t===j.A.TAB)if(n||document.activeElement!==$.current){if(n&&document.activeElement===Z.current){var r;null===(r=$.current)||void 0===r||r.focus({preventScroll:!0})}}else null===(l=Z.current)||void 0===l||l.focus({preventScroll:!0});break;case j.A.ESC:q&&A&&(e.stopPropagation(),q(e))}}},ie,l.createElement("div",{tabIndex:0,ref:Z,style:N,"aria-hidden":"true","data-sentinel":"start"}),ue,l.createElement("div",{tabIndex:0,ref:$,style:N,"aria-hidden":"true","data-sentinel":"end"})))}const O=l.forwardRef(E);const I=function(e){var t=e.open,n=void 0!==t&&t,r=e.prefixCls,a=void 0===r?"rc-drawer":r,s=e.placement,i=void 0===s?"right":s,o=e.autoFocus,c=void 0===o||o,d=e.keyboard,u=void 0===d||d,m=e.width,h=void 0===m?378:m,p=e.mask,x=void 0===p||p,b=e.maskClosable,g=void 0===b||b,j=e.getContainer,C=e.forceRender,w=e.afterOpenChange,k=e.destroyOnClose,S=e.onMouseEnter,_=e.onMouseOver,N=e.onMouseLeave,E=e.onClick,I=e.onKeyDown,T=e.onKeyUp,D=l.useState(!1),F=(0,v.A)(D,2),P=F[0],K=F[1];var M=l.useState(!1),R=(0,v.A)(M,2),V=R[0],L=R[1];(0,y.A)((function(){L(!0)}),[]);var z=!!V&&n,U=l.useRef(),W=l.useRef();(0,y.A)((function(){z&&(W.current=document.activeElement)}),[z]);if(!C&&!P&&!z&&k)return null;var q={onMouseEnter:S,onMouseOver:_,onMouseLeave:N,onClick:E,onKeyDown:I,onKeyUp:T},B=(0,f.A)((0,f.A)({},e),{},{open:z,prefixCls:a,placement:i,autoFocus:c,keyboard:u,width:h,mask:x,maskClosable:g,inline:!1===j,afterOpenChange:function(e){var t,n;(K(e),null===w||void 0===w||w(e),e||!W.current||(null===(t=U.current)||void 0===t?void 0:t.contains(W.current)))||(null===(n=W.current)||void 0===n||n.focus({preventScroll:!0}))},ref:U},q);return l.createElement(A.A,{open:z||C||P,autoDestroy:!1,getContainer:j,autoLock:x&&(z||P)},l.createElement(O,B))};var T=n(35296),D=n(16436),F=n(83290),P=n(29592),K=n(45132),M=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},R=((0,P.P)("default","large"),{distance:180});const V=function(e){var t=e.width,n=e.height,r=e.size,a=void 0===r?"default":r,s=e.closable,i=void 0===s||s,o=e.mask,c=void 0===o||o,d=e.push,u=void 0===d?R:d,x=e.closeIcon,f=void 0===x?l.createElement(p.A,null):x,A=e.bodyStyle,y=e.drawerStyle,g=e.className,j=e.visible,C=e.open,w=e.children,k=e.style,S=e.title,_=e.headerStyle,N=e.onClose,E=e.footer,O=e.footerStyle,P=e.prefixCls,V=e.getContainer,L=e.extra,z=e.afterVisibleChange,U=e.afterOpenChange,W=M(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),q=l.useContext(T.QO),B=q.getPopupContainer,H=q.getPrefixCls,G=q.direction,Q=H("drawer",P),J=void 0===V&&B?function(){return B(document.body)}:V,X=i&&l.createElement("button",{type:"button",onClick:N,"aria-label":"Close",className:"".concat(Q,"-close")},f);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach((function(e){var t=(0,v.A)(e,2);t[0],t[1]}));var Y=b()((0,h.A)({"no-mask":!c},"".concat(Q,"-rtl"),"rtl"===G),g),Z=l.useMemo((function(){return null!==t&&void 0!==t?t:"large"===a?736:378}),[t,a]),$=l.useMemo((function(){return null!==n&&void 0!==n?n:"large"===a?736:378}),[n,a]),ee={motionName:(0,F.by)(Q,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500};return l.createElement(K.K6,null,l.createElement(D.XB,{status:!0,override:!0},l.createElement(I,(0,m.A)({prefixCls:Q,onClose:N},W,{open:null!==C&&void 0!==C?C:j,mask:c,push:u,width:Z,height:$,rootClassName:Y,getContainer:J,afterOpenChange:function(e){null===U||void 0===U||U(e),null===z||void 0===z||z(e)},maskMotion:ee,motion:function(e){return{motionName:(0,F.by)(Q,"panel-motion-".concat(e)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},rootStyle:k}),l.createElement("div",{className:"".concat(Q,"-wrapper-body"),style:(0,m.A)({},y)},S||i?l.createElement("div",{className:b()("".concat(Q,"-header"),(0,h.A)({},"".concat(Q,"-header-close-only"),i&&!S&&!L)),style:_},l.createElement("div",{className:"".concat(Q,"-header-title")},X,S&&l.createElement("div",{className:"".concat(Q,"-title")},S)),L&&l.createElement("div",{className:"".concat(Q,"-extra")},L)):null,l.createElement("div",{className:"".concat(Q,"-body"),style:A},w),function(){if(!E)return null;var e="".concat(Q,"-footer");return l.createElement("div",{className:e,style:O},E)}()))))};var L=n(50289),z=n(48193),U=n(5397),W=n(3428),q=n(28440),B=n(61966),H=n(2543),G=n(70579);const{Option:Q}=o.A,J=e=>{let{setisAddCms:t,getAllData:n,setIsEditCms:r,isEditCms:d,currentStore:u,setNewRecord:m,newRecord:h}=e;const[v,p]=(0,l.useState)(!1),[x]=L.A.useForm();return(0,l.useEffect)((()=>{null!==d&&void 0!==d&&d.cmsId&&(p(!0),(0,H.W8)({id:null===d||void 0===d?void 0:d.cmsId}).then((e=>{x.setFieldsValue({tables:[null===e||void 0===e?void 0:e.data]}),p(!1)})).catch((e=>{console.log("err",e),p(!1)})))}),[null===d||void 0===d?void 0:d.cmsId]),(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(U.A,{spinning:v,children:(0,G.jsx)("div",{children:(0,G.jsxs)(L.A,{form:x,layout:"vertical",onFinish:e=>{const n=e.tables.map((e=>({...e,store_id:u})));if(null!==d&&void 0!==d&&d.cmsId){var l,a,s;let e={no_of_seats:null===(l=n[0])||void 0===l?void 0:l.no_of_seats,status:null===(a=n[0])||void 0===a?void 0:a.status,table_number:null===(s=n[0])||void 0===s?void 0:s.table_number};(0,H.FM)({id:null===d||void 0===d?void 0:d.cmsId,body:e}).then((e=>{r({isOpen:!1,cmsId:""}),m(h+1),z.Ay.success("Data updated successfully")})).catch((e=>console.log("err",e)))}else{var i;null===(i=(0,H.zF)({body:n}))||void 0===i||i.then((e=>{t(!1),m(h+1),z.Ay.success("Tables added successfully")})).catch((e=>{console.log("err :>> ",e)}))}},initialValues:{tables:[{status:"available"}]},children:[(0,G.jsx)(L.A.List,{name:"tables",children:(e,t)=>{let{add:n,remove:l}=t;return(0,G.jsxs)(G.Fragment,{children:[e.map(((t,n)=>(0,G.jsx)("div",{style:{marginBottom:20},children:(0,G.jsxs)(s.A,{gutter:16,align:"middle",children:[(0,G.jsx)(i.A,{xs:24,sm:24,md:24,lg:8,children:(0,G.jsx)(L.A.Item,{...t,label:"Table Number",name:[t.name,"table_number"],fieldKey:[t.fieldKey,"table_number"],rules:[{type:"string",message:"Table number must be a string."}],children:(0,G.jsx)(a.A,{placeholder:"Enter table number"})})}),(0,G.jsx)(i.A,{xs:24,sm:24,md:24,lg:8,children:(0,G.jsx)(L.A.Item,{...t,label:"Number of Seats",name:[t.name,"no_of_seats"],fieldKey:[t.fieldKey,"no_of_seats"],rules:[{required:!0,message:"Please enter the number of seats."},{type:"number",min:1,message:"Number of seats must be at least 1."}],children:(0,G.jsx)(W.A,{min:1,placeholder:"Enter number of seats",style:{width:"100%"}})})}),(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:6,children:(0,G.jsx)(L.A.Item,{...t,label:"Status",name:[t.name,"status"],fieldKey:[t.fieldKey,"status"],rules:[{required:!0,message:"Please select the status."}],children:(0,G.jsxs)(o.A,{placeholder:"Select status",children:[(0,G.jsx)(Q,{value:"available",children:"Available"}),(0,G.jsx)(Q,{value:"booked",children:"Booked"}),(0,G.jsx)(Q,{value:"service",children:"Service"}),(0,G.jsx)(Q,{value:"preparing",children:"Preparing"})]})})}),(0,G.jsx)(i.A,{span:2,children:e.length>1&&(0,G.jsx)(B.A,{onClick:()=>l(t.name),style:{fontSize:"20px",color:"#ff4d4f",cursor:"pointer",marginTop:"30px"}})})]})},t.key))),!(null!==d&&void 0!==d&&d.cmsId)&&(0,G.jsx)(L.A.Item,{children:(0,G.jsx)(c.A,{type:"dashed",onClick:()=>n(),style:{width:"60%"},block:!0,children:"Add Another Table"})})]})}}),(0,G.jsxs)(L.A.Item,{style:{textAlign:"right"},children:[(0,G.jsx)(c.A,{onClick:()=>t(!1),style:{marginRight:8},children:"Cancel"}),(0,G.jsx)(c.A,{type:"primary",htmlType:"submit",style:{marginRight:8},children:"Submit"}),(0,G.jsx)(q.A,{title:"Are you sure to delete this Table?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:(0,G.jsx)(c.A,{type:"danger",onClick:()=>{},children:"Delete"})})]})]})})})})};var X=n(41264),Y=n(9254),Z=n(88655),$=n(45904),ee=n(65239),te=n.n(ee),ne=n(89680),le=n(53815),re=n(47807),ae=n(19662);const{Option:se}=o.A,ie=e=>{let{tableData:t,setVisible:n,visible:r,currentStore:d,allCms:u,setAllCms:m}=e;const[h,v]=(0,l.useState)(!1),[p,x]=(0,l.useState)([]),[b,f]=(0,l.useState)(!1),[A,y]=(0,l.useState)(""),[g,j]=(0,l.useState)([]),[C,w]=(0,l.useState)({orderNumber:"",tableNumber:"",items:[],subtotal:0,tax:0,total:0}),[k]=L.A.useForm(),S=(e,n)=>{let l=u.map((l=>l.id===t.id?(l.status=n,l.current_order=e,l):l));m(l)};(0,l.useEffect)((()=>{(0,re.hV)({search:A}).then((e=>{x(e.data.rows)})).catch((e=>{z.Ay.error("Error While Fetching Items")}))}),[k,A]),(0,l.useEffect)((()=>{j([]),f(!1),w({orderNumber:"",tableNumber:"",items:[],subtotal:0,tax:0,total:0})}),[r]);const _=async e=>{v(!0),(0,le.W8)({id:e}).then((e=>{k.setFieldsValue(null===e||void 0===e?void 0:e.data);let n=null===e||void 0===e?void 0:e.data,l={orderNumber:n.id,customer_name:n.customer_name,customer_phone:n.customer_phone,tableNumber:t.table_number,items:n.order_items,subtotal:n.total_price||0,tax:n.tax_precent||0,total:n.total_price||0,organisation:n.Organisation,store:n.Store,user:n.User};w(l),v(!1)})).catch((e=>{var t;z.Ay.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Something Went Wrong"),console.log("err",e),v(!1)}))};(0,l.useEffect)((()=>{r&&(k.resetFields(),k.setFieldsValue({table_id:t.id}),t.current_order&&_(t.current_order))}),[k,r]);const N=()=>{var e;let t=k.getFieldsValue(["order_items"]),n=0;null===t||void 0===t||null===(e=t.order_items)||void 0===e||e.map((e=>{let t=Number(null===e||void 0===e?void 0:e.price)*Number(null===e||void 0===e?void 0:e.quantity);n+=t}));let l=k.getFieldValue("tax_precent"),r=k.getFieldValue("discount_precent");n+=.01*l*n,n-=.01*r*n,k.setFieldValue("total_price",n)};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(U.A,{spinning:h,children:(0,G.jsx)("div",{children:(0,G.jsxs)(L.A,{name:"order",form:k,layout:"vertical",onChange:N,onFinish:e=>{const l=e;var r;(l.table_id=l.table_id.toString(),t.current_order)?(l.order_items=[...l.order_items,...g],(0,le.FM)({id:t.current_order,body:l}).then((e=>{let n="paid"===l.status?"available":"booked",r="paid"===l.status?null:t.current_order;S(r,n),z.Ay.success("Data updated successfully")})).catch((e=>{z.Ay.error("Something Went Wrong"),console.log("err :>> ",e)}))):(l.store_id=d,null===(r=(0,le.zF)({body:l}))||void 0===r||r.then((e=>{var t;let r="paid"===l.status?null:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id,a="paid"===l.status?"available":"booked";S(r,a),z.Ay.success("Data added successfully"),n(!1)})).catch((e=>{z.Ay.error("Something Went Wrong"),console.log("err :>> ",e)})))},autoComplete:"off",children:[(0,G.jsxs)(s.A,{gutter:16,children:[(0,G.jsx)(i.A,{span:12,children:(0,G.jsx)(L.A.Item,{label:"Table number",name:"table_id",rules:[{required:!0,message:"Please select the table ID"}],children:(0,G.jsx)(o.A,{children:(0,G.jsxs)(se,{value:t.id,children:[t.table_number," - "," ("+t.no_of_seats+" Seater )"]})})})}),(0,G.jsx)(i.A,{span:12,children:(0,G.jsx)(L.A.Item,{label:"Customer Name",name:"customer_name",children:(0,G.jsx)(a.A,{})})})]}),(0,G.jsx)(s.A,{gutter:16,children:(0,G.jsx)(i.A,{span:12,children:(0,G.jsx)(L.A.Item,{label:"Customer Phone",name:"customer_phone",children:(0,G.jsx)(a.A,{})})})}),(0,G.jsxs)(s.A,{gutter:16,children:[(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:8,children:(0,G.jsx)(L.A.Item,{label:"Total Price",name:"total_price",rules:[{required:!0,message:"Please enter the total price"}],children:(0,G.jsx)(W.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:8,children:(0,G.jsx)(L.A.Item,{label:"Discount Percent",name:"discount_precent",initialValue:0,children:(0,G.jsx)(W.A,{min:0,max:100,precision:2,style:{width:"100%"}})})}),(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:8,children:(0,G.jsx)(L.A.Item,{label:"Gst",name:"tax_precent",initialValue:5,children:(0,G.jsx)(W.A,{min:0,max:100,precision:2,style:{width:"100%"}})})})]}),(0,G.jsxs)(s.A,{gutter:16,children:[(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:8,children:(0,G.jsx)(L.A.Item,{label:"Order Status",name:"status",initialValue:"pending",children:(0,G.jsxs)(o.A,{children:[(0,G.jsx)(se,{value:"pending",children:"Pending"}),(0,G.jsx)(se,{value:"preparing",children:"Preparing"}),(0,G.jsx)(se,{value:"served",children:"Served"}),(0,G.jsx)(se,{value:"paid",children:"Paid"}),(0,G.jsx)(se,{value:"canceled",children:"Canceled"})]})})}),(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:8,children:(0,G.jsx)(L.A.Item,{label:"Table Status",name:"free_table",valuePropName:"checked",children:(0,G.jsx)(X.A,{checkedChildren:"Available",unCheckedChildren:"Booked"})})})]}),(0,G.jsx)(L.A.List,{name:"order_items",children:(e,n)=>{let{add:l,remove:r}=n;return(0,G.jsxs)(G.Fragment,{children:[e.map((e=>{let{key:n,name:l,fieldKey:o,...c}=e;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("hr",{style:{margin:"20px 0",borderColor:"#e8e8e8"}}),(0,G.jsxs)(s.A,{gutter:16,align:"middle",children:[(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:6,children:(0,G.jsx)(L.A.Item,{...c,name:[l,"item_id"],fieldKey:[o,"item_id"],label:"Item Code",rules:[{required:!0,message:"Please select the item ID"}],children:(0,G.jsx)(Y.A,{onSearch:e=>{y(e)},onSelect:e=>{const t=p.find((t=>t.id===e));k.setFieldsValue({order_items:{[l]:{item_name:null===t||void 0===t?void 0:t.name,price:null===t||void 0===t?void 0:t.price,quantity:1}}}),N()},options:p.map((e=>({value:e.id,label:"".concat(e.name," - ").concat(e.item_code)})))})})}),(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:6,children:(0,G.jsx)(L.A.Item,{...c,name:[l,"item_name"],fieldKey:[o,"item_name"],label:"Item Name",rules:[{required:!0,message:"Please enter the item name"}],children:(0,G.jsx)(a.A,{})})}),(0,G.jsx)(i.A,{xs:8,sm:12,md:12,lg:4,children:(0,G.jsx)(L.A.Item,{...c,name:[l,"quantity"],fieldKey:[o,"quantity"],label:"Quantity",rules:[{required:!0,message:"Please enter the quantity"}],children:(0,G.jsx)(W.A,{min:0,style:{width:"100%"}})})}),(0,G.jsx)(i.A,{xs:12,sm:12,md:12,lg:6,children:(0,G.jsx)(L.A.Item,{...c,name:[l,"price"],fieldKey:[o,"price"],label:"Unit Price",rules:[{required:!0,message:"Please enter the price"}],children:(0,G.jsx)(W.A,{min:0,precision:2,style:{width:"100%"}})})}),(0,G.jsx)(i.A,{span:2,children:(0,G.jsx)(Z.A,{onClick:()=>{const e=k.getFieldValue("order_items")[l];if(r(l),t.current_order){let t=g;t.push({...e,deleted:!0}),j(t)}N()},style:{fontSize:"20px",color:"red"}})})]},n)]})})),(0,G.jsx)(L.A.Item,{children:(0,G.jsx)(c.A,{type:"dashed",onClick:()=>l(),block:!0,children:"Add Item"})})]})}}),(0,G.jsxs)("div",{className:"flex justify-end gap-2 mt-5",children:[(0,G.jsx)(c.A,{htmlType:"button",onClick:()=>{n(!1)},children:"Cancel"}),(0,G.jsx)(c.A,{onClick:async()=>{try{v(!0),await _(t.current_order);const e=await(0,ae.J)(C);console.log("===",e);const n=document.createElement("div");n.style.position="absolute",document.body.appendChild(n),n.innerHTML=e,te()(n).then((e=>{const t=e.toDataURL("image/png"),l=80*e.height/e.width,r=new $.Ay("p","mm",[80,l]);r.addImage(t,"PNG",0,0,80,l);const a=r.output("blob"),s=URL.createObjectURL(a);printJS({printable:s,type:"pdf",documentTitle:"Order Bill"}),document.body.removeChild(n)})),v(!1)}catch(e){v(!1),z.Ay.warning("Something went wrong."),console.log(e)}},htmlType:"button",children:"Print"}),(0,G.jsx)(c.A,{onClick:async()=>{try{v(!0),await _(t.current_order);const e=await(0,ae.W)(C),n=document.createElement("div");n.style.position="absolute",document.body.appendChild(n),n.innerHTML=e,te()(n).then((e=>{const t=e.toDataURL("image/png"),l=80*e.height/e.width,r=new $.Ay("p","mm",[80,l]);r.addImage(t,"PNG",0,0,80,l);const a=r.output("blob"),s=URL.createObjectURL(a);printJS({printable:s,type:"pdf",documentTitle:"Order Bill"}),document.body.removeChild(n)})),v(!1)}catch(e){v(!1),z.Ay.warning("Something went wrong."),console.log(e)}},htmlType:"button",children:"Print Kot"}),(0,G.jsx)(c.A,{type:"primary",htmlType:"submit",loading:h,children:"Submit"}),(0,G.jsx)(c.A,{onClick:()=>{(0,le.FM)({id:t.current_order,body:{free_table:!0,table_id:t.id.toString()}}).then((e=>{S(null,"available"),z.Ay.success("Table status updated.")})).catch((e=>{z.Ay.error("Something Went Wrong"),console.log("err :>> ",e)}))},type:"ghost",htmlType:"button",loading:h,children:"Free Table"})]})]})})}),(0,G.jsx)("div",{className:"mt-4",children:b&&(0,G.jsx)(ne.A,{orderDetails:C})})]})};var oe=n(77047),ce=n(1068),de=n(26655),ue=n(8387),me=n(76191),he=n(75337),ve=n(48646);const{Text:pe,Title:xe}=oe.A,{Panel:be}=ce.A,fe=e=>{let{allData:t,setIsEditCms:n,setTableData:l,setVisible:r}=e;return(0,G.jsx)("div",{style:{padding:"1px"},children:(0,G.jsx)(s.A,{gutter:[16,16],children:t.map((e=>(0,G.jsx)(i.A,{xs:24,sm:12,md:8,lg:6,children:(0,G.jsxs)(de.A,{bordered:!0,style:{border:"1px solid #a158e0"},children:[(0,G.jsxs)("div",{className:"flex justify-between items-center",children:[(0,G.jsxs)(pe,{strong:!0,children:["Table: ",e.table_number]}),(0,G.jsx)("span",{className:"ml-5 sm:ml-16 ",onClick:()=>{r(!0),l(e)},children:e.current_order?(0,G.jsxs)(ue.A,{color:"blue",children:[(0,G.jsx)(me.A,{className:"mr-1"}),"view Order"]}):(0,G.jsxs)(ue.A,{color:"green",children:[(0,G.jsx)(he.A,{className:"mr-1"}),"Add Order"]})})]}),(0,G.jsx)(pe,{strong:!0,children:"Status: "}),"available"===e.status?(0,G.jsx)(ue.A,{color:"green",children:e.status}):(0,G.jsx)(ue.A,{color:"red",children:e.status}),(0,G.jsx)("br",{}),e.current_order&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(pe,{children:"Current Order: "}),"#"+e.current_order]}),!e.current_order&&(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(pe,{children:"Ready For Orders"})}),(0,G.jsx)("div",{className:"flex justify-between mt-2",children:(0,G.jsx)(ve.A,{onClick:()=>n({isOpen:!0,cmsId:null===e||void 0===e?void 0:e.id}),style:{cursor:"pointer",color:"#1890ff"}})})]})},e.id)))})})};var Ae=n(40925),ye=n(91734),ge=n(57043),je=n(70495);const{Search:Ce}=a.A,we=()=>{const[e,t]=(0,l.useState)(!1),[n,a]=(0,l.useState)(0),[m,h]=(0,l.useState)(""),[v,p]=(0,l.useState)(""),[x,b]=(0,r.fp)(je.qt),[f,A]=(0,r.fp)(je.oc),[y,g]=(0,l.useState)(!1),[j,C]=(0,l.useState)(0),[w,k]=(0,l.useState)(0),[S,_]=(0,l.useState)(!1),[N,E]=(0,l.useState)({isOpen:!1,cmsId:""}),[O,I]=(0,l.useState)([]),T=e=>{let{search:t,type:l,isAvailable:r}=e;(0,H.xH)({start:n,limit:12,search:t,type:l,isAvailable:r,store_id:x}).then((e=>{var t,n;e&&(I(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows),k(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.count))})).catch((e=>console.log("err",e)))};(0,l.useEffect)((()=>{T({search:m,type:v,isAvailable:y})}),[m,v,y,x,j,n]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ye.z,{title:"Tables",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/tables",breadcrumbName:"Tables"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,G.jsx)(Ae.rQ,{className:"p-3",children:(0,G.jsx)(s.A,{gutter:16,children:(0,G.jsx)(i.A,{sm:24,xs:24,lg:24,className:"",children:(0,G.jsxs)(ge.C,{title:(0,G.jsx)("div",{children:(0,G.jsxs)(s.A,{gutter:[16,16],align:"middle",children:[(0,G.jsx)(i.A,{xs:24,sm:12,md:6,children:(0,G.jsxs)(o.A,{style:{width:"100%"},size:"medium",placeholder:"Status",onChange:e=>{p(e)},children:[(0,G.jsx)(Option,{value:"",children:"All"}),(0,G.jsx)(Option,{value:"booked",children:"Booked"}),(0,G.jsx)(Option,{value:"available",children:"Available"}),(0,G.jsx)(Option,{value:"service",children:"Service"}),(0,G.jsx)(Option,{value:"preparing",children:"Preparing"})]})}),(0,G.jsx)(i.A,{xs:24,sm:8,md:6,children:(0,G.jsx)(Ce,{placeholder:"Table number",allowClear:!0,enterButton:"Search",size:"medium",onSearch:e=>{h(e)},style:{width:"100%"}})})]})}),moreBtn:(0,G.jsx)(c.A,{type:"primary",onClick:()=>t(!0),children:"Add"}),children:[(0,G.jsx)(fe,{allData:O,setIsEditCms:E,setTableData:A,setVisible:_}),(0,G.jsx)("div",{className:"mt-2 flex justify-end",children:(0,G.jsx)(d.A,{pageSize:12,total:w,onChange:e=>{a(10*(e-1))},showSizeChanger:!1})})]})})})}),(0,G.jsx)(u.A,{title:"".concat(e?"Add Tables":"Edit Table"),destroyOnClose:!0,open:e||N.isOpen,width:1024,footer:!1,onCancel:()=>{t(!1),E({isOpen:!1,cmsId:""})},children:(0,G.jsx)(J,{setisAddCms:t,getAllData:T,isEditCms:N,setIsEditCms:E,currentStore:x,newRecord:j,setNewRecord:C})}),(0,G.jsx)(V,{title:f.current_order?"Update Order #"+f.current_order:"Add Order",placement:"right",onClose:()=>{_(!1)},open:S,width:window.innerWidth<768?300:600,children:(0,G.jsx)(ie,{setVisible:_,tableData:f,visible:S,allCms:O,setAllCms:I,currentStore:x})})]})}},61966:(e,t,n)=>{n.d(t,{A:()=>o});var l=n(89379),r=n(65043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var s=n(22172),i=function(e,t){return r.createElement(s.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:a}))};i.displayName="DeleteOutlined";const o=r.forwardRef(i)},41264:(e,t,n)=>{n.d(t,{A:()=>g});var l=n(58168),r=n(64467),a=n(40164),s=n(64600),i=n.n(s),o=n(5544),c=n(80045),d=n(65043),u=n(28678),m=n(25001),h=d.forwardRef((function(e,t){var n,l=e.prefixCls,a=void 0===l?"rc-switch":l,s=e.className,h=e.checked,v=e.defaultChecked,p=e.disabled,x=e.loadingIcon,b=e.checkedChildren,f=e.unCheckedChildren,A=e.onClick,y=e.onChange,g=e.onKeyDown,j=(0,c.A)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,u.A)(!1,{value:h,defaultValue:v}),w=(0,o.A)(C,2),k=w[0],S=w[1];function _(e,t){var n=k;return p||(S(n=e),null===y||void 0===y||y(n,t)),n}var N=i()(a,s,(n={},(0,r.A)(n,"".concat(a,"-checked"),k),(0,r.A)(n,"".concat(a,"-disabled"),p),n));return d.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":k,disabled:p,className:N,ref:t,onKeyDown:function(e){e.which===m.A.LEFT?_(!1,e):e.which===m.A.RIGHT&&_(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var t=_(!k,e);null===A||void 0===A||A(t,e)}}),x,d.createElement("span",{className:"".concat(a,"-inner")},k?b:f))}));h.displayName="Switch";const v=h;var p=n(35296),x=n(78440),b=n(87063),f=n(16021),A=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},y=d.forwardRef((function(e,t){var n,s=e.prefixCls,o=e.size,c=e.disabled,u=e.loading,m=e.className,h=void 0===m?"":m,y=A(e,["prefixCls","size","disabled","loading","className"]),g=d.useContext(p.QO),j=g.getPrefixCls,C=g.direction,w=d.useContext(b.A),k=d.useContext(x.A),S=(null!==c&&void 0!==c?c:k)||u,_=j("switch",s),N=d.createElement("div",{className:"".concat(_,"-handle")},u&&d.createElement(a.A,{className:"".concat(_,"-loading-icon")})),E=i()((n={},(0,r.A)(n,"".concat(_,"-small"),"small"===(o||w)),(0,r.A)(n,"".concat(_,"-loading"),u),(0,r.A)(n,"".concat(_,"-rtl"),"rtl"===C),n),h);return d.createElement(f.A,{insertExtraNode:!0},d.createElement(v,(0,l.A)({},y,{prefixCls:_,className:E,disabled:S,ref:t,loadingIcon:N})))}));y.__ANT_SWITCH=!0;const g=y}}]);
//# sourceMappingURL=733.9824ff6c.chunk.js.map