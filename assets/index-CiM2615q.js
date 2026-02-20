var bu=Object.defineProperty;var vu=(e,t,n)=>t in e?bu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var nt=(e,t,n)=>vu(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ki(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ns={exports:{}},oa={},rs={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=Symbol.for("react.element"),yu=Symbol.for("react.portal"),_u=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Cu=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),Tu=Symbol.for("react.memo"),Eu=Symbol.for("react.lazy"),Gl=Symbol.iterator;function Pu(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},is=Object.assign,ls={};function fn(e,t,n){this.props=e,this.context=t,this.refs=ls,this.updater=n||as}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=fn.prototype;function Zi(e,t,n){this.props=e,this.context=t,this.refs=ls,this.updater=n||as}var qi=Zi.prototype=new os;qi.constructor=Zi;is(qi,fn.prototype);qi.isPureReactComponent=!0;var Ql=Array.isArray,ss=Object.prototype.hasOwnProperty,Ji={current:null},cs={key:!0,ref:!0,__self:!0,__source:!0};function us(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ss.call(t,r)&&!cs.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var u=Array(o),p=0;p<o;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:tr,type:e,key:i,ref:l,props:a,_owner:Ji.current}}function Ru(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function Bu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yl=/\/+/g;function Fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bu(""+e.key):t.toString(36)}function $r(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case tr:case yu:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Fa(l,0):r,Ql(a)?(n="",e!=null&&(n=e.replace(Yl,"$&/")+"/"),$r(a,t,n,"",function(p){return p})):a!=null&&(el(a)&&(a=Ru(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Yl,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Ql(e))for(var o=0;o<e.length;o++){i=e[o];var u=r+Fa(i,o);l+=$r(i,t,n,u,a)}else if(u=Pu(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=r+Fa(i,o++),l+=$r(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function or(e,t,n){if(e==null)return e;var r=[],a=0;return $r(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Nu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Cr={transition:null},Au={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Ji};function ds(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=fn;B.Fragment=_u;B.Profiler=ku;B.PureComponent=Zi;B.StrictMode=wu;B.Suspense=Fu;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Au;B.act=ds;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=is({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ji.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)ss.call(t,u)&&!cs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var p=0;p<u;p++)o[p]=arguments[p+2];r.children=o}return{$$typeof:tr,type:e.type,key:a,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:$u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Su,_context:e},e.Consumer=e};B.createElement=us;B.createFactory=function(e){var t=us.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Cu,render:e}};B.isValidElement=el;B.lazy=function(e){return{$$typeof:Eu,_payload:{_status:-1,_result:e},_init:Nu}};B.memo=function(e,t){return{$$typeof:Tu,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};B.unstable_act=ds;B.useCallback=function(e,t){return ce.current.useCallback(e,t)};B.useContext=function(e){return ce.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};B.useEffect=function(e,t){return ce.current.useEffect(e,t)};B.useId=function(){return ce.current.useId()};B.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ce.current.useMemo(e,t)};B.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};B.useRef=function(e){return ce.current.useRef(e)};B.useState=function(e){return ce.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return ce.current.useTransition()};B.version="18.3.1";rs.exports=B;var be=rs.exports;const zu=Ki(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=be,Lu=Symbol.for("react.element"),Mu=Symbol.for("react.fragment"),Iu=Object.prototype.hasOwnProperty,Wu=Du.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hu={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,a={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Iu.call(t,r)&&!Hu.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Lu,type:e,key:i,ref:l,props:a,_owner:Wu.current}}oa.Fragment=Mu;oa.jsx=fs;oa.jsxs=fs;ns.exports=oa;var A=ns.exports,ti={},ps={exports:{}},we={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,P){var R=$.length;$.push(P);e:for(;0<R;){var M=R-1>>>1,D=$[M];if(0<a(D,P))$[M]=P,$[R]=D,R=M;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var P=$[0],R=$.pop();if(R!==P){$[0]=R;e:for(var M=0,D=$.length,Mt=D>>>1;M<Mt;){var ne=2*(M+1)-1,je=$[ne],Se=ne+1,Ve=$[Se];if(0>a(je,R))Se<D&&0>a(Ve,je)?($[M]=Ve,$[Se]=R,M=Se):($[M]=je,$[ne]=R,M=ne);else if(Se<D&&0>a(Ve,R))$[M]=Ve,$[Se]=R,M=Se;else break e}}return P}function a($,P){var R=$.sortIndex-P.sortIndex;return R!==0?R:$.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var u=[],p=[],b=1,x=null,m=3,w=!1,k=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c($){for(var P=n(p);P!==null;){if(P.callback===null)r(p);else if(P.startTime<=$)r(p),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(p)}}function f($){if(_=!1,c($),!k)if(n(u)!==null)k=!0,gn(h);else{var P=n(p);P!==null&&Lt(f,P.startTime-$)}}function h($,P){k=!1,_&&(_=!1,d(y),y=-1),w=!0;var R=m;try{for(c(P),x=n(u);x!==null&&(!(x.expirationTime>P)||$&&!z());){var M=x.callback;if(typeof M=="function"){x.callback=null,m=x.priorityLevel;var D=M(x.expirationTime<=P);P=e.unstable_now(),typeof D=="function"?x.callback=D:x===n(u)&&r(u),c(P)}else r(u);x=n(u)}if(x!==null)var Mt=!0;else{var ne=n(p);ne!==null&&Lt(f,ne.startTime-P),Mt=!1}return Mt}finally{x=null,m=R,w=!1}}var g=!1,v=null,y=-1,C=5,E=-1;function z(){return!(e.unstable_now()-E<C)}function de(){if(v!==null){var $=e.unstable_now();E=$;var P=!0;try{P=v(!0,$)}finally{P?tt():(g=!1,v=null)}}else g=!1}var tt;if(typeof s=="function")tt=function(){s(de)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,ka=hn.port2;hn.port1.onmessage=de,tt=function(){ka.postMessage(null)}}else tt=function(){T(de,0)};function gn($){v=$,g||(g=!0,tt())}function Lt($,P){y=T(function(){$(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,gn(h))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var R=m;m=P;try{return $()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,P){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var R=m;m=$;try{return P()}finally{m=R}},e.unstable_scheduleCallback=function($,P,R){var M=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?M+R:M):R=M,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=R+D,$={id:b++,callback:P,priorityLevel:$,startTime:R,expirationTime:D,sortIndex:-1},R>M?($.sortIndex=R,t(p,$),n(u)===null&&$===n(p)&&(_?(d(y),y=-1):_=!0,Lt(f,R-M))):($.sortIndex=D,t(u,$),k||w||(k=!0,gn(h))),$},e.unstable_shouldYield=z,e.unstable_wrapCallback=function($){var P=m;return function(){var R=m;m=P;try{return $.apply(this,arguments)}finally{m=R}}}})(hs);ms.exports=hs;var Ou=ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=be,_e=Ou;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gs=new Set,Mn={};function zt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Mn[e]=t,e=0;e<t.length;e++)gs.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Vu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xl={},Kl={};function Uu(e){return ni.call(Kl,e)?!0:ni.call(Xl,e)?!1:Vu.test(e)?Kl[e]=!0:(Xl[e]=!0,!1)}function Gu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qu(e,t,n,r){if(t===null||typeof t>"u"||Gu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tl,nl);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tl,nl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tl,nl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function rl(e,t,n,r){var a=te.hasOwnProperty(t)?te[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qu(t,n,a,r)&&(n=null),r||a===null?Uu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),al=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),bs=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),ai=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),ll=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Zl=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Ta;function $n(e){if(Ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ta=t&&t[1]||""}return`
`+Ta+e}var Ea=!1;function Pa(e,t){if(!e||Ea)return"";Ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=o);break}}}finally{Ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function Yu(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=Pa(e.type,!1),e;case 11:return e=Pa(e.type.render,!1),e;case 1:return e=Pa(e.type,!0),e;default:return""}}function li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Wt:return"Portal";case ri:return"Profiler";case al:return"StrictMode";case ai:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bs:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ll:return t=e.displayName||null,t!==null?t:li(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return li(e(t))}catch{}}return null}function Xu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return li(t);case 8:return t===al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ku(e){var t=ys(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Ku(e))}function _s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ys(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oi(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ql(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ws(e,t){t=t.checked,t!=null&&rl(e,"checked",t,!1)}function si(e,t){ws(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&ci(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ci(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Cn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function ks(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function to(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ss(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ss(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zu=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Zu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function Cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function Fs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var qu=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,t){if(t){if(qu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,Jt=null,en=null;function no(e){if(e=ar(e)){if(typeof hi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=fa(t),hi(e.stateNode,e.type,t))}}function Ts(e){Jt?en?en.push(e):en=[e]:Jt=e}function Es(){if(Jt){var e=Jt,t=en;if(en=Jt=null,no(e),t)for(e=0;e<t.length;e++)no(t[e])}}function Ps(e,t){return e(t)}function Rs(){}var Ra=!1;function Bs(e,t,n){if(Ra)return e(t,n);Ra=!0;try{return Ps(e,t,n)}finally{Ra=!1,(Jt!==null||en!==null)&&(Rs(),Es())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var gi=!1;if(Ke)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{gi=!1}function Ju(e,t,n,r,a,i,l,o,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(b){this.onError(b)}}var Pn=!1,Mr=null,Ir=!1,xi=null,e0={onError:function(e){Pn=!0,Mr=e}};function t0(e,t,n,r,a,i,l,o,u){Pn=!1,Mr=null,Ju.apply(e0,arguments)}function n0(e,t,n,r,a,i,l,o,u){if(t0.apply(this,arguments),Pn){if(Pn){var p=Mr;Pn=!1,Mr=null}else throw Error(S(198));Ir||(Ir=!0,xi=p)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ns(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ro(e){if(Dt(e)!==e)throw Error(S(188))}function r0(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return ro(a),e;if(i===r)return ro(a),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,o=a.child;o;){if(o===n){l=!0,n=a,r=i;break}if(o===r){l=!0,r=a,n=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===n){l=!0,n=i,r=a;break}if(o===r){l=!0,r=i,n=a;break}o=o.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function As(e){return e=r0(e),e!==null?zs(e):null}function zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zs(e);if(t!==null)return t;e=e.sibling}return null}var Ds=_e.unstable_scheduleCallback,ao=_e.unstable_cancelCallback,a0=_e.unstable_shouldYield,i0=_e.unstable_requestPaint,Q=_e.unstable_now,l0=_e.unstable_getCurrentPriorityLevel,sl=_e.unstable_ImmediatePriority,Ls=_e.unstable_UserBlockingPriority,Wr=_e.unstable_NormalPriority,o0=_e.unstable_LowPriority,Ms=_e.unstable_IdlePriority,sa=null,He=null;function s0(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:d0,c0=Math.log,u0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(c0(e)/u0|0)|0}var dr=64,fr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~a;o!==0?r=Fn(o):(i&=l,i!==0&&(r=Fn(i)))}else l=n&~a,l!==0?r=Fn(l):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),a=1<<n,r|=e[n],t&=~a;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ze(i),o=1<<l,u=a[l];u===-1?(!(o&n)||o&r)&&(a[l]=f0(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Is(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function Ba(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function m0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ze(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var L=0;function Ws(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hs,ul,Os,js,Vs,vi=!1,pr=[],ut=null,dt=null,ft=null,Hn=new Map,On=new Map,lt=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function io(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function vn(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ar(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function g0(e,t,n,r,a){switch(t){case"focusin":return ut=vn(ut,e,t,n,r,a),!0;case"dragenter":return dt=vn(dt,e,t,n,r,a),!0;case"mouseover":return ft=vn(ft,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Hn.set(i,vn(Hn.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,On.set(i,vn(On.get(i)||null,e,t,n,r,a)),!0}return!1}function Us(e){var t=$t(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ns(n),t!==null){e.blockedOn=t,Vs(e.priority,function(){Os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=ar(n),t!==null&&ul(t),e.blockedOn=n,!1;t.shift()}return!0}function lo(e,t,n){Fr(e)&&n.delete(t)}function x0(){vi=!1,ut!==null&&Fr(ut)&&(ut=null),dt!==null&&Fr(dt)&&(dt=null),ft!==null&&Fr(ft)&&(ft=null),Hn.forEach(lo),On.forEach(lo)}function yn(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,x0)))}function jn(e){function t(a){return yn(a,e)}if(0<pr.length){yn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&yn(ut,e),dt!==null&&yn(dt,e),ft!==null&&yn(ft,e),Hn.forEach(t),On.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)Us(n),n.blockedOn===null&&lt.shift()}var tn=et.ReactCurrentBatchConfig,Or=!0;function b0(e,t,n,r){var a=L,i=tn.transition;tn.transition=null;try{L=1,dl(e,t,n,r)}finally{L=a,tn.transition=i}}function v0(e,t,n,r){var a=L,i=tn.transition;tn.transition=null;try{L=4,dl(e,t,n,r)}finally{L=a,tn.transition=i}}function dl(e,t,n,r){if(Or){var a=yi(e,t,n,r);if(a===null)Oa(e,t,r,jr,n),io(e,r);else if(g0(a,e,t,n,r))r.stopPropagation();else if(io(e,r),t&4&&-1<h0.indexOf(e)){for(;a!==null;){var i=ar(a);if(i!==null&&Hs(i),i=yi(e,t,n,r),i===null&&Oa(e,t,r,jr,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Oa(e,t,r,null,n)}}var jr=null;function yi(e,t,n,r){if(jr=null,e=ol(r),e=$t(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ns(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jr=e,null}function Gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case sl:return 1;case Ls:return 4;case Wr:case o0:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var st=null,fl=null,Tr=null;function Qs(){if(Tr)return Tr;var e,t=fl,n=t.length,r,a="value"in st?st.value:st.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Tr=a.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function oo(){return!1}function ke(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mr:oo,this.isPropagationStopped=oo,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=ke(pn),rr=U({},pn,{view:0,detail:0}),y0=ke(rr),Na,Aa,_n,ca=U({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Na=e.screenX-_n.screenX,Aa=e.screenY-_n.screenY):Aa=Na=0,_n=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),so=ke(ca),_0=U({},ca,{dataTransfer:0}),w0=ke(_0),k0=U({},rr,{relatedTarget:0}),za=ke(k0),S0=U({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=ke(S0),C0=U({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=ke(C0),T0=U({},pn,{data:0}),co=ke(T0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function ml(){return B0}var N0=U({},rr,{key:function(e){if(e.key){var t=E0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=ke(N0),z0=U({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=ke(z0),D0=U({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),L0=ke(D0),M0=U({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=ke(M0),W0=U({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=ke(W0),O0=[9,13,27,32],hl=Ke&&"CompositionEvent"in window,Rn=null;Ke&&"documentMode"in document&&(Rn=document.documentMode);var j0=Ke&&"TextEvent"in window&&!Rn,Ys=Ke&&(!hl||Rn&&8<Rn&&11>=Rn),fo=" ",po=!1;function Xs(e,t){switch(e){case"keyup":return O0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function V0(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(po=!0,fo);case"textInput":return e=t.data,e===fo&&po?null:e;default:return null}}function U0(e,t){if(Ot)return e==="compositionend"||!hl&&Xs(e,t)?(e=Qs(),Tr=fl=st=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ys&&t.locale!=="ko"?null:t.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G0[e.type]:t==="textarea"}function Zs(e,t,n,r){Ts(r),t=Vr(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,Vn=null;function Q0(e){sc(e,0)}function ua(e){var t=Ut(e);if(_s(t))return e}function Y0(e,t){if(e==="change")return t}var qs=!1;if(Ke){var Da;if(Ke){var La="oninput"in document;if(!La){var ho=document.createElement("div");ho.setAttribute("oninput","return;"),La=typeof ho.oninput=="function"}Da=La}else Da=!1;qs=Da&&(!document.documentMode||9<document.documentMode)}function go(){Bn&&(Bn.detachEvent("onpropertychange",Js),Vn=Bn=null)}function Js(e){if(e.propertyName==="value"&&ua(Vn)){var t=[];Zs(t,Vn,e,ol(e)),Bs(Q0,t)}}function X0(e,t,n){e==="focusin"?(go(),Bn=t,Vn=n,Bn.attachEvent("onpropertychange",Js)):e==="focusout"&&go()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ua(Vn)}function Z0(e,t){if(e==="click")return ua(t)}function q0(e,t){if(e==="input"||e==="change")return ua(t)}function J0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:J0;function Un(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ni.call(t,a)||!Le(e[a],t[a]))return!1}return!0}function xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bo(e,t){var n=xo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xo(n)}}function ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tc(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ed(e){var t=tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ec(n.ownerDocument.documentElement,n)){if(r!==null&&gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=bo(n,i);var l=bo(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var td=Ke&&"documentMode"in document&&11>=document.documentMode,jt=null,_i=null,Nn=null,wi=!1;function vo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||jt==null||jt!==Lr(r)||(r=jt,"selectionStart"in r&&gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&Un(Nn,r)||(Nn=r,r=Vr(_i,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jt)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Ma={},nc={};Ke&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function da(e){if(Ma[e])return Ma[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nc)return Ma[e]=t[n];return e}var rc=da("animationend"),ac=da("animationiteration"),ic=da("animationstart"),lc=da("transitionend"),oc=new Map,yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){oc.set(e,t),zt(t,[e])}for(var Ia=0;Ia<yo.length;Ia++){var Wa=yo[Ia],nd=Wa.toLowerCase(),rd=Wa[0].toUpperCase()+Wa.slice(1);yt(nd,"on"+rd)}yt(rc,"onAnimationEnd");yt(ac,"onAnimationIteration");yt(ic,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(lc,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function _o(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n0(r,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],u=o.instance,p=o.currentTarget;if(o=o.listener,u!==i&&a.isPropagationStopped())break e;_o(a,o,p),i=u}else for(l=0;l<r.length;l++){if(o=r[l],u=o.instance,p=o.currentTarget,o=o.listener,u!==i&&a.isPropagationStopped())break e;_o(a,o,p),i=u}}}if(Ir)throw e=xi,Ir=!1,xi=null,e}function W(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var r=e+"__bubble";n.has(r)||(cc(t,e,2,!1),n.add(r))}function Ha(e,t,n){var r=0;t&&(r|=4),cc(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[gr]){e[gr]=!0,gs.forEach(function(n){n!=="selectionchange"&&(ad.has(n)||Ha(n,!1,e),Ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Ha("selectionchange",!1,t))}}function cc(e,t,n,r){switch(Gs(t)){case 1:var a=b0;break;case 4:a=v0;break;default:a=dl}n=a.bind(null,t,n,e),a=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Oa(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;o!==null;){if(l=$t(o),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}o=o.parentNode}}r=r.return}Bs(function(){var p=i,b=ol(n),x=[];e:{var m=oc.get(e);if(m!==void 0){var w=pl,k=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":w=A0;break;case"focusin":k="focus",w=za;break;case"focusout":k="blur",w=za;break;case"beforeblur":case"afterblur":w=za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=L0;break;case rc:case ac:case ic:w=$0;break;case lc:w=I0;break;case"scroll":w=y0;break;case"wheel":w=H0;break;case"copy":case"cut":case"paste":w=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=uo}var _=(t&4)!==0,T=!_&&e==="scroll",d=_?m!==null?m+"Capture":null:m;_=[];for(var s=p,c;s!==null;){c=s;var f=c.stateNode;if(c.tag===5&&f!==null&&(c=f,d!==null&&(f=Wn(s,d),f!=null&&_.push(Qn(s,f,c)))),T)break;s=s.return}0<_.length&&(m=new w(m,k,null,n,b),x.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==mi&&(k=n.relatedTarget||n.fromElement)&&($t(k)||k[Ze]))break e;if((w||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=p,k=k?$t(k):null,k!==null&&(T=Dt(k),k!==T||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=p),w!==k)){if(_=so,f="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=uo,f="onPointerLeave",d="onPointerEnter",s="pointer"),T=w==null?m:Ut(w),c=k==null?m:Ut(k),m=new _(f,s+"leave",w,n,b),m.target=T,m.relatedTarget=c,f=null,$t(b)===p&&(_=new _(d,s+"enter",k,n,b),_.target=c,_.relatedTarget=T,f=_),T=f,w&&k)t:{for(_=w,d=k,s=0,c=_;c;c=It(c))s++;for(c=0,f=d;f;f=It(f))c++;for(;0<s-c;)_=It(_),s--;for(;0<c-s;)d=It(d),c--;for(;s--;){if(_===d||d!==null&&_===d.alternate)break t;_=It(_),d=It(d)}_=null}else _=null;w!==null&&wo(x,m,w,_,!1),k!==null&&T!==null&&wo(x,T,k,_,!0)}}e:{if(m=p?Ut(p):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var h=Y0;else if(mo(m))if(qs)h=q0;else{h=K0;var g=X0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(h=Z0);if(h&&(h=h(e,p))){Zs(x,h,n,b);break e}g&&g(e,m,p),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&ci(m,"number",m.value)}switch(g=p?Ut(p):window,e){case"focusin":(mo(g)||g.contentEditable==="true")&&(jt=g,_i=p,Nn=null);break;case"focusout":Nn=_i=jt=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,vo(x,n,b);break;case"selectionchange":if(td)break;case"keydown":case"keyup":vo(x,n,b)}var v;if(hl)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ot?Xs(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ys&&n.locale!=="ko"&&(Ot||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ot&&(v=Qs()):(st=b,fl="value"in st?st.value:st.textContent,Ot=!0)),g=Vr(p,y),0<g.length&&(y=new co(y,e,null,n,b),x.push({event:y,listeners:g}),v?y.data=v:(v=Ks(n),v!==null&&(y.data=v)))),(v=j0?V0(e,n):U0(e,n))&&(p=Vr(p,"onBeforeInput"),0<p.length&&(b=new co("onBeforeInput","beforeinput",null,n,b),x.push({event:b,listeners:p}),b.data=v))}sc(x,t)})}function Qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Wn(e,n),i!=null&&r.unshift(Qn(e,i,a)),i=Wn(e,t),i!=null&&r.push(Qn(e,i,a))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wo(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var o=n,u=o.alternate,p=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&p!==null&&(o=p,a?(u=Wn(n,i),u!=null&&l.unshift(Qn(n,u,o))):a||(u=Wn(n,i),u!=null&&l.push(Qn(n,u,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var id=/\r\n?/g,ld=/\u0000|\uFFFD/g;function ko(e){return(typeof e=="string"?e:""+e).replace(id,`
`).replace(ld,"")}function xr(e,t,n){if(t=ko(t),ko(e)!==t&&n)throw Error(S(425))}function Ur(){}var ki=null,Si=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,od=typeof clearTimeout=="function"?clearTimeout:void 0,So=typeof Promise=="function"?Promise:void 0,sd=typeof queueMicrotask=="function"?queueMicrotask:typeof So<"u"?function(e){return So.resolve(null).then(e).catch(cd)}:Ci;function cd(e){setTimeout(function(){throw e})}function ja(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);jn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $o(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),We="__reactFiber$"+mn,Yn="__reactProps$"+mn,Ze="__reactContainer$"+mn,Fi="__reactEvents$"+mn,ud="__reactListeners$"+mn,dd="__reactHandles$"+mn;function $t(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$o(e);e!==null;){if(n=e[We])return n;e=$o(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[We]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function fa(e){return e[Yn]||null}var Ti=[],Gt=-1;function _t(e){return{current:e}}function H(e){0>Gt||(e.current=Ti[Gt],Ti[Gt]=null,Gt--)}function I(e,t){Gt++,Ti[Gt]=e.current,e.current=t}var vt={},le=_t(vt),me=_t(!1),Pt=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function he(e){return e=e.childContextTypes,e!=null}function Gr(){H(me),H(le)}function Co(e,t,n){if(le.current!==vt)throw Error(S(168));I(le,t),I(me,n)}function uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,Xu(e)||"Unknown",a));return U({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Pt=le.current,I(le,e),I(me,me.current),!0}function Fo(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=uc(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,H(me),H(le),I(le,e)):H(me),I(me,n)}var Ge=null,pa=!1,Va=!1;function dc(e){Ge===null?Ge=[e]:Ge.push(e)}function fd(e){pa=!0,dc(e)}function wt(){if(!Va&&Ge!==null){Va=!0;var e=0,t=L;try{var n=Ge;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,pa=!1}catch(a){throw Ge!==null&&(Ge=Ge.slice(e+1)),Ds(sl,wt),a}finally{L=t,Va=!1}}return null}var Qt=[],Yt=0,Yr=null,Xr=0,$e=[],Ce=0,Rt=null,Qe=1,Ye="";function kt(e,t){Qt[Yt++]=Xr,Qt[Yt++]=Yr,Yr=e,Xr=t}function fc(e,t,n){$e[Ce++]=Qe,$e[Ce++]=Ye,$e[Ce++]=Rt,Rt=e;var r=Qe;e=Ye;var a=32-ze(r)-1;r&=~(1<<a),n+=1;var i=32-ze(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Qe=1<<32-ze(t)+a|n<<a|r,Ye=i+e}else Qe=1<<i|n<<a|r,Ye=e}function xl(e){e.return!==null&&(kt(e,1),fc(e,1,0))}function bl(e){for(;e===Yr;)Yr=Qt[--Yt],Qt[Yt]=null,Xr=Qt[--Yt],Qt[Yt]=null;for(;e===Rt;)Rt=$e[--Ce],$e[Ce]=null,Ye=$e[--Ce],$e[Ce]=null,Qe=$e[--Ce],$e[Ce]=null}var ye=null,ve=null,O=!1,Ae=null;function pc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function To(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(O){var t=ve;if(t){var n=t;if(!To(e,t)){if(Ei(e))throw Error(S(418));t=pt(n.nextSibling);var r=ye;t&&To(e,t)?pc(r,n):(e.flags=e.flags&-4097|2,O=!1,ye=e)}}else{if(Ei(e))throw Error(S(418));e.flags=e.flags&-4097|2,O=!1,ye=e}}}function Eo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function br(e){if(e!==ye)return!1;if(!O)return Eo(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=ve)){if(Ei(e))throw mc(),Error(S(418));for(;t;)pc(e,t),t=pt(t.nextSibling)}if(Eo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?pt(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=ve;e;)e=pt(e.nextSibling)}function on(){ve=ye=null,O=!1}function vl(e){Ae===null?Ae=[e]:Ae.push(e)}var pd=et.ReactCurrentBatchConfig;function wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Po(e){var t=e._init;return t(e._payload)}function hc(e){function t(d,s){if(e){var c=d.deletions;c===null?(d.deletions=[s],d.flags|=16):c.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function a(d,s){return d=xt(d,s),d.index=0,d.sibling=null,d}function i(d,s,c){return d.index=c,e?(c=d.alternate,c!==null?(c=c.index,c<s?(d.flags|=2,s):c):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,s,c,f){return s===null||s.tag!==6?(s=Za(c,d.mode,f),s.return=d,s):(s=a(s,c),s.return=d,s)}function u(d,s,c,f){var h=c.type;return h===Ht?b(d,s,c.props.children,f,c.key):s!==null&&(s.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===at&&Po(h)===s.type)?(f=a(s,c.props),f.ref=wn(d,s,c),f.return=d,f):(f=Dr(c.type,c.key,c.props,null,d.mode,f),f.ref=wn(d,s,c),f.return=d,f)}function p(d,s,c,f){return s===null||s.tag!==4||s.stateNode.containerInfo!==c.containerInfo||s.stateNode.implementation!==c.implementation?(s=qa(c,d.mode,f),s.return=d,s):(s=a(s,c.children||[]),s.return=d,s)}function b(d,s,c,f,h){return s===null||s.tag!==7?(s=Et(c,d.mode,f,h),s.return=d,s):(s=a(s,c),s.return=d,s)}function x(d,s,c){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Za(""+s,d.mode,c),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case sr:return c=Dr(s.type,s.key,s.props,null,d.mode,c),c.ref=wn(d,null,s),c.return=d,c;case Wt:return s=qa(s,d.mode,c),s.return=d,s;case at:var f=s._init;return x(d,f(s._payload),c)}if(Cn(s)||xn(s))return s=Et(s,d.mode,c,null),s.return=d,s;vr(d,s)}return null}function m(d,s,c,f){var h=s!==null?s.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return h!==null?null:o(d,s,""+c,f);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case sr:return c.key===h?u(d,s,c,f):null;case Wt:return c.key===h?p(d,s,c,f):null;case at:return h=c._init,m(d,s,h(c._payload),f)}if(Cn(c)||xn(c))return h!==null?null:b(d,s,c,f,null);vr(d,c)}return null}function w(d,s,c,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return d=d.get(c)||null,o(s,d,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:return d=d.get(f.key===null?c:f.key)||null,u(s,d,f,h);case Wt:return d=d.get(f.key===null?c:f.key)||null,p(s,d,f,h);case at:var g=f._init;return w(d,s,c,g(f._payload),h)}if(Cn(f)||xn(f))return d=d.get(c)||null,b(s,d,f,h,null);vr(s,f)}return null}function k(d,s,c,f){for(var h=null,g=null,v=s,y=s=0,C=null;v!==null&&y<c.length;y++){v.index>y?(C=v,v=null):C=v.sibling;var E=m(d,v,c[y],f);if(E===null){v===null&&(v=C);break}e&&v&&E.alternate===null&&t(d,v),s=i(E,s,y),g===null?h=E:g.sibling=E,g=E,v=C}if(y===c.length)return n(d,v),O&&kt(d,y),h;if(v===null){for(;y<c.length;y++)v=x(d,c[y],f),v!==null&&(s=i(v,s,y),g===null?h=v:g.sibling=v,g=v);return O&&kt(d,y),h}for(v=r(d,v);y<c.length;y++)C=w(v,d,y,c[y],f),C!==null&&(e&&C.alternate!==null&&v.delete(C.key===null?y:C.key),s=i(C,s,y),g===null?h=C:g.sibling=C,g=C);return e&&v.forEach(function(z){return t(d,z)}),O&&kt(d,y),h}function _(d,s,c,f){var h=xn(c);if(typeof h!="function")throw Error(S(150));if(c=h.call(c),c==null)throw Error(S(151));for(var g=h=null,v=s,y=s=0,C=null,E=c.next();v!==null&&!E.done;y++,E=c.next()){v.index>y?(C=v,v=null):C=v.sibling;var z=m(d,v,E.value,f);if(z===null){v===null&&(v=C);break}e&&v&&z.alternate===null&&t(d,v),s=i(z,s,y),g===null?h=z:g.sibling=z,g=z,v=C}if(E.done)return n(d,v),O&&kt(d,y),h;if(v===null){for(;!E.done;y++,E=c.next())E=x(d,E.value,f),E!==null&&(s=i(E,s,y),g===null?h=E:g.sibling=E,g=E);return O&&kt(d,y),h}for(v=r(d,v);!E.done;y++,E=c.next())E=w(v,d,y,E.value,f),E!==null&&(e&&E.alternate!==null&&v.delete(E.key===null?y:E.key),s=i(E,s,y),g===null?h=E:g.sibling=E,g=E);return e&&v.forEach(function(de){return t(d,de)}),O&&kt(d,y),h}function T(d,s,c,f){if(typeof c=="object"&&c!==null&&c.type===Ht&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case sr:e:{for(var h=c.key,g=s;g!==null;){if(g.key===h){if(h=c.type,h===Ht){if(g.tag===7){n(d,g.sibling),s=a(g,c.props.children),s.return=d,d=s;break e}}else if(g.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===at&&Po(h)===g.type){n(d,g.sibling),s=a(g,c.props),s.ref=wn(d,g,c),s.return=d,d=s;break e}n(d,g);break}else t(d,g);g=g.sibling}c.type===Ht?(s=Et(c.props.children,d.mode,f,c.key),s.return=d,d=s):(f=Dr(c.type,c.key,c.props,null,d.mode,f),f.ref=wn(d,s,c),f.return=d,d=f)}return l(d);case Wt:e:{for(g=c.key;s!==null;){if(s.key===g)if(s.tag===4&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(d,s.sibling),s=a(s,c.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=qa(c,d.mode,f),s.return=d,d=s}return l(d);case at:return g=c._init,T(d,s,g(c._payload),f)}if(Cn(c))return k(d,s,c,f);if(xn(c))return _(d,s,c,f);vr(d,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,s!==null&&s.tag===6?(n(d,s.sibling),s=a(s,c),s.return=d,d=s):(n(d,s),s=Za(c,d.mode,f),s.return=d,d=s),l(d)):n(d,s)}return T}var sn=hc(!0),gc=hc(!1),Kr=_t(null),Zr=null,Xt=null,yl=null;function _l(){yl=Xt=Zr=null}function wl(e){var t=Kr.current;H(Kr),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Zr=e,yl=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Zr===null)throw Error(S(308));Xt=e,Zr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Ct=null;function kl(e){Ct===null?Ct=[e]:Ct.push(e)}function xc(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,kl(t)):(n.next=a.next,a.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,qe(e,n)}return a=r.interleaved,a===null?(t.next=t,kl(r)):(t.next=a.next,a.next=t),r.interleaved=t,qe(e,n)}function Pr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}function Ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qr(e,t,n,r){var a=e.updateQueue;it=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var u=o,p=u.next;u.next=null,l===null?i=p:l.next=p,l=u;var b=e.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==l&&(o===null?b.firstBaseUpdate=p:o.next=p,b.lastBaseUpdate=u))}if(i!==null){var x=a.baseState;l=0,b=p=u=null,o=i;do{var m=o.lane,w=o.eventTime;if((r&m)===m){b!==null&&(b=b.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,_=o;switch(m=t,w=n,_.tag){case 1:if(k=_.payload,typeof k=="function"){x=k.call(w,x,m);break e}x=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=_.payload,m=typeof k=="function"?k.call(w,x,m):k,m==null)break e;x=U({},x,m);break e;case 2:it=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(p=b=w,u=x):b=b.next=w,l|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(b===null&&(u=x),a.baseState=u,a.firstBaseUpdate=p,a.lastBaseUpdate=b,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Nt|=l,e.lanes=l,e.memoizedState=x}}function Bo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var ir={},Oe=_t(ir),Xn=_t(ir),Kn=_t(ir);function Ft(e){if(e===ir)throw Error(S(174));return e}function $l(e,t){switch(I(Kn,t),I(Xn,e),I(Oe,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}H(Oe),I(Oe,t)}function cn(){H(Oe),H(Xn),H(Kn)}function vc(e){Ft(Kn.current);var t=Ft(Oe.current),n=di(t,e.type);t!==n&&(I(Xn,e),I(Oe,n))}function Cl(e){Xn.current===e&&(H(Oe),H(Xn))}var j=_t(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=[];function Fl(){for(var e=0;e<Ua.length;e++)Ua[e]._workInProgressVersionPrimary=null;Ua.length=0}var Rr=et.ReactCurrentDispatcher,Ga=et.ReactCurrentBatchConfig,Bt=0,V=null,X=null,Z=null,ea=!1,An=!1,Zn=0,md=0;function re(){throw Error(S(321))}function Tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Le(e[n],t[n]))return!1;return!0}function El(e,t,n,r,a,i){if(Bt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?bd:vd,e=n(r,a),An){i=0;do{if(An=!1,Zn=0,25<=i)throw Error(S(301));i+=1,Z=X=null,t.updateQueue=null,Rr.current=yd,e=n(r,a)}while(An)}if(Rr.current=ta,t=X!==null&&X.next!==null,Bt=0,Z=X=V=null,ea=!1,t)throw Error(S(300));return e}function Pl(){var e=Zn!==0;return Zn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function Pe(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function qn(e,t){return typeof t=="function"?t(e):t}function Qa(e){var t=Pe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=X,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var o=l=null,u=null,p=i;do{var b=p.lane;if((Bt&b)===b)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var x={lane:b,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(o=u=x,l=r):u=u.next=x,V.lanes|=b,Nt|=b}p=p.next}while(p!==null&&p!==i);u===null?l=r:u.next=o,Le(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,V.lanes|=i,Nt|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ya(e){var t=Pe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);Le(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yc(){}function _c(e,t){var n=V,r=Pe(),a=t(),i=!Le(r.memoizedState,a);if(i&&(r.memoizedState=a,pe=!0),r=r.queue,Rl(Sc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Jn(9,kc.bind(null,n,r,a,t),void 0,null),q===null)throw Error(S(349));Bt&30||wc(n,t,a)}return a}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,r){t.value=n,t.getSnapshot=r,$c(t)&&Cc(e)}function Sc(e,t,n){return n(function(){$c(t)&&Cc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Le(e,n)}catch{return!0}}function Cc(e){var t=qe(e,1);t!==null&&De(t,e,1,-1)}function No(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=xd.bind(null,V,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fc(){return Pe().memoizedState}function Br(e,t,n,r){var a=Ie();V.flags|=e,a.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var a=Pe();r=r===void 0?null:r;var i=void 0;if(X!==null){var l=X.memoizedState;if(i=l.destroy,r!==null&&Tl(r,l.deps)){a.memoizedState=Jn(t,n,i,r);return}}V.flags|=e,a.memoizedState=Jn(1|t,n,i,r)}function Ao(e,t){return Br(8390656,8,e,t)}function Rl(e,t){return ma(2048,8,e,t)}function Tc(e,t){return ma(4,2,e,t)}function Ec(e,t){return ma(4,4,e,t)}function Pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,4,Pc.bind(null,t,e),n)}function Bl(){}function Bc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return Bt&21?(Le(n,t)||(n=Is(),V.lanes|=n,Nt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function hd(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=Ga.transition;Ga.transition={};try{e(!1),t()}finally{L=n,Ga.transition=r}}function zc(){return Pe().memoizedState}function gd(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dc(e))Lc(t,n);else if(n=xc(e,t,n,r),n!==null){var a=se();De(n,e,r,a),Mc(n,t,r)}}function xd(e,t,n){var r=gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))Lc(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,n);if(a.hasEagerState=!0,a.eagerState=o,Le(o,l)){var u=t.interleaved;u===null?(a.next=a,kl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=xc(e,t,a,r),n!==null&&(a=se(),De(n,e,r,a),Mc(n,t,r))}}function Dc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Lc(e,t){An=ea=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}var ta={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},bd={readContext:Ee,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gd.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:No,useDebugValue:Bl,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=No(!1),t=e[0];return e=hd.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,a=Ie();if(O){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),q===null)throw Error(S(349));Bt&30||wc(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ao(Sc.bind(null,r,i,e),[e]),r.flags|=2048,Jn(9,kc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=q.identifierPrefix;if(O){var n=Ye,r=Qe;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=md++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vd={readContext:Ee,useCallback:Bc,useContext:Ee,useEffect:Rl,useImperativeHandle:Rc,useInsertionEffect:Tc,useLayoutEffect:Ec,useMemo:Nc,useReducer:Qa,useRef:Fc,useState:function(){return Qa(qn)},useDebugValue:Bl,useDeferredValue:function(e){var t=Pe();return Ac(t,X.memoizedState,e)},useTransition:function(){var e=Qa(qn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:_c,useId:zc,unstable_isNewReconciler:!1},yd={readContext:Ee,useCallback:Bc,useContext:Ee,useEffect:Rl,useImperativeHandle:Rc,useInsertionEffect:Tc,useLayoutEffect:Ec,useMemo:Nc,useReducer:Ya,useRef:Fc,useState:function(){return Ya(qn)},useDebugValue:Bl,useDeferredValue:function(e){var t=Pe();return X===null?t.memoizedState=e:Ac(t,X.memoizedState,e)},useTransition:function(){var e=Ya(qn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:_c,useId:zc,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ha={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),a=gt(e),i=Xe(r,a);i.payload=t,n!=null&&(i.callback=n),t=mt(e,i,a),t!==null&&(De(t,e,a,r),Pr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),a=gt(e),i=Xe(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mt(e,i,a),t!==null&&(De(t,e,a,r),Pr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=gt(e),a=Xe(n,r);a.tag=2,t!=null&&(a.callback=t),t=mt(e,a,r),t!==null&&(De(t,e,r,n),Pr(t,e,r))}};function zo(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(a,i):!0}function Ic(e,t,n){var r=!1,a=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(a=he(t)?Pt:le.current,r=t.contextTypes,i=(r=r!=null)?ln(e,a):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ha,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Do(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ha.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Sl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ee(i):(i=he(t)?Pt:le.current,a.context=ln(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ha.enqueueReplaceState(a,a.state,null),qr(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var n="",r=t;do n+=Yu(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _d=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ra||(ra=!0,Vi=r),Ai(e,t)},n}function Hc(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ai(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Lo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _d;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=zd.bind(null,e,t,n),t.then(e,e))}function Mo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Io(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var wd=et.ReactCurrentOwner,pe=!1;function oe(e,t,n,r){t.child=e===null?gc(t,null,n,r):sn(t,e.child,n,r)}function Wo(e,t,n,r,a){n=n.render;var i=t.ref;return nn(t,a),r=El(e,t,n,r,i,a),n=Pl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(O&&n&&xl(t),t.flags|=1,oe(e,t,r,a),t.child)}function Ho(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Wl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Oc(e,t,i,r,a)):(e=Dr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(l,r)&&e.ref===t.ref)return Je(e,t,a)}return t.flags|=1,e=xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,a)}return zi(e,t,n,r,a)}function jc(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Zt,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Zt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Zt,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Zt,xe),xe|=r;return oe(e,t,a,n),t.child}function Vc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,a){var i=he(n)?Pt:le.current;return i=ln(t,i),nn(t,a),n=El(e,t,n,r,i,a),r=Pl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(O&&r&&xl(t),t.flags|=1,oe(e,t,n,a),t.child)}function Oo(e,t,n,r,a){if(he(n)){var i=!0;Qr(t)}else i=!1;if(nn(t,a),t.stateNode===null)Nr(e,t),Ic(t,n,r),Ni(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var u=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ee(p):(p=he(n)?Pt:le.current,p=ln(t,p));var b=n.getDerivedStateFromProps,x=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||u!==p)&&Do(t,l,r,p),it=!1;var m=t.memoizedState;l.state=m,qr(t,r,l,a),u=t.memoizedState,o!==r||m!==u||me.current||it?(typeof b=="function"&&(Bi(t,n,b,r),u=t.memoizedState),(o=it||zo(t,n,o,r,m,u,p))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=p,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,bc(e,t),o=t.memoizedProps,p=t.type===t.elementType?o:Be(t.type,o),l.props=p,x=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?Pt:le.current,u=ln(t,u));var w=n.getDerivedStateFromProps;(b=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==x||m!==u)&&Do(t,l,r,u),it=!1,m=t.memoizedState,l.state=m,qr(t,r,l,a);var k=t.memoizedState;o!==x||m!==k||me.current||it?(typeof w=="function"&&(Bi(t,n,w,r),k=t.memoizedState),(p=it||zo(t,n,p,r,m,k,u)||!1)?(b||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=p):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,i,a)}function Di(e,t,n,r,a,i){Vc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Fo(t,n,!1),Je(e,t,i);r=t.stateNode,wd.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=sn(t,e.child,null,i),t.child=sn(t,null,o,i)):oe(e,t,o,i),t.memoizedState=r.state,a&&Fo(t,n,!0),t.child}function Uc(e){var t=e.stateNode;t.pendingContext?Co(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Co(e,t.context,!1),$l(e,t.containerInfo)}function jo(e,t,n,r,a){return on(),vl(a),t.flags|=256,oe(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gc(e,t,n){var r=t.pendingProps,a=j.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),I(j,a&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ba(l,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mi(n),t.memoizedState=Li,e):Nl(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return kd(e,t,l,r,o,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,o=a.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xt(a,u),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=xt(o,i):(i=Et(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Mi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return i=e.child,e=i.sibling,r=xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nl(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&vl(r),sn(t,e.child,null,n),e=Nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kd(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Xa(Error(S(422))),yr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=ba({mode:"visible",children:r.children},a,0,null),i=Et(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sn(t,e.child,null,l),t.child.memoizedState=Mi(l),t.memoizedState=Li,i);if(!(t.mode&1))return yr(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(S(419)),r=Xa(i,r,void 0),yr(e,t,l,r)}if(o=(l&e.childLanes)!==0,pe||o){if(r=q,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,qe(e,a),De(r,e,a,-1))}return Il(),r=Xa(Error(S(421))),yr(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Dd.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ve=pt(a.nextSibling),ye=t,O=!0,Ae=null,e!==null&&($e[Ce++]=Qe,$e[Ce++]=Ye,$e[Ce++]=Rt,Qe=e.id,Ye=e.overflow,Rt=t),t=Nl(t,r.children),t.flags|=4096,t)}function Vo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function Ka(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Qc(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=j.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vo(e,n,t);else if(e.tag===19)Vo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(j,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ka(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Jr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ka(t,!0,n,null,i);break;case"together":Ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sd(e,t,n){switch(t.tag){case 3:Uc(t),on();break;case 5:vc(t);break;case 1:he(t.type)&&Qr(t);break;case 4:$l(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;I(Kr,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(j,j.current&1),t.flags|=128,null):n&t.child.childLanes?Gc(e,t,n):(I(j,j.current&1),e=Je(e,t,n),e!==null?e.sibling:null);I(j,j.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),I(j,j.current),r)break;return null;case 22:case 23:return t.lanes=0,jc(e,t,n)}return Je(e,t,n)}var Yc,Ii,Xc,Kc;Yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ii=function(){};Xc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ft(Oe.current);var i=null;switch(n){case"input":a=oi(e,a),r=oi(e,r),i=[];break;case"select":a=U({},a,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":a=ui(e,a),r=ui(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}fi(n,r);var l;n=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var o=a[p];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Mn.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var u=r[p];if(o=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&u!==o&&(u!=null||o!=null))if(p==="style")if(o){for(l in o)!o.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&o[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&W("scroll",e),i||o===u||(i=[])):(i=i||[]).push(p,u))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};Kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $d(e,t,n){var r=t.pendingProps;switch(bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return he(t.type)&&Gr(),ae(t),null;case 3:return r=t.stateNode,cn(),H(me),H(le),Fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Qi(Ae),Ae=null))),Ii(e,t),ae(t),null;case 5:Cl(t);var a=Ft(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Xc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ae(t),null}if(e=Ft(Oe.current),br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[We]=t,r[Yn]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(a=0;a<Tn.length;a++)W(Tn[a],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ql(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":eo(r,i),W("invalid",r)}fi(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,o,e),a=["children",""+o]):Mn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":cr(r),Jl(r,i,!0);break;case"textarea":cr(r),to(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ss(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[We]=t,e[Yn]=r,Yc(e,t,!1,!1),t.stateNode=e;e:{switch(l=pi(n,r),n){case"dialog":W("cancel",e),W("close",e),a=r;break;case"iframe":case"object":case"embed":W("load",e),a=r;break;case"video":case"audio":for(a=0;a<Tn.length;a++)W(Tn[a],e);a=r;break;case"source":W("error",e),a=r;break;case"img":case"image":case"link":W("error",e),W("load",e),a=r;break;case"details":W("toggle",e),a=r;break;case"input":ql(e,r),a=oi(e,r),W("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=U({},r,{value:void 0}),W("invalid",e);break;case"textarea":eo(e,r),a=ui(e,r),W("invalid",e);break;default:a=r}fi(n,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?Fs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$s(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&rl(e,i,u,l))}switch(n){case"input":cr(e),Jl(e,r,!1);break;case"textarea":cr(e),to(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ft(Kn.current),Ft(Oe.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(H(j),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ve!==null&&t.mode&1&&!(t.flags&128))mc(),on(),t.flags|=98560,i=!1;else if(i=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[We]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Ae!==null&&(Qi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||j.current&1?K===0&&(K=3):Il())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return cn(),Ii(e,t),e===null&&Gn(t.stateNode.containerInfo),ae(t),null;case 10:return wl(t.type._context),ae(t),null;case 17:return he(t.type)&&Gr(),ae(t),null;case 19:if(H(j),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)kn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Jr(e),l!==null){for(t.flags|=128,kn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(j,j.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>dn&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!O)return ae(t),null}else 2*Q()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=j.current,I(j,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Cd(e,t){switch(bl(t),t.tag){case 1:return he(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),H(me),H(le),Fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(H(j),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(j),null;case 4:return cn(),null;case 10:return wl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var _r=!1,ie=!1,Fd=typeof WeakSet=="function"?WeakSet:Set,F=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){G(e,t,r)}}var Uo=!1;function Td(e,t){if(ki=Or,e=tc(),gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,o=-1,u=-1,p=0,b=0,x=e,m=null;t:for(;;){for(var w;x!==n||a!==0&&x.nodeType!==3||(o=l+a),x!==i||r!==0&&x.nodeType!==3||(u=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(w=x.firstChild)!==null;)m=x,x=w;for(;;){if(x===e)break t;if(m===n&&++p===a&&(o=l),m===i&&++b===r&&(u=l),(w=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=w}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},Or=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var _=k.memoizedProps,T=k.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:Be(t.type,_),T);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(f){G(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return k=Uo,Uo=!1,k}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Wi(t,n,i)}a=a.next}while(a!==r)}}function ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zc(e){var t=e.alternate;t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Yn],delete t[Fi],delete t[ud],delete t[dd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function Go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ji(e,t,n),e=e.sibling;e!==null;)ji(e,t,n),e=e.sibling}var J=null,Ne=!1;function rt(e,t,n){for(n=n.child;n!==null;)Jc(e,t,n),n=n.sibling}function Jc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 5:ie||Kt(n,t);case 6:var r=J,a=Ne;J=null,rt(e,t,n),J=r,Ne=a,J!==null&&(Ne?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Ne?(e=J,n=n.stateNode,e.nodeType===8?ja(e.parentNode,n):e.nodeType===1&&ja(e,n),jn(e)):ja(J,n.stateNode));break;case 4:r=J,a=Ne,J=n.stateNode.containerInfo,Ne=!0,rt(e,t,n),J=r,Ne=a;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Wi(n,t,l),a=a.next}while(a!==r)}rt(e,t,n);break;case 1:if(!ie&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){G(n,t,o)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,rt(e,t,n),ie=r):rt(e,t,n);break;default:rt(e,t,n)}}function Qo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fd),t.forEach(function(r){var a=Ld.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Ne=!1;break e;case 3:J=o.stateNode.containerInfo,Ne=!0;break e;case 4:J=o.stateNode.containerInfo,Ne=!0;break e}o=o.return}if(J===null)throw Error(S(160));Jc(i,l,a),J=null,Ne=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(p){G(a,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eu(t,e),t=t.sibling}function eu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Me(e),r&4){try{zn(3,e,e.return),ga(3,e)}catch(_){G(e,e.return,_)}try{zn(5,e,e.return)}catch(_){G(e,e.return,_)}}break;case 1:Re(t,e),Me(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(Re(t,e),Me(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var a=e.stateNode;try{In(a,"")}catch(_){G(e,e.return,_)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&ws(a,i),pi(o,l);var p=pi(o,i);for(l=0;l<u.length;l+=2){var b=u[l],x=u[l+1];b==="style"?Fs(a,x):b==="dangerouslySetInnerHTML"?$s(a,x):b==="children"?In(a,x):rl(a,b,x,p)}switch(o){case"input":si(a,i);break;case"textarea":ks(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?qt(a,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?qt(a,!!i.multiple,i.defaultValue,!0):qt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Yn]=i}catch(_){G(e,e.return,_)}}break;case 6:if(Re(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(_){G(e,e.return,_)}}break;case 3:if(Re(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(_){G(e,e.return,_)}break;case 4:Re(t,e),Me(e);break;case 13:Re(t,e),Me(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Dl=Q())),r&4&&Qo(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(p=ie)||b,Re(t,e),ie=p):Re(t,e),Me(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!b&&e.mode&1)for(F=e,b=e.child;b!==null;){for(x=F=b;F!==null;){switch(m=F,w=m.child,m.tag){case 0:case 11:case 14:case 15:zn(4,m,m.return);break;case 1:Kt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:Kt(m,m.return);break;case 22:if(m.memoizedState!==null){Xo(x);continue}}w!==null?(w.return=m,F=w):Xo(x)}b=b.sibling}e:for(b=null,x=e;;){if(x.tag===5){if(b===null){b=x;try{a=x.stateNode,p?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=x.stateNode,u=x.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Cs("display",l))}catch(_){G(e,e.return,_)}}}else if(x.tag===6){if(b===null)try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(_){G(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;b===x&&(b=null),x=x.return}b===x&&(b=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Re(t,e),Me(e),r&4&&Qo(e);break;case 21:break;default:Re(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(In(a,""),r.flags&=-33);var i=Go(e);ji(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,o=Go(e);Oi(e,o,l);break;default:throw Error(S(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ed(e,t,n){F=e,tu(e)}function tu(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var a=F,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||_r;if(!l){var o=a.alternate,u=o!==null&&o.memoizedState!==null||ie;o=_r;var p=ie;if(_r=l,(ie=u)&&!p)for(F=a;F!==null;)l=F,u=l.child,l.tag===22&&l.memoizedState!==null?Ko(a):u!==null?(u.return=l,F=u):Ko(a);for(;i!==null;)F=i,tu(i),i=i.sibling;F=a,_r=o,ie=p}Yo(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,F=i):Yo(e)}}function Yo(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||ga(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bo(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bo(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var b=p.memoizedState;if(b!==null){var x=b.dehydrated;x!==null&&jn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||t.flags&512&&Hi(t)}catch(m){G(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Xo(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Ko(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ga(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){G(t,a,u)}}var i=t.return;try{Hi(t)}catch(u){G(t,i,u)}break;case 5:var l=t.return;try{Hi(t)}catch(u){G(t,l,u)}}}catch(u){G(t,t.return,u)}if(t===e){F=null;break}var o=t.sibling;if(o!==null){o.return=t.return,F=o;break}F=t.return}}var Pd=Math.ceil,na=et.ReactCurrentDispatcher,Al=et.ReactCurrentOwner,Te=et.ReactCurrentBatchConfig,N=0,q=null,Y=null,ee=0,xe=0,Zt=_t(0),K=0,er=null,Nt=0,xa=0,zl=0,Dn=null,fe=null,Dl=0,dn=1/0,Ue=null,ra=!1,Vi=null,ht=null,wr=!1,ct=null,aa=0,Ln=0,Ui=null,Ar=-1,zr=0;function se(){return N&6?Q():Ar!==-1?Ar:Ar=Q()}function gt(e){return e.mode&1?N&2&&ee!==0?ee&-ee:pd.transition!==null?(zr===0&&(zr=Is()),zr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Gs(e.type)),e):1}function De(e,t,n,r){if(50<Ln)throw Ln=0,Ui=null,Error(S(185));nr(e,n,r),(!(N&2)||e!==q)&&(e===q&&(!(N&2)&&(xa|=n),K===4&&ot(e,ee)),ge(e,r),n===1&&N===0&&!(t.mode&1)&&(dn=Q()+500,pa&&wt()))}function ge(e,t){var n=e.callbackNode;p0(e,t);var r=Hr(e,e===q?ee:0);if(r===0)n!==null&&ao(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ao(n),t===1)e.tag===0?fd(Zo.bind(null,e)):dc(Zo.bind(null,e)),sd(function(){!(N&6)&&wt()}),n=null;else{switch(Ws(r)){case 1:n=sl;break;case 4:n=Ls;break;case 16:n=Wr;break;case 536870912:n=Ms;break;default:n=Wr}n=cu(n,nu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nu(e,t){if(Ar=-1,zr=0,N&6)throw Error(S(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Hr(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ia(e,r);else{t=r;var a=N;N|=2;var i=au();(q!==e||ee!==t)&&(Ue=null,dn=Q()+500,Tt(e,t));do try{Nd();break}catch(o){ru(e,o)}while(!0);_l(),na.current=i,N=a,Y!==null?t=0:(q=null,ee=0,t=K)}if(t!==0){if(t===2&&(a=bi(e),a!==0&&(r=a,t=Gi(e,a))),t===1)throw n=er,Tt(e,0),ot(e,r),ge(e,Q()),n;if(t===6)ot(e,r);else{if(a=e.current.alternate,!(r&30)&&!Rd(a)&&(t=ia(e,r),t===2&&(i=bi(e),i!==0&&(r=i,t=Gi(e,i))),t===1))throw n=er,Tt(e,0),ot(e,r),ge(e,Q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:St(e,fe,Ue);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Dl+500-Q(),10<t)){if(Hr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ci(St.bind(null,e,fe,Ue),t);break}St(e,fe,Ue);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ze(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pd(r/1960))-r,10<r){e.timeoutHandle=Ci(St.bind(null,e,fe,Ue),r);break}St(e,fe,Ue);break;case 5:St(e,fe,Ue);break;default:throw Error(S(329))}}}return ge(e,Q()),e.callbackNode===n?nu.bind(null,e):null}function Gi(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ia(e,t),e!==2&&(t=fe,fe=n,t!==null&&Qi(t)),e}function Qi(e){fe===null?fe=e:fe.push.apply(fe,e)}function Rd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Le(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~zl,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Zo(e){if(N&6)throw Error(S(327));rn();var t=Hr(e,0);if(!(t&1))return ge(e,Q()),null;var n=ia(e,t);if(e.tag!==0&&n===2){var r=bi(e);r!==0&&(t=r,n=Gi(e,r))}if(n===1)throw n=er,Tt(e,0),ot(e,t),ge(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,fe,Ue),ge(e,Q()),null}function Ll(e,t){var n=N;N|=1;try{return e(t)}finally{N=n,N===0&&(dn=Q()+500,pa&&wt())}}function At(e){ct!==null&&ct.tag===0&&!(N&6)&&rn();var t=N;N|=1;var n=Te.transition,r=L;try{if(Te.transition=null,L=1,e)return e()}finally{L=r,Te.transition=n,N=t,!(N&6)&&wt()}}function Ml(){xe=Zt.current,H(Zt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,od(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:cn(),H(me),H(le),Fl();break;case 5:Cl(r);break;case 4:cn();break;case 13:H(j);break;case 19:H(j);break;case 10:wl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(q=e,Y=e=xt(e.current,null),ee=xe=t,K=0,er=null,zl=xa=Nt=0,fe=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}Ct=null}return e}function ru(e,t){do{var n=Y;try{if(_l(),Rr.current=ta,ea){for(var r=V.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ea=!1}if(Bt=0,Z=X=V=null,An=!1,Zn=0,Al.current=null,n===null||n.return===null){K=1,er=t,Y=null;break}e:{var i=e,l=n.return,o=n,u=t;if(t=ee,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,b=o,x=b.tag;if(!(b.mode&1)&&(x===0||x===11||x===15)){var m=b.alternate;m?(b.updateQueue=m.updateQueue,b.memoizedState=m.memoizedState,b.lanes=m.lanes):(b.updateQueue=null,b.memoizedState=null)}var w=Mo(l);if(w!==null){w.flags&=-257,Io(w,l,o,i,t),w.mode&1&&Lo(i,p,t),t=w,u=p;var k=t.updateQueue;if(k===null){var _=new Set;_.add(u),t.updateQueue=_}else k.add(u);break e}else{if(!(t&1)){Lo(i,p,t),Il();break e}u=Error(S(426))}}else if(O&&o.mode&1){var T=Mo(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Io(T,l,o,i,t),vl(un(u,o));break e}}i=u=un(u,o),K!==4&&(K=2),Dn===null?Dn=[i]:Dn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Wc(i,u,t);Ro(i,d);break e;case 1:o=u;var s=i.type,c=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ht===null||!ht.has(c)))){i.flags|=65536,t&=-t,i.lanes|=t;var f=Hc(i,o,t);Ro(i,f);break e}}i=i.return}while(i!==null)}lu(n)}catch(h){t=h,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function au(){var e=na.current;return na.current=ta,e===null?ta:e}function Il(){(K===0||K===3||K===2)&&(K=4),q===null||!(Nt&268435455)&&!(xa&268435455)||ot(q,ee)}function ia(e,t){var n=N;N|=2;var r=au();(q!==e||ee!==t)&&(Ue=null,Tt(e,t));do try{Bd();break}catch(a){ru(e,a)}while(!0);if(_l(),N=n,na.current=r,Y!==null)throw Error(S(261));return q=null,ee=0,K}function Bd(){for(;Y!==null;)iu(Y)}function Nd(){for(;Y!==null&&!a0();)iu(Y)}function iu(e){var t=su(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?lu(e):Y=t,Al.current=null}function lu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(n=$d(n,t,xe),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);K===0&&(K=5)}function St(e,t,n){var r=L,a=Te.transition;try{Te.transition=null,L=1,Ad(e,t,n,r)}finally{Te.transition=a,L=r}return null}function Ad(e,t,n,r){do rn();while(ct!==null);if(N&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(m0(e,i),e===q&&(Y=q=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,cu(Wr,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var l=L;L=1;var o=N;N|=4,Al.current=null,Td(e,n),eu(n,e),ed(Si),Or=!!ki,Si=ki=null,e.current=n,Ed(n),i0(),N=o,L=l,Te.transition=i}else e.current=n;if(wr&&(wr=!1,ct=e,aa=a),i=e.pendingLanes,i===0&&(ht=null),s0(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ra)throw ra=!1,e=Vi,Vi=null,e;return aa&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Ui?Ln++:(Ln=0,Ui=e):Ln=0,wt(),null}function rn(){if(ct!==null){var e=Ws(aa),t=Te.transition,n=L;try{if(Te.transition=null,L=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,aa=0,N&6)throw Error(S(331));var a=N;for(N|=4,F=e.current;F!==null;){var i=F,l=i.child;if(F.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var p=o[u];for(F=p;F!==null;){var b=F;switch(b.tag){case 0:case 11:case 15:zn(8,b,i)}var x=b.child;if(x!==null)x.return=b,F=x;else for(;F!==null;){b=F;var m=b.sibling,w=b.return;if(Zc(b),b===p){F=null;break}if(m!==null){m.return=w,F=m;break}F=w}}}var k=i.alternate;if(k!==null){var _=k.child;if(_!==null){k.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}F=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,F=l;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,F=d;break e}F=i.return}}var s=e.current;for(F=s;F!==null;){l=F;var c=l.child;if(l.subtreeFlags&2064&&c!==null)c.return=l,F=c;else e:for(l=s;F!==null;){if(o=F,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ga(9,o)}}catch(h){G(o,o.return,h)}if(o===l){F=null;break e}var f=o.sibling;if(f!==null){f.return=o.return,F=f;break e}F=o.return}}if(N=a,wt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(sa,e)}catch{}r=!0}return r}finally{L=n,Te.transition=t}}return!1}function qo(e,t,n){t=un(n,t),t=Wc(e,t,1),e=mt(e,t,1),t=se(),e!==null&&(nr(e,1,t),ge(e,t))}function G(e,t,n){if(e.tag===3)qo(e,e,n);else for(;t!==null;){if(t.tag===3){qo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=un(n,e),e=Hc(t,e,1),t=mt(t,e,1),e=se(),t!==null&&(nr(t,1,e),ge(t,e));break}}t=t.return}}function zd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ee&n)===n&&(K===4||K===3&&(ee&130023424)===ee&&500>Q()-Dl?Tt(e,0):zl|=n),ge(e,t)}function ou(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=se();e=qe(e,t),e!==null&&(nr(e,t,n),ge(e,n))}function Dd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ou(e,n)}function Ld(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),ou(e,n)}var su;su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Sd(e,t,n);pe=!!(e.flags&131072)}else pe=!1,O&&t.flags&1048576&&fc(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var a=ln(t,le.current);nn(t,n),a=El(null,t,r,e,a,n);var i=Pl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Qr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Sl(t),a.updater=ha,t.stateNode=a,a._reactInternals=t,Ni(t,r,e,n),t=Di(null,t,r,!0,i,n)):(t.tag=0,O&&i&&xl(t),oe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Id(r),e=Be(r,e),a){case 0:t=zi(null,t,r,e,n);break e;case 1:t=Oo(null,t,r,e,n);break e;case 11:t=Wo(null,t,r,e,n);break e;case 14:t=Ho(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),zi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),Oo(e,t,r,a,n);case 3:e:{if(Uc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,a=i.element,bc(e,t),qr(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=un(Error(S(423)),t),t=jo(e,t,r,n,a);break e}else if(r!==a){a=un(Error(S(424)),t),t=jo(e,t,r,n,a);break e}else for(ve=pt(t.stateNode.containerInfo.firstChild),ye=t,O=!0,Ae=null,n=gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===a){t=Je(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return vc(t),e===null&&Pi(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,$i(r,a)?l=null:i!==null&&$i(r,i)&&(t.flags|=32),Vc(e,t),oe(e,t,l,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return Gc(e,t,n);case 4:return $l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),Wo(e,t,r,a,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,I(Kr,r._currentValue),r._currentValue=l,i!==null)if(Le(i.value,l)){if(i.children===a.children&&!me.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Xe(-1,n&-n),u.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var b=p.pending;b===null?u.next=u:(u.next=b.next,b.next=u),p.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ri(i.return,n,t),o.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ri(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nn(t,n),a=Ee(a),r=r(a),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,a=Be(r,t.pendingProps),a=Be(r.type,a),Ho(e,t,r,a,n);case 15:return Oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),Nr(e,t),t.tag=1,he(r)?(e=!0,Qr(t)):e=!1,nn(t,n),Ic(t,r,a),Ni(t,r,a,n),Di(null,t,r,!0,e,n);case 19:return Qc(e,t,n);case 22:return jc(e,t,n)}throw Error(S(156,t.tag))};function cu(e,t){return Ds(e,t)}function Md(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new Md(e,t,n,r)}function Wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return Wl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===ll)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")Wl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ht:return Et(n.children,a,i,t);case al:l=8,a|=8;break;case ri:return e=Fe(12,n,t,a|2),e.elementType=ri,e.lanes=i,e;case ai:return e=Fe(13,n,t,a),e.elementType=ai,e.lanes=i,e;case ii:return e=Fe(19,n,t,a),e.elementType=ii,e.lanes=i,e;case vs:return ba(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:l=10;break e;case bs:l=9;break e;case il:l=11;break e;case ll:l=14;break e;case at:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function ba(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=vs,e.lanes=n,e.stateNode={isHidden:!1},e}function Za(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function qa(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wd(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Hl(e,t,n,r,a,i,l,o,u){return e=new Wd(e,t,n,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(i),e}function Hd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uu(e){if(!e)return vt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(he(n))return uc(e,n,t)}return t}function du(e,t,n,r,a,i,l,o,u){return e=Hl(n,r,!0,e,a,i,l,o,u),e.context=uu(null),n=e.current,r=se(),a=gt(n),i=Xe(r,a),i.callback=t??null,mt(n,i,a),e.current.lanes=a,nr(e,a,r),ge(e,r),e}function va(e,t,n,r){var a=t.current,i=se(),l=gt(a);return n=uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(a,t,l),e!==null&&(De(e,a,l,i),Pr(e,a,l)),l}function la(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ol(e,t){Jo(e,t),(e=e.alternate)&&Jo(e,t)}function Od(){return null}var fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}ya.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));va(e,t,null,null)};ya.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){va(null,e,null,null)}),t[Ze]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&Us(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function es(){}function jd(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var p=la(l);i.call(p)}}var l=du(t,r,e,0,null,!1,!1,"",es);return e._reactRootContainer=l,e[Ze]=l.current,Gn(e.nodeType===8?e.parentNode:e),At(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var p=la(u);o.call(p)}}var u=Hl(e,0,!1,null,null,!1,!1,"",es);return e._reactRootContainer=u,e[Ze]=u.current,Gn(e.nodeType===8?e.parentNode:e),At(function(){va(t,u,n,r)}),u}function wa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var u=la(l);o.call(u)}}va(t,l,e,a)}else l=jd(n,t,e,a,r);return la(l)}Hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(cl(t,n|1),ge(t,Q()),!(N&6)&&(dn=Q()+500,wt()))}break;case 13:At(function(){var r=qe(e,1);if(r!==null){var a=se();De(r,e,1,a)}}),Ol(e,1)}};ul=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=se();De(t,e,134217728,n)}Ol(e,134217728)}};Os=function(e){if(e.tag===13){var t=gt(e),n=qe(e,t);if(n!==null){var r=se();De(n,e,t,r)}Ol(e,t)}};js=function(){return L};Vs=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};hi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=fa(r);if(!a)throw Error(S(90));_s(r),si(r,a)}}}break;case"textarea":ks(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Ps=Ll;Rs=At;var Vd={usingClientEntryPoint:!1,Events:[ar,Ut,fa,Ts,Es,Ll]},Sn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ud={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||Od,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{sa=kr.inject(Ud),He=kr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(S(200));return Hd(e,t,null,n)};we.createRoot=function(e,t){if(!Vl(e))throw Error(S(299));var n=!1,r="",a=fu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Hl(e,1,!1,null,null,n,!1,r,a),e[Ze]=t.current,Gn(e.nodeType===8?e.parentNode:e),new jl(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=As(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return At(e)};we.hydrate=function(e,t,n){if(!_a(t))throw Error(S(200));return wa(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Vl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=fu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=du(t,null,e,1,n??null,a,!1,i,l),e[Ze]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ya(t)};we.render=function(e,t,n){if(!_a(t))throw Error(S(200));return wa(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!_a(e))throw Error(S(40));return e._reactRootContainer?(At(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};we.unstable_batchedUpdates=Ll;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_a(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return wa(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function pu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pu)}catch(e){console.error(e)}}pu(),ps.exports=we;var Gd=ps.exports,ts=Gd;ti.createRoot=ts.createRoot,ti.hydrateRoot=ts.hydrateRoot;const Qd=`version: 0.5

// Button Styles Builder
// #main    - Standard button (ui atlas: button-idle/hover/pressed/disabled)
// #warning - Warning/alert animated button (ui atlas: Altcolor/Button_Warning_3x3_*)
// #small   - Compact pixel button (ui-new atlas: btn_*_32x16)
// #color   - Color swatch button (shows colored rect instead of text)

#main programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Button", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffff12, textShadow:[true, false]=false) {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0

    @(textShadow=>false) text($font, $buttonText, $fontColor, center, $width): 0, ($height - $ctx.font($font).lineHeight) / 2
    @(textShadow=>true) text($font, $buttonText, $fontColor, center, $width, dropShadowXY: 1, 1): 0, ($height - $ctx.font($font).lineHeight) / 2
    settings{width:int=>$width, height:int=>$height, font:string=>$font, fontColor:int=>$fontColor}
}

#warning programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Warning", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffff12, textShadow:[true, false]=false) {
    @(status=>normal, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_disabled", $width, $height):       0,0

    @(textShadow=>false) text($font, $buttonText, $fontColor, center, $width): 0, ($height - $ctx.font($font).lineHeight) / 2
    @(textShadow=>true) text($font, $buttonText, $fontColor, center, $width, dropShadowXY: 1, 1): 0, ($height - $ctx.font($font).lineHeight) / 2
    settings{width:int=>$width, height:int=>$height, font:string=>$font, fontColor:int=>$fontColor}
}

#small programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="OK", font="f7x5", fontColor:int=0xffffff12) {
    scale: 2
    @(status=>normal, disabled=>false) bitmap(sheet("ui-new", "btn_normal_32x16")):   0,0
    @(status=>hover, disabled=>false) bitmap(sheet("ui-new", "btn_hover_32x16")):     0,0
    @(status=>pressed, disabled=>false) bitmap(sheet("ui-new", "btn_pressed_32x16")): 0,0
    @(status=>*, disabled=>true) bitmap(sheet("ui-new", "btn_disabled_32x16")):       0,0

    text($font, $buttonText, $fontColor, center, 32): 0,4
    settings{font:string=>$font, fontColor:int=>$fontColor}
}

#color programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="", width:uint=60, height:uint=22, color:int=0xff0000) {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0
    bitmap(generated(color($width - 8, $height - 8, $color))): 4, 4
    settings{width:int=>$width, height:int=>$height, color:int=>$color}
}
`,Yd=`version: 0.5

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
`,Xd=`version: 0.5

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
`,Kd=`version: 0.5

// Conditionals Demo
// All conditional types demonstrated

#conditionalsDemo programmable(value:0..100=50) {
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

    // Section 5: Visual indicator bar
    text(m6x11, "5. Visual bar (width = $value * 4):", #cccccc, left, 400): 0, 300
    bitmap(generated(color(400, 20, #222233))): 0, 320
    bitmap(generated(color($value * 4, 20, #4488cc))): 0, 320

    // Current value display
    text(exo2_20, 'Current value: \${value}', #ffffff, left, 300): 0, 370

    // Slider label
    text(exo2_14, "Value slider", #888888, left, 200): 0, 420
}
`,Zd=`version: 0.5

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
`,qd=`version: 0.5

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
`,Jd=`version: 0.5

// Incremental Updates Demo
// Build once, update live via setParameter() without rebuild

#incrementalDemo programmable(value:0..100=50) {
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

    // Slider label
    text(exo2_14, "Drag slider to update all elements live", #888888, left, 400): 0, 400
}
`,ef=`version: 0.5

// Interactives Demo
// Hit regions with typed metadata

#interactivesDemo programmable() {
    text(exo2_16, "Interactive Regions", #7fdbda, left, 400): 0, 0
    text(exo2_light_14, "Click on colored regions. Each has an id and metadata.", #aaaaaa, left, 600): 0, 30

    // Interactive region 1: simple
    point {
        pos: 0, 80
        bitmap(generated(color(200, 50, #334466))): 0, 0
        text(m6x11, "Button A - simple id", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonA"): 0, 0
    }

    // Interactive region 2: with action metadata
    point {
        pos: 0, 150
        bitmap(generated(color(200, 50, #443366))): 0, 0
        text(m6x11, "Button B - action=>buy", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonB", action => "buy"): 0, 0
    }

    // Interactive region 3: with typed metadata
    point {
        pos: 0, 220
        bitmap(generated(color(200, 50, #336644))): 0, 0
        text(m6x11, "Button C - typed meta", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonC", price:int => 100, label => "Buy Sword"): 0, 0
    }

    // Interactive region 4: debug visible
    point {
        pos: 0, 290
        bitmap(generated(color(200, 50, #664433))): 0, 0
        text(m6x11, "Button D - debug mode", #ffffff, left, 180): 10, 18
        interactive(200, 50, "buttonD", debug): 0, 0
    }

    // Interactive region 5: with multiple metadata
    point {
        pos: 250, 80
        bitmap(generated(color(250, 50, #445533))): 0, 0
        text(m6x11, "Region E - multi-meta", #ffffff, left, 230): 10, 18
        interactive(250, 50, "regionE", action => "craft", weight:float => 2.5, tier => "rare"): 0, 0
    }

    // Interactive region 6
    point {
        pos: 250, 150
        bitmap(generated(color(250, 50, #553344))): 0, 0
        text(m6x11, "Region F - category=>armor", #ffffff, left, 230): 10, 18
        interactive(250, 50, "regionF", category => "armor", slot => "chest"): 0, 0
    }

    // Info display area
    bitmap(generated(color(500, 80, #1a1a2e))): 0, 370
    text(m6x11, "Click result will appear below:", #888888, left, 400): 10, 360
}
`,tf=`version: 0.5

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
`,nf=`version: 0.5

// Settings Demo
// Shows settings{key:type=>value} usage in components

#settingsDemo programmable() {
    pos: 50, 140

    text(exo2_16, "Settings Configuration", #7fdbda, left, 400): 0, 0
    text(exo2_light_14, "Components can declare settings{} blocks with typed key=>value pairs.", #aaaaaa, left, 700): 0, 30

    // Explain settings syntax
    text(m6x11, "Settings are metadata attached to .manim components:", #cccccc, left, 500): 0, 80
    text(m6x11, "  settings{key:type=>value}", #7fdbda, left, 400): 0, 100
    text(m6x11, "  Types: string, int, float, bool", #aaaaaa, left, 400): 0, 120

    // Theme selector buttons
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnDark")) {
        pos: 0, 520
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnLight")) {
        pos: 120, 520
    }
    placeholder(generated(cross(100, 24, #FF0000)), builderParameter("btnBlue")) {
        pos: 240, 520
    }
}

#settingsExamples programmable() {
    // Example 1: Component with string settings
    text(m6x11, "Example 1: String settings", #cccccc, left, 400): 0, 0
    point {
        pos: 0, 20
        bitmap(generated(color(300, 40, #222233))): 0, 0
        text(m6x11, "theme => dark", #ffffff, left, 280): 10, 12
        settings{theme => "dark"}
    }

    // Example 2: Component with int settings
    text(m6x11, "Example 2: Integer settings", #cccccc, left, 400): 0, 80
    point {
        pos: 0, 100
        bitmap(generated(color(300, 40, #222233))): 0, 0
        text(m6x11, "width:int => 200, height:int => 100", #ffffff, left, 280): 10, 12
        settings{width:int => 200}
        settings{height:int => 100}
    }

    // Example 3: Component with float settings
    text(m6x11, "Example 3: Float settings", #cccccc, left, 400): 0, 160
    point {
        pos: 0, 180
        bitmap(generated(color(300, 40, #222233))): 0, 0
        text(m6x11, "scrollSpeed:float => 2.5", #ffffff, left, 280): 10, 12
        settings{scrollSpeed:float => 2.5}
    }

    // Example 4: Multiple settings on one component
    text(m6x11, "Example 4: Combined settings", #cccccc, left, 400): 0, 240
    point {
        pos: 0, 260
        bitmap(generated(color(300, 60, #222233))): 0, 0
        text(m6x11, "transitionTimer:float => 0.3", #ffffff, left, 280): 10, 8
        text(m6x11, "autoClose => true", #ffffff, left, 280): 10, 28
        settings{transitionTimer:float => 0.3}
    }
}
`,rf=`version: 0.5

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
`,af=`version: 0.5

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
            settings{buildName=>"colorButton", color:int=>0xff0000, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preOrange")) {
            pos: 39, 0
            settings{buildName=>"colorButton", color:int=>0xff8800, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preYellow")) {
            pos: 78, 0
            settings{buildName=>"colorButton", color:int=>0xffff00, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preGreen")) {
            pos: 117, 0
            settings{buildName=>"colorButton", color:int=>0x00ff00, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preCyan")) {
            pos: 156, 0
            settings{buildName=>"colorButton", color:int=>0x00ffff, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preBlue")) {
            pos: 195, 0
            settings{buildName=>"colorButton", color:int=>0x0000ff, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("prePurple")) {
            pos: 234, 0
            settings{buildName=>"colorButton", color:int=>0xff00ff, width:int=>34, height:int=>20}
        }
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("preWhite")) {
            pos: 273, 0
            settings{buildName=>"colorButton", color:int=>0xffffff, width:int=>34, height:int=>20}
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
`,lf=`version: 0.5

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
`,of=`version: 0.5

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
    outlineSize:float=1.0, outlineColor:int=0xff0000) {
    point {
        filter: outline($outlineSize, $outlineColor)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
}

#glowPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack,
    glowAlpha:float=0.8, glowRadius:float=8, glowSmooth:uint=1, glowKnockout:uint=0, glowColor:int=0xffaa00) {
    // 4 combinations of smooth x knockout (bool literals required by filter syntax)
    @(glowSmooth > 0) @(glowKnockout > 0) point {
        filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius, smoothColor: true, knockout: true)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
    @(glowSmooth > 0) @(glowKnockout <= 0) point {
        filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius, smoothColor: true)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
    @(glowSmooth <= 0) @(glowKnockout > 0) point {
        filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius, knockout: true)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
    }
    @(glowSmooth <= 0) @(glowKnockout <= 0) point {
        filter: glow(color: $glowColor, alpha: $glowAlpha, radius: $glowRadius)
        dynamicRef($bitmapPreview, bitmapType=>$bitmapType): 0, 0
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
    dsDist:float=3, dsAngle:float=30, dsAlpha:float=0.5, dsRadius:float=6, dsSmooth:uint=0, dsColor:int=0x000000) {
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
    poStrength:float=0.5, poColor:int=0x0000ff) {
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
        settings{buildName=>"colorButton", color:int=>0xff0000, width:int=>60, height:int=>22}
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
        settings{buildName=>"colorButton", color:int=>0xffaa00, width:int=>60, height:int=>22}
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
        settings{buildName=>"colorButton", color:int=>0x000000, width:int=>60, height:int=>22}
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
        settings{buildName=>"colorButton", color:int=>0x0000ff, width:int=>60, height:int=>22}
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
`,sf=`version: 0.5

// Particles Demo
// Multiple particle effect presets: fire, sparkles, smoke

#fire particles {
    count: 80
    emit: cone(10, 5, 270, 25)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 1.8
    speed: 60
    speedRandom: 0.3
    gravity: 40
    gravityAngle: 270
    size: 0.6
    sizeRandom: 0.3
    fadeOut: 0.7
    fadeIn: 0.1
    colorStart: #FF4400
    colorMid: #FFAA00
    colorMidPos: 0.4
    colorEnd: #FF220044
    blendMode: add
}

#sparkles particles {
    count: 40
    emit: circle(50, 30, 0, 360)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 2.5
    speed: 20
    speedRandom: 0.5
    gravity: 10
    gravityAngle: 270
    size: 0.3
    sizeRandom: 0.2
    fadeIn: 0.2
    fadeOut: 0.6
    colorStart: #FFFFFF
    colorMid: #88DDFF
    colorMidPos: 0.5
    colorEnd: #4488FF00
    blendMode: add
}

#smoke particles {
    count: 60
    emit: cone(5, 3, 270, 15)
    tiles: file("circle_soft.png")
    loop: true
    maxLife: 3.0
    speed: 30
    speedRandom: 0.4
    gravity: 15
    gravityAngle: 270
    size: 0.8
    sizeRandom: 0.4
    fadeIn: 0.3
    fadeOut: 0.5
    colorStart: #888888
    colorMid: #666666
    colorMidPos: 0.5
    colorEnd: #44444400
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
`,cf=`version: 0.5

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
`,uf=`version: 0.5

// State Animation Demo
// Displays .anim state animations loaded from .anim files

#stateAnimDemo programmable() {

    // Marine - right facing
    text(exo2_14, "Marine (right):", #cccccc): 0, 0

    text(m6x11, "idle", #888888): 10, 25
    bitmap(generated(color(64, 64, #222233))): 10, 40
    stateanim("marine.anim", "idle", direction=>"r"): 42, 88

    text(m6x11, "stand", #888888): 90, 25
    bitmap(generated(color(64, 64, #222233))): 90, 40
    stateanim("marine.anim", "stand", direction=>"r"): 122, 88

    text(m6x11, "hit", #888888): 170, 25
    bitmap(generated(color(64, 64, #222233))): 170, 40
    stateanim("marine.anim", "hit", direction=>"r"): 202, 88

    text(m6x11, "killed", #888888): 250, 25
    bitmap(generated(color(64, 64, #222233))): 250, 40
    stateAnim construct("killed",
        "killed" => sheet "crew2", marine_r_killed, 20, loop
    ): 282, 88

    text(m6x11, "dead", #888888): 330, 25
    bitmap(generated(color(64, 64, #222233))): 330, 40
    stateanim("marine.anim", "dead", direction=>"r"): 362, 88

    text(m6x11, "dodge", #888888): 410, 25
    bitmap(generated(color(64, 64, #222233))): 410, 40
    stateAnim construct("dodge",
        "dodge" => sheet "crew2", marine_r_dodging_r, 4, loop
    ): 442, 88

    // Marine - left facing
    text(exo2_14, "Marine (left):", #cccccc): 0, 120

    text(m6x11, "idle", #888888): 10, 145
    bitmap(generated(color(64, 64, #222233))): 10, 160
    stateanim("marine.anim", "idle", direction=>"l"): 42, 208

    text(m6x11, "fire-up", #888888): 90, 145
    bitmap(generated(color(64, 64, #222233))): 90, 160
    stateAnim construct("fire-up",
        "fire-up" => sheet "crew2", marine_r_shooting_u, 20, loop
    ): 122, 208

    text(m6x11, "fire-down", #888888): 170, 145
    bitmap(generated(color(64, 64, #222233))): 170, 160
    stateAnim construct("fire-down",
        "fire-down" => sheet "crew2", marine_l_shooting_d, 10, loop
    ): 202, 208

    text(m6x11, "fire-left", #888888): 250, 145
    bitmap(generated(color(64, 64, #222233))): 250, 160
    stateAnim construct("fire-left",
        "fire-left" => sheet "crew2", marine_l_shooting_u, 20, loop
    ): 282, 208

    text(m6x11, "fire-right", #888888): 330, 145
    bitmap(generated(color(64, 64, #222233))): 330, 160
    stateAnim construct("fire-right",
        "fire-right" => sheet "crew2", marine_r_shooting_d, 20, loop
    ): 362, 208

    text(m6x11, "fire-upleft", #888888): 410, 145
    bitmap(generated(color(64, 64, #222233))): 410, 160
    stateAnim construct("fire-upleft",
        "fire-upleft" => sheet "crew2", marine_l_shooting_uu, 20, loop
    ): 442, 208

    // Turret
    text(exo2_14, "Turret:", #cccccc): 0, 240

    text(m6x11, "idle", #888888): 10, 265
    bitmap(generated(color(64, 64, #222233))): 10, 280
    stateanim("turret.anim", "idle"): 42, 328

    text(m6x11, "shoot", #888888): 90, 265
    bitmap(generated(color(64, 64, #222233))): 90, 280
    stateanim("turret.anim", "shoot"): 122, 328

    text(m6x11, "hit", #888888): 170, 265
    bitmap(generated(color(64, 64, #222233))): 170, 280
    stateanim("turret.anim", "hit"): 202, 328

    text(m6x11, "explode", #888888): 250, 265
    bitmap(generated(color(64, 64, #222233))): 250, 280
    stateAnim construct("explode",
        "explode" => sheet "crew2", Turret_Explode_SW, 16, loop
    ): 282, 328

    text(m6x11, "destroyed", #888888): 330, 265
    bitmap(generated(color(64, 64, #222233))): 330, 280
    stateAnim construct("destroyed",
        "destroyed" => sheet "crew2", Turret_Destroyed_SW, 1, loop
    ): 362, 328

    // Shield
    text(exo2_14, "Shield:", #cccccc): 0, 360

    text(m6x11, "idle_0 (R)", #888888): 10, 385
    bitmap(generated(color(64, 64, #222233))): 10, 400
    stateanim("shield.anim", "idle_0", direction=>"r"): 42, 448

    text(m6x11, "idle_0 (L)", #888888): 90, 385
    bitmap(generated(color(64, 64, #222233))): 90, 400
    stateanim("shield.anim", "idle_0", direction=>"l"): 122, 448

    text(m6x11, "idle_1 (R)", #888888): 170, 385
    bitmap(generated(color(64, 64, #222233))): 170, 400
    stateanim("shield.anim", "idle_1", direction=>"r"): 202, 448

    text(m6x11, "impact (R)", #888888): 250, 385
    bitmap(generated(color(64, 64, #222233))): 250, 400
    stateanim("shield.anim", "impact", direction=>"r"): 282, 448

    // Arrows
    text(exo2_14, "Arrows:", #cccccc): 0, 480

    text(m6x11, "dir0", #888888): 10, 505
    stateanim("arrows.anim", "dir0"): 42, 568

    text(m6x11, "dir1", #888888): 90, 505
    stateanim("arrows.anim", "dir1"): 122, 568

    text(m6x11, "dir2", #888888): 170, 505
    stateanim("arrows.anim", "dir2"): 202, 568

    text(m6x11, "dir3", #888888): 250, 505
    stateanim("arrows.anim", "dir3"): 282, 568

    text(m6x11, "dir4", #888888): 330, 505
    stateanim("arrows.anim", "dir4"): 362, 568

    text(m6x11, "dir5", #888888): 410, 505
    stateanim("arrows.anim", "dir5"): 442, 568
}
`,df=`version: 0.5

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
`,ff=`version: 0.5

// Blob47 Autotile Demo
// Interactive 2D terrain painter. Left click = dig dirt, right click = plant grass.
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
        settings{width:int=>80, height:int=>30, font=>"m6x11", fontColor=>0xffffff}
    }
    placeholder(generated(cross(80, 20, white)), builderParameter("clearBtn")) {
        pos: 90, 30
        settings{width:int=>80, height:int=>30, font=>"m6x11", fontColor=>0xffffff}
    }

    // Status
    #statusText(updatable) text(exo2_14, "Draw on the map!", #aaaaaa, left, 400): 260, 38

    // Dirt background
    bitmap(generated(color(640, 448, #66AA44))): 0, 70

    // Map container - autotile TileGroup goes here
    #mapContainer(updatable) point: 0, 70

    // Instructions
    text(exo2_light_14, "Left click: grass | Right click: dirt | Drag to paint", #666666): 0, 525
}
`,pf=`version: 0.5

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
`,mf=`version: 0.5

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
`,hf=`version: 0.5

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

relativeLayouts {
    #invGrid list {
        // Row 0
        point: 0, 155
        point: 58, 155
        point: 116, 155
        point: 174, 155
        // Row 1
        point: 0, 213
        point: 58, 213
        point: 116, 213
        point: 174, 213
        // Row 2
        point: 0, 271
        point: 58, 271
        point: 116, 271
        point: 174, 271
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
    repeatable($i, layout("main", "invGrid")) {
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

        // Head slot
        point {
            pos: 58, 0
            bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
            text(m5x7, "HEAD", #333355, center, 52): 0, 20
            #eq_head slot(state:[normal, disabled, highlight, unavailable] = normal) {
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

        // Left Arm slot
        point {
            pos: 0, 66
            bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
            text(m5x7, "L.ARM", #333355, center, 52): 0, 20
            #eq_larm slot(state:[normal, disabled, highlight, unavailable] = normal) {
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

        // Armor slot
        point {
            pos: 58, 66
            bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
            text(m5x7, "ARMOR", #333355, center, 52): 0, 20
            #eq_armor slot(state:[normal, disabled, highlight, unavailable] = normal) {
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

        // Right Arm slot
        point {
            pos: 116, 66
            bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
            text(m5x7, "R.ARM", #333355, center, 52): 0, 20
            #eq_rarm slot(state:[normal, disabled, highlight, unavailable] = normal) {
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

        // Legs slot
        point {
            pos: 58, 132
            bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
            text(m5x7, "LEGS", #333355, center, 52): 0, 20
            #eq_legs slot(state:[normal, disabled, highlight, unavailable] = normal) {
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
`,gf=`version: 0.5

// Minimap Demo
// 6x6 room grid with fog of war. Click to reveal rooms.

#minimapDemo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Minimap Explorer", #7fdbda): 0, 0
    bitmap(generated(color(500, 1, #7fdbda33))): 0, 22

    // Map panel background
    ninepatch("ui", "Window_3x3_idle", 340, 340): 0, 35

    // Grid container - rooms created programmatically
    #gridContainer(updatable) point: 15, 50

    // Legend
    ninepatch("ui", "Window_3x3_idle", 200, 150): 360, 35
    text(exo2_14, "Legend", #7fdbda): 375, 50

    bitmap(generated(color(16, 16, #444444))): 375, 75
    text(exo2_light_14, "Unexplored", #aaaaaa): 400, 75

    bitmap(generated(color(16, 16, #4caf50))): 375, 100
    text(exo2_light_14, "Explored", #aaaaaa): 400, 100

    bitmap(generated(color(16, 16, #ffeb3b))): 375, 125
    text(exo2_light_14, "Current Room", #aaaaaa): 400, 125

    bitmap(generated(color(16, 16, #ff4444))): 375, 150
    text(exo2_light_14, "Boss Room", #aaaaaa): 400, 150

    // Info panel
    ninepatch("ui", "Window_3x3_idle", 340, 60): 0, 385
    #exploredText(updatable) text(exo2_16, "Explored: 1 / 36", #7fdbda, left, 300): 20, 400
    #roomInfoText(updatable) text(exo2_14, "Room (0,0) - Start", #ffffff, left, 300): 20, 422

    // Instructions
    text(exo2_light_14, "Click adjacent rooms to explore. Navigate the dungeon.", #666666): 0, 460
}
`,xf=`version: 0.5

// Skill Tree Demo
// 4 tiers × 3 attribute paths. Dynamic refs with incremental parameter updates
// drive node unlock/lock states. Interactives provide click and hover.

// ── Skill node component ────────────────────────────────────────────
#skillNode programmable(
    name:string="Skill",
    unlocked:uint=0,
    pathColor:color=#666666,
    icon:[skull,shield,levelup,circle,cross]=circle
) {
    // Outer border
    @(unlocked => 0) bitmap(generated(color(50, 50, #333333))): 0, 0
    @(unlocked > 0) bitmap(generated(color(50, 50, $pathColor))): 0, 0

    // Inner fill
    bitmap(generated(color(46, 46, #1a1a1a))): 2, 2

    // Icon background
    @(unlocked => 0) bitmap(generated(color(28, 28, #262626))): 11, 7
    @(unlocked > 0) bitmap(generated(color(28, 28, $pathColor))): 11, 7

    // Icons — dimmed when locked, bright when unlocked
    @(unlocked => 0, icon=>skull)   @alpha(0.2) bitmap(sheet("crew2", "icon-skull")): 17, 13
    @(unlocked => 0, icon=>shield)  @alpha(0.2) bitmap(sheet("crew2", "icon-shield")): 17, 13
    @(unlocked => 0, icon=>levelup) @alpha(0.2) bitmap(sheet("crew2", "icon-levelup")): 17, 13
    @(unlocked => 0, icon=>circle)  @alpha(0.2) bitmap(sheet("crew2", "icon-circle")): 17, 13
    @(unlocked => 0, icon=>cross)   @alpha(0.2) bitmap(sheet("crew2", "icon-cross")): 17, 13

    @(unlocked > 0, icon=>skull)   bitmap(sheet("crew2", "icon-skull")): 17, 13
    @(unlocked > 0, icon=>shield)  bitmap(sheet("crew2", "icon-shield")): 17, 13
    @(unlocked > 0, icon=>levelup) bitmap(sheet("crew2", "icon-levelup")): 17, 13
    @(unlocked > 0, icon=>circle)  bitmap(sheet("crew2", "icon-circle")): 17, 13
    @(unlocked > 0, icon=>cross)   bitmap(sheet("crew2", "icon-cross")): 17, 13

    // Skill name
    @(unlocked => 0) text(m6x11, $name, #555555, center, 56): -3, 52
    @(unlocked > 0) text(m6x11, $name, #cccccc, center, 56): -3, 52
}

// ── Main skill tree ─────────────────────────────────────────────────
// Parameters u0–u11 are per-node unlock flags, propagated to each dynamicRef.
#skillTreeDemo programmable(
    u0:uint=1, u1:uint=0, u2:uint=0, u3:uint=0,
    u4:uint=1, u5:uint=0, u6:uint=0, u7:uint=0,
    u8:uint=1, u9:uint=0, u10:uint=0, u11:uint=0,
    pts:uint=5
) {
    pos: 50, 60

    // Title
    text(exo2_16, "Skill Tree", #7fdbda): 0, 0
    bitmap(generated(color(560, 1, #7fdbda33))): 0, 22

    // Tree panel
    ninepatch("ui", "Window_3x3_idle", 560, 290): 0, 35

    // Tier headers (centered on columns 75, 195, 315, 435)
    text(exo2_14, "Tier 1", #888888, center, 50): 75, 48
    text(exo2_14, "Tier 2", #888888, center, 50): 195, 48
    text(exo2_14, "Tier 3", #888888, center, 50): 315, 48
    text(exo2_14, "Tier 4", #888888, center, 50): 435, 48

    // Row labels (vertically centered on rows 70, 155, 240)
    text(exo2_14, "STR", #ff7f50): 18, 88
    text(exo2_14, "DEX", #4caf50): 18, 173
    text(exo2_14, "INT", #4a90a4): 18, 258

    // ── Connectors (repeatable per row) ─────────────────
    point {
        pos: 126, 95
        repeatable($c, step(3, dx: 120)) {
            #connStr[$c] bitmap(generated(color(68, 2, #3a3a3a))): 0, 0
        }
    }
    point {
        pos: 126, 180
        repeatable($c, step(3, dx: 120)) {
            #connDex[$c] bitmap(generated(color(68, 2, #3a3a3a))): 0, 0
        }
    }
    point {
        pos: 126, 265
        repeatable($c, step(3, dx: 120)) {
            #connInt[$c] bitmap(generated(color(68, 2, #3a3a3a))): 0, 0
        }
    }

    // ── Skill nodes (dynamicRef with per-node unlock binding) ───
    // STR path
    dynamicRef($skillNode, name=>"Power",  unlocked=>$u0,  pathColor=>#ff7f50, icon=>skull):   75, 70
    dynamicRef($skillNode, name=>"Cleave", unlocked=>$u1,  pathColor=>#ff7f50, icon=>cross):  195, 70
    dynamicRef($skillNode, name=>"Fury",   unlocked=>$u2,  pathColor=>#ff7f50, icon=>skull):  315, 70
    dynamicRef($skillNode, name=>"Titan",  unlocked=>$u3,  pathColor=>#ff7f50, icon=>shield): 435, 70

    // DEX path
    dynamicRef($skillNode, name=>"Agility", unlocked=>$u4,  pathColor=>#4caf50, icon=>circle):  75, 155
    dynamicRef($skillNode, name=>"Dodge",   unlocked=>$u5,  pathColor=>#4caf50, icon=>shield): 195, 155
    dynamicRef($skillNode, name=>"Swift",   unlocked=>$u6,  pathColor=>#4caf50, icon=>levelup):315, 155
    dynamicRef($skillNode, name=>"Shadow",  unlocked=>$u7,  pathColor=>#4caf50, icon=>cross):  435, 155

    // INT path
    dynamicRef($skillNode, name=>"Focus",  unlocked=>$u8,  pathColor=>#4a90a4, icon=>circle):   75, 240
    dynamicRef($skillNode, name=>"Arcane", unlocked=>$u9,  pathColor=>#4a90a4, icon=>levelup): 195, 240
    dynamicRef($skillNode, name=>"Mystic", unlocked=>$u10, pathColor=>#4a90a4, icon=>shield):  315, 240
    dynamicRef($skillNode, name=>"Cosmic", unlocked=>$u11, pathColor=>#4a90a4, icon=>skull):   435, 240

    // ── Highlights (repositioned by Haxe) ───────────────
    #hoverHighlight(updatable) @alpha(0.0) bitmap(generated(color(54, 54, #ffffff44))): -100, -100
    #selectHighlight(updatable) @alpha(0.0) bitmap(generated(color(54, 54, #ffeb3b66))): -100, -100

    // ── Interactives (click & hover hit regions) ────────
    interactive(50, 65, "0"):   75, 70
    interactive(50, 65, "1"):  195, 70
    interactive(50, 65, "2"):  315, 70
    interactive(50, 65, "3"):  435, 70
    interactive(50, 65, "4"):   75, 155
    interactive(50, 65, "5"):  195, 155
    interactive(50, 65, "6"):  315, 155
    interactive(50, 65, "7"):  435, 155
    interactive(50, 65, "8"):   75, 240
    interactive(50, 65, "9"):  195, 240
    interactive(50, 65, "10"): 315, 240
    interactive(50, 65, "11"): 435, 240

    // ── Info panel ──────────────────────────────────────
    ninepatch("ui", "Window_3x3_idle", 560, 55): 0, 335
    text(exo2_16, 'Skill Points: \${$pts}', #ffeb3b, left, 200): 18, 348
    #skillInfoText(updatable) text(exo2_14, "Hover over a skill to see details", #aaaaaa, left, 300): 18, 368

    // Legend + Reset
    bitmap(generated(color(12, 12, #333333))): 370, 348
    text(exo2_light_14, "Locked", #888888): 388, 348
    bitmap(generated(color(12, 12, #4caf50))): 370, 366
    text(exo2_light_14, "Unlocked", #888888): 388, 366

    placeholder(generated(cross(80, 28, #FF0000)), builderParameter("resetButton")) {
        pos: 472, 348
    }

    // Instructions
    text(exo2_light_14, "Click to unlock skills. Previous tier required. Hover for details.", #555555): 0, 405
}
`,bf=`version: 0.5

// Status Effects Demo
// Row of buff/debuff slots with timers, add/remove buttons, and tooltip.

#statusEffectsDemo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Status Effects", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Effect slots panel
    ninepatch("ui", "Window_3x3_idle", 600, 100): 0, 35

    text(exo2_14, "Active Effects", #7fdbda): 15, 45

    // Slot container - 8 slots created programmatically
    #slotContainer(updatable) point: 15, 70

    // Action buttons
    ninepatch("ui", "Window_3x3_idle", 600, 55): 0, 145
    placeholder(generated(cross(130, 30, #FF0000)), builderParameter("addBuffButton")) {
        pos: 15, 158
    }
    placeholder(generated(cross(130, 30, #FF0000)), builderParameter("addDebuffButton")) {
        pos: 160, 158
    }
    placeholder(generated(cross(130, 30, #FF0000)), builderParameter("clearAllButton")) {
        pos: 305, 158
    }

    // Effect count
    #effectCountText(updatable) text(exo2_14, "Effects: 0 / 8", #aaaaaa, left, 200): 450, 163

    // Tooltip panel
    ninepatch("ui", "Window_3x3_idle", 600, 80): 0, 210

    text(exo2_14, "Effect Info", #7fdbda): 15, 220
    #tooltipName(updatable) text(exo2_16, "Hover over an effect", #ffffff, left, 350): 15, 245
    #tooltipDesc(updatable) text(exo2_light_14, "", #aaaaaa, left, 350): 15, 270
    #tooltipTimer(updatable) text(exo2_14, "", #ffeb3b, left, 200): 400, 245

    // Effect log
    ninepatch("ui", "Window_3x3_idle", 600, 40): 0, 300
    #logText(updatable) text(exo2_light_14, "Add buffs or debuffs to see them tick down.", #666666, left, 570): 15, 312

    // Instructions
    text(exo2_light_14, "Effects expire when their timer runs out. Hover for details.", #666666): 0, 355
}
`,vf=`version: 0.5

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
`,yf=`version: 0.5

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
`,_f=`version: 0.5

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
`,wf=`version: 0.5

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
`,kf=`version: 0.5

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
`,Sf=`version: 0.5

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
`,$f=`version: 0.5

// Colored box for flow items
#flowItem programmable(w:uint=40, h:uint=20, color:color=#448, num:uint=0) {
  bitmap(generated(color($w, $h, $color)));
  text(m6x11, $num, #ffffff, center, $w): 0, 4
}

#flowControls programmable() {
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
`,Cf=`version: 0.5

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
`,Ff=`version: 0.5

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
`,Tf=`version: 0.5

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
`,Ef=`version: 0.5

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
        settings{buildName=>"color", color:int=>0xff4444, width:int=>60, height:int=>30}
    }
    placeholder(generated(cross(60, 30, white)), builderParameter("colorBtn2")) {
        pos: 80, 640
        settings{buildName=>"color", color:int=>0x4caf50, width:int=>60, height:int=>30}
    }
    placeholder(generated(cross(60, 30, white)), builderParameter("colorBtn3")) {
        pos: 160, 640
        settings{buildName=>"color", color:int=>0x2196f3, width:int=>60, height:int=>30}
    }
    placeholder(generated(cross(100, 30, white)), builderParameter("colorBtn4")) {
        pos: 240, 640
        settings{buildName=>"color", color:int=>0xffcc44, width:int=>100, height:int=>30}
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
`,Pf=`version: 0.5

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
`,Rf=`version: 0.5

// Dialogs Demo
// Shows modal dialog with OK/Cancel and result display.

#okCancelDemoDialog programmable(dialogText = "Are you sure?") {
    pos: 300, 150

    ninepatch("ui", "Droppanel_3x3_idle", 500, 250): 0, 0
    text(exo2_black_20, "Confirmation", #ffffff, center, 460): 20, 20
    bitmap(generated(color(460, 1, #ffffff33))): 20, 50
    #dialogText(updatable) text(exo2_light_14, $dialogText, #cccccc, center, 400): 50, 80

    point {
        pos: 20, 180
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("ok")): 0, 0
        placeholder(generated(cross(20, 20, #FF0000)), builderParameter("cancel")): 260, 0
    }
}

#dialogsDemo programmable() {
    pos: 50, 80

    // Section: Modal Dialogs
    text(exo2_16, "Modal Dialogs", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    text(exo2_light_14, "Click a button to open a dialog:", #cccccc): 0, 35

    // Open dialog buttons
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton1")) {
        pos: 0, 60
    }
    placeholder(generated(cross(200, 30, #FF0000)), builderParameter("openButton2")) {
        pos: 220, 60
    }

    // Result display
    text(exo2_16, "Dialog Result", #7fdbda): 0, 130
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 152
    ninepatch("ui", "Window_3x3_idle", 500, 50): 0, 170
    #resultText(updatable) text(exo2_20, "No dialog opened yet", #ffffff, left, 480): 15, 185

    // History
    text(exo2_16, "Dialog History", #7fdbda): 0, 250
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 272
    ninepatch("ui", "Window_3x3_idle", 500, 150): 0, 285
    #historyText1(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 295
    #historyText2(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 315
    #historyText3(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 335
    #historyText4(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 355
    #historyText5(updatable) text(exo2_light_14, "", #aaaaaa, left, 480): 15, 375
}
`,Bf=`version: 0.5

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
}
`,Nf=`version: 0.5

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

    // Section: Text Shadow
    text(exo2_16, "Text Shadow", #b0b0b0): 0, 840
    bitmap(generated(color(600, 1, #b0b0b033))): 0, 862
    text(exo2_light_14, "Dropdown with text shadow effect:", #cccccc): 0, 875

    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("dropdownShadow")) {
        pos: 0, 895
        settings{dropdownBuildName=>dropdown-shadow, height:int=>150, font=>"dd", fontColor:color=>white}
    }

    #shadowText(updatable) text(exo2_light_14, "Selected: None", #aaaaaa): 180, 905
}
`,Af=`version: 0.5

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
`,zf=`version: 0.5

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
`,Df=`version: 0.5

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
`,Lf=`version: 0.5

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
}
`,Mf=`version: 0.5

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
}
`,If=`version: 0.5

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
        text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
    }
}

#radioButtonsHorizontal programmable(count:int){
    repeatable($index, step($count, dx:120)) {
        placeholder(generated(cross(15, 15, #FF0000)), callback("checkbox", $index)):0,0
        text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
    }
}
`,Wf=`version: 0.5

      #main palette {
      0x1a1a1a  0x2c5f7c  0x4a90a4  0x7fdbda  0xff7f50  0xff4444  0x4caf50  0xffeb3b  0xffffff  0x666666  0xb0b0b0  0x000000
      }

  #slider programmable(status:[hover, pressed, normal]=normal, value:0..100=0, size:[100,200,300], disabled:[true, false]) {
    //@(value=>between 50..70) text(dd, "HEEEEEEEEEEEEEEEEEY", 0xffffff12, center, 200): 0,10

    //@(value=>[between 3..30]) text(dd, "HEEEEEEEEEEEEEEEEEY", 0xffffff12, center, 200): 0,10
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


 #button programmable(status:[hover, pressed,normal], disabled:[true, false], buttonText="Button", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffff12, textShadow:[true, false]=false) {
      @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
      @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
      @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
      @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0

      @(textShadow=>false) text($font, $buttonText, $fontColor, center, $width): 0, ($height - $ctx.font($font).lineHeight) / 2
      @(textShadow=>true) text($font, $buttonText, $fontColor, center, $width, dropShadowXY: 1, 1): 0, ($height - $ctx.font($font).lineHeight) / 2
}

 #colorButton programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="", width:uint=60, height:uint=22, color:int=0xff0000) {
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
     placeholder(generated(cross(15, 15, white)), builderParameter("checkbox")):0,0
      text($font, $title, white, left): 40,4
    }
}


#radioButtons programmable(count:int){
      repeatable($index, step($count, dy:20)) {
            placeholder(generated(cross(15, 15, white)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
            
      }
}

#radioButtonsHorizontal programmable(count:int){
      repeatable($index, step($count, dx:120 )) {
            placeholder(generated(cross(15, 15, white)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
            
      }
}

#radioButtonsVertical programmable(count:int){
      repeatable($index, step($count, dy:30 )) {
            placeholder(generated(cross(15, 15, white)), callback("checkbox", $index)):0,0
            text(m6x11, callback("label", $index), 0xffffff12, left, 120): 24,4
            
      }
}


#dropdown programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled,normal], panel:[open, closed], font="m6x11", fontColor:int=0xffffff12) {
      
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

#dropdown-w programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled, normal], panel:[open, closed], btnWidth:uint=120, btnHeight:uint=30, font="m6x11", fontColor:int=0xffffff12) {
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

#dropdown-shadow programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, disabled, normal], panel:[open, closed], font="m6x11", fontColor:int=0xffffff12) {
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

#list-item-w programmable(images:[none,placeholder,tile]=placeholder, status:[hover, pressed, normal], selected:[true, false], disabled:[true, false], tile:tile, itemWidth:uint=114, itemHeight:uint=20, index:uint=0, title="title", font="m6x11", fontColor:int=0xffffff12) {
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

#list-item-120 programmable(images:[none,placeholder,tile]=placeholder,status:[hover, pressed, normal], selected:[true, false], disabled:[true, false], tile:tile, itemWidth:uint=114,  index:uint=0, title="title", font="m6x11", fontColor:int=0xffffff12) {

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
}`,Hf=`sheet: crew2
allowedExtraPoints: ["point", "text"]
center: 64,64


animation {
    name: dir0
    fps: 10
    loop: yes
    playlist {
        sheet: "Arrow_dir0"
    }
    extrapoints {
        point: 0,0
        text: -60,0
    }
}


animation {
    name: dir1
    fps: 10
    loop: yes
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
    fps: 10
    loop: yes
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
    fps: 10
    loop: yes
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
    fps: 10
    loop: yes
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
    fps: 10
    loop: yes
    playlist {
        sheet: "Arrow_dir5"
    }
    extrapoints {
        point: 0,0
        text: -25,-60
    }
}

`,Of=`sheet: crew2
allowedExtraPoints: [fire, targeting]
states: direction(l, r)
center: 32,48


animation {
    name: idle
    fps:4
    loop: yes
    playlist {
        sheet: "marine_$$direction$$_idle"
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
    loop: yes
    playlist {
        sheet: marine_$$direction$$_hit
        event hit random 0,-10, 10
    }
}


animation {
    name: killed
    fps:20
    playlist {
        sheet: marine_$$direction$$_killed
    }
}

animation {
    name: dead
    fps:1
    loop: yes
    playlist {
        sheet: marine_$$direction$$_dead
    }
}

animation {
    name: stand
    fps:1
    loop: yes
    playlist {
        sheet: marine_$$direction$$_standing
    }
}



animation {
    name: dodge
    fps:4
    playlist {
        sheet: marine_$$direction$$_dodging_$$direction$$ frames: 0..3
    }
}

`,jf=`sheet: crew2
allowedExtraPoints: ["line_TR", "line_BR", "line_TL", "line_BL"]
states: direction(l, r)
center: 32,48


animation {
    name: idle_0
    fps: 4
    loop: yes
    playlist {
        sheet: "shield_$$direction$$_layer0"
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
    fps: 10
    loop: yes
    playlist {
        sheet: "shield_$$direction$$_layer2_impact fast"
    }
}

animation {
    name: idle_1
    fps: 10
    loop: yes
    playlist {
        sheet: "shield_$$direction$$_layer1"
    }
}



`,Vf=`sheet: crew2
center: 32,48


animation {
    name: explode
    fps: 16
    playlist {
        sheet: "Turret_Explode_SW"
    }
}

animation {
    name: hit
    fps: 10
    loop: yes
    playlist {
        sheet: "Turret_Idle_SW_A" frames: 2..6
    }
}

animation {
    name: idle
    fps: 14
    loop: yes
    playlist {
        sheet: "Turret_Idle_SW_B"
    }
}

animation {
    name: shoot
    fps: 16
    loop: yes
    playlist {
        sheet: "Turret_Shoot_SW"
    }
}

animation {
    name: destroyed
    fps: 1
    playlist {
        sheet: "Turret_Destroyed_SW"
    }
}
`,Uf=Object.assign({"../public/assets/buttons.manim":Qd,"../public/assets/checkbox.manim":Yd,"../public/assets/demo-common.manim":Xd,"../public/assets/demos/advanced/conditionals.manim":Kd,"../public/assets/demos/advanced/expressions.manim":Zd,"../public/assets/demos/advanced/feature-showcase.manim":qd,"../public/assets/demos/advanced/incremental.manim":Jd,"../public/assets/demos/advanced/interactives.manim":ef,"../public/assets/demos/advanced/macro-performance.manim":tf,"../public/assets/demos/advanced/settings.manim":nf,"../public/assets/demos/animation/anim-path.manim":rf,"../public/assets/demos/animation/color-picker-dialog.manim":af,"../public/assets/demos/animation/curves.manim":lf,"../public/assets/demos/animation/filters.manim":of,"../public/assets/demos/animation/particles.manim":sf,"../public/assets/demos/animation/paths.manim":cf,"../public/assets/demos/animation/state-anim.manim":uf,"../public/assets/demos/gamelike/battle-hud.manim":df,"../public/assets/demos/gamelike/blob47.manim":ff,"../public/assets/demos/gamelike/character-sheet.manim":pf,"../public/assets/demos/gamelike/dialogue.manim":mf,"../public/assets/demos/gamelike/inventory.manim":hf,"../public/assets/demos/gamelike/minimap.manim":gf,"../public/assets/demos/gamelike/skill-tree.manim":xf,"../public/assets/demos/gamelike/status-effects.manim":bf,"../public/assets/demos/graphics/bitmaps-atlas.manim":vf,"../public/assets/demos/graphics/ninepatch.manim":yf,"../public/assets/demos/graphics/pixels-graphics.manim":_f,"../public/assets/demos/graphics/text-fonts.manim":wf,"../public/assets/demos/layout/combo-states.manim":kf,"../public/assets/demos/layout/dynamic-refs.manim":Sf,"../public/assets/demos/layout/flow-layout.manim":$f,"../public/assets/demos/layout/repeatable.manim":Cf,"../public/assets/demos/layout/slots.manim":Ff,"../public/assets/demos/layout/static-refs.manim":Tf,"../public/assets/demos/ui/buttons-demo.manim":Ef,"../public/assets/demos/ui/checkboxes-demo.manim":Pf,"../public/assets/demos/ui/dialogs.manim":Rf,"../public/assets/demos/ui/draggable.manim":Bf,"../public/assets/demos/ui/dropdowns.manim":Nf,"../public/assets/demos/ui/progress-bar.manim":Af,"../public/assets/demos/ui/radio.manim":zf,"../public/assets/demos/ui/radios-demo.manim":Df,"../public/assets/demos/ui/scrollable-list.manim":Lf,"../public/assets/demos/ui/sliders.manim":Mf,"../public/assets/radio.manim":If,"../public/assets/std.manim":Wf}),Gf=Object.assign({"../public/assets/arrows.anim":Hf,"../public/assets/marine.anim":Of,"../public/assets/shield.anim":jf,"../public/assets/turret.anim":Vf}),Qf=Object.fromEntries([...Object.entries(Uf).map(([e,t])=>[e.replace("../public/assets/",""),t]),...Object.entries(Gf).map(([e,t])=>[e.replace("../public/assets/",""),t])]),Sr=e=>Qf[e]||null,Yi=[{name:"UI Components",screens:[{name:"buttons",displayName:"Buttons",category:"UI Components",manimFile:"demos/ui/buttons-demo.manim"},{name:"checkboxes",displayName:"Checkboxes",category:"UI Components",manimFile:"demos/ui/checkboxes-demo.manim"},{name:"sliders",displayName:"Sliders",category:"UI Components",manimFile:"demos/ui/sliders.manim"},{name:"dropdowns",displayName:"Dropdowns",category:"UI Components",manimFile:"demos/ui/dropdowns.manim"},{name:"scrollableList",displayName:"Scrollable List",category:"UI Components",manimFile:"demos/ui/scrollable-list.manim"},{name:"radio",displayName:"Radio Buttons",category:"UI Components",manimFile:"demos/ui/radio.manim"},{name:"progressBar",displayName:"Progress Bars",category:"UI Components",manimFile:"demos/ui/progress-bar.manim"},{name:"draggable",displayName:"Draggable",category:"UI Components",manimFile:"demos/ui/draggable.manim"},{name:"dialogs",displayName:"Dialogs",category:"UI Components",manimFile:"demos/ui/dialogs.manim"}]},{name:"Layout & Composition",screens:[{name:"staticRefs",displayName:"Static Refs",category:"Layout & Composition",manimFile:"demos/layout/static-refs.manim"},{name:"dynamicRefs",displayName:"Dynamic Refs",category:"Layout & Composition",manimFile:"demos/layout/dynamic-refs.manim"},{name:"flowLayout",displayName:"Flow Layout",category:"Layout & Composition",manimFile:"demos/layout/flow-layout.manim"},{name:"repeatable",displayName:"Repeatable",category:"Layout & Composition",manimFile:"demos/layout/repeatable.manim"},{name:"slots",displayName:"Slots",category:"Layout & Composition",manimFile:"demos/layout/slots.manim"},{name:"comboStates",displayName:"Combo States",category:"Layout & Composition",manimFile:"demos/layout/combo-states.manim"}]},{name:"Graphics & Rendering",screens:[{name:"bitmapsAtlas",displayName:"Bitmaps & Atlas",category:"Graphics & Rendering",manimFile:"demos/graphics/bitmaps-atlas.manim"},{name:"ninepatch",displayName:"Ninepatch",category:"Graphics & Rendering",manimFile:"demos/graphics/ninepatch.manim"},{name:"textFonts",displayName:"Text & Fonts",category:"Graphics & Rendering",manimFile:"demos/graphics/text-fonts.manim"},{name:"pixelsGraphics",displayName:"Pixels & Graphics",category:"Graphics & Rendering",manimFile:"demos/graphics/pixels-graphics.manim"}]},{name:"Animation & Effects",screens:[{name:"stateAnim",displayName:"State Animations",category:"Animation & Effects",manimFile:"demos/animation/state-anim.manim"},{name:"particles",displayName:"Particles",category:"Animation & Effects",manimFile:"demos/animation/particles.manim"},{name:"paths",displayName:"Paths",category:"Animation & Effects",manimFile:"demos/animation/paths.manim"},{name:"curves",displayName:"Curves",category:"Animation & Effects",manimFile:"demos/animation/curves.manim"},{name:"animPath",displayName:"Anim Paths",category:"Animation & Effects",manimFile:"demos/animation/anim-path.manim"},{name:"filters",displayName:"Filters",category:"Animation & Effects",manimFile:"demos/animation/filters.manim"}]},{name:"Game-Like Demos",screens:[{name:"inventory",displayName:"Inventory Grid",category:"Game-Like Demos",manimFile:"demos/gamelike/inventory.manim"},{name:"characterSheet",displayName:"Character Sheet",category:"Game-Like Demos",manimFile:"demos/gamelike/character-sheet.manim"},{name:"blob47",displayName:"Blob47 Autotile",category:"Game-Like Demos",manimFile:"demos/gamelike/blob47.manim"},{name:"battleHud",displayName:"Battle HUD",category:"Game-Like Demos",manimFile:"demos/gamelike/battle-hud.manim"},{name:"skillTree",displayName:"Skill Tree",category:"Game-Like Demos",manimFile:"demos/gamelike/skill-tree.manim"},{name:"dialogue",displayName:"Dialogue Box",category:"Game-Like Demos",manimFile:"demos/gamelike/dialogue.manim"},{name:"statusEffects",displayName:"Status Effects",category:"Game-Like Demos",manimFile:"demos/gamelike/status-effects.manim"}]},{name:"Advanced Features",screens:[{name:"incremental",displayName:"Incremental",category:"Advanced Features",manimFile:"demos/advanced/incremental.manim"},{name:"interactives",displayName:"Interactives",category:"Advanced Features",manimFile:"demos/advanced/interactives.manim"},{name:"conditionals",displayName:"Conditionals",category:"Advanced Features",manimFile:"demos/advanced/conditionals.manim"},{name:"expressions",displayName:"Expressions",category:"Advanced Features",manimFile:"demos/advanced/expressions.manim"},{name:"settings",displayName:"Settings",category:"Advanced Features",manimFile:"demos/advanced/settings.manim"},{name:"macroPerformance",displayName:"Macro Performance",category:"Advanced Features",manimFile:"demos/advanced/macro-performance.manim"},{name:"featureShowcase",displayName:"Feature Showcase",category:"Advanced Features",manimFile:"demos/advanced/feature-showcase.manim"}]}];class Yf{constructor(){nt(this,"mainApp",null);nt(this,"currentScreen",null);this.setupFileLoader(),this.waitForMainApp()}setupFileLoader(){var n;const t=((n=window.location)==null?void 0:n.href)||"";window.FileLoader={baseUrl:t,resolveUrl:r=>{if(r.startsWith("http")||r.startsWith("//")||r.startsWith("file://"))return r;try{return new URL(r,t).href}catch{return t+r}},load:r=>this.loadFile(r),stringToArrayBuffer:this.stringToArrayBuffer}}waitForMainApp(){var n;const t=(n=window.PlaygroundMain)==null?void 0:n.instance;t&&t.screenManager?(this.mainApp=t,this.currentScreen&&this.currentScreen!=="nav"&&this.switchScreen(this.currentScreen)):setTimeout(()=>this.waitForMainApp(),100)}stringToArrayBuffer(t){return new TextEncoder().encode(t).buffer}loadFile(t){const n=this.findFileContent(t);if(n)return this.stringToArrayBuffer(n);const r=new XMLHttpRequest;return r.open("GET",t,!1),r.send(),r.status===200?this.stringToArrayBuffer(r.response):new ArrayBuffer(0)}findFileContent(t){const n=t.split("?")[0].split("#")[0];let r=Sr(n);if(r)return r;const a=n.indexOf("/assets/");if(a>=0&&(r=Sr(n.substring(a+8)),r))return r;const i=n.split("/"),l=i[i.length-1];return l&&(r=Sr(l),r)?r:null}switchScreen(t){var n;if(this.currentScreen=t,(n=window.PlaygroundMain)!=null&&n.instance)try{return window.PlaygroundMain.instance.reload(t)}catch(r){return console.error("Failed to switch screen:",r),null}return null}getSourceForScreen(t){for(const n of Yi){const r=n.screens.find(a=>a.name===t);if(r)return Sr(r.manimFile)}return null}dispose(){this.mainApp&&typeof this.mainApp.dispose=="function"&&this.mainApp.dispose()}}function Xf({currentScreen:e,onScreenSelect:t,collapsed:n,onToggleCollapse:r}){const[a,i]=be.useState(new Set(Yi.map(o=>o.name))),l=o=>{i(u=>{const p=new Set(u);return p.has(o)?p.delete(o):p.add(o),p})};return n?A.jsx("div",{className:"w-10 bg-gray-800 border-r border-gray-700 flex flex-col items-center pt-3",children:A.jsx("button",{onClick:r,className:"text-gray-400 hover:text-white text-xs p-1",title:"Expand sidebar",children:"»"})}):A.jsxs("div",{className:"w-[250px] bg-gray-800 border-r border-gray-700 flex flex-col h-full",children:[A.jsxs("div",{className:"px-4 py-3 border-b border-gray-700 flex items-center justify-between",children:[A.jsx("span",{className:"text-base font-bold text-gray-100",children:"Demos"}),A.jsx("button",{onClick:r,className:"text-gray-400 hover:text-white text-sm px-2 py-1",title:"Collapse sidebar",children:"«"})]}),A.jsx("div",{className:"flex-1 overflow-y-auto scrollable p-2",children:Yi.map(o=>A.jsxs("div",{className:"mb-1",children:[A.jsxs("button",{onClick:()=>l(o.name),className:"w-full text-left px-2 py-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 flex items-center",children:[A.jsx("span",{className:"mr-1.5 text-[10px]",children:a.has(o.name)?"▾":"▸"}),o.name]}),a.has(o.name)&&A.jsx("div",{className:"ml-6",children:o.screens.map(u=>A.jsx("button",{onClick:()=>t(u.name),className:`w-full text-left px-3 py-1 text-xs rounded transition-colors ${e===u.name?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:u.displayName},u.name))})]},o.name))})]})}var mu={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function s(c){return c instanceof u?new u(c.type,s(c.content),c.alias):Array.isArray(c)?c.map(s):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(s){return Object.prototype.toString.call(s).slice(8,-1)},objId:function(s){return s.__id||Object.defineProperty(s,"__id",{value:++i}),s.__id},clone:function s(c,f){f=f||{};var h,g;switch(o.util.type(c)){case"Object":if(g=o.util.objId(c),f[g])return f[g];h={},f[g]=h;for(var v in c)c.hasOwnProperty(v)&&(h[v]=s(c[v],f));return h;case"Array":return g=o.util.objId(c),f[g]?f[g]:(h=[],f[g]=h,c.forEach(function(y,C){h[C]=s(y,f)}),h);default:return c}},getLanguage:function(s){for(;s;){var c=a.exec(s.className);if(c)return c[1].toLowerCase();s=s.parentElement}return"none"},setLanguage:function(s,c){s.className=s.className.replace(RegExp(a,"gi"),""),s.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var s=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(s){var c=document.getElementsByTagName("script");for(var f in c)if(c[f].src==s)return c[f]}return null}},isActive:function(s,c,f){for(var h="no-"+c;s;){var g=s.classList;if(g.contains(c))return!0;if(g.contains(h))return!1;s=s.parentElement}return!!f}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(s,c){var f=o.util.clone(o.languages[s]);for(var h in c)f[h]=c[h];return f},insertBefore:function(s,c,f,h){h=h||o.languages;var g=h[s],v={};for(var y in g)if(g.hasOwnProperty(y)){if(y==c)for(var C in f)f.hasOwnProperty(C)&&(v[C]=f[C]);f.hasOwnProperty(y)||(v[y]=g[y])}var E=h[s];return h[s]=v,o.languages.DFS(o.languages,function(z,de){de===E&&z!=s&&(this[z]=v)}),v},DFS:function s(c,f,h,g){g=g||{};var v=o.util.objId;for(var y in c)if(c.hasOwnProperty(y)){f.call(c,y,c[y],h||y);var C=c[y],E=o.util.type(C);E==="Object"&&!g[v(C)]?(g[v(C)]=!0,s(C,f,null,g)):E==="Array"&&!g[v(C)]&&(g[v(C)]=!0,s(C,f,y,g))}}},plugins:{},highlightAll:function(s,c){o.highlightAllUnder(document,s,c)},highlightAllUnder:function(s,c,f){var h={callback:f,container:s,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),o.hooks.run("before-all-elements-highlight",h);for(var g=0,v;v=h.elements[g++];)o.highlightElement(v,c===!0,h.callback)},highlightElement:function(s,c,f){var h=o.util.getLanguage(s),g=o.languages[h];o.util.setLanguage(s,h);var v=s.parentElement;v&&v.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(v,h);var y=s.textContent,C={element:s,language:h,grammar:g,code:y};function E(de){C.highlightedCode=de,o.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,o.hooks.run("after-highlight",C),o.hooks.run("complete",C),f&&f.call(C.element)}if(o.hooks.run("before-sanity-check",C),v=C.element.parentElement,v&&v.nodeName.toLowerCase()==="pre"&&!v.hasAttribute("tabindex")&&v.setAttribute("tabindex","0"),!C.code){o.hooks.run("complete",C),f&&f.call(C.element);return}if(o.hooks.run("before-highlight",C),!C.grammar){E(o.util.encode(C.code));return}if(c&&r.Worker){var z=new Worker(o.filename);z.onmessage=function(de){E(de.data)},z.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else E(o.highlight(C.code,C.grammar,C.language))},highlight:function(s,c,f){var h={code:s,grammar:c,language:f};if(o.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=o.tokenize(h.code,h.grammar),o.hooks.run("after-tokenize",h),u.stringify(o.util.encode(h.tokens),h.language)},tokenize:function(s,c){var f=c.rest;if(f){for(var h in f)c[h]=f[h];delete c.rest}var g=new x;return m(g,g.head,s),b(s,g,c,g.head,0),k(g)},hooks:{all:{},add:function(s,c){var f=o.hooks.all;f[s]=f[s]||[],f[s].push(c)},run:function(s,c){var f=o.hooks.all[s];if(!(!f||!f.length))for(var h=0,g;g=f[h++];)g(c)}},Token:u};r.Prism=o;function u(s,c,f,h){this.type=s,this.content=c,this.alias=f,this.length=(h||"").length|0}u.stringify=function s(c,f){if(typeof c=="string")return c;if(Array.isArray(c)){var h="";return c.forEach(function(E){h+=s(E,f)}),h}var g={type:c.type,content:s(c.content,f),tag:"span",classes:["token",c.type],attributes:{},language:f},v=c.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(g.classes,v):g.classes.push(v)),o.hooks.run("wrap",g);var y="";for(var C in g.attributes)y+=" "+C+'="'+(g.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+y+">"+g.content+"</"+g.tag+">"};function p(s,c,f,h){s.lastIndex=c;var g=s.exec(f);if(g&&h&&g[1]){var v=g[1].length;g.index+=v,g[0]=g[0].slice(v)}return g}function b(s,c,f,h,g,v){for(var y in f)if(!(!f.hasOwnProperty(y)||!f[y])){var C=f[y];C=Array.isArray(C)?C:[C];for(var E=0;E<C.length;++E){if(v&&v.cause==y+","+E)return;var z=C[E],de=z.inside,tt=!!z.lookbehind,hn=!!z.greedy,ka=z.alias;if(hn&&!z.pattern.global){var gn=z.pattern.toString().match(/[imsuy]*$/)[0];z.pattern=RegExp(z.pattern.source,gn+"g")}for(var Lt=z.pattern||z,$=h.next,P=g;$!==c.tail&&!(v&&P>=v.reach);P+=$.value.length,$=$.next){var R=$.value;if(c.length>s.length)return;if(!(R instanceof u)){var M=1,D;if(hn){if(D=p(Lt,P,s,tt),!D||D.index>=s.length)break;var Se=D.index,Mt=D.index+D[0].length,ne=P;for(ne+=$.value.length;Se>=ne;)$=$.next,ne+=$.value.length;if(ne-=$.value.length,P=ne,$.value instanceof u)continue;for(var je=$;je!==c.tail&&(ne<Mt||typeof je.value=="string");je=je.next)M++,ne+=je.value.length;M--,R=s.slice(P,ne),D.index-=P}else if(D=p(Lt,0,R,tt),!D)continue;var Se=D.index,Ve=D[0],Sa=R.slice(0,Se),Ul=R.slice(Se+Ve.length),$a=P+R.length;v&&$a>v.reach&&(v.reach=$a);var lr=$.prev;Sa&&(lr=m(c,lr,Sa),P+=Sa.length),w(c,lr,M);var xu=new u(y,de?o.tokenize(Ve,de):Ve,ka,Ve);if($=m(c,lr,xu),Ul&&m(c,$,Ul),M>1){var Ca={cause:y+","+E,reach:$a};b(s,c,f,$.prev,P,Ca),v&&Ca.reach>v.reach&&(v.reach=Ca.reach)}}}}}}function x(){var s={value:null,prev:null,next:null},c={value:null,prev:s,next:null};s.next=c,this.head=s,this.tail=c,this.length=0}function m(s,c,f){var h=c.next,g={value:f,prev:c,next:h};return c.next=g,h.prev=g,s.length++,g}function w(s,c,f){for(var h=c.next,g=0;g<f&&h!==s.tail;g++)h=h.next;c.next=h,h.prev=c,s.length-=g}function k(s){for(var c=[],f=s.head.next;f!==s.tail;)c.push(f.value),f=f.next;return c}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(s){var c=JSON.parse(s.data),f=c.language,h=c.code,g=c.immediateClose;r.postMessage(o.highlight(h,o.languages[f],f)),g&&r.close()},!1)),o;var _=o.util.currentScript();_&&(o.filename=_.src,_.hasAttribute("data-manual")&&(o.manual=!0));function T(){o.manual||o.highlightAll()}if(!o.manual){var d=document.readyState;d==="loading"||d==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return o}(t);e.exports&&(e.exports=n),typeof ei<"u"&&(ei.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(a,i){var l={};l["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var u={};u[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,a){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:n.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",a=function(_,T){return"✖ Error "+_+" while fetching file: "+T},i="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",u="loading",p="loaded",b="failed",x="pre[data-src]:not(["+o+'="'+p+'"]):not(['+o+'="'+u+'"])';function m(_,T,d){var s=new XMLHttpRequest;s.open("GET",_,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?T(s.responseText):s.status>=400?d(a(s.status,s.statusText)):d(i))},s.send(null)}function w(_){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(T){var d=Number(T[1]),s=T[2],c=T[3];return s?c?[d,Number(c)]:[d,void 0]:[d,d]}}n.hooks.add("before-highlightall",function(_){_.selector+=", "+x}),n.hooks.add("before-sanity-check",function(_){var T=_.element;if(T.matches(x)){_.code="",T.setAttribute(o,u);var d=T.appendChild(document.createElement("CODE"));d.textContent=r;var s=T.getAttribute("data-src"),c=_.language;if(c==="none"){var f=(/\.(\w+)$/.exec(s)||[,"none"])[1];c=l[f]||f}n.util.setLanguage(d,c),n.util.setLanguage(T,c);var h=n.plugins.autoloader;h&&h.loadLanguages(c),m(s,function(g){T.setAttribute(o,p);var v=w(T.getAttribute("data-range"));if(v){var y=g.split(/\r\n?|\n/g),C=v[0],E=v[1]==null?y.length:v[1];C<0&&(C+=y.length),C=Math.max(0,Math.min(C-1,y.length)),E<0&&(E+=y.length),E=Math.max(0,Math.min(E,y.length)),g=y.slice(C,E).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(C+1))}d.textContent=g,n.highlightElement(d)},function(g){T.setAttribute(o,b),d.textContent=g})}}),n.plugins.fileHighlight={highlight:function(T){for(var d=(T||document).querySelectorAll(x),s=0,c;c=d[s++];)n.highlightElement(c)}};var k=!1;n.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(mu);var Kf=mu.exports;const Xi=Ki(Kf);Xi.languages.manim||(Xi.languages.manim={comment:/\/\/.*/,string:/"[^"]*"/,keyword:/\b(version|programmable|bitmap|text|ninepatch|placeholder|staticRef|dynamicRef|slot|spacer|interactive|layers|mask|flow|repeatable|tilegroup|stateanim|point|apply|graphics|pixels|particles|import|filter|settings|curves|paths|atlas2)\b/,"attr-name":/\b(sheet|generated|color|file|center|left|right|grid|hex|layout|construct)\b/,boolean:/\b(true|false)\b/,number:/\b0x[0-9a-fA-F]+\b|\b\d+\.?\d*\b/,operator:/=>|@\(|@if|@else|@default|@ifstrict|@\)|!=|>=|<=|>|</,punctuation:/[{}():,;]/,variable:/\$\w+/,"class-name":/#\w+/,tag:/@\w+/});function Zf({source:e,visible:t}){const n=be.useRef(null);return be.useEffect(()=>{n.current&&e&&(n.current.textContent=e,Xi.highlightElement(n.current))},[e]),!t||!e?null:A.jsxs("div",{className:"border-t border-gray-700 flex-1 min-h-0 flex flex-col",children:[A.jsx("div",{className:"px-3 py-1.5 border-b border-gray-700 text-xs font-medium text-gray-300 flex-shrink-0",children:".manim Source"}),A.jsx("div",{className:"flex-1 overflow-auto p-3 bg-gray-900",children:A.jsx("pre",{className:"text-xs leading-relaxed",style:{margin:0},children:A.jsx("code",{ref:n,className:"language-manim",children:e})})})]})}const Ja="nav";function qf(){const[e,t]=be.useState(Ja),[n,r]=be.useState(!1),[a,i]=be.useState(!1),[l,o]=be.useState(null),[u]=be.useState(()=>new Yf);be.useEffect(()=>{window.playgroundLoader=u;const m=window.location.hash.match(/screen=(\w+)/);return window.defaultScreen=m?m[1]:Ja,()=>{u.dispose()}},[u]),be.useEffect(()=>{const x=()=>{const w=window.location.hash.match(/screen=(\w+)/);if(w){const k=w[1];t(k),u.switchScreen(k)}};return x(),window.addEventListener("hashchange",x),()=>window.removeEventListener("hashchange",x)},[u]);const p=x=>{t(x),window.location.hash=`screen=${x}`,u.switchScreen(x);const m=u.getSourceForScreen(x);o(m)},b=()=>{if(!a){const x=u.getSourceForScreen(e);o(x)}i(!a)};return A.jsxs("div",{className:"flex h-screen w-screen bg-gray-900 text-white",children:[A.jsx(Xf,{currentScreen:e,onScreenSelect:p,collapsed:n,onToggleCollapse:()=>r(!n)}),A.jsxs("div",{className:"flex-1 flex flex-col h-full min-h-0",children:[A.jsxs("div",{className:"border-b border-gray-700 flex-shrink-0 flex items-center justify-between px-6 py-3",children:[A.jsx("button",{onClick:()=>p(Ja),className:"text-sm font-semibold text-gray-200 hover:text-white transition-colors tracking-wide",children:"hx-multianim Showcase"}),A.jsx("div",{className:"flex items-center space-x-3",children:A.jsx("button",{onClick:b,className:`text-xs px-2 py-0.5 rounded transition-colors ${a?"bg-blue-600 text-white":"text-gray-400 hover:text-white"}`,children:a?"Hide Source":"View .manim"})})]}),A.jsxs("div",{className:"flex-1 flex min-h-0",children:[A.jsx("div",{className:`${a?"w-2/3":"w-full"} min-h-0`,children:A.jsx("canvas",{id:"webgl",className:"w-full h-full block"})}),a&&A.jsx("div",{className:"w-1/3 border-l border-gray-700 flex flex-col min-h-0",children:A.jsx(Zf,{source:l,visible:a})})]})]})]})}var hu={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(ei,function(){var n=function(){},r={},a={},i={};function l(m,w){m=m.push?m:[m];var k=[],_=m.length,T=_,d,s,c,f;for(d=function(h,g){g.length&&k.push(h),T--,T||w(k)};_--;){if(s=m[_],c=a[s],c){d(s,c);continue}f=i[s]=i[s]||[],f.push(d)}}function o(m,w){if(m){var k=i[m];if(a[m]=w,!!k)for(;k.length;)k[0](m,w),k.splice(0,1)}}function u(m,w){m.call&&(m={success:m}),w.length?(m.error||n)(w):(m.success||n)(m)}function p(m,w,k,_){var T=document,d=k.async,s=(k.numRetries||0)+1,c=k.before||n,f=m.replace(/[\?|#].*$/,""),h=m.replace(/^(css|img|module|nomodule)!/,""),g,v,y;if(_=_||0,/(^css!|\.css$)/.test(f))y=T.createElement("link"),y.rel="stylesheet",y.href=h,g="hideFocus"in y,g&&y.relList&&(g=0,y.rel="preload",y.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f))y=T.createElement("img"),y.src=h;else if(y=T.createElement("script"),y.src=h,y.async=d===void 0?!0:d,v="noModule"in y,/^module!/.test(f)){if(!v)return w(m,"l");y.type="module"}else if(/^nomodule!/.test(f)&&v)return w(m,"l");y.onload=y.onerror=y.onbeforeload=function(C){var E=C.type[0];if(g)try{y.sheet.cssText.length||(E="e")}catch(z){z.code!=18&&(E="e")}if(E=="e"){if(_+=1,_<s)return p(m,w,k,_)}else if(y.rel=="preload"&&y.as=="style")return y.rel="stylesheet";w(m,E,C.defaultPrevented)},c(m,y)!==!1&&T.head.appendChild(y)}function b(m,w,k){m=m.push?m:[m];var _=m.length,T=_,d=[],s,c;for(s=function(f,h,g){if(h=="e"&&d.push(f),h=="b")if(g)d.push(f);else return;_--,_||w(d)},c=0;c<T;c++)p(m[c],s,k)}function x(m,w,k){var _,T;if(w&&w.trim&&(_=w),T=(_?k:w)||{},_){if(_ in r)throw"LoadJS";r[_]=!0}function d(s,c){b(m,function(f){u(T,f),s&&u({success:s,error:c},f),o(_,f)},T)}if(T.returnPromise)return new Promise(d);d()}return x.ready=function(w,k){return l(w,function(_){u(k,_)}),x},x.done=function(w){o(w,[])},x.reset=function(){r={},a={},i={}},x.isDefined=function(w){return w in r},x})})(hu);var Jf=hu.exports;const ep=Ki(Jf);class tp{constructor(t={}){nt(this,"maxRetries");nt(this,"retryDelay");nt(this,"timeout");nt(this,"retryCount",0);nt(this,"isLoaded",!1);this.maxRetries=t.maxRetries||5,this.retryDelay=t.retryDelay||2e3,this.timeout=t.timeout||1e4}waitForReactApp(){document.getElementById("root")&&window.playgroundLoader?(console.log("React app ready, loading Haxe application..."),this.loadHaxeApp()):setTimeout(()=>this.waitForReactApp(),300)}loadHaxeApp(){console.log(`Attempting to load playground.js (attempt ${this.retryCount+1}/${this.maxRetries+1})`);const t=setTimeout(()=>{console.error("Timeout loading playground.js"),this.handleLoadError()},this.timeout);ep("playground.js",{success:()=>{clearTimeout(t),console.log("playground.js loaded successfully"),this.isLoaded=!0,this.waitForPlaygroundMain()},error:n=>{clearTimeout(t),console.error("Failed to load playground.js:",n),this.handleLoadError()}})}handleLoadError(){this.retryCount++,this.retryCount<=this.maxRetries?(console.log(`Retrying in ${this.retryDelay}ms... (${this.retryCount}/${this.maxRetries})`),setTimeout(()=>this.loadHaxeApp(),this.retryDelay)):console.error(`Failed to load playground.js after ${this.maxRetries} retries`)}waitForPlaygroundMain(){typeof window.PlaygroundMain<"u"&&window.PlaygroundMain.instance?(console.log("Haxe application initialized successfully"),window.playgroundLoader&&(window.playgroundLoader.mainApp=window.PlaygroundMain.instance)):setTimeout(()=>this.waitForPlaygroundMain(),100)}start(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.waitForReactApp()):this.waitForReactApp()}}const gu=new tp({maxRetries:5,retryDelay:2e3,timeout:1e4});gu.start();window.haxeLoader=gu;ti.createRoot(document.getElementById("root")).render(A.jsx(zu.StrictMode,{children:A.jsx(qf,{})}));
//# sourceMappingURL=index-CiM2615q.js.map
