"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[634],{2113:(e,t,n)=>{n.d(t,{A:()=>r});n(5043);const r=n.p+"static/media/home.f87e389a5c1850fe48b55156d6a0d7b7.svg"},7500:(e,t,n)=>{n.d(t,{$:()=>p});var r,a,l=n(5043),s=n(7528),i=n(1802),o=n(4574);const c=i.A.Group,d=(0,o.Ay)(i.A)(r||(r=(0,s.A)(["\n    \n"])));(0,o.Ay)(c)(a||(a=(0,s.A)(["\n    \n"])));var u=n(579);function p(e){const{type:t,shape:n,icon:r,size:a,outlined:s,ghost:i,transparented:o,raised:c,squared:p,color:f,social:m,load:h,children:x,...b}=e,[v,g]=(0,l.useState)({loading:!1});return(0,u.jsx)(d,{squared:p,outlined:s?1:0,ghost:i,transparent:o?1:0,raised:c?1:0,data:t,size:a,shape:n,type:t,icon:r,color:f,social:m,onClick:h&&(()=>{g({loading:!0})}),loading:v.loading,...b,children:x})}p.defaultProps={type:"default"}},1734:(e,t,n)=>{n.d(t,{z:()=>m});var r,a,l=n(7775),s=n(5475),i=n(7083),o=n(7528),c=n(7947),d=n(4574);const u=(0,d.Ay)(c.A)(r||(r=(0,o.A)(["\n  .ant-breadcrumb {\n    ol{\n      @media (max-width: 575px) {\n        justify-content: center;\n      }\n    }\n    li{\n        display:flex;\n        align-items:center;\n    }\n  }\n"]))),p=d.Ay.div(a||(a=(0,o.A)(["\n  \n"])));var f=n(579);function m(e){const{title:t,subTitle:r,routes:a,buttons:o,ghost:c,bgColor:d,className:m}=e,h=a?(0,f.jsx)(l.A,{className:"flex order-2 relative top-1.5",separator:(0,f.jsx)("span",{className:"inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full"}),children:a.map(((e,t)=>t+1===a.length?(0,f.jsx)(l.A.Item,{className:"text-breadcrumbs dark:text-white30 text-15",children:e.breadcrumbName},t):(0,f.jsxs)(l.A.Item,{className:"inline-flex items-start",children:[(0,f.jsx)(i.k,{className:"relative top-0.5 ltr:mr-2 rtl:ml-2 [&>div>svg]:text-[#8c90a4] dark:[&>div>svg]:text-white60 ",src:n(2113).A})," ",(0,f.jsx)(s.N_,{to:e.path,className:"text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm",children:e.breadcrumbName})]},t)))}):"";return(0,f.jsx)(p,{bgColor:d,children:(0,f.jsx)(u,{className:"".concat(m),title:t,subTitle:r,breadcrumb:h,extra:o,ghost:c})})}},7772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var r=n(5043),a=n(289),l=n(8193),s=n(5397),i=n(9800),o=n(1645),c=n(5256),d=n(3307),u=n(4406),p=n(7122),f=n(4733),m=n(7500),h=n(1734),x=n(7975),b=n(495),v=n(579);const{currentUser:g,updateUser:A}=n(8768);const j=function(){const[e,t]=(0,r.useState)(""),[n,j]=(0,p.fp)(b.zT),[y,w]=(0,r.useState)(!1),[N]=a.A.useForm(),[C,k]=(0,r.useState)(!1);(0,r.useEffect)((()=>{g().then((e=>{t(e.data.profile_image),N.setFieldsValue(e.data)}))}),[]);const[O,E]=(0,r.useState)("");return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(s.A,{spinning:C,children:[(0,v.jsx)(h.z,{title:"Profile",routes:[{path:"/",breadcrumbName:"Dashboard"},{path:"/profile",breadcrumbName:"Profile"}],className:"flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"}),(0,v.jsx)("div",{className:"bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative",children:(0,v.jsxs)("div",{className:"p-[25px]",children:[(0,v.jsx)("img",{src:e,style:{width:"200px",borderRadius:"30%"}}),(0,v.jsx)(i.A,{gutter:16,className:"ml-2",children:(0,v.jsx)(s.A,{spinning:y,children:(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{children:(0,v.jsx)(c.A,{onChange:e=>{w(!0);const n=new FormData;n.append("file",e.file.originFileObj),(0,x.V)(n).then((n=>{console.log(n),t(n.data.link),setFilesData((t=>{var r;return[...t,{id:e.file.uid,file:e.file.originFileObj,name:null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.name}]})),w(!1)})).catch((e=>{l.Ay.error("Error while uploading"),w(!1)}))},fileList:[],children:(0,v.jsx)(m.$,{className:"flex items-center",icon:(0,v.jsx)(f.A,{}),children:"Click to Upload"})})})})})}),(0,v.jsx)(i.A,{justify:"space-between",children:(0,v.jsx)(o.A,{xxl:24,lg:24,xs:24,children:(0,v.jsxs)(a.A,{form:N,className:"pt-2.5 pb-[30px]",name:"editProfile",onFinish:t=>{const n=t;n.profile_image=e,A(n).then((e=>{j(e.data),l.Ay.success("Updated successfully")})).catch((e=>{console.log("err :>> ",e),k(!1)}))},labelCol:{span:8},wrapperCol:{span:16},children:[(0,v.jsxs)(i.A,{gutter:16,children:[(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{name:"name",label:"Name",className:"mb-4 form-label-w-full form-label-text-start dark:text-white-60",rules:[{required:!0,message:"Required! "}],children:(0,v.jsx)(d.A,{})})}),(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{name:"phone",label:"Phone Number",className:"mb-4 form-label-w-full form-label-text-start",rules:[{required:!0,message:"Required! "}],children:(0,v.jsx)(d.A,{})})})]}),(0,v.jsxs)(i.A,{gutter:16,children:[(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{name:"email",initialValue:"",label:"Email",className:"mb-4 form-label-w-full form-label-text-start",rules:[{required:!0,message:"Required! "}],children:(0,v.jsx)(d.A,{})})}),(0,v.jsx)(o.A,{span:12,children:(0,v.jsxs)(a.A.Item,{name:"password",label:"Password",className:"mb-4 form-label-w-full form-label-text-start",children:[(0,v.jsx)(d.A,{}),"Enter Password only if You want to change."]})})]}),(0,v.jsxs)(i.A,{gutter:16,children:[(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{label:"Father's Name",name:"fatherName",children:(0,v.jsx)(d.A,{})})}),(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{label:"Mother's Name",name:"motherName",children:(0,v.jsx)(d.A,{})})})]}),(0,v.jsxs)(i.A,{gutter:16,children:[(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{name:"gender",label:"Gender",children:(0,v.jsxs)(u.A,{placeholder:"Select option...",allowClear:!0,children:[(0,v.jsx)(Option,{value:"male",children:"Male"}),(0,v.jsx)(Option,{value:"female",children:"Female"}),(0,v.jsx)(Option,{value:"other",children:"Others"})]})})}),(0,v.jsx)(o.A,{span:12,children:(0,v.jsx)(a.A.Item,{name:"address",label:"Address",children:(0,v.jsx)(d.A,{})})})]}),(0,v.jsx)(s.A,{spinning:y,children:(0,v.jsxs)("div",{className:"flex justify-end gap-2 mt-2",children:[(0,v.jsx)(m.$,{size:"default",htmlType:"submit",type:"primary",className:"h-11 px-[20px] font-semibold",children:"Update Profile"}),"\xa0 \xa0",(0,v.jsx)(m.$,{size:"default",onClick:e=>{e.preventDefault(),N.resetFields()},type:"light",className:"h-11 px-[20px] bg-regularBG dark:bg-white10 text-body dark:text-white87 font-semibold border-regular dark:border-white10",children:"Cancel"})]})})]})})})]})})]})})}},7975:(e,t,n)=>{n.d(t,{V:()=>a});var r=n(2170);const a=async e=>await r.p.post("/upload",e)},9012:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(8168),a=n(5001),l=n(5043),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};const o=l.forwardRef((function(e,t){var n=e.style,o=e.noStyle,c=e.disabled,d=s(e,["style","noStyle","disabled"]),u={};return o||(u=(0,r.A)({},i)),c&&(u.pointerEvents="none"),u=(0,r.A)((0,r.A)({},u),n),l.createElement("div",(0,r.A)({role:"button",tabIndex:0,ref:t},d,{onKeyDown:function(e){e.keyCode===a.A.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===a.A.ENTER&&r&&r()},style:u}))}))},7258:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(4467),a=n(9379),l=n(5544),s=n(45),i=n(5043),o=n(9590),c=n(4600),d=n.n(c),u={adjustX:1,adjustY:1},p=[0,0];const f={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:p},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:p},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:p},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:p},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:p}};var m=n(5001),h=n(5818),x=n(924),b=m.A.ESC,v=m.A.TAB;var g=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function A(e,t){var n=e.arrow,c=void 0!==n&&n,u=e.prefixCls,p=void 0===u?"rc-dropdown":u,m=e.transitionName,A=e.animation,j=e.align,y=e.placement,w=void 0===y?"bottomLeft":y,N=e.placements,C=void 0===N?f:N,k=e.getPopupContainer,O=e.showAction,E=e.hideAction,P=e.overlayClassName,F=e.overlayStyle,R=e.visible,S=e.trigger,I=void 0===S?["hover"]:S,T=e.autoFocus,V=(0,s.A)(e,g),q=i.useState(),D=(0,l.A)(q,2),z=D[0],L=D[1],U="visible"in e?R:z,M=i.useRef(null);i.useImperativeHandle(t,(function(){return M.current})),function(e){var t=e.visible,n=e.setTriggerVisible,r=e.triggerRef,a=e.onVisibleChange,l=e.autoFocus,s=i.useRef(!1),o=function(){var e,l,s,i;t&&r.current&&(null===(e=r.current)||void 0===e||null===(l=e.triggerRef)||void 0===l||null===(s=l.current)||void 0===s||null===(i=s.focus)||void 0===i||i.call(s),n(!1),"function"===typeof a&&a(!1))},c=function(){var e,t,n,a,l=(0,x.jD)(null===(e=r.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(n=t.current)||void 0===n||null===(a=n.getElement)||void 0===a?void 0:a.call(n))[0];return!!(null===l||void 0===l?void 0:l.focus)&&(l.focus(),s.current=!0,!0)},d=function(e){switch(e.keyCode){case b:o();break;case v:var t=!1;s.current||(t=c()),t?e.preventDefault():o()}};i.useEffect((function(){return t?(window.addEventListener("keydown",d),l&&(0,h.A)(c,3),function(){window.removeEventListener("keydown",d),s.current=!1}):function(){s.current=!1}}),[t])}({visible:U,setTriggerVisible:L,triggerRef:M,onVisibleChange:e.onVisibleChange,autoFocus:T});var _=function(){var t=function(){var t=e.overlay;return"function"===typeof t?t():t}();return i.createElement(i.Fragment,null,c&&i.createElement("div",{className:"".concat(p,"-arrow")}),t)},$=E;return $||-1===I.indexOf("contextMenu")||($=["click"]),i.createElement(o.A,(0,a.A)((0,a.A)({builtinPlacements:C},V),{},{prefixCls:p,ref:M,popupClassName:d()(P,(0,r.A)({},"".concat(p,"-show-arrow"),c)),popupStyle:F,action:I,showAction:O,hideAction:$||[],popupPlacement:w,popupAlign:j,popupTransitionName:m,popupAnimation:A,popupVisible:U,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?_:_(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;L(t),"function"===typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;L(!1),n&&n(t)},getPopupContainer:k}),function(){var t=e.children,n=t.props?t.props:{},r=d()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(p,"-open")}());return U&&t?i.cloneElement(t,{className:r}):t}())}const j=i.forwardRef(A)}}]);
//# sourceMappingURL=634.f9e3f5df.chunk.js.map