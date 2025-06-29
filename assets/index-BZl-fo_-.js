var nd=Object.defineProperty;var td=(e,n,t)=>n in e?nd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ve=(e,n,t)=>td(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ts(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var js={exports:{}},$i={},zs={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),id=Symbol.for("react.portal"),ld=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ud=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.memo"),pd=Symbol.for("react.lazy"),pa=Symbol.iterator;function md(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var Ls={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rs=Object.assign,Ds={};function $t(e,n,t){this.props=e,this.context=n,this.refs=Ds,this.updater=t||Ls}$t.prototype.isReactComponent={};$t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};$t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ms(){}Ms.prototype=$t.prototype;function go(e,n,t){this.props=e,this.context=n,this.refs=Ds,this.updater=t||Ls}var vo=go.prototype=new Ms;vo.constructor=go;Rs(vo,$t.prototype);vo.isPureReactComponent=!0;var ma=Array.isArray,Os=Object.prototype.hasOwnProperty,yo={current:null},Is={key:!0,ref:!0,__self:!0,__source:!0};function As(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Os.call(n,r)&&!Is.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xr,type:e,key:l,ref:o,props:i,_owner:yo.current}}function hd(e,n){return{$$typeof:xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function gd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ha=/\/+/g;function Qi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gd(""+e.key):n.toString(36)}function Hr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xr:case id:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Qi(o,0):r,ma(i)?(t="",e!=null&&(t=e.replace(ha,"$&/")+"/"),Hr(i,n,t,"",function(d){return d})):i!=null&&(xo(i)&&(i=hd(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ha,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",ma(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Qi(l,a);o+=Hr(l,n,t,s,i)}else if(s=md(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Qi(l,a++),o+=Hr(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Cr(e,n,t){if(e==null)return e;var r=[],i=0;return Hr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function vd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Vr={transition:null},yd={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:yo};function Bs(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Cr,forEach:function(e,n,t){Cr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Cr(e,function(){n++}),n},toArray:function(e){return Cr(e,function(n){return n})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=$t;I.Fragment=ld;I.Profiler=ad;I.PureComponent=go;I.StrictMode=od;I.Suspense=dd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;I.act=Bs;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rs({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=yo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Os.call(n,s)&&!Is.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:xr,type:e.type,key:i,ref:l,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};I.createElement=As;I.createFactory=function(e){var n=As.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:cd,render:e}};I.isValidElement=xo;I.lazy=function(e){return{$$typeof:pd,_payload:{_status:-1,_result:e},_init:vd}};I.memo=function(e,n){return{$$typeof:fd,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=n}};I.unstable_act=Bs;I.useCallback=function(e,n){return we.current.useCallback(e,n)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,n){return we.current.useEffect(e,n)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return we.current.useMemo(e,n)};I.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return we.current.useTransition()};I.version="18.3.1";zs.exports=I;var N=zs.exports;const Cn=Ts(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=N,wd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),_d=Object.prototype.hasOwnProperty,Sd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ed={key:!0,ref:!0,__self:!0,__source:!0};function Us(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)_d.call(n,r)&&!Ed.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:wd,type:e,key:l,ref:o,props:i,_owner:Sd.current}}$i.Fragment=kd;$i.jsx=Us;$i.jsxs=Us;js.exports=$i;var w=js.exports,_l={},Ws={exports:{}},Re={},Hs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n($,L){var O=$.length;$.push(L);e:for(;0<O;){var z=O-1>>>1,M=$[z];if(0<i(M,L))$[z]=L,$[O]=M,O=z;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var L=$[0],O=$.pop();if(O!==L){$[0]=O;e:for(var z=0,M=$.length,te=M>>>1;z<te;){var he=2*(z+1)-1,$e=$[he],on=he+1,et=$[on];if(0>i($e,O))on<M&&0>i(et,$e)?($[z]=et,$[on]=O,z=on):($[z]=$e,$[he]=O,z=he);else if(on<M&&0>i(et,O))$[z]=et,$[on]=O,z=on;else break e}}return L}function i($,L){var O=$.sortIndex-L.sortIndex;return O!==0?O:$.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],d=[],g=1,m=null,p=3,v=!1,x=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var L=t(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=$)r(d),L.sortIndex=L.expirationTime,n(s,L);else break;L=t(d)}}function h($){if(y=!1,f($),!x)if(t(s)!==null)x=!0,W(k);else{var L=t(d);L!==null&&_e(h,L.startTime-$)}}function k($,L){x=!1,y&&(y=!1,c(C),C=-1),v=!0;var O=p;try{for(f(L),m=t(s);m!==null&&(!(m.expirationTime>L)||$&&!Q());){var z=m.callback;if(typeof z=="function"){m.callback=null,p=m.priorityLevel;var M=z(m.expirationTime<=L);L=e.unstable_now(),typeof M=="function"?m.callback=M:m===t(s)&&r(s),f(L)}else r(s);m=t(s)}if(m!==null)var te=!0;else{var he=t(d);he!==null&&_e(h,he.startTime-L),te=!1}return te}finally{m=null,p=O,v=!1}}var P=!1,E=null,C=-1,D=5,F=-1;function Q(){return!(e.unstable_now()-F<D)}function Me(){if(E!==null){var $=e.unstable_now();F=$;var L=!0;try{L=E(!0,$)}finally{L?Oe():(P=!1,E=null)}}else P=!1}var Oe;if(typeof u=="function")Oe=function(){u(Me)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,R=Ie.port2;Ie.port1.onmessage=Me,Oe=function(){R.postMessage(null)}}else Oe=function(){S(Me,0)};function W($){E=$,P||(P=!0,Oe())}function _e($,L){C=S(function(){$(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,W(k))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function($){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var O=p;p=L;try{return $()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,L){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=p;p=$;try{return L()}finally{p=O}},e.unstable_scheduleCallback=function($,L,O){var z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?z+O:z):O=z,$){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=O+M,$={id:g++,callback:L,priorityLevel:$,startTime:O,expirationTime:M,sortIndex:-1},O>z?($.sortIndex=O,n(d,$),t(s)===null&&$===t(d)&&(y?(c(C),C=-1):y=!0,_e(h,O-z))):($.sortIndex=M,n(s,$),x||v||(x=!0,W(k))),$},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function($){var L=p;return function(){var O=p;p=L;try{return $.apply(this,arguments)}finally{p=O}}}})(Vs);Hs.exports=Vs;var Cd=Hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=N,Le=Cd;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qs=new Set,nr={};function qn(e,n){kt(e,n),kt(e+"Capture",n)}function kt(e,n){for(nr[e]=n,e=0;e<n.length;e++)Qs.add(n[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,Pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ga={},va={};function $d(e){return Sl.call(va,e)?!0:Sl.call(ga,e)?!1:Pd.test(e)?va[e]=!0:(ga[e]=!0,!1)}function Nd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,n,t,r){if(n===null||typeof n>"u"||Nd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ke(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ke(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var wo=/[\-:]([a-z])/g;function ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wo,ko);ce[n]=new ke(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wo,ko);ce[n]=new ke(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wo,ko);ce[n]=new ke(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function _o(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fd(n,t,i,r)&&(t=null),r||i===null?$d(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var vn=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),tt=Symbol.for("react.portal"),rt=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),Ks=Symbol.for("react.provider"),Gs=Symbol.for("react.context"),Eo=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Xs=Symbol.for("react.offscreen"),ya=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ki;function At(e){if(Ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ki=n&&n[1]||""}return`
`+Ki+e}var Gi=!1;function Xi(e,n){if(!e||Gi)return"";Gi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Gi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?At(e):""}function Td(e){switch(e.tag){case 5:return At(e.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 2:case 15:return e=Xi(e.type,!1),e;case 11:return e=Xi(e.type.render,!1),e;case 1:return e=Xi(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rt:return"Fragment";case tt:return"Portal";case El:return"Profiler";case So:return"StrictMode";case Cl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gs:return(e.displayName||"Context")+".Consumer";case Ks:return(e._context.displayName||"Context")+".Provider";case Eo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Co:return n=e.displayName||null,n!==null?n:Pl(e.type)||"Memo";case xn:n=e._payload,e=e._init;try{return Pl(e(n))}catch{}}return null}function jd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(n);case 8:return n===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ys(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zd(e){var n=Ys(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pr(e){e._valueTracker||(e._valueTracker=zd(e))}function Zs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ys(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Rn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function qs(e,n){n=n.checked,n!=null&&_o(e,"checked",n,!1)}function Nl(e,n){qs(e,n);var t=Rn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Fl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Fl(e,n.type,Rn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function wa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Fl(e,n,t){(n!=="number"||ri(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function ht(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Rn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(Bt(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Rn(t)}}function Js(e,n){var t=Rn(n.value),r=Rn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function _a(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function tr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(Vt).forEach(function(e){Ld.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vt[n]=Vt[e]})});function tu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Vt.hasOwnProperty(e)&&Vt[e]?(""+n).trim():n+"px"}function ru(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=tu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Rd=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,n){if(n){if(Rd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Ll(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,gt=null,vt=null;function Sa(e){if(e=_r(e)){if(typeof Dl!="function")throw Error(_(280));var n=e.stateNode;n&&(n=zi(n),Dl(e.stateNode,e.type,n))}}function iu(e){gt?vt?vt.push(e):vt=[e]:gt=e}function lu(){if(gt){var e=gt,n=vt;if(vt=gt=null,Sa(e),n)for(e=0;e<n.length;e++)Sa(n[e])}}function ou(e,n){return e(n)}function au(){}var Yi=!1;function su(e,n,t){if(Yi)return e(n,t);Yi=!0;try{return ou(e,n,t)}finally{Yi=!1,(gt!==null||vt!==null)&&(au(),lu())}}function rr(e,n){var t=e.stateNode;if(t===null)return null;var r=zi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Ml=!1;if(pn)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{Ml=!1}function Dd(e,n,t,r,i,l,o,a,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(g){this.onError(g)}}var Qt=!1,ii=null,li=!1,Ol=null,Md={onError:function(e){Qt=!0,ii=e}};function Od(e,n,t,r,i,l,o,a,s){Qt=!1,ii=null,Dd.apply(Md,arguments)}function Id(e,n,t,r,i,l,o,a,s){if(Od.apply(this,arguments),Qt){if(Qt){var d=ii;Qt=!1,ii=null}else throw Error(_(198));li||(li=!0,Ol=d)}}function Jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function uu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ea(e){if(Jn(e)!==e)throw Error(_(188))}function Ad(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Ea(i),e;if(l===r)return Ea(i),n;l=l.sibling}throw Error(_(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function cu(e){return e=Ad(e),e!==null?du(e):null}function du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=du(e);if(n!==null)return n;e=e.sibling}return null}var fu=Le.unstable_scheduleCallback,Ca=Le.unstable_cancelCallback,Bd=Le.unstable_shouldYield,Ud=Le.unstable_requestPaint,ne=Le.unstable_now,Wd=Le.unstable_getCurrentPriorityLevel,Po=Le.unstable_ImmediatePriority,pu=Le.unstable_UserBlockingPriority,oi=Le.unstable_NormalPriority,Hd=Le.unstable_LowPriority,mu=Le.unstable_IdlePriority,Ni=null,rn=null;function Vd(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Gd,Qd=Math.log,Kd=Math.LN2;function Gd(e){return e>>>=0,e===0?32:31-(Qd(e)/Kd|0)|0}var Nr=64,Fr=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Ut(a):(l&=o,l!==0&&(r=Ut(l)))}else o=t&~i,o!==0?r=Ut(o):l!==0&&(r=Ut(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ze(n),i=1<<t,r|=e[t],n&=~i;return r}function Xd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ze(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=Xd(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Zi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function wr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ze(n),e[n]=t}function Zd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ze(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function $o(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ze(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var H=0;function gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vu,No,yu,xu,wu,Al=!1,Tr=[],bn=null,Pn=null,$n=null,ir=new Map,lr=new Map,kn=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ba(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":ir.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(n.pointerId)}}function Lt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=_r(n),n!==null&&No(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Jd(e,n,t,r,i){switch(n){case"focusin":return bn=Lt(bn,e,n,t,r,i),!0;case"dragenter":return Pn=Lt(Pn,e,n,t,r,i),!0;case"mouseover":return $n=Lt($n,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return ir.set(l,Lt(ir.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,lr.set(l,Lt(lr.get(l)||null,e,n,t,r,i)),!0}return!1}function ku(e){var n=Un(e.target);if(n!==null){var t=Jn(n);if(t!==null){if(n=t.tag,n===13){if(n=uu(t),n!==null){e.blockedOn=n,wu(e.priority,function(){yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Bl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Rl=r,t.target.dispatchEvent(r),Rl=null}else return n=_r(t),n!==null&&No(n),e.blockedOn=t,!1;n.shift()}return!0}function Pa(e,n,t){Qr(e)&&t.delete(n)}function ef(){Al=!1,bn!==null&&Qr(bn)&&(bn=null),Pn!==null&&Qr(Pn)&&(Pn=null),$n!==null&&Qr($n)&&($n=null),ir.forEach(Pa),lr.forEach(Pa)}function Rt(e,n){e.blockedOn===n&&(e.blockedOn=null,Al||(Al=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,ef)))}function or(e){function n(i){return Rt(i,e)}if(0<Tr.length){Rt(Tr[0],e);for(var t=1;t<Tr.length;t++){var r=Tr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&Rt(bn,e),Pn!==null&&Rt(Pn,e),$n!==null&&Rt($n,e),ir.forEach(n),lr.forEach(n),t=0;t<kn.length;t++)r=kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(t=kn[0],t.blockedOn===null);)ku(t),t.blockedOn===null&&kn.shift()}var yt=vn.ReactCurrentBatchConfig,si=!0;function nf(e,n,t,r){var i=H,l=yt.transition;yt.transition=null;try{H=1,Fo(e,n,t,r)}finally{H=i,yt.transition=l}}function tf(e,n,t,r){var i=H,l=yt.transition;yt.transition=null;try{H=4,Fo(e,n,t,r)}finally{H=i,yt.transition=l}}function Fo(e,n,t,r){if(si){var i=Bl(e,n,t,r);if(i===null)al(e,n,r,ui,t),ba(e,r);else if(Jd(i,e,n,t,r))r.stopPropagation();else if(ba(e,r),n&4&&-1<qd.indexOf(e)){for(;i!==null;){var l=_r(i);if(l!==null&&vu(l),l=Bl(e,n,t,r),l===null&&al(e,n,r,ui,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else al(e,n,r,null,t)}}var ui=null;function Bl(e,n,t,r){if(ui=null,e=bo(r),e=Un(e),e!==null)if(n=Jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=uu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ui=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case Po:return 1;case pu:return 4;case oi:case Hd:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Sn=null,To=null,Kr=null;function Su(){if(Kr)return Kr;var e,n=To,t=n.length,r,i="value"in Sn?Sn.value:Sn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Kr=i.slice(e,1<r?1-r:void 0)}function Gr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function $a(){return!1}function De(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jr:$a,this.isPropagationStopped=$a,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=De(Nt),kr=J({},Nt,{view:0,detail:0}),rf=De(kr),qi,Ji,Dt,Fi=J({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dt&&(Dt&&e.type==="mousemove"?(qi=e.screenX-Dt.screenX,Ji=e.screenY-Dt.screenY):Ji=qi=0,Dt=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Na=De(Fi),lf=J({},Fi,{dataTransfer:0}),of=De(lf),af=J({},kr,{relatedTarget:0}),el=De(af),sf=J({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=De(sf),cf=J({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=De(cf),ff=J({},Nt,{data:0}),Fa=De(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hf[e])?!!n[e]:!1}function zo(){return gf}var vf=J({},kr,{key:function(e){if(e.key){var n=pf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=De(vf),xf=J({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ta=De(xf),wf=J({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),kf=De(wf),_f=J({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=De(_f),Ef=J({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=De(Ef),bf=[9,13,27,32],Lo=pn&&"CompositionEvent"in window,Kt=null;pn&&"documentMode"in document&&(Kt=document.documentMode);var Pf=pn&&"TextEvent"in window&&!Kt,Eu=pn&&(!Lo||Kt&&8<Kt&&11>=Kt),ja=" ",za=!1;function Cu(e,n){switch(e){case"keyup":return bf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var it=!1;function $f(e,n){switch(e){case"compositionend":return bu(n);case"keypress":return n.which!==32?null:(za=!0,ja);case"textInput":return e=n.data,e===ja&&za?null:e;default:return null}}function Nf(e,n){if(it)return e==="compositionend"||!Lo&&Cu(e,n)?(e=Su(),Kr=To=Sn=null,it=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Eu&&n.locale!=="ko"?null:n.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ff[e.type]:n==="textarea"}function Pu(e,n,t,r){iu(r),n=ci(n,"onChange"),0<n.length&&(t=new jo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Gt=null,ar=null;function Tf(e){Ou(e,0)}function Ti(e){var n=at(e);if(Zs(n))return e}function jf(e,n){if(e==="change")return n}var $u=!1;if(pn){var nl;if(pn){var tl="oninput"in document;if(!tl){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),tl=typeof Ra.oninput=="function"}nl=tl}else nl=!1;$u=nl&&(!document.documentMode||9<document.documentMode)}function Da(){Gt&&(Gt.detachEvent("onpropertychange",Nu),ar=Gt=null)}function Nu(e){if(e.propertyName==="value"&&Ti(ar)){var n=[];Pu(n,ar,e,bo(e)),su(Tf,n)}}function zf(e,n,t){e==="focusin"?(Da(),Gt=n,ar=t,Gt.attachEvent("onpropertychange",Nu)):e==="focusout"&&Da()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(ar)}function Rf(e,n){if(e==="click")return Ti(n)}function Df(e,n){if(e==="input"||e==="change")return Ti(n)}function Mf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Je=typeof Object.is=="function"?Object.is:Mf;function sr(e,n){if(Je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Sl.call(n,i)||!Je(e[i],n[i]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oa(e,n){var t=Ma(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ma(t)}}function Fu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tu(){for(var e=window,n=ri();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ri(e.document)}return n}function Ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Of(e){var n=Tu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Fu(t.ownerDocument.documentElement,t)){if(r!==null&&Ro(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Oa(t,l);var o=Oa(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=pn&&"documentMode"in document&&11>=document.documentMode,lt=null,Ul=null,Xt=null,Wl=!1;function Ia(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wl||lt==null||lt!==ri(r)||(r=lt,"selectionStart"in r&&Ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xt&&sr(Xt,r)||(Xt=r,r=ci(Ul,"onSelect"),0<r.length&&(n=new jo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=lt)))}function zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ot={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},rl={},ju={};pn&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete ot.animationend.animation,delete ot.animationiteration.animation,delete ot.animationstart.animation),"TransitionEvent"in window||delete ot.transitionend.transition);function ji(e){if(rl[e])return rl[e];if(!ot[e])return e;var n=ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ju)return rl[e]=n[t];return e}var zu=ji("animationend"),Lu=ji("animationiteration"),Ru=ji("animationstart"),Du=ji("transitionend"),Mu=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,n){Mu.set(e,n),qn(n,[e])}for(var il=0;il<Aa.length;il++){var ll=Aa[il],Af=ll.toLowerCase(),Bf=ll[0].toUpperCase()+ll.slice(1);Mn(Af,"on"+Bf)}Mn(zu,"onAnimationEnd");Mn(Lu,"onAnimationIteration");Mn(Ru,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Du,"onTransitionEnd");kt("onMouseEnter",["mouseout","mouseover"]);kt("onMouseLeave",["mouseout","mouseover"]);kt("onPointerEnter",["pointerout","pointerover"]);kt("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wt));function Ba(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Id(r,n,void 0,e),e.currentTarget=null}function Ou(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Ba(i,a,d),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,d=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Ba(i,a,d),l=s}}}if(li)throw e=Ol,li=!1,Ol=null,e}function K(e,n){var t=n[Gl];t===void 0&&(t=n[Gl]=new Set);var r=e+"__bubble";t.has(r)||(Iu(n,e,2,!1),t.add(r))}function ol(e,n,t){var r=0;n&&(r|=4),Iu(t,e,r,n)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Lr]){e[Lr]=!0,Qs.forEach(function(t){t!=="selectionchange"&&(Uf.has(t)||ol(t,!1,e),ol(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lr]||(n[Lr]=!0,ol("selectionchange",!1,n))}}function Iu(e,n,t,r){switch(_u(n)){case 1:var i=nf;break;case 4:i=tf;break;default:i=Fo}t=i.bind(null,n,t,e),i=void 0,!Ml||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function al(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Un(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}su(function(){var d=l,g=bo(t),m=[];e:{var p=Mu.get(e);if(p!==void 0){var v=jo,x=e;switch(e){case"keypress":if(Gr(t)===0)break e;case"keydown":case"keyup":v=yf;break;case"focusin":x="focus",v=el;break;case"focusout":x="blur",v=el;break;case"beforeblur":case"afterblur":v=el;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kf;break;case zu:case Lu:case Ru:v=uf;break;case Du:v=Sf;break;case"scroll":v=rf;break;case"wheel":v=Cf;break;case"copy":case"cut":case"paste":v=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ta}var y=(n&4)!==0,S=!y&&e==="scroll",c=y?p!==null?p+"Capture":null:p;y=[];for(var u=d,f;u!==null;){f=u;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,c!==null&&(h=rr(u,c),h!=null&&y.push(cr(u,h,f)))),S)break;u=u.return}0<y.length&&(p=new v(p,x,null,t,g),m.push({event:p,listeners:y}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==Rl&&(x=t.relatedTarget||t.fromElement)&&(Un(x)||x[mn]))break e;if((v||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=d,x=x?Un(x):null,x!==null&&(S=Jn(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(y=Na,h="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ta,h="onPointerLeave",c="onPointerEnter",u="pointer"),S=v==null?p:at(v),f=x==null?p:at(x),p=new y(h,u+"leave",v,t,g),p.target=S,p.relatedTarget=f,h=null,Un(g)===d&&(y=new y(c,u+"enter",x,t,g),y.target=f,y.relatedTarget=S,h=y),S=h,v&&x)n:{for(y=v,c=x,u=0,f=y;f;f=nt(f))u++;for(f=0,h=c;h;h=nt(h))f++;for(;0<u-f;)y=nt(y),u--;for(;0<f-u;)c=nt(c),f--;for(;u--;){if(y===c||c!==null&&y===c.alternate)break n;y=nt(y),c=nt(c)}y=null}else y=null;v!==null&&Ua(m,p,v,y,!1),x!==null&&S!==null&&Ua(m,S,x,y,!0)}}e:{if(p=d?at(d):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=jf;else if(La(p))if($u)k=Df;else{k=Lf;var P=zf}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Rf);if(k&&(k=k(e,d))){Pu(m,k,t,g);break e}P&&P(e,p,d),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Fl(p,"number",p.value)}switch(P=d?at(d):window,e){case"focusin":(La(P)||P.contentEditable==="true")&&(lt=P,Ul=d,Xt=null);break;case"focusout":Xt=Ul=lt=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,Ia(m,t,g);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Ia(m,t,g)}var E;if(Lo)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else it?Cu(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Eu&&t.locale!=="ko"&&(it||C!=="onCompositionStart"?C==="onCompositionEnd"&&it&&(E=Su()):(Sn=g,To="value"in Sn?Sn.value:Sn.textContent,it=!0)),P=ci(d,C),0<P.length&&(C=new Fa(C,e,null,t,g),m.push({event:C,listeners:P}),E?C.data=E:(E=bu(t),E!==null&&(C.data=E)))),(E=Pf?$f(e,t):Nf(e,t))&&(d=ci(d,"onBeforeInput"),0<d.length&&(g=new Fa("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:d}),g.data=E))}Ou(m,n)})}function cr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ci(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=rr(e,t),l!=null&&r.unshift(cr(e,l,i)),l=rr(e,n),l!=null&&r.push(cr(e,l,i))),e=e.return}return r}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ua(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,i?(s=rr(t,l),s!=null&&o.unshift(cr(t,s,a))):i||(s=rr(t,l),s!=null&&o.push(cr(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Wf=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function Wa(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Hf,"")}function Rr(e,n,t){if(n=Wa(n),Wa(e)!==n&&t)throw Error(_(425))}function di(){}var Hl=null,Vl=null;function Ql(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,Ha=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ha<"u"?function(e){return Ha.resolve(null).then(e).catch(Kf)}:Kl;function Kf(e){setTimeout(function(){throw e})}function sl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),or(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);or(n)}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Va(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ft,dr="__reactProps$"+Ft,mn="__reactContainer$"+Ft,Gl="__reactEvents$"+Ft,Gf="__reactListeners$"+Ft,Xf="__reactHandles$"+Ft;function Un(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mn]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Va(e);e!==null;){if(t=e[tn])return t;e=Va(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[tn]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function at(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function zi(e){return e[dr]||null}var Xl=[],st=-1;function On(e){return{current:e}}function G(e){0>st||(e.current=Xl[st],Xl[st]=null,st--)}function V(e,n){st++,Xl[st]=e.current,e.current=n}var Dn={},me=On(Dn),Ce=On(!1),Kn=Dn;function _t(e,n){var t=e.type.contextTypes;if(!t)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function be(e){return e=e.childContextTypes,e!=null}function fi(){G(Ce),G(me)}function Qa(e,n,t){if(me.current!==Dn)throw Error(_(168));V(me,n),V(Ce,t)}function Au(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(_(108,jd(e)||"Unknown",i));return J({},t,r)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,Kn=me.current,V(me,e),V(Ce,Ce.current),!0}function Ka(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=Au(e,n,Kn),r.__reactInternalMemoizedMergedChildContext=e,G(Ce),G(me),V(me,e)):G(Ce),V(Ce,t)}var un=null,Li=!1,ul=!1;function Bu(e){un===null?un=[e]:un.push(e)}function Yf(e){Li=!0,Bu(e)}function In(){if(!ul&&un!==null){ul=!0;var e=0,n=H;try{var t=un;for(H=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}un=null,Li=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),fu(Po,In),i}finally{H=n,ul=!1}}return null}var ut=[],ct=0,mi=null,hi=0,Ae=[],Be=0,Gn=null,cn=1,dn="";function An(e,n){ut[ct++]=hi,ut[ct++]=mi,mi=e,hi=n}function Uu(e,n,t){Ae[Be++]=cn,Ae[Be++]=dn,Ae[Be++]=Gn,Gn=e;var r=cn;e=dn;var i=32-Ze(r)-1;r&=~(1<<i),t+=1;var l=32-Ze(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Ze(n)+i|t<<i|r,dn=l+e}else cn=1<<l|t<<i|r,dn=e}function Do(e){e.return!==null&&(An(e,1),Uu(e,1,0))}function Mo(e){for(;e===mi;)mi=ut[--ct],ut[ct]=null,hi=ut[--ct],ut[ct]=null;for(;e===Gn;)Gn=Ae[--Be],Ae[Be]=null,dn=Ae[--Be],Ae[Be]=null,cn=Ae[--Be],Ae[Be]=null}var ze=null,je=null,Y=!1,Ye=null;function Wu(e,n){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ga(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,je=Nn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Gn!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,je=null,!0):!1;default:return!1}}function Yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(Y){var n=je;if(n){var t=n;if(!Ga(e,n)){if(Yl(e))throw Error(_(418));n=Nn(t.nextSibling);var r=ze;n&&Ga(e,n)?Wu(r,t):(e.flags=e.flags&-4097|2,Y=!1,ze=e)}}else{if(Yl(e))throw Error(_(418));e.flags=e.flags&-4097|2,Y=!1,ze=e}}}function Xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Dr(e){if(e!==ze)return!1;if(!Y)return Xa(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ql(e.type,e.memoizedProps)),n&&(n=je)){if(Yl(e))throw Hu(),Error(_(418));for(;n;)Wu(e,n),n=Nn(n.nextSibling)}if(Xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){je=Nn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}je=null}}else je=ze?Nn(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=je;e;)e=Nn(e.nextSibling)}function St(){je=ze=null,Y=!1}function Oo(e){Ye===null?Ye=[e]:Ye.push(e)}var Zf=vn.ReactCurrentBatchConfig;function Mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function Mr(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ya(e){var n=e._init;return n(e._payload)}function Vu(e){function n(c,u){if(e){var f=c.deletions;f===null?(c.deletions=[u],c.flags|=16):f.push(u)}}function t(c,u){if(!e)return null;for(;u!==null;)n(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=zn(c,u),c.index=0,c.sibling=null,c}function l(c,u,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<u?(c.flags|=2,u):f):(c.flags|=2,u)):(c.flags|=1048576,u)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,u,f,h){return u===null||u.tag!==6?(u=gl(f,c.mode,h),u.return=c,u):(u=i(u,f),u.return=c,u)}function s(c,u,f,h){var k=f.type;return k===rt?g(c,u,f.props.children,h,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xn&&Ya(k)===u.type)?(h=i(u,f.props),h.ref=Mt(c,u,f),h.return=c,h):(h=ni(f.type,f.key,f.props,null,c.mode,h),h.ref=Mt(c,u,f),h.return=c,h)}function d(c,u,f,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=vl(f,c.mode,h),u.return=c,u):(u=i(u,f.children||[]),u.return=c,u)}function g(c,u,f,h,k){return u===null||u.tag!==7?(u=Qn(f,c.mode,h,k),u.return=c,u):(u=i(u,f),u.return=c,u)}function m(c,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=gl(""+u,c.mode,f),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case br:return f=ni(u.type,u.key,u.props,null,c.mode,f),f.ref=Mt(c,null,u),f.return=c,f;case tt:return u=vl(u,c.mode,f),u.return=c,u;case xn:var h=u._init;return m(c,h(u._payload),f)}if(Bt(u)||jt(u))return u=Qn(u,c.mode,f,null),u.return=c,u;Mr(c,u)}return null}function p(c,u,f,h){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(c,u,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case br:return f.key===k?s(c,u,f,h):null;case tt:return f.key===k?d(c,u,f,h):null;case xn:return k=f._init,p(c,u,k(f._payload),h)}if(Bt(f)||jt(f))return k!==null?null:g(c,u,f,h,null);Mr(c,f)}return null}function v(c,u,f,h,k){if(typeof h=="string"&&h!==""||typeof h=="number")return c=c.get(f)||null,a(u,c,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case br:return c=c.get(h.key===null?f:h.key)||null,s(u,c,h,k);case tt:return c=c.get(h.key===null?f:h.key)||null,d(u,c,h,k);case xn:var P=h._init;return v(c,u,f,P(h._payload),k)}if(Bt(h)||jt(h))return c=c.get(f)||null,g(u,c,h,k,null);Mr(u,h)}return null}function x(c,u,f,h){for(var k=null,P=null,E=u,C=u=0,D=null;E!==null&&C<f.length;C++){E.index>C?(D=E,E=null):D=E.sibling;var F=p(c,E,f[C],h);if(F===null){E===null&&(E=D);break}e&&E&&F.alternate===null&&n(c,E),u=l(F,u,C),P===null?k=F:P.sibling=F,P=F,E=D}if(C===f.length)return t(c,E),Y&&An(c,C),k;if(E===null){for(;C<f.length;C++)E=m(c,f[C],h),E!==null&&(u=l(E,u,C),P===null?k=E:P.sibling=E,P=E);return Y&&An(c,C),k}for(E=r(c,E);C<f.length;C++)D=v(E,c,C,f[C],h),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?C:D.key),u=l(D,u,C),P===null?k=D:P.sibling=D,P=D);return e&&E.forEach(function(Q){return n(c,Q)}),Y&&An(c,C),k}function y(c,u,f,h){var k=jt(f);if(typeof k!="function")throw Error(_(150));if(f=k.call(f),f==null)throw Error(_(151));for(var P=k=null,E=u,C=u=0,D=null,F=f.next();E!==null&&!F.done;C++,F=f.next()){E.index>C?(D=E,E=null):D=E.sibling;var Q=p(c,E,F.value,h);if(Q===null){E===null&&(E=D);break}e&&E&&Q.alternate===null&&n(c,E),u=l(Q,u,C),P===null?k=Q:P.sibling=Q,P=Q,E=D}if(F.done)return t(c,E),Y&&An(c,C),k;if(E===null){for(;!F.done;C++,F=f.next())F=m(c,F.value,h),F!==null&&(u=l(F,u,C),P===null?k=F:P.sibling=F,P=F);return Y&&An(c,C),k}for(E=r(c,E);!F.done;C++,F=f.next())F=v(E,c,C,F.value,h),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?C:F.key),u=l(F,u,C),P===null?k=F:P.sibling=F,P=F);return e&&E.forEach(function(Me){return n(c,Me)}),Y&&An(c,C),k}function S(c,u,f,h){if(typeof f=="object"&&f!==null&&f.type===rt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case br:e:{for(var k=f.key,P=u;P!==null;){if(P.key===k){if(k=f.type,k===rt){if(P.tag===7){t(c,P.sibling),u=i(P,f.props.children),u.return=c,c=u;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xn&&Ya(k)===P.type){t(c,P.sibling),u=i(P,f.props),u.ref=Mt(c,P,f),u.return=c,c=u;break e}t(c,P);break}else n(c,P);P=P.sibling}f.type===rt?(u=Qn(f.props.children,c.mode,h,f.key),u.return=c,c=u):(h=ni(f.type,f.key,f.props,null,c.mode,h),h.ref=Mt(c,u,f),h.return=c,c=h)}return o(c);case tt:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(c,u.sibling),u=i(u,f.children||[]),u.return=c,c=u;break e}else{t(c,u);break}else n(c,u);u=u.sibling}u=vl(f,c.mode,h),u.return=c,c=u}return o(c);case xn:return P=f._init,S(c,u,P(f._payload),h)}if(Bt(f))return x(c,u,f,h);if(jt(f))return y(c,u,f,h);Mr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(c,u.sibling),u=i(u,f),u.return=c,c=u):(t(c,u),u=gl(f,c.mode,h),u.return=c,c=u),o(c)):t(c,u)}return S}var Et=Vu(!0),Qu=Vu(!1),gi=On(null),vi=null,dt=null,Io=null;function Ao(){Io=dt=vi=null}function Bo(e){var n=gi.current;G(gi),e._currentValue=n}function ql(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xt(e,n){vi=e,Io=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function He(e){var n=e._currentValue;if(Io!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(vi===null)throw Error(_(308));dt=e,vi.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Wn=null;function Uo(e){Wn===null?Wn=[e]:Wn.push(e)}function Ku(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Uo(n)):(t.next=i.next,i.next=t),n.interleaved=t,hn(e,r)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wn=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Fn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,hn(e,t)}return i=r.interleaved,i===null?(n.next=n,Uo(r)):(n.next=i.next,i.next=n),r.interleaved=n,hn(e,t)}function Xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$o(e,t)}}function Za(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function yi(e,n,t,r){var i=e.updateQueue;wn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,d=s.next;s.next=null,o===null?l=d:o.next=d,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=s))}if(l!==null){var m=i.baseState;o=0,g=d=s=null,a=l;do{var p=a.lane,v=a.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(p=n,v=t,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(v,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(v,m,p):x,p==null)break e;m=J({},m,p);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=v,s=m):g=g.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(s=m),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Yn|=o,e.lanes=o,e.memoizedState=m}}function qa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Sr={},ln=On(Sr),fr=On(Sr),pr=On(Sr);function Hn(e){if(e===Sr)throw Error(_(174));return e}function Ho(e,n){switch(V(pr,n),V(fr,e),V(ln,Sr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:jl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=jl(n,e)}G(ln),V(ln,n)}function Ct(){G(ln),G(fr),G(pr)}function Xu(e){Hn(pr.current);var n=Hn(ln.current),t=jl(n,e.type);n!==t&&(V(fr,e),V(ln,t))}function Vo(e){fr.current===e&&(G(ln),G(fr))}var Z=On(0);function xi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var cl=[];function Qo(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var Yr=vn.ReactCurrentDispatcher,dl=vn.ReactCurrentBatchConfig,Xn=0,q=null,ie=null,oe=null,wi=!1,Yt=!1,mr=0,qf=0;function de(){throw Error(_(321))}function Ko(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Je(e[t],n[t]))return!1;return!0}function Go(e,n,t,r,i,l){if(Xn=l,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yr.current=e===null||e.memoizedState===null?tp:rp,e=t(r,i),Yt){l=0;do{if(Yt=!1,mr=0,25<=l)throw Error(_(301));l+=1,oe=ie=null,n.updateQueue=null,Yr.current=ip,e=t(r,i)}while(Yt)}if(Yr.current=ki,n=ie!==null&&ie.next!==null,Xn=0,oe=ie=q=null,wi=!1,n)throw Error(_(300));return e}function Xo(){var e=mr!==0;return mr=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?q.memoizedState=oe=e:oe=oe.next=e,oe}function Ve(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=oe===null?q.memoizedState:oe.next;if(n!==null)oe=n,ie=e;else{if(e===null)throw Error(_(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},oe===null?q.memoizedState=oe=e:oe=oe.next=e}return oe}function hr(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=Ve(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=ie,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,d=l;do{var g=d.lane;if((Xn&g)===g)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,q.lanes|=g,Yn|=g}d=d.next}while(d!==null&&d!==l);s===null?o=r:s.next=a,Je(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,q.lanes|=l,Yn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pl(e){var n=Ve(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Je(l,n.memoizedState)||(Ee=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Yu(){}function Zu(e,n){var t=q,r=Ve(),i=n(),l=!Je(r.memoizedState,i);if(l&&(r.memoizedState=i,Ee=!0),r=r.queue,Yo(ec.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,gr(9,Ju.bind(null,t,r,i,n),void 0,null),ae===null)throw Error(_(349));Xn&30||qu(t,n,i)}return i}function qu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ju(e,n,t,r){n.value=t,n.getSnapshot=r,nc(n)&&tc(e)}function ec(e,n,t){return t(function(){nc(n)&&tc(e)})}function nc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Je(e,t)}catch{return!0}}function tc(e){var n=hn(e,1);n!==null&&qe(n,e,1,-1)}function Ja(e){var n=nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},n.queue=e,e=e.dispatch=np.bind(null,q,e),[n.memoizedState,e]}function gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function rc(){return Ve().memoizedState}function Zr(e,n,t,r){var i=nn();q.flags|=e,i.memoizedState=gr(1|n,t,void 0,r===void 0?null:r)}function Ri(e,n,t,r){var i=Ve();r=r===void 0?null:r;var l=void 0;if(ie!==null){var o=ie.memoizedState;if(l=o.destroy,r!==null&&Ko(r,o.deps)){i.memoizedState=gr(n,t,l,r);return}}q.flags|=e,i.memoizedState=gr(1|n,t,l,r)}function es(e,n){return Zr(8390656,8,e,n)}function Yo(e,n){return Ri(2048,8,e,n)}function ic(e,n){return Ri(4,2,e,n)}function lc(e,n){return Ri(4,4,e,n)}function oc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ac(e,n,t){return t=t!=null?t.concat([e]):null,Ri(4,4,oc.bind(null,n,e),t)}function Zo(){}function sc(e,n){var t=Ve();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ko(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function uc(e,n){var t=Ve();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ko(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function cc(e,n,t){return Xn&21?(Je(t,n)||(t=hu(),q.lanes|=t,Yn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function Jf(e,n){var t=H;H=t!==0&&4>t?t:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),n()}finally{H=t,dl.transition=r}}function dc(){return Ve().memoizedState}function ep(e,n,t){var r=jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},fc(e))pc(n,t);else if(t=Ku(e,n,t,r),t!==null){var i=xe();qe(t,e,r,i),mc(t,n,r)}}function np(e,n,t){var r=jn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,Je(a,o)){var s=n.interleaved;s===null?(i.next=i,Uo(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Ku(e,n,i,r),t!==null&&(i=xe(),qe(t,e,r,i),mc(t,n,r))}}function fc(e){var n=e.alternate;return e===q||n!==null&&n===q}function pc(e,n){Yt=wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function mc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$o(e,t)}}var ki={readContext:He,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},tp={readContext:He,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:He,useEffect:es,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zr(4194308,4,oc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zr(4,2,e,n)},useMemo:function(e,n){var t=nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ep.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:Ja,useDebugValue:Zo,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Ja(!1),n=e[0];return e=Jf.bind(null,e[1]),nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=q,i=nn();if(Y){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),ae===null)throw Error(_(349));Xn&30||qu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,es(ec.bind(null,r,l,e),[e]),r.flags|=2048,gr(9,Ju.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=nn(),n=ae.identifierPrefix;if(Y){var t=dn,r=cn;t=(r&~(1<<32-Ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=qf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rp={readContext:He,useCallback:sc,useContext:He,useEffect:Yo,useImperativeHandle:ac,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:uc,useReducer:fl,useRef:rc,useState:function(){return fl(hr)},useDebugValue:Zo,useDeferredValue:function(e){var n=Ve();return cc(n,ie.memoizedState,e)},useTransition:function(){var e=fl(hr)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:Yu,useSyncExternalStore:Zu,useId:dc,unstable_isNewReconciler:!1},ip={readContext:He,useCallback:sc,useContext:He,useEffect:Yo,useImperativeHandle:ac,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:uc,useReducer:pl,useRef:rc,useState:function(){return pl(hr)},useDebugValue:Zo,useDeferredValue:function(e){var n=Ve();return ie===null?n.memoizedState=e:cc(n,ie.memoizedState,e)},useTransition:function(){var e=pl(hr)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:Yu,useSyncExternalStore:Zu,useId:dc,unstable_isNewReconciler:!1};function Ge(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Jl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Di={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=xe(),i=jn(e),l=fn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Fn(e,l,i),n!==null&&(qe(n,e,i,r),Xr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=xe(),i=jn(e),l=fn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Fn(e,l,i),n!==null&&(qe(n,e,i,r),Xr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xe(),r=jn(e),i=fn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Fn(e,i,r),n!==null&&(qe(n,e,r,t),Xr(n,e,r))}};function ns(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!sr(t,r)||!sr(i,l):!0}function hc(e,n,t){var r=!1,i=Dn,l=n.contextType;return typeof l=="object"&&l!==null?l=He(l):(i=be(n)?Kn:me.current,r=n.contextTypes,l=(r=r!=null)?_t(e,i):Dn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Di,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ts(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Di.enqueueReplaceState(n,n.state,null)}function eo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Wo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=He(l):(l=be(n)?Kn:me.current,i.context=_t(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Jl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Di.enqueueReplaceState(i,i.state,null),yi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bt(e,n){try{var t="",r=n;do t+=Td(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ml(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function no(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function gc(e,n,t){t=fn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Si||(Si=!0,fo=r),no(e,n)},t}function vc(e,n,t){t=fn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){no(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){no(e,n),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function rs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=xp.bind(null,e,n,t),n.then(e,e))}function is(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ls(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=fn(-1,1),n.tag=2,Fn(t,n,1))),t.lanes|=1),e)}var op=vn.ReactCurrentOwner,Ee=!1;function ye(e,n,t,r){n.child=e===null?Qu(n,null,t,r):Et(n,e.child,t,r)}function os(e,n,t,r,i){t=t.render;var l=n.ref;return xt(n,i),r=Go(e,n,t,r,l,i),t=Xo(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,gn(e,n,i)):(Y&&t&&Do(n),n.flags|=1,ye(e,n,r,i),n.child)}function as(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!la(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,yc(e,n,l,r,i)):(e=ni(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:sr,t(o,r)&&e.ref===n.ref)return gn(e,n,i)}return n.flags|=1,e=zn(l,r),e.ref=n.ref,e.return=n,n.child=e}function yc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,gn(e,n,i)}return to(e,n,t,r,i)}function xc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(pt,Fe),Fe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(pt,Fe),Fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,V(pt,Fe),Fe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,V(pt,Fe),Fe|=r;return ye(e,n,i,t),n.child}function wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function to(e,n,t,r,i){var l=be(t)?Kn:me.current;return l=_t(n,l),xt(n,i),t=Go(e,n,t,r,l,i),r=Xo(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,gn(e,n,i)):(Y&&r&&Do(n),n.flags|=1,ye(e,n,t,i),n.child)}function ss(e,n,t,r,i){if(be(t)){var l=!0;pi(n)}else l=!1;if(xt(n,i),n.stateNode===null)qr(e,n),hc(n,t,r),eo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=He(d):(d=be(t)?Kn:me.current,d=_t(n,d));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==d)&&ts(n,o,r,d),wn=!1;var p=n.memoizedState;o.state=p,yi(n,r,o,i),s=n.memoizedState,a!==r||p!==s||Ce.current||wn?(typeof g=="function"&&(Jl(n,t,g,r),s=n.memoizedState),(a=wn||ns(n,t,a,r,p,s,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Gu(e,n),a=n.memoizedProps,d=n.type===n.elementType?a:Ge(n.type,a),o.props=d,m=n.pendingProps,p=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=He(s):(s=be(t)?Kn:me.current,s=_t(n,s));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==s)&&ts(n,o,r,s),wn=!1,p=n.memoizedState,o.state=p,yi(n,r,o,i);var x=n.memoizedState;a!==m||p!==x||Ce.current||wn?(typeof v=="function"&&(Jl(n,t,v,r),x=n.memoizedState),(d=wn||ns(n,t,d,r,p,x,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return ro(e,n,t,r,l,i)}function ro(e,n,t,r,i,l){wc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ka(n,t,!1),gn(e,n,l);r=n.stateNode,op.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Et(n,e.child,null,l),n.child=Et(n,null,a,l)):ye(e,n,a,l),n.memoizedState=r.state,i&&Ka(n,t,!0),n.child}function kc(e){var n=e.stateNode;n.pendingContext?Qa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qa(e,n.context,!1),Ho(e,n.containerInfo)}function us(e,n,t,r,i){return St(),Oo(i),n.flags|=256,ye(e,n,t,r),n.child}var io={dehydrated:null,treeContext:null,retryLane:0};function lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,n,t){var r=n.pendingProps,i=Z.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Z,i&1),e===null)return Zl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ii(o,r,0,null),e=Qn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=lo(t),n.memoizedState=io,e):qo(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ap(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=zn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=zn(a,l):(l=Qn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?lo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=io,r}return l=e.child,e=l.sibling,r=zn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function qo(e,n){return n=Ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Or(e,n,t,r){return r!==null&&Oo(r),Et(n,e.child,null,t),e=qo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ap(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=ml(Error(_(422))),Or(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ii({mode:"visible",children:r.children},i,0,null),l=Qn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Et(n,e.child,null,o),n.child.memoizedState=lo(o),n.memoizedState=io,l);if(!(n.mode&1))return Or(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(_(419)),r=ml(l,r,void 0),Or(e,n,o,r)}if(a=(o&e.childLanes)!==0,Ee||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,hn(e,i),qe(r,e,i,-1))}return ia(),r=ml(Error(_(421))),Or(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=wp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,je=Nn(i.nextSibling),ze=n,Y=!0,Ye=null,e!==null&&(Ae[Be++]=cn,Ae[Be++]=dn,Ae[Be++]=Gn,cn=e.id,dn=e.overflow,Gn=n),n=qo(n,r.children),n.flags|=4096,n)}function cs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ql(e.return,n,t)}function hl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Sc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ye(e,n,r.children,t),r=Z.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cs(e,t,n);else if(e.tag===19)cs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&xi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),hl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&xi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}hl(n,!0,t,null,l);break;case"together":hl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sp(e,n,t){switch(n.tag){case 3:kc(n),St();break;case 5:Xu(n);break;case 1:be(n.type)&&pi(n);break;case 4:Ho(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;V(gi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),n.flags|=128,null):t&n.child.childLanes?_c(e,n,t):(V(Z,Z.current&1),e=gn(e,n,t),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Sc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return n.lanes=0,xc(e,n,t)}return gn(e,n,t)}var Ec,oo,Cc,bc;Ec=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};oo=function(){};Cc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Hn(ln.current);var l=null;switch(t){case"input":i=$l(e,i),r=$l(e,r),l=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":i=Tl(e,i),r=Tl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}zl(t,r);var o;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(nr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var s=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(nr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&K("scroll",e),l||a===s||(l=[])):(l=l||[]).push(d,s))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};bc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ot(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function up(e,n,t){var r=n.pendingProps;switch(Mo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return be(n.type)&&fi(),fe(n),null;case 3:return r=n.stateNode,Ct(),G(Ce),G(me),Qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(ho(Ye),Ye=null))),oo(e,n),fe(n),null;case 5:Vo(n);var i=Hn(pr.current);if(t=n.type,e!==null&&n.stateNode!=null)Cc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return fe(n),null}if(e=Hn(ln.current),Dr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[tn]=n,r[dr]=l,e=(n.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Wt.length;i++)K(Wt[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":xa(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":ka(r,l),K("invalid",r)}zl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Rr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Rr(r.textContent,a,e),i=["children",""+a]):nr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(t){case"input":Pr(r),wa(r,l,!0);break;case"textarea":Pr(r),_a(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=di)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[tn]=n,e[dr]=r,Ec(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ll(t,r),t){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wt.length;i++)K(Wt[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":xa(e,r),i=$l(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),K("invalid",e);break;case"textarea":ka(e,r),i=Tl(e,r),K("invalid",e);break;default:i=r}zl(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?ru(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&nu(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&tr(e,s):typeof s=="number"&&tr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(nr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&K("scroll",e):s!=null&&_o(e,l,s,o))}switch(t){case"input":Pr(e),wa(e,r,!1);break;case"textarea":Pr(e),_a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ht(e,!!r.multiple,l,!1):r.defaultValue!=null&&ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=di)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)bc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=Hn(pr.current),Hn(ln.current),Dr(n)){if(r=n.stateNode,t=n.memoizedProps,r[tn]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[tn]=n,n.stateNode=r}return fe(n),null;case 13:if(G(Z),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&je!==null&&n.mode&1&&!(n.flags&128))Hu(),St(),n.flags|=98560,l=!1;else if(l=Dr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(_(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[tn]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),l=!1}else Ye!==null&&(ho(Ye),Ye=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Z.current&1?le===0&&(le=3):ia())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Ct(),oo(e,n),e===null&&ur(n.stateNode.containerInfo),fe(n),null;case 10:return Bo(n.type._context),fe(n),null;case 17:return be(n.type)&&fi(),fe(n),null;case 19:if(G(Z),l=n.memoizedState,l===null)return fe(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ot(l,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=xi(e),o!==null){for(n.flags|=128,Ot(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(Z,Z.current&1|2),n.child}e=e.sibling}l.tail!==null&&ne()>Pt&&(n.flags|=128,r=!0,Ot(l,!1),n.lanes=4194304)}else{if(!r)if(e=xi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ot(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Y)return fe(n),null}else 2*ne()-l.renderingStartTime>Pt&&t!==1073741824&&(n.flags|=128,r=!0,Ot(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ne(),n.sibling=null,t=Z.current,V(Z,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return ra(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Fe&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function cp(e,n){switch(Mo(n),n.tag){case 1:return be(n.type)&&fi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),G(Ce),G(me),Qo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Vo(n),null;case 13:if(G(Z),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Z),null;case 4:return Ct(),null;case 10:return Bo(n.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var Ir=!1,pe=!1,dp=typeof WeakSet=="function"?WeakSet:Set,T=null;function ft(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ee(e,n,r)}else t.current=null}function ao(e,n,t){try{t()}catch(r){ee(e,n,r)}}var ds=!1;function fp(e,n){if(Hl=si,e=Tu(),Ro(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,d=0,g=0,m=e,p=null;n:for(;;){for(var v;m!==t||i!==0&&m.nodeType!==3||(a=o+i),m!==l||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break n;if(p===t&&++d===i&&(a=o),p===l&&++g===r&&(s=o),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vl={focusedElem:e,selectionRange:t},si=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,S=x.memoizedState,c=n.stateNode,u=c.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ge(n.type,y),S);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(h){ee(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return x=ds,ds=!1,x}function Zt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ao(n,t,l)}i=i.next}while(i!==r)}}function Mi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function so(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pc(e){var n=e.alternate;n!==null&&(e.alternate=null,Pc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[tn],delete n[dr],delete n[Gl],delete n[Gf],delete n[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $c(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(uo(e,n,t),e=e.sibling;e!==null;)uo(e,n,t),e=e.sibling}function co(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(co(e,n,t),e=e.sibling;e!==null;)co(e,n,t),e=e.sibling}var se=null,Xe=!1;function yn(e,n,t){for(t=t.child;t!==null;)Nc(e,n,t),t=t.sibling}function Nc(e,n,t){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ni,t)}catch{}switch(t.tag){case 5:pe||ft(t,n);case 6:var r=se,i=Xe;se=null,yn(e,n,t),se=r,Xe=i,se!==null&&(Xe?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(Xe?(e=se,t=t.stateNode,e.nodeType===8?sl(e.parentNode,t):e.nodeType===1&&sl(e,t),or(e)):sl(se,t.stateNode));break;case 4:r=se,i=Xe,se=t.stateNode.containerInfo,Xe=!0,yn(e,n,t),se=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ao(t,n,o),i=i.next}while(i!==r)}yn(e,n,t);break;case 1:if(!pe&&(ft(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ee(t,n,a)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,yn(e,n,t),pe=r):yn(e,n,t);break;default:yn(e,n,t)}}function ps(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dp),n.forEach(function(r){var i=kp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ke(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Xe=!1;break e;case 3:se=a.stateNode.containerInfo,Xe=!0;break e;case 4:se=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(se===null)throw Error(_(160));Nc(l,o,i),se=null,Xe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){ee(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Fc(n,e),n=n.sibling}function Fc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(n,e),en(e),r&4){try{Zt(3,e,e.return),Mi(3,e)}catch(y){ee(e,e.return,y)}try{Zt(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Ke(n,e),en(e),r&512&&t!==null&&ft(t,t.return);break;case 5:if(Ke(n,e),en(e),r&512&&t!==null&&ft(t,t.return),e.flags&32){var i=e.stateNode;try{tr(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&qs(i,l),Ll(a,o);var d=Ll(a,l);for(o=0;o<s.length;o+=2){var g=s[o],m=s[o+1];g==="style"?ru(i,m):g==="dangerouslySetInnerHTML"?nu(i,m):g==="children"?tr(i,m):_o(i,g,m,d)}switch(a){case"input":Nl(i,l);break;case"textarea":Js(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?ht(i,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?ht(i,!!l.multiple,l.defaultValue,!0):ht(i,!!l.multiple,l.multiple?[]:"",!1))}i[dr]=l}catch(y){ee(e,e.return,y)}}break;case 6:if(Ke(n,e),en(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){ee(e,e.return,y)}}break;case 3:if(Ke(n,e),en(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Ke(n,e),en(e);break;case 13:Ke(n,e),en(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(na=ne())),r&4&&ps(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(d=pe)||g,Ke(n,e),pe=d):Ke(n,e),en(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(T=e,g=e.child;g!==null;){for(m=T=g;T!==null;){switch(p=T,v=p.child,p.tag){case 0:case 11:case 14:case 15:Zt(4,p,p.return);break;case 1:ft(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(y){ee(r,t,y)}}break;case 5:ft(p,p.return);break;case 22:if(p.memoizedState!==null){hs(m);continue}}v!==null?(v.return=p,T=v):hs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=tu("display",o))}catch(y){ee(e,e.return,y)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(y){ee(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ke(n,e),en(e),r&4&&ps(e);break;case 21:break;default:Ke(n,e),en(e)}}function en(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($c(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(tr(i,""),r.flags&=-33);var l=fs(e);co(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fs(e);uo(e,a,o);break;default:throw Error(_(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,t){T=e,Tc(e)}function Tc(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ir;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||pe;a=Ir;var d=pe;if(Ir=o,(pe=s)&&!d)for(T=i;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?gs(i):s!==null?(s.return=o,T=s):gs(i);for(;l!==null;)T=l,Tc(l),l=l.sibling;T=i,Ir=a,pe=d}ms(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):ms(e)}}function ms(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Mi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&qa(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qa(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&or(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}pe||n.flags&512&&so(n)}catch(p){ee(n,n.return,p)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function hs(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function gs(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Mi(4,n)}catch(s){ee(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){ee(n,i,s)}}var l=n.return;try{so(n)}catch(s){ee(n,l,s)}break;case 5:var o=n.return;try{so(n)}catch(s){ee(n,o,s)}}}catch(s){ee(n,n.return,s)}if(n===e){T=null;break}var a=n.sibling;if(a!==null){a.return=n.return,T=a;break}T=n.return}}var mp=Math.ceil,_i=vn.ReactCurrentDispatcher,Jo=vn.ReactCurrentOwner,We=vn.ReactCurrentBatchConfig,U=0,ae=null,re=null,ue=0,Fe=0,pt=On(0),le=0,vr=null,Yn=0,Oi=0,ea=0,qt=null,Se=null,na=0,Pt=1/0,sn=null,Si=!1,fo=null,Tn=null,Ar=!1,En=null,Ei=0,Jt=0,po=null,Jr=-1,ei=0;function xe(){return U&6?ne():Jr!==-1?Jr:Jr=ne()}function jn(e){return e.mode&1?U&2&&ue!==0?ue&-ue:Zf.transition!==null?(ei===0&&(ei=hu()),ei):(e=H,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e):1}function qe(e,n,t,r){if(50<Jt)throw Jt=0,po=null,Error(_(185));wr(e,t,r),(!(U&2)||e!==ae)&&(e===ae&&(!(U&2)&&(Oi|=t),le===4&&_n(e,ue)),Pe(e,r),t===1&&U===0&&!(n.mode&1)&&(Pt=ne()+500,Li&&In()))}function Pe(e,n){var t=e.callbackNode;Yd(e,n);var r=ai(e,e===ae?ue:0);if(r===0)t!==null&&Ca(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ca(t),n===1)e.tag===0?Yf(vs.bind(null,e)):Bu(vs.bind(null,e)),Qf(function(){!(U&6)&&In()}),t=null;else{switch(gu(r)){case 1:t=Po;break;case 4:t=pu;break;case 16:t=oi;break;case 536870912:t=mu;break;default:t=oi}t=Ic(t,jc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function jc(e,n){if(Jr=-1,ei=0,U&6)throw Error(_(327));var t=e.callbackNode;if(wt()&&e.callbackNode!==t)return null;var r=ai(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ci(e,r);else{n=r;var i=U;U|=2;var l=Lc();(ae!==e||ue!==n)&&(sn=null,Pt=ne()+500,Vn(e,n));do try{vp();break}catch(a){zc(e,a)}while(!0);Ao(),_i.current=l,U=i,re!==null?n=0:(ae=null,ue=0,n=le)}if(n!==0){if(n===2&&(i=Il(e),i!==0&&(r=i,n=mo(e,i))),n===1)throw t=vr,Vn(e,0),_n(e,r),Pe(e,ne()),t;if(n===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!hp(i)&&(n=Ci(e,r),n===2&&(l=Il(e),l!==0&&(r=l,n=mo(e,l))),n===1))throw t=vr,Vn(e,0),_n(e,r),Pe(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:Bn(e,Se,sn);break;case 3:if(_n(e,r),(r&130023424)===r&&(n=na+500-ne(),10<n)){if(ai(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Bn.bind(null,e,Se,sn),n);break}Bn(e,Se,sn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mp(r/1960))-r,10<r){e.timeoutHandle=Kl(Bn.bind(null,e,Se,sn),r);break}Bn(e,Se,sn);break;case 5:Bn(e,Se,sn);break;default:throw Error(_(329))}}}return Pe(e,ne()),e.callbackNode===t?jc.bind(null,e):null}function mo(e,n){var t=qt;return e.current.memoizedState.isDehydrated&&(Vn(e,n).flags|=256),e=Ci(e,n),e!==2&&(n=Se,Se=t,n!==null&&ho(n)),e}function ho(e){Se===null?Se=e:Se.push.apply(Se,e)}function hp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Je(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _n(e,n){for(n&=~ea,n&=~Oi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ze(n),r=1<<t;e[t]=-1,n&=~r}}function vs(e){if(U&6)throw Error(_(327));wt();var n=ai(e,0);if(!(n&1))return Pe(e,ne()),null;var t=Ci(e,n);if(e.tag!==0&&t===2){var r=Il(e);r!==0&&(n=r,t=mo(e,r))}if(t===1)throw t=vr,Vn(e,0),_n(e,n),Pe(e,ne()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,Se,sn),Pe(e,ne()),null}function ta(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Pt=ne()+500,Li&&In())}}function Zn(e){En!==null&&En.tag===0&&!(U&6)&&wt();var n=U;U|=1;var t=We.transition,r=H;try{if(We.transition=null,H=1,e)return e()}finally{H=r,We.transition=t,U=n,!(U&6)&&In()}}function ra(){Fe=pt.current,G(pt)}function Vn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vf(t)),re!==null)for(t=re.return;t!==null;){var r=t;switch(Mo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:Ct(),G(Ce),G(me),Qo();break;case 5:Vo(r);break;case 4:Ct();break;case 13:G(Z);break;case 19:G(Z);break;case 10:Bo(r.type._context);break;case 22:case 23:ra()}t=t.return}if(ae=e,re=e=zn(e.current,null),ue=Fe=n,le=0,vr=null,ea=Oi=Yn=0,Se=qt=null,Wn!==null){for(n=0;n<Wn.length;n++)if(t=Wn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Wn=null}return e}function zc(e,n){do{var t=re;try{if(Ao(),Yr.current=ki,wi){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if(Xn=0,oe=ie=q=null,Yt=!1,mr=0,Jo.current=null,t===null||t.return===null){le=1,vr=n,re=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=is(o);if(v!==null){v.flags&=-257,ls(v,o,a,l,n),v.mode&1&&rs(l,d,n),n=v,s=d;var x=n.updateQueue;if(x===null){var y=new Set;y.add(s),n.updateQueue=y}else x.add(s);break e}else{if(!(n&1)){rs(l,d,n),ia();break e}s=Error(_(426))}}else if(Y&&a.mode&1){var S=is(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ls(S,o,a,l,n),Oo(bt(s,a));break e}}l=s=bt(s,a),le!==4&&(le=2),qt===null?qt=[l]:qt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var c=gc(l,s,n);Za(l,c);break e;case 1:a=s;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Tn===null||!Tn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var h=vc(l,a,n);Za(l,h);break e}}l=l.return}while(l!==null)}Dc(t)}catch(k){n=k,re===t&&t!==null&&(re=t=t.return);continue}break}while(!0)}function Lc(){var e=_i.current;return _i.current=ki,e===null?ki:e}function ia(){(le===0||le===3||le===2)&&(le=4),ae===null||!(Yn&268435455)&&!(Oi&268435455)||_n(ae,ue)}function Ci(e,n){var t=U;U|=2;var r=Lc();(ae!==e||ue!==n)&&(sn=null,Vn(e,n));do try{gp();break}catch(i){zc(e,i)}while(!0);if(Ao(),U=t,_i.current=r,re!==null)throw Error(_(261));return ae=null,ue=0,le}function gp(){for(;re!==null;)Rc(re)}function vp(){for(;re!==null&&!Bd();)Rc(re)}function Rc(e){var n=Oc(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,n===null?Dc(e):re=n,Jo.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cp(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(t=up(t,n,Fe),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);le===0&&(le=5)}function Bn(e,n,t){var r=H,i=We.transition;try{We.transition=null,H=1,yp(e,n,t,r)}finally{We.transition=i,H=r}return null}function yp(e,n,t,r){do wt();while(En!==null);if(U&6)throw Error(_(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Zd(e,l),e===ae&&(re=ae=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ar||(Ar=!0,Ic(oi,function(){return wt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=We.transition,We.transition=null;var o=H;H=1;var a=U;U|=4,Jo.current=null,fp(e,t),Fc(t,e),Of(Vl),si=!!Hl,Vl=Hl=null,e.current=t,pp(t),Ud(),U=a,H=o,We.transition=l}else e.current=t;if(Ar&&(Ar=!1,En=e,Ei=i),l=e.pendingLanes,l===0&&(Tn=null),Vd(t.stateNode),Pe(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Si)throw Si=!1,e=fo,fo=null,e;return Ei&1&&e.tag!==0&&wt(),l=e.pendingLanes,l&1?e===po?Jt++:(Jt=0,po=e):Jt=0,In(),null}function wt(){if(En!==null){var e=gu(Ei),n=We.transition,t=H;try{if(We.transition=null,H=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,Ei=0,U&6)throw Error(_(331));var i=U;for(U|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(T=d;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:Zt(8,g,l)}var m=g.child;if(m!==null)m.return=g,T=m;else for(;T!==null;){g=T;var p=g.sibling,v=g.return;if(Pc(g),g===d){T=null;break}if(p!==null){p.return=v,T=p;break}T=v}}}var x=l.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Zt(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,T=c;break e}T=l.return}}var u=e.current;for(T=u;T!==null;){o=T;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,T=f;else e:for(o=u;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mi(9,a)}}catch(k){ee(a,a.return,k)}if(a===o){T=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}if(U=i,In(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ni,e)}catch{}r=!0}return r}finally{H=t,We.transition=n}}return!1}function ys(e,n,t){n=bt(t,n),n=gc(e,n,1),e=Fn(e,n,1),n=xe(),e!==null&&(wr(e,1,n),Pe(e,n))}function ee(e,n,t){if(e.tag===3)ys(e,e,t);else for(;n!==null;){if(n.tag===3){ys(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=bt(t,e),e=vc(n,e,1),n=Fn(n,e,1),e=xe(),n!==null&&(wr(n,1,e),Pe(n,e));break}}n=n.return}}function xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=xe(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(ue&t)===t&&(le===4||le===3&&(ue&130023424)===ue&&500>ne()-na?Vn(e,0):ea|=t),Pe(e,n)}function Mc(e,n){n===0&&(e.mode&1?(n=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):n=1);var t=xe();e=hn(e,n),e!==null&&(wr(e,n,t),Pe(e,t))}function wp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Mc(e,t)}function kp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),Mc(e,t)}var Oc;Oc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ce.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,sp(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,Y&&n.flags&1048576&&Uu(n,hi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qr(e,n),e=n.pendingProps;var i=_t(n,me.current);xt(n,t),i=Go(null,n,r,e,i,t);var l=Xo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,be(r)?(l=!0,pi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wo(n),i.updater=Di,n.stateNode=i,i._reactInternals=n,eo(n,r,e,t),n=ro(null,n,r,!0,l,t)):(n.tag=0,Y&&l&&Do(n),ye(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Sp(r),e=Ge(r,e),i){case 0:n=to(null,n,r,e,t);break e;case 1:n=ss(null,n,r,e,t);break e;case 11:n=os(null,n,r,e,t);break e;case 14:n=as(null,n,r,Ge(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ge(r,i),to(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ge(r,i),ss(e,n,r,i,t);case 3:e:{if(kc(n),e===null)throw Error(_(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Gu(e,n),yi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=bt(Error(_(423)),n),n=us(e,n,r,t,i);break e}else if(r!==i){i=bt(Error(_(424)),n),n=us(e,n,r,t,i);break e}else for(je=Nn(n.stateNode.containerInfo.firstChild),ze=n,Y=!0,Ye=null,t=Qu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),r===i){n=gn(e,n,t);break e}ye(e,n,r,t)}n=n.child}return n;case 5:return Xu(n),e===null&&Zl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ql(r,i)?o=null:l!==null&&Ql(r,l)&&(n.flags|=32),wc(e,n),ye(e,n,o,t),n.child;case 6:return e===null&&Zl(n),null;case 13:return _c(e,n,t);case 4:return Ho(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Et(n,null,r,t):ye(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ge(r,i),os(e,n,r,i,t);case 7:return ye(e,n,n.pendingProps,t),n.child;case 8:return ye(e,n,n.pendingProps.children,t),n.child;case 12:return ye(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,V(gi,r._currentValue),r._currentValue=o,l!==null)if(Je(l.value,o)){if(l.children===i.children&&!Ce.current){n=gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=fn(-1,t&-t),s.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),ql(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(_(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ql(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ye(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,xt(n,t),i=He(i),r=r(i),n.flags|=1,ye(e,n,r,t),n.child;case 14:return r=n.type,i=Ge(r,n.pendingProps),i=Ge(r.type,i),as(e,n,r,i,t);case 15:return yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ge(r,i),qr(e,n),n.tag=1,be(r)?(e=!0,pi(n)):e=!1,xt(n,t),hc(n,r,i),eo(n,r,i,t),ro(null,n,r,!0,e,t);case 19:return Sc(e,n,t);case 22:return xc(e,n,t)}throw Error(_(156,n.tag))};function Ic(e,n){return fu(e,n)}function _p(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,n,t,r){return new _p(e,n,t,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sp(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eo)return 11;if(e===Co)return 14}return 2}function zn(e,n){var t=e.alternate;return t===null?(t=Ue(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ni(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")la(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case rt:return Qn(t.children,i,l,n);case So:o=8,i|=8;break;case El:return e=Ue(12,t,n,i|2),e.elementType=El,e.lanes=l,e;case Cl:return e=Ue(13,t,n,i),e.elementType=Cl,e.lanes=l,e;case bl:return e=Ue(19,t,n,i),e.elementType=bl,e.lanes=l,e;case Xs:return Ii(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ks:o=10;break e;case Gs:o=9;break e;case Eo:o=11;break e;case Co:o=14;break e;case xn:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=Ue(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Qn(e,n,t,r){return e=Ue(7,e,r,n),e.lanes=t,e}function Ii(e,n,t,r){return e=Ue(22,e,r,n),e.elementType=Xs,e.lanes=t,e.stateNode={isHidden:!1},e}function gl(e,n,t){return e=Ue(6,e,null,n),e.lanes=t,e}function vl(e,n,t){return n=Ue(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ep(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oa(e,n,t,r,i,l,o,a,s){return e=new Ep(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ue(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(l),e}function Cp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ac(e){if(!e)return Dn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(be(t))return Au(e,t,n)}return n}function Bc(e,n,t,r,i,l,o,a,s){return e=oa(t,r,!0,e,i,l,o,a,s),e.context=Ac(null),t=e.current,r=xe(),i=jn(t),l=fn(r,i),l.callback=n??null,Fn(t,l,i),e.current.lanes=i,wr(e,i,r),Pe(e,r),e}function Ai(e,n,t,r){var i=n.current,l=xe(),o=jn(i);return t=Ac(t),n.context===null?n.context=t:n.pendingContext=t,n=fn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Fn(i,n,o),e!==null&&(qe(e,i,o,l),Xr(e,i,o)),o}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function aa(e,n){xs(e,n),(e=e.alternate)&&xs(e,n)}function bp(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Bi.prototype.render=sa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));Ai(e,n,null,null)};Bi.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zn(function(){Ai(null,e,null,null)}),n[mn]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=xu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kn.length&&n!==0&&n<kn[t].priority;t++);kn.splice(t,0,e),t===0&&ku(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ws(){}function Pp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=bi(o);l.call(d)}}var o=Bc(n,r,e,0,null,!1,!1,"",ws);return e._reactRootContainer=o,e[mn]=o.current,ur(e.nodeType===8?e.parentNode:e),Zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=bi(s);a.call(d)}}var s=oa(e,0,!1,null,null,!1,!1,"",ws);return e._reactRootContainer=s,e[mn]=s.current,ur(e.nodeType===8?e.parentNode:e),Zn(function(){Ai(n,s,t,r)}),s}function Wi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=bi(o);a.call(s)}}Ai(n,o,e,i)}else o=Pp(t,n,e,i,r);return bi(o)}vu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ut(n.pendingLanes);t!==0&&($o(n,t|1),Pe(n,ne()),!(U&6)&&(Pt=ne()+500,In()))}break;case 13:Zn(function(){var r=hn(e,1);if(r!==null){var i=xe();qe(r,e,1,i)}}),aa(e,1)}};No=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=xe();qe(n,e,134217728,t)}aa(e,134217728)}};yu=function(e){if(e.tag===13){var n=jn(e),t=hn(e,n);if(t!==null){var r=xe();qe(t,e,n,r)}aa(e,n)}};xu=function(){return H};wu=function(e,n){var t=H;try{return H=e,n()}finally{H=t}};Dl=function(e,n,t){switch(n){case"input":if(Nl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=zi(r);if(!i)throw Error(_(90));Zs(r),Nl(r,i)}}}break;case"textarea":Js(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}};ou=ta;au=Zn;var $p={usingClientEntryPoint:!1,Events:[_r,at,zi,iu,lu,ta]},It={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Np={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cu(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{Ni=Br.inject(Np),rn=Br}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(n))throw Error(_(200));return Cp(e,n,null,t)};Re.createRoot=function(e,n){if(!ua(e))throw Error(_(299));var t=!1,r="",i=Uc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=oa(e,1,!1,null,null,t,!1,r,i),e[mn]=n.current,ur(e.nodeType===8?e.parentNode:e),new sa(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=cu(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Zn(e)};Re.hydrate=function(e,n,t){if(!Ui(n))throw Error(_(200));return Wi(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!ua(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Uc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Bc(n,null,e,1,t??null,i,!1,l,o),e[mn]=n.current,ur(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Bi(n)};Re.render=function(e,n,t){if(!Ui(n))throw Error(_(200));return Wi(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(_(40));return e._reactRootContainer?(Zn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};Re.unstable_batchedUpdates=ta;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ui(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Wi(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Ws.exports=Re;var Fp=Ws.exports,ks=Fp;_l.createRoot=ks.createRoot,_l.hydrateRoot=ks.hydrateRoot;const Tp=`version: 0.1


 #button_custom  programmable(status:[hover, pressed,normal], disabled:[true, false], buttonText="Button") {
      //filter:pixelOutline(knockout, blue, 0.3)
      //filter:replacePalette(file, 0, 1)
      
      //bitmap(sheet("crew2", "marine_r_shooting_d")):30,130;
      //filter:glow(red, 0.3, 1, 1, 1, smoothColor)
      //filter:glow(red, 0.3, 1, 1, 1, smoothColor)
      //filter:dropShadow(4, 1.6, #F3F, 0.9, 50, 3.05)
      //filter:pixelOutline(knockout, blue, 0.3)
      //filter:pixelOutline(inlineColor, red, yellow)
      @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", 200, 30):     0,1
      @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", 200, 30):     0,0
      @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", 200, 30): 0,0
      @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", 200, 30):       0,0
      
      @(status=>hover, disabled=>false) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
      @(status=>pressed, disabled=>false) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
      @(status=>normal, disabled=>false) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
      @(status=>*, disabled=>true) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
 }


#ui programmable() {
      pos:100,300
      
      #buttonVal(updatable) text(dd, "Click the button!", #ffffff00): 10,50
     
     placeholder(generated(cross(200, 20)), builderParameter("button")) {
            settings(buildName=>button_custom) // override builder name (will use button2 programmable from std)
      }

      placeholder(generated(cross(200, 20)), builderParameter("disableCheckbox")) {
            pos: 10,100
      }
      text(dd, "Disabled Checkbox", #ffffff00): 30,100

      
      
}


 `,jp=`version: 0.1


#ui programmable() {
      pos:100,300
      
      #checkboxVal(updatable) text(dd, "clickCheckbox", #ffffff00): 10,50
     
     placeholder(generated(cross(200, 20)), builderParameter("checkbox")) {
            settings(checkboxBuildName=>checkbox2) // override builder name (will use checkbox2 programmable from std)
      }

      
      
}


 
`,zp=`version: 0.1

relativeLayouts {
  grid: 21, 31 {
  hexgrid:pointy(2, 3) {
  
  #endpoint point: 600,10

  
    
  #endpoints list {
        point: 250,20
        point: 450,20
        point: 10,20
        point: 10,20
  }

    #mainDropDown sequence($i:0..30) point: 10 + $i * 120, 100
    #buttons sequence($i:0..30) point: 10 + $i * 200, 500
    #checkboxes sequence($i:0..30) point: 300, 200 + 30 * $i
  }
  }
}


#macroTest programmable() {
      pos:600,200
      text(dd, "MacroTest", #ffffff00): 0,0
      placeholder(generated(cross(10, 10)), builderParameter("element")):0,20
      placeholder(generated(cross(10, 10)), builderParameter("factoryElement")):0,40
      placeholder(generated(cross(10, 10)), builderParameter("h2dObject")):0,60
      placeholder(generated(cross(10, 10)), builderParameter("h2dObjectFactory")):0,80
}
   

#testTileGroup3 programmable() {
      pos:600,100
          point {
            text(dd, "tilegroup test", #ffffff00): 0,0
            bitmap(generated(color(20, 20, white)), left, top):0,50
            bitmap(generated(color(20, 20, white)), left, center):40,50
            bitmap(generated(color(20, 20, white)), left, bottom):80,50
          }
}


#testTileGroup2 programmable tileGroup() {
      pos:600,100
      point {
            pos:5,5
            bitmap(generated(color(20, 20, red)), left, top):0,50
            bitmap(generated(color(20, 20, red)), left, center):40,50
            bitmap(generated(color(20, 20, red)), left, bottom):80,50
      }
}

#testTileGroup1 programmable tileGroup() {
      
      point {
            bitmap(generated(color(20, 20, gray)), left, top):610, 160
            bitmap(generated(color(20, 20, gray)), left, center):650, 160
            bitmap(generated(color(20, 20, gray)), left, bottom):690, 160
      }
}

#testTileGroup4 programmable tileGroup() {
      pos:800,100
      repeatable($index, grid(3, dx:40)) {
            bitmap(generated(color(20, 20, white)), left, top);
      }
}


#testTileGroup5 programmable() {
      pos:805,105
            repeatable($index, grid(3, dx:40)) {
            bitmap(generated(color(20, 20, orange)), left, top);
      }
}

#testTileGroup6 programmable tileGroup() {
      repeatable($bugabuga, grid(3, dx:40)) {
            pos:810,110      
            bitmap(generated(color(20, 20, red)), left, top);
      }
}


#ui programmable() {
      pos:100,300
      
      placeholder(generated(cross(200, 20)), builderParameter("checkbox1")) {
            settings(checkboxBuildName=>checkbox2) // override builder name (will use checkbox2 programmable from std)
      }

      placeholder(generated(cross(200, 20)), builderParameter("checkbox2")) {
            pos:30,0
            settings(checkboxBuildName=>radio) 
      }
      placeholder(generated(cross(200, 20)), builderParameter("checkbox3")) {
            pos:60,0
            settings(checkboxBuildName=>radio2) 
      }
      placeholder(generated(cross(200, 20)), builderParameter("checkbox4")) {
            pos:90,0
            settings(checkboxBuildName=>tickbox) 
      }

      placeholder(generated(cross(200, 20)), builderParameter("checkbox5")) {
            pos:120,0
            settings(checkboxBuildName=>toggle) 
      }

      placeholder(generated(cross(200, 20)), builderParameter("scroll1")) {
            pos:400,100 
            settings(height=>200, topClearance=>60)   
      }
      placeholder(generated(cross(200, 20)), builderParameter("scroll2")):550,100;
      placeholder(generated(cross(200, 20)), builderParameter("scroll3")):700,100;
      
      placeholder(generated(cross(200, 20)), builderParameter("scroll4")):850,100;
      
      
      placeholder(generated(cross(200, 20)), builderParameter("checkboxWithLabel")) {
            pos:610,50;
            settings(font=>dd)
      }

      
      
}`,Lp=`version: 0.1


#dialogBase programmable() {
      pos:400,200

      ninepatch("ui", "Droppanel_3x3_idle", 550, 300): 0,0
      point {
        pos: 50,250
        placeholder(generated(cross(20, 20)), builderParameter("button1")) {
          settings(text=>"override specific placeholder")
          
        }
        placeholder(generated(cross(20, 20)), builderParameter("button2")):250,0
      }
}

#yesNoDialog programmable() {
      reference($dialogBase) {
        #dialogText(updatable) text(dd, "This is a text message", #ffffff00, center, 400): 50,50
      }
}



#fileDialog programmable() {
      
      reference($dialogBase){
        placeholder(generated(cross(20, 20)), builderParameter("filelist")):100,30
      }
}

      



    `,Rp=`version: 0.1


#ui programmable() {
      pos:400,200
      
      
      point {
      
        placeholder(generated(cross(20, 20)), builderParameter("dialog1"));
        placeholder(generated(cross(200, 20)), builderParameter("dialog2")):250,0;
        
      }
}


      



    `,Dp=`version: 0.1

#file palette(file:"main-palette.png")

relativeLayouts {
  grid: 21, 31 {
  
  
  #roomCheckboxes sequence($i: 1..6) point: grid(0,$i)	
  #cornerCheckboxes sequence($i: 1..6) point: grid(1,$i)	
  #panelCheckboxes sequence($i: 1..6) point: grid(2,$i)	
  #panelButtons sequence($i: 10..16) point: grid(0,$i)	
  #repeatableTest list {
        point: 10,20
        point: 30,20
        point: 45,35
        point: 70,60
        point: 100,90
        point: 100,110
        point: 80,120
        point: 20,120
  }
  }
}

#arrayDemo programmable(arr:array = [bla, bla, 3, buga], index:int=0) {
  text(pixeled6,  $arr[$index], #F00, right):30,20;
}


#conditionalsDemo1 programmable(param1:[top, middle, bottom]) {
  @(param1=>top) text(pixeled6,  $param1, #FFF, left):0,0
  @(param1=>middle) text(pixeled6,  $param1, #FFF, left):0,10
  @(param1=>bottom) text(pixeled6,  $param1, #FFF, left):0,20
}

#conditionalsDemo2 programmable(param1:[A, B, C]) {
  @(param1=>A) text(pixeled6,  $param1, #FFF, left):0,0
  @(param1=>B) text(pixeled6,  $param1, #FFF, left):0,10
  @(param1=>C) text(pixeled6,  $param1, #FFF, left):0,20
  @(param1=>!C) text(pixeled6,  "!C", #FFF, left):0,30
}

#conditionalsDemo3 programmable(param1:[A, B], param2:[X,Y]) {
  @(param1=>A) text(pixeled6,  $param1+$param2, #FFF, left):0,0
  @(param1=>B) text(pixeled6,  $param1+$param2, #FFF, left):0,10
  @(param2=>X) text(pixeled6,  $param1+$param2, #FFF, left):0,20
  @(param2=>Y) text(pixeled6,  $param1+$param2, #FFF, left):0,30
  @(param1=>A, param2=>X) text(pixeled6,  $param1+$param2, #FFF, left):0,40
  
  
}

#referenceDemo programmable(width:int, height:int, shape:[rect, triangle], c1:color=white) {
  @(shape=>rect) bitmap(generated(color($width, $height, $c1)));
  @(shape=>triangle)  pixels (
            line 0,0, 0, $height, #f00
            line 0,$height, $width, $height, #f00
            line $width,$height, 0, 0, #f00
          );
}

#applyDemo programmable(state:[alpha, filter, scale]) {
  
  @(state=>alpha) apply {
    alpha:0.4
    pos:0,0
    
  }
  @(state=>filter) apply {
    filter:glow(color:white, alpha:0.9, radius:15, smoothColor:true)
    pos:30,30
  }
  @(state=>scale) apply {
    scale:0.7
    pos:60,60
  }
  
  bitmap(generated(color(30, 30, green)));
}


#ui programmable() {
      pos:10,60
      hex:pointy(40, 40)
      grid:250,150

       

      point { // example 1: hex grid + pixels
          pos: grid(0,0);
          
          @alpha(0.7) bitmap(generated(color(function(gridWidth), function(gridHeight), #777)));
          pixels (
            line hexCorner(0, 1.1), hexCorner(1, 1.1), #f00
            line hexCorner(1, 1.1), hexCorner(2, 1.1), #0f0
            line hexCorner(2, 1.1), hexCorner(3, 1.1), #00f
            line hexCorner(3, 1.1), hexCorner(4, 1.1), #ff0
            line hexCorner(4, 1.1), hexCorner(5, 1.1), #f0f
            line hexCorner(5, 1.1), hexCorner(0, 1.1), #fff
          ):100,50
          @alpha(0.9) text(dd, "#1: hex grid + pixels", white, left, 200);
      }

      point { // example 2: text 
          pos: grid(1,0);
          @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),green)));
          @alpha(0.9) text(dd, "#2: text", white, left, 160);

          text(dd, "test left", red, left, 200):0,20;
          text(m3x6, "test center", blue, center, 200):0,20;
          text(pixeled6, "test right", 0xF00, right, 200):0,20;
          text(pixellari, "The quick brown fox jumps over the lazy dog", 0xF00, right, 200):0,40;
      }

      point { // example 3: bitmap
          pos: grid(2,0);
          @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),blue)));
          @alpha(0.9) text(dd, "#3: bitmap", white, left, 160);

          //bitmap(sheet("crew2", "marine_r_shooting_d")):20,30
          bitmap(sheet("crew2", "marine_l_killed",0), center):50,30
          bitmap(sheet("crew2", "marine_l_killed",1), center):80,30
          bitmap(sheet("crew2", "marine_l_killed",2), center):110,30
          bitmap(sheet("crew2", "marine_l_killed",3), center):140,30
          
          point {
            pos: 80,60
            
            scale:2;
            bitmap(sheet("crew2", "marine_r_shooting_d"), center);
            @alpha(0.5) bitmap(sheet("crew2", "marine_r_shooting_d"), center):-5,0;
            @alpha(0.3) bitmap(sheet("crew2", "marine_r_shooting_d"), center):-10,0;
          }
      }      
      point { // example 4: repeatable
          pos: grid(3,0);
          @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),gray)));
          @alpha(0.9) text(dd, "#4: repeatable", white, left, 200);

          repeatable($index, grid(5, dx:5, dy:1)) {
            @alpha(1.0 - $index/5.0) scale(2) bitmap(sheet("crew2", "marine_r_shooting_d")):30,80;
          }
      }
      point { // example 5: stateanim
          pos: grid(4,0);
          @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),yellow)));
          stateanim("files/marine.anim", "idle", "direction"=>"l"):50,50
          @alpha(0.5) stateanim("files/marine.anim", "idle", direction=>"l"):100,50
          stateanim("files/marine.anim", "idle", direction=>r){
            pos: 150, 50
            filter:replacePalette(file, 0, 1)

          }
          @alpha(0.9) text(dd, "#5: stateanim", white, left, 200);
          
      }
      point { // example 6: flow
          pos: grid(0,1);
          @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),orange)));
          flow(maxWidth:200, maxHeight:100, minWidth:200, minHeight:100, layout:vertical, padding:0, debug:1) {
            text(dd, "test left", red, left);
            text(m3x6, "test center", blue, center);
            text(pixeled6, "test right", 0xF00, right);
          }
          @alpha(0.9) text(dd, "#6: flow", white, left, 200);
          @scale(2) text(dd, "WIP", red, center, 200):-100,40
        

          
      }
      point { // example 7: palette
          pos: grid(1,1);
           bitmap(generated(color(function(gridWidth), function(gridHeight),black)));
          
          @alpha(0.9) text(dd, "#7: palette", white, left, 200);

        repeatable($row, grid(3, dy:25)) {
          repeatable($index, grid(16, dx:12)) {
            pos: 5, 20
            bitmap(generated(color(10, 15, palette(file, $index, $row))));
          }
        }
      }
      point { // example 8: layers
          pos: grid(2,1);
          bitmap(generated(color(function(gridWidth), function(gridHeight),gray)));
          @alpha(0.9) text(dd, "#8: layers", white, left, 200);
          
          layers {
            pos:30,30
            @layer(3) bitmap(generated(color(30, 30, palette(file, 10, 0))));
            @layer(2) bitmap(generated(color(30, 30, palette(file, 11, 0)))):10,10;
            @layer(1) bitmap(generated(color(30, 30, palette(file, 12, 0)))):20,20
          }
          layers {
            pos:90, 30
          @layer(1) bitmap(generated(color(30, 30, palette(file, 10, 0))));
          @layer(2) bitmap(generated(color(30, 30, palette(file, 11, 0)))):10,10;
          @layer(3) bitmap(generated(color(30, 30, palette(file, 12, 0)))):20,20
          }

      }
      point { // example 9: 9-patch
          pos: grid(3,1);
          @alpha(0.5) bitmap(generated(color(function(gridWidth), function(gridHeight),blue)));
          @alpha(0.9) text(dd, "#9: 9-patch", white, left, 200);
          
          ninepatch("ui", "Window_3x3_idle", 30, 30): 10,20
          ninepatch("ui", "Window_3x3_idle", 30, 60): 50,20
          ninepatch("ui", "Window_3x3_idle", 60, 60): 100,20

      }
      point { // example 10: reference
          pos: grid(4,1);
          @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),red)));
          @alpha(0.9) text(dd, "#10: reference", white, left, 200);
          
          
          reference($referenceDemo, width=>10, height=>10, shape=>rect): 10,30;
          reference($referenceDemo, width=>30, height=>30, shape=>triangle): 10, 60;
          reference($referenceDemo, width=>50, height=>20, shape=>triangle): 100, 30;
          reference($referenceDemo, width=>30, height=>30, shape=>triangle): 100, 60;
          reference($referenceDemo, width=>15, height=>15, shape=>rect): 150, 60;
          reference($arrayDemo, arr=>["first element","second element","3rd element", "4th element"]):170, 80

          reference($arrayDemo, arr=>["first element","second element","3rd element", "4th element"], index=>2):170, 100

      }
      point { // example 11: bitmap align
          pos: grid(0,2);
          @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),red)));
          
          @alpha(0.9) text(dd, "#11: bitmap align", white, left, 200);
          bitmap(generated(color(100, 1, white)), left, top):0,50

          bitmap(generated(color(20, 20, red)), left, top):0,50
          bitmap(generated(color(20, 20, red)), left, center):40,50
          bitmap(generated(color(20, 20, red)), left, bottom):80,50

          bitmap(generated(color(1, 100, white)), left, top):150,20

          bitmap(generated(color(20, 20, red)), left, top):150,20
          bitmap(generated(color(20, 20, red)), center, top):150,60
          bitmap(generated(color(20, 20, red)), right, top):150,100
      }
      point { // example 12: text & tile are updatable from code
          pos: grid(1,2);
          @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),yellow)));
          @alpha(0.9) text(dd, "#12: updatable from code", white, left, 200);
          
          #textToUpdate(updatable) text(dd, "This is a test text message", #ffffff00): 10,30
          #bitmapToUpdate(updatable) bitmap(generated(color(20, 20, red)), left, top):10,80
          

      }
      point { // example 13: layout iterator
          pos: grid(2,2);
          @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),gray)));
          @alpha(0.9) text(dd, "#13: layout repeatable", white, left, 200);
          repeatable($index, layout("mainScreen", "repeatableTest")) {
            pos: 0, 0
            bitmap(generated(color(10, 15, red)));
          }
      }
      point { // example 14: tileGroup
          pos: grid(3,2);
          @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),black)));
          @alpha(0.9) text(dd, "#14: tileGroup", white, left, 200);
          point {
            pos:1, 1
            bitmap(generated(color(20, 20, white)), left, top):0,50
            bitmap(generated(color(20, 20, white)), left, center):40,50
            bitmap(generated(color(20, 20, white)), left, bottom):80,50
          }

          tileGroup {
            bitmap(generated(color(20, 20, red)), left, top):0,50
            bitmap(generated(color(20, 20, red)), left, center):40,50
            bitmap(generated(color(20, 20, red)), left, bottom):80,50
          }

          tileGroup {
            pos:30,30
            bitmap(generated(color(20, 20, blue)), left, top):0,50
            bitmap(generated(color(20, 20, blue)), left, center):40,50
            bitmap(generated(color(20, 20, blue)), left, bottom):80,50
          }

          bitmap(generated(color(30, 30, white)), left, top):120,120
          tileGroup {
            pos:100,100
                repeatable($index, grid(5, dx:5, dy:1)) {
                  @alpha(1.0 - $index/5.0) scale(0.5) bitmap(generated(color(20, 20, white)), left, bottom):0,0
            }
          }

          tileGroup {
            pos:120,120
                pixels (
                  rect -1,-1, 31,31, red);
            }
          }
        point { // example 15: stateAnim construct
          pos: grid(4,2);
          @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),white)));
          @alpha(0.9) text(dd, "#15: stateAnim construct", white, left, 200);
          stateAnim construct("state1", 
            "state1" => sheet "crew2", marine_r_shooting_u, 10, loop
            "state2" => sheet "crew2", marine_l_dead, 10
          ):50,50
      }

      point { // example 16: div/mod expressions
        pos: grid(0,3);
        @alpha(0.1) bitmap(generated(color(function(gridWidth), function(gridHeight),white)));
        @alpha(0.9) text(dd, "#16: div/mod", white, left, 200);
        repeatable($index, grid(25, dx:0)) {
          pos: 5, 20
          bitmap(generated(color(10, 15, red))): ($index %5)*20, ($index div 5) * 25
        }
      }

      point { // example 17: apply
        pos: grid(1,3);
        @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),#F0F)));
        @alpha(0.9) text(dd, "#17: apply", white, left, 200);

        point {
          pos:10,10
          reference($applyDemo, state=>alpha):30,10
          @alpha(0.9) text(dd, "state=>alpha", white, left, 200):80,15
          reference($applyDemo, state=>filter):0,20
          @alpha(0.9) text(dd, "state=>filter", white, left, 200):80,55
          reference($applyDemo, state=>scale):-30,30
          @alpha(0.9) text(dd, "state=>scale", white, left, 200):80,93
        }
      }
    point { // example 18: reference
          pos: grid(2,3);
          @alpha(0.3) bitmap(generated(color(function(gridWidth), function(gridHeight),yellow)));

          @alpha(0.9) text(dd, "#18: conditionals", white, left, 200);


          point {
            pos: 20, 20
            reference($conditionalsDemo1, param1=>top): 0,0
            reference($conditionalsDemo1, param1=>middle): 0,0
            reference($conditionalsDemo1, param1=>bottom): 0,0
          }
 
          point {
            pos: 80, 20
            reference($conditionalsDemo2, param1=>A): 10,0
            reference($conditionalsDemo2, param1=>B): 20,0
            reference($conditionalsDemo2, param1=>C): 30,0
          }
          point {
            pos: 140, 20
            reference($conditionalsDemo3, param1=>A, param2=>X): 10,0
            reference($conditionalsDemo3, param1=>B, param2=>X): 40,0
            reference($conditionalsDemo3, param1=>A, param2=>Y): 70,0
          }
          

      }

      
  }



                

      

      
`,Mp=`version: 0.1

relativeLayouts {
  #fontNames sequence($i: 1..40) point: 100, 20+20 * $i
  #fonts sequence($i: 1..40) point: 200, 20+20 * $i
}


`,Op=`version: 0.1



#test1 particles {
    count:550
    
    emit: box(100,650, 180, 5)
    maxLife: 3.5
    speedRandom: 0.2
    speed:350
    speedIncrease:1
    tiles: sheet("fx", "missile/particle") 
    loop: true
    size:1
    sizeRandom:0.8
    emitSync: 0.1
    gravity:300
    gravityAngle:70
    blendMode: add
    fadeOut:0.7
    //rotationSpeed:30
    rotateAuto: yes

    
}

#test2 particles {
    count:550
    emit: point(1,150)
    maxLife: 3.5
    speedRandom: 0
    speed:30
    speedIncrease:1
    tiles: sheet("fx", "missile/particle_1") sheet("fx", "missile/particle_1") 
    loop: true
    size:1
    sizeRandom:0
    
    gravity:0
    gravityAngle:0
    blendMode: add
    
}

#test3 particles {
    count:550
    //emit: point(1,150)
    emit: cone(40,10, 90, 30)
    maxLife: 3.5
    speedRandom: 0
    speed:30
    speedIncrease:1
    tiles: sheet("fx", "missile/particle_1") sheet("fx", "missile/particle_1") 
    loop: true
    size:1
    sizeRandom:0
    
    gravity:0
    gravityAngle:0
    blendMode: add
    
}


#ui programmable() {
    text(pixellari, "particles", #ffffff00, center, 100): 300, 30
    #particles1(updatable) point:1200,50;
     
     
     
}
`,Ip=`version: 0.1




paths {
  #line1 path {
    line (30,30) 
    line (30,100) 
    line (100,30) 
    line (400,102) 
    checkpoint(test)
    bezier(200,400, 100, 300)
    bezier(500,200, 600, 600)
    line (1200,600) 
  }
  #line2 path {
    
    turn(10)
    forward(100)
    turn(10)
    forward(100)
    turn(10)
    forward(100)
    turn(90)
    forward(20)
    turn(90)
    forward(20)
    turn(90)
    forward(20)
    
  }

    #line3 path {
    forward(100)
    turn(45)
    forward(30)
    turn(45)
    forward(30)
    turn(45)
    forward(30)
    turn(45)
    forward(30)
    turn(45)
    forward(30)
    turn(45)
    forward(30)
    turn(45)
    forward(300)
    
  }

    #lineX path {
    line ($endX,$startY)  
    line ($endX,$endY)  
    line ($startX,$endY)  
    line ($startX,$startY)  
    line ($endX,$endY)  
    
  }


}


#cross1 pixels (
  line -10,0, 10, 0, green
  line 0,-10, 0, 10, green
  ) {
   
    text(pixellari, "start path", green): 5,5
  
  }

#cross2 pixels (
  line -10,0, 10, 0, #f88
  line 0,-10, 0, 10, #f88
  ) {
    text(pixellari, "end path", #f88): 5,5
  }



#animRect bitmap(generated(color(20, 20, white)), center);


#anim programmable() {
  bitmap(generated(color(20, 20, yellow)), center) {
          particles {
            count:550
            relative: false
            emit: cone(5,5, 90, 30)
            maxLife: 15
            emitSync: 0
            speedRandom: 0
            speed:30
            speedIncrease:0
            tiles:  sheet("fx", "missile/particle") 
            loop: true
            size:1
            sizeRandom:0
            
            gravity:0
            gravityAngle:0
            blendMode: add
          
      }

       particles {
            count:100
            relative: true
            emit: cone(5,5, 270, 5)
            maxLife: 3.5
            speedRandom: 0
            speed:30
            speedIncrease:0
            tiles: sheet("fx", "missile/particle") 
            loop: true
            size:1
            sizeRandom:0
            emitSync: 0.1
            gravity:0
            gravityAngle:0
            blendMode: add
          
      }
  }
}


#ui programmable() {
    text(pixellari, "testing paths", #ffffff00, center, 100): 30, 50
    placeholder(generated(cross(200, 20)), builderParameter("animate")):1050,100
    
    placeholder(generated(cross(200, 20)), builderParameter("path")):600,100
    placeholder(generated(cross(200, 20)), builderParameter("startPoint")):750,100
    placeholder(generated(cross(200, 20)), builderParameter("endPoint")):900,100
    placeholder(generated(cross(200, 20)), builderParameter("positionMode")):900,300
    placeholder(generated(cross(200, 20)), builderParameter("angleSlider")):900,240


    point {
      pos: 640, 320
      #ref1 placeholder(generated(cross(10, 10)), builderParameter("xxx")) {
        text(pixellari, "ref #1", yellow);
        #ref2 placeholder(generated(cross(10, 10)), builderParameter("xxx")) {
          text(pixellari, "ref #2", green);
          scale: 0.5
          pos:100,100
        }
      }
    }
  
}


#panim animatedPath {
  0.1: changeSpeed 100
  0.3: changeSpeed 1000
  0.1: attachParticles("test") {
      count:30
      relative: true
      speed:500
      loop: false
      emit: cone(5,5, $angle+180, 1)
      tiles:  sheet("fx", "particle/smoke-2") 
  }

    0.1: attachParticles("test") {
      count:120
      relative: true
      loop: false
      speed:500
      emit: cone(5,5, $angle+90, 1)
      tiles:  sheet("fx", "particle/smoke-2") 
  }
}`,Ap=`version: 0.1


relativeLayouts {
  grid: 21, 31 {
  offset: 50,50 {
  
  #roomCheckboxes sequence($i: 1..6) point: grid(0,$i)	
  #cornerCheckboxes sequence($i: 1..6) point: grid(1,$i)	
  #panelCheckboxes sequence($i: 1..6) point: grid(2,$i)	

  #panelButtons sequence($i: 10..16) point: grid(0,$i)
  }
  }
}


#ui programmable() {
      pos:600,400
      hex:pointy(197, 180)
      point {
          pixels (
            line hexCorner(0, 1.1), hexCorner(1, 1.1), #fF0000FF
            line hexCorner(1, 1.1), hexCorner(2, 1.1), #fFFF0000
            line hexCorner(2, 1.1), hexCorner(3, 1.1), #fF0000FF
            line hexCorner(3, 1.1), hexCorner(4, 1.1), #fFFF0000
            line hexCorner(4, 1.1), hexCorner(5, 1.1), #fF0000FF
            line hexCorner(5, 1.1), hexCorner(0, 1.1), #fFFF0000
          ):0,-4
      }

      #testNumber(updatable) text(pixellari, "test test test", #ffffff00, center, 100): 300,-200
}
      
#room programmable(wallDirections:flags(6)=31, cornerDirections:flags(6)=31, panelDirections:flags(6)=31) {
    pos:600,400
    bitmap(file("png/Ground_02.png"), center): 0,0
    bitmap(file("png/WallBase_02.png"), center): 0,0
    layers 
    {
      
      @(cornerDirections=>bit [1]) bitmap(file("png/Corner_090.png"), center): 0,0

      @(wallDirections=>bit [1]) bitmap(file("png/Wall_060.png"), center): 0,0
      @(panelDirections=>bit [1]) bitmap(file("png/Panel_060.png"), center): 0,0
      
      @(cornerDirections=>bit [0]) bitmap(file("png/Corner_030.png"), center): 0,0
      
      @(wallDirections=>bit [0]) bitmap(file("png/Wall_000.png"), center): 0,0
      @(panelDirections=>bit [0]) bitmap(file("png/Panel_000.png"), center): 0,0

      @(wallDirections=>bit [2]) bitmap(file("png/Wall_120.png"), center): 0,0
      @(panelDirections=>bit [2]) bitmap(file("png/Panel_120.png"), center): 0,0

      @(cornerDirections=>bit [5]) bitmap(file("png/Corner_330.png"), center): 0,0

      @(wallDirections=>bit [5]) bitmap(file("png/Wall_300.png"), center): 0,0
      @(cornerDirections=>bit [2]) bitmap(file("png/Corner_150.png"), center): 0,0
      
      @(wallDirections=>bit [3]) bitmap(file("png/Wall_180.png"), center): 0,0
      @(panelDirections=>bit [3]) bitmap(file("png/Panel_180.png"), center): 0,0

      @(cornerDirections=>bit [3]) bitmap(file("png/Corner_210.png"), center): 0,0

      @(wallDirections=>bit [4]) bitmap(file("png/Wall_240.png"), center): 0,0

      @(panelDirections=>bit [4]) bitmap(file("png/Panel_240.png"), center): 0,0
      @(panelDirections=>bit [5]) bitmap(file("png/Panel_300.png"), center): 0,0

      @(cornerDirections=>bit [4]) bitmap(file("png/Corner_270.png"), center): 0,0
      
    }

}



    `,Bp=`version: 0.1


#ui programmable() {
      pos:100,300
      
      #listVal(updatable) text(dd, "Select an item from the list!", #ffffff00): 10,50
     
     placeholder(generated(cross(200, 150)), builderParameter("scrollableList")) {
            pos: 10,80
            settings(panelBuilder=>list-panel, itemBuilder=>list-item-120) // use standard list components
      }

      
      
}


`,Up=`version: 0.1

relativeLayouts {
    
  #resolution list {
        point: 30,120
        point: 30,160
        point: 30,320
        point: 30,420
  }

    #mainDropDown sequence($i:0..30) point: 10 + $i * 120, 100
    #buttons sequence($i:0..30) point: 10 + $i * 200, 500
    #scrollableList sequence($i:1..30) point: 1280 - $i * 150, 100
    #checkboxes sequence($i:0..30) point: 700 , 500 + 30 * $i
  
}


#ui programmable() {
      text(dd, "Fullscreen", #ffffff00): 60,125
      #resolution(updatable) text(dd, "Resolution", #ffffff00): 160,166

}


      



    `,Wp=`version: 0.1


#ui programmable() {
      pos:100,300
      
      #sliderVal(updatable) text(dd, "move slider", #ffffff00): 10,50
      
      placeholder(generated(cross(200, 20)), builderParameter("slider")) {
            pos:10,30
      }

      
      
}`,Hp=`version: 0.1


relativeLayouts {
    #statusBar point:3,680
    #smAnimCenter point:600,300
    #checkboxes list {
        point: 3,3
        point: 400,300
        point: 400,400
        point: 10,20
    }
    #statesDropdowns sequence($i:0..30) point: $i*150+350, 52
    #animStates sequence($i:1..30) point: 1070, 720-$i*30 + 5

}


#ui programmable() {
      
      point {
            pos:1100, 120
            grid:1,30
            #pauseCheckbox point {
                  pos: grid(0,0)
                  text(dd, "Pause", yellow): 30, 5
                  placeholder(generated(cross(20, 20)), builderParameter("pause"));
            }
            #boundsCheckbox point {
                  pos: grid(0,1)
                  text(dd, "Show bounds", #ddd): 30, 5
                  placeholder(generated(cross(20, 20)), builderParameter("bounds"));
            }
            #animStatesCheckbox point {
                  pos: grid(0,2)
                  text(dd, "Show states", #ddd): 30, 5
                  placeholder(generated(cross(20, 20)), builderParameter("animStates"));
            }
            #animCommandsCheckbox point {
                  pos: grid(0,3)
                  text(dd, "Show states", #ddd): 30, 5
                  placeholder(generated(cross(20, 20)), builderParameter("animCommands"));
            }

            
      }
      
      placeholder(generated(cross(20, 20)), builderParameter("load")):50,50;
      
      text(dd, "States", #ffffffff, html:true): 290, 58
      

      #spriteText(updatable) text(pixellari, "sprite", #ffffff00, center, 100, html:true): 500,350
      #statusText(updatable) text(pixellari, "status",  #ffa0a080, left, 400, html:true): 10,90
      #commandsText(updatable) text(pixellari, "status",  #ffa0a080, left, 400, html:true): 10,90

      #sprite point:550,300
      placeholder(generated(cross(150, 20)), builderParameter("speedSlider")) {
            pos: 120, 600
            text(dd, "Anim. speed", #ffffffff): -110, 0
      }
      text(pixellari, "R - reload sprinte<br/>1-8 set sprite scaling<br/>CTRL while clicking on state - crate 5 items",  #fffffff0, html:true) {
            pos:  500,470
            alpha:0.5
            scale:1
      }

 }


#mainStatusBar programmable(statusText="status text", error:bool=false) {
      ninepatch("ui", "Window_3x3_idle", 600, 30): 0,0
      @(error=>true) text(dd, $statusText, #ffff0000): 20,8
      @(error=>false) text(dd, $statusText, #ffffff00): 20,8
}


`,Vp=`version: 0.1



  #slider programmable(status:[hover, pressed, normal]=normal, value:0..100=0, size:[100,200,300], disabled:[true, false]) {
    //@(value=>between 50..70) text(dd, "HEEEEEEEEEEEEEEEEEY", 0xffffff12, center, 200): 0,10

    //@(value=>[between 3..30]) text(dd, "HEEEEEEEEEEEEEEEEEY", 0xffffff12, center, 200): 0,10
    @if(size=>300) point {
      ninepatch("ui", "Sliderbar_H_3x1", 310, 8) {
        grid: 3, 1;
        #start point:grid(0, -1)
        #end point:grid(100, -1)
        #slider @(status=>hover)  bitmap(sheet("ui", "Slider_button_hover")):grid($value,-1)
        #slider @(status=>normal)  bitmap(sheet("ui", "Slider_button_idle")):grid($value,-1)
        #slider @(status=>pressed)  bitmap(sheet("ui", "Slider_button_pressed")):grid($value,-1)
        #slider @(status=>*, disabled=>true)  bitmap(sheet("ui", "Slider_button_disabled")):grid($value,-1)
      }
    
    }
     @(size=>200, value=>*, status=>*) point {
      
      ninepatch("ui", "Sliderbar_H_3x1", 210, 8) {
        grid:2, 1
        #start point:grid(0, -1)
        #end point:grid(100, -1)

        #slider @(status=>hover)  bitmap(sheet("ui", "Slider_button_hover")):grid($value,-1)
        #slider @(status=>normal)  bitmap(sheet("ui", "Slider_button_idle")):grid($value,-1)
        #slider @(status=>pressed)  bitmap(sheet("ui", "Slider_button_pressed")):grid($value,-1)
        #slider @(status=>*, disabled=>true)  bitmap(sheet("ui", "Slider_button_disabled")):grid($value,-1)
        
      
    }
    }
     
     @(size=>100, value=>*) point {
      
      ninepatch("ui", "Sliderbar_H_3x1", 110, 8) {
        grid:1, 1
        #start point:grid(0, -1)
        #end point:grid(100, -1)

        #slider @(status=>hover)  bitmap(sheet("ui", "Slider_button_hover")):grid($value,-1)
        #slider @(status=>normal)  bitmap(sheet("ui", "Slider_button_idle")):grid($value,-1)
        #slider @(status=>pressed)  bitmap(sheet("ui", "Slider_button_pressed")):grid($value,-1)
        #slider @(status=>*, disabled=>true)  bitmap(sheet("ui", "Slider_button_disabled")):grid($value,-1)
      
    }
    }
  }


 #button programmable(status:[hover, pressed,normal], disabled:[true, false], buttonText="Button") {
      //filter:pixelOutline(knockout, blue, 0.3)
      //filter:replacePalette(file, 0, 1)
      
      //bitmap(sheet("crew2", "marine_r_shooting_d")):30,130;
      //filter:glow(red, 0.3, 1, 1, 1, smoothColor)
      //filter:glow(red, 0.3, 1, 1, 1, smoothColor)
      //filter:dropShadow(4, 1.6, #F3F, 0.9, 50, 3.05)
      //filter:pixelOutline(knockout, blue, 0.3)
      //filter:pixelOutline(inlineColor, red, yellow)
      @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", 200, 30):     0,1
      @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", 200, 30):     0,0
      @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", 200, 30): 0,0
      @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", 200, 30):       0,0
      
      @(status=>hover, disabled=>false) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
      @(status=>pressed, disabled=>false) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
      @(status=>normal, disabled=>false) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
      @(status=>*, disabled=>true) text(dd, $buttonText, 0xffffff12, center, 200): 0,10
}
    

 #radio programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
      @(status=>normal, checked=>false) bitmap(sheet("ui", "RadioButton_off_idle"));
      @(status=>hover, checked=>false) bitmap(sheet("ui", "RadioButton_off_hover"));
      @(status=>pressed, checked=>false) bitmap(sheet("ui", "RadioButton_off_pressed"));
      @(disabled=>true, checked=>false) bitmap(sheet("ui", "RadioButton_off_disabled"));
      @(status=>normal, checked=>true) bitmap(sheet("ui", "RadioButton_on_idle"));
      @(status=>hover, checked=>true) bitmap(sheet("ui", "RadioButton_on_hover"));
      @(status=>pressed, checked=>true) bitmap(sheet("ui", "RadioButton_on_pressed"));
      @(disabled=>true, checked=>true) bitmap(sheet("ui", "RadioButton_on_disabled"));
 }

 #tab programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false], width:uint=120, height:uint=30) {
      @(status=>normal, checked=>false) ninepatch("ui", "Tab_off_idle", $width, $height);
      @(status=>hover, checked=>false) ninepatch("ui", "Tab_off_hover", $width, $height);
      @(status=>pressed, checked=>false) ninepatch("ui", "Tab_off_pressed", $width, $height);
      @(disabled=>true, checked=>false) ninepatch("ui", "Tab_off_disabled", $width, $height);
      @(status=>normal, checked=>true) ninepatch("ui", "Tab_on_idle", $width, $height);
      @(status=>hover, checked=>true) ninepatch("ui", "Tab_on_hover", $width, $height);
      @(status=>pressed, checked=>true) ninepatch("ui", "Tab_on_pressed", $width, $height);
      @(disabled=>true, checked=>true) ninepatch("ui", "Tab_on_disabled", $width, $height);
       
}

 #radio2 programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
      @(status=>normal, checked=>false) bitmap(sheet("ui", "RadioButton2_off_idle"));
      @(status=>hover, checked=>false) bitmap(sheet("ui", "RadioButton2_off_hover"));
      @(status=>pressed, checked=>false) bitmap(sheet("ui", "RadioButton2_off_pressed"));
      @(disabled=>true, checked=>false) bitmap(sheet("ui", "RadioButton2_off_disabled"));
      @(status=>normal, checked=>true) bitmap(sheet("ui", "RadioButton2_on_idle"));
      @(status=>hover, checked=>true) bitmap(sheet("ui", "RadioButton2_on_hover"));
      @(status=>pressed, checked=>true) bitmap(sheet("ui", "RadioButton2_on_pressed"));
      @(disabled=>true, checked=>true) bitmap(sheet("ui", "RadioButton2_on_disabled"));
       
}
 #tickbox programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
      @(status=>normal, checked=>false) bitmap(sheet("ui", "TickBox2_off_idle"));
      @(status=>hover, checked=>false) bitmap(sheet("ui", "TickBox2_off_hover"));
      @(status=>pressed, checked=>false) bitmap(sheet("ui", "TickBox2_off_pressed"));
      @(disabled=>true, checked=>false) bitmap(sheet("ui", "TickBox2_off_disabled"));
      @(status=>normal, checked=>true) bitmap(sheet("ui", "TickBox2_on_idle"));
      @(status=>hover, checked=>true) bitmap(sheet("ui", "TickBox2_on_hover"));
      @(status=>pressed, checked=>true) bitmap(sheet("ui", "TickBox2_on_pressed"));
      @(disabled=>true, checked=>true) bitmap(sheet("ui", "TickBox2_on_disabled"));
}


 #toggle programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
      @(status=>normal, checked=>false) bitmap(sheet("ui", "Toggle_off_idle"));
      @(status=>hover, checked=>false) bitmap(sheet("ui", "Toggle_off_hover"));
      @(status=>pressed, checked=>false) bitmap(sheet("ui", "Toggle_off_pressed"));
      @(disabled=>true, checked=>false) bitmap(sheet("ui", "Toggle_off_disabled"));
      @(status=>normal, checked=>true) bitmap(sheet("ui", "Toggle_on_idle"));
      @(status=>hover, checked=>true) bitmap(sheet("ui", "Toggle_on_hover"));
      @(status=>pressed, checked=>true) bitmap(sheet("ui", "Toggle_on_pressed"));
      @(disabled=>true, checked=>true) bitmap(sheet("ui", "Toggle_on_disabled"));
}

 #checkbox programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
      @(status=>normal, checked=>false) bitmap(sheet("ui", "CheckBox_off_idle"));
      @(status=>hover, checked=>false) bitmap(sheet("ui", "CheckBox_off_hover"));
      @(status=>pressed, checked=>false) bitmap(sheet("ui", "CheckBox_off_pressed"));
      @(disabled=>true, checked=>false) bitmap(sheet("ui", "CheckBox_off_disabled"));
      @(status=>normal, checked=>true) bitmap(sheet("ui", "CheckBox_on_idle"));
      @(status=>hover, checked=>true) bitmap(sheet("ui", "CheckBox_on_hover"));
      @(status=>pressed, checked=>true) bitmap(sheet("ui", "CheckBox_on_pressed"));
      @(disabled=>true, checked=>true) bitmap(sheet("ui", "CheckBox_on_disabled"));
       
}

#checkbox2 programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
  scale:2
      @(status=>normal, checked=>false) bitmap(sheet("ui", "checkbox_unchecked_normal"));
      @(status=>hover, checked=>false) bitmap(sheet("ui", "checkbox_unchecked_hover"));
      @(status=>pressed, checked=>false) bitmap(sheet("ui", "checkbox_unchecked_pressed"));
      //@(status=>disabled, checked=>false) bitmap(sheet("ui", "checkbox_unchecked_disabled"));
      @(status=>normal, checked=>true) bitmap(sheet("ui", "checkbox_checked_normal"));
      @(status=>hover, checked=>true) bitmap(sheet("ui", "checkbox_checked_hover"));
      @(status=>pressed, checked=>true) bitmap(sheet("ui", "checkbox_checked_pressed"));
      //@(status=>disabled, checked=>true) bitmap(sheet("ui", "checkbox_checked_disabled"));
       
}


#checkboxWithText programmable(textColor:int, title="checkbox label", font="m6x11"){
    point {
     placeholder(generated(cross(15, 15)), builderParameter("checkbox")):0,0
      text($font, $title, white, left): 40,4
    }
}


#radioButtons programmable(count:int){
      repeatable($index, grid($count, dy:20)) {
            placeholder(generated(cross(15, 15)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
            
      }
}

#radioButtonsHorizontal programmable(count:int){
      repeatable($index, grid($count, dx:120 )) {
            placeholder(generated(cross(15, 15)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
            
      }
}

#radioButtonsVertical programmable(count:int){
      repeatable($index, grid($count, dy:30 )) {
            placeholder(generated(cross(15, 15)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
            
      }
}


#dropdown programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled,normal], panel:[open, closed]) {
      
      #panelPoint (updatable) point: 0, 30;
      //placeholder(generated(cross(120, 200)), builderParameter("panel")):5,10
      @(status=>hover) ninepatch("ui", "dropdown-button-hover", 120, 30);
      @(status=>normal) ninepatch("ui", "dropdown-button-idle", 120, 30);
      @(status=>pressed) ninepatch("ui", "dropdown-button-pressed", 120, 30);
      @(status=>disabled) ninepatch("ui", "dropdown-button-disabled", 120, 30);
      @(panel=>closed) bitmap(sheet("ui", "icon_drop_fold_idle")):108,17
      @(panel=>open) bitmap(sheet("ui", "icon_drop_open")):108,17
      #selectedName(updatable) text(m6x11, callback("selectedName"), 0xffffff12, center, 120): -4,6
      // @(images=>placeholder) placeholder(generated(cross(15, 15)), callback("test")):8,5
      settings(transitionTimer=>.2)
}


#list-item-120 programmable(images:[none,placeholder,tile]=placeholder,status:[hover, pressed, normal], selected:[true, false], disabled:[true, false], tile="", itemWidth:uint=114,  index:uint=0, title="title") {
        
        @(status=>normal, selected=>false, disabled=>false) ninepatch("ui", "droppanel-mid-idle", $itemWidth+4, 20): -2,0
        @(status=>normal, selected=>true, disabled=>false) ninepatch("ui", "droppanel-mid-pressed", $itemWidth+4, 20): -2,0
        
        @(status=>pressed, disabled=>false) ninepatch("ui", "droppanel-mid-pressed", $itemWidth+4, 20) {
          pos:-2,0;
          alpha:0.1;
          blendMode: alphaAdd;
        } 
        @(status=>hover, disabled=>false) ninepatch("ui", "droppanel-mid-hover", $itemWidth+4, 20) {
          pos:-2,0;
          alpha:0.1;
          blendMode: alphaAdd;
        } 
        
        @(disabled=>true) ninepatch("ui", "droppanel-mid-disabled", $itemWidth+4, 20): -2,0
        
        text(m6x11, $title, 0xffffff12, left, 120): 24,4
        @(images=>placeholder) placeholder(generated(cross(15, 15)), callback("test")):5,3
        @(images=>tile) bitmap(file($tile), center):5,3
        interactive($itemWidth , 20, $index);
        settings(height=>20)
}

#list-panel programmable(width:uint=200, height:uint=200, topClearance:uint = 0) {
  
  ninepatch("ui", "Window_3x3_idle", $width+4, $height+8+$topClearance): -2,-4-$topClearance
  placeholder(generated(cross($width, $height)), builderParameter("mask")):0,0
  #scrollbar @layer(100) point: $width - 4, 0
}

#scrollbar programmable(panelHeight:uint=100, scrollableHeight:uint=200, scrollPosition:uint = 0) {

ninepatch("ui", "scrollbar-1", 4, $panelHeight * $panelHeight / $scrollableHeight): 0, $scrollPosition*$panelHeight/$scrollableHeight
  settings(scrollSpeed=>250)
}`,Qp=`sheet: crew2
allowedExtraPoints: ["point", "text"]
center: 64,64


animation {
    name: dir0
    fps:10
    loop
    playlist {
            sheet: "Arrow_dir0"m
    }
    extrapoints {
        point: 0,0
        text: -60,0
    }
}


animation {
    name: dir1
    fps:10
    loop
    playlist {
            sheet: "Arrow_dir1"
    }
    extrapoints {
        point: 0,0
        text: -24,50
    }
}


animation {
    name: dir2
    fps:10
    loop
    playlist {
            sheet: "Arrow_dir2"
    }
    extrapoints {
        point: 0,0
        text: 24,50
    }
}


animation {
    name: dir3
    fps:10
    loop
    playlist {
            sheet: "Arrow_dir3"
    }
    extrapoints {
        point: 0,0
        text: 64,0
    }
}

animation {
    name: dir4
    fps:10
    loop
    playlist {
            sheet: "Arrow_dir4"
    }
    extrapoints {
        point: 0,0
        text: 25,-60
    }
}

animation {
    name: dir5
    fps:10
    loop
    playlist {
            sheet: "Arrow_dir5"
    }
    extrapoints {
        point: 0,0
        text: -25,-60
    }
}

`,Kp=`sheet: crew2
allowedExtraPoints: [fire, targeting,krava]
states: direction(l, r), color(red, green), count(1,2,3)  
center: 0,10


animation {
    name: idle
    fps:4
    loop: yes
    playlist {
        sheet: dice
    }
}


`,Gp=`sheet: crew2
allowedExtraPoints: [fire, targeting]
states: direction(l, r)
center: 32,48


animation {
    name: idle
    fps:4
    playlist {
        loop untilCommand {
            sheet: "marine_$$direction$$_idle"
        }
    }
    extrapoints  { 
           @(direction=>l) targeting : -1, -12
           @(direction=>r) targeting : 5, -12
    }
}

animation {
    name: fire-up
    fps:20
    loop: 2
     playlist {
        sheet: "marine_r_shooting_u"
    }
    extrapoints { 
        fire: 5, -19
    }
}


animation {
    name: fire-down
    fps:10
    playlist {
        sheet: marine_l_shooting_d
    }
    extrapoints { 
        fire : -2, -2
    }
}

animation {
    name: fire-left
    fps:20
    playlist {
        sheet: marine_l_shooting_u
    }
    extrapoints { 
        fire : -10, -8
    }
}

animation {
    name: fire-right
    fps:20
    playlist {
        sheet: marine_r_shooting_d
    }
    extrapoints { 
        fire: 10, -8
    }
}

animation {
    name: fire-upright
    fps:20
    playlist {
        sheet: marine_r_shooting
    }
    extrapoints { 
        fire : 12, -12
    }
}

animation {
    name: fire-downleft
    fps:20
    playlist {
        sheet: marine_l_shooting
    }
    extrapoints { 
        fire : -7,-3
    }
}

animation {
    name: fire-upleft
    fps:20
    playlist {
        sheet: marine_l_shooting_uu
    }
    extrapoints { 
        fire : -7,-11
    }
}

animation {
    name: fire-downright
    fps:20
    playlist {
        sheet: marine_r_shooting_dd
    }
    extrapoints { 
        fire : 7,-6
    }
}

animation {
    name: hit
    fps:20
    loop: untilCommand
    playlist {
        sheet: marine_$$direction$$_hit
        loop 3 {
            event hit random 0,-10, 10
        }
    }
}


animation {
    name: killed
    fps:20
    playlist {
        sheet: marine_$$direction$$_killed
        goto dead
    }
}

animation {
    name: dead
    fps:1
    loop: untilCommand
    playlist {
    sheet: marine_$$direction$$_dead
    }
}

animation {
    name: stand
    fps:1
    loop
    playlist {
        sheet: marine_$$direction$$_standing
        command
    }
}



animation {
    name: dodge
    fps:4
    playlist {
        sheet: marine_$$direction$$_dodging_$$direction$$ frames: 0..0 duration: 1500 ms
        loop untilCommand {
            sheet: marine_$$direction$$_dodging_$$direction$$ frames:1..2 duration:15ms
        }
        sheet: marine_$$direction$$_dodging_$$direction$$ frames: 3..3
    }
}

`,Xp=`sheet: crew2
allowedExtraPoints: ["line_TR", "line_BR", "line_TL", "line_BL"]
states: direction(l, r)
center: 32,48


animation {
    name: idle_0
    fps:4
    loop
    playlist {
        loop untilCommand {
            sheet: "shield_$$direction$$_layer0"
        }
    }
    extrapoints {
        line_TR: 8, -16
        line_TL: -8, -16 
        line_BR: 7, -1
        line_BL: -7, -1
    }
}


animation {
    name: impact
    fps:10
    loop
     playlist {
        sheet: "shield_$$direction$$_layer2_impact fast"
    }
}

animation {
    name: idle_1
    fps:10
    loop
     playlist {
        sheet: "shield_$$direction$$_layer1"
    }
}



`,Yp=`sheet: crew2
center: 32,48


animation {
    name: explode
    fps:16
    playlist {
        
        sheet: "Turret_Explode_SW"
        goto destoyed
    }
}

animation {
    name: hit
    fps:10
    playlist {
        loop untilCommand {
            sheet: "Turret_Idle_SW_A" frames: 2..6
        }
    }
}

animation {
    name: idle
    fps:14
    playlist {
        loop untilCommand {
            sheet: "Turret_Idle_SW_B"
        }
    }
}

animation {
    name: shoot
    fps:16
    playlist {
        loop untilCommand {
            sheet: "Turret_Shoot_SW"
        }
    }
}

animation {
    name: destoyed
    fps:1
    playlist {
        sheet: "Turret_Destroyed_SW"
    }
}

`,Zp=Object.assign({"../public/assets/button.manim":Tp,"../public/assets/checkbox.manim":jp,"../public/assets/components.manim":zp,"../public/assets/dialog-base.manim":Lp,"../public/assets/dialog-start.manim":Rp,"../public/assets/examples1.manim":Dp,"../public/assets/fonts.manim":Mp,"../public/assets/particles.manim":Op,"../public/assets/paths.manim":Ip,"../public/assets/room1.manim":Ap,"../public/assets/scrollable-list.manim":Bp,"../public/assets/settings.manim":Up,"../public/assets/slider.manim":Wp,"../public/assets/stateanim.manim":Hp,"../public/assets/std.manim":Vp}),qp=Object.assign({"../public/assets/arrows.anim":Qp,"../public/assets/dice.anim":Kp,"../public/assets/marine.anim":Gp,"../public/assets/shield.anim":Xp,"../public/assets/turret.anim":Yp}),ca=Object.fromEntries([...Object.entries(Zp).map(([e,n])=>[e.split("/").pop(),n]),...Object.entries(qp).map(([e,n])=>[e.split("/").pop(),n])]),yl=e=>ca[e]||null,ti=(e,n)=>{ca[e]=n},Jp=e=>e in ca,em="button";class nm{constructor(){ve(this,"screens",[{name:"scrollableList",displayName:"Scrollable List Test",description:"Scrollable list component test screen with interactive list selection and scrolling functionality.",manimFile:"scrollable-list.manim"},{name:"button",displayName:"Button Test",description:"Button component test screen with interactive button controls and click feedback.",manimFile:"button.manim"},{name:"checkbox",displayName:"Checkbox Test",description:"Checkbox component test screen with interactive checkbox controls and state display.",manimFile:"checkbox.manim"},{name:"slider",displayName:"Slider Test",description:"Slider component test screen with interactive slider controls and screen selection functionality.",manimFile:"slider.manim"},{name:"particles",displayName:"Particles",description:"Particle system examples with various particle effects, explosions, trails, and dynamic particle animations.",manimFile:"particles.manim"},{name:"components",displayName:"Components",description:"Interactive UI components showcase featuring buttons, checkboxes, sliders, and other form elements with hover and press animations.",manimFile:"components.manim"},{name:"examples1",displayName:"Examples 1",description:"Basic animation examples demonstrating fundamental hx-multianim features including sprite animations, transitions, and simple UI elements.",manimFile:"examples1.manim"},{name:"paths",displayName:"Paths",description:"Path-based animations showing objects following complex paths, motion trails, and smooth movement animations.",manimFile:"paths.manim"},{name:"fonts",displayName:"Fonts",description:"Font rendering demonstrations with various font types, sizes, and text effects including SDF (Signed Distance Field) fonts.",manimFile:"fonts.manim"},{name:"room1",displayName:"Room 1",description:"3D room environment with spatial animations, depth effects, and immersive 3D scene demonstrations.",manimFile:"room1.manim"},{name:"stateAnim",displayName:"State Animation",description:"Complex state-based animations demonstrating transitions between different UI states and conditional animations.",manimFile:"stateanim.manim"},{name:"dialogStart",displayName:"Dialog Start",description:"Dialog startup animations and initial dialog states with smooth entrance effects and loading sequences.",manimFile:"dialog-start.manim"},{name:"settings",displayName:"Settings",description:"Settings interface with configuration options, preference panels, and settings-specific UI animations.",manimFile:"settings.manim"}]);ve(this,"manimFiles",[{filename:"scrollable-list.manim",displayName:"Scrollable List Test",description:"Scrollable list component test screen with interactive list selection and scrolling functionality.",content:null},{filename:"button.manim",displayName:"Button Test",description:"Button component test screen with interactive button controls and click feedback.",content:null},{filename:"checkbox.manim",displayName:"Checkbox Test",description:"Checkbox component test screen with interactive checkbox controls and state display.",content:null},{filename:"slider.manim",displayName:"Slider Test",description:"Slider component test screen with interactive slider controls and screen selection functionality.",content:null},{filename:"examples1.manim",displayName:"Examples 1",description:"Basic animation examples demonstrating fundamental hx-multianim features including sprite animations, transitions, and simple UI elements.",content:null},{filename:"components.manim",displayName:"Components",description:"Interactive UI components showcase featuring buttons, checkboxes, sliders, and other form elements with hover and press animations.",content:null},{filename:"dialog-base.manim",displayName:"Dialog Base",description:"Dialog system foundation with base dialog layouts, text rendering, and dialog-specific animations and transitions.",content:null},{filename:"dialog-start.manim",displayName:"Dialog Start",description:"Dialog startup animations and initial dialog states with smooth entrance effects and loading sequences.",content:null},{filename:"fonts.manim",displayName:"Fonts",description:"Font rendering demonstrations with various font types, sizes, and text effects including SDF (Signed Distance Field) fonts.",content:null},{filename:"particles.manim",displayName:"Particles",description:"Particle system examples with various particle effects, explosions, trails, and dynamic particle animations.",content:null},{filename:"paths.manim",displayName:"Paths",description:"Path-based animations showing objects following complex paths, motion trails, and smooth movement animations.",content:null},{filename:"room1.manim",displayName:"Room 1",description:"3D room environment with spatial animations, depth effects, and immersive 3D scene demonstrations.",content:null},{filename:"settings.manim",displayName:"Settings",description:"Settings interface with configuration options, preference panels, and settings-specific UI animations.",content:null},{filename:"stateanim.manim",displayName:"State Animation",description:"Complex state-based animations demonstrating transitions between different UI states and conditional animations.",content:null},{filename:"std.manim",displayName:"Standard Library",description:"Standard library components and utilities for hx-multianim including common animations, effects, and helper functions.",content:null}]);ve(this,"animFiles",[{filename:"arrows.anim",content:null},{filename:"dice.anim",content:null},{filename:"marine.anim",content:null},{filename:"shield.anim",content:null},{filename:"turret.anim",content:null}]);ve(this,"currentFile",null);ve(this,"currentExample",null);ve(this,"reloadTimeout",null);ve(this,"reloadDelay",1e3);ve(this,"mainApp",null);ve(this,"baseUrl","");this.init()}init(){this.setupFileLoader(),this.loadFilesFromMap(),this.waitForMainApp()}loadFilesFromMap(){this.manimFiles.forEach(n=>{const t=yl(n.filename);t&&(n.content=t)}),this.animFiles.forEach(n=>{const t=yl(n.filename);t&&(n.content=t)})}waitForMainApp(){typeof window.PlaygroundMain<"u"&&window.PlaygroundMain.instance?this.mainApp=window.PlaygroundMain.instance:setTimeout(()=>this.waitForMainApp(),100)}setupFileLoader(){this.baseUrl=typeof window<"u"&&window.location?window.location.href:"",window.FileLoader={baseUrl:this.baseUrl,resolveUrl:n=>this.resolveUrl(n),load:n=>this.loadFile(n),stringToArrayBuffer:this.stringToArrayBuffer}}resolveUrl(n){if(n.startsWith("http://")||n.startsWith("https://")||n.startsWith("//")||n.startsWith("file://")||!this.baseUrl)return n;try{return new URL(n,this.baseUrl).href}catch{const r=this.baseUrl.endsWith("/")?this.baseUrl:this.baseUrl+"/",i=n.startsWith("/")?n.substring(1):n;return r+i}}stringToArrayBuffer(n){const t=new ArrayBuffer(n.length),r=new Uint8Array(t);for(let i=0,l=n.length;i<l;i++)r[i]=n.charCodeAt(i);return t}loadFile(n){const t=this.extractFilenameFromUrl(n);if(t&&Jp(t)){const l=yl(t);if(l)return this.stringToArrayBuffer(l)}if(typeof window.hxd<"u"&&window.hxd.res&&window.hxd.res.load)try{const l=window.hxd.res.load(n);if(l&&l.entry&&l.entry.getBytes){const o=l.entry.getBytes();return this.stringToArrayBuffer(o.toString())}}catch{}const r=this.resolveUrl(n),i=new XMLHttpRequest;return i.open("GET",r,!1),i.send(),i.status===200?this.stringToArrayBuffer(i.response):new ArrayBuffer(0)}extractFilenameFromUrl(n){const r=n.split("?")[0].split("#")[0].split("/"),i=r[r.length-1];return i&&(i.endsWith(".manim")||i.endsWith(".anim")||i.endsWith(".png")||i.endsWith(".atlas2")||i.endsWith(".fnt")||i.endsWith(".tps"))?i:null}onContentChanged(n){if(this.currentFile){const t=this.manimFiles.find(i=>i.filename===this.currentFile);t&&(t.content=n,ti(this.currentFile,n));const r=this.animFiles.find(i=>i.filename===this.currentFile);r&&(r.content=n,ti(this.currentFile,n))}this.reloadTimeout&&clearTimeout(this.reloadTimeout),this.reloadTimeout=setTimeout(()=>{this.reloadPlayground()},this.reloadDelay)}reloadPlayground(n){var r;let t=n;if(!t){const i=document.getElementById("screen-selector");t=i?i.value:"particles"}if((r=window.PlaygroundMain)!=null&&r.instance)try{const i=window.PlaygroundMain.instance.reload(t,!0);return console.log("PlaygroundLoader reload result:",i),console.log("Result type:",typeof i),console.log("Result keys:",i?Object.keys(i):"null"),i&&i.__nativeException&&console.log("Error in reload result:",i.__nativeException),i}catch(i){return console.log("Exception during reload:",i),{__nativeException:i}}return null}getCurrentContent(){const n=document.getElementById("manim-textarea");return n?n.value:""}getCurrentFile(){return this.currentFile}getEditedContent(n){const t=this.manimFiles.find(i=>i.filename===n);if(t)return t.content;const r=this.animFiles.find(i=>i.filename===n);return r?r.content:null}updateContent(n,t){const r=this.manimFiles.find(i=>i.filename===n);r&&(r.content=t,ti(n,t))}dispose(){this.mainApp&&typeof this.mainApp.dispose=="function"&&this.mainApp.dispose()}static getDefaultScreen(){return em}}function tm(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ss(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_s(Object(t),!0).forEach(function(r){tm(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rm(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function im(e,n){if(e==null)return{};var t=rm(e,n),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function lm(e,n){return om(e)||am(e,n)||sm(e,n)||um()}function om(e){if(Array.isArray(e))return e}function am(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,i=!1,l=void 0;try{for(var o=e[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(t.push(a.value),!(n&&t.length===n));r=!0);}catch(s){i=!0,l=s}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw l}}return t}}function sm(e,n){if(e){if(typeof e=="string")return Es(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Es(e,n)}}function Es(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function um(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cm(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Cs(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function bs(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Cs(Object(t),!0).forEach(function(r){cm(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cs(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function dm(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){return n.reduceRight(function(i,l){return l(i)},r)}}function Ht(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return n.apply(t,[].concat(i,a))}}}function Pi(e){return{}.toString.call(e).includes("Object")}function fm(e){return!Object.keys(e).length}function yr(e){return typeof e=="function"}function pm(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function mm(e,n){return Pi(n)||Ln("changeType"),Object.keys(n).some(function(t){return!pm(e,t)})&&Ln("changeField"),n}function hm(e){yr(e)||Ln("selectorType")}function gm(e){yr(e)||Pi(e)||Ln("handlerType"),Pi(e)&&Object.values(e).some(function(n){return!yr(n)})&&Ln("handlersType")}function vm(e){e||Ln("initialIsRequired"),Pi(e)||Ln("initialType"),fm(e)&&Ln("initialContent")}function ym(e,n){throw new Error(e[n]||e.default)}var xm={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ln=Ht(ym)(xm),Ur={changes:mm,selector:hm,handler:gm,initial:vm};function wm(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ur.initial(e),Ur.handler(n);var t={current:e},r=Ht(Sm)(t,n),i=Ht(_m)(t),l=Ht(Ur.changes)(e),o=Ht(km)(t);function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Ur.selector(d),d(t.current)}function s(d){dm(r,i,l,o)(d)}return[a,s]}function km(e,n){return yr(n)?n(e.current):n}function _m(e,n){return e.current=bs(bs({},e.current),n),n}function Sm(e,n,t){return yr(n)?n(e.current):Object.keys(t).forEach(function(r){var i;return(i=n[r])===null||i===void 0?void 0:i.call(n,e.current[r])}),t}var Em={create:wm},Cm={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function bm(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return n.apply(t,[].concat(i,a))}}}function Pm(e){return{}.toString.call(e).includes("Object")}function $m(e){return e||Ps("configIsRequired"),Pm(e)||Ps("configType"),e.urls?(Nm(),{paths:{vs:e.urls.monacoBase}}):e}function Nm(){console.warn(Hc.deprecation)}function Fm(e,n){throw new Error(e[n]||e.default)}var Hc={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ps=bm(Fm)(Hc),Tm={config:$m},jm=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(i){return t.reduceRight(function(l,o){return o(l)},i)}};function Vc(e,n){return Object.keys(n).forEach(function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],Vc(e[t],n[t]))}),Ss(Ss({},e),n)}var zm={type:"cancelation",msg:"operation is manually canceled"};function xl(e){var n=!1,t=new Promise(function(r,i){e.then(function(l){return n?i(zm):r(l)}),e.catch(i)});return t.cancel=function(){return n=!0},t}var Lm=Em.create({config:Cm,isInitialized:!1,resolve:null,reject:null,monaco:null}),Qc=lm(Lm,2),Er=Qc[0],Hi=Qc[1];function Rm(e){var n=Tm.config(e),t=n.monaco,r=im(n,["monaco"]);Hi(function(i){return{config:Vc(i.config,r),monaco:t}})}function Dm(){var e=Er(function(n){var t=n.monaco,r=n.isInitialized,i=n.resolve;return{monaco:t,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Hi({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),xl(wl);if(window.monaco&&window.monaco.editor)return Kc(window.monaco),e.resolve(window.monaco),xl(wl);jm(Mm,Im)(Am)}return xl(wl)}function Mm(e){return document.body.appendChild(e)}function Om(e){var n=document.createElement("script");return e&&(n.src=e),n}function Im(e){var n=Er(function(r){var i=r.config,l=r.reject;return{config:i,reject:l}}),t=Om("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function Am(){var e=Er(function(t){var r=t.config,i=t.resolve,l=t.reject;return{config:r,resolve:i,reject:l}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(t){Kc(t),e.resolve(t)},function(t){e.reject(t)})}function Kc(e){Er().monaco||Hi({monaco:e})}function Bm(){return Er(function(e){var n=e.monaco;return n})}var wl=new Promise(function(e,n){return Hi({resolve:e,reject:n})}),Gc={config:Rm,init:Dm,__getMonacoInstance:Bm},Um={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},kl=Um,Wm={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Hm=Wm;function Vm({children:e}){return Cn.createElement("div",{style:Hm.container},e)}var Qm=Vm,Km=Qm;function Gm({width:e,height:n,isEditorReady:t,loading:r,_ref:i,className:l,wrapperProps:o}){return Cn.createElement("section",{style:{...kl.wrapper,width:e,height:n},...o},!t&&Cn.createElement(Km,null,r),Cn.createElement("div",{ref:i,style:{...kl.fullWidth,...!t&&kl.hide},className:l}))}var Xm=Gm,Xc=N.memo(Xm);function Ym(e){N.useEffect(e,[])}var Yc=Ym;function Zm(e,n,t=!0){let r=N.useRef(!0);N.useEffect(r.current||!t?()=>{r.current=!1}:e,n)}var Te=Zm;function er(){}function mt(e,n,t,r){return qm(e,r)||Jm(e,n,t,r)}function qm(e,n){return e.editor.getModel(Zc(e,n))}function Jm(e,n,t,r){return e.editor.createModel(n,t,r?Zc(e,r):void 0)}function Zc(e,n){return e.Uri.parse(n)}function e0({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:i,originalModelPath:l,modifiedModelPath:o,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:s=!1,theme:d="light",loading:g="Loading...",options:m={},height:p="100%",width:v="100%",className:x,wrapperProps:y={},beforeMount:S=er,onMount:c=er}){let[u,f]=N.useState(!1),[h,k]=N.useState(!0),P=N.useRef(null),E=N.useRef(null),C=N.useRef(null),D=N.useRef(c),F=N.useRef(S),Q=N.useRef(!1);Yc(()=>{let R=Gc.init();return R.then(W=>(E.current=W)&&k(!1)).catch(W=>(W==null?void 0:W.type)!=="cancelation"&&console.error("Monaco initialization: error:",W)),()=>P.current?Ie():R.cancel()}),Te(()=>{if(P.current&&E.current){let R=P.current.getOriginalEditor(),W=mt(E.current,e||"",r||t||"text",l||"");W!==R.getModel()&&R.setModel(W)}},[l],u),Te(()=>{if(P.current&&E.current){let R=P.current.getModifiedEditor(),W=mt(E.current,n||"",i||t||"text",o||"");W!==R.getModel()&&R.setModel(W)}},[o],u),Te(()=>{let R=P.current.getModifiedEditor();R.getOption(E.current.editor.EditorOption.readOnly)?R.setValue(n||""):n!==R.getValue()&&(R.executeEdits("",[{range:R.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),R.pushUndoStop())},[n],u),Te(()=>{var R,W;(W=(R=P.current)==null?void 0:R.getModel())==null||W.original.setValue(e||"")},[e],u),Te(()=>{let{original:R,modified:W}=P.current.getModel();E.current.editor.setModelLanguage(R,r||t||"text"),E.current.editor.setModelLanguage(W,i||t||"text")},[t,r,i],u),Te(()=>{var R;(R=E.current)==null||R.editor.setTheme(d)},[d],u),Te(()=>{var R;(R=P.current)==null||R.updateOptions(m)},[m],u);let Me=N.useCallback(()=>{var _e;if(!E.current)return;F.current(E.current);let R=mt(E.current,e||"",r||t||"text",l||""),W=mt(E.current,n||"",i||t||"text",o||"");(_e=P.current)==null||_e.setModel({original:R,modified:W})},[t,n,i,e,r,l,o]),Oe=N.useCallback(()=>{var R;!Q.current&&C.current&&(P.current=E.current.editor.createDiffEditor(C.current,{automaticLayout:!0,...m}),Me(),(R=E.current)==null||R.editor.setTheme(d),f(!0),Q.current=!0)},[m,d,Me]);N.useEffect(()=>{u&&D.current(P.current,E.current)},[u]),N.useEffect(()=>{!h&&!u&&Oe()},[h,u,Oe]);function Ie(){var W,_e,$,L;let R=(W=P.current)==null?void 0:W.getModel();a||((_e=R==null?void 0:R.original)==null||_e.dispose()),s||(($=R==null?void 0:R.modified)==null||$.dispose()),(L=P.current)==null||L.dispose()}return Cn.createElement(Xc,{width:v,height:p,isEditorReady:u,loading:g,_ref:C,className:x,wrapperProps:y})}var n0=e0;N.memo(n0);function t0(e){let n=N.useRef();return N.useEffect(()=>{n.current=e},[e]),n.current}var r0=t0,Wr=new Map;function i0({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:i,path:l,theme:o="light",line:a,loading:s="Loading...",options:d={},overrideServices:g={},saveViewState:m=!0,keepCurrentModel:p=!1,width:v="100%",height:x="100%",className:y,wrapperProps:S={},beforeMount:c=er,onMount:u=er,onChange:f,onValidate:h=er}){let[k,P]=N.useState(!1),[E,C]=N.useState(!0),D=N.useRef(null),F=N.useRef(null),Q=N.useRef(null),Me=N.useRef(u),Oe=N.useRef(c),Ie=N.useRef(),R=N.useRef(r),W=r0(l),_e=N.useRef(!1),$=N.useRef(!1);Yc(()=>{let z=Gc.init();return z.then(M=>(D.current=M)&&C(!1)).catch(M=>(M==null?void 0:M.type)!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>F.current?O():z.cancel()}),Te(()=>{var M,te,he,$e;let z=mt(D.current,e||r||"",n||i||"",l||t||"");z!==((M=F.current)==null?void 0:M.getModel())&&(m&&Wr.set(W,(te=F.current)==null?void 0:te.saveViewState()),(he=F.current)==null||he.setModel(z),m&&(($e=F.current)==null||$e.restoreViewState(Wr.get(l))))},[l],k),Te(()=>{var z;(z=F.current)==null||z.updateOptions(d)},[d],k),Te(()=>{!F.current||r===void 0||(F.current.getOption(D.current.editor.EditorOption.readOnly)?F.current.setValue(r):r!==F.current.getValue()&&($.current=!0,F.current.executeEdits("",[{range:F.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),F.current.pushUndoStop(),$.current=!1))},[r],k),Te(()=>{var M,te;let z=(M=F.current)==null?void 0:M.getModel();z&&i&&((te=D.current)==null||te.editor.setModelLanguage(z,i))},[i],k),Te(()=>{var z;a!==void 0&&((z=F.current)==null||z.revealLine(a))},[a],k),Te(()=>{var z;(z=D.current)==null||z.editor.setTheme(o)},[o],k);let L=N.useCallback(()=>{var z;if(!(!Q.current||!D.current)&&!_e.current){Oe.current(D.current);let M=l||t,te=mt(D.current,r||e||"",n||i||"",M||"");F.current=(z=D.current)==null?void 0:z.editor.create(Q.current,{model:te,automaticLayout:!0,...d},g),m&&F.current.restoreViewState(Wr.get(M)),D.current.editor.setTheme(o),a!==void 0&&F.current.revealLine(a),P(!0),_e.current=!0}},[e,n,t,r,i,l,d,g,m,o,a]);N.useEffect(()=>{k&&Me.current(F.current,D.current)},[k]),N.useEffect(()=>{!E&&!k&&L()},[E,k,L]),R.current=r,N.useEffect(()=>{var z,M;k&&f&&((z=Ie.current)==null||z.dispose(),Ie.current=(M=F.current)==null?void 0:M.onDidChangeModelContent(te=>{$.current||f(F.current.getValue(),te)}))},[k,f]),N.useEffect(()=>{if(k){let z=D.current.editor.onDidChangeMarkers(M=>{var he;let te=(he=F.current.getModel())==null?void 0:he.uri;if(te&&M.find($e=>$e.path===te.path)){let $e=D.current.editor.getModelMarkers({resource:te});h==null||h($e)}});return()=>{z==null||z.dispose()}}return()=>{}},[k,h]);function O(){var z,M;(z=Ie.current)==null||z.dispose(),p?m&&Wr.set(l,F.current.saveViewState()):(M=F.current.getModel())==null||M.dispose(),F.current.dispose()}return Cn.createElement(Xc,{width:v,height:x,isEditorReady:k,loading:s,_ref:Q,className:y,wrapperProps:S})}var l0=i0,o0=N.memo(l0),a0=o0;const s0=[{include:"#strings"},{name:"comment.line.double-slash",match:"//.*$"},{include:"#keywords"}],u0={keywords:{patterns:[{name:"entity.name.class",match:"\\b(sheet|allowedExtraPoints|states|center)\\b"},{name:"keyword",match:"\\b(animation)\\b"},{name:"entity.name.type",match:"\\b(name|fps|playlist|sheet|extrapoints|playlist|loop|event|goto|hit|random|trigger|command|frames|untilCommand|duration|file)\\b"}]},strings:{name:"string.quoted.double",begin:'"',end:'"',patterns:[{name:"constant.character.escape.multianim",match:"\\\\."}]}},c0={patterns:s0,repository:u0},d0=[{include:"#strings"},{name:"comment.line.double-slash",match:"//.*$"},{name:"variable.name",match:"\\$[A-Za-z][A-Za-z0-9]*"},{name:"entity.name.tag",match:"#[A-Za-z][A-Za-z0-9\\-]*\\b"},{begin:"(@|@if|@ifstrict)\\(",beginCaptures:{0:{name:"keyword.control.at-sign"}},end:"\\)",endCaptures:{0:{name:"keyword.control.parenthesis"}},name:"meta.condition-block",contentName:"meta.condition-content",patterns:[{match:"\\b([A-Za-z_][A-Za-z0-9_]*)\\s*=>",name:"meta.condition-pair",captures:{0:{name:"keyword.other"},1:{name:"variable.other.key"}}},{match:"([A-Za-z_][A-Za-z0-9_]*)",name:"constant.other.value"},{match:",",name:"punctuation.separator.comma"}]},{name:"entity.name.method",match:"\\b@[A-Za-z][A-Za-z0-9]*\\b"},{include:"#keywords"}],f0={keywords:{patterns:[{name:"entity.name.class",match:"\\b(animatedPath|particles|programmable|stateanim|flow|apply|text|tilegroup|repeatable|ninepatch|layers|placeholder|reference|bitmap|point|interactive|pixels|relativeLayouts|palettes|paths)\\b"},{name:"keyword",match:"\\b(external|path|debug|version|nothing|list|line|flat|pointy|layer|layout|callback|builderParam|tileSource|sheet|file|generated|hex|hexCorner|hexEdge|grid|settings|pos|alpha|blendMode|scale|updatable|cross|function|gridWidth|gridHeight|center|left|right|top|bottom|offset|construct|palette|position|import|filter)\\b"},{name:"entity.name.type",match:"\\b(int|uint|flags|string|hexdirection|griddirection|bool|color)\\b"},{name:"entity.name.type",match:"\\b(int|uint|flags|string|hexdirection|griddirection|bool|color)\\b"}]},strings:{name:"string.quoted.double",begin:'"',end:'"',patterns:[{name:"constant.character.escape.multianim",match:"\\\\."}]}},p0={patterns:d0,repository:f0},$s=e=>{const n={root:[]};return e.patterns&&e.patterns.forEach(t=>{if(t.include){const r=t.include.replace("#","");e.repository&&e.repository[r]&&e.repository[r].patterns.forEach(l=>{l.match&&n.root.push([new RegExp(l.match),l.name||"identifier"])})}else t.match&&n.root.push([new RegExp(t.match),t.name||"identifier"])}),e.repository&&Object.keys(e.repository).forEach(t=>{const r=e.repository[t];r.patterns&&(n[t]=r.patterns.map(i=>i.match?[new RegExp(i.match),i.name||"identifier"]:["",""]).filter(([i])=>i!==""))}),n},qc=N.forwardRef(({value:e,onChange:n,language:t="text",disabled:r=!1,placeholder:i,onSave:l,errorLine:o,errorColumn:a,errorStart:s,errorEnd:d},g)=>{const m=N.useRef(null),p=N.useRef(),v=N.useRef([]);N.useEffect(()=>{p.current=l},[l]),N.useEffect(()=>{if(m.current&&(v.current.length>0&&(m.current.deltaDecorations(v.current,[]),v.current=[]),o)){const c=[];if(c.push({range:{startLineNumber:o,startColumn:1,endLineNumber:o,endColumn:1},options:{isWholeLine:!0,className:"error-line",glyphMarginClassName:"error-glyph",linesDecorationsClassName:"error-line-decoration"}}),s!==void 0&&d!==void 0){const u=m.current.getModel();if(u)try{const f=u.getPositionAt(s),h=u.getPositionAt(d);c.push({range:{startLineNumber:f.lineNumber,startColumn:f.column,endLineNumber:h.lineNumber,endColumn:h.column},options:{className:"error-token",hoverMessage:{value:"Parse error at this position"}}})}catch(f){console.log("Error calculating character position:",f)}}v.current=m.current.deltaDecorations([],c)}},[o,a,s,d]);const x=(c,u)=>{m.current=c,u.languages.register({id:"haxe-anim"}),u.languages.register({id:"haxe-manim"});const f=$s(c0);u.languages.setMonarchTokensProvider("haxe-anim",{tokenizer:f});const h=$s(p0);u.languages.setMonarchTokensProvider("haxe-manim",{tokenizer:h}),c.addAction({id:"save-file",label:"Save File",keybindings:[u.KeyMod.CtrlCmd|u.KeyCode.KeyS],run:()=>{p.current&&p.current()}}),c.focus()},y=c=>{c!==void 0&&n(c)},S=()=>t==="typescript"&&(e.includes("class")||e.includes("function")||e.includes("var"))?"haxe-manim":t;return w.jsxs("div",{ref:g,className:"w-full h-full min-h-[200px] border border-zinc-700 rounded overflow-hidden",style:{minHeight:200},children:[w.jsx("style",{children:`
          .error-line {
            background-color: rgba(239, 68, 68, 0.1) !important;
            border-left: 3px solid #ef4444 !important;
          }
          .error-glyph {
            background-color: #ef4444 !important;
          }
          .error-line-decoration {
            background-color: #ef4444 !important;
          }
          .error-token {
            background-color: rgba(239, 68, 68, 0.4) !important;
            border-bottom: 2px solid #ef4444 !important;
            text-decoration: underline wavy #ef4444 !important;
          }
        `}),w.jsx(a0,{height:"100%",defaultLanguage:S(),value:e,onChange:y,onMount:x,options:{readOnly:r,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:12,fontFamily:'Consolas, Monaco, "Courier New", monospace',lineNumbers:"on",roundedSelection:!1,scrollbar:{vertical:"visible",horizontal:"visible",verticalScrollbarSize:8,horizontalScrollbarSize:8},automaticLayout:!0,wordWrap:"on",theme:"vs-dark",tabSize:2,insertSpaces:!0,detectIndentation:!1,trimAutoWhitespace:!0,largeFileOptimizations:!1,placeholder:i,suggest:{showKeywords:!0,showSnippets:!0,showClasses:!0,showFunctions:!0,showVariables:!0},quickSuggestions:{other:!0,comments:!1,strings:!1}},theme:"vs-dark"})]})});qc.displayName="CodeEditor";const Ns="button";function m0(){var fa;const[e,n]=N.useState(Ns),[t,r]=N.useState(""),[i,l]=N.useState(""),[o,a]=N.useState(!1),[s,d]=N.useState(""),[g,m]=N.useState(!1),[p,v]=N.useState(null),[x,y]=N.useState(null),[S]=N.useState(()=>new nm),[c,u]=N.useState(250),[f,h]=N.useState(400),[k,P]=N.useState(600),[E,C]=N.useState("playground"),[D,F]=N.useState([]),Q=N.useRef(null),Me=N.useRef(null),Oe=N.useRef(null),Ie=N.useRef(!1),R=N.useRef("");N.useEffect(()=>{p&&C("console")},[p]),N.useEffect(()=>{const b=console.log,j=console.error,B=console.warn,X=console.info,Ne=(A,...Qe)=>{const an=Qe.map(Tt=>typeof Tt=="object"?JSON.stringify(Tt,null,2):String(Tt)).join(" ");F(Tt=>[...Tt,{type:A,message:an,timestamp:new Date}])};return console.log=(...A)=>{b(...A),Ne("log",...A)},console.error=(...A)=>{j(...A),Ne("error",...A)},console.warn=(...A)=>{B(...A),Ne("warn",...A)},console.info=(...A)=>{X(...A),Ne("info",...A)},()=>{console.log=b,console.error=j,console.warn=B,console.info=X}},[]),N.useEffect(()=>{Q.current&&(Q.current.scrollTop=Q.current.scrollHeight)},[D]);const W=()=>{F([])},_e=b=>{if(!b.endsWith(".manim")){y(null);return}const j=S.screens.find(B=>B.manimFile===b);j&&j.name!==e?y({file:b,screen:j.name}):y(null)},$=b=>({scrollableList:"ScrollableListTestScreen.hx",button:"ButtonTestScreen.hx",checkbox:"CheckboxTestScreen.hx",slider:"SliderTestScreen.hx",particles:"ParticlesScreen.hx",components:"ComponentsTestScreen.hx",examples1:"Examples1Screen.hx",paths:"PathsScreen.hx",fonts:"FontsScreen.hx",room1:"Room1Screen.hx",stateAnim:"StateAnimScreen.hx",dialogStart:"DialogStartScreen.hx",settings:"SettingsScreen.hx"})[b]||`${b.charAt(0).toUpperCase()+b.slice(1)}Screen.hx`,L=()=>{x&&(n(x.screen),y(null),S.reloadPlayground(x.screen))},O=()=>{y(null)},z=b=>{switch(b){case"error":return"❌";case"warn":return"⚠️";case"info":return"ℹ️";default:return"📋"}},M=b=>{switch(b){case"error":return"text-red-400";case"warn":return"text-yellow-400";case"info":return"text-blue-400";default:return"text-gray-300"}};N.useEffect(()=>{const b=()=>{var B;(B=window.PlaygroundMain)!=null&&B.defaultScreen&&n(window.PlaygroundMain.defaultScreen)};b();const j=setTimeout(b,100);return()=>clearTimeout(j)},[]),N.useEffect(()=>(window.playgroundLoader=S,window.defaultScreen=Ns,S.onContentChanged=b=>{l(b)},()=>{S.dispose()}),[S]),N.useEffect(()=>{if(S.manimFiles.length>0&&e){const b=S.screens.find(j=>j.name===e);if(b&&b.manimFile){const j=S.manimFiles.find(B=>B.filename===b.manimFile);j&&(r(b.manimFile),l(j.content||""),d(j.description),a(!0),S.currentFile=b.manimFile,S.currentExample=b.manimFile,m(!1))}}},[S.manimFiles,e]),N.useEffect(()=>{const b=S.screens.find(j=>j.name===e);if(b&&b.manimFile){const j=S.manimFiles.find(B=>B.filename===b.manimFile);j&&(r(b.manimFile),l(j.content||""),d(j.description),a(!0),S.currentFile=b.manimFile,S.currentExample=b.manimFile,m(!1))}},[e,S]);const te=()=>{if(t&&S.manimFiles.find(b=>b.filename===t))return t;if(e&&S.manimFiles.length>0){const b=S.screens.find(B=>B.name===e);if(b&&b.manimFile){const B=S.manimFiles.find(X=>X.filename===b.manimFile);if(B)return r(b.manimFile),(!i||i.trim()==="")&&l(B.content||""),d(B.description),a(!0),S.currentFile=b.manimFile,S.currentExample=b.manimFile,b.manimFile}const j=S.manimFiles[0];return r(j.filename),(!i||i.trim()==="")&&l(j.content||""),d(j.description),a(!0),S.currentFile=j.filename,S.currentExample=j.filename,j.filename}if(S.manimFiles.length>0){const b=S.manimFiles[0];return r(b.filename),S.currentFile=b.filename,S.currentExample=b.filename,b.filename}return null},he=b=>{const j=b.target.value;n(j),y(null),S.reloadPlayground(j)},$e=b=>{const j=b.target.value;if(r(j),j){if(j.endsWith(".manim")){const B=S.manimFiles.find(X=>X.filename===j);B&&(l(B.content||""),d(B.description),a(!0),S.currentFile=j,S.currentExample=j,m(!1),_e(j))}else if(j.endsWith(".anim")){const B=S.animFiles.find(X=>X.filename===j);B&&(l(B.content||""),d("Animation file - content loaded and available to playground"),a(!0),S.currentFile=j,S.currentExample=j,m(!1),y(null))}}else l(""),a(!1),S.currentFile=null,S.currentExample=null,m(!1),y(null)},on=b=>{l(b),m(!0),p&&v(null)},et=()=>{var j,B,X,Ne;const b=te();if(b&&(S.updateContent(b,i),ti(b,i),m(!1),e)){const A=S.reloadPlayground(e);if(console.log("Reload result:",A),console.log("Result type:",typeof A),console.log("Result keys:",A?Object.keys(A):"null"),A&&A.__nativeException){console.log("Found __nativeException:",A.__nativeException);const Qe=A.__nativeException,an={message:Qe.message||"Unknown error occurred",pos:(j=Qe.value)==null?void 0:j.pos,token:(B=Qe.value)==null?void 0:B.token};console.log("Setting error info:",an),v(an)}else if(A&&A.value&&A.value.__nativeException){console.log("Found nested __nativeException:",A.value.__nativeException);const Qe=A.value.__nativeException,an={message:Qe.message||"Unknown error occurred",pos:(X=Qe.value)==null?void 0:X.pos,token:(Ne=Qe.value)==null?void 0:Ne.token};console.log("Setting error info:",an),v(an)}else console.log("No error found, clearing error state"),v(null)}},da=Cn.useCallback(()=>{et()},[t,i,e,S]),ge=(()=>{if(!(p!=null&&p.pos))return null;const{pmin:b,pmax:j}=p.pos,B=i;let X=1,Ne=1;for(let A=0;A<b&&A<B.length;A++)B[A]===`
`?(X++,Ne=1):Ne++;return{line:X,column:Ne,start:b,end:j}})(),Vi=b=>j=>{Ie.current=!0,R.current=b,j.preventDefault()};return N.useEffect(()=>{const b=B=>{if(Ie.current){if(R.current==="file"){const X=B.clientX;X>150&&X<window.innerWidth-300&&u(X)}else if(R.current==="editor"){const X=B.clientX-c;X>200&&X<window.innerWidth-c-200&&h(X)}else if(R.current==="playground"){const X=window.innerWidth-c-f-2,Ne=c+f+2,A=B.clientX-Ne,Qe=200,an=X-200;A>Qe&&A<an&&P(A)}}},j=()=>{Ie.current=!1,R.current=""};return document.addEventListener("mousemove",b),document.addEventListener("mouseup",j),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",j)}},[c,f]),w.jsxs("div",{className:"flex h-screen w-screen bg-gray-900 text-white",children:[w.jsxs("div",{ref:Me,className:"bg-gray-800 border-r border-gray-700 flex flex-col",style:{width:c},children:[w.jsxs("div",{className:"p-4 border-b border-gray-700",children:[w.jsxs("div",{className:"mb-4",children:[w.jsx("label",{className:"block mb-2 text-xs font-medium text-gray-300",children:"Screen:"}),w.jsx("select",{className:"w-full p-2 bg-gray-700 border border-gray-600 text-white text-xs rounded focus:outline-none focus:border-blue-500",value:e,onChange:he,children:S.screens.map(b=>w.jsx("option",{value:b.name,children:b.displayName},b.name))})]}),o&&w.jsxs("div",{className:"p-3 bg-gray-700 border border-gray-600 rounded h-20 overflow-y-auto overflow-x-hidden",children:[w.jsx("p",{className:"text-xs text-gray-300 leading-relaxed mb-2",children:s}),w.jsxs("a",{href:`https://github.com/bh213/hx-multianim-playground/blob/main/src/screens/${$(e)}`,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:["📖 View ",e," Screen on GitHub"]})]})]}),w.jsx("div",{className:"flex-1 p-4",children:w.jsxs("div",{className:"text-xs text-gray-400",children:[w.jsx("div",{className:"mb-2",children:w.jsx("span",{className:"font-medium",children:"📁 Files:"})}),w.jsxs("div",{className:"space-y-1 scrollable",style:{maxHeight:"calc(100vh - 300px)"},children:[S.manimFiles.map(b=>w.jsxs("div",{className:`p-2 rounded cursor-pointer text-xs ${t===b.filename?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,onClick:()=>$e({target:{value:b.filename}}),children:["📄 ",b.filename]},b.filename)),S.animFiles.map(b=>w.jsxs("div",{className:`p-2 rounded cursor-pointer text-xs ${t===b.filename?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,onClick:()=>$e({target:{value:b.filename}}),children:["🎬 ",b.filename]},b.filename))]})]})})]}),w.jsx("div",{className:"w-1 bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors",onMouseDown:Vi("file")}),w.jsxs("div",{ref:Oe,className:"bg-gray-900 flex flex-col",style:{width:f},children:[w.jsxs("div",{className:"p-4 border-b border-gray-700",children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsx("h2",{className:"text-base font-semibold text-gray-200",children:"Editor"}),g&&w.jsx("button",{className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition",onClick:da,title:"Save changes and reload playground (Ctrl+S)",children:"💾 Apply Changes"})]}),g&&!p&&w.jsx("div",{className:"text-xs text-orange-400 mb-2",children:'⚠️ Unsaved changes - Click "Apply Changes" to save and reload'})]}),w.jsx("div",{className:"flex-1 scrollable",children:w.jsx(qc,{value:i,onChange:on,language:"haxe-manim",disabled:!t,placeholder:"Select a manim file to load its content here...",onSave:da,errorLine:ge==null?void 0:ge.line,errorColumn:ge==null?void 0:ge.column,errorStart:ge==null?void 0:ge.start,errorEnd:ge==null?void 0:ge.end})}),x&&w.jsxs("div",{className:"p-3 bg-blue-900/20 border-t border-blue-700",children:[w.jsxs("div",{className:"flex justify-between items-start mb-2",children:[w.jsx("div",{className:"font-bold text-blue-400",children:"🔄 Screen Sync:"}),w.jsx("button",{className:"text-blue-300 hover:text-blue-100",onClick:O,title:"Dismiss",children:"✕"})]}),w.jsxs("div",{className:"text-blue-300 mb-3",children:["Switch to ",w.jsx("strong",{children:((fa=S.screens.find(b=>b.name===x.screen))==null?void 0:fa.displayName)||x.screen})," screen to match ",w.jsx("strong",{children:x.file}),"?"]}),w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("button",{onClick:L,className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors",children:"✅ Switch Screen"}),w.jsx("button",{onClick:O,className:"px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded transition-colors",children:"❌ Keep Current"})]})]})]}),w.jsx("div",{className:"w-1 bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors",onMouseDown:Vi("editor")}),w.jsxs("div",{className:"flex-1 bg-gray-900 flex flex-col h-full min-h-0",children:[w.jsx("div",{className:"border-b border-gray-700 flex-shrink-0",children:w.jsxs("div",{className:"flex",children:[w.jsx("button",{className:`px-4 py-2 text-xs font-medium transition-colors ${E==="playground"?"bg-gray-800 text-white border-b-2 border-blue-500":"text-gray-400 hover:text-white hover:bg-gray-800"}`,onClick:()=>C("playground"),children:"🎮 Playground"}),w.jsx("button",{className:`px-4 py-2 text-xs font-medium transition-colors ${E==="console"?"bg-gray-800 text-white border-b-2 border-blue-500":"text-gray-400 hover:text-white hover:bg-gray-800"}`,onClick:()=>C("console"),children:p?"❌ Console":"📋 Console"}),w.jsx("button",{className:`px-4 py-2 text-xs font-medium transition-colors ${E==="info"?"bg-gray-800 text-white border-b-2 border-blue-500":"text-gray-400 hover:text-white hover:bg-gray-800"}`,onClick:()=>C("info"),children:"ℹ️ Info"})]})}),w.jsxs("div",{className:"flex-1 flex min-h-0",children:[w.jsx("div",{className:`${E==="playground"?"flex-1":"w-0"} transition-all duration-300 overflow-hidden flex flex-col h-full`,style:{width:E==="playground"?k:0},children:w.jsx("div",{className:"w-full h-full flex-1 min-h-0",children:w.jsx("canvas",{id:"webgl",className:"w-full h-full block"})})}),w.jsx("div",{className:"w-1 bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors",onMouseDown:Vi("playground")}),w.jsxs("div",{className:`${E==="console"?"flex-1":"w-0"} transition-all duration-300 overflow-hidden flex flex-col h-full`,children:[w.jsxs("div",{className:"p-3 border-b border-gray-700 flex justify-between items-center flex-shrink-0",children:[w.jsx("h3",{className:"text-xs font-medium text-gray-200",children:"Console Output"}),w.jsx("button",{onClick:W,className:"px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors",title:"Clear console",children:"🗑️ Clear"})]}),w.jsxs("div",{ref:Q,className:"flex-1 p-3 bg-gray-800 text-xs font-mono overflow-y-auto overflow-x-hidden min-h-0",children:[D.length===0?w.jsxs("div",{className:"text-gray-400 text-center py-8",children:[w.jsx("div",{className:"text-2xl mb-2",children:"📋"}),w.jsx("div",{children:"Console output will appear here."})]}):w.jsx("div",{className:"space-y-1",children:D.map((b,j)=>w.jsxs("div",{className:"flex items-start space-x-2",children:[w.jsx("span",{className:"text-gray-500 text-xs mt-1",children:b.timestamp.toLocaleTimeString()}),w.jsx("span",{className:"text-gray-500",children:z(b.type)}),w.jsx("span",{className:`${M(b.type)} break-all`,children:b.message})]},j))}),p&&w.jsxs("div",{className:"mt-4 p-3 bg-red-900/20 border border-red-700 rounded",children:[w.jsxs("div",{className:"flex justify-between items-start mb-2",children:[w.jsx("div",{className:"font-bold text-red-400",children:"❌ Parse Error:"}),w.jsx("button",{className:"text-red-300 hover:text-red-100",onClick:()=>v(null),title:"Clear error",children:"✕"})]}),w.jsx("div",{className:"text-red-300 mb-2",children:p.message}),ge&&w.jsxs("div",{className:"text-red-400 text-sm",children:["Line ",ge.line,", Column ",ge.column]})]})]})]}),w.jsx("div",{className:`${E==="info"?"flex-1":"w-0"} transition-all duration-300 overflow-hidden flex flex-col h-full`,children:w.jsxs("div",{className:"p-4 h-full overflow-y-auto",children:[w.jsx("h3",{className:"text-base font-semibold text-gray-200 mb-4",children:"About hx-multianim Playground"}),w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("h4",{className:"text-sm font-medium text-gray-300 mb-2",children:"📚 Documentation & Resources"}),w.jsxs("div",{className:"space-y-2",children:[w.jsxs("a",{href:"https://github.com/bh213/hx-multianim",target:"_blank",rel:"noopener noreferrer",className:"block p-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors",children:[w.jsx("div",{className:"font-medium text-blue-400",children:"hx-multianim"}),w.jsx("div",{className:"text-xs text-gray-400",children:"Animation library for Haxe driving this playground"})]}),w.jsxs("a",{href:"https://github.com/HeapsIO/heaps",target:"_blank",rel:"noopener noreferrer",className:"block p-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors",children:[w.jsx("div",{className:"font-medium text-blue-400",children:"Heaps"}),w.jsx("div",{className:"text-xs text-gray-400",children:"Cross-platform graphics framework"})]}),w.jsxs("a",{href:"https://haxe.org",target:"_blank",rel:"noopener noreferrer",className:"block p-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors",children:[w.jsx("div",{className:"font-medium text-blue-400",children:"Haxe"}),w.jsx("div",{className:"text-xs text-gray-400",children:"Cross-platform programming language"})]})]})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-sm font-medium text-gray-300 mb-2",children:"🎮 Playground Features"}),w.jsxs("ul",{className:"text-xs text-gray-400 space-y-1",children:[w.jsx("li",{children:"• Real-time code editing and preview"}),w.jsx("li",{children:"• Multiple animation examples and components"}),w.jsx("li",{children:"• File management for manim and anim files"}),w.jsx("li",{children:"• Console output and error display"}),w.jsx("li",{children:"• Resizable panels for optimal workflow"})]})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-sm font-medium text-gray-300 mb-2",children:"💡 Tips"}),w.jsxs("ul",{className:"text-xs text-gray-400 space-y-1",children:[w.jsx("li",{children:"• Use Ctrl+S to apply changes quickly"}),w.jsx("li",{children:"• Switch between playground and console tabs"}),w.jsx("li",{children:"• Resize panels by dragging the dividers"}),w.jsx("li",{children:"• Select files to edit their content"}),w.jsx("li",{children:"• Check console for errors and output"})]})]})]})]})})]})]})]})}var Jc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(rd,function(){var t=function(){},r={},i={},l={};function o(p,v){p=p.push?p:[p];var x=[],y=p.length,S=y,c,u,f,h;for(c=function(k,P){P.length&&x.push(k),S--,S||v(x)};y--;){if(u=p[y],f=i[u],f){c(u,f);continue}h=l[u]=l[u]||[],h.push(c)}}function a(p,v){if(p){var x=l[p];if(i[p]=v,!!x)for(;x.length;)x[0](p,v),x.splice(0,1)}}function s(p,v){p.call&&(p={success:p}),v.length?(p.error||t)(v):(p.success||t)(p)}function d(p,v,x,y){var S=document,c=x.async,u=(x.numRetries||0)+1,f=x.before||t,h=p.replace(/[\?|#].*$/,""),k=p.replace(/^(css|img|module|nomodule)!/,""),P,E,C;if(y=y||0,/(^css!|\.css$)/.test(h))C=S.createElement("link"),C.rel="stylesheet",C.href=k,P="hideFocus"in C,P&&C.relList&&(P=0,C.rel="preload",C.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h))C=S.createElement("img"),C.src=k;else if(C=S.createElement("script"),C.src=k,C.async=c===void 0?!0:c,E="noModule"in C,/^module!/.test(h)){if(!E)return v(p,"l");C.type="module"}else if(/^nomodule!/.test(h)&&E)return v(p,"l");C.onload=C.onerror=C.onbeforeload=function(D){var F=D.type[0];if(P)try{C.sheet.cssText.length||(F="e")}catch(Q){Q.code!=18&&(F="e")}if(F=="e"){if(y+=1,y<u)return d(p,v,x,y)}else if(C.rel=="preload"&&C.as=="style")return C.rel="stylesheet";v(p,F,D.defaultPrevented)},f(p,C)!==!1&&S.head.appendChild(C)}function g(p,v,x){p=p.push?p:[p];var y=p.length,S=y,c=[],u,f;for(u=function(h,k,P){if(k=="e"&&c.push(h),k=="b")if(P)c.push(h);else return;y--,y||v(c)},f=0;f<S;f++)d(p[f],u,x)}function m(p,v,x){var y,S;if(v&&v.trim&&(y=v),S=(y?x:v)||{},y){if(y in r)throw"LoadJS";r[y]=!0}function c(u,f){g(p,function(h){s(S,h),u&&s({success:u,error:f},h),a(y,h)},S)}if(S.returnPromise)return new Promise(c);c()}return m.ready=function(v,x){return o(v,function(y){s(x,y)}),m},m.done=function(v){a(v,[])},m.reset=function(){r={},i={},l={}},m.isDefined=function(v){return v in r},m})})(Jc);var h0=Jc.exports;const Fs=Ts(h0);class g0{constructor(n={}){ve(this,"maxRetries");ve(this,"retryDelay");ve(this,"timeout");ve(this,"retryCount",0);ve(this,"isLoaded",!1);this.maxRetries=n.maxRetries||5,this.retryDelay=n.retryDelay||2e3,this.timeout=n.timeout||1e4}waitForReactApp(){document.getElementById("root")&&window.playgroundLoader?(console.log("React app ready, loading Haxe application..."),this.loadHaxeApp()):setTimeout(()=>this.waitForReactApp(),300)}loadHaxeApp(){console.log(`Attempting to load playground.js (attempt ${this.retryCount+1}/${this.maxRetries+1})`);const n=setTimeout(()=>{console.error("Timeout loading playground.js"),this.handleLoadError()},this.timeout);Fs("playground.js",{success:()=>{clearTimeout(n),console.log("playground.js loaded successfully"),this.isLoaded=!0,this.waitForHaxeApp()},error:t=>{clearTimeout(n),console.error("Failed to load playground.js:",t),this.handleLoadError()}})}handleLoadError(){this.retryCount++,this.retryCount<=this.maxRetries?(console.log(`Retrying in ${this.retryDelay}ms... (${this.retryCount}/${this.maxRetries})`),setTimeout(()=>{this.loadHaxeApp()},this.retryDelay)):(console.error(`Failed to load playground.js after ${this.maxRetries} retries`),this.showErrorUI())}showErrorUI(){const n=document.createElement("div");n.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #dc2626;
      color: white;
      padding: 20px;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      z-index: 10000;
      text-align: center;
      max-width: 400px;
    `,n.innerHTML=`
      <h3>⚠️ Loading Error</h3>
      <p>Failed to load playground.js after ${this.maxRetries} attempts.</p>
      <p>Please check if the Haxe build completed successfully.</p>
      <button onclick="location.reload()" style="
        background: #ef4444;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
      ">Retry</button>
    `,document.body.appendChild(n)}waitForHaxeApp(){Fs.ready("playground.js",()=>{console.log("playground.js is ready and executed"),this.waitForPlaygroundMain()})}waitForPlaygroundMain(){typeof window.PlaygroundMain<"u"&&window.PlaygroundMain.instance?(console.log("Haxe application initialized successfully"),window.playgroundLoader&&window.playgroundLoader.mainApp===null&&(window.playgroundLoader.mainApp=window.PlaygroundMain.instance)):setTimeout(()=>this.waitForPlaygroundMain(),100)}start(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.waitForReactApp()):this.waitForReactApp()}isScriptLoaded(){return this.isLoaded}getRetryCount(){return this.retryCount}}const ed=new g0({maxRetries:5,retryDelay:2e3,timeout:1e4});ed.start();window.haxeLoader=ed;_l.createRoot(document.getElementById("root")).render(w.jsx(Cn.StrictMode,{children:w.jsx(m0,{})}));
//# sourceMappingURL=index-BZl-fo_-.js.map
