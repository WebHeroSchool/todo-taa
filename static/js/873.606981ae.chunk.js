"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[873],{7787:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(7462),n=r(5987),i=r(2791),o=r(8182),s=r(2028),c=r(1122),l=44,f=i.forwardRef((function(e,t){var r=e.classes,s=e.className,f=e.color,u=void 0===f?"primary":f,d=e.disableShrink,m=void 0!==d&&d,h=e.size,y=void 0===h?40:h,p=e.style,k=e.thickness,v=void 0===k?3.6:k,x=e.value,b=void 0===x?0:x,D=e.variant,g=void 0===D?"indeterminate":D,w=(0,n.Z)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),Z={},S={},C={};if("determinate"===g||"static"===g){var E=2*Math.PI*((l-v)/2);Z.strokeDasharray=E.toFixed(3),C["aria-valuenow"]=Math.round(b),Z.strokeDashoffset="".concat(((100-b)/100*E).toFixed(3),"px"),S.transform="rotate(-90deg)"}return i.createElement("div",(0,a.Z)({className:(0,o.Z)(r.root,s,"inherit"!==u&&r["color".concat((0,c.Z)(u))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[g]),style:(0,a.Z)({width:y,height:y},S,p),ref:t,role:"progressbar"},C,w),i.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},i.createElement("circle",{className:(0,o.Z)(r.circle,m&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[g]),style:Z,cx:l,cy:l,r:(l-v)/2,fill:"none",strokeWidth:v})))})),u=(0,s.Z)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(f)},1122:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7483);function n(e){if("string"!==typeof e)throw new Error((0,a.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},885:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(181);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){s=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(s)throw n}}return i}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=873.606981ae.chunk.js.map