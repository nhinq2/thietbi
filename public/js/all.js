/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
}(function(e, t) {
    "use strict";
    function r(r) {
        var n = t.console;
        o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), 
        e.migrateTrace && n.trace && n.trace()));
    }
    function n(e, t, n, a) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r(a), n;
            },
            set: function(e) {
                r(a), n = e;
            }
        });
    }
    function a(e, t, n, a) {
        e[t] = function() {
            return r(a), n.apply(this, arguments);
        };
    }
    e.migrateVersion = "3.0.1", function() {
        var r = /^[12]\./;
        t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), 
        e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), 
        t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
    }();
    var o = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() {
        o = {}, e.migrateWarnings.length = 0;
    }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var i = e.fn.init, s = e.isNumeric, u = e.find, c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), 
        t[0] = []), i.apply(this, t);
    }, e.fn.init.prototype = e.fn, e.find = function(e) {
        var n = Array.prototype.slice.call(arguments);
        if ("string" == typeof e && c.test(e)) try {
            t.document.querySelector(e);
        } catch (a) {
            e = e.replace(l, function(e, t, r, n) {
                return "[" + t + r + '"' + n + '"]';
            });
            try {
                t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), 
                n[0] = e;
            } catch (e) {
                r("Attribute selector with '#' was not fixed: " + n[0]);
            }
        }
        return u.apply(this, n);
    };
    var d;
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
    e.fn.size = function() {
        return r("jQuery.fn.size() is deprecated and removed; use the .length property"), 
        this.length;
    }, e.parseJSON = function() {
        return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
    }, e.isNumeric = function(t) {
        var n = s(t), a = function(t) {
            var r = t && t.toString();
            return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
        }(t);
        return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"), 
        a;
    }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), 
    n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), 
    n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
    var p = e.ajax;
    e.ajax = function() {
        var e = p.apply(this, arguments);
        return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"), 
        a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), 
        e;
    };
    var f = e.fn.removeAttr, y = e.fn.toggleClass, m = /\S+/g;
    e.fn.removeAttr = function(t) {
        var n = this;
        return e.each(t.match(m), function(t, a) {
            e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a), 
            n.prop(a, !1));
        }), f.apply(this, arguments);
    }, e.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), 
        this.each(function() {
            var r = this.getAttribute && this.getAttribute("class") || "";
            r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
        }));
    };
    var h = !1;
    e.swap && e.each([ "height", "width", "reliableMarginRight" ], function(t, r) {
        var n = e.cssHooks[r] && e.cssHooks[r].get;
        n && (e.cssHooks[r].get = function() {
            var e;
            return h = !0, e = n.apply(this, arguments), h = !1, e;
        });
    }), e.swap = function(e, t, n, a) {
        var o, i, s = {};
        h || r("jQuery.swap() is undocumented and deprecated");
        for (i in t) s[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, a || []);
        for (i in t) e.style[i] = s[i];
        return o;
    };
    var g = e.data;
    e.data = function(t, n, a) {
        var o;
        if (n && "object" == typeof n && 2 === arguments.length) {
            o = e.hasData(t) && g.call(this, t);
            var i = {};
            for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), 
            o[s] = n[s]) : i[s] = n[s];
            return g.call(this, t, i), n;
        }
        return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n), 
        arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
    };
    var v = e.Tween.prototype.run, j = function(e) {
        return e;
    };
    e.Tween.prototype.run = function() {
        e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), 
        e.easing[this.easing] = j), v.apply(this, arguments);
    }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
    var Q = e.fn.load, b = e.event.add, w = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), 
    e.event.fix = function(t) {
        var n, a = t.type, o = this.fixHooks[a], i = e.event.props;
        if (i.length) for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length; ) e.event.addProp(i.pop());
        if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a), 
        (i = o.props) && i.length)) for (;i.length; ) e.event.addProp(i.pop());
        return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
    }, e.event.add = function(e, n) {
        return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), 
        b.apply(this, arguments);
    }, e.each([ "load", "unload", "error" ], function(t, n) {
        e.fn[n] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), 
            e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), 
            this));
        };
    }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        e.fn[n] = function(e, t) {
            return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), e(function() {
        e(t.document).triggerHandler("ready");
    }), e.event.special.ready = {
        setup: function() {
            this === t.document && r("'ready' event is deprecated");
        }
    }, e.fn.extend({
        bind: function(e, t, n) {
            return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function(e, t, n, a) {
            return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
        },
        undelegate: function(e, t, n) {
            return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
            return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
        }
    });
    var x = e.fn.offset;
    e.fn.offset = function() {
        var n, a = this[0], o = {
            top: 0,
            left: 0
        };
        return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), 
        o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
    };
    var k = e.param;
    e.param = function(t, n) {
        var a = e.ajaxSettings && e.ajaxSettings.traditional;
        return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), 
        n = a), k.call(this, t, n);
    };
    var A = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), 
        A.apply(this, arguments);
    };
    var S = e.Deferred, q = [ [ "resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved" ], [ "reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected" ], [ "notify", "progress", e.Callbacks("memory"), e.Callbacks("memory") ] ];
    return e.Deferred = function(t) {
        var n = S(), a = n.promise();
        return n.pipe = a.pipe = function() {
            var t = arguments;
            return r("deferred.pipe() is deprecated"), e.Deferred(function(r) {
                e.each(q, function(o, i) {
                    var s = e.isFunction(t[o]) && t[o];
                    n[i[1]](function() {
                        var t = s && s.apply(this, arguments);
                        t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [ t ] : arguments);
                    });
                }), t = null;
            }).promise();
        }, t && t.call(n, n), n;
    }, e.Deferred.exceptionHook = S.exceptionHook, e;
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*
 * HS Mega Menu - jQuery Plugin
 * @version: 1.0.0 (Sun, 26 Feb 2017)
 * @requires: jQuery v1.6 or later
 * @author: HtmlStream
 * @event-namespace: .HSMegaMenu
 * @browser-support: IE9+
 * @license:
 *
 * Copyright 2017 HtmlStream
 *
 */
;(function($){
	'use strict';


	/**
	 * Creates a mega menu.
	 *
	 * @constructor
	 * @param {HTMLElement|jQuery} element - The element to create the mega menu for.
	 * @param {Object} options - The options
	 */
	function MegaMenu(element, options) {

		var self = this;

		/**
		 * Current element.
		 *
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Current options set by the caller including defaults.
		 *
		 * @public
		 */
		this.options = $.extend(true, {}, MegaMenu.defaults, options);


		/**
		 * Collection of menu elements.
		 *
		 * @private
		 */
		this._items = $();


		Object.defineProperties( this, {

			/**
			 * Contains composed selector of menu items.
			 *
			 * @public
			 */
			itemsSelector: {
				get: function() {
					return self.options.classMap.hasSubMenu + ',' +
								 self.options.classMap.hasMegaMenu;
				}
			},

			/**
			 * Contains chain of active items.
			 *
			 * @private
			 */
			_tempChain: {
				value: null,
				writable: true
			},

			/**
			 * Contains current behavior state.
			 *
			 * @public
			 */
			state: {
				value: null,
				writable: true
			}

		});

		this.initialize();

	};


	/**
	 * Default options of the mega menu.
	 *
	 * @public
	 */
	MegaMenu.defaults = {
		event: 'hover',
		direction: 'horizontal',
		breakpoint: 991,
		animationIn: false,
		animationOut: false,

		rtl: false,
		hideTimeOut: 300,

		// For 'vertical' direction only
		sideBarRatio: 1/4,
		pageContainer: $('body'),

		classMap: {
			initialized: '.hs-menu-initialized',
			mobileState: '.hs-mobile-state',

			subMenu: '.hs-sub-menu',
			hasSubMenu: '.hs-has-sub-menu',
			hasSubMenuActive: '.hs-sub-menu-opened',

			megaMenu: '.hs-mega-menu',
			hasMegaMenu: '.hs-has-mega-menu',
			hasMegaMenuActive: '.hs-mega-menu-opened'
		},

		mobileSpeed: 400,
		mobileEasing: 'linear',

		beforeOpen: function(){},
		beforeClose: function(){},
		afterOpen: function(){},
		afterClose: function(){}
	};


	/**
	 * Initialization of the plugin.
	 *
	 * @protected
	 */
	MegaMenu.prototype.initialize = function() {

		var self = this,
				$w = $(window);

		if( this.options.rtl ) this.$element.addClass('hs-rtl');

		this.$element
				.addClass(this.options.classMap.initialized.slice(1))
				.addClass('hs-menu-' + this.options.direction);



		// Independent events
		$w.on('resize.HSMegaMenu', function(e){

			if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

			self.resizeTimeOutId = setTimeout( function(){

				if($w.width() <= self.options.breakpoint && self.state == 'desktop') self.initMobileBehavior();
				else if( $w.width() > self.options.breakpoint && self.state == 'mobile' ) self.initDesktopBehavior();

				self.refresh();

			}, 50 );

		});

		$(document)
			.on('click.HSMegaMenu', function(e){

				var $parents = $(e.target).parents(self.itemsSelector);
				self.closeAll( $parents.add($(e.target)) );

			})
			.on('keyup.HSMegaMenu', function(e){
				if( e.keyCode && e.keyCode == 27 ) self.closeAll();
			});

		if($w.width() <= this.options.breakpoint) this.initMobileBehavior();
		else if( $w.width() > this.options.breakpoint) this.initDesktopBehavior();

		this.smartPositions();

		return this;

	};

	MegaMenu.prototype.smartPositions = function() {

		var self = this,
				$submenus = this.$element.find( this.options.classMap.subMenu );

		$submenus.each(function(i, el) {

			MenuItem.smartPosition( $(el), self.options );

		});

	};

	/**
	 * Binding events to menu elements.
	 *
	 * @protected
	 */
	MegaMenu.prototype.bindEvents = function() {

		var self = this,
				selector;

		// Hover case
		if(this.options.event === 'hover' && !_isTouch()) {
			this.$element
				.on(
					'mouseenter.HSMegaMenu',
					this.options.classMap.hasMegaMenu + ':not([data-event="click"]),' +
					this.options.classMap.hasSubMenu + ':not([data-event="click"])',
					function(e) {

						var $this = $(this),
								$chain = $this.parents( self.itemsSelector);

						// Lazy initialization
						if( !$this.data('HSMenuItem') ) {
							self.initMenuItem( $this, self.getType( $this ) );
						}

						$chain = $chain.add($this);

						self.closeAll( $chain );

						$chain.each(function(i, el){

							var HSMenuItem = $(el).data('HSMenuItem');

							if(HSMenuItem.hideTimeOutId) clearTimeout(HSMenuItem.hideTimeOutId);
							HSMenuItem.show();

						});

						self._items = self._items.not( $chain );
						self._tempChain = $chain;

						e.preventDefault();
						e.stopPropagation();
					}
				)
				.on(
					'mouseleave.HSMegaMenu',
					this.options.classMap.hasMegaMenu + ':not([data-event="click"]),' +
					this.options.classMap.hasSubMenu + ':not([data-event="click"])',
					function(e) {

						var $this = $(this),
								HSMenuItem = $this.data('HSMenuItem'),
								$chain = $(e.relatedTarget).parents( self.itemsSelector );

						HSMenuItem.hideTimeOutId = setTimeout( function(){
							self.closeAll( $chain );
						}, self.options.hideTimeOut );

						self._items = self._items.add( self._tempChain );
						self._tempChain = null;

						e.preventDefault();
						e.stopPropagation();
					}
				)
				.on(
					'click.HSMegaMenu',
					this.options.classMap.hasMegaMenu + '[data-event="click"] > a, ' +
					this.options.classMap.hasSubMenu + '[data-event="click"] > a',
					function(e) {

						var $this = $(this).parent('[data-event="click"]'),
								HSMenuItem;

						// Lazy initialization
						if(!$this.data('HSMenuItem')) {
							self.initMenuItem( $this, self.getType( $this ) );
						}


						self.closeAll( $this.add(
							$this.parents(self.itemsSelector)
						) );

						HSMenuItem = $this
							.data('HSMenuItem');

						if(HSMenuItem.isOpened) {
							HSMenuItem.hide();
						}
						else{
							HSMenuItem.show();
						}


						e.preventDefault();
						e.stopPropagation();

					}
				);
		}
		// Click case
		else {

			this.$element
				.on(
					'click.HSMegaMenu',
					(_isTouch() ?
								 this.options.classMap.hasMegaMenu + ' > a, ' +
								 this.options.classMap.hasSubMenu + ' > a' :
								 this.options.classMap.hasMegaMenu + ':not([data-event="hover"]) > a,' +
								 this.options.classMap.hasSubMenu + ':not([data-event="hover"]) > a'),
					function(e) {

						var $this = $(this).parent(),
								HSMenuItem,
								$parents = $this.parents(self.itemsSelector);

						// Lazy initialization
						if(!$this.data('HSMenuItem')) {
							self.initMenuItem( $this, self.getType( $this ) );
						}

						self.closeAll( $this.add(
							$this.parents( self.itemsSelector )
						) );

						HSMenuItem = $this
							.addClass('hs-event-prevented')
							.data('HSMenuItem');

						if(HSMenuItem.isOpened) {
							HSMenuItem.hide();
						}
						else{
							HSMenuItem.show();
						}

						e.preventDefault();
						e.stopPropagation();
					}
				);

				if(!_isTouch()) {
					this.$element
						.on(
							'mouseenter.HSMegaMenu',
							this.options.classMap.hasMegaMenu + '[data-event="hover"],' +
							this.options.classMap.hasSubMenu + '[data-event="hover"]',
							function(e) {

								var $this = $(this),
										$parents = $this.parents( self.itemsSelector);

								// Lazy initialization
								if( !$this.data('HSMenuItem') ) {
									self.initMenuItem( $this, self.getType( $this ) );
								}

								self.closeAll( $this.add($parents) );

								$parents.add($this).each(function(i, el){

									var HSMenuItem = $(el).data('HSMenuItem');

									if(HSMenuItem.hideTimeOutId) clearTimeout(HSMenuItem.hideTimeOutId);
									HSMenuItem.show();

								});

								e.preventDefault();
								e.stopPropagation();
							}
						)
						.on(
							'mouseleave.HSMegaMenu',
							this.options.classMap.hasMegaMenu + '[data-event="hover"],' +
							this.options.classMap.hasSubMenu + '[data-event="hover"]',
							function(e) {

								var $this = $(this),
										HSMenuItem = $this.data('HSMenuItem');

								HSMenuItem.hideTimeOutId = setTimeout( function(){

									self.closeAll(
										$(e.relatedTarget).parents(self.itemsSelector)
									);

								}, self.options.hideTimeOut );

								e.preventDefault();
								e.stopPropagation();
							}
						)
				}
		}

	};

	/**
	 * Initialization of certain menu item.
	 *
	 * @protected
	 */
	MegaMenu.prototype.initMenuItem = function(element, type) {

		var self = this,
				Item = new MenuItem(
					element,
					element.children(
						self.options.classMap[type === 'mega-menu' ? 'megaMenu' : 'subMenu']
					),
					$.extend(true, {type: type}, self.options, element.data()),
					self.$element
				);

		element.data( 'HSMenuItem', Item );
		this._items = this._items.add( element );

	};

	/**
	 * Destroys of desktop behavior, then makes initialization of mobile behavior.
	 *
	 * @protected
	 */
	MegaMenu.prototype.initMobileBehavior = function() {

		var self = this;

		this.state = 'mobile';

		this.$element
				.off('.HSMegaMenu')
				.addClass( this.options.classMap.mobileState.slice(1) )
				.on('click.HSMegaMenu', self.options.classMap.hasSubMenu + ' > a, ' + self.options.classMap.hasMegaMenu + ' > a', function(e){

					var $this = $(this).parent(),
							MenuItemInstance;

					// Lazy initialization
					if( !$this.data('HSMenuItem') ) {
						self.initMenuItem( $this, self.getType( $this ) );
					}

					self.closeAll( $this.parents( self.itemsSelector ).add($this) );

					MenuItemInstance = $this
							 .data('HSMenuItem');

					console.log(MenuItemInstance.isOpened);

					if(MenuItemInstance.isOpened) {
						MenuItemInstance.mobileHide();
					}
					else {
						MenuItemInstance.mobileShow();
					}

					e.preventDefault();
					e.stopPropagation();

				})
				.find( this.itemsSelector )
				.not(
					this.options.classMap.hasSubMenuActive  + ',' +
					this.options.classMap.hasMegaMenuActive
				)
				.children(
					this.options.classMap.subMenu + ',' +
					this.options.classMap.megaMenu
				)
				.hide();

	};

	/**
	 * Destroys of mobile behavior, then makes initialization of desktop behavior.
	 *
	 * @protected
	 */
	MegaMenu.prototype.initDesktopBehavior = function() {

		this.state = 'desktop';

		this.$element
				.removeClass(this.options.classMap.mobileState.slice(1))
				.off('.HSMegaMenu')
				.find( this.itemsSelector )
				.not(
					this.options.classMap.hasSubMenuActive  + ',' +
					this.options.classMap.hasMegaMenuActive
				)
				.children(
					this.options.classMap.subMenu + ',' +
					this.options.classMap.megaMenu
				)
				.hide();

		this.bindEvents();

	};

	/**
	 * Hides all of opened submenus/megamenus.
	 *
	 * @param {jQuery} except - collection of elements, which shouldn't be closed.
	 * @return {jQuery}
	 * @public
	 */
	MegaMenu.prototype.closeAll = function(except) {

		var self = this;

		return this._items.not(except && except.length ? except : $()).each(function(i, el){

			$(el)
				.removeClass('hs-event-prevented')
				.data('HSMenuItem')[self.state == 'mobile' ? 'mobileHide' : 'hide']();

		});

	};

	/**
	 * Returns type of sub menu based on specified menu item.
	 *
	 * @param {jQuery} item
	 * @return {String|null}
	 * @public
	 */
	MegaMenu.prototype.getType = function( item ) {

		if(!item || !item.length) return null;

		return item.hasClass(this.options.classMap.hasSubMenu.slice(1)) ? 'sub-menu' :
					 (item.hasClass(this.options.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null);

	};

	/**
	 * Returns current menu state.
	 *
	 * @return {String}
	 * @public
	 */
	MegaMenu.prototype.getState = function() {
		return this.state;
	};

	/**
	 * Updates bounds of all menu items.
	 *
	 * @return {jQuery}
	 * @public
	 */
	MegaMenu.prototype.refresh = function() {

		return this._items.add( this._tempChain ).each(function(i, el){
			$(el).data('HSMenuItem')._updateMenuBounds();
		});

	};


	/**
	 * Creates a mega-menu element.
	 *
	 * @param {jQuery} element
	 * @param {jQuery} menu
	 * @param {Object} options
	 * @param {jQuery} container
	 * @constructor
	 */
	function MenuItem(element, menu, options, container) {

		var self = this;

		/**
		 * Current menu item element.
		 *
		 * @public
		 */
		this.$element = element;

		/**
		 * Current mega menu element.
		 *
		 * @public
		 */
		this.menu = menu;

		/**
		 * Item options.
		 *
		 * @public
		 */
		this.options = options;


		/**
		 * MegaMenu container.
		 *
		 * @public
		 */
		this.$container = container;

		Object.defineProperties(this, {

			/**
			 * Contains css class of menu item element.
			 *
			 * @public
			 */
			itemClass: {
				get: function() {
					return self.options.type === 'mega-menu' ?
								 self.options.classMap.hasMegaMenu :
								 self.options.classMap.hasSubMenu;
				}
			},

			/**
			 * Contains css active-class of menu item element.
			 *
			 * @public
			 */
			activeItemClass: {
				get: function() {
					return self.options.type === 'mega-menu' ?
								 self.options.classMap.hasMegaMenuActive :
								 self.options.classMap.hasSubMenuActive;
				}
			},

			/**
			 * Contains css class of menu element.
			 *
			 * @public
			 */
			menuClass: {
				get: function() {
					return self.options.type === 'mega-menu' ?
								 self.options.classMap.megaMenu :
								 self.options.classMap.subMenu;
				}
			},

			isOpened: {
				get: function() {
					return this.$element.hasClass(this.activeItemClass.slice(1));
				}
			}

		});


		this.menu.addClass('animated').on('click.HSMegaMenu', function(e){
			self._updateMenuBounds();
		});

		if( this.$element.data('max-width') ) this.menu.css('max-width', this.$element.data('max-width') );
		if( this.$element.data('position') ) this.menu.addClass( 'hs-position-' + this.$element.data('position') );


		if( this.options.animationOut ) {

			this.menu.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {

				if(self.menu.hasClass(self.options.animationOut)) {
					self.$element.removeClass(self.activeItemClass.slice(1));
					self.options.afterClose.call(self, self.$element, self.menu);
				}

				if(self.menu.hasClass(self.options.animationIn)) {
					self.options.afterOpen.call(self, self.$element, self.menu);
				}

				e.stopPropagation();
				e.preventDefault();
			});
		}

	}

	/**
	 * Shows the mega-menu item.
	 *
	 * @public
	 * @return {MenuItem}
	 */
	MenuItem.prototype.show = function() {
		if( !this.menu.length ) return this;

		this.$element.addClass(this.activeItemClass.slice(1));

		if(this.options.direction == 'horizontal') this.smartPosition( this.menu, this.options );

		this._updateMenuBounds();

		if(this.options.animationOut) {
			this.menu.removeClass(this.options.animationOut);
		}
		else {
			this.options.afterOpen.call(this, this.$element, this.menu);
		}

		if(this.options.animationIn) this.menu.addClass(this.options.animationIn);

		return this;
	}

	/**
	 * Hides the mega-menu item.
	 *
	 * @public
	 * @return {MenuItem}
	 */
	MenuItem.prototype.hide = function() {

		var self = this;

		if( !this.menu.length ) return this;

		if(!this.options.animationOut) {
			this.$element.removeClass(this.activeItemClass.slice(1));
		}

		if(this.options.animationIn) this.menu.removeClass(this.options.animationIn);
		if(this.options.animationOut) {
			this.menu
					.addClass(this.options.animationOut);
		}
		else{
			this.options.afterClose.call(this, this.$element, this.menu);
		}

		return this;
	}

	/**
	 * Shows the mega-menu item.
	 *
	 * @public
	 * @return {MenuItem}
	 */
	MenuItem.prototype.mobileShow = function() {
		var self = this;

		if( !this.menu.length ) return this;



		this.menu
				.removeClass( this.options.animationIn )
				.removeClass( this.options.animationOut )
				.stop()
				.slideDown({
					duration: self.options.mobileSpeed,
					easing: self.options.mobileEasing,
					complete: function() {
						self.options.afterOpen.call(self, self.$element, self.menu);
					}
				});

		this.$element.addClass(this.activeItemClass.slice(1));

		return this;
	};

	/**
	 * Hides the mega-menu item.
	 *
	 * @public
	 * @return {MenuItem}
	 */
	MenuItem.prototype.mobileHide = function() {
		var self = this;

		if( !this.menu.length ) return this;

		this.menu.stop().slideUp({
			duration: self.options.mobileSpeed,
			easing: self.options.mobileEasing,
			complete: function() {
				self.options.afterClose.call(self, self.$element, self.menu);
			}
		});

		this.$element.removeClass(this.activeItemClass.slice(1));

		return this;
	};

	/**
	 * Check, if element is in viewport.
	 *
	 * @param {jQuery} element
	 * @param {Object} options
	 * @public
	 */
	MenuItem.prototype.smartPosition = function( element, options ) {

		MenuItem.smartPosition(element, options);

	};

	/**
	 * Check, if element is in viewport.
	 *
	 * @param {jQuery} element
	 * @param {Object} options
	 * @static
	 * @public
	 */
	MenuItem.smartPosition = function( element, options ) {
		if(!element && !element.length) return;

		var $w = $(window);

		element.removeClass('hs-reversed');

		if(!options.rtl) {

			if( element.offset().left + element.outerWidth() > $w.width() ) {
				element.addClass('hs-reversed');
			}

		}
		else {

			if(element.offset().left < 0) {
				element.addClass('hs-reversed');
			}

		}
	};

	/**
	 * Updates bounds of current opened menu.
	 *
	 * @private
	 */
	MenuItem.prototype._updateMenuBounds = function() {

		var width = 'auto';

		if( this.options.direction == 'vertical' && this.options.type == 'mega-menu' ) {

			if( this.$container && this.$container.data('HSMegaMenu').getState() == 'desktop' ) {
				if( !this.options.pageContainer.length ) this.options.pageContainer = $('body');
				width = this.options.pageContainer.outerWidth() * (1 - this.options.sideBarRatio);
			}
			else {
				width = 'auto';
			}


			this.menu.css({
				'width': width,
				'height': 'auto'
			});

			if( this.menu.outerHeight() > this.$container.outerHeight() ) {
				return;
			}

			this.menu.css('height', '100%');
		}

	};

	/**
	 * The jQuery plugin for the MegaMenu.
	 *
	 * @public
	 */
	$.fn.HSMegaMenu = function(options) {

		return this.each(function(i, el) {

			var $this = $(this);

			if(!$this.data('HSMegaMenu')) {
				$this.data('HSMegaMenu', new MegaMenu($this, options));
			}

		});

	};

	/**
	 * Helper function for detect touch events in the environment.
	 *
	 * @return {Boolean}
	 * @private
	 */
	function _isTouch() {
		return ('ontouchstart' in window);
	}

})(jQuery);
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){var t,o,a,n,i,r,l,s,c,d,u,f,h,m,p,g,v,x,_,w,S,b,C,y,B,T,k,M,O,I,D,E,W,R,A,L,z,P,H,U,F,q,j,Y,X,N,V,Q,G,J,K,Z,$,ee,te,oe,ae,ne,ie,re;ne="function"==typeof define&&define.amd,ie="undefined"!=typeof module&&module.exports,re="https:"==document.location.protocol?"https:":"http:",ne||(ie?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+re+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&V(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(Q(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&Q(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(Q(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&Q(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if(void 0!==t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ae()?0:d,setTimeout(function(){null!==c[0]&&void 0!==c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(n,c[0].toString(),s)),null!==c[1]&&void 0!==c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&V(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);o.data(a)&&(o.data(a),N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3]))})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),Z(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){t.autoDraggerLength=!(e.inArray(t.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"])>-1)&&t.autoDraggerLength,t.autoExpandScrollbar=!(e.inArray(t.theme,["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"])>-1)&&t.autoExpandScrollbar,t.scrollButtons.enable=!(e.inArray(t.theme,["minimal","minimal-dark"])>-1)&&t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,["minimal","minimal-dark"])>-1||t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,["minimal","minimal-dark"])>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),Z(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=te(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(V(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},T=function(){var t=e(this),o=t.data(a),n=o.opt;if(!o.bindEvents){var i;if(I.call(this),n.contentTouchScroll&&D.call(this),E.call(this),n.mouseWheel.enable)!function o(){i=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(i),W.call(t[0])):o()},100)}();P.call(this),U.call(this),n.advanced.autoScrollOnFocus&&H.call(this),n.scrollButtons.enable&&F.call(this),n.keyboard.enable&&q.call(this),o.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");if(n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents){var c=A()?top.document:document;e(document).add(e(c)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),Z(s[0],"onCompleteTimeout"),o.bindEvents=!1}},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){var t,o,n,i=e(this),r=i.data(a),l=r.opt,d=a+"_"+r.idx,u=["mCSB_"+r.idx+"_dragger_vertical","mCSB_"+r.idx+"_dragger_horizontal"],f=e("#mCSB_"+r.idx+"_container"),h=e("#"+u[0]+",#"+u[1]),m=l.advanced.releaseDraggableSelectors?h.add(e(l.advanced.releaseDraggableSelectors)):h,p=A()?top.document:document,g=l.advanced.extraDraggableSelectors?e(p).add(e(l.advanced.extraDraggableSelectors)):e(p);function v(e,o,a,n){if(f[0].idleTimer=l.scrollInertia<233?250:0,t.attr("id")===u[1])var s="x",c=(t[0].offsetLeft-o+n)*r.scrollRatio.x;else var s="y",c=(t[0].offsetTop-e+a)*r.scrollRatio.y;Q(i,c.toString(),{dir:s,drag:!0})}h.bind("contextmenu."+d,function(e){e.preventDefault()}).bind("mousedown."+d+" touchstart."+d+" pointerdown."+d+" MSPointerDown."+d,function(a){if(a.stopImmediatePropagation(),a.preventDefault(),$(a)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(f,!1),V(i);var r=(t=e(this)).offset(),d=O(a)[0]-r.top,u=O(a)[1]-r.left,h=t.height()+r.top,m=t.width()+r.left;d<h&&d>0&&u<m&&u>0&&(o=d,n=u),C(t,"active",l.autoExpandScrollbar)}}).bind("touchmove."+d,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=t.offset(),i=O(e)[0]-a.top,r=O(e)[1]-a.left;v(o,n,i,r)}),e(document).add(g).bind("mousemove."+d+" pointermove."+d+" MSPointerMove."+d,function(e){if(t){var a=t.offset(),i=O(e)[0]-a.top,r=O(e)[1]-a.left;if(o===i&&n===r)return;v(o,n,i,r)}}).add(m).bind("mouseup."+d+" touchend."+d+" pointerup."+d+" MSPointerUp."+d,function(e){t&&(C(t,"active",l.autoExpandScrollbar),t=null),c=!1,s&&(document.onselectstart=null),L.call(f,!0)})},D=function(){var o,n,i,r,l,s,d,u,f,h,m,p,g,v,x=e(this),_=x.data(a),w=_.opt,S=a+"_"+_.idx,b=e("#mCSB_"+_.idx),C=e("#mCSB_"+_.idx+"_container"),y=[e("#mCSB_"+_.idx+"_dragger_vertical"),e("#mCSB_"+_.idx+"_dragger_horizontal")],B=[],T=[],k=0,M="yx"===w.axis?"none":"all",I=[],D=C.find("iframe"),E=["touchstart."+S+" pointerdown."+S+" MSPointerDown."+S,"touchmove."+S+" pointermove."+S+" MSPointerMove."+S,"touchend."+S+" pointerup."+S+" MSPointerUp."+S],W=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;function R(e){if(!ee(e)||c||O(e)[2])t=0;else{t=1,g=0,v=0,o=1,x.removeClass("mCS_touch_action");var a=C.offset();n=O(e)[0]-a.top,i=O(e)[1]-a.left,I=[O(e)[0],O(e)[1]]}}function L(e){if(ee(e)&&!c&&!O(e)[2]&&(w.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!v||g)&&o)){d=J();var t=b.offset(),a=O(e)[0]-t.top,r=O(e)[1]-t.left,l="mcsLinearOut";if(B.push(a),T.push(r),I[2]=Math.abs(O(e)[0]-I[0]),I[3]=Math.abs(O(e)[1]-I[1]),_.overflowed[0])var s=y[0].parent().height()-y[0].height(),u=n-a>0&&a-n>-s*_.scrollRatio.y&&(2*I[3]<I[2]||"yx"===w.axis);if(_.overflowed[1])var f=y[1].parent().width()-y[1].width(),h=i-r>0&&r-i>-f*_.scrollRatio.x&&(2*I[2]<I[3]||"yx"===w.axis);u||h?(W||e.preventDefault(),g=1):(v=1,x.addClass("mCS_touch_action")),W&&e.preventDefault(),m="yx"===w.axis?[n-a,i-r]:"x"===w.axis?[null,i-r]:[n-a,null],C[0].idleTimer=250,_.overflowed[0]&&U(m[0],k,l,"y","all",!0),_.overflowed[1]&&U(m[1],k,l,"x",M,!0)}}function z(e){if(!ee(e)||c||O(e)[2])t=0;else{t=1,e.stopImmediatePropagation(),V(x),s=J();var o=b.offset();r=O(e)[0]-o.top,l=O(e)[1]-o.left,B=[],T=[]}}function P(e){if(ee(e)&&!c&&!O(e)[2]){o=0,e.stopImmediatePropagation(),g=0,v=0,u=J();var t=b.offset(),a=O(e)[0]-t.top,n=O(e)[1]-t.left;if(!(u-d>30)){var i="mcsEaseOut",x=(h=1e3/(u-s))<2.5,S=x?[B[B.length-2],T[T.length-2]]:[0,0];f=x?[a-S[0],n-S[1]]:[a-r,n-l];var y=[Math.abs(f[0]),Math.abs(f[1])];h=x?[Math.abs(f[0]/4),Math.abs(f[1]/4)]:[h,h];var k=[Math.abs(C[0].offsetTop)-f[0]*H(y[0]/h[0],h[0]),Math.abs(C[0].offsetLeft)-f[1]*H(y[1]/h[1],h[1])];m="yx"===w.axis?[k[0],k[1]]:"x"===w.axis?[null,k[1]]:[k[0],null],p=[4*y[0]+w.scrollInertia,4*y[1]+w.scrollInertia];var I=parseInt(w.contentTouchScroll)||0;m[0]=y[0]>I?m[0]:0,m[1]=y[1]>I?m[1]:0,_.overflowed[0]&&U(m[0],p[0],i,"y",M,!1),_.overflowed[1]&&U(m[1],p[1],i,"x",M,!1)}}}function H(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function U(e,t,o,a,n,i){e&&Q(x,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}C.bind(E[0],function(e){R(e)}).bind(E[1],function(e){L(e)}),b.bind(E[0],function(e){z(e)}).bind(E[2],function(e){P(e)}),D.length&&D.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(E[0],function(e){R(e),z(e)}).bind(E[1],function(e){L(e)}).bind(E[2],function(e){P(e)})})})},E=function(){var o,n=e(this),i=n.data(a),r=i.opt,l=i.sequential,s=a+"_"+i.idx,d=e("#mCSB_"+i.idx+"_container"),u=d.parent();function f(e,t,a){l.type=a&&o?"stepped":"stepless",l.scrollAmount=10,j(n,e,t,"mcsLinearOut",a?60:null)}d.bind("mousedown."+s,function(e){t||o||(o=1,c=!0)}).add(document).bind("mousemove."+s,function(e){if(!t&&o&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var a=d.offset(),n=O(e)[0]-a.top+d[0].offsetTop,s=O(e)[1]-a.left+d[0].offsetLeft;n>0&&n<u.height()&&s>0&&s<u.width()?l.step&&f("off",null,"stepped"):("x"!==r.axis&&i.overflowed[0]&&(n<0?f("on",38):n>u.height()&&f("on",40)),"y"!==r.axis&&i.overflowed[1]&&(s<0?f("on",37):s>u.width()&&f("on",39)))}}).bind("mouseup."+s+" dragend."+s,function(e){t||(o&&(o=0,f("off",null)),c=!1)})},W=function(){if(e(this).data(a)){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],c=e("#mCSB_"+o.idx+"_container").find("iframe");c.length&&c.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+i,function(e,t){d(e,t)})})}),r.bind("mousewheel."+i,function(e,t){d(e,t)})}function d(a,i){if(V(t),!z(t,a.target)){var c="auto"!==n.mouseWheel.deltaFactor?parseInt(n.mouseWheel.deltaFactor):s&&a.deltaFactor<100?100:a.deltaFactor||100,d=n.scrollInertia;if("x"===n.axis||"x"===n.mouseWheel.axis)var u="x",f=[Math.round(c*o.scrollRatio.x),parseInt(n.mouseWheel.scrollAmount)],h="auto"!==n.mouseWheel.scrollAmount?f[1]:f[0]>=r.width()?.9*r.width():f[0],m=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetLeft),p=l[1][0].offsetLeft,g=l[1].parent().width()-l[1].width(),v="y"===n.mouseWheel.axis?a.deltaY||i:a.deltaX;else var u="y",f=[Math.round(c*o.scrollRatio.y),parseInt(n.mouseWheel.scrollAmount)],h="auto"!==n.mouseWheel.scrollAmount?f[1]:f[0]>=r.height()?.9*r.height():f[0],m=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetTop),p=l[0][0].offsetTop,g=l[0].parent().height()-l[0].height(),v=a.deltaY||i;"y"===u&&!o.overflowed[0]||"x"===u&&!o.overflowed[1]||((n.mouseWheel.invert||a.webkitDirectionInvertedFromDevice)&&(v=-v),n.mouseWheel.normalizeDelta&&(v=v<0?-1:1),(v>0&&0!==p||v<0&&p!==g||n.mouseWheel.preventDefault)&&(a.stopImmediatePropagation(),a.preventDefault()),a.deltaFactor<5&&!n.mouseWheel.normalizeDelta&&(h=a.deltaFactor,d=17),Q(t,(m-v*h).toString(),{dir:u,dur:d}))}}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),!1!==a&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(e){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(e){}o=null!==n}return!1!==a&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver;return e.inArray(n,i)>-1&&!(e.inArray(n,["select","textarea"])>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(e){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){V(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}Q(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length;a.is(n.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?17*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[oe(a)[0],oe(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],s="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0}),"y"===n.axis||i[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){if(a.preventDefault(),$(a)){var r=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,l("on",r);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&l("off",r);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;l("on",r)}}function l(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}})},q=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=e("#mCSB_"+o.idx),s=e("#mCSB_"+o.idx+"_container"),c=s.parent(),d="input,textarea,select,datalist,keygen,[contenteditable='true']",u=s.find("iframe"),f=["blur."+r+" keydown."+r+" keyup."+r];function h(a){switch(a.type){case"blur":o.tweenRunning&&i.dir&&m("off",null);break;case"keydown":case"keyup":var r=a.keyCode?a.keyCode:a.which,l="on";if("x"!==n.axis&&(38===r||40===r)||"y"!==n.axis&&(37===r||39===r)){if((38===r||40===r)&&!o.overflowed[0]||(37===r||39===r)&&!o.overflowed[1])return;"keyup"===a.type&&(l="off"),e(document.activeElement).is(d)||(a.preventDefault(),a.stopImmediatePropagation(),m(l,r))}else if(33===r||34===r){if((o.overflowed[0]||o.overflowed[1])&&(a.preventDefault(),a.stopImmediatePropagation()),"keyup"===a.type){V(t);var u=34===r?-1:1;if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",h=Math.abs(s[0].offsetLeft)-u*(.9*c.width());else var f="y",h=Math.abs(s[0].offsetTop)-u*(.9*c.height());Q(t,h.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}else if((35===r||36===r)&&!e(document.activeElement).is(d)&&((o.overflowed[0]||o.overflowed[1])&&(a.preventDefault(),a.stopImmediatePropagation()),"keyup"===a.type)){if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",h=35===r?Math.abs(c.width()-s.outerWidth(!1)):0;else var f="y",h=35===r?Math.abs(c.height()-s.outerHeight(!1)):0;Q(t,h.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}function m(e,a){i.type=n.keyboard.scrollType,i.scrollAmount=n.keyboard.scrollAmount,"stepped"===i.type&&o.tweenRunning||j(t,e,a)}}u.length&&u.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(f[0],function(e){h(e)})})}),l.attr("tabindex","0").bind(f[0],function(e){h(e)})},j=function(t,o,n,i,r){var l=t.data(a),s=l.opt,c=l.sequential,u=e("#mCSB_"+l.idx+"_container"),f="stepped"===c.type,h=s.scrollInertia<26?26:s.scrollInertia,m=s.scrollInertia<1?17:s.scrollInertia;switch(o){case"on":if(c.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],V(t),te(n)&&"stepped"===c.type)return;p(f);break;case"off":clearTimeout(c.step),Z(c,"step"),V(t),(f||l.tweenRunning&&c.dir)&&p(!0)}function p(e){s.snapAmount&&(c.scrollAmount=s.snapAmount instanceof Array?"x"===c.dir[0]?s.snapAmount[1]:s.snapAmount[0]:s.snapAmount);var o="stepped"!==c.type,a=r||(e?o?h/1.5:m:1e3/60),n=e?o?7.5:40:2.5,d=[Math.abs(u[0].offsetTop),Math.abs(u[0].offsetLeft)],f=[l.scrollRatio.y>10?10:l.scrollRatio.y,l.scrollRatio.x>10?10:l.scrollRatio.x],g="x"===c.dir[0]?d[1]+c.dir[1]*(f[1]*n):d[0]+c.dir[1]*(f[0]*n),v="x"===c.dir[0]?d[1]+c.dir[1]*parseInt(c.scrollAmount):d[0]+c.dir[1]*parseInt(c.scrollAmount),x="auto"!==c.scrollAmount?v:g,_=i||(e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),w=!!e;e&&a<17&&(x="x"===c.dir[0]?d[1]:d[0]),Q(t,x.toString(),{dir:c.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?c.dir=!1:(clearTimeout(c.step),c.step=setTimeout(function(){p()},a))}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&void 0!==t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?oe(m)[1]:oe(m)[0];case"string":case"number":if(te(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&te(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?oe(m)[1]:oe(m)[0]}return e(t).length?"x"===o?oe(e(t))[1]:oe(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container");if(t)return clearTimeout(r[0].autoUpdate),void Z(r[0],"autoUpdate");function l(e){clearTimeout(r[0].autoUpdate),u.update.call(null,o[0],e)}!function t(){clearTimeout(r[0].autoUpdate),0!==o.parents("html").length?r[0].autoUpdate=setTimeout(function(){return i.advanced.updateOnSelectorChange&&(n.poll.change.n=function(){!0===i.advanced.updateOnSelectorChange&&(i.advanced.updateOnSelectorChange="*");var e=0,t=r.find(i.advanced.updateOnSelectorChange);return i.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}(),n.poll.change.n!==n.poll.change.o)?(n.poll.change.o=n.poll.change.n,void l(3)):i.advanced.updateOnContentResize&&(n.poll.size.n=o[0].scrollHeight+o[0].scrollWidth+r[0].offsetHeight+o[0].offsetHeight+o[0].offsetWidth,n.poll.size.n!==n.poll.size.o)?(n.poll.size.o=n.poll.size.n,void l(1)):!i.advanced.updateOnImageLoad||"auto"===i.advanced.updateOnImageLoad&&"y"===i.axis||(n.poll.img.n=r.find("img").length,n.poll.img.n===n.poll.img.o)?void((i.advanced.updateOnSelectorChange||i.advanced.updateOnContentResize||i.advanced.updateOnImageLoad)&&t()):(n.poll.img.o=n.poll.img.n,void r.find("img").each(function(){!function(t){if(e(t).hasClass(d[2]))l();else{var o,a,n=new Image;n.onload=(o=n,a=function(){this.onload=null,e(t).addClass(d[2]),l(2)},function(){return a.apply(o,arguments)}),n.src=t.src}}(this)}))},i.advanced.autoUpdateTimeout):o=null}()},V=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){K.call(this)})},Q=function(t,o,n){var i=t.data(a),r=i.opt,l={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:r.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(l,n),s=[n.dur,n.drag?0:n.dur],c=e("#mCSB_"+i.idx),d=e("#mCSB_"+i.idx+"_container"),u=d.parent(),f=r.callbacks.onTotalScrollOffset?Y.call(t,r.callbacks.onTotalScrollOffset):[0,0],h=r.callbacks.onTotalScrollBackOffset?Y.call(t,r.callbacks.onTotalScrollBackOffset):[0,0];if(i.trigger=n.trigger,0===u.scrollTop()&&0===u.scrollLeft()||(e(".mCSB_"+i.idx+"_scrollbar").css("visibility","visible"),u.scrollTop(0).scrollLeft(0)),"_resetY"!==o||i.contentReset.y||(M("onOverflowYNone")&&r.callbacks.onOverflowYNone.call(t[0]),i.contentReset.y=1),"_resetX"!==o||i.contentReset.x||(M("onOverflowXNone")&&r.callbacks.onOverflowXNone.call(t[0]),i.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!i.contentReset.y&&t[0].mcs||!i.overflowed[0]||(M("onOverflowY")&&r.callbacks.onOverflowY.call(t[0]),i.contentReset.x=null),!i.contentReset.x&&t[0].mcs||!i.overflowed[1]||(M("onOverflowX")&&r.callbacks.onOverflowX.call(t[0]),i.contentReset.x=null),r.snapAmount){var m=r.snapAmount instanceof Array?"x"===n.dir?r.snapAmount[1]:r.snapAmount[0]:r.snapAmount;p=o,g=m,v=r.snapOffset,o=Math.round(p/g)*g-v}var p,g,v;switch(n.dir){case"x":var x=e("#mCSB_"+i.idx+"_dragger_horizontal"),_="left",w=d[0].offsetLeft,S=[c.width()-d.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/i.scrollRatio.x],y=f[1],B=h[1],T=y>0?y/i.scrollRatio.x:0,k=B>0?B/i.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+i.idx+"_dragger_vertical"),_="top",w=d[0].offsetTop,S=[c.height()-d.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/i.scrollRatio.y],y=f[0],B=h[0],T=y>0?y/i.scrollRatio.y:0,k=B>0?B/i.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(O(),M("onInit")&&r.callbacks.onInit.call(t[0])),clearTimeout(d[0].onCompleteTimeout),G(x[0],_,Math.round(b[1]),s[1],n.scrollEasing),!i.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||G(d[0],_,Math.round(b[0]),s[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!i.tweenRunning&&(M("onScrollStart")&&(O(),r.callbacks.onScrollStart.call(t[0])),i.tweenRunning=!0,C(x),i.cbOffsets=[r.callbacks.alwaysTriggerOffsets||w>=S[0]+y,r.callbacks.alwaysTriggerOffsets||w<=-B])},onUpdate:function(){n.callbacks&&n.onUpdate&&M("whileScrolling")&&(O(),r.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===r.axis&&clearTimeout(d[0].onCompleteTimeout);var e=d[0].idleTimer||0;d[0].onCompleteTimeout=setTimeout(function(){M("onScroll")&&(O(),r.callbacks.onScroll.call(t[0])),M("onTotalScroll")&&b[1]>=S[1]-T&&i.cbOffsets[0]&&(O(),r.callbacks.onTotalScroll.call(t[0])),M("onTotalScrollBack")&&b[1]<=k&&i.cbOffsets[1]&&(O(),r.callbacks.onTotalScrollBack.call(t[0])),i.tweenRunning=!1,d[0].idleTimer=0,C(x,"hide")},e)}}})}function M(e){return i&&r.callbacks[e]&&"function"==typeof r.callbacks[e]}function O(){var e=[d[0].offsetTop,d[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[d.outerHeight(!1),d.outerWidth(!1)],i=[c.height(),c.width()];t[0].mcs={content:d,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}},G=function(e,t,o,a,n,i,r){e._mTween||(e._mTween={top:{},left:{}});var l,s,r=r||{},c=r.onStart||function(){},d=r.onUpdate||function(){},u=r.onComplete||function(){},f=J(),h=0,m=e.offsetTop,p=e.style,g=e._mTween[t];"left"===t&&(m=e.offsetLeft);var v=o-m;function x(){g.stop||(h||c.call(),h=J()-f,_(),h>=g.time&&(g.time=h>g.time?h+l-(h-g.time):h+l-1,g.time<h+1&&(g.time=h+1)),g.time<a?g.id=s(x):u.call())}function _(){a>0?(g.currVal=function(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return(e/=a/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t;case"easeInOutStrong":return(e/=a/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return(e/=a/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t;case"easeOutSmooth":return e/=a,-o*(--e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}(g.time,m,v,a,n),p[t]=Math.round(g.currVal)+"px"):p[t]=o+"px",d.call()}g.stop=0,"none"!==i&&null!=g.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(g.id):clearTimeout(g.id),g.id=null),l=1e3/60,g.time=h+l,s=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return _(),setTimeout(e,.01)},g.id=s(x)},J=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},Z=function(e,t){try{delete e[t]}catch(o){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},ee=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},te=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},oe=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ae=function(){var e=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}();return!!e&&document[e]},e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),(a=[i[0].offsetTop,i[0].offsetLeft])[0]+oe(n)[0]>=0&&a[0]+oe(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+oe(n)[1]>=0&&a[1]+oe(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+oe(s)[0],c[0].offsetLeft+oe(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],r[0]-i[0]*(l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]])[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})});
/*
 *  custombox - Modal dialog effects with transitions CSS3
 *  version: 4.0.3
 *  http://dixso.github.io/custombox/
 *  (c) 2017 Julio de la Calle - @dixso9
 *
 *  Under MIT License - http://opensource.org/licenses/MIT
 */
"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Custombox;!function(e){var t="custombox",n=t+"-open",o=t+"-close",i=t+"-lock",s="animateFrom",r=["top","right","bottom","left"],l=["slide","blur","flip","rotate","letmein","makeway","slip","corner","slidetogether","push","contentscale"],c=["blur","makeway","slip","push","contentscale"],a=["letmein","makeway","slip","corner","slidetogether","door","push","contentscale"],h=["corner","slidetogether","scale","door","push","contentscale"],d=["fall","sidefall","flip","sign","slit","letmein","makeway","slip"],u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"check",value:function(e,t){return e.indexOf(t)>-1}},{key:"isIE",value:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!isNaN(parseInt(e.substring(t+5,e.indexOf(".",t)),10));if(e.indexOf("Trident/")>0){var n=e.indexOf("rv:");return!isNaN(parseInt(e.substring(n+3,e.indexOf(".",n)),10))}var o=e.indexOf("Edge/");return o>0&&!isNaN(parseInt(e.substring(o+5,e.indexOf(".",o)),10))}}]),e}(),m=function(){function e(){_classCallCheck(this,e),this.position=document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0,document.documentElement.classList.add(t+"-perspective")}return _createClass(e,[{key:"remove",value:function(){document.documentElement.classList.remove(t+"-perspective"),window.scrollTo(0,this.position)}}]),e}(),p=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.keys(n).forEach(function(t){e[t]&&_extends(n[t],e[t])}),n}return _inherits(t,e),t}(function e(){_classCallCheck(this,e),this.overlay={color:"#000",opacity:.48,close:!0,speedIn:300,speedOut:300,onOpen:null,onComplete:null,onClose:null,active:!0},this.content={id:null,target:null,container:null,clone:!1,animateFrom:"top",animateTo:"top",positionX:"center",positionY:"center",width:null,effect:"fadein",speedIn:300,speedOut:300,delay:150,fullscreen:!1,onOpen:null,onComplete:null,onClose:null,close:!0},this.loader={active:!0,color:"#FFF",background:"#999",speed:1e3}}),f=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.classList.add(t+"-loader"),this.element.style.borderColor=this.options.loader.background,this.element.style.borderTopColor=this.options.loader.color,this.element.style.animationDuration=this.options.loader.speed+"ms",document.body.appendChild(this.element)}return _createClass(e,[{key:"show",value:function(){this.element.style.display="block"}},{key:"destroy",value:function(){this.element.parentElement.removeChild(this.element)}}]),e}(),v=function(){function e(n){if(_classCallCheck(this,e),this.options=n,"loading"===document.readyState)throw new Error("You need to instantiate Custombox when the document is fully loaded");var o=document.querySelector(this.options.content.container);if(o)this.element=o;else if(document.querySelector("."+t+"-container"))document.querySelector("."+t+"-container")&&(this.element=document.querySelector("."+t+"-container"));else{for(this.element=document.createElement("div");document.body.firstChild;)this.element.appendChild(document.body.firstChild);document.body.appendChild(this.element)}this.element.classList.add(t+"-container"),this.element.classList.add(t+"-"+this.options.content.effect),this.element.style.animationDuration=this.options.content.speedIn+"ms",u.check(l,this.options.content.effect)&&this.setAnimation()}return _createClass(e,[{key:"bind",value:function(e){var t=this;return e===o&&(u.check(l,this.options.content.effect)&&this.setAnimation("animateTo"),this.element.classList.remove(n)),this.element.classList.add(e),new Promise(function(e){return t.listener().then(function(){return e()})})}},{key:"remove",value:function(){this.element.classList.remove(o),this.element.classList.remove(t+"-"+this.options.content.effect),this.element.style.removeProperty("animation-duration");var e=document.querySelectorAll("."+t+"-content"),n=document.querySelector(this.options.content.container);if(!e.length)if(n)for(var i=this.element.className.split(" "),s=0,r=i.length;s<r;s++)i[s].startsWith(t+"-")&&this.element.classList.remove(i[s]);else{for(var l=document.querySelector("."+t+"-container");l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.parentNode.removeChild(l)}}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.content.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),y=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.style.backgroundColor=this.options.overlay.color,this.element.classList.add(t+"-overlay"),this.setAnimation()}return _createClass(e,[{key:"bind",value:function(e){var i=this;switch(e){case o:u.check(a,this.options.content.effect)&&this.toggleAnimation("animateTo"),this.element.classList.add(o),this.element.classList.remove(n);break;default:document.body.appendChild(this.element),this.element.classList.add(t+"-"+this.options.content.effect),this.element.classList.add(n)}return new Promise(function(e){return i.listener().then(function(){return e()})})}},{key:"remove",value:function(){try{this.element.parentNode.removeChild(this.element),this.style.parentNode.removeChild(this.style)}catch(e){}}},{key:"createSheet",value:function(){return this.style=document.createElement("style"),this.style.setAttribute("id",t+"-overlay-"+Date.now()),document.head.appendChild(this.style),this.style.sheet}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.overlay.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){var e=this.createSheet();if(u.check(a,this.options.content.effect)?(this.element.style.opacity=this.options.overlay.opacity.toString(),this.element.style.animationDuration=this.options.overlay.speedIn+"ms",this.toggleAnimation()):(e.insertRule("."+t+"-overlay { animation: CloseFade "+this.options.overlay.speedOut+"ms; }",0),e.insertRule("."+n+"."+t+"-overlay { animation: OpenFade "+this.options.overlay.speedIn+"ms; opacity: "+this.options.overlay.opacity+" }",0),e.insertRule("@keyframes OpenFade { from {opacity: 0} to {opacity: "+this.options.overlay.opacity+"} }",0),e.insertRule("@keyframes CloseFade { from {opacity: "+this.options.overlay.opacity+"} to {opacity: 0} }",0)),u.check(h,this.options.content.effect)){var o=this.options.overlay.speedIn;u.check(h,this.options.content.effect)&&(o=this.options.content.speedIn),this.element.style.animationDuration=o+"ms"}}},{key:"toggleAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),b=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.style.animationDuration=this.options.content.speedIn+"ms",this.options.content.id&&this.element.setAttribute("id",t+"-"+this.options.content.id),u.check(h,this.options.content.effect)||(this.element.style.animationDelay=this.options.content.delay+"ms"),this.element.classList.add(t+"-content"),this.options.content.fullscreen?this.element.classList.add(t+"-fullscreen"):(this.element.classList.add(t+"-x-"+this.options.content.positionX),this.element.classList.add(t+"-y-"+this.options.content.positionY)),u.check(l,this.options.content.effect)&&this.setAnimation()}return _createClass(e,[{key:"fetch",value:function(){var e=this;return new Promise(function(n,o){var i=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,s=e.options.content.target.match(i);if(s&&11==s[2].length){var r=document.createElement("div"),l=document.createElement("iframe");if(l.setAttribute("src","https://www.youtube.com/embed/"+s[2]),l.setAttribute("frameborder","0"),l.setAttribute("allowfullscreen",""),l.setAttribute("width","100%"),l.setAttribute("height","100%"),r.appendChild(l),!e.options.content.fullscreen){var c=window.innerWidth>560?560:window.innerWidth,a=window.innerHeight>315?315:window.innerHeight,h=parseInt(e.options.content.width,10);e.options.content.width&&window.innerWidth>h&&(a=Math.round(a*h/c),c=h),l.setAttribute("width",c+"px"),l.setAttribute("height",a+"px")}e.element.appendChild(r),n()}else if("#"!==e.options.content.target.charAt(0)&&"."!==e.options.content.target.charAt(0)){var d=new XMLHttpRequest;d.open("GET",e.options.content.target),d.onload=function(){if(200===d.status){e.element.insertAdjacentHTML("beforeend",d.response);var t=e.element.firstChild;try{t.style.display="block"}catch(e){o(new Error("The ajax response need a wrapper element"))}e.options.content.width&&(t.style.flexBasis=e.options.content.width),n()}else o(new Error(d.statusText))},d.onerror=function(){return o(new Error("Network error"))},d.send()}else{var u=document.querySelector(e.options.content.target);u?(e.options.content.clone?(u=u.cloneNode(!0)).removeAttribute("id"):(e.reference=document.createElement("div"),e.reference.classList.add(t+"-reference"),e.reference.setAttribute("style",u.getAttribute("style")),u.parentNode.insertBefore(e.reference,u.nextSibling)),u.style.display="block",e.options.content.width&&(u.style.flexBasis=e.options.content.width),e.element.appendChild(u),n()):o(new Error("The element doesn't exist"))}})}},{key:"bind",value:function(e){var i=this;switch(e){case o:this.element.style.animationDelay="0ms",this.element.style.animationDuration=this.options.content.speedOut+"ms",this.element.classList.remove(n),this.element.classList.add(o),this.setAnimation("animateTo");break;default:document.body.appendChild(this.element),this.element.classList.add(t+"-"+this.options.content.effect),this.element.classList.add(n)}return new Promise(function(e){return i.listener().then(function(){return e()})})}},{key:"remove",value:function(){var e=new RegExp("^[#|.]");!this.options.content.clone&&e.test(this.options.content.target)&&(this.element.childNodes[0].setAttribute("style",this.reference.getAttribute("style")),this.reference.parentNode.insertBefore(this.element.childNodes[0],this.reference.nextSibling),this.reference.parentNode.removeChild(this.reference));try{this.element.parentNode.removeChild(this.element)}catch(e){}}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.content.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),w=function(){function s(t){_classCallCheck(this,s),this.action=function(t){27===t.keyCode&&e.modal.close()},this.options=new p(t)}return _createClass(s,[{key:"open",value:function(){var e=this;this.build(),this.options.loader.active&&this.loader.show(),this.content.fetch().then(function(){u.check(d,e.options.content.effect)&&(e.scroll=new m),e.options.overlay.active?(e.dispatchEvent("overlay.onOpen"),e.overlay.bind(n).then(function(){e.dispatchEvent("overlay.onComplete"),e.options.loader.active&&e.loader.destroy()})):e.options.loader.active&&e.loader.destroy(),e.container&&e.container.bind(n),document.body.classList.add(i),e.content.bind(n).then(function(){return e.dispatchEvent("content.onComplete")}),e.dispatchEvent("content.onOpen"),e.listeners()}).catch(function(t){throw e.options.loader.active&&e.loader.destroy(),t})}},{key:"build",value:function(){this.options.loader.active&&(this.loader=new f(this.options)),u.check(c,this.options.content.effect)&&(this.container=new v(this.options)),this.options.overlay.active&&(this.overlay=new y(this.options)),this.content=new b(this.options)}},{key:"_close",value:function(){var e=this,t=[this.content.bind(o).then(function(){return e.content.remove()})];this.options.overlay.active&&t.push(this.overlay.bind(o).then(function(){e.scroll&&e.scroll.remove(),e.overlay.remove(),e.dispatchEvent("overlay.onClose")})),this.container&&t.push(this.container.bind(o).then(function(){return e.container.remove()})),Promise.all(t).then(function(){e.options.content.close&&document.removeEventListener("keydown",e.action,!0),e.dispatchEvent("content.onClose"),document.body.classList.remove(i)})}},{key:"dispatchEvent",value:function(e){var n=e.replace(".on",":").toLowerCase(),o=new CustomEvent(t+":"+n),i=Object.create(this.options);document.dispatchEvent(o);try{e.split(".").reduce(function(e,t){return e[t]},i).call()}catch(e){}}},{key:"listeners",value:function(){var e=this,n=window.getComputedStyle(this.content.element).getPropertyValue("animation-fill-mode");document.addEventListener("fullscreenchange",function(){window.getComputedStyle(e.content.element).getPropertyValue("animation-fill-mode")===n?e.content.element.style.animationFillMode="backwards":e.content.element.style.animationFillMode=n},!0),this.options.content.close&&document.addEventListener("keydown",this.action,!0),this.options.overlay.close&&this.content.element.addEventListener("click",function(t){t.target===e.content.element&&e._close()},!0),this.content.element.addEventListener(t+":close",function(){e._close()},!0)}}],[{key:"close",value:function(e){var n=new CustomEvent(t+":close"),o=document.querySelectorAll("."+t+"-content");e&&(o=document.querySelectorAll("#"+t+"-"+e));try{o[o.length-1].dispatchEvent(n)}catch(e){throw new Error("Custombox is not instantiated")}}},{key:"closeAll",value:function(){for(var e=new CustomEvent(t+":close"),n=document.querySelectorAll("."+t+"-content"),o=n.length,i=0;i<o;i++)n[i].dispatchEvent(e)}}]),s}();e.modal=w}(Custombox||(Custombox={}));
/*
 *  custombox - Modal dialog effects with transitions CSS3
 *  version: 4.0.3
 *  http://dixso.github.io/custombox/
 *  (c) 2017 Julio de la Calle - @dixso9
 *
 *  babel-polyfill - https://www.npmjs.com/package/babel-polyfill
 *  babel-plugin-transform-object-assign - https://www.npmjs.com/package/babel-plugin-transform-object-assign
 *  es6-promise - https://www.npmjs.com/package/es6-promise
 *  custom-event-polyfill - https://www.npmjs.com/package/custom-event-polyfill
 *  fullscreen-api-polyfill - https://www.npmjs.com/package/fullscreen-api-polyfill
 *
 *  Under MIT License - http://opensource.org/licenses/MIT
 */
!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[o]={exports:{}};t[o][0].call(a.exports,function(n){var r=t[o][1][n];return s(r||n)},a,a.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(t,n,r){(function(n){"use strict";function define(t,n,e){t[n]||Object[r](t,n,{writable:!0,configurable:!0,value:e})}if(t(295),t(296),t(2),n._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");n._babelPolyfill=!0;var r="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&define(Array,t,Function.call.bind([][t]))})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2,295:295,296:296}],2:[function(t,n,r){t(119),n.exports=t(23).RegExp.escape},{119:119,23:23}],3:[function(t,n,r){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],4:[function(t,n,r){var e=t(18);n.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},{18:18}],5:[function(t,n,r){var e=t(117)("unscopables"),i=Array.prototype;void 0==i[e]&&t(40)(i,e,{}),n.exports=function(t){i[e][t]=!0}},{117:117,40:40}],6:[function(t,n,r){n.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},{}],7:[function(t,n,r){var e=t(49);n.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},{49:49}],8:[function(t,n,r){"use strict";var e=t(109),i=t(105),o=t(108);n.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),c=i(t,u),f=i(n,u),a=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===a?u:i(a,u))-f,u-c),l=1;for(f<c&&c<f+s&&(l=-1,f+=s-1,c+=s-1);s-- >0;)f in r?r[c]=r[f]:delete r[c],c+=l,f+=l;return r}},{105:105,108:108,109:109}],9:[function(t,n,r){"use strict";var e=t(109),i=t(105),o=t(108);n.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),f=u>2?arguments[2]:void 0,a=void 0===f?r:i(f,r);a>c;)n[c++]=t;return n}},{105:105,108:108,109:109}],10:[function(t,n,r){var e=t(37);n.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},{37:37}],11:[function(t,n,r){var e=t(107),i=t(108),o=t(105);n.exports=function(t){return function(n,r,u){var c,f=e(n),a=i(f.length),s=o(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},{105:105,107:107,108:108}],12:[function(t,n,r){var e=t(25),i=t(45),o=t(109),u=t(108),c=t(15);n.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,y,g=o(n),b=i(g),x=e(c,p,3),m=u(b.length),w=0,S=r?v(n,m):f?v(n,0):void 0;m>w;w++)if((h||w in b)&&(d=b[w],y=x(d,w,g),t))if(r)S[w]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:S.push(d)}else if(s)return!1;return l?-1:a||s?s:S}}},{108:108,109:109,15:15,25:25,45:45}],13:[function(t,n,r){var e=t(3),i=t(109),o=t(45),u=t(108);n.exports=function(t,n,r,c,f){e(n);var a=i(t),s=o(a),l=u(a.length),h=f?l-1:0,v=f?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=v;break}if(h+=v,f?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;f?h>=0:l>h;h+=v)h in s&&(c=n(c,s[h],h,a));return c}},{108:108,109:109,3:3,45:45}],14:[function(t,n,r){var e=t(49),i=t(47),o=t(117)("species");n.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},{117:117,47:47,49:49}],15:[function(t,n,r){var e=t(14);n.exports=function(t,n){return new(e(t))(n)}},{14:14}],16:[function(t,n,r){"use strict";var e=t(3),i=t(49),o=t(44),u=[].slice,c={},f=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};n.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?f(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},{3:3,44:44,49:49}],17:[function(t,n,r){var e=t(18),i=t(117)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};n.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},{117:117,18:18}],18:[function(t,n,r){var e={}.toString;n.exports=function(t){return e.call(t).slice(8,-1)}},{}],19:[function(t,n,r){"use strict";var e=t(67).f,i=t(66),o=t(86),u=t(25),c=t(6),f=t(27),a=t(37),s=t(53),l=t(55),h=t(91),v=t(28),p=t(62).fastKey,d=v?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};n.exports={getConstructor:function(t,n,r,s){var l=t(function(t,e){c(t,l,n,"_i"),t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[s],t)});return o(l.prototype,{clear:function(){for(var t=this,n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=this,r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){c(this,l,"forEach");for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(this,t)}}),v&&e(l.prototype,"size",{get:function(){return f(this[d])}}),l},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){s(t,n,function(t,n){this._t=t,this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?l(0,r.k):"values"==n?l(0,r.v):l(0,[r.k,r.v]):(t._t=void 0,l(1))},r?"entries":"values",!r,!0),h(n)}}},{25:25,27:27,28:28,37:37,53:53,55:55,6:6,62:62,66:66,67:67,86:86,91:91}],20:[function(t,n,r){var e=t(17),i=t(10);n.exports=function(t){return function(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},{10:10,17:17}],21:[function(t,n,r){"use strict";var e=t(86),i=t(62).getWeak,o=t(7),u=t(49),c=t(6),f=t(37),a=t(12),s=t(39),l=a(5),h=a(6),v=0,p=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},y=function(t,n){return l(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,r,o){var a=t(function(t,e){c(t,a,n,"_i"),t._i=v++,t._l=void 0,void 0!=e&&f(e,r,t[o],t)});return e(a.prototype,{delete:function(t){if(!u(t))return!1;var n=i(t);return!0===n?p(this).delete(t):n&&s(n,this._i)&&delete n[this._i]},has:function(t){if(!u(t))return!1;var n=i(t);return!0===n?p(this).has(t):n&&s(n,this._i)}}),a},def:function(t,n,r){var e=i(o(n),!0);return!0===e?p(t).set(n,r):e[t._i]=r,t},ufstore:p}},{12:12,37:37,39:39,49:49,6:6,62:62,7:7,86:86}],22:[function(t,n,r){"use strict";var e=t(38),i=t(32),o=t(87),u=t(86),c=t(62),f=t(37),a=t(6),s=t(49),l=t(34),h=t(54),v=t(92),p=t(43);n.exports=function(t,n,r,d,y,g){var b=e[t],x=b,m=y?"set":"add",w=x&&x.prototype,S={},_=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof x&&(g||w.forEach&&!l(function(){(new x).entries().next()}))){var E=new x,O=E[m](g?{}:-0,1)!=E,F=l(function(){E.has(1)}),P=h(function(t){new x(t)}),M=!g&&l(function(){for(var t=new x,n=5;n--;)t[m](n,n);return!t.has(-0)});P||(x=n(function(n,r){a(n,x,t);var e=p(new b,n,x);return void 0!=r&&f(r,y,e[m],e),e}),x.prototype=w,w.constructor=x),(F||M)&&(_("delete"),_("has"),y&&_("get")),(M||O)&&_(m),g&&w.clear&&delete w.clear}else x=d.getConstructor(n,t,y,m),u(x.prototype,r),c.NEED=!0;return v(x,t),S[t]=x,i(i.G+i.W+i.F*(x!=b),S),g||d.setStrong(x,t,y),x}},{32:32,34:34,37:37,38:38,43:43,49:49,54:54,6:6,62:62,86:86,87:87,92:92}],23:[function(t,n,r){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},{}],24:[function(t,n,r){"use strict";var e=t(67),i=t(85);n.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},{67:67,85:85}],25:[function(t,n,r){var e=t(3);n.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},{3:3}],26:[function(t,n,r){"use strict";var e=t(7),i=t(110),o="number";n.exports=function(t){if("string"!==t&&t!==o&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),t!=o)}},{110:110,7:7}],27:[function(t,n,r){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],28:[function(t,n,r){n.exports=!t(34)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{34:34}],29:[function(t,n,r){var e=t(49),i=t(38).document,o=e(i)&&e(i.createElement);n.exports=function(t){return o?i.createElement(t):{}}},{38:38,49:49}],30:[function(t,n,r){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],31:[function(t,n,r){var e=t(76),i=t(73),o=t(77);n.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),f=o.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},{73:73,76:76,77:77}],32:[function(t,n,r){var e=t(38),i=t(23),o=t(40),u=t(87),c=t(25),f="prototype",a=function(t,n,r){var s,l,h,v,p=t&a.F,d=t&a.G,y=t&a.S,g=t&a.P,b=t&a.B,x=d?e:y?e[n]||(e[n]={}):(e[n]||{})[f],m=d?i:i[n]||(i[n]={}),w=m[f]||(m[f]={});d&&(r=n);for(s in r)l=!p&&x&&void 0!==x[s],h=(l?x:r)[s],v=b&&l?c(h,e):g&&"function"==typeof h?c(Function.call,h):h,x&&u(x,s,h,t&a.U),m[s]!=h&&o(m,s,v),g&&w[s]!=h&&(w[s]=h)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},{23:23,25:25,38:38,40:40,87:87}],33:[function(t,n,r){var e=t(117)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},{117:117}],34:[function(t,n,r){n.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],35:[function(t,n,r){"use strict";var e=t(40),i=t(87),o=t(34),u=t(27),c=t(117);n.exports=function(t,n,r){var f=c(t),a=r(u,f,""[t]),s=a[0],l=a[1];o(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},{117:117,27:27,34:34,40:40,87:87}],36:[function(t,n,r){"use strict";var e=t(7);n.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{7:7}],37:[function(t,n,r){var e=t(25),i=t(51),o=t(46),u=t(7),c=t(108),f=t(118),a={},s={};(r=n.exports=function(t,n,r,l,h){var v,p,d,y,g=h?function(){return t}:f(t),b=e(r,l,n?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(v=c(t.length);v>x;x++)if((y=n?b(u(p=t[x])[0],p[1]):b(t[x]))===a||y===s)return y}else for(d=g.call(t);!(p=d.next()).done;)if((y=i(d,b,p.value,n))===a||y===s)return y}).BREAK=a,r.RETURN=s},{108:108,118:118,25:25,46:46,51:51,7:7}],38:[function(t,n,r){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],39:[function(t,n,r){var e={}.hasOwnProperty;n.exports=function(t,n){return e.call(t,n)}},{}],40:[function(t,n,r){var e=t(67),i=t(85);n.exports=t(28)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},{28:28,67:67,85:85}],41:[function(t,n,r){n.exports=t(38).document&&document.documentElement},{38:38}],42:[function(t,n,r){n.exports=!t(28)&&!t(34)(function(){return 7!=Object.defineProperty(t(29)("div"),"a",{get:function(){return 7}}).a})},{28:28,29:29,34:34}],43:[function(t,n,r){var e=t(49),i=t(90).set;n.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},{49:49,90:90}],44:[function(t,n,r){n.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},{}],45:[function(t,n,r){var e=t(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},{18:18}],46:[function(t,n,r){var e=t(56),i=t(117)("iterator"),o=Array.prototype;n.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},{117:117,56:56}],47:[function(t,n,r){var e=t(18);n.exports=Array.isArray||function(t){return"Array"==e(t)}},{18:18}],48:[function(t,n,r){var e=t(49),i=Math.floor;n.exports=function(t){return!e(t)&&isFinite(t)&&i(t)===t}},{49:49}],49:[function(t,n,r){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],50:[function(t,n,r){var e=t(49),i=t(18),o=t(117)("match");n.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},{117:117,18:18,49:49}],51:[function(t,n,r){var e=t(7);n.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},{7:7}],52:[function(t,n,r){"use strict";var e=t(66),i=t(85),o=t(92),u={};t(40)(u,t(117)("iterator"),function(){return this}),n.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},{117:117,40:40,66:66,85:85,92:92}],53:[function(t,n,r){"use strict";var e=t(58),i=t(32),o=t(87),u=t(40),c=t(39),f=t(56),a=t(52),s=t(92),l=t(74),h=t(117)("iterator"),v=!([].keys&&"next"in[].keys()),d="keys",y="values",g=function(){return this};n.exports=function(t,n,r,b,x,m,w){a(r,n,b);var S,_,E,O=function(t){if(!v&&t in A)return A[t];switch(t){case d:case y:return function(){return new r(this,t)}}return function(){return new r(this,t)}},F=n+" Iterator",P=x==y,M=!1,A=t.prototype,I=A[h]||A["@@iterator"]||x&&A[x],j=I||O(x),N=x?P?O("entries"):j:void 0,k="Array"==n?A.entries||I:I;if(k&&(E=l(k.call(new t)))!==Object.prototype&&(s(E,F,!0),e||c(E,h)||u(E,h,g)),P&&I&&I.name!==y&&(M=!0,j=function(){return I.call(this)}),e&&!w||!v&&!M&&A[h]||u(A,h,j),f[n]=j,f[F]=g,x)if(S={values:P?j:O(y),keys:m?j:O(d),entries:N},w)for(_ in S)_ in A||o(A,_,S[_]);else i(i.P+i.F*(v||M),n,S);return S}},{117:117,32:32,39:39,40:40,52:52,56:56,58:58,74:74,87:87,92:92}],54:[function(t,n,r){var e=t(117)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}n.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},{117:117}],55:[function(t,n,r){n.exports=function(t,n){return{value:n,done:!!t}}},{}],56:[function(t,n,r){n.exports={}},{}],57:[function(t,n,r){var e=t(76),i=t(107);n.exports=function(t,n){for(var r,o=i(t),u=e(o),c=u.length,f=0;c>f;)if(o[r=u[f++]]===n)return r}},{107:107,76:76}],58:[function(t,n,r){n.exports=!1},{}],59:[function(t,n,r){var e=Math.expm1;n.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},{}],60:[function(t,n,r){n.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},{}],61:[function(t,n,r){n.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},{}],62:[function(t,n,r){var e=t(114)("meta"),i=t(49),o=t(39),u=t(67).f,c=0,f=Object.isExtensible||function(){return!0},a=!t(34)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},h=function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},v=function(t){return a&&p.NEED&&f(t)&&!o(t,e)&&s(t),t},p=n.exports={KEY:e,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},{114:114,34:34,39:39,49:49,67:67}],63:[function(t,n,r){var e=t(149),i=t(32),o=t(94)("metadata"),u=o.store||(o.store=new(t(255))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o},f=function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},a=function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},s=function(t,n,r,e){c(r,e,!0).set(t,n)},l=function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},h=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},v=function(t){i(i.S,"Reflect",t)};n.exports={store:u,map:c,has:f,get:a,set:s,keys:l,key:h,exp:v}},{149:149,255:255,32:32,94:94}],64:[function(t,n,r){var e=t(38),i=t(104).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,f="process"==t(18)(u);n.exports=function(){var t,n,r,a=function(){var e,i;for(f&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(f)r=function(){u.nextTick(a)};else if(o){var s=!0,l=document.createTextNode("");new o(a).observe(l,{characterData:!0}),r=function(){l.data=s=!s}}else if(c&&c.resolve){var h=c.resolve();r=function(){h.then(a)}}else r=function(){i.call(e,a)};return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},{104:104,18:18,38:38}],65:[function(t,n,r){"use strict";var e=t(76),i=t(73),o=t(77),u=t(109),c=t(45),f=Object.assign;n.exports=!f||t(34)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=f({},t)[r]||Object.keys(f({},n)).join("")!=e})?function(t,n){for(var r=u(t),f=arguments.length,a=1,s=i.f,l=o.f;f>a;)for(var h,v=c(arguments[a++]),p=s?e(v).concat(s(v)):e(v),d=p.length,y=0;d>y;)l.call(v,h=p[y++])&&(r[h]=v[h]);return r}:f},{109:109,34:34,45:45,73:73,76:76,77:77}],66:[function(t,n,r){var e=t(7),i=t(68),o=t(30),u=t(93)("IE_PROTO"),c=function(){},f="prototype",a=function(){var n,r=t(29)("iframe"),e=o.length;for(r.style.display="none",t(41).appendChild(r),r.src="javascript:",(n=r.contentWindow.document).open(),n.write("<script>document.F=Object<\/script>"),n.close(),a=n.F;e--;)delete a[f][o[e]];return a()};n.exports=Object.create||function(t,n){var r;return null!==t?(c[f]=e(t),r=new c,c[f]=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},{29:29,30:30,41:41,68:68,7:7,93:93}],67:[function(t,n,r){var e=t(7),i=t(42),o=t(110),u=Object.defineProperty;r.f=t(28)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},{110:110,28:28,42:42,7:7}],68:[function(t,n,r){var e=t(67),i=t(7),o=t(76);n.exports=t(28)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},{28:28,67:67,7:7,76:76}],69:[function(t,n,r){n.exports=t(58)||!t(34)(function(){var n=Math.random();__defineSetter__.call(null,n,function(){}),delete t(38)[n]})},{34:34,38:38,58:58}],70:[function(t,n,r){var e=t(77),i=t(85),o=t(107),u=t(110),c=t(39),f=t(42),a=Object.getOwnPropertyDescriptor;r.f=t(28)?a:function(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},{107:107,110:110,28:28,39:39,42:42,77:77,85:85}],71:[function(t,n,r){var e=t(107),i=t(72).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};n.exports.f=function(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},{107:107,72:72}],72:[function(t,n,r){var e=t(75),i=t(30).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},{30:30,75:75}],73:[function(t,n,r){r.f=Object.getOwnPropertySymbols},{}],74:[function(t,n,r){var e=t(39),i=t(109),o=t(93)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},{109:109,39:39,93:93}],75:[function(t,n,r){var e=t(39),i=t(107),o=t(11)(!1),u=t(93)("IE_PROTO");n.exports=function(t,n){var r,c=i(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~o(a,r)||a.push(r));return a}},{107:107,11:11,39:39,93:93}],76:[function(t,n,r){var e=t(75),i=t(30);n.exports=Object.keys||function(t){return e(t,i)}},{30:30,75:75}],77:[function(t,n,r){r.f={}.propertyIsEnumerable},{}],78:[function(t,n,r){var e=t(32),i=t(23),o=t(34);n.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},{23:23,32:32,34:34}],79:[function(t,n,r){var e=t(76),i=t(107),o=t(77).f;n.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),f=c.length,a=0,s=[];f>a;)o.call(u,r=c[a++])&&s.push(t?[r,u[r]]:u[r]);return s}}},{107:107,76:76,77:77}],80:[function(t,n,r){var e=t(72),i=t(73),o=t(7),u=t(38).Reflect;n.exports=u&&u.ownKeys||function(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},{38:38,7:7,72:72,73:73}],81:[function(t,n,r){var e=t(38).parseFloat,i=t(102).trim;n.exports=1/e(t(103)+"-0")!=-1/0?function(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},{102:102,103:103,38:38}],82:[function(t,n,r){var e=t(38).parseInt,i=t(102).trim,o=t(103),u=/^[\-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},{102:102,103:103,38:38}],83:[function(t,n,r){"use strict";var e=t(84),i=t(44),o=t(3);n.exports=function(){for(var t=o(this),n=arguments.length,r=Array(n),u=0,c=e._,f=!1;n>u;)(r[u]=arguments[u++])===c&&(f=!0);return function(){var e,o=this,u=arguments.length,a=0,s=0;if(!f&&!u)return i(t,r,o);if(e=r.slice(),f)for(;n>a;a++)e[a]===c&&(e[a]=arguments[s++]);for(;u>s;)e.push(arguments[s++]);return i(t,e,o)}}},{3:3,44:44,84:84}],84:[function(t,n,r){n.exports=t(38)},{38:38}],85:[function(t,n,r){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],86:[function(t,n,r){var e=t(87);n.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},{87:87}],87:[function(t,n,r){var e=t(38),i=t(40),o=t(39),u=t(114)("src"),c="toString",f=Function[c],a=(""+f).split(c);t(23).inspectSource=function(t){return f.call(t)},(n.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,c,function(){return"function"==typeof this&&this[u]||f.call(this)})},{114:114,23:23,38:38,39:39,40:40}],88:[function(t,n,r){n.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},{}],89:[function(t,n,r){n.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},{}],90:[function(t,n,r){var e=t(49),i=t(7),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,r,e){try{(e=t(25)(Function.call,t(70).f(Object.prototype,"__proto__").set,2))(n,[]),r=!(n instanceof Array)}catch(t){r=!0}return function(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:o}},{25:25,49:49,7:7,70:70}],91:[function(t,n,r){"use strict";var e=t(38),i=t(67),o=t(28),u=t(117)("species");n.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},{117:117,28:28,38:38,67:67}],92:[function(t,n,r){var e=t(67).f,i=t(39),o=t(117)("toStringTag");n.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},{117:117,39:39,67:67}],93:[function(t,n,r){var e=t(94)("keys"),i=t(114);n.exports=function(t){return e[t]||(e[t]=i(t))}},{114:114,94:94}],94:[function(t,n,r){var e=t(38),i="__core-js_shared__",o=e[i]||(e[i]={});n.exports=function(t){return o[t]||(o[t]={})}},{38:38}],95:[function(t,n,r){var e=t(7),i=t(3),o=t(117)("species");n.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},{117:117,3:3,7:7}],96:[function(t,n,r){var e=t(34);n.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},{34:34}],97:[function(t,n,r){var e=t(106),i=t(27);n.exports=function(t){return function(n,r){var o,u,c=String(i(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(o=c.charCodeAt(f),o<55296||o>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):o:t?c.slice(f,f+2):u-56320+(o-55296<<10)+65536)}}},{106:106,27:27}],98:[function(t,n,r){var e=t(50),i=t(27);n.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},{27:27,50:50}],99:[function(t,n,r){var e=t(32),i=t(34),o=t(27),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};n.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},{27:27,32:32,34:34}],100:[function(t,n,r){var e=t(108),i=t(101),o=t(27);n.exports=function(t,n,r,u){var c=String(o(t)),f=c.length,a=void 0===r?" ":String(r),s=e(n);if(s<=f||""==a)return c;var l=s-f,h=i.call(a,Math.ceil(l/a.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{101:101,108:108,27:27}],101:[function(t,n,r){"use strict";var e=t(106),i=t(27);n.exports=function(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},{106:106,27:27}],102:[function(t,n,r){var e=t(32),i=t(27),o=t(34),u=t(103),c="["+u+"]",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(t,n,r){var i={},c=o(function(){return!!u[t]()||"​"!="​"[t]()}),a=i[t]=c?n(h):u[t];r&&(i[r]=a),e(e.P+e.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};n.exports=l},{103:103,27:27,32:32,34:34}],103:[function(t,n,r){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},{}],104:[function(t,n,r){var e,i,o,u=t(25),c=t(44),f=t(41),a=t(29),s=t(38),l=s.process,h=s.setImmediate,v=s.clearImmediate,p=s.MessageChannel,d=0,y={},g="onreadystatechange",b=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){b.call(t.data)};h&&v||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++d]=function(){c("function"==typeof t?t:Function(t),n)},e(d),d},v=function(t){delete y[t]},"process"==t(18)(l)?e=function(t){l.nextTick(u(b,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=x,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",x,!1)):e=g in a("script")?function(t){f.appendChild(a("script"))[g]=function(){f.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),n.exports={set:h,clear:v}},{18:18,25:25,29:29,38:38,41:41,44:44}],105:[function(t,n,r){var e=t(106),i=Math.max,o=Math.min;n.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},{106:106}],106:[function(t,n,r){var e=Math.ceil,i=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},{}],107:[function(t,n,r){var e=t(45),i=t(27);n.exports=function(t){return e(i(t))}},{27:27,45:45}],108:[function(t,n,r){var e=t(106),i=Math.min;n.exports=function(t){return t>0?i(e(t),9007199254740991):0}},{106:106}],109:[function(t,n,r){var e=t(27);n.exports=function(t){return Object(e(t))}},{27:27}],110:[function(t,n,r){var e=t(49);n.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},{49:49}],111:[function(t,n,r){"use strict";if(t(28)){var e=t(58),i=t(38),o=t(34),u=t(32),c=t(113),f=t(112),a=t(25),s=t(6),l=t(85),h=t(40),v=t(86),p=t(106),d=t(108),y=t(105),g=t(110),b=t(39),x=t(89),m=t(17),w=t(49),S=t(109),_=t(46),E=t(66),O=t(74),F=t(72).f,P=t(118),M=t(114),A=t(117),I=t(12),j=t(11),N=t(95),k=t(130),R=t(56),T=t(54),L=t(91),C=t(9),U=t(8),G=t(67),D=t(70),W=G.f,B=D.f,V=i.RangeError,z=i.TypeError,K=i.Uint8Array,J="ArrayBuffer",Y="Shared"+J,q="BYTES_PER_ELEMENT",X="prototype",$=Array[X],H=f.ArrayBuffer,Z=f.DataView,Q=I(0),tt=I(2),nt=I(3),rt=I(4),et=I(5),it=I(6),ot=j(!0),ut=j(!1),ct=k.values,ft=k.keys,at=k.entries,st=$.lastIndexOf,lt=$.reduce,ht=$.reduceRight,vt=$.join,pt=$.sort,dt=$.slice,yt=$.toString,gt=$.toLocaleString,bt=A("iterator"),xt=A("toStringTag"),mt=M("typed_constructor"),wt=M("def_constructor"),St=c.CONSTR,_t=c.TYPED,Et=c.VIEW,Ot="Wrong length!",Ft=I(1,function(t,n){return Nt(N(t,t[wt]),n)}),Pt=o(function(){return 1===new K(new Uint16Array([1]).buffer)[0]}),Mt=!!K&&!!K[X].set&&o(function(){new K(1).set({})}),At=function(t,n){if(void 0===t)throw z(Ot);var r=+t,e=d(t);if(n&&!x(r,e))throw V(Ot);return e},It=function(t,n){var r=p(t);if(r<0||r%n)throw V("Wrong offset!");return r},jt=function(t){if(w(t)&&_t in t)return t;throw z(t+" is not a typed array!")},Nt=function(t,n){if(!(w(t)&&mt in t))throw z("It is not a typed array constructor!");return new t(n)},kt=function(t,n){return Rt(N(t,t[wt]),n)},Rt=function(t,n){for(var r=0,e=n.length,i=Nt(t,e);e>r;)i[r]=n[r++];return i},Tt=function(t,n,r){W(t,n,{get:function(){return this._d[r]}})},Lt=function(t){var n,r,e,i,o,u,c=S(t),f=arguments.length,s=f>1?arguments[1]:void 0,l=void 0!==s,h=P(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&f>2&&(s=a(s,arguments[2],2)),n=0,r=d(c.length),i=Nt(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},Ct=function(){for(var t=0,n=arguments.length,r=Nt(this,n);n>t;)r[t]=arguments[t++];return r},Ut=!!K&&o(function(){gt.call(new K(1))}),Gt=function(){return gt.apply(Ut?dt.call(jt(this)):jt(this),arguments)},Dt={copyWithin:function(t,n){return U.call(jt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return rt(jt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return C.apply(jt(this),arguments)},filter:function(t){return kt(this,tt(jt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return et(jt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(jt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Q(jt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return ut(jt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(jt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return vt.apply(jt(this),arguments)},lastIndexOf:function(t){return st.apply(jt(this),arguments)},map:function(t){return Ft(jt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply(jt(this),arguments)},reduceRight:function(t){return ht.apply(jt(this),arguments)},reverse:function(){for(var t,n=this,r=jt(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function(t){return nt(jt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return pt.call(jt(this),t)},subarray:function(t,n){var r=jt(this),e=r.length,i=y(t,e);return new(N(r,r[wt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:y(n,e))-i))}},Wt=function(t,n){return kt(this,dt.call(jt(this),t,n))},Bt=function(t){jt(this);var n=It(arguments[1],1),r=this.length,e=S(t),i=d(e.length),o=0;if(i+n>r)throw V(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function(){return at.call(jt(this))},keys:function(){return ft.call(jt(this))},values:function(){return ct.call(jt(this))}},zt=function(t,n){return w(t)&&t[_t]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Kt=function(t,n){return zt(t,n=g(n,!0))?l(2,t[n]):B(t,n)},Jt=function(t,n,r){return!(zt(t,n=g(n,!0))&&w(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?W(t,n,r):(t[n]=r.value,t)};St||(D.f=Kt,G.f=Jt),u(u.S+u.F*!St,"Object",{getOwnPropertyDescriptor:Kt,defineProperty:Jt}),o(function(){yt.call({})})&&(yt=gt=function(){return vt.call(this)});var Yt=v({},Dt);v(Yt,Vt),h(Yt,bt,Vt.values),v(Yt,{slice:Wt,set:Bt,constructor:function(){},toString:yt,toLocaleString:Gt}),Tt(Yt,"buffer","b"),Tt(Yt,"byteOffset","o"),Tt(Yt,"byteLength","l"),Tt(Yt,"length","e"),W(Yt,xt,{get:function(){return this[_t]}}),n.exports=function(t,n,r,f){var a=t+((f=!!f)?"Clamped":"")+"Array",l="Uint8Array"!=a,v="get"+t,p="set"+t,y=i[a],g=y||{},b=y&&O(y),x=!y||!c.ABV,S={},_=y&&y[X],P=function(t,r){var e=t._d;return e.v[v](r*n+e.o,Pt)},M=function(t,r,e){var i=t._d;f&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,Pt)},A=function(t,n){W(t,n,{get:function(){return P(this,n)},set:function(t){return M(this,n,t)},enumerable:!0})};x?(y=r(function(t,r,e,i){s(t,y,a,"_d");var o,u,c,f,l=0,v=0;if(w(r)){if(!(r instanceof H||(f=m(r))==J||f==Y))return _t in r?Rt(y,r):Lt.call(y,r);o=r,v=It(e,n);var p=r.byteLength;if(void 0===i){if(p%n)throw V(Ot);if((u=p-v)<0)throw V(Ot)}else if((u=d(i)*n)+v>p)throw V(Ot);c=u/n}else c=At(r,!0),u=c*n,o=new H(u);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new Z(o)});l<c;)A(t,l++)}),_=y[X]=E(Yt),h(_,"constructor",y)):T(function(t){new y(null),new y(t)},!0)||(y=r(function(t,r,e,i){s(t,y,a);var o;return w(r)?r instanceof H||(o=m(r))==J||o==Y?void 0!==i?new g(r,It(e,n),i):void 0!==e?new g(r,It(e,n)):new g(r):_t in r?Rt(y,r):Lt.call(y,r):new g(At(r,l))}),Q(b!==Function.prototype?F(g).concat(F(b)):F(g),function(t){t in y||h(y,t,g[t])}),y[X]=_,e||(_.constructor=y));var I=_[bt],j=!!I&&("values"==I.name||void 0==I.name),N=Vt.values;h(y,mt,!0),h(_,_t,a),h(_,Et,!0),h(_,wt,y),(f?new y(1)[xt]==a:xt in _)||W(_,xt,{get:function(){return a}}),S[a]=y,u(u.G+u.W+u.F*(y!=g),S),u(u.S,a,{BYTES_PER_ELEMENT:n,from:Lt,of:Ct}),q in _||h(_,q,n),u(u.P,a,Dt),L(a),u(u.P+u.F*Mt,a,{set:Bt}),u(u.P+u.F*!j,a,Vt),u(u.P+u.F*(_.toString!=yt),a,{toString:yt}),u(u.P+u.F*o(function(){new y(1).slice()}),a,{slice:Wt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new y([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),a,{toLocaleString:Gt}),R[a]=j?I:N,e||j||h(_,bt,N)}}else n.exports=function(){}},{105:105,106:106,108:108,109:109,11:11,110:110,112:112,113:113,114:114,117:117,118:118,12:12,130:130,17:17,25:25,28:28,32:32,34:34,38:38,39:39,40:40,46:46,49:49,54:54,56:56,58:58,6:6,66:66,67:67,70:70,72:72,74:74,8:8,85:85,86:86,89:89,9:9,91:91,95:95}],112:[function(t,n,r){"use strict";var e=t(38),i=t(28),o=t(58),u=t(113),c=t(40),f=t(86),a=t(34),s=t(6),l=t(106),h=t(108),v=t(72).f,p=t(67).f,d=t(9),y=t(92),g="ArrayBuffer",b="DataView",x="prototype",m="Wrong length!",w="Wrong index!",S=e[g],_=e[b],E=e.Math,O=e.RangeError,F=e.Infinity,P=S,M=E.abs,A=E.pow,I=E.floor,j=E.log,N=E.LN2,k="buffer",R="byteLength",T="byteOffset",L=i?"_b":k,C=i?"_l":R,U=i?"_o":T,G=function(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?A(2,-24)-A(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=M(t))!=t||t===F?(i=t!=t?1:0,e=f):(e=I(j(t)/N),t*(o=A(2,-e))<1&&(e--,o*=2),(t+=e+a>=1?s/o:s*A(2,1-a))*o>=2&&(e++,o/=2),e+a>=f?(i=0,e=f):e+a>=1?(i=(t*o-1)*A(2,n),e+=a):(i=t*A(2,a-1)*A(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u},D=function(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;c>0;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-F:F;e+=A(2,n),s-=u}return(a?-1:1)*e*A(2,s-n)},W=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},B=function(t){return[255&t]},V=function(t){return[255&t,t>>8&255]},z=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},K=function(t){return G(t,52,8)},J=function(t){return G(t,23,4)},Y=function(t,n,r){p(t[x],n,{get:function(){return this[r]}})},q=function(t,n,r,e){var i=+r,o=l(i);if(i!=o||o<0||o+n>t[C])throw O(w);var u=t[L]._b,c=o+t[U],f=u.slice(c,c+n);return e?f:f.reverse()},X=function(t,n,r,e,i,o){var u=+r,c=l(u);if(u!=c||c<0||c+n>t[C])throw O(w);for(var f=t[L]._b,a=c+t[U],s=e(+i),h=0;h<n;h++)f[a+h]=s[o?h:n-h-1]},$=function(t,n){s(t,S,g);var r=+n,e=h(r);if(r!=e)throw O(m);return e};if(u.ABV){if(!a(function(){new S})||!a(function(){new S(.5)})){for(var H,Z=(S=function(t){return new P($(this,t))})[x]=P[x],Q=v(P),tt=0;Q.length>tt;)(H=Q[tt++])in S||c(S,H,P[H]);o||(Z.constructor=S)}var nt=new _(new S(2)),rt=_[x].setInt8;nt.setInt8(0,2147483648),nt.setInt8(1,2147483649),!nt.getInt8(0)&&nt.getInt8(1)||f(_[x],{setInt8:function(t,n){rt.call(this,t,n<<24>>24)},setUint8:function(t,n){rt.call(this,t,n<<24>>24)}},!0)}else S=function(t){var n=$(this,t);this._b=d.call(Array(n),0),this[C]=n},_=function(t,n,r){s(this,_,b),s(t,S,b);var e=t[C],i=l(n);if(i<0||i>e)throw O("Wrong offset!");if(r=void 0===r?e-i:h(r),i+r>e)throw O(m);this[L]=t,this[U]=i,this[C]=r},i&&(Y(S,R,"_l"),Y(_,k,"_b"),Y(_,R,"_l"),Y(_,T,"_o")),f(_[x],{getInt8:function(t){return q(this,1,t)[0]<<24>>24},getUint8:function(t){return q(this,1,t)[0]},getInt16:function(t){var n=q(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=q(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return W(q(this,4,t,arguments[1]))},getUint32:function(t){return W(q(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return D(q(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return D(q(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){X(this,1,t,B,n)},setUint8:function(t,n){X(this,1,t,B,n)},setInt16:function(t,n){X(this,2,t,V,n,arguments[2])},setUint16:function(t,n){X(this,2,t,V,n,arguments[2])},setInt32:function(t,n){X(this,4,t,z,n,arguments[2])},setUint32:function(t,n){X(this,4,t,z,n,arguments[2])},setFloat32:function(t,n){X(this,4,t,J,n,arguments[2])},setFloat64:function(t,n){X(this,8,t,K,n,arguments[2])}});y(S,g),y(_,b),c(_[x],u.VIEW,!0),r[g]=S,r[b]=_},{106:106,108:108,113:113,28:28,34:34,38:38,40:40,58:58,6:6,67:67,72:72,86:86,9:9,92:92}],113:[function(t,n,r){for(var e,i=t(38),o=t(40),u=t(114),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,v="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[v[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;n.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},{114:114,38:38,40:40}],114:[function(t,n,r){var e=0,i=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},{}],115:[function(t,n,r){var e=t(38),i=t(23),o=t(58),u=t(116),c=t(67).f;n.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},{116:116,23:23,38:38,58:58,67:67}],116:[function(t,n,r){r.f=t(117)},{117:117}],117:[function(t,n,r){var e=t(94)("wks"),i=t(114),o=t(38).Symbol,u="function"==typeof o;(n.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},{114:114,38:38,94:94}],118:[function(t,n,r){var e=t(17),i=t(117)("iterator"),o=t(56);n.exports=t(23).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},{117:117,17:17,23:23,56:56}],119:[function(t,n,r){var e=t(32),i=t(88)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function(t){return i(t)}})},{32:32,88:88}],120:[function(t,n,r){var e=t(32);e(e.P,"Array",{copyWithin:t(8)}),t(5)("copyWithin")},{32:32,5:5,8:8}],121:[function(t,n,r){"use strict";var e=t(32),i=t(12)(4);e(e.P+e.F*!t(96)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],122:[function(t,n,r){var e=t(32);e(e.P,"Array",{fill:t(9)}),t(5)("fill")},{32:32,5:5,9:9}],123:[function(t,n,r){"use strict";var e=t(32),i=t(12)(2);e(e.P+e.F*!t(96)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],124:[function(t,n,r){"use strict";var e=t(32),i=t(12)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,32:32,5:5}],125:[function(t,n,r){"use strict";var e=t(32),i=t(12)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,32:32,5:5}],126:[function(t,n,r){"use strict";var e=t(32),i=t(12)(0),o=t(96)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],127:[function(t,n,r){"use strict";var e=t(25),i=t(32),o=t(109),u=t(51),c=t(46),f=t(108),a=t(24),s=t(118);i(i.S+i.F*!t(54)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,y=void 0!==d,g=0,b=s(h);if(y&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==b||v==Array&&c(b))for(n=f(h.length),r=new v(n);n>g;g++)a(r,g,y?d(h[g],g):h[g]);else for(l=b.call(h),r=new v;!(i=l.next()).done;g++)a(r,g,y?u(l,d,[i.value,g],!0):i.value);return r.length=g,r}})},{108:108,109:109,118:118,24:24,25:25,32:32,46:46,51:51,54:54}],128:[function(t,n,r){"use strict";var e=t(32),i=t(11)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!t(96)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},{11:11,32:32,96:96}],129:[function(t,n,r){var e=t(32);e(e.S,"Array",{isArray:t(47)})},{32:32,47:47}],130:[function(t,n,r){"use strict";var e=t(5),i=t(55),o=t(56),u=t(107);n.exports=t(53)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},{107:107,5:5,53:53,55:55,56:56}],131:[function(t,n,r){"use strict";var e=t(32),i=t(107),o=[].join;e(e.P+e.F*(t(45)!=Object||!t(96)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},{107:107,32:32,45:45,96:96}],132:[function(t,n,r){"use strict";var e=t(32),i=t(107),o=t(106),u=t(108),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!t(96)(c)),"Array",{lastIndexOf:function(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},{106:106,107:107,108:108,32:32,96:96}],133:[function(t,n,r){"use strict";var e=t(32),i=t(12)(1);e(e.P+e.F*!t(96)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],134:[function(t,n,r){"use strict";var e=t(32),i=t(24);e(e.S+e.F*t(34)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},{24:24,32:32,34:34}],135:[function(t,n,r){"use strict";var e=t(32),i=t(13);e(e.P+e.F*!t(96)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},{13:13,32:32,96:96}],136:[function(t,n,r){"use strict";var e=t(32),i=t(13);e(e.P+e.F*!t(96)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},{13:13,32:32,96:96}],137:[function(t,n,r){"use strict";var e=t(32),i=t(41),o=t(18),u=t(105),c=t(108),f=[].slice;e(e.P+e.F*t(34)(function(){i&&f.call(i)}),"Array",{slice:function(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return f.call(this,t,n);for(var i=u(t,r),a=u(n,r),s=c(a-i),l=Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},{105:105,108:108,18:18,32:32,34:34,41:41}],138:[function(t,n,r){"use strict";var e=t(32),i=t(12)(3);e(e.P+e.F*!t(96)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],139:[function(t,n,r){"use strict";var e=t(32),i=t(3),o=t(109),u=t(34),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(void 0)})||!u(function(){f.sort(null)})||!t(96)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},{109:109,3:3,32:32,34:34,96:96}],140:[function(t,n,r){t(91)("Array")},{91:91}],141:[function(t,n,r){var e=t(32);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},{32:32}],142:[function(t,n,r){"use strict";var e=t(32),i=t(34),o=Date.prototype.getTime,u=function(t){return t>9?t:"0"+t};e(e.P+e.F*(i(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!i(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}})},{32:32,34:34}],143:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110);e(e.P+e.F*t(34)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},{109:109,110:110,32:32,34:34}],144:[function(t,n,r){var e=t(117)("toPrimitive"),i=Date.prototype;e in i||t(40)(i,e,t(26))},{117:117,26:26,40:40}],145:[function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&t(87)(e,o,function(){var t=c.call(this);return t===t?u.call(this):i})},{87:87}],146:[function(t,n,r){var e=t(32);e(e.P,"Function",{bind:t(16)})},{16:16,32:32}],147:[function(t,n,r){"use strict";var e=t(49),i=t(74),o=t(117)("hasInstance"),u=Function.prototype;o in u||t(67).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},{117:117,49:49,67:67,74:74}],148:[function(t,n,r){var e=t(67).f,i=t(85),o=t(39),u=Function.prototype,c=/^\s*function ([^ (]*)/,f="name",a=Object.isExtensible||function(){return!0};f in u||t(28)&&e(u,f,{configurable:!0,get:function(){try{var t=this,n=(""+t).match(c)[1];return o(t,f)||!a(t)||e(t,f,i(5,n)),n}catch(t){return""}}})},{28:28,39:39,67:67,85:85}],149:[function(t,n,r){"use strict";var e=t(19);n.exports=t(22)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=e.getEntry(this,t);return n&&n.v},set:function(t,n){return e.def(this,0===t?0:t,n)}},e,!0)},{19:19,22:22}],150:[function(t,n,r){var e=t(32),i=t(60),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},{32:32,60:60}],151:[function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=t(32),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},{32:32}],152:[function(t,n,r){var e=t(32),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{32:32}],153:[function(t,n,r){var e=t(32),i=t(61);e(e.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},{32:32,61:61}],154:[function(t,n,r){var e=t(32);e(e.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{32:32}],155:[function(t,n,r){var e=t(32),i=Math.exp;e(e.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},{32:32}],156:[function(t,n,r){var e=t(32),i=t(59);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},{32:32,59:59}],157:[function(t,n,r){var e=t(32),i=t(61),o=Math.pow,u=o(2,-52),c=o(2,-23),f=o(2,127)*(2-c),a=o(2,-126),s=function(t){return t+1/u-1/u};e(e.S,"Math",{fround:function(t){var n,r,e=Math.abs(t),o=i(t);return e<a?o*s(e/a/c)*a*c:(n=(1+c/u)*e,r=n-(n-e),r>f||r!=r?o*(1/0):o*r)}})},{32:32,61:61}],158:[function(t,n,r){var e=t(32),i=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,o=0,u=0,c=arguments.length,f=0;u<c;)r=i(arguments[u++]),f<r?(e=f/r,o=o*e*e+1,f=r):r>0?(e=r/f,o+=e*e):o+=r;return f===1/0?1/0:f*Math.sqrt(o)}})},{32:32}],159:[function(t,n,r){var e=t(32),i=Math.imul;e(e.S+e.F*t(34)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},{32:32,34:34}],160:[function(t,n,r){var e=t(32);e(e.S,"Math",{log10:function(t){return Math.log(t)/Math.LN10}})},{32:32}],161:[function(t,n,r){var e=t(32);e(e.S,"Math",{log1p:t(60)})},{32:32,60:60}],162:[function(t,n,r){var e=t(32);e(e.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},{32:32}],163:[function(t,n,r){var e=t(32);e(e.S,"Math",{sign:t(61)})},{32:32,61:61}],164:[function(t,n,r){var e=t(32),i=t(59),o=Math.exp;e(e.S+e.F*t(34)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},{32:32,34:34,59:59}],165:[function(t,n,r){var e=t(32),i=t(59),o=Math.exp;e(e.S,"Math",{tanh:function(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},{32:32,59:59}],166:[function(t,n,r){var e=t(32);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},{32:32}],167:[function(t,n,r){"use strict";var e=t(38),i=t(39),o=t(18),u=t(43),c=t(110),f=t(34),a=t(72).f,s=t(70).f,l=t(67).f,h=t(102).trim,v="Number",p=e[v],d=p,y=p.prototype,g=o(t(66)(y))==v,b="trim"in String.prototype,x=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var r,e,i,o=(n=b?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,f=n.slice(2),a=0,s=f.length;a<s;a++)if((u=f.charCodeAt(a))<48||u>i)return NaN;return parseInt(f,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(g?f(function(){y.valueOf.call(r)}):o(r)!=v)?u(new d(x(n)),r,p):x(n)};for(var m,w=t(28)?a(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(d,m=w[S])&&!i(p,m)&&l(p,m,s(d,m));p.prototype=y,y.constructor=p,t(87)(e,v,p)}},{102:102,110:110,18:18,28:28,34:34,38:38,39:39,43:43,66:66,67:67,70:70,72:72,87:87}],168:[function(t,n,r){var e=t(32);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},{32:32}],169:[function(t,n,r){var e=t(32),i=t(38).isFinite;e(e.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},{32:32,38:38}],170:[function(t,n,r){var e=t(32);e(e.S,"Number",{isInteger:t(48)})},{32:32,48:48}],171:[function(t,n,r){var e=t(32);e(e.S,"Number",{isNaN:function(t){return t!=t}})},{32:32}],172:[function(t,n,r){var e=t(32),i=t(48),o=Math.abs;e(e.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},{32:32,48:48}],173:[function(t,n,r){var e=t(32);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{32:32}],174:[function(t,n,r){var e=t(32);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{32:32}],175:[function(t,n,r){var e=t(32),i=t(81);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},{32:32,81:81}],176:[function(t,n,r){var e=t(32),i=t(82);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},{32:32,82:82}],177:[function(t,n,r){"use strict";var e=t(32),i=t(106),o=t(4),u=t(101),c=1..toFixed,f=Math.floor,a=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l="0",h=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*a[r],a[r]=e%1e7,e=f(e/1e7)},v=function(t){for(var n=6,r=0;--n>=0;)r+=a[n],a[n]=f(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==a[t]){var r=String(a[t]);n=""===n?r:n+u.call(l,7-r.length)+r}return n},d=function(t,n,r){return 0===n?r:n%2==1?d(t,n-1,r*t):d(t*t,n/2,r)},y=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(34)(function(){c.call({})})),"Number",{toFixed:function(t){var n,r,e,c,f=o(this,s),a=i(t),g="",b=l;if(a<0||a>20)throw RangeError(s);if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(g="-",f=-f),f>1e-21)if(n=y(f*d(2,69,1))-69,r=n<0?f*d(2,-n,1):f/d(2,n,1),r*=4503599627370496,(n=52-n)>0){for(h(0,r),e=a;e>=7;)h(1e7,0),e-=7;for(h(d(10,e,1),0),e=n-1;e>=23;)v(1<<23),e-=23;v(1<<e),h(1,1),v(2),b=p()}else h(0,r),h(1<<-n,0),b=p()+u.call(l,a);return a>0?(c=b.length,b=g+(c<=a?"0."+u.call(l,a-c)+b:b.slice(0,c-a)+"."+b.slice(c-a))):b=g+b,b}})},{101:101,106:106,32:32,34:34,4:4}],178:[function(t,n,r){"use strict";var e=t(32),i=t(34),o=t(4),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},{32:32,34:34,4:4}],179:[function(t,n,r){var e=t(32);e(e.S+e.F,"Object",{assign:t(65)})},{32:32,65:65}],180:[function(t,n,r){var e=t(32);e(e.S,"Object",{create:t(66)})},{32:32,66:66}],181:[function(t,n,r){var e=t(32);e(e.S+e.F*!t(28),"Object",{defineProperties:t(68)})},{28:28,32:32,68:68}],182:[function(t,n,r){var e=t(32);e(e.S+e.F*!t(28),"Object",{defineProperty:t(67).f})},{28:28,32:32,67:67}],183:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("freeze",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],184:[function(t,n,r){var e=t(107),i=t(70).f;t(78)("getOwnPropertyDescriptor",function(){return function(t,n){return i(e(t),n)}})},{107:107,70:70,78:78}],185:[function(t,n,r){t(78)("getOwnPropertyNames",function(){return t(71).f})},{71:71,78:78}],186:[function(t,n,r){var e=t(109),i=t(74);t(78)("getPrototypeOf",function(){return function(t){return i(e(t))}})},{109:109,74:74,78:78}],187:[function(t,n,r){var e=t(49);t(78)("isExtensible",function(t){return function(n){return!!e(n)&&(!t||t(n))}})},{49:49,78:78}],188:[function(t,n,r){var e=t(49);t(78)("isFrozen",function(t){return function(n){return!e(n)||!!t&&t(n)}})},{49:49,78:78}],189:[function(t,n,r){var e=t(49);t(78)("isSealed",function(t){return function(n){return!e(n)||!!t&&t(n)}})},{49:49,78:78}],190:[function(t,n,r){var e=t(32);e(e.S,"Object",{is:t(89)})},{32:32,89:89}],191:[function(t,n,r){var e=t(109),i=t(76);t(78)("keys",function(){return function(t){return i(e(t))}})},{109:109,76:76,78:78}],192:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("preventExtensions",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],193:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("seal",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],194:[function(t,n,r){var e=t(32);e(e.S,"Object",{setPrototypeOf:t(90).set})},{32:32,90:90}],195:[function(t,n,r){"use strict";var e=t(17),i={};i[t(117)("toStringTag")]="z",i+""!="[object z]"&&t(87)(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0)},{117:117,17:17,87:87}],196:[function(t,n,r){var e=t(32),i=t(81);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},{32:32,81:81}],197:[function(t,n,r){var e=t(32),i=t(82);e(e.G+e.F*(parseInt!=i),{parseInt:i})},{32:32,82:82}],198:[function(t,n,r){"use strict";var e,i,o,u=t(58),c=t(38),f=t(25),a=t(17),s=t(32),l=t(49),h=t(3),v=t(6),p=t(37),d=t(95),y=t(104).set,g=t(64)(),b="Promise",x=c.TypeError,m=c.process,w=c[b],S="process"==a(m=c.process),_=function(){},E=!!function(){try{var n=w.resolve(1),r=(n.constructor={})[t(117)("species")]=function(t){t(_,_)};return(S||"function"==typeof PromiseRejectionEvent)&&n.then(_)instanceof r}catch(t){}}(),O=function(t,n){return t===n||t===w&&n===o},F=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},P=function(t){return O(w,t)?new M(t):new i(t)},M=i=function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw x("Bad Promise constructor");n=t,r=e}),this.resolve=h(n),this.reject=h(r)},A=function(t){try{t()}catch(t){return{error:t}}},I=function(t,n){if(!t._n){t._n=!0;var r=t._c;g(function(){for(var e=t._v,i=1==t._s,o=0;r.length>o;)!function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,f=n.reject,a=n.domain;try{u?(i||(2==t._h&&k(t),t._h=1),!0===u?r=e:(a&&a.enter(),r=u(e),a&&a.exit()),r===n.promise?f(x("Promise-chain cycle")):(o=F(r))?o.call(r,c,f):c(r)):f(e)}catch(t){f(t)}}(r[o++]);t._c=[],t._n=!1,n&&!t._h&&j(t)})}},j=function(t){y.call(c,function(){var n,r,e,i=t._v;if(N(t)&&(n=A(function(){S?m.emit("unhandledRejection",i,t):(r=c.onunhandledrejection)?r({promise:t,reason:i}):(e=c.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=S||N(t)?2:1),t._a=void 0,n)throw n.error})},N=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if((n=r[e++]).fail||!N(n.promise))return!1;return!0},k=function(t){y.call(c,function(){var n;S?m.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},T=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw x("Promise can't be resolved itself");(n=F(t))?g(function(){var e={_w:r,_d:!1};try{n.call(t,f(T,e,1),f(R,e,1))}catch(t){R.call(e,t)}}):(r._v=t,r._s=1,I(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};E||(w=function(t){v(this,w,b,"_h"),h(t),e.call(this);try{t(f(T,this,1),f(R,this,1))}catch(t){R.call(this,t)}},e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=t(86)(w.prototype,{then:function(t,n){var r=P(d(this,w));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=S?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&I(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),M=function(){var t=new e;this.promise=t,this.resolve=f(T,t,1),this.reject=f(R,t,1)}),s(s.G+s.W+s.F*!E,{Promise:w}),t(92)(w,b),t(91)(b),o=t(23)[b],s(s.S+s.F*!E,b,{reject:function(t){var n=P(this);return(0,n.reject)(t),n.promise}}),s(s.S+s.F*(u||!E),b,{resolve:function(t){if(t instanceof w&&O(t.constructor,this))return t;var n=P(this);return(0,n.resolve)(t),n.promise}}),s(s.S+s.F*!(E&&t(54)(function(t){w.all(t).catch(_)})),b,{all:function(t){var n=this,r=P(n),e=r.resolve,i=r.reject,o=A(function(){var r=[],o=0,u=1;p(t,!1,function(t){var c=o++,f=!1;r.push(void 0),u++,n.resolve(t).then(function(t){f||(f=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o&&i(o.error),r.promise},race:function(t){var n=this,r=P(n),e=r.reject,i=A(function(){p(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i&&e(i.error),r.promise}})},{104:104,117:117,17:17,23:23,25:25,3:3,32:32,37:37,38:38,49:49,54:54,58:58,6:6,64:64,86:86,91:91,92:92,95:95}],199:[function(t,n,r){var e=t(32),i=t(3),o=t(7),u=(t(38).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!t(34)(function(){u(function(){})}),"Reflect",{apply:function(t,n,r){var e=i(t),f=o(r);return u?u(e,n,f):c.call(e,n,f)}})},{3:3,32:32,34:34,38:38,7:7}],200:[function(t,n,r){var e=t(32),i=t(66),o=t(3),u=t(7),c=t(49),f=t(34),a=t(16),s=(t(38).Reflect||{}).construct,l=f(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!f(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(a.apply(t,e))}var f=r.prototype,v=i(c(f)?f:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},{16:16,3:3,32:32,34:34,38:38,49:49,66:66,7:7}],201:[function(t,n,r){var e=t(67),i=t(32),o=t(7),u=t(110);i(i.S+i.F*t(34)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},{110:110,32:32,34:34,67:67,7:7}],202:[function(t,n,r){var e=t(32),i=t(70).f,o=t(7);e(e.S,"Reflect",{deleteProperty:function(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},{32:32,7:7,70:70}],203:[function(t,n,r){"use strict";var e=t(32),i=t(7),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};t(52)(o,"Object",function(){var t,n=this,r=n._k;do{if(n._i>=r.length)return{value:void 0,done:!0}}while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function(t){return new o(t)}})},{32:32,52:52,7:7}],204:[function(t,n,r){var e=t(70),i=t(32),o=t(7);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(o(t),n)}})},{32:32,7:7,70:70}],205:[function(t,n,r){var e=t(32),i=t(74),o=t(7);e(e.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},{32:32,7:7,74:74}],206:[function(t,n,r){function get(t,n){var r,u,a=arguments.length<3?t:arguments[2];return f(t)===a?t[n]:(r=e.f(t,n))?o(r,"value")?r.value:void 0!==r.get?r.get.call(a):void 0:c(u=i(t))?get(u,n,a):void 0}var e=t(70),i=t(74),o=t(39),u=t(32),c=t(49),f=t(7);u(u.S,"Reflect",{get:get})},{32:32,39:39,49:49,7:7,70:70,74:74}],207:[function(t,n,r){var e=t(32);e(e.S,"Reflect",{has:function(t,n){return n in t}})},{32:32}],208:[function(t,n,r){var e=t(32),i=t(7),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},{32:32,7:7}],209:[function(t,n,r){var e=t(32);e(e.S,"Reflect",{ownKeys:t(80)})},{32:32,80:80}],210:[function(t,n,r){var e=t(32),i=t(7),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},{32:32,7:7}],211:[function(t,n,r){var e=t(32),i=t(90);i&&e(e.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},{32:32,90:90}],212:[function(t,n,r){function set(t,n,r){var c,l,h=arguments.length<4?t:arguments[3],v=i.f(a(t),n);if(!v){if(s(l=o(t)))return set(l,n,r,h);v=f(0)}return u(v,"value")?!(!1===v.writable||!s(h)||(c=i.f(h,n)||f(0),c.value=r,e.f(h,n,c),0)):void 0!==v.set&&(v.set.call(h,r),!0)}var e=t(67),i=t(70),o=t(74),u=t(39),c=t(32),f=t(85),a=t(7),s=t(49);c(c.S,"Reflect",{set:set})},{32:32,39:39,49:49,67:67,7:7,70:70,74:74,85:85}],213:[function(t,n,r){var e=t(38),i=t(43),o=t(67).f,u=t(72).f,c=t(50),f=t(36),a=e.RegExp,s=a,l=a.prototype,h=/a/g,v=/a/g,p=new a(h)!==h;if(t(28)&&(!p||t(34)(function(){return v[t(117)("match")]=!1,a(h)!=h||a(v)==v||"/a/i"!=a(h,"i")}))){a=function(t,n){var r=this instanceof a,e=c(t),o=void 0===n;return!r&&e&&t.constructor===a&&o?t:i(p?new s(e&&!o?t.source:t,n):s((e=t instanceof a)?t.source:t,e&&o?f.call(t):n),r?this:l,a)};for(var y=u(s),g=0;y.length>g;)!function(t){t in a||o(a,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}(y[g++]);l.constructor=a,a.prototype=l,t(87)(e,"RegExp",a)}t(91)("RegExp")},{117:117,28:28,34:34,36:36,38:38,43:43,50:50,67:67,72:72,87:87,91:91}],214:[function(t,n,r){t(28)&&"g"!=/./g.flags&&t(67).f(RegExp.prototype,"flags",{configurable:!0,get:t(36)})},{28:28,36:36,67:67}],215:[function(t,n,r){t(35)("match",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{35:35}],216:[function(t,n,r){t(35)("replace",2,function(t,n,r){return[function(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},{35:35}],217:[function(t,n,r){t(35)("search",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{35:35}],218:[function(t,n,r){t(35)("split",2,function(n,r,e){"use strict";var i=t(50),o=e,u=[].push,c="split",f="length",a="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[f]||2!="ab"[c](/(?:ab)*/)[f]||4!="."[c](/(.?)(.?)/)[f]||"."[c](/()()/)[f]>1||""[c](/.?/)[f]){var s=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,c,l,h,v,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,g=void 0===n?4294967295:n>>>0,b=new RegExp(t.source,d+"g");for(s||(e=new RegExp("^"+b.source+"$(?!\\s)",d));(c=b.exec(r))&&!((l=c.index+c[0][f])>y&&(p.push(r.slice(y,c.index)),!s&&c[f]>1&&c[0].replace(e,function(){for(v=1;v<arguments[f]-2;v++)void 0===arguments[v]&&(c[v]=void 0)}),c[f]>1&&c.index<r[f]&&u.apply(p,c.slice(1)),h=c[0][f],y=l,p[f]>=g));)b[a]===c.index&&b[a]++;return y===r[f]?!h&&b.test("")||p.push(""):p.push(r.slice(y)),p[f]>g?p.slice(0,g):p}}else"0"[c](void 0,0)[f]&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(t,i){var o=n(this),u=void 0==t?void 0:t[r];return void 0!==u?u.call(t,o,i):e.call(String(o),t,i)},e]})},{35:35,50:50}],219:[function(t,n,r){"use strict";t(214);var e=t(7),i=t(36),o=t(28),u="toString",c=/./[u],f=function(n){t(87)(RegExp.prototype,u,n,!0)};t(34)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?f(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):c.name!=u&&f(function(){return c.call(this)})},{214:214,28:28,34:34,36:36,7:7,87:87}],220:[function(t,n,r){"use strict";var e=t(19);n.exports=t(22)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(this,t=0===t?0:t,t)}},e)},{19:19,22:22}],221:[function(t,n,r){"use strict";t(99)("anchor",function(t){return function(n){return t(this,"a","name",n)}})},{99:99}],222:[function(t,n,r){"use strict";t(99)("big",function(t){return function(){return t(this,"big","","")}})},{99:99}],223:[function(t,n,r){"use strict";t(99)("blink",function(t){return function(){return t(this,"blink","","")}})},{99:99}],224:[function(t,n,r){"use strict";t(99)("bold",function(t){return function(){return t(this,"b","","")}})},{99:99}],225:[function(t,n,r){"use strict";var e=t(32),i=t(97)(!1);e(e.P,"String",{codePointAt:function(t){return i(this,t)}})},{32:32,97:97}],226:[function(t,n,r){"use strict";var e=t(32),i=t(108),o=t(98),u="endsWith",c=""[u];e(e.P+e.F*t(33)(u),"String",{endsWith:function(t){var n=o(this,t,u),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),f=void 0===r?e:Math.min(i(r),e),a=String(t);return c?c.call(n,a,f):n.slice(f-a.length,f)===a}})},{108:108,32:32,33:33,98:98}],227:[function(t,n,r){"use strict";t(99)("fixed",function(t){return function(){return t(this,"tt","","")}})},{99:99}],228:[function(t,n,r){"use strict";t(99)("fontcolor",function(t){return function(n){return t(this,"font","color",n)}})},{99:99}],229:[function(t,n,r){"use strict";t(99)("fontsize",function(t){return function(n){return t(this,"font","size",n)}})},{99:99}],230:[function(t,n,r){var e=t(32),i=t(105),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},{105:105,32:32}],231:[function(t,n,r){"use strict";var e=t(32),i=t(98),o="includes";e(e.P+e.F*t(33)(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{32:32,33:33,98:98}],232:[function(t,n,r){"use strict";t(99)("italics",function(t){return function(){return t(this,"i","","")}})},{99:99}],233:[function(t,n,r){"use strict";var e=t(97)(!0);t(53)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},{53:53,97:97}],234:[function(t,n,r){"use strict";t(99)("link",function(t){return function(n){return t(this,"a","href",n)}})},{99:99}],235:[function(t,n,r){var e=t(32),i=t(107),o=t(108);e(e.S,"String",{raw:function(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},{107:107,108:108,32:32}],236:[function(t,n,r){var e=t(32);e(e.P,"String",{repeat:t(101)})},{101:101,32:32}],237:[function(t,n,r){"use strict";t(99)("small",function(t){return function(){return t(this,"small","","")}})},{99:99}],238:[function(t,n,r){"use strict";var e=t(32),i=t(108),o=t(98),u="startsWith",c=""[u];e(e.P+e.F*t(33)(u),"String",{startsWith:function(t){var n=o(this,t,u),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},{108:108,32:32,33:33,98:98}],239:[function(t,n,r){"use strict";t(99)("strike",function(t){return function(){return t(this,"strike","","")}})},{99:99}],240:[function(t,n,r){"use strict";t(99)("sub",function(t){return function(){return t(this,"sub","","")}})},{99:99}],241:[function(t,n,r){"use strict";t(99)("sup",function(t){return function(){return t(this,"sup","","")}})},{99:99}],242:[function(t,n,r){"use strict";t(102)("trim",function(t){return function(){return t(this,3)}})},{102:102}],243:[function(t,n,r){"use strict";var e=t(38),i=t(39),o=t(28),u=t(32),c=t(87),f=t(62).KEY,a=t(34),s=t(94),l=t(92),h=t(114),v=t(117),p=t(116),d=t(115),y=t(57),g=t(31),b=t(47),x=t(7),m=t(107),w=t(110),S=t(85),_=t(66),E=t(71),O=t(70),F=t(67),P=t(76),M=O.f,A=F.f,I=E.f,j=e.Symbol,N=e.JSON,k=N&&N.stringify,R="prototype",T=v("_hidden"),L=v("toPrimitive"),C={}.propertyIsEnumerable,U=s("symbol-registry"),G=s("symbols"),D=s("op-symbols"),W=Object[R],B="function"==typeof j,V=e.QObject,z=!V||!V[R]||!V[R].findChild,K=o&&a(function(){return 7!=_(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=M(W,n);e&&delete W[n],A(t,n,r),e&&t!==W&&A(W,n,e)}:A,J=function(t){var n=G[t]=_(j[R]);return n._k=t,n},Y=B&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},q=function(t,n,r){return t===W&&q(D,n,r),x(t),n=w(n,!0),x(r),i(G,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:S(0,!1)})):(i(t,T)||A(t,T,S(1,{})),t[T][n]=!0),K(t,n,r)):A(t,n,r)},X=function(t,n){x(t);for(var r,e=g(n=m(n)),i=0,o=e.length;o>i;)q(t,r=e[i++],n[r]);return t},$=function(t,n){return void 0===n?_(t):X(_(t),n)},H=function(t){var n=C.call(this,t=w(t,!0));return!(this===W&&i(G,t)&&!i(D,t))&&(!(n||!i(this,t)||!i(G,t)||i(this,T)&&this[T][t])||n)},Z=function(t,n){if(t=m(t),n=w(n,!0),t!==W||!i(G,n)||i(D,n)){var r=M(t,n);return!r||!i(G,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Q=function(t){for(var n,r=I(m(t)),e=[],o=0;r.length>o;)i(G,n=r[o++])||n==T||n==f||e.push(n);return e},tt=function(t){for(var n,r=t===W,e=I(r?D:m(t)),o=[],u=0;e.length>u;)!i(G,n=e[u++])||r&&!i(W,n)||o.push(G[n]);return o};B||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(D,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),K(this,t,S(1,r))};return o&&z&&K(W,t,{configurable:!0,set:n}),J(t)},c(j[R],"toString",function(){return this._k}),O.f=Z,F.f=q,t(72).f=E.f=Q,t(77).f=H,t(73).f=tt,o&&!t(58)&&c(W,"propertyIsEnumerable",H,!0),p.f=function(t){return J(v(t))}),u(u.G+u.W+u.F*!B,{Symbol:j});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)v(nt[rt++]);for(var nt=P(v.store),rt=0;nt.length>rt;)d(nt[rt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return i(U,t+="")?U[t]:U[t]=j(t)},keyFor:function(t){if(Y(t))return y(U,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!B,"Object",{create:$,defineProperty:q,defineProperties:X,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt}),N&&u(u.S+u.F*(!B||a(function(){var t=j();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Y(t)){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);return"function"==typeof(n=e[1])&&(r=n),!r&&b(n)||(n=function(t,n){if(r&&(n=r.call(this,t,n)),!Y(n))return n}),e[1]=n,k.apply(N,e)}}}),j[R][L]||t(40)(j[R],L,j[R].valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},{107:107,110:110,114:114,115:115,116:116,117:117,28:28,31:31,32:32,34:34,38:38,39:39,40:40,47:47,57:57,58:58,62:62,66:66,67:67,7:7,70:70,71:71,72:72,73:73,76:76,77:77,85:85,87:87,92:92,94:94}],244:[function(t,n,r){"use strict";var e=t(32),i=t(113),o=t(112),u=t(7),c=t(105),f=t(108),a=t(49),s=t(38).ArrayBuffer,l=t(95),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&s.isView,d=h.prototype.slice,y=i.VIEW,g="ArrayBuffer";e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,g,{isView:function(t){return p&&p(t)||a(t)&&y in t}}),e(e.P+e.U+e.F*t(34)(function(){return!new h(2).slice(1,void 0).byteLength}),g,{slice:function(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(f(i-e)),a=new v(this),s=new v(o),p=0;e<i;)s.setUint8(p++,a.getUint8(e++));return o}}),t(91)(g)},{105:105,108:108,112:112,113:113,32:32,34:34,38:38,49:49,7:7,91:91,95:95}],245:[function(t,n,r){var e=t(32);e(e.G+e.W+e.F*!t(113).ABV,{DataView:t(112).DataView})},{112:112,113:113,32:32}],246:[function(t,n,r){t(111)("Float32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],247:[function(t,n,r){t(111)("Float64",8,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],248:[function(t,n,r){t(111)("Int16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],249:[function(t,n,r){t(111)("Int32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],250:[function(t,n,r){t(111)("Int8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],251:[function(t,n,r){t(111)("Uint16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],252:[function(t,n,r){t(111)("Uint32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],253:[function(t,n,r){t(111)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},{111:111}],254:[function(t,n,r){t(111)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}},!0)},{111:111}],255:[function(t,n,r){"use strict";var e,i=t(12)(0),o=t(87),u=t(62),c=t(65),f=t(21),a=t(49),s=u.getWeak,l=Object.isExtensible,h=f.ufstore,v={},p=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},d={get:function(t){if(a(t)){var n=s(t);return!0===n?h(this).get(t):n?n[this._i]:void 0}},set:function(t,n){return f.def(this,t,n)}},y=n.exports=t(22)("WeakMap",p,d,f,!0,!0);7!=(new y).set((Object.freeze||Object)(v),7).get(v)&&(e=f.getConstructor(p),c(e.prototype,d),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=y.prototype,r=n[t];o(n,t,function(n,i){if(a(n)&&!l(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},{12:12,21:21,22:22,49:49,62:62,65:65,87:87}],256:[function(t,n,r){"use strict";var e=t(21);t(22)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(this,t,!0)}},e,!1,!0)},{21:21,22:22}],257:[function(t,n,r){"use strict";var e=t(32),i=t(11)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("includes")},{11:11,32:32,5:5}],258:[function(t,n,r){var e=t(32),i=t(64)(),o=t(38).process,u="process"==t(18)(o);e(e.G,{asap:function(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},{18:18,32:32,38:38,64:64}],259:[function(t,n,r){var e=t(32),i=t(18);e(e.S,"Error",{isError:function(t){return"Error"===i(t)}})},{18:18,32:32}],260:[function(t,n,r){var e=t(32);e(e.P+e.R,"Map",{toJSON:t(20)("Map")})},{20:20,32:32}],261:[function(t,n,r){var e=t(32);e(e.S,"Math",{iaddh:function(t,n,r,e){var i=t>>>0,u=r>>>0;return(n>>>0)+(e>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},{32:32}],262:[function(t,n,r){var e=t(32);e(e.S,"Math",{imulh:function(t,n){var r=65535,e=+t,i=+n,o=e&r,u=i&r,c=e>>16,f=i>>16,a=(c*u>>>0)+(o*u>>>16);return c*f+(a>>16)+((o*f>>>0)+(a&r)>>16)}})},{32:32}],263:[function(t,n,r){var e=t(32);e(e.S,"Math",{isubh:function(t,n,r,e){var i=t>>>0,u=r>>>0;return(n>>>0)-(e>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},{32:32}],264:[function(t,n,r){var e=t(32);e(e.S,"Math",{umulh:function(t,n){var r=65535,e=+t,i=+n,o=e&r,u=i&r,c=e>>>16,f=i>>>16,a=(c*u>>>0)+(o*u>>>16);return c*f+(a>>>16)+((o*f>>>0)+(a&r)>>>16)}})},{32:32}],265:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(3),u=t(67);t(28)&&e(e.P+t(69),"Object",{__defineGetter__:function(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},{109:109,28:28,3:3,32:32,67:67,69:69}],266:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(3),u=t(67);t(28)&&e(e.P+t(69),"Object",{__defineSetter__:function(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},{109:109,28:28,3:3,32:32,67:67,69:69}],267:[function(t,n,r){var e=t(32),i=t(79)(!0);e(e.S,"Object",{entries:function(t){return i(t)}})},{32:32,79:79}],268:[function(t,n,r){var e=t(32),i=t(80),o=t(107),u=t(70),c=t(24);e(e.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r=o(t),e=u.f,f=i(r),a={},s=0;f.length>s;)c(a,n=f[s++],e(r,n));return a}})},{107:107,24:24,32:32,70:70,80:80}],269:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110),u=t(74),c=t(70).f;t(28)&&e(e.P+t(69),"Object",{__lookupGetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},{109:109,110:110,28:28,32:32,69:69,70:70,74:74}],270:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110),u=t(74),c=t(70).f;t(28)&&e(e.P+t(69),"Object",{__lookupSetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},{109:109,110:110,28:28,32:32,69:69,70:70,74:74}],271:[function(t,n,r){var e=t(32),i=t(79)(!1);e(e.S,"Object",{values:function(t){return i(t)}})},{32:32,79:79}],272:[function(t,n,r){"use strict";var e=t(32),i=t(38),o=t(23),u=t(64)(),c=t(117)("observable"),f=t(3),a=t(7),s=t(6),l=t(86),h=t(40),v=t(37),p=v.RETURN,d=function(t){return null==t?void 0:f(t)},y=function(t){var n=t._c;n&&(t._c=void 0,n())},g=function(t){return void 0===t._o},b=function(t){g(t)||(t._o=void 0,y(t))},x=function(t,n){a(t),this._c=void 0,this._o=t,t=new m(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:f(r),this._c=r)}catch(n){return void t.error(n)}g(this)&&y(this)};x.prototype=l({},{unsubscribe:function(){b(this)}});var m=function(t){this._s=t};m.prototype=l({},{next:function(t){var n=this._s;if(!g(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{b(n)}finally{throw t}}}},error:function(t){var n=this._s;if(g(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{y(n)}finally{throw t}}return y(n),t},complete:function(t){var n=this._s;if(!g(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{y(n)}finally{throw t}}return y(n),t}}});var w=function(t){s(this,w,"Observable","_f")._f=f(t)};l(w.prototype,{subscribe:function(t){return new x(t,this._f)},forEach:function(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){f(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(w,{from:function(t){var n="function"==typeof this?this:w,r=d(a(t)[c]);if(r){var e=a(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:w)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(w.prototype,c,function(){return this}),e(e.G,{Observable:w}),t(91)("Observable")},{117:117,23:23,3:3,32:32,37:37,38:38,40:40,6:6,64:64,7:7,86:86,91:91}],273:[function(t,n,r){var e=t(63),i=t(7),o=e.key,u=e.set;e.exp({defineMetadata:function(t,n,r,e){u(t,n,i(r),o(e))}})},{63:63,7:7}],274:[function(t,n,r){var e=t(63),i=t(7),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var f=c.get(n);return f.delete(r),!!f.size||c.delete(n)}})},{63:63,7:7}],275:[function(t,n,r){var e=t(220),i=t(10),o=t(63),u=t(7),c=t(74),f=o.keys,a=o.key,s=function(t,n){var r=f(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function(t){return s(u(t),arguments.length<2?void 0:a(arguments[1]))}})},{10:10,220:220,63:63,7:7,74:74}],276:[function(t,n,r){var e=t(63),i=t(7),o=t(74),u=e.has,c=e.get,f=e.key,a=function(t,n,r){if(u(t,n,r))return c(t,n,r);var i=o(n);return null!==i?a(t,i,r):void 0};e.exp({getMetadata:function(t,n){return a(t,i(n),arguments.length<3?void 0:f(arguments[2]))}})},{63:63,7:7,74:74}],277:[function(t,n,r){var e=t(63),i=t(7),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},{63:63,7:7}],278:[function(t,n,r){var e=t(63),i=t(7),o=e.get,u=e.key;e.exp({getOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{63:63,7:7}],279:[function(t,n,r){var e=t(63),i=t(7),o=t(74),u=e.has,c=e.key,f=function(t,n,r){if(u(t,n,r))return!0;var i=o(n);return null!==i&&f(t,i,r)};e.exp({hasMetadata:function(t,n){return f(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},{63:63,7:7,74:74}],280:[function(t,n,r){var e=t(63),i=t(7),o=e.has,u=e.key;e.exp({hasOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{63:63,7:7}],281:[function(t,n,r){var e=t(63),i=t(7),o=t(3),u=e.key,c=e.set;e.exp({metadata:function(t,n){return function(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},{3:3,63:63,7:7}],282:[function(t,n,r){var e=t(32);e(e.P+e.R,"Set",{toJSON:t(20)("Set")})},{20:20,32:32}],283:[function(t,n,r){"use strict";var e=t(32),i=t(97)(!0);e(e.P,"String",{at:function(t){return i(this,t)}})},{32:32,97:97}],284:[function(t,n,r){"use strict";var e=t(32),i=t(27),o=t(108),u=t(50),c=t(36),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};t(52)(a,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},{108:108,27:27,32:32,36:36,50:50,52:52}],285:[function(t,n,r){"use strict";var e=t(32),i=t(100);e(e.P,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{100:100,32:32}],286:[function(t,n,r){"use strict";var e=t(32),i=t(100);e(e.P,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{100:100,32:32}],287:[function(t,n,r){"use strict";t(102)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},{102:102}],288:[function(t,n,r){"use strict";t(102)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},{102:102}],289:[function(t,n,r){t(115)("asyncIterator")},{115:115}],290:[function(t,n,r){t(115)("observable")},{115:115}],291:[function(t,n,r){var e=t(32);e(e.S,"System",{global:t(38)})},{32:32,38:38}],292:[function(t,n,r){for(var e=t(130),i=t(87),o=t(38),u=t(40),c=t(56),f=t(117),a=f("iterator"),s=f("toStringTag"),l=c.Array,h=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],v=0;v<5;v++){var p,d=h[v],y=o[d],g=y&&y.prototype;if(g){g[a]||u(g,a,l),g[s]||u(g,s,d),c[d]=l;for(p in e)g[p]||i(g,p,e[p],!0)}}},{117:117,130:130,38:38,40:40,56:56,87:87}],293:[function(t,n,r){var e=t(32),i=t(104);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},{104:104,32:32}],294:[function(t,n,r){var e=t(38),i=t(32),o=t(44),u=t(83),c=e.navigator,f=!!c&&/MSIE .\./.test(c.userAgent),a=function(t){return f?function(n,r){return t(o(u,[].slice.call(arguments,2),"function"==typeof n?n:Function(n)),r)}:t};i(i.G+i.B+i.F*f,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},{32:32,38:38,44:44,83:83}],295:[function(t,n,r){t(243),t(180),t(182),t(181),t(184),t(186),t(191),t(185),t(183),t(193),t(192),t(188),t(189),t(187),t(179),t(190),t(194),t(195),t(146),t(148),t(147),t(197),t(196),t(167),t(177),t(178),t(168),t(169),t(170),t(171),t(172),t(173),t(174),t(175),t(176),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161),t(162),t(163),t(164),t(165),t(166),t(230),t(235),t(242),t(233),t(225),t(226),t(231),t(236),t(238),t(221),t(222),t(223),t(224),t(227),t(228),t(229),t(232),t(234),t(237),t(239),t(240),t(241),t(141),t(143),t(142),t(145),t(144),t(129),t(127),t(134),t(131),t(137),t(139),t(126),t(133),t(123),t(138),t(121),t(136),t(135),t(128),t(132),t(120),t(122),t(125),t(124),t(140),t(130),t(213),t(219),t(214),t(215),t(216),t(217),t(218),t(198),t(149),t(220),t(255),t(256),t(244),t(245),t(250),t(253),t(254),t(248),t(251),t(249),t(252),t(246),t(247),t(199),t(200),t(201),t(202),t(203),t(206),t(204),t(205),t(207),t(208),t(209),t(210),t(212),t(211),t(257),t(283),t(286),t(285),t(287),t(288),t(284),t(289),t(290),t(268),t(271),t(267),t(265),t(266),t(269),t(270),t(260),t(282),t(291),t(259),t(261),t(263),t(262),t(264),t(273),t(274),t(276),t(275),t(278),t(277),t(279),t(280),t(281),t(258),t(272),t(294),t(293),t(292),n.exports=t(23)},{120:120,121:121,122:122,123:123,124:124,125:125,126:126,127:127,128:128,129:129,130:130,131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,186:186,187:187,188:188,189:189,190:190,191:191,192:192,193:193,194:194,195:195,196:196,197:197,198:198,199:199,200:200,201:201,202:202,203:203,204:204,205:205,206:206,207:207,208:208,209:209,210:210,211:211,212:212,213:213,214:214,215:215,216:216,217:217,218:218,219:219,220:220,221:221,222:222,223:223,224:224,225:225,226:226,227:227,228:228,229:229,23:23,230:230,231:231,232:232,233:233,234:234,235:235,236:236,237:237,238:238,239:239,240:240,241:241,242:242,243:243,244:244,245:245,246:246,247:247,248:248,249:249,250:250,251:251,252:252,253:253,254:254,255:255,256:256,257:257,258:258,259:259,260:260,261:261,262:262,263:263,264:264,265:265,266:266,267:267,268:268,269:269,270:270,271:271,272:272,273:273,274:274,275:275,276:276,277:277,278:278,279:279,280:280,281:281,282:282,283:283,284:284,285:285,286:286,287:287,288:288,289:289,290:290,291:291,292:292,293:293,294:294}],296:[function(t,n,r){(function(t){!function(t){"use strict";function wrap(t,n,r,e){var i=n&&n.prototype instanceof Generator?n:Generator,o=Object.create(i.prototype),u=new Context(e||[]);return o._invoke=makeInvokeMethod(t,r,u),o}function tryCatch(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AsyncIterator(t){function invoke(n,r,e,o){var u=tryCatch(t[n],t,r);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&i.call(f,"__await")?Promise.resolve(f.__await).then(function(t){invoke("next",t,e,o)},function(t){invoke("throw",t,e,o)}):Promise.resolve(f).then(function(t){c.value=t,e(c)},o)}o(u.arg)}function enqueue(t,r){function callInvokeWithMethodAndArg(){return new Promise(function(n,e){invoke(t,r,n,e)})}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof process&&process.domain&&(invoke=process.domain.bind(invoke));var n;this._invoke=enqueue}function makeInvokeMethod(t,n,e){var i=s;return function(o,u){if(i===h)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw u;return doneResult()}for(;;){var c=e.delegate;if(c){if("return"===o||"throw"===o&&c.iterator[o]===r){e.delegate=null;var f=c.iterator.return;if(f&&"throw"===(a=tryCatch(f,c.iterator,u)).type){o="throw",u=a.arg;continue}if("return"===o)continue}if("throw"===(a=tryCatch(c.iterator[o],c.iterator,u)).type){e.delegate=null,o="throw",u=a.arg;continue}if(o="next",u=r,!(d=a.arg).done)return i=l,d;e[c.resultName]=d.value,e.next=c.nextLoc,e.delegate=null}if("next"===o)e.sent=e._sent=u;else if("throw"===o){if(i===s)throw i=v,u;e.dispatchException(u)&&(o="next",u=r)}else"return"===o&&e.abrupt("return",u);i=h;var a=tryCatch(t,n,e);if("normal"===a.type){i=e.done?v:l;var d={value:a.arg,done:e.done};if(a.arg!==p)return d;e.delegate&&"next"===o&&(u=r)}else"throw"===a.type&&(i=v,o="throw",u=a.arg)}}}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function next(){for(;++e<t.length;)if(i.call(t,e))return next.value=t[e],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.toStringTag||"@@toStringTag",f="object"==typeof n,a=t.regeneratorRuntime;if(a)f&&(n.exports=a);else{(a=t.regeneratorRuntime=f?n.exports:{}).wrap=wrap;var s="suspendedStart",l="suspendedYield",h="executing",v="completed",p={},d={};d[u]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(values([])));g&&g!==e&&i.call(g,u)&&(d=g);var b=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(d);GeneratorFunction.prototype=b.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[c]=GeneratorFunction.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},a.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),a.AsyncIterator=AsyncIterator,a.async=function(t,n,r,e){var i=new AsyncIterator(wrap(t,n,r,e));return a.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},defineIteratorMethods(b),b[c]="Generator",b.toString=function(){return"[object Generator]"},a.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var r=n.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},a.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(r,e){return o.type="throw",o.arg=t,n.next=r,!!e}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r],o=e.completion;if("root"===e.tryLoc)return handle("end");if(e.tryLoc<=this.prev){var u=i.call(e,"catchLoc"),c=i.call(e,"finallyLoc");if(u&&c){if(this.prev<e.catchLoc)return handle(e.catchLoc,!0);if(this.prev<e.finallyLoc)return handle(e.finallyLoc)}else if(u){if(this.prev<e.catchLoc)return handle(e.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<e.finallyLoc)return handle(e.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?this.next=o.finallyLoc:this.complete(u),p},complete:function(t,n){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;resetTryEntry(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:values(t),resultName:n,nextLoc:r},p}}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);try{var ce=new window.CustomEvent("test");if(ce.preventDefault(),!0!==ce.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var CustomEvent=function(event,params){var evt,origPrevent;return params=params||{bubbles:!1,cancelable:!1,detail:void 0},(evt=document.createEvent("CustomEvent")).initCustomEvent(event,params.bubbles,params.cancelable,params.detail),origPrevent=evt.preventDefault,evt.preventDefault=function(){origPrevent.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},evt};CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent}!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function i(){return void 0!==H?function(){H(a)}:c()}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2)(0,$[t])($[t+1]),$[t]=void 0,$[t+1]=void 0;G=0}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?(j(t,it.error),it.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(T,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=P(r,o),s===st?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var n=new this(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0,B=z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,2===(G+=2)&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?function(){return function(){return process.nextTick(a)}}():V?function(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():Z?function(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}():void 0===Q&&"function"==typeof require?function(){try{var e=require("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new M,st=new M,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,catch:function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U.polyfill(),U}),function(a){"use strict";function b(b,c){var d=a.createEvent("Event");d.initEvent(b,!0,!1),c.dispatchEvent(d)}function c(c){c.stopPropagation(),c.stopImmediatePropagation(),a[j.enabled]=a[f.enabled],a[j.element]=a[f.element],b(j.events.change,c.target)}function d(a){b(j.events.error,a.target)}function e(b){return function(c,d){function e(){c(),a.removeEventListener(f.events.change,e,!1)}function g(){d(new TypeError),a.removeEventListener(f.events.error,g,!1)}return b!==j.exit||a[f.element]?(a.addEventListener(f.events.change,e,!1),void a.addEventListener(f.events.error,g,!1)):void setTimeout(function(){d(new TypeError)},1)}}var f,g,i={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",events:{change:"fullscreenchange",error:"fullscreenerror"}},webkit:{enabled:"webkitFullscreenEnabled",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",events:{change:"webkitfullscreenchange",error:"webkitfullscreenerror"}},moz:{enabled:"mozFullScreenEnabled",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",events:{change:"mozfullscreenchange",error:"mozfullscreenerror"}},ms:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",events:{change:"MSFullscreenChange",error:"MSFullscreenError"}}},j=i.w3;for(g in i)if(i[g].enabled in a){f=i[g];break}j.enabled in a||!f||(a.addEventListener(f.events.change,c,!1),a.addEventListener(f.events.error,d,!1),a[j.enabled]=a[f.enabled],a[j.element]=a[f.element],a[j.exit]=function(){var b=a[f.exit]();return!b&&Promise?new Promise(e(j.exit)):b},Element.prototype[j.request]=function(){var a=this[f.request].apply(this,arguments);return!a&&Promise?new Promise(e(j.request)):a})}(document);
// ==================================================
// fancyBox v3.1.24
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t){var e=t.currentTarget,o=t.data?t.data.options:{},i=o.selector?n(o.selector):t.data?t.data.items:[],a=n(e).attr("data-fancybox")||"",s=0,r=n.fancybox.getInstance();t.preventDefault(),t.stopPropagation(),r&&r.current.opts.$orig.is(e)||(a?(i=i.length?i.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),s=i.index(e),s<0&&(s=0)):i=[e],n.fancybox.open(i,o,s))}if(n){if(n.fn.fancybox)return void n.error("fancyBox already initialized");var a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!1,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","close"],idleTime:4,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'},parentEl:"body",autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t]}(),f=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,o,i){var s=this;s.opts=n.extend(!0,{index:i},a,o||{}),o&&n.isArray(o.buttons)&&(s.opts.buttons=o.buttons),s.id=s.opts.id||++c,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init(t))};n.extend(h.prototype,{init:function(){var t,e,o,i=this,a=i.group[i.currIndex].opts;i.scrollTop=r.scrollTop(),i.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||n.fancybox.isMobile||"hidden"===n("body").css("overflow")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),t=n("body").width()-t,t>1&&n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: '+t+"px; }</style>")),o="",n.each(a.buttons,function(t,e){o+=a.btnTpl[e]||""}),e=n(i.translate(i,a.baseTpl.replace("{{BUTTONS}}",o))).addClass("fancybox-is-hidden").attr("id","fancybox-container-"+i.id).addClass(a.baseClass).data("FancyBox",i).prependTo(a.parentEl),i.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption"].forEach(function(t){i.$refs[t]=e.find(".fancybox-"+t)}),(!a.arrows||i.group.length<2)&&e.find(".fancybox-navigation").remove(),a.infobar||i.$refs.infobar.remove(),a.toolbar||i.$refs.toolbar.remove(),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var a,s,r,c,l={},u={},d=[];n.isPlainObject(i)?(l=i,u=i.opts||i):"object"===n.type(i)&&n(i).length?(a=n(i),d=a.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.src="src"in d?d.src:u.src||a.attr("href"),["width","height","thumb","type","filter"].forEach(function(t){t in d&&(u[t]=d[t])}),"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=a,l.type||l.src||(l.type="inline",l.src=i)):l={type:"html",src:i+""},l.opts=n.extend(!0,{},e.opts,u),n.fancybox.isMobile&&(l.opts=n.extend(!0,{},l.opts,l.opts.mobile)),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),l.type=s,l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in d&&(l.opts.caption=d.caption),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},500))}),r.on("focusin.fb",function(t){var i=n.fancybox?n.fancybox.getInstance():null;i.isClosing||!i.current||!i.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||i&&"fixed"!==n(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,u,d,h=this,p=h.group.length;if(!(h.isSliding||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=p))return!1;if(a=h.firstRun=null===h.firstRun,!(p<2&&!a&&h.isSliding)){if(c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),p>1&&((s||r.index>0)&&h.createSlide(t-1),(s||r.index<p-1)&&h.createSlide(t+1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.removeClass("fancybox-is-hidden"),f(h.$refs.container),h.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),h.loadSlide(r),void h.preload();n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(h.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&(r.isMoved=!1,h.complete())})})):h.$refs.stage.children().removeAttr("style"),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,u=this,d=u.current,f=d.$content,h=parseInt(d.$slide.width(),10),p=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*p:e,a=n.fancybox.getTranslate(f),c=g/a.width,l=b/a.height,s=.5*h-.5*g,r=.5*p-.5*b,g>h&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<h-g&&(s=h-g)),b>p&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<p-b&&(r=p-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;"image"!=i.type||i.hasError||!a||o.isAnimating||(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,r,c=this,l=t.$content,u=t.width,d=t.height,f=t.opts.margin;return!(!l||!l.length||!u&&!d)&&("number"===n.type(f)&&(f=[f,f]),2==f.length&&(f=[f[0],f[1],f[0],f[1]]),s.width()<800&&(f=[0,0,0,0]),e=parseInt(c.$refs.stage.width(),10)-(f[1]+f[3]),o=parseInt(c.$refs.stage.height(),10)-(f[0]+f[2]),i=Math.min(1,e/u,o/d),a=Math.floor(i*u),r=Math.floor(i*d),{top:Math.floor(.5*(o-r))+f[0],left:Math.floor(.5*(e-a))+f[3],width:a,height:r})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,i=this,a=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current&&!i.isClosing&&(i.isZoomable()?(a.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown(),n?a.addClass("fancybox-can-zoomIn"):i.current.opts.touch?a.addClass("fancybox-can-drag"):a.addClass("fancybox-can-zoomOut")):i.current.opts.touch&&a.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,i=!1;return o&&(i=n.fancybox.getTranslate(o),i=i.width<e.width||i.height<e.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r=this,c=e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),i.sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=a){o=u;break}}!o&&i.length&&(o=i[i.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&(a.css.width===o||a.css.height===o)&&(s=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(i.outerWidth(!0)+(l.width()-s)),c=Math.ceil(i.outerHeight(!0)),l.css({width:a.css.width===o?r+(l.outerWidth()-l.innerWidth()):a.css.width,height:a.css.height===o?c+(l.outerHeight()-l.innerHeight()):a.css.height})),l.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(o.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&a||(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=r.width/u.width,r.scaleY=r.height/u.height,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,a,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(i=a.$refs.stage.offset(),s={top:l.top-i.top+parseFloat(c.css("border-top-width")||0),left:l.left-i.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.unbind().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(t=e&&e.isComplete?e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first"):null,t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l=this,f=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),f.timouts&&clearTimeout(f.timouts),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),f.$slide.siblings().trigger("onReset").remove(),i&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(f),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===f.type&&!f.hasError&&(c=l.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),r=n.fancybox.getTranslate(a),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=f.opts.zoomOpacity,"auto"==s&&(s=Math.abs(f.width/f.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(f.$content,r),n.fancybox.animate(f.$content,c,i,h),!0):(o&&i?t===!0?setTimeout(h,i):n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,h):h(),!0)))},cleanUp:function(t){var e,o=this;o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.focus(),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("html").removeClass("fancybox-enabled"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"===t?r.trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},updateControls:function(t){var e=this,o=e.current,i=o.index,a=o.opts,s=a.caption,r=e.$refs.caption;o.$slide.trigger("refresh"),e.$caption=s&&s.length?r.html(s):null,e.isHiddenControls||e.showControls(),n("[data-fancybox-count]").html(e.group.length),n("[data-fancybox-index]").html(i+1),n("[data-fancybox-prev]").prop("disabled",!a.loop&&i<=0),n("[data-fancybox-next]").prop("disabled",!a.loop&&i>=e.group.length-1)},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.1.24",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=d||"transitionend";n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(r,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(t.off(r),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration","0ms"),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(d)}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i)}}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("onInit.fb",function(o,i){t.each(i.group,function(o,i){var a,s,r,c,l,u,d,f=i.src||"",h=!1;i.type||(a=t.extend(!0,{},n,i.opts.media),t.each(a,function(n,o){if(r=f.match(o.matcher),u={},d=n,r){if(h=o.type,o.paramPlace&&r[o.paramPlace]){l=r[o.paramPlace],"?"==l[0]&&(l=l.substring(1)),l=l.split("&");for(var a=0;a<l.length;++a){var p=l[a].split("=",2);2==p.length&&(u[p[0]]=decodeURIComponent(p[1].replace(/\+/g," ")))}}return c=t.extend(!0,{},o.params,i.opts[n],u),f="function"===t.type(o.url)?o.url.call(this,r,c,i):e(o.url,r,c),s="function"===t.type(o.thumb)?o.thumb.call(this,r,c,i):e(o.thumb,r),"vimeo"===d&&(f=f.replace("&%23","#")),!1}}),h?(i.src=f,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=s),"iframe"===h&&(t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=d,
i.opts.slideClass+=" fancybox-slide--"+("gmap_place"==d||"gmap_search"==d?"map":"video"))):i.type="image")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is("a,button,input,select,textarea")||n.isFunction(t.get(0).onclick))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var i=this,c=n(o.target),u=i.instance,d=u.current,f=d.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),!d||i.instance.isAnimating||i.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(i.startPoints=a(o),i.startPoints&&!(i.startPoints.length>1&&u.isSliding))){if(i.$target=c,i.$content=f,i.canTap=!0,n(e).off(".fb.touch"),n(e).on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")),n(e).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),o.stopPropagation(),!u.current.opts.touch&&!u.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());n.fancybox.isMobile&&(l(i.$target)||l(i.$target.parent()))||o.preventDefault(),i.canvasWidth=Math.round(d.$slide[0].clientWidth),i.canvasHeight=Math.round(d.$slide[0].clientHeight),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.sliderStartPos=i.sliderLastPos||{top:0,left:0},i.contentStartPos=n.fancybox.getTranslate(i.$content),i.contentLastPos=null,1!==i.startPoints.length||i.isZooming||(i.canTap=!u.isSliding,"image"===d.type&&(i.contentStartPos.width>i.canvasWidth+1||i.contentStartPos.height>i.canvasHeight+1)?(n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2!==i.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(i.isZooming=!0,i.isSwiping=!1,i.isPanning=!1,n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=a(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.instance.current.opts.touch||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,a=this,s=a.isSwiping,r=a.sliderStartPos.left||0;s===!0?Math.abs(a.distance)>10&&(a.canTap=!1,a.instance.group.length<2&&a.instance.opts.touch.vertical?a.isSwiping="y":a.instance.isSliding||a.instance.opts.touch.vertical===!1||"auto"===a.instance.opts.touch.vertical&&n(t).width()>800?a.isSwiping="x":(e=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=e>45&&e<135?"y":"x"),a.instance.isSliding=a.isSwiping,a.startPoints=a.newPoints,n.each(a.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===a.instance.current.pos&&(a.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),a.instance.SlideShow&&a.instance.SlideShow.isActive&&a.instance.SlideShow.stop()):("x"==s&&(a.distanceX>0&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?r+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?r-=Math.pow(-a.distanceX,.8):r+=a.distanceX),a.sliderLastPos={top:"x"==s?0:a.sliderStartPos.top+a.distanceY,left:r},a.requestId&&(i(a.requestId),a.requestId=null),a.requestId=o(function(){a.sliderLastPos&&(n.each(a.instance.slides,function(t,e){var o=e.pos-a.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+o*a.canvasWidth+o*e.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,a,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,a=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),a.scaleX=s.contentStartPos.scaleX,a.scaleY=s.contentStartPos.scaleY,s.contentLastPos=a,s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var i,a,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,h=c.distanceX,p=c.distanceY;return i=Math.max(0,.5*l-.5*n),a=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>i&&(t=i-1+Math.pow(-i+d+h,.8)||0),h<0&&t<s&&(t=s+1-Math.pow(s-d-h,.8)||0)),o>u&&(p>0&&e>a&&(e=a-1+Math.pow(-a+f+p,.8)||0),p<0&&e<r&&(e=r+1-Math.pow(r-f-p,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,a=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(a*d),h=Math.floor(r*d),p=(a-f)*e.percentageOfImageAtPinchPointX,g=(r-h)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(p+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=h,e.contentLastPos=$,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.instance.current.opts.touch.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,i=n(t.target),s=o.instance,r=s.current,c=t&&a(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var i=r.opts[e];if(n.isFunction(i)&&(i=i.apply(s,[r,t])),i)switch(i){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>i[0].clientWidth+i.offset().left)){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):(t.stop(),t.instance.idleSecondsCounter=0,t.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;t.instance&&e&&(e.opts.loop||e.index<t.instance.group.length-1)&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),e.isComplete&&t.set())},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a={};for(n=0;n<i.length;n++)if(e=i[n],e&&e[1]in t){for(o=0;o<e.length;o++)a[i[0][o]]=e[o];return a}return!1}();if(!n)return void(e.fancybox.defaults.btnTpl.fullScreen=!1);var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,e){var n,i=e.$refs.toolbar.find("[data-fancybox-fullscreen]");e&&!e.FullScreen&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):i.hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance();t.current&&"image"===t.current.type&&t.isAnimating&&(t.current.$content.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance.group[0],n=t.instance.group[1];t.$button=t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),t.instance.group.length>1&&t.instance.group[t.instance.currIndex].opts.thumbs&&("image"==e.type||e.opts.thumb||e.opts.$thumb)&&("image"==n.type||n.opts.thumb||n.opts.$thumb)?(t.$button.on("click",function(){t.toggle()}),t.isActive=!0):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,i,a=e(this).parent().removeClass("fancybox-thumbs-loading"),s=a.outerWidth(),r=a.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,i=n/r,o>=1&&i>=1&&(o>i?(t/=i,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*s-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus()):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&(e.Thumbs=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;if(i&&i.isActive){if(n.modal)return i.$button.hide(),void i.hide();o&&e.opts.thumbs.autoStart===!0&&i.show(),i.isVisible&&i.focus()}},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&e.opts.thumbs.hideOnClose!==!1&&n.close()}})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function a(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=!0,r=null,c=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i){var l;i.opts.hash!==!1&&(l=a(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),r=l+(o.group.length>1?"-"+(i.index+1):""),"replaceState"in e.history?(c&&clearTimeout(c),c=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+r),c=null,s=!1},300)):e.location.hash=r))},"beforeClose.fb":function(o,i,s){var l,u;c&&clearTimeout(c),s.opts.hash!==!1&&(l=a(i),u=i&&i.opts.origHash?i.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),r=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!r||r===t.gallery+"-"+t.index||1===t.index&&r==t.gallery||(r=null,n.fancybox.close(),s=!0):""!==t.gallery&&i(t)}),i(o()))},50)})}(document,window,window.jQuery);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
                
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

window.dzsprx_self_options={};window.dzsprx_index=0;
(function(c){c.fn.dzsparallaxer=function(b){if("undefined"==typeof b&&"undefined"!=typeof c(this).attr("data-options")&&""!=c(this).attr("data-options")){var n=c(this).attr("data-options");eval("window.dzsprx_self_options = "+n);b=c.extend({},window.dzsprx_self_options);window.dzsprx_self_options=c.extend({},{})}b=c.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",is_fullscreen:"off",settings_movexaftermouse:"off",
    animation_engine:"js",init_delay:"0",init_functional_delay:"0",settings_substract_from_th:0,settings_detect_out_of_screen:!0,init_functional_remove_delay_on_scroll:"off",settings_makeFunctional:!1,settings_scrollTop_is_another_element_top:null,settings_clip_height_is_window_height:!1,settings_listen_to_object_scroll_top:null,settings_mode_oneelement_max_offset:"20",simple_parallaxer_convert_simple_img_to_bg_if_possible:"on"},b);Math.easeIn=function(b,c,m,n){return-m*(b/=n)*(b-2)+c};Math.easeOutQuad=
    function(b,c,m,n){b/=n;return-m*b*(b-2)+c};Math.easeInOutSine=function(b,c,m,n){return-m/2*(Math.cos(Math.PI*b/n)-1)+c};b.settings_mode_oneelement_max_offset=parseInt(b.settings_mode_oneelement_max_offset,10);var m=parseInt(b.settings_mode_oneelement_max_offset,10);this.each(function(){function n(){if(1==b.settings_makeFunctional){var q=!1,d=document.URL,f=d.indexOf("://")+3,e=d.indexOf("/",f);d=d.substring(f,e);-1<d.indexOf("l")&&-1<d.indexOf("c")&&-1<d.indexOf("o")&&-1<d.indexOf("l")&&-1<d.indexOf("a")&&
-1<d.indexOf("h")&&(q=!0);-1<d.indexOf("d")&&-1<d.indexOf("i")&&-1<d.indexOf("g")&&-1<d.indexOf("d")&&-1<d.indexOf("z")&&-1<d.indexOf("s")&&(q=!0);-1<d.indexOf("o")&&-1<d.indexOf("z")&&-1<d.indexOf("e")&&-1<d.indexOf("h")&&-1<d.indexOf("t")&&(q=!0);-1<d.indexOf("e")&&-1<d.indexOf("v")&&-1<d.indexOf("n")&&-1<d.indexOf("a")&&-1<d.indexOf("t")&&(q=!0);if(0==q)return}b.settings_scrollTop_is_another_element_top&&(z=b.settings_scrollTop_is_another_element_top);g=a.find(".dzsparallaxer--target").eq(0);0<
a.find(".dzsparallaxer--blackoverlay").length&&(K=a.find(".dzsparallaxer--blackoverlay").eq(0));0<a.find(".dzsparallaxer--fadeouttarget").length&&(ba=a.find(".dzsparallaxer--fadeouttarget").eq(0));a.find(".dzsparallaxer--aftermouse").length&&a.find(".dzsparallaxer--aftermouse").each(function(){var a=c(this);L.push(a)});a.hasClass("wait-readyall")||setTimeout(function(){B=Number(b.animation_duration)},300);a.addClass("mode-"+b.settings_mode);a.addClass("animation-engine-"+b.animation_engine);h=a.height();
    "on"==b.settings_movexaftermouse&&(x=a.width());g&&(k=g.height(),"on"==b.settings_movexaftermouse&&(r=g.width()));b.settings_substract_from_th&&(k-=b.settings_substract_from_th);la=h;"2"==b.breakout_fix&&console.info(a.prev());a.attr("data-responsive-reference-width")&&(M=Number(a.attr("data-responsive-reference-width")));a.attr("data-responsive-optimal-height")&&(U=Number(a.attr("data-responsive-optimal-height")));a.find(".dzsprxseparator--bigcurvedline").length&&a.find(".dzsprxseparator--bigcurvedline").each(function(){var a=
        c(this),b="#FFFFFF";a.attr("data-color")&&(b=a.attr("data-color"));a.append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="'+b+'" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>')});a.find(".dzsprxseparator--2triangles").length&&a.find(".dzsprxseparator--2triangles").each(function(){var a=c(this),b="#FFFFFF";a.attr("data-color")&&(b=a.attr("data-color"));a.append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="'+
        b+'" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>')});a.find(".dzsprxseparator--triangle").length&&a.find(".dzsprxseparator--triangle").each(function(){var a=c(this),b="#FFFFFF";a.attr("data-color")&&(b=a.attr("data-color"));a.append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="'+b+'" points="2200,100 0,100 0,0 2200,100 "/></svg>')});a.get(0)&&(a.get(0).api_set_scrollTop_is_another_element_top=function(a){z=a});
    "horizontal"==b.settings_mode&&(g.wrap('<div class="dzsparallaxer--target-con"></div>'),"20"!=b.animation_duration&&a.find(".horizontal-fog,.dzsparallaxer--target").css({animation:"slideshow "+Number(b.animation_duration)/1E3+"s linear infinite"}));is_touch_device()&&a.addClass("is-touch");is_mobile()&&a.addClass("is-mobile");0<a.find(".divimage").length||0<a.find("img").length?(q=a.children(".divimage, img").eq(0),0==q.length&&(q=a.find(".divimage, img").eq(0)),q.attr("data-src")?(V=q.attr("data-src"),
        c(window).on("scroll.dzsprx"+N,u),u()):aa()):aa();"horizontal"==b.settings_mode&&(g.before(g.clone()),g.prev().addClass("cloner"),ca=g.parent().find(".cloner").eq(0))}function aa(){if(!O){O=!0;is_ie11()&&a.addClass("is-ie-11");c(window).on("resize",W);W();setInterval(function(){W(null,{call_from:"autocheck"})},2E3);a.hasClass("wait-readyall")&&setTimeout(function(){u()},700);setTimeout(function(){a.addClass("dzsprx-readyall");u();a.hasClass("wait-readyall")&&(B=Number(b.animation_duration))},1E3);
    0<a.find("*[data-parallaxanimation]").length&&a.find("*[data-parallaxanimation]").each(function(){var a=c(this);if(a.attr("data-parallaxanimation")){null==I&&(I=[]);I.push(a);var b=a.attr("data-parallaxanimation");b=("window.aux_opts2 = "+b).replace(/'/g,'"');try{eval(b)}catch(f){console.info(b,f),window.aux_opts2=null}if(window.aux_opts2){for(w=0;w<window.aux_opts2.length;w++)0==isNaN(Number(window.aux_opts2[w].initial))&&(window.aux_opts2[w].initial=Number(window.aux_opts2[w].initial)),0==isNaN(Number(window.aux_opts2[w].mid))&&
    (window.aux_opts2[w].mid=Number(window.aux_opts2[w].mid)),0==isNaN(Number(window.aux_opts2[w]["final"]))&&(window.aux_opts2[w]["final"]=Number(window.aux_opts2[w]["final"]));a.data("parallax_options",window.aux_opts2)}}});da&&(D=!0,setTimeout(function(){D=!1},da));a.hasClass("simple-parallax")?(g.wrap('<div class="simple-parallax-inner"></div>'),"on"==b.simple_parallaxer_convert_simple_img_to_bg_if_possible&&g.attr("data-src")&&0==g.children().length&&g.parent().addClass("is-image"),0<m&&P()):P();
    ma=setInterval(xa,1E3);setTimeout(function(){},1500);a.hasClass("use-loading")&&(0<a.find(".divimage").length||0<a.children("img").length?0<a.find(".divimage").length&&(V&&(a.find(".divimage").eq(0).css("background-image","url("+V+")"),a.find(".dzsparallaxer--target-con .divimage").css("background-image","url("+V+")")),E=String(a.find(".divimage").eq(0).css("background-image")).split('"')[1],void 0==E&&(E=String(a.find(".divimage").eq(0).css("background-image")).split("url(")[1],E=String(E).split(")")[0]),
        F=new Image,F.onload=function(c){a.addClass("loaded");"horizontal"==b.settings_mode&&(console.info(F,E,F.naturalWidth,x,r),J=F.naturalWidth,ea=F.naturalHeight,r=J/ea*h,console.log(J,ea,r,h),g.hasClass("divimage"),console.info(ca),ca.css({left:"calc(-100% + 1px)"}),g.css({width:"100%"}),g.hasClass("repeat-pattern")&&(console.info("nw - ",J,"cw - ",x),r=Math.ceil(x/J)*J,console.info("tw - ",r)),a.find(".dzsparallaxer--target-con").css({width:r}))},F.src=E):a.addClass("loaded"),setTimeout(function(){a.addClass("loaded");
        na()},1E4));a.get(0).api_set_update_func=function(a){G=a};a.get(0).api_handle_scroll=u;a.get(0).api_destroy=wa;a.get(0).api_destroy_listeners=ya;a.get(0).api_handle_resize=W;if("scroll"==b.settings_mode||"oneelement"==b.settings_mode)c(window).off("scroll.dzsprx"+N),c(window).on("scroll.dzsprx"+N,u),u(),setTimeout(u,1E3),document&&document.addEventListener&&document.addEventListener("touchmove",fa,!1);if("mouse_body"==b.settings_mode||"on"==b.settings_movexaftermouse||L.length)c(document).on("mousemove",
        fa)}}function wa(){G=null;oa=!0;G=null;c(window).off("scroll.dzsprx"+N,u);document&&document.addEventListener&&document.removeEventListener("touchmove",fa,!1)}function xa(){ha=!0}function ya(){console.info("DESTROY LISTENERS",a);clearInterval(ma);c(window).off("scroll.dzsprx"+N)}function W(g,d){x=a.width();X=window.innerWidth;p=window.innerHeight;var f={call_from:"event"};d&&(f=c.extend(f,d));if(!1!==O){if("oneelement"==b.settings_mode){var e=a.css("transform");a.css("transform","translate3d(0,0,0)")}y=
    parseInt(a.offset().top,10);if("autocheck"==f.call_from&&4>Math.abs(pa-p)&&4>Math.abs(qa-y))return"oneelement"==b.settings_mode&&a.css("transform",e),!1;pa=p;qa=y;M&&U&&(x<M?a.height(x/M*U):a.height(U));760>x?a.addClass("under-760"):a.removeClass("under-760");500>x?a.addClass("under-500"):a.removeClass("under-500");ia&&clearTimeout(ia);ia=setTimeout(na,700);"on"==b.js_breakout&&(a.css("width",X+"px"),a.css("margin-left","0"),0<a.offset().left&&a.css("margin-left","-"+a.offset().left+"px"))}}function na(){h=
    a.outerHeight();k=g.outerHeight();p=window.innerHeight;b.settings_substract_from_th&&(k-=b.settings_substract_from_th);b.settings_clip_height_is_window_height&&(h=window.innerHeight);0==a.hasClass("allbody")&&0==a.hasClass("dzsparallaxer---window-height")&&0==M&&(k<=la&&0<k?("oneelement"!=b.settings_mode&&0==a.hasClass("do-not-set-js-height")&&0==a.hasClass("height-is-based-on-content")&&a.height(k),h=a.height(),is_ie()&&10>=version_ie()?g.css("top","0"):g.css("transform",""),K&&K.css("opacity","0")):
    "oneelement"!=b.settings_mode&&0==a.hasClass("do-not-set-js-height")&&a.hasClass("height-is-based-on-content"));g.attr("data-forcewidth_ratio")&&(g.width(Number(g.attr("data-forcewidth_ratio"))*g.height()),g.width()<a.width()&&g.width(a.width()));clearTimeout(ra);ra=setTimeout(u,200)}function fa(a){if("mouse_body"==b.settings_mode){l=a.pageY-c(window).scrollTop();if(0==k)return;var d=l/p*(h-k);C=l/h;0<d&&(d=0);d<h-k&&(d=h-k);1<C&&(C=1);0>C&&(C=0);Q=d}if("on"==b.settings_movexaftermouse){var f=a.pageX;
    f=f/X*(x-r);0<f&&(f=0);f<x-r&&(f=x-r);sa=f}if(L)for(f=a.pageX,a=a.clientY,f=f/X*m*2-m,d=a/p*m*4-2*m,f>m&&(f=m),f<-m&&(f=-m),d>m&&(d=m),d<-m&&(d=-m),a=0;a<L.length;a++)L[a].css({top:d,left:f},{queue:!1,duration:100})}function u(n,d){l=c(window).scrollTop();t=0;y>l-p&&l<y+a.outerHeight()?D=!1:b.settings_detect_out_of_screen&&(D=!0);z&&(l=-parseInt(z.css("top"),10),z.data("targettop")&&(l=-z.data("targettop")));b.settings_listen_to_object_scroll_top&&(l=b.settings_listen_to_object_scroll_top.val);isNaN(l)&&
(l=0);n&&"on"==b.init_functional_remove_delay_on_scroll&&(D=!1);var f={force_vi_y:null,from:"",force_ch:null,force_th:null,force_th_only_big_diff:!0};d&&(f=c.extend(f,d));b.settings_clip_height_is_window_height&&(h=window.innerHeight);null!=f.force_ch&&(h=f.force_ch);null!=f.force_th&&(f.force_th_only_big_diff?20<Math.abs(f.force_th-k)&&(k=f.force_th):k=f.force_th);!1===O&&(p=window.innerHeight,l+p>=a.offset().top&&aa());if(0!=k&&!1!==O&&("scroll"==b.settings_mode||"oneelement"==b.settings_mode)){if("oneelement"==
    b.settings_mode){var e=(l-y+p)/p;a.attr("id");0>e&&(e=0);1<e&&(e=1);"reverse"==b.direction&&(e=Math.abs(1-e));Q=t=2*e*b.settings_mode_oneelement_max_offset-b.settings_mode_oneelement_max_offset;a.attr("id")}if("scroll"==b.settings_mode){"fromtop"==b.mode_scroll&&(t=l/h*(h-k),"on"==b.is_fullscreen&&(t=l/(k-p)*(h-k),z&&(t=l/(z.height()-p)*(h-k))),"reverse"==b.direction&&(t=(1-l/h)*(h-k),"on"==b.is_fullscreen&&(t=(1-l/(k-p))*(h-k),z&&(t=(1-l/(z.height()-p))*(h-k)))));y=a.offset().top;z&&(y=-parseInt(z.css("top"),
    10));e=(l-(y-p))/(y+h-(y-p));"on"==b.is_fullscreen&&(e=l/(c("body").height()-p),z&&(e=l/(z.outerHeight()-p)));1<e&&(e=1);0>e&&(e=0);if(I)for(w=0;w<I.length;w++){var x=I[w],q=x.data("parallax_options");if(q)for(var r=0;r<q.length;r++){if(.5>=e){var u=2*e;var A=2*e-1;0>A&&(A=-A);u=A*q[r].initial+u*q[r].mid}else u=2*(e-.5),A=u-1,0>A&&(A=-A),u=A*q[r].mid+u*q[r]["final"];A=q[r].value;A=A.replace(/{{val}}/g,u);x.css(q[r].property,A)}}"normal"==b.mode_scroll&&(t=e*(h-k),"reverse"==b.direction&&(t=(1-e)*
    (h-k)),a.hasClass("debug-target")&&console.info(b.mode_scroll,l,y,p,h,y+h,e));"fromtop"==b.mode_scroll&&t<h-k&&(t=h-k);a.hasClass("simple-parallax")&&(e=(l+p-y)/(p+k),0>e&&(e=0),1<e&&(e=1),e=Math.abs(1-e),a.hasClass("is-mobile")&&(m=a.height()/2),t=2*e*m-m);ba&&(e=Math.abs((l-y)/a.outerHeight()-1),1<e&&(e=1),0>e&&(e=0),ba.css("opacity",e));C=l/h;0==a.hasClass("simple-parallax")&&(0<t&&(t=0),t<h-k&&(t=h-k));1<C&&(C=1);0>C&&(C=0);f.force_vi_y&&(t=f.force_vi_y);Q=t;ta=C;if(0===B||"css"==b.animation_engine)v=
    Q,0==D&&(a.hasClass("simple-parallax")?(g.parent().hasClass("is-image")||a.hasClass("simple-parallax--is-only-image"))&&g.css("background-position-y","calc(50% - "+parseInt(v,10)+"px)"):is_ie()&&10>=version_ie()?g.css("top",""+v+"px"):(g.css("transform","translate3d("+H+"px,"+v+"px,0)"),"oneelement"==b.settings_mode&&a.css("transform","translate3d("+H+"px,"+v+"px,0)")))}}}function P(){if(D)return requestAnimFrame(P),!1;isNaN(v)&&(v=0);ha&&(ha=!1);if("horizontal"==b.settings_mode)return!1;if(0===B||
    "css"==b.animation_engine)return G&&G(v),requestAnimFrame(P),!1;R=v;Y=Q-R;S=T;Z=ta-S;"easeIn"==b.easing&&(v=Number(Math.easeIn(1,R,Y,B).toFixed(5)),T=Number(Math.easeIn(1,S,Z,B).toFixed(5)));"easeOutQuad"==b.easing&&(v=Math.easeOutQuad(1,R,Y,B),T=Math.easeOutQuad(1,S,Z,B));"easeInOutSine"==b.easing&&(v=Math.easeInOutSine(1,R,Y,B),T=Math.easeInOutSine(1,S,Z,B));H=0;"on"==b.settings_movexaftermouse&&(ja=H,ua=sa-ja,H=Math.easeIn(1,ja,ua,B));a.hasClass("simple-parallax")?g.parent().hasClass("is-image")&&
    g.css("background-position-y","calc(50% - "+parseInt(v,10)+"px)"):is_ie()&&10>=version_ie()?g.css("top",""+v+"px"):(g.css("transform","translate3d("+H+"px,"+v+"px,0)"),"oneelement"==b.settings_mode&&a.css("transform","translate3d("+H+"px,"+v+"px,0)"));K&&K.css("opacity",T);G&&G(v);if(oa)return!1;requestAnimFrame(P)}var a=c(this),g=null,ca=null,K=null,ba=null,N=window.dzsprx_index++,w=0,r=0,k=0,h=0,x=0,X=0,p=0,J=0,ea=0,pa=0,qa=0,la=0,ia=0,B=0,v=0,H=0,T=0,R=0,ja=0,S=0,Q=0,sa=0,ta=0,Y=0,ua=0,Z=0,G=null,
    z=null,l=0,t=0,C=0,y=0,V="",O=!1,ha=!1,I=null,oa=!1,D=!1,ka=0,da=0,ma=0,ra=0,M=0,U=0,L=[],F=null,E="";ka=Number(b.init_delay);da=Number(b.init_functional_delay);ka?setTimeout(n,ka):n()})};window.dzsprx_init=function(b,n){if("undefined"!=typeof n&&"undefined"!=typeof n.init_each&&1==n.init_each){var m=0,va;for(va in n)m++;1==m&&(n=void 0);c(b).each(function(){c(this).dzsparallaxer(n)})}else c(b).dzsparallaxer(n)}})(jQuery);
function is_mobile(){var c=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(c)||/android/i.test(c)||/iPad|iPhone|iPod/.test(c)&&!window.MSStream?!0:!1}function is_touch_device(){return!!("ontouchstart"in window)}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(c){window.setTimeout(c,1E3/60)}}();
function is_ie(){var c=window.navigator.userAgent,b=c.indexOf("MSIE ");if(0<b)return parseInt(c.substring(b+5,c.indexOf(".",b)),10);if(0<c.indexOf("Trident/"))return b=c.indexOf("rv:"),parseInt(c.substring(b+3,c.indexOf(".",b)),10);b=c.indexOf("Edge/");return 0<b?parseInt(c.substring(b+5,c.indexOf(".",b)),10):!1}function is_ie11(){return!window.ActiveXObject&&"ActiveXObject"in window}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}
jQuery(document).ready(function(c){c(".dzsparallaxer---window-height").each(function(){function b(){n.height(window.innerHeight)}var n=c(this);c(window).on("resize",b);b()});dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});
/*
* Cube Portfolio - Responsive jQuery Grid Plugin
*
* version: 4.3.4 (16 July, 2018)
* require: jQuery v1.8+
*
* Copyright 2013-2018, Mihai Buricea (http://scriptpie.com/cubeportfolio/live-preview/)
* Licensed under CodeCanyon License (http://codecanyon.net/licenses)
*
*/

!function(s,t,a,r){"use strict";function l(t,e,n){var i=this;if(s.data(t,"cubeportfolio"))throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");i.obj=t,i.$obj=s(t),s.data(i.obj,"cubeportfolio",i),e&&e.sortToPreventGaps!==r&&(e.sortByDimension=e.sortToPreventGaps,delete e.sortToPreventGaps),i.options=s.extend({},s.fn.cubeportfolio.options,e,i.$obj.data("cbp-options")),i.isAnimating=!0,i.defaultFilter=i.options.defaultFilter,i.registeredEvents=[],i.queue=[],i.addedWrapp=!1,s.isFunction(n)&&i.registerEvent("initFinish",n,!0);var o=i.$obj.children();i.$obj.addClass("cbp"),(0===o.length||o.first().hasClass("cbp-item"))&&(i.wrapInner(i.obj,"cbp-wrapper"),i.addedWrapp=!0),i.$ul=i.$obj.children().addClass("cbp-wrapper"),i.wrapInner(i.obj,"cbp-wrapper-outer"),i.wrapper=i.$obj.children(".cbp-wrapper-outer"),i.blocks=i.$ul.children(".cbp-item"),i.blocksOn=i.blocks,i.wrapInner(i.blocks,"cbp-item-wrapper"),i.plugins={},s.each(l.plugins,function(t,e){var n=e(i);n&&(i.plugins[t]=n)}),i.triggerEvent("afterPlugins"),i.removeAttrAfterStoreData=s.Deferred(),i.loadImages(i.$obj,i.display)}s.extend(l.prototype,{storeData:function(t,a){var r=this;a=a||0,t.each(function(t,e){var n=s(e),i=n.width(),o=n.height();n.data("cbp",{index:a+t,indexInitial:a+t,wrapper:n.children(".cbp-item-wrapper"),widthInitial:i,heightInitial:o,width:i,height:o,widthAndGap:i+r.options.gapVertical,heightAndGap:o+r.options.gapHorizontal,left:null,leftNew:null,top:null,topNew:null,pack:!1})}),this.removeAttrAfterStoreData.resolve()},wrapInner:function(t,e){var n,i,o;if(e=e||"",!(t.length&&t.length<1))for(t.length===r&&(t=[t]),i=t.length-1;0<=i;i--){for(n=t[i],(o=a.createElement("div")).setAttribute("class",e);n.childNodes.length;)o.appendChild(n.childNodes[0]);n.appendChild(o)}},removeAttrImage:function(t){this.removeAttrAfterStoreData.then(function(){t.removeAttribute("width"),t.removeAttribute("height"),t.removeAttribute("style")})},loadImages:function(e,o){var a=this;requestAnimationFrame(function(){var t=e.find("img").map(function(t,e){if(e.hasAttribute("width")&&e.hasAttribute("height")){if(e.style.width=e.getAttribute("width")+"px",e.style.height=e.getAttribute("height")+"px",e.hasAttribute("data-cbp-src"))return null;if(null===a.checkSrc(e))a.removeAttrImage(e);else{var n=s("<img>");n.on("load.cbp error.cbp",function(){s(this).off("load.cbp error.cbp"),a.removeAttrImage(e)}),e.srcset?(n.attr("sizes",e.sizes||"100vw"),n.attr("srcset",e.srcset)):n.attr("src",e.src)}return null}return a.checkSrc(e)}),i=t.length;0!==i?s.each(t,function(t,e){var n=s("<img>");n.on("load.cbp error.cbp",function(){s(this).off("load.cbp error.cbp"),0===--i&&o.call(a)}),e.srcset?(n.attr("sizes",e.sizes),n.attr("srcset",e.srcset)):n.attr("src",e.src)}):o.call(a)})},checkSrc:function(t){var e=t.srcset,n=t.src;if(""===n)return null;var i=s("<img>");e?(i.attr("sizes",t.sizes||"100vw"),i.attr("srcset",e)):i.attr("src",n);var o=i[0];return o.complete&&o.naturalWidth!==r&&0!==o.naturalWidth?null:o},display:function(){var t=this;t.width=t.$obj.outerWidth(),t.triggerEvent("initStartRead"),t.triggerEvent("initStartWrite"),0<t.width&&(t.storeData(t.blocks),t.layoutAndAdjustment()),t.triggerEvent("initEndRead"),t.triggerEvent("initEndWrite"),t.$obj.addClass("cbp-ready"),t.runQueue("delayFrame",t.delayFrame)},delayFrame:function(){var t=this;requestAnimationFrame(function(){t.resizeEvent(),t.triggerEvent("initFinish"),t.isAnimating=!1,t.$obj.trigger("initComplete.cbp")})},resizeEvent:function(){var e=this;l["private"].resize.initEvent({instance:e,fn:function(){e.triggerEvent("beforeResizeGrid");var t=e.$obj.outerWidth();t&&e.width!==t&&(e.width=t,"alignCenter"===e.options.gridAdjustment&&(e.wrapper[0].style.maxWidth=""),e.layoutAndAdjustment(),e.triggerEvent("resizeGrid")),e.triggerEvent("resizeWindow")}})},gridAdjust:function(){var r=this;"responsive"===r.options.gridAdjustment?r.responsiveLayout():(r.blocks.removeAttr("style"),r.blocks.each(function(t,e){var n=s(e).data("cbp"),i=e.getBoundingClientRect(),o=r.columnWidthTruncate(i.right-i.left),a=Math.round(i.bottom-i.top);n.height=a,n.heightAndGap=a+r.options.gapHorizontal,n.width=o,n.widthAndGap=o+r.options.gapVertical}),r.widthAvailable=r.width+r.options.gapVertical),r.triggerEvent("gridAdjust")},layoutAndAdjustment:function(t){t&&(this.width=this.$obj.outerWidth()),this.gridAdjust(),this.layout()},layout:function(){var t=this;t.computeBlocks(t.filterConcat(t.defaultFilter)),"slider"===t.options.layoutMode?(t.sliderLayoutReset(),t.sliderLayout()):(t.mosaicLayoutReset(),t.mosaicLayout()),t.blocksOff.addClass("cbp-item-off"),t.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=s(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px"}),t.resizeMainContainer()},computeFilter:function(t){this.computeBlocks(t),this.mosaicLayoutReset(),this.mosaicLayout(),this.filterLayout()},filterLayout:function(){this.blocksOff.addClass("cbp-item-off"),this.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=s(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px"}),this.resizeMainContainer(),this.filterFinish()},filterFinish:function(){this.isAnimating=!1,this.$obj.trigger("filterComplete.cbp"),this.triggerEvent("filterFinish")},computeBlocks:function(t){var e=this;e.blocksOnInitial=e.blocksOn,e.blocksOn=e.blocks.filter(t),e.blocksOff=e.blocks.not(t),e.triggerEvent("computeBlocksFinish",t)},responsiveLayout:function(){var a=this;a.cols=a[s.isArray(a.options.mediaQueries)?"getColumnsBreakpoints":"getColumnsAuto"](),a.columnWidth=a.columnWidthTruncate((a.width+a.options.gapVertical)/a.cols),a.widthAvailable=a.columnWidth*a.cols,"mosaic"===a.options.layoutMode&&a.getMosaicWidthReference(),a.blocks.each(function(t,e){var n,i=s(e).data("cbp"),o=1;"mosaic"===a.options.layoutMode&&(o=a.getColsMosaic(i.widthInitial)),n=a.columnWidth*o-a.options.gapVertical,e.style.width=n+"px",i.width=n,i.widthAndGap=n+a.options.gapVertical,e.style.height=""});var r=[];a.blocks.each(function(t,e){s.each(s(e).find("img").filter("[width][height]"),function(t,e){var i=0;s(e).parentsUntil(".cbp-item").each(function(t,e){var n=s(e).width();if(0<n)return i=n,!1});var n=parseInt(e.getAttribute("width"),10),o=parseInt(e.getAttribute("height"),10),a=parseFloat((n/o).toFixed(10));r.push({el:e,width:i,height:Math.round(i/a)})})}),s.each(r,function(t,e){e.el.width=e.width,e.el.height=e.height,e.el.style.width=e.width+"px",e.el.style.height=e.height+"px"}),a.blocks.each(function(t,e){var n=s(e).data("cbp"),i=e.getBoundingClientRect(),o=Math.round(i.bottom-i.top);n.height=o,n.heightAndGap=o+a.options.gapHorizontal})},getMosaicWidthReference:function(){var i=[];this.blocks.each(function(t,e){var n=s(e).data("cbp");i.push(n.widthInitial)}),i.sort(function(t,e){return t-e}),i[0]?this.mosaicWidthReference=i[0]:this.mosaicWidthReference=this.columnWidth},getColsMosaic:function(t){if(t===this.width)return this.cols;var e=t/this.mosaicWidthReference;return e=.79<=e%1?Math.ceil(e):Math.floor(e),Math.min(Math.max(e,1),this.cols)},getColumnsAuto:function(){if(0===this.blocks.length)return 1;var t=this.blocks.first().data("cbp").widthInitial+this.options.gapVertical;return Math.max(Math.round(this.width/t),1)},getColumnsBreakpoints:function(){var n,t=this,i=t.width;return s.each(t.options.mediaQueries,function(t,e){if(i>=e.width)return n=e,!1}),n||(n=t.options.mediaQueries[t.options.mediaQueries.length-1]),t.triggerEvent("onMediaQueries",n.options),n.cols},columnWidthTruncate:function(t){return Math.floor(t)},resizeMainContainer:function(){var o,t=this,e=Math.max(t.freeSpaces.slice(-1)[0].topStart-t.options.gapHorizontal,0);"alignCenter"===t.options.gridAdjustment&&(o=0,t.blocksOn.each(function(t,e){var n=s(e).data("cbp"),i=n.left+n.width;o<i&&(o=i)}),t.wrapper[0].style.maxWidth=o+"px"),e!==t.height&&(t.obj.style.height=e+"px",t.height!==r&&(l["private"].modernBrowser?t.$obj.one(l["private"].transitionend,function(){t.$obj.trigger("pluginResize.cbp")}):t.$obj.trigger("pluginResize.cbp")),t.height=e),t.triggerEvent("resizeMainContainer")},filterConcat:function(t){return t.replace(/\|/gi,"")},pushQueue:function(t,e){this.queue[t]=this.queue[t]||[],this.queue[t].push(e)},runQueue:function(t,e){var n=this.queue[t]||[];s.when.apply(s,n).then(s.proxy(e,this))},clearQueue:function(t){this.queue[t]=[]},registerEvent:function(t,e,n){this.registeredEvents[t]||(this.registeredEvents[t]=[]),this.registeredEvents[t].push({func:e,oneTime:n||!1})},triggerEvent:function(t,e){var n,i,o=this;if(o.registeredEvents[t])for(n=0,i=o.registeredEvents[t].length;n<i;n++)o.registeredEvents[t][n].func.call(o,e),o.registeredEvents[t][n].oneTime&&(o.registeredEvents[t].splice(n,1),n--,i--)},addItems:function(t,e,i){var o=this;o.wrapInner(t,"cbp-item-wrapper"),o.$ul[i](t.addClass("cbp-item-loading").css({top:"100%",left:0})),l["private"].modernBrowser?t.last().one(l["private"].animationend,function(){o.addItemsFinish(t,e)}):o.addItemsFinish(t,e),o.loadImages(t,function(){if(o.$obj.addClass("cbp-updateItems"),"append"===i)o.storeData(t,o.blocks.length),s.merge(o.blocks,t);else{o.storeData(t);var n=t.length;o.blocks.each(function(t,e){s(e).data("cbp").index=n+t}),o.blocks=s.merge(t,o.blocks)}o.triggerEvent("addItemsToDOM",t),o.triggerEvent("triggerSort"),o.layoutAndAdjustment(!0),o.elems&&l["public"].showCounter.call(o.obj,o.elems)})},addItemsFinish:function(t,e){this.isAnimating=!1,this.$obj.removeClass("cbp-updateItems"),t.removeClass("cbp-item-loading"),s.isFunction(e)&&e.call(this,t),this.$obj.trigger("onAfterLoadMore.cbp",[t])},removeItems:function(t,e){var o=this;o.$obj.addClass("cbp-updateItems"),l["private"].modernBrowser?t.last().one(l["private"].animationend,function(){o.removeItemsFinish(t,e)}):o.removeItemsFinish(t,e),t.each(function(t,i){o.blocks.each(function(t,e){if(i===e){var n=s(e);o.blocks.splice(t,1),l["private"].modernBrowser?(n.one(l["private"].animationend,function(){n.remove()}),n.addClass("cbp-removeItem")):n.remove()}})}),o.blocks.each(function(t,e){s(e).data("cbp").index=t}),o.triggerEvent("triggerSort"),o.layoutAndAdjustment(!0),o.elems&&l["public"].showCounter.call(o.obj,o.elems)},removeItemsFinish:function(t,e){this.isAnimating=!1,this.$obj.removeClass("cbp-updateItems"),s.isFunction(e)&&e.call(this,t)}}),s.fn.cubeportfolio=function(t,e,n){return this.each(function(){if("object"==typeof t||!t)return l["public"].init.call(this,t,e);if(l["public"][t])return l["public"][t].call(this,e,n);throw new Error("Method "+t+" does not exist on jquery.cubeportfolio.js")})},l.plugins={},s.fn.cubeportfolio.constructor=l}(jQuery,window,document),function(l,t,e,n){"use strict";var i=l.fn.cubeportfolio.constructor;l.extend(i.prototype,{mosaicLayoutReset:function(){var n=this;n.blocksAreSorted=!1,n.blocksOn.each(function(t,e){l(e).data("cbp").pack=!1,n.options.sortByDimension&&(e.style.height="")}),n.freeSpaces=[{leftStart:0,leftEnd:n.widthAvailable,topStart:0,topEnd:Math.pow(2,18)}]},mosaicLayout:function(){for(var t=this,e=0,n=t.blocksOn.length;e<n;e++){var i=t.getSpaceIndexAndBlock();if(null===i)return t.mosaicLayoutReset(),t.blocksAreSorted=!0,t.sortBlocks(t.blocksOn,"widthAndGap","heightAndGap",!0),void t.mosaicLayout();t.generateF1F2(i.spaceIndex,i.dataBlock),t.generateG1G2G3G4(i.dataBlock),t.cleanFreeSpaces(),t.addHeightToBlocks()}t.blocksAreSorted&&t.sortBlocks(t.blocksOn,"topNew","leftNew")},getSpaceIndexAndBlock:function(){var t=this,s=null;return l.each(t.freeSpaces,function(i,o){var a=o.leftEnd-o.leftStart,r=o.topEnd-o.topStart;return t.blocksOn.each(function(t,e){var n=l(e).data("cbp");if(!0!==n.pack)return n.widthAndGap<=a&&n.heightAndGap<=r?(n.pack=!0,s={spaceIndex:i,dataBlock:n},n.leftNew=o.leftStart,n.topNew=o.topStart,!1):void 0}),!t.blocksAreSorted&&t.options.sortByDimension&&0<i?(s=null,!1):null===s&&void 0}),s},generateF1F2:function(t,e){var n=this.freeSpaces[t],i={leftStart:n.leftStart+e.widthAndGap,leftEnd:n.leftEnd,topStart:n.topStart,topEnd:n.topEnd},o={leftStart:n.leftStart,leftEnd:n.leftEnd,topStart:n.topStart+e.heightAndGap,topEnd:n.topEnd};this.freeSpaces.splice(t,1),i.leftStart<i.leftEnd&&i.topStart<i.topEnd&&(this.freeSpaces.splice(t,0,i),t++),o.leftStart<o.leftEnd&&o.topStart<o.topEnd&&this.freeSpaces.splice(t,0,o)},generateG1G2G3G4:function(i){var o=this,a=[];l.each(o.freeSpaces,function(t,e){var n=o.intersectSpaces(e,i);null!==n?(o.generateG1(e,n,a),o.generateG2(e,n,a),o.generateG3(e,n,a),o.generateG4(e,n,a)):a.push(e)}),o.freeSpaces=a},intersectSpaces:function(t,e){var n={leftStart:e.leftNew,leftEnd:e.leftNew+e.widthAndGap,topStart:e.topNew,topEnd:e.topNew+e.heightAndGap};if(t.leftStart===n.leftStart&&t.leftEnd===n.leftEnd&&t.topStart===n.topStart&&t.topEnd===n.topEnd)return null;var i=Math.max(t.leftStart,n.leftStart),o=Math.min(t.leftEnd,n.leftEnd),a=Math.max(t.topStart,n.topStart),r=Math.min(t.topEnd,n.topEnd);return o<=i||r<=a?null:{leftStart:i,leftEnd:o,topStart:a,topEnd:r}},generateG1:function(t,e,n){t.topStart!==e.topStart&&n.push({leftStart:t.leftStart,leftEnd:t.leftEnd,topStart:t.topStart,topEnd:e.topStart})},generateG2:function(t,e,n){t.leftEnd!==e.leftEnd&&n.push({leftStart:e.leftEnd,leftEnd:t.leftEnd,topStart:t.topStart,topEnd:t.topEnd})},generateG3:function(t,e,n){t.topEnd!==e.topEnd&&n.push({leftStart:t.leftStart,leftEnd:t.leftEnd,topStart:e.topEnd,topEnd:t.topEnd})},generateG4:function(t,e,n){t.leftStart!==e.leftStart&&n.push({leftStart:t.leftStart,leftEnd:e.leftStart,topStart:t.topStart,topEnd:t.topEnd})},cleanFreeSpaces:function(){this.freeSpaces.sort(function(t,e){return t.topStart>e.topStart?1:t.topStart<e.topStart?-1:t.leftStart>e.leftStart?1:t.leftStart<e.leftStart?-1:0}),this.correctSubPixelValues(),this.removeNonMaximalFreeSpaces()},correctSubPixelValues:function(){var t,e,n,i;for(t=0,e=this.freeSpaces.length-1;t<e;t++)n=this.freeSpaces[t],(i=this.freeSpaces[t+1]).topStart-n.topStart<=1&&(i.topStart=n.topStart)},removeNonMaximalFreeSpaces:function(){var t=this;t.uniqueFreeSpaces(),t.freeSpaces=l.map(t.freeSpaces,function(n,i){return l.each(t.freeSpaces,function(t,e){if(i!==t)return e.leftStart<=n.leftStart&&e.leftEnd>=n.leftEnd&&e.topStart<=n.topStart&&e.topEnd>=n.topEnd?(n=null,!1):void 0}),n})},uniqueFreeSpaces:function(){var e=[];l.each(this.freeSpaces,function(t,n){l.each(e,function(t,e){if(e.leftStart===n.leftStart&&e.leftEnd===n.leftEnd&&e.topStart===n.topStart&&e.topEnd===n.topEnd)return n=null,!1}),null!==n&&e.push(n)}),this.freeSpaces=e},addHeightToBlocks:function(){var o=this;l.each(o.freeSpaces,function(t,i){o.blocksOn.each(function(t,e){var n=l(e).data("cbp");!0===n.pack&&(o.intersectSpaces(i,n)&&-1===i.topStart-n.topNew-n.heightAndGap&&(e.style.height=n.height-1+"px"))})})},sortBlocks:function(t,o,a,r){a=void 0===a?"leftNew":a,r=void 0===r?1:-1,t.sort(function(t,e){var n=l(t).data("cbp"),i=l(e).data("cbp");return n[o]>i[o]?r:n[o]<i[o]?-r:n[a]>i[a]?r:n[a]<i[a]?-r:n.index>i.index?r:n.index<i.index?-r:void 0})}})}(jQuery,window,document),jQuery.fn.cubeportfolio.options={filters:"",search:"",layoutMode:"grid",sortByDimension:!1,drag:!0,auto:!1,autoTimeout:5e3,autoPauseOnHover:!0,showNavigation:!0,showPagination:!0,rewindNav:!0,scrollByPage:!1,defaultFilter:"*",filterDeeplinking:!1,animationType:"fadeOut",gridAdjustment:"responsive",mediaQueries:!1,gapHorizontal:10,gapVertical:10,caption:"pushTop",displayType:"fadeIn",displayTypeSpeed:400,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageAnimation:"left",singlePageCallback:null,singlePageInlineDelegate:".cbp-singlePageInline",singlePageInlineDeeplinking:!1,singlePageInlinePosition:"top",singlePageInlineInFocus:!0,singlePageInlineCallback:null,plugins:{}},function(a,o,r,t){"use strict";var s=a.fn.cubeportfolio.constructor,l=a(o);s["private"]={publicEvents:function(e,n,i){var o=this;o.events=[],o.initEvent=function(t){0===o.events.length&&o.scrollEvent(),o.events.push(t)},o.destroyEvent=function(n){o.events=a.map(o.events,function(t,e){if(t.instance!==n)return t}),0===o.events.length&&l.off(e)},o.scrollEvent=function(){var t;l.on(e,function(){clearTimeout(t),t=setTimeout(function(){a.isFunction(i)&&i.call(o)||a.each(o.events,function(t,e){e.fn.call(e.instance)})},n)})}},checkInstance:function(t){var e=a.data(this,"cubeportfolio");if(!e)throw new Error("cubeportfolio is not initialized. Initialize it before calling "+t+" method!");return e.triggerEvent("publicMethod"),e},browserInfo:function(){var t,e,n=s["private"],i=navigator.appVersion;-1!==i.indexOf("MSIE 8.")?n.browser="ie8":-1!==i.indexOf("MSIE 9.")?n.browser="ie9":-1!==i.indexOf("MSIE 10.")?n.browser="ie10":o.ActiveXObject||"ActiveXObject"in o?n.browser="ie11":/android/gi.test(i)?n.browser="android":/iphone|ipad|ipod/gi.test(i)?n.browser="ios":/chrome/gi.test(i)?n.browser="chrome":n.browser="",void 0!==typeof n.styleSupport("perspective")&&(t=n.styleSupport("transition"),n.transitionend={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[t],e=n.styleSupport("animation"),n.animationend={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"}[e],n.animationDuration={WebkitAnimation:"webkitAnimationDuration",animation:"animationDuration"}[e],n.animationDelay={WebkitAnimation:"webkitAnimationDelay",animation:"animationDelay"}[e],n.transform=n.styleSupport("transform"),t&&e&&n.transform&&(n.modernBrowser=!0))},styleSupport:function(t){var e,n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1),i=r.createElement("div");return t in i.style?e=t:n in i.style&&(e=n),i=null,e}},s["private"].browserInfo(),s["private"].resize=new s["private"].publicEvents("resize.cbp",50,function(){if(o.innerHeight==screen.height)return!0})}(jQuery,window,document),function(a,t,e,n){"use strict";var r=a.fn.cubeportfolio.constructor;r["public"]={init:function(t,e){new r(this,t,e)},destroy:function(t){var e=r["private"].checkInstance.call(this,"destroy");e.triggerEvent("beforeDestroy"),a.removeData(this,"cubeportfolio"),e.blocks.removeData("cbp"),e.$obj.removeClass("cbp-ready").removeAttr("style"),e.$ul.removeClass("cbp-wrapper"),r["private"].resize.destroyEvent(e),e.$obj.off(".cbp"),e.blocks.removeClass("cbp-item-off").removeAttr("style"),e.blocks.find(".cbp-item-wrapper").each(function(t,e){var n=a(e),i=n.children();i.length?i.unwrap():n.remove()}),e.destroySlider&&e.destroySlider(),e.$ul.unwrap(),e.addedWrapp&&e.blocks.unwrap(),0===e.blocks.length&&e.$ul.remove(),a.each(e.plugins,function(t,e){"function"==typeof e.destroy&&e.destroy()}),a.isFunction(t)&&t.call(e),e.triggerEvent("afterDestroy")},filter:function(t,e){var n,i=r["private"].checkInstance.call(this,"filter");if(!i.isAnimating){if(i.isAnimating=!0,a.isFunction(e)&&i.registerEvent("filterFinish",e,!0),a.isFunction(t)){if(void 0===(n=t.call(i,i.blocks)))throw new Error("When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.")}else{if(i.options.filterDeeplinking){var o=location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi,"");location.href=o+"#cbpf="+encodeURIComponent(t),i.singlePage&&i.singlePage.url&&(i.singlePage.url=location.href)}i.defaultFilter=t,n=i.filterConcat(i.defaultFilter)}i.triggerEvent("filterStart",n),i.singlePageInline&&i.singlePageInline.isOpen?i.singlePageInline.close("promise",{callback:function(){i.computeFilter(n)}}):i.computeFilter(n)}},showCounter:function(t,e){var n=r["private"].checkInstance.call(this,"showCounter");a.isFunction(e)&&n.registerEvent("showCounterFinish",e,!0),(n.elems=t).each(function(){var t=a(this),e=n.blocks.filter(t.data("filter")).length;t.find(".cbp-filter-counter").text(e)}),n.triggerEvent("showCounterFinish",t)},appendItems:function(t,e){r["public"].append.call(this,t,e)},append:function(t,e){var n=r["private"].checkInstance.call(this,"append"),i=a(t).filter(".cbp-item");n.isAnimating||i.length<1?a.isFunction(e)&&e.call(n,i):(n.isAnimating=!0,n.singlePageInline&&n.singlePageInline.isOpen?n.singlePageInline.close("promise",{callback:function(){n.addItems(i,e,"append")}}):n.addItems(i,e,"append"))},prepend:function(t,e){var n=r["private"].checkInstance.call(this,"prepend"),i=a(t).filter(".cbp-item");n.isAnimating||i.length<1?a.isFunction(e)&&e.call(n,i):(n.isAnimating=!0,n.singlePageInline&&n.singlePageInline.isOpen?n.singlePageInline.close("promise",{callback:function(){n.addItems(i,e,"prepend")}}):n.addItems(i,e,"prepend"))},remove:function(t,e){var n=r["private"].checkInstance.call(this,"remove"),i=a(t).filter(".cbp-item");n.isAnimating||i.length<1?a.isFunction(e)&&e.call(n,i):(n.isAnimating=!0,n.singlePageInline&&n.singlePageInline.isOpen?n.singlePageInline.close("promise",{callback:function(){n.removeItems(i,e)}}):n.removeItems(i,e))},layout:function(t){var e=r["private"].checkInstance.call(this,"layout");e.width=e.$obj.outerWidth(),e.isAnimating||e.width<=0||("alignCenter"===e.options.gridAdjustment&&(e.wrapper[0].style.maxWidth=""),e.storeData(e.blocks),e.layoutAndAdjustment()),a.isFunction(t)&&t.call(e)}}}(jQuery,window,document),function(h,t,b,e){"use strict";var v=h.fn.cubeportfolio.constructor;h.extend(v.prototype,{updateSliderPagination:function(){var t,e,n=this;if(n.options.showPagination){for(t=Math.ceil(n.blocksOn.length/n.cols),n.navPagination.empty(),e=t-1;0<=e;e--)h("<div/>",{"class":"cbp-nav-pagination-item","data-slider-action":"jumpTo"}).appendTo(n.navPagination);n.navPaginationItems=n.navPagination.children()}n.enableDisableNavSlider()},destroySlider:function(){var t=this;"slider"===t.options.layoutMode&&(t.$obj.removeClass("cbp-mode-slider"),t.$ul.removeAttr("style"),t.$ul.off(".cbp"),h(b).off(".cbp"),t.options.auto&&t.stopSliderAuto())},nextSlider:function(t){var e=this;if(e.isEndSlider()){if(!e.isRewindNav())return;e.sliderActive=0}else e.options.scrollByPage?e.sliderActive=Math.min(e.sliderActive+e.cols,e.blocksOn.length-e.cols):e.sliderActive+=1;e.goToSlider()},prevSlider:function(t){var e=this;if(e.isStartSlider()){if(!e.isRewindNav())return;e.sliderActive=e.blocksOn.length-e.cols}else e.options.scrollByPage?e.sliderActive=Math.max(0,e.sliderActive-e.cols):e.sliderActive-=1;e.goToSlider()},jumpToSlider:function(t){var e=this,n=Math.min(t.index()*e.cols,e.blocksOn.length-e.cols);n!==e.sliderActive&&(e.sliderActive=n,e.goToSlider())},jumpDragToSlider:function(t){var e,n,i,o=this,a=0<t;o.options.scrollByPage?(e=o.cols*o.columnWidth,n=o.cols):(e=o.columnWidth,n=1),t=Math.abs(t),i=Math.floor(t/e)*n,20<t%e&&(i+=n),o.sliderActive=a?Math.min(o.sliderActive+i,o.blocksOn.length-o.cols):Math.max(0,o.sliderActive-i),o.goToSlider()},isStartSlider:function(){return 0===this.sliderActive},isEndSlider:function(){return this.sliderActive+this.cols>this.blocksOn.length-1},goToSlider:function(){this.enableDisableNavSlider(),this.updateSliderPosition()},startSliderAuto:function(){var t=this;t.isDrag?t.stopSliderAuto():t.timeout=setTimeout(function(){t.nextSlider(),t.startSliderAuto()},t.options.autoTimeout)},stopSliderAuto:function(){clearTimeout(this.timeout)},enableDisableNavSlider:function(){var t,e,n=this;n.isRewindNav()||(e=n.isStartSlider()?"addClass":"removeClass",n.navPrev[e]("cbp-nav-stop"),e=n.isEndSlider()?"addClass":"removeClass",n.navNext[e]("cbp-nav-stop")),n.options.showPagination&&(t=n.options.scrollByPage?Math.ceil(n.sliderActive/n.cols):n.isEndSlider()?n.navPaginationItems.length-1:Math.floor(n.sliderActive/n.cols),n.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(t).addClass("cbp-nav-pagination-active")),n.customPagination&&(t=n.options.scrollByPage?Math.ceil(n.sliderActive/n.cols):n.isEndSlider()?n.customPaginationItems.length-1:Math.floor(n.sliderActive/n.cols),n.customPaginationItems.removeClass(n.customPaginationClass).eq(t).addClass(n.customPaginationClass))},isRewindNav:function(){return!this.options.showNavigation||!(this.blocksOn.length<=this.cols)&&!!this.options.rewindNav},sliderItemsLength:function(){return this.blocksOn.length<=this.cols},sliderLayout:function(){var i=this;i.blocksOn.each(function(t,e){var n=h(e).data("cbp");n.leftNew=i.columnWidth*t,n.topNew=0,i.sliderFreeSpaces.push({topStart:n.heightAndGap})}),i.getFreeSpacesForSlider(),i.$ul.width(i.columnWidth*i.blocksOn.length-i.options.gapVertical)},getFreeSpacesForSlider:function(){var t=this;t.freeSpaces=t.sliderFreeSpaces.slice(t.sliderActive,t.sliderActive+t.cols),t.freeSpaces.sort(function(t,e){return t.topStart>e.topStart?1:t.topStart<e.topStart?-1:void 0})},updateSliderPosition:function(){var t=this,e=-t.sliderActive*t.columnWidth;v["private"].modernBrowser?t.$ul[0].style[v["private"].transform]="translate3d("+e+"px, 0px, 0)":t.$ul[0].style.left=e+"px",t.getFreeSpacesForSlider(),t.resizeMainContainer()},dragSlider:function(){var n,i,e,o,a,r=this,s=h(b),l=!1,p={},c=!1;function u(t){r.$obj.removeClass("cbp-mode-slider-dragStart"),l=!0,0!==i?(e.one("click.cbp",function(t){return!1}),requestAnimationFrame(function(){r.jumpDragToSlider(i),r.$ul.one(v["private"].transitionend,f)})):f.call(r),s.off(p.move),s.off(p.end)}function d(t){(8<(i=n-g(t).x)||i<-8)&&t.preventDefault(),r.isDrag=!0;var e=o-i;i<0&&i<o?e=(o-i)/5:0<i&&o-i<-a&&(e=(a+o-i)/5-a),v["private"].modernBrowser?r.$ul[0].style[v["private"].transform]="translate3d("+e+"px, 0px, 0)":r.$ul[0].style.left=e+"px"}function f(){if(l=!1,r.isDrag=!1,r.options.auto){if(r.mouseIsEntered)return;r.startSliderAuto()}}function g(t){return void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(t=t.originalEvent.touches[0]),{x:t.pageX,y:t.pageY}}r.isDrag=!1,"ontouchstart"in t||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?(p={start:"touchstart.cbp",move:"touchmove.cbp",end:"touchend.cbp"},c=!0):p={start:"mousedown.cbp",move:"mousemove.cbp",end:"mouseup.cbp"},r.$ul.on(p.start,function(t){r.sliderItemsLength()||(c?t:t.preventDefault(),r.options.auto&&r.stopSliderAuto(),l?h(e).one("click.cbp",function(){return!1}):(e=h(t.target),n=g(t).x,i=0,o=-r.sliderActive*r.columnWidth,a=r.columnWidth*(r.blocksOn.length-r.cols),s.on(p.move,d),s.on(p.end,u),r.$obj.addClass("cbp-mode-slider-dragStart")))})},sliderLayoutReset:function(){this.freeSpaces=[],this.sliderFreeSpaces=[]}})}(jQuery,window,document),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(){for(var a=0,t=["moz","webkit"],e=0;e<t.length&&!window.requestAnimationFrame;e++)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),i=Math.max(0,16-(n-a)),o=window.setTimeout(function(){t(n+i)},i);return a=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(i,t,e,n){"use strict";var o=i.fn.cubeportfolio.constructor;function a(e){(this.parent=e).filterLayout=this.filterLayout,e.registerEvent("computeBlocksFinish",function(t){e.blocksOn2On=e.blocksOnInitial.filter(t),e.blocksOn2Off=e.blocksOnInitial.not(t)})}a.prototype.filterLayout=function(){var t=this;function e(){t.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(t,e){var n=i(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px",e.style[o["private"].transform]=""}),t.blocksOff.addClass("cbp-item-off"),t.$obj.removeClass("cbp-animation-"+t.options.animationType),t.filterFinish()}t.$obj.addClass("cbp-animation-"+t.options.animationType),t.blocksOn2On.addClass("cbp-item-on2on").each(function(t,e){var n=i(e).data("cbp");e.style[o["private"].transform]="translate3d("+(n.leftNew-n.left)+"px, "+(n.topNew-n.top)+"px, 0)"}),t.blocksOn2Off.addClass("cbp-item-on2off"),t.blocksOff2On=t.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(t,e){var n=i(e).data("cbp");e.style.left=n.leftNew+"px",e.style.top=n.topNew+"px"}),t.blocksOn2Off.length?t.blocksOn2Off.last().data("cbp").wrapper.one(o["private"].animationend,e):t.blocksOff2On.length?t.blocksOff2On.last().data("cbp").wrapper.one(o["private"].animationend,e):t.blocksOn2On.length?t.blocksOn2On.last().one(o["private"].transitionend,e):e(),t.resizeMainContainer()},a.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},o.plugins.animationClassic=function(t){return!o["private"].modernBrowser||i.inArray(t.options.animationType,["boxShadow","fadeOut","flipBottom","flipOut","quicksand","scaleSides","skew"])<0?null:new a(t)}}(jQuery,window,document),function(o,t,e,n){"use strict";var a=o.fn.cubeportfolio.constructor;function i(t){(this.parent=t).filterLayout=this.filterLayout}i.prototype.filterLayout=function(){var i=this,t=i.$ul[0].cloneNode(!0);function e(){i.wrapper[0].removeChild(t),"sequentially"===i.options.animationType&&i.blocksOn.each(function(t,e){o(e).data("cbp").wrapper[0].style[a["private"].animationDelay]=""}),i.$obj.removeClass("cbp-animation-"+i.options.animationType),i.filterFinish()}t.setAttribute("class","cbp-wrapper-helper"),i.wrapper[0].insertBefore(t,i.$ul[0]),requestAnimationFrame(function(){i.$obj.addClass("cbp-animation-"+i.options.animationType),i.blocksOff.addClass("cbp-item-off"),i.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=o(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px","sequentially"===i.options.animationType&&(n.wrapper[0].style[a["private"].animationDelay]=60*t+"ms")}),i.blocksOn.length?i.blocksOn.last().data("cbp").wrapper.one(a["private"].animationend,e):i.blocksOnInitial.length?i.blocksOnInitial.last().data("cbp").wrapper.one(a["private"].animationend,e):e(),i.resizeMainContainer()})},i.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},a.plugins.animationClone=function(t){return!a["private"].modernBrowser||o.inArray(t.options.animationType,["fadeOutTop","slideLeft","sequentially"])<0?null:new i(t)}}(jQuery,window,document),function(a,t,e,n){"use strict";var r=a.fn.cubeportfolio.constructor;function i(t){(this.parent=t).filterLayout=this.filterLayout}i.prototype.filterLayout=function(){var n=this,t=n.$ul.clone(!0,!0);t[0].setAttribute("class","cbp-wrapper-helper"),n.wrapper[0].insertBefore(t[0],n.$ul[0]);var i=t.find(".cbp-item").not(".cbp-item-off");function o(){n.wrapper[0].removeChild(t[0]),n.$obj.removeClass("cbp-animation-"+n.options.animationType),n.blocks.each(function(t,e){a(e).data("cbp").wrapper[0].style[r["private"].animationDelay]=""}),n.filterFinish()}n.blocksAreSorted&&n.sortBlocks(i,"top","left"),i.children(".cbp-item-wrapper").each(function(t,e){e.style[r["private"].animationDelay]=50*t+"ms"}),requestAnimationFrame(function(){n.$obj.addClass("cbp-animation-"+n.options.animationType),n.blocksOff.addClass("cbp-item-off"),n.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=a(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px",n.wrapper[0].style[r["private"].animationDelay]=50*t+"ms"});var t=n.blocksOn.length,e=i.length;0===t&&0===e?o():t<e?i.last().children(".cbp-item-wrapper").one(r["private"].animationend,o):n.blocksOn.last().data("cbp").wrapper.one(r["private"].animationend,o),n.resizeMainContainer()})},i.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},r.plugins.animationCloneDelay=function(t){return!r["private"].modernBrowser||a.inArray(t.options.animationType,["3dflip","flipOutDelay","foldLeft","frontRow","rotateRoom","rotateSides","scaleDown","slideDelay","unfold"])<0?null:new i(t)}}(jQuery,window,document),function(i,t,e,n){"use strict";var o=i.fn.cubeportfolio.constructor;function a(t){(this.parent=t).filterLayout=this.filterLayout}a.prototype.filterLayout=function(){var t=this,e=t.$ul[0].cloneNode(!0);function n(){t.wrapper[0].removeChild(e),t.$obj.removeClass("cbp-animation-"+t.options.animationType),t.filterFinish()}e.setAttribute("class","cbp-wrapper-helper"),t.wrapper[0].insertBefore(e,t.$ul[0]),requestAnimationFrame(function(){t.$obj.addClass("cbp-animation-"+t.options.animationType),t.blocksOff.addClass("cbp-item-off"),t.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=i(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px"}),t.blocksOn.length?t.$ul.one(o["private"].animationend,n):t.blocksOnInitial.length?i(e).one(o["private"].animationend,n):n(),t.resizeMainContainer()})},a.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},o.plugins.animationWrapper=function(t){return!o["private"].modernBrowser||i.inArray(t.options.animationType,["bounceBottom","bounceLeft","bounceTop","moveLeft"])<0?null:new a(t)}}(jQuery,window,document),function(t,e,n,i){"use strict";var o=t.fn.cubeportfolio.constructor;function a(t){var e=this,n=t.options;e.parent=t,e.captionOn=n.caption,t.registerEvent("onMediaQueries",function(t){t&&t.hasOwnProperty("caption")?e.captionOn!==t.caption&&(e.destroy(),e.captionOn=t.caption,e.init()):e.captionOn!==n.caption&&(e.destroy(),e.captionOn=n.caption,e.init())}),e.init()}a.prototype.init=function(){var t=this;""!=t.captionOn&&("expand"===t.captionOn||o["private"].modernBrowser||(t.parent.options.caption=t.captionOn="minimal"),t.parent.$obj.addClass("cbp-caption-active cbp-caption-"+t.captionOn))},a.prototype.destroy=function(){this.parent.$obj.removeClass("cbp-caption-active cbp-caption-"+this.captionOn)},o.plugins.caption=function(t){return new a(t)}}(jQuery,window,document),function(l,t,e,n){"use strict";var i=l.fn.cubeportfolio.constructor;function o(s){(this.parent=s).registerEvent("initFinish",function(){s.$obj.on("click.cbp",".cbp-caption-defaultWrap",function(t){if(t.preventDefault(),!s.isAnimating){s.isAnimating=!0;var e=l(this),n=e.next(),i=e.parent(),o={position:"relative",height:n.outerHeight(!0)},a={position:"relative",height:0};if(s.$obj.addClass("cbp-caption-expand-active"),i.hasClass("cbp-caption-expand-open")){var r=a;a=o,o=r,i.removeClass("cbp-caption-expand-open")}n.css(o),s.$obj.one("pluginResize.cbp",function(){s.isAnimating=!1,s.$obj.removeClass("cbp-caption-expand-active"),0===o.height&&(i.removeClass("cbp-caption-expand-open"),n.attr("style",""))}),s.layoutAndAdjustment(!0),n.css(a),requestAnimationFrame(function(){i.addClass("cbp-caption-expand-open"),n.css(o),s.triggerEvent("gridAdjust"),s.triggerEvent("resizeGrid")})}})},!0)}o.prototype.destroy=function(){this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active")},i.plugins.captionExpand=function(t){return"expand"!==t.options.caption?null:new o(t)}}(jQuery,window,document),function(e,t,n,i){"use strict";var o=e.fn.cubeportfolio.constructor;function a(n){n.registerEvent("initEndWrite",function(){if(!(n.width<=0)){var t=e.Deferred();n.pushQueue("delayFrame",t),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=t*n.options.displayTypeSpeed+"ms"}),n.$obj.addClass("cbp-displayType-bottomToTop"),n.blocksOn.last().one(o["private"].animationend,function(){n.$obj.removeClass("cbp-displayType-bottomToTop"),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=""}),t.resolve()})}},!0)}o.plugins.displayBottomToTop=function(t){return o["private"].modernBrowser&&"bottomToTop"===t.options.displayType&&0!==t.blocksOn.length?new a(t):null}}(jQuery,window,document),function(n,t,e,i){"use strict";var o=n.fn.cubeportfolio.constructor;function a(e){e.registerEvent("initEndWrite",function(){if(!(e.width<=0)){var t=n.Deferred();e.pushQueue("delayFrame",t),e.obj.style[o["private"].animationDuration]=e.options.displayTypeSpeed+"ms",e.$obj.addClass("cbp-displayType-fadeIn"),e.$obj.one(o["private"].animationend,function(){e.$obj.removeClass("cbp-displayType-fadeIn"),e.obj.style[o["private"].animationDuration]="",t.resolve()})}},!0)}o.plugins.displayFadeIn=function(t){return!o["private"].modernBrowser||"lazyLoading"!==t.options.displayType&&"fadeIn"!==t.options.displayType||0===t.blocksOn.length?null:new a(t)}}(jQuery,window,document),function(n,t,e,i){"use strict";var o=n.fn.cubeportfolio.constructor;function a(e){e.registerEvent("initEndWrite",function(){if(!(e.width<=0)){var t=n.Deferred();e.pushQueue("delayFrame",t),e.obj.style[o["private"].animationDuration]=e.options.displayTypeSpeed+"ms",e.$obj.addClass("cbp-displayType-fadeInToTop"),e.$obj.one(o["private"].animationend,function(){e.$obj.removeClass("cbp-displayType-fadeInToTop"),e.obj.style[o["private"].animationDuration]="",t.resolve()})}},!0)}o.plugins.displayFadeInToTop=function(t){return o["private"].modernBrowser&&"fadeInToTop"===t.options.displayType&&0!==t.blocksOn.length?new a(t):null}}(jQuery,window,document),function(e,t,n,i){"use strict";var o=e.fn.cubeportfolio.constructor;function a(n){n.registerEvent("initEndWrite",function(){if(!(n.width<=0)){var t=e.Deferred();n.pushQueue("delayFrame",t),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=t*n.options.displayTypeSpeed+"ms"}),n.$obj.addClass("cbp-displayType-sequentially"),n.blocksOn.last().one(o["private"].animationend,function(){n.$obj.removeClass("cbp-displayType-sequentially"),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=""}),t.resolve()})}},!0)}o.plugins.displaySequentially=function(t){return o["private"].modernBrowser&&"sequentially"===t.options.displayType&&0!==t.blocksOn.length?new a(t):null}}(jQuery,window,document),function(p,t,e,n){"use strict";var i=p.fn.cubeportfolio.constructor;function o(t){var e=this;e.parent=t,e.filters=p(t.options.filters),e.filterData=[],t.registerEvent("afterPlugins",function(t){e.filterFromUrl(),e.registerFilter()}),t.registerEvent("resetFiltersVisual",function(){var o=t.options.defaultFilter.split("|");e.filters.each(function(t,e){var i=p(e).find(".cbp-filter-item");p.each(o,function(t,e){var n=i.filter('[data-filter="'+e+'"]');if(n.length)return n.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active"),o.splice(t,1),!1})}),t.defaultFilter=t.options.defaultFilter})}o.prototype.registerFilter=function(){var r=this,s=r.parent,l=s.defaultFilter.split("|");r.wrap=r.filters.find(".cbp-l-filters-dropdownWrap").on({"mouseover.cbp":function(){p(this).addClass("cbp-l-filters-dropdownWrap-open")},"mouseleave.cbp":function(){p(this).removeClass("cbp-l-filters-dropdownWrap-open")}}),r.filters.each(function(t,i){var e=p(i),n="*",o=e.find(".cbp-filter-item"),a={};e.hasClass("cbp-l-filters-dropdown")&&(a.wrap=e.find(".cbp-l-filters-dropdownWrap"),a.header=e.find(".cbp-l-filters-dropdownHeader"),a.headerText=a.header.text()),s.$obj.cubeportfolio("showCounter",o),p.each(l,function(t,e){if(o.filter('[data-filter="'+e+'"]').length)return n=e,l.splice(t,1),!1}),p.data(i,"filterName",n),r.filterData.push(i),r.filtersCallback(a,o.filter('[data-filter="'+n+'"]')),o.on("click.cbp",function(){var t=p(this);if(!t.hasClass("cbp-filter-item-active")&&!s.isAnimating){r.filtersCallback(a,t),p.data(i,"filterName",t.data("filter"));var e=p.map(r.filterData,function(t,e){var n=p.data(t,"filterName");return""!==n&&"*"!==n?n:null});e.length<1&&(e=["*"]);var n=e.join("|");s.defaultFilter!==n&&s.$obj.cubeportfolio("filter",n)}})})},o.prototype.filtersCallback=function(t,e){p.isEmptyObject(t)||(t.wrap.trigger("mouseleave.cbp"),t.headerText?t.headerText="":t.header.html(e.html())),e.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active")},o.prototype.filterFromUrl=function(){var t=/#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);null!==t&&(this.parent.defaultFilter=decodeURIComponent(t[1]))},o.prototype.destroy=function(){this.filters.find(".cbp-filter-item").off(".cbp"),this.wrap.off(".cbp")},i.plugins.filters=function(t){return""===t.options.filters?null:new o(t)}}(jQuery,window,document),function(o,t,e,n){"use strict";function i(i){var e=i.options.gapVertical,n=i.options.gapHorizontal;i.registerEvent("onMediaQueries",function(t){i.options.gapVertical=t&&t.hasOwnProperty("gapVertical")?t.gapVertical:e,i.options.gapHorizontal=t&&t.hasOwnProperty("gapHorizontal")?t.gapHorizontal:n,i.blocks.each(function(t,e){var n=o(e).data("cbp");n.widthAndGap=n.width+i.options.gapVertical,n.heightAndGap=n.height+i.options.gapHorizontal})})}o.fn.cubeportfolio.constructor.plugins.changeGapOnMediaQueries=function(t){return new i(t)}}(jQuery,window,document),function(a,t,e,n){"use strict";var i={},o=a.fn.cubeportfolio.constructor;function r(t){var e=this;e.parent=t,e.options=a.extend({},i,e.parent.options.plugins.inlineSlider),e.runInit(),t.registerEvent("addItemsToDOM",function(){e.runInit()})}function s(t){var e=this;t.hasClass("cbp-slider-inline-ready")||(t.addClass("cbp-slider-inline-ready"),e.items=t.find(".cbp-slider-wrapper").children(".cbp-slider-item"),e.active=e.items.filter(".cbp-slider-item--active").index(),e.total=e.items.length-1,e.updateLeft(),t.find(".cbp-slider-next").on("click.cbp",function(t){t.preventDefault(),e.active<e.total?(e.active++,e.updateLeft()):e.active===e.total&&(e.active=0,e.updateLeft())}),t.find(".cbp-slider-prev").on("click.cbp",function(t){t.preventDefault(),0<e.active?(e.active--,e.updateLeft()):0===e.active&&(e.active=e.total,e.updateLeft())}))}s.prototype.updateLeft=function(){var n=this;n.items.removeClass("cbp-slider-item--active"),n.items.eq(n.active).addClass("cbp-slider-item--active"),n.items.each(function(t,e){e.style.left=t-n.active+"00%"})},r.prototype.runInit=function(){var o=this;o.parent.$obj.find(".cbp-slider-inline").not(".cbp-slider-inline-ready").each(function(t,e){var n=a(e),i=n.find(".cbp-slider-item--active").find("img")[0];i.hasAttribute("data-cbp-src")?o.parent.$obj.on("lazyLoad.cbp",function(t,e){e.src===i.src&&new s(n)}):new s(n)})},r.prototype.destroy=function(){this.parent.$obj.find(".cbp-slider-next").off("click.cbp"),this.parent.$obj.find(".cbp-slider-prev").off("click.cbp"),this.parent.$obj.off("lazyLoad.cbp"),this.parent.$obj.find(".cbp-slider-inline").each(function(t,e){var n=a(e);n.removeClass("cbp-slider-inline-ready");var i=n.find(".cbp-slider-item");i.removeClass("cbp-slider-item--active"),i.removeAttr("style"),i.eq(0).addClass("cbp-slider-item--active")})},o.plugins.inlineSlider=function(t){return new r(t)}}(jQuery,window,document),function(a,t,e,n){"use strict";var i={loadingClass:"cbp-lazyload",threshold:400},o=a.fn.cubeportfolio.constructor,r=a(t);function s(t){var e=this;e.parent=t,e.options=a.extend({},i,e.parent.options.plugins.lazyLoad),t.registerEvent("initFinish",function(){e.loadImages(),t.registerEvent("resizeMainContainer",function(){e.loadImages()}),t.registerEvent("filterFinish",function(){e.loadImages()}),o["private"].lazyLoadScroll.initEvent({instance:e,fn:e.loadImages})},!0)}o["private"].lazyLoadScroll=new o["private"].publicEvents("scroll.cbplazyLoad",50),s.prototype.loadImages=function(){var o=this,t=o.parent.$obj.find("img").filter("[data-cbp-src]");0!==t.length&&(o.screenHeight=r.height(),t.each(function(t,e){var n=a(e.parentNode);if(o.isElementInScreen(e)){var i=e.getAttribute("data-cbp-src");null===o.parent.checkSrc(a("<img>").attr("src",i))?(o.removeLazyLoad(e,i),n.removeClass(o.options.loadingClass)):(n.addClass(o.options.loadingClass),a("<img>").on("load.cbp error.cbp",function(){o.removeLazyLoad(e,i,n)}).attr("src",i))}else n.addClass(o.options.loadingClass)}))},s.prototype.removeLazyLoad=function(t,e,n){var i=this;t.src=e,t.removeAttribute("data-cbp-src"),i.parent.removeAttrImage(t),i.parent.$obj.trigger("lazyLoad.cbp",t),n&&(o["private"].modernBrowser?a(t).one(o["private"].transitionend,function(){n.removeClass(i.options.loadingClass)}):n.removeClass(i.options.loadingClass))},s.prototype.isElementInScreen=function(t){var e=t.getBoundingClientRect(),n=e.bottom+this.options.threshold,i=this.screenHeight+n-(e.top-this.options.threshold);return 0<=n&&n<=i},s.prototype.destroy=function(){o["private"].lazyLoadScroll.destroyEvent(this)},o.plugins.lazyLoad=function(t){return new s(t)}}(jQuery,window,document),function(r,a,t,e){"use strict";var i={element:"",action:"click",loadItems:3},s=r.fn.cubeportfolio.constructor;function n(t){var n=this;n.parent=t,n.options=r.extend({},i,n.parent.options.plugins.loadMore),n.loadMore=r(n.options.element).find(".cbp-l-loadMore-link"),0!==n.loadMore.length&&(n.loadItems=n.loadMore.find(".cbp-l-loadMore-loadItems"),"0"===n.loadItems.text()&&n.loadMore.addClass("cbp-l-loadMore-stop"),t.registerEvent("filterStart",function(e){n.populateItems().then(function(){var t=n.items.filter(n.parent.filterConcat(e)).length;0<t?(n.loadMore.removeClass("cbp-l-loadMore-stop"),n.loadItems.html(t)):n.loadMore.addClass("cbp-l-loadMore-stop")})}),n[n.options.action]())}n.prototype.populateItems=function(){var n=this;return n.items?r.Deferred().resolve():(n.items=r(),r.ajax({url:n.loadMore.attr("href"),type:"GET",dataType:"HTML"}).done(function(t){var e=r.map(t.split(/\r?\n/),function(t,e){return r.trim(t)}).join("");0!==e.length&&r.each(r.parseHTML(e),function(t,e){r(e).hasClass("cbp-item")?n.items=n.items.add(e):r.each(e.children,function(t,e){r(e).hasClass("cbp-item")&&(n.items=n.items.add(e))})})}).fail(function(){n.items=null,n.loadMore.removeClass("cbp-l-loadMore-loading")}))},n.prototype.populateInsertItems=function(t){var n=this,i=[],o=n.parent.defaultFilter,a=0;n.items.each(function(t,e){if(a===n.options.loadItems)return!1;o&&"*"!==o?r(e).filter(n.parent.filterConcat(o)).length&&(i.push(e),n.items[t]=null,a++):(i.push(e),n.items[t]=null,a++)}),n.items=n.items.map(function(t,e){return e}),0!==i.length?n.parent.$obj.cubeportfolio("append",i,t):n.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop")},n.prototype.click=function(){var n=this;function e(){n.loadMore.removeClass("cbp-l-loadMore-loading");var t,e=n.parent.defaultFilter;0===(t=e&&"*"!==e?n.items.filter(n.parent.filterConcat(e)).length:n.items.length)?n.loadMore.addClass("cbp-l-loadMore-stop"):n.loadItems.html(t)}n.loadMore.on("click.cbp",function(t){t.preventDefault(),n.parent.isAnimating||n.loadMore.hasClass("cbp-l-loadMore-stop")||(n.loadMore.addClass("cbp-l-loadMore-loading"),n.populateItems().then(function(){n.populateInsertItems(e)}))})},n.prototype.auto=function(){var n=this,i=r(a),o=!1;function t(){if(!o&&!n.loadMore.hasClass("cbp-l-loadMore-stop")){var t=n.loadMore.offset().top-200;i.scrollTop()+i.height()<t||(o=!0,n.populateItems().then(function(){n.populateInsertItems(e)}).fail(function(){o=!1}))}}function e(){var t,e=n.parent.defaultFilter;0===(t=e&&"*"!==e?n.items.filter(n.parent.filterConcat(e)).length:n.items.length)?n.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop"):(n.loadItems.html(t),i.trigger("scroll.loadMore")),o=!1,0===n.items.length&&(s["private"].loadMoreScroll.destroyEvent(n),n.parent.$obj.off("filterComplete.cbp"))}s["private"].loadMoreScroll=new s["private"].publicEvents("scroll.loadMore",100),n.parent.$obj.one("initComplete.cbp",function(){n.loadMore.addClass("cbp-l-loadMore-loading").on("click.cbp",function(t){t.preventDefault()}),s["private"].loadMoreScroll.initEvent({instance:n,fn:function(){n.parent.isAnimating||t()}}),n.parent.$obj.on("filterComplete.cbp",function(){t()}),t()})},n.prototype.destroy=function(){this.loadMore.off(".cbp"),s["private"].loadMoreScroll&&s["private"].loadMoreScroll.destroyEvent(this)},s.plugins.loadMore=function(t){var e=t.options.plugins;return t.options.loadMore&&(e.loadMore||(e.loadMore={}),e.loadMore.element=t.options.loadMore),t.options.loadMoreAction&&(e.loadMore||(e.loadMore={}),e.loadMore.action=t.options.loadMoreAction),e.loadMore&&void 0!==e.loadMore.selector&&(e.loadMore.element=e.loadMore.selector,delete e.loadMore.selector),e.loadMore&&e.loadMore.element?new n(t):null}}(jQuery,window,document),function(u,d,f,t){"use strict";var l=u.fn.cubeportfolio.constructor,c={delay:0},e={init:function(t,e){var o,a=this;if(a.cubeportfolio=t,a.type=e,a.isOpen=!1,a.options=a.cubeportfolio.options,"lightbox"===e&&(a.cubeportfolio.registerEvent("resizeWindow",function(){a.resizeImage()}),a.localOptions=u.extend({},c,a.cubeportfolio.options.plugins.lightbox)),"singlePageInline"!==e){if(a.createMarkup(),"singlePage"===e){if(a.cubeportfolio.registerEvent("resizeWindow",function(){if(a.options.singlePageStickyNavigation){var t=a.contentWrap[0].clientWidth;0<t&&(a.navigationWrap.width(t),a.navigation.width(t))}}),a.options.singlePageDeeplinking){a.url=location.href,"#"===a.url.slice(-1)&&(a.url=a.url.slice(0,-1));p=(l=a.url.split("#cbp=")).shift();if(u.each(l,function(t,i){if(a.cubeportfolio.blocksOn.each(function(t,e){var n=u(e).find(a.options.singlePageDelegate+'[href="'+i+'"]');if(n.length)return o=n,!1}),o)return!1}),o){a.url=p;var n=o,i=n.attr("data-cbp-singlePage"),r=[];i?r=n.closest(u(".cbp-item")).find('[data-cbp-singlePage="'+i+'"]'):a.cubeportfolio.blocksOn.each(function(t,e){var n=u(e);n.not(".cbp-item-off")&&n.find(a.options.singlePageDelegate).each(function(t,e){u(e).attr("data-cbp-singlePage")||r.push(e)})}),a.openSinglePage(r,o[0])}else if(l.length){var s=f.createElement("a");s.setAttribute("href",l[0]),a.openSinglePage([s],s)}}a.localOptions=u.extend({},c,a.cubeportfolio.options.plugins.singlePage)}}else{if(a.height=0,a.createMarkupSinglePageInline(),a.cubeportfolio.registerEvent("resizeGrid",function(){a.isOpen&&a.close()}),a.options.singlePageInlineDeeplinking){a.url=location.href,"#"===a.url.slice(-1)&&(a.url=a.url.slice(0,-1));var l,p=(l=a.url.split("#cbpi=")).shift();u.each(l,function(t,i){if(a.cubeportfolio.blocksOn.each(function(t,e){var n=u(e).find(a.options.singlePageInlineDelegate+'[href="'+i+'"]');if(n.length)return o=n,!1}),o)return!1}),o&&a.cubeportfolio.registerEvent("initFinish",function(){a.openSinglePageInline(a.cubeportfolio.blocksOn,o[0])},!0)}a.localOptions=u.extend({},c,a.cubeportfolio.options.plugins.singlePageInline)}},createMarkup:function(){var r=this,t="";if("singlePage"===r.type&&"left"!==r.options.singlePageAnimation&&(t=" cbp-popup-singlePage-"+r.options.singlePageAnimation),r.wrap=u("<div/>",{"class":"cbp-popup-wrap cbp-popup-"+r.type+t,"data-action":"lightbox"===r.type?"close":""}).on("click.cbp",function(t){if(!r.stopEvents){var e=u(t.target).attr("data-action");r[e]&&(r[e](),t.preventDefault())}}),"singlePage"===r.type?(r.contentWrap=u("<div/>",{"class":"cbp-popup-content-wrap"}).appendTo(r.wrap),"ios"===l["private"].browser&&r.contentWrap.css("overflow","auto"),r.content=u("<div/>",{"class":"cbp-popup-content"}).appendTo(r.contentWrap)):r.content=u("<div/>",{"class":"cbp-popup-content"}).appendTo(r.wrap),u("<div/>",{"class":"cbp-popup-loadingBox"}).appendTo(r.wrap),"ie8"===l["private"].browser&&(r.bg=u("<div/>",{"class":"cbp-popup-ie8bg","data-action":"lightbox"===r.type?"close":""}).appendTo(r.wrap)),"singlePage"===r.type&&!1===r.options.singlePageStickyNavigation?r.navigationWrap=u("<div/>",{"class":"cbp-popup-navigation-wrap"}).appendTo(r.contentWrap):r.navigationWrap=u("<div/>",{"class":"cbp-popup-navigation-wrap"}).appendTo(r.wrap),r.navigation=u("<div/>",{"class":"cbp-popup-navigation"}).appendTo(r.navigationWrap),r.closeButton=u("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(r.navigation),r.nextButton=u("<div/>",{"class":"cbp-popup-next",title:"Next (Right arrow key)","data-action":"next"}).appendTo(r.navigation),r.prevButton=u("<div/>",{"class":"cbp-popup-prev",title:"Previous (Left arrow key)","data-action":"prev"}).appendTo(r.navigation),"singlePage"===r.type){r.options.singlePageCounter&&(r.counter=u(r.options.singlePageCounter).appendTo(r.navigation),r.counter.text("")),r.content.on("click.cbp",r.options.singlePageDelegate,function(t){t.preventDefault();var e,n,i=r.dataArray.length,o=this.getAttribute("href");for(e=0;e<i;e++)if(r.dataArray[e].url===o){n=e;break}if(void 0===n){var a=f.createElement("a");a.setAttribute("href",o),r.dataArray=[{url:o,element:a}],r.counterTotal=1,r.nextButton.hide(),r.prevButton.hide(),r.singlePageJumpTo(0)}else r.singlePageJumpTo(n-r.current)});var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e={passive:!0}}});d.addEventListener("testPassive",null,n),d.removeEventListener("testPassive",null,n)}catch(o){}var i="onwheel"in f.createElement("div")?"wheel":"mousewheel";r.contentWrap[0].addEventListener(i,function(t){t.stopImmediatePropagation()},e)}u(f).on("keydown.cbp",function(t){r.isOpen&&(r.stopEvents||(a&&t.stopImmediatePropagation(),37===t.keyCode?r.prev():39===t.keyCode?r.next():27===t.keyCode&&r.close()))})},createMarkupSinglePageInline:function(){var n=this;n.wrap=u("<div/>",{"class":"cbp-popup-singlePageInline"}).on("click.cbp",function(t){if(!n.stopEvents){var e=u(t.target).attr("data-action");e&&n[e]&&(n[e](),t.preventDefault())}}),n.content=u("<div/>",{"class":"cbp-popup-content"}).appendTo(n.wrap),n.navigation=u("<div/>",{"class":"cbp-popup-navigation"}).appendTo(n.wrap),n.closeButton=u("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(n.navigation)},destroy:function(){var t=this,e=u("body");u(f).off("keydown.cbp"),e.off("click.cbp",t.options.lightboxDelegate),e.off("click.cbp",t.options.singlePageDelegate),t.content.off("click.cbp",t.options.singlePageDelegate),t.cubeportfolio.$obj.off("click.cbp",t.options.singlePageInlineDelegate),t.cubeportfolio.$obj.off("click.cbp",t.options.lightboxDelegate),t.cubeportfolio.$obj.off("click.cbp",t.options.singlePageDelegate),t.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),t.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),t.wrap.remove()},openLightbox:function(t,e){var s,n,l=this,p=0,c=[];if(!l.isOpen){if(a=!0,l.isOpen=!0,l.stopEvents=!1,l.dataArray=[],(l.current=null)===(s=e.getAttribute("href")))throw new Error("HEI! Your clicked element doesn't have a href attribute.");u.each(t,function(t,e){var n,i=e.getAttribute("href"),o=i,a="isImage";if(-1===u.inArray(i,c)){if(s===i)l.current=p;else if(!l.options.lightboxGallery)return;if(/youtu\.?be/i.test(i)){var r=i.lastIndexOf("v=")+2;1===r&&(r=i.lastIndexOf("/")+1),n=i.substring(r),/autoplay=/i.test(n)||(n+="&autoplay=1"),o="//www.youtube.com/embed/"+(n=n.replace(/\?|&/,"?")),a="isYoutube"}else/vimeo\.com/i.test(i)?(n=i.substring(i.lastIndexOf("/")+1),/autoplay=/i.test(n)||(n+="&autoplay=1"),o="//player.vimeo.com/video/"+(n=n.replace(/\?|&/,"?")),a="isVimeo"):/www\.ted\.com/i.test(i)?(o="http://embed.ted.com/talks/"+i.substring(i.lastIndexOf("/")+1)+".html",a="isTed"):/soundcloud\.com/i.test(i)?(o=i,a="isSoundCloud"):/(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(i)?(o=-1!==i.indexOf("|")?i.split("|"):i.split("%7C"),a="isSelfHostedVideo"):/\.mp3$/i.test(i)&&(o=i,a="isSelfHostedAudio");l.dataArray.push({src:o,title:e.getAttribute(l.options.lightboxTitleSrc),type:a}),p++}c.push(i)}),l.counterTotal=l.dataArray.length,1===l.counterTotal?(l.nextButton.hide(),l.prevButton.hide(),l.dataActionImg=""):(l.nextButton.show(),l.prevButton.show(),l.dataActionImg='data-action="next"'),l.wrap.appendTo(f.body),l.scrollTop=u(d).scrollTop(),l.originalStyle=u("html").attr("style"),u("html").css({overflow:"hidden",marginRight:d.innerWidth-u(f).width()}),l.wrap.addClass("cbp-popup-transitionend"),l.wrap.show(),n=l.dataArray[l.current],l[n.type](n)}},openSinglePage:function(t,e){var i,o=this,a=0,r=[];if(!o.isOpen){if(o.cubeportfolio.singlePageInline&&o.cubeportfolio.singlePageInline.isOpen&&o.cubeportfolio.singlePageInline.close(),o.isOpen=!0,o.stopEvents=!1,o.dataArray=[],(o.current=null)===(i=e.getAttribute("href")))throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(u.each(t,function(t,e){var n=e.getAttribute("href");-1===u.inArray(n,r)&&(i===n&&(o.current=a),o.dataArray.push({url:n,element:e}),a++),r.push(n)}),o.counterTotal=o.dataArray.length,1===o.counterTotal?(o.nextButton.hide(),o.prevButton.hide()):(o.nextButton.show(),o.prevButton.show()),o.wrap.appendTo(f.body),o.scrollTop=u(d).scrollTop(),o.contentWrap.scrollTop(0),o.wrap.show(),o.finishOpen=2,o.navigationMobile=u(),o.wrap.one(l["private"].transitionend,function(){u("html").css({overflow:"hidden",marginRight:d.innerWidth-u(f).width()}),o.wrap.addClass("cbp-popup-transitionend"),o.options.singlePageStickyNavigation&&(o.wrap.addClass("cbp-popup-singlePage-sticky"),o.navigationWrap.width(o.contentWrap[0].clientWidth)),o.finishOpen--,o.finishOpen<=0&&o.updateSinglePageIsOpen.call(o)}),"ie8"!==l["private"].browser&&"ie9"!==l["private"].browser||(u("html").css({overflow:"hidden",marginRight:d.innerWidth-u(f).width()}),o.wrap.addClass("cbp-popup-transitionend"),o.options.singlePageStickyNavigation&&(o.navigationWrap.width(o.contentWrap[0].clientWidth),setTimeout(function(){o.wrap.addClass("cbp-popup-singlePage-sticky")},1e3)),o.finishOpen--),o.wrap.addClass("cbp-popup-loading"),o.wrap.offset(),o.wrap.addClass("cbp-popup-singlePage-open"),o.options.singlePageDeeplinking&&(o.url=o.url.split("#cbp=")[0],location.href=o.url+"#cbp="+o.dataArray[o.current].url),u.isFunction(o.options.singlePageCallback)&&o.options.singlePageCallback.call(o,o.dataArray[o.current].url,o.dataArray[o.current].element),"ios"===l["private"].browser){var s=o.contentWrap[0];s.addEventListener("touchstart",function(){var t=s.scrollTop,e=s.scrollHeight,n=t+s.offsetHeight;0===t?s.scrollTop=1:n===e&&(s.scrollTop=t-1)})}}},openSinglePageInline:function(t,e,n){var i,o,a,r=this;if(n=n||!1,r.fromOpen=n,r.storeBlocks=t,r.storeCurrentBlock=e,r.isOpen)return o=r.cubeportfolio.blocksOn.index(u(e).closest(".cbp-item")),void(r.dataArray[r.current].url!==e.getAttribute("href")||r.current!==o?r.cubeportfolio.singlePageInline.close("open",{blocks:t,currentBlock:e,fromOpen:!0}):r.close());if(r.isOpen=!0,r.stopEvents=!1,r.dataArray=[],(r.current=null)===(i=e.getAttribute("href")))throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(a=u(e).closest(".cbp-item")[0],t.each(function(t,e){a===e&&(r.current=t)}),r.dataArray[r.current]={url:i,element:e},u(r.dataArray[r.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"),r.counterTotal=t.length,r.wrap.insertBefore(r.cubeportfolio.wrapper),r.topDifference=0,"top"===r.options.singlePageInlinePosition)r.blocksToMove=t,r.top=0;else if("bottom"===r.options.singlePageInlinePosition)r.blocksToMove=u(),r.top=r.cubeportfolio.height;else if("above"===r.options.singlePageInlinePosition){var s=u(t[r.current]).data("cbp").top;r.top=s,t.each(function(t,e){var n=u(e).data("cbp"),i=n.top,o=i+n.heightAndGap;s<=i||o>r.top&&(r.top=o,r.topDifference=r.top-s)}),r.blocksToMove=u(),t.each(function(t,e){if(t!==r.current){var n=u(e).data("cbp");n.top+n.heightAndGap>r.top&&(r.blocksToMove=r.blocksToMove.add(e))}else r.blocksToMove=r.blocksToMove.add(e)}),r.top=Math.max(r.top-r.options.gapHorizontal,0)}else{var l=u(t[r.current]).data("cbp"),p=l.top+l.heightAndGap;r.top=p,r.blocksToMove=u(),t.each(function(t,e){var n=u(e).data("cbp"),i=n.top,o=i+n.height;o<=p||(i>=p-n.height/2?r.blocksToMove=r.blocksToMove.add(e):p<o&&i<p&&(o>r.top&&(r.top=o),o-p>r.topDifference&&(r.topDifference=o-p)))})}if(r.wrap[0].style.height=r.wrap.outerHeight(!0)+"px",r.deferredInline=u.Deferred(),r.options.singlePageInlineInFocus){r.scrollTop=u(d).scrollTop();var c=r.cubeportfolio.$obj.offset().top+r.top-100;r.scrollTop!==c?u("html,body").animate({scrollTop:c},350).promise().then(function(){r.resizeSinglePageInline(),r.deferredInline.resolve()}):(r.resizeSinglePageInline(),r.deferredInline.resolve())}else r.resizeSinglePageInline(),r.deferredInline.resolve();r.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"),r.wrap.css({top:r.top}),r.options.singlePageInlineDeeplinking&&(r.url=r.url.split("#cbpi=")[0],location.href=r.url+"#cbpi="+r.dataArray[r.current].url),u.isFunction(r.options.singlePageInlineCallback)&&r.options.singlePageInlineCallback.call(r,r.dataArray[r.current].url,r.dataArray[r.current].element)},resizeSinglePageInline:function(){var n=this;n.height=0===n.top||n.top===n.cubeportfolio.height?n.wrap.outerHeight(!0):n.wrap.outerHeight(!0)-n.options.gapHorizontal,n.height+=n.topDifference,n.storeBlocks.each(function(t,e){l["private"].modernBrowser?e.style[l["private"].transform]="":e.style.marginTop=""}),n.blocksToMove.each(function(t,e){l["private"].modernBrowser?e.style[l["private"].transform]="translate3d(0px, "+n.height+"px, 0)":e.style.marginTop=n.height+"px"}),n.cubeportfolio.obj.style.height=n.cubeportfolio.height+n.height+"px"},revertResizeSinglePageInline:function(){this.deferredInline=u.Deferred(),this.storeBlocks.each(function(t,e){l["private"].modernBrowser?e.style[l["private"].transform]="":e.style.marginTop=""}),this.cubeportfolio.obj.style.height=this.cubeportfolio.height+"px"},appendScriptsToWrap:function(i){var o=this,a=0,r=function(t){var e=f.createElement("script"),n=t.src;e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,i[++a]&&r(i[a]))}:e.onload=function(){i[++a]&&r(i[a])},n?e.src=n:e.text=t.text,o.content[0].appendChild(e)};r(i[0])},updateSinglePage:function(t,e,n){var i,o=this;o.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"),!1===n&&o.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"),o.counter&&(i=u(o.getCounterMarkup(o.options.singlePageCounter,o.current+1,o.counterTotal)),o.counter.text(i.text())),o.fromAJAX={html:t,scripts:e},o.finishOpen--,o.finishOpen<=0&&o.updateSinglePageIsOpen.call(o)},updateSinglePageIsOpen:function(){var t,e=this;e.wrap.addClass("cbp-popup-ready"),e.wrap.removeClass("cbp-popup-loading"),e.content.html(e.fromAJAX.html),e.fromAJAX.scripts&&e.appendScriptsToWrap(e.fromAJAX.scripts),e.fromAJAX={},e.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"),(t=e.content.find(".cbp-slider")).length?(t.find(".cbp-slider-item").addClass("cbp-item"),e.slider=t.cubeportfolio({layoutMode:"slider",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):e.slider=null,e.checkForSocialLinks(e.content),e.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp")},checkForSocialLinks:function(t){this.createFacebookShare(t.find(".cbp-social-fb")),this.createTwitterShare(t.find(".cbp-social-twitter")),this.createGooglePlusShare(t.find(".cbp-social-googleplus")),this.createPinterestShare(t.find(".cbp-social-pinterest"))},createFacebookShare:function(t){t.length&&!t.attr("onclick")&&t.attr("onclick","window.open('http://www.facebook.com/sharer.php?u="+encodeURIComponent(d.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")},createTwitterShare:function(t){t.length&&!t.attr("onclick")&&t.attr("onclick","window.open('https://twitter.com/intent/tweet?source="+encodeURIComponent(d.location.href)+"&text="+encodeURIComponent(f.title)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;")},createGooglePlusShare:function(t){t.length&&!t.attr("onclick")&&t.attr("onclick","window.open('https://plus.google.com/share?url="+encodeURIComponent(d.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;")},createPinterestShare:function(t){if(t.length&&!t.attr("onclick")){var e="",n=this.content.find("img")[0];n&&(e=n.src),t.attr("onclick","window.open('http://pinterest.com/pin/create/button/?url="+encodeURIComponent(d.location.href)+"&media="+e+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")}},updateSinglePageInline:function(t,e){var n=this;n.content.html(t),e&&n.appendScriptsToWrap(e),n.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"),0!==n.localOptions.delay?setTimeout(function(){n.singlePageInlineIsOpen.call(n)},n.localOptions.delay):n.singlePageInlineIsOpen.call(n)},singlePageInlineIsOpen:function(){var e=this;function n(){e.wrap.addClass("cbp-popup-singlePageInline-ready"),e.wrap[0].style.height="",e.resizeSinglePageInline(),e.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp")}e.cubeportfolio.loadImages(e.wrap,function(){var t=e.content.find(".cbp-slider");t.length?(t.find(".cbp-slider-item").addClass("cbp-item"),t.one("initComplete.cbp",function(){e.deferredInline.done(n)}),t.on("pluginResize.cbp",function(){e.deferredInline.done(n)}),e.slider=t.cubeportfolio({layoutMode:"slider",displayType:"default",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):(e.slider=null,e.deferredInline.done(n)),e.checkForSocialLinks(e.content)})},isImage:function(t){var e=this;new Image;e.tooggleLoading(!0),e.cubeportfolio.loadImages(u('<div><img src="'+t.src+'"></div>'),function(){e.updateImagesMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal)),e.tooggleLoading(!1)})},isVimeo:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isYoutube:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isTed:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isSoundCloud:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isSelfHostedVideo:function(t){var e=this;e.updateSelfHostedVideo(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isSelfHostedAudio:function(t){var e=this;e.updateSelfHostedAudio(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},getCounterMarkup:function(t,e,n){if(!t.length)return"";var i={current:e,total:n};return t.replace(/\{\{current}}|\{\{total}}/gi,function(t){return i[t.slice(2,-2)]})},updateSelfHostedVideo:function(t,e,n){var i;this.wrap.addClass("cbp-popup-lightbox-isIframe");var o='<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';for(i=0;i<t.length;i++)/(\.mp4)/i.test(t[i])?o+='<source src="'+t[i]+'" type="video/mp4">':/(\.ogg)|(\.ogv)/i.test(t[i])?o+='<source src="'+t[i]+'" type="video/ogg">':/(\.webm)/i.test(t[i])&&(o+='<source src="'+t[i]+'" type="video/webm">');o+='Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>",this.content.html(o),this.wrap.addClass("cbp-popup-ready"),this.preloadNearbyImages()},updateSelfHostedAudio:function(t,e,n){this.wrap.addClass("cbp-popup-lightbox-isIframe");var i='<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="'+t+'" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>";this.content.html(i),this.wrap.addClass("cbp-popup-ready"),this.preloadNearbyImages()},updateVideoMarkup:function(t,e,n){this.wrap.addClass("cbp-popup-lightbox-isIframe");var i='<div class="cbp-popup-lightbox-iframe"><iframe src="'+t+'" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>";this.content.html(i),this.wrap.addClass("cbp-popup-ready"),this.preloadNearbyImages()},updateImagesMarkup:function(t,e,n){var i=this;i.wrap.removeClass("cbp-popup-lightbox-isIframe");var o='<div class="cbp-popup-lightbox-figure"><img src="'+t+'" class="cbp-popup-lightbox-img" '+i.dataActionImg+' /><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>";i.content.html(o),i.wrap.addClass("cbp-popup-ready"),i.resizeImage(),i.preloadNearbyImages()},next:function(){this[this.type+"JumpTo"](1)},prev:function(){this[this.type+"JumpTo"](-1)},lightboxJumpTo:function(t){var e,n=this;n.current=n.getIndex(n.current+t),n[(e=n.dataArray[n.current]).type](e)},singlePageJumpTo:function(t){var e=this;e.current=e.getIndex(e.current+t),u.isFunction(e.options.singlePageCallback)&&(e.resetWrap(),e.contentWrap.scrollTop(0),e.wrap.addClass("cbp-popup-loading"),e.slider&&l["private"].resize.destroyEvent(u.data(e.slider[0],"cubeportfolio")),e.options.singlePageCallback.call(e,e.dataArray[e.current].url,e.dataArray[e.current].element),e.options.singlePageDeeplinking&&(location.href=e.url+"#cbp="+e.dataArray[e.current].url))},resetWrap:function(){var t=this;"singlePage"===t.type&&t.options.singlePageDeeplinking&&(location.href=t.url+"#"),"singlePageInline"===t.type&&t.options.singlePageInlineDeeplinking&&(location.href=t.url+"#")},getIndex:function(t){return(t%=this.counterTotal)<0&&(t=this.counterTotal+t),t},close:function(e,t){var n=this;function i(){n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"),n.isOpen=!1,"promise"===e&&u.isFunction(t.callback)&&t.callback.call(n.cubeportfolio)}function o(){var t=u(d).scrollTop();n.resetWrap(),u(d).scrollTop(t),n.options.singlePageInlineInFocus&&"promise"!==e?u("html,body").animate({scrollTop:n.scrollTop},350).promise().then(function(){i()}):i()}"singlePageInline"===n.type?"open"===e?(n.wrap.removeClass("cbp-popup-singlePageInline-ready"),u(n.dataArray[n.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"),n.isOpen=!1,n.openSinglePageInline(t.blocks,t.currentBlock,t.fromOpen)):(n.height=0,n.revertResizeSinglePageInline(),n.wrap.removeClass("cbp-popup-singlePageInline-ready"),n.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"),n.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),l["private"].modernBrowser?n.wrap.one(l["private"].transitionend,function(){o()}):o()):"singlePage"===n.type?(n.resetWrap(),n.stopScroll=!0,n.wrap.removeClass("cbp-popup-ready cbp-popup-transitionend cbp-popup-singlePage-open cbp-popup-singlePage-sticky"),u("html").css({overflow:"",marginRight:"",position:""}),u(d).scrollTop(n.scrollTop),"ie8"!==l["private"].browser&&"ie9"!==l["private"].browser||(n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.isOpen=!1),n.wrap.one(l["private"].transitionend,function(){n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.isOpen=!1})):(a=!1,n.originalStyle?u("html").attr("style",n.originalStyle):u("html").css({overflow:"",marginRight:""}),u(d).scrollTop(n.scrollTop),n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.isOpen=!1)},tooggleLoading:function(t){this.stopEvents=t,this.wrap[t?"addClass":"removeClass"]("cbp-popup-loading")},resizeImage:function(){if(this.isOpen){var t=this.content.find("img"),e=t.parent(),n=u(d).height()-(e.outerHeight(!0)-e.height())-this.content.find(".cbp-popup-lightbox-bottom").outerHeight(!0);t.css("max-height",n+"px")}},preloadNearbyImages:function(){for(var t=this,e=[t.getIndex(t.current+1),t.getIndex(t.current+2),t.getIndex(t.current+3),t.getIndex(t.current-1),t.getIndex(t.current-2),t.getIndex(t.current-3)],n=e.length-1;0<=n;n--)"isImage"===t.dataArray[e[n]].type&&t.cubeportfolio.checkSrc(t.dataArray[e[n]])}};function n(t){var e=this;!1===(e.parent=t).options.lightboxShowCounter&&(t.options.lightboxCounter=""),!1===t.options.singlePageShowCounter&&(t.options.singlePageCounter=""),t.registerEvent("initStartRead",function(){e.run()},!0)}var a=!1,i=!1,o=!1;n.prototype.run=function(){var r=this,s=r.parent,t=u(f.body);s.lightbox=null,s.options.lightboxDelegate&&!i&&(i=!0,s.lightbox=Object.create(e),s.lightbox.init(s,"lightbox"),t.on("click.cbp",s.options.lightboxDelegate,function(t){t.preventDefault();var e=u(this),i=e.attr("data-cbp-lightbox"),n=r.detectScope(e),o=n.data("cubeportfolio"),a=[];o?o.blocksOn.each(function(t,e){var n=u(e);n.not(".cbp-item-off")&&n.find(s.options.lightboxDelegate).each(function(t,e){i?u(e).attr("data-cbp-lightbox")===i&&a.push(e):a.push(e)})}):a=i?n.find(s.options.lightboxDelegate+"[data-cbp-lightbox="+i+"]"):n.find(s.options.lightboxDelegate),s.lightbox.openLightbox(a,e[0])})),s.singlePage=null,s.options.singlePageDelegate&&!o&&(o=!0,s.singlePage=Object.create(e),s.singlePage.init(s,"singlePage"),t.on("click.cbp",s.options.singlePageDelegate,function(t){t.preventDefault();var e=u(this),i=e.attr("data-cbp-singlePage"),n=r.detectScope(e),o=n.data("cubeportfolio"),a=[];o?o.blocksOn.each(function(t,e){var n=u(e);n.not(".cbp-item-off")&&n.find(s.options.singlePageDelegate).each(function(t,e){i?u(e).attr("data-cbp-singlePage")===i&&a.push(e):a.push(e)})}):a=i?n.find(s.options.singlePageDelegate+"[data-cbp-singlePage="+i+"]"):n.find(s.options.singlePageDelegate),s.singlePage.openSinglePage(a,e[0])})),s.singlePageInline=null,s.options.singlePageInlineDelegate&&(s.singlePageInline=Object.create(e),s.singlePageInline.init(s,"singlePageInline"),s.$obj.on("click.cbp",s.options.singlePageInlineDelegate,function(t){t.preventDefault();var e=u.data(this,"cbp-locked"),n=u.data(this,"cbp-locked",+new Date);(!e||300<n-e)&&s.singlePageInline.openSinglePageInline(s.blocksOn,this)}))},n.prototype.detectScope=function(t){var e,n,i;return(e=t.closest(".cbp-popup-singlePageInline")).length?(i=t.closest(".cbp",e[0])).length?i:e:(n=t.closest(".cbp-popup-singlePage")).length?(i=t.closest(".cbp",n[0])).length?i:n:(i=t.closest(".cbp")).length?i:u(f.body)},n.prototype.destroy=function(){var t=this.parent;u(f.body).off("click.cbp"),o=i=!1,t.lightbox&&t.lightbox.destroy(),t.singlePage&&t.singlePage.destroy(),t.singlePageInline&&t.singlePageInline.destroy()},l.plugins.popUp=function(t){return new n(t)}}(jQuery,window,document),function(s,t,e,n){"use strict";var i=s.fn.cubeportfolio.constructor;function o(t){var n=this;n.parent=t,n.searchInput=s(t.options.search),n.searchInput.each(function(t,e){var n=e.getAttribute("data-search");n||(n="*"),s.data(e,"searchData",{value:e.value,el:n})});var i=null;n.searchInput.on("keyup.cbp paste.cbp",function(t){t.preventDefault();var e=s(this);clearTimeout(i),i=setTimeout(function(){n.runEvent.call(n,e)},350)}),n.searchNothing=n.searchInput.siblings(".cbp-search-nothing").detach(),n.searchNothingHeight=null,n.searchNothingHTML=n.searchNothing.html(),n.searchInput.siblings(".cbp-search-icon").on("click.cbp",function(t){t.preventDefault(),n.runEvent.call(n,s(this).prev().val(""))})}o.prototype.runEvent=function(t){var i=this,o=t.val(),a=t.data("searchData"),r=new RegExp(o,"i");a.value===o||i.parent.isAnimating||(0<(a.value=o).length?t.attr("value",o):t.removeAttr("value"),i.parent.$obj.cubeportfolio("filter",function(t){var e=t.filter(function(t,e){if(-1<s(e).find(a.el).text().search(r))return!0});if(0===e.length&&i.searchNothing.length){var n=i.searchNothingHTML.replace("{{query}}",o);i.searchNothing.html(n),i.searchNothing.appendTo(i.parent.$obj),null===i.searchNothingHeight&&(i.searchNothingHeight=i.searchNothing.outerHeight(!0)),i.parent.registerEvent("resizeMainContainer",function(){i.parent.height=i.parent.height+i.searchNothingHeight,i.parent.obj.style.height=i.parent.height+"px"},!0)}else i.searchNothing.detach();return i.parent.triggerEvent("resetFiltersVisual"),e},function(){t.trigger("keyup.cbp")}))},o.prototype.destroy=function(){this.searchInput.off(".cbp"),this.searchInput.next(".cbp-search-icon").off(".cbp"),this.searchInput.each(function(t,e){s.removeData(e)})},i.plugins.search=function(t){return""===t.options.search?null:new o(t)}}(jQuery,window,document),function(o,t,e,n){"use strict";var i={pagination:"",paginationClass:"cbp-pagination-active"},a=o.fn.cubeportfolio.constructor;function r(t){var e=this;e.parent=t,e.options=o.extend({},i,e.parent.options.plugins.slider);var n=o(e.options.pagination);0<n.length&&(e.parent.customPagination=n,e.parent.customPaginationItems=n.children(),e.parent.customPaginationClass=e.options.paginationClass,e.parent.customPaginationItems.on("click.cbp",function(t){t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),e.parent.sliderStopEvents||e.parent.jumpToSlider(o(this))})),e.parent.registerEvent("gridAdjust",function(){e.sliderMarkup.call(e.parent),e.parent.registerEvent("gridAdjust",function(){e.updateSlider.call(e.parent)})},!0)}r.prototype.sliderMarkup=function(){var i=this;i.sliderStopEvents=!1,i.sliderActive=0,i.$obj.one("initComplete.cbp",function(){i.$obj.addClass("cbp-mode-slider")}),i.nav=o("<div/>",{"class":"cbp-nav"}),i.nav.on("click.cbp","[data-slider-action]",function(t){if(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!i.sliderStopEvents){var e=o(this),n=e.attr("data-slider-action");i[n+"Slider"]&&i[n+"Slider"](e)}}),i.options.showNavigation&&(i.controls=o("<div/>",{"class":"cbp-nav-controls"}),i.navPrev=o("<div/>",{"class":"cbp-nav-prev","data-slider-action":"prev"}).appendTo(i.controls),i.navNext=o("<div/>",{"class":"cbp-nav-next","data-slider-action":"next"}).appendTo(i.controls),i.controls.appendTo(i.nav)),i.options.showPagination&&(i.navPagination=o("<div/>",{"class":"cbp-nav-pagination"}).appendTo(i.nav)),(i.controls||i.navPagination)&&i.nav.appendTo(i.$obj),i.updateSliderPagination(),i.options.auto&&(i.options.autoPauseOnHover&&(i.mouseIsEntered=!1,i.$obj.on("mouseenter.cbp",function(t){i.mouseIsEntered=!0,i.stopSliderAuto()}).on("mouseleave.cbp",function(t){i.mouseIsEntered=!1,i.startSliderAuto()})),i.startSliderAuto()),i.options.drag&&a["private"].modernBrowser&&i.dragSlider()},r.prototype.updateSlider=function(){this.updateSliderPosition(),this.updateSliderPagination()},r.prototype.destroy=function(){var t=this;t.parent.customPaginationItems&&t.parent.customPaginationItems.off(".cbp"),(t.parent.controls||t.parent.navPagination)&&(t.parent.nav.off(".cbp"),t.parent.nav.remove())},a.plugins.slider=function(t){return"slider"!==t.options.layoutMode?null:new r(t)}}(jQuery,window,document),function(u,t,e,n){"use strict";var i={element:""},o=u.fn.cubeportfolio.constructor;function a(e){var n=this;n.parent=e,n.options=u.extend({},i,n.parent.options.plugins.sort),n.element=u(n.options.element),0!==n.element.length&&(n.sort="",n.sortBy="string:asc",n.element.on("click.cbp",".cbp-sort-item",function(t){t.preventDefault(),n.target=t.target,u(n.target).hasClass("cbp-l-dropdown-item--active")||e.isAnimating||(n.processSort(),e.$obj.cubeportfolio("filter",e.defaultFilter))}),e.registerEvent("triggerSort",function(){n.target&&(n.processSort(),e.$obj.cubeportfolio("filter",e.defaultFilter))}),n.dropdownWrap=n.element.find(".cbp-l-dropdown-wrap").on({"mouseover.cbp":function(){u(this).addClass("cbp-l-dropdown-wrap--open")},"mouseleave.cbp":function(){u(this).removeClass("cbp-l-dropdown-wrap--open")}}),n.dropdownHeader=n.element.find(".cbp-l-dropdown-header"))}a.prototype.processSort=function(){var o=this,t=o.parent,e=(p=o.target).hasAttribute("data-sort"),n=p.hasAttribute("data-sortBy");if(e&&n)o.sort=p.getAttribute("data-sort"),o.sortBy=p.getAttribute("data-sortBy");else if(e)o.sort=p.getAttribute("data-sort");else{if(!n)return;o.sortBy=p.getAttribute("data-sortBy")}var i=o.sortBy.split(":"),a="string",r=1;if("int"===i[0]?a="int":"float"===i[0]&&(a="float"),"desc"===i[1]&&(r=-1),o.sort){var s=[];t.blocks.each(function(t,e){var n=u(e),i=n.find(o.sort).text();"int"===a&&(i=parseInt(i,10)),"float"===a&&(i=parseFloat(i,10)),s.push({sortText:i,data:n.data("cbp")})}),s.sort(function(t,e){var n=t.sortText,i=e.sortText;return"string"===a&&(n=n.toUpperCase(),i=i.toUpperCase()),n<i?-r:i<n?r:0}),u.each(s,function(t,e){e.data.index=t})}else{var l=[];-1===r&&(t.blocks.each(function(t,e){l.push(u(e).data("cbp").indexInitial)}),l.sort(function(t,e){return e-t})),t.blocks.each(function(t,e){var n=u(e).data("cbp");n.index=-1===r?l[n.indexInitial]:n.indexInitial})}t.sortBlocks(t.blocks,"index"),o.dropdownWrap.trigger("mouseleave.cbp");var p=u(o.target),c=u(o.target).parent();if(c.hasClass("cbp-l-dropdown-list"))o.dropdownHeader.html(p.html()),p.addClass("cbp-l-dropdown-item--active").siblings(".cbp-l-dropdown-item").removeClass("cbp-l-dropdown-item--active");else if(c.hasClass("cbp-l-direction")){0===p.index()?c.addClass("cbp-l-direction--second").removeClass("cbp-l-direction--first"):c.addClass("cbp-l-direction--first").removeClass("cbp-l-direction--second")}},a.prototype.destroy=function(){this.element.off("click.cbp")},o.plugins.sort=function(t){return new a(t)}}(jQuery,window,document);
/*! @vimeo/player v2.6.3 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)}function u(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=t.id,o=t.url,r=n||o;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=r,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(r);if(c(r))return r.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var n=Object.prototype.hasOwnProperty,r=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id","_WeakMap"+"_"+t()+"."+t()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function o(e,t){if(!i(e)||!n.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function t(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",function(e){if(o(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),r(e.prototype,"get",function(e){if(o(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),r(e.prototype,"has",function(e){if(o(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),r(e.prototype,"set",function(e,t){if(o(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:r(e,this._id,[e,t]),this}),r(e,"_polyfill",!0),e}()}function i(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:r);var a,s=(function(e){var t,n,o;o=function(){var t,a,n,e=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function i(e,t){n.add(e,t),a||(a=o(n.drain))}function u(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)r(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function r(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=u(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&i(c,t))}function l(e,n,o,r){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){o(t,e)},r)}(t)}function f(e){this.def=e,this.triggered=!1}function d(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new d(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),o.chain.push(n),0!==o.state&&i(c,o),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(n){var o,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(o=u(n))?i(function(){var t=new f(r);try{o.call(n,function(){e.apply(t,arguments)},function(){s.apply(t,arguments)})}catch(e){s.call(t,e)}}):(r.msg=n,r.state=1,0<r.chain.length&&i(c,r))}catch(e){s.call(new f(r),e)}}}).call(o,e)},function(e){s.call(o,e)})}catch(e){s.call(o,e)}}n=function(){var n,o,r;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(e,t){r=new i(e,t),o?o.next=r:n=r,o=r,r=void 0},drain:function(){var e=n;for(n=o=a=void 0;e;)e.fn.call(e.self),e=e.next}}}();var v=t({},"constructor",h,!1);return t(h.prototype=v,"__NPO__",0,!1),t(h,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),t(h,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),t(h,"all",function(t){var a=this;return"[object Array]"!=e.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var o=t.length,r=Array(o),i=0;l(a,t,function(e,t){r[e]=t,++i===o&&n(r)},e)})}),t(h,"race",function(t){var o=this;return"[object Array]"!=e.call(t)?o.reject(TypeError("Not an array")):new o(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");l(o,t,function(e,t){n(t)},e)})}),h},(n=r)[t="Promise"]=n[t]||o(),e.exports&&(e.exports=n[t])}(a={exports:{}},a.exports),a.exports),l=new WeakMap;function f(e,t,n){var o=l.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),l.set(e.element,o)}function d(e,t){return(l.get(e.element)||{})[t]||[]}function h(e,t,n){var o=l.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],l.set(e.element,o),!0;var r=o[t].indexOf(n);return-1!==r&&o[t].splice(r,1),l.set(e.element,o),o[t]&&0===o[t].length}var v=["autopause","autoplay","background","byline","color","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function p(o){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return v.reduce(function(e,t){var n=o.getAttribute("data-vimeo-".concat(t));return(n||""===n)&&(e[t]=""===n?1:n),e},e)}function y(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function m(i){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=2<arguments.length?arguments[2]:void 0;return new Promise(function(t,n){if(!c(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i),"&domain=").concat(window.location.hostname);for(var o in a)a.hasOwnProperty(o)&&(e+="&".concat(o,"=").concat(encodeURIComponent(a[o])));var r="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){if(404!==r.status)if(403!==r.status)try{var e=JSON.parse(r.responseText);if(403===e.domain_status_code)return y(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},r.onerror=function(){var e=r.status?" (".concat(r.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},r.send()})}function w(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function g(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));8<=r&&r<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function b(n,o){var t,e=[];if((o=w(o)).event){if("error"===o.event)d(n,o.data.method).forEach(function(e){var t=new Error(o.data.message);t.name=o.data.name,e.reject(t),h(n,o.data.method,e)});e=d(n,"event:".concat(o.event)),t=o.data}else if(o.method){var r=function(e,t){var n=d(e,t);if(n.length<1)return!1;var o=n.shift();return h(e,t,o),o}(n,o.method);r&&(e.push(r),t=o.value)}e.forEach(function(e){try{if("function"==typeof e)return void e.call(n,t);e.resolve(t)}catch(e){}})}var k=new WeakMap,E=new WeakMap,Player=function(){function Player(i){var a=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Player),window.jQuery&&i instanceof jQuery&&(1<i.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),i=i[0]),"undefined"!=typeof document&&"string"==typeof i&&(i=document.getElementById(i)),!(i instanceof window.HTMLElement))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==i.nodeName){var e=i.querySelector("iframe");e&&(i=e)}if("IFRAME"===i.nodeName&&!c(i.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(k.has(i))return k.get(i);this.element=i,this.origin="*";var t=new s(function(r,t){var e=function(e){if(c(e.origin)&&a.element.contentWindow===e.source){"*"===a.origin&&(a.origin=e.origin);var t=w(e.data),n="event"in t&&"ready"===t.event,o="method"in t&&"ping"===t.method;if(n||o)return a.element.setAttribute("data-ready","true"),void r();b(a,t)}};if(window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e),"IFRAME"!==a.element.nodeName){var n=p(i,o);m(u(n),n,i).then(function(e){var t,n,o,r=y(e,i);return a.element=r,a._originalElement=i,t=i,n=r,o=l.get(t),l.set(n,o),l.delete(t),k.set(a.element,a),e}).catch(function(e){return t(e)})}});return E.set(this,t),k.set(this.element,this),"IFRAME"===this.element.nodeName&&g(this,"ping"),this}var e,t,n;return e=Player,(t=[{key:"callMethod",value:function(n){var o=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new s(function(e,t){return o.ready().then(function(){f(o,n,{resolve:e,reject:t}),g(o,n,r)}).catch(function(e){t(e)})})}},{key:"get",value:function(n){var o=this;return new s(function(e,t){return n=i(n,"get"),o.ready().then(function(){f(o,n,{resolve:e,reject:t}),g(o,n)})})}},{key:"set",value:function(o,e){var r=this;return s.resolve(e).then(function(n){if(o=i(o,"set"),null==n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new s(function(e,t){f(r,o,{resolve:e,reject:t}),g(r,o,n)})})})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===d(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),f(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");h(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=E.get(this)||new s(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return s.resolve(e)}},{key:"addCuePoint",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new s(function(e){E.delete(t),k.delete(t.element),t._originalElement&&(k.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&"IFRAME"===t.element.nodeName&&t.element.remove(),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&o(e.prototype,t),n&&o(e,n),Player}();return e||!window.Vimeo||window.Vimeo.Player||(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=p(t);m(u(e),e,t).then(function(e){return y(e,t)}).catch(n)}catch(e){n(e)}})}(),function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document,e=function(e){if(c(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=o.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e)}()),Player});

var hsYTPlayers = {},
  hsVimeoPlayers = {},
  hsYTInit = (function () {
    var onReady_funcs = [],
      api_isReady = false;

    return function (func, b_before) {
      if (func === true) {
        api_isReady = true;
        for (var i = 0; i < onReady_funcs.length; i++) {
          onReady_funcs.shift()();
        }
      }
      else if (typeof func == "function") {
        if (api_isReady) func();
        else onReady_funcs[b_before ? "unshift" : "push"](func);
      }
    }
  })(),
  hsVimeoInit = (function () {
    var onReady_funcs = [],
      api_isReady = false;

    return function (func, b_before) {
      if (func === true) {
        api_isReady = true;
        for (var i = 0; i < onReady_funcs.length; i++) {
          onReady_funcs.shift()();
        }
      }
      else if (typeof func == "function") {
        if (api_isReady) func();
        else onReady_funcs[b_before ? "unshift" : "push"](func);
      }
    }
  })();

$.fn.hsBgVideo = function (options) {
  hsYTAPICreate();
  hsVimeoAPICreate();

  var YTVideo = $('[data-hs-bgv-type="youtube"]'),
    VimeoVideo = $('[data-hs-bgv-type="vimeo"]'),
    defaultVideo = $(this);

  if (YTVideo.length) {
    YTVideo.each(function (i) {
      var $this = $(this),
        ID = $this.data('hs-bgv-id'),
        loop = $this.data('hs-bgv-loop') ? 1 : 0,
        preview = $('<div class="hs-video-preview" style="background-image: url(//img.youtube.com/vi/' + ID + '/maxresdefault.jpg);"></div>');

      $this
        .css('position', 'relative')
        .prepend(preview)
        .prepend('<div id="hsYTPlayer' + i + '" class="hs-youtube hs-bg-video" data-hs-bgv-id="' + ID + '" data-hs-bgv-loop="' + loop + '"></div>');
    });

    hsYTInit(function () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;

      $('.hs-youtube').each(function (i) {
        var ID = $(this).attr('id'),
          videoID = $(this).data('hs-bgv-id'),
          loop = $(this).data('hs-bgv-loop') ? 1 : 0;

        return hsYTPlayers[i] = new YT.Player(ID, {
          videoId: videoID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            enablejsapi: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            loop: loop,
            playlist: videoID
          },
          events: {
            'onReady': hsYTReady,
            'onStateChange': hsYTPlay
          }
        });
      });
    });
  }

  if (VimeoVideo.length) {
    VimeoVideo.each(function (i) {
      var $this = $(this),
        ID = $this.data('hs-bgv-id'),
        loop = $this.data('hs-bgv-loop') ? 1 : 0;

      function getComputerName() {
        $.getJSON('//www.vimeo.com/api/v2/video/' + ID + '.json?callback=?', function (data) {
          var preview = data[0].thumbnail_large;

          $this.prepend('<div class="hs-video-preview" style="background-image: url(' + preview + ');"></div>');
        });
      }

      getComputerName();

      $this
        .css('position', 'relative')
        .prepend('<div id="hsVimeoPlayer' + i + '" class="hs-vimeo hs-bg-video" data-hs-bgv-id="' + ID + '" data-hs-bgv-loop="' + loop + '"></div>');
    });

    hsVimeoInit(function () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;

      $('.hs-vimeo').each(function (i) {
        var ID = $(this).attr('id'),
          videoID = $(this).data('hs-bgv-id'),
          loop = $(this).data('hs-bgv-loop') ? 1 : 0;

        hsVimeoPlayers[i] = new Vimeo.Player(ID, {
          id: videoID,
          loop: loop,
          title: false,
          portrait: false,
          byline: false,
          autoplay: true,
          autopause: false
        });

        hsVimeoPlayers[i].setVolume(0);

        hsVimeoPlayers[i].play().then(function () {
          var thisW = hsVimeoPlayers[i].element.width,
            thisH = hsVimeoPlayers[i].element.height,
            ratio = thisW / thisH;

          ratioCalc(hsVimeoPlayers[i].element, ratio);

          $(window).resize(function () {
            ratioCalc(hsVimeoPlayers[i].element, ratio);
          });

          $('*').on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function () {
            ratioCalc(hsVimeoPlayers[i].element, ratio);
          });

          setTimeout(function () {
            $('#' + ID).prev().fadeOut(400);
          }, 3000);
        });
      });
    });
  }

  if (defaultVideo.length) {
    defaultVideo.not('[data-hs-bgv-type]').each(function () {
      var $this = $(this),
        path = $this.data('hs-bgv-path'),
        loop = $this.data('hs-bgv-loop') ? 'loop ' : '',
        template = '<video ' +
          'class="hs-html5 hs-bg-video"' +
          ' poster="" autoplay muted ' + loop + '>' +
          '<source src="' + path + '.mp4" type="video/mp4">' +
          '<source src="' + path + '.webm" type="video/webm">' +
          '<source src="' + path + '.ogv" type="video/ogg">' +
          'Your browser doesn\'t support HTML5 video.' +
          '</video>';

      $this
        .css('position', 'relative')
        .prepend(template);
    });
  }
};

//Ratio
function ratioCalc(target, ratio) {
  var windW = $(window).width(),
    containerH = $(target).parents('[data-hs-bgv-id]').outerHeight(),
    containerW = $(target).parent('[data-hs-bgv-id]').outerWidth(),
    newW = ratio * containerH,
    newH = ratio * containerW;


  if (containerH > containerW) {
    $(target).css({
      'width': newW,
      'height': '130%'
    });
  } else {
    $(target).css({
      'width': newH,
      'height': windW > 1600 ? newH * .4 : newW
    });
  }
}

//YouTube
function hsYTAPICreate() {
  if ($('[data-hs-bgv-type="youtube"]').length) {
    var script = document.createElement('script');
    script.src = '//www.youtube.com/player_api';

    var before = document.getElementsByTagName('script')[0];
    before.parentNode.insertBefore(script, before);
  }
}

function hsYTReady(e) {
  e.target.mute();

  var thisW = e.target.a.width,
    thisH = e.target.a.height,
    ratio = thisW / thisH;

  ratioCalc(e.target.a, ratio);

  $(window).resize(function () {
    ratioCalc(e.target.a, ratio);
  });

  $('*').on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function () {
    ratioCalc(e.target.a, ratio);
  });
}

function hsYTPlay(e) {
  if (e.data == YT.PlayerState.PLAYING) {
    setTimeout(function () {
      $(e.target.a).next().fadeOut(400);
    }, 3000);
  }
}

function onYouTubePlayerAPIReady() {
  hsYTInit(true);
}

//Vimeo
function hsVimeoAPICreate() {
  if ($('[data-hs-bgv-type="vimeo"]').length) {
    var script = document.createElement('script');
    script.src = '//player.vimeo.com/api/player.js';

    var before = document.getElementsByTagName('script')[0];
    before.parentNode.insertBefore(script, before);
  }
}

hsVimeoInit(true);
/*! @vimeo/player v2.1.0 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var r=_.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),_.set(e.element,r)}function n(e,t){var n=_.get(e.element)||{};return n[t]||[]}function r(e,t,n){var r=_.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],_.set(e.element,r),!0;var o=r[t].indexOf(n);return o!==-1&&r[t].splice(o,1),_.set(e.element,r),r[t]&&0===r[t].length}function o(e,t){var o=n(e,t);if(o.length<1)return!1;var i=o.shift();return r(e,t,i),i}function i(e,t){var n=_.get(e);_.set(t,n),_.delete(e)}function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:""+t.toLowerCase()+e.substr(0,1).toUpperCase()+e.substr(1)}function u(e){return e instanceof window.HTMLElement}function s(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function c(e){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(s(r))return"https://vimeo.com/"+r;if(c(r))return r.replace("http:","https:");if(t)throw new TypeError("“"+t+"” is not a valid video id.");throw new TypeError("“"+r+"” is not a vimeo.com url.")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return j.reduce(function(t,n){var r=e.getAttribute("data-vimeo-"+n);return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){if(!c(e))throw new TypeError("“"+e+"” is not a vimeo.com url.");var o="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e);for(var i in t)t.hasOwnProperty(i)&&(o+="&"+i+"="+encodeURIComponent(t[i]));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404===a.status)return void r(new Error("“"+e+"” was not found."));if(403===a.status)return void r(new Error("“"+e+"” is not embeddable."));try{var t=JSON.parse(a.responseText);n(t)}catch(e){r(e)}},a.onerror=function(){var e=a.status?" ("+a.status+")":"";r(new Error("There was an error fetching the embed code from Vimeo"+e+"."))},a.send()})}function d(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: "+e)};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=l(e),r=f(t);h(r,t).then(function(t){return d(t,e)}).catch(n)}catch(e){n(e)}})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=function(t){if(c(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){var o=n[r].parentElement;o&&o.className.indexOf("vimeo-space")!==-1&&(o.style.paddingBottom=t.data.data[0].bottom+"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}function y(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function m(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function g(e,t){t=y(t);var i=[],a=void 0;if(t.event){if("error"===t.event){var u=n(e,t.data.method);u.forEach(function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),r(e,t.data.method,n)})}i=n(e,"event:"+t.event),a=t.data}else if(t.method){var s=o(e,t.method);s&&(i.push(s),a=t.value)}i.forEach(function(t){try{if("function"==typeof t)return void t.call(e,a);t.resolve(a)}catch(e){}})}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var k="undefined"!=typeof Array.prototype.indexOf,b="undefined"!=typeof window.postMessage;if(!k||!b)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var E="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},T=(e(function(e,t){!function(e){function t(e,t){function r(e){return this&&this.constructor===r?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new r(e)}return t||w(e,"size",{get:y}),e.constructor=r,r.prototype=e,r}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function r(e){return this.has(e)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(e){g<e[0]&&e[0]--})),-1<g}function o(e){return this.has(e)?this._values[g]:void 0}function i(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(g=e.length;g--&&!k(e[g],t););else g=e.indexOf(t);return-1<g}function a(e){return i.call(this,this._values,e)}function u(e){return i.call(this,this._keys,e)}function s(e,t){return this.has(e)?this._values[g]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function f(){(this._keys||0).length=this._values.length=0}function l(){return p(this._itp,this._keys)}function h(){return p(this._itp,this._values)}function d(){return p(this._itp,this._keys,this._values)}function v(){return p(this._itp,this._values,this._values)}function p(e,t,n){var r=[0],o=!1;return e.push(r),{next:function(){var i,a=r[0];return!o&&a<t.length?(i=n?[t[a],n[a]]:t[a],r[0]++):(o=!0,e.splice(e.indexOf(r),1)),{done:o,value:i}}}}function y(){return this._values.length}function m(e,t){for(var n=this.entries();;){var r=n.next();if(r.done)break;e.call(t,r.value[1],r.value[0],this)}}var g,w=Object.defineProperty,k=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:r,clear:f,get:o,has:u,set:s},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:r,has:u,get:o,set:s,keys:l,values:h,entries:d,forEach:m,clear:f})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:c,delete:r,clear:f,keys:h,values:h,entries:v,forEach:m})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:r,add:c,clear:f,has:a},!0))}("undefined"!=typeof E?E:window)}),e(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,n,r){n[t]=n[t]||r(),e.exports&&(e.exports=n[t])}("Promise","undefined"!=typeof E?E:E,function(){function e(e,t){d.add(e,t),h||(h=p(d.drain))}function n(e){var n,r="undefined"==typeof e?"undefined":t(e);return null==e||"object"!=r&&"function"!=r||(n=e.then),"function"==typeof n&&n}function r(){for(var e=0;e<this.chain.length;e++)o(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function o(e,t,r){var o,i;try{t===!1?r.reject(e.msg):(o=t===!0?e.msg:t.call(void 0,e.msg),o===r.promise?r.reject(TypeError("Promise-chain cycle")):(i=n(o))?i.call(o,r.resolve,r.reject):r.resolve(o))}catch(e){r.reject(e)}}function i(t){var o,u=this;if(!u.triggered){u.triggered=!0,u.def&&(u=u.def);try{(o=n(t))?e(function(){var e=new s(u);try{o.call(t,function(){i.apply(e,arguments)},function(){a.apply(e,arguments)})}catch(t){a.call(e,t)}}):(u.msg=t,u.state=1,u.chain.length>0&&e(r,u))}catch(e){a.call(new s(u),e)}}}function a(t){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=t,n.state=2,n.chain.length>0&&e(r,n))}function u(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function s(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function f(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new c(this);this.then=function(t,o){var i={success:"function"!=typeof t||t,failure:"function"==typeof o&&o};return i.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");i.resolve=e,i.reject=t}),n.chain.push(i),0!==n.state&&e(r,n),i.promise},this.catch=function(e){return this.then(void 0,e)};try{t.call(void 0,function(e){i.call(n,e)},function(e){a.call(n,e)})}catch(e){a.call(n,e)}}var l,h,d,v=Object.prototype.toString,p="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),l=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:r!==!1})}}catch(e){l=function(e,t,n){return e[t]=n,e}}d=function(){function e(e,t){this.fn=e,this.self=t,this.next=void 0}var t,n,r;return{add:function(o,i){r=new e(o,i),n?n.next=r:t=r,n=r,r=void 0},drain:function(){var e=t;for(t=n=h=void 0;e;)e.fn.call(e.self),e=e.next}}}();var y=l({},"constructor",f,!1);return f.prototype=y,l(y,"__NPO__",0,!1),l(f,"resolve",function(e){var n=this;return e&&"object"==("undefined"==typeof e?"undefined":t(e))&&1===e.__NPO__?e:new n(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),l(f,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),l(f,"all",function(e){var t=this;return"[object Array]"!=v.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;u(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)})}),l(f,"race",function(e){var t=this;return"[object Array]"!=v.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");u(t,e,function(e,t){n(t)},r)})}),f})})),_=new WeakMap,j=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=new WeakMap,A=new WeakMap,Player=function(){function Player(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(w(this,Player),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"string"==typeof e&&(e=document.getElementById(e)),!u(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var r=e.querySelector("iframe");r&&(e=r)}if("IFRAME"===e.nodeName&&!c(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(M.has(e))return M.get(e);this.element=e,this.origin="*";var o=new T(function(r,o){var a=function(e){if(c(e.origin)&&t.element.contentWindow===e.source){"*"===t.origin&&(t.origin=e.origin);var n=y(e.data),o="event"in n&&"ready"===n.event,i="method"in n&&"ping"===n.method;return o||i?(t.element.setAttribute("data-ready","true"),void r()):void g(t,n)}};if(window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a),"IFRAME"!==t.element.nodeName){var u=l(e,n),s=f(u);h(s,u).then(function(n){var r=d(n,e);return t.element=r,i(e,r),M.set(t.element,t),n}).catch(function(e){return o(e)})}});return A.set(this,o),M.set(this.element,this),"IFRAME"===this.element.nodeName&&m(this,"ping"),this}return x(Player,[{key:"callMethod",value:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new T(function(o,i){return n.ready().then(function(){t(n,e,{resolve:o,reject:i}),m(n,e,r)})})}},{key:"get",value:function(e){var n=this;return new T(function(r,o){return e=a(e,"get"),n.ready().then(function(){t(n,e,{resolve:r,reject:o}),m(n,e)})})}},{key:"set",value:function(e,n){var r=this;return T.resolve(n).then(function(n){if(e=a(e,"set"),void 0===n||null===n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new T(function(o,i){t(r,e,{resolve:o,reject:i}),m(r,e,n)})})})}},{key:"on",value:function(e,r){if(!e)throw new TypeError("You must pass an event name.");if(!r)throw new TypeError("You must pass a callback function.");if("function"!=typeof r)throw new TypeError("The callback must be a function.");var o=n(this,"event:"+e);0===o.length&&this.callMethod("addEventListener",e).catch(function(){}),t(this,"event:"+e,r)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");var n=r(this,"event:"+e,t);n&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=A.get(this);return T.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),Player}();return v(),p(),Player});

"use strict";!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(["jquery","googlemaps!"],b):a.GMaps=b()}(this,function(){var a=function(a,b){var c;if(a===b)return a;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a},b=function(a,b){var c,d=Array.prototype.slice.call(arguments,2),e=[],f=a.length;if(Array.prototype.map&&a.map===Array.prototype.map)e=Array.prototype.map.call(a,function(a){var c=d.slice(0);return c.splice(0,0,a),b.apply(this,c)});else for(c=0;f>c;c++)callback_params=d,callback_params.splice(0,0,a[c]),e.push(b.apply(this,callback_params));return e},c=function(a){var b,c=[];for(b=0;b<a.length;b++)c=c.concat(a[b]);return c},d=function(a,b){var c=a[0],d=a[1];return b&&(c=a[1],d=a[0]),new google.maps.LatLng(c,d)},f=function(a,b){var c;for(c=0;c<a.length;c++)a[c]instanceof google.maps.LatLng||(a[c].length>0&&"object"==typeof a[c][0]?a[c]=f(a[c],b):a[c]=d(a[c],b));return a},g=function(a,b){var c,d=a.replace(".","");return c="jQuery"in this&&b?$("."+d,b)[0]:document.getElementsByClassName(d)[0]},h=function(a,b){var c,a=a.replace("#","");return c="jQuery"in window&&b?$("#"+a,b)[0]:document.getElementById(a)},i=function(a){var b=0,c=0;if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},j=function(b){var c=document,d=function(b){if("object"!=typeof window.google||!window.google.maps)return"object"==typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};if(!this)return new d(b);b.zoom=b.zoom||15,b.mapType=b.mapType||"roadmap";var e,f=function(a,b){return void 0===a?b:a},j=this,k=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],l=["mousemove","mouseout","mouseover"],m=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],n=b.el||b.div,o=b.markerClusterer,p=google.maps.MapTypeId[b.mapType.toUpperCase()],q=new google.maps.LatLng(b.lat,b.lng),r=f(b.zoomControl,!0),s=b.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},t=s.style||"DEFAULT",u=s.position||"TOP_LEFT",v=f(b.panControl,!0),w=f(b.mapTypeControl,!0),x=f(b.scaleControl,!0),y=f(b.streetViewControl,!0),z=f(z,!0),A={},B={zoom:this.zoom,center:q,mapTypeId:p},C={panControl:v,zoomControl:r,zoomControlOptions:{style:google.maps.ZoomControlStyle[t],position:google.maps.ControlPosition[u]},mapTypeControl:w,scaleControl:x,streetViewControl:y,overviewMapControl:z};if("string"==typeof b.el||"string"==typeof b.div?n.indexOf("#")>-1?this.el=h(n,b.context):this.el=g.apply(this,[n,b.context]):this.el=n,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[j.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=b.zoom,this.registered_events={},this.el.style.width=b.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=b.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=b.enableNewStyle,e=0;e<m.length;e++)delete b[m[e]];for(1!=b.disableDefaultUI&&(B=a(B,C)),A=a(B,b),e=0;e<k.length;e++)delete A[k[e]];for(e=0;e<l.length;e++)delete A[l[e]];this.map=new google.maps.Map(this.el,A),o&&(this.markerClusterer=o.apply(this,[this.map]));var D=function(a,b){var c="",d=window.context_menu[j.el.id][a];for(var e in d)if(d.hasOwnProperty(e)){var f=d[e];c+='<li><a id="'+a+"_"+e+'" href="#">'+f.title+"</a></li>"}if(h("gmaps_context_menu")){var g=h("gmaps_context_menu");g.innerHTML=c;var e,k=g.getElementsByTagName("a"),l=k.length;for(e=0;l>e;e++){var m=k[e],n=function(c){c.preventDefault(),d[this.id.replace(a+"_","")].action.apply(j,[b]),j.hideContextMenu()};google.maps.event.clearListeners(m,"click"),google.maps.event.addDomListenerOnce(m,"click",n,!1)}var o=i.apply(this,[j.el]),p=o[0]+b.pixel.x-15,q=o[1]+b.pixel.y-15;g.style.left=p+"px",g.style.top=q+"px"}};this.buildContextMenu=function(a,b){if("marker"===a){b.pixel={};var c=new google.maps.OverlayView;c.setMap(j.map),c.draw=function(){var d=c.getProjection(),e=b.marker.getPosition();b.pixel=d.fromLatLngToContainerPixel(e),D(a,b)}}else D(a,b);var d=h("gmaps_context_menu");setTimeout(function(){d.style.display="block"},0)},this.setContextMenu=function(a){window.context_menu[j.el.id][a.control]={};var b,d=c.createElement("ul");for(b in a.options)if(a.options.hasOwnProperty(b)){var e=a.options[b];window.context_menu[j.el.id][a.control][e.name]={title:e.title,action:e.action}}d.id="gmaps_context_menu",d.style.display="none",d.style.position="absolute",d.style.minWidth="100px",d.style.background="white",d.style.listStyle="none",d.style.padding="8px",d.style.boxShadow="2px 2px 6px #ccc",h("gmaps_context_menu")||c.body.appendChild(d);var f=h("gmaps_context_menu");google.maps.event.addDomListener(f,"mouseout",function(a){a.relatedTarget&&this.contains(a.relatedTarget)||window.setTimeout(function(){f.style.display="none"},400)},!1)},this.hideContextMenu=function(){var a=h("gmaps_context_menu");a&&(a.style.display="none")};var E=function(a,c){google.maps.event.addListener(a,c,function(a){void 0==a&&(a=this),b[c].apply(this,[a]),j.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var F=0;F<k.length;F++){var G=k[F];G in b&&E(this.map,G)}for(var F=0;F<l.length;F++){var G=l[F];G in b&&E(this.map,G)}google.maps.event.addListener(this.map,"rightclick",function(a){b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[j.el.id].map&&j.buildContextMenu("map",a)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var a,b=[],c=this.markers.length;for(a=0;c>a;a++)"boolean"==typeof this.markers[a].visible&&this.markers[a].visible&&b.push(this.markers[a].getPosition());this.fitLatLngBounds(b)},this.fitLatLngBounds=function(a){var b,c=a.length,d=new google.maps.LatLngBounds;for(b=0;c>b;b++)d.extend(a[b]);this.map.fitBounds(d)},this.setCenter=function(a,b,c){this.map.panTo(new google.maps.LatLng(a,b)),c&&c()},this.getElement=function(){return this.el},this.zoomIn=function(a){a=a||1,this.zoom=this.map.getZoom()+a,this.map.setZoom(this.zoom)},this.zoomOut=function(a){a=a||1,this.zoom=this.map.getZoom()-a,this.map.setZoom(this.zoom)};var H,I=[];for(H in this.map)"function"!=typeof this.map[H]||this[H]||I.push(H);for(e=0;e<I.length;e++)!function(a,b,c){a[c]=function(){return b[c].apply(b,arguments)}}(this,this.map,I[e])};return d}(this);j.prototype.createControl=function(a){var b=document.createElement("div");b.style.cursor="pointer",a.disableDefaultStyles!==!0&&(b.style.fontFamily="Roboto, Arial, sans-serif",b.style.fontSize="11px",b.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var c in a.style)b.style[c]=a.style[c];a.id&&(b.id=a.id),a.title&&(b.title=a.title),a.classes&&(b.className=a.classes),a.content&&("string"==typeof a.content?b.innerHTML=a.content:a.content instanceof HTMLElement&&b.appendChild(a.content)),a.position&&(b.position=google.maps.ControlPosition[a.position.toUpperCase()]);for(var d in a.events)!function(b,c){google.maps.event.addDomListener(b,c,function(){a.events[c].apply(this,[this])})}(b,d);return b.index=1,b},j.prototype.addControl=function(a){var b=this.createControl(a);return this.controls.push(b),this.map.controls[b.position].push(b),b},j.prototype.removeControl=function(a){var b,c=null;for(b=0;b<this.controls.length;b++)this.controls[b]==a&&(c=this.controls[b].position,this.controls.splice(b,1));if(c)for(b=0;b<this.map.controls.length;b++){var d=this.map.controls[a.position];if(d.getAt(b)==a){d.removeAt(b);break}}return a},j.prototype.createMarker=function(b){if(void 0==b.lat&&void 0==b.lng&&void 0==b.position)throw"No latitude or longitude defined.";var c=this,d=b.details,e=b.fences,f=b.outside,g={position:new google.maps.LatLng(b.lat,b.lng),map:null},h=a(g,b);delete h.lat,delete h.lng,delete h.fences,delete h.outside;var i=new google.maps.Marker(h);if(i.fences=e,b.infoWindow){i.infoWindow=new google.maps.InfoWindow(b.infoWindow);for(var j=["closeclick","content_changed","domready","position_changed","zindex_changed"],k=0;k<j.length;k++)!function(a,c){b.infoWindow[c]&&google.maps.event.addListener(a,c,function(a){b.infoWindow[c].apply(this,[a])})}(i.infoWindow,j[k])}for(var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],m=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],k=0;k<l.length;k++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this,[this])})}(i,l[k]);for(var k=0;k<m.length;k++)!function(a,c,d){b[d]&&google.maps.event.addListener(c,d,function(c){c.pixel||(c.pixel=a.getProjection().fromLatLngToPoint(c.latLng)),b[d].apply(this,[c])})}(this.map,i,m[k]);return google.maps.event.addListener(i,"click",function(){this.details=d,b.click&&b.click.apply(this,[this]),i.infoWindow&&(c.hideInfoWindows(),i.infoWindow.open(c.map,i))}),google.maps.event.addListener(i,"rightclick",function(a){a.marker=this,b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[c.el.id].marker&&c.buildContextMenu("marker",a)}),i.fences&&google.maps.event.addListener(i,"dragend",function(){c.checkMarkerGeofence(i,function(a,b){f(a,b)})}),i},j.prototype.addMarker=function(a){var b;if(a.hasOwnProperty("gm_accessors_"))b=a;else{if(!(a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||a.position))throw"No latitude or longitude defined.";b=this.createMarker(a)}return b.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(b),this.markers.push(b),j.fire("marker_added",b,this),b},j.prototype.addMarkers=function(a){for(var b,c=0;b=a[c];c++)this.addMarker(b);return this.markers},j.prototype.hideInfoWindows=function(){for(var a,b=0;a=this.markers[b];b++)a.infoWindow&&a.infoWindow.close()},j.prototype.removeMarker=function(a){for(var b=0;b<this.markers.length;b++)if(this.markers[b]===a){this.markers[b].setMap(null),this.markers.splice(b,1),this.markerClusterer&&this.markerClusterer.removeMarker(a),j.fire("marker_removed",a,this);break}return a},j.prototype.removeMarkers=function(a){var b=[];if("undefined"==typeof a){for(var c=0;c<this.markers.length;c++){var d=this.markers[c];d.setMap(null),j.fire("marker_removed",d,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=b}else{for(var c=0;c<a.length;c++){var e=this.markers.indexOf(a[c]);if(e>-1){var d=this.markers[e];d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),j.fire("marker_removed",d,this)}}for(var c=0;c<this.markers.length;c++){var d=this.markers[c];null!=d.getMap()&&b.push(d)}this.markers=b}},j.prototype.drawOverlay=function(a){var b=new google.maps.OverlayView,c=!0;return b.setMap(this.map),null!=a.auto_show&&(c=a.auto_show),b.onAdd=function(){var c=document.createElement("div");c.style.borderStyle="none",c.style.borderWidth="0px",c.style.position="absolute",c.style.zIndex=100,c.innerHTML=a.content,b.el=c,a.layer||(a.layer="overlayLayer");var d=this.getPanes(),e=d[a.layer],f=["contextmenu","DOMMouseScroll","dblclick","mousedown"];e.appendChild(c);for(var g=0;g<f.length;g++)!function(a,b){google.maps.event.addDomListener(a,b,function(a){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(a.cancelBubble=!0,a.returnValue=!1):a.stopPropagation()})}(c,f[g]);a.click&&(d.overlayMouseTarget.appendChild(b.el),google.maps.event.addDomListener(b.el,"click",function(){a.click.apply(b,[b])})),google.maps.event.trigger(this,"ready")},b.draw=function(){var d=this.getProjection(),e=d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat,a.lng));a.horizontalOffset=a.horizontalOffset||0,a.verticalOffset=a.verticalOffset||0;var f=b.el,g=f.children[0],h=g.clientHeight,i=g.clientWidth;switch(a.verticalAlign){case"top":f.style.top=e.y-h+a.verticalOffset+"px";break;default:case"middle":f.style.top=e.y-h/2+a.verticalOffset+"px";break;case"bottom":f.style.top=e.y+a.verticalOffset+"px"}switch(a.horizontalAlign){case"left":f.style.left=e.x-i+a.horizontalOffset+"px";break;default:case"center":f.style.left=e.x-i/2+a.horizontalOffset+"px";break;case"right":f.style.left=e.x+a.horizontalOffset+"px"}f.style.display=c?"block":"none",c||a.show.apply(this,[f])},b.onRemove=function(){var c=b.el;a.remove?a.remove.apply(this,[c]):(b.el.parentNode.removeChild(b.el),b.el=null)},this.overlays.push(b),b},j.prototype.removeOverlay=function(a){for(var b=0;b<this.overlays.length;b++)if(this.overlays[b]===a){this.overlays[b].setMap(null),this.overlays.splice(b,1);break}},j.prototype.removeOverlays=function(){for(var a,b=0;a=this.overlays[b];b++)a.setMap(null);this.overlays=[]},j.prototype.drawPolyline=function(a){var b=[],c=a.path;if(c.length)if(void 0===c[0][0])b=c;else for(var d,e=0;d=c[e];e++)b.push(new google.maps.LatLng(d[0],d[1]));var f={map:this.map,path:b,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight,geodesic:a.geodesic,clickable:!0,editable:!1,visible:!0};a.hasOwnProperty("clickable")&&(f.clickable=a.clickable),a.hasOwnProperty("editable")&&(f.editable=a.editable),a.hasOwnProperty("icons")&&(f.icons=a.icons),a.hasOwnProperty("zIndex")&&(f.zIndex=a.zIndex);for(var g=new google.maps.Polyline(f),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(b,c){a[c]&&google.maps.event.addListener(b,c,function(b){a[c].apply(this,[b])})}(g,h[i]);return this.polylines.push(g),j.fire("polyline_added",g,this),g},j.prototype.removePolyline=function(a){for(var b=0;b<this.polylines.length;b++)if(this.polylines[b]===a){this.polylines[b].setMap(null),this.polylines.splice(b,1),j.fire("polyline_removed",a,this);break}},j.prototype.removePolylines=function(){for(var a,b=0;a=this.polylines[b];b++)a.setMap(null);this.polylines=[]},j.prototype.drawCircle=function(b){b=a({map:this.map,center:new google.maps.LatLng(b.lat,b.lng)},b),delete b.lat,delete b.lng;for(var c=new google.maps.Circle(b),d=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],e=0;e<d.length;e++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(c,d[e]);return this.polygons.push(c),c},j.prototype.drawRectangle=function(b){b=a({map:this.map},b);var c=new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0],b.bounds[0][1]),new google.maps.LatLng(b.bounds[1][0],b.bounds[1][1]));b.bounds=c;for(var d=new google.maps.Rectangle(b),e=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],f=0;f<e.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e[f]);return this.polygons.push(d),d},j.prototype.drawPolygon=function(d){var e=!1;d.hasOwnProperty("useGeoJSON")&&(e=d.useGeoJSON),delete d.useGeoJSON,d=a({map:this.map},d),0==e&&(d.paths=[d.paths.slice(0)]),d.paths.length>0&&d.paths[0].length>0&&(d.paths=c(b(d.paths,f,e)));for(var g=new google.maps.Polygon(d),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(a,b){d[b]&&google.maps.event.addListener(a,b,function(a){d[b].apply(this,[a])})}(g,h[i]);return this.polygons.push(g),j.fire("polygon_added",g,this),g},j.prototype.removePolygon=function(a){for(var b=0;b<this.polygons.length;b++)if(this.polygons[b]===a){this.polygons[b].setMap(null),this.polygons.splice(b,1),j.fire("polygon_removed",a,this);break}},j.prototype.removePolygons=function(){for(var a,b=0;a=this.polygons[b];b++)a.setMap(null);this.polygons=[]},j.prototype.getFromFusionTables=function(a){var b=a.events;delete a.events;var c=a,d=new google.maps.FusionTablesLayer(c);for(var e in b)!function(a,c){google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e);return this.layers.push(d),d},j.prototype.loadFromFusionTables=function(a){var b=this.getFromFusionTables(a);return b.setMap(this.map),b},j.prototype.getFromKML=function(a){var b=a.url,c=a.events;delete a.url,delete a.events;var d=a,e=new google.maps.KmlLayer(b,d);for(var f in c)!function(a,b){google.maps.event.addListener(a,b,function(a){c[b].apply(this,[a])})}(e,f);return this.layers.push(e),e},j.prototype.loadFromKML=function(a){var b=this.getFromKML(a);return b.setMap(this.map),b},j.prototype.addLayer=function(a,b){b=b||{};var c;switch(a){case"weather":this.singleLayers.weather=c=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=c=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=c=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=c=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=c=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=c=new google.maps.panoramio.PanoramioLayer,c.setTag(b.filter),delete b.filter,b.click&&google.maps.event.addListener(c,"click",function(a){b.click(a),delete b.click});break;case"places":if(this.singleLayers.places=c=new google.maps.places.PlacesService(this.map),b.search||b.nearbySearch||b.radarSearch){var d={bounds:b.bounds||null,keyword:b.keyword||null,location:b.location||null,name:b.name||null,radius:b.radius||null,rankBy:b.rankBy||null,types:b.types||null};b.radarSearch&&c.radarSearch(d,b.radarSearch),b.search&&c.search(d,b.search),b.nearbySearch&&c.nearbySearch(d,b.nearbySearch)}if(b.textSearch){var e={bounds:b.bounds||null,location:b.location||null,query:b.query||null,radius:b.radius||null};c.textSearch(e,b.textSearch)}}return void 0!==c?("function"==typeof c.setOptions&&c.setOptions(b),"function"==typeof c.setMap&&c.setMap(this.map),c):void 0},j.prototype.removeLayer=function(a){if("string"==typeof a&&void 0!==this.singleLayers[a])this.singleLayers[a].setMap(null),delete this.singleLayers[a];else for(var b=0;b<this.layers.length;b++)if(this.layers[b]===a){this.layers[b].setMap(null),this.layers.splice(b,1);break}};var k,l;return j.prototype.getRoutes=function(b){switch(b.travelMode){case"bicycling":k=google.maps.TravelMode.BICYCLING;break;case"transit":k=google.maps.TravelMode.TRANSIT;break;case"driving":k=google.maps.TravelMode.DRIVING;break;default:k=google.maps.TravelMode.WALKING}l="imperial"===b.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var c={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},d=a(c,b);d.origin=/string/.test(typeof b.origin)?b.origin:new google.maps.LatLng(b.origin[0],b.origin[1]),d.destination=/string/.test(typeof b.destination)?b.destination:new google.maps.LatLng(b.destination[0],b.destination[1]),d.travelMode=k,d.unitSystem=l,delete d.callback,delete d.error;var e=[],f=new google.maps.DirectionsService;f.route(d,function(a,c){if(c===google.maps.DirectionsStatus.OK){for(var d in a.routes)a.routes.hasOwnProperty(d)&&e.push(a.routes[d]);b.callback&&b.callback(e,a,c)}else b.error&&b.error(a,c)})},j.prototype.removeRoutes=function(){this.routes.length=0},j.prototype.getElevations=function(d){d=a({locations:[],path:!1,samples:256},d),d.locations.length>0&&d.locations[0].length>0&&(d.locations=c(b([d.locations],f,!1)));var e=d.callback;delete d.callback;var g=new google.maps.ElevationService;if(d.path){var h={path:d.locations,samples:d.samples};g.getElevationAlongPath(h,function(a,b){e&&"function"==typeof e&&e(a,b)})}else delete d.path,delete d.samples,g.getElevationForLocations(d,function(a,b){e&&"function"==typeof e&&e(a,b)})},j.prototype.cleanRoute=j.prototype.removePolylines,j.prototype.renderRoute=function(b,c){var d,e="string"==typeof c.panel?document.getElementById(c.panel.replace("#","")):c.panel;c.panel=e,c=a({map:this.map},c),d=new google.maps.DirectionsRenderer(c),this.getRoutes({origin:b.origin,destination:b.destination,travelMode:b.travelMode,waypoints:b.waypoints,unitSystem:b.unitSystem,error:b.error,avoidHighways:b.avoidHighways,avoidTolls:b.avoidTolls,optimizeWaypoints:b.optimizeWaypoints,callback:function(a,b,c){c===google.maps.DirectionsStatus.OK&&d.setDirections(b)}})},j.prototype.drawRoute=function(a){var b=this;this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,avoidHighways:a.avoidHighways,avoidTolls:a.avoidTolls,optimizeWaypoints:a.optimizeWaypoints,callback:function(c){if(c.length>0){var d={path:c[c.length-1].overview_path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(d.icons=a.icons),b.drawPolyline(d),a.callback&&a.callback(c[c.length-1])}}})},j.prototype.travelRoute=function(a){if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(b){if(b.length>0&&a.start&&a.start(b[b.length-1]),b.length>0&&a.step){var c=b[b.length-1];if(c.legs.length>0)for(var d,e=c.legs[0].steps,f=0;d=e[f];f++)d.step_number=f,a.step(d,c.legs[0].steps.length-1)}b.length>0&&a.end&&a.end(b[b.length-1])}});else if(a.route&&a.route.legs.length>0)for(var b,c=a.route.legs[0].steps,d=0;b=c[d];d++)b.step_number=d,a.step(b)},j.prototype.drawSteppedRoute=function(a){var b=this;if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,error:a.error,callback:function(c){if(c.length>0&&a.start&&a.start(c[c.length-1]),c.length>0&&a.step){var d=c[c.length-1];if(d.legs.length>0)for(var e,f=d.legs[0].steps,g=0;e=f[g];g++){e.step_number=g;var h={path:e.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(h.icons=a.icons),b.drawPolyline(h),a.step(e,d.legs[0].steps.length-1)}}c.length>0&&a.end&&a.end(c[c.length-1])}});else if(a.route&&a.route.legs.length>0)for(var c,d=a.route.legs[0].steps,e=0;c=d[e];e++){c.step_number=e;var f={path:c.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(f.icons=a.icons),b.drawPolyline(f),a.step(c)}},j.Route=function(a){this.origin=a.origin,this.destination=a.destination,this.waypoints=a.waypoints,this.map=a.map,this.route=a.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var b={path:new google.maps.MVCArray,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(b.icons=a.icons),this.polyline=this.map.drawPolyline(b).getPath()},j.Route.prototype.getRoute=function(a){var b=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:a.travelMode,waypoints:this.waypoints||[],error:a.error,callback:function(){b.route=e[0],a.callback&&a.callback.call(b)}})},j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.pop()}},j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.push(a[b]);this.step_count++}},j.prototype.checkGeofence=function(a,b,c){return c.containsLatLng(new google.maps.LatLng(a,b))},j.prototype.checkMarkerGeofence=function(a,b){if(a.fences)for(var c,d=0;c=a.fences[d];d++){var e=a.getPosition();this.checkGeofence(e.lat(),e.lng(),c)||b(a,c)}},j.prototype.toImage=function(a){var a=a||{},b={};if(b.size=a.size||[this.el.clientWidth,this.el.clientHeight],b.lat=this.getCenter().lat(),b.lng=this.getCenter().lng(),this.markers.length>0){b.markers=[];for(var c=0;c<this.markers.length;c++)b.markers.push({lat:this.markers[c].getPosition().lat(),lng:this.markers[c].getPosition().lng()})}if(this.polylines.length>0){var d=this.polylines[0];b.polyline={},b.polyline.path=google.maps.geometry.encoding.encodePath(d.getPath()),b.polyline.strokeColor=d.strokeColor,b.polyline.strokeOpacity=d.strokeOpacity,b.polyline.strokeWeight=d.strokeWeight}return j.staticMapURL(b)},j.staticMapURL=function(a){function b(a,b){if("#"===a[0]&&(a=a.replace("#","0x"),b)){if(b=parseFloat(b),b=Math.min(1,Math.max(b,0)),0===b)return"0x00000000";b=(255*b).toString(16),1===b.length&&(b+=b),a=a.slice(0,8)+b}return a}var c,d=[],e=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";a.url&&(e=a.url,delete a.url),e+="?";var f=a.markers;delete a.markers,!f&&a.marker&&(f=[a.marker],delete a.marker);var g=a.styles;delete a.styles;var h=a.polyline;if(delete a.polyline,a.center)d.push("center="+a.center),delete a.center;else if(a.address)d.push("center="+a.address),delete a.address;else if(a.lat)d.push(["center=",a.lat,",",a.lng].join("")),delete a.lat,delete a.lng;else if(a.visible){var i=encodeURI(a.visible.join("|"));d.push("visible="+i)}var j=a.size;j?(j.join&&(j=j.join("x")),delete a.size):j="630x300",d.push("size="+j),a.zoom||a.zoom===!1||(a.zoom=15);var k=a.hasOwnProperty("sensor")?!!a.sensor:!0;delete a.sensor,d.push("sensor="+k);for(var l in a)a.hasOwnProperty(l)&&d.push(l+"="+a[l]);if(f)for(var m,n,o=0;c=f[o];o++){m=[],c.size&&"normal"!==c.size?(m.push("size:"+c.size),delete c.size):c.icon&&(m.push("icon:"+encodeURI(c.icon)),delete c.icon),c.color&&(m.push("color:"+c.color.replace("#","0x")),delete c.color),c.label&&(m.push("label:"+c.label[0].toUpperCase()),delete c.label),n=c.address?c.address:c.lat+","+c.lng,delete c.address,delete c.lat,delete c.lng;for(var l in c)c.hasOwnProperty(l)&&m.push(l+":"+c[l]);m.length||0===o?(m.push(n),m=m.join("|"),d.push("markers="+encodeURI(m))):(m=d.pop()+encodeURI("|"+n),d.push(m))}if(g)for(var o=0;o<g.length;o++){var p=[];g[o].featureType&&p.push("feature:"+g[o].featureType.toLowerCase()),g[o].elementType&&p.push("element:"+g[o].elementType.toLowerCase());for(var q=0;q<g[o].stylers.length;q++)for(var r in g[o].stylers[q]){var s=g[o].stylers[q][r];("hue"==r||"color"==r)&&(s="0x"+s.substring(1)),p.push(r+":"+s)}var t=p.join("|");""!=t&&d.push("style="+t)}if(h){if(c=h,h=[],c.strokeWeight&&h.push("weight:"+parseInt(c.strokeWeight,10)),c.strokeColor){var u=b(c.strokeColor,c.strokeOpacity);h.push("color:"+u)}if(c.fillColor){var v=b(c.fillColor,c.fillOpacity);h.push("fillcolor:"+v)}var w=c.path;if(w.join)for(var x,q=0;x=w[q];q++)h.push(x.join(","));else h.push("enc:"+w);h=h.join("|"),d.push("path="+encodeURI(h))}var y=window.devicePixelRatio||1;return d.push("scale="+y),d=d.join("&"),e+d},j.prototype.addMapType=function(a,b){if(!b.hasOwnProperty("getTileUrl")||"function"!=typeof b.getTileUrl)throw"'getTileUrl' function required.";b.tileSize=b.tileSize||new google.maps.Size(256,256);var c=new google.maps.ImageMapType(b);this.map.mapTypes.set(a,c)},j.prototype.addOverlayMapType=function(a){if(!a.hasOwnProperty("getTile")||"function"!=typeof a.getTile)throw"'getTile' function required.";var b=a.index;delete a.index,this.map.overlayMapTypes.insertAt(b,a)},j.prototype.removeOverlayMapType=function(a){this.map.overlayMapTypes.removeAt(a)},j.prototype.addStyle=function(a){var b=new google.maps.StyledMapType(a.styles,{name:a.styledMapName});this.map.mapTypes.set(a.mapTypeId,b)},j.prototype.setStyle=function(a){this.map.setMapTypeId(a)},j.prototype.createPanorama=function(a){return a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||(a.lat=this.getCenter().lat(),a.lng=this.getCenter().lng()),this.panorama=j.createPanorama(a),this.map.setStreetView(this.panorama),this.panorama},j.createPanorama=function(b){var c=h(b.el,b.context);b.position=new google.maps.LatLng(b.lat,b.lng),delete b.el,delete b.context,delete b.lat,delete b.lng;for(var d=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],e=a({visible:!0},b),f=0;f<d.length;f++)delete e[d[f]];for(var g=new google.maps.StreetViewPanorama(c,e),f=0;f<d.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this)})}(g,d[f]);return g},j.prototype.on=function(a,b){return j.on(a,this,b)},j.prototype.off=function(a){j.off(a,this)},j.prototype.once=function(a,b){return j.once(a,this,b)},j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],j.on=function(a,b,c){if(-1==j.custom_events.indexOf(a))return b instanceof j&&(b=b.map),google.maps.event.addListener(b,a,c);var d={handler:c,eventName:a};return b.registered_events[a]=b.registered_events[a]||[],b.registered_events[a].push(d),d},j.off=function(a,b){-1==j.custom_events.indexOf(a)?(b instanceof j&&(b=b.map),google.maps.event.clearListeners(b,a)):b.registered_events[a]=[]},j.once=function(a,b,c){return-1==j.custom_events.indexOf(a)?(b instanceof j&&(b=b.map),google.maps.event.addListenerOnce(b,a,c)):void 0},j.fire=function(a,b,c){if(-1==j.custom_events.indexOf(a))google.maps.event.trigger(b,a,Array.prototype.slice.apply(arguments).slice(2));else if(a in c.registered_events)for(var d=c.registered_events[a],e=0;e<d.length;e++)!function(a,b,c){a.apply(b,[c])}(d[e].handler,c,b)},j.geolocate=function(a){var b=a.always||a.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.success(c),b&&b()},function(c){a.error(c),b&&b()},a.options):(a.not_supported(),b&&b())},j.geocode=function(a){this.geocoder=new google.maps.Geocoder;var b=a.callback;a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")&&(a.latLng=new google.maps.LatLng(a.lat,a.lng)),delete a.lat,delete a.lng,delete a.callback,this.geocoder.geocode(a,function(a,c){b(a,c)})},"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(a){for(var b,c=new google.maps.LatLngBounds,d=this.getPaths(),e=0;e<d.getLength();e++){b=d.getAt(e);for(var f=0;f<b.getLength();f++)c.extend(b.getAt(f))}return c}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(a){var b=this.getBounds();if(null!==b&&!b.contains(a))return!1;for(var c=!1,d=this.getPaths().getLength(),e=0;d>e;e++)for(var f=this.getPaths().getAt(e),g=f.getLength(),h=g-1,i=0;g>i;i++){var j=f.getAt(i),k=f.getAt(h);(j.lng()<a.lng()&&k.lng()>=a.lng()||k.lng()<a.lng()&&j.lng()>=a.lng())&&j.lat()+(a.lng()-j.lng())/(k.lng()-j.lng())*(k.lat()-j.lat())<a.lat()&&(c=!c),h=i}return c}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(a){return google.maps.geometry?google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),a)<=this.getRadius():!0}),google.maps.Rectangle.prototype.containsLatLng=function(a){return this.getBounds().contains(a)},google.maps.LatLngBounds.prototype.containsLatLng=function(a){return this.contains(a)},google.maps.Marker.prototype.setFences=function(a){this.fences=a},google.maps.Marker.prototype.addFence=function(a){this.fences.push(a)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),j});
//# sourceMappingURL=gmaps.min.js.map
/**
 * HSCore -
 *
 * @author HtmlStream
 * @version 1.0
 */
;
(function ($) {

  'use strict';

  $.HSCore = {

    /**
     *
     *
     * @param
     *
     * @return
     */
    init: function () {

      $(document).ready(function (e) {
        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Bootstrap Popovers
        $('[data-toggle="popover"]').popover()

        // Set Background Image Dynamically
        if ($('[data-bg-img-src]').length) $.HSCore.helpers.bgImage($('[data-bg-img-src]'));

        // Extends jQuery
        $.HSCore.helpers.extendjQuery();

        // Detect Internet Explorer (IE)
        $.HSCore.helpers.detectIE();

        // Bootstrap Navigation Options
        $.HSCore.helpers.bootstrapNavOptions.init();

      });

      $(window).on('load', function (e) {

      });

    },

    /**
     *
     *
     * @var
     */
    components: {},

    /**
     *
     *
     * @var
     */
    helpers: {

        Math: {

          getRandomValueFromRange: function(startPoint, endPoint, fixed) {

            var fixedInner = fixed ? fixed : false;

            Math.random();

            return fixedInner ? (Math.random() * (endPoint - startPoint) + startPoint) : (Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint);

          }

      },

      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function (collection) {

        if (!collection || !collection.length) return;

        return collection.each(function (i, el) {

          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');

        });

      },

      /**
       * Extends basic jQuery functionality
       *
       * @return undefined
       */
      extendjQuery: function () {

        $.fn.extend({

          /**
           * Runs specified function after loading of all images.
           *
           * @return Deferred
           */
          afterImagesLoaded: function () {

            var $imgs = this.find('img[src!=""]');

            if (!$imgs.length) {
              return $.Deferred().resolve().promise();
            }

            var dfds = [];

            $imgs.each(function () {
              var dfd = $.Deferred();
              dfds.push(dfd);
              var img = new Image();
              img.onload = function () {
                dfd.resolve();
              };
              img.onerror = function () {
                dfd.resolve();
              };
              img.src = this.src;
            });

            return $.when.apply($, dfds);

          }

        });

      },


      /**
       * Detect Internet Explorer (IE)
       *
       * @return version of IE or false, if browser is not Internet Explorer
       */

      detectIE: function() {

          var ua = window.navigator.userAgent;

          var trident = ua.indexOf('Trident/');
          if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
              document.querySelector('body').className += ' IE' + ieV;
          }

          var edge = ua.indexOf('Edge/');
          if (edge > 0) {
             // IE 12 (aka Edge) => return version number
             var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
              document.querySelector('body').className += ' IE' + ieV;
          }

          // other browser
          return false;

      },


      /**
       * Bootstrap navigation options
       *
       */
      bootstrapNavOptions: {
        init: function () {
          this.mobileHideOnScroll();
        },

        mobileHideOnScroll: function () {
          var $collection = $('.navbar');
          if (!$collection.length) return;

          var $w = $(window),
            breakpointsMap = {
              'sm': 576,
              'md': 768,
              'lg': 992,
              'xl': 1200
            };

          $('body').on('click.HSMobileHideOnScroll', '.navbar-toggler', function (e) {
            var $navbar = $(this).closest('.navbar');

            if ($navbar.length) {
              $navbar.data('mobile-menu-scroll-position', $w.scrollTop());
            }
            e.preventDefault();
          });

          $w.on('scroll.HSMobileHideOnScroll', function (e) {
            $collection.each(function (i, el) {
              var $this = $(el), $toggler, $nav, offset, $hamburgers, breakpoint;
              if ($this.hasClass('navbar-expand-xl')) breakpoint = breakpointsMap['xl'];
              else if ($this.hasClass('navbar-expand-lg')) breakpoint = breakpointsMap['lg'];
              else if ($this.hasClass('navbar-expand-md')) breakpoint = breakpointsMap['md'];
              else if ($this.hasClass('navbar-expand-xs')) breakpoint = breakpointsMap['xs'];

              if ($w.width() > breakpoint) return;

              $toggler = $this.find('.navbar-toggler');
              $nav = $this.find('.navbar-collapse');

              if (!$nav.data('mobile-scroll-hide')) return;

              if ($nav.length) {
                offset = $this.data('mobile-menu-scroll-position');

                if (Math.abs($w.scrollTop() - offset) > 40 && $nav.hasClass('show')) {
                  $toggler.trigger('click');
                  $hamburgers = $toggler.find('.is-active');
                  if ($hamburgers.length) {
                    $hamburgers.removeClass('is-active');
                  }
                }
              }
            });
          });
        }
      }

    },

    /**
     *
     *
     * @var
     */
    settings: {
      rtl: false
    }

  };

  $.HSCore.init();

})(jQuery);
/**
 * Header Component.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSHeader = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      headerFixMoment: 0,
      headerFixEffect: 'slide',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      }
    },

    /**
     * Initializtion of header.
     *
     * @param jQuery element
     *
     * @return jQuery
     */
    init: function (element) {

      if (!element || element.length !== 1 || element.data('HSHeader')) return;

      var self = this;

      this.element = element;
      this.config = $.extend(true, {}, this._baseConfig, element.data());

      this.observers = this._detectObservers();
      this.fixMediaDifference(this.element);
      this.element.data('HSHeader', new HSHeader(this.element, this.config, this.observers));

      $(window)
        .on('scroll.uHeader', function (e) {

          if ($(window).scrollTop() < ($(element).data('header-fix-moment') - 100) && $(element).data('effect-compensation') === true) {
            $(element).css({
              top: -($(window).scrollTop())
            })
              .addClass($(element).data('effect-compensation-start-class'))
              .removeClass($(element).data('effect-compensation-end-class'));
          } else if ($(element).data('effect-compensation') === true) {
            $(element).css({
              top: 0
            })
              .addClass($(element).data('effect-compensation-end-class'))
              .removeClass($(element).data('effect-compensation-start-class'));
          }

          if ($(window).scrollTop() > 5 && !$(element).hasClass('.u-scrolled')) {
            $(element).addClass('u-scrolled')
          } else {
            $(element).removeClass('u-scrolled')
          }

          element
            .data('HSHeader')
            .notify();

        })
        .on('resize.uHeader', function (e) {

          if (self.resizeTimeOutId) clearTimeout(self.resizeTimeOutId);

          self.resizeTimeOutId = setTimeout(function () {

            element
              .data('HSHeader')
              .checkViewport()
              .update();

          }, 100);

        })
        .trigger('scroll.uHeader');

      return this.element;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    _detectObservers: function () {

      if (!this.element || !this.element.length) return;

      var observers = {
        'xs': [],
        'sm': [],
        'md': [],
        'lg': [],
        'xl': []
      };

      /* ------------------------ xs -------------------------*/

      // Has Hidden Element
      if (this.element.hasClass('u-header--has-hidden-element')) {
        observers['xs'].push(
          new HSHeaderHasHiddenElement(this.element)
        );
      }

      // Sticky top

      if (this.element.hasClass('u-header--sticky-top')) {

        if (this.element.hasClass('u-header--show-hide')) {

          observers['xs'].push(
            new HSHeaderMomentShowHideObserver(this.element)
          );

        }
        else if (this.element.hasClass('u-header--toggle-section')) {

          observers['xs'].push(
            new HSHeaderHideSectionObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo')) {

          observers['xs'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance')) {

          observers['xs'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Floating

      if (this.element.hasClass('u-header--floating')) {

        observers['xs'].push(
          new HSHeaderFloatingObserver(this.element)
        );

      }

      if (this.element.hasClass('u-header--invulnerable')) {
        observers['xs'].push(
          new HSHeaderWithoutBehaviorObserver(this.element)
        );
      }

      // Sticky bottom

      if (this.element.hasClass('u-header--sticky-bottom')) {

        if (this.element.hasClass('u-header--change-appearance')) {
          observers['xs'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );
        }

        if (this.element.hasClass('u-header--change-logo')) {

          observers['xs'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

      }

      // Abs top & Static

      if (this.element.hasClass('u-header--abs-top') || this.element.hasClass('u-header--static')) {

        if (this.element.hasClass('u-header--show-hide')) {

          observers['xs'].push(
            new HSHeaderShowHideObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo')) {

          observers['xs'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance')) {

          observers['xs'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Abs bottom & Abs top 2nd screen

      if (this.element.hasClass('u-header--abs-bottom') || this.element.hasClass('u-header--abs-top-2nd-screen')) {

        observers['xs'].push(
          new HSHeaderStickObserver(this.element)
        );

        if (this.element.hasClass('u-header--change-appearance')) {

          observers['xs'].push(
            new HSHeaderChangeAppearanceObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

        if (this.element.hasClass('u-header--change-logo')) {

          observers['xs'].push(
            new HSHeaderChangeLogoObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

      }

      /* ------------------------ sm -------------------------*/

      // Sticky top

      // Has Hidden Element
      if (this.element.hasClass('u-header--has-hidden-element-sm')) {
        observers['sm'].push(
          new HSHeaderHasHiddenElement(this.element)
        );
      }

      if (this.element.hasClass('u-header--sticky-top-sm')) {

        if (this.element.hasClass('u-header--show-hide-sm')) {

          observers['sm'].push(
            new HSHeaderMomentShowHideObserver(this.element)
          );

        }
        else if (this.element.hasClass('u-header--toggle-section-sm')) {

          observers['sm'].push(
            new HSHeaderHideSectionObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-sm')) {

          observers['sm'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-sm')) {

          observers['sm'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Floating

      if (this.element.hasClass('u-header--floating-sm')) {

        observers['sm'].push(
          new HSHeaderFloatingObserver(this.element)
        );

      }

      if (this.element.hasClass('u-header--invulnerable-sm')) {
        observers['sm'].push(
          new HSHeaderWithoutBehaviorObserver(this.element)
        );
      }

      // Sticky bottom

      if (this.element.hasClass('u-header--sticky-bottom-sm')) {

        if (this.element.hasClass('u-header--change-appearance-sm')) {
          observers['sm'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );
        }

        if (this.element.hasClass('u-header--change-logo-sm')) {

          observers['sm'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

      }

      // Abs top & Static

      if (this.element.hasClass('u-header--abs-top-sm') || this.element.hasClass('u-header--static-sm')) {

        if (this.element.hasClass('u-header--show-hide-sm')) {

          observers['sm'].push(
            new HSHeaderShowHideObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-sm')) {

          observers['sm'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-sm')) {

          observers['sm'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Abs bottom & Abs top 2nd screen

      if (this.element.hasClass('u-header--abs-bottom-sm') || this.element.hasClass('u-header--abs-top-2nd-screen-sm')) {

        observers['sm'].push(
          new HSHeaderStickObserver(this.element)
        );

        if (this.element.hasClass('u-header--change-appearance-sm')) {

          observers['sm'].push(
            new HSHeaderChangeAppearanceObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

        if (this.element.hasClass('u-header--change-logo-sm')) {

          observers['sm'].push(
            new HSHeaderChangeLogoObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

      }

      /* ------------------------ md -------------------------*/

      // Has Hidden Element
      if (this.element.hasClass('u-header--has-hidden-element-md')) {
        observers['md'].push(
          new HSHeaderHasHiddenElement(this.element)
        );
      }

      // Sticky top

      if (this.element.hasClass('u-header--sticky-top-md')) {

        if (this.element.hasClass('u-header--show-hide-md')) {

          observers['md'].push(
            new HSHeaderMomentShowHideObserver(this.element)
          );

        }
        else if (this.element.hasClass('u-header--toggle-section-md')) {

          observers['md'].push(
            new HSHeaderHideSectionObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-md')) {

          observers['md'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-md')) {

          observers['md'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Floating

      if (this.element.hasClass('u-header--floating-md')) {

        observers['md'].push(
          new HSHeaderFloatingObserver(this.element)
        );

      }

      if (this.element.hasClass('u-header--invulnerable-md')) {
        observers['md'].push(
          new HSHeaderWithoutBehaviorObserver(this.element)
        );
      }

      // Sticky bottom

      if (this.element.hasClass('u-header--sticky-bottom-md')) {

        if (this.element.hasClass('u-header--change-appearance-md')) {
          observers['md'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );
        }

        if (this.element.hasClass('u-header--change-logo-md')) {

          observers['md'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

      }

      // Abs top & Static

      if (this.element.hasClass('u-header--abs-top-md') || this.element.hasClass('u-header--static-md')) {

        if (this.element.hasClass('u-header--show-hide-md')) {

          observers['md'].push(
            new HSHeaderShowHideObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-md')) {

          observers['md'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-md')) {

          observers['md'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Abs bottom & Abs top 2nd screen

      if (this.element.hasClass('u-header--abs-bottom-md') || this.element.hasClass('u-header--abs-top-2nd-screen-md')) {

        observers['md'].push(
          new HSHeaderStickObserver(this.element)
        );

        if (this.element.hasClass('u-header--change-appearance-md')) {

          observers['md'].push(
            new HSHeaderChangeAppearanceObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

        if (this.element.hasClass('u-header--change-logo-md')) {

          observers['md'].push(
            new HSHeaderChangeLogoObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

      }


      /* ------------------------ lg -------------------------*/

      // Has Hidden Element
      if (this.element.hasClass('u-header--has-hidden-element-lg')) {
        observers['lg'].push(
          new HSHeaderHasHiddenElement(this.element)
        );
      }

      // Sticky top

      if (this.element.hasClass('u-header--sticky-top-lg')) {

        if (this.element.hasClass('u-header--show-hide-lg')) {

          observers['lg'].push(
            new HSHeaderMomentShowHideObserver(this.element)
          );

        }
        else if (this.element.hasClass('u-header--toggle-section-lg')) {

          observers['lg'].push(
            new HSHeaderHideSectionObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-lg')) {

          observers['lg'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-lg')) {

          observers['lg'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Floating

      if (this.element.hasClass('u-header--floating-lg')) {

        observers['lg'].push(
          new HSHeaderFloatingObserver(this.element)
        );

      }

      if (this.element.hasClass('u-header--invulnerable-lg')) {
        observers['lg'].push(
          new HSHeaderWithoutBehaviorObserver(this.element)
        );
      }

      // Sticky bottom

      if (this.element.hasClass('u-header--sticky-bottom-lg')) {

        if (this.element.hasClass('u-header--change-appearance-lg')) {
          observers['lg'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );
        }

        if (this.element.hasClass('u-header--change-logo-lg')) {

          observers['lg'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

      }

      // Abs top & Static

      if (this.element.hasClass('u-header--abs-top-lg') || this.element.hasClass('u-header--static-lg')) {

        if (this.element.hasClass('u-header--show-hide-lg')) {

          observers['lg'].push(
            new HSHeaderShowHideObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-lg')) {

          observers['lg'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-lg')) {

          observers['lg'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Abs bottom & Abs top 2nd screen

      if (this.element.hasClass('u-header--abs-bottom-lg') || this.element.hasClass('u-header--abs-top-2nd-screen-lg')) {

        observers['lg'].push(
          new HSHeaderStickObserver(this.element)
        );

        if (this.element.hasClass('u-header--change-appearance-lg')) {

          observers['lg'].push(
            new HSHeaderChangeAppearanceObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

        if (this.element.hasClass('u-header--change-logo-lg')) {

          observers['lg'].push(
            new HSHeaderChangeLogoObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

      }

      /* ------------------------ xl -------------------------*/

      // Has Hidden Element
      if (this.element.hasClass('u-header--has-hidden-element-xl')) {
        observers['xl'].push(
          new HSHeaderHasHiddenElement(this.element)
        );
      }

      // Sticky top

      if (this.element.hasClass('u-header--sticky-top-xl')) {

        if (this.element.hasClass('u-header--show-hide-xl')) {

          observers['xl'].push(
            new HSHeaderMomentShowHideObserver(this.element)
          );

        }
        else if (this.element.hasClass('u-header--toggle-section-xl')) {

          observers['xl'].push(
            new HSHeaderHideSectionObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-xl')) {

          observers['xl'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-xl')) {

          observers['xl'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Floating

      if (this.element.hasClass('u-header--floating-xl')) {

        observers['xl'].push(
          new HSHeaderFloatingObserver(this.element)
        );

      }

      // Sticky bottom

      if (this.element.hasClass('u-header--invulnerable-xl')) {
        observers['xl'].push(
          new HSHeaderWithoutBehaviorObserver(this.element)
        );
      }

      // Sticky bottom

      if (this.element.hasClass('u-header--sticky-bottom-xl')) {

        if (this.element.hasClass('u-header--change-appearance-xl')) {
          observers['xl'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );
        }

        if (this.element.hasClass('u-header--change-logo-xl')) {

          observers['xl'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

      }

      // Abs top & Static

      if (this.element.hasClass('u-header--abs-top-xl') || this.element.hasClass('u-header--static-xl')) {

        if (this.element.hasClass('u-header--show-hide-xl')) {

          observers['xl'].push(
            new HSHeaderShowHideObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-logo-xl')) {

          observers['xl'].push(
            new HSHeaderChangeLogoObserver(this.element)
          );

        }

        if (this.element.hasClass('u-header--change-appearance-xl')) {

          observers['xl'].push(
            new HSHeaderChangeAppearanceObserver(this.element)
          );

        }

      }

      // Abs bottom & Abs top 2nd screen

      if (this.element.hasClass('u-header--abs-bottom-xl') || this.element.hasClass('u-header--abs-top-2nd-screen-xl')) {

        observers['xl'].push(
          new HSHeaderStickObserver(this.element)
        );

        if (this.element.hasClass('u-header--change-appearance-xl')) {

          observers['xl'].push(
            new HSHeaderChangeAppearanceObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

        if (this.element.hasClass('u-header--change-logo-xl')) {

          observers['xl'].push(
            new HSHeaderChangeLogoObserver(this.element, {
              fixPointSelf: true
            })
          );

        }

      }


      return observers;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    fixMediaDifference: function (element) {

      if (!element || !element.length || !element.filter('[class*="u-header--side"]').length) return;

      var toggleable;

      if (element.hasClass('u-header--side-left-xl') || element.hasClass('u-header--side-right-xl')) {

        toggleable = element.find('.navbar-expand-xl');

        if (toggleable.length) {
          toggleable
            .removeClass('navbar-expand-xl')
            .addClass('navbar-expand-lg');
        }

      }
      else if (element.hasClass('u-header--side-left-lg') || element.hasClass('u-header--side-right-lg')) {

        toggleable = element.find('.navbar-expand-lg');

        if (toggleable.length) {
          toggleable
            .removeClass('navbar-expand-lg')
            .addClass('navbar-expand-md');
        }

      }
      else if (element.hasClass('u-header--side-left-md') || element.hasClass('u-header--side-right-md')) {

        toggleable = element.find('.navbar-expand-md');

        if (toggleable.length) {
          toggleable
            .removeClass('navbar-expand-md')
            .addClass('navbar-expand-sm');
        }

      }
      else if (element.hasClass('u-header--side-left-sm') || element.hasClass('u-header--side-right-sm')) {

        toggleable = element.find('.navbar-expand-sm');

        if (toggleable.length) {
          toggleable
            .removeClass('navbar-expand-sm')
            .addClass('navbar-expand');
        }

      }

    }

  };

  /**
   * HSHeader constructor function.
   *
   * @param jQuery element
   * @param Object config
   * @param Object observers
   *
   * @return undefined
   */
  function HSHeader(element, config, observers) {

    if (!element || !element.length) return;

    this.element = element;
    this.config = config;

    this.observers = observers && $.isPlainObject(observers) ? observers : {};

    this.viewport = 'xs';
    this.checkViewport();

  }

  /**
   *
   *
   * @return Object
   */
  HSHeader.prototype.checkViewport = function () {

    var $w = $(window);

    if ($w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length) {
      this.prevViewport = this.viewport;
      this.viewport = 'sm';
      return this;
    }

    if ($w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length) {
      this.prevViewport = this.viewport;
      this.viewport = 'md';
      return this;
    }

    if ($w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length) {
      this.prevViewport = this.viewport;
      this.viewport = 'lg';
      return this;
    }

    if ($w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length) {
      this.prevViewport = this.viewport;
      this.viewport = 'xl';
      return this;
    }


    if (this.prevViewport) this.prevViewport = this.viewport;
    this.viewport = 'xs';


    return this;

  };

  /**
   * Notifies all observers.
   *
   * @return Object
   */
  HSHeader.prototype.notify = function () {

    if (this.prevViewport) {
      this.observers[this.prevViewport].forEach(function (observer) {
        observer.destroy();
      });
      this.prevViewport = null;
    }

    this.observers[this.viewport].forEach(function (observer) {
      observer.check();
    });

    return this;

  };

  /**
   * Reinit all header's observers.
   *
   * @return Object
   */
  HSHeader.prototype.update = function () {

    for (var viewport in this.observers) {

      this.observers[viewport].forEach(function (observer) {
        observer.destroy();
      });

    }

    this.prevViewport = null;

    this.observers[this.viewport].forEach(function (observer) {
      observer.reinit();
    });

    return this;

  };

  /**
   * Abstract constructor function for each observer.
   *
   * @param jQuery element
   *
   * @return Boolean|undefined
   */
  function HSAbstractObserver(element) {
    if (!element || !element.length) return;

    this.element = element;
    this.defaultState = true;

    this.reinit = function () {

      this
        .destroy()
        .init()
        .check();
    };

    return true;
  }

  /**
   * Header's observer which is responsible for 'sticky' behavior.
   *
   * @param jQuery element
   */
  function HSHeaderStickObserver(element) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.init = function () {
    this.defaultState = true;
    this.offset = this.element.offset().top;

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.destroy = function () {
    this.toDefaultState();

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.check = function () {

    var $w = $(window),
      docScrolled = $w.scrollTop();

    if (docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if (docScrolled < this.offset && !this.defaultState) {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.changeState = function () {

    this.element.addClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.toDefaultState = function () {

    this.element.removeClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  };


  /**
   * Header's observer which is responsible for 'show/hide' behavior which is depended on scroll direction.
   *
   * @param jQuery element
   */
  function HSHeaderMomentShowHideObserver(element) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.init();
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.init = function () {
    this.direction = 'down';
    this.delta = 0;
    this.defaultState = true;

    this.offset = isFinite(this.element.data('header-fix-moment')) && this.element.data('header-fix-moment') !== 0 ? this.element.data('header-fix-moment') : 5;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  };

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.destroy = function () {
    this.toDefaultState();

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.checkDirection = function () {

    if ($(window).scrollTop() > this.delta) {
      this.direction = 'down';
    }
    else {
      this.direction = 'up';
    }

    this.delta = $(window).scrollTop();

    return this;

  };

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.toDefaultState = function () {

    switch (this.effect) {
      case 'slide' :
        this.element.removeClass('u-header--moved-up');
        break;

      case 'fade' :
        this.element.removeClass('u-header--faded');
        break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  };

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.changeState = function () {

    switch (this.effect) {
      case 'slide' :
        this.element.addClass('u-header--moved-up');
        break;

      case 'fade' :
        this.element.addClass('u-header--faded');
        break;

      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  };

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.check = function () {

    var docScrolled = $(window).scrollTop();
    this.checkDirection();


    if (docScrolled >= this.offset && this.defaultState && this.direction === 'down') {
      this.changeState();
    }
    else if (!this.defaultState && this.direction === 'up') {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderShowHideObserver(element) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.init = function () {
    if (!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.defaultState = true;
    this.transitionDuration = parseFloat(getComputedStyle(this.element.get(0))['transition-duration'], 10) * 1000;

    this.offset = isFinite(this.element.data('header-fix-moment')) && this.element.data('header-fix-moment') > this.element.outerHeight() ? this.element.data('header-fix-moment') : this.element.outerHeight() + 100;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.destroy = function () {
    if (!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.element.removeClass('u-header--untransitioned');
    this._removeCap();

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._insertCap = function () {

    this.element.addClass('js-header-fix-moment u-header--untransitioned');

    if (this.element.hasClass('u-header--static')) {

      $('html').css('padding-top', this.element.outerHeight());

    }

    switch (this.effect) {
      case 'fade' :
        this.element.addClass('u-header--faded');
        break;

      case 'slide' :
        this.element.addClass('u-header--moved-up');
        break;

      default :
        this.element.addClass('u-header--invisible')
    }

    this.capInserted = true;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._removeCap = function () {

    var self = this;

    this.element.removeClass('js-header-fix-moment');

    if (this.element.hasClass('u-header--static')) {

      $('html').css('padding-top', 0);

    }

    if (this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

    this.removeCapTimeOutId = setTimeout(function () {
      self.element.removeClass('u-header--moved-up u-header--faded u-header--invisible');
    }, 10);

    this.capInserted = false;

  };


  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.check = function () {

    var $w = $(window);

    if ($w.scrollTop() > this.element.outerHeight() && !this.capInserted) {
      this._insertCap();
    }
    else if ($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {
      this._removeCap();
    }

    if ($w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if ($w.scrollTop() <= this.offset && !this.defaultState) {
      this.toDefaultState();
    }

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.changeState = function () {

    this.element.removeClass('u-header--untransitioned');

    if (this.animationTimeoutId) clearTimeout(this.animationTimeoutId);

    switch (this.effect) {
      case 'fade' :
        this.element.removeClass('u-header--faded');
        break;

      case 'slide' :
        this.element.removeClass('u-header--moved-up');
        break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.toDefaultState = function () {

    var self = this;

    this.animationTimeoutId = setTimeout(function () {
      self.element.addClass('u-header--untransitioned');
    }, this.transitionDuration);


    switch (this.effect) {
      case 'fade' :
        this.element.addClass('u-header--faded');
        break;
      case 'slide' :
        this.element.addClass('u-header--moved-up');
        break;
      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeLogoObserver(element, config) {

    if (!HSAbstractObserver.call(this, element)) return;

    this.config = {
      fixPointSelf: false
    };

    if (config && $.isPlainObject(config)) this.config = $.extend(true, {}, this.config, config);

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.init = function () {

    if (this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }
    if (this.config.fixPointSelf) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite(this.element.data('header-fix-moment')) ? this.element.data('header-fix-moment') : 0;
    }
    if (this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.imgs = this.element.find('.u-header__logo-img');
    this.defaultState = true;

    this.mainLogo = this.imgs.filter('.u-header__logo-img--main');
    this.additionalLogo = this.imgs.not('.u-header__logo-img--main');

    if (!this.imgs.length) return this;

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.destroy = function () {
    this.toDefaultState();

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.check = function () {

    var $w = $(window);

    if (!this.imgs.length) return this;

    if ($w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if ($w.scrollTop() <= this.offset && !this.defaultState) {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.changeState = function () {

    if (this.mainLogo.length) {
      this.mainLogo.removeClass('u-header__logo-img--main');
    }
    if (this.additionalLogo.length) {
      this.additionalLogo.addClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.toDefaultState = function () {

    if (this.mainLogo.length) {
      this.mainLogo.addClass('u-header__logo-img--main');
    }
    if (this.additionalLogo.length) {
      this.additionalLogo.removeClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHideSectionObserver(element) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderHideSectionObserver.prototype.init = function () {

    this.offset = isFinite(this.element.data('header-fix-moment')) ? this.element.data('header-fix-moment') : 5;
    this.section = this.element.find('.u-header__section--hidden');
    this.defaultState = true;

    this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;


    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.destroy = function () {

    if (this.section.length) {

      this.element.css({
        'margin-top': 0
      });

    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.check = function () {

    if (!this.section.length) return this;

    var $w = $(window),
      docScrolled = $w.scrollTop();

    if (docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if (docScrolled <= this.offset && !this.defaultState) {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.changeState = function () {

    var self = this;

    this.element.stop().animate({
      'margin-top': self.sectionHeight * -1 - 1 // last '-1' is a small fix
    });

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.toDefaultState = function () {

    this.element.stop().animate({
      'margin-top': 0
    });

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeAppearanceObserver(element, config) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.config = {
      fixPointSelf: false
    };

    if (config && $.isPlainObject(config)) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.init = function () {

    if (this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }

    if (this.config.fixPointSelf) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite(this.element.data('header-fix-moment')) ? this.element.data('header-fix-moment') : 5;
    }

    if (this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.sections = this.element.find('[data-header-fix-moment-classes]');

    this.defaultState = true;


    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.destroy = function () {

    this.toDefaultState();

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.check = function () {

    if (!this.sections.length) return this;

    var $w = $(window),
      docScrolled = $w.scrollTop();

    if (docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if (docScrolled <= this.offset && !this.defaultState) {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.changeState = function () {

    this.sections.each(function (i, el) {

      var $this = $(el),
        classes = $this.data('header-fix-moment-classes'),
        exclude = $this.data('header-fix-moment-exclude');

      if (!classes && !exclude) return;

      $this.addClass(classes + ' js-header-change-moment');
      $this.removeClass(exclude);

    });

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.toDefaultState = function () {

    this.sections.each(function (i, el) {

      var $this = $(el),
        classes = $this.data('header-fix-moment-classes'),
        exclude = $this.data('header-fix-moment-exclude');

      if (!classes && !exclude) return;

      $this.removeClass(classes + ' js-header-change-moment');
      $this.addClass(exclude);

    });

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHasHiddenElement(element, config) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.config = {
      animated: true
    };

    if (config && $.isPlainObject(config)) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.init = function () {
    this.offset = isFinite(this.element.data('header-fix-moment')) ? this.element.data('header-fix-moment') : 5;
    this.elements = this.element.find('.u-header--hidden-element');
    this.defaultState = true;
    return this;
  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.destroy = function () {

    this.toDefaultState();

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.check = function () {

    if (!this.elements.length) return this;

    var $w = $(window),
      docScrolled = $w.scrollTop();

    if (docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if (docScrolled <= this.offset && !this.defaultState) {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.changeState = function () {

    if (this.config.animated) {
      this.elements.stop().slideUp();
    }
    else {
      this.elements.hide();
    }

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.toDefaultState = function () {

    if (this.config.animated) {
      this.elements.stop().slideDown();
    }
    else {
      this.elements.show();
    }

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderFloatingObserver(element, config) {
    if (!HSAbstractObserver.call(this, element)) return;

    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this.config, config) : {};
    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.init = function () {

    this.offset = this.element.offset().top;
    this.sections = this.element.find('.u-header__section');

    this.defaultState = true;

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.destroy = function () {

    this.toDefaultState();

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.check = function () {

    var $w = $(window),
      docScrolled = $w.scrollTop();

    if (docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if (docScrolled <= this.offset && !this.defaultState) {
      this.toDefaultState();
    }

    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.changeState = function () {

    this.element
      .addClass('js-header-fix-moment')
      .addClass(this.element.data('header-fix-moment-classes'))
      .removeClass(this.element.data('header-fix-moment-exclude'));

    if (this.sections.length) {
      this.sections.each(function (i, el) {

        var $section = $(el);

        $section.addClass($section.data('header-fix-moment-classes'))
          .removeClass($section.data('header-fix-moment-exclude'));

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  };

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.toDefaultState = function () {

    this.element
      .removeClass('js-header-fix-moment')
      .removeClass(this.element.data('header-fix-moment-classes'))
      .addClass(this.element.data('header-fix-moment-exclude'));

    if (this.sections.length) {
      this.sections.each(function (i, el) {

        var $section = $(el);

        $section.removeClass($section.data('header-fix-moment-classes'))
          .addClass($section.data('header-fix-moment-exclude'));

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  };


  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderWithoutBehaviorObserver(element) {
    if (!HSAbstractObserver.call(this, element)) return;
  }

  HSHeaderWithoutBehaviorObserver.prototype.check = function () {
    return this;
  };

  HSHeaderWithoutBehaviorObserver.prototype.init = function () {
    return this;
  };

  HSHeaderWithoutBehaviorObserver.prototype.destroy = function () {
    return this;
  };

  HSHeaderWithoutBehaviorObserver.prototype.changeState = function () {
    return this;
  };

  HSHeaderWithoutBehaviorObserver.prototype.toDefaultState = function () {
    return this;
  }


})(jQuery);
/**
 * Unfold Content component.
 *
 * @author Htmlstream
 * @version 1.0
 */
;
(function ($) {
  'use strict';

  $.HSCore.components.HSUnfold = {

    /**
     * Base configuration of the component.
     *
     * @private
     */
    _baseConfig: {
      unfoldEvent: 'click',
      unfoldType: 'simple',
      unfoldDuration: 300,
      unfoldEasing: 'linear',
      unfoldAnimationIn: 'fadeIn',
      unfoldAnimationOut: 'fadeOut',
      unfoldHideOnScroll: true,
      unfoldHideOnBlur: false,
      unfoldDelay: 350,
      afterOpen: function (invoker) {},
      beforeClose: function (invoker) {},
      afterClose: function (invoker) {}
    },

    /**
     * Collection of all initialized items on the page.
     *
     * @private
     */
    _pageCollection: $(),

    /**
     * Initialization.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function (collection, config) {

      var self;

      if (!collection || !collection.length) return;

      self = this;

      var fieldsQty;

      collection.each(function (i, el) {

        var $this = $(el), itemConfig;

        if ($this.data('HSUnfold')) return;

        itemConfig = config && $.isPlainObject(config) ?
          $.extend(true, {}, self._baseConfig, config, $this.data()) :
          $.extend(true, {}, self._baseConfig, $this.data());

        switch (itemConfig.unfoldType) {

          case 'css-animation' :

            $this.data('HSUnfold', new UnfoldCSSAnimation($this, itemConfig));

            break;

          case 'jquery-slide' :

            $this.data('HSUnfold', new UnfoldJSlide($this, itemConfig));

            break;

          default :

            $this.data('HSUnfold', new UnfoldSimple($this, itemConfig));

        }

        self._pageCollection = self._pageCollection.add($this);
        self._bindEvents($this, itemConfig.unfoldEvent, itemConfig.unfoldDelay);
        var UnFold = $(el).data('HSUnfold');

        fieldsQty = $(UnFold.target).find('input, textarea').length;

        if ($(UnFold.target).find('[data-unfold-target]').length) {

          $this.addClass('target-of-invoker-has-unfolds');

        }

      });


      var items,
        index = 0;

      $(document).on('keydown.HSUnfold', function (e) {

        if (e.keyCode && e.keyCode === 27) {

          self._pageCollection.each(function (i, el) {

            var windW = $(window).width(),
              optIsMobileOnly = Boolean($(el).data('is-mobile-only'));

            items = $($($(el).data('unfold-target')).children());

            if (!optIsMobileOnly) {

              $(el).data('HSUnfold').hide();

            } else if (optIsMobileOnly && windW < 769) {

              $(el).data('HSUnfold').hide();

            }

            $(el).data('HSUnfold').config.beforeClose.call(self.target, self.element);

          });

        }

        self._pageCollection.each(function (i, el) {
          if (!$($(el).data('unfold-target')).hasClass('u-unfold--hidden')) {

            items = $($($(el).data('unfold-target')).children());

          }
        });

        if (e.keyCode && e.keyCode === 38 || e.keyCode && e.keyCode === 40) {
          e.preventDefault();
        }

        if (e.keyCode && e.keyCode === 38 && index > 0) {
          // up
          index--;
        }

        if (e.keyCode && e.keyCode === 40 && index < items.length - 1) {
          // down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        if (e.keyCode && e.keyCode === 38 || e.keyCode && e.keyCode === 40) {
          $(items[index]).focus();
        }
      });

      $(window).on('click', function () {

        self._pageCollection.each(function (i, el) {

          var windW = $(window).width(),
            optIsMobileOnly = Boolean($(el).data('is-mobile-only'));

          if (!optIsMobileOnly) {

            $(el).data('HSUnfold').hide();

          } else if (optIsMobileOnly && windW < 769) {

            $(el).data('HSUnfold').hide();

          }

          $(el).data('HSUnfold').config.beforeClose.call(self.target, self.element);

        });

      });

      self._pageCollection.each(function (i, el) {

        var target = $(el).data('HSUnfold').config.unfoldTarget;

        $(target).on('click', function (e) {

          e.stopPropagation();

        });

      });

      $(window).on('scroll.HSUnfold', function () {

        self._pageCollection.each(function (i, el) {

          var UnFold = $(el).data('HSUnfold');

          if (UnFold.getOption('unfoldHideOnScroll') && fieldsQty === 0) {

            UnFold.hide();

          } else if (UnFold.getOption('unfoldHideOnScroll') && !(/iPhone|iPad|iPod/i.test(navigator.userAgent))) {

            UnFold.hide();

          }

        });

      });

      $(window).on('resize.HSUnfold', function () {

        if (self._resizeTimeOutId) clearTimeout(self._resizeTimeOutId);

        self._resizeTimeOutId = setTimeout(function () {

          self._pageCollection.each(function (i, el) {

            var UnFold = $(el).data('HSUnfold');

            UnFold.smartPosition(UnFold.target);

          });

        }, 50);

      });

      return collection;

    },

    /**
     * Binds necessary events.
     *
     * @param {jQuery} $invoker
     * @param {String} eventType
     * @param {Number} delay
     * @private
     */
    _bindEvents: function ($invoker, eventType, delay) {

      var $unfold = $($invoker.data('unfold-target'));

      if (eventType === 'hover' && !_isTouch()) {

        $invoker.on('mouseenter.HSUnfold', function () {

          var $invoker = $(this),
            HSUnfold = $invoker.data('HSUnfold');

          if (!HSUnfold) return;

          if (HSUnfold.unfoldTimeOut) clearTimeout(HSUnfold.unfoldTimeOut);
          HSUnfold.show();

        })
          .on('mouseleave.HSUnfold', function () {

            var $invoker = $(this),
              HSUnfold = $invoker.data('HSUnfold');

            if (!HSUnfold) return;

            HSUnfold.unfoldTimeOut = setTimeout(function () {

              HSUnfold.hide();

            }, delay);

          });

        if ($unfold.length) {

          $unfold.on('mouseenter.HSUnfold', function () {

            var HSUnfold = $invoker.data('HSUnfold');

            if (HSUnfold.unfoldTimeOut) clearTimeout(HSUnfold.unfoldTimeOut);
            HSUnfold.show();

          })
            .on('mouseleave.HSUnfold', function () {

              var HSUnfold = $invoker.data('HSUnfold');

              HSUnfold.unfoldTimeOut = setTimeout(function () {
                HSUnfold.hide();
              }, delay);

            });
        }

      }
      else {

        $invoker.on('click.HSUnfold', function (e) {

          var $curInvoker = $(this),
            $unfoldNotHasInnerUnfolds = $('[data-unfold-target].active:not(.target-of-invoker-has-unfolds)'),
            $unfoldHasInnerUnfold = $('[data-unfold-target].active.target-of-invoker-has-unfolds');

          if (!$curInvoker.data('HSUnfold')) return;

          if (!$curInvoker.hasClass('target-of-invoker-has-unfolds')) {

            if ($unfoldNotHasInnerUnfolds.length) {

              $unfoldNotHasInnerUnfolds.data('HSUnfold').toggle();

            }

          } else {

            if ($unfoldHasInnerUnfold.length) {

              $unfoldHasInnerUnfold.data('HSUnfold').toggle();

            }

          }

          $curInvoker.data('HSUnfold').toggle();

          // $($($curInvoker.data('unfold-target')).children()[0]).trigger('focus');

          e.stopPropagation();
          e.preventDefault();

        });

      }

    }
  };

  function _isTouch() {
    return 'ontouchstart' in window;
  }

  /**
   * Abstract Unfold class.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @abstract
   */
  function AbstractUnfold(element, config) {

    if (!element.length) return false;

    this.element = element;
    this.config = config;

    this.target = $(this.element.data('unfold-target'));

    this.allInvokers = $('[data-unfold-target="' + this.element.data('unfold-target') + '"]');

    this.toggle = function () {
      if (!this.target.length) return this;

      if (this.defaultState) {
        this.show();
      }
      else {
        this.hide();
      }

      return this;
    };

    this.smartPosition = function (target) {

      if (target.data('baseDirection')) {
        target.css(
          target.data('baseDirection').direction,
          target.data('baseDirection').value
        );
      }

      target.removeClass('u-unfold--reverse-y');

      var $w = $(window),
        styles = getComputedStyle(target.get(0)),
        direction = Math.abs(parseInt(styles.left, 10)) < 40 ? 'left' : 'right',
        targetOuterGeometry = target.offset();

      // horizontal axis
      if (direction === 'right') {

        if (!target.data('baseDirection')) target.data('baseDirection', {
          direction: 'right',
          value: parseInt(styles.right, 10)
        });

        if (targetOuterGeometry.left < 0) {

          target.css(
            'right',
            (parseInt(target.css('right'), 10) - (targetOuterGeometry.left - 10)) * -1
          );

        }

      }
      else {

        if (!target.data('baseDirection')) target.data('baseDirection', {
          direction: 'left',
          value: parseInt(styles.left, 10)
        });

        if (targetOuterGeometry.left + target.outerWidth() > $w.width()) {

          target.css(
            'left',
            (parseInt(target.css('left'), 10) - (targetOuterGeometry.left + target.outerWidth() + 10 - $w.width()))
          );

        }

      }

      // vertical axis
      if (targetOuterGeometry.top + target.outerHeight() - $w.scrollTop() > $w.height()) {

        target.addClass('u-unfold--reverse-y');

      }

    };

    this.getOption = function (option) {
      return this.config[option] ? this.config[option] : null;
    };

    return true;
  }


  /**
   * UnfoldSimple constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function UnfoldSimple(element, config) {
    if (!AbstractUnfold.call(this, element, config)) return;

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('u-unfold--hidden');
      }
    });

    this.target.addClass('u-unfold--simple');

    this.hide();
  }

  /**
   * Shows Unfold.
   *
   * @public
   * @return {UnfoldSimple}
   */
  UnfoldSimple.prototype.show = function () {

    var activeEls = $(this)[0].config.unfoldTarget;

    $('[data-unfold-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('u-unfold--hidden');
    if (this.allInvokers.length) this.allInvokers.attr('aria-expanded', 'true');
    this.config.afterOpen.call(this.target, this.element);

    return this;
  };

  /**
   * Hides Unfold.
   *
   * @public
   * @return {UnfoldSimple}
   */
  UnfoldSimple.prototype.hide = function () {

    var activeEls = $(this)[0].config.unfoldTarget;

    $('[data-unfold-target="' + activeEls + '"]').removeClass('active');

    this.target.addClass('u-unfold--hidden');
    if (this.allInvokers.length) this.allInvokers.attr('aria-expanded', 'false');
    this.config.afterClose.call(this.target, this.element);

    return this;
  };

  /**
   * UnfoldCSSAnimation constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function UnfoldCSSAnimation(element, config) {
    if (!AbstractUnfold.call(this, element, config)) return;

    var self = this;

    this.target
      .addClass('u-unfold--css-animation u-unfold--hidden')
      .css('animation-duration', self.config.unfoldDuration + 'ms');

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('u-unfold--hidden');
      }
    });

    if (this.target.length) {

      this.target.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

        if (self.target.hasClass(self.config.unfoldAnimationOut)) {

          self.target.removeClass(self.config.unfoldAnimationOut)
            .addClass('u-unfold--hidden');


          if (self.allInvokers.length) self.allInvokers.attr('aria-expanded', 'false');

          self.config.afterClose.call(self.target, self.element);
        }

        if (self.target.hasClass(self.config.unfoldAnimationIn)) {

          if (self.allInvokers.length) self.allInvokers.attr('aria-expanded', 'true');

          self.config.afterOpen.call(self.target, self.element);
        }

        e.preventDefault();
        e.stopPropagation();
      });

    }
  }

  /**
   * Shows Unfold.
   *
   * @public
   * @return {UnfoldCSSAnimation}
   */
  UnfoldCSSAnimation.prototype.show = function () {

    var activeEls = $(this)[0].config.unfoldTarget;

    $('[data-unfold-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('u-unfold--hidden')
      .removeClass(this.config.unfoldAnimationOut)
      .addClass(this.config.unfoldAnimationIn);

  };

  /**
   * Hides Unfold.
   *
   * @public
   * @return {UnfoldCSSAnimation}
   */
  UnfoldCSSAnimation.prototype.hide = function () {

    var activeEls = $(this)[0].config.unfoldTarget;

    $('[data-unfold-target="' + activeEls + '"]').removeClass('active');

    this.target.removeClass(this.config.unfoldAnimationIn)
      .addClass(this.config.unfoldAnimationOut);

  };

  /**
   * UnfoldSlide constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function UnfoldJSlide(element, config) {
    if (!AbstractUnfold.call(this, element, config)) return;

    this.target.addClass('u-unfold--jquery-slide u-unfold--hidden').hide();

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('u-unfold--hidden');
      }
    });
  }

  /**
   * Shows Unfold.
   *
   * @public
   * @return {UnfoldJSlide}
   */
  UnfoldJSlide.prototype.show = function () {

    var self = this;

    var activeEls = $(this)[0].config.unfoldTarget;

    $('[data-unfold-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('u-unfold--hidden').stop().slideDown({
      duration: self.config.unfoldDuration,
      easing: self.config.unfoldEasing,
      complete: function () {
        self.config.afterOpen.call(self.target, self.element);
      }
    });

  };

  /**
   * Hides Unfold.
   *
   * @public
   * @return {UnfoldJSlide}
   */
  UnfoldJSlide.prototype.hide = function () {

    var self = this;

    var activeEls = $(this)[0].config.unfoldTarget;

    $('[data-unfold-target="' + activeEls + '"]').removeClass('active');

    this.target.slideUp({
      duration: self.config.unfoldDuration,
      easing: self.config.unfoldEasing,
      complete: function () {
        self.config.afterClose.call(self.target, self.element);
        self.target.addClass('u-unfold--hidden');
      }
    });

  }

})(jQuery);

/**
 * Validation wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
// var isEmpty = f => /^function[^{]+\{\s*\}/m.test(f.toString());

function isEmpty(value) {
  return (value == null || value.length === 0);
}

function check(test) {
  var entire = test.toString();
  var body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
  return body;

}


;(function ($) {
  'use strict';

  $.HSCore.components.HSValidation = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      errorElement: 'div',
      errorClass: 'invalid-feedback',
      rules: {},
      onkeyup: function(element){$(element).valid()},
      errorPlacement: function(){},
      highlight: function(){},
      unhighlight: function(){}
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Validation wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initValidation();

      return this.pageCollection;
    },

    initValidation: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el);

        if ($this.hasClass('js-step-form')) {
          $.validator.setDefaults({
            ignore: ':hidden:not(.active select)'
          });
        } else {
          $.validator.setDefaults({
            ignore: ':hidden:not(select)'
          });
        }

        $this.validate({
          errorElement: config['errorElement'],
          errorClass: config['errorClass'],
          rules: config['rules'],
          onkeyup: config['onkeyup'],
          errorPlacement: isEmpty(check(config['errorPlacement'])) == true ? $self.errorPlacement : config['errorPlacement'],
          highlight: isEmpty(check(config['highlight'])) == true ? $self.highlight : config['highlight'],
          unhighlight: isEmpty(check(config['unhighlight'])) == true ? $self.unHighlight : config['unhighlight']
        });

        $('select').change(function () {
          $(this).valid();
        });

        //Actions
        collection = collection.add($this);
      });
    },

    errorPlacement: function (error, element) {
      var $this = $(element),
        errorMsgClasses = $this.data('msg-classes');

      error.addClass(errorMsgClasses);
      error.appendTo(element.parents('.js-form-message'));
    },

    highlight: function (element) {
      var $this = $(element),
        errorClass = $this.data('error-class'),
        successClass = $this.data('success-class');

      $this.parents('.js-form-message').removeClass(successClass).addClass(errorClass);
    },

    unHighlight: function (element) {
      var $this = $(element),
        errorClass = $this.data('error-class'),
        successClass = $this.data('success-class');

      $this.parents('.js-form-message').removeClass(errorClass).addClass(successClass);
    }
  }
})(jQuery);

/**
 * Focus state helper-wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.helpers.HSFocusState = {
    /**
     * Focus state.
     *
     * @return undefined
     */
    init: function () {
      var collection = $('.js-focus-state input:not([type="checkbox"], [type="radio"]), .js-focus-state textarea, .js-focus-state select');

      if (!collection.length) return;

      collection.on('focusin', function () {
        var $this = $(this),
            $thisParent = $this.closest('.js-focus-state');

        $thisParent.addClass('u-focus-state');
      });

      collection.on('focusout', function () {
        var $this = $(this),
            $thisParent = $this.closest('.js-focus-state');

        $thisParent.removeClass('u-focus-state');
      });
    }
  };
})(jQuery);
/**
 * Background video helper-wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.helpers.HSBgVideo = {
    /**
     * Rating.
     *
     * @return undefined
     */
    init: function (el) {
      var $selector = $(el);

      $selector.hsBgVideo();
    }
  };
})(jQuery);

/**
 * HSMalihuScrollBar component.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires malihu jquery custom scrollbar plugin (v3.1.5.)
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSMalihuScrollBar = {

    /**
     * Base configuration.
     *
     * @private
     */
    _baseConfig: {
      scrollInertia: 150,
      theme: 'minimal-dark'
    },

    /**
     * Collection of all initalized items on the page.
     *
     * @private
     */
    _pageCollection: $(),


    /**
     * Initialization of HSMalihuScrollBar component.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @return {jQuery}
     */
    init: function (collection, config) {

      if(!collection || !collection.length) return;

      var self = this;

      config = config && $.isPlainObject(config) ? $.extend(true, {}, config, this._baseConfig) : this._baseConfig;

      return collection.each(function(i, el){

        var $this = $(el),
            scrollBar,
            scrollBarThumb,
            itemConfig = $.extend(true, {}, config, $this.data());


        $this.mCustomScrollbar(itemConfig);

        scrollBar = $this.find('.mCSB_scrollTools');
        scrollBarThumb = $this.find('.mCSB_dragger_bar');

        if(scrollBar.length && $this.data('scroll-classes')) {
          scrollBar.addClass($this.data('scroll-classes'));
        }

        if(scrollBarThumb.length && $this.data('scroll-thumb-classes')) {
          scrollBarThumb.addClass($this.data('scroll-thumb-classes'));
        }

        self._pageCollection = self._pageCollection.add($this);

      });

    },

    /**
     * Destroys the component.
     *
     * @param {jQuery} collection
     *
     * @return {jQuery}
     */
    destroy: function( collection ) {

      if( !collection && !collection.length ) return $();

      var _self = this;

      return collection.each(function(i, el){

         var $this = $(el);

         $this.mCustomScrollbar('destroy');

         _self._pageCollection = _self._pageCollection.not( $this );

      });

    }

  }

})(jQuery);

/**
 * ModalWindow wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires appear.js (v1.0.3), custombox.js (v4.0.1)
 *
 */
;(function($){
	'use strict';

	$.HSCore.components.HSModalWindow = {

		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig : {
			bounds: 100,
			debounce: 50,
			overlayOpacity: .48,
			overlayColor: '#000000',
			speed: 400,
			type: 'onscroll', // onscroll, beforeunload, hashlink, ontarget, aftersometime
			effect: 'fadein',
			onOpen: function() {},
			onClose: function() {},
			onComplete: function() {}
		},

		/**
		 *
		 *
		 * @var jQuery _pageCollection
		 */
		_pageCollection : $(),

		/**
		 * Initialization of ModalWindow wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery - collection of initialized items.
		 */
		init: function(selector, config) {

			var collection = $(selector);
			if(!collection.length) return;

			config = config && $.isPlainObject(config) ? $.extend({}, this._baseConfig, config) : this._baseConfig;
			config.selector = selector;

			this._pageCollection = this._pageCollection.add( collection.not(this._pageCollection) );

			if(config.autonomous) {

				return this.initAutonomousModalWindows(collection, config);

			}

			return this.initBaseModalWindows(collection, config);

		},

		/**
		 * Initialization of each Autonomous Modal Window of the page.
		 *
		 * @param jQuery collection
		 * @param Object config
		 *
		 * @return jQuery collection
		 */
		initBaseModalWindows: function(collection, config){

			return collection.on('click', function(e){

				if(!('Custombox' in window)) return;

	      var $this = $(this),
	          target = $this.data('modal-target'),
	          effect = $this.data('modal-effect') || config['effect'];

	      if(!target || !$(target).length) return;

	      new Custombox.modal(
	      	{
						content: {
							target: target,
							effect: effect,
							onOpen: function() {
								config['onOpen'].call($(target));
							},
							onClose: function() {
								config['onClose'].call($(target));
							},
							onComplete: function() {
								config['onComplete'].call($(target));
							}
						},
						overlay: {
							color: $this.data('overlay-color') || config['overlayColor'],
							opacity: $this.data('overlay-opacity') || config['overlayOpacity'],
							speedIn: $this.data('speed') || config['speed'],
							speedOut: $this.data('speed') || config['speed']
						}
					}
	      ).open();

	      e.preventDefault();

			});

		},

		/**
		 * Initialization of each Autonomous Modal Window of the page.
		 *
		 * @param jQuery collection
		 * @param Object config
		 *
		 * @return jQuery collection
		 */
		initAutonomousModalWindows: function(collection, config) {

			var self = this;

			return collection.each(function(i, el) {

				var $this = $(el),
						type = $this.data('modal-type');

				switch(type) {

					case 'hashlink' :

						self.initHashLinkPopup($this, config);

					break;

					case 'onscroll' :

						self.initOnScrollPopup($this, config);

					break;

					case 'beforeunload' :

						self.initBeforeUnloadPopup($this, config);

					break;

					case 'ontarget' :

						self.initOnTargetPopup($this, config);

					break;

					case 'aftersometime' :

						self.initAfterSomeTimePopup($this, config);

					break;

				}

			});

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initHashLinkPopup: function(popup, config) {

			var self = this,
					hashItem = $(window.location.hash),
					target = $('#' + popup.attr('id'));

			if(hashItem.length && hashItem.attr('id') ==  popup.attr('id')){

				new Custombox.modal(
					{
						content: {
							target: '#' + popup.attr('id'),
							effect: popup.data('effect') || config['effect'],
							onOpen: function() {
								config['onOpen'].call($(target));
							},
							onClose: function() {
								config['onClose'].call($(target));
							},
							onComplete: function() {
								config['onComplete'].call($(target));
							}
						},
						overlay: {
							color: popup.data('overlay-color') || config['overlayColor'],
							opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
							speedIn: popup.data('speed') || config['speed'],
							speedOut: popup.data('speed') || config['speed']
						}
					}
				).open();

			}

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initOnScrollPopup: function(popup, config) {

			var self = this,
					$window = $(window),
					breakpoint = popup.data('breakpoint') ? popup.data('breakpoint') : 0,
					target = $('#' + popup.attr('id'));


			$window.on('scroll.popup', function() {

				var scrolled = $window.scrollTop() + $window.height();

				if(scrolled >= breakpoint) {

					new Custombox.modal(
						{
							content: {
								target: '#' + popup.attr('id'),
								effect: popup.data('effect') || config['effect'],
								onOpen: function() {
									config['onOpen'].call($(target));
								},
								onClose: function() {
									config['onClose'].call($(target));
								},
								onComplete: function() {
									config['onComplete'].call($(target));
								}
							},
							overlay: {
								color: popup.data('overlay-color') || config['overlayColor'],
								opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
								speedIn: popup.data('speed') || config['speed'],
								speedOut: popup.data('speed') || config['speed']
							}
						}
					).open();

					$window.off('scroll.popup');

				}

			});

			$window.trigger('scroll.popup');

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initBeforeUnloadPopup: function(popup, config) {

			var self = this,
					count = 0,
					target = $('#' + popup.attr('id')),
					timeoutId;

			window.addEventListener('mousemove', function(e) {

				if(timeoutId) clearTimeout(timeoutId);

		    timeoutId = setTimeout(function() {

		    	if (e.clientY < 10 && !count) {

				    count++;

				    new Custombox.modal(
							{
								content: {
									target: '#' + popup.attr('id'),
									effect: popup.data('effect') || config['effect'],
									onOpen: function() {
										config['onOpen'].call($(target));
									},
									onClose: function() {
										config['onClose'].call($(target));
									},
									onComplete: function() {
										config['onComplete'].call($(target));
									}
								},
								overlay: {
									color: popup.data('overlay-color') || config['overlayColor'],
									opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
									speedIn: popup.data('speed') || config['speed'],
									speedOut: popup.data('speed') || config['speed']
								}
							}
						).open();
				    
		  		}

		  	}, 10);

			});
			

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initOnTargetPopup: function(popup, config) {

			var self = this,
					target = popup.data('target');

			if(!target || !$(target).length) return;

			appear({
				bounds: config['bounds'],
				debounce: config['debounce'],
				elements: function() {
					return document.querySelectorAll(target);
				},
				appear: function(element) {

					new Custombox.modal(
						{
							content: {
								target: '#' + popup.attr('id'),
								effect: popup.data('effect') || config['effect'],
								onOpen: function() {
									config['onOpen'].call($(target));
								},
								onClose: function() {
									config['onClose'].call($(target));
								},
								onComplete: function() {
									config['onComplete'].call($(target));
								}
							},
							overlay: {
								color: popup.data('overlay-color') || config['overlayColor'],
								opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
								speedIn: popup.data('speed') || config['speed'],
								speedOut: popup.data('speed') || config['speed']
							}
						}
					).open();

				}
			});

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initAfterSomeTimePopup: function(popup, config) {

			var self = this,
				target = $('#' + popup.attr('id'));

			setTimeout(function() {

				new Custombox.modal(
					{
						content: {
							target: '#' + popup.attr('id'),
							effect: popup.data('effect') || config['effect'],
							onOpen: function() {
								config['onOpen'].call($(target));
							},
							onClose: function() {
								config['onClose'].call($(target));
							},
							onComplete: function() {
								config['onComplete'].call($(target));
							}
						},
						overlay: {
							color: popup.data('overlay-color') || config['overlayColor'],
							opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
							speedIn: popup.data('speed') || config['speed'],
							speedOut: popup.data('speed') || config['speed']
						}
					}
				).open();

			}, popup.data('delay') ? popup.data('delay') : 10)

		}

	};

})(jQuery);

/**
 * Show Animation wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';
  $.HSCore.components.HSShowAnimation = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      afterShow: function() {}
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Show Animation wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initShowEffect();

      return this.pageCollection;
    },

    initShowEffect: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          linkGroup = $this.data('link-group'),
          $target = $($this.data('target')),
          targetGroup = $target.data('target-group'),
          animateIn = $this.data('animation-in');

        $this.on('click', function(e) {
          e.preventDefault();

          if($(this).hasClass('active')) return;

          $('[data-link-group="'+linkGroup+'"]').removeClass('active');
          $this.addClass('active');

          if(animateIn) {
            $self.addAnimation($target, targetGroup, animateIn, config);
          } else {
            $self.hideShow($target, targetGroup, config);
          }
        });

        // Actions
        collection = collection.add($this);
      });
    },

    hideShow: function (target, targetgroup, config) {
      $('[data-target-group="' + targetgroup + '"]')
        .hide().css('opacity', 0);

      target.show().css('opacity', 1);

      config.afterShow();
    },

    addAnimation: function (target, targetgroup, animatein, config) {
      $('[data-target-group="' + targetgroup + '"]')
        .hide()
        .css('opacity', 0)
        .removeClass('animated ' + animatein);

      target.show();

      config.afterShow();

      setTimeout(function () {
        target
          .css('opacity', 1)
          .addClass('animated ' + animatein);
      }, 50);
    }
  };
})(jQuery);

/**
 * Video player.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSVideoPlayer = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      oneClick: function () {
      }
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Classes Toggle wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.videoPlayerInit();

      return this.pageCollection;

    },

    videoPlayerInit: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          parent = $this.data('parent'),
          target = $this.data('target'),
          SRC = $('#' + target).attr('src'),
          videoType = $this.data('video-type'),
          classes = $this.data('classes');

        if (videoType !== 'vimeo') {
          $('#' + target).attr('src', SRC + '?enablejsapi=1');

          $self.youTubeAPIReady();
        }

        $this.on('click', function (e) {
          e.preventDefault();

          $('#' + parent).toggleClass(classes);

          if (videoType === 'vimeo') {
            $self.vimeoPlayer(target);
          } else {
            $self.youTubePlayer(target);
          }
        });

        //Actions
        collection = collection.add($this);
      });
    },

    youTubeAPIReady: function () {
      var YTScriptTag = document.createElement('script');
      YTScriptTag.src = '//www.youtube.com/player_api';

      var DOMfirstScriptTag = document.getElementsByTagName('script')[0];
      DOMfirstScriptTag
        .parentNode
        .insertBefore(YTScriptTag, DOMfirstScriptTag);
    },

    youTubePlayer: function (target) {
      var YTPlayer = new YT.Player(target, {
        events: {
          onReady: onPlayerReady
        }
      });

      function onPlayerReady(event) {
        YTPlayer.playVideo();
      }
    },

    vimeoPlayer: function (target) {
      var vimeoIframe = document.getElementById(target),
        vimeoPlayer = new Vimeo.Player(vimeoIframe);

      vimeoPlayer.play();
    }
  }

})(jQuery);

/**
 * Slick Carousel wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;
(function ($) {
  'use strict';

  $.HSCore.components.HSSlickCarousel = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      autoplay: false,
      infinite: true
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Slick Carousel wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */
    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initSlickCarousel();

      return this.pageCollection;
    },

    initSlickCarousel: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          id = $this.attr('id'),

          //Markup elements
          target = $this.data('nav-for'),
          isThumb = $this.data('is-thumbs'),
          arrowsClasses = $this.data('arrows-classes'),
          arrowLeftClasses = $this.data('arrow-left-classes'),
          arrowRightClasses = $this.data('arrow-right-classes'),
          pagiClasses = $this.data('pagi-classes'),
          pagiHelper = $this.data('pagi-helper'),
          $pagiIcons = $this.data('pagi-icons'),
          $prevMarkup = '<div class="js-prev ' + arrowsClasses + ' ' + arrowLeftClasses + '"></div>',
          $nextMarkup = '<div class="js-next ' + arrowsClasses + ' ' + arrowRightClasses + '"></div>',

          //Setters
          setSlidesToShow = $this.data('slides-show'),
          setSlidesToScroll = $this.data('slides-scroll'),
          setAutoplay = $this.data('autoplay'),
          setAnimation = $this.data('animation'),
          setEasing = $this.data('easing'),
          setFade = $this.data('fade'),
          setSpeed = $this.data('speed'),
          setSlidesRows = $this.data('rows'),
          setCenterMode = $this.data('center-mode'),
          setCenterPadding = $this.data('center-padding'),
          setPauseOnHover = $this.data('pause-hover'),
          setVariableWidth = $this.data('variable-width'),
          setInitialSlide = $this.data('initial-slide'),
          setVertical = $this.data('vertical'),
          setRtl = $this.data('rtl'),
          setInEffect = $this.data('in-effect'),
          setOutEffect = $this.data('out-effect'),
          setInfinite = $this.data('infinite'),
          setDataTitlePosition = $this.data('title-pos-inside'),
          setFocusOnSelect = $this.data('focus-on-select'),
          setLazyLoad = $this.data('lazy-load'),
          isAdaptiveHeight = $this.data('adaptive-height'),
          numberedPaging = $this.data('numbered-pagination'),
          setResponsive = JSON.parse(el.getAttribute('data-responsive'));

        if ($this.find('[data-slide-type]').length) {
          $self.videoSupport($this);
        }

        $this.on('init', function (event, slick) {
          $(slick.$slides).css('height', 'auto');

          if (isThumb && setSlidesToShow >= $(slick.$slides).length) {
            $this.addClass('slick-transform-off');
          }
        });

        $this.on('init', function (event, slick) {
          var slide = $(slick.$slides)[slick.currentSlide],
            animatedElements = $(slide).find('[data-scs-animation-in]');

          $(animatedElements).each(function () {
            var animationIn = $(this).data('scs-animation-in'),
              animationDelay = $(this).data('scs-animation-delay'),
              animationDuration = $(this).data('scs-animation-duration');

            $(this).css({
              'animation-delay': animationDelay + 'ms',
              'animation-duration': animationDuration + 'ms'
            });

            $(this).addClass('animated ' + animationIn).css('opacity', 1);
          });
        });

        if (setInEffect && setOutEffect) {
          $this.on('init', function (event, slick) {
            $(slick.$slides).addClass('single-slide');
          });
        }

        if (pagiHelper) {
          $this.on('init', function (event, slick) {
            var $pagination = $this.find('.js-pagination');

            if (!$pagination.length) return;

            $pagination.append('<span class="u-dots-helper"></span>');
          });
        }

        if (isThumb) {
          $('#' + id).on('click', '.slick-slide', function (e) {
            e.stopPropagation();

            //Variables
            var i = $(this).data('slick-index');

            if ($('#' + id).slick('slickCurrentSlide') !== i) {
              $('#' + id).slick('slickGoTo', i);
            }
          });
        }

        $this.on('init', function (event, slider) {
          var $pagination = $this.find('.js-pagination');

          if (!$pagination.length) return;

          $($pagination[0].children[0]).addClass('slick-current');
        });

        $this.on('init', function (event, slick) {
          var slide = $(slick.$slides)[0],
            animatedElements = $(slide).find('[data-scs-animation-in]');

          $(animatedElements).each(function () {
            var animationIn = $(this).data('scs-animation-in');

            $(this).addClass('animated ' + animationIn).css('opacity', 1);
          });
        });

        if (numberedPaging) {
          $this.on('init', function (event, slick) {
            $(numberedPaging).html('<span class="u-paging__current">1</span><span class="u-paging__divider"></span><span class="u-paging__total">' + slick.slideCount + '</span>');
          });
        }

        $this.slick({
          autoplay: setAutoplay ? true : false,
          autoplaySpeed: setSpeed ? setSpeed : 3000,

          cssEase: setAnimation ? setAnimation : 'ease',
          easing: setEasing ? setEasing : 'linear',
          fade: setFade ? true : false,

          infinite: setInfinite ? true : false,
          initialSlide: setInitialSlide ? setInitialSlide - 1 : 0,
          slidesToShow: setSlidesToShow ? setSlidesToShow : 1,
          slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 1,
          centerMode: setCenterMode ? true : false,
          variableWidth: setVariableWidth ? true : false,
          pauseOnHover: setPauseOnHover ? true : false,
          rows: setSlidesRows ? setSlidesRows : 1,
          vertical: setVertical ? true : false,
          verticalSwiping: setVertical ? true : false,
          rtl: setRtl ? true : false,
          centerPadding: setCenterPadding ? setCenterPadding : 0,
          focusOnSelect: setFocusOnSelect ? true : false,
          lazyLoad: setLazyLoad ? setLazyLoad : false,

          asNavFor: target ? target : false,
          prevArrow: arrowsClasses ? $prevMarkup : false,
          nextArrow: arrowsClasses ? $nextMarkup : false,
          dots: pagiClasses ? true : false,
          dotsClass: 'js-pagination ' + pagiClasses,
          adaptiveHeight: !!isAdaptiveHeight,
          customPaging: function (slider, i) {
            var title = $(slider.$slides[i]).data('title');

            if (title && $pagiIcons) {
              return '<span>' + title + '</span>' + $pagiIcons;
            } else if ($pagiIcons) {
              return '<span></span>' + $pagiIcons;
            } else if (title && setDataTitlePosition) {
              return '<span>' + title + '</span>';
            } else if (title && !setDataTitlePosition) {
              return '<span></span>' + '<strong class="u-dot-title">' + title + '</strong>';
            } else {
              return '<span></span>';
            }
          },
          responsive: setResponsive
        });

        $this.on('beforeChange', function (event, slider, currentSlide, nextSlide) {
          var nxtSlide = $(slider.$slides)[nextSlide],
            slide = $(slider.$slides)[currentSlide],
            $pagination = $this.find('.js-pagination'),
            animatedElements = $(nxtSlide).find('[data-scs-animation-in]'),
            otherElements = $(slide).find('[data-scs-animation-in]');

          $(otherElements).each(function () {
            var animationIn = $(this).data('scs-animation-in');

            $(this).removeClass('animated ' + animationIn);
          });

          $(animatedElements).each(function () {
            $(this).css('opacity', 0);
          });

          if (!$pagination.length) return;

          if (currentSlide > nextSlide) {
            $($pagination[0].children).removeClass('slick-active-right');

            $($pagination[0].children[nextSlide]).addClass('slick-active-right');
          } else {
            $($pagination[0].children).removeClass('slick-active-right');
          }

          $($pagination[0].children).removeClass('slick-current');

          setTimeout(function () {
            $($pagination[0].children[nextSlide]).addClass('slick-current');
          }, .25);
        });

        if (numberedPaging) {
          $this.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var i = (nextSlide ? nextSlide : 0) + 1;

            $(numberedPaging).html('<span class="u-paging__current">' + i + '</span><span class="u-paging__divider"></span><span class="u-paging__total">' + slick.slideCount + '</span>');
          });
        }

        $this.on('afterChange', function (event, slick, currentSlide) {
          var slide = $(slick.$slides)[currentSlide],
            animatedElements = $(slide).find('[data-scs-animation-in]');

          $(animatedElements).each(function () {
            var animationIn = $(this).data('scs-animation-in'),
              animationDelay = $(this).data('scs-animation-delay'),
              animationDuration = $(this).data('scs-animation-duration');

            $(this).css({
              'animation-delay': animationDelay + 'ms',
              'animation-duration': animationDuration + 'ms'
            });

            $(this).addClass('animated ' + animationIn).css('opacity', 1);
          });
        });

        if (setInEffect && setOutEffect) {
          $this.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('animated set-position ' + setInEffect + ' ' + setOutEffect);
          });

          $this.on('beforeChange', function (event, slick, currentSlide) {
            $(slick.$slides[currentSlide]).addClass('animated ' + setOutEffect);
          });

          $this.on('setPosition', function (event, slick) {
            $(slick.$slides[slick.currentSlide]).addClass('animated set-position ' + setInEffect);
          });
        }

        //Actions
        collection = collection.add($this);
      });
    },

    /**
     * Implementation of video support.
     *
     * @param jQuery carousel
     * @param String videoSupport
     *
     * @return undefined
     */
    videoSupport: function (carousel) {
      if (!carousel.length) return;

      carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var slideType = $(slick.$slides[currentSlide]).data('slide-type'),
          player = $(slick.$slides[currentSlide]).find('iframe').get(0),
          command;

        if (slideType == 'vimeo') {
          command = {
            "method": "pause",
            "value": "true"
          }
        } else if (slideType == 'youtube') {
          command = {
            "event": "command",
            "func": "pauseVideo"
          }
        } else {
          return false;
        }

        if (player != undefined) {
          player.contentWindow.postMessage(JSON.stringify(command), '*');
        }
      });
    },

    /**
     * Implementation of text animation.
     *
     * @param jQuery carousel
     * @param String textAnimationSelector
     *
     * @requires charming.js, anime.js, textfx.js
     *
     * @return undefined
     */
    initTextAnimation: function (carousel, textAnimationSelector) {
      if (!window.TextFx || !window.anime || !carousel.length) return;

      var $text = carousel.find(textAnimationSelector);

      if (!$text.length) return;

      $text.each(function (i, el) {
        var $this = $(el);

        if (!$this.data('TextFx')) {
          $this.data('TextFx', new TextFx($this.get(0)));
        }
      });


      carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var targets = slick.$slider
          .find('.slick-track')
          .children();

        var currentTarget = targets.eq(currentSlide),
          nextTarget = targets.eq(nextSlide);

        currentTarget = currentTarget.find(textAnimationSelector);
        nextTarget = nextTarget.find(textAnimationSelector);

        if (currentTarget.length) {
          currentTarget.data('TextFx').hide(currentTarget.data('effect') ? currentTarget.data('effect') : 'fx1');
        }

        if (nextTarget.length) {
          nextTarget.data('TextFx').show(nextTarget.data('effect') ? nextTarget.data('effect') : 'fx1');
        }
      });
    }
  }
})(jQuery);

/**
 * Filter wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */

;(function ($) {
  'use strict';

  $.HSCore.components.HSCubeportfolio = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Filter wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCubeportfolio();

      return this.pageCollection;

    },

    initCubeportfolio: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          setControls = $this.data('controls'),
          setLayout = $this.data('layout'),
          setXGap = $this.data('x-gap'),
          setYGap = $this.data('y-gap'),
          setAnimation = $this.data('animation'),
          setCaptionAnimation = $this.data('caption-animation'),
          setLoadMoreSelector = $(this).data('load-more-selector'),
          setLoadMoreAction = $(this).data('load-more-action'),
          setLoadItemsAmount = $(this).data('load-items-amount'),
          setDefaultMediaQueries = setLayout === 'slider' ? [{
            width: 0,
            cols: 1,
          }] : [{
            width: 1500,
            cols: 3
          }, {
            width: 1100,
            cols: 3
          }, {
            width: 800,
            cols: 3
          }, {
            width: 480,
            cols: 2,
            options: {
              caption: '',
              gapHorizontal: 10,
              gapVertical: 10
            }
          }],
          setMeidaQueries = JSON.parse(el.getAttribute('data-media-queries')),
          setIsAuto = Boolean($this.data('is-auto')),
          setAutoTimeout = $this.data('auto-timeout'),
          setIsAutoPauseOnHover = Boolean($this.data('is-auto-pause-on-hover')),
          setIsShowNavigation = Boolean($this.data('is-show-navigation')),
          setIsShowPagination = Boolean($this.data('is-show-pagination')),
          setIsRewindNav = Boolean($this.data('is-rewind-nav')),
          setIsScrollByPage = Boolean($this.data('is-scroll-by-page'));

        $this.cubeportfolio({
          filters: setControls,
          layoutMode: setLayout,

          drag: setLayout === 'slider',
          auto: setIsAuto ? setIsAuto : false,
          autoTimeout: setAutoTimeout ? setAutoTimeout : false,
          autoPauseOnHover: setIsAutoPauseOnHover ? setIsAutoPauseOnHover : false,
          showNavigation: setIsShowNavigation ? setIsShowNavigation : false,
          showPagination: setIsShowPagination ? setIsShowPagination : false,
          rewindNav: setIsRewindNav ? setIsRewindNav : false,
          scrollByPage: setIsScrollByPage ? setIsScrollByPage : false,

          defaultFilter: '*',
          sortToPreventGaps: true,
          gapHorizontal: setXGap,
          gapVertical: setYGap,
          animationType: setAnimation,
          gridAdjustment: 'responsive',
          mediaQueries: setMeidaQueries ? setMeidaQueries : setDefaultMediaQueries,
          caption: setCaptionAnimation ? setCaptionAnimation : 'overlayBottomAlong',
          displayType: 'sequentially',
          displayTypeSpeed: 100,

          // lightbox
          lightboxDelegate: '.cbp-lightbox',
          lightboxGallery: true,
          lightboxTitleSrc: 'data-title',
          lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

          appendItems: '<div class="logo cbp-item">my awesome content to append to plugin</div> <div class="logo cbp-item">my second awesome content to append to plugin</div>',

          // singlePageInline
          singlePageInlineDelegate: '.cbp-singlePageInline',
          singlePageInlinePosition: 'below',
          singlePageInlineInFocus: true,
          singlePageInlineCallback: function (url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
              url: url,
              type: 'GET',
              dataType: 'html',
              timeout: 30000
            })
              .done(function (result) {

                t.updateSinglePageInline(result);

              })
              .fail(function () {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
              });
          },

          // singlePage popup
          singlePageDelegate: '.cbp-singlePage',
          singlePageDeeplinking: true,
          singlePageStickyNavigation: true,
          singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
          singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
              url: url,
              type: 'GET',
              dataType: 'html',
              timeout: 10000
            })
              .done(function (result) {
                t.updateSinglePage(result);
              })
              .fail(function () {
                t.updateSinglePage('AJAX Error! Please refresh the page!');
              });
          },

          plugins: {
            loadMore: {
              selector: setLoadMoreSelector,
              action: setLoadMoreAction,
              loadItems: setLoadItemsAmount
            }
          }
        });

        //Actions
        collection = collection.add($this);
      });
    }
  };

})(jQuery);

/**
 * Go To wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';
  $.HSCore.components.HSGoTo = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Go To wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initGoTo();

      return this.pageCollection;
    },

    initGoTo: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          $target = $this.data('target'),
          type = $this.data('type'),
          showEffect = $this.data('show-effect'),
          hideEffect = $this.data('hide-effect'),
          position = JSON.parse(el.getAttribute('data-position')),
          compensation = $($this.data('compensation')).outerHeight(),
          offsetTop = $this.data('offset-top'),
          targetOffsetTop = function () {
            if (compensation) {
              return $target ? $($target).offset().top - compensation : 0;
            } else {
              return $target ? $($target).offset().top : 0;
            }
          };

        if (type == 'static') {
          $this.css({
            'display': 'inline-block'
          });
        } else {
          $this.addClass('animated').css({
            'display': 'inline-block',
            'position': type,
            'opacity': 0
          });
        }

        if (type == 'fixed' || type == 'absolute') {
          $this.css(position);
        }

        $this.on('click', function (e) {
          e.preventDefault();

          $('html, body').stop().animate({
            'scrollTop': targetOffsetTop()
          }, 800);
        });

        if (!$this.data('offset-top') && !$this.hasClass('js-animation-was-fired') && type != 'static') {
          if ($this.offset().top <= $(window).height()) {
            $this.show();

            setTimeout(function () {
              $this.addClass('js-animation-was-fired ' + showEffect).css({
                'opacity': ''
              });
            });
          }
        }

        if (type != 'static') {
          $(window).on('scroll', function () {
            if ($this.data('offset-top')) {
              if ($(window).scrollTop() >= offsetTop && !$this.hasClass('js-animation-was-fired')) {
                $this.show();

                setTimeout(function () {
                  $this.addClass('js-animation-was-fired ' + showEffect).css({
                    'opacity': ''
                  });
                });
              } else if ($(window).scrollTop() <= offsetTop && $this.hasClass('js-animation-was-fired')) {
                $this.removeClass('js-animation-was-fired ' + showEffect);

                setTimeout(function () {
                  $this.addClass(hideEffect).css({
                    'opacity': 0
                  });
                }, 100);

                setTimeout(function () {
                  $this.removeClass(hideEffect).hide();
                }, 400);
              }
            } else {
              var thisOffsetTop = $this.offset().top;

              if (!$this.hasClass('js-animation-was-fired')) {
                if ($(window).scrollTop() >= thisOffsetTop - $(window).height()) {
                  $this.show();

                  setTimeout(function () {
                    $this.addClass('js-animation-was-fired ' + showEffect).css({
                      'opacity': ''
                    });
                  });
                }
              }
            }
          });

          $(window).trigger('scroll');
        }

        //Actions
        collection = collection.add($this);
      });
    }
  };
})(jQuery);

/**
 * Fancybox wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;
(function ($) {
  'use strict';

  $.HSCore.components.HSFancyBox = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      parentEl: 'html',
      baseClass: 'u-fancybox-theme',
      slideClass: 'u-fancybox-slide',
      speed: 1000,
      slideSpeedCoefficient: 1,
      infobar: false,
      fullScreen: true,
      thumbs: true,
      closeBtn: true,
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-content">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-controls" style="position: relative; z-index: 99999;">' +
      '<div class="fancybox-infobar">' +
      '<div class="fancybox-infobar__body">' +
      '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
      '</div>' +
      '</div>' +
      '<div class="fancybox-toolbar">{{BUTTONS}}</div>' +
      '</div>' +
      '<div class="fancybox-slider-wrap">' +
      '<button data-fancybox-prev class="fancybox-arrow fancybox-arrow--left" title="Previous"></button>' +
      '<button data-fancybox-next class="fancybox-arrow fancybox-arrow--right" title="Next"></button>' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '<div class="fancybox-caption-wrap">' +
      '<div class="fancybox-caption"></div>' +
      '</div>' +
      '</div>' +
      '</div>',
      animationEffect: 'fade'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Fancybox wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      if (!selector) return;

      var $collection = $(selector);

      if (!$collection.length) return;

      config = config && $.isPlainObject(config) ? $.extend(true, {}, this._baseConfig, config) : this._baseConfig;

      this.initFancyBox(selector, config);
    },

    initFancyBox: function (el, conf) {
      var $fancybox = $(el);

      $fancybox.on('click', function () {
        var $this = $(this),
          animationDuration = $this.data('speed'),
          isGroup = $this.data('fancybox'),
          isInfinite = Boolean($this.data('is-infinite')),
          slideShowSpeed = $this.data('slideshow-speed');

        $.fancybox.defaults.animationDuration = animationDuration;

        if (isInfinite == true) {
          $.fancybox.defaults.loop = true;
        }

        if (isGroup) {
          $.fancybox.defaults.transitionEffect = 'slide';
          $.fancybox.defaults.slideShow.speed = slideShowSpeed;
        }
      });

      $fancybox.fancybox($.extend(true, {}, conf, {
        beforeShow: function (instance, slide) {
          var $fancyModal = $(instance.$refs.container),
            $fancyOverlay = $(instance.$refs.bg[0]),
            $fancySlide = $(instance.current.$slide),

            animateIn = instance.current.opts.$orig[0].dataset.animateIn,
            animateOut = instance.current.opts.$orig[0].dataset.animateOut,
            speed = instance.current.opts.$orig[0].dataset.speed,
            overlayBG = instance.current.opts.$orig[0].dataset.overlayBg,
            overlayBlurBG = instance.current.opts.$orig[0].dataset.overlayBlurBg;

          if (animateIn && $('body').hasClass('u-first-slide-init')) {
            var $fancyPrevSlide = $(instance.slides[instance.prevPos].$slide);

            $fancySlide.addClass('has-animation');

            $fancyPrevSlide.addClass('animated ' + animateOut);

            setTimeout(function () {
              $fancySlide.addClass('animated ' + animateIn);
            }, speed / 2);
          } else if (animateIn) {
            var $fancyPrevSlide = $(instance.slides[instance.prevPos].$slide);

            $fancySlide.addClass('has-animation');

            $fancySlide.addClass('animated ' + animateIn);

            $('body').addClass('u-first-slide-init');

            $fancySlide.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
              $fancySlide.removeClass(animateIn);
            });
          }

          if (speed) {
            $fancyOverlay.css('transition-duration', speed + 'ms');
          } else {
            $fancyOverlay.css('transition-duration', '1000ms');
          }

          if (overlayBG) {
            $fancyOverlay.css('background-color', overlayBG);
          }

          if (overlayBlurBG) {
            $('body').addClass('u-blur-30');
          }
        },

        beforeClose: function (instance, slide) {
          var $fancyModal = $(instance.$refs.container),
            $fancySlide = $(instance.current.$slide),

            animateIn = instance.current.opts.$orig[0].dataset.animateIn,
            animateOut = instance.current.opts.$orig[0].dataset.animateOut,
            overlayBlurBG = instance.current.opts.$orig[0].dataset.overlayBlurBg;

          if (animateOut) {
            $fancySlide.removeClass(animateIn).addClass(animateOut);
            $('body').removeClass('u-first-slide-init')
          }

          if (overlayBlurBG) {
            $('body').removeClass('u-blur-30')
          }
        }
      }));
    }
  }
})(jQuery);

/**
 * Gmap wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSGMap = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      zoom: 14,
      scrollwheel: false,
      infoWindowTemplate: function (imgsrc, imgalt, date, locationname, title) {
        return '<img class="rounded-circle" src="' + imgsrc + '" alt="' + imgalt + '">' +
          '<div class="p-2">' +
            '<strong class="d-block mb-1">' + date + '</strong>' +
            '<p class="mb-1"><i class="fa fa-map-marker mr-2"></i>' + locationname + '</p>' +
            '<h2 class="h6 mb-0">' + title + '</h2>' +
          '</div>';
      }
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Gmap wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initGMap();

      return this.pageCollection;

    },

    initGMap: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          ID = $this.attr('id'),
          gMapType = $this.data('type'),
          gMapLat = $this.data('lat'),
          gMapLng = $this.data('lng'),
          gMapZoom = $this.data('zoom'),
          gMapTitle = $this.data('title'),

          gMapStyles = JSON.parse(el.getAttribute('data-styles')),
          gMapStylesArray = [],

          polygon,
          gMapPolygon = Boolean($this.data('polygon')),
          gMapPolygonCords = JSON.parse(el.getAttribute('data-polygon-cords')),
          gMapPolygonStyles = JSON.parse(el.getAttribute('data-polygon-styles')),

          polylines,
          gMapPolylines = Boolean($this.data('polylines')),
          gMapPolylinesCords = JSON.parse(el.getAttribute('data-polylines-cords')),
          gMapPolylinesStyles = JSON.parse(el.getAttribute('data-polylines-styles')),

          gMapRoutes = Boolean($this.data('routes')),
          gMapRoutesCords = JSON.parse(el.getAttribute('data-routes-cords')),
          gMapRoutesStyles = JSON.parse(el.getAttribute('data-routes-styles')),

          gMapGeolocation = Boolean($this.data('geolocation')),

          gMapGeocoding = Boolean($this.data('geocoding')),
          gMapCordsTarget = $this.data('cords-target'),

          gMapPin = Boolean($this.data('pin')),
          gMapPinIcon = $this.data('pin-icon'),

          gMapMultipleMarkers = Boolean($this.data('multiple-markers')),
          gMapMarkersLocations = JSON.parse(el.getAttribute('data-markers-locations')),

          $gMap;

        //Map Type
        if (gMapType == 'satellite') {
          $gMap = new google.maps.Map(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setCenter({
            lat: gMapLat,
            lng: gMapLng
          });

          $gMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        } else if (gMapType == 'terrain') {
          $gMap = new google.maps.Map(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setCenter({
            lat: gMapLat,
            lng: gMapLng
          });

          $gMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
        } else if (gMapType == 'street-view') {
          $gMap = new google.maps.StreetViewPanorama(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setPosition({
            lat: gMapLat,
            lng: gMapLng
          });
        } else if (gMapType == 'static') {
          $(document).ready(function () {
            $gMap = GMaps.staticMapURL({
              size: [2048, 2048],
              lat: gMapLat,
              lng: gMapLng,
              zoom: gMapZoom ? gMapZoom : config['zoom']
            });

            $('#' + ID).css('background-image', 'url(' + $gMap + ')');
          });
        } else if (gMapType == 'custom') {
          var arrL = gMapStyles.length;

          for (var i = 0; i < arrL; i++) {
            var featureType = gMapStyles[i][0],
              elementType = gMapStyles[i][1],
              stylers = gMapStyles[i][2],
              obj = $.extend({}, gMapStylesArray[i]);

            if (featureType != "") {
              obj.featureType = featureType;
            }

            if (elementType != "") {
              obj.elementType = elementType;
            }

            obj.stylers = stylers;

            gMapStylesArray.push(obj);
          }

          $gMap = new GMaps({
            div: '#' + ID,
            lat: gMapLat,
            lng: gMapLng,
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel'],
            styles: gMapStylesArray
          });

          //Pin
          if (gMapPin && gMapMultipleMarkers != true) {
            $gMap.addMarker({
              lat: gMapLat,
              lng: gMapLng,
              title: gMapTitle,
              icon: gMapPinIcon
            });
          }

          if (gMapPin && gMapMultipleMarkers == true) {
            var i3;

            for (i3 = 0; i3 < gMapMarkersLocations.length; i3++) {
              $gMap.addMarker({
                title: gMapMarkersLocations[i3][1],
                lat: gMapMarkersLocations[i3][2],
                lng: gMapMarkersLocations[i3][3],
                icon: gMapMarkersLocations[i3][0],
                infoWindow: {
                  content: config['infoWindowTemplate'](gMapMarkersLocations[i3][4], gMapMarkersLocations[i3][5], gMapMarkersLocations[i3][6], gMapMarkersLocations[i3][7], gMapMarkersLocations[i3][8]),
                  maxWidth: 150
                }
              });
            }
          }
          //End Pin
        } else {
          $gMap = new GMaps({
            div: '#' + ID,
            lat: gMapLat,
            lng: gMapLng,
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          //Pin
          if (gMapPin) {
            $gMap.addMarker({
              lat: gMapLat,
              lng: gMapLng,
              title: gMapTitle,
              icon: gMapPinIcon
            });
          }
          //End Pin
        }
        //End Map Type

        //Pin
        if (gMapPin && gMapType == 'satellite' || gMapType == 'terrain' || gMapType == 'street-view') {
          //Variables
          var $pin = new google.maps.Marker({
            position: {
              lat: gMapLat,
              lng: gMapLng
            },
            map: $gMap
          });

          if (gMapPinIcon) {
            var $pinIcon = new google.maps.MarkerImage(gMapPinIcon);
            $pin.setIcon($pinIcon);
          }

          if (gMapTitle) {
            $pin.setOptions({
              title: gMapTitle
            });
          }
        }
        //End Pin

        //Multiple markers
        if (gMapMultipleMarkers == true && gMapType == 'terrain') {
          var infowindow = new google.maps.InfoWindow(),
            marker,
            i2;

          for (i2 = 0; i2 < gMapMarkersLocations.length; i2++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(gMapMarkersLocations[i2][1], gMapMarkersLocations[i2][2]),
              map: $gMap
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i2) {
              return function () {
                infowindow.setContent(gMapMarkersLocations[i2][0]);
                infowindow.open($gMap, marker);
              }
            })(marker, i2));
          }
        }
        //End Multiple markers

        //Auto Center markers on window resize
        if (!gMapGeolocation) {
          google.maps.event.addDomListener(window, 'resize', function () {
            setTimeout(function () {
              $gMap.setCenter({
                lat: gMapLat,
                lng: gMapLng
              });
            }, 100);
          });
        }

        //Polygon
        if (gMapPolygon) {
          $(document).ready(function () {
            polygon = $gMap.drawPolygon({
              paths: gMapPolygonCords,
              strokeColor: gMapPolygonStyles.strokeColor,
              strokeOpacity: gMapPolygonStyles.strokeOpacity,
              strokeWeight: gMapPolygonStyles.strokeWeight,
              fillColor: gMapPolygonStyles.fillColor,
              fillOpacity: gMapPolygonStyles.fillOpacity
            });
          });
        }
        //End Polygon

        //Polylines
        if (gMapPolylines) {
          $(document).ready(function () {
            $gMap.drawPolyline({
              path: gMapPolylinesCords,
              strokeColor: gMapPolylinesStyles.strokeColor,
              strokeOpacity: gMapPolylinesStyles.strokeOpacity,
              strokeWeight: gMapPolylinesStyles.strokeWeight
            });
          });
        }
        //End Polylines

        //Routes
        if (gMapRoutes) {
          $(document).ready(function () {
            $gMap.drawRoute({
              origin: gMapRoutesCords[0],
              destination: gMapRoutesCords[1],
              travelMode: gMapRoutesStyles.travelMode,
              strokeColor: gMapRoutesStyles.strokeColor,
              strokeOpacity: gMapRoutesStyles.strokeOpacity,
              strokeWeight: gMapRoutesStyles.strokeWeight
            });
          });
        }
        //End Routes

        //Geolocation
        if (gMapGeolocation) {
          GMaps.geolocate({
            success: function (position) {
              $gMap.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });

              $gMap.addMarker({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                title: gMapTitle,
                icon: gMapPinIcon
              });

              google.maps.event.addDomListener(window, 'resize', function () {
                setTimeout(function () {
                  $gMap.setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  });
                }, 100);
              });
            },
            error: function (error) {
              alert('Geolocation failed: ' + error.message);
            },
            not_supported: function () {
              alert('Your browser does not support geolocation');
            }
          });
        }
        //End Geolocation

        //Geocoding
        if (gMapGeocoding) {
          $(document).ready(function () {
            var targetCordsParent = $(gMapCordsTarget).closest('form');

            $(targetCordsParent).submit(function (e) {
              e.preventDefault();

              GMaps.geocode({
                address: $(gMapCordsTarget).val().trim(),
                callback: function (results, status) {
                  if (status == 'OK') {
                    var latlng = results[0].geometry.location;

                    $gMap.setCenter(latlng.lat(), latlng.lng());
                    $gMap.addMarker({
                      lat: latlng.lat(),
                      lng: latlng.lng()
                    });

                    gMapLat = latlng.lat();
                    gMapLng = latlng.lng();
                  }
                }
              });
            });
          });
        }
        //End Geocoding

        //Actions
        collection = collection.add($this);
      });
    }
  }
})(jQuery);

$(window).on('load', function () {
  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 991,
    hideTimeOut: 0
  });

  $('.nav-bar .flex-column a').hover( function() {
     $(this).parents('.nav-item').children('.flex-column').show();
  },
  function() {
     $(this).parents('.nav-item').children('.flex-column').hide();
  });
  $('.nav-bar .flex-column .flex-column').css('left', $('.nav-bar').width()-10);
});

$(document).on('ready', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#header'));

  // initialization of unfold component
  $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    afterOpen: function () {
      if (!$('body').hasClass('IE11')) {
        $(this).find('input[type="search"]').focus();
      }
    }
  });

  // initialization of form validation
  $.HSCore.components.HSValidation.init('.js-validate', {
    rules: {
      confirmPassword: {
        equalTo: '#password'
      }
    }
  });

  // initialization of forms
  $.HSCore.helpers.HSFocusState.init();

  // initialization of malihu scrollbar
  $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

  // initialization of autonomous popups
  $.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-signup-modal', {
    autonomous: true
  });

  // initialization of show animations
  $.HSCore.components.HSShowAnimation.init('.js-animation-link');

  // initialization of slick carousel
  $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

  // initialization of cubeportfolio
  $.HSCore.components.HSCubeportfolio.init('.cbp');

  // initialization of video player
  $.HSCore.components.HSVideoPlayer.init('.js-inline-video-player');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');

  // // initialization of fancybox
  $.HSCore.components.HSFancyBox.init('.js-fancybox');

  // initialization of video on background
  $.HSCore.helpers.HSBgVideo.init('.js-bg-video');
});
