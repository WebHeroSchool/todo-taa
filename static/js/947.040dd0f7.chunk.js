"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[947],{4496:function(e,n,t){var r=t(2791).createContext({});n.Z=r},1887:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(7462),i=t(5987),o=t(2791),u=(t(7441),t(4164)),a=t(4667),l=t(8182),s=t(2028),d=t(4496),c=o.forwardRef((function(e,n){var t=e.children,u=e.classes,a=e.className,s=e.component,c=void 0===s?"ul":s,f=e.dense,p=void 0!==f&&f,v=e.disablePadding,m=void 0!==v&&v,h=e.subheader,b=(0,i.Z)(e,["children","classes","className","component","dense","disablePadding","subheader"]),y=o.useMemo((function(){return{dense:p}}),[p]);return o.createElement(d.Z.Provider,{value:y},o.createElement(c,(0,r.Z)({className:(0,l.Z)(u.root,a,p&&u.dense,!m&&u.padding,h&&u.subheader),ref:n},b),h,t))})),f=(0,s.Z)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(c),p=t(6394),v=t(9806);function m(e,n,t){return e===n?e.firstChild:n&&n.nextElementSibling?n.nextElementSibling:t?null:e.firstChild}function h(e,n,t){return e===n?t?e.firstChild:e.lastChild:n&&n.previousElementSibling?n.previousElementSibling:t?null:e.lastChild}function b(e,n){if(void 0===n)return!0;var t=e.innerText;return void 0===t&&(t=e.textContent),0!==(t=t.trim().toLowerCase()).length&&(n.repeating?t[0]===n.keys[0]:0===t.indexOf(n.keys.join("")))}function y(e,n,t,r,i,o){for(var u=!1,a=i(e,n,!!n&&t);a;){if(a===e.firstChild){if(u)return;u=!0}var l=!r&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&b(a,o)&&!l)return void a.focus();a=i(e,a,t)}}var g="undefined"===typeof window?o.useEffect:o.useLayoutEffect,w=o.forwardRef((function(e,n){var t=e.actions,l=e.autoFocus,s=void 0!==l&&l,d=e.autoFocusItem,c=void 0!==d&&d,w=e.children,Z=e.className,C=e.disabledItemsFocusable,E=void 0!==C&&C,x=e.disableListWrap,k=void 0!==x&&x,D=e.onKeyDown,M=e.variant,F=void 0===M?"selectedMenu":M,I=(0,i.Z)(e,["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),K=o.useRef(null),L=o.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});g((function(){s&&K.current.focus()}),[s]),o.useImperativeHandle(t,(function(){return{adjustStyleForScrollbar:function(e,n){var t=!K.current.style.width;if(e.clientHeight<K.current.clientHeight&&t){var r="".concat((0,p.Z)(!0),"px");K.current.style["rtl"===n.direction?"paddingLeft":"paddingRight"]=r,K.current.style.width="calc(100% + ".concat(r,")")}return K.current}}}),[]);var N=o.useCallback((function(e){K.current=u.findDOMNode(e)}),[]),S=(0,v.Z)(N,n),T=-1;o.Children.forEach(w,(function(e,n){o.isValidElement(e)&&(e.props.disabled||("selectedMenu"===F&&e.props.selected||-1===T)&&(T=n))}));var R=o.Children.map(w,(function(e,n){if(n===T){var t={};return c&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===F&&(t.tabIndex=0),o.cloneElement(e,t)}return e}));return o.createElement(f,(0,r.Z)({role:"menu",ref:S,className:Z,onKeyDown:function(e){var n=K.current,t=e.key,r=(0,a.Z)(n).activeElement;if("ArrowDown"===t)e.preventDefault(),y(n,r,k,E,m);else if("ArrowUp"===t)e.preventDefault(),y(n,r,k,E,h);else if("Home"===t)e.preventDefault(),y(n,null,k,E,m);else if("End"===t)e.preventDefault(),y(n,null,k,E,h);else if(1===t.length){var i=L.current,o=t.toLowerCase(),u=performance.now();i.keys.length>0&&(u-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&o!==i.keys[0]&&(i.repeating=!1)),i.lastTime=u,i.keys.push(o);var l=r&&!i.repeating&&b(r,i);i.previousKeyMatched&&(l||y(n,r,!1,E,m,i))?e.preventDefault():i.previousKeyMatched=!1}D&&D(e)},tabIndex:s?0:-1},I),R)}))},2947:function(e,n,t){t.r(n),t.d(n,{default:function(){return r.Z}});var r=t(1887)},6394:function(e,n,t){function r(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,{Z:function(){return r}})},4667:function(e,n,t){function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},1565:function(e,n,t){function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return r}})},9806:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(2791),i=t(1565);function o(e,n){return r.useMemo((function(){return null==e&&null==n?null:function(t){(0,i.Z)(e,t),(0,i.Z)(n,t)}}),[e,n])}}}]);
//# sourceMappingURL=947.040dd0f7.chunk.js.map