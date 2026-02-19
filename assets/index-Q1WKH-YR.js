var vc=Object.defineProperty;var bc=(e,n,t)=>n in e?vc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var tn=(e,n,t)=>bc(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},oa={},rs={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),yc=Symbol.for("react.portal"),_c=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),Sc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Ec=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Gi=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=Gi&&e[Gi]||e["@@iterator"],typeof e=="function"?e:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ls=Object.assign,is={};function ft(e,n,t){this.props=e,this.context=n,this.refs=is,this.updater=t||as}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=ft.prototype;function Zl(e,n,t){this.props=e,this.context=n,this.refs=is,this.updater=t||as}var ql=Zl.prototype=new os;ql.constructor=Zl;ls(ql,ft.prototype);ql.isPureReactComponent=!0;var Qi=Array.isArray,ss=Object.prototype.hasOwnProperty,Jl={current:null},us={key:!0,ref:!0,__self:!0,__source:!0};function cs(e,n,t){var r,a={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)ss.call(n,r)&&!us.hasOwnProperty(r)&&(a[r]=n[r]);var o=arguments.length-2;if(o===1)a.children=t;else if(1<o){for(var c=Array(o),p=0;p<o;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:nr,type:e,key:l,ref:i,props:a,_owner:Jl.current}}function Rc(e,n){return{$$typeof:nr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ei(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Nc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Yi=/\/+/g;function Fa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Nc(""+e.key):n.toString(36)}function Cr(e,n,t,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case nr:case yc:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Fa(i,0):r,Qi(a)?(t="",e!=null&&(t=e.replace(Yi,"$&/")+"/"),Cr(a,n,t,"",function(p){return p})):a!=null&&(ei(a)&&(a=Rc(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Yi,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",Qi(e))for(var o=0;o<e.length;o++){l=e[o];var c=r+Fa(l,o);i+=Cr(l,n,t,c,a)}else if(c=Pc(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=r+Fa(l,o++),i+=Cr(l,n,t,c,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function or(e,n,t){if(e==null)return e;var r=[],a=0;return Cr(e,r,"","",function(l){return n.call(t,l,a++)}),r}function Bc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},$r={transition:null},Ac={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:$r,ReactCurrentOwner:Jl};function ds(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:or,forEach:function(e,n,t){or(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return or(e,function(){n++}),n},toArray:function(e){return or(e,function(n){return n})||[]},only:function(e){if(!ei(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ft;N.Fragment=_c;N.Profiler=kc;N.PureComponent=Zl;N.StrictMode=wc;N.Suspense=Fc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;N.act=ds;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ls({},e.props),a=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Jl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)ss.call(n,c)&&!us.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){o=Array(c);for(var p=0;p<c;p++)o[p]=arguments[p+2];r.children=o}return{$$typeof:nr,type:e.type,key:a,ref:l,props:r,_owner:i}};N.createContext=function(e){return e={$$typeof:Cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sc,_context:e},e.Consumer=e};N.createElement=cs;N.createFactory=function(e){var n=cs.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:$c,render:e}};N.isValidElement=ei;N.lazy=function(e){return{$$typeof:Tc,_payload:{_status:-1,_result:e},_init:Bc}};N.memo=function(e,n){return{$$typeof:Ec,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=$r.transition;$r.transition={};try{e()}finally{$r.transition=n}};N.unstable_act=ds;N.useCallback=function(e,n){return ue.current.useCallback(e,n)};N.useContext=function(e){return ue.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};N.useEffect=function(e,n){return ue.current.useEffect(e,n)};N.useId=function(){return ue.current.useId()};N.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return ue.current.useMemo(e,n)};N.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};N.useRef=function(e){return ue.current.useRef(e)};N.useState=function(e){return ue.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return ue.current.useTransition()};N.version="18.3.1";rs.exports=N;var ve=rs.exports;const zc=Kl(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=ve,Lc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Ic=Object.prototype.hasOwnProperty,Oc=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wc={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,n,t){var r,a={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Ic.call(n,r)&&!Wc.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Lc,type:e,key:l,ref:i,props:a,_owner:Oc.current}}oa.Fragment=Mc;oa.jsx=fs;oa.jsxs=fs;ts.exports=oa;var A=ts.exports,nl={},ps={exports:{}},we={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var R=C.length;C.push(P);e:for(;0<R;){var M=R-1>>>1,D=C[M];if(0<a(D,P))C[M]=P,C[R]=D,R=M;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],R=C.pop();if(R!==P){C[0]=R;e:for(var M=0,D=C.length,In=D>>>1;M<In;){var te=2*(M+1)-1,He=C[te],Se=te+1,Ue=C[Se];if(0>a(He,R))Se<D&&0>a(Ue,He)?(C[M]=Ue,C[Se]=R,M=Se):(C[M]=He,C[te]=R,M=te);else if(Se<D&&0>a(Ue,R))C[M]=Ue,C[Se]=R,M=Se;else break e}}return P}function a(C,P){var R=C.sortIndex-P.sortIndex;return R!==0?R:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],p=[],v=1,x=null,m=3,w=!1,k=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(C){for(var P=t(p);P!==null;){if(P.callback===null)r(p);else if(P.startTime<=C)r(p),P.sortIndex=P.expirationTime,n(c,P);else break;P=t(p)}}function f(C){if(_=!1,u(C),!k)if(t(c)!==null)k=!0,gt(h);else{var P=t(p);P!==null&&Mn(f,P.startTime-C)}}function h(C,P){k=!1,_&&(_=!1,d(y),y=-1),w=!0;var R=m;try{for(u(P),x=t(c);x!==null&&(!(x.expirationTime>P)||C&&!z());){var M=x.callback;if(typeof M=="function"){x.callback=null,m=x.priorityLevel;var D=M(x.expirationTime<=P);P=e.unstable_now(),typeof D=="function"?x.callback=D:x===t(c)&&r(c),u(P)}else r(c);x=t(c)}if(x!==null)var In=!0;else{var te=t(p);te!==null&&Mn(f,te.startTime-P),In=!1}return In}finally{x=null,m=R,w=!1}}var g=!1,b=null,y=-1,$=5,T=-1;function z(){return!(e.unstable_now()-T<$)}function de(){if(b!==null){var C=e.unstable_now();T=C;var P=!0;try{P=b(!0,C)}finally{P?nn():(g=!1,b=null)}}else g=!1}var nn;if(typeof s=="function")nn=function(){s(de)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,ka=ht.port2;ht.port1.onmessage=de,nn=function(){ka.postMessage(null)}}else nn=function(){E(de,0)};function gt(C){b=C,g||(g=!0,nn())}function Mn(C,P){y=E(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,gt(h))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var R=m;m=P;try{return C()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=m;m=C;try{return P()}finally{m=R}},e.unstable_scheduleCallback=function(C,P,R){var M=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?M+R:M):R=M,C){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=R+D,C={id:v++,callback:P,priorityLevel:C,startTime:R,expirationTime:D,sortIndex:-1},R>M?(C.sortIndex=R,n(p,C),t(c)===null&&C===t(p)&&(_?(d(y),y=-1):_=!0,Mn(f,R-M))):(C.sortIndex=D,n(c,C),k||w||(k=!0,gt(h))),C},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(C){var P=m;return function(){var R=m;m=P;try{return C.apply(this,arguments)}finally{m=R}}}})(hs);ms.exports=hs;var jc=ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=ve,_e=jc;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gs=new Set,Mt={};function Dn(e,n){lt(e,n),lt(e+"Capture",n)}function lt(e,n){for(Mt[e]=n,e=0;e<n.length;e++)gs.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Uc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xi={},Ki={};function Vc(e){return tl.call(Ki,e)?!0:tl.call(Xi,e)?!1:Uc.test(e)?Ki[e]=!0:(Xi[e]=!0,!1)}function Gc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,n,t,r){if(n===null||typeof n>"u"||Gc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,a,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ni=/[\-:]([a-z])/g;function ti(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ni,ti);ne[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ni,ti);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ni,ti);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ri(e,n,t,r){var a=ne.hasOwnProperty(n)?ne[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Qc(n,t,a,r)&&(t=null),r||a===null?Vc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var en=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),ai=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),vs=Symbol.for("react.context"),li=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),ii=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),bs=Symbol.for("react.offscreen"),Zi=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=Zi&&e[Zi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ea;function Ct(e){if(Ea===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ea=n&&n[1]||""}return`
`+Ea+e}var Ta=!1;function Pa(e,n){if(!e||Ta)return"";Ta=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=r.stack.split(`
`),i=a.length-1,o=l.length-1;1<=i&&0<=o&&a[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(a[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||a[i]!==l[o]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=o);break}}}finally{Ta=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ct(e):""}function Yc(e){switch(e.tag){case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 2:case 15:return e=Pa(e.type,!1),e;case 11:return e=Pa(e.type.render,!1),e;case 1:return e=Pa(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Wn:return"Portal";case rl:return"Profiler";case ai:return"StrictMode";case al:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vs:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case li:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ii:return n=e.displayName||null,n!==null?n:il(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return il(e(n))}catch{}}return null}function Xc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(n);case 8:return n===ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kc(e){var n=ys(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ur(e){e._valueTracker||(e._valueTracker=Kc(e))}function _s(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ys(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ol(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ws(e,n){n=n.checked,n!=null&&ri(e,"checked",n,!1)}function sl(e,n){ws(e,n);var t=bn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ul(e,n.type,t):n.hasOwnProperty("defaultValue")&&ul(e,n.type,bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ji(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ul(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var $t=Array.isArray;function Jn(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+bn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function cl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if($t(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:bn(t)}}function ks(e,n){var t=bn(n.value),r=bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function no(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ss(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ss(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,Cs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zc=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){Zc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tt[n]=Tt[e]})});function $s(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+n).trim():n+"px"}function Fs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=$s(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var qc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,n){if(n){if(qc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function pl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,et=null,nt=null;function to(e){if(e=ar(e)){if(typeof hl!="function")throw Error(S(280));var n=e.stateNode;n&&(n=fa(n),hl(e.stateNode,e.type,n))}}function Es(e){et?nt?nt.push(e):nt=[e]:et=e}function Ts(){if(et){var e=et,n=nt;if(nt=et=null,to(e),n)for(e=0;e<n.length;e++)to(n[e])}}function Ps(e,n){return e(n)}function Rs(){}var Ra=!1;function Ns(e,n,t){if(Ra)return e(n,t);Ra=!0;try{return Ps(e,n,t)}finally{Ra=!1,(et!==null||nt!==null)&&(Rs(),Ts())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=fa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var gl=!1;if(Ke)try{var vt={};Object.defineProperty(vt,"passive",{get:function(){gl=!0}}),window.addEventListener("test",vt,vt),window.removeEventListener("test",vt,vt)}catch{gl=!1}function Jc(e,n,t,r,a,l,i,o,c){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(v){this.onError(v)}}var Pt=!1,Mr=null,Ir=!1,xl=null,e0={onError:function(e){Pt=!0,Mr=e}};function n0(e,n,t,r,a,l,i,o,c){Pt=!1,Mr=null,Jc.apply(e0,arguments)}function t0(e,n,t,r,a,l,i,o,c){if(n0.apply(this,arguments),Pt){if(Pt){var p=Mr;Pt=!1,Mr=null}else throw Error(S(198));Ir||(Ir=!0,xl=p)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Bs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ro(e){if(Ln(e)!==e)throw Error(S(188))}function r0(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return ro(a),e;if(l===r)return ro(a),n;l=l.sibling}throw Error(S(188))}if(t.return!==r.return)t=a,r=l;else{for(var i=!1,o=a.child;o;){if(o===t){i=!0,t=a,r=l;break}if(o===r){i=!0,r=a,t=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===t){i=!0,t=l,r=a;break}if(o===r){i=!0,r=l,t=a;break}o=o.sibling}if(!i)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function As(e){return e=r0(e),e!==null?zs(e):null}function zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=zs(e);if(n!==null)return n;e=e.sibling}return null}var Ds=_e.unstable_scheduleCallback,ao=_e.unstable_cancelCallback,a0=_e.unstable_shouldYield,l0=_e.unstable_requestPaint,Q=_e.unstable_now,i0=_e.unstable_getCurrentPriorityLevel,si=_e.unstable_ImmediatePriority,Ls=_e.unstable_UserBlockingPriority,Or=_e.unstable_NormalPriority,o0=_e.unstable_LowPriority,Ms=_e.unstable_IdlePriority,sa=null,We=null;function s0(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:d0,u0=Math.log,c0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(u0(e)/c0|0)|0}var dr=64,fr=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var o=i&~a;o!==0?r=Ft(o):(l&=i,l!==0&&(r=Ft(l)))}else i=t&~a,i!==0?r=Ft(i):l!==0&&(r=Ft(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ze(n),a=1<<t,r|=e[t],n&=~a;return r}function f0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ze(l),o=1<<i,c=a[i];c===-1?(!(o&t)||o&r)&&(a[i]=f0(o,n)):c<=n&&(e.expiredLanes|=o),l&=~o}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Is(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function Na(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function tr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ze(n),e[n]=t}function m0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-ze(t),l=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~l}}function ui(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ze(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var L=0;function Os(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ws,ci,js,Hs,Us,bl=!1,pr=[],dn=null,fn=null,pn=null,Wt=new Map,jt=new Map,on=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lo(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(n.pointerId)}}function bt(e,n,t,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},n!==null&&(n=ar(n),n!==null&&ci(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function g0(e,n,t,r,a){switch(n){case"focusin":return dn=bt(dn,e,n,t,r,a),!0;case"dragenter":return fn=bt(fn,e,n,t,r,a),!0;case"mouseover":return pn=bt(pn,e,n,t,r,a),!0;case"pointerover":var l=a.pointerId;return Wt.set(l,bt(Wt.get(l)||null,e,n,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,jt.set(l,bt(jt.get(l)||null,e,n,t,r,a)),!0}return!1}function Vs(e){var n=$n(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=Bs(t),n!==null){e.blockedOn=n,Us(e.priority,function(){js(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=yl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ml=r,t.target.dispatchEvent(r),ml=null}else return n=ar(t),n!==null&&ci(n),e.blockedOn=t,!1;n.shift()}return!0}function io(e,n,t){Fr(e)&&t.delete(n)}function x0(){bl=!1,dn!==null&&Fr(dn)&&(dn=null),fn!==null&&Fr(fn)&&(fn=null),pn!==null&&Fr(pn)&&(pn=null),Wt.forEach(io),jt.forEach(io)}function yt(e,n){e.blockedOn===n&&(e.blockedOn=null,bl||(bl=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,x0)))}function Ht(e){function n(a){return yt(a,e)}if(0<pr.length){yt(pr[0],e);for(var t=1;t<pr.length;t++){var r=pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&yt(dn,e),fn!==null&&yt(fn,e),pn!==null&&yt(pn,e),Wt.forEach(n),jt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)Vs(t),t.blockedOn===null&&on.shift()}var tt=en.ReactCurrentBatchConfig,jr=!0;function v0(e,n,t,r){var a=L,l=tt.transition;tt.transition=null;try{L=1,di(e,n,t,r)}finally{L=a,tt.transition=l}}function b0(e,n,t,r){var a=L,l=tt.transition;tt.transition=null;try{L=4,di(e,n,t,r)}finally{L=a,tt.transition=l}}function di(e,n,t,r){if(jr){var a=yl(e,n,t,r);if(a===null)ja(e,n,r,Hr,t),lo(e,r);else if(g0(a,e,n,t,r))r.stopPropagation();else if(lo(e,r),n&4&&-1<h0.indexOf(e)){for(;a!==null;){var l=ar(a);if(l!==null&&Ws(l),l=yl(e,n,t,r),l===null&&ja(e,n,r,Hr,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else ja(e,n,r,null,t)}}var Hr=null;function yl(e,n,t,r){if(Hr=null,e=oi(r),e=$n(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Bs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Hr=e,null}function Gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case si:return 1;case Ls:return 4;case Or:case o0:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var un=null,fi=null,Er=null;function Qs(){if(Er)return Er;var e,n=fi,t=n.length,r,a="value"in un?un.value:un.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[l-r];r++);return Er=a.slice(e,1<r?1-r:void 0)}function Tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function oo(){return!1}function ke(e){function n(t,r,a,l,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mr:oo,this.isPropagationStopped=oo,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),n}var pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=ke(pt),rr=V({},pt,{view:0,detail:0}),y0=ke(rr),Ba,Aa,_t,ua=V({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_t&&(_t&&e.type==="mousemove"?(Ba=e.screenX-_t.screenX,Aa=e.screenY-_t.screenY):Aa=Ba=0,_t=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),so=ke(ua),_0=V({},ua,{dataTransfer:0}),w0=ke(_0),k0=V({},rr,{relatedTarget:0}),za=ke(k0),S0=V({},pt,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=ke(S0),$0=V({},pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=ke($0),E0=V({},pt,{data:0}),uo=ke(E0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=R0[e])?!!n[e]:!1}function mi(){return N0}var B0=V({},rr,{key:function(e){if(e.key){var n=T0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=ke(B0),z0=V({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),co=ke(z0),D0=V({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),L0=ke(D0),M0=V({},pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=ke(M0),O0=V({},ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=ke(O0),j0=[9,13,27,32],hi=Ke&&"CompositionEvent"in window,Rt=null;Ke&&"documentMode"in document&&(Rt=document.documentMode);var H0=Ke&&"TextEvent"in window&&!Rt,Ys=Ke&&(!hi||Rt&&8<Rt&&11>=Rt),fo=" ",po=!1;function Xs(e,n){switch(e){case"keyup":return j0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function U0(e,n){switch(e){case"compositionend":return Ks(n);case"keypress":return n.which!==32?null:(po=!0,fo);case"textInput":return e=n.data,e===fo&&po?null:e;default:return null}}function V0(e,n){if(Hn)return e==="compositionend"||!hi&&Xs(e,n)?(e=Qs(),Er=fi=un=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ys&&n.locale!=="ko"?null:n.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!G0[e.type]:n==="textarea"}function Zs(e,n,t,r){Es(r),n=Ur(n,"onChange"),0<n.length&&(t=new pi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Nt=null,Ut=null;function Q0(e){su(e,0)}function ca(e){var n=Gn(e);if(_s(n))return e}function Y0(e,n){if(e==="change")return n}var qs=!1;if(Ke){var Da;if(Ke){var La="oninput"in document;if(!La){var ho=document.createElement("div");ho.setAttribute("oninput","return;"),La=typeof ho.oninput=="function"}Da=La}else Da=!1;qs=Da&&(!document.documentMode||9<document.documentMode)}function go(){Nt&&(Nt.detachEvent("onpropertychange",Js),Ut=Nt=null)}function Js(e){if(e.propertyName==="value"&&ca(Ut)){var n=[];Zs(n,Ut,e,oi(e)),Ns(Q0,n)}}function X0(e,n,t){e==="focusin"?(go(),Nt=n,Ut=t,Nt.attachEvent("onpropertychange",Js)):e==="focusout"&&go()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ca(Ut)}function Z0(e,n){if(e==="click")return ca(n)}function q0(e,n){if(e==="input"||e==="change")return ca(n)}function J0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Le=typeof Object.is=="function"?Object.is:J0;function Vt(e,n){if(Le(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!tl.call(n,a)||!Le(e[a],n[a]))return!1}return!0}function xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vo(e,n){var t=xo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xo(t)}}function eu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?eu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nu(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function gi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ed(e){var n=nu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&eu(t.ownerDocument.documentElement,t)){if(r!==null&&gi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=vo(t,l);var i=vo(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nd=Ke&&"documentMode"in document&&11>=document.documentMode,Un=null,_l=null,Bt=null,wl=!1;function bo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wl||Un==null||Un!==Lr(r)||(r=Un,"selectionStart"in r&&gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bt&&Vt(Bt,r)||(Bt=r,r=Ur(_l,"onSelect"),0<r.length&&(n=new pi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Un)))}function hr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vn={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Ma={},tu={};Ke&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function da(e){if(Ma[e])return Ma[e];if(!Vn[e])return e;var n=Vn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tu)return Ma[e]=n[t];return e}var ru=da("animationend"),au=da("animationiteration"),lu=da("animationstart"),iu=da("transitionend"),ou=new Map,yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,n){ou.set(e,n),Dn(n,[e])}for(var Ia=0;Ia<yo.length;Ia++){var Oa=yo[Ia],td=Oa.toLowerCase(),rd=Oa[0].toUpperCase()+Oa.slice(1);_n(td,"on"+rd)}_n(ru,"onAnimationEnd");_n(au,"onAnimationIteration");_n(lu,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(iu,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));function _o(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,t0(r,n,void 0,e),e.currentTarget=null}function su(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var o=r[i],c=o.instance,p=o.currentTarget;if(o=o.listener,c!==l&&a.isPropagationStopped())break e;_o(a,o,p),l=c}else for(i=0;i<r.length;i++){if(o=r[i],c=o.instance,p=o.currentTarget,o=o.listener,c!==l&&a.isPropagationStopped())break e;_o(a,o,p),l=c}}}if(Ir)throw e=xl,Ir=!1,xl=null,e}function O(e,n){var t=n[Fl];t===void 0&&(t=n[Fl]=new Set);var r=e+"__bubble";t.has(r)||(uu(n,e,2,!1),t.add(r))}function Wa(e,n,t){var r=0;n&&(r|=4),uu(t,e,r,n)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Gt(e){if(!e[gr]){e[gr]=!0,gs.forEach(function(t){t!=="selectionchange"&&(ad.has(t)||Wa(t,!1,e),Wa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gr]||(n[gr]=!0,Wa("selectionchange",!1,n))}}function uu(e,n,t,r){switch(Gs(n)){case 1:var a=v0;break;case 4:a=b0;break;default:a=di}t=a.bind(null,n,t,e),a=void 0,!gl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function ja(e,n,t,r,a){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;o!==null;){if(i=$n(o),i===null)return;if(c=i.tag,c===5||c===6){r=l=i;continue e}o=o.parentNode}}r=r.return}Ns(function(){var p=l,v=oi(t),x=[];e:{var m=ou.get(e);if(m!==void 0){var w=pi,k=e;switch(e){case"keypress":if(Tr(t)===0)break e;case"keydown":case"keyup":w=A0;break;case"focusin":k="focus",w=za;break;case"focusout":k="blur",w=za;break;case"beforeblur":case"afterblur":w=za;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=L0;break;case ru:case au:case lu:w=C0;break;case iu:w=I0;break;case"scroll":w=y0;break;case"wheel":w=W0;break;case"copy":case"cut":case"paste":w=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=co}var _=(n&4)!==0,E=!_&&e==="scroll",d=_?m!==null?m+"Capture":null:m;_=[];for(var s=p,u;s!==null;){u=s;var f=u.stateNode;if(u.tag===5&&f!==null&&(u=f,d!==null&&(f=Ot(s,d),f!=null&&_.push(Qt(s,f,u)))),E)break;s=s.return}0<_.length&&(m=new w(m,k,null,t,v),x.push({event:m,listeners:_}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==ml&&(k=t.relatedTarget||t.fromElement)&&($n(k)||k[Ze]))break e;if((w||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=p,k=k?$n(k):null,k!==null&&(E=Ln(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=p),w!==k)){if(_=so,f="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=co,f="onPointerLeave",d="onPointerEnter",s="pointer"),E=w==null?m:Gn(w),u=k==null?m:Gn(k),m=new _(f,s+"leave",w,t,v),m.target=E,m.relatedTarget=u,f=null,$n(v)===p&&(_=new _(d,s+"enter",k,t,v),_.target=u,_.relatedTarget=E,f=_),E=f,w&&k)n:{for(_=w,d=k,s=0,u=_;u;u=On(u))s++;for(u=0,f=d;f;f=On(f))u++;for(;0<s-u;)_=On(_),s--;for(;0<u-s;)d=On(d),u--;for(;s--;){if(_===d||d!==null&&_===d.alternate)break n;_=On(_),d=On(d)}_=null}else _=null;w!==null&&wo(x,m,w,_,!1),k!==null&&E!==null&&wo(x,E,k,_,!0)}}e:{if(m=p?Gn(p):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var h=Y0;else if(mo(m))if(qs)h=q0;else{h=K0;var g=X0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(h=Z0);if(h&&(h=h(e,p))){Zs(x,h,t,v);break e}g&&g(e,m,p),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&ul(m,"number",m.value)}switch(g=p?Gn(p):window,e){case"focusin":(mo(g)||g.contentEditable==="true")&&(Un=g,_l=p,Bt=null);break;case"focusout":Bt=_l=Un=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,bo(x,t,v);break;case"selectionchange":if(nd)break;case"keydown":case"keyup":bo(x,t,v)}var b;if(hi)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hn?Xs(e,t)&&(y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Ys&&t.locale!=="ko"&&(Hn||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hn&&(b=Qs()):(un=v,fi="value"in un?un.value:un.textContent,Hn=!0)),g=Ur(p,y),0<g.length&&(y=new uo(y,e,null,t,v),x.push({event:y,listeners:g}),b?y.data=b:(b=Ks(t),b!==null&&(y.data=b)))),(b=H0?U0(e,t):V0(e,t))&&(p=Ur(p,"onBeforeInput"),0<p.length&&(v=new uo("onBeforeInput","beforeinput",null,t,v),x.push({event:v,listeners:p}),v.data=b))}su(x,n)})}function Qt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ur(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Ot(e,t),l!=null&&r.unshift(Qt(e,l,a)),l=Ot(e,n),l!=null&&r.push(Qt(e,l,a))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wo(e,n,t,r,a){for(var l=n._reactName,i=[];t!==null&&t!==r;){var o=t,c=o.alternate,p=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&p!==null&&(o=p,a?(c=Ot(t,l),c!=null&&i.unshift(Qt(t,c,o))):a||(c=Ot(t,l),c!=null&&i.push(Qt(t,c,o)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var ld=/\r\n?/g,id=/\u0000|\uFFFD/g;function ko(e){return(typeof e=="string"?e:""+e).replace(ld,`
`).replace(id,"")}function xr(e,n,t){if(n=ko(n),ko(e)!==n&&t)throw Error(S(425))}function Vr(){}var kl=null,Sl=null;function Cl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,od=typeof clearTimeout=="function"?clearTimeout:void 0,So=typeof Promise=="function"?Promise:void 0,sd=typeof queueMicrotask=="function"?queueMicrotask:typeof So<"u"?function(e){return So.resolve(null).then(e).catch(ud)}:$l;function ud(e){setTimeout(function(){throw e})}function Ha(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Ht(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Ht(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Co(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var mt=Math.random().toString(36).slice(2),Oe="__reactFiber$"+mt,Yt="__reactProps$"+mt,Ze="__reactContainer$"+mt,Fl="__reactEvents$"+mt,cd="__reactListeners$"+mt,dd="__reactHandles$"+mt;function $n(e){var n=e[Oe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ze]||t[Oe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Co(e);e!==null;){if(t=e[Oe])return t;e=Co(e)}return n}e=t,t=e.parentNode}return null}function ar(e){return e=e[Oe]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function fa(e){return e[Yt]||null}var El=[],Qn=-1;function wn(e){return{current:e}}function W(e){0>Qn||(e.current=El[Qn],El[Qn]=null,Qn--)}function I(e,n){Qn++,El[Qn]=e.current,e.current=n}var yn={},ie=wn(yn),me=wn(!1),Rn=yn;function it(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function he(e){return e=e.childContextTypes,e!=null}function Gr(){W(me),W(ie)}function $o(e,n,t){if(ie.current!==yn)throw Error(S(168));I(ie,n),I(me,t)}function cu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(S(108,Xc(e)||"Unknown",a));return V({},t,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Rn=ie.current,I(ie,e),I(me,me.current),!0}function Fo(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=cu(e,n,Rn),r.__reactInternalMemoizedMergedChildContext=e,W(me),W(ie),I(ie,e)):W(me),I(me,t)}var Ge=null,pa=!1,Ua=!1;function du(e){Ge===null?Ge=[e]:Ge.push(e)}function fd(e){pa=!0,du(e)}function kn(){if(!Ua&&Ge!==null){Ua=!0;var e=0,n=L;try{var t=Ge;for(L=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,pa=!1}catch(a){throw Ge!==null&&(Ge=Ge.slice(e+1)),Ds(si,kn),a}finally{L=n,Ua=!1}}return null}var Yn=[],Xn=0,Yr=null,Xr=0,Ce=[],$e=0,Nn=null,Qe=1,Ye="";function Sn(e,n){Yn[Xn++]=Xr,Yn[Xn++]=Yr,Yr=e,Xr=n}function fu(e,n,t){Ce[$e++]=Qe,Ce[$e++]=Ye,Ce[$e++]=Nn,Nn=e;var r=Qe;e=Ye;var a=32-ze(r)-1;r&=~(1<<a),t+=1;var l=32-ze(n)+a;if(30<l){var i=a-a%5;l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Qe=1<<32-ze(n)+a|t<<a|r,Ye=l+e}else Qe=1<<l|t<<a|r,Ye=e}function xi(e){e.return!==null&&(Sn(e,1),fu(e,1,0))}function vi(e){for(;e===Yr;)Yr=Yn[--Xn],Yn[Xn]=null,Xr=Yn[--Xn],Yn[Xn]=null;for(;e===Nn;)Nn=Ce[--$e],Ce[$e]=null,Ye=Ce[--$e],Ce[$e]=null,Qe=Ce[--$e],Ce[$e]=null}var ye=null,be=null,j=!1,Ae=null;function pu(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Eo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,be=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,be=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Nn!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,be=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(j){var n=be;if(n){var t=n;if(!Eo(e,n)){if(Tl(e))throw Error(S(418));n=mn(t.nextSibling);var r=ye;n&&Eo(e,n)?pu(r,t):(e.flags=e.flags&-4097|2,j=!1,ye=e)}}else{if(Tl(e))throw Error(S(418));e.flags=e.flags&-4097|2,j=!1,ye=e}}}function To(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function vr(e){if(e!==ye)return!1;if(!j)return To(e),j=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Cl(e.type,e.memoizedProps)),n&&(n=be)){if(Tl(e))throw mu(),Error(S(418));for(;n;)pu(e,n),n=mn(n.nextSibling)}if(To(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){be=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}be=null}}else be=ye?mn(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=be;e;)e=mn(e.nextSibling)}function ot(){be=ye=null,j=!1}function bi(e){Ae===null?Ae=[e]:Ae.push(e)}var pd=en.ReactCurrentBatchConfig;function wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var a=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var o=a.refs;i===null?delete o[l]:o[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function br(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Po(e){var n=e._init;return n(e._payload)}function hu(e){function n(d,s){if(e){var u=d.deletions;u===null?(d.deletions=[s],d.flags|=16):u.push(s)}}function t(d,s){if(!e)return null;for(;s!==null;)n(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function a(d,s){return d=vn(d,s),d.index=0,d.sibling=null,d}function l(d,s,u){return d.index=u,e?(u=d.alternate,u!==null?(u=u.index,u<s?(d.flags|=2,s):u):(d.flags|=2,s)):(d.flags|=1048576,s)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,s,u,f){return s===null||s.tag!==6?(s=Za(u,d.mode,f),s.return=d,s):(s=a(s,u),s.return=d,s)}function c(d,s,u,f){var h=u.type;return h===jn?v(d,s,u.props.children,f,u.key):s!==null&&(s.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===an&&Po(h)===s.type)?(f=a(s,u.props),f.ref=wt(d,s,u),f.return=d,f):(f=Dr(u.type,u.key,u.props,null,d.mode,f),f.ref=wt(d,s,u),f.return=d,f)}function p(d,s,u,f){return s===null||s.tag!==4||s.stateNode.containerInfo!==u.containerInfo||s.stateNode.implementation!==u.implementation?(s=qa(u,d.mode,f),s.return=d,s):(s=a(s,u.children||[]),s.return=d,s)}function v(d,s,u,f,h){return s===null||s.tag!==7?(s=Pn(u,d.mode,f,h),s.return=d,s):(s=a(s,u),s.return=d,s)}function x(d,s,u){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Za(""+s,d.mode,u),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case sr:return u=Dr(s.type,s.key,s.props,null,d.mode,u),u.ref=wt(d,null,s),u.return=d,u;case Wn:return s=qa(s,d.mode,u),s.return=d,s;case an:var f=s._init;return x(d,f(s._payload),u)}if($t(s)||xt(s))return s=Pn(s,d.mode,u,null),s.return=d,s;br(d,s)}return null}function m(d,s,u,f){var h=s!==null?s.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return h!==null?null:o(d,s,""+u,f);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case sr:return u.key===h?c(d,s,u,f):null;case Wn:return u.key===h?p(d,s,u,f):null;case an:return h=u._init,m(d,s,h(u._payload),f)}if($t(u)||xt(u))return h!==null?null:v(d,s,u,f,null);br(d,u)}return null}function w(d,s,u,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return d=d.get(u)||null,o(s,d,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:return d=d.get(f.key===null?u:f.key)||null,c(s,d,f,h);case Wn:return d=d.get(f.key===null?u:f.key)||null,p(s,d,f,h);case an:var g=f._init;return w(d,s,u,g(f._payload),h)}if($t(f)||xt(f))return d=d.get(u)||null,v(s,d,f,h,null);br(s,f)}return null}function k(d,s,u,f){for(var h=null,g=null,b=s,y=s=0,$=null;b!==null&&y<u.length;y++){b.index>y?($=b,b=null):$=b.sibling;var T=m(d,b,u[y],f);if(T===null){b===null&&(b=$);break}e&&b&&T.alternate===null&&n(d,b),s=l(T,s,y),g===null?h=T:g.sibling=T,g=T,b=$}if(y===u.length)return t(d,b),j&&Sn(d,y),h;if(b===null){for(;y<u.length;y++)b=x(d,u[y],f),b!==null&&(s=l(b,s,y),g===null?h=b:g.sibling=b,g=b);return j&&Sn(d,y),h}for(b=r(d,b);y<u.length;y++)$=w(b,d,y,u[y],f),$!==null&&(e&&$.alternate!==null&&b.delete($.key===null?y:$.key),s=l($,s,y),g===null?h=$:g.sibling=$,g=$);return e&&b.forEach(function(z){return n(d,z)}),j&&Sn(d,y),h}function _(d,s,u,f){var h=xt(u);if(typeof h!="function")throw Error(S(150));if(u=h.call(u),u==null)throw Error(S(151));for(var g=h=null,b=s,y=s=0,$=null,T=u.next();b!==null&&!T.done;y++,T=u.next()){b.index>y?($=b,b=null):$=b.sibling;var z=m(d,b,T.value,f);if(z===null){b===null&&(b=$);break}e&&b&&z.alternate===null&&n(d,b),s=l(z,s,y),g===null?h=z:g.sibling=z,g=z,b=$}if(T.done)return t(d,b),j&&Sn(d,y),h;if(b===null){for(;!T.done;y++,T=u.next())T=x(d,T.value,f),T!==null&&(s=l(T,s,y),g===null?h=T:g.sibling=T,g=T);return j&&Sn(d,y),h}for(b=r(d,b);!T.done;y++,T=u.next())T=w(b,d,y,T.value,f),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?y:T.key),s=l(T,s,y),g===null?h=T:g.sibling=T,g=T);return e&&b.forEach(function(de){return n(d,de)}),j&&Sn(d,y),h}function E(d,s,u,f){if(typeof u=="object"&&u!==null&&u.type===jn&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case sr:e:{for(var h=u.key,g=s;g!==null;){if(g.key===h){if(h=u.type,h===jn){if(g.tag===7){t(d,g.sibling),s=a(g,u.props.children),s.return=d,d=s;break e}}else if(g.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===an&&Po(h)===g.type){t(d,g.sibling),s=a(g,u.props),s.ref=wt(d,g,u),s.return=d,d=s;break e}t(d,g);break}else n(d,g);g=g.sibling}u.type===jn?(s=Pn(u.props.children,d.mode,f,u.key),s.return=d,d=s):(f=Dr(u.type,u.key,u.props,null,d.mode,f),f.ref=wt(d,s,u),f.return=d,d=f)}return i(d);case Wn:e:{for(g=u.key;s!==null;){if(s.key===g)if(s.tag===4&&s.stateNode.containerInfo===u.containerInfo&&s.stateNode.implementation===u.implementation){t(d,s.sibling),s=a(s,u.children||[]),s.return=d,d=s;break e}else{t(d,s);break}else n(d,s);s=s.sibling}s=qa(u,d.mode,f),s.return=d,d=s}return i(d);case an:return g=u._init,E(d,s,g(u._payload),f)}if($t(u))return k(d,s,u,f);if(xt(u))return _(d,s,u,f);br(d,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,s!==null&&s.tag===6?(t(d,s.sibling),s=a(s,u),s.return=d,d=s):(t(d,s),s=Za(u,d.mode,f),s.return=d,d=s),i(d)):t(d,s)}return E}var st=hu(!0),gu=hu(!1),Kr=wn(null),Zr=null,Kn=null,yi=null;function _i(){yi=Kn=Zr=null}function wi(e){var n=Kr.current;W(Kr),e._currentValue=n}function Rl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function rt(e,n){Zr=e,yi=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(yi!==e)if(e={context:e,memoizedValue:n,next:null},Kn===null){if(Zr===null)throw Error(S(308));Kn=e,Zr.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return n}var Fn=null;function ki(e){Fn===null?Fn=[e]:Fn.push(e)}function xu(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ki(n)):(t.next=a.next,a.next=t),n.interleaved=t,qe(e,r)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function Si(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,qe(e,t)}return a=r.interleaved,a===null?(n.next=n,ki(r)):(n.next=a.next,a.next=n),r.interleaved=n,qe(e,t)}function Pr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ui(e,t)}}function Ro(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function qr(e,n,t,r){var a=e.updateQueue;ln=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,p=c.next;c.next=null,i===null?l=p:i.next=p,i=c;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==i&&(o===null?v.firstBaseUpdate=p:o.next=p,v.lastBaseUpdate=c))}if(l!==null){var x=a.baseState;i=0,v=p=c=null,o=l;do{var m=o.lane,w=o.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,_=o;switch(m=n,w=t,_.tag){case 1:if(k=_.payload,typeof k=="function"){x=k.call(w,x,m);break e}x=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=_.payload,m=typeof k=="function"?k.call(w,x,m):k,m==null)break e;x=V({},x,m);break e;case 2:ln=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(p=v=w,c=x):v=v.next=w,i|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(v===null&&(c=x),a.baseState=c,a.firstBaseUpdate=p,a.lastBaseUpdate=v,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);An|=i,e.lanes=i,e.memoizedState=x}}function No(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var lr={},je=wn(lr),Xt=wn(lr),Kt=wn(lr);function En(e){if(e===lr)throw Error(S(174));return e}function Ci(e,n){switch(I(Kt,n),I(Xt,e),I(je,lr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:dl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=dl(n,e)}W(je),I(je,n)}function ut(){W(je),W(Xt),W(Kt)}function bu(e){En(Kt.current);var n=En(je.current),t=dl(n,e.type);n!==t&&(I(Xt,e),I(je,t))}function $i(e){Xt.current===e&&(W(je),W(Xt))}var H=wn(0);function Jr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Va=[];function Fi(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var Rr=en.ReactCurrentDispatcher,Ga=en.ReactCurrentBatchConfig,Bn=0,U=null,X=null,Z=null,ea=!1,At=!1,Zt=0,md=0;function re(){throw Error(S(321))}function Ei(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Le(e[t],n[t]))return!1;return!0}function Ti(e,n,t,r,a,l){if(Bn=l,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rr.current=e===null||e.memoizedState===null?vd:bd,e=t(r,a),At){l=0;do{if(At=!1,Zt=0,25<=l)throw Error(S(301));l+=1,Z=X=null,n.updateQueue=null,Rr.current=yd,e=t(r,a)}while(At)}if(Rr.current=na,n=X!==null&&X.next!==null,Bn=0,Z=X=U=null,ea=!1,n)throw Error(S(300));return e}function Pi(){var e=Zt!==0;return Zt=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function Pe(){if(X===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=Z===null?U.memoizedState:Z.next;if(n!==null)Z=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function qt(e,n){return typeof n=="function"?n(e):n}function Qa(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=X,a=r.baseQueue,l=t.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}r.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,r=r.baseState;var o=i=null,c=null,p=l;do{var v=p.lane;if((Bn&v)===v)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var x={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(o=c=x,i=r):c=c.next=x,U.lanes|=v,An|=v}p=p.next}while(p!==null&&p!==l);c===null?i=r:c.next=o,Le(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do l=a.lane,U.lanes|=l,An|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ya(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do l=e(l,i.action),i=i.next;while(i!==a);Le(l,n.memoizedState)||(pe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function yu(){}function _u(e,n){var t=U,r=Pe(),a=n(),l=!Le(r.memoizedState,a);if(l&&(r.memoizedState=a,pe=!0),r=r.queue,Ri(Su.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Jt(9,ku.bind(null,t,r,a,n),void 0,null),q===null)throw Error(S(349));Bn&30||wu(t,n,a)}return a}function wu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ku(e,n,t,r){n.value=t,n.getSnapshot=r,Cu(n)&&$u(e)}function Su(e,n,t){return t(function(){Cu(n)&&$u(e)})}function Cu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Le(e,t)}catch{return!0}}function $u(e){var n=qe(e,1);n!==null&&De(n,e,1,-1)}function Bo(e){var n=Ie();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},n.queue=e,e=e.dispatch=xd.bind(null,U,e),[n.memoizedState,e]}function Jt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Fu(){return Pe().memoizedState}function Nr(e,n,t,r){var a=Ie();U.flags|=e,a.memoizedState=Jt(1|n,t,void 0,r===void 0?null:r)}function ma(e,n,t,r){var a=Pe();r=r===void 0?null:r;var l=void 0;if(X!==null){var i=X.memoizedState;if(l=i.destroy,r!==null&&Ei(r,i.deps)){a.memoizedState=Jt(n,t,l,r);return}}U.flags|=e,a.memoizedState=Jt(1|n,t,l,r)}function Ao(e,n){return Nr(8390656,8,e,n)}function Ri(e,n){return ma(2048,8,e,n)}function Eu(e,n){return ma(4,2,e,n)}function Tu(e,n){return ma(4,4,e,n)}function Pu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ru(e,n,t){return t=t!=null?t.concat([e]):null,ma(4,4,Pu.bind(null,n,e),t)}function Ni(){}function Nu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ei(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Bu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ei(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Au(e,n,t){return Bn&21?(Le(t,n)||(t=Is(),U.lanes|=t,An|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function hd(e,n){var t=L;L=t!==0&&4>t?t:4,e(!0);var r=Ga.transition;Ga.transition={};try{e(!1),n()}finally{L=t,Ga.transition=r}}function zu(){return Pe().memoizedState}function gd(e,n,t){var r=xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Du(e))Lu(n,t);else if(t=xu(e,n,t,r),t!==null){var a=se();De(t,e,r,a),Mu(t,n,r)}}function xd(e,n,t){var r=xn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Lu(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,o=l(i,t);if(a.hasEagerState=!0,a.eagerState=o,Le(o,i)){var c=n.interleaved;c===null?(a.next=a,ki(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=xu(e,n,a,r),t!==null&&(a=se(),De(t,e,r,a),Mu(t,n,r))}}function Du(e){var n=e.alternate;return e===U||n!==null&&n===U}function Lu(e,n){At=ea=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Mu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ui(e,t)}}var na={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},vd={readContext:Te,useCallback:function(e,n){return Ie().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:Ao,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Nr(4194308,4,Pu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Nr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Nr(4,2,e,n)},useMemo:function(e,n){var t=Ie();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ie();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=gd.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=Ie();return e={current:e},n.memoizedState=e},useState:Bo,useDebugValue:Ni,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Bo(!1),n=e[0];return e=hd.bind(null,e[1]),Ie().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,a=Ie();if(j){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),q===null)throw Error(S(349));Bn&30||wu(r,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,Ao(Su.bind(null,r,l,e),[e]),r.flags|=2048,Jt(9,ku.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ie(),n=q.identifierPrefix;if(j){var t=Ye,r=Qe;t=(r&~(1<<32-ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Zt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=md++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bd={readContext:Te,useCallback:Nu,useContext:Te,useEffect:Ri,useImperativeHandle:Ru,useInsertionEffect:Eu,useLayoutEffect:Tu,useMemo:Bu,useReducer:Qa,useRef:Fu,useState:function(){return Qa(qt)},useDebugValue:Ni,useDeferredValue:function(e){var n=Pe();return Au(n,X.memoizedState,e)},useTransition:function(){var e=Qa(qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:yu,useSyncExternalStore:_u,useId:zu,unstable_isNewReconciler:!1},yd={readContext:Te,useCallback:Nu,useContext:Te,useEffect:Ri,useImperativeHandle:Ru,useInsertionEffect:Eu,useLayoutEffect:Tu,useMemo:Bu,useReducer:Ya,useRef:Fu,useState:function(){return Ya(qt)},useDebugValue:Ni,useDeferredValue:function(e){var n=Pe();return X===null?n.memoizedState=e:Au(n,X.memoizedState,e)},useTransition:function(){var e=Ya(qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:yu,useSyncExternalStore:_u,useId:zu,unstable_isNewReconciler:!1};function Ne(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Nl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ha={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),a=xn(e),l=Xe(r,a);l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,a),n!==null&&(De(n,e,a,r),Pr(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),a=xn(e),l=Xe(r,a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,a),n!==null&&(De(n,e,a,r),Pr(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=xn(e),a=Xe(t,r);a.tag=2,n!=null&&(a.callback=n),n=hn(e,a,r),n!==null&&(De(n,e,r,t),Pr(n,e,r))}};function zo(e,n,t,r,a,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!Vt(t,r)||!Vt(a,l):!0}function Iu(e,n,t){var r=!1,a=yn,l=n.contextType;return typeof l=="object"&&l!==null?l=Te(l):(a=he(n)?Rn:ie.current,r=n.contextTypes,l=(r=r!=null)?it(e,a):yn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ha,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function Do(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ha.enqueueReplaceState(n,n.state,null)}function Bl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Si(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=Te(l):(l=he(n)?Rn:ie.current,a.context=it(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Nl(e,n,l,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ha.enqueueReplaceState(a,a.state,null),qr(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ct(e,n){try{var t="",r=n;do t+=Yc(r),r=r.return;while(r);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function Xa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Al(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _d=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,n,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ra||(ra=!0,Ul=r),Al(e,n)},t}function Wu(e,n,t){t=Xe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Al(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Al(e,n),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Lo(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _d;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=zd.bind(null,e,n,t),n.then(e,e))}function Mo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Io(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Xe(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var wd=en.ReactCurrentOwner,pe=!1;function oe(e,n,t,r){n.child=e===null?gu(n,null,t,r):st(n,e.child,t,r)}function Oo(e,n,t,r,a){t=t.render;var l=n.ref;return rt(n,a),r=Ti(e,n,t,r,l,a),t=Pi(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Je(e,n,a)):(j&&t&&xi(n),n.flags|=1,oe(e,n,r,a),n.child)}function Wo(e,n,t,r,a){if(e===null){var l=t.type;return typeof l=="function"&&!Oi(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,ju(e,n,l,r,a)):(e=Dr(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:Vt,t(i,r)&&e.ref===n.ref)return Je(e,n,a)}return n.flags|=1,e=vn(l,r),e.ref=n.ref,e.return=n,n.child=e}function ju(e,n,t,r,a){if(e!==null){var l=e.memoizedProps;if(Vt(l,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Je(e,n,a)}return zl(e,n,t,r,a)}function Hu(e,n,t){var r=n.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(qn,xe),xe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(qn,xe),xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,I(qn,xe),xe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,I(qn,xe),xe|=r;return oe(e,n,a,t),n.child}function Uu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zl(e,n,t,r,a){var l=he(t)?Rn:ie.current;return l=it(n,l),rt(n,a),t=Ti(e,n,t,r,l,a),r=Pi(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Je(e,n,a)):(j&&r&&xi(n),n.flags|=1,oe(e,n,t,a),n.child)}function jo(e,n,t,r,a){if(he(t)){var l=!0;Qr(n)}else l=!1;if(rt(n,a),n.stateNode===null)Br(e,n),Iu(n,t,r),Bl(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,o=n.memoizedProps;i.props=o;var c=i.context,p=t.contextType;typeof p=="object"&&p!==null?p=Te(p):(p=he(t)?Rn:ie.current,p=it(n,p));var v=t.getDerivedStateFromProps,x=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||c!==p)&&Do(n,i,r,p),ln=!1;var m=n.memoizedState;i.state=m,qr(n,r,i,a),c=n.memoizedState,o!==r||m!==c||me.current||ln?(typeof v=="function"&&(Nl(n,t,v,r),c=n.memoizedState),(o=ln||zo(n,t,o,r,m,c,p))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),i.props=r,i.state=c,i.context=p,r=o):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,vu(e,n),o=n.memoizedProps,p=n.type===n.elementType?o:Ne(n.type,o),i.props=p,x=n.pendingProps,m=i.context,c=t.contextType,typeof c=="object"&&c!==null?c=Te(c):(c=he(t)?Rn:ie.current,c=it(n,c));var w=t.getDerivedStateFromProps;(v=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==x||m!==c)&&Do(n,i,r,c),ln=!1,m=n.memoizedState,i.state=m,qr(n,r,i,a);var k=n.memoizedState;o!==x||m!==k||me.current||ln?(typeof w=="function"&&(Nl(n,t,w,r),k=n.memoizedState),(p=ln||zo(n,t,p,r,m,k,c)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,c)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),i.props=r,i.state=k,i.context=c,r=p):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Dl(e,n,t,r,l,a)}function Dl(e,n,t,r,a,l){Uu(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&Fo(n,t,!1),Je(e,n,l);r=n.stateNode,wd.current=n;var o=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=st(n,e.child,null,l),n.child=st(n,null,o,l)):oe(e,n,o,l),n.memoizedState=r.state,a&&Fo(n,t,!0),n.child}function Vu(e){var n=e.stateNode;n.pendingContext?$o(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$o(e,n.context,!1),Ci(e,n.containerInfo)}function Ho(e,n,t,r,a){return ot(),bi(a),n.flags|=256,oe(e,n,t,r),n.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,n,t){var r=n.pendingProps,a=H.current,l=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),I(H,a&1),e===null)return Pl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=va(i,r,0,null),e=Pn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ml(t),n.memoizedState=Ll,e):Bi(n,i));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return kd(e,n,i,r,o,a,t);if(l){l=r.fallback,i=n.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=vn(a,c),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=vn(o,l):(l=Pn(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Ml(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Ll,r}return l=e.child,e=l.sibling,r=vn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Bi(e,n){return n=va({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function yr(e,n,t,r){return r!==null&&bi(r),st(n,e.child,null,t),e=Bi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kd(e,n,t,r,a,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Xa(Error(S(422))),yr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,a=n.mode,r=va({mode:"visible",children:r.children},a,0,null),l=Pn(l,a,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&st(n,e.child,null,i),n.child.memoizedState=Ml(i),n.memoizedState=Ll,l);if(!(n.mode&1))return yr(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(S(419)),r=Xa(l,r,void 0),yr(e,n,i,r)}if(o=(i&e.childLanes)!==0,pe||o){if(r=q,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,qe(e,a),De(r,e,a,-1))}return Ii(),r=Xa(Error(S(421))),yr(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Dd.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,be=mn(a.nextSibling),ye=n,j=!0,Ae=null,e!==null&&(Ce[$e++]=Qe,Ce[$e++]=Ye,Ce[$e++]=Nn,Qe=e.id,Ye=e.overflow,Nn=n),n=Bi(n,r.children),n.flags|=4096,n)}function Uo(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rl(e.return,n,t)}function Ka(e,n,t,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function Qu(e,n,t){var r=n.pendingProps,a=r.revealOrder,l=r.tail;if(oe(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uo(e,t,n);else if(e.tag===19)Uo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Jr(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ka(n,!1,a,t,l);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Jr(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ka(n,!0,t,null,l);break;case"together":Ka(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),An|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sd(e,n,t){switch(n.tag){case 3:Vu(n),ot();break;case 5:bu(n);break;case 1:he(n.type)&&Qr(n);break;case 4:Ci(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;I(Kr,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Gu(e,n,t):(I(H,H.current&1),e=Je(e,n,t),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qu(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,Hu(e,n,t)}return Je(e,n,t)}var Yu,Il,Xu,Ku;Yu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Il=function(){};Xu=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,En(je.current);var l=null;switch(t){case"input":a=ol(e,a),r=ol(e,r),l=[];break;case"select":a=V({},a,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":a=cl(e,a),r=cl(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}fl(t,r);var i;t=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var o=a[p];for(i in o)o.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Mt.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var c=r[p];if(o=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&c!==o&&(c!=null||o!=null))if(p==="style")if(o){for(i in o)!o.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in c)c.hasOwnProperty(i)&&o[i]!==c[i]&&(t||(t={}),t[i]=c[i])}else t||(l||(l=[]),l.push(p,t)),t=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Mt.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&O("scroll",e),l||o===c||(l=[])):(l=l||[]).push(p,c))}t&&(l=l||[]).push("style",t);var p=l;(n.updateQueue=p)&&(n.flags|=4)}};Ku=function(e,n,t,r){t!==r&&(n.flags|=4)};function kt(e,n){if(!j)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Cd(e,n,t){var r=n.pendingProps;switch(vi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(n),null;case 1:return he(n.type)&&Gr(),ae(n),null;case 3:return r=n.stateNode,ut(),W(me),W(ie),Fi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(Ql(Ae),Ae=null))),Il(e,n),ae(n),null;case 5:$i(n);var a=En(Kt.current);if(t=n.type,e!==null&&n.stateNode!=null)Xu(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ae(n),null}if(e=En(je.current),vr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Oe]=n,r[Yt]=l,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(a=0;a<Et.length;a++)O(Et[a],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":qi(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":eo(r,l),O("invalid",r)}fl(t,l),a=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&xr(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&xr(r.textContent,o,e),a=["children",""+o]):Mt.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&O("scroll",r)}switch(t){case"input":ur(r),Ji(r,l,!0);break;case"textarea":ur(r),no(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ss(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Oe]=n,e[Yt]=r,Yu(e,n,!1,!1),n.stateNode=e;e:{switch(i=pl(t,r),t){case"dialog":O("cancel",e),O("close",e),a=r;break;case"iframe":case"object":case"embed":O("load",e),a=r;break;case"video":case"audio":for(a=0;a<Et.length;a++)O(Et[a],e);a=r;break;case"source":O("error",e),a=r;break;case"img":case"image":case"link":O("error",e),O("load",e),a=r;break;case"details":O("toggle",e),a=r;break;case"input":qi(e,r),a=ol(e,r),O("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":eo(e,r),a=cl(e,r),O("invalid",e);break;default:a=r}fl(t,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?Fs(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cs(e,c)):l==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&It(e,c):typeof c=="number"&&It(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Mt.hasOwnProperty(l)?c!=null&&l==="onScroll"&&O("scroll",e):c!=null&&ri(e,l,c,i))}switch(t){case"input":ur(e),Ji(e,r,!1);break;case"textarea":ur(e),no(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Jn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ae(n),null;case 6:if(e&&n.stateNode!=null)Ku(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=En(Kt.current),En(je.current),vr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Oe]=n,(l=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Oe]=n,n.stateNode=r}return ae(n),null;case 13:if(W(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&be!==null&&n.mode&1&&!(n.flags&128))mu(),ot(),n.flags|=98560,l=!1;else if(l=vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Oe]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ae(n),l=!1}else Ae!==null&&(Ql(Ae),Ae=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?K===0&&(K=3):Ii())),n.updateQueue!==null&&(n.flags|=4),ae(n),null);case 4:return ut(),Il(e,n),e===null&&Gt(n.stateNode.containerInfo),ae(n),null;case 10:return wi(n.type._context),ae(n),null;case 17:return he(n.type)&&Gr(),ae(n),null;case 19:if(W(H),l=n.memoizedState,l===null)return ae(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)kt(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Jr(e),i!==null){for(n.flags|=128,kt(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(H,H.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>dt&&(n.flags|=128,r=!0,kt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Jr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!j)return ae(n),null}else 2*Q()-l.renderingStartTime>dt&&t!==1073741824&&(n.flags|=128,r=!0,kt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=H.current,I(H,r?t&1|2:t&1),n):(ae(n),null);case 22:case 23:return Mi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?xe&1073741824&&(ae(n),n.subtreeFlags&6&&(n.flags|=8192)):ae(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function $d(e,n){switch(vi(n),n.tag){case 1:return he(n.type)&&Gr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ut(),W(me),W(ie),Fi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $i(n),null;case 13:if(W(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(H),null;case 4:return ut(),null;case 10:return wi(n.type._context),null;case 22:case 23:return Mi(),null;case 24:return null;default:return null}}var _r=!1,le=!1,Fd=typeof WeakSet=="function"?WeakSet:Set,F=null;function Zn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function Ol(e,n,t){try{t()}catch(r){G(e,n,r)}}var Vo=!1;function Ed(e,n){if(kl=jr,e=nu(),gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,o=-1,c=-1,p=0,v=0,x=e,m=null;n:for(;;){for(var w;x!==t||a!==0&&x.nodeType!==3||(o=i+a),x!==l||r!==0&&x.nodeType!==3||(c=i+r),x.nodeType===3&&(i+=x.nodeValue.length),(w=x.firstChild)!==null;)m=x,x=w;for(;;){if(x===e)break n;if(m===t&&++p===a&&(o=i),m===l&&++v===r&&(c=i),(w=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=w}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sl={focusedElem:e,selectionRange:t},jr=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var _=k.memoizedProps,E=k.memoizedState,d=n.stateNode,s=d.getSnapshotBeforeUpdate(n.elementType===n.type?_:Ne(n.type,_),E);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var u=n.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(f){G(n,n.return,f)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return k=Vo,Vo=!1,k}function zt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ol(n,t,l)}a=a.next}while(a!==r)}}function ga(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Wl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zu(e){var n=e.alternate;n!==null&&(e.alternate=null,Zu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Oe],delete n[Yt],delete n[Fl],delete n[cd],delete n[dd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function Go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(jl(e,n,t),e=e.sibling;e!==null;)jl(e,n,t),e=e.sibling}function Hl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,n,t),e=e.sibling;e!==null;)Hl(e,n,t),e=e.sibling}var J=null,Be=!1;function rn(e,n,t){for(t=t.child;t!==null;)Ju(e,n,t),t=t.sibling}function Ju(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(sa,t)}catch{}switch(t.tag){case 5:le||Zn(t,n);case 6:var r=J,a=Be;J=null,rn(e,n,t),J=r,Be=a,J!==null&&(Be?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Be?(e=J,t=t.stateNode,e.nodeType===8?Ha(e.parentNode,t):e.nodeType===1&&Ha(e,t),Ht(e)):Ha(J,t.stateNode));break;case 4:r=J,a=Be,J=t.stateNode.containerInfo,Be=!0,rn(e,n,t),J=r,Be=a;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ol(t,n,i),a=a.next}while(a!==r)}rn(e,n,t);break;case 1:if(!le&&(Zn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){G(t,n,o)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,rn(e,n,t),le=r):rn(e,n,t);break;default:rn(e,n,t)}}function Qo(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Fd),n.forEach(function(r){var a=Ld.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var l=e,i=n,o=i;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Be=!1;break e;case 3:J=o.stateNode.containerInfo,Be=!0;break e;case 4:J=o.stateNode.containerInfo,Be=!0;break e}o=o.return}if(J===null)throw Error(S(160));Ju(l,i,a),J=null,Be=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(p){G(a,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ec(n,e),n=n.sibling}function ec(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Me(e),r&4){try{zt(3,e,e.return),ga(3,e)}catch(_){G(e,e.return,_)}try{zt(5,e,e.return)}catch(_){G(e,e.return,_)}}break;case 1:Re(n,e),Me(e),r&512&&t!==null&&Zn(t,t.return);break;case 5:if(Re(n,e),Me(e),r&512&&t!==null&&Zn(t,t.return),e.flags&32){var a=e.stateNode;try{It(a,"")}catch(_){G(e,e.return,_)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&ws(a,l),pl(o,i);var p=pl(o,l);for(i=0;i<c.length;i+=2){var v=c[i],x=c[i+1];v==="style"?Fs(a,x):v==="dangerouslySetInnerHTML"?Cs(a,x):v==="children"?It(a,x):ri(a,v,x,p)}switch(o){case"input":sl(a,l);break;case"textarea":ks(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?Jn(a,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?Jn(a,!!l.multiple,l.defaultValue,!0):Jn(a,!!l.multiple,l.multiple?[]:"",!1))}a[Yt]=l}catch(_){G(e,e.return,_)}}break;case 6:if(Re(n,e),Me(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(_){G(e,e.return,_)}}break;case 3:if(Re(n,e),Me(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(n.containerInfo)}catch(_){G(e,e.return,_)}break;case 4:Re(n,e),Me(e);break;case 13:Re(n,e),Me(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Di=Q())),r&4&&Qo(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(le=(p=le)||v,Re(n,e),le=p):Re(n,e),Me(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(F=e,v=e.child;v!==null;){for(x=F=v;F!==null;){switch(m=F,w=m.child,m.tag){case 0:case 11:case 14:case 15:zt(4,m,m.return);break;case 1:Zn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(_){G(r,t,_)}}break;case 5:Zn(m,m.return);break;case 22:if(m.memoizedState!==null){Xo(x);continue}}w!==null?(w.return=m,F=w):Xo(x)}v=v.sibling}e:for(v=null,x=e;;){if(x.tag===5){if(v===null){v=x;try{a=x.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=x.stateNode,c=x.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=$s("display",i))}catch(_){G(e,e.return,_)}}}else if(x.tag===6){if(v===null)try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(_){G(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;v===x&&(v=null),x=x.return}v===x&&(v=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Re(n,e),Me(e),r&4&&Qo(e);break;case 21:break;default:Re(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(qu(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(It(a,""),r.flags&=-33);var l=Go(e);Hl(e,l,a);break;case 3:case 4:var i=r.stateNode.containerInfo,o=Go(e);jl(e,o,i);break;default:throw Error(S(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Td(e,n,t){F=e,nc(e)}function nc(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var a=F,l=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||_r;if(!i){var o=a.alternate,c=o!==null&&o.memoizedState!==null||le;o=_r;var p=le;if(_r=i,(le=c)&&!p)for(F=a;F!==null;)i=F,c=i.child,i.tag===22&&i.memoizedState!==null?Ko(a):c!==null?(c.return=i,F=c):Ko(a);for(;l!==null;)F=l,nc(l),l=l.sibling;F=a,_r=o,le=p}Yo(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,F=l):Yo(e)}}function Yo(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||ga(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ne(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&No(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}No(n,i,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var x=v.dehydrated;x!==null&&Ht(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&Wl(n)}catch(m){G(n,n.return,m)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function Xo(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function Ko(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ga(4,n)}catch(c){G(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(c){G(n,a,c)}}var l=n.return;try{Wl(n)}catch(c){G(n,l,c)}break;case 5:var i=n.return;try{Wl(n)}catch(c){G(n,i,c)}}}catch(c){G(n,n.return,c)}if(n===e){F=null;break}var o=n.sibling;if(o!==null){o.return=n.return,F=o;break}F=n.return}}var Pd=Math.ceil,ta=en.ReactCurrentDispatcher,Ai=en.ReactCurrentOwner,Ee=en.ReactCurrentBatchConfig,B=0,q=null,Y=null,ee=0,xe=0,qn=wn(0),K=0,er=null,An=0,xa=0,zi=0,Dt=null,fe=null,Di=0,dt=1/0,Ve=null,ra=!1,Ul=null,gn=null,wr=!1,cn=null,aa=0,Lt=0,Vl=null,Ar=-1,zr=0;function se(){return B&6?Q():Ar!==-1?Ar:Ar=Q()}function xn(e){return e.mode&1?B&2&&ee!==0?ee&-ee:pd.transition!==null?(zr===0&&(zr=Is()),zr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Gs(e.type)),e):1}function De(e,n,t,r){if(50<Lt)throw Lt=0,Vl=null,Error(S(185));tr(e,t,r),(!(B&2)||e!==q)&&(e===q&&(!(B&2)&&(xa|=t),K===4&&sn(e,ee)),ge(e,r),t===1&&B===0&&!(n.mode&1)&&(dt=Q()+500,pa&&kn()))}function ge(e,n){var t=e.callbackNode;p0(e,n);var r=Wr(e,e===q?ee:0);if(r===0)t!==null&&ao(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ao(t),n===1)e.tag===0?fd(Zo.bind(null,e)):du(Zo.bind(null,e)),sd(function(){!(B&6)&&kn()}),t=null;else{switch(Os(r)){case 1:t=si;break;case 4:t=Ls;break;case 16:t=Or;break;case 536870912:t=Ms;break;default:t=Or}t=uc(t,tc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function tc(e,n){if(Ar=-1,zr=0,B&6)throw Error(S(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=Wr(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=la(e,r);else{n=r;var a=B;B|=2;var l=ac();(q!==e||ee!==n)&&(Ve=null,dt=Q()+500,Tn(e,n));do try{Bd();break}catch(o){rc(e,o)}while(!0);_i(),ta.current=l,B=a,Y!==null?n=0:(q=null,ee=0,n=K)}if(n!==0){if(n===2&&(a=vl(e),a!==0&&(r=a,n=Gl(e,a))),n===1)throw t=er,Tn(e,0),sn(e,r),ge(e,Q()),t;if(n===6)sn(e,r);else{if(a=e.current.alternate,!(r&30)&&!Rd(a)&&(n=la(e,r),n===2&&(l=vl(e),l!==0&&(r=l,n=Gl(e,l))),n===1))throw t=er,Tn(e,0),sn(e,r),ge(e,Q()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Cn(e,fe,Ve);break;case 3:if(sn(e,r),(r&130023424)===r&&(n=Di+500-Q(),10<n)){if(Wr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$l(Cn.bind(null,e,fe,Ve),n);break}Cn(e,fe,Ve);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-ze(r);l=1<<i,i=n[i],i>a&&(a=i),r&=~l}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pd(r/1960))-r,10<r){e.timeoutHandle=$l(Cn.bind(null,e,fe,Ve),r);break}Cn(e,fe,Ve);break;case 5:Cn(e,fe,Ve);break;default:throw Error(S(329))}}}return ge(e,Q()),e.callbackNode===t?tc.bind(null,e):null}function Gl(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=la(e,n),e!==2&&(n=fe,fe=t,n!==null&&Ql(n)),e}function Ql(e){fe===null?fe=e:fe.push.apply(fe,e)}function Rd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!Le(l(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sn(e,n){for(n&=~zi,n&=~xa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ze(n),r=1<<t;e[t]=-1,n&=~r}}function Zo(e){if(B&6)throw Error(S(327));at();var n=Wr(e,0);if(!(n&1))return ge(e,Q()),null;var t=la(e,n);if(e.tag!==0&&t===2){var r=vl(e);r!==0&&(n=r,t=Gl(e,r))}if(t===1)throw t=er,Tn(e,0),sn(e,n),ge(e,Q()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,fe,Ve),ge(e,Q()),null}function Li(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(dt=Q()+500,pa&&kn())}}function zn(e){cn!==null&&cn.tag===0&&!(B&6)&&at();var n=B;B|=1;var t=Ee.transition,r=L;try{if(Ee.transition=null,L=1,e)return e()}finally{L=r,Ee.transition=t,B=n,!(B&6)&&kn()}}function Mi(){xe=qn.current,W(qn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,od(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(vi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:ut(),W(me),W(ie),Fi();break;case 5:$i(r);break;case 4:ut();break;case 13:W(H);break;case 19:W(H);break;case 10:wi(r.type._context);break;case 22:case 23:Mi()}t=t.return}if(q=e,Y=e=vn(e.current,null),ee=xe=n,K=0,er=null,zi=xa=An=0,fe=Dt=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=a,r.next=i}t.pending=r}Fn=null}return e}function rc(e,n){do{var t=Y;try{if(_i(),Rr.current=na,ea){for(var r=U.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ea=!1}if(Bn=0,Z=X=U=null,At=!1,Zt=0,Ai.current=null,t===null||t.return===null){K=1,er=n,Y=null;break}e:{var l=e,i=t.return,o=t,c=n;if(n=ee,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,v=o,x=v.tag;if(!(v.mode&1)&&(x===0||x===11||x===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=Mo(i);if(w!==null){w.flags&=-257,Io(w,i,o,l,n),w.mode&1&&Lo(l,p,n),n=w,c=p;var k=n.updateQueue;if(k===null){var _=new Set;_.add(c),n.updateQueue=_}else k.add(c);break e}else{if(!(n&1)){Lo(l,p,n),Ii();break e}c=Error(S(426))}}else if(j&&o.mode&1){var E=Mo(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Io(E,i,o,l,n),bi(ct(c,o));break e}}l=c=ct(c,o),K!==4&&(K=2),Dt===null?Dt=[l]:Dt.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=Ou(l,c,n);Ro(l,d);break e;case 1:o=c;var s=l.type,u=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(gn===null||!gn.has(u)))){l.flags|=65536,n&=-n,l.lanes|=n;var f=Wu(l,o,n);Ro(l,f);break e}}l=l.return}while(l!==null)}ic(t)}catch(h){n=h,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function ac(){var e=ta.current;return ta.current=na,e===null?na:e}function Ii(){(K===0||K===3||K===2)&&(K=4),q===null||!(An&268435455)&&!(xa&268435455)||sn(q,ee)}function la(e,n){var t=B;B|=2;var r=ac();(q!==e||ee!==n)&&(Ve=null,Tn(e,n));do try{Nd();break}catch(a){rc(e,a)}while(!0);if(_i(),B=t,ta.current=r,Y!==null)throw Error(S(261));return q=null,ee=0,K}function Nd(){for(;Y!==null;)lc(Y)}function Bd(){for(;Y!==null&&!a0();)lc(Y)}function lc(e){var n=sc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,n===null?ic(e):Y=n,Ai.current=null}function ic(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=$d(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(t=Cd(t,n,xe),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);K===0&&(K=5)}function Cn(e,n,t){var r=L,a=Ee.transition;try{Ee.transition=null,L=1,Ad(e,n,t,r)}finally{Ee.transition=a,L=r}return null}function Ad(e,n,t,r){do at();while(cn!==null);if(B&6)throw Error(S(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(m0(e,l),e===q&&(Y=q=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wr||(wr=!0,uc(Or,function(){return at(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var i=L;L=1;var o=B;B|=4,Ai.current=null,Ed(e,t),ec(t,e),ed(Sl),jr=!!kl,Sl=kl=null,e.current=t,Td(t),l0(),B=o,L=i,Ee.transition=l}else e.current=t;if(wr&&(wr=!1,cn=e,aa=a),l=e.pendingLanes,l===0&&(gn=null),s0(t.stateNode),ge(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(ra)throw ra=!1,e=Ul,Ul=null,e;return aa&1&&e.tag!==0&&at(),l=e.pendingLanes,l&1?e===Vl?Lt++:(Lt=0,Vl=e):Lt=0,kn(),null}function at(){if(cn!==null){var e=Os(aa),n=Ee.transition,t=L;try{if(Ee.transition=null,L=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,aa=0,B&6)throw Error(S(331));var a=B;for(B|=4,F=e.current;F!==null;){var l=F,i=l.child;if(F.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var p=o[c];for(F=p;F!==null;){var v=F;switch(v.tag){case 0:case 11:case 15:zt(8,v,l)}var x=v.child;if(x!==null)x.return=v,F=x;else for(;F!==null;){v=F;var m=v.sibling,w=v.return;if(Zu(v),v===p){F=null;break}if(m!==null){m.return=w,F=m;break}F=w}}}var k=l.alternate;if(k!==null){var _=k.child;if(_!==null){k.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}F=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,F=i;else e:for(;F!==null;){if(l=F,l.flags&2048)switch(l.tag){case 0:case 11:case 15:zt(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,F=d;break e}F=l.return}}var s=e.current;for(F=s;F!==null;){i=F;var u=i.child;if(i.subtreeFlags&2064&&u!==null)u.return=i,F=u;else e:for(i=s;F!==null;){if(o=F,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ga(9,o)}}catch(h){G(o,o.return,h)}if(o===i){F=null;break e}var f=o.sibling;if(f!==null){f.return=o.return,F=f;break e}F=o.return}}if(B=a,kn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(sa,e)}catch{}r=!0}return r}finally{L=t,Ee.transition=n}}return!1}function qo(e,n,t){n=ct(t,n),n=Ou(e,n,1),e=hn(e,n,1),n=se(),e!==null&&(tr(e,1,n),ge(e,n))}function G(e,n,t){if(e.tag===3)qo(e,e,t);else for(;n!==null;){if(n.tag===3){qo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=ct(t,e),e=Wu(n,e,1),n=hn(n,e,1),e=se(),n!==null&&(tr(n,1,e),ge(n,e));break}}n=n.return}}function zd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ee&t)===t&&(K===4||K===3&&(ee&130023424)===ee&&500>Q()-Di?Tn(e,0):zi|=t),ge(e,n)}function oc(e,n){n===0&&(e.mode&1?(n=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):n=1);var t=se();e=qe(e,n),e!==null&&(tr(e,n,t),ge(e,t))}function Dd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),oc(e,t)}function Ld(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),oc(e,t)}var sc;sc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,Sd(e,n,t);pe=!!(e.flags&131072)}else pe=!1,j&&n.flags&1048576&&fu(n,Xr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Br(e,n),e=n.pendingProps;var a=it(n,ie.current);rt(n,t),a=Ti(null,n,r,e,a,t);var l=Pi();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(l=!0,Qr(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Si(n),a.updater=ha,n.stateNode=a,a._reactInternals=n,Bl(n,r,e,t),n=Dl(null,n,r,!0,l,t)):(n.tag=0,j&&l&&xi(n),oe(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Br(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Id(r),e=Ne(r,e),a){case 0:n=zl(null,n,r,e,t);break e;case 1:n=jo(null,n,r,e,t);break e;case 11:n=Oo(null,n,r,e,t);break e;case 14:n=Wo(null,n,r,Ne(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ne(r,a),zl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ne(r,a),jo(e,n,r,a,t);case 3:e:{if(Vu(n),e===null)throw Error(S(387));r=n.pendingProps,l=n.memoizedState,a=l.element,vu(e,n),qr(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=ct(Error(S(423)),n),n=Ho(e,n,r,t,a);break e}else if(r!==a){a=ct(Error(S(424)),n),n=Ho(e,n,r,t,a);break e}else for(be=mn(n.stateNode.containerInfo.firstChild),ye=n,j=!0,Ae=null,t=gu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),r===a){n=Je(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return bu(n),e===null&&Pl(n),r=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,i=a.children,Cl(r,a)?i=null:l!==null&&Cl(r,l)&&(n.flags|=32),Uu(e,n),oe(e,n,i,t),n.child;case 6:return e===null&&Pl(n),null;case 13:return Gu(e,n,t);case 4:return Ci(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=st(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ne(r,a),Oo(e,n,r,a,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,l=n.memoizedProps,i=a.value,I(Kr,r._currentValue),r._currentValue=i,l!==null)if(Le(l.value,i)){if(l.children===a.children&&!me.current){n=Je(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Xe(-1,t&-t),c.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?c.next=c:(c.next=v.next,v.next=c),p.pending=c}}l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),Rl(l.return,t,n),o.lanes|=t;break}c=c.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Rl(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}oe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,rt(n,t),a=Te(a),r=r(a),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,a=Ne(r,n.pendingProps),a=Ne(r.type,a),Wo(e,n,r,a,t);case 15:return ju(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ne(r,a),Br(e,n),n.tag=1,he(r)?(e=!0,Qr(n)):e=!1,rt(n,t),Iu(n,r,a),Bl(n,r,a,t),Dl(null,n,r,!0,e,t);case 19:return Qu(e,n,t);case 22:return Hu(e,n,t)}throw Error(S(156,n.tag))};function uc(e,n){return Ds(e,n)}function Md(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,r){return new Md(e,n,t,r)}function Oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return Oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===li)return 11;if(e===ii)return 14}return 2}function vn(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Dr(e,n,t,r,a,l){var i=2;if(r=e,typeof e=="function")Oi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case jn:return Pn(t.children,a,l,n);case ai:i=8,a|=8;break;case rl:return e=Fe(12,t,n,a|2),e.elementType=rl,e.lanes=l,e;case al:return e=Fe(13,t,n,a),e.elementType=al,e.lanes=l,e;case ll:return e=Fe(19,t,n,a),e.elementType=ll,e.lanes=l,e;case bs:return va(t,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:i=10;break e;case vs:i=9;break e;case li:i=11;break e;case ii:i=14;break e;case an:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Fe(i,t,n,a),n.elementType=e,n.type=r,n.lanes=l,n}function Pn(e,n,t,r){return e=Fe(7,e,r,n),e.lanes=t,e}function va(e,n,t,r){return e=Fe(22,e,r,n),e.elementType=bs,e.lanes=t,e.stateNode={isHidden:!1},e}function Za(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function qa(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Od(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wi(e,n,t,r,a,l,i,o,c){return e=new Od(e,n,t,o,c),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Fe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Si(l),e}function Wd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function cc(e){if(!e)return yn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return cu(e,t,n)}return n}function dc(e,n,t,r,a,l,i,o,c){return e=Wi(t,r,!0,e,a,l,i,o,c),e.context=cc(null),t=e.current,r=se(),a=xn(t),l=Xe(r,a),l.callback=n??null,hn(t,l,a),e.current.lanes=a,tr(e,a,r),ge(e,r),e}function ba(e,n,t,r){var a=n.current,l=se(),i=xn(a);return t=cc(t),n.context===null?n.context=t:n.pendingContext=t,n=Xe(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(a,n,i),e!==null&&(De(e,a,i,l),Pr(e,a,i)),i}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ji(e,n){Jo(e,n),(e=e.alternate)&&Jo(e,n)}function jd(){return null}var fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hi(e){this._internalRoot=e}ya.prototype.render=Hi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));ba(e,n,null,null)};ya.prototype.unmount=Hi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){ba(null,e,null,null)}),n[Ze]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&Vs(e)}};function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function es(){}function Hd(e,n,t,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var p=ia(i);l.call(p)}}var i=dc(n,r,e,0,null,!1,!1,"",es);return e._reactRootContainer=i,e[Ze]=i.current,Gt(e.nodeType===8?e.parentNode:e),zn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var p=ia(c);o.call(p)}}var c=Wi(e,0,!1,null,null,!1,!1,"",es);return e._reactRootContainer=c,e[Ze]=c.current,Gt(e.nodeType===8?e.parentNode:e),zn(function(){ba(n,c,t,r)}),c}function wa(e,n,t,r,a){var l=t._reactRootContainer;if(l){var i=l;if(typeof a=="function"){var o=a;a=function(){var c=ia(i);o.call(c)}}ba(n,i,e,a)}else i=Hd(t,n,e,a,r);return ia(i)}Ws=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(ui(n,t|1),ge(n,Q()),!(B&6)&&(dt=Q()+500,kn()))}break;case 13:zn(function(){var r=qe(e,1);if(r!==null){var a=se();De(r,e,1,a)}}),ji(e,1)}};ci=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=se();De(n,e,134217728,t)}ji(e,134217728)}};js=function(e){if(e.tag===13){var n=xn(e),t=qe(e,n);if(t!==null){var r=se();De(t,e,n,r)}ji(e,n)}};Hs=function(){return L};Us=function(e,n){var t=L;try{return L=e,n()}finally{L=t}};hl=function(e,n,t){switch(n){case"input":if(sl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=fa(r);if(!a)throw Error(S(90));_s(r),sl(r,a)}}}break;case"textarea":ks(e,t);break;case"select":n=t.value,n!=null&&Jn(e,!!t.multiple,n,!1)}};Ps=Li;Rs=zn;var Ud={usingClientEntryPoint:!1,Events:[ar,Gn,fa,Es,Ts,Li]},St={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vd={bundleType:St.bundleType,version:St.version,rendererPackageName:St.rendererPackageName,rendererConfig:St.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:St.findFiberByHostInstance||jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{sa=kr.inject(Vd),We=kr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ud;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ui(n))throw Error(S(200));return Wd(e,n,null,t)};we.createRoot=function(e,n){if(!Ui(e))throw Error(S(299));var t=!1,r="",a=fc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Wi(e,1,!1,null,null,t,!1,r,a),e[Ze]=n.current,Gt(e.nodeType===8?e.parentNode:e),new Hi(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=As(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return zn(e)};we.hydrate=function(e,n,t){if(!_a(n))throw Error(S(200));return wa(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!Ui(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,a=!1,l="",i=fc;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=dc(n,null,e,1,t??null,a,!1,l,i),e[Ze]=n.current,Gt(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new ya(n)};we.render=function(e,n,t){if(!_a(n))throw Error(S(200));return wa(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!_a(e))throw Error(S(40));return e._reactRootContainer?(zn(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};we.unstable_batchedUpdates=Li;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!_a(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return wa(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc)}catch(e){console.error(e)}}pc(),ps.exports=we;var Gd=ps.exports,ns=Gd;nl.createRoot=ns.createRoot,nl.hydrateRoot=ns.hydrateRoot;const Qd=`version: 0.5

// Button Styles Builder
// #main    - Standard button (ui atlas: button-idle/hover/pressed/disabled)
// #warning - Warning/alert animated button (ui atlas: Altcolor/Button_Warning_3x3_*)
// #small   - Compact pixel button (ui-new atlas: btn_*_32x16)

#main programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Button", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffff12) {
    @(status=>normal, disabled=>false) ninepatch("ui", "button-idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "button-hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "button-pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "button-disabled", $width, $height):       0,0

    text($font, $buttonText, $fontColor, center, $width): 0,10
    settings{width:int=>$width, height:int=>$height, font:string=>$font, fontColor:int=>$fontColor}
}

#warning programmable(status:[hover, pressed, normal], disabled:[true, false], buttonText="Warning", width:uint=200, height:uint=30, font="dd", fontColor:int=0xffffff12) {
    @(status=>normal, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_idle", $width, $height):     0,1
    @(status=>hover, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_hover", $width, $height):     0,0
    @(status=>pressed, disabled=>false) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_pressed", $width, $height): 0,0
    @(status=>*, disabled=>true) ninepatch("ui", "Animated button test - Altcolor/Button_Warning_3x3_disabled", $width, $height):       0,0

    text($font, $buttonText, $fontColor, center, $width): 0,10
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
`,nf=`version: 0.5

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
`,tf=`version: 0.5

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

#resizablePanel programmable(width:50..500=150, height:50..500=200) {
    ninepatch("ui", "Window_3x3_idle", $width, $height): 0, 0
    #sizeText(updatable) text(m6x11, "150 x 200", #ffffff, left, 200): 10, 10
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
`,lf=`version: 0.5

// Filters Demo — All 6 filters shown simultaneously with interactive controls
// Each filter cell: name + bitmap preview + sliders/checkboxes

// Bitmap-only preview: builds the selected bitmap without any filter
#bitmapPreview programmable(
    bitmapType:[rectBlack, rectWhite, rectGreen, circleBlack, circleWhite, circleRed, star, skull, marine, dice]=rectBlack) {
    @(bitmapType=>marine) apply { scale: 2 }
    @(bitmapType=>skull) apply { scale: 5 }
    @(bitmapType=>dice) apply { scale: 5 }
    @(bitmapType=>rectBlack) bitmap(generated(color(60, 60, #000000)));
    @(bitmapType=>rectWhite) bitmap(generated(color(60, 60, #ffffff)));
    @(bitmapType=>rectGreen) bitmap(generated(color(60, 60, #00cc00)));
    @(bitmapType=>circleWhite) bitmap(file("circle_soft.png"));
    @(bitmapType=>circleBlack) apply { tint: #000000 }
    @(bitmapType=>circleBlack) bitmap(file("circle_soft.png"));
    @(bitmapType=>circleRed) apply { tint: #ff0000 }
    @(bitmapType=>circleRed) bitmap(file("circle_soft.png"));
    @(bitmapType=>star) bitmap(file("star.png"));
    @(bitmapType=>skull) bitmap(sheet("crew2", "icon-skull"));
    @(bitmapType=>marine) bitmap(sheet("crew2", "marine_r_standing"));
    @(bitmapType=>dice) bitmap(sheet("crew2", "dice"));
}

// Main layout with grid-positioned filter cells
#filtersLayout programmable() {
    text(exo2_16, "Visual Filters", #7fdbda, left, 400): 50, 80
    text(exo2_light_14, "Double-click a bitmap type to change preview", #aaaaaa, left, 600): 50, 130

    placeholder(generated(cross(160, 200, #FF0000)), builderParameter("bitmapList")) {
        pos: 50, 160
    }

    #selectedText(updatable) text(exo2_light_14, "Active: Black Rect", #7fdbda, left, 200): 50, 380

    // 3x2 grid of filter cells
    point {
        pos: 230, 160
        grid: 293, 205

        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell0")) { pos: $grid.pos(0, 0) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell1")) { pos: $grid.pos(1, 0) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell2")) { pos: $grid.pos(2, 0) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell3")) { pos: $grid.pos(0, 1) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell4")) { pos: $grid.pos(1, 1) }
        placeholder(generated(cross(190, 200, #FF0000)), builderParameter("cell5")) { pos: $grid.pos(2, 1) }
    }
}

// Reusable filter cell: name label, 4 slider slots, 2 checkbox slots
// Bitmap preview is added as child by Haxe at (10, 20)
#filterCell programmable() {
    #cellName(updatable) text(m6x11, "filter", #aaaaaa, left, 180): 0, 0

    // Slider rows (label + slider + value) — compact 16px spacing
    #s1Label(updatable) text(m6x11, "", #888888, left, 38): 0, 92
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("s1")) {
        pos: 40, 92
        settings{size:int=>100}
    }
    #s1Value(updatable) text(m6x11, "", #cccccc, left, 45): 145, 92

    #s2Label(updatable) text(m6x11, "", #888888, left, 38): 0, 108
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("s2")) {
        pos: 40, 108
        settings{size:int=>100}
    }
    #s2Value(updatable) text(m6x11, "", #cccccc, left, 45): 145, 108

    #s3Label(updatable) text(m6x11, "", #888888, left, 38): 0, 124
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("s3")) {
        pos: 40, 124
        settings{size:int=>100}
    }
    #s3Value(updatable) text(m6x11, "", #cccccc, left, 45): 145, 124

    #s4Label(updatable) text(m6x11, "", #888888, left, 38): 0, 140
    placeholder(generated(cross(100, 14, #FF0000)), builderParameter("s4")) {
        pos: 40, 140
        settings{size:int=>100}
    }
    #s4Value(updatable) text(m6x11, "", #cccccc, left, 45): 145, 140

    // Checkbox row
    #c1Label(updatable) text(m6x11, "", #888888, left, 50): 0, 159
    placeholder(generated(cross(14, 14, #FF0000)), builderParameter("c1")) {
        pos: 53, 159
        settings{buildName=>checkbox}
    }
    #c2Label(updatable) text(m6x11, "", #888888, left, 50): 80, 159
    placeholder(generated(cross(14, 14, #FF0000)), builderParameter("c2")) {
        pos: 133, 159
        settings{buildName=>checkbox}
    }
}
`,of=`version: 0.5

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
`,sf=`version: 0.5

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
`,cf=`version: 0.5

// Battle HUD Demo
// Two-unit battle with HP/MP bars, attack/defend buttons, damage text, and turn system.

#battleHudDemo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Battle HUD", #7fdbda): 0, 0
    bitmap(generated(color(700, 1, #7fdbda33))): 0, 22

    // Turn indicator
    #turnText(updatable) text(exo2_20, "Your Turn", #ffeb3b, center, 700): 0, 30

    // Hero panel (left)
    ninepatch("ui", "Window_3x3_idle", 300, 200): 0, 60

    text(exo2_16, "HERO", #4caf50): 20, 75
    #heroName(updatable) text(exo2_20, "Aethon", #ffffff, left, 250): 20, 100

    // Hero HP
    text(exo2_14, "HP", #ff4444): 20, 135
    bitmap(generated(color(230, 18, #1a1a1a))): 50, 135
    #heroHpBar(updatable) bitmap(generated(color(230, 18, #4caf50))): 50, 135
    #heroHpText(updatable) text(exo2_14, "100 / 100", #ffffff, center, 230): 50, 136

    // Hero MP
    text(exo2_14, "MP", #4a90a4): 20, 162
    bitmap(generated(color(230, 18, #1a1a1a))): 50, 162
    #heroMpBar(updatable) bitmap(generated(color(230, 18, #4a90a4))): 50, 162
    #heroMpText(updatable) text(exo2_14, "50 / 50", #ffffff, center, 230): 50, 163

    // Hero status
    #heroStatusText(updatable) text(exo2_14, "", #aaaaaa, left, 260): 20, 190

    // Enemy panel (right)
    ninepatch("ui", "Window_3x3_idle", 300, 200): 380, 60

    text(exo2_16, "ENEMY", #ff4444): 400, 75
    #enemyName(updatable) text(exo2_20, "Dark Slime", #ffffff, left, 250): 400, 100

    // Enemy HP
    text(exo2_14, "HP", #ff4444): 400, 135
    bitmap(generated(color(230, 18, #1a1a1a))): 430, 135
    #enemyHpBar(updatable) bitmap(generated(color(230, 18, #ff4444))): 430, 135
    #enemyHpText(updatable) text(exo2_14, "80 / 80", #ffffff, center, 230): 430, 136

    // Enemy MP
    text(exo2_14, "MP", #4a90a4): 400, 162
    bitmap(generated(color(230, 18, #1a1a1a))): 430, 162
    #enemyMpBar(updatable) bitmap(generated(color(230, 18, #4a90a4))): 430, 162
    #enemyMpText(updatable) text(exo2_14, "30 / 30", #ffffff, center, 230): 430, 163

    // Enemy status
    #enemyStatusText(updatable) text(exo2_14, "", #aaaaaa, left, 260): 400, 190

    // Action buttons
    ninepatch("ui", "Window_3x3_idle", 300, 60): 0, 275
    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("attackButton")) {
        pos: 15, 288
    }
    placeholder(generated(cross(120, 30, #FF0000)), builderParameter("defendButton")) {
        pos: 155, 288
    }

    // Floating damage text
    #damageText(updatable) text(exo2_black_20, "", #ff4444, center, 200): 300, 180

    // Battle log
    ninepatch("ui", "Window_3x3_idle", 700, 60): 0, 350
    #logText(updatable) text(exo2_14, "Battle begins!", #aaaaaa, left, 660): 20, 365

    // Instructions
    text(exo2_light_14, "Click Attack or Defend. Enemy counterattacks after 1.5s.", #666666): 0, 425
}
`,df=`version: 0.5

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
`,ff=`version: 0.5

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
`,pf=`version: 0.5

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
`,mf=`version: 0.5

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
`,hf=`version: 0.5

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
`,gf=`version: 0.5

// Shop Demo
// Item list with buy/sell, gold counter, and feedback text.

#shopDemo programmable() {
    pos: 50, 80

    // Title
    text(exo2_16, "Shop", #7fdbda): 0, 0
    bitmap(generated(color(600, 1, #7fdbda33))): 0, 22

    // Gold display
    ninepatch("ui", "Window_3x3_idle", 200, 40): 0, 35
    text(exo2_14, "Gold:", #ffeb3b): 15, 47
    #goldText(updatable) text(exo2_20, "500", #ffeb3b, left, 120): 65, 42

    // Item list panel
    ninepatch("ui", "Window_3x3_idle", 360, 260): 0, 85
    text(exo2_14, "Available Items", #7fdbda): 15, 95

    // Item rows container - built programmatically
    #itemContainer(updatable) point: 15, 120

    // Selected item info panel
    ninepatch("ui", "Window_3x3_idle", 250, 150): 380, 85
    text(exo2_14, "Selected Item", #7fdbda): 395, 95
    #selectedNameText(updatable) text(exo2_20, "None", #ffffff, left, 220): 395, 120
    #selectedPriceText(updatable) text(exo2_16, "", #ffeb3b, left, 220): 395, 150
    #selectedDescText(updatable) text(exo2_light_14, "Select an item to see details", #aaaaaa, left, 220): 395, 175

    // Action buttons
    placeholder(generated(cross(100, 30, #FF0000)), builderParameter("buyButton")) {
        pos: 395, 210
    }
    placeholder(generated(cross(100, 30, #FF0000)), builderParameter("sellButton")) {
        pos: 510, 210
    }

    // Feedback text
    #feedbackText(updatable) text(exo2_14, "", #ff4444, left, 400): 380, 260

    // Inventory panel
    ninepatch("ui", "Window_3x3_idle", 250, 100): 380, 280
    text(exo2_14, "Your Inventory", #7fdbda): 395, 290
    #inventoryText(updatable) text(exo2_light_14, "(empty)", #aaaaaa, left, 220): 395, 310

    // Instructions
    text(exo2_light_14, "Select items from the list, buy or sell them.", #666666): 0, 400
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
`,vf=`version: 0.5

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
`,bf=`version: 0.5

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
`,Cf=`version: 0.5

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
`,$f=`version: 0.5

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
`,Ef=`version: 0.5

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
`,Tf=`version: 0.5

// Buttons Demo
// Shows all button styles from buttons.manim builder: Normal, Warning, Small

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

    // Section: Custom Settings (buttons.main with overrides)
    text(exo2_16, "Custom Settings", #ffeb3b): 0, 300
    bitmap(generated(color(660, 1, #ffeb3b33))): 0, 322

    placeholder(generated(cross(300, 40, white)), builderParameter("customBtn1")) {
        pos: 0, 340
        settings{text=>"Wide Button", width:int=>300, height:int=>40}
    }
    placeholder(generated(cross(200, 30, white)), builderParameter("customBtn2")) {
        pos: 320, 340
        settings{text=>"Custom Font", font=>"m6x11", fontColor:int=>0xff7f50ff}
    }

    // Click counter display
    text(exo2_16, "Click Counter", #7fdbda): 0, 410
    bitmap(generated(color(660, 1, #7fdbda33))): 0, 432
    ninepatch("ui", "Window_3x3_idle", 300, 40): 0, 450
    #counterText(updatable) text(exo2_20, "Clicks: 0", #ffffff, left, 280): 15, 458

    // Disable toggle section
    text(exo2_16, "Disable Toggle", #7fdbda): 0, 520
    bitmap(generated(color(660, 1, #7fdbda33))): 0, 542
    placeholder(generated(cross(200, 20, white)), builderParameter("disableCheckbox")) {
        pos: 0, 560
        settings{buildName=>checkbox}
    }
    text(exo2_light_14, "Toggle to disable all buttons", #aaaaaa): 30, 562
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
`,Nf=`version: 0.5

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
`,Bf=`version: 0.5

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
        settings{panelBuildName=>list-panel, itemBuildName=>list-item-120, height:int=>300, width:int=>200}
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
`,Of=`version: 0.5

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
      
      text(dd, $buttonText, 0xffffff12, center, 200): 0,10
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
      settings{transitionTimer:float=>0.2}
}


#list-item-120 programmable(images:[none,placeholder,tile]=placeholder,status:[hover, pressed, normal], selected:[true, false], disabled:[true, false], tile:tile, itemWidth:uint=114,  index:uint=0, title="title") {
        
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
        @(images=>placeholder) placeholder(generated(cross(15, 15, white)), callback("test")):5,3
        @(images=>tile) bitmap($tile):5,3
        interactive($itemWidth , 20, $index);
        settings{height:float=>20}
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
}`,Wf=`sheet: crew2
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

`,jf=`sheet: crew2
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

`,Hf=`sheet: crew2
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



`,Uf=`sheet: crew2
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
`,Vf=Object.assign({"../public/assets/buttons.manim":Qd,"../public/assets/checkbox.manim":Yd,"../public/assets/demo-common.manim":Xd,"../public/assets/demos/advanced/conditionals.manim":Kd,"../public/assets/demos/advanced/expressions.manim":Zd,"../public/assets/demos/advanced/feature-showcase.manim":qd,"../public/assets/demos/advanced/incremental.manim":Jd,"../public/assets/demos/advanced/interactives.manim":ef,"../public/assets/demos/advanced/macro-performance.manim":nf,"../public/assets/demos/advanced/settings.manim":tf,"../public/assets/demos/animation/anim-path.manim":rf,"../public/assets/demos/animation/curves.manim":af,"../public/assets/demos/animation/filters.manim":lf,"../public/assets/demos/animation/particles.manim":of,"../public/assets/demos/animation/paths.manim":sf,"../public/assets/demos/animation/state-anim.manim":uf,"../public/assets/demos/gamelike/battle-hud.manim":cf,"../public/assets/demos/gamelike/blob47.manim":df,"../public/assets/demos/gamelike/character-sheet.manim":ff,"../public/assets/demos/gamelike/dialogue.manim":pf,"../public/assets/demos/gamelike/inventory.manim":mf,"../public/assets/demos/gamelike/minimap.manim":hf,"../public/assets/demos/gamelike/shop.manim":gf,"../public/assets/demos/gamelike/skill-tree.manim":xf,"../public/assets/demos/gamelike/status-effects.manim":vf,"../public/assets/demos/graphics/bitmaps-atlas.manim":bf,"../public/assets/demos/graphics/ninepatch.manim":yf,"../public/assets/demos/graphics/pixels-graphics.manim":_f,"../public/assets/demos/graphics/text-fonts.manim":wf,"../public/assets/demos/layout/combo-states.manim":kf,"../public/assets/demos/layout/dynamic-refs.manim":Sf,"../public/assets/demos/layout/flow-layout.manim":Cf,"../public/assets/demos/layout/repeatable.manim":$f,"../public/assets/demos/layout/slots.manim":Ff,"../public/assets/demos/layout/static-refs.manim":Ef,"../public/assets/demos/ui/buttons-demo.manim":Tf,"../public/assets/demos/ui/checkboxes-demo.manim":Pf,"../public/assets/demos/ui/dialogs.manim":Rf,"../public/assets/demos/ui/draggable.manim":Nf,"../public/assets/demos/ui/dropdowns.manim":Bf,"../public/assets/demos/ui/progress-bar.manim":Af,"../public/assets/demos/ui/radio.manim":zf,"../public/assets/demos/ui/radios-demo.manim":Df,"../public/assets/demos/ui/scrollable-list.manim":Lf,"../public/assets/demos/ui/sliders.manim":Mf,"../public/assets/radio.manim":If,"../public/assets/std.manim":Of}),Gf=Object.assign({"../public/assets/arrows.anim":Wf,"../public/assets/marine.anim":jf,"../public/assets/shield.anim":Hf,"../public/assets/turret.anim":Uf}),Qf=Object.fromEntries([...Object.entries(Vf).map(([e,n])=>[e.replace("../public/assets/",""),n]),...Object.entries(Gf).map(([e,n])=>[e.replace("../public/assets/",""),n])]),Sr=e=>Qf[e]||null,Yl=[{name:"UI Components",screens:[{name:"buttons",displayName:"Buttons",category:"UI Components",manimFile:"demos/ui/buttons-demo.manim"},{name:"checkboxes",displayName:"Checkboxes",category:"UI Components",manimFile:"demos/ui/checkboxes-demo.manim"},{name:"sliders",displayName:"Sliders",category:"UI Components",manimFile:"demos/ui/sliders.manim"},{name:"dropdowns",displayName:"Dropdowns",category:"UI Components",manimFile:"demos/ui/dropdowns.manim"},{name:"scrollableList",displayName:"Scrollable List",category:"UI Components",manimFile:"demos/ui/scrollable-list.manim"},{name:"radio",displayName:"Radio Buttons",category:"UI Components",manimFile:"demos/ui/radio.manim"},{name:"progressBar",displayName:"Progress Bars",category:"UI Components",manimFile:"demos/ui/progress-bar.manim"},{name:"draggable",displayName:"Draggable",category:"UI Components",manimFile:"demos/ui/draggable.manim"},{name:"dialogs",displayName:"Dialogs",category:"UI Components",manimFile:"demos/ui/dialogs.manim"}]},{name:"Layout & Composition",screens:[{name:"staticRefs",displayName:"Static Refs",category:"Layout & Composition",manimFile:"demos/layout/static-refs.manim"},{name:"dynamicRefs",displayName:"Dynamic Refs",category:"Layout & Composition",manimFile:"demos/layout/dynamic-refs.manim"},{name:"flowLayout",displayName:"Flow Layout",category:"Layout & Composition",manimFile:"demos/layout/flow-layout.manim"},{name:"repeatable",displayName:"Repeatable",category:"Layout & Composition",manimFile:"demos/layout/repeatable.manim"},{name:"slots",displayName:"Slots",category:"Layout & Composition",manimFile:"demos/layout/slots.manim"},{name:"comboStates",displayName:"Combo States",category:"Layout & Composition",manimFile:"demos/layout/combo-states.manim"}]},{name:"Graphics & Rendering",screens:[{name:"bitmapsAtlas",displayName:"Bitmaps & Atlas",category:"Graphics & Rendering",manimFile:"demos/graphics/bitmaps-atlas.manim"},{name:"ninepatch",displayName:"Ninepatch",category:"Graphics & Rendering",manimFile:"demos/graphics/ninepatch.manim"},{name:"textFonts",displayName:"Text & Fonts",category:"Graphics & Rendering",manimFile:"demos/graphics/text-fonts.manim"},{name:"pixelsGraphics",displayName:"Pixels & Graphics",category:"Graphics & Rendering",manimFile:"demos/graphics/pixels-graphics.manim"}]},{name:"Animation & Effects",screens:[{name:"stateAnim",displayName:"State Animations",category:"Animation & Effects",manimFile:"demos/animation/state-anim.manim"},{name:"particles",displayName:"Particles",category:"Animation & Effects",manimFile:"demos/animation/particles.manim"},{name:"paths",displayName:"Paths",category:"Animation & Effects",manimFile:"demos/animation/paths.manim"},{name:"curves",displayName:"Curves",category:"Animation & Effects",manimFile:"demos/animation/curves.manim"},{name:"animPath",displayName:"Anim Paths",category:"Animation & Effects",manimFile:"demos/animation/anim-path.manim"},{name:"filters",displayName:"Filters",category:"Animation & Effects",manimFile:"demos/animation/filters.manim"}]},{name:"Game-Like Demos",screens:[{name:"inventory",displayName:"Inventory Grid",category:"Game-Like Demos",manimFile:"demos/gamelike/inventory.manim"},{name:"characterSheet",displayName:"Character Sheet",category:"Game-Like Demos",manimFile:"demos/gamelike/character-sheet.manim"},{name:"blob47",displayName:"Blob47 Autotile",category:"Game-Like Demos",manimFile:"demos/gamelike/blob47.manim"},{name:"battleHud",displayName:"Battle HUD",category:"Game-Like Demos",manimFile:"demos/gamelike/battle-hud.manim"},{name:"skillTree",displayName:"Skill Tree",category:"Game-Like Demos",manimFile:"demos/gamelike/skill-tree.manim"},{name:"shop",displayName:"Shop UI",category:"Game-Like Demos",manimFile:"demos/gamelike/shop.manim"},{name:"dialogue",displayName:"Dialogue Box",category:"Game-Like Demos",manimFile:"demos/gamelike/dialogue.manim"},{name:"statusEffects",displayName:"Status Effects",category:"Game-Like Demos",manimFile:"demos/gamelike/status-effects.manim"}]},{name:"Advanced Features",screens:[{name:"incremental",displayName:"Incremental",category:"Advanced Features",manimFile:"demos/advanced/incremental.manim"},{name:"interactives",displayName:"Interactives",category:"Advanced Features",manimFile:"demos/advanced/interactives.manim"},{name:"conditionals",displayName:"Conditionals",category:"Advanced Features",manimFile:"demos/advanced/conditionals.manim"},{name:"expressions",displayName:"Expressions",category:"Advanced Features",manimFile:"demos/advanced/expressions.manim"},{name:"settings",displayName:"Settings",category:"Advanced Features",manimFile:"demos/advanced/settings.manim"},{name:"macroPerformance",displayName:"Macro Performance",category:"Advanced Features",manimFile:"demos/advanced/macro-performance.manim"},{name:"featureShowcase",displayName:"Feature Showcase",category:"Advanced Features",manimFile:"demos/advanced/feature-showcase.manim"}]}];class Yf{constructor(){tn(this,"mainApp",null);tn(this,"currentScreen",null);this.setupFileLoader(),this.waitForMainApp()}setupFileLoader(){var t;const n=((t=window.location)==null?void 0:t.href)||"";window.FileLoader={baseUrl:n,resolveUrl:r=>{if(r.startsWith("http")||r.startsWith("//")||r.startsWith("file://"))return r;try{return new URL(r,n).href}catch{return n+r}},load:r=>this.loadFile(r),stringToArrayBuffer:this.stringToArrayBuffer}}waitForMainApp(){typeof window.PlaygroundMain<"u"&&window.PlaygroundMain.instance?this.mainApp=window.PlaygroundMain.instance:setTimeout(()=>this.waitForMainApp(),100)}stringToArrayBuffer(n){return new TextEncoder().encode(n).buffer}loadFile(n){const t=this.findFileContent(n);if(t)return this.stringToArrayBuffer(t);const r=new XMLHttpRequest;return r.open("GET",n,!1),r.send(),r.status===200?this.stringToArrayBuffer(r.response):new ArrayBuffer(0)}findFileContent(n){const t=n.split("?")[0].split("#")[0];let r=Sr(t);if(r)return r;const a=t.indexOf("/assets/");if(a>=0&&(r=Sr(t.substring(a+8)),r))return r;const l=t.split("/"),i=l[l.length-1];return i&&(r=Sr(i),r)?r:null}switchScreen(n){var t;if(this.currentScreen=n,(t=window.PlaygroundMain)!=null&&t.instance)try{return window.PlaygroundMain.instance.reload(n)}catch(r){return console.error("Failed to switch screen:",r),null}return null}getSourceForScreen(n){for(const t of Yl){const r=t.screens.find(a=>a.name===n);if(r)return Sr(r.manimFile)}return null}dispose(){this.mainApp&&typeof this.mainApp.dispose=="function"&&this.mainApp.dispose()}}function Xf({currentScreen:e,onScreenSelect:n,collapsed:t,onToggleCollapse:r}){const[a,l]=ve.useState(new Set(Yl.map(o=>o.name))),i=o=>{l(c=>{const p=new Set(c);return p.has(o)?p.delete(o):p.add(o),p})};return t?A.jsx("div",{className:"w-10 bg-gray-800 border-r border-gray-700 flex flex-col items-center pt-3",children:A.jsx("button",{onClick:r,className:"text-gray-400 hover:text-white text-xs p-1",title:"Expand sidebar",children:"»"})}):A.jsxs("div",{className:"w-[250px] bg-gray-800 border-r border-gray-700 flex flex-col h-full",children:[A.jsxs("div",{className:"px-4 py-3 border-b border-gray-700 flex items-center justify-between",children:[A.jsx("span",{className:"text-base font-bold text-gray-100",children:"Demos"}),A.jsx("button",{onClick:r,className:"text-gray-400 hover:text-white text-sm px-2 py-1",title:"Collapse sidebar",children:"«"})]}),A.jsx("div",{className:"flex-1 overflow-y-auto scrollable p-2",children:Yl.map(o=>A.jsxs("div",{className:"mb-1",children:[A.jsxs("button",{onClick:()=>i(o.name),className:"w-full text-left px-2 py-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 flex items-center",children:[A.jsx("span",{className:"mr-1.5 text-[10px]",children:a.has(o.name)?"▾":"▸"}),o.name]}),a.has(o.name)&&A.jsx("div",{className:"ml-6",children:o.screens.map(c=>A.jsx("button",{onClick:()=>n(c.name),className:`w-full text-left px-3 py-1 text-xs rounded transition-colors ${e===c.name?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:c.displayName},c.name))})]},o.name))})]})}var mc={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,i={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function s(u){return u instanceof c?new c(u.type,s(u.content),u.alias):Array.isArray(u)?u.map(s):u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(s){return Object.prototype.toString.call(s).slice(8,-1)},objId:function(s){return s.__id||Object.defineProperty(s,"__id",{value:++l}),s.__id},clone:function s(u,f){f=f||{};var h,g;switch(o.util.type(u)){case"Object":if(g=o.util.objId(u),f[g])return f[g];h={},f[g]=h;for(var b in u)u.hasOwnProperty(b)&&(h[b]=s(u[b],f));return h;case"Array":return g=o.util.objId(u),f[g]?f[g]:(h=[],f[g]=h,u.forEach(function(y,$){h[$]=s(y,f)}),h);default:return u}},getLanguage:function(s){for(;s;){var u=a.exec(s.className);if(u)return u[1].toLowerCase();s=s.parentElement}return"none"},setLanguage:function(s,u){s.className=s.className.replace(RegExp(a,"gi"),""),s.classList.add("language-"+u)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var s=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(s){var u=document.getElementsByTagName("script");for(var f in u)if(u[f].src==s)return u[f]}return null}},isActive:function(s,u,f){for(var h="no-"+u;s;){var g=s.classList;if(g.contains(u))return!0;if(g.contains(h))return!1;s=s.parentElement}return!!f}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(s,u){var f=o.util.clone(o.languages[s]);for(var h in u)f[h]=u[h];return f},insertBefore:function(s,u,f,h){h=h||o.languages;var g=h[s],b={};for(var y in g)if(g.hasOwnProperty(y)){if(y==u)for(var $ in f)f.hasOwnProperty($)&&(b[$]=f[$]);f.hasOwnProperty(y)||(b[y]=g[y])}var T=h[s];return h[s]=b,o.languages.DFS(o.languages,function(z,de){de===T&&z!=s&&(this[z]=b)}),b},DFS:function s(u,f,h,g){g=g||{};var b=o.util.objId;for(var y in u)if(u.hasOwnProperty(y)){f.call(u,y,u[y],h||y);var $=u[y],T=o.util.type($);T==="Object"&&!g[b($)]?(g[b($)]=!0,s($,f,null,g)):T==="Array"&&!g[b($)]&&(g[b($)]=!0,s($,f,y,g))}}},plugins:{},highlightAll:function(s,u){o.highlightAllUnder(document,s,u)},highlightAllUnder:function(s,u,f){var h={callback:f,container:s,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),o.hooks.run("before-all-elements-highlight",h);for(var g=0,b;b=h.elements[g++];)o.highlightElement(b,u===!0,h.callback)},highlightElement:function(s,u,f){var h=o.util.getLanguage(s),g=o.languages[h];o.util.setLanguage(s,h);var b=s.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(b,h);var y=s.textContent,$={element:s,language:h,grammar:g,code:y};function T(de){$.highlightedCode=de,o.hooks.run("before-insert",$),$.element.innerHTML=$.highlightedCode,o.hooks.run("after-highlight",$),o.hooks.run("complete",$),f&&f.call($.element)}if(o.hooks.run("before-sanity-check",$),b=$.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!$.code){o.hooks.run("complete",$),f&&f.call($.element);return}if(o.hooks.run("before-highlight",$),!$.grammar){T(o.util.encode($.code));return}if(u&&r.Worker){var z=new Worker(o.filename);z.onmessage=function(de){T(de.data)},z.postMessage(JSON.stringify({language:$.language,code:$.code,immediateClose:!0}))}else T(o.highlight($.code,$.grammar,$.language))},highlight:function(s,u,f){var h={code:s,grammar:u,language:f};if(o.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=o.tokenize(h.code,h.grammar),o.hooks.run("after-tokenize",h),c.stringify(o.util.encode(h.tokens),h.language)},tokenize:function(s,u){var f=u.rest;if(f){for(var h in f)u[h]=f[h];delete u.rest}var g=new x;return m(g,g.head,s),v(s,g,u,g.head,0),k(g)},hooks:{all:{},add:function(s,u){var f=o.hooks.all;f[s]=f[s]||[],f[s].push(u)},run:function(s,u){var f=o.hooks.all[s];if(!(!f||!f.length))for(var h=0,g;g=f[h++];)g(u)}},Token:c};r.Prism=o;function c(s,u,f,h){this.type=s,this.content=u,this.alias=f,this.length=(h||"").length|0}c.stringify=function s(u,f){if(typeof u=="string")return u;if(Array.isArray(u)){var h="";return u.forEach(function(T){h+=s(T,f)}),h}var g={type:u.type,content:s(u.content,f),tag:"span",classes:["token",u.type],attributes:{},language:f},b=u.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(g.classes,b):g.classes.push(b)),o.hooks.run("wrap",g);var y="";for(var $ in g.attributes)y+=" "+$+'="'+(g.attributes[$]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+y+">"+g.content+"</"+g.tag+">"};function p(s,u,f,h){s.lastIndex=u;var g=s.exec(f);if(g&&h&&g[1]){var b=g[1].length;g.index+=b,g[0]=g[0].slice(b)}return g}function v(s,u,f,h,g,b){for(var y in f)if(!(!f.hasOwnProperty(y)||!f[y])){var $=f[y];$=Array.isArray($)?$:[$];for(var T=0;T<$.length;++T){if(b&&b.cause==y+","+T)return;var z=$[T],de=z.inside,nn=!!z.lookbehind,ht=!!z.greedy,ka=z.alias;if(ht&&!z.pattern.global){var gt=z.pattern.toString().match(/[imsuy]*$/)[0];z.pattern=RegExp(z.pattern.source,gt+"g")}for(var Mn=z.pattern||z,C=h.next,P=g;C!==u.tail&&!(b&&P>=b.reach);P+=C.value.length,C=C.next){var R=C.value;if(u.length>s.length)return;if(!(R instanceof c)){var M=1,D;if(ht){if(D=p(Mn,P,s,nn),!D||D.index>=s.length)break;var Se=D.index,In=D.index+D[0].length,te=P;for(te+=C.value.length;Se>=te;)C=C.next,te+=C.value.length;if(te-=C.value.length,P=te,C.value instanceof c)continue;for(var He=C;He!==u.tail&&(te<In||typeof He.value=="string");He=He.next)M++,te+=He.value.length;M--,R=s.slice(P,te),D.index-=P}else if(D=p(Mn,0,R,nn),!D)continue;var Se=D.index,Ue=D[0],Sa=R.slice(0,Se),Vi=R.slice(Se+Ue.length),Ca=P+R.length;b&&Ca>b.reach&&(b.reach=Ca);var ir=C.prev;Sa&&(ir=m(u,ir,Sa),P+=Sa.length),w(u,ir,M);var xc=new c(y,de?o.tokenize(Ue,de):Ue,ka,Ue);if(C=m(u,ir,xc),Vi&&m(u,C,Vi),M>1){var $a={cause:y+","+T,reach:Ca};v(s,u,f,C.prev,P,$a),b&&$a.reach>b.reach&&(b.reach=$a.reach)}}}}}}function x(){var s={value:null,prev:null,next:null},u={value:null,prev:s,next:null};s.next=u,this.head=s,this.tail=u,this.length=0}function m(s,u,f){var h=u.next,g={value:f,prev:u,next:h};return u.next=g,h.prev=g,s.length++,g}function w(s,u,f){for(var h=u.next,g=0;g<f&&h!==s.tail;g++)h=h.next;u.next=h,h.prev=u,s.length-=g}function k(s){for(var u=[],f=s.head.next;f!==s.tail;)u.push(f.value),f=f.next;return u}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(s){var u=JSON.parse(s.data),f=u.language,h=u.code,g=u.immediateClose;r.postMessage(o.highlight(h,o.languages[f],f)),g&&r.close()},!1)),o;var _=o.util.currentScript();_&&(o.filename=_.src,_.hasAttribute("data-manual")&&(o.manual=!0));function E(){o.manual||o.highlightAll()}if(!o.manual){var d=document.readyState;d==="loading"||d==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return o}(n);e.exports&&(e.exports=t),typeof el<"u"&&(el.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(a,l){var i={};i["language-"+l]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[l]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+l]={pattern:/[\s\S]+/,inside:t.languages[l]};var c={};c[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(r,a){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:t.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(r){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var l=r.languages.markup;l&&(l.tag.addInlined("style","css"),l.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",a=function(_,E){return"✖ Error "+_+" while fetching file: "+E},l="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",c="loading",p="loaded",v="failed",x="pre[data-src]:not(["+o+'="'+p+'"]):not(['+o+'="'+c+'"])';function m(_,E,d){var s=new XMLHttpRequest;s.open("GET",_,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?E(s.responseText):s.status>=400?d(a(s.status,s.statusText)):d(l))},s.send(null)}function w(_){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(E){var d=Number(E[1]),s=E[2],u=E[3];return s?u?[d,Number(u)]:[d,void 0]:[d,d]}}t.hooks.add("before-highlightall",function(_){_.selector+=", "+x}),t.hooks.add("before-sanity-check",function(_){var E=_.element;if(E.matches(x)){_.code="",E.setAttribute(o,c);var d=E.appendChild(document.createElement("CODE"));d.textContent=r;var s=E.getAttribute("data-src"),u=_.language;if(u==="none"){var f=(/\.(\w+)$/.exec(s)||[,"none"])[1];u=i[f]||f}t.util.setLanguage(d,u),t.util.setLanguage(E,u);var h=t.plugins.autoloader;h&&h.loadLanguages(u),m(s,function(g){E.setAttribute(o,p);var b=w(E.getAttribute("data-range"));if(b){var y=g.split(/\r\n?|\n/g),$=b[0],T=b[1]==null?y.length:b[1];$<0&&($+=y.length),$=Math.max(0,Math.min($-1,y.length)),T<0&&(T+=y.length),T=Math.max(0,Math.min(T,y.length)),g=y.slice($,T).join(`
`),E.hasAttribute("data-start")||E.setAttribute("data-start",String($+1))}d.textContent=g,t.highlightElement(d)},function(g){E.setAttribute(o,v),d.textContent=g})}}),t.plugins.fileHighlight={highlight:function(E){for(var d=(E||document).querySelectorAll(x),s=0,u;u=d[s++];)t.highlightElement(u)}};var k=!1;t.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(mc);var Kf=mc.exports;const Xl=Kl(Kf);Xl.languages.manim||(Xl.languages.manim={comment:/\/\/.*/,string:/"[^"]*"/,keyword:/\b(version|programmable|bitmap|text|ninepatch|placeholder|staticRef|dynamicRef|slot|spacer|interactive|layers|mask|flow|repeatable|tilegroup|stateanim|point|apply|graphics|pixels|particles|import|filter|settings|curves|paths|atlas2)\b/,"attr-name":/\b(sheet|generated|color|file|center|left|right|grid|hex|layout|construct)\b/,boolean:/\b(true|false)\b/,number:/\b0x[0-9a-fA-F]+\b|\b\d+\.?\d*\b/,operator:/=>|@\(|@if|@else|@default|@ifstrict|@\)|!=|>=|<=|>|</,punctuation:/[{}():,;]/,variable:/\$\w+/,"class-name":/#\w+/,tag:/@\w+/});function Zf({source:e,visible:n}){const t=ve.useRef(null);return ve.useEffect(()=>{t.current&&e&&(t.current.textContent=e,Xl.highlightElement(t.current))},[e]),!n||!e?null:A.jsxs("div",{className:"border-t border-gray-700 flex-1 min-h-0 flex flex-col",children:[A.jsx("div",{className:"px-3 py-1.5 border-b border-gray-700 text-xs font-medium text-gray-300 flex-shrink-0",children:".manim Source"}),A.jsx("div",{className:"flex-1 overflow-auto p-3 bg-gray-900",children:A.jsx("pre",{className:"text-xs leading-relaxed",style:{margin:0},children:A.jsx("code",{ref:t,className:"language-manim",children:e})})})]})}const Ja="nav";function qf(){const[e,n]=ve.useState(Ja),[t,r]=ve.useState(!1),[a,l]=ve.useState(!1),[i,o]=ve.useState(null),[c]=ve.useState(()=>new Yf);ve.useEffect(()=>(window.playgroundLoader=c,window.defaultScreen=Ja,()=>{c.dispose()}),[c]),ve.useEffect(()=>{const x=()=>{const w=window.location.hash.match(/screen=(\w+)/);if(w){const k=w[1];n(k),c.switchScreen(k)}};return x(),window.addEventListener("hashchange",x),()=>window.removeEventListener("hashchange",x)},[c]);const p=x=>{n(x),window.location.hash=`screen=${x}`,c.switchScreen(x);const m=c.getSourceForScreen(x);o(m)},v=()=>{if(!a){const x=c.getSourceForScreen(e);o(x)}l(!a)};return A.jsxs("div",{className:"flex h-screen w-screen bg-gray-900 text-white",children:[A.jsx(Xf,{currentScreen:e,onScreenSelect:p,collapsed:t,onToggleCollapse:()=>r(!t)}),A.jsxs("div",{className:"flex-1 flex flex-col h-full min-h-0",children:[A.jsxs("div",{className:"border-b border-gray-700 flex-shrink-0 flex items-center justify-between px-6 py-3",children:[A.jsx("button",{onClick:()=>p(Ja),className:"text-sm font-semibold text-gray-200 hover:text-white transition-colors tracking-wide",children:"hx-multianim Showcase"}),A.jsx("div",{className:"flex items-center space-x-3",children:A.jsx("button",{onClick:v,className:`text-xs px-2 py-0.5 rounded transition-colors ${a?"bg-blue-600 text-white":"text-gray-400 hover:text-white"}`,children:a?"Hide Source":"View .manim"})})]}),A.jsxs("div",{className:"flex-1 flex min-h-0",children:[A.jsx("div",{className:`${a?"w-2/3":"w-full"} min-h-0`,children:A.jsx("canvas",{id:"webgl",className:"w-full h-full block"})}),a&&A.jsx("div",{className:"w-1/3 border-l border-gray-700 flex flex-col min-h-0",children:A.jsx(Zf,{source:i,visible:a})})]})]})]})}var hc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(el,function(){var t=function(){},r={},a={},l={};function i(m,w){m=m.push?m:[m];var k=[],_=m.length,E=_,d,s,u,f;for(d=function(h,g){g.length&&k.push(h),E--,E||w(k)};_--;){if(s=m[_],u=a[s],u){d(s,u);continue}f=l[s]=l[s]||[],f.push(d)}}function o(m,w){if(m){var k=l[m];if(a[m]=w,!!k)for(;k.length;)k[0](m,w),k.splice(0,1)}}function c(m,w){m.call&&(m={success:m}),w.length?(m.error||t)(w):(m.success||t)(m)}function p(m,w,k,_){var E=document,d=k.async,s=(k.numRetries||0)+1,u=k.before||t,f=m.replace(/[\?|#].*$/,""),h=m.replace(/^(css|img|module|nomodule)!/,""),g,b,y;if(_=_||0,/(^css!|\.css$)/.test(f))y=E.createElement("link"),y.rel="stylesheet",y.href=h,g="hideFocus"in y,g&&y.relList&&(g=0,y.rel="preload",y.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f))y=E.createElement("img"),y.src=h;else if(y=E.createElement("script"),y.src=h,y.async=d===void 0?!0:d,b="noModule"in y,/^module!/.test(f)){if(!b)return w(m,"l");y.type="module"}else if(/^nomodule!/.test(f)&&b)return w(m,"l");y.onload=y.onerror=y.onbeforeload=function($){var T=$.type[0];if(g)try{y.sheet.cssText.length||(T="e")}catch(z){z.code!=18&&(T="e")}if(T=="e"){if(_+=1,_<s)return p(m,w,k,_)}else if(y.rel=="preload"&&y.as=="style")return y.rel="stylesheet";w(m,T,$.defaultPrevented)},u(m,y)!==!1&&E.head.appendChild(y)}function v(m,w,k){m=m.push?m:[m];var _=m.length,E=_,d=[],s,u;for(s=function(f,h,g){if(h=="e"&&d.push(f),h=="b")if(g)d.push(f);else return;_--,_||w(d)},u=0;u<E;u++)p(m[u],s,k)}function x(m,w,k){var _,E;if(w&&w.trim&&(_=w),E=(_?k:w)||{},_){if(_ in r)throw"LoadJS";r[_]=!0}function d(s,u){v(m,function(f){c(E,f),s&&c({success:s,error:u},f),o(_,f)},E)}if(E.returnPromise)return new Promise(d);d()}return x.ready=function(w,k){return i(w,function(_){c(k,_)}),x},x.done=function(w){o(w,[])},x.reset=function(){r={},a={},l={}},x.isDefined=function(w){return w in r},x})})(hc);var Jf=hc.exports;const ep=Kl(Jf);class np{constructor(n={}){tn(this,"maxRetries");tn(this,"retryDelay");tn(this,"timeout");tn(this,"retryCount",0);tn(this,"isLoaded",!1);this.maxRetries=n.maxRetries||5,this.retryDelay=n.retryDelay||2e3,this.timeout=n.timeout||1e4}waitForReactApp(){document.getElementById("root")&&window.playgroundLoader?(console.log("React app ready, loading Haxe application..."),this.loadHaxeApp()):setTimeout(()=>this.waitForReactApp(),300)}loadHaxeApp(){console.log(`Attempting to load playground.js (attempt ${this.retryCount+1}/${this.maxRetries+1})`);const n=setTimeout(()=>{console.error("Timeout loading playground.js"),this.handleLoadError()},this.timeout);ep("playground.js",{success:()=>{clearTimeout(n),console.log("playground.js loaded successfully"),this.isLoaded=!0,this.waitForPlaygroundMain()},error:t=>{clearTimeout(n),console.error("Failed to load playground.js:",t),this.handleLoadError()}})}handleLoadError(){this.retryCount++,this.retryCount<=this.maxRetries?(console.log(`Retrying in ${this.retryDelay}ms... (${this.retryCount}/${this.maxRetries})`),setTimeout(()=>this.loadHaxeApp(),this.retryDelay)):console.error(`Failed to load playground.js after ${this.maxRetries} retries`)}waitForPlaygroundMain(){typeof window.PlaygroundMain<"u"&&window.PlaygroundMain.instance?(console.log("Haxe application initialized successfully"),window.playgroundLoader&&(window.playgroundLoader.mainApp=window.PlaygroundMain.instance)):setTimeout(()=>this.waitForPlaygroundMain(),100)}start(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.waitForReactApp()):this.waitForReactApp()}}const gc=new np({maxRetries:5,retryDelay:2e3,timeout:1e4});gc.start();window.haxeLoader=gc;nl.createRoot(document.getElementById("root")).render(A.jsx(zc.StrictMode,{children:A.jsx(qf,{})}));
//# sourceMappingURL=index-Q1WKH-YR.js.map
