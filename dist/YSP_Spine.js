/*:
 * @name YSP - Spine Integration
 * @plugindesc v1.0.0 Plugin used to integrate Spine into RMMV.
 * @author Dr.Yami
 *
 * @help
 * Simply integrate Spine into RMMV. The spine assets have to be
 * loaded before create new Spine.
 *
 * Requires `https://github.com/pixijs/pixi-spine`
 * Just get the `bin` js and put it into `index.html`
 */

var ysp = ysp || {};
ysp.Spine = {};

// ----------------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------------

ysp.Spine.SETUP = {
    "goblin": {
        skin: "goblin",
        initAnimation: {
            name: "walk",
            autoplay: true,
            loop: true
        },
        json: "spines/goblins/export/goblins.json",
        atlas: "spines/goblins/export/goblins.atlas",
        texture: "spines/goblins/export/goblins.png"
    },

    "vine": {
        skin: "default",
        initAnimation: {
            name: "grow",
            autoplay: true,
            loop: true
        },
        json: "spines/vine/export/vine.json",
        atlas: "spines/vine/export/vine.atlas",
        texture: "spines/vine/export/vine.png"
    }
};

// ----------------------------------------------------------------------------
// END CONFIGURATION
// ----------------------------------------------------------------------------

!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=67)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(21)("wks"),o=e(22),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(10),o=e(20);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(24),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){var r=e(5),o=e(29),i=e(30),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(0),o=e(2),i=e(17),u=e(3),c=function(t,n,e){var s,a,f,l=t&c.F,p=t&c.G,v=t&c.S,h=t&c.P,d=t&c.B,y=t&c.W,m=p?o:o[n]||(o[n]={}),_=m.prototype,x=p?r:v?r[n]:(r[n]||{}).prototype;p&&(e=n);for(s in e)(a=!l&&x&&void 0!==x[s])&&s in m||(f=a?x[s]:e[s],m[s]=p&&"function"!=typeof x[s]?e[s]:d&&a?i(f,r):y&&x[s]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[s]=f,t&c.R&&_&&!_[s]&&u(_,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(21)("keys"),o=e(22);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(6),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(12);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(31),o=e(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(11),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(10).f,o=e(8),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(34),o=e(14),i=e(43),u=e(3),c=e(8),s=e(9),a=e(44),f=e(27),l=e(47),p=e(1)("iterator"),v=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,d,y,m,_){a(e,n,d);var x,g,w,S=function(t){if(!v&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",P="values"==y,j=!1,O=t.prototype,T=O[p]||O["@@iterator"]||y&&O[y],M=T||S(y),L=y?P?S("entries"):M:void 0,k="Array"==n?O.entries||T:T;if(k&&(w=l(k.call(new t)))!==Object.prototype&&w.next&&(f(w,b,!0),r||c(w,p)||u(w,p,h)),P&&T&&"values"!==T.name&&(j=!0,M=function(){return T.call(this)}),r&&!_||!v&&!j&&O[p]||u(O,p,M),s[n]=M,s[b]=h,y)if(x={values:P?M:S("values"),keys:m?M:S("keys"),entries:L},_)for(g in x)g in O||i(O,g,x[g]);else o(o.P+o.F*(v||j),n,x);return x}},function(t,n,e){t.exports=!e(4)&&!e(15)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(8),o=e(7),i=e(32)(!1),u=e(16)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(7),o=e(26),i=e(33);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(11),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n){t.exports=!0},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(13);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(12),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},,function(t,n,e){e(40);for(var r=e(0),o=e(3),i=e(9),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){"use strict";var r=e(41),o=e(42),i=e(9),u=e(7);t.exports=e(28)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){t.exports=e(3)},function(t,n,e){"use strict";var r=e(45),o=e(20),i=e(27),u={};e(3)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(5),o=e(46),i=e(23),u=e(16)("IE_PROTO"),c=function(){},s=function(){var t,n=e(19)("iframe"),r=i.length;for(n.style.display="none",e(35).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(10),o=e(5),i=e(25);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(8),o=e(36),i=e(16)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(49)(!0);e(28)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(11),o=e(13);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(37),o=e(1)("iterator"),i=e(9);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},,function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(74),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={},u={},c=0,s=function(t){return new o.default(function(n,e){var r=new XMLHttpRequest;r.open("GET",t),r.onload=function(){return n(r.responseText)},r.onerror=function(){return n(r.statusText)},r.send()})},a=function(t){return new o.default(function(n,e){var r=PIXI.BaseTexture.fromImage(t);r.on("loaded",function(t){return n(t)}),r.on("error",function(t){return e(t)})})},f=function(t){var n=ysp.Spine.SETUP[t];i[t]||(i[t]={},c+=3,s(n.json).then(function(n){i[t].json=JSON.parse(n),c-=1}).catch(function(t){console.log(t)}),s(n.atlas).then(function(n){i[t].atlas=n,c-=1}).catch(function(t){console.log(t)}),a(n.texture).then(function(n){i[t].texture=n,c-=1}).catch(function(t){console.log("Couldn't load: "+n.texture)}))},l=function(t){ysp.Spine.SETUP[t];if(u[t])return u[t];if(!i[t])return void console.log("[Error] Spine '"+t+"' hasn't pre-loaded");var n=i[t].json,e=i[t].atlas,r=new PIXI.spine.core.TextureAtlas(e,function(n,e){e(i[t].texture)}),o=new PIXI.spine.core.AtlasAttachmentLoader(r),c=new PIXI.spine.core.SkeletonJson(o),s=c.readSkeletonData(n);return u[t]=s,u[t]},p=function(){return 0===c};n.default={loadAssets:f,loadSkeleton:l,isLoaded:p,raws:i,spines:u}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(18);t.exports.f=function(t){return new r(t)}},function(t,n,e){var r=e(5),o=e(18),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(17),c=e(82),s=e(35),a=e(19),f=e(0),l=f.process,p=f.setImmediate,v=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},x=function(t){_.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(12)(l)?r=function(t){l.nextTick(u(_,t,1))}:d&&d.now?r=function(t){d.now(u(_,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(54);t.exports=function(t,n){var e=r.f(t);return(0,e.resolve)(n),e.promise}},,,,,,,,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(68),i=r(o),u=e(73),c=r(u),s=e(53),a=r(s),f=e(89),l=r(f);window.ysp=window.ysp||{},(0,l.default)(Scene_Base);var p={spine:c.default,loader:a.default};window.ysp.Spine=(0,i.default)({},window.ysp.Spine,p)},function(t,n,e){t.exports={default:e(69),__esModule:!0}},function(t,n,e){e(70),t.exports=e(2).Object.assign},function(t,n,e){var r=e(14);r(r.S+r.F,"Object",{assign:e(71)})},function(t,n,e){"use strict";var r=e(25),o=e(72),i=e(52),u=e(36),c=e(24),s=Object.assign;t.exports=!s||e(15)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r})?function(t,n){for(var e=u(t),s=arguments.length,a=1,f=o.f,l=i.f;s>a;)for(var p,v=c(arguments[a++]),h=f?r(v).concat(f(v)):r(v),d=h.length,y=0;d>y;)l.call(v,p=h[y++])&&(e[p]=v[p]);return e}:s},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(53),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=function(t){var n=o.default.loadSkeleton(t),e=new PIXI.spine.Spine(n),r=ysp.Spine.SETUP[t];return e.update=function(t){t&&PIXI.spine.Spine.prototype.update.call(this,t)},r.initAnimation.autoplay&&e.state.setAnimation(0,r.initAnimation.name,r.initAnimation.loop),e.skeleton.setSkinByName(r.skin),e},u=function(t,n,e){t.state.setAnimation(0,n,e)},c=function(t,n){t.skeleton.setSkinByName(n)};n.default={newSpine:i,playAnimation:u,setSkinByName:c}},function(t,n,e){t.exports={default:e(75),__esModule:!0}},function(t,n,e){e(76),e(48),e(39),e(77),e(87),e(88),t.exports=e(2).Promise},function(t,n){},function(t,n,e){"use strict";var r,o,i,u,c=e(34),s=e(0),a=e(17),f=e(37),l=e(14),p=e(6),v=e(18),h=e(78),d=e(79),y=e(55),m=e(56).set,_=e(83)(),x=e(54),g=e(57),w=e(58),S=s.TypeError,b=s.process,P=s.Promise,j="process"==f(b),O=function(){},T=o=x.f,M=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(O,O)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof n}catch(t){}}(),L=c?function(t,n){return t===n||t===P&&n===u}:function(t,n){return t===n},k=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},E=function(t,n){if(!t._n){t._n=!0;var e=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,s=n.reject,a=n.domain;try{u?(o||(2==t._h&&R(t),t._h=1),!0===u?e=r:(a&&a.enter(),e=u(r),a&&a.exit()),e===n.promise?s(S("Promise-chain cycle")):(i=k(e))?i.call(e,c,s):c(e)):s(r)}catch(t){s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&A(t)})}},A=function(t){m.call(s,function(){var n,e,r,o=t._v,i=I(t);if(i&&(n=g(function(){j?b.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||I(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},I=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!I(n.promise))return!1;return!0},R=function(t){m.call(s,function(){var n;j?b.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},C=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),E(n,!0))},F=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw S("Promise can't be resolved itself");(n=k(t))?_(function(){var r={_w:e,_d:!1};try{n.call(t,a(F,r,1),a(C,r,1))}catch(t){C.call(r,t)}}):(e._v=t,e._s=1,E(e,!1))}catch(t){C.call({_w:e,_d:!1},t)}}};M||(P=function(t){h(this,P,"Promise","_h"),v(t),r.call(this);try{t(a(F,this,1),a(C,this,1))}catch(t){C.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(84)(P.prototype,{then:function(t,n){var e=T(y(this,P));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?b.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&E(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(F,t,1),this.reject=a(C,t,1)},x.f=T=function(t){return L(P,t)?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:P}),e(27)(P,"Promise"),e(85)("Promise"),u=e(2).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var n=T(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!M),"Promise",{resolve:function(t){return t instanceof P&&L(t.constructor,this)?t:w(this,t)}}),l(l.S+l.F*!(M&&e(86)(function(t){P.all(t).catch(O)})),"Promise",{all:function(t){var n=this,e=T(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,u=1;d(t,!1,function(t){var c=i++,s=!1;e.push(void 0),u++,n.resolve(t).then(function(t){s||(s=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=T(n),r=e.reject,o=g(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(17),o=e(80),i=e(81),u=e(5),c=e(26),s=e(50),a={},f={},n=t.exports=function(t,n,e,l,p){var v,h,d,y,m=p?function(){return t}:s(t),_=r(e,l,n?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>x;x++)if((y=n?_(u(h=t[x])[0],h[1]):_(t[x]))===a||y===f)return y}else for(d=m.call(t);!(h=d.next()).done;)if((y=o(d,_,h.value,n))===a||y===f)return y};n.BREAK=a,n.RETURN=f},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(9),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(56).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==e(12)(u);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(a)}}else e=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(3);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(10),u=e(4),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(14),o=e(2),i=e(0),u=e(55),c=e(58);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(14),o=e(54),i=e(57);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(53),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(t){var n=t.prototype.isReady;t.prototype.isReady=function(){return n.call(this)&&o.default.isLoaded()}}}]);
//# sourceMappingURL=YSP_Spine.js.map