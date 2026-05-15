var bc=Object.defineProperty;var vc=(e,n,t)=>n in e?bc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var tn=(e,n,t)=>vc(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},lr={},as={exports:{}},E={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),yc=Symbol.for("react.portal"),_c=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Pc=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Qo=Symbol.iterator;function Rc(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},is=Object.assign,os={};function pt(e,n,t){this.props=e,this.context=n,this.refs=os,this.updater=t||rs}pt.prototype.isReactComponent={};pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ls(){}ls.prototype=pt.prototype;function Ki(e,n,t){this.props=e,this.context=n,this.refs=os,this.updater=t||rs}var Zi=Ki.prototype=new ls;Zi.constructor=Ki;is(Zi,pt.prototype);Zi.isPureReactComponent=!0;var qo=Array.isArray,ss=Object.prototype.hasOwnProperty,Ji={current:null},cs={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,n,t){var a,r={},i=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)ss.call(n,a)&&!cs.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var d=Array(l),f=0;f<l;f++)d[f]=arguments[f+2];r.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:na,type:e,key:i,ref:o,props:r,_owner:Ji.current}}function Ac(e,n){return{$$typeof:na,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===na}function Ec(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Yo=/\/+/g;function $r(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):n.toString(36)}function ka(e,n,t,a,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case na:case yc:o=!0}}if(o)return o=e,r=r(o),e=a===""?"."+$r(o,0):a,qo(r)?(t="",e!=null&&(t=e.replace(Yo,"$&/")+"/"),ka(r,n,t,"",function(f){return f})):r!=null&&(eo(r)&&(r=Ac(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yo,"$&/")+"/")+e)),n.push(r)),1;if(o=0,a=a===""?".":a+":",qo(e))for(var l=0;l<e.length;l++){i=e[l];var d=a+$r(i,l);o+=ka(i,n,t,d,r)}else if(d=Rc(e),typeof d=="function")for(e=d.call(e),l=0;!(i=e.next()).done;)i=i.value,d=a+$r(i,l++),o+=ka(i,n,t,d,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function la(e,n,t){if(e==null)return e;var a=[],r=0;return ka(e,a,"","",function(i){return n.call(t,i,r++)}),a}function Bc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Ca={transition:null},Dc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:Ji};function us(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:la,forEach:function(e,n,t){la(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return la(e,function(){n++}),n},toArray:function(e){return la(e,function(n){return n})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};E.Component=pt;E.Fragment=_c;E.Profiler=Sc;E.PureComponent=Ki;E.StrictMode=wc;E.Suspense=$c;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dc;E.act=us;E.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=is({},e.props),r=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Ji.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)ss.call(n,d)&&!cs.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var f=0;f<d;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:na,type:e.type,key:r,ref:i,props:a,_owner:o}};E.createContext=function(e){return e={$$typeof:kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fc,_context:e},e.Consumer=e};E.createElement=ds;E.createFactory=function(e){var n=ds.bind(null,e);return n.type=e,n};E.createRef=function(){return{current:null}};E.forwardRef=function(e){return{$$typeof:Cc,render:e}};E.isValidElement=eo;E.lazy=function(e){return{$$typeof:Tc,_payload:{_status:-1,_result:e},_init:Bc}};E.memo=function(e,n){return{$$typeof:Pc,type:e,compare:n===void 0?null:n}};E.startTransition=function(e){var n=Ca.transition;Ca.transition={};try{e()}finally{Ca.transition=n}};E.unstable_act=us;E.useCallback=function(e,n){return ce.current.useCallback(e,n)};E.useContext=function(e){return ce.current.useContext(e)};E.useDebugValue=function(){};E.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};E.useEffect=function(e,n){return ce.current.useEffect(e,n)};E.useId=function(){return ce.current.useId()};E.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};E.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};E.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};E.useMemo=function(e,n){return ce.current.useMemo(e,n)};E.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};E.useRef=function(e){return ce.current.useRef(e)};E.useState=function(e){return ce.current.useState(e)};E.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};E.useTransition=function(){return ce.current.useTransition()};E.version="18.3.1";as.exports=E;var be=as.exports;const Ic=Xi(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=be,zc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),Lc=Object.prototype.hasOwnProperty,Mc=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wc={key:!0,ref:!0,__self:!0,__source:!0};function ps(e,n,t){var a,r={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)Lc.call(n,a)&&!Wc.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:zc,type:e,key:i,ref:o,props:r,_owner:Mc.current}}lr.Fragment=Oc;lr.jsx=ps;lr.jsxs=ps;ts.exports=lr;var D=ts.exports,ni={},fs={exports:{}},we={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,R){var A=k.length;k.push(R);e:for(;0<A;){var O=A-1>>>1,N=k[O];if(0<r(N,R))k[O]=R,k[A]=N,A=O;else break e}}function t(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var R=k[0],A=k.pop();if(A!==R){k[0]=A;e:for(var O=0,N=k.length,Ln=N>>>1;O<Ln;){var te=2*(O+1)-1,je=k[te],Fe=te+1,Ve=k[Fe];if(0>r(je,A))Fe<N&&0>r(Ve,je)?(k[O]=Ve,k[Fe]=A,O=Fe):(k[O]=je,k[te]=A,O=te);else if(Fe<N&&0>r(Ve,A))k[O]=Ve,k[Fe]=A,O=Fe;else break e}}return R}function r(k,R){var A=k.sortIndex-R.sortIndex;return A!==0?A:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var d=[],f=[],b=1,x=null,m=3,w=!1,S=!1,_=!1,P=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(k){for(var R=t(f);R!==null;){if(R.callback===null)a(f);else if(R.startTime<=k)a(f),R.sortIndex=R.expirationTime,n(d,R);else break;R=t(f)}}function p(k){if(_=!1,c(k),!S)if(t(d)!==null)S=!0,gt(h);else{var R=t(f);R!==null&&On(p,R.startTime-k)}}function h(k,R){S=!1,_&&(_=!1,u(y),y=-1),w=!0;var A=m;try{for(c(R),x=t(d);x!==null&&(!(x.expirationTime>R)||k&&!I());){var O=x.callback;if(typeof O=="function"){x.callback=null,m=x.priorityLevel;var N=O(x.expirationTime<=R);R=e.unstable_now(),typeof N=="function"?x.callback=N:x===t(d)&&a(d),c(R)}else a(d);x=t(d)}if(x!==null)var Ln=!0;else{var te=t(f);te!==null&&On(p,te.startTime-R),Ln=!1}return Ln}finally{x=null,m=A,w=!1}}var g=!1,v=null,y=-1,C=5,T=-1;function I(){return!(e.unstable_now()-T<C)}function ue(){if(v!==null){var k=e.unstable_now();T=k;var R=!0;try{R=v(!0,k)}finally{R?nn():(g=!1,v=null)}}else g=!1}var nn;if(typeof s=="function")nn=function(){s(ue)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Sr=ht.port2;ht.port1.onmessage=ue,nn=function(){Sr.postMessage(null)}}else nn=function(){P(ue,0)};function gt(k){v=k,g||(g=!0,nn())}function On(k,R){y=P(function(){k(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,gt(h))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(k){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var A=m;m=R;try{return k()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var A=m;m=k;try{return R()}finally{m=A}},e.unstable_scheduleCallback=function(k,R,A){var O=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?O+A:O):A=O,k){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=A+N,k={id:b++,callback:R,priorityLevel:k,startTime:A,expirationTime:N,sortIndex:-1},A>O?(k.sortIndex=A,n(f,k),t(d)===null&&k===t(f)&&(_?(u(y),y=-1):_=!0,On(p,A-O))):(k.sortIndex=N,n(d,k),S||w||(S=!0,gt(h))),k},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(k){var R=m;return function(){var A=m;m=R;try{return k.apply(this,arguments)}finally{m=A}}}})(hs);ms.exports=hs;var Hc=ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=be,_e=Hc;function F(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gs=new Set,Ot={};function Nn(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(Ot[e]=n,e=0;e<n.length;e++)gs.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,Vc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Ko={};function Gc(e){return ti.call(Ko,e)?!0:ti.call(Xo,e)?!1:Vc.test(e)?Ko[e]=!0:(Xo[e]=!0,!1)}function Uc(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,n,t,a){if(n===null||typeof n>"u"||Uc(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,a,r,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var no=/[\-:]([a-z])/g;function to(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(no,to);ne[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(no,to);ne[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(no,to);ne[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ao(e,n,t,a){var r=ne.hasOwnProperty(n)?ne[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Qc(n,t,r,a)&&(t=null),a||r===null?Gc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var en=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),ro=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),bs=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),oo=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Zo=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Pr;function kt(e){if(Pr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Pr=n&&n[1]||""}return`
`+Pr+e}var Tr=!1;function Rr(e,n){if(!e||Tr)return"";Tr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var a=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){a=f}e.call(n.prototype)}else{try{throw Error()}catch(f){a=f}e()}}catch(f){if(f&&a&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),i=a.stack.split(`
`),o=r.length-1,l=i.length-1;1<=o&&0<=l&&r[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==i[l]){var d=`
`+r[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=l);break}}}finally{Tr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kt(e):""}function qc(e){switch(e.tag){case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 2:case 15:return e=Rr(e.type,!1),e;case 11:return e=Rr(e.type.render,!1),e;case 1:return e=Rr(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Wn:return"Portal";case ai:return"Profiler";case ro:return"StrictMode";case ri:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bs:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case io:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oo:return n=e.displayName||null,n!==null?n:oi(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return oi(e(n))}catch{}}return null}function Yc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(n);case 8:return n===ro?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xc(e){var n=ys(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ca(e){e._valueTracker||(e._valueTracker=Xc(e))}function _s(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=ys(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Jo(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ws(e,n){n=n.checked,n!=null&&ao(e,"checked",n,!1)}function si(e,n){ws(e,n);var t=vn(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ci(e,n.type,t):n.hasOwnProperty("defaultValue")&&ci(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function el(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ci(e,n,t){(n!=="number"||za(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ct=Array.isArray;function Jn(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function di(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(F(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(F(92));if(Ct(t)){if(1<t.length)throw Error(F(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function Ss(e,n){var t=vn(n.value),a=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function tl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ui(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Fs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){Kc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tt[n]=Tt[e]})});function Cs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+n).trim():n+"px"}function $s(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=Cs(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var Zc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pi(e,n){if(n){if(Zc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(F(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(F(61))}if(n.style!=null&&typeof n.style!="object")throw Error(F(62))}}function fi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,et=null,nt=null;function al(e){if(e=ra(e)){if(typeof hi!="function")throw Error(F(280));var n=e.stateNode;n&&(n=pr(n),hi(e.stateNode,e.type,n))}}function Ps(e){et?nt?nt.push(e):nt=[e]:et=e}function Ts(){if(et){var e=et,n=nt;if(nt=et=null,al(e),n)for(e=0;e<n.length;e++)al(n[e])}}function Rs(e,n){return e(n)}function As(){}var Ar=!1;function Es(e,n,t){if(Ar)return e(n,t);Ar=!0;try{return Rs(e,n,t)}finally{Ar=!1,(et!==null||nt!==null)&&(As(),Ts())}}function Mt(e,n){var t=e.stateNode;if(t===null)return null;var a=pr(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(F(231,n,typeof t));return t}var gi=!1;if(Xe)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){gi=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{gi=!1}function Jc(e,n,t,a,r,i,o,l,d){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(b){this.onError(b)}}var Rt=!1,Oa=null,La=!1,xi=null,ed={onError:function(e){Rt=!0,Oa=e}};function nd(e,n,t,a,r,i,o,l,d){Rt=!1,Oa=null,Jc.apply(ed,arguments)}function td(e,n,t,a,r,i,o,l,d){if(nd.apply(this,arguments),Rt){if(Rt){var f=Oa;Rt=!1,Oa=null}else throw Error(F(198));La||(La=!0,xi=f)}}function zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Bs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rl(e){if(zn(e)!==e)throw Error(F(188))}function ad(e){var n=e.alternate;if(!n){if(n=zn(e),n===null)throw Error(F(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return rl(r),e;if(i===a)return rl(r),n;i=i.sibling}throw Error(F(188))}if(t.return!==a.return)t=r,a=i;else{for(var o=!1,l=r.child;l;){if(l===t){o=!0,t=r,a=i;break}if(l===a){o=!0,a=r,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,a=r;break}if(l===a){o=!0,a=i,t=r;break}l=l.sibling}if(!o)throw Error(F(189))}}if(t.alternate!==a)throw Error(F(190))}if(t.tag!==3)throw Error(F(188));return t.stateNode.current===t?e:n}function Ds(e){return e=ad(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Is(e);if(n!==null)return n;e=e.sibling}return null}var Ns=_e.unstable_scheduleCallback,il=_e.unstable_cancelCallback,rd=_e.unstable_shouldYield,id=_e.unstable_requestPaint,Q=_e.unstable_now,od=_e.unstable_getCurrentPriorityLevel,so=_e.unstable_ImmediatePriority,zs=_e.unstable_UserBlockingPriority,Ma=_e.unstable_NormalPriority,ld=_e.unstable_LowPriority,Os=_e.unstable_IdlePriority,sr=null,We=null;function sd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(sr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ud,cd=Math.log,dd=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(cd(e)/dd|0)|0}var ua=64,pa=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~r;l!==0?a=$t(l):(i&=o,i!==0&&(a=$t(i)))}else o=t&~r,o!==0?a=$t(o):i!==0&&(a=$t(i));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-Ie(n),r=1<<t,a|=e[t],n&=~r;return a}function pd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),l=1<<o,d=r[o];d===-1?(!(l&t)||l&a)&&(r[o]=pd(l,n)):d<=n&&(e.expiredLanes|=l),i&=~l}}function bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=ua;return ua<<=1,!(ua&4194240)&&(ua=64),e}function Er(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ta(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ie(n),e[n]=t}function md(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ie(t),i=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~i}}function co(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-Ie(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var z=0;function Ms(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ws,uo,Hs,js,Vs,vi=!1,fa=[],un=null,pn=null,fn=null,Wt=new Map,Ht=new Map,ln=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ol(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(n.pointerId)}}function vt(e,n,t,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},n!==null&&(n=ra(n),n!==null&&uo(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function gd(e,n,t,a,r){switch(n){case"focusin":return un=vt(un,e,n,t,a,r),!0;case"dragenter":return pn=vt(pn,e,n,t,a,r),!0;case"mouseover":return fn=vt(fn,e,n,t,a,r),!0;case"pointerover":var i=r.pointerId;return Wt.set(i,vt(Wt.get(i)||null,e,n,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,Ht.set(i,vt(Ht.get(i)||null,e,n,t,a,r)),!0}return!1}function Gs(e){var n=Cn(e.target);if(n!==null){var t=zn(n);if(t!==null){if(n=t.tag,n===13){if(n=Bs(t),n!==null){e.blockedOn=n,Vs(e.priority,function(){Hs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $a(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=yi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);mi=a,t.target.dispatchEvent(a),mi=null}else return n=ra(t),n!==null&&uo(n),e.blockedOn=t,!1;n.shift()}return!0}function ll(e,n,t){$a(e)&&t.delete(n)}function xd(){vi=!1,un!==null&&$a(un)&&(un=null),pn!==null&&$a(pn)&&(pn=null),fn!==null&&$a(fn)&&(fn=null),Wt.forEach(ll),Ht.forEach(ll)}function yt(e,n){e.blockedOn===n&&(e.blockedOn=null,vi||(vi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,xd)))}function jt(e){function n(r){return yt(r,e)}if(0<fa.length){yt(fa[0],e);for(var t=1;t<fa.length;t++){var a=fa[t];a.blockedOn===e&&(a.blockedOn=null)}}for(un!==null&&yt(un,e),pn!==null&&yt(pn,e),fn!==null&&yt(fn,e),Wt.forEach(n),Ht.forEach(n),t=0;t<ln.length;t++)a=ln[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Gs(t),t.blockedOn===null&&ln.shift()}var tt=en.ReactCurrentBatchConfig,Ha=!0;function bd(e,n,t,a){var r=z,i=tt.transition;tt.transition=null;try{z=1,po(e,n,t,a)}finally{z=r,tt.transition=i}}function vd(e,n,t,a){var r=z,i=tt.transition;tt.transition=null;try{z=4,po(e,n,t,a)}finally{z=r,tt.transition=i}}function po(e,n,t,a){if(Ha){var r=yi(e,n,t,a);if(r===null)Hr(e,n,a,ja,t),ol(e,a);else if(gd(r,e,n,t,a))a.stopPropagation();else if(ol(e,a),n&4&&-1<hd.indexOf(e)){for(;r!==null;){var i=ra(r);if(i!==null&&Ws(i),i=yi(e,n,t,a),i===null&&Hr(e,n,a,ja,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else Hr(e,n,a,null,t)}}var ja=null;function yi(e,n,t,a){if(ja=null,e=lo(a),e=Cn(e),e!==null)if(n=zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Bs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ja=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case so:return 1;case zs:return 4;case Ma:case ld:return 16;case Os:return 536870912;default:return 16}default:return 16}}var cn=null,fo=null,Pa=null;function Qs(){if(Pa)return Pa;var e,n=fo,t=n.length,a,r="value"in cn?cn.value:cn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===r[i-a];a++);return Pa=r.slice(e,1<a?1-a:void 0)}function Ta(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ma(){return!0}function sl(){return!1}function Se(e){function n(t,a,r,i,o){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ma:sl,this.isPropagationStopped=sl,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),n}var ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Se(ft),aa=G({},ft,{view:0,detail:0}),yd=Se(aa),Br,Dr,_t,cr=G({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_t&&(_t&&e.type==="mousemove"?(Br=e.screenX-_t.screenX,Dr=e.screenY-_t.screenY):Dr=Br=0,_t=e),Br)},movementY:function(e){return"movementY"in e?e.movementY:Dr}}),cl=Se(cr),_d=G({},cr,{dataTransfer:0}),wd=Se(_d),Sd=G({},aa,{relatedTarget:0}),Ir=Se(Sd),Fd=G({},ft,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Se(Fd),Cd=G({},ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Se(Cd),Pd=G({},ft,{data:0}),dl=Se(Pd),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ed(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ad[e])?!!n[e]:!1}function ho(){return Ed}var Bd=G({},aa,{key:function(e){if(e.key){var n=Td[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Se(Bd),Id=G({},cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=Se(Id),Nd=G({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),zd=Se(Nd),Od=G({},ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=Se(Od),Md=G({},cr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=Se(Md),Hd=[9,13,27,32],go=Xe&&"CompositionEvent"in window,At=null;Xe&&"documentMode"in document&&(At=document.documentMode);var jd=Xe&&"TextEvent"in window&&!At,qs=Xe&&(!go||At&&8<At&&11>=At),pl=" ",fl=!1;function Ys(e,n){switch(e){case"keyup":return Hd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Vd(e,n){switch(e){case"compositionend":return Xs(n);case"keypress":return n.which!==32?null:(fl=!0,pl);case"textInput":return e=n.data,e===pl&&fl?null:e;default:return null}}function Gd(e,n){if(jn)return e==="compositionend"||!go&&Ys(e,n)?(e=Qs(),Pa=fo=cn=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qs&&n.locale!=="ko"?null:n.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ud[e.type]:n==="textarea"}function Ks(e,n,t,a){Ps(a),n=Va(n,"onChange"),0<n.length&&(t=new mo("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Et=null,Vt=null;function Qd(e){s0(e,0)}function dr(e){var n=Un(e);if(_s(n))return e}function qd(e,n){if(e==="change")return n}var Zs=!1;if(Xe){var Nr;if(Xe){var zr="oninput"in document;if(!zr){var hl=document.createElement("div");hl.setAttribute("oninput","return;"),zr=typeof hl.oninput=="function"}Nr=zr}else Nr=!1;Zs=Nr&&(!document.documentMode||9<document.documentMode)}function gl(){Et&&(Et.detachEvent("onpropertychange",Js),Vt=Et=null)}function Js(e){if(e.propertyName==="value"&&dr(Vt)){var n=[];Ks(n,Vt,e,lo(e)),Es(Qd,n)}}function Yd(e,n,t){e==="focusin"?(gl(),Et=n,Vt=t,Et.attachEvent("onpropertychange",Js)):e==="focusout"&&gl()}function Xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dr(Vt)}function Kd(e,n){if(e==="click")return dr(n)}function Zd(e,n){if(e==="input"||e==="change")return dr(n)}function Jd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ze=typeof Object.is=="function"?Object.is:Jd;function Gt(e,n){if(ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ti.call(n,r)||!ze(e[r],n[r]))return!1}return!0}function xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bl(e,n){var t=xl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xl(t)}}function e0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?e0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function n0(){for(var e=window,n=za();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=za(e.document)}return n}function xo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function eu(e){var n=n0(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&e0(t.ownerDocument.documentElement,t)){if(a!==null&&xo(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=bl(t,i);var o=bl(t,a);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nu=Xe&&"documentMode"in document&&11>=document.documentMode,Vn=null,_i=null,Bt=null,wi=!1;function vl(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wi||Vn==null||Vn!==za(a)||(a=Vn,"selectionStart"in a&&xo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Bt&&Gt(Bt,a)||(Bt=a,a=Va(_i,"onSelect"),0<a.length&&(n=new mo("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Vn)))}function ha(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gn={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Or={},t0={};Xe&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function ur(e){if(Or[e])return Or[e];if(!Gn[e])return e;var n=Gn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in t0)return Or[e]=n[t];return e}var a0=ur("animationend"),r0=ur("animationiteration"),i0=ur("animationstart"),o0=ur("transitionend"),l0=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,n){l0.set(e,n),Nn(n,[e])}for(var Lr=0;Lr<yl.length;Lr++){var Mr=yl[Lr],tu=Mr.toLowerCase(),au=Mr[0].toUpperCase()+Mr.slice(1);_n(tu,"on"+au)}_n(a0,"onAnimationEnd");_n(r0,"onAnimationIteration");_n(i0,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(o0,"onTransitionEnd");it("onMouseEnter",["mouseout","mouseover"]);it("onMouseLeave",["mouseout","mouseover"]);it("onPointerEnter",["pointerout","pointerover"]);it("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ru=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pt));function _l(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,td(a,n,void 0,e),e.currentTarget=null}function s0(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var o=a.length-1;0<=o;o--){var l=a[o],d=l.instance,f=l.currentTarget;if(l=l.listener,d!==i&&r.isPropagationStopped())break e;_l(r,l,f),i=d}else for(o=0;o<a.length;o++){if(l=a[o],d=l.instance,f=l.currentTarget,l=l.listener,d!==i&&r.isPropagationStopped())break e;_l(r,l,f),i=d}}}if(La)throw e=xi,La=!1,xi=null,e}function M(e,n){var t=n[$i];t===void 0&&(t=n[$i]=new Set);var a=e+"__bubble";t.has(a)||(c0(n,e,2,!1),t.add(a))}function Wr(e,n,t){var a=0;n&&(a|=4),c0(t,e,a,n)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[ga]){e[ga]=!0,gs.forEach(function(t){t!=="selectionchange"&&(ru.has(t)||Wr(t,!1,e),Wr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ga]||(n[ga]=!0,Wr("selectionchange",!1,n))}}function c0(e,n,t,a){switch(Us(n)){case 1:var r=bd;break;case 4:r=vd;break;default:r=po}t=r.bind(null,n,t,e),r=void 0,!gi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Hr(e,n,t,a,r){var i=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Cn(l),o===null)return;if(d=o.tag,d===5||d===6){a=i=o;continue e}l=l.parentNode}}a=a.return}Es(function(){var f=i,b=lo(t),x=[];e:{var m=l0.get(e);if(m!==void 0){var w=mo,S=e;switch(e){case"keypress":if(Ta(t)===0)break e;case"keydown":case"keyup":w=Dd;break;case"focusin":S="focus",w=Ir;break;case"focusout":S="blur",w=Ir;break;case"beforeblur":case"afterblur":w=Ir;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=zd;break;case a0:case r0:case i0:w=kd;break;case o0:w=Ld;break;case"scroll":w=yd;break;case"wheel":w=Wd;break;case"copy":case"cut":case"paste":w=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ul}var _=(n&4)!==0,P=!_&&e==="scroll",u=_?m!==null?m+"Capture":null:m;_=[];for(var s=f,c;s!==null;){c=s;var p=c.stateNode;if(c.tag===5&&p!==null&&(c=p,u!==null&&(p=Mt(s,u),p!=null&&_.push(Qt(s,p,c)))),P)break;s=s.return}0<_.length&&(m=new w(m,S,null,t,b),x.push({event:m,listeners:_}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==mi&&(S=t.relatedTarget||t.fromElement)&&(Cn(S)||S[Ke]))break e;if((w||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=t.relatedTarget||t.toElement,w=f,S=S?Cn(S):null,S!==null&&(P=zn(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=f),w!==S)){if(_=cl,p="onMouseLeave",u="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=ul,p="onPointerLeave",u="onPointerEnter",s="pointer"),P=w==null?m:Un(w),c=S==null?m:Un(S),m=new _(p,s+"leave",w,t,b),m.target=P,m.relatedTarget=c,p=null,Cn(b)===f&&(_=new _(u,s+"enter",S,t,b),_.target=c,_.relatedTarget=P,p=_),P=p,w&&S)n:{for(_=w,u=S,s=0,c=_;c;c=Mn(c))s++;for(c=0,p=u;p;p=Mn(p))c++;for(;0<s-c;)_=Mn(_),s--;for(;0<c-s;)u=Mn(u),c--;for(;s--;){if(_===u||u!==null&&_===u.alternate)break n;_=Mn(_),u=Mn(u)}_=null}else _=null;w!==null&&wl(x,m,w,_,!1),S!==null&&P!==null&&wl(x,P,S,_,!0)}}e:{if(m=f?Un(f):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var h=qd;else if(ml(m))if(Zs)h=Zd;else{h=Xd;var g=Yd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(h=Kd);if(h&&(h=h(e,f))){Ks(x,h,t,b);break e}g&&g(e,m,f),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&ci(m,"number",m.value)}switch(g=f?Un(f):window,e){case"focusin":(ml(g)||g.contentEditable==="true")&&(Vn=g,_i=f,Bt=null);break;case"focusout":Bt=_i=Vn=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,vl(x,t,b);break;case"selectionchange":if(nu)break;case"keydown":case"keyup":vl(x,t,b)}var v;if(go)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else jn?Ys(e,t)&&(y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(qs&&t.locale!=="ko"&&(jn||y!=="onCompositionStart"?y==="onCompositionEnd"&&jn&&(v=Qs()):(cn=b,fo="value"in cn?cn.value:cn.textContent,jn=!0)),g=Va(f,y),0<g.length&&(y=new dl(y,e,null,t,b),x.push({event:y,listeners:g}),v?y.data=v:(v=Xs(t),v!==null&&(y.data=v)))),(v=jd?Vd(e,t):Gd(e,t))&&(f=Va(f,"onBeforeInput"),0<f.length&&(b=new dl("onBeforeInput","beforeinput",null,t,b),x.push({event:b,listeners:f}),b.data=v))}s0(x,n)})}function Qt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Va(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Mt(e,t),i!=null&&a.unshift(Qt(e,i,r)),i=Mt(e,n),i!=null&&a.push(Qt(e,i,r))),e=e.return}return a}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wl(e,n,t,a,r){for(var i=n._reactName,o=[];t!==null&&t!==a;){var l=t,d=l.alternate,f=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&f!==null&&(l=f,r?(d=Mt(t,i),d!=null&&o.unshift(Qt(t,d,l))):r||(d=Mt(t,i),d!=null&&o.push(Qt(t,d,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var iu=/\r\n?/g,ou=/\u0000|\uFFFD/g;function Sl(e){return(typeof e=="string"?e:""+e).replace(iu,`
`).replace(ou,"")}function xa(e,n,t){if(n=Sl(n),Sl(e)!==n&&t)throw Error(F(425))}function Ga(){}var Si=null,Fi=null;function ki(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,lu=typeof clearTimeout=="function"?clearTimeout:void 0,Fl=typeof Promise=="function"?Promise:void 0,su=typeof queueMicrotask=="function"?queueMicrotask:typeof Fl<"u"?function(e){return Fl.resolve(null).then(e).catch(cu)}:Ci;function cu(e){setTimeout(function(){throw e})}function jr(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),jt(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);jt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function kl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var mt=Math.random().toString(36).slice(2),Me="__reactFiber$"+mt,qt="__reactProps$"+mt,Ke="__reactContainer$"+mt,$i="__reactEvents$"+mt,du="__reactListeners$"+mt,uu="__reactHandles$"+mt;function Cn(e){var n=e[Me];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Me]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=kl(e);e!==null;){if(t=e[Me])return t;e=kl(e)}return n}e=t,t=e.parentNode}return null}function ra(e){return e=e[Me]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function pr(e){return e[qt]||null}var Pi=[],Qn=-1;function wn(e){return{current:e}}function W(e){0>Qn||(e.current=Pi[Qn],Pi[Qn]=null,Qn--)}function L(e,n){Qn++,Pi[Qn]=e.current,e.current=n}var yn={},oe=wn(yn),me=wn(!1),An=yn;function ot(e,n){var t=e.type.contextTypes;if(!t)return yn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function he(e){return e=e.childContextTypes,e!=null}function Ua(){W(me),W(oe)}function Cl(e,n,t){if(oe.current!==yn)throw Error(F(168));L(oe,n),L(me,t)}function d0(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(F(108,Yc(e)||"Unknown",r));return G({},t,a)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,An=oe.current,L(oe,e),L(me,me.current),!0}function $l(e,n,t){var a=e.stateNode;if(!a)throw Error(F(169));t?(e=d0(e,n,An),a.__reactInternalMemoizedMergedChildContext=e,W(me),W(oe),L(oe,e)):W(me),L(me,t)}var Ue=null,fr=!1,Vr=!1;function u0(e){Ue===null?Ue=[e]:Ue.push(e)}function pu(e){fr=!0,u0(e)}function Sn(){if(!Vr&&Ue!==null){Vr=!0;var e=0,n=z;try{var t=Ue;for(z=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Ue=null,fr=!1}catch(r){throw Ue!==null&&(Ue=Ue.slice(e+1)),Ns(so,Sn),r}finally{z=n,Vr=!1}}return null}var qn=[],Yn=0,qa=null,Ya=0,ke=[],Ce=0,En=null,Qe=1,qe="";function Fn(e,n){qn[Yn++]=Ya,qn[Yn++]=qa,qa=e,Ya=n}function p0(e,n,t){ke[Ce++]=Qe,ke[Ce++]=qe,ke[Ce++]=En,En=e;var a=Qe;e=qe;var r=32-Ie(a)-1;a&=~(1<<r),t+=1;var i=32-Ie(n)+r;if(30<i){var o=r-r%5;i=(a&(1<<o)-1).toString(32),a>>=o,r-=o,Qe=1<<32-Ie(n)+r|t<<r|a,qe=i+e}else Qe=1<<i|t<<r|a,qe=e}function bo(e){e.return!==null&&(Fn(e,1),p0(e,1,0))}function vo(e){for(;e===qa;)qa=qn[--Yn],qn[Yn]=null,Ya=qn[--Yn],qn[Yn]=null;for(;e===En;)En=ke[--Ce],ke[Ce]=null,qe=ke[--Ce],ke[Ce]=null,Qe=ke[--Ce],ke[Ce]=null}var ye=null,ve=null,H=!1,De=null;function f0(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Pl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=En!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if(H){var n=ve;if(n){var t=n;if(!Pl(e,n)){if(Ti(e))throw Error(F(418));n=mn(t.nextSibling);var a=ye;n&&Pl(e,n)?f0(a,t):(e.flags=e.flags&-4097|2,H=!1,ye=e)}}else{if(Ti(e))throw Error(F(418));e.flags=e.flags&-4097|2,H=!1,ye=e}}}function Tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function ba(e){if(e!==ye)return!1;if(!H)return Tl(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ki(e.type,e.memoizedProps)),n&&(n=ve)){if(Ti(e))throw m0(),Error(F(418));for(;n;)f0(e,n),n=mn(n.nextSibling)}if(Tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?mn(e.stateNode.nextSibling):null;return!0}function m0(){for(var e=ve;e;)e=mn(e.nextSibling)}function lt(){ve=ye=null,H=!1}function yo(e){De===null?De=[e]:De.push(e)}var fu=en.ReactCurrentBatchConfig;function wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(F(309));var a=t.stateNode}if(!a)throw Error(F(147,e));var r=a,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=r.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(F(284));if(!t._owner)throw Error(F(290,e))}return e}function va(e,n){throw e=Object.prototype.toString.call(n),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Rl(e){var n=e._init;return n(e._payload)}function h0(e){function n(u,s){if(e){var c=u.deletions;c===null?(u.deletions=[s],u.flags|=16):c.push(s)}}function t(u,s){if(!e)return null;for(;s!==null;)n(u,s),s=s.sibling;return null}function a(u,s){for(u=new Map;s!==null;)s.key!==null?u.set(s.key,s):u.set(s.index,s),s=s.sibling;return u}function r(u,s){return u=bn(u,s),u.index=0,u.sibling=null,u}function i(u,s,c){return u.index=c,e?(c=u.alternate,c!==null?(c=c.index,c<s?(u.flags|=2,s):c):(u.flags|=2,s)):(u.flags|=1048576,s)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,s,c,p){return s===null||s.tag!==6?(s=Kr(c,u.mode,p),s.return=u,s):(s=r(s,c),s.return=u,s)}function d(u,s,c,p){var h=c.type;return h===Hn?b(u,s,c.props.children,p,c.key):s!==null&&(s.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===rn&&Rl(h)===s.type)?(p=r(s,c.props),p.ref=wt(u,s,c),p.return=u,p):(p=Na(c.type,c.key,c.props,null,u.mode,p),p.ref=wt(u,s,c),p.return=u,p)}function f(u,s,c,p){return s===null||s.tag!==4||s.stateNode.containerInfo!==c.containerInfo||s.stateNode.implementation!==c.implementation?(s=Zr(c,u.mode,p),s.return=u,s):(s=r(s,c.children||[]),s.return=u,s)}function b(u,s,c,p,h){return s===null||s.tag!==7?(s=Rn(c,u.mode,p,h),s.return=u,s):(s=r(s,c),s.return=u,s)}function x(u,s,c){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Kr(""+s,u.mode,c),s.return=u,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case sa:return c=Na(s.type,s.key,s.props,null,u.mode,c),c.ref=wt(u,null,s),c.return=u,c;case Wn:return s=Zr(s,u.mode,c),s.return=u,s;case rn:var p=s._init;return x(u,p(s._payload),c)}if(Ct(s)||xt(s))return s=Rn(s,u.mode,c,null),s.return=u,s;va(u,s)}return null}function m(u,s,c,p){var h=s!==null?s.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return h!==null?null:l(u,s,""+c,p);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case sa:return c.key===h?d(u,s,c,p):null;case Wn:return c.key===h?f(u,s,c,p):null;case rn:return h=c._init,m(u,s,h(c._payload),p)}if(Ct(c)||xt(c))return h!==null?null:b(u,s,c,p,null);va(u,c)}return null}function w(u,s,c,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return u=u.get(c)||null,l(s,u,""+p,h);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sa:return u=u.get(p.key===null?c:p.key)||null,d(s,u,p,h);case Wn:return u=u.get(p.key===null?c:p.key)||null,f(s,u,p,h);case rn:var g=p._init;return w(u,s,c,g(p._payload),h)}if(Ct(p)||xt(p))return u=u.get(c)||null,b(s,u,p,h,null);va(s,p)}return null}function S(u,s,c,p){for(var h=null,g=null,v=s,y=s=0,C=null;v!==null&&y<c.length;y++){v.index>y?(C=v,v=null):C=v.sibling;var T=m(u,v,c[y],p);if(T===null){v===null&&(v=C);break}e&&v&&T.alternate===null&&n(u,v),s=i(T,s,y),g===null?h=T:g.sibling=T,g=T,v=C}if(y===c.length)return t(u,v),H&&Fn(u,y),h;if(v===null){for(;y<c.length;y++)v=x(u,c[y],p),v!==null&&(s=i(v,s,y),g===null?h=v:g.sibling=v,g=v);return H&&Fn(u,y),h}for(v=a(u,v);y<c.length;y++)C=w(v,u,y,c[y],p),C!==null&&(e&&C.alternate!==null&&v.delete(C.key===null?y:C.key),s=i(C,s,y),g===null?h=C:g.sibling=C,g=C);return e&&v.forEach(function(I){return n(u,I)}),H&&Fn(u,y),h}function _(u,s,c,p){var h=xt(c);if(typeof h!="function")throw Error(F(150));if(c=h.call(c),c==null)throw Error(F(151));for(var g=h=null,v=s,y=s=0,C=null,T=c.next();v!==null&&!T.done;y++,T=c.next()){v.index>y?(C=v,v=null):C=v.sibling;var I=m(u,v,T.value,p);if(I===null){v===null&&(v=C);break}e&&v&&I.alternate===null&&n(u,v),s=i(I,s,y),g===null?h=I:g.sibling=I,g=I,v=C}if(T.done)return t(u,v),H&&Fn(u,y),h;if(v===null){for(;!T.done;y++,T=c.next())T=x(u,T.value,p),T!==null&&(s=i(T,s,y),g===null?h=T:g.sibling=T,g=T);return H&&Fn(u,y),h}for(v=a(u,v);!T.done;y++,T=c.next())T=w(v,u,y,T.value,p),T!==null&&(e&&T.alternate!==null&&v.delete(T.key===null?y:T.key),s=i(T,s,y),g===null?h=T:g.sibling=T,g=T);return e&&v.forEach(function(ue){return n(u,ue)}),H&&Fn(u,y),h}function P(u,s,c,p){if(typeof c=="object"&&c!==null&&c.type===Hn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case sa:e:{for(var h=c.key,g=s;g!==null;){if(g.key===h){if(h=c.type,h===Hn){if(g.tag===7){t(u,g.sibling),s=r(g,c.props.children),s.return=u,u=s;break e}}else if(g.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===rn&&Rl(h)===g.type){t(u,g.sibling),s=r(g,c.props),s.ref=wt(u,g,c),s.return=u,u=s;break e}t(u,g);break}else n(u,g);g=g.sibling}c.type===Hn?(s=Rn(c.props.children,u.mode,p,c.key),s.return=u,u=s):(p=Na(c.type,c.key,c.props,null,u.mode,p),p.ref=wt(u,s,c),p.return=u,u=p)}return o(u);case Wn:e:{for(g=c.key;s!==null;){if(s.key===g)if(s.tag===4&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){t(u,s.sibling),s=r(s,c.children||[]),s.return=u,u=s;break e}else{t(u,s);break}else n(u,s);s=s.sibling}s=Zr(c,u.mode,p),s.return=u,u=s}return o(u);case rn:return g=c._init,P(u,s,g(c._payload),p)}if(Ct(c))return S(u,s,c,p);if(xt(c))return _(u,s,c,p);va(u,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,s!==null&&s.tag===6?(t(u,s.sibling),s=r(s,c),s.return=u,u=s):(t(u,s),s=Kr(c,u.mode,p),s.return=u,u=s),o(u)):t(u,s)}return P}var st=h0(!0),g0=h0(!1),Xa=wn(null),Ka=null,Xn=null,_o=null;function wo(){_o=Xn=Ka=null}function So(e){var n=Xa.current;W(Xa),e._currentValue=n}function Ai(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function at(e,n){Ka=e,_o=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(Ka===null)throw Error(F(308));Xn=e,Ka.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var $n=null;function Fo(e){$n===null?$n=[e]:$n.push(e)}function x0(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Fo(n)):(t.next=r.next,r.next=t),n.interleaved=t,Ze(e,a)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var on=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,B&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Ze(e,t)}return r=a.interleaved,r===null?(n.next=n,Fo(a)):(n.next=r.next,r.next=n),a.interleaved=n,Ze(e,t)}function Ra(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,co(e,t)}}function Al(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Za(e,n,t,a){var r=e.updateQueue;on=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,f=d.next;d.next=null,o===null?i=f:o.next=f,o=d;var b=e.alternate;b!==null&&(b=b.updateQueue,l=b.lastBaseUpdate,l!==o&&(l===null?b.firstBaseUpdate=f:l.next=f,b.lastBaseUpdate=d))}if(i!==null){var x=r.baseState;o=0,b=f=d=null,l=i;do{var m=l.lane,w=l.eventTime;if((a&m)===m){b!==null&&(b=b.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,_=l;switch(m=n,w=t,_.tag){case 1:if(S=_.payload,typeof S=="function"){x=S.call(w,x,m);break e}x=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=_.payload,m=typeof S=="function"?S.call(w,x,m):S,m==null)break e;x=G({},x,m);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},b===null?(f=b=w,d=x):b=b.next=w,o|=m;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;m=l,l=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(b===null&&(d=x),r.baseState=d,r.firstBaseUpdate=f,r.lastBaseUpdate=b,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Dn|=o,e.lanes=o,e.memoizedState=x}}function El(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(F(191,r));r.call(a)}}}var ia={},He=wn(ia),Yt=wn(ia),Xt=wn(ia);function Pn(e){if(e===ia)throw Error(F(174));return e}function Co(e,n){switch(L(Xt,n),L(Yt,e),L(He,ia),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ui(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ui(n,e)}W(He),L(He,n)}function ct(){W(He),W(Yt),W(Xt)}function v0(e){Pn(Xt.current);var n=Pn(He.current),t=ui(n,e.type);n!==t&&(L(Yt,e),L(He,t))}function $o(e){Yt.current===e&&(W(He),W(Yt))}var j=wn(0);function Ja(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gr=[];function Po(){for(var e=0;e<Gr.length;e++)Gr[e]._workInProgressVersionPrimary=null;Gr.length=0}var Aa=en.ReactCurrentDispatcher,Ur=en.ReactCurrentBatchConfig,Bn=0,V=null,Y=null,K=null,er=!1,Dt=!1,Kt=0,mu=0;function ae(){throw Error(F(321))}function To(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ze(e[t],n[t]))return!1;return!0}function Ro(e,n,t,a,r,i){if(Bn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Aa.current=e===null||e.memoizedState===null?bu:vu,e=t(a,r),Dt){i=0;do{if(Dt=!1,Kt=0,25<=i)throw Error(F(301));i+=1,K=Y=null,n.updateQueue=null,Aa.current=yu,e=t(a,r)}while(Dt)}if(Aa.current=nr,n=Y!==null&&Y.next!==null,Bn=0,K=Y=V=null,er=!1,n)throw Error(F(300));return e}function Ao(){var e=Kt!==0;return Kt=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?V.memoizedState=K=e:K=K.next=e,K}function Re(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=K===null?V.memoizedState:K.next;if(n!==null)K=n,Y=e;else{if(e===null)throw Error(F(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},K===null?V.memoizedState=K=e:K=K.next=e}return K}function Zt(e,n){return typeof n=="function"?n(e):n}function Qr(e){var n=Re(),t=n.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var a=Y,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var l=o=null,d=null,f=i;do{var b=f.lane;if((Bn&b)===b)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),a=f.hasEagerState?f.eagerState:e(a,f.action);else{var x={lane:b,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(l=d=x,o=a):d=d.next=x,V.lanes|=b,Dn|=b}f=f.next}while(f!==null&&f!==i);d===null?o=a:d.next=l,ze(a,n.memoizedState)||(fe=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do i=r.lane,V.lanes|=i,Dn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function qr(e){var n=Re(),t=n.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);ze(i,n.memoizedState)||(fe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function y0(){}function _0(e,n){var t=V,a=Re(),r=n(),i=!ze(a.memoizedState,r);if(i&&(a.memoizedState=r,fe=!0),a=a.queue,Eo(F0.bind(null,t,a,e),[e]),a.getSnapshot!==n||i||K!==null&&K.memoizedState.tag&1){if(t.flags|=2048,Jt(9,S0.bind(null,t,a,r,n),void 0,null),Z===null)throw Error(F(349));Bn&30||w0(t,n,r)}return r}function w0(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function S0(e,n,t,a){n.value=t,n.getSnapshot=a,k0(n)&&C0(e)}function F0(e,n,t){return t(function(){k0(n)&&C0(e)})}function k0(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ze(e,t)}catch{return!0}}function C0(e){var n=Ze(e,1);n!==null&&Ne(n,e,1,-1)}function Bl(e){var n=Le();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},n.queue=e,e=e.dispatch=xu.bind(null,V,e),[n.memoizedState,e]}function Jt(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function $0(){return Re().memoizedState}function Ea(e,n,t,a){var r=Le();V.flags|=e,r.memoizedState=Jt(1|n,t,void 0,a===void 0?null:a)}function mr(e,n,t,a){var r=Re();a=a===void 0?null:a;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,a!==null&&To(a,o.deps)){r.memoizedState=Jt(n,t,i,a);return}}V.flags|=e,r.memoizedState=Jt(1|n,t,i,a)}function Dl(e,n){return Ea(8390656,8,e,n)}function Eo(e,n){return mr(2048,8,e,n)}function P0(e,n){return mr(4,2,e,n)}function T0(e,n){return mr(4,4,e,n)}function R0(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function A0(e,n,t){return t=t!=null?t.concat([e]):null,mr(4,4,R0.bind(null,n,e),t)}function Bo(){}function E0(e,n){var t=Re();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&To(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function B0(e,n){var t=Re();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&To(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function D0(e,n,t){return Bn&21?(ze(t,n)||(t=Ls(),V.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function hu(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var a=Ur.transition;Ur.transition={};try{e(!1),n()}finally{z=t,Ur.transition=a}}function I0(){return Re().memoizedState}function gu(e,n,t){var a=xn(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},N0(e))z0(n,t);else if(t=x0(e,n,t,a),t!==null){var r=se();Ne(t,e,a,r),O0(t,n,a)}}function xu(e,n,t){var a=xn(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(N0(e))z0(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(r.hasEagerState=!0,r.eagerState=l,ze(l,o)){var d=n.interleaved;d===null?(r.next=r,Fo(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=x0(e,n,r,a),t!==null&&(r=se(),Ne(t,e,a,r),O0(t,n,a))}}function N0(e){var n=e.alternate;return e===V||n!==null&&n===V}function z0(e,n){Dt=er=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function O0(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,co(e,t)}}var nr={readContext:Te,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},bu={readContext:Te,useCallback:function(e,n){return Le().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:Dl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ea(4194308,4,R0.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ea(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ea(4,2,e,n)},useMemo:function(e,n){var t=Le();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Le();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=gu.bind(null,V,e),[a.memoizedState,e]},useRef:function(e){var n=Le();return e={current:e},n.memoizedState=e},useState:Bl,useDebugValue:Bo,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=Bl(!1),n=e[0];return e=hu.bind(null,e[1]),Le().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=V,r=Le();if(H){if(t===void 0)throw Error(F(407));t=t()}else{if(t=n(),Z===null)throw Error(F(349));Bn&30||w0(a,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,Dl(F0.bind(null,a,i,e),[e]),a.flags|=2048,Jt(9,S0.bind(null,a,i,t,n),void 0,null),t},useId:function(){var e=Le(),n=Z.identifierPrefix;if(H){var t=qe,a=Qe;t=(a&~(1<<32-Ie(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Kt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=mu++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vu={readContext:Te,useCallback:E0,useContext:Te,useEffect:Eo,useImperativeHandle:A0,useInsertionEffect:P0,useLayoutEffect:T0,useMemo:B0,useReducer:Qr,useRef:$0,useState:function(){return Qr(Zt)},useDebugValue:Bo,useDeferredValue:function(e){var n=Re();return D0(n,Y.memoizedState,e)},useTransition:function(){var e=Qr(Zt)[0],n=Re().memoizedState;return[e,n]},useMutableSource:y0,useSyncExternalStore:_0,useId:I0,unstable_isNewReconciler:!1},yu={readContext:Te,useCallback:E0,useContext:Te,useEffect:Eo,useImperativeHandle:A0,useInsertionEffect:P0,useLayoutEffect:T0,useMemo:B0,useReducer:qr,useRef:$0,useState:function(){return qr(Zt)},useDebugValue:Bo,useDeferredValue:function(e){var n=Re();return Y===null?n.memoizedState=e:D0(n,Y.memoizedState,e)},useTransition:function(){var e=qr(Zt)[0],n=Re().memoizedState;return[e,n]},useMutableSource:y0,useSyncExternalStore:_0,useId:I0,unstable_isNewReconciler:!1};function Ee(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ei(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var hr={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=se(),r=xn(e),i=Ye(a,r);i.payload=n,t!=null&&(i.callback=t),n=hn(e,i,r),n!==null&&(Ne(n,e,r,a),Ra(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=se(),r=xn(e),i=Ye(a,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=hn(e,i,r),n!==null&&(Ne(n,e,r,a),Ra(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),a=xn(e),r=Ye(t,a);r.tag=2,n!=null&&(r.callback=n),n=hn(e,r,a),n!==null&&(Ne(n,e,a,t),Ra(n,e,a))}};function Il(e,n,t,a,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,a)||!Gt(r,i):!0}function L0(e,n,t){var a=!1,r=yn,i=n.contextType;return typeof i=="object"&&i!==null?i=Te(i):(r=he(n)?An:oe.current,a=n.contextTypes,i=(a=a!=null)?ot(e,r):yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=hr,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function Nl(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&hr.enqueueReplaceState(n,n.state,null)}function Bi(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},ko(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Te(i):(i=he(n)?An:oe.current,r.context=ot(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&hr.enqueueReplaceState(r,r.state,null),Za(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function dt(e,n){try{var t="",a=n;do t+=qc(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Yr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Di(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _u=typeof WeakMap=="function"?WeakMap:Map;function M0(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){ar||(ar=!0,Vi=a),Di(e,n)},t}function W0(e,n,t){t=Ye(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Di(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Di(e,n),typeof a!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function zl(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new _u;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=Iu.bind(null,e,n,t),n.then(e,e))}function Ol(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ll(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var wu=en.ReactCurrentOwner,fe=!1;function le(e,n,t,a){n.child=e===null?g0(n,null,t,a):st(n,e.child,t,a)}function Ml(e,n,t,a,r){t=t.render;var i=n.ref;return at(n,r),a=Ro(e,n,t,a,i,r),t=Ao(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Je(e,n,r)):(H&&t&&bo(n),n.flags|=1,le(e,n,a,r),n.child)}function Wl(e,n,t,a,r){if(e===null){var i=t.type;return typeof i=="function"&&!Wo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,H0(e,n,i,a,r)):(e=Na(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(o,a)&&e.ref===n.ref)return Je(e,n,r)}return n.flags|=1,e=bn(i,a),e.ref=n.ref,e.return=n,n.child=e}function H0(e,n,t,a,r){if(e!==null){var i=e.memoizedProps;if(Gt(i,a)&&e.ref===n.ref)if(fe=!1,n.pendingProps=a=i,(e.lanes&r)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Je(e,n,r)}return Ii(e,n,t,a,r)}function j0(e,n,t){var a=n.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Zn,xe),xe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,L(Zn,xe),xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,L(Zn,xe),xe|=a}else i!==null?(a=i.baseLanes|t,n.memoizedState=null):a=t,L(Zn,xe),xe|=a;return le(e,n,r,t),n.child}function V0(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ii(e,n,t,a,r){var i=he(t)?An:oe.current;return i=ot(n,i),at(n,r),t=Ro(e,n,t,a,i,r),a=Ao(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Je(e,n,r)):(H&&a&&bo(n),n.flags|=1,le(e,n,t,r),n.child)}function Hl(e,n,t,a,r){if(he(t)){var i=!0;Qa(n)}else i=!1;if(at(n,r),n.stateNode===null)Ba(e,n),L0(n,t,a),Bi(n,t,a,r),a=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var d=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=Te(f):(f=he(t)?An:oe.current,f=ot(n,f));var b=t.getDerivedStateFromProps,x=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||d!==f)&&Nl(n,o,a,f),on=!1;var m=n.memoizedState;o.state=m,Za(n,a,o,r),d=n.memoizedState,l!==a||m!==d||me.current||on?(typeof b=="function"&&(Ei(n,t,b,a),d=n.memoizedState),(l=on||Il(n,t,l,a,m,d,f))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),o.props=a,o.state=d,o.context=f,a=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,b0(e,n),l=n.memoizedProps,f=n.type===n.elementType?l:Ee(n.type,l),o.props=f,x=n.pendingProps,m=o.context,d=t.contextType,typeof d=="object"&&d!==null?d=Te(d):(d=he(t)?An:oe.current,d=ot(n,d));var w=t.getDerivedStateFromProps;(b=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==x||m!==d)&&Nl(n,o,a,d),on=!1,m=n.memoizedState,o.state=m,Za(n,a,o,r);var S=n.memoizedState;l!==x||m!==S||me.current||on?(typeof w=="function"&&(Ei(n,t,w,a),S=n.memoizedState),(f=on||Il(n,t,f,a,m,S,d)||!1)?(b||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,S,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,S,d)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=S),o.props=a,o.state=S,o.context=d,a=f):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return Ni(e,n,t,a,i,r)}function Ni(e,n,t,a,r,i){V0(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return r&&$l(n,t,!1),Je(e,n,i);a=n.stateNode,wu.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=st(n,e.child,null,i),n.child=st(n,null,l,i)):le(e,n,l,i),n.memoizedState=a.state,r&&$l(n,t,!0),n.child}function G0(e){var n=e.stateNode;n.pendingContext?Cl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Cl(e,n.context,!1),Co(e,n.containerInfo)}function jl(e,n,t,a,r){return lt(),yo(r),n.flags|=256,le(e,n,t,a),n.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function U0(e,n,t){var a=n.pendingProps,r=j.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),L(j,r&1),e===null)return Ri(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,i?(a=n.mode,i=n.child,o={mode:"hidden",children:o},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=br(o,a,0,null),e=Rn(e,a,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Oi(t),n.memoizedState=zi,e):Do(n,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Su(e,n,o,a,l,r,t);if(i){i=a.fallback,o=n.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:a.children};return!(o&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=bn(r,d),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=bn(l,i):(i=Rn(i,o,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,o=e.child.memoizedState,o=o===null?Oi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=zi,a}return i=e.child,e=i.sibling,a=bn(i,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Do(e,n){return n=br({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ya(e,n,t,a){return a!==null&&yo(a),st(n,e.child,null,t),e=Do(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Su(e,n,t,a,r,i,o){if(t)return n.flags&256?(n.flags&=-257,a=Yr(Error(F(422))),ya(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=a.fallback,r=n.mode,a=br({mode:"visible",children:a.children},r,0,null),i=Rn(i,r,o,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,n.mode&1&&st(n,e.child,null,o),n.child.memoizedState=Oi(o),n.memoizedState=zi,i);if(!(n.mode&1))return ya(e,n,o,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(F(419)),a=Yr(i,a,void 0),ya(e,n,o,a)}if(l=(o&e.childLanes)!==0,fe||l){if(a=Z,a!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|o)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Ze(e,r),Ne(a,e,r,-1))}return Mo(),a=Yr(Error(F(421))),ya(e,n,o,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Nu.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,ve=mn(r.nextSibling),ye=n,H=!0,De=null,e!==null&&(ke[Ce++]=Qe,ke[Ce++]=qe,ke[Ce++]=En,Qe=e.id,qe=e.overflow,En=n),n=Do(n,a.children),n.flags|=4096,n)}function Vl(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Ai(e.return,n,t)}function Xr(e,n,t,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function Q0(e,n,t){var a=n.pendingProps,r=a.revealOrder,i=a.tail;if(le(e,n,a.children,t),a=j.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vl(e,t,n);else if(e.tag===19)Vl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(L(j,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ja(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Xr(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ja(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Xr(n,!0,t,null,i);break;case"together":Xr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ba(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(F(153));if(n.child!==null){for(e=n.child,t=bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fu(e,n,t){switch(n.tag){case 3:G0(n),lt();break;case 5:v0(n);break;case 1:he(n.type)&&Qa(n);break;case 4:Co(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;L(Xa,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(L(j,j.current&1),n.flags|=128,null):t&n.child.childLanes?U0(e,n,t):(L(j,j.current&1),e=Je(e,n,t),e!==null?e.sibling:null);L(j,j.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return Q0(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),L(j,j.current),a)break;return null;case 22:case 23:return n.lanes=0,j0(e,n,t)}return Je(e,n,t)}var q0,Li,Y0,X0;q0=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Li=function(){};Y0=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,Pn(He.current);var i=null;switch(t){case"input":r=li(e,r),a=li(e,a),i=[];break;case"select":r=G({},r,{value:void 0}),a=G({},a,{value:void 0}),i=[];break;case"textarea":r=di(e,r),a=di(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ga)}pi(t,a);var o;t=null;for(f in r)if(!a.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var l=r[f];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ot.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in a){var d=a[f];if(l=r!=null?r[f]:void 0,a.hasOwnProperty(f)&&d!==l&&(d!=null||l!=null))if(f==="style")if(l){for(o in l)!l.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in d)d.hasOwnProperty(o)&&l[o]!==d[o]&&(t||(t={}),t[o]=d[o])}else t||(i||(i=[]),i.push(f,t)),t=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(i=i||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ot.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&M("scroll",e),i||l===d||(i=[])):(i=i||[]).push(f,d))}t&&(i=i||[]).push("style",t);var f=i;(n.updateQueue=f)&&(n.flags|=4)}};X0=function(e,n,t,a){t!==a&&(n.flags|=4)};function St(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function ku(e,n,t){var a=n.pendingProps;switch(vo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return he(n.type)&&Ua(),re(n),null;case 3:return a=n.stateNode,ct(),W(me),W(oe),Po(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ba(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(Qi(De),De=null))),Li(e,n),re(n),null;case 5:$o(n);var r=Pn(Xt.current);if(t=n.type,e!==null&&n.stateNode!=null)Y0(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(F(166));return re(n),null}if(e=Pn(He.current),ba(n)){a=n.stateNode,t=n.type;var i=n.memoizedProps;switch(a[Me]=n,a[qt]=i,e=(n.mode&1)!==0,t){case"dialog":M("cancel",a),M("close",a);break;case"iframe":case"object":case"embed":M("load",a);break;case"video":case"audio":for(r=0;r<Pt.length;r++)M(Pt[r],a);break;case"source":M("error",a);break;case"img":case"image":case"link":M("error",a),M("load",a);break;case"details":M("toggle",a);break;case"input":Jo(a,i),M("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},M("invalid",a);break;case"textarea":nl(a,i),M("invalid",a)}pi(t,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&xa(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&xa(a.textContent,l,e),r=["children",""+l]):Ot.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&M("scroll",a)}switch(t){case"input":ca(a),el(a,i,!0);break;case"textarea":ca(a),tl(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ga)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(t,{is:a.is}):(e=o.createElement(t),t==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,t),e[Me]=n,e[qt]=a,q0(e,n,!1,!1),n.stateNode=e;e:{switch(o=fi(t,a),t){case"dialog":M("cancel",e),M("close",e),r=a;break;case"iframe":case"object":case"embed":M("load",e),r=a;break;case"video":case"audio":for(r=0;r<Pt.length;r++)M(Pt[r],e);r=a;break;case"source":M("error",e),r=a;break;case"img":case"image":case"link":M("error",e),M("load",e),r=a;break;case"details":M("toggle",e),r=a;break;case"input":Jo(e,a),r=li(e,a),M("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=G({},a,{value:void 0}),M("invalid",e);break;case"textarea":nl(e,a),r=di(e,a),M("invalid",e);break;default:r=a}pi(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="style"?$s(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ks(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Lt(e,d):typeof d=="number"&&Lt(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ot.hasOwnProperty(i)?d!=null&&i==="onScroll"&&M("scroll",e):d!=null&&ao(e,i,d,o))}switch(t){case"input":ca(e),el(e,a,!1);break;case"textarea":ca(e),tl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+vn(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Jn(e,!!a.multiple,i,!1):a.defaultValue!=null&&Jn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ga)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)X0(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(F(166));if(t=Pn(Xt.current),Pn(He.current),ba(n)){if(a=n.stateNode,t=n.memoizedProps,a[Me]=n,(i=a.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:xa(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(a.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Me]=n,n.stateNode=a}return re(n),null;case 13:if(W(j),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ve!==null&&n.mode&1&&!(n.flags&128))m0(),lt(),n.flags|=98560,i=!1;else if(i=ba(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Me]=n}else lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),i=!1}else De!==null&&(Qi(De),De=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||j.current&1?X===0&&(X=3):Mo())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return ct(),Li(e,n),e===null&&Ut(n.stateNode.containerInfo),re(n),null;case 10:return So(n.type._context),re(n),null;case 17:return he(n.type)&&Ua(),re(n),null;case 19:if(W(j),i=n.memoizedState,i===null)return re(n),null;if(a=(n.flags&128)!==0,o=i.rendering,o===null)if(a)St(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Ja(e),o!==null){for(n.flags|=128,St(i,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)i=t,e=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return L(j,j.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>ut&&(n.flags|=128,a=!0,St(i,!1),n.lanes=4194304)}else{if(!a)if(e=Ja(o),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),St(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!H)return re(n),null}else 2*Q()-i.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,a=!0,St(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=j.current,L(j,a?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Lo(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?xe&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(F(156,n.tag))}function Cu(e,n){switch(vo(n),n.tag){case 1:return he(n.type)&&Ua(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ct(),W(me),W(oe),Po(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $o(n),null;case 13:if(W(j),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(F(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(j),null;case 4:return ct(),null;case 10:return So(n.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var _a=!1,ie=!1,$u=typeof WeakSet=="function"?WeakSet:Set,$=null;function Kn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){U(e,n,a)}else t.current=null}function Mi(e,n,t){try{t()}catch(a){U(e,n,a)}}var Gl=!1;function Pu(e,n){if(Si=Ha,e=n0(),xo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,d=-1,f=0,b=0,x=e,m=null;n:for(;;){for(var w;x!==t||r!==0&&x.nodeType!==3||(l=o+r),x!==i||a!==0&&x.nodeType!==3||(d=o+a),x.nodeType===3&&(o+=x.nodeValue.length),(w=x.firstChild)!==null;)m=x,x=w;for(;;){if(x===e)break n;if(m===t&&++f===r&&(l=o),m===i&&++b===a&&(d=o),(w=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=w}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fi={focusedElem:e,selectionRange:t},Ha=!1,$=n;$!==null;)if(n=$,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$=e;else for(;$!==null;){n=$;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var _=S.memoizedProps,P=S.memoizedState,u=n.stateNode,s=u.getSnapshotBeforeUpdate(n.elementType===n.type?_:Ee(n.type,_),P);u.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var c=n.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(p){U(n,n.return,p)}if(e=n.sibling,e!==null){e.return=n.return,$=e;break}$=n.return}return S=Gl,Gl=!1,S}function It(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Mi(n,t,i)}r=r.next}while(r!==a)}}function gr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Wi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function K0(e){var n=e.alternate;n!==null&&(e.alternate=null,K0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Me],delete n[qt],delete n[$i],delete n[du],delete n[uu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z0(e){return e.tag===5||e.tag===3||e.tag===4}function Ul(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ga));else if(a!==4&&(e=e.child,e!==null))for(Hi(e,n,t),e=e.sibling;e!==null;)Hi(e,n,t),e=e.sibling}function ji(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ji(e,n,t),e=e.sibling;e!==null;)ji(e,n,t),e=e.sibling}var J=null,Be=!1;function an(e,n,t){for(t=t.child;t!==null;)J0(e,n,t),t=t.sibling}function J0(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(sr,t)}catch{}switch(t.tag){case 5:ie||Kn(t,n);case 6:var a=J,r=Be;J=null,an(e,n,t),J=a,Be=r,J!==null&&(Be?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Be?(e=J,t=t.stateNode,e.nodeType===8?jr(e.parentNode,t):e.nodeType===1&&jr(e,t),jt(e)):jr(J,t.stateNode));break;case 4:a=J,r=Be,J=t.stateNode.containerInfo,Be=!0,an(e,n,t),J=a,Be=r;break;case 0:case 11:case 14:case 15:if(!ie&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mi(t,n,o),r=r.next}while(r!==a)}an(e,n,t);break;case 1:if(!ie&&(Kn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){U(t,n,l)}an(e,n,t);break;case 21:an(e,n,t);break;case 22:t.mode&1?(ie=(a=ie)||t.memoizedState!==null,an(e,n,t),ie=a):an(e,n,t);break;default:an(e,n,t)}}function Ql(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new $u),n.forEach(function(a){var r=zu.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:J=l.stateNode,Be=!1;break e;case 3:J=l.stateNode.containerInfo,Be=!0;break e;case 4:J=l.stateNode.containerInfo,Be=!0;break e}l=l.return}if(J===null)throw Error(F(160));J0(i,o,r),J=null,Be=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(f){U(r,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ec(n,e),n=n.sibling}function ec(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),Oe(e),a&4){try{It(3,e,e.return),gr(3,e)}catch(_){U(e,e.return,_)}try{It(5,e,e.return)}catch(_){U(e,e.return,_)}}break;case 1:Ae(n,e),Oe(e),a&512&&t!==null&&Kn(t,t.return);break;case 5:if(Ae(n,e),Oe(e),a&512&&t!==null&&Kn(t,t.return),e.flags&32){var r=e.stateNode;try{Lt(r,"")}catch(_){U(e,e.return,_)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ws(r,i),fi(l,o);var f=fi(l,i);for(o=0;o<d.length;o+=2){var b=d[o],x=d[o+1];b==="style"?$s(r,x):b==="dangerouslySetInnerHTML"?ks(r,x):b==="children"?Lt(r,x):ao(r,b,x,f)}switch(l){case"input":si(r,i);break;case"textarea":Ss(r,i);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Jn(r,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Jn(r,!!i.multiple,i.defaultValue,!0):Jn(r,!!i.multiple,i.multiple?[]:"",!1))}r[qt]=i}catch(_){U(e,e.return,_)}}break;case 6:if(Ae(n,e),Oe(e),a&4){if(e.stateNode===null)throw Error(F(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(_){U(e,e.return,_)}}break;case 3:if(Ae(n,e),Oe(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{jt(n.containerInfo)}catch(_){U(e,e.return,_)}break;case 4:Ae(n,e),Oe(e);break;case 13:Ae(n,e),Oe(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(zo=Q())),a&4&&Ql(e);break;case 22:if(b=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(f=ie)||b,Ae(n,e),ie=f):Ae(n,e),Oe(e),a&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!b&&e.mode&1)for($=e,b=e.child;b!==null;){for(x=$=b;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:It(4,m,m.return);break;case 1:Kn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){a=m,t=m.return;try{n=a,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(_){U(a,t,_)}}break;case 5:Kn(m,m.return);break;case 22:if(m.memoizedState!==null){Yl(x);continue}}w!==null?(w.return=m,$=w):Yl(x)}b=b.sibling}e:for(b=null,x=e;;){if(x.tag===5){if(b===null){b=x;try{r=x.stateNode,f?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=x.stateNode,d=x.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Cs("display",o))}catch(_){U(e,e.return,_)}}}else if(x.tag===6){if(b===null)try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(_){U(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;b===x&&(b=null),x=x.return}b===x&&(b=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Ae(n,e),Oe(e),a&4&&Ql(e);break;case 21:break;default:Ae(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Z0(t)){var a=t;break e}t=t.return}throw Error(F(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(Lt(r,""),a.flags&=-33);var i=Ul(e);ji(e,i,r);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Ul(e);Hi(e,l,o);break;default:throw Error(F(161))}}catch(d){U(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tu(e,n,t){$=e,nc(e)}function nc(e,n,t){for(var a=(e.mode&1)!==0;$!==null;){var r=$,i=r.child;if(r.tag===22&&a){var o=r.memoizedState!==null||_a;if(!o){var l=r.alternate,d=l!==null&&l.memoizedState!==null||ie;l=_a;var f=ie;if(_a=o,(ie=d)&&!f)for($=r;$!==null;)o=$,d=o.child,o.tag===22&&o.memoizedState!==null?Xl(r):d!==null?(d.return=o,$=d):Xl(r);for(;i!==null;)$=i,nc(i),i=i.sibling;$=r,_a=l,ie=f}ql(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,$=i):ql(e)}}function ql(e){for(;$!==null;){var n=$;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||gr(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!ie)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ee(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&El(n,i,a);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}El(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var b=f.memoizedState;if(b!==null){var x=b.dehydrated;x!==null&&jt(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ie||n.flags&512&&Wi(n)}catch(m){U(n,n.return,m)}}if(n===e){$=null;break}if(t=n.sibling,t!==null){t.return=n.return,$=t;break}$=n.return}}function Yl(e){for(;$!==null;){var n=$;if(n===e){$=null;break}var t=n.sibling;if(t!==null){t.return=n.return,$=t;break}$=n.return}}function Xl(e){for(;$!==null;){var n=$;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{gr(4,n)}catch(d){U(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){U(n,r,d)}}var i=n.return;try{Wi(n)}catch(d){U(n,i,d)}break;case 5:var o=n.return;try{Wi(n)}catch(d){U(n,o,d)}}}catch(d){U(n,n.return,d)}if(n===e){$=null;break}var l=n.sibling;if(l!==null){l.return=n.return,$=l;break}$=n.return}}var Ru=Math.ceil,tr=en.ReactCurrentDispatcher,Io=en.ReactCurrentOwner,Pe=en.ReactCurrentBatchConfig,B=0,Z=null,q=null,ee=0,xe=0,Zn=wn(0),X=0,ea=null,Dn=0,xr=0,No=0,Nt=null,pe=null,zo=0,ut=1/0,Ge=null,ar=!1,Vi=null,gn=null,wa=!1,dn=null,rr=0,zt=0,Gi=null,Da=-1,Ia=0;function se(){return B&6?Q():Da!==-1?Da:Da=Q()}function xn(e){return e.mode&1?B&2&&ee!==0?ee&-ee:fu.transition!==null?(Ia===0&&(Ia=Ls()),Ia):(e=z,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e):1}function Ne(e,n,t,a){if(50<zt)throw zt=0,Gi=null,Error(F(185));ta(e,t,a),(!(B&2)||e!==Z)&&(e===Z&&(!(B&2)&&(xr|=t),X===4&&sn(e,ee)),ge(e,a),t===1&&B===0&&!(n.mode&1)&&(ut=Q()+500,fr&&Sn()))}function ge(e,n){var t=e.callbackNode;fd(e,n);var a=Wa(e,e===Z?ee:0);if(a===0)t!==null&&il(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&il(t),n===1)e.tag===0?pu(Kl.bind(null,e)):u0(Kl.bind(null,e)),su(function(){!(B&6)&&Sn()}),t=null;else{switch(Ms(a)){case 1:t=so;break;case 4:t=zs;break;case 16:t=Ma;break;case 536870912:t=Os;break;default:t=Ma}t=cc(t,tc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function tc(e,n){if(Da=-1,Ia=0,B&6)throw Error(F(327));var t=e.callbackNode;if(rt()&&e.callbackNode!==t)return null;var a=Wa(e,e===Z?ee:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=ir(e,a);else{n=a;var r=B;B|=2;var i=rc();(Z!==e||ee!==n)&&(Ge=null,ut=Q()+500,Tn(e,n));do try{Bu();break}catch(l){ac(e,l)}while(!0);wo(),tr.current=i,B=r,q!==null?n=0:(Z=null,ee=0,n=X)}if(n!==0){if(n===2&&(r=bi(e),r!==0&&(a=r,n=Ui(e,r))),n===1)throw t=ea,Tn(e,0),sn(e,a),ge(e,Q()),t;if(n===6)sn(e,a);else{if(r=e.current.alternate,!(a&30)&&!Au(r)&&(n=ir(e,a),n===2&&(i=bi(e),i!==0&&(a=i,n=Ui(e,i))),n===1))throw t=ea,Tn(e,0),sn(e,a),ge(e,Q()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(F(345));case 2:kn(e,pe,Ge);break;case 3:if(sn(e,a),(a&130023424)===a&&(n=zo+500-Q(),10<n)){if(Wa(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){se(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ci(kn.bind(null,e,pe,Ge),n);break}kn(e,pe,Ge);break;case 4:if(sn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var o=31-Ie(a);i=1<<o,o=n[o],o>r&&(r=o),a&=~i}if(a=r,a=Q()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ru(a/1960))-a,10<a){e.timeoutHandle=Ci(kn.bind(null,e,pe,Ge),a);break}kn(e,pe,Ge);break;case 5:kn(e,pe,Ge);break;default:throw Error(F(329))}}}return ge(e,Q()),e.callbackNode===t?tc.bind(null,e):null}function Ui(e,n){var t=Nt;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=ir(e,n),e!==2&&(n=pe,pe=t,n!==null&&Qi(n)),e}function Qi(e){pe===null?pe=e:pe.push.apply(pe,e)}function Au(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!ze(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sn(e,n){for(n&=~No,n&=~xr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ie(n),a=1<<t;e[t]=-1,n&=~a}}function Kl(e){if(B&6)throw Error(F(327));rt();var n=Wa(e,0);if(!(n&1))return ge(e,Q()),null;var t=ir(e,n);if(e.tag!==0&&t===2){var a=bi(e);a!==0&&(n=a,t=Ui(e,a))}if(t===1)throw t=ea,Tn(e,0),sn(e,n),ge(e,Q()),t;if(t===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,pe,Ge),ge(e,Q()),null}function Oo(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(ut=Q()+500,fr&&Sn())}}function In(e){dn!==null&&dn.tag===0&&!(B&6)&&rt();var n=B;B|=1;var t=Pe.transition,a=z;try{if(Pe.transition=null,z=1,e)return e()}finally{z=a,Pe.transition=t,B=n,!(B&6)&&Sn()}}function Lo(){xe=Zn.current,W(Zn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,lu(t)),q!==null)for(t=q.return;t!==null;){var a=t;switch(vo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ua();break;case 3:ct(),W(me),W(oe),Po();break;case 5:$o(a);break;case 4:ct();break;case 13:W(j);break;case 19:W(j);break;case 10:So(a.type._context);break;case 22:case 23:Lo()}t=t.return}if(Z=e,q=e=bn(e.current,null),ee=xe=n,X=0,ea=null,No=xr=Dn=0,pe=Nt=null,$n!==null){for(n=0;n<$n.length;n++)if(t=$n[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var o=i.next;i.next=r,a.next=o}t.pending=a}$n=null}return e}function ac(e,n){do{var t=q;try{if(wo(),Aa.current=nr,er){for(var a=V.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}er=!1}if(Bn=0,K=Y=V=null,Dt=!1,Kt=0,Io.current=null,t===null||t.return===null){X=1,ea=n,q=null;break}e:{var i=e,o=t.return,l=t,d=n;if(n=ee,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,b=l,x=b.tag;if(!(b.mode&1)&&(x===0||x===11||x===15)){var m=b.alternate;m?(b.updateQueue=m.updateQueue,b.memoizedState=m.memoizedState,b.lanes=m.lanes):(b.updateQueue=null,b.memoizedState=null)}var w=Ol(o);if(w!==null){w.flags&=-257,Ll(w,o,l,i,n),w.mode&1&&zl(i,f,n),n=w,d=f;var S=n.updateQueue;if(S===null){var _=new Set;_.add(d),n.updateQueue=_}else S.add(d);break e}else{if(!(n&1)){zl(i,f,n),Mo();break e}d=Error(F(426))}}else if(H&&l.mode&1){var P=Ol(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ll(P,o,l,i,n),yo(dt(d,l));break e}}i=d=dt(d,l),X!==4&&(X=2),Nt===null?Nt=[i]:Nt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var u=M0(i,d,n);Al(i,u);break e;case 1:l=d;var s=i.type,c=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(gn===null||!gn.has(c)))){i.flags|=65536,n&=-n,i.lanes|=n;var p=W0(i,l,n);Al(i,p);break e}}i=i.return}while(i!==null)}oc(t)}catch(h){n=h,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function rc(){var e=tr.current;return tr.current=nr,e===null?nr:e}function Mo(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Dn&268435455)&&!(xr&268435455)||sn(Z,ee)}function ir(e,n){var t=B;B|=2;var a=rc();(Z!==e||ee!==n)&&(Ge=null,Tn(e,n));do try{Eu();break}catch(r){ac(e,r)}while(!0);if(wo(),B=t,tr.current=a,q!==null)throw Error(F(261));return Z=null,ee=0,X}function Eu(){for(;q!==null;)ic(q)}function Bu(){for(;q!==null&&!rd();)ic(q)}function ic(e){var n=sc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,n===null?oc(e):q=n,Io.current=null}function oc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Cu(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(t=ku(t,n,xe),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);X===0&&(X=5)}function kn(e,n,t){var a=z,r=Pe.transition;try{Pe.transition=null,z=1,Du(e,n,t,a)}finally{Pe.transition=r,z=a}return null}function Du(e,n,t,a){do rt();while(dn!==null);if(B&6)throw Error(F(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(md(e,i),e===Z&&(q=Z=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wa||(wa=!0,cc(Ma,function(){return rt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=z;z=1;var l=B;B|=4,Io.current=null,Pu(e,t),ec(t,e),eu(Fi),Ha=!!Si,Fi=Si=null,e.current=t,Tu(t),id(),B=l,z=o,Pe.transition=i}else e.current=t;if(wa&&(wa=!1,dn=e,rr=r),i=e.pendingLanes,i===0&&(gn=null),sd(t.stateNode),ge(e,Q()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(ar)throw ar=!1,e=Vi,Vi=null,e;return rr&1&&e.tag!==0&&rt(),i=e.pendingLanes,i&1?e===Gi?zt++:(zt=0,Gi=e):zt=0,Sn(),null}function rt(){if(dn!==null){var e=Ms(rr),n=Pe.transition,t=z;try{if(Pe.transition=null,z=16>e?16:e,dn===null)var a=!1;else{if(e=dn,dn=null,rr=0,B&6)throw Error(F(331));var r=B;for(B|=4,$=e.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var d=0;d<l.length;d++){var f=l[d];for($=f;$!==null;){var b=$;switch(b.tag){case 0:case 11:case 15:It(8,b,i)}var x=b.child;if(x!==null)x.return=b,$=x;else for(;$!==null;){b=$;var m=b.sibling,w=b.return;if(K0(b),b===f){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var S=i.alternate;if(S!==null){var _=S.child;if(_!==null){S.child=null;do{var P=_.sibling;_.sibling=null,_=P}while(_!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:It(9,i,i.return)}var u=i.sibling;if(u!==null){u.return=i.return,$=u;break e}$=i.return}}var s=e.current;for($=s;$!==null;){o=$;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,$=c;else e:for(o=s;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gr(9,l)}}catch(h){U(l,l.return,h)}if(l===o){$=null;break e}var p=l.sibling;if(p!==null){p.return=l.return,$=p;break e}$=l.return}}if(B=r,Sn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(sr,e)}catch{}a=!0}return a}finally{z=t,Pe.transition=n}}return!1}function Zl(e,n,t){n=dt(t,n),n=M0(e,n,1),e=hn(e,n,1),n=se(),e!==null&&(ta(e,1,n),ge(e,n))}function U(e,n,t){if(e.tag===3)Zl(e,e,t);else for(;n!==null;){if(n.tag===3){Zl(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gn===null||!gn.has(a))){e=dt(t,e),e=W0(n,e,1),n=hn(n,e,1),e=se(),n!==null&&(ta(n,1,e),ge(n,e));break}}n=n.return}}function Iu(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>Q()-zo?Tn(e,0):No|=t),ge(e,n)}function lc(e,n){n===0&&(e.mode&1?(n=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):n=1);var t=se();e=Ze(e,n),e!==null&&(ta(e,n,t),ge(e,t))}function Nu(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),lc(e,t)}function zu(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(F(314))}a!==null&&a.delete(n),lc(e,t)}var sc;sc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,Fu(e,n,t);fe=!!(e.flags&131072)}else fe=!1,H&&n.flags&1048576&&p0(n,Ya,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Ba(e,n),e=n.pendingProps;var r=ot(n,oe.current);at(n,t),r=Ro(null,n,a,e,r,t);var i=Ao();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(a)?(i=!0,Qa(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ko(n),r.updater=hr,n.stateNode=r,r._reactInternals=n,Bi(n,a,e,t),n=Ni(null,n,a,!0,i,t)):(n.tag=0,H&&i&&bo(n),le(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Ba(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=Lu(a),e=Ee(a,e),r){case 0:n=Ii(null,n,a,e,t);break e;case 1:n=Hl(null,n,a,e,t);break e;case 11:n=Ml(null,n,a,e,t);break e;case 14:n=Wl(null,n,a,Ee(a.type,e),t);break e}throw Error(F(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:Ee(a,r),Ii(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:Ee(a,r),Hl(e,n,a,r,t);case 3:e:{if(G0(n),e===null)throw Error(F(387));a=n.pendingProps,i=n.memoizedState,r=i.element,b0(e,n),Za(n,a,null,t);var o=n.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=dt(Error(F(423)),n),n=jl(e,n,a,t,r);break e}else if(a!==r){r=dt(Error(F(424)),n),n=jl(e,n,a,t,r);break e}else for(ve=mn(n.stateNode.containerInfo.firstChild),ye=n,H=!0,De=null,t=g0(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lt(),a===r){n=Je(e,n,t);break e}le(e,n,a,t)}n=n.child}return n;case 5:return v0(n),e===null&&Ri(n),a=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,ki(a,r)?o=null:i!==null&&ki(a,i)&&(n.flags|=32),V0(e,n),le(e,n,o,t),n.child;case 6:return e===null&&Ri(n),null;case 13:return U0(e,n,t);case 4:return Co(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=st(n,null,a,t):le(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:Ee(a,r),Ml(e,n,a,r,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,i=n.memoizedProps,o=r.value,L(Xa,a._currentValue),a._currentValue=o,i!==null)if(ze(i.value,o)){if(i.children===r.children&&!me.current){n=Je(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(i.tag===1){d=Ye(-1,t&-t),d.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var b=f.pending;b===null?d.next=d:(d.next=b.next,b.next=d),f.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Ai(i.return,t,n),l.lanes|=t;break}d=d.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Ai(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}le(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,at(n,t),r=Te(r),a=a(r),n.flags|=1,le(e,n,a,t),n.child;case 14:return a=n.type,r=Ee(a,n.pendingProps),r=Ee(a.type,r),Wl(e,n,a,r,t);case 15:return H0(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:Ee(a,r),Ba(e,n),n.tag=1,he(a)?(e=!0,Qa(n)):e=!1,at(n,t),L0(n,a,r),Bi(n,a,r,t),Ni(null,n,a,!0,e,t);case 19:return Q0(e,n,t);case 22:return j0(e,n,t)}throw Error(F(156,n.tag))};function cc(e,n){return Ns(e,n)}function Ou(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,a){return new Ou(e,n,t,a)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lu(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===oo)return 14}return 2}function bn(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Na(e,n,t,a,r,i){var o=2;if(a=e,typeof e=="function")Wo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return Rn(t.children,r,i,n);case ro:o=8,r|=8;break;case ai:return e=$e(12,t,n,r|2),e.elementType=ai,e.lanes=i,e;case ri:return e=$e(13,t,n,r),e.elementType=ri,e.lanes=i,e;case ii:return e=$e(19,t,n,r),e.elementType=ii,e.lanes=i,e;case vs:return br(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:o=10;break e;case bs:o=9;break e;case io:o=11;break e;case oo:o=14;break e;case rn:o=16,a=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return n=$e(o,t,n,r),n.elementType=e,n.type=a,n.lanes=i,n}function Rn(e,n,t,a){return e=$e(7,e,a,n),e.lanes=t,e}function br(e,n,t,a){return e=$e(22,e,a,n),e.elementType=vs,e.lanes=t,e.stateNode={isHidden:!1},e}function Kr(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function Zr(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Mu(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Er(0),this.expirationTimes=Er(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ho(e,n,t,a,r,i,o,l,d){return e=new Mu(e,n,t,l,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=$e(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(i),e}function Wu(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function dc(e){if(!e)return yn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(F(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(F(171))}if(e.tag===1){var t=e.type;if(he(t))return d0(e,t,n)}return n}function uc(e,n,t,a,r,i,o,l,d){return e=Ho(t,a,!0,e,r,i,o,l,d),e.context=dc(null),t=e.current,a=se(),r=xn(t),i=Ye(a,r),i.callback=n??null,hn(t,i,r),e.current.lanes=r,ta(e,r,a),ge(e,a),e}function vr(e,n,t,a){var r=n.current,i=se(),o=xn(r);return t=dc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(i,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=hn(r,n,o),e!==null&&(Ne(e,r,o,i),Ra(e,r,o)),o}function or(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function jo(e,n){Jl(e,n),(e=e.alternate)&&Jl(e,n)}function Hu(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}yr.prototype.render=Vo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(F(409));vr(e,n,null,null)};yr.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;In(function(){vr(null,e,null,null)}),n[Ke]=null}};function yr(e){this._internalRoot=e}yr.prototype.unstable_scheduleHydration=function(e){if(e){var n=js();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Gs(e)}};function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function es(){}function ju(e,n,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var f=or(o);i.call(f)}}var o=uc(n,a,e,0,null,!1,!1,"",es);return e._reactRootContainer=o,e[Ke]=o.current,Ut(e.nodeType===8?e.parentNode:e),In(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var f=or(d);l.call(f)}}var d=Ho(e,0,!1,null,null,!1,!1,"",es);return e._reactRootContainer=d,e[Ke]=d.current,Ut(e.nodeType===8?e.parentNode:e),In(function(){vr(n,d,t,a)}),d}function wr(e,n,t,a,r){var i=t._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var l=r;r=function(){var d=or(o);l.call(d)}}vr(n,o,e,r)}else o=ju(t,n,e,r,a);return or(o)}Ws=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(co(n,t|1),ge(n,Q()),!(B&6)&&(ut=Q()+500,Sn()))}break;case 13:In(function(){var a=Ze(e,1);if(a!==null){var r=se();Ne(a,e,1,r)}}),jo(e,1)}};uo=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=se();Ne(n,e,134217728,t)}jo(e,134217728)}};Hs=function(e){if(e.tag===13){var n=xn(e),t=Ze(e,n);if(t!==null){var a=se();Ne(t,e,n,a)}jo(e,n)}};js=function(){return z};Vs=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};hi=function(e,n,t){switch(n){case"input":if(si(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=pr(a);if(!r)throw Error(F(90));_s(a),si(a,r)}}}break;case"textarea":Ss(e,t);break;case"select":n=t.value,n!=null&&Jn(e,!!t.multiple,n,!1)}};Rs=Oo;As=In;var Vu={usingClientEntryPoint:!1,Events:[ra,Un,pr,Ps,Ts,Oo]},Ft={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gu={bundleType:Ft.bundleType,version:Ft.version,rendererPackageName:Ft.rendererPackageName,rendererConfig:Ft.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ds(e),e===null?null:e.stateNode},findFiberByHostInstance:Ft.findFiberByHostInstance||Hu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{sr=Sa.inject(Gu),We=Sa}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vu;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Go(n))throw Error(F(200));return Wu(e,n,null,t)};we.createRoot=function(e,n){if(!Go(e))throw Error(F(299));var t=!1,a="",r=pc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ho(e,1,!1,null,null,t,!1,a,r),e[Ke]=n.current,Ut(e.nodeType===8?e.parentNode:e),new Vo(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ds(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return In(e)};we.hydrate=function(e,n,t){if(!_r(n))throw Error(F(200));return wr(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!Go(e))throw Error(F(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",o=pc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=uc(n,null,e,1,t??null,r,!1,i,o),e[Ke]=n.current,Ut(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new yr(n)};we.render=function(e,n,t){if(!_r(n))throw Error(F(200));return wr(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!_r(e))throw Error(F(40));return e._reactRootContainer?(In(function(){wr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Oo;we.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!_r(t))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return wr(e,n,t,!1,a)};we.version="18.3.1-next-f1338f8080-20240426";function fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)}catch(e){console.error(e)}}fc(),fs.exports=we;var Uu=fs.exports,ns=Uu;ni.createRoot=ns.createRoot,ni.hydrateRoot=ns.hydrateRoot;const Qu=`version: 1.0

// Button Styles Builder
// #main    - Standard button (ui atlas: button-idle/hover/pressed/disabled)
// #warning - Warning/alert animated button (ui atlas: Altcolor/Button_Warning_3x3_*)
// #small   - Compact pixel button (ui-new atlas: btn_*_32x16)
// #color   - Color swatch button (shows colored rect instead of text)

#main programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Button", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffffff, textShadow:[true, false]=false) {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0

    @(textShadow=>false) text($font, $buttonText, $fontColor, center, $width): 0, ($height - $ctx.font($font).lineHeight) / 2
    @(textShadow=>true) text($font, $buttonText, $fontColor, center, $width, dropShadowXY: 1, 1): 0, ($height - $ctx.font($font).lineHeight) / 2
    settings{width:int=>$width, height:int=>$height, font:string=>$font, fontColor:int=>$fontColor}
}

#warning programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Warning", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffffff, textShadow:[true, false]=false) {
    @(status=>normal, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_disabled", $width, $height):       0,0

    @(textShadow=>false) text($font, $buttonText, $fontColor, center, $width): 0, ($height - $ctx.font($font).lineHeight) / 2
    @(textShadow=>true) text($font, $buttonText, $fontColor, center, $width, dropShadowXY: 1, 1): 0, ($height - $ctx.font($font).lineHeight) / 2
    settings{width:int=>$width, height:int=>$height, font:string=>$font, fontColor:int=>$fontColor}
}

#small programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="OK", font="f7x5", fontColor:int=0xffffffff) {
    scale: 2
    @(status=>normal, disabled=>false) bitmap(sheet("ui-new", "btn_normal_32x16")):   0,0
    @(status=>hover, disabled=>false) bitmap(sheet("ui-new", "btn_hover_32x16")):     0,0
    @(status=>pressed, disabled=>false) bitmap(sheet("ui-new", "btn_pressed_32x16")): 0,0
    @(status=>*, disabled=>true) bitmap(sheet("ui-new", "btn_disabled_32x16")):       0,0

    text($font, $buttonText, $fontColor, center, 32): 0,4
    settings{font:string=>$font, fontColor:int=>$fontColor}
}

#color programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="", width:uint=60, height:uint=22, color:int=0xFFff0000) {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0
    bitmap(generated(color($width - 8, $height - 8, $color))): 4, 4
    settings{width:int=>$width, height:int=>$height, color:int=>$color}
}
`,qu=`version: 1.0

// Checkbox Styles Builder
// #checkbox - Standard checkbox (ui atlas: CheckBox_off/on_*)
// #tickbox  - Tickbox style (ui atlas: TickBox2_off/on_*)
// #toggle   - Toggle switch (ui atlas: Toggle_off/on_*)
// #radio    - Small radio button (ui atlas: RadioButton_off/on_*)
// #radio2   - Large radio button (ui atlas: RadioButton2_off/on_*)
// #simple   - Simple checkbox (ui-new atlas: checkbox_unchecked/checked/disabled)

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

#simple programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false]) {
    scale: 2
    @(status=>*, checked=>false, disabled=>false) bitmap(sheet("ui-new", "checkbox_unchecked"));
    @(status=>*, checked=>true, disabled=>false) bitmap(sheet("ui-new", "checkbox_checked"));
    @(disabled=>true) bitmap(sheet("ui-new", "checkbox_disabled"));
}
`,Yu=`version: 1.0

#titleBar programmable(title="Demo") {
    ninepatch("ui", "Window_3x3_idle", 1280, 40): 0,0
    #titleText(updatable) text(exo2_black_20, $title, #ffffff, left, 1200): 50,10
}

#descriptionLabel programmable(text="Description") {
    #descText(updatable) text(exo2_light_14, $text, #aaaaaa, left, 1180): 50,48
}

#backButton programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Back") {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", 80, 30): 5,5
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", 80, 30): 5,4
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", 80, 30): 5,5
    text(exo2_14, $buttonText, #ffffff, center, 80): 5,11
}

#navCard programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Demo", category="") {
    @(status=>normal) ninepatch("ui", "Window_3x3_idle", 180, 36): 0,0
    @(status=>hover) ninepatch("ui", "button-hover", 180, 36): 0,0
    @(status=>pressed) ninepatch("ui", "button-pressed", 180, 36): 0,0
    text(exo2_14, $buttonText, #ffffff, center, 180): 0,9
}

#categoryHeader programmable(title="Category") {
    text(exo2_black_16, $title, #7fdbda, left, 400): 0,0
    bitmap(generated(color(400, 1, #7fdbda33))): 0,22
}

#sectionLabel programmable(text="Section") {
    text(exo2_16, $text, #cccccc, left, 600): 0,0
}

#valueLabel programmable(text="value") {
    text(m6x11, $text, #ffffff, left, 200): 0,0
}

// ── Smaller nav card for carousel NavScreen ───────────────────
#navCardSmall programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Demo") {
    @(status=>normal) ninepatch("ui", "Window_3x3_idle", 155, 28): 0,0
    @(status=>hover) ninepatch("ui", "button-hover", 155, 28): 0,0
    @(status=>pressed) ninepatch("ui", "button-pressed", 155, 28): 0,0
    text(m6x11, $buttonText, #ffffff, center, 155): 0,8
}

// ── View Demo button for carousel ─────────────────────────────
#viewDemoButton programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="View Demo >") {
    @(status=>normal) ninepatch("ui", "button-idle", 140, 30): 0,0
    @(status=>hover) ninepatch("ui", "button-hover", 140, 30): 0,-1
    @(status=>pressed) ninepatch("ui", "button-pressed", 140, 30): 0,0
    text(exo2_14, $buttonText, #ffffff, center, 140): 0,7
}

// ── Carousel control buttons (prev/next/pause) ───────────────
#carouselCtrlBtn programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="<") {
    @(status=>normal) ninepatch("ui", "button-idle", 26, 22): 0,0
    @(status=>hover) ninepatch("ui", "button-hover", 26, 22): 0,-1
    @(status=>pressed) ninepatch("ui", "button-pressed", 26, 22): 0,0
    text(m6x11, $buttonText, #ffffff, center, 26): 0,5
}
`,Xu=`version: 1.0

// Conditionals Demo
// All conditional types demonstrated

#conditionalsDemo programmable(value:0..100=50, tier:[low, mid, high]=mid) {
    pos: 50, 140

    text(exo2_16, "Conditional Types", #7fdbda, left, 400): 0, 0
    text(exo2_light_14, "Drag the slider to see which conditional blocks match the current value.", #aaaaaa, left, 700): 0, 30

    // Section 1: Basic @() match
    text(m6x11, "1. Basic @(value => N):", #cccccc, left, 300): 0, 80
    @(value => 0) text(m6x11, "  MATCH: value is exactly 0", #44ff44, left, 300): 0, 100
    @(value => 50) text(m6x11, "  MATCH: value is exactly 50", #44ff44, left, 300): 0, 100
    @(value => 100) text(m6x11, "  MATCH: value is exactly 100", #44ff44, left, 300): 0, 100

    // Section 2: Range match
    text(m6x11, "2. Range @(value => 20..40):", #cccccc, left, 300): 0, 130
    @(value => 20..40) text(m6x11, "  MATCH: value in range 20-40", #44ff44, left, 300): 0, 150
    @(value => 60..80) text(m6x11, "  MATCH: value in range 60-80", #44ff44, left, 300): 0, 150

    // Section 3: Comparison operators
    text(m6x11, "3. Comparisons:", #cccccc, left, 300): 0, 180
    @(value <= 25) text(m6x11, "  value <= 25", #ff8844, left, 300): 0, 200
    @(value > 75) text(m6x11, "  value > 75", #ff8844, left, 300): 0, 200
    @(value >= 50) text(m6x11, "  value >= 50", #4488ff, left, 300): 200, 200
    @(value < 50) text(m6x11, "  value < 50", #4488ff, left, 300): 200, 200

    // Section 4: @else and @default
    text(m6x11, "4. @if / @else / @default chain:", #cccccc, left, 400): 0, 240
    @if(value <= 30) text(m6x11, "  @if(value <= 30): LOW", #ff4444, left, 300): 0, 260
    @else(value <= 70) text(m6x11, "  @else(value <= 70): MID", #ffaa44, left, 300): 0, 260
    @default text(m6x11, "  @default: HIGH", #44ff44, left, 300): 0, 260

    // Section 5: @switch — picks one arm by enum param (tier auto-derived from value)
    text(m6x11, "5. @switch(tier):", #cccccc, left, 400): 0, 300
    @switch(tier) {
        low {
            bitmap(generated(color(120, 18, #aa3333))): 0, 320
            text(m6x11, "  tier=low (value <= 33)", #ffffff, left, 300): 130, 322
        }
        mid {
            bitmap(generated(color(120, 18, #aa8833))): 0, 320
            text(m6x11, "  tier=mid (34..66)", #ffffff, left, 300): 130, 322
        }
        high {
            bitmap(generated(color(120, 18, #33aa33))): 0, 320
            text(m6x11, "  tier=high (value >= 67)", #ffffff, left, 300): 130, 322
        }
    }

    // Section 6: Visual indicator bar
    text(m6x11, "6. Visual bar (width = $value * 4):", #cccccc, left, 400): 0, 360
    bitmap(generated(color(400, 20, #222233))): 0, 380
    bitmap(generated(color($value * 4, 20, #4488cc))): 0, 380

    // Current value display
    #valueText(updatable) text(exo2_20, 'Current value: \${value}  |  tier: $tier', #ffffff, left, 400): 0, 420

    // Slider (placeholder filled by screen code)
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("valueSlider")) {
        pos: 0, 470
        settings{size:int=>300}
    }
}
`,Ku=`version: 1.0

// Expressions Demo
// Arithmetic, ternary, and string interpolation

#expressionsDemo programmable(value:0..100=25) {
    pos: 50, 140

    text(exo2_16, "Expressions", #7fdbda, left, 400): 0, 0
    text(exo2_light_14, "Arithmetic, ternary, and string interpolation.", #aaaaaa, left, 600): 0, 25

    // Basic arithmetic
    text(m6x11, "Basic arithmetic:", #cccccc, left, 400): 0, 60

    text(m6x11, "$value = ", #888888, left, 200): 20, 80
    text(m6x11, $value, #ffffff, left, 100): 140, 80

    text(m6x11, "$value + 10 = ", #888888, left, 200): 20, 97
    text(m6x11, '\${value + 10}', #ffffff, left, 100): 140, 97

    text(m6x11, "$value * 2 = ", #888888, left, 200): 20, 114
    text(m6x11, '\${value * 2}', #ffffff, left, 100): 140, 114

    text(m6x11, "$value * 3 + 5 = ", #888888, left, 200): 20, 131
    text(m6x11, '\${value * 3 + 5}', #ffffff, left, 100): 160, 131

    text(m6x11, "$value div 10 = ", #888888, left, 200): 20, 148
    text(m6x11, '\${value div 10}', #ffffff, left, 100): 160, 148

    text(m6x11, "$value % 7 = ", #888888, left, 200): 20, 165
    text(m6x11, '\${value % 7}', #ffffff, left, 100): 140, 165

    // Ternary expressions
    text(m6x11, "Ternary  ?(cond) a : b :", #cccccc, left, 400): 0, 195

    text(m6x11, "?($value >= 50)", #888888, left, 180): 20, 215
    text(m6x11, ?($value >= 50) "HIGH" : "low", ?($value >= 50) #44ff44 : #ff4444, left, 80): 200, 215

    text(m6x11, "?($value > 25)", #888888, left, 180): 20, 232
    text(m6x11, ?($value > 25) "yes" : "no", ?($value > 25) #44ff44 : #ff4444, left, 80): 200, 232

    text(m6x11, "?($value == 50)", #888888, left, 180): 20, 249
    text(m6x11, ?($value == 50) "MATCH!" : "--", ?($value == 50) #ffdd44 : #666666, left, 80): 200, 249

    text(m6x11, "Color:", #888888, left, 80): 20, 272
    bitmap(generated(color(100, 14, ?($value >= 50) #44ff44 : #ff4444))): 100, 272

    text(m6x11, "Width:", #888888, left, 80): 20, 292
    bitmap(generated(color(?($value > 50) 200 : 80, 14, #4488cc))): 100, 292

    // String interpolation
    text(m6x11, "String interpolation:", #cccccc, left, 400): 0, 322

    text(m6x11, "simple:", #888888, left, 80): 20, 342
    text(m6x11, 'Value is \${value}', #ffffff, left, 300): 100, 342

    text(m6x11, "math:", #888888, left, 80): 20, 359
     text(m6x11, 'Double: \${value * 2}', #ffffff, left, 300): 100, 359

    text(m6x11, "multi:", #888888, left, 80): 20, 376
   text(m6x11, '\${$value} and \${$value + 10}', #ffffff, left, 300): 100, 376

    // Visual expression result
    text(m6x11, "Visual width = $value * 3:", #cccccc, left, 400): 0, 406
    bitmap(generated(color($value * 3, 20, #4488cc))): 0, 424

    // Slider
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("valueSlider")) {
        pos: 0, 460
        settings{size:int=>300}
    }
}
`,Zu=`version: 1.0

// Feature Showcase
// Demonstrates layers, tileGroups, apply blocks, bitmap alignment,
// and other features not covered by individual demos.

// Helper: shape reference with conditional rendering
#refShape programmable(width:uint=20, height:uint=20, shape:[rect, triangle], c1:color=white) {
  @(shape=>rect) bitmap(generated(color($width, $height, $c1)));
  @(shape=>triangle) pixels (
    line 0,0, 0, $height, $c1
    line 0,$height, $width, $height, $c1
    line $width,$height, 0, 0, $c1
  );
}

// Helper: apply block demo
#applyExample programmable(state:[alpha, filter, scale]) {
  @(state=>alpha) apply {
    alpha: 0.4
  }
  @(state=>filter) apply {
    filter: glow(color:white, alpha:0.9, radius:15, smoothColor:true)
  }
  @(state=>scale) apply {
    scale: 0.7
  }
  bitmap(generated(color(30, 30, green)));
}

// Helper: conditional rendering
#condExample programmable(param1:[A, B, C]) {
  @(param1=>A) text(m6x11, "A", #44ff44, left): 0, 0
  @(param1=>B) text(m6x11, "B", #ff4444, left): 0, 0
  @(param1=>C) text(m6x11, "C", #4444ff, left): 0, 0
  @(param1=>!C) text(m6x11, "(not C)", #888888, left): 15, 0
}

// Helper: array demo
#arrayExample programmable(arr:array = [one, two, three], index:int=0) {
  text(m6x11, $arr[$index], #ffffff, left): 0, 0
}

#featureShowcase programmable() {

  // === Section 1: Layers (z-ordering) ===
  text(exo2_16, "Layers (z-ordering):", #cccccc): 0, 0

  point {
    pos: 0, 30
    text(m6x11, "3 on top, 1 on bottom", #888888): 0, 0
    layers {
      pos: 0, 15
      @layer(3) bitmap(generated(color(35, 35, #cc4444)));
      @layer(2) bitmap(generated(color(35, 35, #44cc44))): 12, 12;
      @layer(1) bitmap(generated(color(35, 35, #4444cc))): 24, 24
    }
  }

  point {
    pos: 140, 30
    text(m6x11, "1 on top, 3 on bottom", #888888): 0, 0
    layers {
      pos: 0, 15
      @layer(1) bitmap(generated(color(35, 35, #cc4444)));
      @layer(2) bitmap(generated(color(35, 35, #44cc44))): 12, 12;
      @layer(3) bitmap(generated(color(35, 35, #4444cc))): 24, 24
    }
  }

  // === Section 2: TileGroup (batched rendering) ===
  text(exo2_16, "TileGroup (batched):", #cccccc): 340, 0

  point {
    pos: 340, 30
    text(m6x11, "regular points:", #888888): 0, 0
    point {
      pos: 0, 15
      bitmap(generated(color(20, 20, #888888))): 0, 0
      bitmap(generated(color(20, 20, #888888))): 25, 0
      bitmap(generated(color(20, 20, #888888))): 50, 0
    }
  }

  point {
    pos: 470, 30
    text(m6x11, "tileGroup:", #888888): 0, 0
    tileGroup {
      pos: 0, 15
      bitmap(generated(color(20, 20, #ff4444))): 0, 0
      bitmap(generated(color(20, 20, #44ff44))): 25, 0
      bitmap(generated(color(20, 20, #4444ff))): 50, 0
    }
  }

  point {
    pos: 600, 30
    text(m6x11, "tileGroup + repeatable:", #888888): 0, 0
    tileGroup {
      pos: 0, 15
      repeatable($i, step(5, dx:5, dy:1)) {
        @alpha(1.0 - $i/5.0) bitmap(generated(color(20, 20, white))): 0, 0
      }
    }
  }

  // === Section 3: Bitmap Alignment ===
  text(exo2_16, "Bitmap alignment:", #cccccc): 0, 115

  point {
    pos: 0, 145
    bitmap(generated(color(120, 1, white))): 0, 25

    text(m6x11, "left,top", #888888): 0, 0
    bitmap(generated(color(20, 20, #ff4444)), left, top): 0, 25

    text(m6x11, "left,center", #888888): 45, 0
    bitmap(generated(color(20, 20, #44ff44)), left, center): 45, 35

    text(m6x11, "left,bottom", #888888): 100, 0
    bitmap(generated(color(20, 20, #4444ff)), left, bottom): 100, 45
  }

  point {
    pos: 160, 145
    bitmap(generated(color(1, 80, white))): 25, 0

    text(m6x11, "left,top", #888888): 0, 82
    bitmap(generated(color(20, 20, #ff4444)), left, top): 25, 0

    text(m6x11, "center", #888888): 50, 82
    bitmap(generated(color(20, 20, #44ff44)), center, top): 75, 0

    text(m6x11, "right", #888888): 100, 82
    bitmap(generated(color(20, 20, #4444ff)), right, top): 125, 0
  }

  // === Section 4: Apply Blocks ===
  text(exo2_16, "Apply blocks:", #cccccc): 340, 115

  point {
    pos: 340, 145
    text(m6x11, "alpha:0.4", #888888): 0, 0
    staticRef($applyExample, state=>alpha): 0, 15

    text(m6x11, "glow filter", #888888): 80, 0
    staticRef($applyExample, state=>filter): 80, 15

    text(m6x11, "scale:0.7", #888888): 190, 0
    staticRef($applyExample, state=>scale): 190, 15
  }

  // === Section 5: References with Parameters ===
  text(exo2_16, "StaticRef with params:", #cccccc): 560, 115

  point {
    pos: 560, 145
    staticRef($refShape, width=>20, height=>20, shape=>rect, c1=>#ff7f50): 0, 0
    staticRef($refShape, width=>40, height=>30, shape=>triangle, c1=>#44ff44): 30, 0
    staticRef($refShape, width=>50, height=>20, shape=>rect, c1=>#4488cc): 80, 0
    staticRef($refShape, width=>30, height=>30, shape=>triangle, c1=>#ffcc44): 140, 0
  }

  // === Section 6: Div/Mod Grid Layout ===
  text(exo2_16, "Repeatable with div/mod:", #cccccc): 0, 240

  point {
    pos: 0, 270
    repeatable($index, step(20, dx:0)) {
      bitmap(generated(color(12, 12, #ff4444))): ($index % 5) * 16, ($index div 5) * 16
    }
  }

  // === Section 7: Conditionals ===
  text(exo2_16, "Conditionals:", #cccccc): 140, 240

  point {
    pos: 140, 270
    text(m6x11, "param=>A:", #888888): 0, 0
    staticRef($condExample, param1=>A): 80, 0
    text(m6x11, "param=>B:", #888888): 0, 15
    staticRef($condExample, param1=>B): 80, 15
    text(m6x11, "param=>C:", #888888): 0, 30
    staticRef($condExample, param1=>C): 80, 30
  }

  // === Section 8: Array Parameters ===
  text(exo2_16, "Array parameters:", #cccccc): 340, 240

  point {
    pos: 340, 270
    text(m6x11, "index 0:", #888888): 0, 0
    staticRef($arrayExample, arr=>["first","second","third"], index=>0): 80, 0
    text(m6x11, "index 1:", #888888): 0, 15
    staticRef($arrayExample, arr=>["first","second","third"], index=>1): 80, 15
    text(m6x11, "index 2:", #888888): 0, 30
    staticRef($arrayExample, arr=>["first","second","third"], index=>2): 80, 30
  }

  // === Section 9: StateAnim Construct ===
  text(exo2_16, "StateAnim construct:", #cccccc): 560, 240

  point {
    pos: 560, 270
    text(m6x11, "shooting", #888888): 0, 0
    bitmap(generated(color(64, 64, #222233))): 0, 15
    stateAnim construct("state1",
      "state1" => sheet "crew2", marine_r_shooting_u, 10, loop
    ): 32, 63

    text(m6x11, "killed", #888888): 80, 0
    bitmap(generated(color(64, 64, #222233))): 80, 15
    stateAnim construct("state1",
      "state1" => sheet "crew2", marine_l_killed, 10, loop
    ): 112, 63
  }

  // === Section 10: Ninepatch Sizes ===
  text(exo2_16, "Ninepatch (various sizes):", #cccccc): 0, 365

  point {
    pos: 0, 395
    ninepatch("ui", "Window_3x3_idle", 60, 40): 0, 0
    ninepatch("ui", "Window_3x3_idle", 100, 60): 70, 0
    ninepatch("ui", "Window_3x3_idle", 40, 80): 180, 0
    ninepatch("ui", "Window_3x3_idle", 150, 30): 230, 0
  }

  // === Section 11: Repeatable with Fade ===
  text(exo2_16, "Repeatable with fade:", #cccccc): 420, 365

  point {
    pos: 420, 395
    repeatable($n, step(5, dx:5, dy:1)) {
      @alpha(1.0 - $n/5.0) scale(2) bitmap(sheet("crew2", "marine_r_shooting_d")): 0, 40;
    }
  }

  // === Section 12: Pixels Lines ===
  text(exo2_16, "Pixels lines:", #cccccc): 0, 490

  point {
    pos: 0, 520
    pixels (
      line 0, 0, 40, 0, #ff4444
      line 0, 0, 0, 40, #44ff44
      line 0, 0, 40, 40, #4444ff
      line 40, 0, 0, 40, #ffff44
    ) {
      scale: 2
    }
  }

  // === Section 13: Text Styles ===
  text(exo2_16, "Text rendering:", #cccccc): 200, 490

  point {
    pos: 200, 520
    text(m6x11, "m6x11 font", #ff4444, left): 0, 0
    text(m5x7, "m5x7 font", #44ff44, left): 0, 14
    text(exo2_14, "exo2 font", #4488cc, left): 0, 26
    text(pixeled6, "pixeled6 font", #ffcc44, left): 0, 44
  }
}
`,Ju=`version: 1.0

// Incremental Updates Demo
// Build once, update live via setParameter() without rebuild

#incrementalDemo programmable(value:0..100=50) {
    pos: 50, 140

    text(exo2_16, "Incremental Mode", #7fdbda, left, 400): 0, 0
    text(exo2_light_14, "The elements below update live when the slider changes value.", #aaaaaa, left, 600): 0, 30

    // Dynamic width bar that responds to value
    text(m6x11, "Bar width = $value * 5", #cccccc, left, 300): 0, 80
    bitmap(generated(color($value * 5, 30, #4488cc))): 0, 100

    // Text showing computed value
    text(m6x11, 'Value: \${value}', #ffffff, left, 200): 0, 150

    // Conditional visibility based on value ranges
    text(m6x11, "Conditional blocks:", #cccccc, left, 300): 0, 190

    @(value <= 25) text(m6x11, "LOW (value <= 25)", #ff4444, left, 300): 20, 220
    @(value => 26..50) text(m6x11, "MEDIUM-LOW (26-50)", #ffaa44, left, 300): 20, 220
    @(value => 51..75) text(m6x11, "MEDIUM-HIGH (51-75)", #44aaff, left, 300): 20, 220
    @(value > 75) text(m6x11, "HIGH (value > 75)", #44ff44, left, 300): 20, 220

    // Expression result
    text(m6x11, 'Expression: $value * 2 + 10 = \${value * 2 + 10}' , #cccccc, left, 300): 0, 260
    bitmap(generated(color($value * 2 + 10, 20, #7fdbda))): 0, 280

    // Repeatable grid sized by value
    text(m6x11, "Grid ($value div 10 items):", #cccccc, left, 300): 0, 320
    repeatable($i, step($value div 10, dx:25)) {
        bitmap(generated(color(20, 20, #446688))): 0, 350
    }

    // Hint text — uses string interpolation; updates automatically with $value
    text(m6x11, 'Drag slider to update all elements. Current value: \${value}', #888888, left, 500): 0, 405

    // Slider placeholder — filled in by screen code
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("valueSlider")) {
        pos: 0, 430
        settings{size:int=>300}
    }
}
`,ep=`version: 1.0

// Interactives Demo — hit regions, cursors, rich highlights, event filters

#interactivesDemo programmable(card1S:[normal,hover,pressed,disabled]=normal, card2S:[normal,hover,pressed,disabled]=normal, card3S:[normal,hover,pressed,disabled]=normal, toggleS:[normal,hover,pressed]=normal, hoverOnlyS:[normal,hover]=normal, allEventsS:[normal,hover,pressed]=normal, auto1S:[normal,hover,pressed]=normal, auto2S:[normal,hover,pressed]=normal, auto3S:[normal,hover,pressed]=normal) {
    text(exo2_16, "Interactive Regions", #7fdbda, left, 600): 0, 0
    text(exo2_light_14, "Hit regions with typed metadata, cursors, highlights, and event filters.", #aaaaaa, left, 700): 0, 30

    // ── Section 1: Basic Interactives ────────────────────────
    text(exo2_16, "Basic", #7fdbda): 0, 65
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 87

    // Simple id
    point {
        pos: 0, 100
        bitmap(generated(color(200, 50, #334466))): 0, 0
        text(m6x11, "Button A - simple id", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonA"): 0, 0
    }

    // With action metadata
    point {
        pos: 220, 100
        bitmap(generated(color(200, 50, #443366))): 0, 0
        text(m6x11, "Button B - action=>buy", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonB", action => "buy"): 0, 0
    }

    // Typed metadata
    point {
        pos: 440, 100
        bitmap(generated(color(200, 50, #336644))): 0, 0
        text(m6x11, "Button C - typed meta", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonC", price:int => 100, label => "Buy Sword"): 0, 0
    }

    // Debug visible
    point {
        pos: 0, 160
        bitmap(generated(color(200, 50, #664433))): 0, 0
        text(m6x11, "Button D - debug mode", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonD", debug): 0, 0
    }

    // Multiple metadata
    point {
        pos: 220, 160
        bitmap(generated(color(250, 50, #445533))): 0, 0
        text(m6x11, "Region E - multi-meta", #ffffff, left, 230): 10, 18
        interactive(250, 50, "regionE", action => "craft", weight:float => 2.5, tier => "rare"): 0, 0
    }

    // Category metadata
    point {
        pos: 490, 160
        bitmap(generated(color(200, 50, #553344))): 0, 0
        text(m6x11, "Region F - armor/chest", #ffffff, left, 180): 10, 18
        interactive(200, 50, "regionF", category => "armor", slot => "chest"): 0, 0
    }

    // ── Section 2: Cursor Demos ──────────────────────────────
    text(exo2_16, "Cursors", #ffeb3b): 0, 230
    bitmap(generated(color(700, 1, #ffeb3b33))): 0, 252
    text(exo2_light_14, "Each region sets a different cursor via cursor=> metadata (pointer, move, text, hide).", #aaaaaa, left, 700): 0, 260

    // Pointer cursor
    point {
        pos: 0, 290
        bitmap(generated(color(160, 45, #3a4a3a))): 0, 0
        text(m6x11, "cursor: pointer", #88cc88, left, 140): 10, 16
        interactive(160, 45, "curPointer", cursor => "pointer"): 0, 0
    }

    // Move cursor
    point {
        pos: 180, 290
        bitmap(generated(color(160, 45, #4a3a3a))): 0, 0
        text(m6x11, "cursor: move", #cc8888, left, 140): 10, 16
        interactive(160, 45, "curMove", cursor => "move"): 0, 0
    }

    // Text cursor
    point {
        pos: 360, 290
        bitmap(generated(color(160, 45, #3a3a4a))): 0, 0
        text(m6x11, "cursor: text", #8888cc, left, 140): 10, 16
        interactive(160, 45, "curText", cursor => "text"): 0, 0
    }

    // Hide cursor
    point {
        pos: 540, 290
        bitmap(generated(color(160, 45, #4a4a3a))): 0, 0
        text(m6x11, "cursor: hide", #cccc88, left, 140): 10, 16
        interactive(160, 45, "curHide", cursor => "hide"): 0, 0
    }

    // ── Section 3: Rich Highlights (bind) ────────────────────
    text(exo2_16, "Rich Highlights", #ff88ff): 0, 355
    bitmap(generated(color(700, 1, #ff88ff33))): 0, 377
    text(exo2_light_14, "Interactives with bind=> drive visual state (normal/hover/pressed). Click toggle to disable.", #aaaaaa, left, 700): 0, 385

    // Rich card 1 — color changes on state
    point {
        pos: 0, 410
        @(card1S => normal)  bitmap(generated(color(160, 50, #334466))): 0, 0
        @(card1S => hover)   bitmap(generated(color(160, 50, #445588))): 0, 0
        @(card1S => pressed) bitmap(generated(color(160, 50, #283a54))): 0, 0
        @(card1S => disabled) bitmap(generated(color(160, 50, #222222))): 0, 0
        @(card1S => disabled) text(m6x11, "DISABLED", #555555, center, 160): 0, 18
        @(card1S => !disabled) text(m6x11, "Card 1 - highlight", #ffffff, left, 140): 10, 18
        interactive(160, 50, "card1", bind => "card1S"): 0, 0
    }

    // Rich card 2 — border highlight on hover
    point {
        pos: 180, 410
        ninepatch("ui", "Window_3x3_idle", 160, 50): 0, 0
        @(card2S => hover) graphics(line(#7fdbda, 1, 0, 0, 159, 0); line(#7fdbda, 1, 159, 0, 159, 49); line(#7fdbda, 1, 159, 49, 0, 49); line(#7fdbda, 1, 0, 49, 0, 0);): 0, 0
        @(card2S => pressed) graphics(line(#ff88ff, 1, 0, 0, 159, 0); line(#ff88ff, 1, 159, 0, 159, 49); line(#ff88ff, 1, 159, 49, 0, 49); line(#ff88ff, 1, 0, 49, 0, 0);): 0, 0
        @(card2S => disabled) bitmap(generated(color(160, 50, #22222288))): 0, 0
        @(card2S => !disabled) text(m6x11, "Card 2 - border", #7fdbda, left, 140): 10, 18
        @(card2S => disabled) text(m6x11, "DISABLED", #555555, center, 160): 0, 18
        interactive(160, 50, "card2", bind => "card2S"): 0, 0
    }

    // Rich card 3 — color + text change
    point {
        pos: 360, 410
        @(card3S => normal)  bitmap(generated(color(160, 50, #443355))): 0, 0
        @(card3S => hover)   bitmap(generated(color(160, 50, #665577))): 0, 0
        @(card3S => pressed) bitmap(generated(color(160, 50, #332244))): 0, 0
        @(card3S => disabled) bitmap(generated(color(160, 50, #222222))): 0, 0
        @(card3S => normal)  text(m6x11, "Card 3 - normal", #ccaaff, left, 140): 10, 18
        @(card3S => hover)   text(m6x11, "Card 3 - HOVER", #eeccff, left, 140): 10, 18
        @(card3S => pressed) text(m6x11, "Card 3 - PRESSED", #aa88dd, left, 140): 10, 18
        @(card3S => disabled) text(m6x11, "DISABLED", #555555, center, 160): 0, 18
        interactive(160, 50, "card3", bind => "card3S"): 0, 0
    }

    // Disable toggle
    point {
        pos: 540, 410
        @(toggleS => normal)  bitmap(generated(color(140, 50, #553333))): 0, 0
        @(toggleS => hover)   bitmap(generated(color(140, 50, #774444))): 0, 0
        @(toggleS => pressed) bitmap(generated(color(140, 50, #442222))): 0, 0
        text(m6x11, "Toggle Disable", #ff8888, center, 140): 0, 18
        interactive(140, 50, "toggleDisable", bind => "toggleS"): 0, 0
    }

    // ── Section 4: Event Filters ─────────────────────────────
    text(exo2_16, "Event Filters", #88ccff): 0, 480
    bitmap(generated(color(700, 1, #88ccff33))): 0, 502
    text(exo2_light_14, "Filter which events fire: events:[hover] (hover only), events:[click] (click only).", #aaaaaa, left, 700): 0, 510

    // Hover only (EVENT_HOVER = 1)
    point {
        pos: 0, 540
        @(hoverOnlyS => normal) bitmap(generated(color(200, 45, #2a3a4a))): 0, 0
        @(hoverOnlyS => hover)  bitmap(generated(color(200, 45, #3a5a6a))): 0, 0
        text(m6x11, "Hover only (no click)", #88ccff, left, 180): 10, 16
        interactive(200, 45, "hoverOnly", events: [hover], bind => "hoverOnlyS"): 0, 0
    }

    // Click only (EVENT_CLICK = 2)
    point {
        pos: 220, 540
        bitmap(generated(color(200, 45, #3a2a4a))): 0, 0
        text(m6x11, "Click only (no hover)", #cc88ff, left, 180): 10, 16
        interactive(200, 45, "clickOnly", events: [click]): 0, 0
    }

    // All events (default)
    point {
        pos: 440, 540
        @(allEventsS => normal)  bitmap(generated(color(200, 45, #2a4a3a))): 0, 0
        @(allEventsS => hover)   bitmap(generated(color(200, 45, #3a6a5a))): 0, 0
        @(allEventsS => pressed) bitmap(generated(color(200, 45, #1a3a2a))): 0, 0
        text(m6x11, "All events (default)", #88ffcc, left, 180): 10, 16
        interactive(200, 45, "allEvents", bind => "allEventsS"): 0, 0
    }

    // ── Section 5: Auto-Wired (autoStatus) ───────────────────
    text(exo2_16, "Auto-Wired (autoStatus)", #66ff99): 0, 605
    bitmap(generated(color(700, 1, #66ff9933))): 0, 627
    text(exo2_light_14, "autoStatus=> auto-wires state machine via addInteractives() — no manual UIRichInteractiveHelper needed.", #aaaaaa, left, 700): 0, 635

    // Auto-wired button 1 — color shift
    point {
        pos: 0, 665
        @(auto1S => normal)  bitmap(generated(color(200, 50, #2a4a2a))): 0, 0
        @(auto1S => hover)   bitmap(generated(color(200, 50, #3a6a3a))): 0, 0
        @(auto1S => pressed) bitmap(generated(color(200, 50, #1a3a1a))): 0, 0
        @(auto1S => normal)  text(m6x11, "Auto 1 - normal", #66ff99, left, 180): 10, 18
        @(auto1S => hover)   text(m6x11, "Auto 1 - HOVER", #99ffbb, left, 180): 10, 18
        @(auto1S => pressed) text(m6x11, "Auto 1 - PRESSED", #44cc77, left, 180): 10, 18
        interactive(200, 50, "auto1", autoStatus => "auto1S"): 0, 0
    }

    // Auto-wired button 2 — border glow
    point {
        pos: 220, 665
        ninepatch("ui", "Window_3x3_idle", 200, 50): 0, 0
        @(auto2S => hover) graphics(line(#66ff99, 1, 0, 0, 199, 0); line(#66ff99, 1, 199, 0, 199, 49); line(#66ff99, 1, 199, 49, 0, 49); line(#66ff99, 1, 0, 49, 0, 0);): 0, 0
        @(auto2S => pressed) graphics(line(#44cc77, 1, 0, 0, 199, 0); line(#44cc77, 1, 199, 0, 199, 49); line(#44cc77, 1, 199, 49, 0, 49); line(#44cc77, 1, 0, 49, 0, 0);): 0, 0
        text(m6x11, "Auto 2 - border", #66ff99, left, 180): 10, 18
        interactive(200, 50, "auto2", autoStatus => "auto2S"): 0, 0
    }

    // Auto-wired button 3 — with metadata
    point {
        pos: 440, 665
        @(auto3S => normal)  bitmap(generated(color(200, 50, #3a3a2a))): 0, 0
        @(auto3S => hover)   bitmap(generated(color(200, 50, #5a5a3a))): 0, 0
        @(auto3S => pressed) bitmap(generated(color(200, 50, #2a2a1a))): 0, 0
        text(m6x11, "Auto 3 - with meta", #ccff66, left, 180): 10, 18
        interactive(200, 50, "auto3", autoStatus => "auto3S", action => "autoAction", tier => "epic"): 0, 0
    }

    // ── Status display ───────────────────────────────────────
    bitmap(generated(color(700, 45, #1a1a2e))): 0, 735
    #statusText(updatable) text(m6x11, "Hover or click any interactive region", #888888): 10, 743
    #clickText(updatable) text(m6x11, "No region clicked yet", #7fdbda): 10, 763
}
`,np=`version: 1.0

// Loadout Lab — DSL feature stress-test and codegen-vs-runtime parity test.
// Focuses on: repeatable, repeatable2d, @switch (nested + outer), @(x=>y)
// conditional, slider-driven parameter counts, button widgets driving param
// writes, expressions in positions, @switch inside nested repeatables.

#loadoutLab programmable(
    theme:[a, b, c] = b,
    layout:[row, grid, nested] = grid,
    countX:uint = 8,
    countY:uint = 5) {

    // Fixed root offset via child point — both runtime and codegen handle
    // child-point positions (root-level pos is codegen-skipped). Y offset
    // clears the master screen's description text above.
    point {
        pos: 50, 80

        // ── Ninepatch frame wrapping everything ─────────────────────────────
        ninepatch("ui", "Window_3x3_idle", 560, 310): -10, -15

        // ── Theme selector: 3 button widgets write \`theme\` param ────────────
        text(m6x11, "Theme:", #ffffff): 0, 5
        placeholder(generated(cross(90, 22, #FF0000)), builderParameter("btnThemeA")) {
            pos: 60, -5
            settings{text=>"A", width:int=>90, height:int=>22, font=>"m6x11"}
        }
        placeholder(generated(cross(90, 22, #FF0000)), builderParameter("btnThemeB")) {
            pos: 160, -5
            settings{text=>"B", width:int=>90, height:int=>22, font=>"m6x11"}
        }
        placeholder(generated(cross(90, 22, #FF0000)), builderParameter("btnThemeC")) {
            pos: 260, -5
            settings{text=>"C", width:int=>90, height:int=>22, font=>"m6x11"}
        }

        // ── Layout selector: 3 button widgets write \`layout\` param ──────────
        text(m6x11, "Layout:", #ffffff): 0, 33
        placeholder(generated(cross(90, 22, #FF0000)), builderParameter("btnLayoutRow")) {
            pos: 60, 25
            settings{text=>"Row", width:int=>90, height:int=>22, font=>"m6x11"}
        }
        placeholder(generated(cross(90, 22, #FF0000)), builderParameter("btnLayoutGrid")) {
            pos: 160, 25
            settings{text=>"Grid", width:int=>90, height:int=>22, font=>"m6x11"}
        }
        placeholder(generated(cross(90, 22, #FF0000)), builderParameter("btnLayoutNested")) {
            pos: 260, 25
            settings{text=>"Nested", width:int=>90, height:int=>22, font=>"m6x11"}
        }

        // ── X / Y count sliders (drive countX / countY) ─────────────────────
        text(m6x11, "X:", #ffffff): 0, 63
        placeholder(generated(cross(200, 16, #FF0000)), builderParameter("sliderX")) {
            pos: 20, 63
            settings{size:int=>200}
        }
        #xValue(updatable) text(m6x11, "8", #ffffff, center, 40): 240, 63

        text(m6x11, "Y:", #ffffff): 0, 85
        placeholder(generated(cross(200, 16, #FF0000)), builderParameter("sliderY")) {
            pos: 20, 85
            settings{size:int=>200}
        }
        #yValue(updatable) text(m6x11, "5", #ffffff, center, 40): 240, 85

        // Reset: hand-rolled bitmap + text + interactive (contrast with widget buttons)
        bitmap(generated(color(80, 24, #4488cc))): 380, 70
        text(m6x11, "Reset", #ffffff, center, 80): 380, 76
        interactive(80, 24, "btnReset", action => "reset"): 380, 70

        // Separator
        bitmap(generated(color(540, 1, #444444))): 0, 112

        // ── Display area: @switch(layout) arms use *different* repeatable
        //    constructs + *different* conditional styles on purpose. ────────
        point {
            pos: 0, 125

            @switch(layout) {
                // ROW: 1D repeatable + @(theme=>x) conditional on siblings.
                //      Indexed updatable #rowCell[$x] holds a tick counter
                //      that the base class pokes every 0.25s.
                row {
                    repeatable($x, step($countX, dx: 28)) {
                        @(theme => a) bitmap(generated(color(24, 120, #4488cc))): 0, 0
                        @(theme => b) bitmap(generated(color(24, 120, #88cc44))): 0, 0
                        @(theme => c) bitmap(generated(color(24, 120, #cc4488))): 0, 0
                        #rowCell[$x] text(m5x7, "0", #ffffff, center, 24): 0, 2
                        interactive(24, 120, $x, type => "rowCell"): 0, 0
                    }
                }

                // GRID: repeatable2d, same @(theme=>x) conditional pattern.
                //       Indexed-2D updatable #gridCell[$x,$y] — one counter
                //       per cell.
                grid {
                    repeatable2d($x, $y, step($countX, dx: 28), step($countY, dy: 16)) {
                        @(theme => a) bitmap(generated(color(26, 14, #4488cc))): 0, 0
                        @(theme => b) bitmap(generated(color(26, 14, #88cc44))): 0, 0
                        @(theme => c) bitmap(generated(color(26, 14, #cc4488))): 0, 0
                        #gridCell[$x, $y] text(m5x7, "0", #ffffff, center, 26): 0, 1
                        interactive(26, 14, ""+$x+","+$y, type => "gridCell"): 0, 0
                    }
                }

                // NESTED: repeatable-in-repeatable + @switch(theme) *inside*
                //         the inner body — a switch nested in two loops nested
                //         in another switch arm. Weird-combo territory.
                //         Indexed-2D updatable uses ($c, $r) loop var names.
                nested {
                    repeatable($r, step($countY, dy: 16)) {
                        repeatable($c, step($countX, dx: 28)) {
                            @switch(theme) {
                                a { bitmap(generated(color(26, 14, #225588))): 0, 0 }
                                b { bitmap(generated(color(26, 14, #228855))): 0, 0 }
                                c { bitmap(generated(color(26, 14, #885522))): 0, 0 }
                            }
                            #nestedCell[$c, $r] text(m5x7, "0", #ffffff, center, 26): 0, 1
                            interactive(26, 14, ""+$c+","+$r, type => "nestedCell"): 0, 0
                        }
                    }
                }
            }
        }

        // Hover readout (updatable)
        #hoverText(updatable) text(exo2_light_14, "Drag X/Y to resize. Theme + Layout pick constructs.", #666666, left, 540): 0, 268
    }
}
`,tp=`version: 1.0

// Macro Performance Benchmark
// Compares builder, builder+incremental, and macro creation & update performance.

// Simple programmable: bitmap + text (2 elements)
#perfSimple programmable(value:uint=0, color:color=#446688) {
    bitmap(generated(color(30, 12, $color))): 0, 0
    text(m6x11, $value, #ffffff): 2, 1
}

// Complex programmable: avatar, name, level, HP bar, MP bar, status icon (~11 elements)
#perfComplex programmable(hp:uint=100, maxHp:uint=100, mp:uint=50, maxMp:uint=50, name:string="Unit", level:uint=1) {
    // Avatar
    bitmap(generated(color(40, 40, #334455))): 0, 0
    // Name + Level
    text(m6x11, $name, #ffffff): 45, 0
    text(m6x11, 'Lv.\${$level}', #aaaaaa): 45, 12
    // HP bar
    bitmap(generated(color(100, 6, #1a1a1a))): 45, 24
    bitmap(generated(color($hp * 100 div $maxHp, 6, #ff4444))): 45, 24
    text(m6x11, '\${$hp}/\${$maxHp}', #ffffff, left, 100): 150, 22
    // MP bar
    bitmap(generated(color(100, 6, #1a1a1a))): 45, 32
    bitmap(generated(color($mp * 100 div $maxMp, 6, #4488cc))): 45, 32
    text(m6x11, '\${$mp}/\${$maxMp}', #ffffff, left, 100): 150, 30
    // Status icon
    bitmap(generated(color(8, 8, #44cc44))): 150, 0
}

// Repeatable programmable: param-dependent repeat count (tests incremental structural rebuild)
#perfRepeatable programmable(value:uint=3) {
    repeatable($i, step($value, dx:6)) {
        bitmap(generated(color(5, 5, #446688))): 0, 0
    }
}

// Small button with pixel font for compact controls
#perfButton programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Btn") {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", 90, 26): 0,0
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", 90, 26): 0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", 90, 26): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", 90, 26): 0,0
    text(m6x11, $buttonText, #ffffff, center, 90): 0,7
}

// Controls panel — vertical layout with descriptions
#perfControls programmable() {
    pos: 40, 80

    text(exo2_16, "Macro Performance Benchmark", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    text(m6x11, "Count:", #cccccc): 0, 33
    placeholder(generated(cross(120, 26, #FF0000)), builderParameter("countDropdown")) {
        pos: 50, 28
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, panelMode=>scalable, height:int=>200}
    }

    // Add buttons — vertical stack with descriptions
    placeholder(generated(cross(90, 26, #FF0000)), builderParameter("addSimpleBtn")) {
        pos: 0, 62
    }
    text(m6x11, "bitmap + text (2 elements)", #888888): 100, 69

    placeholder(generated(cross(90, 26, #FF0000)), builderParameter("addComplexBtn")) {
        pos: 0, 90
    }
    text(m6x11, "avatar, bars, text (~11 elements)", #888888): 100, 97

    placeholder(generated(cross(90, 26, #FF0000)), builderParameter("addRepeatableBtn")) {
        pos: 0, 118
    }
    text(m6x11, "repeatable with 0..5 bitmaps", #888888): 100, 125

    // Object count
    text(m6x11, "Objects:", #888888): 0, 152
    #objectCount(updatable) text(m6x11, "Builder: 0 | Incr: 0 | Macro: 0", #cccccc): 60, 152

    // Update + Clear
    placeholder(generated(cross(90, 26, #FF0000)), builderParameter("updateBtn")) {
        pos: 0, 168
    }
    text(m6x11, "cycles repeat 0..5, randomizes others", #888888): 100, 175

    placeholder(generated(cross(90, 26, #FF0000)), builderParameter("clearBtn")) {
        pos: 0, 196
    }

    // Timing results
    text(m6x11, "Create:", #888888): 0, 230
    #createBuilderTime(updatable) text(m6x11, "Builder: --", #ffaa44): 60, 230
    #createIncrTime(updatable) text(m6x11, "Incr: --", #44aaff): 250, 230
    #createMacroTime(updatable) text(m6x11, "Macro: --", #44ff88): 420, 230

    text(m6x11, "Update:", #888888): 0, 244
    #updateBuilderTime(updatable) text(m6x11, "Builder: --", #ffaa44): 60, 244
    #updateIncrTime(updatable) text(m6x11, "Incr: --", #44aaff): 250, 244
    #updateMacroTime(updatable) text(m6x11, "Macro: --", #44ff88): 420, 244
}
`,ap=`version: 1.0

// Settings Demo
// Two use cases: .manim styling configures code | .manim info flows back to code

// === Panel variants — same role, different settings ===
// The Haxe code reads width/height/gap to lay out 3 instances.

#panelCompact programmable() {
    ninepatch("ui", "Window_3x3_idle", 180, 70): 0, 0
    text(exo2_14, "Compact", #7fdbda): 12, 10
    text(m6x11, "180 x 70", #888888): 12, 32
    text(m5x7, "gap: 10", #666666): 12, 50
    settings{width:int => 180, height:int => 70, gap:int => 10, category => "compact"}
}

#panelWide programmable() {
    ninepatch("ui", "Window_3x3_idle", 220, 55): 0, 0
    text(exo2_14, "Wide", #7fdbda): 12, 6
    text(m6x11, "220 x 55", #888888): 12, 28
    text(m5x7, "gap: 15", #666666): 120, 6
    settings{width:int => 220, height:int => 55, gap:int => 15, category => "banner"}
}

#panelTall programmable() {
    ninepatch("ui", "Window_3x3_idle", 110, 130): 0, 0
    text(exo2_14, "Tall", #7fdbda): 12, 10
    text(m6x11, "110 x 130", #888888): 12, 32
    text(m5x7, "gap: 8", #666666): 12, 50
    settings{width:int => 110, height:int => 130, gap:int => 8, category => "sidebar"}
}

// === Main layout ===

#settingsDemo programmable() {
    pos: 50, 80

    // Section 1: Syntax reference
    text(exo2_16, "Settings Syntax", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22
    text(exo2_light_14, "settings{key:type => value} — typed metadata readable by Haxe code.", #aaaaaa, left, 700): 0, 30

    point {
        pos: 0, 55
        bitmap(generated(color(165, 36, #222233))): 0, 0
        text(m5x7, "string", #666666): 8, 3
        text(m6x11, "category => \\"ui\\"", #7fdbda): 8, 14

        bitmap(generated(color(165, 36, #222233))): 175, 0
        text(m5x7, "int", #666666): 183, 3
        text(m6x11, "width:int => 180", #7fdbda): 183, 14

        bitmap(generated(color(165, 36, #222233))): 350, 0
        text(m5x7, "float", #666666): 358, 3
        text(m6x11, "speed:float => 2.5", #7fdbda): 358, 14

        bitmap(generated(color(165, 36, #222233))): 525, 0
        text(m5x7, "color", #666666): 533, 3
        text(m6x11, "bg:color => #1a1a2e", #7fdbda): 533, 14
    }

    // Section 2: Settings-driven layout
    text(exo2_16, "Settings-Driven Layout", #7fdbda): 0, 115
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 137
    text(exo2_light_14, "Same code builds 3 panels. It reads width/height/gap from settings to position them.", #aaaaaa, left, 700): 0, 143

    // Variant buttons
    placeholder(generated(cross(90, 30, #FF0000)), builderParameter("btnCompact")) {
        pos: 0, 170
        settings{width:int => 90, height:int => 28}
    }
    placeholder(generated(cross(90, 30, #FF0000)), builderParameter("btnWide")) {
        pos: 100, 170
        settings{width:int => 90, height:int => 28}
    }
    placeholder(generated(cross(90, 30, #FF0000)), builderParameter("btnTall")) {
        pos: 200, 170
        settings{width:int => 90, height:int => 28}
    }

    // Container — Haxe code adds panel instances here
    #panelContainer point: 0, 210

    // Inspector — shows what settings the code read
    ninepatch("ui", "Window_3x3_idle", 300, 120): 0, 365
    text(exo2_14, "Settings Read by Code", #7fdbda): 15, 375
    #inspWidth(updatable) text(m6x11, "width: 180", #cccccc, left, 270): 15, 398
    #inspHeight(updatable) text(m6x11, "height: 70", #cccccc, left, 270): 15, 415
    #inspGap(updatable) text(m6x11, "gap: 10", #cccccc, left, 270): 15, 432
    #inspCategory(updatable) text(m6x11, "category: \\"compact\\"", #cccccc, left, 270): 15, 449
    text(m5x7, "rootSettings.getIntOrDefault() / getStringOrDefault()", #888, left, 280): 15, 472

    // Layout result info
    #logText(updatable) text(exo2_light_14, "Click a variant to see settings drive layout.", #666666): 0, 500
}
`,rp=`version: 1.0

// Anim Path Demo
// Circles follow paths with curves for alpha, scale, progress, color & direction

curves {
    #linear curve {
        easing: linear
    }
    #easeInQuad curve {
        easing: easeinquad
    }
    #easeOutQuad curve {
        easing: easeoutquad
    }
    #easeInOutQuad curve {
        easing: easeinoutquad
    }
    #easeInCubic curve {
        easing: easeincubic
    }
    #easeOutCubic curve {
        easing: easeoutcubic
    }
    #easeInOutCubic curve {
        easing: easeinoutcubic
    }
    #easeInBack curve {
        easing: easeinback
    }
    #easeOutBack curve {
        easing: easeoutback
    }
    #easeInOutBack curve {
        easing: easeinoutback
    }
    #easeOutBounce curve {
        easing: easeoutbounce
    }
    #easeOutElastic curve {
        easing: easeoutelastic
    }
    #accelDecel curve {
        [0..0.5] easeincubic
        [0.5..1.0] easeoutcubic
    }
    #snapBack curve {
        [0..0.7] easeoutquad (0, 1.15)
        [0.7..1.0] easeinoutquad (1.15, 1.0)
    }
    #cubicBezier curve {
        easing: cubicbezier(0.68, -0.55, 0.27, 1.55)
    }
    #custom curve {
        points: [(0, 0), (0.2, 0.8), (0.4, 0.2), (0.6, 0.9), (0.8, 0.4), (1.0, 1.0)]
    }
    #fadeIn curve {
        points: [(0, 0), (0.3, 1.0), (1.0, 1.0)]
    }
    #pulse curve {
        points: [(0, 0.3), (0.5, 1.0), (1.0, 0.3)]
    }
}

paths {
    #circuit path {
        forward(80)
        arc(50, 90)
        forward(60)
        arc(50, 90)
        forward(80)
        arc(50, 90)
        forward(60)
        arc(50, 90)
    }
    #star path {
        forward(60)
        turn(144)
        forward(60)
        turn(144)
        forward(60)
        turn(144)
        forward(60)
        turn(144)
        forward(60)
    }
    #spiral path {
        spiral(10, 70, 720)
    }
    #waves path {
        wave(30, 60, 4)
    }
    #bezierLoop path {
        bezier(relative, 100, 0, 30, -80)
        bezier(relative, 100, 0, 30, 80)
        arc(40, 180)
        bezier(relative, -100, 0, -30, 80)
        bezier(relative, -100, 0, -30, -80)
        close
    }
    #circle path {
        arc(50, 360)
    }
}

#animPathDemo programmable() {
    text(exo2_16, "Animated Paths", #7fdbda, left, 400): 50, 80
    text(exo2_light_14, "Left-click: set start. Right-click: set end. Circles follow paths with curves.", #aaaaaa, left, 700): 50, 105

    // Display area (680x400)
    bitmap(generated(color(680, 400, #111122))): 50, 130

    // Right column labels
    text(m6x11, "Path:", #aaaaaa, left, 70): 750, 110
    #selectedPath(updatable) text(m6x11, "circuit", #7fdbda, left, 100): 800, 110

    text(m6x11, "Curve:", #aaaaaa, left, 70): 750, 330
    #selectedCurve(updatable) text(m6x11, "linear", #7fdbda, left, 100): 810, 330

    // Count dropdown
    text(m6x11, "Count:", #aaaaaa, left, 50): 50, 545
    placeholder(generated(cross(60, 24, #FF0000)), builderParameter("countDropdown")) {
        pos: 100, 543
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, panelMode=>scalable, height:int=>120}
    }

    // Mode dropdown
    text(m6x11, "Mode:", #aaaaaa, left, 50): 200, 545
    placeholder(generated(cross(110, 24, #FF0000)), builderParameter("modeDropdown")) {
        pos: 240, 543
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, panelMode=>scalable, height:int=>120}
    }

    // Apply-to checkboxes
    text(m6x11, "Apply:", #aaaaaa, left, 50): 50, 580
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkAlpha")) { pos: 100, 578 }
    text(m6x11, "Alpha", #cccccc, left, 40): 122, 580
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkScale")) { pos: 175, 578 }
    text(m6x11, "Scale", #cccccc, left, 40): 197, 580
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkProgress")) { pos: 250, 578 }
    text(m6x11, "Progress", #cccccc, left, 55): 272, 580
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkColor")) { pos: 345, 578 }
    text(m6x11, "Color", #cccccc, left, 40): 367, 580
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkDirection")) { pos: 420, 578 }
    text(m6x11, "Direction", #cccccc, left, 60): 442, 580

    // Color start/end swatches (created in code)
    text(m6x11, "Start:", #aaaaaa, left, 40): 515, 580
    text(m6x11, "End:", #aaaaaa, left, 40): 515, 615

    // Speed slider + Randomize
    text(m6x11, "Speed:", #aaaaaa, left, 50): 50, 615
    placeholder(generated(cross(180, 20, #FF0000)), builderParameter("speedSlider")) {
        pos: 100, 613
        settings{min:int=>10, max:int=>500, step:int=>10}
    }
    #speedValue(updatable) text(m6x11, "100%", #7fdbda, left, 50): 290, 615

    placeholder(generated(cross(90, 24, #FF0000)), builderParameter("btnRandomize")) { pos: 370, 612 }

    // Status
    #statusText(updatable) text(m6x11, "L-click start, R-click end | Path: circuit | Curve: linear | Count: 5", #7fdbda, left, 900): 50, 650
}
`,ip=`version: 1.0

// Color Picker Dialog
// Modal dialog with R/G/B sliders, live color preview, hex display, and preset colors.

#colorPickerDialog programmable(dialogTitle = "Pick a Color") {
    pos: 300, 120

    ninepatch("ui", "Droppanel_3x3_idle", 400, 340): 0, 0
    text(exo2_black_20, $dialogTitle, #ffffff, center, 360): 20, 15
    bitmap(generated(color(360, 1, #ffffff33))): 20, 45

    // R slider
    text(m6x11, "R", #ff4444, left, 20): 25, 65
    placeholder(generated(cross(200, 14, #FF0000)), builderParameter("sliderR")) {
        pos: 45, 65
        settings{size:int=>200, min:float=>0, max:float=>255, step:float=>1}
    }
    #rValue(updatable) text(m6x11, "0", #cccccc, left, 40): 255, 65

    // G slider
    text(m6x11, "G", #44ff44, left, 20): 25, 90
    placeholder(generated(cross(200, 14, #FF0000)), builderParameter("sliderG")) {
        pos: 45, 90
        settings{size:int=>200, min:float=>0, max:float=>255, step:float=>1}
    }
    #gValue(updatable) text(m6x11, "0", #cccccc, left, 40): 255, 90

    // B slider
    text(m6x11, "B", #4444ff, left, 20): 25, 115
    placeholder(generated(cross(200, 14, #FF0000)), builderParameter("sliderB")) {
        pos: 45, 115
        settings{size:int=>200, min:float=>0, max:float=>255, step:float=>1}
    }
    #bValue(updatable) text(m6x11, "0", #cccccc, left, 40): 255, 115

    // Color preview swatch
    text(m6x11, "Preview:", #888888, left, 60): 25, 150
    #colorPreview(updatable) bitmap(generated(color(100, 60, #000000))): 25, 168

    // Hex value display
    text(m6x11, "Hex:", #888888, left, 40): 145, 175
    #hexValue(updatable) text(exo2_16, "#000000", #ffffff, left, 150): 185, 172

    // Preset colors
    text(m6x11, "Presets:", #888888, left, 60): 25, 238
    point {
        pos: 25, 255
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preRed")) {
            pos: 0, 0
            settings{buildName=>"colorButton", color:int=>0xFFff0000, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preOrange")) {
            pos: 39, 0
            settings{buildName=>"colorButton", color:int=>0xFFff8800, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preYellow")) {
            pos: 78, 0
            settings{buildName=>"colorButton", color:int=>0xFFffff00, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preGreen")) {
            pos: 117, 0
            settings{buildName=>"colorButton", color:int=>0xFF00ff00, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preCyan")) {
            pos: 156, 0
            settings{buildName=>"colorButton", color:int=>0xFF00ffff, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preBlue")) {
            pos: 195, 0
            settings{buildName=>"colorButton", color:int=>0xFF0000ff, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("prePurple")) {
            pos: 234, 0
            settings{buildName=>"colorButton", color:int=>0xFFff00ff, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preWhite")) {
            pos: 273, 0
            settings{buildName=>"colorButton", color:int=>0xFFffffff, width:int=>34, height:int=>20}
        }
    }

    // OK / Cancel buttons
    point {
        pos: 25, 290
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")) {
            pos: 0, 0
            settings{width:int=>120, height:int=>26}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")) {
            pos: 230, 0
            settings{width:int=>120, height:int=>26}
        }
    }
}
`,op=`version: 1.0

// Curves Demo
// 1D curve visualization with animated easing demos

curves {
    #linear curve {
        easing: linear
    }
    #easeInQuad curve {
        easing: easeinquad
    }
    #easeOutQuad curve {
        easing: easeoutquad
    }
    #easeInOutQuad curve {
        easing: easeinoutquad
    }
    #easeInCubic curve {
        easing: easeincubic
    }
    #easeOutCubic curve {
        easing: easeoutcubic
    }
    #easeInOutCubic curve {
        easing: easeinoutcubic
    }
    #easeInBack curve {
        easing: easeinback
    }
    #easeOutBack curve {
        easing: easeoutback
    }
    #easeInOutBack curve {
        easing: easeinoutback
    }
    #easeOutBounce curve {
        easing: easeoutbounce
    }
    #easeOutElastic curve {
        easing: easeoutelastic
    }
    #accelDecel curve {
        [0..0.5] easeincubic
        [0.5..1.0] easeoutcubic
    }
    #snapBack curve {
        [0..0.7] easeoutquad (0, 1.15)
        [0.7..1.0] easeinoutquad (1.15, 1.0)
    }
    #cubicBezier curve {
        easing: cubicbezier(0.68, -0.55, 0.27, 1.55)
    }
    #custom curve {
        points: [(0, 0), (0.2, 0.8), (0.4, 0.2), (0.6, 0.9), (0.8, 0.4), (1.0, 1.0)]
    }
}

#curvesDemo programmable() {
    text(exo2_16, "Curve Visualization", #7fdbda, left, 400): 50, 80
    text(exo2_light_14, "Select a curve to see its shape and animated effects.", #aaaaaa, left, 700): 50, 110

    // Curve graph
    #curveLabel(updatable) text(m6x11, "linear", #7fdbda, left, 250): 50, 160
    bitmap(generated(color(250, 180, #222233))): 50, 180

    // Animation demos
    text(m6x11, "Y Position", #7fdbda, left, 100): 350, 160
    bitmap(generated(color(100, 180, #222233))): 350, 180

    text(m6x11, "Alpha", #7fdbda, left, 100): 480, 160
    bitmap(generated(color(100, 180, #222233))): 480, 180

    text(m6x11, "Scale", #7fdbda, left, 100): 610, 160
    bitmap(generated(color(100, 180, #222233))): 610, 180

    // Right column - lists
    text(m6x11, "Curves:", #aaaaaa, left, 70): 750, 80
    #selectedCurve(updatable) text(m6x11, "linear", #7fdbda, left, 100): 810, 80

    text(m6x11, "Bitmap:", #aaaaaa, left, 70): 750, 300
    #selectedBitmap(updatable) text(m6x11, "Star", #7fdbda, left, 100): 810, 300

    // Controls
    text(m6x11, "Inverse:", #aaaaaa, left, 80): 50, 400
    placeholder(generated(cross(24, 24, #FF0000)), builderParameter("inverseChk")) { pos: 120, 396 }

    text(m6x11, "Speed:", #aaaaaa, left, 80): 250, 400
    placeholder(generated(cross(200, 20, #FF0000)), builderParameter("speedSlider")) {
        pos: 310, 398
        settings{min:int=>10}
        settings{max:int=>500}
        settings{step:int=>10}
    }
    #speedValue(updatable) text(m6x11, "100%", #7fdbda, left, 60): 530, 400
}
`,lp=`version: 1.0

// Filters Demo — 9 filters shown simultaneously with interactive controls
// Each filter defined as a programmable with filter: syntax and $param expressions

// ── Shared bitmap preview (renders selected bitmap with scaling) ──────────
#bitmapPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack) {
    @(bitmapType=>marine) apply { scale: 2 }
    @(bitmapType=>skull) apply { scale: 5 }
    @(bitmapType=>dice) apply { scale: 5 }
    @(bitmapType=>rectBlack) bitmap(generated(color(60, 60, #000000)));
    @(bitmapType=>rectWhite) bitmap(generated(color(60, 60, #ffffff)));
    @(bitmapType=>rectGreen) bitmap(generated(color(60, 60, #00cc00)));
    @(bitmapType=>circleWhite) bitmap(file("circle_soft.png"));
    @(bitmapType=>circleBlack) @tint(#000000) bitmap(file("circle_soft.png"));
    @(bitmapType=>circleRed) @tint(#ff0000) bitmap(file("circle_soft.png"));
    @(bitmapType=>star) bitmap(file("star.png"));
    @(bitmapType=>skull) bitmap(sheet("crew2", "icon-skull"));
    @(bitmapType=>marine) bitmap(sheet("crew2", "marine_r_standing"));
    @(bitmapType=>dice) bitmap(sheet("crew2", "dice"));
}

// ── Per-filter preview programmables ──────────────────────────────────────
// Each wraps bitmapPreview in a filtered point container

#outlinePreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    outlineSize:float=1.0, outlineColor:int=0xFFff0000) {
    point {
        filter: outline($outlineSize, $outlineColor)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#glowPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    glowAlpha:float=0.8, glowRadius:float=8, glowSmooth:uint=1, glowKnockout:uint=0, glowColor:int=0xFFffaa00) {
    // 4 combinations of smooth x knockout (nested conditionals for AND logic)
    @(glowSmooth > 0) point {
        @(glowKnockout > 0) point {
            filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius, smoothColor: true, knockout: true)
            dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
        }
        @(glowKnockout <= 0) point {
            filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius, smoothColor: true)
            dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
        }
    }
    @(glowSmooth <= 0) point {
        @(glowKnockout > 0) point {
            filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius, knockout: true)
            dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
        }
        @(glowKnockout <= 0) point {
            filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius)
            dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
        }
    }
}

#blurPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    blurRadius:float=4, blurGain:float=1.0) {
    point {
        filter: blur($blurRadius, $blurGain)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#saturatePreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    satValue:float=0.0) {
    point {
        filter: saturate($satValue)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#brightnessPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    brightValue:float=1.5) {
    point {
        filter: brightness($brightValue)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#dropShadowPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    dsDist:float=3, dsAngle:float=30, dsAlpha:float=0.5, dsRadius:float=6, dsSmooth:uint=0, dsColor:int=0xFF000000) {
    @(dsSmooth > 0) point {
        filter: dropShadow(distance: $dsDist, angle: $dsAngle, color: $dsColor, alpha: $dsAlpha, radius: $dsRadius, smoothColor: true)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
    @(dsSmooth <= 0) point {
        filter: dropShadow(distance: $dsDist, angle: $dsAngle, color: $dsColor, alpha: $dsAlpha, radius: $dsRadius)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#grayscalePreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    gsValue:float=1.0) {
    point {
        filter: grayscale($gsValue)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#huePreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    hueValue:float=0.0) {
    point {
        filter: hue($hueValue)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#pixelOutlinePreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    poStrength:float=0.5, poColor:int=0xFF0000ff) {
    point {
        filter: pixelOutline(knockout, $poColor, $poStrength)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

// ── Per-filter cell programmables (layout + controls) ─────────────────────
// Bitmap preview is added as child by Haxe at (10, 14)

#outlineCell programmable() {
    text(m6x11, "outline", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Color", #888888, left, 38): 0, 98
    placeholder(generated(cross(60, 22, #FF0000)), builderParameter("bColor")) {
        pos: 40, 94
        settings{buildName=>"colorButton", color:int=>0xFFff0000, width:int=>60, height:int=>22}
    }

    text(m6x11, "Size", #888888, left, 38): 0, 120
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sSize")) {
        pos: 40, 120
        settings{size:int=>100, min:float=>0, max:float=>5, step:float=>0.1}
    }
    #sizeValue(updatable) text(m6x11, "1.0", #cccccc, left, 45): 145, 120
}

#glowCell programmable() {
    text(m6x11, "glow", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Color", #888888, left, 38): 0, 98
    placeholder(generated(cross(60, 22, #FF0000)), builderParameter("bColor")) {
        pos: 40, 94
        settings{buildName=>"colorButton", color:int=>0xFFffaa00, width:int=>60, height:int=>22}
    }

    text(m6x11, "Alpha", #888888, left, 38): 0, 120
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sAlpha")) {
        pos: 40, 120
        settings{size:int=>100, min:float=>0, max:float=>1, step:float=>0.05}
    }
    #alphaValue(updatable) text(m6x11, "0.8", #cccccc, left, 45): 145, 120

    text(m6x11, "Radius", #888888, left, 38): 0, 136
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sRadius")) {
        pos: 40, 136
        settings{size:int=>100, min:float=>0, max:float=>50, step:float=>1}
    }
    #radiusValue(updatable) text(m6x11, "8", #cccccc, left, 45): 145, 136

    text(m6x11, "Smooth", #888888, left, 50): 0, 160
    placeholder(generated(cross(14, 14, #FF0000)), builderParameter("cSmooth")) {
        pos: 53, 160
        settings{buildName=>checkbox, initialValue:int=>1}
    }
    text(m6x11, "Knockout", #888888, left, 50): 80, 160
    placeholder(generated(cross(14, 14, #FF0000)), builderParameter("cKnockout")) {
        pos: 133, 160
        settings{buildName=>checkbox}
    }
}

#blurCell programmable() {
    text(m6x11, "blur", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Radius", #888888, left, 38): 0, 94
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sRadius")) {
        pos: 40, 94
        settings{size:int=>100, min:float=>0, max:float=>20, step:float=>0.5}
    }
    #radiusValue(updatable) text(m6x11, "4", #cccccc, left, 45): 145, 94

    text(m6x11, "Gain", #888888, left, 38): 0, 110
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sGain")) {
        pos: 40, 110
        settings{size:int=>100, min:float=>0, max:float=>5, step:float=>0.1}
    }
    #gainValue(updatable) text(m6x11, "1.0", #cccccc, left, 45): 145, 110
}

#saturateCell programmable() {
    text(m6x11, "saturate", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Value", #888888, left, 38): 0, 94
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sValue")) {
        pos: 40, 94
        settings{size:int=>100, min:float=>0, max:float=>2, step:float=>0.05}
    }
    #valueText(updatable) text(m6x11, "0.0", #cccccc, left, 45): 145, 94
}

#brightnessCell programmable() {
    text(m6x11, "brightness", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Value", #888888, left, 38): 0, 94
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sValue")) {
        pos: 40, 94
        settings{size:int=>100, min:float=>0, max:float=>3, step:float=>0.05}
    }
    #valueText(updatable) text(m6x11, "1.5", #cccccc, left, 45): 145, 94
}

#dropShadowCell programmable() {
    text(m6x11, "dropShadow", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Color", #888888, left, 38): 0, 98
    placeholder(generated(cross(60, 22, #FF0000)), builderParameter("bColor")) {
        pos: 40, 94
        settings{buildName=>"colorButton", color:int=>0xFF000000, width:int=>60, height:int=>22}
    }

    text(m6x11, "Dist", #888888, left, 38): 0, 120
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sDist")) {
        pos: 40, 120
        settings{size:int=>100, min:float=>0, max:float=>20, step:float=>0.5}
    }
    #distValue(updatable) text(m6x11, "3", #cccccc, left, 45): 145, 120

    text(m6x11, "Angle", #888888, left, 38): 0, 136
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sAngle")) {
        pos: 40, 136
        settings{size:int=>100, min:float=>0, max:float=>360, step:float=>5}
    }
    #angleValue(updatable) text(m6x11, "30", #cccccc, left, 45): 145, 136

    text(m6x11, "Alpha", #888888, left, 38): 0, 152
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sAlpha")) {
        pos: 40, 152
        settings{size:int=>100, min:float=>0, max:float=>1, step:float=>0.05}
    }
    #alphaValue(updatable) text(m6x11, "0.5", #cccccc, left, 45): 145, 152

    text(m6x11, "Radius", #888888, left, 38): 0, 168
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sRadius")) {
        pos: 40, 168
        settings{size:int=>100, min:float=>0, max:float=>20, step:float=>0.5}
    }
    #radiusValue(updatable) text(m6x11, "6", #cccccc, left, 45): 145, 168

    text(m6x11, "Smooth", #888888, left, 50): 0, 188
    placeholder(generated(cross(14, 14, #FF0000)), builderParameter("cSmooth")) {
        pos: 53, 188
        settings{buildName=>checkbox}
    }
}

#grayscaleCell programmable() {
    text(m6x11, "grayscale", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Value", #888888, left, 38): 0, 94
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sValue")) {
        pos: 40, 94
        settings{size:int=>100, min:float=>0, max:float=>1, step:float=>0.05}
    }
    #valueText(updatable) text(m6x11, "1.0", #cccccc, left, 45): 145, 94
}

#hueCell programmable() {
    text(m6x11, "hue", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Value", #888888, left, 38): 0, 94
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sValue")) {
        pos: 40, 94
        settings{size:int=>100, min:float=>0, max:float=>6.28, step:float=>0.1}
    }
    #valueText(updatable) text(m6x11, "0.0", #cccccc, left, 45): 145, 94
}

#pixelOutlineCell programmable() {
    text(m6x11, "pixelOutline", #aaaaaa, left, 180): 0, 0

    text(m6x11, "Color", #888888, left, 38): 0, 98
    placeholder(generated(cross(60, 22, #FF0000)), builderParameter("bColor")) {
        pos: 40, 94
        settings{buildName=>"colorButton", color:int=>0xFF0000ff, width:int=>60, height:int=>22}
    }

    text(m6x11, "Strength", #888888, left, 38): 0, 120
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("sStrength")) {
        pos: 40, 120
        settings{size:int=>100, min:float=>0, max:float=>1, step:float=>0.05}
    }
    #strengthValue(updatable) text(m6x11, "0.5", #cccccc, left, 45): 145, 120
}

// ── Main layout with grid-positioned filter cells ─────────────────────────
#filtersLayout programmable() {
    text(exo2_16, "Visual Filters", #7fdbda, left, 400): 50, 80
    text(exo2_light_14, "Double-click a bitmap type to change preview", #aaaaaa, left, 600): 50, 130

    placeholder(generated(cross(160, 200, #FF0000)), builderParameter("bitmapList")) {
        pos: 50, 160
    }

    #selectedText(updatable) text(exo2_light_14, "Active: Black Rect", #7fdbda, left, 200): 50, 380

    // 3x3 grid of filter cells
    point {
        pos: 230, 160
        grid: 293, 205

        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell0")) { pos: $grid.pos(0, 0) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell1")) { pos: $grid.pos(1, 0) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell2")) { pos: $grid.pos(2, 0) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell3")) { pos: $grid.pos(0, 1) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell4")) { pos: $grid.pos(1, 1) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell5")) { pos: $grid.pos(2, 1) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell6")) { pos: $grid.pos(0, 2) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell7")) { pos: $grid.pos(1, 2) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell8")) { pos: $grid.pos(2, 2) }
    }
}
`,sp=`version: 1.0

// Floating Text Demo
// AnimatedPath-driven floating text for damage numbers, heal text, status effects, etc.
// Uses FloatingTextHelper to bind h2d.Objects to AnimatedPaths with auto-removal.

// ─── Paths ─────────────────────────────────────────────

paths {
    #floatUp path { lineTo(0, -60) }
    #floatUpRight path { lineTo(30, -70) }
    #arcUp path { bezier(0, -80, -20, -40) }
    #bounceUp path { bezier(0, -90, 10, -50) }
    #windDrift path { bezier(80, -40, 40, -70) }
    #splatter path { bezier(80, 20, 40, -130) }
}

// ─── Curves ────────────────────────────────────────────

curves {
    #fadeOut curve { points: [(0, 1.0), (0.6, 0.9), (1.0, 0.0)] }
    #fadeOutSlow curve { points: [(0, 1.0), (0.8, 0.8), (1.0, 0.0)] }
    #growShrink curve { points: [(0, 0.5), (0.15, 1.2), (0.3, 1.0), (1.0, 0.8)] }
    #critScale curve { points: [(0, 0.3), (0.1, 1.5), (0.2, 1.0), (0.8, 1.0), (1.0, 0.6)] }
    #windFade curve { points: [(0, 1.0), (0.3, 1.0), (0.7, 0.6), (1.0, 0.0)] }
    #windScale curve { points: [(0, 1.0), (0.3, 0.9), (1.0, 0.6)] }
    #splatterScale curve { points: [(0, 0.4), (0.05, 1.4), (0.15, 1.0), (0.5, 0.9), (1.0, 0.5)] }
    #splatterFade curve { points: [(0, 1.0), (0.4, 1.0), (0.7, 0.5), (1.0, 0.0)] }
    #wobbleOsc curve { points: [(0, 0), (0.1, -0.524), (0.3, 0.524), (0.5, -0.524), (0.7, 0.524), (0.9, -0.524), (1.0, 0)] }
    #wobbleEnv curve { easing: easeinoutcubic  points: [(0, 0), (1.0, 1.0)] }
    #wobbleRot curve { multiply: [wobbleOsc, wobbleEnv] }
}

// ─── Animated Paths ────────────────────────────────────

#dmgAnim animatedPath {
    path: floatUp
    type: time
    duration: 1.0
    0.0: alphaCurve: fadeOut, scaleCurve: growShrink
}

#healAnim animatedPath {
    path: floatUp
    type: time
    duration: 1.2
    0.0: alphaCurve: fadeOutSlow, scaleCurve: growShrink
}

#critAnim animatedPath {
    path: bounceUp
    type: time
    duration: 1.5
    0.0: alphaCurve: fadeOut, scaleCurve: critScale
}

#xpAnim animatedPath {
    path: floatUpRight
    type: time
    duration: 1.5
    0.0: alphaCurve: fadeOutSlow
}

#windAnim animatedPath {
    path: windDrift
    type: time
    duration: 1.8
    0.0: alphaCurve: windFade, scaleCurve: windScale
}

#splatterAnim animatedPath {
    path: splatter
    type: time
    duration: 1.0
    easing: easeOutCubic
    0.0: alphaCurve: splatterFade, scaleCurve: splatterScale
}

#wobbleAnim animatedPath {
    path: floatUp
    type: time
    duration: 1.5
    0.0: alphaCurve: fadeOut, scaleCurve: growShrink, rotationCurve: wobbleRot
}

// ─── Demo Layout ───────────────────────────────────────

#floatingTextDemo programmable() {
    pos: 40, 70

    text(exo2_16, "Floating Text Helper", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22
    text(exo2_light_14, "AnimatedPath-driven floating text. Click anywhere in the area below to spawn text.", #aaaaaa, left, 700): 0, 30

    // Spawn area background
    bitmap(generated(color(700, 400, #222240))): 0, 70
    graphics(line(#333355, 1, 0, 0, 699, 0); line(#333355, 1, 699, 0, 699, 399); line(#333355, 1, 699, 399, 0, 399); line(#333355, 1, 0, 399, 0, 0);): 0, 70

    // Style selector
    text(m6x11, "Style:", #888888): 0, 482
    placeholder(generated(cross(140, 24, #FF0000)), builderParameter("styleDropdown")): 40, 478

    // Auto-spawn + Clear
    text(m6x11, "Auto-spawn:", #888888): 220, 482
    placeholder(generated(cross(24, 24, #FF0000)), builderParameter("chkAutoSpawn")): 300, 478
    placeholder(generated(cross(80, 24, #FF0000)), builderParameter("btnClear")): 340, 478

    #statusText(updatable) text(m6x11, "Active: 0  |  Total spawned: 0", #666666): 0, 520
}
`,cp=`version: 1.0

// Particles Demo — Basics
// Emission modes, lifetime, speed, size, fading
// Uses new angle units, direction constants, aliases, and named emit params

layouts {
    #positions list {
        point: 160, 280
        point: 400, 80
        point: 680, 280
        point: 940, 280
    }
}

#fire particles {
    count: 80
    emit: cone(dist: 10, distRand: 5, angle: up, angleSpread: 25deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 1.8
    speed: 60
    speedRand: 0.3
    gravity: 40
    gravityAngle: up
    size: 0.6
    sizeRand: 0.3
    fadeOut: 0.7
    fadeIn: 0.1
    colorStops: 0.0 #FF4400, 0.4 #FFAA00, 1.0 #FFFF88
    blendMode: add
}

#rain particles {
    count: 150
    emit: box(w: 150, h: 5, angle: down + 5deg, angleSpread: 5deg)
    tiles: file("spark.png")
    loop: true
    maxLife: 1.2
    lifeRand: 0.3
    speed: 300
    speedRand: 0.15
    size: 0.3
    sizeRand: 0.1
    fadeIn: 0.05
    fadeOut: 0.9
    colorStops: 0.0 #AACCFF, 1.0 #6688CC
    autoRotate: true
}

#sparkles particles {
    count: 50
    emit: circle(r: 60, rRand: 30, angle: 0deg, angleSpread: 0deg)
    tiles: file("star.png")
    loop: true
    maxLife: 2.0
    speed: 15
    speedRand: 0.5
    size: 0.4
    sizeRand: 0.3
    fadeIn: 0.2
    fadeOut: 0.6
    colorStops: 0.0 #FFFFFF, 0.5 #88DDFF, 1.0 #4488FF
    blendMode: add
    rotSpeed: 45deg
    rotSpeedRand: 0.5
}

#explosion particles {
    count: 60
    emit: point(dist: 0, distRand: 15)
    tiles: file("circle_hard.png") file("flare.png")
    loop: true
    maxLife: 0.8
    lifeRand: 0.3
    speed: 200
    speedRand: 0.5
    gravity: 150
    gravityAngle: down
    size: 0.5
    sizeRand: 0.4
    fadeIn: 0.0
    fadeOut: 0.4
    colorStops: 0.0 #FFFF88, 0.5 #FF4400, 1.0 #882200
    blendMode: add
    emitSync: 0.9
}

#basicsUI programmable() {
    text(m6x11, "Fire", #FF6622, center, 120): 120, 20
    text(m3x6, "named emit + colorStops", #888888, center, 180): 120, 36
    text(m6x11, "Rain", #88BBFF, center, 120): 380, 20
    text(m3x6, "box + direction expr", #888888, center, 180): 380, 36
    text(m6x11, "Sparkles", #88DDFF, center, 120): 640, 20
    text(m3x6, "circle + aliases", #888888, center, 180): 640, 36
    text(m6x11, "Explosion", #FF8844, center, 120): 900, 20
    text(m3x6, "direction constants", #888888, center, 180): 900, 36
}
`,dp=`version: 1.0

// Particles Demo — Bounds & Collision
// New bounds: combined syntax with box() and line()

layouts {
    #positions list {
        point: 160, 380
        point: 420, 380
        point: 680, 380
        point: 940, 380
    }
}

// Kill at boundaries — particles disappear at edges
#killBounds particles {
    count: 60
    emit: point(dist: 0, distRand: 30)
    tiles: file("dot.png")
    loop: true
    maxLife: 3.0
    speed: 80
    speedRand: 0.4
    size: 0.7
    sizeRand: 0.2
    fadeIn: 0.1
    fadeOut: 0.95
    colorStops: 0.0 #FF4444, 1.0 #FF8888
    blendMode: add
    bounds: kill, box(x: -80, y: -80, w: 160, h: 160)
}

// Bounce off walls with damping
#bounceBounds particles {
    count: 40
    emit: point(dist: 0, distRand: 20)
    tiles: file("circle_hard.png")
    loop: true
    maxLife: 4.0
    speed: 100
    speedRand: 0.3
    gravity: 80
    gravityAngle: down
    size: 0.5
    sizeRand: 0.2
    fadeIn: 0.05
    fadeOut: 0.9
    colorStops: 0.0 #44FF44, 1.0 #88FF88
    blendMode: add
    bounds: bounce(0.7), box(x: -80, y: -80, w: 160, h: 160)
}

// Wrap around — seamless teleportation
#wrapBounds particles {
    count: 50
    emit: cone(dist: 0, distRand: 10, angle: 45deg, angleSpread: 30deg)
    tiles: file("star.png")
    loop: true
    maxLife: 5.0
    speed: 50
    speedRand: 0.3
    size: 0.4
    sizeRand: 0.2
    fadeIn: 0.1
    fadeOut: 0.95
    colorStops: 0.0 #FFFF44, 1.0 #FFAA22
    blendMode: add
    bounds: wrap, box(x: -80, y: -80, w: 160, h: 160)
    rotSpeed: 60deg
}

// Line bounds — bounce off diagonal walls
#lineBounds particles {
    count: 40
    emit: point(dist: 0, distRand: 15)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 4.0
    speed: 70
    speedRand: 0.3
    gravity: 60
    gravityAngle: down
    size: 0.4
    sizeRand: 0.2
    fadeIn: 0.05
    fadeOut: 0.9
    colorStops: 0.0 #8844FF, 1.0 #CC88FF
    blendMode: add
    bounds: bounce(0.8), line(-80, 80, 80, 80), line(-80, -80, -80, 80), line(80, -80, -80, -80), line(80, 80, 80, -80)
}

#boundsUI programmable() {
    text(m6x11, "Kill", #FF4444, center, 120): 120, 20
    text(m3x6, "bounds: kill, box()", #888888, center, 160): 120, 36
    text(m6x11, "Bounce", #44FF44, center, 120): 380, 20
    text(m3x6, "bounds: bounce(), box()", #888888, center, 180): 380, 36
    text(m6x11, "Wrap", #FFFF44, center, 120): 640, 20
    text(m3x6, "bounds: wrap, box()", #888888, center, 160): 640, 36
    text(m6x11, "Line Bounds", #8844FF, center, 120): 900, 20
    text(m3x6, "bounds: bounce(), line()", #888888, center, 180): 900, 36
}
`,up=`version: 1.0

// Particles Demo — Colors & Curves
// colorStops (new syntax), sizeCurve, velocityCurve with inline easings

layouts {
    #positions list {
        point: 160, 380
        point: 420, 380
        point: 680, 380
        point: 940, 380
    }
}

curves {
    #growShrink curve {
        points: [(0, 0.2), (0.3, 1.0), (1.0, 0.1)]
    }
    #pulse curve {
        points: [(0, 0.5), (0.25, 1.2), (0.5, 0.6), (0.75, 1.1), (1.0, 0.3)]
    }
    #slowdown curve {
        points: [(0, 1.0), (0.3, 0.5), (1.0, 0.05)]
    }
}

// Multi-segment color gradient: red -> yellow -> cyan -> blue
#rainbow particles {
    count: 80
    emit: cone(dist: 5, distRand: 3, angle: up, angleSpread: 20deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 2.5
    speed: 50
    speedRand: 0.2
    gravity: 20
    gravityAngle: up
    size: 0.5
    sizeRand: 0.2
    fadeIn: 0.1
    fadeOut: 0.8
    colorStops: 0.0 #FF2200, 0.33 #FFCC00, 0.66 #00FFCC, 1.0 #4444FF
    blendMode: add
}

// Size curve: grow then shrink using named curve
#sizeCurveDemo particles {
    count: 50
    emit: point(dist: 0, distRand: 10)
    tiles: file("ring.png")
    loop: true
    maxLife: 2.0
    speed: 40
    speedRand: 0.3
    size: 0.3
    sizeRand: 0.1
    fadeIn: 0.1
    fadeOut: 0.7
    colorStops: 0.0 #FFFFFF, 1.0 #FF88FF
    sizeCurve: growShrink
    blendMode: add
}

// Velocity curve: particles slow down over time
#velocityCurveDemo particles {
    count: 60
    emit: point(dist: 0, distRand: 20)
    tiles: file("dot.png")
    loop: true
    maxLife: 1.5
    speed: 120
    speedRand: 0.3
    size: 0.8
    sizeRand: 0.2
    fadeIn: 0.05
    fadeOut: 0.6
    colorStops: 0.0 #88FF88, 1.0 #228822
    velocityCurve: slowdown
}

// Pulsing size with easing color
#pulseDemo particles {
    count: 40
    emit: circle(r: 30, rRand: 10, angle: 0deg, angleSpread: 0deg)
    tiles: file("glow.png")
    loop: true
    maxLife: 2.0
    speed: 10
    speedRand: 0.5
    size: 0.4
    sizeRand: 0.2
    fadeIn: 0.15
    fadeOut: 0.7
    colorStops: 0.0 #FF00FF easeInQuad, 0.5 #00FFFF easeOutQuad, 1.0 #FFFF00
    sizeCurve: pulse
    blendMode: add
}

#colorsUI programmable() {
    text(m6x11, "Rainbow", #FFCC00, center, 120): 120, 20
    text(m3x6, "colorStops gradient", #888888, center, 120): 120, 36
    text(m6x11, "Size Curve", #FF88FF, center, 120): 380, 20
    text(m3x6, "grow + shrink", #888888, center, 120): 380, 36
    text(m6x11, "Velocity", #88FF88, center, 120): 640, 20
    text(m3x6, "slowdown curve", #888888, center, 120): 640, 36
    text(m6x11, "Pulse", #FF00FF, center, 120): 900, 20
    text(m3x6, "easing in colorStops", #888888, center, 120): 900, 36
}
`,pp=`version: 1.0

// Particles Demo — Full-screen tabs for particle feature exploration

#particlesDemo programmable() {
    pos: 0, 20

    placeholder(generated(cross(800, 40, #FF0000)), builderParameter("particleTabs")) {
        pos: 0, 70
        settings{tabButtonBuildName=>tab, tabPanel.width=>1280, tabPanel.height=>640, tabPanel.contentRoot=>contentArea}
    }

    #description(updatable) text(exo2_light_14, "", #aaaaaa, left, 1200): 20, 40
}
`,fp=`version: 1.0

// Particles Demo — Motion & Force Fields
// Direction constants, angle units, force fields

layouts {
    #positions list {
        point: 160, 380
        point: 420, 380
        point: 680, 380
        point: 940, 380
    }
}

// Central vortex swirl
#vortex particles {
    count: 100
    emit: circle(r: 80, rRand: 20, angle: 0deg, angleSpread: 0deg)
    tiles: file("dot.png")
    loop: true
    maxLife: 3.0
    speed: 5
    speedRand: 0.5
    size: 0.6
    sizeRand: 0.3
    fadeIn: 0.15
    fadeOut: 0.7
    colorStops: 0.0 #4488FF, 0.5 #FF44FF, 1.0 #44FFFF
    blendMode: add
    forceFields: [vortex(0, 0, 150, 200), attractor(0, 0, 30, 180)]
}

// Turbulence — chaotic swirling motion
#turbulence particles {
    count: 100
    emit: box(w: 160, h: 160, center: true, angle: 0deg, angleSpread: 0.5turn)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 2.5
    speed: 10
    speedRand: 0.5
    size: 0.4
    sizeRand: 0.3
    fadeIn: 0.1
    fadeOut: 0.6
    colorStops: 0.0 #FF8844, 0.5 #FFCC44, 1.0 #FF4488
    blendMode: add
    forceFields: [turbulence(120, 0.01, 2.0)]
}

// Attractor + repulsor battle
#pushPull particles {
    count: 80
    emit: box(w: 200, h: 200, center: true, angle: 0deg, angleSpread: 0.5turn)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 2.5
    speed: 30
    speedRand: 0.4
    size: 0.3
    sizeRand: 0.2
    fadeIn: 0.1
    fadeOut: 0.6
    colorStops: 0.0 #FF8844, 1.0 #44FF88
    blendMode: add
    forceFields: [attractor(-50, 0, 120, 200), repulsor(50, 0, 120, 200)]
}

// Heavy gravity fountain
#fountain particles {
    count: 60
    emit: cone(dist: 0, distRand: 5, angle: up, angleSpread: 15deg)
    tiles: file("circle_hard.png")
    loop: true
    maxLife: 2.0
    lifeRand: 0.2
    speed: 150
    speedRand: 0.2
    gravity: 200
    gravityAngle: down
    size: 0.4
    sizeRand: 0.2
    fadeIn: 0.05
    fadeOut: 0.8
    colorStops: 0.0 #4488FF, 0.5 #88CCFF, 1.0 #224488
    blendMode: add
}

#motionUI programmable() {
    text(m6x11, "Vortex", #8888FF, center, 120): 120, 20
    text(m3x6, "vortex + attractor", #888888, center, 120): 120, 36
    text(m6x11, "Turbulence", #999999, center, 120): 380, 20
    text(m3x6, "box(center: true)", #888888, center, 120): 380, 36
    text(m6x11, "Push/Pull", #FF8844, center, 120): 640, 20
    text(m3x6, "attractor + repulsor", #888888, center, 120): 640, 36
    text(m6x11, "Fountain", #4488FF, center, 120): 900, 20
    text(m3x6, "angle: up/down", #888888, center, 120): 900, 36
}
`,mp=`version: 1.0

// Particles Demo — Path Emission & PathGuide
// emit: path(), pathguide force field

layouts {
    #positions list {
        point: 160, 380
        point: 420, 380
        point: 680, 380
        point: 940, 380
    }
}

paths {
    #orbit path {
        arc(80, 360)
        close
    }
    #figure8 path {
        bezier(relative, 80, -60, 20, -80, 80, -20)
        bezier(relative, -80, 60, -20, 80, -80, 20)
        close
    }
    #wave path {
        wave(40, 80, 3)
    }
}

// Emit along circular path
#pathEmit particles {
    count: 60
    emit: path(orbit)
    tiles: file("dot.png")
    loop: true
    maxLife: 1.5
    speed: 15
    speedRand: 0.5
    size: 0.6
    sizeRand: 0.3
    fadeIn: 0.1
    fadeOut: 0.6
    colorStops: 0.0 #44FFFF, 1.0 #4444FF
    blendMode: add
}

// Emit along circle with tangent velocity — particles fly away fast
#pathTangent particles {
    count: 60
    emit: path(orbit, tangent)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 0.6
    speed: 180
    speedRand: 0.3
    size: 0.5
    sizeRand: 0.2
    fadeIn: 0.05
    fadeOut: 0.4
    colorStops: 0.0 #FF88FF, 1.0 #FF44AA
    blendMode: add
    autoRotate: true
}

// PathGuide force field — particles attracted to and flowing along circle
#pathGuideDemo particles {
    count: 100
    emit: cone(dist: 100, distRand: 5, angle: up, angleSpread: 25deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 3.0
    speed: 1
    speedRand: 0.5
    size: 0.35
    sizeRand: 0.2
    fadeIn: 0.15
    fadeOut: 0.7
    colorStops: 0.0 #88FF44, 0.5 #FFFF44, 1.0 #FF8844
    blendMode: add
    forceFields: [pathguide(orbit, 1000, 200, 650)]
}

// Emit along wave + flow along it
#waveStream particles {
    count: 70
    emit: path(wave, tangent)
    tiles: file("flare.png")
    loop: true
    maxLife: 2.0
    speed: 40
    speedRand: 0.3
    size: 0.2
    sizeRand: 0.15
    fadeIn: 0.1
    fadeOut: 0.6
    colorStops: 0.0 #FFFFFF, 0.5 #88AAFF, 1.0 #4466CC
    blendMode: add
    autoRotate: true
    forceFields: [pathguide(wave, 40, 30, 80)]
}

#pathsUI programmable() {
    text(m6x11, "Path Emit", #44FFFF, center, 120): 120, 20
    text(m3x6, "circle path", #888888, center, 120): 120, 36
    text(m6x11, "Tangent", #FF88FF, center, 120): 380, 20
    text(m3x6, "circle + tangent", #888888, center, 120): 380, 36
    text(m6x11, "PathGuide", #88FF44, center, 120): 640, 20
    text(m3x6, "attract to circle", #888888, center, 120): 640, 36
    text(m6x11, "Wave Stream", #88AAFF, center, 120): 900, 20
    text(m3x6, "emit + guide", #888888, center, 120): 900, 36
}
`,hp=`version: 1.0

// Particles Demo — Sub-Emitters
// onBirth, onDeath, onCollision triggers with spawning

layouts {
    #positions list {
        point: 320, 380
        point: 700, 380
    }
}

// Main firework — launches upward, spawns sparks on death
#fireworkMain particles {
    count: 8
    emit: cone(dist: 0, distRand: 5, angle: up, angleSpread: 10deg)
    tiles: file("circle_hard.png")
    loop: true
    maxLife: 1.0
    lifeRand: 0.2
    speed: 120
    speedRand: 0.2
    gravity: 100
    gravityAngle: down
    size: 0.4
    fadeIn: 0.0
    fadeOut: 0.8
    colorStops: 0.0 #FFFFFF, 1.0 #FFFF88
    blendMode: add
    emitSync: 0.1
    subEmitters: [{
        groupId: "fireworkBurst"
        trigger: ondeath
        probability: 1.0
        burstCount: 20
    }]
}

// Burst of sparks on firework death
#fireworkBurst particles {
    count: 0
    emit: point(dist: 0, distRand: 25)
    tiles: file("star.png") file("dot.png")
    loop: false
    maxLife: 1.2
    lifeRand: 0.3
    speed: 80
    speedRand: 0.5
    gravity: 60
    gravityAngle: down
    size: 0.3
    sizeRand: 0.3
    fadeIn: 0.0
    fadeOut: 0.5
    colorStops: 0.0 #FFFF44, 0.5 #FF4400, 1.0 #880000
    blendMode: add
}

// Bouncing ball that spawns sparks on collision
#bounceBall particles {
    count: 5
    emit: point(dist: 0, distRand: 10)
    tiles: file("circle_hard.png")
    loop: true
    maxLife: 5.0
    speed: 80
    speedRand: 0.3
    gravity: 120
    gravityAngle: down
    size: 0.6
    fadeIn: 0.0
    fadeOut: 0.95
    colorStops: 0.0 #44CCFF, 1.0 #44CCFF
    blendMode: add
    bounds: bounce(0.85), box(x: -120, y: -100, w: 240, h: 200)
    subEmitters: [{
        groupId: "bounceSparks"
        trigger: oncollision
        probability: 1.0
        burstCount: 5
    }]
}

// Sparks on bounce
#bounceSparks particles {
    count: 0
    emit: point(dist: 0, distRand: 8)
    tiles: file("dot.png")
    loop: false
    maxLife: 0.5
    speed: 40
    speedRand: 0.5
    gravity: 30
    gravityAngle: down
    size: 0.5
    sizeRand: 0.3
    fadeIn: 0.0
    fadeOut: 0.3
    colorStops: 0.0 #FFFFFF, 1.0 #44CCFF
    blendMode: add
}

#subEmittersUI programmable() {
    text(m6x11, "Fireworks", #FFFF44, center, 140): 280, 20
    text(m3x6, "onDeath spawns burst", #888888, center, 140): 280, 36
    text(m6x11, "Bounce Sparks", #44CCFF, center, 140): 660, 20
    text(m3x6, "onCollision spawns sparks", #888888, center, 160): 660, 36
}
`,gp=`version: 1.0

// Particles Demo
// Multiple particle effect presets: fire, sparkles, smoke

#fire particles {
    count: 80
    emit: cone(dist: 10, distRand: 5, angle: up, angleSpread: 25deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 1.8
    speed: 60
    speedRand: 0.3
    gravity: 40
    gravityAngle: up
    size: 0.6
    sizeRand: 0.3
    fadeOut: 0.7
    fadeIn: 0.1
    colorStops: 0.0 #FF4400, 0.4 #FFAA00, 1.0 #FF220044
    blendMode: add
}

#sparkles particles {
    count: 40
    emit: circle(r: 50, rRand: 30, angle: 0deg, angleSpread: 0.5turn)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 2.5
    speed: 20
    speedRand: 0.5
    gravity: 10
    gravityAngle: up
    size: 0.3
    sizeRand: 0.2
    fadeIn: 0.2
    fadeOut: 0.6
    colorStops: 0.0 #FFFFFF, 0.5 #88DDFF, 1.0 #4488FF00
    blendMode: add
}

#smoke particles {
    count: 60
    emit: cone(dist: 5, distRand: 3, angle: up, angleSpread: 15deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 3.0
    speed: 30
    speedRand: 0.4
    gravity: 15
    gravityAngle: up
    size: 0.8
    sizeRand: 0.4
    fadeIn: 0.3
    fadeOut: 0.5
    colorStops: 0.0 #888888, 0.5 #666666, 1.0 #44444400
    blendMode: alpha
}

#particlesDemo programmable() {
    text(exo2_16, "Particle Effects", #7fdbda, left, 400): 50, 80
    text(exo2_light_14, "Three particle presets: fire, sparkles, and smoke", #aaaaaa, left, 600): 50, 110

    // Labels under each particle display
    text(m6x11, "Fire", #FF4400, center, 100): 150, 500
    text(m6x11, "Sparkles", #88DDFF, center, 100): 500, 500
    text(m6x11, "Smoke", #888888, center, 100): 850, 500

    // Preset selector buttons
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnFire")) {
        pos: 50, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnSparkles")) {
        pos: 170, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnSmoke")) {
        pos: 290, 660
    }
}
`,xp=`version: 1.0

// Paths Demo
// Object follows defined paths using paths{} definitions

paths {
    #circuit path {
        forward(100)
        arc(80, 90)
        forward(150)
        arc(80, 90)
        forward(100)
        arc(80, 90)
        forward(150)
        arc(80, 90)
    }
    #star path {
        turn(0)
        forward(80)
        turn(144)
        forward(80)
        turn(144)
        forward(80)
        turn(144)
        forward(80)
        turn(144)
        forward(80)
    }
    #zigzag path {
        lineTo(60, -40)
        lineTo(60, 40)
        lineTo(60, -40)
        lineTo(60, 40)
        lineTo(60, -40)
        lineTo(60, 40)
    }
    #spiral path {
        spiral(20, 120, 720)
    }
    #waves path {
        wave(40, 80, 4)
    }
    #bezierLoop path {
        bezier(relative, 150, 0, 50, -120)
        bezier(relative, 150, 0, 50, 120)
        arc(60, 180)
        bezier(relative, -150, 0, -50, 120)
        bezier(relative, -150, 0, -50, -120)
        close
    }
}

#pathMarker bitmap(generated(color(12, 12, #7fdbda)), center);

#pathsDemo programmable() {
    text(exo2_16, "Path Animation", #7fdbda, left, 400): 50, 80
    text(exo2_light_14, "Objects follow defined paths. Select a path type below.", #aaaaaa, left, 600): 50, 110

    // Path display area
    bitmap(generated(color(800, 450, #1a1a2e))): 240, 140

    // Path name labels
    text(m6x11, "Circuit: forward + arc", #aaaaaa, left, 300): 50, 150
    text(m6x11, "Star: forward + turn", #aaaaaa, left, 300): 50, 170
    text(m6x11, "Zigzag: lineTo", #aaaaaa, left, 300): 50, 190
    text(m6x11, "Spiral: spiral", #aaaaaa, left, 300): 50, 210
    text(m6x11, "Waves: wave", #aaaaaa, left, 300): 50, 230
    text(m6x11, "Bezier: bezier + arc + close", #aaaaaa, left, 300): 50, 250

    // Speed label
    text(exo2_14, "Speed", #cccccc, left, 100): 50, 600

    // Speed slider
    placeholder(generated(cross(200, 20, #FF0000)), builderParameter("speedSlider")) {
        pos: 50, 620
    }

    // Path selector buttons
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnCircuit")) {
        pos: 50, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnStar")) {
        pos: 170, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnZigzag")) {
        pos: 290, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnSpiral")) {
        pos: 410, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnWaves")) {
        pos: 530, 660
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnBezier")) {
        pos: 650, 660
    }
}

#panim animatedPath {
    path: circuit
    type: distance
    speed: 80
    0.0: event("start")
    1.0: event("end")
}
`,bp=`version: 1.0

// Tab 4: Filters — Showcasing all .anim filter types applied to state animations

#filtersUI programmable() {

    // Reference (no filter)
    text(exo2_14, ".anim Filter Types", #7fdbda): 0, 0
    bitmap(generated(color(720, 1, #7fdbda33))): 0, 18

    text(m6x11, "No Filter", #888888): 10, 28
    bitmap(generated(color(64, 64, #222233))): 10, 42
    #filterNone stateanim("marine.anim", "idle", direction=>"r"): 42, 90

    // Row 1: tint, brightness, saturate, grayscale
    text(m6x11, "tint: #FF4444", #888888): 120, 28
    bitmap(generated(color(64, 64, #222233))): 120, 42
    #filterTint stateanim("marine.anim", "idle", direction=>"r"): 152, 90

    text(m6x11, "brightness: 1.5", #888888): 230, 28
    bitmap(generated(color(64, 64, #222233))): 230, 42
    #filterBrightness stateanim("marine.anim", "idle", direction=>"r"): 262, 90

    text(m6x11, "saturate: 0.0", #888888): 340, 28
    bitmap(generated(color(64, 64, #222233))): 340, 42
    #filterSaturate stateanim("marine.anim", "idle", direction=>"r"): 372, 90

    text(m6x11, "grayscale: 1.0", #888888): 450, 28
    bitmap(generated(color(64, 64, #222233))): 450, 42
    #filterGrayscale stateanim("marine.anim", "idle", direction=>"r"): 482, 90

    // Row 2: hue, outline, pixelOutline, replaceColor
    text(m6x11, "hue: 120", #888888): 10, 115
    bitmap(generated(color(64, 64, #222233))): 10, 129
    #filterHue stateanim("marine.anim", "idle", direction=>"r"): 42, 177

    text(m6x11, "outline: 2, #FFFF00", #888888): 120, 115
    bitmap(generated(color(64, 64, #222233))): 120, 129
    #filterOutline stateanim("marine.anim", "idle", direction=>"r"): 152, 177

    text(m6x11, "pixelOutline: #00FF00", #888888): 230, 115
    bitmap(generated(color(64, 64, #222233))): 230, 129
    #filterPixelOutline stateanim("marine.anim", "idle", direction=>"r"): 262, 177

    text(m6x11, "replaceColor", #888888): 340, 115
    bitmap(generated(color(64, 64, #222233))): 340, 129
    #filterReplaceColor stateanim("marine.anim", "idle", direction=>"r"): 372, 177

    // Row 3: combined examples
    text(exo2_14, "Combined Filters", #7fdbda): 0, 205
    bitmap(generated(color(720, 1, #7fdbda33))): 0, 223

    text(m6x11, "tint + outline", #888888): 10, 233
    bitmap(generated(color(64, 64, #222233))): 10, 247
    #filterCombo1 stateanim("marine.anim", "idle", direction=>"r"): 42, 295

    text(m6x11, "grayscale + pixelOutline", #888888): 150, 233
    bitmap(generated(color(64, 64, #222233))): 150, 247
    #filterCombo2 stateanim("marine.anim", "idle", direction=>"r"): 182, 295

    text(m6x11, "hue + brightness", #888888): 310, 233
    bitmap(generated(color(64, 64, #222233))): 310, 247
    #filterCombo3 stateanim("marine.anim", "idle", direction=>"r"): 342, 295

    // Row 4: per-frame filter blinking
    text(exo2_14, "Per-frame Filters (Blinking)", #7fdbda): 0, 320
    bitmap(generated(color(720, 1, #7fdbda33))): 0, 338

    text(m6x11, "outline blink", #888888): 10, 348
    bitmap(generated(color(64, 64, #222233))): 10, 362
    stateanim("marine-blink.anim", "outline-blink"): 42, 410

    text(m6x11, "tint blink", #888888): 150, 348
    bitmap(generated(color(64, 64, #222233))): 150, 362
    stateanim("marine-blink.anim", "tint-blink"): 182, 410

    text(m6x11, "brightness blink", #888888): 310, 348
    bitmap(generated(color(64, 64, #222233))): 310, 362
    stateanim("marine-blink.anim", "brightness-blink"): 342, 410

    // .anim syntax reference
    text(exo2_14, ".anim Syntax", #7fdbda): 0, 440
    bitmap(generated(color(720, 1, #7fdbda33))): 0, 458

    text(m6x11, "animation idle {", #aaaaaa): 10, 473
    text(m6x11, "    filters {", #aaaaaa): 10, 485
    text(m6x11, "        tint: #FF4444", #7fdbda): 10, 497
    text(m6x11, "        brightness: 1.5", #7fdbda): 10, 509
    text(m6x11, "        @(state >= 3) outline: 2, #FFFF00", #7fdbda): 10, 521
    text(m6x11, "        @else pixelOutline: #00FF00", #7fdbda): 10, 533
    text(m6x11, "    }", #aaaaaa): 10, 545
    text(m6x11, "    playlist {", #aaaaaa): 10, 557
    text(m6x11, "        filter tint: #FF0000", #ff7f50): 10, 569
    text(m6x11, "        sheet: \\"marine_r_idle\\"", #aaaaaa): 10, 581
    text(m6x11, "        filter none", #ff7f50): 10, 593
    text(m6x11, "        sheet: \\"marine_r_stand\\"", #aaaaaa): 10, 605
    text(m6x11, "    }", #aaaaaa): 10, 617
    text(m6x11, "}", #aaaaaa): 10, 629
}
`,vp=`version: 1.0

// Tab 1: State Animation Gallery
// Shows all animations organized by .anim file, highlighting the state selector concept

#galleryUI programmable() {

    // === Marine — direction: right ===
    text(exo2_14, "Marine  states: direction(l, r)  |  direction => r", #7fdbda): 0, 0
    bitmap(generated(color(560, 1, #7fdbda33))): 0, 18

    text(m6x11, "idle", #888888): 10, 28
    bitmap(generated(color(64, 64, #222233))): 10, 42
    stateanim("marine.anim", "idle", direction=>"r"): 42, 90

    text(m6x11, "stand", #888888): 90, 28
    bitmap(generated(color(64, 64, #222233))): 90, 42
    stateanim("marine.anim", "stand", direction=>"r"): 122, 90

    text(m6x11, "hit", #888888): 170, 28
    bitmap(generated(color(64, 64, #222233))): 170, 42
    stateanim("marine.anim", "hit", direction=>"r"): 202, 90

    text(m6x11, "killed", #888888): 250, 28
    bitmap(generated(color(64, 64, #222233))): 250, 42
    stateanim("marine.anim", "killed", direction=>"r"): 282, 90

    text(m6x11, "dead", #888888): 330, 28
    bitmap(generated(color(64, 64, #222233))): 330, 42
    stateanim("marine.anim", "dead", direction=>"r"): 362, 90

    text(m6x11, "dodge", #888888): 410, 28
    bitmap(generated(color(64, 64, #222233))): 410, 42
    stateanim("marine.anim", "dodge", direction=>"r"): 442, 90

    // Fire animations (row 2)
    text(m6x11, "fire-up", #888888): 490, 28
    bitmap(generated(color(64, 64, #222233))): 490, 42
    stateanim("marine.anim", "fire-up", direction=>"r"): 522, 90

    text(m6x11, "fire-down", #888888): 570, 28
    bitmap(generated(color(64, 64, #222233))): 570, 42
    stateanim("marine.anim", "fire-down", direction=>"r"): 602, 90

    text(m6x11, "fire-left", #888888): 650, 28
    bitmap(generated(color(64, 64, #222233))): 650, 42
    stateanim("marine.anim", "fire-left", direction=>"r"): 682, 90

    text(m6x11, "fire-right", #888888): 730, 28
    bitmap(generated(color(64, 64, #222233))): 730, 42
    stateanim("marine.anim", "fire-right", direction=>"r"): 762, 90

    // === Marine — direction: left ===
    text(exo2_14, "Marine  |  direction => l", #7fdbda): 0, 115
    bitmap(generated(color(560, 1, #7fdbda33))): 0, 133

    text(m6x11, "idle", #888888): 10, 143
    bitmap(generated(color(64, 64, #222233))): 10, 157
    stateanim("marine.anim", "idle", direction=>"l"): 42, 205

    text(m6x11, "stand", #888888): 90, 143
    bitmap(generated(color(64, 64, #222233))): 90, 157
    stateanim("marine.anim", "stand", direction=>"l"): 122, 205

    text(m6x11, "hit", #888888): 170, 143
    bitmap(generated(color(64, 64, #222233))): 170, 157
    stateanim("marine.anim", "hit", direction=>"l"): 202, 205

    text(m6x11, "killed", #888888): 250, 143
    bitmap(generated(color(64, 64, #222233))): 250, 157
    stateanim("marine.anim", "killed", direction=>"l"): 282, 205

    text(m6x11, "dead", #888888): 330, 143
    bitmap(generated(color(64, 64, #222233))): 330, 157
    stateanim("marine.anim", "dead", direction=>"l"): 362, 205

    text(m6x11, "dodge", #888888): 410, 143
    bitmap(generated(color(64, 64, #222233))): 410, 157
    stateanim("marine.anim", "dodge", direction=>"l"): 442, 205

    // === Turret (no direction state) ===
    text(exo2_14, "Turret  (no state selectors)", #7fdbda): 0, 230
    bitmap(generated(color(560, 1, #7fdbda33))): 0, 248

    text(m6x11, "idle", #888888): 10, 258
    bitmap(generated(color(64, 64, #222233))): 10, 272
    stateanim("turret.anim", "idle"): 42, 320

    text(m6x11, "shoot", #888888): 90, 258
    bitmap(generated(color(64, 64, #222233))): 90, 272
    stateanim("turret.anim", "shoot"): 122, 320

    text(m6x11, "hit", #888888): 170, 258
    bitmap(generated(color(64, 64, #222233))): 170, 272
    stateanim("turret.anim", "hit"): 202, 320

    text(m6x11, "explode", #888888): 250, 258
    bitmap(generated(color(64, 64, #222233))): 250, 272
    stateAnim construct("explode",
        "explode" => sheet "crew2", Turret_Explode_SW, 16, loop
    ): 282, 320

    text(m6x11, "destroyed", #888888): 330, 258
    bitmap(generated(color(64, 64, #222233))): 330, 272
    stateAnim construct("destroyed",
        "destroyed" => sheet "crew2", Turret_Destroyed_SW, 1, loop
    ): 362, 320

    // === Shield (direction state) ===
    text(exo2_14, "Shield  states: direction(l, r)", #7fdbda): 0, 345
    bitmap(generated(color(560, 1, #7fdbda33))): 0, 363

    text(m6x11, "idle_0 (R)", #888888): 10, 373
    bitmap(generated(color(64, 64, #222233))): 10, 387
    stateanim("shield.anim", "idle_0", direction=>"r"): 42, 435

    text(m6x11, "idle_0 (L)", #888888): 90, 373
    bitmap(generated(color(64, 64, #222233))): 90, 387
    stateanim("shield.anim", "idle_0", direction=>"l"): 122, 435

    text(m6x11, "idle_1 (R)", #888888): 170, 373
    bitmap(generated(color(64, 64, #222233))): 170, 387
    stateanim("shield.anim", "idle_1", direction=>"r"): 202, 435

    text(m6x11, "impact (R)", #888888): 250, 373
    bitmap(generated(color(64, 64, #222233))): 250, 387
    stateanim("shield.anim", "impact", direction=>"r"): 282, 435

    // === Arrows (no direction state) ===
    text(exo2_14, "Arrows  (no state selectors)", #7fdbda): 0, 460
    bitmap(generated(color(560, 1, #7fdbda33))): 0, 478

    text(m6x11, "dir0", #888888): 10, 488
    stateanim("arrows.anim", "dir0"): 42, 548

    text(m6x11, "dir1", #888888): 90, 488
    stateanim("arrows.anim", "dir1"): 122, 548

    text(m6x11, "dir2", #888888): 170, 488
    stateanim("arrows.anim", "dir2"): 202, 548

    text(m6x11, "dir3", #888888): 250, 488
    stateanim("arrows.anim", "dir3"): 282, 548

    text(m6x11, "dir4", #888888): 330, 488
    stateanim("arrows.anim", "dir4"): 362, 548

    text(m6x11, "dir5", #888888): 410, 488
    stateanim("arrows.anim", "dir5"): 442, 548
}
`,yp=`version: 1.0

// Tab 2: Interactive — Externally driven animation control

#interactiveUI programmable() {

    // Left: animation preview area
    text(exo2_14, "Animation Preview", #7fdbda): 20, 0
    bitmap(generated(color(240, 1, #7fdbda33))): 20, 18
    bitmap(generated(color(200, 200, #1a1a2e))): 20, 30

    // Named state anims — extracted in Haxe via getSingleItemByName().asStateAnim()
    #previewR stateanim("marine.anim", "idle", direction=>"r"): 120, 180
    #previewL stateanim("marine.anim", "idle", direction=>"l"): 120, 180

    // Right: controls
    text(exo2_14, "Controls", #7fdbda): 260, 0
    bitmap(generated(color(400, 1, #7fdbda33))): 260, 18

    // Speed
    text(m6x11, "Speed:", #aaaaaa): 260, 248
    placeholder(generated(cross(200, 16, #FF0000)), builderParameter("speedSlider")) {
        pos: 320, 244
        settings{size:int=>200}
    }
    #speedValue(updatable) text(m6x11, "100%", #7fdbda, left, 60): 540, 248

    // Externally driven toggle
    text(m6x11, "Ext. Driven:", #aaaaaa): 260, 278
    placeholder(generated(cross(16, 16, #FF0000)), builderParameter("extDrivenChk")) {
        pos: 360, 274
    }

    // Pause toggle
    text(m6x11, "Paused:", #aaaaaa): 450, 278
    placeholder(generated(cross(16, 16, #FF0000)), builderParameter("pauseChk")) {
        pos: 520, 274
    }

    // Progress scrubber (for externally driven mode)
    text(m6x11, "Progress:", #aaaaaa): 260, 308
    placeholder(generated(cross(200, 16, #FF0000)), builderParameter("progressSlider")) {
        pos: 340, 304
        settings{size:int=>200}
    }
    #progressValue(updatable) text(m6x11, "0%", #7fdbda, left, 60): 560, 308

    // State selector attribute
    text(m6x11, "direction =>", #aaaaaa): 260, 338
    placeholder(generated(cross(16, 16, #FF0000)), builderParameter("leftChk")) {
        pos: 360, 334
    }
    #dirValue(updatable) text(m6x11, "r", #7fdbda, left, 40): 390, 338

    // Metadata panel
    text(exo2_14, "Metadata", #7fdbda): 260, 380
    bitmap(generated(color(400, 1, #7fdbda33))): 260, 398
    ninepatch("ui", "Window_3x3_idle", 380, 160): 260, 410

    text(m6x11, "Animation:", #aaaaaa): 275, 425
    #infoName(updatable) text(m6x11, "-", #7fdbda, left, 240): 380, 425

    text(m6x11, "FPS:", #aaaaaa): 275, 445
    #infoFps(updatable) text(m6x11, "-", #7fdbda, left, 240): 380, 445

    text(m6x11, "Frame Count:", #aaaaaa): 275, 465
    #infoFrames(updatable) text(m6x11, "-", #7fdbda, left, 240): 380, 465

    text(m6x11, "Loop Type:", #aaaaaa): 275, 485
    #infoLoop(updatable) text(m6x11, "-", #7fdbda, left, 240): 380, 485

    text(m6x11, "Current Frame:", #aaaaaa): 275, 505
    #infoCurrentFrame(updatable) text(m6x11, "-", #7fdbda, left, 240): 380, 505

    text(m6x11, "Finished:", #aaaaaa): 275, 525
    #infoFinished(updatable) text(m6x11, "-", #7fdbda, left, 240): 380, 525
}
`,_p=`version: 1.0

// Tab 3: Points & Events — Extra point visualization and animation event log

#pointsUI programmable() {

    // Left: animation preview with point overlay
    text(exo2_14, "Extra Points Visualization", #7fdbda): 20, 0
    bitmap(generated(color(240, 1, #7fdbda33))): 20, 18
    bitmap(generated(color(200, 200, #1a1a2e))): 20, 30

    // Named state anims — marine and shield have direction(l,r), turret and arrows have no state selectors
    #marineR stateanim("marine.anim", "idle", direction=>"r"): 120, 180
    #marineL stateanim("marine.anim", "idle", direction=>"l"): 120, 180
    #shieldR stateanim("shield.anim", "idle_0", direction=>"r"): 120, 180
    #shieldL stateanim("shield.anim", "idle_0", direction=>"l"): 120, 180
    #turret stateanim("turret.anim", "idle"): 120, 180
    #arrows stateanim("arrows.anim", "dir0"): 120, 180

    // Right: controls
    text(exo2_14, "Controls", #7fdbda): 260, 0
    bitmap(generated(color(400, 1, #7fdbda33))): 260, 18

    // State selector attribute
    text(m6x11, "direction =>", #aaaaaa): 260, 35
    placeholder(generated(cross(16, 16, #FF0000)), builderParameter("ptsLeftChk")) {
        pos: 360, 31
    }
    #ptsDirValue(updatable) text(m6x11, "r", #7fdbda, left, 40): 390, 35

    // Point Coordinates panel
    text(exo2_14, "Point Coordinates", #7fdbda): 260, 190
    bitmap(generated(color(400, 1, #7fdbda33))): 260, 208
    ninepatch("ui", "Window_3x3_idle", 380, 130): 260, 220

    #pointInfo0(updatable) text(m6x11, "", #ff7f50, left, 340): 275, 235
    #pointInfo1(updatable) text(m6x11, "", #ff7f50, left, 340): 275, 255
    #pointInfo2(updatable) text(m6x11, "", #ff7f50, left, 340): 275, 275
    #pointInfo3(updatable) text(m6x11, "", #ff7f50, left, 340): 275, 295
    #pointInfo4(updatable) text(m6x11, "", #ff7f50, left, 340): 275, 315

    // Event Log panel
    text(exo2_14, "Event Log", #7fdbda): 260, 365
    bitmap(generated(color(400, 1, #7fdbda33))): 260, 383
    ninepatch("ui", "Window_3x3_idle", 380, 170): 260, 395

    #eventLog0(updatable) text(m6x11, "", #4caf50, left, 340): 275, 410
    #eventLog1(updatable) text(m6x11, "", #4caf50, left, 340): 275, 430
    #eventLog2(updatable) text(m6x11, "", #4caf50, left, 340): 275, 450
    #eventLog3(updatable) text(m6x11, "", #4caf50, left, 340): 275, 470
    #eventLog4(updatable) text(m6x11, "", #4caf50, left, 340): 275, 490
    #eventLog5(updatable) text(m6x11, "", #4caf50, left, 340): 275, 510
    #eventLog6(updatable) text(m6x11, "", #4caf50, left, 340): 275, 530
    #eventLog7(updatable) text(m6x11, "", #4caf50, left, 340): 275, 550
}
`,wp=`version: 1.0

// State Animation Demo — Interactive tab-based exploration of .anim state machines

#stateAnimDemo programmable() {
    pos: 0, 20

    placeholder(generated(cross(800, 40, #FF0000)), builderParameter("animTabs")) {
        pos: 0, 60
        settings{tabButtonBuildName=>tab, tabPanel.width=>1280, tabPanel.height=>640, tabPanel.contentRoot=>contentArea}
    }

    #description(updatable) text(exo2_light_14, "", #aaaaaa, left, 1200): 20, 40
}
`,Sp=`version: 1.0

// Transition Declarations Demo
// Animate parameter changes with transition {} blocks in programmables.
// When a parameter with a declared transition changes, visibility animates
// via TweenManager instead of snapping instantly.

// ─── Layout shell ───────────────────────────────────────

#transitionsDemo programmable() {
    pos: 40, 70

    text(exo2_16, "Crossfade vs Instant", #7fdbda): 0, 0
    text(exo2_light_14, "Both boxes switch between 3 color states. Left uses crossfade, right snaps instantly.", #aaaaaa, left, 700): 0, 22

    placeholder(generated(cross(140, 100, white)), builderParameter("crossfadeBox")): 0, 55
    text(m6x11, "crossfade(0.2)", #888888): 0, 160

    placeholder(generated(cross(140, 100, white)), builderParameter("instantBox")): 160, 55
    text(m6x11, "instant (no transition)", #888888): 160, 160

    placeholder(generated(cross(100, 30, white)), builderParameter("btnNormal")): 320, 55
    placeholder(generated(cross(100, 30, white)), builderParameter("btnHover")): 320, 90
    placeholder(generated(cross(100, 30, white)), builderParameter("btnPressed")): 320, 125

    // ─── FlipX ──────────────────────────────────────────

    text(exo2_16, "FlipX", #7fdbda): 0, 190
    text(exo2_light_14, "Flip animation on bool toggle.", #aaaaaa, left, 300): 0, 210

    placeholder(generated(cross(80, 80, white)), builderParameter("flipBox")): 0, 235
    text(m6x11, "flipX(0.15)", #888888): 0, 320
    placeholder(generated(cross(100, 30, white)), builderParameter("btnFlip")): 0, 340

    // ─── Fade ───────────────────────────────────────────

    text(exo2_16, "Fade", #7fdbda): 0, 385
    text(exo2_light_14, "Alpha fade in/out on toggle.", #aaaaaa, left, 300): 0, 405

    placeholder(generated(cross(120, 60, white)), builderParameter("fadeBox")): 0, 430
    text(m6x11, "fade(0.3)", #888888): 0, 495
    placeholder(generated(cross(100, 30, white)), builderParameter("btnFade")): 0, 515

    // ─── Slide ──────────────────────────────────────────

    text(exo2_16, "Slide", #7fdbda): 350, 190
    text(exo2_light_14, "Slide with different directions and distances.", #aaaaaa, left, 400): 350, 210

    placeholder(generated(cross(60, 40, white)), builderParameter("slideLeft")): 350, 240
    text(m6x11, "left 20px", #888888): 350, 285
    placeholder(generated(cross(60, 40, white)), builderParameter("slideRight")): 430, 240
    text(m6x11, "right 50px", #888888): 430, 285
    placeholder(generated(cross(60, 40, white)), builderParameter("slideUp")): 510, 240
    text(m6x11, "up 80px", #888888): 510, 285
    placeholder(generated(cross(60, 40, white)), builderParameter("slideDown")): 590, 240
    text(m6x11, "down 120px", #888888): 590, 285

    placeholder(generated(cross(100, 30, white)), builderParameter("btnSlide")): 350, 310

    // ─── FlipY ──────────────────────────────────────────

    text(exo2_16, "FlipY", #7fdbda): 350, 350
    text(exo2_light_14, "Vertical flip on bool toggle.", #aaaaaa, left, 400): 350, 370

    placeholder(generated(cross(80, 80, white)), builderParameter("flipYBox")): 350, 395
    text(m6x11, "flipY(0.2)", #888888): 350, 480
    placeholder(generated(cross(100, 30, white)), builderParameter("btnFlipY")): 350, 500

    // ─── Status ─────────────────────────────────────────

    #statusText text(exo2_light_14, "Click buttons to trigger transitions", #666666, left, 700): 0, 560
}

// ─── Crossfade demo ─────────────────────────────────────

#crossfadeBox programmable(status:[normal,hover,pressed]=normal) {
    transition {
        status: crossfade(0.2, easeOutQuad)
    }
    @(status => normal) bitmap(generated(color(140, 100, #4466aa))): 0, 0
    @(status => normal) text(m6x11, "Normal", #ffffff): 50, 42
    @(status => hover) bitmap(generated(color(140, 100, #66aa44))): 0, 0
    @(status => hover) text(m6x11, "Hover", #ffffff): 52, 42
    @(status => pressed) bitmap(generated(color(140, 100, #aa4444))): 0, 0
    @(status => pressed) text(m6x11, "Pressed", #ffffff): 46, 42
}

#instantBox programmable(status:[normal,hover,pressed]=normal) {
    @(status => normal) bitmap(generated(color(140, 100, #4466aa))): 0, 0
    @(status => normal) text(m6x11, "Normal", #ffffff): 50, 42
    @(status => hover) bitmap(generated(color(140, 100, #66aa44))): 0, 0
    @(status => hover) text(m6x11, "Hover", #ffffff): 52, 42
    @(status => pressed) bitmap(generated(color(140, 100, #aa4444))): 0, 0
    @(status => pressed) text(m6x11, "Pressed", #ffffff): 46, 42
}

// ─── FlipX demo ─────────────────────────────────────────

#flipBox programmable(checked:bool=false) {
    transition {
        checked: flipX(0.15, easeOutQuad)
    }
    @(checked => false) bitmap(generated(color(80, 80, #666666))): 0, 0
    @(checked => false) text(m6x11, "OFF", #cccccc): 28, 34
    @(checked => true) bitmap(generated(color(80, 80, #44cc44))): 0, 0
    @(checked => true) text(m6x11, "ON", #ffffff): 30, 34
}

// ─── Fade demo ──────────────────────────────────────────

#fadeBox programmable(show:bool=true) {
    transition {
        show: fade(0.3, easeOutCubic)
    }
    @(show => true) bitmap(generated(color(120, 60, #cc8844))): 0, 0
    @(show => true) text(m6x11, "Visible", #ffffff): 38, 22
}

// ─── Slide demos ────────────────────────────────────────

#slideLeftBox programmable(show:bool=true) {
    transition { show: slide(left, 0.25, 20, easeOutCubic) }
    @(show => true) bitmap(generated(color(60, 40, #8844aa))): 0, 0
}

#slideRightBox programmable(show:bool=true) {
    transition { show: slide(right, 0.25, easeOutCubic) }
    @(show => true) bitmap(generated(color(60, 40, #4488aa))): 0, 0
}

#slideUpBox programmable(show:bool=true) {
    transition { show: slide(up, 0.3, 80, easeOutCubic) }
    @(show => true) bitmap(generated(color(60, 40, #44aa88))): 0, 0
}

#slideDownBox programmable(show:bool=true) {
    transition { show: slide(down, 0.4, 120, easeOutBack) }
    @(show => true) bitmap(generated(color(60, 40, #aa8844))): 0, 0
}

// ─── FlipY demo ─────────────────────────────────────────

#flipYBox programmable(checked:bool=false) {
    transition {
        checked: flipY(0.2, easeOutQuad)
    }
    @(checked => false) bitmap(generated(color(80, 80, #555577))): 0, 0
    @(checked => false) text(m6x11, "A", #cccccc): 34, 34
    @(checked => true) bitmap(generated(color(80, 80, #7755aa))): 0, 0
    @(checked => true) text(m6x11, "B", #ffffff): 34, 34
}
`,Fp=`version: 1.0

// Battle HUD — 3 visual styles, same parameter interface
// Demonstrates that UI can change considerably without changing the driving code

// ════════════════════════════════════════════════════
// STANDARD VARIANT — vector graphics bars
// ════════════════════════════════════════════════════

// ── HP bar: green/yellow/red based on HP%, white trail for recent damage ──
#hpBar programmable(hp:uint=100, maxHp:uint=100, trail:float=100) {
    graphics(rect(#1a1a1a, filled, 310, 20): 0, 0): 0, 0
    @(trail > 0) graphics(rect(#dddddd, filled, $trail * 310 / $maxHp, 20): 0, 0): 0, 0
    @(hp => 1..25) graphics(rect(#cc3322, filled, $hp * 310 / $maxHp, 20): 0, 0): 0, 0
    @(hp => 26..60) graphics(rect(#eecc00, filled, $hp * 310 / $maxHp, 20): 0, 0): 0, 0
    @(hp => 61..100) graphics(rect(#44cc44, filled, $hp * 310 / $maxHp, 20): 0, 0): 0, 0
    text(exo2_14, '\${$hp} / \${$maxHp}', #ffffff, center, 310): 0, 2
}

// ── MP bar: blue normally, reddish when low ──
#mpBar programmable(mp:uint=50, maxMp:uint=50, trail:float=50) {
    graphics(rect(#1a1a1a, filled, 310, 20): 0, 0): 0, 0
    @(trail > 0) graphics(rect(#88bbdd, filled, $trail * 310 / $maxMp, 20): 0, 0): 0, 0
    @(mp => 1..12) graphics(rect(#993388, filled, $mp * 310 / $maxMp, 20): 0, 0): 0, 0
    @(mp => 13..50) graphics(rect(#2196f3, filled, $mp * 310 / $maxMp, 20): 0, 0): 0, 0
    text(exo2_14, '\${$mp} / \${$maxMp}', #ffffff, center, 310): 0, 2
}

// ── Standard HUD layout ──
#battleHudDemo programmable(
    hp:uint=100, maxHp:uint=100, hpTrail:float=100,
    mp:uint=50, maxMp:uint=50, mpTrail:float=50,
    dead:uint=1
) {
    pos: 50, 60

    text(exo2_16, 'Standard HUD', #7fdbda): 0, 0
    graphics(rect(#7fdbda33, filled, 400, 1): 0, 0): 0, 22

    @(dead => 1) apply {
        filter: grayscale(1.0)
    }

    ninepatch("ui", "Window_3x3_idle", 400, 160): 0, 40

    text(exo2_16, "HERO", #4caf50): 20, 55
    text(exo2_20, "Aethon", #ffffff, left, 350): 20, 76

    text(exo2_14, "HP", #ff4444): 20, 108
    dynamicRef($hpBar, hp=>$hp, maxHp=>$maxHp, trail=>$hpTrail): 55, 106

    text(exo2_14, "MP", #4488cc): 20, 140
    dynamicRef($mpBar, mp=>$mp, maxMp=>$maxMp, trail=>$mpTrail): 55, 138

    @(dead > 0) text(exo2_20, "DEAD", #ff4444, center, 360): 20, 170

    text(exo2_light_14, "Vector graphics bars (graphics rect).", #666666): 0, 215
}

// ════════════════════════════════════════════════════
// PIXEL ART VARIANT — pixels() primitives at 4× scale
// ════════════════════════════════════════════════════

// ── Pixel HP bar (34×7 px at 4× = 136×28 display) ──
#pixelHpBar programmable(hp:uint=100, maxHp:uint=100, trail:float=100) {
    pixels (
        filledRect 1, 1, 32, 5, #111111
        rect 0, 0, 34, 7, #555555
    ) {
        scale: 4
    }
    @(trail > 0) pixels (
        filledRect 1, 1, $trail * 32 / $maxHp, 5, #dddddd
    ) {
        scale: 4
    }
    @(hp => 1..25) pixels (
        filledRect 1, 1, ($hp * 32) / $maxHp, 5, #cc3322
    ) {
        scale: 4
    }
    @(hp => 26..60) pixels (
        filledRect 1, 1, ($hp * 32) / $maxHp, 5, #eecc00
    ) {
        scale: 4
    }
    @(hp => 61..100) pixels (
        filledRect 1, 1, ($hp * 32) / $maxHp, 5, #44cc44
    ) {
        scale: 4
    }
}

// ── Pixel MP bar ──
#pixelMpBar programmable(mp:uint=50, maxMp:uint=50, trail:float=50) {
    pixels (
        filledRect 1, 1, 32, 5, #111111
        rect 0, 0, 34, 7, #444466
    ) {
        scale: 4
    }
    @(trail > 0) pixels (
        filledRect 1, 1, $trail * 32 / $maxMp, 5, #88bbdd
    ) {
        scale: 4
    }
    @(mp => 1..12) pixels (
        filledRect 1, 1, $mp * 32 / $maxMp, 5, #993388
    ) {
        scale: 4
    }
    @(mp => 13..50) pixels (
        filledRect 1, 1, $mp * 32 / $maxMp, 5, #2196f3
    ) {
        scale: 4
    }
}

// ── Pixel HUD layout ──
#pixelBattleHud programmable(
    hp:uint=100, maxHp:uint=100, hpTrail:float=100,
    mp:uint=50, maxMp:uint=50, mpTrail:float=50,
    dead:uint=1
) {
    pos: 500, 60

    text(exo2_16, 'Pixel HUD', #7fdbda): 0, 0
    graphics(rect(#7fdbda33, filled, 200, 1): 0, 0): 0, 22

    @(dead => 1) apply {
        filter: grayscale(1.0)
    }

    // Pixel art panel frame
    pixels (
        filledRect 0, 0, 50, 38, #1a1a2e
        rect 0, 0, 50, 38, #4a5568
    ) {
        scale: 4
        pos: 0, 30
    }

    text(exo2_14, "HERO", #4caf50): 10, 44
    text(exo2_16, "Aethon", #ffffff): 10, 62

    text(exo2_14, "HP", #ff4444): 10, 90
    dynamicRef($pixelHpBar, hp=>$hp, maxHp=>$maxHp, trail=>$hpTrail): 40, 88

    text(exo2_14, "MP", #4488cc): 10, 122
    dynamicRef($pixelMpBar, mp=>$mp, maxMp=>$maxMp, trail=>$mpTrail): 40, 120

    @(dead > 0) text(exo2_20, "DEAD", #ff4444, center, 180): 10, 150

    text(exo2_light_14, "Pixel art bars using pixels() at 4x scale.", #666666): 0, 188
}

// ════════════════════════════════════════════════════
// VERTICAL VARIANT — bars fill bottom-up
// ════════════════════════════════════════════════════

// ── Vertical HP bar (30×100, fills from bottom) ──
#verticalHpBar programmable(hp:uint=100, maxHp:uint=100, trail:float=100) {
    graphics(rect(#1a1a1a, filled, 30, 100): 0, 0): 0, 0
    @(trail > 0) graphics(rect(#dddddd, filled, 30, $trail * 100 / $maxHp): 0, 100 - $trail * 100 / $maxHp): 0, 0
    @(hp => 1..25) graphics(rect(#cc3322, filled, 30, $hp * 100 / $maxHp): 0, 100 - $hp * 100 / $maxHp): 0, 0
    @(hp => 26..60) graphics(rect(#eecc00, filled, 30, $hp * 100 / $maxHp): 0, 100 - $hp * 100 / $maxHp): 0, 0
    @(hp => 61..100) graphics(rect(#44cc44, filled, 30, $hp * 100 / $maxHp): 0, 100 - $hp * 100 / $maxHp): 0, 0
}

// ── Vertical MP bar (30×100, fills from bottom) ──
#verticalMpBar programmable(mp:uint=50, maxMp:uint=50, trail:float=50) {
    graphics(rect(#1a1a1a, filled, 30, 100): 0, 0): 0, 0
    @(trail > 0) graphics(rect(#88bbdd, filled, 30, $trail * 100 / $maxMp): 0, 100 - $trail * 100 / $maxMp): 0, 0
    @(mp => 1..12) graphics(rect(#993388, filled, 30, $mp * 100 / $maxMp): 0, 100 - $mp * 100 / $maxMp): 0, 0
    @(mp => 13..50) graphics(rect(#2196f3, filled, 30, $mp * 100 / $maxMp): 0, 100 - $mp * 100 / $maxMp): 0, 0
}

// ── Vertical HUD layout ──
#verticalBattleHud programmable(
    hp:uint=100, maxHp:uint=100, hpTrail:float=100,
    mp:uint=50, maxMp:uint=50, mpTrail:float=50,
    dead:uint=1
) {
    pos: 50, 320

    text(exo2_16, 'Vertical HUD', #7fdbda): 0, 0
    graphics(rect(#7fdbda33, filled, 180, 1): 0, 0): 0, 22

    @(dead => 1) apply {
        filter: grayscale(1.0)
    }

    ninepatch("ui", "Window_3x3_idle", 180, 200): 0, 30

    text(exo2_16, "HERO", #4caf50): 15, 44
    text(exo2_20, "Aethon", #ffffff): 15, 64

    // Vertical bars side by side
    text(exo2_14, "HP", #ff4444, center, 30): 30, 88
    dynamicRef($verticalHpBar, hp=>$hp, maxHp=>$maxHp, trail=>$hpTrail): 30, 104

    text(exo2_14, "MP", #4488cc, center, 30): 110, 88
    dynamicRef($verticalMpBar, mp=>$mp, maxMp=>$maxMp, trail=>$mpTrail): 110, 104

    // Values below bars
    text(exo2_14, '\${$hp}', #ffffff, center, 30): 30, 206
    text(exo2_14, '\${$mp}', #ffffff, center, 30): 110, 206

    @(dead > 0) text(exo2_20, "DEAD", #ff4444, center, 140): 20, 148

    text(exo2_light_14, "Vertical bars filling bottom-up.", #666666): 0, 240
}

// ════════════════════════════════════════════════════
// CONTROLS
// ════════════════════════════════════════════════════

#battleHudControls programmable() {
    pos: 500, 280

    placeholder(generated(cross(100, 30, #FF0000)), builderParameter("pauseButton")) {
        pos: 0, 0
        settings { }
    }
}
`,kp=`version: 1.0

// Blob47 Autotile Demo
// Interactive 2D terrain painter. Select tile type then click/drag to paint.
// Uses Forgotten Plains tileset (Minifantasy by Krishna Palacio)

#blob47Grass autotile {
    format: blob47
    tileSize: 8
    file: "Tileset/Minifantasy_ForgottenPlainsTiles.png"
    region: [56, 24, 24, 40]
    allowPartialMapping: true
    mapping: [
        0:4,    // isolated -> center tile
        1:7,    // has N -> S edge
        2:3,    // has E -> W edge
        3:6,    // has N+E -> SW outer corner
        4:6,    // has N+NE+E -> SW outer
        5:1,    // has S -> N edge
        6:4,    // has N+S -> center
        7:0,    // has E+S -> NW outer corner
        8:3,    // has N+E+S -> W edge
        9:3,    // has N+NE+E+S -> W edge
        10:0,   // has E+SE+S -> NW outer
        11:3,   // has N+E+SE+S -> W edge
        12:3,   // has N+NE+E+SE+S -> W edge
        13:5,   // has W -> E edge
        14:8,   // has N+W -> SE outer corner
        15:4,   // has E+W -> center
        16:7,   // has N+E+W -> S edge
        17:7,   // has N+NE+E+W -> S edge
        18:2,   // has S+W -> NE outer corner
        19:5,   // has N+S+W -> E edge
        20:1,   // has E+S+W -> N edge
        21:4    // has N+E+S+W -> center
    ]
}

#blob47Demo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Blob47 Autotile", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Buttons
    placeholder(generated(cross(80, 20, white)), builderParameter("randomizeBtn")) {
        pos: 0, 30
        settings{width:int=>80, height:int=>30, font=>"m6x11", fontColor=>#ffffff}
    }
    placeholder(generated(cross(80, 20, white)), builderParameter("clearBtn")) {
        pos: 90, 30
        settings{width:int=>80, height:int=>30, font=>"m6x11", fontColor=>#ffffff}
    }

    // Tile selector
    text(exo2_14, "Tile:", #aaaaaa): 200, 38
    placeholder(generated(cross(30, 26, white)), builderParameter("grassBtn")) {
        pos: 240, 32
        settings{color=>#AA8844, width:int=>30, height:int=>26}
    }
    placeholder(generated(cross(30, 26, white)), builderParameter("dirtBtn")) {
        pos: 280, 32
        settings{color=>#44AA44, width:int=>30, height:int=>26}
    }

    // Status
    #statusText(updatable) text(exo2_14, "Draw on the map!", #aaaaaa, left, 400): 400, 38

    // Dirt background
    bitmap(generated(color(640, 448, #66AA44))): 0, 70

    // Map container - autotile TileGroup goes here
    #mapContainer(updatable) point: 0, 70

    // Instructions
    text(exo2_light_14, "Left click to paint | Drag to paint | Select tile type above", #666666): 0, 525
}
`,Cp=`version: 1.0

// ===== Curves =====

curves {
    // Fade out: alpha 1→0 (for discard animations)
    #fadeOut curve { points: [(0, 1.0), (1, 0)] }

    // Shrink out: scale 1→0.3 (for discard animations)
    #shrinkOut curve { points: [(0, 1.0), (1, 0.3)] }

    // Grow in: scale 0→1 with slight overshoot (for draw animations)
    #growIn curve { points: [(0, 0), (0.7, 1.1), (1, 1.0)] }

    // Fade in: alpha 0→1 (for draw animations)
    #fadeIn curve { points: [(0, 0), (1, 1.0)] }

    // Quick fade in: alpha reaches 1 by 15% of animation (for improved draw)
    #quickFadeIn curve { points: [(0, 0), (0.15, 1.0), (1, 1.0)] }

    // Linear grow: scale from draw-pile ratio (0.4) to full size (for improved draw)
    #linearGrowIn curve { points: [(0, 0.4), (1, 1.0)] }

    // Quick fade out: alpha stays at 1 until 85% then drops fast (for improved discard)
    #quickFadeOut curve { points: [(0, 1.0), (0.85, 1.0), (1, 0)] }

    // Linear shrink: scale from full to draw-pile ratio (for improved discard)
    #linearShrinkOut curve { points: [(0, 1.0), (1, 0.4)] }

    // Scale pulse: overshoot then settle (for creative draw)
    #scalePulse curve { points: [(0, 0.4), (0.4, 1.3), (0.7, 0.85), (1, 1.0)] }

    // Full spin: one 360° rotation (for creative spin variants)
    #spinOnce curve { points: [(0, 0), (1, 6.283)] }

    // Half spin: 180° rotation
    #spinHalf curve { points: [(0, 0), (1, 3.14)] }

    // Alpha flicker: rapid blink during middle of animation
    #flickerAlpha curve { points: [(0, 0), (0.15, 1.0), (0.3, 0.3), (0.45, 1.0), (0.6, 0.5), (0.75, 1.0), (1, 1.0)] }

    // Scale bounce: overshoot with secondary bounce
    #scaleBounce curve { points: [(0, 0.4), (0.5, 1.2), (0.7, 0.9), (0.85, 1.05), (1, 1.0)] }
}

// ===== Paths =====

paths {
    // Animation arc for draw/discard/return/rearrange
    #cardArc path {
        bezier(100, 0, 50, -40)
    }

    // Hand layout paths (used with PathLayout mode)
    #handCurve path { bezier(880, 0, 440, -80) }
    #handFlat path { lineTo(880, 0) }
    #handDeep path { bezier(880, 0, 440, -160) }
    #handWave path {
        bezier(440, -40, 220, -80)
        bezier(880, 0, 660, 40)
    }
    #handTight path { bezier(600, 0, 300, -100) }

    // Targeting arrow curve (Stretch-normalized from card to cursor)
    #arrowCurve path { bezier(100, 0, 50, -30) }

    // Straight line path (for return/rearrange)
    #cardStraight path { lineTo(100, 0) }

    // Creative paths
    #spiralPath path { spiral(5, 35, 540) }
    #wavePath path { wave(25, 40, 3) }
    #highArcPath path { bezier(100, 0, 50, -100) }
    #zigzagPath path {
        lineTo(33, -25)
        lineTo(34, 50)
        lineTo(33, -25)
    }
    #loopPath path {
        bezier(50, 0, 25, -50)
        bezier(50, 0, 25, 50)
    }
    #sCurvePath path {
        bezier(50, 0, 10, -40, 40, -40)
        bezier(50, 0, 10, 40, 40, 40)
    }
    #tightSpiralPath path { spiral(3, 20, 720) }
}

// ===== Default Animated Paths =====

#drawPath animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#discardPath animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#returnPath animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#rearrangePath animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

// ===== Draw Path Easing Variants =====

#draw_linear animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeOutQuad animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutQuad, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeOutBack animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutBack, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeOutElastic animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutElastic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeInOutCubic animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeInOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeOutCubic animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeOutBounce animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutBounce, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeInOutBack animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeInOutBack, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeInOutQuad animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeInOutQuad, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeInBack animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeInBack, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeInCubic animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeInCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_easeInQuad animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeInQuad, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

// ===== Discard Path Easing Variants =====

#discard_linear animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeInQuad animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInQuad, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeOutQuad animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeOutQuad, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeInOutCubic animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInOutCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeInBack animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInBack, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeInCubic animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeInOutQuad animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInOutQuad, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeInOutBack animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInOutBack, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeOutCubic animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeOutCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeOutBack animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeOutBack, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeOutBounce animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeOutBounce, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_easeOutElastic animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeOutElastic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

// ===== Return Path Easing Variants =====

#return_linear animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
}

#return_easeOutCubic animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeOutCubic
}

#return_easeOutQuad animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeOutQuad
}

#return_easeOutBack animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeOutBack
}

#return_easeOutElastic animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeOutElastic
}

#return_easeInOutCubic animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#return_easeOutBounce animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeOutBounce
}

#return_easeInOutBack animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutBack
}

// ===== Rearrange Path Easing Variants =====

#rearrange_linear animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
}

#rearrange_easeInOutCubic animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

#rearrange_easeOutQuad animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeOutQuad
}

#rearrange_easeOutBack animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeOutBack
}

#rearrange_easeInOutQuad animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutQuad
}

#rearrange_easeOutCubic animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeOutCubic
}

#rearrange_easeOutBounce animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeOutBounce
}

#rearrange_easeOutElastic animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeOutElastic
}

// ===== Creative Draw Variants =====

#draw_spiral animatedPath {
    path: spiralPath
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_wave animatedPath {
    path: wavePath
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_highArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutQuad, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_zigzag animatedPath {
    path: zigzagPath
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_spinFlip animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn, rotationCurve: spinOnce
}

#draw_loop animatedPath {
    path: loopPath
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: linearGrowIn, alphaCurve: quickFadeIn
}

#draw_bouncyArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutBounce, scaleCurve: scaleBounce, alphaCurve: quickFadeIn
}

#draw_flicker animatedPath {
    path: cardArc
    type: time
    duration: 0.35
    0.0: progressCurve: easeOutCubic, scaleCurve: scalePulse, alphaCurve: flickerAlpha
}

// ===== Creative Discard Variants =====

#discard_spiral animatedPath {
    path: spiralPath
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_wave animatedPath {
    path: wavePath
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_highArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.25
    0.0: progressCurve: easeInQuad, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_zigzag animatedPath {
    path: zigzagPath
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_spinFlip animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut, rotationCurve: spinOnce
}

#discard_loop animatedPath {
    path: loopPath
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_bouncyArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.25
    0.0: progressCurve: easeInBack, scaleCurve: linearShrinkOut, alphaCurve: quickFadeOut
}

#discard_flicker animatedPath {
    path: cardArc
    type: time
    duration: 0.25
    0.0: progressCurve: easeInCubic, scaleCurve: linearShrinkOut, alphaCurve: flickerAlpha
}

// ===== Creative Return Variants =====

#return_spiral animatedPath {
    path: spiralPath
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#return_wave animatedPath {
    path: wavePath
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#return_highArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#return_zigzag animatedPath {
    path: zigzagPath
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#return_spinFlip animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic, rotationCurve: spinHalf
}

#return_loop animatedPath {
    path: loopPath
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic
}

#return_bouncyArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.2
    0.0: progressCurve: easeOutBounce
}

#return_flicker animatedPath {
    path: cardStraight
    type: time
    duration: 0.2
    0.0: progressCurve: easeInOutCubic, alphaCurve: flickerAlpha
}

// ===== Creative Rearrange Variants =====

#rearrange_spiral animatedPath {
    path: spiralPath
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

#rearrange_wave animatedPath {
    path: wavePath
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

#rearrange_highArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

#rearrange_zigzag animatedPath {
    path: zigzagPath
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

#rearrange_spinFlip animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic, rotationCurve: spinHalf
}

#rearrange_loop animatedPath {
    path: loopPath
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic
}

#rearrange_bouncyArc animatedPath {
    path: highArcPath
    type: time
    duration: 0.15
    0.0: progressCurve: easeOutBounce
}

#rearrange_flicker animatedPath {
    path: cardStraight
    type: time
    duration: 0.15
    0.0: progressCurve: easeInOutCubic, alphaCurve: flickerAlpha
}

// ===== Targeting Arrow =====

// Arrow body segment — chevron placed along the arrow path
#arrowSegment programmable(valid:bool=false) {
    @(valid => false) graphics(
        line(#FF4444, 2.0, -4, -4, 4, 0);
        line(#FF4444, 2.0, -4, 4, 4, 0);
    ): 0, 0
    @(valid => true) graphics(
        line(#44FF88, 2.0, -4, -4, 4, 0);
        line(#44FF88, 2.0, -4, 4, 4, 0);
    ): 0, 0
}

// Arrow head — larger chevron at the end
#arrowHead programmable(valid:bool=false) {
    @(valid => false) graphics(
        polygon(#FF4444, filled, 10, 0, -6, -6, -6, 6);
    ): 0, 0
    @(valid => true) graphics(
        polygon(#44FF88, filled, 10, 0, -6, -6, -6, 6);
    ): 0, 0
}

// ===== Card Programmable (140x200) =====

#card programmable(
    status:[normal,hover,pressed,disabled]=normal,
    cardName:string="Card",
    description:string="",
    cost:uint=1,
    cardColor:color=#3366AA,
    artColor:color=#224488,
    cardImage:[none,potion_r,potion_b,sword_l,sword_s,shield_i,ring_i,scroll_i,helmet_i,armor_i]=none
) {
    // Hit area
    interactive(140, 200, "card", bind => "status", events: [hover, click, push]): 0, 0

    // Dark card base
    bitmap(generated(color(140, 200, #16162a))): 0, 0

    // Color accent bar at top
    bitmap(generated(color(136, 4, $cardColor))): 2, 2

    // Art area background
    bitmap(generated(color(120, 60, $artColor))): 10, 16

    // Art area center highlight
    bitmap(generated(color(80, 36, #FFFFFF11))): 30, 28

    // Card art sprites (3x scale = 48x48, centered in 120x60 art area)
    @(cardImage => potion_r) scale(3) bitmap(sheet("roguelikeitems", "potion", 0)): 36, 22
    @(cardImage => potion_b) scale(3) bitmap(sheet("roguelikeitems", "potion", 2)): 36, 22
    @(cardImage => sword_l)  scale(3) bitmap(sheet("roguelikeitems", "weapon", 9)): 36, 22
    @(cardImage => sword_s)  scale(3) bitmap(sheet("roguelikeitems", "weapon", 11)): 36, 22
    @(cardImage => shield_i) scale(3) bitmap(sheet("roguelikeitems", "shield", 6)): 36, 22
    @(cardImage => ring_i)   scale(3) bitmap(sheet("roguelikeitems", "ring", 0)): 36, 22
    @(cardImage => scroll_i) scale(3) bitmap(sheet("roguelikeitems", "scroll", 0)): 36, 22
    @(cardImage => helmet_i) scale(3) bitmap(sheet("roguelikeitems", "helmet", 0)): 36, 22
    @(cardImage => armor_i)  scale(3) bitmap(sheet("roguelikeitems", "armor", 0)): 36, 22

    // Separator line
    graphics(line(#334466, 1.0, 10, 0, 130, 0)): 0, 82

    // Card name
    text(m5x7, $cardName, #FFFFFF, center, 120): 10, 88

    // Description
    text(m5x7, $description, #777777, center, 120): 10, 104

    // Bottom flavor area
    bitmap(generated(color(120, 50, #FFFFFF08))): 10, 142

    // Cost circle - dark bg
    graphics(circle(#0D0D1A, filled, 16)): 18, 18
    // Cost circle - colored ring
    graphics(circle(#667799, 1.5, 12)): 18, 18
    // Cost number
    text(m5x7, $cost, #FFD700, center, 24): 6, 10

    // Border: normal
    @(status => normal) graphics(rect(#334466, 1.0, 140, 200)): 0, 0

    // Border: hover - golden glow
    @(status => hover) graphics(rect(#FFDD44, 2.0, 138, 198)): 1, 1

    // Border: pressed - white
    @(status => pressed) graphics(rect(#FFFFFF, 2.0, 138, 198)): 1, 1

    // Disabled: grayscale + slight dim + dim border
    @(status => disabled) apply {
        filter: group(grayscale(0.9), brightness(0.5))
    }
    @(status => disabled) graphics(rect(#444444, 1.0, 140, 200)): 0, 0
}

// ===== Target Zone (180x180) =====

#targetZone programmable(highlighted:bool=false) {
    interactive(180, 180, "target", events: [hover]): 0, 0
    @(highlighted => false) graphics(
        rect(#446688, 1.0, 180, 180);
    ): 0, 0
    @(highlighted => true) graphics(
        rect(#44FF88, 2.0, 180, 180);
    ): 0, 0
    text(m5x7, "TARGET", #668899, center, 160): 10, 80
}

// ===== Help Tooltip =====

#helpTip programmable(desc:string="") {
    ninepatch("ui", "Window_3x3_idle", 280, 44): 0, 0
    text(m5x7, $desc, #bbbbbb, left, 260): 10, 10
}

// ===== Main Demo Layout =====

#cardHandDemo programmable() {
    // Title & instructions (left side)
    text(m5x7, "Card Hand Demo", #7fdbda): 20, 10
    text(m5x7, "Hover cards, drag to play. Drag above line to target.", #999999): 20, 28

    // Target zones area label
    text(m5x7, "Target Zones", #778899): 20, 50

    // Draw pile
    text(m5x7, "DRAW", #888888, center, 60): 15, 555
    graphics(rect(#334455, 1.0, 60, 80)): 15, 575

    // Discard pile
    text(m5x7, "DISCARD", #888888, center, 80): 1170, 555
    graphics(rect(#553344, 1.0, 60, 80)): 1180, 575

    // Targeting threshold rect drawn dynamically from Haxe

    // ===== Right Panel =====
    // Panel background (588 x 450, starts at X=677)
    bitmap(generated(color(588, 450, #0D0D1A99))): 677, 0

    // --- Row 1: Status --- Y=48
    text(m5x7, "Status:", #667799): 690, 50
    #statusText text(m5x7, "Ready", #AAAAAA): 738, 50
    #handCount text(m5x7, "Hand: 0", #888888): 1100, 50

    // --- Row 2: Action buttons --- Y=68
    placeholder(generated(cross(70, 22, white)), builderParameter("drawBtn")) {
        pos: 690, 68
        settings{width=>70, height=>22}
    }
    placeholder(generated(cross(70, 22, white)), builderParameter("discardBtn")) {
        pos: 768, 68
        settings{width=>70, height=>22}
    }
    placeholder(generated(cross(70, 22, white)), builderParameter("resetBtn")) {
        pos: 846, 68
        settings{width=>70, height=>22}
    }
    placeholder(generated(cross(70, 22, white)), builderParameter("disableBtn")) {
        pos: 924, 68
        settings{width=>70, height=>22}
    }

    // --- Row 3: Layout dropdown + toggles --- Y=96
    text(m5x7, "Layout:", #667799): 690, 106
    placeholder(generated(cross(120, 30, white)), builderParameter("layoutDropdown")) {
        pos: 750, 96
    }
    text(m5x7, "Arrow:", #667799): 890, 106
    placeholder(generated(cross(20, 20, white)), builderParameter("arrowToggle")) {
        pos: 938, 101
        settings{buildName=>toggle}
    }
    text(m5x7, "C2C:", #667799): 970, 106
    placeholder(generated(cross(20, 20, white)), builderParameter("c2cToggle")) {
        pos: 1002, 101
        settings{buildName=>toggle}
    }

    // --- Row 4: Hand path dropdown --- Y=130
    text(m5x7, "Hand path:", #667799): 690, 140
    placeholder(generated(cross(120, 30, white)), builderParameter("handPathDropdown")) {
        pos: 782, 130
    }

    // --- Row 5: Draw easing + duration --- Y=164
    text(m5x7, "Draw:", #778899): 690, 174
    placeholder(generated(cross(120, 30, white)), builderParameter("drawDropdown")) {
        pos: 750, 164
    }
    text(m5x7, "dur:", #555555): 882, 174
    placeholder(generated(cross(110, 8, white)), builderParameter("drawSlider")) {
        pos: 910, 175
        settings{size=>100}
    }
    #drawDurLabel text(m5x7, "1.0", #888888): 1026, 174

    // --- Row 6: Discard easing + duration --- Y=198
    text(m5x7, "Discard:", #778899): 690, 208
    placeholder(generated(cross(120, 30, white)), builderParameter("discardDropdown")) {
        pos: 750, 198
    }
    text(m5x7, "dur:", #555555): 882, 208
    placeholder(generated(cross(110, 8, white)), builderParameter("discardSlider")) {
        pos: 910, 209
        settings{size=>100}
    }
    #discardDurLabel text(m5x7, "1.0", #888888): 1026, 208

    // --- Row 7: Return easing + duration --- Y=232
    text(m5x7, "Return:", #778899): 690, 242
    placeholder(generated(cross(120, 30, white)), builderParameter("returnDropdown")) {
        pos: 750, 232
    }
    text(m5x7, "dur:", #555555): 882, 242
    placeholder(generated(cross(110, 8, white)), builderParameter("returnSlider")) {
        pos: 910, 243
        settings{size=>100}
    }
    #returnDurLabel text(m5x7, "0.2", #888888): 1026, 242

    // --- Row 8: Rearrange easing + duration --- Y=266
    text(m5x7, "Rearr:", #778899): 690, 276
    placeholder(generated(cross(120, 30, white)), builderParameter("rearrangeDropdown")) {
        pos: 750, 266
    }
    text(m5x7, "dur:", #555555): 882, 276
    placeholder(generated(cross(110, 8, white)), builderParameter("rearrangeSlider")) {
        pos: 910, 277
        settings{size=>100}
    }
    #rearrangeDurLabel text(m5x7, "0.15", #888888): 1026, 276

    // --- Config sliders (2 columns, 20px spacing) ---
    // Row 9: Y=302
    text(m5x7, "Hover scale:", #667799): 690, 302
    placeholder(generated(cross(110, 8, white)), builderParameter("hoverScaleSlider")) {
        pos: 790, 302
        settings{size=>100}
    }
    #hoverScaleLabel text(m5x7, "1.2", #888888): 906, 302
    text(m5x7, "Fan angle:", #667799): 940, 302
    placeholder(generated(cross(110, 8, white)), builderParameter("fanAngleSlider")) {
        pos: 1030, 302
        settings{size=>100}
    }
    #fanAngleLabel text(m5x7, "45", #888888): 1146, 302

    // Row 10: Y=322
    text(m5x7, "Threshold:", #667799): 690, 322
    placeholder(generated(cross(110, 8, white)), builderParameter("thresholdSlider")) {
        pos: 790, 322
        settings{size=>100}
    }
    #thresholdLabel text(m5x7, "240", #888888): 906, 322
    text(m5x7, "Hover pop:", #667799): 940, 322
    placeholder(generated(cross(110, 8, white)), builderParameter("hoverPopSlider")) {
        pos: 1030, 322
        settings{size=>100}
    }
    #hoverPopLabel text(m5x7, "40", #888888): 1146, 322

    // Row 11: Y=342
    text(m5x7, "Spread:", #667799): 690, 342
    placeholder(generated(cross(110, 8, white)), builderParameter("spreadSlider")) {
        pos: 790, 342
        settings{size=>100}
    }
    #spreadLabel text(m5x7, "20", #888888): 906, 342
    text(m5x7, "Fan radius:", #667799): 940, 342
    placeholder(generated(cross(110, 8, white)), builderParameter("fanRadiusSlider")) {
        pos: 1030, 342
        settings{size=>100}
    }
    #fanRadiusLabel text(m5x7, "600", #888888): 1146, 342

    // --- Row 12: Path dist + Orient --- Y=366
    text(m5x7, "Path dist:", #667799): 690, 376
    placeholder(generated(cross(120, 30, white)), builderParameter("pathDistDropdown")) {
        pos: 782, 366
    }
    text(m5x7, "Orient:", #667799): 940, 376
    placeholder(generated(cross(120, 30, white)), builderParameter("pathOrientDropdown")) {
        pos: 990, 366
    }

    // --- Row 13: Card-to-card toggles --- Y=400
    text(m5x7, "Hover pop:", #667799): 690, 400
    placeholder(generated(cross(20, 20, white)), builderParameter("c2cHoverPopToggle")) {
        pos: 768, 395
        settings{buildName=>toggle}
    }
    text(m5x7, "Hover scale:", #667799): 800, 400
    placeholder(generated(cross(20, 20, white)), builderParameter("c2cHoverScaleToggle")) {
        pos: 890, 395
        settings{buildName=>toggle}
    }
    text(m5x7, "Spread:", #667799): 920, 400
    placeholder(generated(cross(20, 20, white)), builderParameter("c2cSpreadToggle")) {
        pos: 976, 395
        settings{buildName=>toggle}
    }

    // --- Row 14: Event log --- Y=424
    text(m5x7, "Event:", #555555): 690, 424
    #eventText text(m5x7, "", #667799): 738, 424

    // --- Help tooltips (hover any label for description) ---
    interactive(50, 14, "hlpLayout", events: [hover]): 690, 102
    interactive(44, 14, "hlpArrow", events: [hover]): 890, 102
    interactive(30, 14, "hlpC2C", events: [hover]): 970, 102
    interactive(68, 14, "hlpHandPath", events: [hover]): 690, 136
    interactive(38, 14, "hlpDraw", events: [hover]): 690, 170
    interactive(56, 14, "hlpDiscard", events: [hover]): 690, 204
    interactive(50, 14, "hlpReturn", events: [hover]): 690, 238
    interactive(44, 14, "hlpRearr", events: [hover]): 690, 272
    interactive(80, 14, "hlpHoverScale", events: [hover]): 690, 298
    interactive(68, 14, "hlpFanAngle", events: [hover]): 940, 298
    interactive(68, 14, "hlpThreshold", events: [hover]): 690, 318
    interactive(68, 14, "hlpHoverPop", events: [hover]): 940, 318
    interactive(50, 14, "hlpSpread", events: [hover]): 690, 338
    interactive(74, 14, "hlpFanRadius", events: [hover]): 940, 338
    interactive(68, 14, "hlpPathDist", events: [hover]): 690, 372
    interactive(50, 14, "hlpOrient", events: [hover]): 940, 372
    interactive(68, 14, "hlpC2CPop", events: [hover]): 690, 396
    interactive(80, 14, "hlpC2CScale", events: [hover]): 800, 396
    interactive(50, 14, "hlpC2CSpread", events: [hover]): 920, 396
}
`,$p=`version: 1.0

// ===== Tooltip for state descriptions =====

#stateTooltip programmable(title:string="State", desc:string="", detail:string="") {
    ninepatch("ui", "Window_3x3_idle", 310, 82): 0, 0
    bitmap(generated(color(300, 2, #7fdbda))): 5, 2
    text(exo2_14, $title, #7fdbda, left, 290): 10, 8
    text(m5x7, $desc, #bbbbbb, left, 290): 10, 30
    text(m5x7, $detail, #666666, left, 290): 10, 56
}

// ===== Main Demo Layout =====

#cardStatesDemo programmable() {
    // Header
    text(exo2_16, "Card Visual States", #7fdbda): 20, 10
    text(m5x7, "All visual states in the Card Hand system. Hover any card for details.", #888888): 20, 34

    // --- Section 1: Interactive Status ---
    text(exo2_14, "Interactive Status", #778899): 30, 62
    text(m5x7, "Driven by the 'status' parameter via UIRichInteractiveHelper", #555555): 180, 66

    // Row 1 labels (cards placed at y=92 in code, height=200)
    text(m5x7, "NORMAL", #888888, center, 140): 90, 298
    text(m5x7, "HOVER", #FFDD44, center, 140): 280, 298
    text(m5x7, "PRESSED", #FFFFFF, center, 140): 470, 298
    text(m5x7, "DISABLED", #555555, center, 140): 660, 298

    // --- Section 2: Hand Behavior States ---
    text(exo2_14, "Hand Behavior", #778899): 30, 330
    text(m5x7, "Runtime transforms by UICardHandHelper: position, scale, rotation", #555555): 170, 334

    // Row 2 labels (cards placed at varying positions in code)
    text(m5x7, "HOVER POP", #FFDD44, center, 170): 55, 598
    text(m5x7, "DRAGGING", #FF8844, center, 160): 240, 598
    text(m5x7, "TARGETING", #44FF88, center, 200): 407, 598
    text(m5x7, "ANIMATING", #4488FF, center, 160): 785, 598

    // Status
    #statusText text(m5x7, "Hover a card to see state description", #888888): 20, 660
}
`,Pp=`version: 1.0

// Cards Demo — tabbed view: Card States + Card Hand

#cardsDemo programmable() {
    pos: 0, 40

    #description(updatable) text(exo2_light_14, "", #aaaaaa, left, 1200): 50, 24

    placeholder(generated(cross(800, 40, #FF0000)), builderParameter("cardTabs")) {
        pos: 0, 48
        settings{tabButtonBuildName=>tab, tabPanel.width=>1280, tabPanel.height=>720, tabPanel.contentRoot=>contentArea}
    }
}
`,Tp=`version: 1.0

// Character Sheet Demo - Dynamic References
// Reusable child programmables embedded via dynamicRef for automatic parameter-driven updates.

// ── Resource bar (HP/MP) ──────────────────────────────────────────────
#resourceBar programmable(value:uint=50, maxValue:uint=100, barColor:color=#ff4444, label:string="HP") {
  text(m6x11, $label, #aaaaaa): 0, 4
  bitmap(generated(color(300, 16, #1a1a1a))): 30, 0
  bitmap(generated(color($value * 300 / $maxValue, 16, $barColor))): 30, 0
  text(m6x11, '\${$value} / \${$maxValue}', #ffffff, center, 300): 30, 2
}

// ── Attribute stat bar ────────────────────────────────────────────────
#statBar programmable(statName:string="STR", statValue:uint=10, barColor:color=#ff7f50, maxStat:uint=30) {
  text(m6x11, $statName, $barColor): 0, 1
  text(m6x11, $statValue, #ffffff): 40, 1
  bitmap(generated(color(120, 10, #1a1a1a))): 70, 1
  bitmap(generated(color($statValue * 120 / $maxStat, 10, $barColor))): 70, 1
}

// ── XP progress bar ──────────────────────────────────────────────────
#xpBar programmable(xp:uint=0, xpMax:uint=100) {
  bitmap(generated(color(340, 16, #1a1a1a))): 0, 0
  @(xp > 0) bitmap(generated(color($xp * 340 / $xpMax, 16, #ffeb3b))): 0, 0
  text(m6x11, '\${$xp} / \${$xpMax} XP', #ffffff, center, 340): 0, 2
}

// ── Main character sheet ─────────────────────────────────────────────
#characterSheetDemo programmable(
    hp:uint=100, maxHp:uint=100,
    mp:uint=50,  maxMp:uint=50,
    strStat:uint=10, dexStat:uint=8, intStat:uint=6,
    xp:uint=0, xpMax:uint=100,
    level:uint=1
) {
    pos: 50, 80

    // Title
    text(exo2_16, "Character Sheet", #7fdbda): 0, 0
    bitmap(generated(color(500, 1, #7fdbda33))): 0, 22

    // Main panel
    ninepatch("ui", "Window_3x3_idle", 400, 440): 0, 35

    // Character identity
    text(exo2_14, "Name:", #aaaaaa): 20, 55
    text(exo2_20, "Aethon", #ffffff, left, 300): 80, 50

    text(exo2_14, "Class:", #aaaaaa): 20, 85
    text(exo2_16, "Warrior", #ff7f50, left, 200): 80, 83

    text(exo2_14, "Level:", #aaaaaa): 250, 85
    text(exo2_20, $level, #ffeb3b, left, 60): 310, 80

    // Separator
    bitmap(generated(color(360, 1, #7fdbda33))): 20, 110

    // HP bar via dynamicRef
    dynamicRef($resourceBar, value=>$hp, maxValue=>$maxHp, barColor=>#ff4444, label=>"HP"): 20, 125

    // MP bar via dynamicRef
    dynamicRef($resourceBar, value=>$mp, maxValue=>$maxMp, barColor=>#4a90a4, label=>"MP"): 20, 150

    // Separator
    bitmap(generated(color(360, 1, #7fdbda33))): 20, 178

    // Attributes
    text(exo2_16, "Attributes", #7fdbda): 20, 190

    dynamicRef($statBar, statName=>"STR", statValue=>$strStat, barColor=>#ff7f50, maxStat=>30): 30, 215
    dynamicRef($statBar, statName=>"DEX", statValue=>$dexStat, barColor=>#4caf50, maxStat=>30): 30, 235
    dynamicRef($statBar, statName=>"INT", statValue=>$intStat, barColor=>#4a90a4, maxStat=>30): 30, 255

    // Separator
    bitmap(generated(color(360, 1, #7fdbda33))): 20, 278

    // Experience
    text(exo2_14, "Experience", #7fdbda): 20, 292

    dynamicRef($xpBar, xp=>$xp, xpMax=>$xpMax): 30, 312

    // Level Up button
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("levelUpButton")) {
        pos: 100, 345
    }

    // Stats summary
    text(exo2_14, "Total Power:", #aaaaaa): 20, 395
    text(exo2_16, '\${$strStat + $dexStat + $intStat}', #ffeb3b, left, 100): 130, 393

    // Instructions
    text(exo2_light_14, "Click Level Up to gain XP and increase stats.", #666666): 0, 490
}
`,Rp=`version: 1.0

// Dialogue Demo
// Dialogue panel with speaker name, typewriter text, and branching choices.

#dialogueDemo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Dialogue System", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Scene description area
    ninepatch("ui", "Window_3x3_idle", 700, 120): 0, 35
    text(exo2_14, "Scene", #7fdbda): 15, 45
    #sceneText(updatable) text(exo2_light_14, "You enter a dimly lit tavern. An old man sits in the corner.", #aaaaaa, left, 660): 15, 70

    // Character portrait area (colored rectangle as placeholder)
    ninepatch("ui", "Window_3x3_idle", 100, 100): 0, 170
    #portraitColor(updatable) bitmap(generated(color(80, 80, #4a90a4))): 10, 180

    // Dialogue panel
    ninepatch("ui", "Window_3x3_idle", 580, 120): 120, 170

    // Speaker name
    #speakerText(updatable) text(exo2_16, "Old Man", #ffeb3b, left, 300): 135, 180

    // Dialogue text (typewriter effect handled in code)
    #dialogueText(updatable) text(exo2_14, "", #ffffff, left, 540): 135, 205

    // Continue indicator
    #continueText(updatable) text(exo2_light_14, "", #7fdbda, right, 560): 135, 265

    // Choice buttons
    placeholder(generated(cross(270, 30, #FF0000)), builderParameter("choice1Button")) {
        pos: 120, 305
    }
    placeholder(generated(cross(270, 30, #FF0000)), builderParameter("choice2Button")) {
        pos: 410, 305
    }

    // Choice visibility containers
    #choice1Visible(updatable) point: 120, 305
    #choice2Visible(updatable) point: 410, 305

    // Dialogue state info
    ninepatch("ui", "Window_3x3_idle", 700, 40): 0, 350
    #stateText(updatable) text(exo2_light_14, "Node: intro", #666666, left, 660): 15, 360

    // Instructions
    text(exo2_light_14, "Text appears character by character. Choose responses to branch the story.", #666666): 0, 405
}
`,Ap=`version: 1.0\r
\r
// Grid Component Demo — Rect drag-drop, Hex + cards, Grid-to-grid transfers\r
\r
curves {\r
    #elasticBounce curve { easing: easeoutelastic }\r
    #easeOut curve { easing: easeoutcubic }\r
}\r
\r
paths {\r
    #straightLine path { lineTo(100, 0) }\r
    #cardArc path { bezier(100, 0, 50, -40) }\r
    #arrowCurve path { bezier(100, 0, 50, -30) }\r
}\r
\r
// Drag-drop animated paths\r
#returnAnim animatedPath {\r
    path: straightLine\r
    type: time\r
    duration: 0.4\r
    0.0: progressCurve: elasticBounce\r
}\r
\r
#snapAnim animatedPath {\r
    path: straightLine\r
    type: time\r
    duration: 0.12\r
    0.0: progressCurve: easeOut\r
}\r
\r
#swapAnim animatedPath {\r
    path: cardArc\r
    type: time\r
    duration: 3.0\r
    0.0: progressCurve: easeOut\r
}\r
\r
#expensiveSnap animatedPath {\r
    path: straightLine\r
    type: time\r
    duration: 0.5\r
    0.0: progressCurve: elasticBounce\r
    0.0: scaleCurve: elasticBounce\r
}\r
\r
// Card hand animated paths\r
#drawAnim animatedPath {\r
    path: cardArc\r
    type: time\r
    duration: 0.3\r
    easing: easeOutBack\r
}\r
\r
#discardAnim animatedPath {\r
    path: cardArc\r
    type: time\r
    duration: 0.25\r
    easing: easeInQuad\r
}\r
\r
#returnCardAnim animatedPath {\r
    path: cardArc\r
    type: time\r
    duration: 0.2\r
    easing: easeOutCubic\r
}\r
\r
#rearrangeAnim animatedPath {\r
    path: cardArc\r
    type: time\r
    duration: 0.15\r
    easing: easeInOutCubic\r
}\r
\r
// ===== Cell programmables =====\r
\r
#rectCell programmable(col:int=0, row:int=0, status:[normal,hover]=normal,\r
                       highlight:[none,accept,reject,expensive,locked,swap]=none,\r
                       itemType:[none,weapon,potion]=none) {\r
    bitmap(generated(color(52, 52, #1a1a2e))): 0, 0\r
    @(highlight=>accept)     bitmap(generated(color(52, 52, #2a3a2a))): 0, 0\r
    @(highlight=>reject)     bitmap(generated(color(52, 52, #3a2020))): 0, 0\r
    @(highlight=>expensive)  bitmap(generated(color(52, 52, #3a3a1a))): 0, 0\r
    @(highlight=>locked)     bitmap(generated(color(52, 52, #1a1a1a))): 0, 0\r
    @(highlight=>accept)     apply { filter: glow(#44FF44, 0.4, 6) }\r
    @(highlight=>reject)     apply { filter: glow(#FF4444, 0.4, 6) }\r
    @(highlight=>expensive)  apply { filter: glow(#CCAA22, 0.3, 5) }\r
    @(highlight=>locked)     apply { filter: group(grayscale(0.6), brightness(0.6)) }\r
    @(highlight=>swap)       bitmap(generated(color(52, 52, #1a2a3e))): 0, 0\r
    @(highlight=>swap)       apply { filter: glow(#44AAFF, 0.4, 6) }\r
    // Highlight icons\r
    @(highlight=>expensive)  graphics(polygon(#CCAA22, filled, 26, 16, 32, 26, 26, 36, 20, 26)): 0, 0\r
    @(highlight=>expensive)  text(m3x6, "$", #CCAA22, center, 52): 0, 36\r
    @(highlight=>locked)     graphics(rect(#666666, 1.0, 12, 10); rect(#666666, filled, 16, 12)): 20, 14\r
    @(highlight=>locked)     text(m3x6, "X", #666666, center, 52): 0, 36\r
    @(highlight=>swap)       text(m3x6, "<swap>", #44AAFF, center, 52): 0, 36\r
    @(status=>hover)         apply { filter: glow(#FFFF00, 0.3, 4) }\r
    // Item type icons\r
    @(itemType=>weapon)  graphics(polygon(#AAAACC, filled, 26, 4, 30, 18, 26, 48, 22, 18)): 0, 0\r
    @(itemType=>potion)  graphics(polygon(#77AAFF, filled, 26, 8, 38, 26, 26, 44, 14, 26)): 0, 0\r
    graphics(rect(#333355, 1.0, 52, 52)): 0, 0\r
}\r
\r
#hexCell programmable(col:int=0, row:int=0, status:[normal,hover]=normal,\r
                      highlight:[none,accept,reject,expensive,locked]=none,\r
                      occupied:bool=false, cellColor:color=#222244) {\r
    @(highlight=>accept)    graphics(polygon(#2a3a2a, filled, 24, 0, 45, 12, 45, 36, 24, 48, 3, 36, 3, 12)): -24, -24\r
    @(highlight=>none)      graphics(polygon(#1a1a2e, filled, 24, 0, 45, 12, 45, 36, 24, 48, 3, 36, 3, 12)): -24, -24\r
    @(highlight=>reject)    graphics(polygon(#3a2020, filled, 24, 0, 45, 12, 45, 36, 24, 48, 3, 36, 3, 12)): -24, -24\r
    @(highlight=>expensive) graphics(polygon(#3a3a1a, filled, 24, 0, 45, 12, 45, 36, 24, 48, 3, 36, 3, 12)): -24, -24\r
    @(highlight=>locked)    graphics(polygon(#1a1a1a, filled, 24, 0, 45, 12, 45, 36, 24, 48, 3, 36, 3, 12)): -24, -24\r
    @(highlight=>accept)    apply { filter: glow(#44FF44, 0.3, 4) }\r
    @(highlight=>reject)    apply { filter: glow(#FF4444, 0.3, 4) }\r
    @(highlight=>expensive) apply { filter: glow(#CCAA22, 0.3, 4) }\r
    @(highlight=>locked)    apply { filter: group(grayscale(0.6), brightness(0.6)) }\r
    @(occupied=>true)   graphics(polygon($cellColor, filled, 24, 6, 39, 15, 39, 33, 24, 42, 9, 33, 9, 15)): -24, -24\r
    @(status=>hover) apply { filter: glow(#44FFFF, 0.3, 4) }\r
    graphics(polygon(#334466, 1.0, 24, 0, 45, 12, 45, 36, 24, 48, 3, 36, 3, 12)): -24, -24\r
}\r
\r
// Grid layer: damage preview overlay (positioned at cell center)\r
#dmgOverlay programmable(dmg:string="0") {\r
    text(m6x11, $dmg, #FF4444, center, 48): -24, -12\r
    apply { filter: outline(1, #000000) }\r
}\r
\r
// Grid layer: splash area indicator (hex-shaped translucent overlay)\r
#splashOverlay programmable() {\r
    graphics(polygon(#6666CC, filled, 24, 6, 39, 15, 39, 33, 24, 42, 9, 33, 9, 15)): -24, -24\r
    apply { filter: glow(#8888FF, 0.4, 6) }\r
}\r
\r
// Grid layer: primary target indicator (brighter, distinct from splash)\r
#targetOverlay programmable() {\r
    graphics(polygon(#CC6644, filled, 24, 6, 39, 15, 39, 33, 24, 42, 9, 33, 9, 15)): -24, -24\r
    apply { filter: glow(#FF8844, 0.5, 8) }\r
}\r
\r
// Tooltip for hex cell info\r
#hexTooltip programmable(infoText:string="") {\r
    bitmap(generated(color(120, 24, #222244))): 0, 0\r
    graphics(rect(#445577, 1.0, 120, 24)): 0, 0\r
    text(m5x7, $infoText, #CCCCDD, center, 120): 0, 8\r
}\r
\r
// ===== Card programmables =====\r
\r
#gridCard programmable(status:[normal,hover,pressed,disabled]=normal, cardName:string="Spell", cardColor:color=#3366AA, targetInfo:string="") {\r
    interactive(100, 140, "card", bind => "status", events: [hover, click, push]): 0, 0\r
    bitmap(generated(color(100, 140, #16162a))): 0, 0\r
    bitmap(generated(color(96, 4, $cardColor))): 2, 2\r
    text(m5x7, $cardName, #ffffff, center, 100): 0, 106\r
    text(m3x6, $targetInfo, #aaaacc, center, 100): 0, 120\r
    @(status=>hover)    graphics(rect(#FFDD44, 2.0, 98, 138)): 1, 1\r
    @(status=>pressed)  graphics(rect(#FFFFFF, 2.0, 98, 138)): 1, 1\r
    @(status=>disabled) apply { filter: group(grayscale(0.9), brightness(0.5)) }\r
    @(status=>normal)   graphics(rect(#334466, 1.0, 100, 140)): 0, 0\r
}\r
\r
#arrowSegment programmable(valid:bool=false) {\r
    @(valid=>false) graphics(line(#FF4444, 2.0, -4, -4, 4, 0); line(#FF4444, 2.0, -4, 4, 4, 0)): 0, 0\r
    @(valid=>true)  graphics(line(#44FF88, 2.0, -4, -4, 4, 0); line(#44FF88, 2.0, -4, 4, 4, 0)): 0, 0\r
}\r
\r
#arrowHead programmable(valid:bool=false) {\r
    @(valid=>false) graphics(polygon(#FF4444, filled, 10, 0, -6, -6, -6, 6)): 0, 0\r
    @(valid=>true)  graphics(polygon(#44FF88, filled, 10, 0, -6, -6, -6, 6)): 0, 0\r
}\r
\r
// ===== Small button =====\r
\r
#smallBtn programmable(status:[normal,hover,pressed]=normal, disabled:bool=false, buttonText:string="Btn") {\r
    interactive(50, 18, "btn", bind => "status", events: [hover, click, push]): 0, 0\r
    @(status=>normal)  bitmap(generated(color(50, 18, #333355))): 0, 0\r
    @(status=>hover)   bitmap(generated(color(50, 18, #444477))): 0, 0\r
    @(status=>pressed) bitmap(generated(color(50, 18, #555599))): 0, 0\r
    @(disabled=>true)  apply { filter: group(grayscale(0.8), brightness(0.5)) }\r
    text(m5x7, $buttonText, #aaaacc, center, 50): 0, 4\r
    graphics(rect(#555577, 1.0, 50, 18)): 0, 0\r
}\r
\r
// ===== Main layout =====\r
\r
#gridDemo programmable() {\r
    pos: 10, 70\r
\r
    // === LEFT: Rect Grid Drag-Drop ===\r
    text(m5x7, "Rect Grid + Swap", #7fdbda): 0, -4\r
    text(m5x7, "R1:weapons R2:potions R3:premium", #555555): 0, 8\r
    #rectLog(updatable) text(m5x7, "Drag items between rows", #888888): 0, 22\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("resetBtn")): 0, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("addRowBtn")): 56, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("remRowBtn")): 112, 36\r
\r
    // === CENTER: Hex Grid + Cards ===\r
    text(m5x7, "Hex Grid + Cards", #cc9966): 370, -4\r
    text(m5x7, "Layers: dmg preview + splash", #555555): 370, 8\r
    #hexLog(updatable) text(m5x7, "Play cards, click to clear", #888888): 370, 22\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("drawBtn")): 370, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("addRingBtn")): 426, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("remRingBtn")): 482, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("snapChk")): 544, 38\r
    text(m5x7, "Snap", #aaaacc): 562, 40\r
\r
    // === RIGHT: Grid-to-Grid ===\r
    text(m5x7, "Grid to Grid + Swap", #66cc99): 770, -4\r
    text(m5x7, "Source tracking + swap + typed items", #555555): 770, 8\r
    #g2gLog(updatable) text(m5x7, "Move items between grids", #888888): 770, 22\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("addStorBtn")): 770, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("remStorBtn")): 826, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("addLoadBtn")): 882, 36\r
    placeholder(generated(cross(10, 10, #FF0000)), builderParameter("remLoadBtn")): 938, 36\r
    #storageCount(updatable) text(m5x7, "Storage: 5", #7799aa): 770, 56\r
    #loadoutCount(updatable) text(m5x7, "Loadout: 0", #7799aa): 870, 56\r
    text(m5x7, "Weapons", #8888aa): 770, 68\r
    text(m5x7, "Potions", #7799bb): 870, 68\r
}\r
`,Ep=`version: 1.0

// Inventory Demo — Shop, Player Inventory (3x4), Equipment (head, 2 arms, armor, legs)

curves {
    #elasticBounce curve {
        easing: easeoutelastic
    }
    #easeOut curve {
        easing: easeoutcubic
    }
}

paths {
    #straightLine path {
        lineTo(100, 0)
    }
}

#returnAnim animatedPath {
    path: straightLine
    type: time
    duration: 0.4
    0.0: progressCurve: elasticBounce
}

#snapAnim animatedPath {
    path: straightLine
    type: time
    duration: 0.12
    0.0: progressCurve: easeOut
}

// Item visual — colored block with icon and item name
#invItem programmable(itemType:[empty, hpot, mpot, lsword, ssword, shield, ring, boots, scroll, helm, armor] = empty) {
    // Colored background per item type
    @(itemType => empty)   bitmap(generated(color(48, 48, #1a1a2e))): 0, 0
    @(itemType => hpot)    bitmap(generated(color(48, 48, #cc3333))): 0, 0
    @(itemType => mpot)    bitmap(generated(color(48, 48, #3366bb))): 0, 0
    @(itemType => lsword)  bitmap(generated(color(48, 48, #88aa44))): 0, 0
    @(itemType => ssword)  bitmap(generated(color(48, 48, #669944))): 0, 0
    @(itemType => shield)  bitmap(generated(color(48, 48, #4488cc))): 0, 0
    @(itemType => ring)    bitmap(generated(color(48, 48, #ccaa33))): 0, 0
    @(itemType => boots)   bitmap(generated(color(48, 48, #44aa88))): 0, 0
    @(itemType => scroll)  bitmap(generated(color(48, 48, #aa66cc))): 0, 0
    @(itemType => helm)    bitmap(generated(color(48, 48, #999999))): 0, 0
    @(itemType => armor)   bitmap(generated(color(48, 48, #445588))): 0, 0

    // Item sprites from roguelike atlas (3x scale = 48x48)
    @(itemType => hpot)    scale(3) bitmap(sheet("roguelikeitems", "potion", 0)): 0, 0
    @(itemType => mpot)    scale(3) bitmap(sheet("roguelikeitems", "potion", 2)): 0, 0
    @(itemType => lsword)  scale(3) bitmap(sheet("roguelikeitems", "weapon", 9)): 0, 0
    @(itemType => ssword)  scale(3) bitmap(sheet("roguelikeitems", "weapon", 11)): 0, 0
    @(itemType => shield)  scale(3) bitmap(sheet("roguelikeitems", "shield", 6)): 0, 0
    @(itemType => ring)    scale(3) bitmap(sheet("roguelikeitems", "ring", 0)): 0, 0
    @(itemType => boots)   scale(3) bitmap(sheet("roguelikeitems", "boots", 0)): 0, 0
    @(itemType => scroll)  scale(3) bitmap(sheet("roguelikeitems", "scroll", 0)): 0, 0
    @(itemType => helm)    scale(3) bitmap(sheet("roguelikeitems", "helmet", 0)): 0, 0
    @(itemType => armor)   scale(3) bitmap(sheet("roguelikeitems", "armor", 0)): 0, 0

    // Item name label (bottom of item)
    @(itemType => empty)   text(m5x7, "---", #555555, center, 48): 0, 32
    @(itemType => hpot)    text(m5x7, "H.Pot", #ff8888, center, 48): 0, 32
    @(itemType => mpot)    text(m5x7, "M.Pot", #88aaff, center, 48): 0, 32
    @(itemType => lsword)  text(m5x7, "L.Sword", #bbcc88, center, 48): 0, 32
    @(itemType => ssword)  text(m5x7, "S.Sword", #99cc77, center, 48): 0, 32
    @(itemType => shield)  text(m5x7, "Shield", #88bbdd, center, 48): 0, 32
    @(itemType => ring)    text(m5x7, "Ring", #ddbb66, center, 48): 0, 32
    @(itemType => boots)   text(m5x7, "Boots", #88ddbb, center, 48): 0, 32
    @(itemType => scroll)  text(m5x7, "Scroll", #bb99dd, center, 48): 0, 32
    @(itemType => helm)    text(m5x7, "Helm", #bbbbbb, center, 48): 0, 32
    @(itemType => armor)   text(m5x7, "Armor", #7799bb, center, 48): 0, 32
}

layouts {
    // Inventory grid: 4 cols x 3 rows, 58px step, offset 155px down
    offset: 0, 155 {
        #invGrid cells(cols: 4, rows: 3, cellWidth: 58, cellHeight: 58)
    }
    // Equipment slot positions (relative to the equipment point block at 310, 155)
    #equipSlots list {
        point: 58, 0              // head
        point: 0, 66              // larm
        point: 58, 66             // armor
        point: 116, 66            // rarm
        point: 58, 132            // legs
    }
}

// Main demo layout
#inventoryDemo programmable() {
    pos: 30, 70

    // ===== SHOP BAR =====
    text(exo2_16, "Shop", #7fdbda): 0, 0
    bitmap(generated(color(720, 1, #7fdbda33))): 0, 20

    // Shop slots (10 items)
    point {
        pos: 0, 30
        repeatable($s, step(10, dx: 56)) {
            bitmap(generated(color(52, 52, #222244))): 0, 0
            #shop[$s] slot(state:[normal, unavailable] = normal) {
                @(state => normal)      bitmap(generated(color(1, 1, #22224400))): 0, 0
                @(state => unavailable) bitmap(generated(color(52, 52, #00000099))): 0, 0
                @(state => unavailable) graphics(
                    line(#cc4444, 2, 6, 6, 46, 46);
                    line(#cc4444, 2, 46, 6, 6, 46);
                ): 0, 0
            }
        }
    }

    // ===== GOLD / WEIGHT / RESET =====
    text(m6x11, "Gold:", #ffcc33): 0, 95
    #goldText(updatable) text(exo2_16, "600", #ffcc33): 35, 92
    text(m6x11, "Weight:", #aaaaaa): 130, 95
    #weightText(updatable) text(exo2_16, "0 / 60 kg", #aaaaaa): 178, 92
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("resetBtn")) { pos: 350, 92 }
    text(exo2_light_14, "Reset", #aaaaaa): 374, 92

    // ===== PLAYER INVENTORY (left) =====
    text(exo2_16, "Inventory", #66cc99): 0, 120
    bitmap(generated(color(232, 1, #66cc9933))): 0, 140

    // Inventory grid (4x3 = 12 slots)
    repeatable($i, layout("invGrid")) {
        bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
        #inv[$i] slot(state:[normal, disabled, highlight] = normal) {
            @(state => normal)    bitmap(generated(color(52, 52, #2a2a4400))): 0, 0
            @(state => disabled)  bitmap(generated(color(52, 52, #55555599))): 0, 0
            @(state => highlight) graphics(
                line(#ffffff, 1, 0, 0, 51, 0);
                line(#ffffff, 1, 0, 51, 51, 51);
                line(#ffffff, 1, 0, 0, 0, 51);
                line(#ffffff, 1, 51, 0, 51, 51);
            ): 0, 0
        }
    }

    #playerWeightText(updatable) text(exo2_light_14, "Weight: 0 / 60 kg", #66cc99): 0, 332
    #playerCountText(updatable) text(exo2_light_14, "Items: 0 / 12  Equipped: 0 / 5", #66cc99): 0, 350

    // ===== EQUIPMENT (right) =====
    text(exo2_16, "Equipment", #cc9966): 310, 120
    bitmap(generated(color(200, 1, #cc996633))): 310, 140

    point {
        pos: 310, 155

        // Stick figure body silhouette (visible in gaps between slots)
        bitmap(generated(color(20, 20, #2a2a4e))): 74, -24
        bitmap(generated(color(4, 208, #2a2a4e))): 82, -24
        bitmap(generated(color(120, 4, #2a2a4e))): 24, 56
        bitmap(generated(color(20, 4, #2a2a4e))): 74, 122
        bitmap(generated(color(4, 10, #2a2a4e))): 76, 124
        bitmap(generated(color(4, 10, #2a2a4e))): 88, 124

        // Equipment slots (positioned via equipSlots layout)
        repeatable($e, layout("equipSlots")) {
            bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
            @($e => 0) text(m5x7, "HEAD",  #333355, center, 52): 0, 20
            @($e => 1) text(m5x7, "L.ARM", #333355, center, 52): 0, 20
            @($e => 2) text(m5x7, "ARMOR", #333355, center, 52): 0, 20
            @($e => 3) text(m5x7, "R.ARM", #333355, center, 52): 0, 20
            @($e => 4) text(m5x7, "LEGS",  #333355, center, 52): 0, 20
            #equip[$e] slot(state:[normal, disabled, highlight, unavailable] = normal) {
                @(state => normal)      bitmap(generated(color(52, 52, #2a2a4400))): 0, 0
                @(state => disabled)    bitmap(generated(color(52, 52, #55555599))): 0, 0
                @(state => highlight)   graphics(
                    line(#ffffff, 1, 0, 0, 51, 0);
                    line(#ffffff, 1, 0, 51, 51, 51);
                    line(#ffffff, 1, 0, 0, 0, 51);
                    line(#ffffff, 1, 51, 0, 51, 51);
                ): 0, 0
                @(state => unavailable) graphics(
                    line(#cc4444, 2, 6, 6, 46, 46);
                    line(#cc4444, 2, 46, 6, 6, 46);
                ): 0, 0
            }
        }
    }

    // ===== LOG =====
    #logText(updatable) text(exo2_light_14, "Drag items from shop to inventory or equip them.", #666666): 0, 375
}
`,Bp=`version: 1.0

// Project List Demo
// Demonstrates scrollable list with custom multi-field items, multiple base states,
// per-item params, dynamic updates via setItems(), and scrollToIndex().

// Custom item template: 60px tall with title, description, cost, duration, effect
#project-list-item programmable(status:[normal, hover, pressed, active, completed, disabled]=normal, selected:[true, false]=false, disabled:[true, false]=false, baseState:[normal, active, completed, disabled]=normal, showEffect:[true, false]=false, showDone:[true, false]=false, images:[none, tile]=none, tile:tile, itemWidth:uint=280, index:uint=0, title="Project", description="No description", cost="0g", duration="1 yr", effect="") {

    // Backgrounds: use baseState (not status) so hover/pressed don't change the background
    @(baseState=>disabled) ninepatch("ui", "droppanel-mid-disabled", $itemWidth+4, 60): -2, 0
    @else(baseState=>active) bitmap(generated(color($itemWidth+4, 60, #1a2a4e))): -2, 0
    @else(baseState=>completed) bitmap(generated(color($itemWidth+4, 60, #1a3e1a))): -2, 0
    @else ninepatch("ui", "droppanel-mid-idle", $itemWidth+4, 60): -2, 0

    // Hover: non-filled box outline (1px border)
    @(status=>hover) bitmap(generated(color($itemWidth, 1, #FFFFFF))): 0, 0
    @(status=>hover) bitmap(generated(color($itemWidth, 1, #FFFFFF))): 0, 59
    @(status=>hover) bitmap(generated(color(1, 60, #FFFFFF))): 0, 0
    @(status=>hover) bitmap(generated(color(1, 60, #FFFFFF))): $itemWidth - 1, 0

    // Pressed: non-filled box outline (1px border, dimmer)
    @(status=>pressed) bitmap(generated(color($itemWidth, 1, #888888))): 0, 0
    @(status=>pressed) bitmap(generated(color($itemWidth, 1, #888888))): 0, 59
    @(status=>pressed) bitmap(generated(color(1, 60, #888888))): 0, 0
    @(status=>pressed) bitmap(generated(color(1, 60, #888888))): $itemWidth - 1, 0

    // Status indicator bar (left edge): use baseState
    @(baseState=>active) bitmap(generated(color(3, 56, #4488FF))): 0, 2
    @else(baseState=>completed) bitmap(generated(color(3, 56, #44CC44))): 0, 2
    @else(baseState=>disabled) bitmap(generated(color(3, 56, #444444))): 0, 2
    @else bitmap(generated(color(3, 56, #666666))): 0, 2

    // Selected: white 25% alpha overlay in front of everything + ">" indicator
    @(selected=>true) bitmap(generated(color($itemWidth, 60, #FFFFFF))) { pos: 0, 0; alpha: 0.25 }
    @(selected=>true) text(m6x11, ">", #FFFFFF): 5, 24

    // Icon
    @(images=>tile) bitmap($tile): 6, 6

    // Title (top-left)
    text(m6x11, $title, #FFFFFF, left, $itemWidth - 80): 24, 5

    // Cost + Duration (top-right)
    text(m5x7, $cost, #FFD700, right, 50): $itemWidth - 55, 5
    text(m5x7, $duration, #AAAAAA, right, 50): $itemWidth - 55, 16

    // Description (middle)
    text(m5x7, $description, #888888, left, $itemWidth - 30): 24, 22

    // Effect (bottom, shown for active/completed - decoupled from status so hover doesn't hide it)
    @(showEffect=>true) text(m5x7, $effect, #4488FF, left, $itemWidth - 30): 24, 40

    // Completed indicator
    @(showDone=>true) text(m5x7, "[DONE]", #44CC44, right, 50): $itemWidth - 55, 46

    interactive($itemWidth, 60, $index);
    settings{height:float=>60}
}

// Demo layout
#projectListDemo programmable() {
    pos: 50, 80

    text(exo2_16, "Project List Demo", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22
    text(exo2_light_14, "Custom items with base states, params, and dynamic updates", #aaaaaa): 0, 28

    // Scrollable list
    placeholder(generated(cross(280, 360, #FF0000)), builderParameter("scrollableList")) {
        pos: 0, 55
        settings{panelBuildName=>list-panel, height:int=>360, width:int=>280, clickMode=>double}
    }

    // Detail panel
    text(exo2_16, "Project Details", #7fdbda): 310, 55
    bitmap(generated(color(380, 1, #7fdbda33))): 310, 77
    ninepatch("ui", "Window_3x3_idle", 380, 200): 310, 85

    #detailTitle(updatable) text(exo2_20, "Select a project", #ffffff, left, 360): 325, 100
    #detailStatus(updatable) text(exo2_light_14, "Status: --", #aaaaaa, left, 360): 325, 125
    #detailCost(updatable) text(exo2_light_14, "Cost: --", #FFD700, left, 170): 325, 145
    #detailDuration(updatable) text(exo2_light_14, "Duration: --", #aaaaaa, left, 170): 505, 145
    #detailDesc(updatable) text(exo2_light_14, "...", #cccccc, left, 350): 325, 170
    #detailEffect(updatable) text(exo2_light_14, "", #4488FF, left, 350): 325, 195

    // Action buttons
    text(exo2_16, "Actions", #7fdbda): 310, 300
    bitmap(generated(color(380, 1, #7fdbda33))): 310, 322

    placeholder(generated(cross(150, 30, #FF0000)), builderParameter("startBtn")) {
        pos: 310, 340
        settings{width:int=>150, height:int=>30}
    }

    placeholder(generated(cross(150, 30, #FF0000)), builderParameter("completeBtn")) {
        pos: 490, 340
        settings{width:int=>150, height:int=>30}
    }

    placeholder(generated(cross(150, 30, #FF0000)), builderParameter("resetBtn")) {
        pos: 310, 370
        settings{width:int=>150, height:int=>30}
    }

    placeholder(generated(cross(150, 30, #FF0000)), builderParameter("scrollToBtn")) {
        pos: 490, 370
        settings{width:int=>150, height:int=>30}
    }

    // Log
    #logText(updatable) text(exo2_light_14, "Click a project to view details.", #666666): 0, 430

    // Legend
    text(m5x7, "Legend:", #888888): 0, 450
    bitmap(generated(color(3, 10, #666666))): 50, 451
    text(m5x7, "Normal", #888888): 58, 450
    bitmap(generated(color(3, 10, #4488FF))): 105, 451
    text(m5x7, "Active", #4488FF): 113, 450
    bitmap(generated(color(3, 10, #44CC44))): 155, 451
    text(m5x7, "Complete", #44CC44): 163, 450
    bitmap(generated(color(3, 10, #444444))): 215, 451
    text(m5x7, "Disabled", #888888): 223, 450
}
`,Dp=`version: 1.0

// Equipment Tree Demo
// 4 tiers x 3 paths using roguelike item icons.
// Nodes are slots with slotContent for the icon.
// Slot states: upgraded, upgradable, hidden, notEnoughPoints
// Hover is a separate bool-like parameter on each slot.

// ── Equipment icon (just the sprite, optionally grayscale) ──────────────
#eqIcon programmable(
    icon:[helm, armor, axe, tshield, boots, gloves, bow, ring, staff, book, scroll, gem]=helm,
    style:[full, gray]=full
) {
    @(style => full) point {
        @(icon => helm)     scale(2) bitmap(sheet("roguelikeitems", "helmet", 0)): 0, 0
        @(icon => armor)    scale(2) bitmap(sheet("roguelikeitems", "armor", 0)): 0, 0
        @(icon => axe)      scale(2) bitmap(sheet("roguelikeitems", "weapon", 9)): 0, 0
        @(icon => tshield)  scale(2) bitmap(sheet("roguelikeitems", "shield", 6)): 0, 0
        @(icon => boots)    scale(2) bitmap(sheet("roguelikeitems", "boots", 0)): 0, 0
        @(icon => gloves)   scale(2) bitmap(sheet("roguelikeitems", "gloves", 0)): 0, 0
        @(icon => bow)      scale(2) bitmap(sheet("roguelikeitems", "bow", 0)): 0, 0
        @(icon => ring)     scale(2) bitmap(sheet("roguelikeitems", "ring", 0)): 0, 0
        @(icon => staff)    scale(2) bitmap(sheet("roguelikeitems", "scepter", 0)): 0, 0
        @(icon => book)     scale(2) bitmap(sheet("roguelikeitems", "book", 0)): 0, 0
        @(icon => scroll)   scale(2) bitmap(sheet("roguelikeitems", "scroll", 0)): 0, 0
        @(icon => gem)      scale(2) bitmap(sheet("roguelikeitems", "gem", 0)): 0, 0
    }
    @(style => gray) point {
        filter: grayscale(1.0)
        @(icon => helm)     scale(2) bitmap(sheet("roguelikeitems", "helmet", 0)): 0, 0
        @(icon => armor)    scale(2) bitmap(sheet("roguelikeitems", "armor", 0)): 0, 0
        @(icon => axe)      scale(2) bitmap(sheet("roguelikeitems", "weapon", 9)): 0, 0
        @(icon => tshield)  scale(2) bitmap(sheet("roguelikeitems", "shield", 6)): 0, 0
        @(icon => boots)    scale(2) bitmap(sheet("roguelikeitems", "boots", 0)): 0, 0
        @(icon => gloves)   scale(2) bitmap(sheet("roguelikeitems", "gloves", 0)): 0, 0
        @(icon => bow)      scale(2) bitmap(sheet("roguelikeitems", "bow", 0)): 0, 0
        @(icon => ring)     scale(2) bitmap(sheet("roguelikeitems", "ring", 0)): 0, 0
        @(icon => staff)    scale(2) bitmap(sheet("roguelikeitems", "scepter", 0)): 0, 0
        @(icon => book)     scale(2) bitmap(sheet("roguelikeitems", "book", 0)): 0, 0
        @(icon => scroll)   scale(2) bitmap(sheet("roguelikeitems", "scroll", 0)): 0, 0
        @(icon => gem)      scale(2) bitmap(sheet("roguelikeitems", "gem", 0)): 0, 0
    }
}

// ── Node grid layouts (one per path for path-specific border colors) ────
layouts {
    #warNodes list {
        point: 60, 65
        point: 160, 65
        point: 260, 65
        point: 360, 65
    }
    #rogNodes list {
        point: 60, 140
        point: 160, 140
        point: 260, 140
        point: 360, 140
    }
    #magNodes list {
        point: 60, 215
        point: 160, 215
        point: 260, 215
        point: 360, 215
    }
}

// ── Main equipment tree ─────────────────────────────────────────────────
#eqTreeDemo programmable() {
    pos: 50, 60

    // Title
    text(exo2_16, "Equipment Tree", #7fdbda): 0, 0
    bitmap(generated(color(500, 1, #7fdbda33))): 0, 22

    // Everything below title shifted 10px down via point wrapper
    point {
        pos: 0, 10

    // Tree panel
    ninepatch("ui", "Window_3x3_idle", 500, 250): 0, 35

    // Tier headers
    text(exo2_light_14, "Tier 1", #666666, center, 50): 53, 46
    text(exo2_light_14, "Tier 2", #666666, center, 50): 153, 46
    text(exo2_light_14, "Tier 3", #666666, center, 50): 253, 46
    text(exo2_light_14, "Tier 4", #666666, center, 50): 353, 46

    // Cost labels under tier headers
    text(m5x7, "1 SP", #555555, center, 50): 53, 60
    text(m5x7, "2 SP", #555555, center, 50): 153, 60
    text(m5x7, "3 SP", #555555, center, 50): 253, 60
    text(m5x7, "5 SP", #555555, center, 50): 353, 60

    // Row labels
    text(exo2_14, "WAR", #ff7f50): 14, 78
    text(exo2_14, "ROG", #4caf50): 14, 153
    text(exo2_14, "MAG", #4a90a4): 14, 228

    // ── Connectors (horizontal lines between nodes) ──────────────
    point {
        pos: 96, 82
        repeatable($c, step(3, dx: 100)) {
            bitmap(generated(color(64, 2, #3a3a3a))): 0, 0
        }
    }
    point {
        pos: 96, 157
        repeatable($c, step(3, dx: 100)) {
            bitmap(generated(color(64, 2, #3a3a3a))): 0, 0
        }
    }
    point {
        pos: 96, 232
        repeatable($c, step(3, dx: 100)) {
            bitmap(generated(color(64, 2, #3a3a3a))): 0, 0
        }
    }

    // ── WAR path slots (orange-red upgraded border) ─────────────
    repeatable($n, layout("warNodes")) {
        #warNode[$n] slot(state:[upgraded, upgradable, hidden, notEnoughPoints] = hidden, hover:[off, on] = off) {
            @(state => upgraded)        bitmap(generated(color(36, 36, #ff7f50))): 0, 0
            @(state => upgradable)      bitmap(generated(color(36, 36, #2a4a2a))): 0, 0
            @(state => notEnoughPoints) bitmap(generated(color(36, 36, #333333))): 0, 0
            @(state => hidden)          bitmap(generated(color(36, 36, #222222))): 0, 0
            bitmap(generated(color(32, 32, #1a1a1a))): 2, 2
            slotContent: 2, 2
            @(state => hidden) text(m6x11, "?", #444444, center, 36): 0, 12
            @(state => upgradable) @alpha(0.5) bitmap(generated(color(16, 16, #22aa22))): 10, 10
            @(state => upgradable) @alpha(0.5) text(m6x11, "+", #ffffff, center, 16): 10, 12
            @(state => notEnoughPoints) graphics(
                line(#cc4444, 2, 6, 6, 30, 30);
                line(#cc4444, 2, 30, 6, 6, 30);
            ): 0, 0
            @(hover => on) graphics(
                line(#ffffff, 1, 0, 0, 35, 0);
                line(#ffffff, 1, 35, 0, 35, 35);
                line(#ffffff, 1, 35, 35, 0, 35);
                line(#ffffff, 1, 0, 35, 0, 0);
            ): 0, 0
        }
    }

    // ── ROG path slots (green upgraded border) ──────────────────
    repeatable($n, layout("rogNodes")) {
        #rogNode[$n] slot(state:[upgraded, upgradable, hidden, notEnoughPoints] = hidden, hover:[off, on] = off) {
            @(state => upgraded)        bitmap(generated(color(36, 36, #4caf50))): 0, 0
            @(state => upgradable)      bitmap(generated(color(36, 36, #2a4a2a))): 0, 0
            @(state => notEnoughPoints) bitmap(generated(color(36, 36, #333333))): 0, 0
            @(state => hidden)          bitmap(generated(color(36, 36, #222222))): 0, 0
            bitmap(generated(color(32, 32, #1a1a1a))): 2, 2
            slotContent: 2, 2
            @(state => hidden) text(m6x11, "?", #444444, center, 36): 0, 12
            @(state => upgradable) @alpha(0.5) bitmap(generated(color(16, 16, #22aa22))): 10, 10
            @(state => upgradable) @alpha(0.5) text(m6x11, "+", #ffffff, center, 16): 10, 12
            @(state => notEnoughPoints) graphics(
                line(#cc4444, 2, 6, 6, 30, 30);
                line(#cc4444, 2, 30, 6, 6, 30);
            ): 0, 0
            @(hover => on) graphics(
                line(#ffffff, 1, 0, 0, 35, 0);
                line(#ffffff, 1, 35, 0, 35, 35);
                line(#ffffff, 1, 35, 35, 0, 35);
                line(#ffffff, 1, 0, 35, 0, 0);
            ): 0, 0
        }
    }

    // ── MAG path slots (blue upgraded border) ───────────────────
    repeatable($n, layout("magNodes")) {
        #magNode[$n] slot(state:[upgraded, upgradable, hidden, notEnoughPoints] = hidden, hover:[off, on] = off) {
            @(state => upgraded)        bitmap(generated(color(36, 36, #4a90a4))): 0, 0
            @(state => upgradable)      bitmap(generated(color(36, 36, #2a4a2a))): 0, 0
            @(state => notEnoughPoints) bitmap(generated(color(36, 36, #333333))): 0, 0
            @(state => hidden)          bitmap(generated(color(36, 36, #222222))): 0, 0
            bitmap(generated(color(32, 32, #1a1a1a))): 2, 2
            slotContent: 2, 2
            @(state => hidden) text(m6x11, "?", #444444, center, 36): 0, 12
            @(state => upgradable) @alpha(0.5) bitmap(generated(color(16, 16, #22aa22))): 10, 10
            @(state => upgradable) @alpha(0.5) text(m6x11, "+", #ffffff, center, 16): 10, 12
            @(state => notEnoughPoints) graphics(
                line(#cc4444, 2, 6, 6, 30, 30);
                line(#cc4444, 2, 30, 6, 6, 30);
            ): 0, 0
            @(hover => on) graphics(
                line(#ffffff, 1, 0, 0, 35, 0);
                line(#ffffff, 1, 35, 0, 35, 35);
                line(#ffffff, 1, 35, 35, 0, 35);
                line(#ffffff, 1, 0, 35, 0, 0);
            ): 0, 0
        }
    }

    // ── Interactives (click & hover hit regions per node) ────────
    interactive(36, 36, "0"):   60, 65
    interactive(36, 36, "1"):  160, 65
    interactive(36, 36, "2"):  260, 65
    interactive(36, 36, "3"):  360, 65
    interactive(36, 36, "4"):   60, 140
    interactive(36, 36, "5"):  160, 140
    interactive(36, 36, "6"):  260, 140
    interactive(36, 36, "7"):  360, 140
    interactive(36, 36, "8"):   60, 215
    interactive(36, 36, "9"):  160, 215
    interactive(36, 36, "10"): 260, 215
    interactive(36, 36, "11"): 360, 215

    // ── Info panel ──────────────────────────────────────────────
    ninepatch("ui", "Window_3x3_idle", 500, 55): 0, 295
    #skillPointsText(updatable) text(m6x11, "Skill Points: 5", #ffeb3b, left, 150): 18, 310

    placeholder(generated(cross(50, 20, #FF0000)), builderParameter("addPointButton")) {
        pos: 170, 310
        settings{width:int=>50, height:int=>20, font=>"m5x7"}
    }

    #skillInfoText(updatable) text(exo2_14, "Hover over equipment to see details", #aaaaaa, left, 280): 18, 332

    placeholder(generated(cross(50, 20, #FF0000)), builderParameter("resetButton")) {
        pos: 230, 310
        settings{width:int=>50, height:int=>20, font=>"m5x7"}
    }

    // Legend (single row, pixel font)
    bitmap(generated(color(6, 6, #22aa22))): 310, 312
    text(m5x7, "Buy", #888888): 319, 310
    bitmap(generated(color(6, 6, #cc4444))): 345, 312
    text(m5x7, "No SP", #888888): 354, 310
    bitmap(generated(color(6, 6, #444444))): 390, 312
    text(m5x7, "???", #888888): 399, 310

    // Instructions
    text(exo2_light_14, "Click to unlock equipment. Previous tier required. +SP to add points.", #555555): 0, 365

    } // end point (10px down offset)
}
`,Ip=`version: 1.0

// Status Bar Demo
// Horizontal flow layout with dynamic buff/debuff cards, progress bars, particles,
// and hover popup tooltips with live TTL.

// ── Effect Icon ──
// Colored background + roguelike sprite per effect type
#effectIcon programmable(effectType:[regen, strength, shield, haste, poison, slow, weakness, curse] = regen) {
    // Colored backgrounds
    @(effectType => regen)    bitmap(generated(color(48, 48, #4CAF50))): 0, 0
    @(effectType => strength) bitmap(generated(color(48, 48, #FF7F50))): 0, 0
    @(effectType => shield)   bitmap(generated(color(48, 48, #4A90A4))): 0, 0
    @(effectType => haste)    bitmap(generated(color(48, 48, #CCBB33))): 0, 0
    @(effectType => poison)   bitmap(generated(color(48, 48, #8B00FF))): 0, 0
    @(effectType => slow)     bitmap(generated(color(48, 48, #666666))): 0, 0
    @(effectType => weakness) bitmap(generated(color(48, 48, #FF4444))): 0, 0
    @(effectType => curse)    bitmap(generated(color(48, 48, #440044))): 0, 0

    // Roguelike sprites (3x scale = 48x48)
    @(effectType => regen)    scale(3) bitmap(sheet("roguelikeitems", "potion", 0)): 0, 0
    @(effectType => strength) scale(3) bitmap(sheet("roguelikeitems", "weapon", 9)): 0, 0
    @(effectType => shield)   scale(3) bitmap(sheet("roguelikeitems", "shield", 6)): 0, 0
    @(effectType => haste)    scale(3) bitmap(sheet("roguelikeitems", "boots", 0)): 0, 0
    @(effectType => poison)   scale(3) bitmap(sheet("roguelikeitems", "potion", 2)): 0, 0
    @(effectType => slow)     scale(3) bitmap(sheet("roguelikeitems", "scroll", 0)): 0, 0
    @(effectType => weakness) scale(3) bitmap(sheet("roguelikeitems", "weapon", 11)): 0, 0
    @(effectType => curse)    scale(3) bitmap(sheet("roguelikeitems", "ring", 0)): 0, 0
}

// ── Status Effect Card ──
// Progress bar width driven by pct parameter (incremental update).
// accentColor provides per-effect color for accent bar, name text, and progress bar.
#statusCard programmable(pct:0..100=100, kind:[buff, debuff]=buff, accentColor:color=#44cc44) {
    // Card background
    @(kind => buff)   bitmap(generated(color(64, 88, #12261a))): 0, 0
    @(kind => debuff) bitmap(generated(color(64, 88, #261216))): 0, 0

    // Top accent bar — effect's own color
    bitmap(generated(color(64, 2, $accentColor))): 0, 0

    // Icon slot (Haxe builds effectIcon and inserts here)
    #cardIcon slot {
        bitmap(generated(color(1, 1, #00000000))): 0, 0
    }

    // Effect name — colored per effect
    #cardName(updatable) text(m5x7, "", $accentColor, center, 64): 0, 58

    // Countdown timer
    #cardTimer(updatable) text(m6x11, "", #ffeb3b, center, 64): 0, 68

    // Progress bar background
    bitmap(generated(color(60, 6, #111111))): 2, 79

    // Progress bar fill — effect's own color
    bitmap(generated(color($pct * 58 / 100, 4, $accentColor))): 3, 80
}

// ── Effect Tooltip (hover popup) ──
// Rich tooltip shown above hovered card with live TTL updates.
#effectTooltip programmable(accentColor:color=#44cc44, pct:0..100=100) {
    ninepatch("ui", "Window_3x3_idle", 190, 90): 0, 0
    // Accent bar at top
    bitmap(generated(color(170, 2, $accentColor))): 10, 8
    // Effect name in accent color
    #ttName(updatable) text(exo2_14, "", $accentColor, left, 120): 10, 14
    // Type badge (right-aligned)
    #ttType(updatable) text(m5x7, "", #888888, right, 60): 120, 18
    // Description
    #ttDesc(updatable) text(m6x11, "", #cccccc, left, 170): 10, 38
    // Timer countdown
    #ttTimer(updatable) text(m6x11, "", #ffeb3b, left, 170): 10, 58
    // Progress bar background
    bitmap(generated(color(170, 5, #222222))): 10, 74
    // Progress bar fill
    bitmap(generated(color($pct * 166 / 100, 3, $accentColor))): 12, 75
}

// ── Particle Effects ──

// Buff: sparkles drifting outward from card edges
#buffSparkle particles {
    count: 10
    emit: circle(r: 36, rRand: 6, angle: 0, angleSpread: 360deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 1.8
    speed: 8
    speedRandom: 0.5
    size: 0.2
    sizeRandom: 0.1
    fadeIn: 0.2
    fadeOut: 0.7
    colorStops: 0.0 #FFEE88, 0.5 #88FFAA, 1.0 #44CC4400
    blendMode: add
}

// Debuff: wisps rising from card top
#debuffSmoke particles {
    count: 8
    emit: box(w: 60, h: 2, angle: 270deg, angleSpread: 20deg)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 1.6
    speed: 18
    speedRandom: 0.3
    size: 0.3
    sizeRandom: 0.15
    fadeIn: 0.2
    fadeOut: 0.6
    colorStops: 0.0 #8844AA, 0.5 #664488, 1.0 #44004400
    blendMode: alpha
}

// One-shot burst for buff refresh
#buffRefreshBurst particles {
    count: 40
    loop: false
    emit: circle(r: 24, rRand: 10, angle: 0, angleSpread: 360deg)
    tiles: file("circle_soft.png")
    maxLife: 0.6
    speed: 100
    speedRandom: 0.4
    size: 0.35
    sizeRandom: 0.2
    fadeIn: 0.05
    fadeOut: 0.6
    colorStops: 0.0 #FFFFFF, 0.3 #FFEE44, 1.0 #FF880000
    blendMode: add
}

// One-shot burst for debuff refresh
#debuffRefreshBurst particles {
    count: 40
    loop: false
    emit: circle(r: 24, rRand: 10, angle: 0, angleSpread: 360deg)
    tiles: file("circle_soft.png")
    maxLife: 0.6
    speed: 100
    speedRandom: 0.4
    size: 0.35
    sizeRandom: 0.2
    fadeIn: 0.05
    fadeOut: 0.6
    colorStops: 0.0 #BB66DD, 0.3 #8844AA, 1.0 #44004400
    blendMode: add
}

// ── Main Demo Layout ──

#statusBarDemo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Status Bar", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Effect slots panel
    ninepatch("ui", "Window_3x3_idle", 640, 130): 0, 35

    text(exo2_14, "Active Effects", #7fdbda): 15, 45

    // Flow container with 8 card slots
    point {
        pos: 15, 65
        flow(layout: horizontal, horizontalSpacing: 8) {
            repeatable($i, range(0, 8)) {
                point {
                    bitmap(generated(color(64, 88, #111122))): 0, 0
                    #effectSlot[$i] slot {
                        bitmap(generated(color(1, 1, #00000000))): 0, 0
                    }
                }
            }
        }
    }

    // Particle layer (above cards)
    #particleContainer(updatable) point: 15, 65

    // Action buttons
    ninepatch("ui", "Window_3x3_idle", 640, 55): 0, 175
    placeholder(generated(cross(130, 35, #FF0000)), builderParameter("addBuffButton")) {
        pos: 15, 185
        settings{width:int=>130, height:int=>35}
    }
    placeholder(generated(cross(130, 35, #FF0000)), builderParameter("addDebuffButton")) {
        pos: 160, 185
        settings{width:int=>130, height:int=>35}
    }
    placeholder(generated(cross(130, 35, #FF0000)), builderParameter("clearAllButton")) {
        pos: 305, 185
        settings{width:int=>130, height:int=>35}
    }

    // Effect count
    #effectCountText(updatable) text(exo2_14, "Effects: 0 / 8", #aaaaaa, left, 200): 460, 190

    // Effect log
    ninepatch("ui", "Window_3x3_idle", 640, 40): 0, 240
    #logText(updatable) text(exo2_light_14, "Add buffs or debuffs to see them tick down.", #666666, left, 610): 15, 252

    // Instructions
    text(exo2_light_14, "Hover over an effect card to see details. Effects expire when their timer runs out.", #666666): 0, 295
    text(exo2_light_14, "Features: flow layout, slots, incremental updates, particles, hover tooltips, glow", #555555): 0, 315
}
`,Np=`version: 1.0

#bitmapsAtlasShowcase programmable() {
  // Section 1: Generated color bitmaps
  text(exo2_16, "generated(color(w, h, color)):", #cccccc): 0, 0

  // Row of generated colored bitmaps
  bitmap(generated(color(60, 60, #ff4444))): 0, 30
  bitmap(generated(color(60, 60, #ff8844))): 70, 30
  bitmap(generated(color(60, 60, #ffff44))): 140, 30
  bitmap(generated(color(60, 60, #44ff44))): 210, 30
  bitmap(generated(color(60, 60, #44ffff))): 280, 30
  bitmap(generated(color(60, 60, #4444ff))): 350, 30
  bitmap(generated(color(60, 60, #ff44ff))): 420, 30
  bitmap(generated(color(60, 60, #ffffff))): 490, 30

  // Labels
  text(m6x11, "red", #888888, center, 60): 0, 96
  text(m6x11, "orange", #888888, center, 60): 70, 96
  text(m6x11, "yellow", #888888, center, 60): 140, 96
  text(m6x11, "green", #888888, center, 60): 210, 96
  text(m6x11, "cyan", #888888, center, 60): 280, 96
  text(m6x11, "blue", #888888, center, 60): 350, 96
  text(m6x11, "magenta", #888888, center, 60): 420, 96
  text(m6x11, "white", #888888, center, 60): 490, 96

  // Section 2: Generated cross bitmaps (placeholder markers)
  text(exo2_16, "generated(cross(w, h, #FF0000)):", #cccccc): 0, 130

  bitmap(generated(cross(30, 30, white))): 0, 160
  bitmap(generated(cross(50, 50, black))): 40, 160
  bitmap(generated(cross(80, 40, #FFFFFFFF))): 100, 160
  bitmap(generated(cross(40, 80, #FF0000))): 190, 160
  bitmap(generated(cross(100, 60, #FF0000))): 240, 160

  text(m6x11, "30x30", #888888): 0, 248
  text(m6x11, "50x50", #888888): 40, 248
  text(m6x11, "80x40", #888888): 100, 248
  text(m6x11, "40x80", #888888): 190, 248
  text(m6x11, "100x60", #888888): 240, 248

  // Section 3: Generated colorWithText
  text(exo2_16, "generated(colorWithText(w, h, color, text, textColor, font)):", #cccccc): 0, 280

  bitmap(generated(colorWithText(80, 40, #ff4444, "A", white, m6x11))): 0, 310
  bitmap(generated(colorWithText(80, 40, #ff8844, "B", white, m6x11))): 90, 310
  bitmap(generated(colorWithText(80, 40, #44aa44, "C", white, m6x11))): 180, 310
  bitmap(generated(colorWithText(80, 40, #4488cc, "D", white, m6x11))): 270, 310
  bitmap(generated(colorWithText(80, 40, #9c27b0, "E", white, m6x11))): 360, 310
  bitmap(generated(colorWithText(80, 40, #ff7f50, "F", black, m6x11))): 450, 310

  // Larger with numbers
  bitmap(generated(colorWithText(50, 50, #2c5f7c, "1", white, m6x11))): 0, 360
  bitmap(generated(colorWithText(50, 50, #4a90a4, "2", white, m6x11))): 60, 360
  bitmap(generated(colorWithText(50, 50, #7fdbda, "3", black, m6x11))): 120, 360
  bitmap(generated(colorWithText(50, 50, #ffeb3b, "4", black, m6x11))): 180, 360
  bitmap(generated(colorWithText(50, 50, #4caf50, "5", white, m6x11))): 240, 360

  // Section 4: Real bitmap files
  text(exo2_16, 'bitmap(file("filename.png")):', #cccccc): 0, 430

  bitmap(file("star.png")): 0, 460
  bitmap(file("spark.png")): 60, 460
  bitmap(file("dot.png")): 120, 460
  bitmap(file("flare.png")): 180, 460
  bitmap(file("ring.png")): 280, 460

  text(m6x11, "star", #888888): 0, 510
  text(m6x11, "spark", #888888): 60, 510
  text(m6x11, "dot", #888888): 120, 510
  text(m6x11, "flare", #888888): 180, 510
  text(m6x11, "ring", #888888): 280, 510

  // Section 5: Atlas sprites - UI sheet
  text(exo2_16, 'bitmap(sheet("ui", "name")):', #cccccc): 0, 540

  bitmap(sheet("ui", "CheckBox_on_idle")): 0, 570
  bitmap(sheet("ui", "CheckBox_off_idle")): 40, 570
  bitmap(sheet("ui", "RadioButton_on_idle")): 80, 570
  bitmap(sheet("ui", "RadioButton_off_idle")): 120, 570
  bitmap(sheet("ui", "Slider_button_idle")): 160, 570
  bitmap(sheet("ui", "Toggle_on_idle")): 200, 570
  bitmap(sheet("ui", "Toggle_off_idle")): 250, 570
  bitmap(sheet("ui", "icon_drop")): 300, 570

  text(m6x11, "ChkOn", #888888): 0, 600
  text(m6x11, "ChkOff", #888888): 40, 600
  text(m6x11, "RadOn", #888888): 80, 600
  text(m6x11, "RadOff", #888888): 120, 600
  text(m6x11, "Slider", #888888): 160, 600
  text(m6x11, "TglOn", #888888): 200, 600
  text(m6x11, "TglOff", #888888): 250, 600
  text(m6x11, "Drop", #888888): 300, 600

  // Section 6: Atlas sprites - Crew sheet
  text(exo2_16, 'bitmap(sheet("crew2", "name")):', #cccccc): 0, 630

  @scale(2) bitmap(sheet("crew2", "marine_r_standing")): 0, 660
  @scale(2) bitmap(sheet("crew2", "marine_l_standing")): 70, 660
  @scale(2) bitmap(sheet("crew2", "icon-circle")): 140, 660
  @scale(2) bitmap(sheet("crew2", "icon-cross")): 180, 660
  @scale(2) bitmap(sheet("crew2", "icon-skull")): 220, 660
  @scale(2) bitmap(sheet("crew2", "icon-shield")): 260, 660

  text(m6x11, "marine_r", #888888): 0, 710
  text(m6x11, "marine_l", #888888): 70, 710
  text(m6x11, "circle", #888888): 140, 710
  text(m6x11, "cross", #888888): 180, 710
  text(m6x11, "skull", #888888): 220, 710
  text(m6x11, "shield", #888888): 260, 710

  // Section 7: Alpha variations
  text(exo2_16, "Alpha variations:", #cccccc): 0, 740

  @alpha(1.0) bitmap(generated(color(60, 40, #ff7f50))): 0, 770
  @alpha(0.8) bitmap(generated(color(60, 40, #ff7f50))): 70, 770
  @alpha(0.6) bitmap(generated(color(60, 40, #ff7f50))): 140, 770
  @alpha(0.4) bitmap(generated(color(60, 40, #ff7f50))): 210, 770
  @alpha(0.2) bitmap(generated(color(60, 40, #ff7f50))): 280, 770

  text(m6x11, "1.0", #888888, center, 60): 0, 816
  text(m6x11, "0.8", #888888, center, 60): 70, 816
  text(m6x11, "0.6", #888888, center, 60): 140, 816
  text(m6x11, "0.4", #888888, center, 60): 210, 816
  text(m6x11, "0.2", #888888, center, 60): 280, 816

  // Section 8: Scale
  text(exo2_16, "Scale:", #cccccc): 0, 850

  @scale(1) bitmap(generated(color(20, 20, #4caf50))): 0, 880
  @scale(2) bitmap(generated(color(20, 20, #4caf50))): 30, 880
  @scale(3) bitmap(generated(color(20, 20, #4caf50))): 80, 880
  @scale(4) bitmap(generated(color(20, 20, #4caf50))): 150, 880

  text(m6x11, "1x", #888888): 0, 960
  text(m6x11, "2x", #888888): 30, 960
  text(m6x11, "3x", #888888): 80, 960
  text(m6x11, "4x", #888888): 150, 960
}
`,zp=`version: 1.0

paths {
    #straightLine path {
        lineTo(100, 0)
    }
}

#returnAnim animatedPath {
    path: straightLine
    type: time
    duration: 0.5
    easing: easeoutelastic
}

#snapAnim animatedPath {
    path: straightLine
    type: time
    duration: 0.7
    easing: easeoutcubic
}

#ninepatchShowcase programmable() {
  // Section 1: Same ninepatch at different sizes
  text(exo2_16, "Window_3x3_idle at 5 different sizes:", #cccccc): 0, 0

  ninepatch("ui", "Window_3x3_idle", 100, 60): 0, 30
  text(m6x11, "100 x 60", #888888, center, 100): 0, 96

  ninepatch("ui", "Window_3x3_idle", 200, 80): 120, 30
  text(m6x11, "200 x 80", #888888, center, 200): 120, 116

  ninepatch("ui", "Window_3x3_idle", 300, 120): 340, 30
  text(m6x11, "300 x 120", #888888, center, 300): 340, 156

  ninepatch("ui", "Window_3x3_idle", 150, 200): 660, 30
  text(m6x11, "150 x 200", #888888, center, 150): 660, 236

  ninepatch("ui", "Window_3x3_idle", 400, 40): 0, 180
  text(m6x11, "400 x 40", #888888, center, 400): 0, 226

  // Section 2: Button ninepatches
  text(exo2_16, "Button ninepatches at different sizes:", #cccccc): 0, 270

  ninepatch("ui", "button-idle", 100, 30): 0, 300
  text(m6x11, "idle 100x30", #888888): 0, 336

  ninepatch("ui", "button-hover", 150, 30): 120, 300
  text(m6x11, "hover 150x30", #888888): 120, 336

  ninepatch("ui", "button-pressed", 200, 30): 290, 300
  text(m6x11, "pressed 200x30", #888888): 290, 336

  ninepatch("ui", "button-idle", 300, 50): 0, 370
  text(m6x11, "idle 300x50", #888888): 0, 426

  ninepatch("ui", "button-hover", 80, 80): 320, 370
  text(m6x11, "hover 80x80", #888888): 320, 456

  // Section 3: Scaled ninepatches
  text(exo2_16, "Scaled ninepatches:", #cccccc): 0, 490

  @scale(2) ninepatch("ui", "Window_3x3_idle", 80, 40): 0, 520
  text(m6x11, "scale 2", #888888): 0, 610

  @scale(3) ninepatch("ui", "Window_3x3_idle", 60, 30): 200, 520
  text(m6x11, "scale 3", #888888): 200, 620
}

#resizablePanel programmable(width:60..510=210, height:60..210=150) {
    ninepatch("ui", "Window_3x3_idle", $width, $height): 0, 0
    #sizeText(updatable) text(m6x11, "210 x 150", #ffffff, left, 200): 10, 10
}
`,Op=`version: 1.0

#pixelsGraphicsShowcase programmable() {
  // Section 1: Pixels primitives
  text(exo2_16, "Pixels primitives:", #cccccc): 0, 0

  // Colored squares
  point {
    pos: 0, 30
    pixels (
      rect 0, 0, 20, 20, #ff4444
      rect 20, 0, 20, 20, #44ff44
      rect 0, 20, 20, 20, #4444ff
      rect 20, 20, 20, 20, #ffff44
    ) {
      scale: 3
    }
    text(m6x11, "Colored squares", #888888): 0, 130
  }

  // Diagonal lines
  point {
    pos: 180, 30
    pixels (
      line 0, 0, 30, 30, #ff4444
      line 30, 0, 0, 30, #44ff44
      line 0, 15, 30, 15, #4444ff
      line 15, 0, 15, 30, #ffff44
    ) {
      scale: 4
    }
    text(m6x11, "Lines crossing", #888888): 0, 130
  }

  // Single pixels
  point {
    pos: 360, 30
    pixels (
      pixel 0, 0, #ff0000
      pixel 2, 0, #00ff00
      pixel 4, 0, #0000ff
      pixel 0, 2, #ffff00
      pixel 2, 2, #ff00ff
      pixel 4, 2, #00ffff
      pixel 1, 1, #ffffff
      pixel 3, 1, #ffffff
    ) {
      scale: 16
    }
    text(m6x11, "Individual pixels", #888888): 0, 130
  }

  // Border rectangle
  point {
    pos: 500, 30
    pixels (
      rect 0, 0, 1, 30, #ff7f50
      rect 0, 0, 30, 1, #ff7f50
      rect 29, 0, 1, 30, #ff7f50
      rect 0, 29, 30, 1, #ff7f50
    ) {
      scale: 4
    }
    text(m6x11, "1px border rect", #888888): 0, 130
  }

  // Section 2: Graphics primitives
  text(exo2_16, "Graphics primitives:", #cccccc): 0, 190

  // Filled rectangle
  point {
    pos: 0, 220
    graphics (
      rect(#cc4444, filled, 80, 60): 0, 0
    );
    text(m6x11, "Filled rect", #888888): 0, 70
  }

  // Filled circle
  point {
    pos: 120, 250
    graphics (
      circle(#44cc44, filled, 30): 0, 0
    );
    text(m6x11, "Filled circle", #888888): -30, 40
  }

  // Circle outline
  point {
    pos: 240, 250
    graphics (
      circle(#4488cc, 3, 30): 0, 0
    );
    text(m6x11, "Circle outline", #888888): -30, 40
  }

  // Rounded rectangle
  point {
    pos: 340, 220
    graphics (
      roundRect(#cc8844, filled, 100, 60, 12): 0, 0
    );
    text(m6x11, "Rounded rect", #888888): 0, 70
  }

  // Line
  point {
    pos: 480, 220
    graphics (
      line(#44cccc, 3, 0, 0, 80, 60);
      line(#cc44cc, 3, 80, 0, 0, 60);
    );
    text(m6x11, "Lines (X)", #888888): 0, 70
  }

  // Polygon (triangle)
  point {
    pos: 620, 250
    graphics (
      polygon(#cc44cc, filled,
        0, -30,
        26, 30,
        -26, 30
      );
    );
    text(m6x11, "Triangle", #888888): -26, 40
  }

  // Section 3: Combined shapes
  text(exo2_16, "Combined shapes:", #cccccc): 0, 330

  // Simple face
  point {
    pos: 60, 400
    graphics (
      circle(#ffcc88, filled, 40): 0, 0
      circle(#333333, filled, 6): -14, -10
      circle(#333333, filled, 6): 14, -10
      arc(#333333, 3, 16, 10, 170): 0, 5
    );
    text(m6x11, "Face", #888888, center, 80): -40, 50
  }

  // House
  point {
    pos: 200, 420
    graphics (
      rect(#884422, filled, 60, 40): -30, 0
      polygon(#cc6644, filled,
        -35, 0,
        0, -30,
        35, 0
      );
      rect(#4488cc, filled, 15, 20): -25, 10
      rect(#4488cc, filled, 15, 20): 10, 10
      rect(#663311, filled, 12, 20): -6, 20
    );
    text(m6x11, "House", #888888, center, 80): -40, 50
  }

  // Star shape
  point {
    pos: 360, 400
    graphics (
      polygon(#ffcc00, filled,
        0, -35,
        8, -10,
        35, -10,
        14, 5,
        22, 30,
        0, 15,
        -22, 30,
        -14, 5,
        -35, -10,
        -8, -10
      );
    );
    text(m6x11, "Star", #888888, center, 80): -40, 50
  }

  // Arrow
  point {
    pos: 500, 410
    graphics (
      rect(#44cc88, filled, 50, 16): -25, -8
      polygon(#44cc88, filled,
        25, -20,
        50, 0,
        25, 20
      );
    );
    text(m6x11, "Arrow", #888888, center, 80): -40, 40
  }
}
`,Lp=`version: 1.0

// Rich Text AutoFit Demo
// Interactive autoFit mode explorer: choose bounds, fill mode, fonts, and text.

#richTextAutofitDemo programmable() {
    pos: 40, 70

    text(exo2_16, "Rich Text AutoFit", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22
    text(exo2_light_14, "Explore autoFit modes interactively. Change bounds, mode, fonts, and text to see how autoFit selects the best font.", #aaaaaa, left, 700): 0, 30

    // ─── Controls Row 1 ─────────────────────────────────
    text(m6x11, "Mode:", #888888): 0, 65
    placeholder(generated(cross(120, 24, #FF0000)), builderParameter("modeDropdown")): 40, 62

    text(m6x11, "Width:", #888888): 185, 65
    placeholder(generated(cross(200, 20, #FF0000)), builderParameter("widthSlider")) {
        pos: 220, 62
        settings{size:int=>200, min:int=>30, max:int=>600, step:int=>10}
    }
    #widthValue(updatable) text(m6x11, "200", #cccccc): 430, 65

    text(m6x11, "Height:", #888888): 470, 65
    placeholder(generated(cross(200, 20, #FF0000)), builderParameter("heightSlider")) {
        pos: 510, 62
        settings{size:int=>200, min:int=>8, max:int=>200, step:int=>2}
    }
    #heightValue(updatable) text(m6x11, "40", #cccccc): 720, 65

    // ─── Controls Row 2: Fonts ──────────────────────────
    text(m6x11, "Fonts:", #888888): 0, 95

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkPixellari")): 45, 92
    text(m6x11, "pixellari", #aaaaaa): 67, 95

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkDd")): 140, 92
    text(m6x11, "dd", #aaaaaa): 162, 95

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkM6x11")): 195, 92
    text(m6x11, "m6x11", #aaaaaa): 217, 95

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkM5x7")): 270, 92
    text(m6x11, "m5x7", #aaaaaa): 292, 95

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkM3x6")): 335, 92
    text(m6x11, "m3x6", #aaaaaa): 357, 95

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkF7x5")): 400, 92
    text(m6x11, "f7x5", #aaaaaa): 422, 95

    // Rich text toggle
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("chkRichText")): 480, 92
    text(m6x11, "Rich", #888888): 502, 95

    // ─── Controls Row 3: Text Input ─────────────────────
    text(m6x11, "Text:", #888888): 0, 122
    placeholder(generated(cross(500, 24, #FF0000)), builderParameter("textInput")) {
        pos: 35, 118
        settings{buildName=>textInput, font=>dd, placeholder=>"Type text here...", inputWidth=>450, width=>500}
    }

    // ─── Display Area ───────────────────────────────────
    #statusText(updatable) text(m6x11, "Mode: Width | Bounds: 200 | Fonts: pixellari, dd, m6x11, m3x6, f7x5 | Selected: dd", #666666): 0, 155
}
`,Mp=`version: 1.0

#richTextShowcase programmable(dmg:1..5=3, dmgColor:color=#FF4444, quest:[accepted,progress,complete]=accepted, equip:[sword,shield,empty]=sword) {

  // Section 1: Named styles
  text(exo2_16, "Named Styles", #7fdbda): 0, 0
  bitmap(generated(color(600, 30, #282838))): 0, 28
  richText(dd, "Deal [damage]50 damage[/] for [gold]100g[/] [em]now[/]", white, left, 600,
      styles: {damage: color(#FF4444), gold: color(#FFD700) font("dd_thin"), em: font("dd_thin")}): 8, 34
  text(m6x11, 'styles: {damage: color(#FF4444), gold: color(#FFD700) font("dd_thin")}', #666666): 0, 62

  // Section 2: Named color styles
  text(exo2_16, "Named Color Styles", #7fdbda): 0, 90
  bitmap(generated(color(600, 30, #282838))): 0, 118
  richText(dd, "[r]red[/] [b]blue[/] [g]gold[/] [l]lime[/] [cy]cyan[/] [o]orange[/]", white, left, 600,
      styles: {r: color(#FF4444), b: color(blue), g: color(gold), l: color(lime), cy: color(cyan), o: color(orange)}): 8, 124
  text(m6x11, "styles: {r: color(#FF4444), b: color(blue), g: color(gold)}", #666666): 0, 152

  // Section 3: Font-only styles
  text(exo2_16, "Font Switching via Styles", #7fdbda): 0, 180
  bitmap(generated(color(600, 30, #282838))): 0, 208
  richText(dd, "regular [thin]thin[/] regular [px]pixel[/] regular", white, left, 600,
      styles: {thin: font("dd_thin"), px: font("pixellari")}): 8, 214
  text(m6x11, 'styles: {thin: font("dd_thin"), px: font("pixellari")}', #666666): 0, 242

  // Section 4: Mixed color + font styles
  text(exo2_16, "Mixed Color + Font Styles", #7fdbda): 0, 270
  bitmap(generated(color(600, 30, #282838))): 0, 298
  richText(dd, "[warn]Warning:[/] costs [price]100g[/] and [hp]50 HP[/]", white, left, 600,
      styles: {warn: color(#FF4444) font("dd_thin"), price: color(gold), hp: color(#FF4444)}): 8, 304
  text(m6x11, "Named styles define color() and/or font() per name", #666666): 0, 332

  // Section 5: Nesting
  text(exo2_16, "Nested Markup", #7fdbda): 0, 360
  bitmap(generated(color(600, 30, #282838))): 0, 388
  richText(dd, "[damage]critical [highlight]50[/] damage[/] to [ice]frozen[/] target", white, left, 600,
      styles: {damage: color(#FF4444), highlight: color(yellow), ice: color(#44FFFF)}): 8, 394
  text(m6x11, "Named style tags nest inside other named style blocks", #666666): 0, 422

  // Section 6: Element colors
  text(exo2_16, "Element Colors", #7fdbda): 0, 450
  bitmap(generated(color(600, 30, #282838))): 0, 478
  richText(dd, "[fire]fire[/] [ice]ice[/] [nature]nature[/] [arcane]arcane[/]", white, left, 600,
      styles: {fire: color(red), ice: color(cyan), nature: color(lime), arcane: color(#FF44FF)}): 8, 484
  text(m6x11, 'styles: {fire: color(red), ice: color(cyan), nature: color(lime)}', #666666): 0, 512

  // Section 7: Inline images
  text(exo2_16, "Inline Images", #7fdbda): 0, 540
  bitmap(generated(color(600, 30, #282838))): 0, 568
  richText(dd, "Cost [img:coin] 100 gold  [img:gem] 5 gems  HP [img:hp] full", white, left, 600,
      images: {coin: generated(color(10, 10, #FFD700)), gem: generated(color(10, 10, #44AAFF)), hp: generated(color(10, 10, #FF4444))}): 8, 574
  text(m6x11, 'images: {coin: generated(color(10, 10, #FFD700)), ...}', #666666): 0, 602

  // Section 8: Game-like example
  text(exo2_16, "Game-Like Example", #7fdbda): 0, 630
  bitmap(generated(color(600, 60, #282838))): 0, 658
  richText(dd, "[title]Flame Sword[/] [rarity](Rare)[/]\\n[atk]+25[/] attack  [img:fire] fire damage\\nSells for [img:coin] [price]150g[/]", white, left, 580,
      styles: {title: color(gold), rarity: color(#888888), atk: color(#FF4444), price: color(gold)},
      images: {fire: generated(color(10, 10, #FF4400)), coin: generated(color(10, 10, #FFD700))}): 8, 664

  // Section 9: Changing style color + value
  text(exo2_16, "Dynamic Style Color", #7fdbda): 640, 0
  bitmap(generated(color(540, 30, #282838))): 640, 28
  richText(dd, 'Dealt [dmg]\${dmg}[/] damage to [target]Dragon[/]', white, left, 540,
      styles: {dmg: color($dmgColor), target: color(#FF8844)}): 648, 34
  text(m6x11, "style color($dmgColor) changes with dmg value", #666666): 640, 62

  // Section 10: Changing text, styles always defined
  text(exo2_16, "Changing Text, Same Styles", #7fdbda): 640, 100
  bitmap(generated(color(540, 40, #282838))): 640, 128
  @(quest => accepted) richText(dd, "[npc]Elder[/] gave you [quest]Dragon Slayer[/]", white, left, 520,
      styles: {npc: color(cyan), quest: color(gold), reward: color(#44FF44)}): 648, 134
  @(quest => progress) richText(dd, "Kill 3 more dragons to complete quest", white, left, 520,
      styles: {npc: color(cyan), quest: color(gold), reward: color(#44FF44)}): 648, 134
  @(quest => complete) richText(dd, "[npc]Elder[/]: Well done! [reward]+500g[/]", white, left, 520,
      styles: {npc: color(cyan), quest: color(gold), reward: color(#44FF44)}): 648, 134
  text(m6x11, "all styles defined, text uses them or not", #666666): 640, 172

  // Section 11: Changing text with optional images
  text(exo2_16, "Optional Image Usage", #7fdbda): 640, 200
  bitmap(generated(color(540, 40, #282838))): 640, 228
  @(equip => sword) richText(dd, "[item]Iron Sword[/] [img:sword] equipped", white, left, 520,
      styles: {item: color(gold), dim: color(#666666)},
      images: {sword: generated(color(10, 10, #AAAAAA)), shield: generated(color(10, 10, #4488CC))}): 648, 234
  @(equip => shield) richText(dd, "[item]Oak Shield[/] [img:shield] equipped", white, left, 520,
      styles: {item: color(gold), dim: color(#666666)},
      images: {sword: generated(color(10, 10, #AAAAAA)), shield: generated(color(10, 10, #4488CC))}): 648, 234
  @(equip => empty) richText(dd, "[dim]Empty slot[/] - no item", white, left, 520,
      styles: {item: color(gold), dim: color(#666666)},
      images: {sword: generated(color(10, 10, #AAAAAA)), shield: generated(color(10, 10, #4488CC))}): 648, 234
  text(m6x11, "all images defined, richText uses them or not", #666666): 640, 272

  // Section 12: Alignment markup
  text(exo2_16, "Alignment Markup", #7fdbda): 640, 310
  bitmap(generated(color(540, 70, #282838))): 640, 338
  richText(dd, "left aligned\\n[align:center]center aligned[/]\\n[align:right]right aligned[/]", white, left, 520): 648, 344
  text(m6x11, "[align:center]...[/] and [align:right]...[/]", #666666): 640, 412

  // Section 13: Drop shadow
  text(exo2_16, "Drop Shadow", #7fdbda): 640, 440
  bitmap(generated(color(540, 30, #282838))): 640, 468
  richText(dd, "[title]Shadow Text[/] with [glow]glow effect[/]", white, left, 520,
      styles: {title: color(gold), glow: color(#44FFFF)},
      dropShadowXY: 2, 2, dropShadowColor: #000000, dropShadowAlpha: 0.8): 648, 474
  text(m6x11, "dropShadowXY: 2, 2, dropShadowColor, dropShadowAlpha", #666666): 640, 502

  // Section 14: Letter and line spacing
  text(exo2_16, "Letter & Line Spacing", #7fdbda): 640, 530
  bitmap(generated(color(540, 50, #282838))): 640, 558
  richText(dd, "[wide]S P A C E D[/]\\ncompact lines\\nclose together", white, left, 520,
      styles: {wide: color(#FFD700)},
      letterSpacing: 2, lineSpacing: -2): 648, 564
  text(m6x11, "letterSpacing: 2, lineSpacing: -2", #666666): 640, 612

  // Section 15: Condense white + Escape sequence
  text(exo2_16, "Condense White & Escapes", #7fdbda): 640, 640
  bitmap(generated(color(540, 50, #282838))): 640, 668
  richText(dd, "spaces   condensed   here", white, left, 520,
      condenseWhite: true): 648, 674
  richText(dd, "Use [[tag] for literal [em][[/][/] in markup", white, left, 520,
      styles: {em: color(#44FFFF)}): 648, 694
  text(m6x11, "condenseWhite: true / [[ escapes literal bracket", #666666): 640, 722

  // Section 16: Hyperlinks (interactive)
  text(exo2_16, "Hyperlinks (click me!)", #7fdbda): 640, 750
  bitmap(generated(color(540, 30, #282838))): 640, 778
  richText(dd, "Visit [link:shop][hl]the Shop[/][/] or open [link:inventory][hl]Inventory[/][/]", white, left, 520,
      styles: {hl: color(cyan)}): 648, 784
  text(m6x11, '[link:id]...[/] fires callback on click', #666666): 640, 812
}
`,Wp=`version: 1.0

#textFontsShowcase programmable() {
  // Section 1: Bitmap fonts
  text(exo2_16, "Bitmap Fonts:", #cccccc): 0, 0

  text(m6x11, "Font name", #888888): 0, 28
  text(m6x11, "Sample text", #888888): 200, 28

  text(m6x11, "m3x6", #aaaaaa): 0, 48
  text(m3x6, "The quick brown fox jumps over the lazy dog 0123456789", #ffffff): 200, 48

  text(m6x11, "m5x7", #aaaaaa): 0, 68
  text(m5x7, "The quick brown fox jumps over the lazy dog 0123456789", #ffffff): 200, 68

  text(m6x11, "f7x5", #aaaaaa): 0, 88
  text(f7x5, "The quick brown fox jumps over the lazy dog 0123456789", #ffffff): 200, 88

  text(m6x11, "m6x11", #aaaaaa): 0, 108
  text(m6x11, "The quick brown fox jumps over the lazy dog 0123456789", #ffffff): 200, 108

  text(m6x11, "pixellari", #aaaaaa): 0, 128
  text(pixellari, "The quick brown fox jumps over the lazy dog 0123456789", #ffffff): 200, 128

  text(m6x11, "dd (DigitalDisco)", #aaaaaa): 0, 148
  text(dd, "The quick brown fox jumps over the lazy dog", #ffffff): 200, 148

  text(m6x11, "dd_thin", #aaaaaa): 0, 168
  text(dd_thin, "The quick brown fox jumps over the lazy dog", #ffffff): 200, 168

  // Section 2: SDF fonts at different sizes
  text(exo2_16, "SDF Fonts (scalable):", #cccccc): 0, 200

  text(exo2_14, "exo2_14: The quick brown fox jumps over the lazy dog", #ffffff): 0, 228
  text(exo2_16, "exo2_16: The quick brown fox jumps over the lazy dog", #ffffff): 0, 248
  text(exo2_20, "exo2_20: The quick brown fox", #ffffff): 0, 270
  text(exo2_30, "exo2_30: Quick brown fox", #ffffff): 0, 296

  text(exo2_light_14, "exo2_light_14: Light weight text sample", #dddddd): 0, 336
  text(exo2_light_20, "exo2_light_20: Light weight text", #dddddd): 0, 356

  text(exo2_black_16, "exo2_black_16: Bold weight text sample", #ffffff): 0, 386
  text(exo2_black_20, "exo2_black_20: Bold weight text", #ffffff): 0, 408

  // Section 3: Text colors
  text(exo2_16, "Colors:", #cccccc): 0, 445

  text(m6x11, "Red text", #ff4444): 0, 475
  text(m6x11, "Green text", #44ff44): 100, 475
  text(m6x11, "Blue text", #4444ff): 200, 475
  text(m6x11, "Yellow text", #ffff44): 300, 475
  text(m6x11, "Cyan text", #44ffff): 410, 475
  text(m6x11, "Magenta text", #ff44ff): 510, 475

  // Section 4: Text alignment
  text(exo2_16, "Alignment (maxWidth: 300):", #cccccc): 0, 510

  bitmap(generated(color(300, 1, #444444))): 0, 540
  text(m6x11, "Left aligned text", #ffffff, left, 300): 0, 545
  bitmap(generated(color(300, 1, #444444))): 0, 560
  text(m6x11, "Center aligned text", #ffffff, center, 300): 0, 565
  bitmap(generated(color(300, 1, #444444))): 0, 580
  text(m6x11, "Right aligned text", #ffffff, right, 300): 0, 585
  bitmap(generated(color(300, 1, #444444))): 0, 600

  // Section 5: Drop shadows
  text(exo2_16, "Drop Shadows:", #cccccc): 0, 630

  // Dark shadow on light background
  bitmap(generated(color(300, 34, #cccccc))): 0, 658
  text(exo2_16, "Dark shadow on light bg", #333333, left, 300, dropShadowXY: 2.0, 2.0, dropShadowColor: #000000, dropShadowAlpha: 0.5): 8, 664

  // Classic black shadow on dark background
  bitmap(generated(color(300, 34, #222244))): 0, 700
  text(exo2_16, "Black shadow, dark bg", #ffffff, left, 300, dropShadowXY: 2.0, 2.0, dropShadowColor: #000000, dropShadowAlpha: 0.8): 8, 706

  // Red glow shadow
  bitmap(generated(color(300, 34, #1a0000))): 0, 742
  text(exo2_16, "Red shadow glow", #ff4444, left, 300, dropShadowXY: 2.0, 2.0, dropShadowColor: #ff0000, dropShadowAlpha: 1.0): 8, 748

  // Blue shadow on dark blue
  bitmap(generated(color(300, 34, #000022))): 0, 784
  text(exo2_16, "Blue shadow, navy bg", #88ccff, left, 300, dropShadowXY: 1.0, 2.0, dropShadowColor: #0044ff, dropShadowAlpha: 0.9): 8, 790

  // Green neon shadow
  bitmap(generated(color(300, 34, #001100))): 0, 826
  text(exo2_16, "Neon green shadow", #44ff44, left, 300, dropShadowXY: 1.0, 1.0, dropShadowColor: #00ff00, dropShadowAlpha: 1.0): 8, 832

  // Gold shadow on brown
  bitmap(generated(color(300, 34, #2a1a00))): 0, 868
  text(exo2_16, "Gold text with shadow", #ffcc44, left, 300, dropShadowXY: 2.0, 2.0, dropShadowColor: #885500, dropShadowAlpha: 0.8): 8, 874

  // White shadow (glow effect) on dark
  bitmap(generated(color(300, 34, #111111))): 0, 910
  text(exo2_16, "White glow shadow", #ffffff, left, 300, dropShadowXY: 1.0, 1.0, dropShadowColor: #ffffff, dropShadowAlpha: 0.6): 8, 916

  // Pixel font shadows
  text(exo2_16, "Pixel Font Shadows:", #cccccc): 0, 960

  bitmap(generated(color(300, 28, #222222))): 0, 988
  @scale(2) text(m6x11, "m6x11 with shadow", #ffffff, left, 300, dropShadowXY: 1.0, 1.0, dropShadowColor: #000000, dropShadowAlpha: 0.8): 4, 992

  bitmap(generated(color(300, 28, #220000))): 0, 1024
  @scale(2) text(dd, "DigitalDisco shadow", #ffcc44, left, 300, dropShadowXY: 2.0, 2.0, dropShadowColor: #ff0000, dropShadowAlpha: 1.0): 4, 1028

  bitmap(generated(color(300, 28, #002200))): 0, 1060
  @scale(2) text(pixellari, "Pixellari green glow", #88ff88, left, 300, dropShadowXY: 1.0, 1.0, dropShadowColor: #00ff44, dropShadowAlpha: 0.9): 4, 1064
}
`,Hp=`version: 1.0

// Combo States Demo
// Shows @if, @else, @default conditional patterns

#comboStatesShowcase programmable(mode:[idle, active, warning, error]=idle, level:[low, medium, high, critical]=low, state:[on, off, standby, unknown]=on) {
  pos: 40, 80

  // Section 1: @if per-state — each @(param=>value) is independent
  text(exo2_16, "@if per-state conditionals:", #cccccc): 0, 0
  point {
    pos: 0, 30
    bitmap(generated(color(120, 40, #222222))): 0, 0
    @(mode=>idle) bitmap(generated(color(116, 36, #334455))): 2, 2
    @(mode=>active) bitmap(generated(color(116, 36, #335533))): 2, 2
    @(mode=>warning) bitmap(generated(color(116, 36, #555533))): 2, 2
    @(mode=>error) bitmap(generated(color(116, 36, #553333))): 2, 2
    @(mode=>idle) text(m6x11, "IDLE", #8888aa, center, 120): 0, 14
    @(mode=>active) text(m6x11, "ACTIVE", #88ff88, center, 120): 0, 14
    @(mode=>warning) text(m6x11, "WARNING", #ffff88, center, 120): 0, 14
    @(mode=>error) text(m6x11, "ERROR", #ff8888, center, 120): 0, 14
  }
  #modeText(updatable) text(exo2_light_14, "mode: idle", #7fdbda, left, 200): 140, 42
  placeholder(generated(cross(120, 24, #FF0000)), builderParameter("cycleMode")) {
    pos: 350, 34
  }

  // Section 2: @else chain — if/else-if/else pattern
  text(exo2_16, "@else / @else(cond) chain:", #cccccc): 0, 100
  point {
    pos: 0, 130
    bitmap(generated(color(120, 40, #222222))): 0, 0
    @(level=>low) bitmap(generated(color(116, 36, #003366))): 2, 2
    @else(level=>medium) bitmap(generated(color(116, 36, #006633))): 2, 2
    @else(level=>high) bitmap(generated(color(116, 36, #663300))): 2, 2
    @else bitmap(generated(color(116, 36, #660000))): 2, 2
    @(level=>low) text(m6x11, "LOW", #88ccff, center, 120): 0, 14
    @else(level=>medium) text(m6x11, "MED", #88ff88, center, 120): 0, 14
    @else(level=>high) text(m6x11, "HIGH", #ffcc88, center, 120): 0, 14
    @else text(m6x11, "CRIT!", #ff8888, center, 120): 0, 14
  }
  #levelText(updatable) text(exo2_light_14, "level: low", #7fdbda, left, 200): 140, 142
  placeholder(generated(cross(120, 24, #FF0000)), builderParameter("cycleLevel")) {
    pos: 350, 134
  }

  // Section 3: @default — specific matches + catch-all fallback
  text(exo2_16, "@default catch-all:", #cccccc): 0, 200
  point {
    pos: 0, 230
    bitmap(generated(color(120, 40, #222222))): 0, 0
    @(state=>on) bitmap(generated(color(116, 36, #006600))): 2, 2
    @(state=>off) bitmap(generated(color(116, 36, #660000))): 2, 2
    @default bitmap(generated(color(116, 36, #444444))): 2, 2
    @(state=>on) text(m6x11, "ON", #88ff88, center, 120): 0, 14
    @(state=>off) text(m6x11, "OFF", #ff8888, center, 120): 0, 14
    @default text(m6x11, "OTHER", #aaaaaa, center, 120): 0, 14
  }
  #stateText(updatable) text(exo2_light_14, "state: on", #7fdbda, left, 200): 140, 242
  placeholder(generated(cross(120, 24, #FF0000)), builderParameter("cycleState")) {
    pos: 350, 234
  }
}
`,jp=`version: 1.0

// A health bar that changes color based on value
#healthBar programmable(value:uint=50, label:string="HP") {
  // Background
  bitmap(generated(color(200, 20, #333333))): 0, 0
  // Bar fill (width based on value * 2)
  @(value >= 50) bitmap(generated(color($value * 2, 16, #44cc44))): 2, 2
  @(value < 50) bitmap(generated(color($value * 2, 16, #cc4444))): 2, 2
  // Label
  text(m6x11, $label, #ffffff): 5, 4
  // Value text
  text(m6x11, $value, #ffffff, right, 190): 0, 4
}

// A stat display that uses dynamicRef
#statDisplay programmable(statName:string="Stat", statValue:uint=0, barColor:color=#4488cc) {
  text(m6x11, $statName, #aaaaaa): 0, 0
  bitmap(generated(color($statValue, 8, $barColor))): 80, 2
  text(m6x11, $statValue, #ffffff): 190, 0
}

// Main showcase with dynamicRefs
#dynamicRefsShowcase programmable(barValue:uint=50) {
  pos: 50, 80

  // Section 1: Dynamic health bar controlled by slider
  text(exo2_16, "Dynamic health bar (use slider):", #cccccc): 0, 0

  dynamicRef($healthBar, value=>$barValue, label=>"Player HP"): 0, 30

  // Slider control
  placeholder(generated(cross(210, 20, #FF0000)), builderParameter("slider")) {
    pos: 0, 60
  }
  #sliderValue(updatable) text(exo2_light_14, "50", #cccccc): 230, 60

  // Section 2: Derived health bars (all driven by slider)
  text(exo2_16, "Derived bars (expressions of slider):", #cccccc): 0, 100

  dynamicRef($healthBar, value=>100 - $barValue, label=>"Inverse"): 0, 130
  dynamicRef($healthBar, value=>$barValue / 2 + 10, label=>"Half+10"): 0, 160
  dynamicRef($healthBar, value=>$barValue * 3 / 4 + 10, label=>"3/4+10"): 0, 190
  dynamicRef($healthBar, value=>($barValue + 30) % 100, label=>"Wrap"): 0, 220

  // Section 3: Stat displays (derived from slider)
  text(exo2_16, "Stat displays (derived from slider):", #cccccc): 0, 260

  dynamicRef($statDisplay, statName=>"Attack", statValue=>$barValue, barColor=>#cc4444): 0, 290
  dynamicRef($statDisplay, statName=>"Defense", statValue=>100 - $barValue, barColor=>#4488cc): 0, 310
  dynamicRef($statDisplay, statName=>"Speed", statValue=>$barValue / 2 + 25, barColor=>#44cc44): 0, 330
  dynamicRef($statDisplay, statName=>"Magic", statValue=>$barValue * 3 / 4, barColor=>#cc44cc): 0, 350
  dynamicRef($statDisplay, statName=>"Luck", statValue=>($barValue + 60) % 100, barColor=>#cccc44): 0, 370
}
`,Vp=`version: 1.0

// Colored box for flow items
#flowItem programmable(w:uint=40, h:uint=20, color:color=#448, num:uint=0) {
  bitmap(generated(color($w, $h, $color)));
  text(m6x11, $num, #ffffff, center, $w): 0, 4
}

#flowControls programmable() {
  pos: 40, 80
  text(m6x11, "Flow item count:", #cccccc, left, 200): 0, 0
  #countText(updatable) text(m6x11, "3", #7fdbda, left, 50): 140, 0

  placeholder(generated(cross(210, 20, #FF0000)), builderParameter("countSlider")) {
    pos: 0, 22
    settings{size:int=>200}
    settings{min:int=>0}
    settings{max:int=>5}
    settings{step:int=>1}
  }
}

#flowLayoutShowcase programmable(count: 0..5 = 3) {
  pos: 40, 130
  // Section 1: Basic layouts
  text(exo2_16, "Vertical layout:", #cccccc): 0, 0

  point {
    pos: 0, 30
    flow(minWidth: 60, layout: vertical, padding: 4, verticalSpacing: 4, debug: true) {
      repeatable($i, range(0, $count)) {
        staticRef($flowItem, w=>50, h=>20, color=>#cc4444, num=>$i);
      }
    }
  }

  text(exo2_16, "Horizontal layout:", #cccccc): 200, 0

  point {
    pos: 200, 30
    flow(minHeight: 30, layout: horizontal, padding: 4, horizontalSpacing: 4, debug: true) {
      repeatable($i, range(0, $count)) {
        staticRef($flowItem, w=>50, h=>25, color=>#44cc44, num=>$i);
      }
    }
  }

  text(exo2_16, "Stack layout:", #cccccc): 500, 0

  point {
    pos: 500, 30
    flow(minWidth: 90, minHeight: 90, layout: stack, padding: 4, debug: true) {
      repeatable($i, range(0, $count)) {
        @alpha(0.3) staticRef($flowItem, w=>80 - $i * 12, h=>80 - $i * 12, color=>#553366, num=>$i);
      }
    }
  }

  // Section 2: Overflow modes
  text(exo2_16, "Overflow expand (maxWidth:80):", #cccccc): 0, 160

  point {
    pos: 0, 190
    flow(maxWidth: 80, layout: horizontal, overflow: expand) {
      repeatable($i, range(0, $count)) {
        staticRef($flowItem, w=>40, h=>20, color=>#cc4488, num=>$i);
      }
    }
  }
  // maxWidth limit marker
  @alpha(0.4) bitmap(generated(color(1, 24, #ffff00))): 80, 188

  text(exo2_16, "Overflow hidden (maxWidth:80):", #cccccc): 300, 160

  point {
    pos: 300, 190
    flow(maxWidth: 80, layout: horizontal, overflow: hidden) {
      repeatable($i, range(0, $count)) {
        staticRef($flowItem, w=>40, h=>20, color=>#44cc88, num=>$i);
      }
    }
  }
  // maxWidth limit marker
  @alpha(0.4) bitmap(generated(color(1, 24, #ffff00))): 380, 188

  // Section 3: Multiline flow
  text(exo2_16, "Multiline flow (maxWidth:150):", #cccccc): 0, 240

  point {
    pos: 0, 270
    flow(maxWidth: 150, layout: horizontal, multiline: true, padding: 4, horizontalSpacing: 4, verticalSpacing: 4, debug: true) {
      repeatable($i, range(0, $count)) {
        staticRef($flowItem, w=>40, h=>20, color=>#8844cc, num=>$i);
      }
    }
  }

  // Section 4: Reverse
  text(exo2_16, "Reverse:", #cccccc): 600, 160

  point {
    pos: 600, 190
    flow(layout: horizontal, horizontalSpacing: 4, reverse: true) {
      repeatable($i, range(0, $count)) {
        staticRef($flowItem, w=>40, h=>20, color=>#4444cc, num=>$i);
      }
    }
  }

  // Section 5: Spacers - toolbar groups
  text(exo2_16, "Spacers (toolbar groups):", #cccccc): 0, 340

  point {
    pos: 0, 370
    flow(layout: horizontal, horizontalSpacing: 2, padding: 4, debug: true) {
      // Group A
      repeatable($a, range(0, $count)) {
        staticRef($flowItem, w=>20, h=>20, color=>#cc4444, num=>$a);
      }
      spacer(12, 0);
      staticRef($flowItem, w=>2, h=>20, color=>#666666);
      spacer(12, 0);
      // Group B
      repeatable($b, range(0, $count)) {
        staticRef($flowItem, w=>20, h=>20, color=>#44cc44, num=>$b);
      }
      spacer(12, 0);
      staticRef($flowItem, w=>2, h=>20, color=>#666666);
      spacer(12, 0);
      // Group C
      repeatable($c, range(0, $count)) {
        staticRef($flowItem, w=>20, h=>20, color=>#4444cc, num=>$c);
      }
    }
  }

  // Section 6: Spacers - vertical with growing gaps
  text(exo2_16, "Spacers (vertical list):", #cccccc): 400, 240

  point {
    pos: 400, 270
    flow(layout: vertical, verticalSpacing: 2, padding: 4, debug: true) {
      repeatable($d, range(0, $count)) {
        staticRef($flowItem, w=>80, h=>15, color=>#cc8844, num=>$d);
        spacer(0, 4 + $d * 4);
      }
    }
  }

  // Section 7: Text in flow
  text(exo2_16, "Text in flow:", #cccccc): 600, 240

  point {
    pos: 600, 270
    flow(minWidth: 120, layout: vertical, verticalSpacing: 4, padding: 6, debug: true) {
      repeatable($t, range(0, $count)) {
        text(m6x11, 'text \${$t}', #ff8888, left);
      }
    }
  }
}
`,Gp=`version: 1.0

#repeatableControls programmable() {
  text(m6x11, "Repeatable count:", #cccccc, left, 200): 0, 0
  #countText(updatable) text(m6x11, "3", #7fdbda, left, 50): 160, 0

  placeholder(generated(cross(210, 20, #FF0000)), builderParameter("countSlider")) {
    pos: 0, 22
    settings{size:int=>200}
    settings{min:int=>0}
    settings{max:int=>5}
    settings{step:int=>1}
  }
}

#repeatableShowcase programmable(count: 0..5 = 3) {
  // Section 1: Basic horizontal step
  text(exo2_16, "Horizontal step:", #cccccc): 0, 0

  point {
    pos: 0, 30
    repeatable($i, step($count, dx: 60)) {
      bitmap(generated(color(50, 50, #4488cc))): 0, 0
      text(m6x11, $i, #ffffff, center, 50): 0, 18
    }
  }

  // Section 2: Vertical step
  text(exo2_16, "Vertical step:", #cccccc): 400, 0

  point {
    pos: 400, 30
    repeatable($j, step($count, dy: 35)) {
      bitmap(generated(color(120, 28, #cc4488))): 0, 0
      text(m6x11, $j, #ffffff): 5, 8
    }
  }

  // Section 3: Diagonal step
  text(exo2_16, "Diagonal step:", #cccccc): 0, 120

  point {
    pos: 0, 150
    repeatable($k, step($count, dx: 50, dy: 20)) {
      bitmap(generated(color(40, 16, #44cc88))): 0, 0
      text(m6x11, $k, #ffffff, center, 40): 0, 2
    }
  }

  // Section 4: Indexed named elements with #name[$i]
  text(exo2_16, "Indexed elements #cell[$i]:", #cccccc): 0, 300

  point {
    pos: 0, 330
    repeatable($idx, step($count, dx: 80)) {
      #cell[$idx] bitmap(generated(color(70, 70, #553322))): 0, 0
      #label[$idx] text(m6x11, $idx, #ffffff, center, 70): 0, 28
    }
  }

  // Section 5: Grid using nested repeatables
  text(exo2_16, "2D grid (range):", #cccccc): 0, 430

  point {
    pos: 0, 460
    repeatable($row, range(0, $count)) {
      repeatable($col, range(0, $count)) {
        bitmap(generated(color(30, 30, #445566))): $col * 38, $row * 38
      }
    }
  }

  // Section 6: Fading alpha with expression
  text(exo2_16, "Fading alpha:", #cccccc): 400, 300

  point {
    pos: 400, 330
    repeatable($n, step($count, dx: 40)) {
      @alpha(1.0 - $n / 5) bitmap(generated(color(30, 30, #ff7f50))): 0, 0
      text(m6x11, $n, #ffffff, center, 30): 0, 10
    }
  }
}
`,Up=`version: 1.0

// Item that goes into a slot - uses same icons as inventory demo
#slotItem programmable(itemType:[empty, hpot, mpot, lsword, ssword, shield, ring, boots, scroll, helm, armor] = empty) {
  // Colored background per item type (48x48 matching inventory)
  @(itemType => empty)   bitmap(generated(color(48, 48, #2a2a3a))): 0, 0
  @(itemType => hpot)    bitmap(generated(color(48, 48, #cc3333))): 0, 0
  @(itemType => mpot)    bitmap(generated(color(48, 48, #3366bb))): 0, 0
  @(itemType => lsword)  bitmap(generated(color(48, 48, #88aa44))): 0, 0
  @(itemType => ssword)  bitmap(generated(color(48, 48, #669944))): 0, 0
  @(itemType => shield)  bitmap(generated(color(48, 48, #4488cc))): 0, 0
  @(itemType => ring)    bitmap(generated(color(48, 48, #ccaa33))): 0, 0
  @(itemType => boots)   bitmap(generated(color(48, 48, #44aa88))): 0, 0
  @(itemType => scroll)  bitmap(generated(color(48, 48, #aa66cc))): 0, 0
  @(itemType => helm)    bitmap(generated(color(48, 48, #999999))): 0, 0
  @(itemType => armor)   bitmap(generated(color(48, 48, #445588))): 0, 0

  // Item sprites from roguelike atlas (3x scale = 48x48)
  @(itemType => hpot)    scale(3) bitmap(sheet("roguelikeitems", "potion", 0)): 0, 0
  @(itemType => mpot)    scale(3) bitmap(sheet("roguelikeitems", "potion", 2)): 0, 0
  @(itemType => lsword)  scale(3) bitmap(sheet("roguelikeitems", "weapon", 9)): 0, 0
  @(itemType => ssword)  scale(3) bitmap(sheet("roguelikeitems", "weapon", 11)): 0, 0
  @(itemType => shield)  scale(3) bitmap(sheet("roguelikeitems", "shield", 6)): 0, 0
  @(itemType => ring)    scale(3) bitmap(sheet("roguelikeitems", "ring", 0)): 0, 0
  @(itemType => boots)   scale(3) bitmap(sheet("roguelikeitems", "boots", 0)): 0, 0
  @(itemType => scroll)  scale(3) bitmap(sheet("roguelikeitems", "scroll", 0)): 0, 0
  @(itemType => helm)    scale(3) bitmap(sheet("roguelikeitems", "helmet", 0)): 0, 0
  @(itemType => armor)   scale(3) bitmap(sheet("roguelikeitems", "armor", 0)): 0, 0

  // Item name labels
  @(itemType => empty)   text(m5x7, "empty", #888888, center, 48): 0, 32
  @(itemType => hpot)    text(m5x7, "H.Pot", #ff8888, center, 48): 0, 32
  @(itemType => mpot)    text(m5x7, "M.Pot", #88aaff, center, 48): 0, 32
  @(itemType => lsword)  text(m5x7, "L.Sword", #bbcc88, center, 48): 0, 32
  @(itemType => ssword)  text(m5x7, "S.Sword", #99cc77, center, 48): 0, 32
  @(itemType => shield)  text(m5x7, "Shield", #88bbdd, center, 48): 0, 32
  @(itemType => ring)    text(m5x7, "Ring", #ddbb66, center, 48): 0, 32
  @(itemType => boots)   text(m5x7, "Boots", #88ddbb, center, 48): 0, 32
  @(itemType => scroll)  text(m5x7, "Scroll", #bb99dd, center, 48): 0, 32
  @(itemType => helm)    text(m5x7, "Helm", #bbbbbb, center, 48): 0, 32
  @(itemType => armor)   text(m5x7, "Armor", #7799bb, center, 48): 0, 32
}

// Main showcase with 10 slots in 2 rows of 5
#slotsShowcase programmable() {
  pos: 40, 80

  text(exo2_16, "Slot Items", #7fdbda): 0, 0
  bitmap(generated(color(700, 1, #7fdbda33))): 0, 22
  text(exo2_light_14, "Click an empty slot to fill it. Auto-fills every second. Clears when full.", #aaaaaa): 0, 30

  // Row 1: slots 0-4
  point {
    pos: 0, 55
    repeatable($i, step(5, dx: 80)) {
      bitmap(generated(color(70, 70, #333344))): 0, 0
      #slot[$i] slot {
        bitmap(generated(color(1, 1, #33334400))): 0, 0
      }
    }
  }

  // Row 2: slots 5-9
  point {
    pos: 0, 145
    repeatable($j, step(5, dx: 80)) {
      bitmap(generated(color(70, 70, #333344))): 0, 0
      #slot2[$j] slot {
        bitmap(generated(color(1, 1, #33334400))): 0, 0
      }
    }
  }

  // Container for programmatic status texts and interactives
  #slotContainer(updatable) point: 0, 0

  // Auto-add checkbox
  placeholder(generated(cross(20, 20, #FF0000)), builderParameter("autoAddChk")) { pos: 0, 240 }
  text(exo2_light_14, "Auto-add", #aaaaaa): 24, 240

  // Counter
  #slotCountText(updatable) text(exo2_16, "Slots: 0 / 10 occupied", #ffffff, left, 400): 0, 265

  // Log
  #logText(updatable) text(exo2_light_14, "Click a slot or wait for auto-fill.", #666666, left, 500): 0, 290

  // --- Slot Combinations ---
  // Parametrized slots with state: en/ec/eb (enabled none/cursed/blessed), dn/dc/db (disabled)
  // Content goes to contentRoot — overlays (borders, X marks) persist around inserted items
  text(exo2_16, "Slot Combinations", #7fdbda): 0, 325
  bitmap(generated(color(700, 1, #7fdbda33))): 0, 347
  text(exo2_light_14, "Status: enabled (clickable), disabled (X mark, non-clickable).", #aaaaaa): 0, 357
  text(exo2_light_14, "Extra: none, cursed (violet border), blessed (golden glow on item).", #aaaaaa): 0, 373
  text(exo2_light_14, "Click enabled slots to toggle items. Overlays persist around content.", #aaaaaa): 0, 389

  // Column headers
  text(exo2_light_14, "None", #888888, center, 60): 100, 410
  text(exo2_light_14, "Cursed", #9944cc, center, 60): 180, 410
  text(exo2_light_14, "Blessed", #ddaa44, center, 60): 260, 410

  // ===== Row 1: ENABLED =====
  text(exo2_light_14, "Enabled", #66cc99): 10, 448

  point {
    pos: 100, 426
    repeatable($i, step(3, dx: 80)) {
      bitmap(generated(color(60, 60, #333344))): 0, 0
      #cs_e[$i] slot(state:[en, ec, eb, dn, dc, db] = en) {
        bitmap(generated(color(1, 1, #00000000))): 0, 0
        // Disabled grey overlay
        @(state => dn) bitmap(generated(color(60, 60, #44444499))): 0, 0
        @(state => dc) bitmap(generated(color(60, 60, #44444499))): 0, 0
        @(state => db) bitmap(generated(color(60, 60, #44444499))): 0, 0
        // Cursed violet border
        @(state => ec) graphics(
          line(#7700aa, 2, 0, 0, 59, 0);
          line(#7700aa, 2, 0, 59, 59, 59);
          line(#7700aa, 2, 0, 0, 0, 59);
          line(#7700aa, 2, 59, 0, 59, 59);
        ): 0, 0
        @(state => dc) graphics(
          line(#7700aa, 2, 0, 0, 59, 0);
          line(#7700aa, 2, 0, 59, 59, 59);
          line(#7700aa, 2, 0, 0, 0, 59);
          line(#7700aa, 2, 59, 0, 59, 59);
        ): 0, 0
        // Blessed golden border
        @(state => eb) graphics(
          line(#ddaa44, 1, 0, 0, 59, 0);
          line(#ddaa44, 1, 0, 59, 59, 59);
          line(#ddaa44, 1, 0, 0, 0, 59);
          line(#ddaa44, 1, 59, 0, 59, 59);
        ): 0, 0
        @(state => db) graphics(
          line(#ddaa44, 1, 0, 0, 59, 0);
          line(#ddaa44, 1, 0, 59, 59, 59);
          line(#ddaa44, 1, 0, 0, 0, 59);
          line(#ddaa44, 1, 59, 0, 59, 59);
        ): 0, 0
        // Disabled X mark
        @(state => dn) graphics(
          line(#cc4444, 2, 6, 6, 54, 54);
          line(#cc4444, 2, 54, 6, 6, 54);
        ): 0, 0
        @(state => dc) graphics(
          line(#cc4444, 2, 6, 6, 54, 54);
          line(#cc4444, 2, 54, 6, 6, 54);
        ): 0, 0
        @(state => db) graphics(
          line(#cc4444, 2, 6, 6, 54, 54);
          line(#cc4444, 2, 54, 6, 6, 54);
        ): 0, 0
      }
    }
  }

  // ===== Row 2: DISABLED =====
  text(exo2_light_14, "Disabled", #cc6666): 10, 526

  point {
    pos: 100, 504
    repeatable($j, step(3, dx: 80)) {
      bitmap(generated(color(60, 60, #333344))): 0, 0
      #cs_d[$j] slot(state:[en, ec, eb, dn, dc, db] = dn) {
        bitmap(generated(color(1, 1, #00000000))): 0, 0
        @(state => dn) bitmap(generated(color(60, 60, #44444499))): 0, 0
        @(state => dc) bitmap(generated(color(60, 60, #44444499))): 0, 0
        @(state => db) bitmap(generated(color(60, 60, #44444499))): 0, 0
        @(state => ec) graphics(
          line(#7700aa, 2, 0, 0, 59, 0);
          line(#7700aa, 2, 0, 59, 59, 59);
          line(#7700aa, 2, 0, 0, 0, 59);
          line(#7700aa, 2, 59, 0, 59, 59);
        ): 0, 0
        @(state => dc) graphics(
          line(#7700aa, 2, 0, 0, 59, 0);
          line(#7700aa, 2, 0, 59, 59, 59);
          line(#7700aa, 2, 0, 0, 0, 59);
          line(#7700aa, 2, 59, 0, 59, 59);
        ): 0, 0
        @(state => eb) graphics(
          line(#ddaa44, 1, 0, 0, 59, 0);
          line(#ddaa44, 1, 0, 59, 59, 59);
          line(#ddaa44, 1, 0, 0, 0, 59);
          line(#ddaa44, 1, 59, 0, 59, 59);
        ): 0, 0
        @(state => db) graphics(
          line(#ddaa44, 1, 0, 0, 59, 0);
          line(#ddaa44, 1, 0, 59, 59, 59);
          line(#ddaa44, 1, 0, 0, 0, 59);
          line(#ddaa44, 1, 59, 0, 59, 59);
        ): 0, 0
        @(state => dn) graphics(
          line(#cc4444, 2, 6, 6, 54, 54);
          line(#cc4444, 2, 54, 6, 6, 54);
        ): 0, 0
        @(state => dc) graphics(
          line(#cc4444, 2, 6, 6, 54, 54);
          line(#cc4444, 2, 54, 6, 6, 54);
        ): 0, 0
        @(state => db) graphics(
          line(#cc4444, 2, 6, 6, 54, 54);
          line(#cc4444, 2, 54, 6, 6, 54);
        ): 0, 0
      }
    }
  }

  // Combo status / info
  #comboStatusText(updatable) text(exo2_light_14, "Click an enabled slot to add/remove an item.", #666666, left, 500): 0, 575
  #comboInfoText(updatable) text(exo2_light_14, "", #aaaaaa, left, 500): 0, 593
}
`,Qp=`version: 1.0

// Child programmable: a colored card with configurable size and color
#colorCard programmable(w:uint=60, h:uint=40, cardColor:color=#4488cc, label:string="Card") {
  bitmap(generated(colorWithText($w, $h, $cardColor, $label, #ffffff, m6x11))): 0, 0
}

// Child programmable: a labeled badge
#badge programmable(size:uint=30, badgeColor:color=#cc4444, number:uint=0) {
  bitmap(generated(colorWithText($size, $size, $badgeColor, $number, #ffffff, m6x11))): 0, 0
  graphics (
    polygon(#ffffff33, filled, 0,0, 10,0, 0,10);
  );
}

// Parent programmable that embeds children via staticRef
#staticRefsShowcase programmable() {
  // Section 1: Same child, different sizes
  text(exo2_16, "Same child, different sizes:", #cccccc): 0, 0

  staticRef($colorCard, w=>80, h=>50, cardColor=>#2c5f7c, label=>"Small"): 0, 30
  staticRef($colorCard, w=>150, h=>70, cardColor=>#4a90a4, label=>"Medium"): 100, 30
  staticRef($colorCard, w=>250, h=>90, cardColor=>#7fdbda, label=>"Large"): 270, 30

  // Section 2: Same child, different colors
  text(exo2_16, "Same child, different colors:", #cccccc): 0, 150

  staticRef($colorCard, w=>100, h=>50, cardColor=>#ff7f50, label=>"Orange"): 0, 180
  staticRef($colorCard, w=>100, h=>50, cardColor=>#4caf50, label=>"Green"): 120, 180
  staticRef($colorCard, w=>100, h=>50, cardColor=>#ff4444, label=>"Red"): 240, 180
  staticRef($colorCard, w=>100, h=>50, cardColor=>#ffeb3b, label=>"Yellow"): 360, 180
  staticRef($colorCard, w=>100, h=>50, cardColor=>#9c27b0, label=>"Purple"): 480, 180

  // Section 3: Badge grid using staticRef
  text(exo2_16, "Badges via staticRef:", #cccccc): 0, 260

  staticRef($badge, size=>40, badgeColor=>#cc4444, number=>1): 0, 290
  staticRef($badge, size=>40, badgeColor=>#44cc44, number=>2): 50, 290
  staticRef($badge, size=>40, badgeColor=>#4444cc, number=>3): 100, 290
  staticRef($badge, size=>40, badgeColor=>#cc8844, number=>4): 150, 290
  staticRef($badge, size=>40, badgeColor=>#cc44cc, number=>5): 200, 290

  // Section 4: Nested children
  text(exo2_16, "Nesting different children:", #cccccc): 0, 360

  point {
    pos: 0, 390
    staticRef($colorCard, w=>300, h=>150, cardColor=>#333344, label=>"Outer Container"): 0, 0

    point {
      pos: 15, 30
      staticRef($colorCard, w=>120, h=>100, cardColor=>#2c5f7c, label=>"Inner A"): 0, 0
      staticRef($badge, size=>25, badgeColor=>#ff4444, number=>1): 10, 60
      staticRef($badge, size=>25, badgeColor=>#44ff44, number=>2): 45, 60
      staticRef($badge, size=>25, badgeColor=>#4444ff, number=>3): 80, 60
    }

    point {
      pos: 160, 30
      staticRef($colorCard, w=>120, h=>100, cardColor=>#4a5a6a, label=>"Inner B"): 0, 0
      staticRef($badge, size=>25, badgeColor=>#ffcc44, number=>4): 10, 60
      staticRef($badge, size=>25, badgeColor=>#cc44ff, number=>5): 45, 60
    }
  }
}
`,qp=`version: 1.0

// Buttons Demo
// Shows all button styles from buttons.manim builder: Normal, Warning, Small
// Plus custom settings: text shadow, font colors, sizes, color buttons

#buttonsDemo programmable() {
    pos: 50, 80

    // Section: Normal Buttons (buttons.main)
    text(exo2_16, "Normal Buttons", #7fdbda): 0, 0
    bitmap(generated(color(660, 1, #7fdbda33))): 0, 22

    placeholder(generated(cross(200, 30, white)), builderParameter("normalBtn1")) {
        pos: 0, 40
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("normalBtn2")) {
        pos: 220, 40
        settings{text=>"Action"}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("normalBtn3")) {
        pos: 440, 40
        settings{text=>"Submit"}
    }

    // Section: Warning Buttons (buttons.warning)
    text(exo2_16, "Warning Buttons", #ff7f50): 0, 100
    bitmap(generated(color(660, 1, #ff7f5033))): 0, 122

    placeholder(generated(cross(200, 30, white)), builderParameter("warningBtn1")) {
        pos: 0, 140
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("warningBtn2")) {
        pos: 220, 140
        settings{text=>"Delete"}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("warningBtn3")) {
        pos: 440, 140
        settings{text=>"Reset"}
    }

    // Section: Small Buttons (buttons.small)
    text(exo2_16, "Small Buttons", #4caf50): 0, 200
    bitmap(generated(color(660, 1, #4caf5033))): 0, 222

    placeholder(generated(cross(64, 32, white)), builderParameter("smallBtn1")) {
        pos: 0, 240
    }
    placeholder(generated(cross(64, 32, white)), builderParameter("smallBtn2")) {
        pos: 80, 240
        settings{text=>"No"}
    }
    placeholder(generated(cross(64, 32, white)), builderParameter("smallBtn3")) {
        pos: 160, 240
        settings{text=>"Info"}
    }

    // Section: Text Shadow
    text(exo2_16, "Text Shadow", #b0b0b0): 0, 300
    bitmap(generated(color(660, 1, #b0b0b033))): 0, 322

    placeholder(generated(cross(200, 30, white)), builderParameter("shadowBtn1")) {
        pos: 0, 340
        settings{text=>"Shadow", textShadow:bool=>true}
    }
    placeholder(generated(cross(200, 40, white)), builderParameter("shadowBtn2")) {
        pos: 220, 335
        settings{text=>"Big Shadow", width:int=>200, height:int=>40, font=>"exo2_16", textShadow:bool=>true}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("shadowBtn3")) {
        pos: 440, 340
        settings{buildName=>"warning", text=>"Warning Shadow", textShadow:bool=>true}
    }

    // Section: Font Colors
    text(exo2_16, "Font Colors", #ffeb3b): 0, 400
    bitmap(generated(color(660, 1, #ffeb3b33))): 0, 422

    placeholder(generated(cross(200, 30, white)), builderParameter("colorTextBtn1")) {
        pos: 0, 440
        settings{text=>"Red Text", fontColor:int=>0xff444412}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("colorTextBtn2")) {
        pos: 220, 440
        settings{text=>"Green Text", fontColor:int=>0x44ff4412}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("colorTextBtn3")) {
        pos: 440, 440
        settings{text=>"Gold Text", fontColor:int=>0xffcc4412}
    }

    // Section: Size Variants
    text(exo2_16, "Size Variants", #4a90a4): 0, 500
    bitmap(generated(color(660, 1, #4a90a433))): 0, 522

    placeholder(generated(cross(120, 22, white)), builderParameter("sizeBtn1")) {
        pos: 0, 540
        settings{text=>"Compact", width:int=>120, height:int=>22, font=>"m6x11"}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("sizeBtn2")) {
        pos: 140, 536
        settings{text=>"Standard"}
    }
    placeholder(generated(cross(300, 50, white)), builderParameter("sizeBtn3")) {
        pos: 360, 526
        settings{text=>"Large Button", width:int=>300, height:int=>50, font=>"exo2_20"}
    }

    // Section: Color Buttons
    text(exo2_16, "Color Buttons", #ff7f50): 0, 600
    bitmap(generated(color(660, 1, #ff7f5033))): 0, 622

    placeholder(generated(cross(60, 30, white)), builderParameter("colorBtn1")) {
        pos: 0, 640
        settings{buildName=>"color", color:int=>0xFFff4444, width:int=>60, height:int=>30}
    }
    placeholder(generated(cross(60, 30, white)), builderParameter("colorBtn2")) {
        pos: 80, 640
        settings{buildName=>"color", color:int=>0xFF4caf50, width:int=>60, height:int=>30}
    }
    placeholder(generated(cross(60, 30, white)), builderParameter("colorBtn3")) {
        pos: 160, 640
        settings{buildName=>"color", color:int=>0xFF2196f3, width:int=>60, height:int=>30}
    }
    placeholder(generated(cross(100, 30, white)), builderParameter("colorBtn4")) {
        pos: 240, 640
        settings{buildName=>"color", color:int=>0xFFffcc44, width:int=>100, height:int=>30}
    }

    // Click counter display
    text(exo2_16, "Click Counter", #7fdbda): 0, 700
    bitmap(generated(color(660, 1, #7fdbda33))): 0, 722
    ninepatch("ui", "Window_3x3_idle", 300, 40): 0, 740
    #counterText(updatable) text(exo2_20, "Clicks: 0", #ffffff, left, 280): 15, 748

    // Disable toggle section
    text(exo2_16, "Disable Toggle", #7fdbda): 0, 810
    bitmap(generated(color(660, 1, #7fdbda33))): 0, 832
    placeholder(generated(cross(200, 20, white)), builderParameter("disableCheckbox")) {
        pos: 0, 850
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle to disable all buttons", #aaaaaa): 30, 852
}
`,Yp=`version: 1.0

// Checkboxes Demo
// Shows checkbox, tickbox, toggle, radio, and simple variants with selected count.
// Uses checkbox.manim builder styles from ui and ui-new atlases.

#checkboxesDemo programmable() {
    pos: 50, 80

    // Section: Checkbox Variants (ui atlas)
    text(exo2_16, "Checkbox Variants (ui)", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Checkbox style (checkbox.checkbox)
    text(exo2_light_14, "Checkbox", #cccccc): 0, 35
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("checkbox1")) {
        pos: 0, 55
        settings{buildName=>checkbox}
    }

    // Tickbox style
    text(exo2_light_14, "Tickbox", #cccccc): 120, 35
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("checkbox2")) {
        pos: 120, 55
        settings{buildName=>tickbox}
    }

    // Toggle style
    text(exo2_light_14, "Toggle", #cccccc): 240, 35
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("checkbox3")) {
        pos: 240, 55
        settings{buildName=>toggle}
    }

    // Radio style
    text(exo2_light_14, "Radio", #cccccc): 360, 35
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("checkbox4")) {
        pos: 360, 55
        settings{buildName=>radio}
    }

    // Radio2 style
    text(exo2_light_14, "Radio2", #cccccc): 480, 35
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("checkbox5")) {
        pos: 480, 55
        settings{buildName=>radio2}
    }

    // Section: Simple Checkbox (ui-new atlas)
    text(exo2_16, "Simple Checkbox (ui-new)", #4caf50): 0, 110
    bitmap(generated(color(700, 1, #4caf5033))): 0, 132

    text(exo2_light_14, "Simple", #cccccc): 0, 145
    placeholder(generated(cross(24, 24, #FF0000)), builderParameter("checkbox6")) {
        pos: 0, 165
        settings{buildName=>simple}
    }

    // Selected count display
    text(exo2_16, "Status", #7fdbda): 0, 220
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 242
    ninepatch("ui", "Window_3x3_idle", 350, 40): 0, 255
    #countText(updatable) text(exo2_20, "Selected: 0 / 6", #ffffff, left, 330): 15, 263

    // Disabled state demo
    text(exo2_16, "Disabled State", #7fdbda): 0, 330
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 352

    text(exo2_light_14, "Disabled Checkbox", #cccccc): 0, 365
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("disabledCheckbox1")) {
        pos: 0, 385
        settings{buildName=>checkbox}
    }

    text(exo2_light_14, "Disabled Toggle", #cccccc): 160, 365
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("disabledCheckbox2")) {
        pos: 160, 385
        settings{buildName=>toggle}
    }

    // Enable/disable toggle
    text(exo2_16, "Controls", #7fdbda): 0, 440
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 462
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("disableToggle")) {
        pos: 0, 480
        settings{buildName=>toggle}
    }
    text(exo2_light_14, "Toggle disabled state", #aaaaaa): 60, 482
}
`,Xp=`version: 1.0

// Dialogs Demo
// Shows modal dialogs with different overlay configurations.

// Dialog with no overlay (no settings block)
#dialogNoOverlay programmable(dialogText = "Are you sure?") {
    pos: 300, 150

    ninepatch("ui", "Droppanel_3x3_idle", 500, 250): 0, 0
    text(exo2_black_20, "No Overlay", #ffffff, center, 460): 20, 20
    bitmap(generated(color(460, 1, #ffffff33))): 20, 50
    #dialogText(updatable) text(exo2_light_14, $dialogText, #cccccc, center, 400): 50, 80

    point {
        pos: 20, 180
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")): 0, 0
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")): 260, 0
    }
}

// Dialog with dark overlay (default black, 50% alpha)
#dialogDarkOverlay programmable(dialogText = "Are you sure?",
    overlayColor:color = #000000, overlayAlpha:float = 0.5,
    overlayFadeIn:float = 0.3, overlayFadeOut:float = 0.2) {
    settings {
        overlay.color:color => $overlayColor,
        overlay.alpha:float => $overlayAlpha,
        overlay.fadeIn:float => $overlayFadeIn,
        overlay.fadeOut:float => $overlayFadeOut
    }
    pos: 300, 150

    ninepatch("ui", "Droppanel_3x3_idle", 500, 250): 0, 0
    text(exo2_black_20, "Dark Overlay", #ffffff, center, 460): 20, 20
    bitmap(generated(color(460, 1, #ffffff33))): 20, 50
    #dialogText(updatable) text(exo2_light_14, $dialogText, #cccccc, center, 400): 50, 80

    point {
        pos: 20, 180
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")): 0, 0
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")): 260, 0
    }
}

// Dialog with blue-tinted overlay
#dialogBlueOverlay programmable(dialogText = "Are you sure?",
    overlayColor:color = #001144, overlayAlpha:float = 0.6,
    overlayFadeIn:float = 0.4, overlayFadeOut:float = 0.3) {
    settings {
        overlay.color:color => $overlayColor,
        overlay.alpha:float => $overlayAlpha,
        overlay.fadeIn:float => $overlayFadeIn,
        overlay.fadeOut:float => $overlayFadeOut
    }
    pos: 300, 150

    ninepatch("ui", "Droppanel_3x3_idle", 500, 250): 0, 0
    text(exo2_black_20, "Blue Overlay", #aaccff, center, 460): 20, 20
    bitmap(generated(color(460, 1, #aaccff33))): 20, 50
    #dialogText(updatable) text(exo2_light_14, $dialogText, #ccccee, center, 400): 50, 80

    point {
        pos: 20, 180
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")): 0, 0
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")): 260, 0
    }
}

// Dialog with heavy dark overlay (high alpha)
#dialogHeavyOverlay programmable(dialogText = "Are you sure?",
    overlayColor:color = #000000, overlayAlpha:float = 0.85,
    overlayFadeIn:float = 0.5, overlayFadeOut:float = 0.3) {
    settings {
        overlay.color:color => $overlayColor,
        overlay.alpha:float => $overlayAlpha,
        overlay.fadeIn:float => $overlayFadeIn,
        overlay.fadeOut:float => $overlayFadeOut
    }
    pos: 300, 150

    ninepatch("ui", "Droppanel_3x3_idle", 500, 250): 0, 0
    text(exo2_black_20, "Heavy Overlay", #ff8888, center, 460): 20, 20
    bitmap(generated(color(460, 1, #ff888833))): 20, 50
    #dialogText(updatable) text(exo2_light_14, $dialogText, #cccccc, center, 400): 50, 80

    point {
        pos: 20, 180
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")): 0, 0
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")): 260, 0
    }
}

// Dialog with red warning overlay
#dialogRedOverlay programmable(dialogText = "Are you sure?",
    overlayColor:color = #330000, overlayAlpha:float = 0.5,
    overlayFadeIn:float = 0.2, overlayFadeOut:float = 0.15) {
    settings {
        overlay.color:color => $overlayColor,
        overlay.alpha:float => $overlayAlpha,
        overlay.fadeIn:float => $overlayFadeIn,
        overlay.fadeOut:float => $overlayFadeOut
    }
    pos: 300, 150

    ninepatch("ui", "Droppanel_3x3_idle", 500, 250): 0, 0
    text(exo2_black_20, "Warning!", #ff4444, center, 460): 20, 20
    bitmap(generated(color(460, 1, #ff444433))): 20, 50
    #dialogText(updatable) text(exo2_light_14, $dialogText, #ffcccc, center, 400): 50, 80

    point {
        pos: 20, 180
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")): 0, 0
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")): 260, 0
    }
}

#dialogsDemo programmable() {
    pos: 50, 80

    // Section: Modal Dialogs
    text(exo2_16, "Modal Dialogs - Overlay Variants", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    text(exo2_light_14, "Each button opens a dialog with a different overlay style:", #cccccc): 0, 35

    // Row 1: No overlay vs Dark overlay
    text(exo2_light_14, "No Overlay:", #888888): 0, 58
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton1")) {
        pos: 0, 72
    }
    text(exo2_light_14, "Dark (50%):", #888888): 220, 58
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton2")) {
        pos: 220, 72
    }
    text(exo2_light_14, "Blue Tint:", #888888): 440, 58
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton3")) {
        pos: 440, 72
    }

    // Row 2: Heavy dark, Red warning
    text(exo2_light_14, "Heavy Dark (85%):", #888888): 0, 112
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton4")) {
        pos: 0, 126
    }
    text(exo2_light_14, "Red Warning:", #888888): 220, 112
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton5")) {
        pos: 220, 126
    }

    // Result display
    text(exo2_16, "Dialog Result", #7fdbda): 0, 190
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 212
    ninepatch("ui", "Window_3x3_idle", 500, 50): 0, 230
    #resultText(updatable) text(exo2_20, "No dialog opened yet", #ffffff, left, 480): 15, 245

    // History
    text(exo2_16, "Dialog History", #7fdbda): 0, 310
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 332
    ninepatch("ui", "Window_3x3_idle", 500, 150): 0, 345
    #historyText1(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 355
    #historyText2(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 375
    #historyText3(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 395
    #historyText4(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 415
    #historyText5(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 435
}
`,Kp=`version: 1.0

// Draggable Demo
// All drag & drop modes: snap zones, constraints, priority, layer, alpha/highlight.

curves {
    #elasticBounce curve {
        easing: easeoutelastic
    }
    #easeOut curve {
        easing: easeoutcubic
    }
}

paths {
    #straightLine path {
        lineTo(100, 0)
    }
}

// Elastic return — bounces to origin like a card snapping back
#returnAnim animatedPath {
    path: straightLine
    type: time
    duration: 0.5
    0.0: progressCurve: elasticBounce
}

// Quick snap to drop zone
#snapAnim animatedPath {
    path: straightLine
    type: time
    duration: 0.15
    0.0: progressCurve: easeOut
}

// Linear return for simple cases
#linearReturn animatedPath {
    path: straightLine
    type: time
    duration: 0.2
}

#draggableDemo programmable() {
    pos: 50, 80

    // Section 1: Drop Zones with Snap Animation
    text(exo2_16, "Drop Zones + Elastic Return", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    text(exo2_light_14, "Blue rect: alpha dims while dragging, brightens on zone hover.", #cccccc): 0, 35

    // Drop zone 1
    ninepatch("ui", "Window_3x3_idle", 120, 120): 0, 60
    text(exo2_light_14, "Zone 1", #ffffffaa, center, 120): 0, 185

    // Drop zone 2
    ninepatch("ui", "Window_3x3_idle", 120, 120): 150, 60
    text(exo2_light_14, "Zone 2", #ffffffaa, center, 120): 150, 185

    // Section 2: Horizontal Constraint
    text(exo2_16, "Horizontal Constraint (clamped)", #7fdbda): 0, 215
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 237

    text(exo2_light_14, "Green rect: locked to Y, X clamped to rail (50..550):", #cccccc): 0, 250
    bitmap(generated(color(500, 2, #ffffff44))): 0, 280

    // Section 3: Priority Zones (Overlapping)
    text(exo2_16, "Priority Zones (Overlapping)", #7fdbda): 0, 310
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 332

    text(exo2_light_14, "Inner zone = high priority. Elastic return on miss.", #cccccc): 0, 345

    // Outer zone (low priority)
    ninepatch("ui", "Window_3x3_idle", 180, 120): 0, 370
    text(exo2_light_14, "Low", #ff8888aa, center, 180): 0, 495

    // Inner zone (high priority, overlapping)
    ninepatch("ui", "Window_3x3_idle", 80, 80): 50, 390
    text(exo2_light_14, "High", #88ff88aa, center, 80): 50, 475

    // Section 4: Background Layer
    text(exo2_16, "Background Layer", #7fdbda): 350, 215
    bitmap(generated(color(350, 1, #7fdbda33))): 350, 237

    text(exo2_light_14, "Purple rect goes behind everything while dragging:", #cccccc): 350, 250

    // Events panel
    text(exo2_16, "Events", #7fdbda): 350, 0
    bitmap(generated(color(350, 1, #7fdbda33))): 350, 22

    ninepatch("ui", "Window_3x3_idle", 350, 160): 350, 35
    #eventText(updatable) text(exo2_light_14, "Drag items to see events here", #ffffff, left, 330): 365, 50

    // Disable toggle section
    text(exo2_16, "Disable Toggle", #7fdbda): 350, 310
    bitmap(generated(color(350, 1, #7fdbda33))): 350, 332
    placeholder(generated(cross(200, 20, white)), builderParameter("disableCheckbox")) {
        pos: 350, 350
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle to disable all draggables", #aaaaaa): 380, 352
}
`,Zp=`version: 1.0

// Dropdowns Demo
// Shows dropdown modes: scrollable (fixed height) and scalable (auto-sizing).

#dropdownsDemo programmable() {
    pos: 50, 80

    // Section: Scrollable (default)
    text(exo2_16, "Scrollable (default)", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22
    text(exo2_light_14, "Fixed panel height, always scrolls:", #cccccc): 0, 35

    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("dropdownScrollable")) {
        pos: 0, 55
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, height:int=>150}
    }

    #scrollableText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 180, 65

    // Section: Autoscale (few items)
    text(exo2_16, "Autoscale (few items)", #7fdbda): 0, 140
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 162
    text(exo2_light_14, "Panel sizes to fit items:", #cccccc): 0, 175

    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("dropdownAutoFew")) {
        pos: 0, 195
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, panelMode=>scalable, height:int=>300}
    }

    #autoFewText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 180, 205

    // Section: Autoscale (many items)
    text(exo2_16, "Autoscale (many items)", #7fdbda): 0, 280
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 302
    text(exo2_light_14, "Auto-sizes up to max height, then scrolls:", #cccccc): 0, 315

    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("dropdownAutoMany")) {
        pos: 0, 335
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, panelMode=>scalable, height:int=>150}
    }

    #autoManyText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 180, 345

    // Section: Custom Font & Color
    text(exo2_16, "Custom Font & Color", #ffeb3b): 0, 420
    bitmap(generated(color(600, 1, #ffeb3b33))): 0, 442
    text(exo2_light_14, "White text with dd font:", #cccccc): 0, 455

    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("dropdownCustom")) {
        pos: 0, 475
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, height:int=>150, font=>"dd", fontColor:color=>white}
    }

    #customText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 180, 485

    // Section: Wide Dropdown (180px)
    text(exo2_16, "Wide Dropdown (180px)", #7fdbda): 0, 560
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 582
    text(exo2_light_14, "Wider dropdown with pixellari font:", #cccccc): 0, 595

    placeholder(generated(cross(180, 30, #FF0000)), builderParameter("dropdownWide")) {
        pos: 0, 615
        settings{dropdownBuildName=>dropdown-w, dropdown.btnWidth:int=>180, itemBuildName=>list-item-w, width:int=>180, height:int=>150, font=>"pixellari", fontColor:int=>0x7fdbda12}
    }

    #wideText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 240, 625

    // Section: Large Dropdown (200x40)
    text(exo2_16, "Large Dropdown (200x40)", #ffeb3b): 0, 700
    bitmap(generated(color(600, 1, #ffeb3b33))): 0, 722
    text(exo2_light_14, "Extra large button with exo2_16 font:", #cccccc): 0, 735

    placeholder(generated(cross(200, 40, #FF0000)), builderParameter("dropdownLarge")) {
        pos: 0, 755
        settings{dropdownBuildName=>dropdown-w, dropdown.btnWidth:int=>200, dropdown.btnHeight:int=>40, itemBuildName=>list-item-w, item.itemHeight:int=>28, width:int=>200, height:int=>150, font=>"exo2_16", fontColor:int=>0xffeb3b12}
    }

    #largeText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 260, 770

    // Section: Disabled
    text(exo2_16, "Disabled", #b0b0b0): 0, 840
    bitmap(generated(color(600, 1, #b0b0b033))): 0, 862
    text(exo2_light_14, "Dropdown with disabled state:", #cccccc): 0, 875

    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("dropdownDisabled")) {
        pos: 0, 895
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, height:int=>150}
    }

    #disabledText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 180, 905

    // Disable toggle section
    text(exo2_16, "Disable Toggle", #7fdbda): 0, 970
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 992
    placeholder(generated(cross(200, 20, white)), builderParameter("disableCheckbox")) {
        pos: 0, 1010
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle to disable all dropdowns", #aaaaaa): 30, 1012
}
`,Jp=`version: 1.0

// Progress Bar Demo
// Shows progress bars at various values with auto-animation.

#progressBar programmable(value:0..100=50) {
    bitmap(generated(color(202, 20, #333333))): 0, 0

    @(value => 0..25) bitmap(generated(color($value * 2, 16, #ff4444))): 1, 2
    @(value => 26..60) bitmap(generated(color($value * 2, 16, #ffaa00))): 1, 2
    @(value => 61..100) bitmap(generated(color($value * 2, 16, #44cc44))): 1, 2

    text(dd, $value, white, left): 210, 3
}

#progressBarWide programmable(value:0..100=50) {
    bitmap(generated(color(302, 24, #333333))): 0, 0

    @(value => 0..33) bitmap(generated(color($value * 3, 20, #cc2222))): 1, 2
    @(value => 34..66) bitmap(generated(color($value * 3, 20, #dddd44))): 1, 2
    @(value => 67..100) bitmap(generated(color($value * 3, 20, #22cc44))): 1, 2

    text(dd, $value, white, center, 300): 0, 5
}

#progressBarThin programmable(value:0..100=50) {
    bitmap(generated(color(152, 12, #444444))): 0, 0

    @(value => 0..50) bitmap(generated(color($value * 150 div 100, 8, #4a90a4))): 1, 2
    @(value => 51..100) bitmap(generated(color($value * 150 div 100, 8, #7fdbda))): 1, 2
}

#progressBarPixel programmable(value:0..100=50) {
    bitmap(generated(color(252, 24, #222222))): 0, 0

    @(value => 0..33) bitmap(generated(color($value * 250 div 100, 20, #cc3333))): 1, 2
    @(value => 34..66) bitmap(generated(color($value * 250 div 100, 20, #cc8800))): 1, 2
    @(value => 67..100) bitmap(generated(color($value * 250 div 100, 20, #33aa33))): 1, 2

    text(m6x11, '\${$value}%', white, center, 252): 0, 7
}

#progressBarDemo programmable() {
    pos: 50, 80

    // Section: Static Progress Bars
    text(exo2_16, "Progress Bars (Static)", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    text(exo2_light_14, "25% - Low", #cccccc): 0, 35
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("bar1")) {
        pos: 0, 55
        settings{buildName=>progressBar}
    }

    text(exo2_light_14, "60% - Medium", #cccccc): 0, 85
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("bar2")) {
        pos: 0, 105
        settings{buildName=>progressBar}
    }

    text(exo2_light_14, "90% - High", #cccccc): 0, 135
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("bar3")) {
        pos: 0, 155
        settings{buildName=>progressBar}
    }

    // Section: Auto-Animated Progress Bar
    text(exo2_16, "Auto-Animated (0 -> 100, resets)", #7fdbda): 0, 210
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 232

    text(exo2_light_14, "Wide bar with auto-increment:", #cccccc): 0, 245
    placeholder(generated(cross(310, 24, #FF0000)), builderParameter("animBar")) {
        pos: 0, 265
        settings{buildName=>progressBarWide}
    }

    // Section: Animated with Pixel Art Counter
    text(exo2_16, "Animated + Pixel Counter (m6x11)", #7fdbda): 0, 320
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 342

    text(exo2_light_14, "Centered percentage with pixel art font:", #cccccc): 0, 355
    placeholder(generated(cross(252, 24, #FF0000)), builderParameter("pixelBar")) {
        pos: 0, 375
        settings{buildName=>progressBarPixel}
    }

    // Section: Thin Progress Bars
    text(exo2_16, "Thin Style", #7fdbda): 0, 430
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 452

    placeholder(generated(cross(152, 12, #FF0000)), builderParameter("thinBar1")) {
        pos: 0, 470
        settings{buildName=>progressBarThin}
    }
    placeholder(generated(cross(152, 12, #FF0000)), builderParameter("thinBar2")) {
        pos: 170, 470
        settings{buildName=>progressBarThin}
    }
    placeholder(generated(cross(152, 12, #FF0000)), builderParameter("thinBar3")) {
        pos: 340, 470
        settings{buildName=>progressBarThin}
    }

    // Current animated value display
    ninepatch("ui", "Window_3x3_idle", 300, 40): 0, 510
    #valueText(updatable) text(exo2_20, "Animated: 0%", #ffffff, left, 280): 15, 518
}
`,ef=`version: 1.0

// Radio Buttons Demo
// Shows vertical and horizontal radio groups with selection feedback.

#radioDemo programmable() {
    pos: 50, 80

    // Section: Vertical Radio Group
    text(exo2_16, "Vertical Radio Group", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    placeholder(generated(cross(200, 150, #FF0000)), builderParameter("radioVertical")) {
        pos: 0, 40
    }

    // Vertical selection display
    ninepatch("ui", "Window_3x3_idle", 300, 40): 250, 40
    #verticalText(updatable) text(exo2_16, "Selected: Option A", #ffffff, left, 280): 265, 50

    // Section: Horizontal Radio Group
    text(exo2_16, "Horizontal Radio Group", #7fdbda): 0, 210
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 232

    placeholder(generated(cross(500, 30, #FF0000)), builderParameter("radioHorizontal")) {
        pos: 0, 250
    }

    // Horizontal selection display
    ninepatch("ui", "Window_3x3_idle", 300, 40): 0, 300
    #horizontalText(updatable) text(exo2_16, "Selected: Small", #ffffff, left, 280): 15, 310

    // Section: Radio2 Style
    text(exo2_16, "Radio2 Button Style", #7fdbda): 0, 370
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 392

    placeholder(generated(cross(200, 120, #FF0000)), builderParameter("radioVertical2")) {
        pos: 0, 410
    }

    ninepatch("ui", "Window_3x3_idle", 300, 40): 250, 410
    #radio2Text(updatable) text(exo2_16, "Selected: Easy", #ffffff, left, 280): 265, 420
}
`,nf=`version: 1.0

// Radio Buttons Demo
// Shows vertical and horizontal radio groups with different styles, selection feedback, and disabled state.

#radiosDemo programmable() {
    pos: 50, 80

    // Section: Vertical Radio Group (radio style)
    text(exo2_16, "Vertical Radio Group", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    placeholder(generated(cross(200, 150, #FF0000)), builderParameter("radioVertical")) {
        pos: 0, 40
        settings{radioButtonBuildName=>radio}
    }

    // Vertical selection display
    ninepatch("ui", "Window_3x3_idle", 300, 40): 250, 40
    #verticalText(updatable) text(exo2_16, "Selected: Option A", #ffffff, left, 280): 265, 50

    // Section: Horizontal Radio Group (radio style)
    text(exo2_16, "Horizontal Radio Group", #7fdbda): 0, 210
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 232

    placeholder(generated(cross(500, 30, #FF0000)), builderParameter("radioHorizontal")) {
        pos: 0, 250
        settings{radioButtonBuildName=>radio}
    }

    // Horizontal selection display
    ninepatch("ui", "Window_3x3_idle", 300, 40): 0, 300
    #horizontalText(updatable) text(exo2_16, "Selected: Small", #ffffff, left, 280): 15, 310

    // Section: Radio2 Button Style
    text(exo2_16, "Radio2 Button Style", #7fdbda): 0, 370
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 392

    placeholder(generated(cross(200, 120, #FF0000)), builderParameter("radioVertical2")) {
        pos: 0, 410
        settings{radioButtonBuildName=>radio2}
    }

    ninepatch("ui", "Window_3x3_idle", 300, 40): 250, 410
    #radio2Text(updatable) text(exo2_16, "Selected: Easy", #ffffff, left, 280): 265, 420

    // Disabled state demo
    text(exo2_16, "Disabled State", #7fdbda): 0, 550
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 572

    placeholder(generated(cross(200, 120, #FF0000)), builderParameter("disabledRadio")) {
        pos: 0, 590
        settings{radioButtonBuildName=>radio}
    }

    // Enable/disable toggle
    text(exo2_16, "Controls", #7fdbda): 0, 730
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 752
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("disableToggle")) {
        pos: 0, 770
        settings{buildName=>radio}
    }
    text(exo2_light_14, "Toggle disabled state", #aaaaaa): 60, 772
}
`,tf=`version: 1.0

// Scrollable List Demo
// Shows a scrollable list with 20+ items and selected item display.

#scrollableListDemo programmable() {
    pos: 50, 80

    // Section: Scrollable List
    text(exo2_16, "Scrollable List", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    text(exo2_light_14, "Scroll through items and click to select:", #cccccc): 0, 35

    // Scrollable list placeholder
    placeholder(generated(cross(200, 300, #FF0000)), builderParameter("scrollableList")) {
        pos: 0, 55
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, height:int=>300, width:int=>200, font=>"dd", fontColor:color=>white}
    }

    // Selected item display
    text(exo2_16, "Selected Item", #7fdbda): 250, 0
    bitmap(generated(color(350, 1, #7fdbda33))): 250, 22
    ninepatch("ui", "Window_3x3_idle", 350, 50): 250, 40
    #selectedText(updatable) text(exo2_20, "Selected: None", #ffffff, left, 330): 265, 55

    // Double-click display
    text(exo2_16, "Double-Click", #7fdbda): 250, 100
    bitmap(generated(color(350, 1, #7fdbda33))): 250, 122
    ninepatch("ui", "Window_3x3_idle", 350, 50): 250, 140
    #doubleClickText(updatable) text(exo2_20, "Confirmed: None", #ffdd44, left, 330): 265, 155

    // Instructions
    ninepatch("ui", "Window_3x3_idle", 350, 80): 250, 210
    text(exo2_light_14, "Use mouse wheel to scroll", #aaaaaa, left, 320): 265, 225
    text(exo2_light_14, "Click an item to select it", #aaaaaa, left, 320): 265, 245
    text(exo2_light_14, "Double-click for confirmation", #aaaaaa, left, 320): 265, 265

    // Disable toggle section
    text(exo2_16, "Disable Toggle", #7fdbda): 0, 370
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 392
    placeholder(generated(cross(200, 20, white)), builderParameter("disableCheckbox")) {
        pos: 0, 410
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle to disable scrollable list", #aaaaaa): 30, 412
}
`,af=`version: 1.0

// Sliders Demo
// Shows sliders of different sizes, scales, and min/max/step combinations.

#slidersDemo programmable() {
    pos: 50, 80

    // Section: Slider Sizes
    text(exo2_16, "Slider Sizes", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Small slider (100)
    text(exo2_light_14, "Small (100px)", #cccccc): 0, 35
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("slider1")) {
        pos: 0, 55
        settings{size:int=>300}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 330, 48
    #value1(updatable) text(exo2_14, "0", #ffffff, center, 100): 340, 55

    // Medium slider (200)
    text(exo2_light_14, "Medium (200px)", #cccccc): 0, 100
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("slider2")) {
        pos: 0, 120
        settings{size:int=>300}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 330, 113
    #value2(updatable) text(exo2_14, "0", #ffffff, center, 100): 340, 120

    // Large slider (300)
    text(exo2_light_14, "Large (300px)", #cccccc): 0, 165
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("slider3")) {
        pos: 0, 185
        settings{size:int=>300}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 330, 178
    #value3(updatable) text(exo2_14, "0", #ffffff, center, 100): 340, 185

    // Section: Scaled Sliders
    text(exo2_16, "Scaled Sliders", #7fdbda): 0, 230
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 252

    // Scale x2
    text(exo2_light_14, "Scale x2", #cccccc): 0, 265
    placeholder(generated(cross(310, 20, #FF0000)), builderParameter("sliderScale2")) {
        pos: 0, 285
        settings{size:int=>300}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 630, 278
    #valueScale2(updatable) text(exo2_14, "0", #ffffff, center, 100): 640, 285

    // Scale x0.5
    text(exo2_light_14, "Scale x0.5", #cccccc): 0, 340
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("sliderScale05")) {
        pos: 0, 360
        settings{size:int=>200}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 130, 353
    #valueScale05(updatable) text(exo2_14, "0", #ffffff, center, 100): 140, 360

    // Section: Min/Max & Step Combinations
    text(exo2_16, "Min/Max & Step", #7fdbda): 0, 410
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 432

    // Range 0-10, step 1
    text(exo2_light_14, "0-10, step 1", #cccccc): 0, 445
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("sliderStep1")) {
        pos: 0, 465
        settings{size:int=>200}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 230, 458
    #valueStep1(updatable) text(exo2_14, "0", #ffffff, center, 100): 240, 465

    // Range -50 to 50
    text(exo2_light_14, "-50 to 50", #cccccc): 0, 510
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("sliderRange1")) {
        pos: 0, 530
        settings{size:int=>200}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 230, 523
    #valueRange1(updatable) text(exo2_14, "-50", #ffffff, center, 100): 240, 530

    // Range 0-1000, step 100
    text(exo2_light_14, "0-1000, step 100", #cccccc): 0, 575
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("sliderStep100")) {
        pos: 0, 595
        settings{size:int=>200}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 230, 588
    #valueStep100(updatable) text(exo2_14, "0", #ffffff, center, 100): 240, 595

    // Range 0-100, step 25
    text(exo2_light_14, "0-100, step 25", #cccccc): 0, 640
    placeholder(generated(cross(210, 20, #FF0000)), builderParameter("sliderStep25")) {
        pos: 0, 660
        settings{size:int=>200}
    }
    ninepatch("ui", "Window_3x3_idle", 120, 30): 230, 653
    #valueStep25(updatable) text(exo2_14, "0", #ffffff, center, 100): 240, 660

    // Disable toggle section
    text(exo2_16, "Disable Toggle", #7fdbda): 0, 710
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 732
    placeholder(generated(cross(200, 20, white)), builderParameter("disableCheckbox")) {
        pos: 0, 750
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle to disable all sliders", #aaaaaa): 30, 752
}
`,rf=`version: 1.0

// Tabs Demo
// Shows tab bars with content switching, disabled tabs, and custom sizes.

#tabsDemo programmable() {
    pos: 50, 80

    // Section: Basic Tabs
    text(exo2_16, "Basic Tabs", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    placeholder(generated(cross(400, 40, #FF0000)), builderParameter("basicTabs")) {
        pos: 0, 40
        settings{tabButtonBuildName=>tab, tabPanel.width=>600, tabPanel.height=>200}
    }

    #basicContent(updatable) text(exo2_16, "Tab content area", #ffffff, left, 480): 15, 79

    // Section: Wide Tabs
    text(exo2_16, "Wide Tabs (custom width)", #7fdbda): 0, 295
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 317

    placeholder(generated(cross(500, 40, #FF0000)), builderParameter("wideTabs")) {
        pos: 0, 335
        settings{spacing=>10, tabButtonBuildName=>tab, tabButton.width=>180, tabButton.height=>35, tabPanel.width=>768, tabPanel.height=>150}
    }

    #wideContent(updatable) text(exo2_16, "Wide tab content", #ffffff, left, 540): 15, 379

    // Section: Disabled Tabs
    text(exo2_16, "Disabled Tabs", #7fdbda): 0, 550
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 572

    placeholder(generated(cross(400, 40, #FF0000)), builderParameter("disabledTabs")) {
        pos: 0, 590
        settings{tabButtonBuildName=>tab, tabPanel.width=>500, tabPanel.height=>100}
    }

    #disabledContent(updatable) text(exo2_16, "Disabled tab content", #ffffff, left, 480): 15, 629

    // Controls
    text(exo2_16, "Controls", #7fdbda): 0, 750
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 772
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("disableToggle")) {
        pos: 0, 790
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle disable all tabs", #aaaaaa): 60, 792
}
`,of=`version: 1.0

// Text Input Demo
// Shows text input variants, input filters, and tab navigation between fields.

#textInputDemo programmable() {
    pos: 50, 80

    // Section: Basic Styles
    text(exo2_16, "Basic Styles", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    text(exo2_light_14, "Color", #aaaaaa): 0, 30
    placeholder(generated(cross(250, 24, #FF0000)), builderParameter("colorInput")) {
        pos: 0, 48
        settings{buildName=>textInput, font=>dd, placeholder=>"Color style input...", inputWidth=>190}
    }

    text(exo2_light_14, "Grey", #aaaaaa): 270, 30
    placeholder(generated(cross(250, 24, #FF0000)), builderParameter("greyInput")) {
        pos: 270, 48
        settings{buildName=>textInputGrey, font=>dd, placeholder=>"Grey style input...", inputWidth=>190}
    }

    text(exo2_light_14, "Title Color", #aaaaaa): 0, 80
    placeholder(generated(cross(250, 30, #FF0000)), builderParameter("titleColorInput")) {
        pos: 0, 98
        settings{buildName=>textInputTitle, font=>dd, placeholder=>"Title color style...", inputWidth=>190}
    }

    text(exo2_light_14, "Title Grey", #aaaaaa): 270, 80
    placeholder(generated(cross(250, 30, #FF0000)), builderParameter("titleGreyInput")) {
        pos: 270, 98
        settings{buildName=>textInputTitleGrey, font=>dd, placeholder=>"Title grey style...", inputWidth=>190}
    }

    // Section: Features
    text(exo2_16, "Features", #7fdbda): 0, 150
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 172

    text(exo2_light_14, "Max 10 characters", #aaaaaa): 0, 180
    placeholder(generated(cross(300, 24, #FF0000)), builderParameter("maxLenInput")) {
        pos: 0, 198
        settings{buildName=>textInput, font=>dd, placeholder=>"Max 10 chars...", maxLength=>10, inputWidth=>240, width=>300}
    }

    text(exo2_light_14, "Numeric only", #aaaaaa): 320, 180
    placeholder(generated(cross(200, 24, #FF0000)), builderParameter("numericInput")) {
        pos: 320, 198
        settings{buildName=>textInput, font=>dd, placeholder=>"Numbers only...", filter=>numeric, inputWidth=>140}
    }

    text(exo2_light_14, "Read-only", #aaaaaa): 0, 230
    placeholder(generated(cross(300, 24, #FF0000)), builderParameter("readOnlyInput")) {
        pos: 0, 248
        settings{buildName=>textInputGrey, font=>dd, text=>"This is read-only", inputWidth=>240, width=>300}
    }

    text(exo2_light_14, "Disabled", #aaaaaa): 320, 230
    placeholder(generated(cross(200, 24, #FF0000)), builderParameter("disabledInput")) {
        pos: 320, 248
        settings{buildName=>textInput, font=>dd, text=>"Disabled input", inputWidth=>140}
    }

    // Section: Tab Navigation
    text(exo2_16, "Tab Navigation (Tab / Shift+Tab)", #7fdbda): 0, 300
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 322

    text(exo2_light_14, "First name", #aaaaaa): 0, 330
    placeholder(generated(cross(180, 24, #FF0000)), builderParameter("firstNameInput")) {
        pos: 0, 348
        settings{buildName=>textInput, font=>dd, placeholder=>"First name...", inputWidth=>120, width=>180}
    }

    text(exo2_light_14, "Last name", #aaaaaa): 200, 330
    placeholder(generated(cross(180, 24, #FF0000)), builderParameter("lastNameInput")) {
        pos: 200, 348
        settings{buildName=>textInput, font=>dd, placeholder=>"Last name...", inputWidth=>120, width=>180}
    }

    text(exo2_light_14, "Email", #aaaaaa): 400, 330
    placeholder(generated(cross(180, 24, #FF0000)), builderParameter("emailInput")) {
        pos: 400, 348
        settings{buildName=>textInput, font=>dd, placeholder=>"Email...", inputWidth=>120, width=>180}
    }

    // Controls
    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("enterAdvancesToggle")) {
        pos: 0, 385
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Enter advances to next field", #aaaaaa): 30, 387

    placeholder(generated(cross(20, 20, #FF0000)), builderParameter("disableAllToggle")) {
        pos: 300, 385
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Disable all inputs", #aaaaaa): 330, 387

    // Events
    text(exo2_16, "Events", #7fdbda): 0, 425
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 447
    #eventLog(updatable) text(exo2_light_14, "Interact with inputs to see events here...", #ffffff, left, 580): 0, 460
}
`,lf=`version: 1.0

// Tooltips & Panels Demo
// Hover tooltips (UITooltipHelper), click panels (UIPanelHelper),
// and rich interactive state binding (UIRichInteractiveHelper + bind metadata)

// ─── Tooltip Builds ────────────────────────────────────────

#tooltipSimple programmable(label:string="Tooltip") {
    ninepatch("ui", "Window_3x3_idle", 140, 28): 0, 0
    text(m6x11, $label, #ffffff, center, 130): 5, 8
}

#tooltipRich programmable(name:string="Item", desc:string="Description", color:color=#7fdbda) {
    ninepatch("ui", "Window_3x3_idle", 180, 60): 0, 0
    text(exo2_14, $name, $color, left, 160): 10, 8
    text(m6x11, $desc, #aaaaaa, left, 160): 10, 30
    bitmap(generated(color(160, 1, $color))): 10, 50
}

#tooltipItem programmable(name:string="Item", rarity:string="Common", damage:string="Damage: 0", color:color=#aaaaaa) {
    ninepatch("ui", "Window_3x3_idle", 190, 80): 0, 0
    bitmap(generated(color(4, 60, $color))): 10, 10
    text(exo2_14, $name, $color, left, 160): 22, 8
    text(m6x11, $rarity, #888888, left, 160): 22, 28
    text(m6x11, $damage, #cccccc, left, 160): 22, 44
    bitmap(generated(color(170, 1, $color))): 10, 66
}

// ─── Panel Builds (with interactive bind for hover/pressed) ─

#panelActions programmable(equipS:[normal, hover, pressed]=normal, dropS:[normal, hover, pressed]=normal, infoS:[normal, hover, pressed]=normal) {
    ninepatch("ui", "Window_3x3_idle", 130, 100): 0, 0
    text(m5x7, "Actions", #888888, left, 120): 10, 6

    point {
        pos: 10, 22
        @(equipS => normal)  bitmap(generated(color(110, 22, #334466))): 0, 0
        @(equipS => hover)   bitmap(generated(color(110, 22, #445577))): 0, 0
        @(equipS => pressed) bitmap(generated(color(110, 22, #223355))): 0, 0
        text(m6x11, "Equip", #7fdbda, center, 110): 0, 5
        interactive(110, 22, "equip", bind => "equipS"): 0, 0
    }

    point {
        pos: 10, 48
        @(dropS => normal)  bitmap(generated(color(110, 22, #553333))): 0, 0
        @(dropS => hover)   bitmap(generated(color(110, 22, #664444))): 0, 0
        @(dropS => pressed) bitmap(generated(color(110, 22, #442222))): 0, 0
        text(m6x11, "Drop", #ff8888, center, 110): 0, 5
        interactive(110, 22, "drop", bind => "dropS"): 0, 0
    }

    point {
        pos: 10, 74
        @(infoS => normal)  bitmap(generated(color(110, 22, #334466))): 0, 0
        @(infoS => hover)   bitmap(generated(color(110, 22, #445577))): 0, 0
        @(infoS => pressed) bitmap(generated(color(110, 22, #223355))): 0, 0
        text(m6x11, "Info", #aaaaaa, center, 110): 0, 5
        interactive(110, 22, "info", bind => "infoS"): 0, 0
    }
}

#panelColors programmable(redS:[normal, hover]=normal, greenS:[normal, hover]=normal, blueS:[normal, hover]=normal, yellowS:[normal, hover]=normal, purpleS:[normal, hover]=normal, cyanS:[normal, hover]=normal) {
    ninepatch("ui", "Window_3x3_idle", 100, 80): 0, 0
    text(m5x7, "Pick Color", #888888, left, 90): 10, 6

    // Row 1
    point {
        pos: 10, 22
        bitmap(generated(color(24, 22, #ff4444))): 0, 0
        @(redS => hover) graphics(line(#ffffff, 1, 0, 0, 23, 0); line(#ffffff, 1, 23, 0, 23, 21); line(#ffffff, 1, 23, 21, 0, 21); line(#ffffff, 1, 0, 21, 0, 0);): 0, 0
        interactive(24, 22, "colorRed", bind => "redS"): 0, 0

        bitmap(generated(color(24, 22, #44ff44))): 28, 0
        @(greenS => hover) graphics(line(#ffffff, 1, 0, 0, 23, 0); line(#ffffff, 1, 23, 0, 23, 21); line(#ffffff, 1, 23, 21, 0, 21); line(#ffffff, 1, 0, 21, 0, 0);): 28, 0
        interactive(24, 22, "colorGreen", bind => "greenS"): 28, 0

        bitmap(generated(color(24, 22, #4488ff))): 56, 0
        @(blueS => hover) graphics(line(#ffffff, 1, 0, 0, 23, 0); line(#ffffff, 1, 23, 0, 23, 21); line(#ffffff, 1, 23, 21, 0, 21); line(#ffffff, 1, 0, 21, 0, 0);): 56, 0
        interactive(24, 22, "colorBlue", bind => "blueS"): 56, 0
    }

    // Row 2
    point {
        pos: 10, 48
        bitmap(generated(color(24, 22, #ffff44))): 0, 0
        @(yellowS => hover) graphics(line(#ffffff, 1, 0, 0, 23, 0); line(#ffffff, 1, 23, 0, 23, 21); line(#ffffff, 1, 23, 21, 0, 21); line(#ffffff, 1, 0, 21, 0, 0);): 0, 0
        interactive(24, 22, "colorYellow", bind => "yellowS"): 0, 0

        bitmap(generated(color(24, 22, #ff44ff))): 28, 0
        @(purpleS => hover) graphics(line(#ffffff, 1, 0, 0, 23, 0); line(#ffffff, 1, 23, 0, 23, 21); line(#ffffff, 1, 23, 21, 0, 21); line(#ffffff, 1, 0, 21, 0, 0);): 28, 0
        interactive(24, 22, "colorPurple", bind => "purpleS"): 28, 0

        bitmap(generated(color(24, 22, #44ffff))): 56, 0
        @(cyanS => hover) graphics(line(#ffffff, 1, 0, 0, 23, 0); line(#ffffff, 1, 23, 0, 23, 21); line(#ffffff, 1, 23, 21, 0, 21); line(#ffffff, 1, 0, 21, 0, 0);): 56, 0
        interactive(24, 22, "colorCyan", bind => "cyanS"): 56, 0
    }
}

#panelManual programmable(closeS:[normal, hover, pressed]=normal) {
    ninepatch("ui", "Window_3x3_idle", 170, 65): 0, 0
    text(m6x11, "Manual close panel", #cccccc, left, 150): 10, 10
    text(m5x7, "Only closes via button below", #888888, left, 150): 10, 26

    point {
        pos: 10, 40
        @(closeS => normal)  bitmap(generated(color(60, 18, #553333))): 0, 0
        @(closeS => hover)   bitmap(generated(color(60, 18, #664444))): 0, 0
        @(closeS => pressed) bitmap(generated(color(60, 18, #442222))): 0, 0
        text(m6x11, "Close", #ff8888, center, 60): 0, 3
        interactive(60, 18, "closeBtn", bind => "closeS"): 0, 0
    }
}

// ─── Fade Panel (for Section 5) ────────────────────────────

#panelFade programmable(closeS:[normal, hover, pressed]=normal) {
    ninepatch("ui", "Window_3x3_idle", 200, 90): 0, 0
    text(exo2_14, "Fading Panel", #88cc88, left, 180): 10, 10
    text(m6x11, "This panel fades in and out", #aaaaaa, left, 180): 10, 32
    text(m5x7, "fadeIn: 0.3s  fadeOut: 0.2s", #666666, left, 180): 10, 50

    point {
        pos: 10, 64
        @(closeS => normal)  bitmap(generated(color(60, 18, #553333))): 0, 0
        @(closeS => hover)   bitmap(generated(color(60, 18, #664444))): 0, 0
        @(closeS => pressed) bitmap(generated(color(60, 18, #442222))): 0, 0
        text(m6x11, "Close", #ff8888, center, 60): 0, 3
        interactive(60, 18, "closeBtn", bind => "closeS"): 0, 0
    }
}

// ─── Combo Panel (for Section 4) ───────────────────────────

#panelCombo programmable(equipS:[normal, hover, pressed]=normal, discardS:[normal, hover, pressed]=normal) {
    ninepatch("ui", "Window_3x3_idle", 140, 78): 0, 0
    text(m5x7, "Item Options", #888888, left, 120): 10, 6

    point {
        pos: 10, 22
        @(equipS => normal)  bitmap(generated(color(120, 22, #334466))): 0, 0
        @(equipS => hover)   bitmap(generated(color(120, 22, #445577))): 0, 0
        @(equipS => pressed) bitmap(generated(color(120, 22, #223355))): 0, 0
        text(m6x11, "Equip", #7fdbda, center, 120): 0, 5
        interactive(120, 22, "comboEquip", bind => "equipS"): 0, 0
    }

    point {
        pos: 10, 48
        @(discardS => normal)  bitmap(generated(color(120, 22, #553333))): 0, 0
        @(discardS => hover)   bitmap(generated(color(120, 22, #664444))): 0, 0
        @(discardS => pressed) bitmap(generated(color(120, 22, #442222))): 0, 0
        text(m6x11, "Discard", #ff8888, center, 120): 0, 5
        interactive(120, 22, "comboDiscard", bind => "discardS"): 0, 0
    }
}

// ─── Main Layout ───────────────────────────────────────────

#tooltipsPanelsDemo programmable(
    aboveS:[normal, hover, pressed]=normal, belowS:[normal, hover, pressed]=normal,
    leftS:[normal, hover, pressed]=normal, rightS:[normal, hover, pressed]=normal,
    swordS:[normal, hover]=normal, shieldS:[normal, hover]=normal, crownS:[normal, hover]=normal,
    actionsS:[normal, hover, pressed]=normal, colorsS:[normal, hover, pressed]=normal, manualS:[normal, hover, pressed]=normal,
    comboS:[normal, hover, pressed]=normal,
    fadeInstantS:[normal, hover, pressed]=normal, fadeSmoothS:[normal, hover, pressed]=normal
) {
    pos: 50, 80

    // ── Section 1: Tooltip Positioning ─────────────────────
    text(exo2_16, "Tooltip Positioning", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22
    text(exo2_light_14, "Hover to see tooltips at different positions. Buttons highlight on hover/press (bind).", #aaaaaa, left, 700): 0, 30

    // Above
    point {
        pos: 0, 60
        @(aboveS => normal)  bitmap(generated(color(120, 40, #334466))): 0, 0
        @(aboveS => hover)   bitmap(generated(color(120, 40, #445588))): 0, 0
        @(aboveS => pressed) bitmap(generated(color(120, 40, #283a54))): 0, 0
        text(m6x11, "Above", #7fdbda, center, 120): 0, 13
        interactive(120, 40, "btnAbove", tooltip => "tooltipSimple", label => "Above!", bind => "aboveS"): 0, 0
    }

    // Below
    point {
        pos: 140, 60
        @(belowS => normal)  bitmap(generated(color(120, 40, #334466))): 0, 0
        @(belowS => hover)   bitmap(generated(color(120, 40, #445588))): 0, 0
        @(belowS => pressed) bitmap(generated(color(120, 40, #283a54))): 0, 0
        text(m6x11, "Below", #7fdbda, center, 120): 0, 13
        interactive(120, 40, "btnBelow", tooltip => "tooltipSimple", label => "Below!", bind => "belowS"): 0, 0
    }

    // Left
    point {
        pos: 280, 60
        @(leftS => normal)  bitmap(generated(color(120, 40, #334466))): 0, 0
        @(leftS => hover)   bitmap(generated(color(120, 40, #445588))): 0, 0
        @(leftS => pressed) bitmap(generated(color(120, 40, #283a54))): 0, 0
        text(m6x11, "Left", #7fdbda, center, 120): 0, 13
        interactive(120, 40, "btnLeft", tooltip => "tooltipSimple", label => "Left!", bind => "leftS"): 0, 0
    }

    // Right
    point {
        pos: 420, 60
        @(rightS => normal)  bitmap(generated(color(120, 40, #334466))): 0, 0
        @(rightS => hover)   bitmap(generated(color(120, 40, #445588))): 0, 0
        @(rightS => pressed) bitmap(generated(color(120, 40, #283a54))): 0, 0
        text(m6x11, "Right", #7fdbda, center, 120): 0, 13
        interactive(120, 40, "btnRight", tooltip => "tooltipSimple", label => "Right!", bind => "rightS"): 0, 0
    }

    #statusTooltip(updatable) text(m6x11, "Hover a button to see a tooltip", #666666): 0, 110

    // ── Section 2: Rich Tooltips ───────────────────────────
    text(exo2_16, "Rich Tooltips", #7fdbda): 0, 145
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 167
    text(exo2_light_14, "Metadata-driven content. Items use events:[hover] filter + hover border highlight.", #aaaaaa, left, 700): 0, 175

    // Item: Sword (instant) — events: [hover] = hover-only, no click/push
    point {
        pos: 0, 205
        ninepatch("ui", "Window_3x3_idle", 140, 50): 0, 0
        @(swordS => hover) graphics(line(#aaaaaa, 1, 0, 0, 139, 0); line(#aaaaaa, 1, 139, 0, 139, 49); line(#aaaaaa, 1, 139, 49, 0, 49); line(#aaaaaa, 1, 0, 49, 0, 0);): 0, 0
        text(m6x11, "Iron Sword", #aaaaaa, left, 120): 10, 8
        text(m5x7, "common  |  delay: 0s", #666666, left, 120): 10, 26
        interactive(140, 50, "itemSword", tooltip => "tooltipItem", name => "Iron Sword", rarity => "Common", damage => "Damage: 12", color => "#aaaaaa", bind => "swordS", events: [hover]): 0, 0
    }

    // Item: Shield (default delay)
    point {
        pos: 160, 205
        ninepatch("ui", "Window_3x3_idle", 140, 50): 0, 0
        @(shieldS => hover) graphics(line(#7fdbda, 1, 0, 0, 139, 0); line(#7fdbda, 1, 139, 0, 139, 49); line(#7fdbda, 1, 139, 49, 0, 49); line(#7fdbda, 1, 0, 49, 0, 0);): 0, 0
        text(m6x11, "Mana Shield", #7fdbda, left, 120): 10, 8
        text(m5x7, "rare  |  delay: 0.3s", #666666, left, 120): 10, 26
        interactive(140, 50, "itemShield", tooltip => "tooltipItem", name => "Mana Shield", rarity => "Rare", damage => "Block: 28", color => "#7fdbda", bind => "shieldS", events: [hover]): 0, 0
    }

    // Item: Crown (slow delay)
    point {
        pos: 320, 205
        ninepatch("ui", "Window_3x3_idle", 140, 50): 0, 0
        @(crownS => hover) graphics(line(#ffeb3b, 1, 0, 0, 139, 0); line(#ffeb3b, 1, 139, 0, 139, 49); line(#ffeb3b, 1, 139, 49, 0, 49); line(#ffeb3b, 1, 0, 49, 0, 0);): 0, 0
        text(m6x11, "Dragon Crown", #ffeb3b, left, 120): 10, 8
        text(m5x7, "legendary  |  delay: 1s", #666666, left, 120): 10, 26
        interactive(140, 50, "itemCrown", tooltip => "tooltipItem", name => "Dragon Crown", rarity => "Legendary", damage => "Power: 99", color => "#ffeb3b", bind => "crownS", events: [hover]): 0, 0
    }

    #statusRich(updatable) text(m6x11, "Hover an item card to see a rich tooltip", #666666): 0, 265

    // ── Section 3: Click Panels ────────────────────────────
    text(exo2_16, "Click Panels", #ffeb3b): 0, 300
    bitmap(generated(color(700, 1, #ffeb3b33))): 0, 322
    text(exo2_light_14, "Click to open panels. Panel buttons also use bind for hover/pressed states.", #aaaaaa, left, 700): 0, 330

    // Actions panel trigger
    point {
        pos: 0, 360
        @(actionsS => normal)  bitmap(generated(color(120, 40, #443366))): 0, 0
        @(actionsS => hover)   bitmap(generated(color(120, 40, #554477))): 0, 0
        @(actionsS => pressed) bitmap(generated(color(120, 40, #332255))): 0, 0
        text(m6x11, "Actions", #ffeb3b, center, 120): 0, 13
        interactive(120, 40, "triggerActions", panel => "panelActions", bind => "actionsS"): 0, 0
    }

    // Color picker trigger
    point {
        pos: 140, 360
        @(colorsS => normal)  bitmap(generated(color(120, 40, #336644))): 0, 0
        @(colorsS => hover)   bitmap(generated(color(120, 40, #447755))): 0, 0
        @(colorsS => pressed) bitmap(generated(color(120, 40, #225533))): 0, 0
        text(m6x11, "Colors", #ffeb3b, center, 120): 0, 13
        interactive(120, 40, "triggerColors", panel => "panelColors", bind => "colorsS"): 0, 0
    }

    // Manual close trigger
    point {
        pos: 280, 360
        @(manualS => normal)  bitmap(generated(color(120, 40, #664433))): 0, 0
        @(manualS => hover)   bitmap(generated(color(120, 40, #775544))): 0, 0
        @(manualS => pressed) bitmap(generated(color(120, 40, #553322))): 0, 0
        text(m6x11, "Manual", #ffeb3b, center, 120): 0, 13
        interactive(120, 40, "triggerManual", panel => "panelManual", bind => "manualS"): 0, 0
    }

    #statusPanel(updatable) text(m6x11, "Click a button to open a panel", #666666): 0, 510

    // ── Section 4: Tooltip + Panel Combo ───────────────────
    text(exo2_16, "Tooltip + Panel Combo", #b0b0b0): 0, 540
    bitmap(generated(color(700, 1, #b0b0b033))): 0, 562
    text(exo2_light_14, "Hover shows tooltip. Click opens panel (tooltip hides). Demonstrates lifecycle.", #aaaaaa, left, 700): 0, 570

    point {
        pos: 0, 600
        ninepatch("ui", "Window_3x3_idle", 160, 50): 0, 0
        @(comboS => hover) graphics(line(#ff88ff, 1, 0, 0, 159, 0); line(#ff88ff, 1, 159, 0, 159, 49); line(#ff88ff, 1, 159, 49, 0, 49); line(#ff88ff, 1, 0, 49, 0, 0);): 0, 0
        text(m6x11, "Magic Ring", #ff88ff, left, 140): 10, 8
        text(m5x7, "hover + click me", #666666, left, 140): 10, 26
        interactive(160, 50, "comboItem", tooltip => "tooltipRich", panel => "panelCombo", name => "Magic Ring", desc => "Hover=tooltip, Click=panel", color => "#ff88ff", bind => "comboS"): 0, 0
    }

    #statusCombo(updatable) text(m6x11, "Hover for tooltip, click for panel", #666666): 0, 660

    // ── Section 5: Fade Transitions ─────────────────────
    text(exo2_16, "Fade Transitions", #88cc88): 0, 700
    bitmap(generated(color(700, 1, #88cc8833))): 0, 722
    text(exo2_light_14, "Panels with configurable fade-in/fade-out via TweenManager. Tooltips above also fade smoothly.", #aaaaaa, left, 700): 0, 730

    // Instant panel (no fade — existing behavior)
    point {
        pos: 0, 760
        @(fadeInstantS => normal)  bitmap(generated(color(140, 40, #444444))): 0, 0
        @(fadeInstantS => hover)   bitmap(generated(color(140, 40, #555555))): 0, 0
        @(fadeInstantS => pressed) bitmap(generated(color(140, 40, #333333))): 0, 0
        text(m6x11, "Instant Panel", #cccccc, center, 140): 0, 13
        interactive(140, 40, "fadeInstant", panel => "panelFade", bind => "fadeInstantS"): 0, 0
    }

    // Fading panel (fadeIn: 0.3, fadeOut: 0.2)
    point {
        pos: 160, 760
        @(fadeSmoothS => normal)  bitmap(generated(color(140, 40, #335533))): 0, 0
        @(fadeSmoothS => hover)   bitmap(generated(color(140, 40, #447744))): 0, 0
        @(fadeSmoothS => pressed) bitmap(generated(color(140, 40, #224422))): 0, 0
        text(m6x11, "Fading Panel", #88cc88, center, 140): 0, 13
        interactive(140, 40, "fadeSmooth", panel => "panelFade", bind => "fadeSmoothS"): 0, 0
    }

    #statusFade(updatable) text(m6x11, "Click to compare instant vs fading panels", #666666): 0, 810
}
`,sf=`version: 1.0

// NavScreen Carousel — 7 feature highlight slides
// Controlled by currentSlide parameter, switched via setParameter() in NavScreen.hx

// ── Helper: animated ninepatch for slide 2 ────────────────────
#npPreview programmable(w:uint=200, h:uint=80) {
    ninepatch("ui", "Window_3x3_idle", $w, $h): 0, 0
}

// ── Helper: animated health bar for slide 3 ───────────────────
#condBar programmable(value:uint=50) {
    bitmap(generated(color(200, 14, #222233))): 0, 0
    @(value >= 50) bitmap(generated(color($value * 2, 14, #44cc44))): 0, 0
    @(value < 50) bitmap(generated(color($value * 2, 14, #cc4444))): 0, 0
}

// ── Particle systems for slide 6 (top-level, managed by Haxe) ─
#navFireworkLauncher particles {
    count: 6
    emit: cone(dist: 0, distRand: 3, angle: 270deg, angleSpread: 15deg)
    tiles: file("circle_hard.png")
    loop: true
    maxLife: 1.0
    lifeRandom: 0.3
    speed: 90
    speedRandom: 0.3
    gravity: 60
    gravityAngle: 90deg
    size: 0.35
    fadeIn: 0.0
    fadeOut: 0.8
    colorStops: 0.0 #FFFFFF, 1.0 #FFFF88
    blendMode: add
    emitSync: 0.15
    bounds: kill, box(x: -260, y: -150, w: 520, h: 225)
    subEmitters: [{
        groupId: "navFireworkBurst"
        trigger: ondeath
        probability: 1.0
        burstCount: 18
    }]
}

#navFireworkBurst particles {
    count: 0
    emit: point(dist: 0, distRand: 20)
    tiles: file("star.png") file("dot.png")
    loop: false
    maxLife: 1.4
    lifeRandom: 0.3
    speed: 70
    speedRandom: 0.5
    gravity: 40
    gravityAngle: 90deg
    size: 0.35
    sizeRandom: 0.3
    fadeIn: 0.0
    fadeOut: 0.5
    colorStops: 0.0 #FFFFFF, 0.3 #88DDFF, 0.7 #FF44AA, 1.0 #4400AA
    blendMode: add
    rotationSpeed: 60deg
    rotationSpeedRandom: 0.5
    bounds: bounce(0.6), box(x: -260, y: -150, w: 520, h: 225)
}

#carouselContent programmable(currentSlide:0..6=0, condValue:uint=50, condState:0..2=0, npW:uint=200, npH:uint=80) {

  // Dark background for carousel area
  bitmap(generated(color(540, 240, #0d0d1a))): 0, 0

  // ── Slide 0: Sprite Animations ──────────────────────────────
  @(currentSlide => 0) point {
    pos: 20, 15

    text(m6x11, "shooting", #888888): 30, 0
    bitmap(generated(color(64, 64, #181828))): 20, 14
    stateAnim construct("s",
      "s" => sheet "crew2", marine_r_shooting_u, 10, loop
    ): 52, 62

    text(m6x11, "killed", #888888): 130, 0
    bitmap(generated(color(64, 64, #181828))): 120, 14
    stateAnim construct("s",
      "s" => sheet "crew2", marine_l_killed, 10, loop
    ): 152, 62

    text(m6x11, "idle", #888888): 230, 0
    bitmap(generated(color(64, 64, #181828))): 220, 14
    stateAnim construct("s",
      "s" => sheet "crew2", marine_r_standing, 10, loop
    ): 252, 62

    text(exo2_black_16, "Sprite Animations", #7fdbda): 0, 110
    text(m5x7, "State machine animations from .anim files", #888888): 0, 132
  }

  // ── Slide 1: Visual Filters ─────────────────────────────────
  @(currentSlide => 1) point {
    pos: 20, 15

    // Normal
    text(m6x11, "normal", #888888): 30, 0
    bitmap(generated(color(64, 64, #181828))): 20, 14
    @scale(2) bitmap(sheet("crew2", "marine_r_standing")): 35, 20

    // Glow
    text(m6x11, "glow", #888888): 150, 0
    bitmap(generated(color(64, 64, #181828))): 140, 14
    point {
      pos: 155, 20
      filter: glow(color: #ffaa00, alpha: 0.8, radius: 10, smoothColor: true)
      @scale(2) bitmap(sheet("crew2", "marine_r_standing")): 0, 0
    }

    // Outline
    text(m6x11, "outline", #888888): 280, 0
    bitmap(generated(color(64, 64, #181828))): 270, 14
    point {
      pos: 285, 20
      filter: outline(2, #ff4444)
      @scale(2) bitmap(sheet("crew2", "marine_r_standing")): 0, 0
    }

    text(exo2_black_16, "Visual Filters", #7fdbda): 0, 110
    text(m5x7, "GPU filters: glow, outline, blur, saturate, dropShadow...", #888888): 0, 132
  }

  // ── Slide 2: 9-Patch Animated Resize ────────────────────────
  @(currentSlide => 2) point {
    pos: 20, 15

    dynamicRef($npPreview, w=>$npW, h=>$npH): 0, 0
    #npSizeText(updatable) text(m6x11, "200 x 80", #aaaaaa): 0, 90

    text(exo2_black_16, "9-Patch Panels", #7fdbda): 0, 110
    text(m5x7, "Scalable UI panels — define once, render at any size", #888888): 0, 132
  }

  // ── Slide 3: Conditionals (animated) ────────────────────────
  @(currentSlide => 3) point {
    pos: 20, 15

    // A/B/C state cycling
    text(m6x11, "param state:", #888888): 0, 0
    @(condState => 0) text(m6x11, "A", #44ff44): 100, 0
    @(condState => 0) text(m6x11, "(not C)", #666666): 120, 0
    @(condState => 1) text(m6x11, "B", #ff4444): 100, 0
    @(condState => 1) text(m6x11, "(not C)", #666666): 120, 0
    @(condState => 2) text(m6x11, "C", #4444ff): 100, 0

    // Active indicator
    text(m6x11, "A", #888888): 0, 24
    text(m6x11, "B", #888888): 20, 24
    text(m6x11, "C", #888888): 40, 24
    @(condState => 0) bitmap(generated(color(8, 2, #44ff44))): 0, 36
    @(condState => 1) bitmap(generated(color(8, 2, #ff4444))): 20, 36
    @(condState => 2) bitmap(generated(color(8, 2, #4444ff))): 40, 36

    // Animated health bar
    text(m6x11, "value-driven bar:", #888888): 0, 52
    dynamicRef($condBar, value=>$condValue): 0, 68
    #condBarValue(updatable) text(m6x11, "50", #ffffff, right, 195): 0, 68

    text(exo2_black_16, "Runtime Conditionals", #7fdbda): 0, 110
    text(m5x7, "@(param=>value) switching, expressions, and negation", #888888): 0, 132
  }

  // ── Slide 4: Repeatable Patterns ────────────────────────────
  @(currentSlide => 4) point {
    pos: 20, 15

    // Grid with div/mod and fading
    text(m6x11, "div/mod grid:", #888888): 0, 0
    tileGroup {
      pos: 0, 14
      repeatable($i, step(20, dx:0)) {
        @alpha(1.0 - $i / 20.0) bitmap(generated(color(14, 14, #ff4444))): ($i % 5) * 18, ($i div 5) * 18
      }
    }

    // Marine afterimage
    text(m6x11, "afterimage trail:", #888888): 130, 0
    point {
      pos: 130, 14
      repeatable($n, step(5, dx:6, dy:1)) {
        @alpha(1.0 - $n/5.0) scale(2) bitmap(sheet("crew2", "marine_r_shooting_d")): 0, 50
      }
    }

    // Fading row
    text(m6x11, "fading tileGroup:", #888888): 330, 0
    tileGroup {
      pos: 330, 14
      repeatable($j, step(8, dx:6, dy:1)) {
        @alpha(1.0 - $j/8.0) bitmap(generated(color(20, 20, white))): 0, 0
      }
    }

    text(exo2_black_16, "Repeatable Patterns", #7fdbda): 0, 110
    text(m5x7, "repeatable($i, step(...)) with expressions for alpha, position, color", #888888): 0, 132
  }

  // ── Slide 5: Pixel Art & Text ───────────────────────────────
  @(currentSlide => 5) point {
    pos: 20, 15

    // Crossed lines
    pixels (
      line 0, 0, 40, 40, #ff4444
      line 40, 0, 0, 40, #44ff44
      line 0, 20, 40, 20, #4444ff
      line 20, 0, 20, 40, #ffff44
    ) {
      scale: 2
    }

    // Font samples
    text(m6x11, "m6x11 pixel font", #ff4444): 160, 0
    text(m5x7, "m5x7 tiny font", #44ff44): 160, 16
    text(exo2_14, "Exo2 SDF scalable", #4488cc): 160, 30
    text(pixeled6, "pixeled6 retro", #ffcc44): 160, 50

    // Alignment demo
    text(m6x11, "text alignment:", #888888): 160, 76
    bitmap(generated(color(200, 1, #333333))): 160, 90
    text(m6x11, "left", #ff4444, left): 160, 92
    text(m6x11, "center", #44ff44, center, 200): 160, 92
    text(m6x11, "right", #4444ff, right, 200): 160, 92

    text(exo2_black_16, "Pixel Art & Text", #7fdbda): 0, 110
    text(m5x7, "Procedural line drawing and multi-font text rendering", #888888): 0, 132
  }

  // ── Slide 6: Particle Effects (labels only, particles managed by Haxe) ──
  @(currentSlide => 6) point {
    pos: 20, 15

    text(exo2_black_16, "Particle Effects", #7fdbda): 0, 110
    text(m5x7, "Fireworks with subEmitters — burst spawns on particle death", #888888): 0, 132
  }

  // ── Dot indicators ─────────────────────────────────────────────
  // Base dots (always visible, inactive color)
  tileGroup {
    pos: 98, 250
    repeatable($d, step(7, dx:18)) {
      bitmap(generated(color(10, 10, #444444))): 0, 0
    }
  }
  // Active dot overlay (only matching slide visible)
  @(currentSlide => 0) bitmap(generated(color(10, 10, #7fdbda))): 98, 250
  @(currentSlide => 1) bitmap(generated(color(10, 10, #7fdbda))): 116, 250
  @(currentSlide => 2) bitmap(generated(color(10, 10, #7fdbda))): 134, 250
  @(currentSlide => 3) bitmap(generated(color(10, 10, #7fdbda))): 152, 250
  @(currentSlide => 4) bitmap(generated(color(10, 10, #7fdbda))): 170, 250
  @(currentSlide => 5) bitmap(generated(color(10, 10, #7fdbda))): 188, 250
  @(currentSlide => 6) bitmap(generated(color(10, 10, #7fdbda))): 206, 250
}
`,cf=`version: 1.0

// NavScreen layout — positions, info panel, control buttons
// Carousel visual and particles are built separately, positioned via layouts

layouts {
    // Component positions (carousel visual, particle center)
    #positions list {
        point: 40, 42
        point: 310, 200
    }

    // Category header positions
    #catHeaders list {
        point: 40, 310
        point: 40, 400
        point: 40, 490
        point: 40, 548
        point: 40, 606
        point: 40, 696
    }

    // All nav card positions (colWidth=155, spacingX=5, 7 per row)
    #navCards list {
        // Advanced Features (9, wraps to 2 rows)
        point: 40, 330
        point: 200, 330
        point: 360, 330
        point: 520, 330
        point: 680, 330
        point: 840, 330
        point: 1000, 330
        point: 40, 362
        point: 200, 362
        // UI Components (12, wraps to 2 rows)
        point: 40, 420
        point: 200, 420
        point: 360, 420
        point: 520, 420
        point: 680, 420
        point: 840, 420
        point: 1000, 420
        point: 40, 452
        point: 200, 452
        point: 360, 452
        point: 520, 452
        point: 680, 452
        // Layout & Composition (6)
        point: 40, 510
        point: 200, 510
        point: 360, 510
        point: 520, 510
        point: 680, 510
        point: 840, 510
        // Graphics & Rendering (6)
        point: 40, 568
        point: 200, 568
        point: 360, 568
        point: 520, 568
        point: 680, 568
        point: 840, 568
        // Animation & Effects (8, wraps to 2 rows)
        point: 40, 626
        point: 200, 626
        point: 360, 626
        point: 520, 626
        point: 680, 626
        point: 840, 626
        point: 1000, 626
        point: 40, 658
        // Game-Like Demos (10, wraps to 2 rows)
        point: 40, 716
        point: 200, 716
        point: 360, 716
        point: 520, 716
        point: 680, 716
        point: 840, 716
        point: 1000, 716
        point: 40, 748
        point: 200, 748
        point: 360, 748
    }
}

#navLayout programmable() {
    // Title
    text(exo2_black_30, "hx-multianim Showcase", #ffffff): 40, 8

    // Info panel (right side of carousel)
    point {
        pos: 600, 42
        ninepatch("ui", "Window_3x3_idle", 450, 240): 0,0
        #slideTitle(updatable) text(exo2_black_20, "Sprite Animations", #7fdbda, left, 420): 15,15
        #slideDesc(updatable) text(exo2_light_14, "Description", #aaaaaa, left, 420): 15,50
        text(m6x11, "Syntax:", #555555, left, 60): 15,90
        #slideSyntax(updatable) text(m5x7, "syntax example", #44ff44, left, 420): 15,106
        placeholder(generated(cross(140, 30, #FF0000)), builderParameter("viewDemoButton")) {
            pos: 15,190
        }
    }

    // Carousel control buttons
    placeholder(generated(cross(26, 22, #FF0000)), builderParameter("prevBtn")): 40, 286
    placeholder(generated(cross(26, 22, #FF0000)), builderParameter("pauseBtn")): 70, 286
    placeholder(generated(cross(26, 22, #FF0000)), builderParameter("playBtn")): 70, 286
    placeholder(generated(cross(26, 22, #FF0000)), builderParameter("nextBtn")): 100, 286
}
`,df=`version: 1.0

// Radio Button Styles Builder
// #radio    - Small radio button (ui atlas: RadioButton_off/on_*)
// #radio2   - Large radio button (ui atlas: RadioButton2_off/on_*)
// Radio group layouts for vertical and horizontal arrangements

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

#radioButtonsVertical programmable(count:int){
    repeatable($index, step($count, dy:30)) {
        placeholder(generated(cross(15, 15, #FF0000)), callback("checkbox", $index)):0,0
        text(m6x11, callback("label", $index), 0xffffffff, left, 120): 24,4
    }
}

#radioButtonsHorizontal programmable(count:int){
    repeatable($index, step($count, dx:120)) {
        placeholder(generated(cross(15, 15, #FF0000)), callback("checkbox", $index)):0,0
        text(m6x11, callback("label", $index), 0xffffffff, left, 120): 24,4
    }
}
`,uf=`version: 1.0

      #main palette {
      #1a1a1a  #2c5f7c  #4a90a4  #7fdbda  #ff7f50  #ff4444  #4caf50  #ffeb3b  #ffffff  #666666  #b0b0b0  #000000
      }

  #slider programmable(status:[hover, pressed, normal]=normal, value:0..100=0, size:[100,200,300], disabled:[true, false]) {
    
    @if(size=>300) point {
      ninepatch("ui", "Sliderbar_H_3x1", 310, 8) {
        grid: 3, 1;
        #start point:$grid.pos(0, -1)
        #end point:$grid.pos(100, -1)
        #slider @(status=>hover)  bitmap(sheet("ui", "Slider_button_hover")):$grid.pos($value,-1)
        #slider @(status=>normal)  bitmap(sheet("ui", "Slider_button_idle")):$grid.pos($value,-1)
        #slider @(status=>pressed)  bitmap(sheet("ui", "Slider_button_pressed")):$grid.pos($value,-1)
        #slider @(status=>*, disabled=>true)  bitmap(sheet("ui", "Slider_button_disabled")):$grid.pos($value,-1)
      }
    
    }
     @(size=>200, value=>*, status=>*) point {
      
      ninepatch("ui", "Sliderbar_H_3x1", 210, 8) {
        grid:2, 1
        #start point:$grid.pos(0, -1)
        #end point:$grid.pos(100, -1)

        #slider @(status=>hover)  bitmap(sheet("ui", "Slider_button_hover")):$grid.pos($value,-1)
        #slider @(status=>normal)  bitmap(sheet("ui", "Slider_button_idle")):$grid.pos($value,-1)
        #slider @(status=>pressed)  bitmap(sheet("ui", "Slider_button_pressed")):$grid.pos($value,-1)
        #slider @(status=>*, disabled=>true)  bitmap(sheet("ui", "Slider_button_disabled")):$grid.pos($value,-1)
        
      
    }
    }
     
     @(size=>100, value=>*) point {
      
      ninepatch("ui", "Sliderbar_H_3x1", 110, 8) {
        grid:1, 1
        #start point:$grid.pos(0, -1)
        #end point:$grid.pos(100, -1)

        #slider @(status=>hover)  bitmap(sheet("ui", "Slider_button_hover")):$grid.pos($value,-1)
        #slider @(status=>normal)  bitmap(sheet("ui", "Slider_button_idle")):$grid.pos($value,-1)
        #slider @(status=>pressed)  bitmap(sheet("ui", "Slider_button_pressed")):$grid.pos($value,-1)
        #slider @(status=>*, disabled=>true)  bitmap(sheet("ui", "Slider_button_disabled")):$grid.pos($value,-1)
      
    }
    }
  }


 #button programmable(status:[hover, pressed,normal], disabled:[true, false], buttonText="Button", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffffff, textShadow:[true, false]=false) {
      @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
      @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
      @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
      @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0

      @(textShadow=>false) text($font, $buttonText, $fontColor, center, $width): 0, ($height - $ctx.font($font).lineHeight) / 2
      @(textShadow=>true) text($font, $buttonText, $fontColor, center, $width, dropShadowXY: 1, 1): 0, ($height - $ctx.font($font).lineHeight) / 2
}

 #colorButton programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="", width:uint=60, height:uint=22, color:int=0xFFff0000) {
      @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
      @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
      @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
      @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0
      bitmap(generated(color($width - 8, $height - 8, $color))): 4, 4
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
     placeholder(generated(cross(15, 15, white)), builderParameter("checkbox")):0,0
      text($font, $title, white, left): 40,4
    }
}


#radioButtons programmable(count:int){
      repeatable($index, step($count, dy:20)) {
            placeholder(generated(cross(15, 15, white)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffffff, left, 120): 24,4
            
      }
}

#radioButtonsHorizontal programmable(count:int){
      repeatable($index, step($count, dx:120 )) {
            placeholder(generated(cross(15, 15, white)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffffff, left, 120): 24,4
            
      }
}

#radioButtonsVertical programmable(count:int){
      repeatable($index, step($count, dy:30 )) {
            placeholder(generated(cross(15, 15, white)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffffff, left, 120): 24,4
            
      }
}


#dropdown programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled,normal], panel:[open, closed], font="m6x11", fontColor:int=0xffffffff) {
      
      #panelPoint (updatable) point: 0, 30;
      //placeholder(generated(cross(120, 200)), builderParameter("panel")):5,10
      @(status=>hover) ninepatch("ui", "dropdown-button-hover", 120, 30);
      @(status=>normal) ninepatch("ui", "dropdown-button-idle", 120, 30);
      @(status=>pressed) ninepatch("ui", "dropdown-button-pressed", 120, 30);
      @(status=>disabled) ninepatch("ui", "dropdown-button-disabled", 120, 30);
      @(panel=>closed) bitmap(sheet("ui", "icon_drop_fold_idle")):108,17
      @(panel=>open) bitmap(sheet("ui", "icon_drop_open")):108,17
      #selectedName(updatable) text($font, callback("selectedName"), $fontColor, center, 120): -4,6
      // @(images=>placeholder) placeholder(generated(cross(15, 15)), callback("test")):8,5
      settings{transitionTimer:float=>0.2}
}

#dropdown-w programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled, normal], panel:[open, closed], btnWidth:uint=120, btnHeight:uint=30, font="m6x11", fontColor:int=0xffffffff) {
      #panelPoint (updatable) point: 0, $btnHeight;
      @(status=>hover) ninepatch("ui", "dropdown-button-hover", $btnWidth, $btnHeight);
      @(status=>normal) ninepatch("ui", "dropdown-button-idle", $btnWidth, $btnHeight);
      @(status=>pressed) ninepatch("ui", "dropdown-button-pressed", $btnWidth, $btnHeight);
      @(status=>disabled) ninepatch("ui", "dropdown-button-disabled", $btnWidth, $btnHeight);
      @(panel=>closed) bitmap(sheet("ui", "icon_drop_fold_idle")): $btnWidth - 12, $btnHeight / 2 + 2
      @(panel=>open) bitmap(sheet("ui", "icon_drop_open")): $btnWidth - 12, $btnHeight / 2 + 2
      #selectedName(updatable) text($font, callback("selectedName"), $fontColor, center, $btnWidth): -4, ($btnHeight - $ctx.font($font).lineHeight) / 2
      settings{transitionTimer:float=>0.2}
}

#dropdown-shadow programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled, normal], panel:[open, closed], font="m6x11", fontColor:int=0xffffffff) {
      #panelPoint (updatable) point: 0, 30;
      @(status=>hover) ninepatch("ui", "dropdown-button-hover", 120, 30);
      @(status=>normal) ninepatch("ui", "dropdown-button-idle", 120, 30);
      @(status=>pressed) ninepatch("ui", "dropdown-button-pressed", 120, 30);
      @(status=>disabled) ninepatch("ui", "dropdown-button-disabled", 120, 30);
      @(panel=>closed) bitmap(sheet("ui", "icon_drop_fold_idle")):108,17
      @(panel=>open) bitmap(sheet("ui", "icon_drop_open")):108,17
      #selectedName(updatable) text($font, callback("selectedName"), $fontColor, center, 120, dropShadowXY: 1, -1): -4,6
      settings{transitionTimer:float=>0.2}
}

#list-item-w programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, normal], selected:[true, false], disabled:[true, false], tile:tile, itemWidth:uint=114, itemHeight:uint=20, index:uint=0, title="title", font="m6x11", fontColor:int=0xffffffff) {
        @(status=>normal, selected=>false, disabled=>false) ninepatch("ui", "droppanel-mid-idle", $itemWidth+4, $itemHeight): -2,0
        @(status=>normal, selected=>true, disabled=>false) ninepatch("ui", "droppanel-mid-pressed", $itemWidth+4, $itemHeight): -2,0
        @(status=>pressed, disabled=>false) ninepatch("ui", "droppanel-mid-pressed", $itemWidth+4, $itemHeight) {
          pos:-2,0;
          alpha:0.1;
          blendMode: alphaAdd;
        }
        @(status=>hover, disabled=>false) ninepatch("ui", "droppanel-mid-hover", $itemWidth+4, $itemHeight) {
          pos:-2,0;
          alpha:0.1;
          blendMode: alphaAdd;
        }
        @(disabled=>true) ninepatch("ui", "droppanel-mid-disabled", $itemWidth+4, $itemHeight): -2,0
        text($font, $title, $fontColor, left, $itemWidth): 24, ($itemHeight - $ctx.font($font).lineHeight) / 2
        @(images=>placeholder) placeholder(generated(cross(15, 15, white)), callback("test")):5, ($itemHeight - 15) / 2
        @(images=>tile) bitmap($tile):5, ($itemHeight - 15) / 2
        interactive($itemWidth, $itemHeight, $index);
        settings{height:float=>$itemHeight, font:string=>$font, fontColor:int=>$fontColor}
}

#list-item-120 programmable(images:[none,placeholder,tile]=placeholder,status:[hover, pressed, normal], selected:[true, false], disabled:[true, false], tile:tile, itemWidth:uint=114,  index:uint=0, title="title", font="m6x11", fontColor:int=0xffffffff) {

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

        text($font, $title, $fontColor, left, 120): 24,4
        @(images=>placeholder) placeholder(generated(cross(15, 15, white)), callback("test")):5,3
        @(images=>tile) bitmap($tile):5,3
        interactive($itemWidth , 20, $index);
        settings{height:float=>20, font:string=>$font, fontColor:int=>$fontColor}
}

#list-panel programmable(width:uint=200, height:uint=200, topClearance:uint = 0) {
  
  ninepatch("ui", "Window_3x3_idle", $width+4, $height+8+$topClearance): -2,-4-$topClearance
  placeholder(generated(cross($width, $height, white)), builderParameter("mask")):0,0
  #scrollbar @layer(100) point: $width - 4, 0
}

#scrollbar programmable(panelHeight:uint=100, scrollableHeight:uint=200, scrollPosition:uint = 0) {

ninepatch("ui", "scrollbar-1", 4, $panelHeight * $panelHeight / $scrollableHeight): 0, $scrollPosition*$panelHeight/$scrollableHeight
  settings{scrollSpeed:float=>250}
}


#okCancelDialog programmable(dialogText = "Your text here") {
      pos:400,200

      ninepatch("ui", "Droppanel_3x3_idle", 550, 300): 0,0
       #dialogText(updatable) text(dd, $dialogText, #ffffff00, center, 400): 50,50
      point {
        pos: 50,250
        placeholder(generated(cross(20, 20, white)), builderParameter("ok")) {

          
        }
        placeholder(generated(cross(20, 20, white)), builderParameter("cancel")):250,0
      }
}

#tab programmable(status:[hover, pressed, normal], checked:[true, false], disabled:[true, false], width:uint=120, height:uint=30, font="m6x11", fontColor:int=0xffffffff, buttonText="Tab") {
      @(status=>normal, checked=>false) ninepatch("ui", "Tab_off_idle", $width, $height);
      @(status=>hover, checked=>false) ninepatch("ui", "Tab_off_hover", $width, $height);
      @(status=>pressed, checked=>false) ninepatch("ui", "Tab_off_pressed", $width, $height);
      @(status=>normal, checked=>true) ninepatch("ui", "Tab_on_idle", $width, $height);
      @(status=>hover, checked=>true) ninepatch("ui", "Tab_on_hover", $width, $height);
      @(status=>pressed, checked=>true) ninepatch("ui", "Tab_on_pressed", $width, $height);
      @(disabled=>true) ninepatch("ui", "Tab_off_disabled", $width, $height);
      text($font, $buttonText, $fontColor, center, $width): 0, ($height - 6 - $ctx.font($font).lineHeight) / 2
}

#tabBar programmable(count:int, panelWidth:uint=0, panelHeight:uint=0, tabButtonHeight:uint=30, spacing:int=0, offset:int=8, contentPadTop:int=3, contentPadLeft:int=8) {
      // offset=8: matches Window_tabbed_3x3 pad-left so tabs align with panel content area
      // panelOffset formula: tabButtonHeight - 9 = (6px tab transparent bottom) + (3px panel top border overlap)
      flow(layout: horizontal, horizontalSpacing: $spacing, paddingLeft: $offset) {
            repeatable($index, range(0, $count)) {
                  placeholder(generated(cross(15, 15, #FF0000)), callback("tabButton", $index));
            }
      }
      @(panelHeight > 0) @layer(-100) ninepatch("ui", "Window_tabbed_3x3_idle", $panelWidth, $panelHeight): 0, $tabButtonHeight - 9
      @(panelHeight > 0) #contentArea point: $contentPadLeft, $tabButtonHeight - 9 + $contentPadTop
}

#tabBarVertical programmable(count:int, spacing:int=0, offset:int=0) {
      flow(layout: vertical, verticalSpacing: $spacing, paddingTop: $offset) {
            repeatable($index, range(0, $count)) {
                  placeholder(generated(cross(15, 15, #FF0000)), callback("tabButton", $index));
            }
      }
}

#textInput programmable(
    status:[normal,hover,focused,disabled]=normal,
    placeholder:[true, false]=true,
    width:uint=200,
    height:uint=24,
    placeholderText:string="Type here..."
) {
    @(status=>normal)   ninepatch("ui", "Text_Color_3x3_idle", $width, $height): 0, 0
    @(status=>hover)    ninepatch("ui", "Text_Color_3x3_hover", $width, $height): 0, 0
    @(status=>focused)  ninepatch("ui", "Text_Color_3x3_pressed", $width, $height): 0, 0
    @(status=>disabled) ninepatch("ui", "Text_Color_3x3_disabled", $width, $height): 0, 0

    @(placeholder=>true) text(dd, $placeholderText, #888888): 4, 4

    #textArea point: 4, 4
}

#textInputGrey programmable(
    status:[normal,hover,focused,disabled]=normal,
    placeholder:[true, false]=true,
    width:uint=200,
    height:uint=24,
    placeholderText:string="Type here..."
) {
    @(status=>normal)   ninepatch("ui", "Text_Grey_3x3_idle", $width, $height): 0, 0
    @(status=>hover)    ninepatch("ui", "Text_Grey_3x3_hover", $width, $height): 0, 0
    @(status=>focused)  ninepatch("ui", "Text_Grey_3x3_pressed", $width, $height): 0, 0
    @(status=>disabled) ninepatch("ui", "Text_Grey_3x3_disabled", $width, $height): 0, 0

    @(placeholder=>true) text(dd, $placeholderText, #888888): 4, 4

    #textArea point: 4, 4
}

#textInputTitle programmable(
    status:[normal,hover,focused,disabled]=normal,
    placeholder:[true, false]=true,
    width:uint=200,
    height:uint=30,
    placeholderText:string="Type here..."
) {
    @(status=>normal)   ninepatch("ui", "Text_Title_Color_3x3_idle", $width, $height): 0, 0
    @(status=>hover)    ninepatch("ui", "Text_Title_Color_3x3_hover", $width, $height): 0, 0
    @(status=>focused)  ninepatch("ui", "Text_Title_Color_3x3_pressed", $width, $height): 0, 0
    @(status=>disabled) ninepatch("ui", "Text_Title_Color_3x3_disabled", $width, $height): 0, 0

    @(placeholder=>true) text(dd, $placeholderText, #888888): 6, 6

    #textArea point: 6, 6
}

#textInputTitleGrey programmable(
    status:[normal,hover,focused,disabled]=normal,
    placeholder:[true, false]=true,
    width:uint=200,
    height:uint=30,
    placeholderText:string="Type here..."
) {
    @(status=>normal)   ninepatch("ui", "Text_Title_Grey_3x3_idle", $width, $height): 0, 0
    @(status=>hover)    ninepatch("ui", "Text_Title_Grey_3x3_hover", $width, $height): 0, 0
    @(status=>focused)  ninepatch("ui", "Text_Title_Grey_3x3_pressed", $width, $height): 0, 0
    @(status=>disabled) ninepatch("ui", "Text_Title_Grey_3x3_disabled", $width, $height): 0, 0

    @(placeholder=>true) text(dd, $placeholderText, #888888): 6, 6

    #textArea point: 6, 6
}`,pf=`sheet: crew2
allowedExtraPoints: ["point", "text"]
center: 64,64
fps: 10

animation dir0 {
    loop: yes
    playlist {
        sheet: "Arrow_dir0"
    }
    extrapoints {
        point: 0, 0
        text: -60, 0
    }
}

animation dir1 {
    loop: yes
    playlist {
        sheet: "Arrow_dir1"
    }
    extrapoints {
        point: 0, 0
        text: -24, 50
    }
}

animation dir2 {
    loop: yes
    playlist {
        sheet: "Arrow_dir2"
    }
    extrapoints {
        point: 0, 0
        text: 24, 50
    }
}

animation dir3 {
    loop: yes
    playlist {
        sheet: "Arrow_dir3"
    }
    extrapoints {
        point: 0, 0
        text: 64, 0
    }
}

animation dir4 {
    loop: yes
    playlist {
        sheet: "Arrow_dir4"
    }
    extrapoints {
        point: 0, 0
        text: 25, -60
    }
}

animation dir5 {
    loop: yes
    playlist {
        sheet: "Arrow_dir5"
    }
    extrapoints {
        point: 0, 0
        text: -25, -60
    }
}
`,ff=`sheet: crew2
center: 32,48

animation outline-blink {
    fps: 6
    loop: yes
    playlist {
        filter outline: 1, #FFFF00
        sheet: "marine_r_idle"
        filter none
        sheet: "marine_r_idle"
    }
}

animation tint-blink {
    fps: 10
    loop: yes
    playlist {
        filter tint: #FF4444
        sheet: "marine_r_idle"
        filter none
        sheet: "marine_r_idle"
    }
}

animation brightness-blink {
    fps: 16
    loop: yes
    playlist {
        filter brightness: 1.8
        sheet: "marine_r_idle"
        filter none
        sheet: "marine_r_idle"
    }
}
`,mf=`sheet: crew2
allowedExtraPoints: [fire, targeting]
states: direction(l, r)
center: 32,48
fps: 20

animation idle {
    fps: 4
    loop: yes
    playlist {
        sheet: "marine_\${direction}_idle"
    }
    extrapoints {
        @(direction=>l) targeting: -1, -12
        @else targeting: 5, -12
    }
}

animation fire-up {
    loop: 2
    playlist {
        sheet: "marine_r_shooting_u"
    }
    extrapoints {
        fire: 5, -19
    }
}

animation fire-down {
    fps: 10
    playlist {
        sheet: marine_l_shooting_d
    }
    extrapoints {
        fire: -2, -2
    }
}

animation fire-left {
    playlist {
        sheet: marine_l_shooting_u
    }
    extrapoints {
        fire: -10, -8
    }
}

animation fire-right {
    playlist {
        sheet: marine_r_shooting_d
    }
    extrapoints {
        fire: 10, -8
    }
}

animation fire-upright {
    playlist {
        sheet: marine_r_shooting
    }
    extrapoints {
        fire: 12, -12
    }
}

animation fire-downleft {
    playlist {
        sheet: marine_l_shooting
    }
    extrapoints {
        fire: -7, -3
    }
}

animation fire-upleft {
    playlist {
        sheet: marine_l_shooting_uu
    }
    extrapoints {
        fire: -7, -11
    }
}

animation fire-downright {
    playlist {
        sheet: marine_r_shooting_dd
    }
    extrapoints {
        fire: 7, -6
    }
}

animation hit {
    loop: yes
    playlist {
        sheet: "marine_\${direction}_hit"
        event hit random 0,-10, 10
    }
}

animation killed {
    playlist {
        sheet: "marine_\${direction}_killed"
    }
}

animation dead {
    fps: 1
    loop: yes
    playlist {
        sheet: "marine_\${direction}_dead"
    }
}

animation stand {
    fps: 1
    loop: yes
    playlist {
        sheet: "marine_\${direction}_standing"
    }
}

animation dodge {
    fps: 4
    playlist {
        sheet: "marine_\${direction}_dodging_\${direction}" frames: 0..3
    }
}
`,hf=`sheet: crew2
allowedExtraPoints: ["line_TR", "line_BR", "line_TL", "line_BL"]
states: direction(l, r)
center: 32,48

animation idle_0 {
    fps: 4
    loop: yes
    playlist {
        sheet: "shield_\${direction}_layer0"
    }
    extrapoints {
        line_TR: 8, -16
        line_TL: -8, -16
        line_BR: 7, -1
        line_BL: -7, -1
    }
}

animation impact {
    fps: 10
    loop: yes
    playlist {
        sheet: "shield_\${direction}_layer2_impact fast"
    }
}

animation idle_1 {
    fps: 10
    loop: yes
    playlist {
        sheet: "shield_\${direction}_layer1"
    }
}
`,gf=`sheet: crew2
center: 32,48

animation explode {
    fps: 16
    playlist {
        sheet: "Turret_Explode_SW"
    }
}

animation hit {
    fps: 10
    loop: yes
    playlist {
        sheet: "Turret_Idle_SW_A" frames: 2..6
    }
}

animation idle {
    fps: 14
    loop: yes
    playlist {
        sheet: "Turret_Idle_SW_B"
    }
}

animation shoot {
    fps: 16
    loop: yes
    playlist {
        sheet: "Turret_Shoot_SW"
    }
}

animation destroyed {
    fps: 1
    playlist {
        sheet: "Turret_Destroyed_SW"
    }
}
`,xf=Object.assign({"../public/assets/buttons.manim":Qu,"../public/assets/checkbox.manim":qu,"../public/assets/demo-common.manim":Yu,"../public/assets/demos/advanced/conditionals.manim":Xu,"../public/assets/demos/advanced/expressions.manim":Ku,"../public/assets/demos/advanced/feature-showcase.manim":Zu,"../public/assets/demos/advanced/incremental.manim":Ju,"../public/assets/demos/advanced/interactives.manim":ep,"../public/assets/demos/advanced/loadout-lab.manim":np,"../public/assets/demos/advanced/macro-performance.manim":tp,"../public/assets/demos/advanced/settings.manim":ap,"../public/assets/demos/animation/anim-path.manim":rp,"../public/assets/demos/animation/color-picker-dialog.manim":ip,"../public/assets/demos/animation/curves.manim":op,"../public/assets/demos/animation/filters.manim":lp,"../public/assets/demos/animation/floating-text.manim":sp,"../public/assets/demos/animation/particles-basics.manim":cp,"../public/assets/demos/animation/particles-bounds.manim":dp,"../public/assets/demos/animation/particles-colors.manim":up,"../public/assets/demos/animation/particles-demo.manim":pp,"../public/assets/demos/animation/particles-motion.manim":fp,"../public/assets/demos/animation/particles-paths.manim":mp,"../public/assets/demos/animation/particles-subemitters.manim":hp,"../public/assets/demos/animation/particles.manim":gp,"../public/assets/demos/animation/paths.manim":xp,"../public/assets/demos/animation/state-anim-filters.manim":bp,"../public/assets/demos/animation/state-anim-gallery.manim":vp,"../public/assets/demos/animation/state-anim-interactive.manim":yp,"../public/assets/demos/animation/state-anim-points.manim":_p,"../public/assets/demos/animation/state-anim.manim":wp,"../public/assets/demos/animation/transitions.manim":Sp,"../public/assets/demos/gamelike/battle-hud.manim":Fp,"../public/assets/demos/gamelike/blob47.manim":kp,"../public/assets/demos/gamelike/card-hand.manim":Cp,"../public/assets/demos/gamelike/card-states.manim":$p,"../public/assets/demos/gamelike/cards-demo.manim":Pp,"../public/assets/demos/gamelike/character-sheet.manim":Tp,"../public/assets/demos/gamelike/dialogue.manim":Rp,"../public/assets/demos/gamelike/grid-demo.manim":Ap,"../public/assets/demos/gamelike/inventory.manim":Ep,"../public/assets/demos/gamelike/project-list.manim":Bp,"../public/assets/demos/gamelike/skill-tree.manim":Dp,"../public/assets/demos/gamelike/status-effects.manim":Ip,"../public/assets/demos/graphics/bitmaps-atlas.manim":Np,"../public/assets/demos/graphics/ninepatch.manim":zp,"../public/assets/demos/graphics/pixels-graphics.manim":Op,"../public/assets/demos/graphics/rich-text-autofit.manim":Lp,"../public/assets/demos/graphics/rich-text.manim":Mp,"../public/assets/demos/graphics/text-fonts.manim":Wp,"../public/assets/demos/layout/combo-states.manim":Hp,"../public/assets/demos/layout/dynamic-refs.manim":jp,"../public/assets/demos/layout/flow-layout.manim":Vp,"../public/assets/demos/layout/repeatable.manim":Gp,"../public/assets/demos/layout/slots.manim":Up,"../public/assets/demos/layout/static-refs.manim":Qp,"../public/assets/demos/ui/buttons-demo.manim":qp,"../public/assets/demos/ui/checkboxes-demo.manim":Yp,"../public/assets/demos/ui/dialogs.manim":Xp,"../public/assets/demos/ui/draggable.manim":Kp,"../public/assets/demos/ui/dropdowns.manim":Zp,"../public/assets/demos/ui/progress-bar.manim":Jp,"../public/assets/demos/ui/radio.manim":ef,"../public/assets/demos/ui/radios-demo.manim":nf,"../public/assets/demos/ui/scrollable-list.manim":tf,"../public/assets/demos/ui/sliders.manim":af,"../public/assets/demos/ui/tabs-demo.manim":rf,"../public/assets/demos/ui/textinput-demo.manim":of,"../public/assets/demos/ui/tooltips-panels.manim":lf,"../public/assets/nav-carousel.manim":sf,"../public/assets/nav-screen.manim":cf,"../public/assets/radio.manim":df,"../public/assets/std.manim":uf}),bf=Object.assign({"../public/assets/arrows.anim":pf,"../public/assets/marine-blink.anim":ff,"../public/assets/marine.anim":mf,"../public/assets/shield.anim":hf,"../public/assets/turret.anim":gf}),vf=Object.fromEntries([...Object.entries(xf).map(([e,n])=>[e.replace("../public/assets/",""),n]),...Object.entries(bf).map(([e,n])=>[e.replace("../public/assets/",""),n])]),Fa=e=>vf[e]||null,qi=[{name:"Advanced Features",screens:[{name:"featureShowcase",displayName:"Feature Showcase",category:"Advanced Features",manimFile:"demos/advanced/feature-showcase.manim"},{name:"incremental",displayName:"Incremental",category:"Advanced Features",manimFile:"demos/advanced/incremental.manim"},{name:"interactives",displayName:"Interactives",category:"Advanced Features",manimFile:"demos/advanced/interactives.manim"},{name:"conditionals",displayName:"Conditionals",category:"Advanced Features",manimFile:"demos/advanced/conditionals.manim"},{name:"expressions",displayName:"Expressions",category:"Advanced Features",manimFile:"demos/advanced/expressions.manim"},{name:"settings",displayName:"Settings",category:"Advanced Features",manimFile:"demos/advanced/settings.manim"},{name:"macroPerformance",displayName:"Macro Performance",category:"Advanced Features",manimFile:"demos/advanced/macro-performance.manim"},{name:"loadoutRuntime",displayName:"Loadout Lab (runtime)",category:"Advanced Features",manimFile:"demos/advanced/loadout-lab.manim"},{name:"loadoutCodegen",displayName:"Loadout Lab (codegen)",category:"Advanced Features",manimFile:"demos/advanced/loadout-lab.manim"}]},{name:"UI Components",screens:[{name:"buttons",displayName:"Buttons",category:"UI Components",manimFile:"demos/ui/buttons-demo.manim"},{name:"checkboxes",displayName:"Checkboxes",category:"UI Components",manimFile:"demos/ui/checkboxes-demo.manim"},{name:"sliders",displayName:"Sliders",category:"UI Components",manimFile:"demos/ui/sliders.manim"},{name:"dropdowns",displayName:"Dropdowns",category:"UI Components",manimFile:"demos/ui/dropdowns.manim"},{name:"scrollableList",displayName:"Scrollable List",category:"UI Components",manimFile:"demos/ui/scrollable-list.manim"},{name:"radio",displayName:"Radio Buttons",category:"UI Components",manimFile:"demos/ui/radio.manim"},{name:"progressBar",displayName:"Progress Bars",category:"UI Components",manimFile:"demos/ui/progress-bar.manim"},{name:"draggable",displayName:"Draggable",category:"UI Components",manimFile:"demos/ui/draggable.manim"},{name:"dialogs",displayName:"Dialogs",category:"UI Components",manimFile:"demos/ui/dialogs.manim"},{name:"tabs",displayName:"Tabs",category:"UI Components",manimFile:"demos/ui/tabs-demo.manim"},{name:"textInput",displayName:"Text Input",category:"UI Components",manimFile:"demos/ui/textinput-demo.manim"},{name:"tooltipsPanels",displayName:"Tooltips & Panels",category:"UI Components",manimFile:"demos/ui/tooltips-panels.manim"}]},{name:"Layout & Composition",screens:[{name:"staticRefs",displayName:"Static Refs",category:"Layout & Composition",manimFile:"demos/layout/static-refs.manim"},{name:"dynamicRefs",displayName:"Dynamic Refs",category:"Layout & Composition",manimFile:"demos/layout/dynamic-refs.manim"},{name:"flowLayout",displayName:"Flow Layout",category:"Layout & Composition",manimFile:"demos/layout/flow-layout.manim"},{name:"repeatable",displayName:"Repeatable",category:"Layout & Composition",manimFile:"demos/layout/repeatable.manim"},{name:"slots",displayName:"Slots",category:"Layout & Composition",manimFile:"demos/layout/slots.manim"},{name:"comboStates",displayName:"Combo States",category:"Layout & Composition",manimFile:"demos/layout/combo-states.manim"}]},{name:"Graphics & Rendering",screens:[{name:"bitmapsAtlas",displayName:"Bitmaps & Atlas",category:"Graphics & Rendering",manimFile:"demos/graphics/bitmaps-atlas.manim"},{name:"ninepatch",displayName:"Ninepatch",category:"Graphics & Rendering",manimFile:"demos/graphics/ninepatch.manim"},{name:"textFonts",displayName:"Text & Fonts",category:"Graphics & Rendering",manimFile:"demos/graphics/text-fonts.manim"},{name:"richText",displayName:"Rich Text",category:"Graphics & Rendering",manimFile:"demos/graphics/rich-text.manim"},{name:"richTextAutofit",displayName:"Rich Text AutoFit",category:"Graphics & Rendering",manimFile:"demos/graphics/rich-text-autofit.manim"},{name:"pixelsGraphics",displayName:"Pixels & Graphics",category:"Graphics & Rendering",manimFile:"demos/graphics/pixels-graphics.manim"}]},{name:"Animation & Effects",screens:[{name:"stateAnim",displayName:"State Animations",category:"Animation & Effects",manimFile:"demos/animation/state-anim.manim"},{name:"particles",displayName:"Particles",category:"Animation & Effects",manimFile:"demos/animation/particles-basics.manim"},{name:"paths",displayName:"Paths",category:"Animation & Effects",manimFile:"demos/animation/paths.manim"},{name:"curves",displayName:"Curves",category:"Animation & Effects",manimFile:"demos/animation/curves.manim"},{name:"animPath",displayName:"Anim Paths",category:"Animation & Effects",manimFile:"demos/animation/anim-path.manim"},{name:"filters",displayName:"Filters",category:"Animation & Effects",manimFile:"demos/animation/filters.manim"},{name:"floatingText",displayName:"Floating Text",category:"Animation & Effects",manimFile:"demos/animation/floating-text.manim"},{name:"transitions",displayName:"Transitions",category:"Animation & Effects",manimFile:"demos/animation/transitions.manim"}]},{name:"Game-Like Demos",screens:[{name:"inventory",displayName:"Inventory Grid",category:"Game-Like Demos",manimFile:"demos/gamelike/inventory.manim"},{name:"characterSheet",displayName:"Character Sheet",category:"Game-Like Demos",manimFile:"demos/gamelike/character-sheet.manim"},{name:"blob47",displayName:"Blob47 Autotile",category:"Game-Like Demos",manimFile:"demos/gamelike/blob47.manim"},{name:"battleHud",displayName:"Battle HUD",category:"Game-Like Demos",manimFile:"demos/gamelike/battle-hud.manim"},{name:"skillTree",displayName:"Skill Tree",category:"Game-Like Demos",manimFile:"demos/gamelike/skill-tree.manim"},{name:"dialogue",displayName:"Dialogue Box",category:"Game-Like Demos",manimFile:"demos/gamelike/dialogue.manim"},{name:"statusEffects",displayName:"Status Effects",category:"Game-Like Demos",manimFile:"demos/gamelike/status-effects.manim"},{name:"cards",displayName:"Cards",category:"Game-Like Demos",manimFile:"demos/gamelike/cards-demo.manim"},{name:"gridComponent",displayName:"Grid Component",category:"Game-Like Demos",manimFile:"demos/gamelike/grid-demo.manim"},{name:"projectList",displayName:"Project List",category:"Game-Like Demos",manimFile:"demos/gamelike/project-list.manim"}]}];class yf{constructor(){tn(this,"mainApp",null);tn(this,"currentScreen",null);this.setupFileLoader(),this.waitForMainApp()}setupFileLoader(){var t;const n=((t=window.location)==null?void 0:t.href)||"";window.FileLoader={baseUrl:n,resolveUrl:a=>{if(a.startsWith("http")||a.startsWith("//")||a.startsWith("file://"))return a;try{return new URL(a,n).href}catch{return n+a}},load:a=>this.loadFile(a),stringToArrayBuffer:this.stringToArrayBuffer}}waitForMainApp(){var t;const n=(t=window.PlaygroundMain)==null?void 0:t.instance;n&&n.screenManager?(this.mainApp=n,this.currentScreen&&this.currentScreen!=="nav"&&this.switchScreen(this.currentScreen)):setTimeout(()=>this.waitForMainApp(),100)}stringToArrayBuffer(n){return new TextEncoder().encode(n).buffer}loadFile(n){const t=this.findFileContent(n);if(t)return this.stringToArrayBuffer(t);const a=new XMLHttpRequest;return a.open("GET",n,!1),a.send(),a.status===200?this.stringToArrayBuffer(a.response):new ArrayBuffer(0)}findFileContent(n){const t=n.split("?")[0].split("#")[0];let a=Fa(t);if(a)return a;const r=t.indexOf("/assets/");if(r>=0&&(a=Fa(t.substring(r+8)),a))return a;const i=t.split("/"),o=i[i.length-1];return o&&(a=Fa(o),a)?a:null}switchScreen(n){var t;if(this.currentScreen=n,(t=window.PlaygroundMain)!=null&&t.instance)try{return window.PlaygroundMain.instance.navigateTo(n),{success:!0,error:null,file:null,line:null,col:null}}catch(a){return console.error("Failed to switch screen:",a),null}return null}getSourceForScreen(n){for(const t of qi){const a=t.screens.find(r=>r.name===n);if(a)return Fa(a.manimFile)}return null}dispose(){this.mainApp&&typeof this.mainApp.dispose=="function"&&this.mainApp.dispose()}}function _f({currentScreen:e,onScreenSelect:n,collapsed:t,onToggleCollapse:a}){const[r,i]=be.useState(new Set(qi.map(l=>l.name))),o=l=>{i(d=>{const f=new Set(d);return f.has(l)?f.delete(l):f.add(l),f})};return t?D.jsx("div",{className:"w-10 bg-gray-800 border-r border-gray-700 flex flex-col items-center pt-3",children:D.jsx("button",{onClick:a,className:"text-gray-400 hover:text-white text-xs p-1",title:"Expand sidebar",children:"»"})}):D.jsxs("div",{className:"w-[250px] bg-gray-800 border-r border-gray-700 flex flex-col h-full",children:[D.jsxs("div",{className:"px-4 py-3 border-b border-gray-700 flex items-center justify-between",children:[D.jsx("button",{onClick:()=>n("nav"),className:"text-base font-bold text-gray-100 hover:text-blue-300 transition-colors",children:"Demos"}),D.jsx("button",{onClick:a,className:"text-gray-400 hover:text-white text-sm px-2 py-1",title:"Collapse sidebar",children:"«"})]}),D.jsx("div",{className:"flex-1 overflow-y-auto scrollable p-2",children:qi.map(l=>D.jsxs("div",{className:"mb-1",children:[D.jsxs("button",{onClick:()=>o(l.name),className:"w-full text-left px-2 py-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 flex items-center",children:[D.jsx("span",{className:"mr-1.5 text-[10px]",children:r.has(l.name)?"▾":"▸"}),l.name]}),r.has(l.name)&&D.jsx("div",{className:"ml-6",children:l.screens.map(d=>D.jsx("button",{onClick:()=>n(d.name),className:`w-full text-left px-3 py-1 text-xs rounded transition-colors ${e===d.name?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:d.displayName},d.name))})]},l.name))})]})}var mc={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},l={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function s(c){return c instanceof d?new d(c.type,s(c.content),c.alias):Array.isArray(c)?c.map(s):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(s){return Object.prototype.toString.call(s).slice(8,-1)},objId:function(s){return s.__id||Object.defineProperty(s,"__id",{value:++i}),s.__id},clone:function s(c,p){p=p||{};var h,g;switch(l.util.type(c)){case"Object":if(g=l.util.objId(c),p[g])return p[g];h={},p[g]=h;for(var v in c)c.hasOwnProperty(v)&&(h[v]=s(c[v],p));return h;case"Array":return g=l.util.objId(c),p[g]?p[g]:(h=[],p[g]=h,c.forEach(function(y,C){h[C]=s(y,p)}),h);default:return c}},getLanguage:function(s){for(;s;){var c=r.exec(s.className);if(c)return c[1].toLowerCase();s=s.parentElement}return"none"},setLanguage:function(s,c){s.className=s.className.replace(RegExp(r,"gi"),""),s.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var s=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(s){var c=document.getElementsByTagName("script");for(var p in c)if(c[p].src==s)return c[p]}return null}},isActive:function(s,c,p){for(var h="no-"+c;s;){var g=s.classList;if(g.contains(c))return!0;if(g.contains(h))return!1;s=s.parentElement}return!!p}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(s,c){var p=l.util.clone(l.languages[s]);for(var h in c)p[h]=c[h];return p},insertBefore:function(s,c,p,h){h=h||l.languages;var g=h[s],v={};for(var y in g)if(g.hasOwnProperty(y)){if(y==c)for(var C in p)p.hasOwnProperty(C)&&(v[C]=p[C]);p.hasOwnProperty(y)||(v[y]=g[y])}var T=h[s];return h[s]=v,l.languages.DFS(l.languages,function(I,ue){ue===T&&I!=s&&(this[I]=v)}),v},DFS:function s(c,p,h,g){g=g||{};var v=l.util.objId;for(var y in c)if(c.hasOwnProperty(y)){p.call(c,y,c[y],h||y);var C=c[y],T=l.util.type(C);T==="Object"&&!g[v(C)]?(g[v(C)]=!0,s(C,p,null,g)):T==="Array"&&!g[v(C)]&&(g[v(C)]=!0,s(C,p,y,g))}}},plugins:{},highlightAll:function(s,c){l.highlightAllUnder(document,s,c)},highlightAllUnder:function(s,c,p){var h={callback:p,container:s,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),l.hooks.run("before-all-elements-highlight",h);for(var g=0,v;v=h.elements[g++];)l.highlightElement(v,c===!0,h.callback)},highlightElement:function(s,c,p){var h=l.util.getLanguage(s),g=l.languages[h];l.util.setLanguage(s,h);var v=s.parentElement;v&&v.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(v,h);var y=s.textContent,C={element:s,language:h,grammar:g,code:y};function T(ue){C.highlightedCode=ue,l.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,l.hooks.run("after-highlight",C),l.hooks.run("complete",C),p&&p.call(C.element)}if(l.hooks.run("before-sanity-check",C),v=C.element.parentElement,v&&v.nodeName.toLowerCase()==="pre"&&!v.hasAttribute("tabindex")&&v.setAttribute("tabindex","0"),!C.code){l.hooks.run("complete",C),p&&p.call(C.element);return}if(l.hooks.run("before-highlight",C),!C.grammar){T(l.util.encode(C.code));return}if(c&&a.Worker){var I=new Worker(l.filename);I.onmessage=function(ue){T(ue.data)},I.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else T(l.highlight(C.code,C.grammar,C.language))},highlight:function(s,c,p){var h={code:s,grammar:c,language:p};if(l.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=l.tokenize(h.code,h.grammar),l.hooks.run("after-tokenize",h),d.stringify(l.util.encode(h.tokens),h.language)},tokenize:function(s,c){var p=c.rest;if(p){for(var h in p)c[h]=p[h];delete c.rest}var g=new x;return m(g,g.head,s),b(s,g,c,g.head,0),S(g)},hooks:{all:{},add:function(s,c){var p=l.hooks.all;p[s]=p[s]||[],p[s].push(c)},run:function(s,c){var p=l.hooks.all[s];if(!(!p||!p.length))for(var h=0,g;g=p[h++];)g(c)}},Token:d};a.Prism=l;function d(s,c,p,h){this.type=s,this.content=c,this.alias=p,this.length=(h||"").length|0}d.stringify=function s(c,p){if(typeof c=="string")return c;if(Array.isArray(c)){var h="";return c.forEach(function(T){h+=s(T,p)}),h}var g={type:c.type,content:s(c.content,p),tag:"span",classes:["token",c.type],attributes:{},language:p},v=c.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(g.classes,v):g.classes.push(v)),l.hooks.run("wrap",g);var y="";for(var C in g.attributes)y+=" "+C+'="'+(g.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+y+">"+g.content+"</"+g.tag+">"};function f(s,c,p,h){s.lastIndex=c;var g=s.exec(p);if(g&&h&&g[1]){var v=g[1].length;g.index+=v,g[0]=g[0].slice(v)}return g}function b(s,c,p,h,g,v){for(var y in p)if(!(!p.hasOwnProperty(y)||!p[y])){var C=p[y];C=Array.isArray(C)?C:[C];for(var T=0;T<C.length;++T){if(v&&v.cause==y+","+T)return;var I=C[T],ue=I.inside,nn=!!I.lookbehind,ht=!!I.greedy,Sr=I.alias;if(ht&&!I.pattern.global){var gt=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,gt+"g")}for(var On=I.pattern||I,k=h.next,R=g;k!==c.tail&&!(v&&R>=v.reach);R+=k.value.length,k=k.next){var A=k.value;if(c.length>s.length)return;if(!(A instanceof d)){var O=1,N;if(ht){if(N=f(On,R,s,nn),!N||N.index>=s.length)break;var Fe=N.index,Ln=N.index+N[0].length,te=R;for(te+=k.value.length;Fe>=te;)k=k.next,te+=k.value.length;if(te-=k.value.length,R=te,k.value instanceof d)continue;for(var je=k;je!==c.tail&&(te<Ln||typeof je.value=="string");je=je.next)O++,te+=je.value.length;O--,A=s.slice(R,te),N.index-=R}else if(N=f(On,0,A,nn),!N)continue;var Fe=N.index,Ve=N[0],Fr=A.slice(0,Fe),Uo=A.slice(Fe+Ve.length),kr=R+A.length;v&&kr>v.reach&&(v.reach=kr);var oa=k.prev;Fr&&(oa=m(c,oa,Fr),R+=Fr.length),w(c,oa,O);var xc=new d(y,ue?l.tokenize(Ve,ue):Ve,Sr,Ve);if(k=m(c,oa,xc),Uo&&m(c,k,Uo),O>1){var Cr={cause:y+","+T,reach:kr};b(s,c,p,k.prev,R,Cr),v&&Cr.reach>v.reach&&(v.reach=Cr.reach)}}}}}}function x(){var s={value:null,prev:null,next:null},c={value:null,prev:s,next:null};s.next=c,this.head=s,this.tail=c,this.length=0}function m(s,c,p){var h=c.next,g={value:p,prev:c,next:h};return c.next=g,h.prev=g,s.length++,g}function w(s,c,p){for(var h=c.next,g=0;g<p&&h!==s.tail;g++)h=h.next;c.next=h,h.prev=c,s.length-=g}function S(s){for(var c=[],p=s.head.next;p!==s.tail;)c.push(p.value),p=p.next;return c}if(!a.document)return a.addEventListener&&(l.disableWorkerMessageHandler||a.addEventListener("message",function(s){var c=JSON.parse(s.data),p=c.language,h=c.code,g=c.immediateClose;a.postMessage(l.highlight(h,l.languages[p],p)),g&&a.close()},!1)),l;var _=l.util.currentScript();_&&(l.filename=_.src,_.hasAttribute("data-manual")&&(l.manual=!0));function P(){l.manual||l.highlightAll()}if(!l.manual){var u=document.readyState;u==="loading"||u==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",P):window.requestAnimationFrame?window.requestAnimationFrame(P):window.setTimeout(P,16)}return l}(n);e.exports&&(e.exports=t),typeof ei<"u"&&(ei.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var d={};d[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var i=a.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",r=function(_,P){return"✖ Error "+_+" while fetching file: "+P},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",d="loading",f="loaded",b="failed",x="pre[data-src]:not(["+l+'="'+f+'"]):not(['+l+'="'+d+'"])';function m(_,P,u){var s=new XMLHttpRequest;s.open("GET",_,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?P(s.responseText):s.status>=400?u(r(s.status,s.statusText)):u(i))},s.send(null)}function w(_){var P=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(P){var u=Number(P[1]),s=P[2],c=P[3];return s?c?[u,Number(c)]:[u,void 0]:[u,u]}}t.hooks.add("before-highlightall",function(_){_.selector+=", "+x}),t.hooks.add("before-sanity-check",function(_){var P=_.element;if(P.matches(x)){_.code="",P.setAttribute(l,d);var u=P.appendChild(document.createElement("CODE"));u.textContent=a;var s=P.getAttribute("data-src"),c=_.language;if(c==="none"){var p=(/\.(\w+)$/.exec(s)||[,"none"])[1];c=o[p]||p}t.util.setLanguage(u,c),t.util.setLanguage(P,c);var h=t.plugins.autoloader;h&&h.loadLanguages(c),m(s,function(g){P.setAttribute(l,f);var v=w(P.getAttribute("data-range"));if(v){var y=g.split(/\r\n?|\n/g),C=v[0],T=v[1]==null?y.length:v[1];C<0&&(C+=y.length),C=Math.max(0,Math.min(C-1,y.length)),T<0&&(T+=y.length),T=Math.max(0,Math.min(T,y.length)),g=y.slice(C,T).join(`
`),P.hasAttribute("data-start")||P.setAttribute("data-start",String(C+1))}u.textContent=g,t.highlightElement(u)},function(g){P.setAttribute(l,b),u.textContent=g})}}),t.plugins.fileHighlight={highlight:function(P){for(var u=(P||document).querySelectorAll(x),s=0,c;c=u[s++];)t.highlightElement(c)}};var S=!1;t.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(mc);var wf=mc.exports;const Yi=Xi(wf);Yi.languages.manim||(Yi.languages.manim={comment:/\/\/.*/,string:/"[^"]*"/,keyword:/\b(version|programmable|bitmap|text|ninepatch|placeholder|staticRef|dynamicRef|slot|spacer|interactive|layers|mask|flow|repeatable|tilegroup|stateanim|point|apply|graphics|pixels|particles|import|filter|settings|curves|paths|atlas2|animatedPath|data)\b/,"attr-name":/\b(sheet|generated|color|file|center|left|right|grid|hex|layout|construct|emit|tiles|loop|count|maxLife|speed|speedRandom|speedRand|gravity|gravityAngle|size|sizeRandom|sizeRand|fadeIn|fadeOut|blendMode|rotationSpeed|rotSpeed|rotateAuto|autoRotate|forwardAngle|emitSync|emitDelay|delay|lifeRandom|lifeRand|bounds|colorStops|sizeCurve|velocityCurve|forceFields|relative|attachTo|spawnCurve|subEmitters|cone|box|circle|path|kill|bounce|wrap|none|dist|distRand|angle|angleSpread|deg|rad|turn|up|down|easeInQuad|easeOutQuad|easeInOutQuad|easeInCubic|easeOutCubic|easeInOutCubic|linear|attractor|repulsor|vortex|wind|turbulence|pathguide|styles|images|condenseWhite|dropShadowXY|dropShadowColor|dropShadowAlpha)\b/,boolean:/\b(true|false)\b/,number:/\b0x[0-9a-fA-F]+\b|\b\d+\.?\d*\b/,operator:/=>|@\(|@if|@any|@all|@else|@default|@\)|!=|>=|<=|>|</,punctuation:/[{}():,;]/,variable:/\$\w+/,"class-name":/#\w+/,tag:/@\w+/});function Sf({source:e,visible:n}){const t=be.useRef(null);return be.useEffect(()=>{t.current&&e&&(t.current.textContent=e,Yi.highlightElement(t.current))},[e]),!n||!e?null:D.jsxs("div",{className:"border-t border-gray-700 flex-1 min-h-0 flex flex-col",children:[D.jsx("div",{className:"px-3 py-1.5 border-b border-gray-700 text-xs font-medium text-gray-300 flex-shrink-0",children:".manim Source"}),D.jsx("div",{className:"flex-1 overflow-auto p-3 bg-gray-900",children:D.jsx("pre",{className:"text-xs leading-relaxed",style:{margin:0},children:D.jsx("code",{ref:t,className:"language-manim",children:e})})})]})}const Jr="nav";function Ff(){const[e,n]=be.useState(Jr),[t,a]=be.useState(!1),[r,i]=be.useState(!1),[o,l]=be.useState(null),[d]=be.useState(()=>new yf);be.useEffect(()=>{window.playgroundLoader=d;const m=window.location.hash.match(/screen=(\w+)/);return window.defaultScreen=m?m[1]:Jr,()=>{d.dispose()}},[d]),be.useEffect(()=>{const x=()=>{const w=window.location.hash.match(/screen=(\w+)/);if(w){const S=w[1];n(S),d.switchScreen(S)}};return x(),window.addEventListener("hashchange",x),()=>window.removeEventListener("hashchange",x)},[d]);const f=x=>{n(x),window.location.hash=`screen=${x}`,d.switchScreen(x);const m=d.getSourceForScreen(x);l(m)},b=()=>{if(!r){const x=d.getSourceForScreen(e);l(x)}i(!r)};return D.jsxs("div",{className:"flex h-screen w-screen bg-gray-900 text-white",children:[D.jsx(_f,{currentScreen:e,onScreenSelect:f,collapsed:t,onToggleCollapse:()=>a(!t)}),D.jsxs("div",{className:"flex-1 flex flex-col h-full min-h-0",children:[D.jsxs("div",{className:"border-b border-gray-700 flex-shrink-0 flex items-center justify-between px-6 py-3",children:[D.jsx("button",{onClick:()=>f(Jr),className:"text-sm font-semibold text-gray-200 hover:text-white transition-colors tracking-wide",children:"hx-multianim Showcase"}),D.jsx("div",{className:"flex items-center space-x-3",children:D.jsx("button",{onClick:b,className:`text-xs px-2 py-0.5 rounded transition-colors ${r?"bg-blue-600 text-white":"text-gray-400 hover:text-white"}`,children:r?"Hide Source":"View .manim"})})]}),D.jsxs("div",{className:"flex-1 flex min-h-0",children:[D.jsx("div",{className:`${r?"w-2/3":"w-full"} min-h-0`,children:D.jsx("canvas",{id:"webgl",className:"w-full h-full block"})}),r&&D.jsx("div",{className:"w-1/3 border-l border-gray-700 flex flex-col min-h-0",children:D.jsx(Sf,{source:o,visible:r})})]})]})]})}var hc={exports:{}};(function(e,n){(function(t,a){e.exports=a()})(ei,function(){var t=function(){},a={},r={},i={};function o(m,w){m=m.push?m:[m];var S=[],_=m.length,P=_,u,s,c,p;for(u=function(h,g){g.length&&S.push(h),P--,P||w(S)};_--;){if(s=m[_],c=r[s],c){u(s,c);continue}p=i[s]=i[s]||[],p.push(u)}}function l(m,w){if(m){var S=i[m];if(r[m]=w,!!S)for(;S.length;)S[0](m,w),S.splice(0,1)}}function d(m,w){m.call&&(m={success:m}),w.length?(m.error||t)(w):(m.success||t)(m)}function f(m,w,S,_){var P=document,u=S.async,s=(S.numRetries||0)+1,c=S.before||t,p=m.replace(/[\?|#].*$/,""),h=m.replace(/^(css|img|module|nomodule)!/,""),g,v,y;if(_=_||0,/(^css!|\.css$)/.test(p))y=P.createElement("link"),y.rel="stylesheet",y.href=h,g="hideFocus"in y,g&&y.relList&&(g=0,y.rel="preload",y.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p))y=P.createElement("img"),y.src=h;else if(y=P.createElement("script"),y.src=h,y.async=u===void 0?!0:u,v="noModule"in y,/^module!/.test(p)){if(!v)return w(m,"l");y.type="module"}else if(/^nomodule!/.test(p)&&v)return w(m,"l");y.onload=y.onerror=y.onbeforeload=function(C){var T=C.type[0];if(g)try{y.sheet.cssText.length||(T="e")}catch(I){I.code!=18&&(T="e")}if(T=="e"){if(_+=1,_<s)return f(m,w,S,_)}else if(y.rel=="preload"&&y.as=="style")return y.rel="stylesheet";w(m,T,C.defaultPrevented)},c(m,y)!==!1&&P.head.appendChild(y)}function b(m,w,S){m=m.push?m:[m];var _=m.length,P=_,u=[],s,c;for(s=function(p,h,g){if(h=="e"&&u.push(p),h=="b")if(g)u.push(p);else return;_--,_||w(u)},c=0;c<P;c++)f(m[c],s,S)}function x(m,w,S){var _,P;if(w&&w.trim&&(_=w),P=(_?S:w)||{},_){if(_ in a)throw"LoadJS";a[_]=!0}function u(s,c){b(m,function(p){d(P,p),s&&d({success:s,error:c},p),l(_,p)},P)}if(P.returnPromise)return new Promise(u);u()}return x.ready=function(w,S){return o(w,function(_){d(S,_)}),x},x.done=function(w){l(w,[])},x.reset=function(){a={},r={},i={}},x.isDefined=function(w){return w in a},x})})(hc);var kf=hc.exports;const Cf=Xi(kf);class $f{constructor(n={}){tn(this,"maxRetries");tn(this,"retryDelay");tn(this,"timeout");tn(this,"retryCount",0);tn(this,"isLoaded",!1);this.maxRetries=n.maxRetries||5,this.retryDelay=n.retryDelay||2e3,this.timeout=n.timeout||1e4}waitForReactApp(){document.getElementById("root")&&window.playgroundLoader?(console.log("React app ready, loading Haxe application..."),this.loadHaxeApp()):setTimeout(()=>this.waitForReactApp(),300)}loadHaxeApp(){console.log(`Attempting to load playground.js (attempt ${this.retryCount+1}/${this.maxRetries+1})`);const n=setTimeout(()=>{console.error("Timeout loading playground.js"),this.handleLoadError()},this.timeout);Cf("playground.js",{success:()=>{clearTimeout(n),console.log("playground.js loaded successfully"),this.isLoaded=!0,this.waitForPlaygroundMain()},error:t=>{clearTimeout(n),console.error("Failed to load playground.js:",t),this.handleLoadError()}})}handleLoadError(){this.retryCount++,this.retryCount<=this.maxRetries?(console.log(`Retrying in ${this.retryDelay}ms... (${this.retryCount}/${this.maxRetries})`),setTimeout(()=>this.loadHaxeApp(),this.retryDelay)):console.error(`Failed to load playground.js after ${this.maxRetries} retries`)}waitForPlaygroundMain(){typeof window.PlaygroundMain<"u"&&window.PlaygroundMain.instance?(console.log("Haxe application initialized successfully"),window.playgroundLoader&&(window.playgroundLoader.mainApp=window.PlaygroundMain.instance)):setTimeout(()=>this.waitForPlaygroundMain(),100)}start(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.waitForReactApp()):this.waitForReactApp()}}const gc=new $f({maxRetries:5,retryDelay:2e3,timeout:1e4});gc.start();window.haxeLoader=gc;ni.createRoot(document.getElementById("root")).render(D.jsx(Ic.StrictMode,{children:D.jsx(Ff,{})}));
//# sourceMappingURL=index-CE9623MO.js.map
