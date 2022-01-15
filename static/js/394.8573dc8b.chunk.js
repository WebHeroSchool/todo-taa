"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[394],{5394:function(e,t,o){o.r(t),o.d(t,{default:function(){return w}});var n="AppLink_link__7GJ-t",a=o(1523),i=o(7462),r=o(5987),l=o(2791),s=(o(2007),o(8182)),d=o(2028),c=o(6706),p=o(3375),y=o(9806),u=o(4496),m=o(4164),h="undefined"===typeof window?l.useEffect:l.useLayoutEffect,g=l.forwardRef((function(e,t){var o=e.alignItems,n=void 0===o?"center":o,a=e.autoFocus,d=void 0!==a&&a,g=e.button,f=void 0!==g&&g,v=e.children,b=e.classes,x=e.className,Z=e.component,C=e.ContainerComponent,N=void 0===C?"li":C,k=e.ContainerProps,w=(k=void 0===k?{}:k).className,I=(0,r.Z)(k,["className"]),T=e.dense,E=void 0!==T&&T,B=e.disabled,A=void 0!==B&&B,P=e.disableGutters,S=void 0!==P&&P,L=e.divider,R=void 0!==L&&L,V=e.focusVisibleClassName,M=e.selected,j=void 0!==M&&M,W=(0,r.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=l.useContext(u.Z),O={dense:E||F.dense||!1,alignItems:n},$=l.useRef(null);h((function(){d&&$.current&&$.current.focus()}),[d]);var D=l.Children.toArray(v),G=D.length&&(0,p.Z)(D[D.length-1],["ListItemSecondaryAction"]),_=l.useCallback((function(e){$.current=m.findDOMNode(e)}),[]),J=(0,y.Z)(_,t),z=(0,i.Z)({className:(0,s.Z)(b.root,x,O.dense&&b.dense,!S&&b.gutters,R&&b.divider,A&&b.disabled,f&&b.button,"center"!==n&&b.alignItemsFlexStart,G&&b.secondaryAction,j&&b.selected),disabled:A},W),U=Z||"li";return f&&(z.component=Z||"div",z.focusVisibleClassName=(0,s.Z)(b.focusVisible,V),U=c.Z),G?(U=z.component||Z?U:"div","li"===N&&("li"===U?U="div":"li"===z.component&&(z.component="div")),l.createElement(u.Z.Provider,{value:O},l.createElement(N,(0,i.Z)({className:(0,s.Z)(b.container,w),ref:J},I),l.createElement(U,z,D),D.pop()))):l.createElement(u.Z.Provider,{value:O},l.createElement(U,(0,i.Z)({ref:J},z),D))})),f=(0,d.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(g),v=o(1122),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},x=l.forwardRef((function(e,t){var o=e.align,n=void 0===o?"inherit":o,a=e.classes,d=e.className,c=e.color,p=void 0===c?"initial":c,y=e.component,u=e.display,m=void 0===u?"initial":u,h=e.gutterBottom,g=void 0!==h&&h,f=e.noWrap,x=void 0!==f&&f,Z=e.paragraph,C=void 0!==Z&&Z,N=e.variant,k=void 0===N?"body1":N,w=e.variantMapping,I=void 0===w?b:w,T=(0,r.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=y||(C?"p":I[k]||b[k])||"span";return l.createElement(E,(0,i.Z)({className:(0,s.Z)(a.root,d,"inherit"!==k&&a[k],"initial"!==p&&a["color".concat((0,v.Z)(p))],x&&a.noWrap,g&&a.gutterBottom,C&&a.paragraph,"inherit"!==n&&a["align".concat((0,v.Z)(n))],"initial"!==m&&a["display".concat((0,v.Z)(m))]),ref:t},T))})),Z=(0,d.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(x),C=l.forwardRef((function(e,t){var o=e.children,n=e.classes,a=e.className,d=e.disableTypography,c=void 0!==d&&d,p=e.inset,y=void 0!==p&&p,m=e.primary,h=e.primaryTypographyProps,g=e.secondary,f=e.secondaryTypographyProps,v=(0,r.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),b=l.useContext(u.Z).dense,x=null!=m?m:o;null==x||x.type===Z||c||(x=l.createElement(Z,(0,i.Z)({variant:b?"body2":"body1",className:n.primary,component:"span",display:"block"},h),x));var C=g;return null==C||C.type===Z||c||(C=l.createElement(Z,(0,i.Z)({variant:"body2",className:n.secondary,color:"textSecondary",display:"block"},f),C)),l.createElement("div",(0,i.Z)({className:(0,s.Z)(n.root,a,b&&n.dense,y&&n.inset,x&&C&&n.multiline),ref:t},v),x,C)})),N=(0,d.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(C),k=o(184),w=function(e){return(0,k.jsx)(a.rU,{className:n,to:e.to,children:(0,k.jsx)(f,{button:!0,selected:e.selectedIndex===e.primary,onClick:function(){return e.setSelectedIndex(e.primary)},children:(0,k.jsx)(N,{primary:e.primary})})})}},4496:function(e,t,o){var n=o(2791).createContext({});t.Z=n},3375:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(2791);function a(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}}}]);
//# sourceMappingURL=394.8573dc8b.chunk.js.map