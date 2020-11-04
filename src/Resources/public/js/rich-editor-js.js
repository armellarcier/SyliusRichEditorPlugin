!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/",i(i.s="ng4s")}({"2mad":function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},P50k:function(e,t,i){!function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},i="defaultParagraphSeparator",n="formatBlock",r=function(e,t,i){return e.addEventListener(t,i)},s=function(e,t){return e.appendChild(t)},o=function(e){return document.createElement(e)},a=function(e){return document.queryCommandState(e)},l=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(e,!1,t)},c={bold:{icon:"<b>B</b>",title:"Bold",state:function(){return a("bold")},result:function(){return l("bold")}},italic:{icon:"<i>I</i>",title:"Italic",state:function(){return a("italic")},result:function(){return l("italic")}},underline:{icon:"<u>U</u>",title:"Underline",state:function(){return a("underline")},result:function(){return l("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:function(){return a("strikeThrough")},result:function(){return l("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return l(n,"<h1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return l(n,"<h2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return l(n,"<p>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return l(n,"<blockquote>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return l("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return l("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return l(n,"<pre>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return l("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var e=window.prompt("Enter the link URL");e&&l("createLink",e)}},image:{icon:"&#128247;",title:"Image",result:function(){var e=window.prompt("Enter the image URL");e&&l("insertImage",e)}}},u={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},h=function(e){var a=e.actions?e.actions.map((function(e){return"string"==typeof e?c[e]:c[e.name]?t({},c[e.name],e):e})):Object.keys(c).map((function(e){return c[e]})),h=t({},u,e.classes),d=e[i]||"div",f=o("div");f.className=h.actionbar,s(e.element,f);var p=e.element.content=o("div");return p.contentEditable=!0,p.className=h.content,p.oninput=function(t){var i=t.target.firstChild;i&&3===i.nodeType?l(n,"<"+d+">"):"<br>"===p.innerHTML&&(p.innerHTML=""),e.onChange(p.innerHTML)},p.onkeydown=function(e){"Enter"===e.key&&"blockquote"===document.queryCommandValue("formatBlock")&&setTimeout((function(){return l(n,"<"+d+">")}),0)},s(e.element,p),a.forEach((function(e){var t=o("button");if(t.className=h.button,t.innerHTML=e.icon,t.title=e.title,t.setAttribute("type","button"),t.onclick=function(){return e.result()&&p.focus()},e.state){var i=function(){return t.classList[e.state()?"add":"remove"](h.selected)};r(p,"keyup",i),r(p,"mouseup",i),r(t,"click",i)}s(f,t)})),e.styleWithCSS&&l("styleWithCSS"),l(i,d),e.element},d={exec:l,init:h};e.exec=l,e.init=h,e.default=d,Object.defineProperty(e,"__esModule",{value:!0})}(t)},W4wD:function(e,t,i){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){return"function"==typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(e,t){return null!=e&&"object"==typeof e&&t in e}var s=RegExp.prototype.test,o=/\S/;function a(e){return!function(e,t){return s.call(e,t)}(o,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},c=/\s*/,u=/\s+/,h=/\s*=/,d=/\s*\}/,f=/#|\^|\/|>|\{|&|=|!/;function p(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function g(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.eos=function(){return""===this.tail},p.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var i=t[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},p.prototype.scanUntil=function(e){var t,i=this.tail.search(e);switch(i){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=t.length,t},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t,n,s,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var a,l,c,u=this,h=!1;u;){if(e.indexOf(".")>0)for(a=u.view,l=e.split("."),c=0;null!=a&&c<l.length;)c===l.length-1&&(h=r(a,l[c])||(n=a,s=l[c],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(s))),a=a[l[c++]];else a=u.view[e],h=r(u.view,e);if(h){t=a;break}u=u.parent}o[e]=t}return i(t)&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},g.prototype.parse=function(e,i){var r=this.templateCache,s=e+":"+(i||v.tags).join(":"),o=void 0!==r,l=o?r.get(s):void 0;return null==l&&(l=function(e,i){if(!e)return[];var r,s,o,l=!1,m=[],g=[],y=[],b=!1,E=!1,w="",k=0;function S(){if(b&&!E)for(;y.length;)delete g[y.pop()];else y=[];b=!1,E=!1}function T(e){if("string"==typeof e&&(e=e.split(u,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(n(e[0])+"\\s*"),s=new RegExp("\\s*"+n(e[1])),o=new RegExp("\\s*"+n("}"+e[1]))}T(i||v.tags);for(var C,L,A,U,q,O,j=new p(e);!j.eos();){if(C=j.pos,A=j.scanUntil(r))for(var P=0,H=A.length;P<H;++P)a(U=A.charAt(P))?(y.push(g.length),w+=U):(E=!0,l=!0,w+=" "),g.push(["text",U,C,C+1]),C+=1,"\n"===U&&(S(),w="",k=0,l=!1);if(!j.scan(r))break;if(b=!0,L=j.scan(f)||"name",j.scan(c),"="===L?(A=j.scanUntil(h),j.scan(h),j.scanUntil(s)):"{"===L?(A=j.scanUntil(o),j.scan(d),j.scanUntil(s),L="&"):A=j.scanUntil(s),!j.scan(s))throw new Error("Unclosed tag at "+j.pos);if(q=">"==L?[L,A,C,j.pos,w,k,l]:[L,A,C,j.pos],k++,g.push(q),"#"===L||"^"===L)m.push(q);else if("/"===L){if(!(O=m.pop()))throw new Error('Unopened section "'+A+'" at '+C);if(O[1]!==A)throw new Error('Unclosed section "'+O[1]+'" at '+C)}else"name"===L||"{"===L||"&"===L?E=!0:"="===L&&T(A)}if(S(),O=m.pop())throw new Error('Unclosed section "'+O[1]+'" at '+j.pos);return function(e){for(var t,i=[],n=i,r=[],s=0,o=e.length;s<o;++s)switch((t=e[s])[0]){case"#":case"^":n.push(t),r.push(t),n=t[4]=[];break;case"/":r.pop()[5]=t[2],n=r.length>0?r[r.length-1][4]:i;break;default:n.push(t)}return i}(function(e){for(var t,i,n=[],r=0,s=e.length;r<s;++r)(t=e[r])&&("text"===t[0]&&i&&"text"===i[0]?(i[1]+=t[1],i[3]=t[3]):(n.push(t),i=t));return n}(g))}(e,i),o&&r.set(s,l)),l},g.prototype.render=function(e,t,i,n){var r=this.parse(e,n),s=t instanceof m?t:new m(t,void 0);return this.renderTokens(r,s,i,e,n)},g.prototype.renderTokens=function(e,t,i,n,r){for(var s,o,a,l="",c=0,u=e.length;c<u;++c)a=void 0,"#"===(o=(s=e[c])[0])?a=this.renderSection(s,t,i,n):"^"===o?a=this.renderInverted(s,t,i,n):">"===o?a=this.renderPartial(s,t,i,r):"&"===o?a=this.unescapedValue(s,t):"name"===o?a=this.escapedValue(s,t):"text"===o&&(a=this.rawValue(s)),void 0!==a&&(l+=a);return l},g.prototype.renderSection=function(e,n,r,s){var o=this,a="",l=n.lookup(e[1]);if(l){if(t(l))for(var c=0,u=l.length;c<u;++c)a+=this.renderTokens(e[4],n.push(l[c]),r,s);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)a+=this.renderTokens(e[4],n.push(l),r,s);else if(i(l)){if("string"!=typeof s)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(n.view,s.slice(e[3],e[5]),(function(e){return o.render(e,n,r)})))&&(a+=l)}else a+=this.renderTokens(e[4],n,r,s);return a}},g.prototype.renderInverted=function(e,i,n,r){var s=i.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],i,n,r)},g.prototype.indentPartial=function(e,t,i){for(var n=t.replace(/[^ \t]/g,""),r=e.split("\n"),s=0;s<r.length;s++)r[s].length&&(s>0||!i)&&(r[s]=n+r[s]);return r.join("\n")},g.prototype.renderPartial=function(e,t,n,r){if(n){var s=i(n)?n(e[1]):n[e[1]];if(null!=s){var o=e[6],a=e[5],l=e[4],c=s;return 0==a&&l&&(c=this.indentPartial(s,l,o)),this.renderTokens(this.parse(c,r),t,n,c,r)}}},g.prototype.unescapedValue=function(e,t){var i=t.lookup(e[1]);if(null!=i)return i},g.prototype.escapedValue=function(e,t){var i=t.lookup(e[1]);if(null!=i)return v.escape(i)},g.prototype.rawValue=function(e){return e[1]};var v={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){y.templateCache=e},get templateCache(){return y.templateCache}},y=new g;return v.clearCache=function(){return y.clearCache()},v.parse=function(e,t){return y.parse(e,t)},v.render=function(e,i,n,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(s=e)?"array":typeof s)+'" was given as the first argument for mustache#render(template, view, partials)');var s;return y.render(e,i,n,r)},v.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return l[e]}))},v.Scanner=p,v.Context=m,v.Writer=g,v}()},mf8f:function(e,t,i){"use strict";var n={documentSelector:".js-document",documentDisabledClass:"is-disabled",openingTriggerActiveClass:"is-active",delay:200},r=['[href]:not([tabindex^="-"])','input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])','input[type="radio"]:checked','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])','[contenteditable="true"]:not([tabindex^="-"])'],s="Escape",o="Tab",a="F6";function l(e,t){let i=e;for(;i!==t&&i;)i=i.parentNode;return!!i}const c=Symbol("onClick"),u=Symbol("onKeydown"),h=Symbol("addEventDelegation"),d=Symbol("addEventListeners"),f=Symbol("removeEventListeners"),p=Symbol("addAttributes"),m=Symbol("removeAttributes"),g=Symbol("setAttributes"),v=Symbol("setFocusableElements"),y=Symbol("setFocus"),b=Symbol("restoreFocus"),E=Symbol("switchFocus"),w=Symbol("maintainFocus"),k=Symbol("addObserver"),S=Symbol("removeObserver");let T=n;t.a=class{constructor(e,{onOpen:t=(()=>{}),onClose:i=(()=>{}),openingSelector:n,closingSelector:r,backdropSelector:s,helperSelector:o,labelledby:a,describedby:l,isModal:d=!0,isTooltip:f=!1,isOpen:p=!1,isCreated:m=!0,disableScroll:g=!0,enableAutoFocus:y=!0,openingTriggerActiveClass:b=T.openingTriggerActiveClass,delay:w=T.delay}={}){document.querySelector(e)?(this.config={dialogSelector:e,onOpen:t,onClose:i,openingSelector:n,closingSelector:r,backdropSelector:s,helperSelector:o,labelledby:a,describedby:l,isModal:d,isTooltip:f,isCreated:m,isOpen:p,disableScroll:g,enableAutoFocus:y,documentSelector:T.documentSelector,documentDisabledClass:T.documentDisabledClass,openingTriggerActiveClass:b,delay:w},this.dialog=document.querySelector(e),this.dialogArea=`${e}, ${n}`,this.openingTriggers=document.querySelectorAll(n),this.backdropTrigger=document.querySelector(s),this.helpers=document.querySelectorAll(o),this.document=document.querySelector(this.config.documentSelector)||document.querySelector("html"),this.documentIsAlreadyDisabled=!1,this.focusableElements=[],this.firstFocusableElement=null,this.lastFocusableElement=null,this.openingTrigger=null,this.closingTrigger=null,this.isCreated=!1,this.isOpen=!1,this.close=this.close.bind(this),this.toggle=this.toggle.bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[h]=this[h].bind(this),this[E]=this[E].bind(this),this.observer=new MutationObserver(e=>e.forEach(()=>this[v]())),this.isInitialized=!0,m&&this.create()):this.isInitialized=!1}[c](e){this.config.isTooltip&&!e.target.closest(this.dialogArea)&&this.close(e),e.target===this.backdropTrigger&&this.close(e)}[u](e){switch(e.key){case s:e.stopPropagation(),this.close(e);break;case a:this.config.isModal||(this.config.isTooltip?this.close(e):this[b]());break;case o:this[w](e)}}[h](e){document.querySelectorAll(this.config.openingSelector).forEach(t=>{l(e.target,t)&&(this.openingTrigger=t,this.toggle(e))}),document.querySelectorAll(this.config.closingSelector).forEach(t=>{l(e.target,t)&&(this.closingTrigger=t,this.close())})}[d](){document.addEventListener("click",this[c],{capture:!0}),this.dialog.addEventListener("keydown",this[u])}[f](){document.removeEventListener("click",this[c],{capture:!0}),this.dialog.removeEventListener("keydown",this[u]),this.openingTrigger&&this.openingTrigger.removeEventListener("keydown",this[E])}[p](){this.dialog.setAttribute("role","dialog"),this.dialog.setAttribute("tabindex",-1),this.dialog.setAttribute("aria-hidden",!0),this.config.labelledby&&this.dialog.setAttribute("aria-labelledby",this.config.labelledby),this.config.describedby&&this.dialog.setAttribute("aria-describedby",this.config.describedby),this.config.isModal&&this.dialog.setAttribute("aria-modal",!0),this.openingTriggers.forEach(e=>e.setAttribute("aria-haspopup","dialog"))}[m](){this.dialog.removeAttribute("role"),this.dialog.removeAttribute("tabindex"),this.dialog.removeAttribute("aria-hidden"),this.dialog.removeAttribute("aria-labelledby"),this.dialog.removeAttribute("aria-describedby"),this.dialog.removeAttribute("aria-modal"),this.config.disableScroll&&this.isOpen&&!this.documentIsAlreadyDisabled&&this.document.classList.remove(this.config.documentDisabledClass),this.openingTriggers.forEach(e=>e.removeAttribute("aria-haspopup")),this.openingTrigger&&this.openingTrigger.classList.remove(this.config.openingTriggerActiveClass),this.helpers.forEach(e=>e.classList.remove(this.config.openingTriggerActiveClass))}[g](){this.dialog.setAttribute("aria-hidden",!this.isOpen),this.config.disableScroll&&!this.documentIsAlreadyDisabled&&(this.isOpen?this.document.classList.add(this.config.documentDisabledClass):this.document.classList.remove(this.config.documentDisabledClass)),this.openingTrigger&&(this.isOpen?this.openingTrigger.classList.add(this.config.openingTriggerActiveClass):this.openingTrigger.classList.remove(this.config.openingTriggerActiveClass)),this.helpers.forEach(e=>{this.isOpen?e.classList.add(this.config.openingTriggerActiveClass):e.classList.remove(this.config.openingTriggerActiveClass)})}[v](){const e=function(e){const t=[];return e.forEach(e=>{const i=e.getBoundingClientRect();(i.width>0||i.height>0)&&t.push(e)}),t}(this.dialog.querySelectorAll(r)),t=function(e,t,i){const n=e.querySelectorAll(t),r=[];let s=!1;return 0===n.length?i:(i.forEach(e=>{n.forEach(t=>{t.contains(e)&&(s=!0)}),s||r.push(e),s=!1}),r)}(this.dialog,'[role="dialog"]',e);this.focusableElements=t.length>0?t:[this.dialog],[this.firstFocusableElement]=this.focusableElements,this.lastFocusableElement=this.focusableElements[this.focusableElements.length-1]}[y](){this.config.enableAutoFocus&&window.setTimeout(()=>this.firstFocusableElement.focus(),this.config.delay)}[b](){this.config.enableAutoFocus&&window.setTimeout(()=>this.openingTrigger.focus(),this.config.delay),this.isOpen&&this.openingTrigger.addEventListener("keydown",this[E])}[E](e){e.key===a&&(this.openingTrigger.removeEventListener("keydown",this[E]),this[y]())}[w](e){e.shiftKey&&e.target===this.firstFocusableElement&&(e.preventDefault(),this.lastFocusableElement.focus()),e.shiftKey||e.target!==this.lastFocusableElement||(e.preventDefault(),this.firstFocusableElement.focus())}[k](){this.observer.observe(this.dialog,{childList:!0,attributes:!0,subtree:!0})}[S](){this.observer.disconnect()}open(){this.isInitialized&&this.isCreated&&!this.isOpen&&(this.isOpen=!0,this.documentIsAlreadyDisabled=this.document.classList.contains(this.config.documentDisabledClass),this[g](),this[d](),this[y](),this.config.onOpen(this.dialog,this.openingTrigger))}close(e){this.isInitialized&&this.isCreated&&this.isOpen&&(this.isOpen=!1,e&&e.preventDefault(),this[g](),this[f](),this.openingTrigger&&(!this.config.isTooltip||this.config.isTooltip&&e&&"click"!==e.type)&&this[b](),this.config.onClose(this.dialog,this.closingTrigger))}toggle(e){this.isInitialized&&this.isCreated&&(e&&e.preventDefault(),this.isOpen?this.close():this.open())}create(){this.isInitialized&&!this.isCreated&&(this.isCreated=!0,this[p](),this[v](),this[k](),this.config.isOpen&&this.open(),document.addEventListener("click",this[h],{capture:!0}))}destroy(){this.isInitialized&&this.isCreated&&(this.close(),this.isCreated=!1,this[m](),this[f](),this[S](),document.removeEventListener("click",this[h],{capture:!0}))}}},ng4s:function(e,t,i){"use strict";i.r(t),function(e){var t=i("P50k"),n=i.n(t),r=i("mf8f"),s=i("W4wD"),o=i.n(s);function a(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,a=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){a=!0,s=e},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw s}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,i){return t&&u(e.prototype,t),i&&u(e,i),e}e.MonsieurBizRichEditorWysiwyg=function(){function e(t){c(this,e),this.config=t}return h(e,[{key:"load",value:function(e){var t,i=a(e.querySelectorAll("textarea.wysiwyg-enabled"));try{for(i.s();!(t=i.n()).done;){var n=t.value;this.setupEditor(n)}}catch(e){i.e(e)}finally{i.f()}}},{key:"setupEditor",value:function(e){e.setAttribute("hidden","true");var t=document.createElement("div");t.classList.add("pell"),e.parentNode.appendChild(t);var i=n.a.init({element:t,onChange:function(t){e.textContent=t},defaultParagraphSeparator:"p",actions:this.config.actions}),r=e.value;i.content.innerHTML=r}}]),e}(),e.MonsieurBizRichEditorConfig=function(){function e(t,i,n,r,s,o,a,l,u,h,d){c(this,e),this.input=t,this.uielements=i,this.wysiwyg=n,this.containerHtml=r,this.buttonAddHtml=s,this.elementHtml=o,this.elementCardHtml=a,this.deletionConfirmation=l,this.createElementFormUrl=u,this.editElementFormUrl=h,this.renderElementsUrl=d}return h(e,[{key:"findUiElementByCode",value:function(e){return void 0===this.uielements[e]?null:this.uielements[e]}}]),e}(),e.MonsieurBizRichEditorUiElement=function(){function e(t,i,n,r){c(this,e),this.config=t,this.code=i,this.data=n,this.previewHtml=r}return h(e,[{key:"toJSON",value:function(){return{code:this.code,data:this.data}}},{key:"edit",value:function(){this.manager.editUiElement(this)}},{key:"up",value:function(){this.manager.moveUp(this)}},{key:"down",value:function(){this.manager.moveDown(this)}},{key:"delete",value:function(){this.manager.delete(this)}},{key:"uielement",get:function(){return this.config.findUiElementByCode(this.code)}},{key:"title",get:function(){return this.uielement.title}},{key:"description",get:function(){return this.uielement.description}},{key:"icon",get:function(){return this.uielement.icon}},{key:"manager",get:function(){return this.config.input.manager}}]),e}(),e.MonsieurBizRichEditorManager=function(){function e(t){c(this,e),this.config=t;var i=this.input.value.trim(),n=function(){this.initInterface()}.bind(this);if(""!==i)try{this.initUiElements(JSON.parse(i),n)}catch(e){console.log(e);try{this.initUiElements([{code:"monsieurbiz.html",data:{content:i}}],n)}catch(e){this.uiElements=[]}}else this.uiElements=[],this.initInterface()}return h(e,[{key:"initUiElements",value:function(e,t){this.uiElements=[],this.requestUiElementsHtml(e,(function(){200===this.status&&(JSON.parse(this.responseText).forEach(function(t,i){var n=e[i];void 0===n.code&&void 0!==n.type&&(n.code=n.type,n.data=n.fields,delete n.type,delete n.fields);var r=this.config.findUiElementByCode(n.code);null!==r&&this.uiElements.push(new MonsieurBizRichEditorUiElement(this.config,r.code,n.data,t))}.bind(this.manager)),t())}))}},{key:"initInterface",value:function(){this.initUiElementsInterface(),this.initUiPanelsInterface()}},{key:"initUiPanelsInterface",value:function(){this.selectionPanel=new r.a(".js-uie-panels",{backdropSelector:".js-uie-panels",labelledby:"uie-heading",enableAutoFocus:!1}),this.newPanel=new r.a(".js-uie-panels-new",{backdropSelector:".js-uie-panels-new",helperSelector:".js-uie-panels-selector",enableAutoFocus:!1}),this.editPanel=new r.a(".js-uie-panels-edit",{backdropSelector:".js-uie-panels-edit",enableAutoFocus:!1})}},{key:"initUiElementsInterface",value:function(){this.input.type="hidden";var e=document.createElement("div");e.innerHTML=o.a.render(this.config.containerHtml,{}),this.container=e.firstElementChild,this.input.after(this.container),this.write()}},{key:"drawUiElements",value:function(){var e=this.container.querySelector(".js-uie-container");e.innerHTML="",this.uiElements.forEach(function(t,i){e.append(this.getNewButton(i)),e.append(this.getUiElement(t,i))}.bind(this)),e.append(this.getNewButton(this.uiElements.length))}},{key:"getNewButton",value:function(e){var t=document.createElement("div");t.innerHTML=o.a.render(this.config.buttonAddHtml,{position:e});var i=t.firstElementChild;return i.querySelector(".js-uie-add").position=e,i.querySelector(".js-uie-add").manager=this,i.querySelector(".js-uie-add").addEventListener("click",(function(e){i.querySelector(".js-uie-add").manager.openSelectionPanel(i.querySelector(".js-uie-add").position)})),i}},{key:"getUiElement",value:function(e,t){var i=document.createElement("div");i.innerHTML=o.a.render(this.config.elementHtml,{title:e.title,icon:e.icon,preview:e.previewHtml});var n=i.firstElementChild;return n.element=e,n.position=t,n.querySelector(".js-uie-delete").addEventListener("click",(function(){confirm(this.closest(".js-uie-element").element.config.deletionConfirmation)&&this.closest(".js-uie-element").element.delete()})),0===t?n.querySelector(".js-uie-up").remove():n.querySelector(".js-uie-up").addEventListener("click",(function(){this.closest(".js-uie-element").element.up()})),t===this.uiElements.length-1?n.querySelector(".js-uie-down").remove():n.querySelector(".js-uie-down").addEventListener("click",(function(){this.closest(".js-uie-element").element.down()})),n.querySelector(".js-uie-edit").addEventListener("click",(function(){this.closest(".js-uie-element").element.edit()})),n}},{key:"getNewUiElementCard",value:function(e,t){var i=document.createElement("div");i.innerHTML=o.a.render(this.config.elementCardHtml,e);var n=i.firstElementChild;return n.element=e,n.position=t,n.manager=this,n.addEventListener("click",(function(e){var t=e.currentTarget;t.manager.loadUiElementCreateForm(t.element,(function(e){if(200===this.status){var i=JSON.parse(this.responseText);t.manager.openNewPanel(i.form_html,t.element,t.position)}}))})),n}},{key:"openSelectionPanel",value:function(e){this.selectionPanel.dialog.manager=this,this.selectionPanel.dialog.position=e;var t=this.selectionPanel.dialog.querySelector(".js-uie-cards-container");for(var i in t.innerHTML="",this.config.uielements)this.config.uielements[i].ignored||t.append(this.getNewUiElementCard(this.config.uielements[i],e));this.newPanel.close(),this.selectionPanel.open()}},{key:"drawNewForm",value:function(e,t){var i=document.createElement("div");i.innerHTML=e,this.newPanel.dialog.innerHTML="",this.newPanel.dialog.append(i),this.wysiwyg.load(i),this.initUiCollectionForm(i);var n=i.querySelector("form");n.manager=this,n.position=t,n.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget;return t.manager.submitUiElementForm(t,(function(){if(200===this.status){var e=JSON.parse(this.responseText);e.error?this.form.manager.drawNewForm(e.form_html,this.form.position):(this.form.manager.create(e.code,e.data,e.previewHtml,this.form.position),this.form.manager.newPanel.close(),this.form.manager.selectionPanel.close())}})),!1}));var r=i.querySelector(".js-uie-cancel");r.panel=this.newPanel,r.addEventListener("click",(function(e){e.currentTarget.panel.close()}));var s=i.querySelector(".js-uie-save");s.panel=this.newPanel,s.addEventListener("click",(function(e){e.currentTarget.panel.dialog.querySelector("form").dispatchEvent(new Event("submit",{cancelable:!0}))}))}},{key:"openNewPanel",value:function(e,t,i){this.newPanel.dialog.manager=this,this.newPanel.dialog.position=i,this.drawNewForm(e,i),this.newPanel.open()}},{key:"editUiElement",value:function(e){this.loadUiElementEditForm(e,(function(t){if(200===this.status){var i=JSON.parse(this.responseText);e.manager.openEditPanel(i.form_html,e)}}))}},{key:"drawEditForm",value:function(e,t){var i=document.createElement("div");i.innerHTML=e;var n=this.editPanel.dialog.querySelector(".js-uie-content");n.innerHTML="",n.append(i),this.wysiwyg.load(i),this.initUiCollectionForm(i);var r=i.querySelector("form");r.manager=this,r.uiElement=t,r.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget;return t.manager.submitUiElementForm(t,(function(){if(200===this.status){var e=JSON.parse(this.responseText);e.error?this.form.manager.drawEditForm(e.form_html,this.form.uiElement):(this.form.uiElement.data=e.data,this.form.uiElement.previewHtml=e.previewHtml,this.form.manager.write(),this.form.manager.editPanel.close())}})),!1}));var s=i.querySelector(".js-uie-cancel");s.panel=this.editPanel,s.addEventListener("click",(function(e){e.currentTarget.panel.close()}));var o=i.querySelector(".js-uie-save");o.panel=this.editPanel,o.addEventListener("click",(function(e){e.currentTarget.panel.dialog.querySelector("form").dispatchEvent(new Event("submit",{cancelable:!0}))}))}},{key:"openEditPanel",value:function(e,t){this.editPanel.dialog.manager=this,this.editPanel.dialog.uiElement=t,this.drawEditForm(e,t),this.editPanel.open()}},{key:"write",value:function(){this.input.value=JSON.stringify(this.uiElements),this.drawUiElements()}},{key:"create",value:function(e,t,i,n){var r=new MonsieurBizRichEditorUiElement(this.config,e,t,i);return this.uiElements.splice(n,0,r),this.write(),r}},{key:"moveUp",value:function(e){var t=this.uiElements.indexOf(e);0!==t&&(this.uiElements.splice(t,1),this.uiElements.splice(t-1,0,e),this.write())}},{key:"moveDown",value:function(e){var t=this.uiElements.indexOf(e);t!==this.uiElements.length-1&&(this.uiElements.splice(t,1),this.uiElements.splice(t+1,0,e),this.write())}},{key:"delete",value:function(e){var t=this.uiElements.indexOf(e);this.uiElements.splice(t,1),this.write()}},{key:"loadUiElementCreateForm",value:function(e,t){var i=new XMLHttpRequest;i.onload=t;var n=this.config.createElementFormUrl;i.open("get",n.replace("__CODE__",e.code),!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send()}},{key:"loadUiElementEditForm",value:function(e,t){var i=new XMLHttpRequest;i.onload=t;var n=this.config.editElementFormUrl;i.open("post",n.replace("__CODE__",e.code),!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(new URLSearchParams({data:JSON.stringify(e.data)}).toString())}},{key:"submitUiElementForm",value:function(e,t){var i=new XMLHttpRequest;i.onload=t,i.form=e,i.open("post",e.action,!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(new FormData(e))}},{key:"requestUiElementsHtml",value:function(e,t){var i=new XMLHttpRequest;i.onload=t,i.open("post",this.config.renderElementsUrl,!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest");var n=new FormData;n.append("ui_elements",JSON.stringify(e)),i.uiElements=e,i.manager=this,i.send(n)}},{key:"initUiCollectionForm",value:function(e){document.dispatchEvent(new CustomEvent("monsieurBizRichEditorInitUiCollectionForm",{detail:{form:e}}))}},{key:"input",get:function(){return this.config.input}},{key:"wysiwyg",get:function(){return this.config.wysiwyg}}]),e}()}.call(this,i("2mad"))}});