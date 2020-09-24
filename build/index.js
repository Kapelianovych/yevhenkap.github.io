"use strict";var e="home-module_home-content__3iyjs",t="home-module_logo__1Bv_I",n="home-module_description__LzC3X",a="home-module_get-started-btn__2SC4O";function o(e){console.warn(e)}void 0===window.trustedTypes&&(window.trustedTypes={createPolicy:(e,t)=>t});const s=window.trustedTypes.createPolicy("edelweiss",{createHTML:e=>e});let i="/public/styles/";function r(e){return null==e}class c{constructor(e,t){this._value=e,this._type=t}static just(e){return new c(e,"Just")}static nothing(){return new c(null,"Nothing")}static maybeOf(e){const t=function(e){return e instanceof c}(e)?e.extract():e;return r(t)?c.nothing():c.just(t)}isJust(){return"Just"===this._type}isNothing(){return"Nothing"===this._type}map(e){return this.isJust()?c.maybeOf(e(this._value)):c.nothing()}apply(e){return e.isNothing()?c.nothing():this.map(e.extract())}chain(e){return this.isJust()?e(this._value):c.nothing()}extract(){return this._value}}const{just:l,nothing:d,maybeOf:u}=c;function g(...e){return Object.freeze(e)}function m(...e){return Object.freeze(e.map(e=>Array.from(e)).reduce((e,t)=>e.concat(t),[]))}function h(e){return e instanceof Error?Promise.reject(e):Promise.resolve(e)}function p(...e){return(...t)=>{let n=d();for(const a of e){if(n.isJust()&&!Object.is(n.extract(),NaN))return n;n=u(a(...t))}return n}}class b{constructor(e){this._value=e}static wrap(e){const t=function(e){return e instanceof b}(e)?e.extract():e;return new b(t)}map(e){return b.wrap(e(this._value))}apply(e){return this.map(e.extract())}chain(e){return e(this._value)}extract(){return this._value}}const{wrap:f}=b;function C(e){u(e).map(e=>e.remove())}function E(e,...t){u(e).map(e=>e.append(...t))}function v(e,...t){u(e).map(e=>e.replaceWith(...t))}function y(e,t,n){u(e).map(e=>e.setAttribute(t,n))}function w(e,t){return u(e).map(e=>e.getAttribute(t))}function _(e,t){return u(e).map(e=>e.hasAttribute(t)).extract()}function x(e,t=document){return u(t).map(t=>t.querySelector(e))}function N(e,t){_(e,t)&&u(e).map(e=>e.removeAttribute(t))}function M(e,t,n,a={}){return u(e).map(e=>(e.addEventListener(t,n,a.add),e)).map(e=>()=>function(e,t,n,a){u(e).map(e=>e.removeEventListener(t,n,a))}(e,t,n,a.remove))}function k(e){return`${class{static get cssRootFolder(){return i}static set cssRootFolder(e){i=e}}.cssRootFolder}${e}${/.+\.css$/.test(e)?"":".css"}`}function D(e){p(()=>x(`link[href="${k(e)}"]`,document.head).extract(),()=>(E(document.head,f(document.createElement("link",void 0)).map(e=>(y(e,"rel","stylesheet"),e)).map(t=>(y(t,"href",k(e)),t)).extract()),null))()}function O(e){x(`link[href="${k(e)}"]`,document.head).map(C)}class R{styles(){return""}beforeBuild(){}template(){return""}afterBuild(){}async _createNodes(){const e=this.styles();e.length>0&&(Array.isArray(e)?e.forEach(D):D(e)),await h(this.beforeBuild());const t=await h(this.template());return await h(this.afterBuild()),t}}function $(){return""+window.crypto.getRandomValues(new Uint32Array(1))[0]}const A=/@([\w-]+)=['"]?$/,S=/^eventId[\d]{1,}$/,F=/<([\w-]+)\s*(:[\w]+)?\s*=$/,T=/\?([\w-]+)=['"]?$/,I=/:(mounted|rendered|updated|removed)=$/,L=new Map;var B;!function(e){e.Mounted="mounted",e.Rendered="rendered",e.Updated="updated",e.Removed="removed"}(B||(B={}));const z=function e(t,n=!1){return n&&Object.getOwnPropertyNames(t).forEach(n=>{const a=t[n];"object"!=typeof a&&"function"!=typeof a||e(a)}),Object.freeze(t)}({[B.Mounted]:new Map,[B.Rendered]:new Map,[B.Updated]:new Map,[B.Removed]:new Map});async function P(e,...t){return e.reduce((e,n,a)=>r(t[a])?e.then(e=>e+n):l(t[a]).map(h).map(e=>e.then(e=>j(e))).map(e=>e.then(e=>Array.isArray(e)?Promise.all(e.map(e=>j(e))).then(e=>e.join("")):e)).map(t=>e.then(e=>function(e,t,n){return e.then(e=>{const a=A.exec(t);if(!r(a))return u(a).map(a=>{if("function"!=typeof e&&!e.handleEvent)throw new Error(`Event listener must be type of "function" or object with\n      "handleEvent" method, but given "${typeof e}".`);const o=$();return L.set(o,{[a[1]]:e}),t.replace(a[0],`data-event-id${n}="${o}"`)}).extract();const s=T.exec(t);if(!r(s))return l(s).map(n=>t.replace(n[0],e?n[1]:"")).extract();const i=I.exec(t);if(!r(i)){const n=$(),a=i[1];return z[a].set(n,e),t.replace(I,`data-${a}-hook-id="${n}"`)}const c=F.exec(t);return r(c)?t+e:l(c).map(n=>Element.isPrototypeOf(e)?(function(e,t){const n=e[1];if(!n||"string"!=typeof n)return o(`tag name for custom element must be provided and be type of "string"!\n    Tag: ${n}\n    Constructor: ${t.toString()}`);const a=r(e[2])?void 0:e[2].slice(1);p(()=>customElements.get(n),()=>customElements.define(n,t,r(a)?void 0:{extends:a}))()}(n,e),t.replace(F,("<"+n[1]).replace(/^<-(.+)-$/,"<$1"))):(o(`You must pass a class constructor to custom element ${n[1]}. But given ->"${e}"`),"")).extract()})}(t,n,a).then(t=>e+t))).extract(),h(""))}function j(e){return e instanceof R?e._createNodes():e}const H=new Set,U=new Set;function G(e){return e.nodeType===Node.TEXT_NODE}function K(e){J(e,B.Mounted),m(e.childNodes).forEach(K)}function q(e){setTimeout(()=>J(e,B.Rendered),0),m(e.childNodes).forEach(q)}function Z(e){J(e,B.Updated)}function W(e){J(e,B.Removed),m(e.childNodes).forEach(W)}function J(e,t){e.nodeType===Node.ELEMENT_NODE&&w(e,`data-${t}-hook-id`).map(e=>g(e,u(z[t].get(e)))).map(([n,a])=>a.map(a=>h(a(e)).then(()=>z[t].delete(n))))}const Y=[];function X(e){e instanceof HTMLElement&&(Object.entries(e.dataset).filter(([e,t])=>S.test(e)).map(([t,n])=>(u(n).map(e=>L.get(e)).map(Object.entries).map(([t])=>M(e,t[0],t[1]).map(Y.push.bind(Y))),t)).map(e=>u(/(\d+)$/.exec(e)).map(e=>e[1])).forEach(t=>t.map(t=>N(e,"data-event-id"+t))),e.childElementCount>0&&m(e.children).forEach(X))}function Q(e,t){return x(e).map(e=>g(e,function(e,t=!1){return u(e).map(e=>e.cloneNode(t))}(e).extract())).map(([e,n])=>async function e(t){return Array.isArray(t)?t.reduce((t,n)=>t.then(t=>e(n).then(e=>t+e)),h("")):t instanceof R?t._createNodes():t}(t).then(e=>(n.innerHTML=s.createHTML(e),n)).then(e=>(H.forEach(D),U.forEach(O),H.clear(),U.clear(),e)).then(t=>function e(t,n){if(t.nodeType===n.nodeType)if(t.tagName===n.tagName)if(function(e,t){let n=!1;return e.attributes.length!==t.attributes.length&&m(e.attributes).forEach(({name:a})=>{_(t,a)||(N(e,a),n=!0)}),m(t.attributes).forEach(({name:t,value:a})=>{w(e,t).extract()!==a&&(y(e,t,a),n=!0)}),n}(t,n)&&Z(t),n.hasChildNodes()){const a=m(t.childNodes),o=m(n.childNodes);for(let n=0;n<Math.max(o.length,a.length);n++){const s=a[n],i=o[n];r(i)?r(s)||(C(s),W(s)):r(s)?(E(t,i),K(i),q(i)):G(i)&&G(s)?s.textContent!==i.textContent&&(s.textContent=i.textContent,Z(t)):e(s,i)}}else t.hasChildNodes()&&(v(t,n),K(n),q(n),W(t));else v(t,n),K(n),q(n),W(t);else v(t,n),K(n),q(n),W(t)}(e,t)).then(()=>Y.forEach(e=>e())).then(()=>Y.length=0).then(()=>m(e.children).forEach(X)).then(()=>L.clear())).extract()}const V=new Map;let ee={path:"",container:"",view:()=>""},te="";class ne{static get current(){return ee}static get container(){return te}static set container(e){te=e}static add(e){Array.isArray(e)?e.forEach(e=>V.set(e.path,e)):V.set(e.path,e)}static to(e,t={}){if(0===V.size)return o(`You cannot navigate to ${e} because you didn't define any routes!\n      At first call "Router.add(...)".`),h(void 0);let n;return m(V.entries()).forEach(([a,o])=>{const s="string"==typeof a?new RegExp(function(e){let t=e;return/[^\\]\//g.test(e)&&(t=t.split("/").join("\\/")),t.startsWith("^")||(t="^"+t),t.endsWith("$")||(t+="$"),t}(a)):a;s.test(e)&&(n=u(o.container||te).chain(n=>x(n).map(async()=>{ee=Object.assign(Object.assign({},o),{parameters:s.exec(e)}),r(o.before)||await h(o.before()),await Q(n,o.view()),(r(t.willStateChange)||t.willStateChange)&&window.history.pushState({path:e,container:n},"",e),r(o.after)||await h(o.after())})).extract())}),r(n)?(o(`No route is specified for path: ${e}!`),h(void 0)):n}static reload(){const{container:e,view:t,after:n,before:a}=ee;return u(e||te).map(async e=>{r(a)||await h(a()),await Q(e,t()),r(n)||await h(n())}).extract()}static back(){window.history.back()}static forward(){window.history.forward()}}M(window,"popstate",e=>{r(e.state)||ne.to(e.state.path,{willStateChange:!1})});var ae="docs-module_doc-page__dI202",oe="docs-module_doc-content__2b9d5",se="docs-module_opened__JHHx0";const ie=function(e){return new Proxy(e,{set(e,t,n,a){const o=Reflect.set(e,t,n,a);return o&&ne.reload(),o},deleteProperty(e,t){if(t in e){const n=Reflect.deleteProperty(e,t);return n&&ne.reload(),n}return!1}})}({isSidebarOpened:!1,activeButtonId:"start"});var re=Object.freeze({UI:ie}),ce="icon-module_icon__1lqVa",le={home:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M506.555%2C208.064L263.859%2C30.367c-4.68-3.426-11.038-3.426-15.716%2C0L5.445%2C208.064%20%20%20c-5.928%2C4.341-7.216%2C12.665-2.875%2C18.593s12.666%2C7.214%2C18.593%2C2.875L256%2C57.588l234.837%2C171.943c2.368%2C1.735%2C5.12%2C2.57%2C7.848%2C2.57%20%20%20c4.096%2C0%2C8.138-1.885%2C10.744-5.445C513.771%2C220.729%2C512.483%2C212.405%2C506.555%2C208.064z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M442.246%2C232.543c-7.346%2C0-13.303%2C5.956-13.303%2C13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52%20%20%20s-66.52%2C29.842-66.52%2C66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303%2C5.956-13.303%2C13.303v225.053%20%20%20c0%2C7.347%2C5.957%2C13.303%2C13.303%2C13.303h133.029c6.996%2C0%2C12.721-5.405%2C13.251-12.267c0.032-0.311%2C0.052-0.651%2C0.052-1.036v-128.89%20%20%20c0-22.009%2C17.905-39.914%2C39.914-39.914s39.914%2C17.906%2C39.914%2C39.914v128.89c0%2C0.383%2C0.02%2C0.717%2C0.052%2C1.024%20%20%20c0.524%2C6.867%2C6.251%2C12.279%2C13.251%2C12.279h133.029c7.347%2C0%2C13.303-5.956%2C13.303-13.303V245.847%20%20%20C455.549%2C238.499%2C449.593%2C232.543%2C442.246%2C232.543z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E",layers:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20512.001%20512.001%22%20style%3D%22enable-background%3Anew%200%200%20512.001%20512.001%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cg%3E%20%20%3Cpath%20d%3D%22M512%2C256.001c0-10.821-6.012-20.551-15.694-25.398l-38.122-19.061l38.122-19.06c0.001-0.001%2C0.004-0.002%2C0.004-0.002%20%20%20c9.68-4.845%2C15.692-14.576%2C15.692-25.397c0-10.819-6.013-20.55-15.694-25.397L281.09%2C34.08%20%20%20c-15.712-7.849-34.47-7.849-50.185%2C0.001L15.691%2C141.691C6.013%2C146.534%2C0%2C156.264%2C0%2C167.084c0%2C10.821%2C6.012%2C20.551%2C15.694%2C25.398%20%20%20l38.121%2C19.06l-38.126%2C19.063C6.012%2C235.45%2C0%2C245.18%2C0%2C256.001s6.012%2C20.551%2C15.694%2C25.397l38.121%2C19.061l-38.118%2C19.059%20%20%20C6.02%2C324.353%2C0.004%2C334.08%2C0%2C344.902c-0.004%2C10.828%2C6.008%2C20.564%2C15.694%2C25.412l215.215%2C107.608%20%20%20c7.856%2C3.925%2C16.471%2C5.886%2C25.09%2C5.886c8.619%2C0%2C17.238-1.963%2C25.095-5.887l215.215-107.608%20%20%20c9.682-4.845%2C15.695-14.582%2C15.691-25.41c-0.004-10.822-6.02-20.549-15.694-25.381l-38.122-19.061l38.126-19.063%20%20%20C505.988%2C276.552%2C512%2C266.822%2C512%2C256.001z%20M26.225%2C171.431c-2.339-1.171-2.687-3.226-2.687-4.346s0.35-3.175%2C2.683-4.343%20%20%20L241.429%2C55.138c4.563-2.28%2C9.568-3.418%2C14.573-3.418c5.003%2C0%2C10.007%2C1.139%2C14.567%2C3.417L485.776%2C162.74%20%20%20c2.337%2C1.17%2C2.687%2C3.225%2C2.687%2C4.345s-0.348%2C3.175-2.687%2C4.346L270.572%2C279.032c-9.125%2C4.558-20.019%2C4.558-29.139%2C0.001%20%20%20L26.225%2C171.431z%20M485.783%2C340.575c2.33%2C1.164%2C2.679%2C3.215%2C2.679%2C4.336c0.001%2C1.123-0.348%2C3.182-2.683%2C4.35L270.571%2C456.865%20%20%20c-9.125%2C4.558-20.019%2C4.559-29.139%2C0.001L26.225%2C349.262c-2.339-1.171-2.688-3.229-2.687-4.352c0-1.119%2C0.348-3.171%2C2.683-4.337%20%20%20l53.912-26.956l150.776%2C75.387c7.856%2C3.925%2C16.471%2C5.886%2C25.089%2C5.886c8.619%2C0%2C17.238-1.963%2C25.095-5.887l150.772-75.386%20%20%20L485.783%2C340.575z%20M485.778%2C260.345L270.571%2C367.949c-9.125%2C4.558-20.019%2C4.559-29.139%2C0.001L26.225%2C260.347%20%20%20c-2.339-1.17-2.687-3.225-2.687-4.345c0-1.122%2C0.348-3.175%2C2.683-4.344l53.912-26.956l150.776%2C75.387%20%20%20c7.855%2C3.925%2C16.472%2C5.886%2C25.089%2C5.886c8.617%2C0%2C17.237-1.962%2C25.094-5.888l150.774-75.386l53.908%2C26.954%20%20%20c2.339%2C1.171%2C2.687%2C3.225%2C2.687%2C4.346C488.462%2C257.121%2C488.113%2C259.176%2C485.778%2C260.345z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E",lightbulb:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20432.4%20432.4%22%20style%3D%22enable-background%3Anew%200%200%20432.4%20432.4%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M216.529%2C93.2c-61.2%2C0-111.2%2C50-111.2%2C111.2c0%2C32%2C14%2C62.8%2C37.6%2C83.6c17.6%2C17.6%2C16%2C55.2%2C15.6%2C55.6%20%20%20%20c0%2C2%2C0.4%2C3.6%2C2%2C5.2c1.2%2C1.2%2C3.2%2C2%2C4.8%2C2h102c2%2C0%2C3.6-0.8%2C4.8-2c1.2-1.2%2C2-3.2%2C2-5.2c0-0.4-2-38%2C15.6-55.6%20%20%20%20c0.4-0.4%2C0.8-0.8%2C1.2-1.2c23.2-21.2%2C36.8-51.2%2C36.8-82.4C327.729%2C143.2%2C277.729%2C93.2%2C216.529%2C93.2z%20M280.529%2C277.6%20%20%20%20c-0.4%2C0.4-1.2%2C1.2-1.2%2C1.6c-15.6%2C16.8-18.4%2C44.4-18.8%2C57.6h-88.4c-0.4-13.2-3.2-42-20-59.2c-21.2-18.4-33.6-45.2-33.6-73.6%20%20%20%20c0-54%2C43.6-97.6%2C97.6-97.6s97.6%2C43.6%2C97.6%2C97.6C313.729%2C232.4%2C301.729%2C259.2%2C280.529%2C277.6z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M216.129%2C121.6c-3.6%2C0-6.8%2C3.2-6.8%2C6.8c0%2C3.6%2C3.2%2C6.8%2C6.8%2C6.8c40.4%2C0%2C72.8%2C32.8%2C72.8%2C72.8%20%20%20%20c0%2C3.6%2C3.2%2C6.8%2C6.8%2C6.8c3.6%2C0%2C6.8-3.2%2C6.8-6.8C302.929%2C160.4%2C264.129%2C121.6%2C216.129%2C121.6z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M260.529%2C358.4h-88.8c-9.2%2C0-16.8%2C7.6-16.8%2C16.8s7.6%2C16.8%2C16.8%2C16.8h88.4%20%20%20%20c9.6-0.4%2C17.2-7.6%2C17.2-16.8C277.329%2C366%2C269.729%2C358.4%2C260.529%2C358.4z%20M260.529%2C378h-88.8c-1.6%2C0-3.2-1.2-3.2-3.2%20%20%20%20s1.2-3.2%2C3.2-3.2h88.4c1.6%2C0%2C3.2%2C1.2%2C3.2%2C3.2S262.129%2C378%2C260.529%2C378z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M247.329%2C398.8h-62.4c-9.2%2C0-16.8%2C7.6-16.8%2C16.8s7.6%2C16.8%2C16.8%2C16.8h62.4%20%20%20%20c9.2%2C0%2C16.8-7.6%2C16.8-16.8C264.129%2C406%2C256.529%2C398.8%2C247.329%2C398.8z%20M247.329%2C418.4h-62.4c-1.6%2C0-3.2-1.2-3.2-3.2%20%20%20%20s1.2-3.2%2C3.2-3.2h62.4c1.6%2C0%2C3.2%2C1.2%2C3.2%2C3.2S248.929%2C418.4%2C247.329%2C418.4z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M216.129%2C60c4%2C0%2C6.8-3.2%2C6.8-6.8V6.8c0-3.6-3.2-6.8-6.8-6.8c-3.6%2C0-6.8%2C3.2-6.8%2C6.8v46.4%20%20%20%20C209.329%2C56.8%2C212.529%2C60%2C216.129%2C60z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M329.329%2C34.4c-3.2-2.4-7.2-1.2-9.2%2C1.6l-25.6%2C38.4c-2.4%2C3.2-1.6%2C7.6%2C1.6%2C9.6%20%20%20%20c1.2%2C0.8%2C2.4%2C1.2%2C3.6%2C1.2c2.4%2C0%2C4.4-1.2%2C5.6-3.2l25.6-38.4C333.329%2C40.8%2C332.529%2C36.4%2C329.329%2C34.4z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M134.929%2C83.6c1.2%2C0%2C2.4-0.4%2C3.6-1.2c3.2-2%2C4-6.4%2C2-9.6l-24.8-38.8c-2-3.2-6.4-4-9.6-2%20%20%20%20s-4%2C6.4-2%2C9.6l24.8%2C38.8C130.529%2C82.8%2C132.529%2C83.6%2C134.929%2C83.6z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M86.529%2C126l-40.4-22c-3.2-1.6-7.6-0.4-9.2%2C2.8c-2%2C3.2-0.8%2C7.6%2C2.8%2C9.2l40.4%2C22%20%20%20%20c1.2%2C0.4%2C2%2C0.8%2C3.2%2C0.8c2.4%2C0%2C4.8-1.2%2C6-3.6C90.929%2C132%2C89.729%2C127.6%2C86.529%2C126z%22%2F%3E%20%20%20%3Cpath%20style%3D%22fill%3A%23231F20%3B%22%20d%3D%22M395.729%2C106.8c-1.6-3.2-6-4.4-9.2-2.8l-40.8%2C22c-3.2%2C1.6-4.4%2C6-2.8%2C9.2c1.2%2C2.4%2C3.6%2C3.6%2C6%2C3.6%20%20%20%20c1.2%2C0%2C2.4-0.4%2C3.2-0.8l40.8-22C396.129%2C114.4%2C397.329%2C110%2C395.729%2C106.8z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E"};function de(e,t="Icon"){return P`
    <i class="icon ${ce}">
      <img src="${le[e]}" alt="${t}" />
    </i>
  `}function ue(e){return function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/`/g,"&#96;")}(e).replace(/=:/g,"&emsp;").replace(/\n/g,"<br />")}var ge="sidebar-module_sidebar__dL5CB",me="sidebar-module_link__qiTEc",he="sidebar-module_active__15IRQ";function pe(e){re.UI.activeButtonId=e,re.UI.isSidebarOpened=!1}function be(e){return re.UI.activeButtonId===e?he:""}var fe={homePage:function(){return P`
    <div class="${e}">
      <img class="${t}" src="${"data:image/svg+xml,%3Csvg%20id%3D%22Layer_1%22%20enable-background%3D%22new%200%200%20512%20512%22%20height%3D%22512%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m160.684%20341.076c5.081-5.764%2010.317-11.175%2015.656-16.207%208.005%206.366%2018.95%208.724%2029.406%205.327%206.59-2.141%2011.994-6.247%2015.772-11.459l4.481%203.256%204.48%203.255c-3.788%205.205-6.023%2011.613-6.023%2018.542%200%2010.994%205.624%2020.674%2014.154%2026.318-3.137%206.634-6.665%2013.286-10.577%2019.9-4.07%206.88-8.556%2013.72-13.452%2020.459-32.483%2044.71-74.759%2073.633-110.617%2079.492-5.508-35.913%208.935-85.057%2041.419-129.768%204.896-6.738%2010.015-13.118%2015.301-19.115z%22%20fill%3D%22%23fff3db%22%2F%3E%3Cpath%20d%3D%22m176.341%20324.867c-5.34%205.034-10.576%2010.444-15.658%2016.208-3.22%201.267-6.522%202.453-9.899%203.549-34.761%2011.294-68.623%2010.336-90.086-.468%2011.014-21.356%2037.845-42.036%2072.606-53.33%203.377-1.098%206.745-2.078%2010.094-2.947%207.5%201.677%2014.916%202.977%2022.192%203.909-1.599%205.762-1.579%2012.042.406%2018.154%201.988%206.114%205.664%2011.206%2010.345%2014.925z%22%20fill%3D%22%23ffe6b4%22%2F%3E%3Cpath%20d%3D%22m165.594%20291.79c-7.279-.933-14.695-2.233-22.195-3.91-7.801-1.745-15.693-3.898-23.615-6.471-52.559-17.078-93.131-48.348-109.784-80.64%2032.453-16.336%2083.656-17.786%20136.215-.708%207.922%202.574%2015.572%205.471%2022.909%208.645%207.053%203.051%2013.816%206.359%2020.252%209.882-3.581%209.581-2.441%2020.719%204.021%2029.613%204.073%205.606%209.648%209.477%2015.772%2011.459l-1.712%205.268-1.711%205.266c-6.121-1.994-12.905-2.139-19.496.002-10.455%203.397-17.924%2011.737-20.656%2021.594z%22%20fill%3D%22%23fff3db%22%2F%3E%3Cpath%20d%3D%22m189.378%20218.588c-6.438-3.524-13.201-6.831-20.254-9.882-2.199-2.671-4.348-5.445-6.435-8.318-21.483-29.569-31.035-62.071-27.392-85.822%2023.714%203.875%2051.674%2023.003%2073.156%2052.572%202.087%202.872%204.061%205.773%205.922%208.69.723%207.651%201.778%2015.105%203.141%2022.314-5.974.26-11.941%202.219-17.14%205.997-5.2%203.778-8.906%208.847-10.998%2014.449z%22%20fill%3D%22%23ffe6b4%22%2F%3E%3Cpath%20d%3D%22m214.375%20175.829c-.751-7.958-1.142-16.129-1.142-24.459%200-55.265%2017.202-103.513%2042.767-129.33%2025.565%2025.817%2042.767%2074.065%2042.767%20129.33%200%208.33-.391%2016.501-1.143%2024.459-.722%207.651-1.778%2015.105-3.14%2022.314-10.218-.445-20.458%204.081-26.921%2012.975-4.073%205.606-6.032%2012.104-6.024%2018.541h-5.539-5.537c.005-6.437-1.953-12.935-6.026-18.541-6.462-8.894-16.702-13.42-26.921-12.975-1.362-7.209-2.418-14.664-3.141-22.314z%22%20fill%3D%22%23fff3db%22%2F%3E%3Cpath%20d%3D%22m303.546%20167.139c21.483-29.569%2049.442-48.697%2073.156-52.572%203.643%2023.751-5.909%2056.253-27.392%2085.822-2.087%202.873-4.235%205.646-6.435%208.318-7.053%203.051-13.816%206.359-20.252%209.882-2.094-5.601-5.8-10.67-11-14.448-5.199-3.778-11.166-5.737-17.14-5.995%201.362-7.212%202.418-14.666%203.14-22.317%201.862-2.917%203.836-5.818%205.923-8.69z%22%20fill%3D%22%23ffe6b4%22%2F%3E%3Cpath%20d%3D%22m365.784%20200.061c52.56-17.077%20103.762-15.628%20136.216.709-16.653%2032.292-57.224%2063.561-109.784%2080.639-7.922%202.574-15.814%204.727-23.615%206.471-7.499%201.677-14.916%202.976-22.193%203.909-2.735-9.856-10.203-18.196-20.659-21.594-6.591-2.141-13.375-1.996-19.495%200l-1.712-5.269-1.711-5.266c6.124-1.984%2011.698-5.855%2015.771-11.461%206.462-8.894%207.602-20.032%204.019-29.612%206.438-3.524%2013.201-6.832%2020.254-9.883%207.337-3.172%2014.987-6.069%2022.909-8.643z%22%20fill%3D%22%23fff3db%22%2F%3E%3Cpath%20d%3D%22m378.695%20290.827c34.761%2011.294%2061.592%2031.974%2072.606%2053.33-21.463%2010.805-55.326%2011.763-90.086.469-3.377-1.097-6.679-2.283-9.899-3.55-5.081-5.765-10.317-11.175-15.656-16.207%204.68-3.721%208.356-8.813%2010.342-14.926s2.005-12.392.405-18.153c7.279-.934%2014.695-2.233%2022.195-3.91%203.348.868%206.716%201.849%2010.093%202.947z%22%20fill%3D%22%23ffe6b4%22%2F%3E%3Cpath%20d%3D%22m351.316%20341.076c5.286%205.997%2010.405%2012.377%2015.301%2019.117%2032.484%2044.71%2046.927%2093.854%2041.419%20129.768-35.858-5.859-78.134-34.783-110.617-79.492-4.896-6.739-9.382-13.579-13.452-20.459-3.912-6.614-7.439-13.266-10.576-19.898%208.528-5.647%2014.153-15.327%2014.153-26.321%200-6.93-2.235-13.338-6.024-18.541l4.482-3.256%204.48-3.255c3.78%205.211%209.183%209.316%2015.774%2011.458%2010.456%203.397%2021.4%201.039%2029.406-5.327%205.337%205.031%2010.573%2010.441%2015.654%2016.206z%22%20fill%3D%22%23fff3db%22%2F%3E%3Cpath%20d%3D%22m284.284%20400.52c0%2036.549-11.376%2068.458-28.283%2085.532-16.908-17.074-28.284-48.983-28.284-85.532%200-3.551.108-7.058.317-10.512%203.912-6.614%207.44-13.266%2010.575-19.898%204.986%203.301%2010.964%205.223%2017.392%205.223%206.427%200%2012.405-1.922%2017.39-5.225%203.137%206.635%206.665%2013.286%2010.577%2019.9.208%203.454.316%206.961.316%2010.512z%22%20fill%3D%22%23ffe6b4%22%2F%3E%3Cg%20fill%3D%22%23ff9346%22%3E%3Cpath%20d%3D%22m273.391%20370.11c-4.986%203.301-10.964%205.223-17.391%205.223s-12.406-1.922-17.392-5.223c-8.528-5.647-14.152-15.327-14.152-26.32%200-6.93%202.235-13.338%206.023-18.542%205.735-7.88%2015.03-13.001%2025.521-13.001s19.786%205.122%2025.521%2013.001c3.788%205.205%206.023%2011.613%206.023%2018.542%200%2010.993-5.625%2020.674-14.153%2026.32z%22%2F%3E%3Cpath%20d%3D%22m221.519%20318.738c-3.779%205.211-9.183%209.316-15.773%2011.458-10.456%203.397-21.401%201.039-29.406-5.327-4.68-3.721-8.356-8.813-10.342-14.926s-2.005-12.393-.406-18.154c2.735-9.856%2010.203-18.196%2020.659-21.593%206.591-2.141%2013.375-1.996%2019.496-.002%209.266%203.019%2017.009%2010.277%2020.252%2020.254%203.241%209.978%201.242%2020.401-4.48%2028.29z%22%2F%3E%3Cpath%20d%3D%22m237.458%20255.178c-8.488%206.167-19.018%207.486-28.289%204.483-6.124-1.984-11.698-5.855-15.771-11.461-6.462-8.894-7.602-20.032-4.021-29.613%202.093-5.601%205.8-10.67%2011-14.448s11.166-5.737%2017.14-5.997c10.218-.445%2020.458%204.081%2026.921%2012.975%204.073%205.606%206.032%2012.104%206.026%2018.541-.009%209.747-4.519%2019.354-13.006%2025.52z%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m209.168%20259.661c9.271%203.004%2019.801%201.684%2028.289-4.483s12.997-15.774%2013.003-25.52h5.54%205.537c.008%209.746%204.517%2019.353%2013.005%2025.52s19.018%207.486%2028.289%204.48l1.712%205.268%201.711%205.266c-9.266%203.019-17.009%2010.277-20.252%2020.254-3.242%209.978-1.243%2020.401%204.481%2028.289l-4.482%203.256-4.48%203.254c-5.735-7.88-15.03-13.001-25.521-13.001s-19.786%205.122-25.52%2013.003l-4.481-3.256-4.48-3.254c5.722-7.889%207.721-18.312%204.479-28.29s-10.986-17.235-20.253-20.252l1.712-5.268z%22%20fill%3D%22%23ffbe90%22%2F%3E%3Cpath%20d%3D%22m274.542%20255.178c-8.488-6.167-12.997-15.774-13.005-25.52-.005-6.437%201.953-12.935%206.026-18.541%206.462-8.894%2016.702-13.42%2026.921-12.975%205.974.26%2011.94%202.219%2017.14%205.997s8.906%208.847%2011%2014.448c3.58%209.581%202.441%2020.718-4.021%2029.612-4.073%205.606-9.647%209.477-15.771%2011.461-9.272%203.005-19.802%201.685-28.29-4.482z%22%20fill%3D%22%23ff9346%22%2F%3E%3Cpath%20d%3D%22m286.002%20290.448c3.242-9.978%2010.986-17.235%2020.252-20.254%206.121-1.994%2012.905-2.139%2019.496.002%2010.456%203.397%2017.924%2011.738%2020.659%2021.594%201.599%205.762%201.58%2012.041-.406%2018.154s-5.662%2011.204-10.342%2014.926c-8.006%206.366-18.95%208.724-29.406%205.327-6.59-2.141-11.994-6.247-15.774-11.458-5.722-7.89-7.721-18.313-4.479-28.291z%22%20fill%3D%22%23ff9346%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D%22m511.511%20197.679c-.825-2.539-2.63-4.642-5.015-5.842-34.939-17.588-86.063-18.682-137.782-3.16%2014.701-26.055%2021.297-53.3%2017.873-75.627-.404-2.638-1.847-5.005-4.006-6.574-2.16-1.568-4.856-2.211-7.491-1.779-22.292%203.642-46.165%2018.336-66.402%2040.368-1.22-53.984-18.058-102.267-45.582-130.062-1.878-1.896-4.437-2.963-7.105-2.963-2.669%200-5.228%201.067-7.105%202.963-27.524%2027.794-44.363%2076.077-45.583%20130.062-20.236-22.033-44.11-36.726-66.403-40.368-2.635-.431-5.332.21-7.491%201.779s-3.602%203.936-4.006%206.574c-3.424%2022.326%203.172%2049.572%2017.873%2075.626-51.718-15.521-102.841-14.428-137.781%203.16-2.384%201.2-4.189%203.303-5.015%205.842-.825%202.539-.601%205.302.623%207.674%2017.929%2034.766%2058.645%2065.701%20109.61%2083.543-27.208%2012.438-48.559%2030.603-58.911%2050.679-1.223%202.372-1.447%205.135-.623%207.673.825%202.539%202.63%204.642%205.015%205.842%2012.759%206.422%2028.623%209.642%2045.981%209.642%2010.091%200%2020.687-1.092%2031.468-3.273-30.745%2044.392-45.503%2093.352-39.573%20132.017.404%202.638%201.847%205.005%204.006%206.574%201.72%201.249%203.78%201.91%205.878%201.91.537%200%201.076-.043%201.613-.131%2038.604-6.308%2080.607-35.472%20113.326-78.429%203.421%2029.719%2014.099%2055.639%2029.993%2071.689%201.878%201.897%204.437%202.964%207.105%202.964%202.669%200%205.228-1.067%207.106-2.964%2015.893-16.05%2026.57-41.969%2029.992-71.688%2032.719%2042.957%2074.721%2072.121%20113.325%2078.429.537.088%201.076.131%201.613.131%202.098%200%204.158-.661%205.878-1.91%202.159-1.569%203.602-3.936%204.006-6.574%205.931-38.665-8.827-87.625-39.572-132.017%2010.78%202.18%2021.375%203.272%2031.467%203.272%2017.355%200%2033.225-3.22%2045.982-9.642%202.384-1.2%204.189-3.303%205.015-5.842.825-2.539.601-5.301-.623-7.674-10.352-20.076-31.704-38.24-58.911-50.678%2050.965-17.842%2091.681-48.777%20109.61-83.543%201.222-2.371%201.447-5.134.622-7.673zm-305.257%2014.551c3.721-2.704%208.105-4.12%2012.618-4.12%201.133%200%202.275.089%203.416.27%205.684.9%2010.676%203.96%2014.059%208.615%206.982%209.61%204.844%2023.11-4.766%2030.092-9.61%206.983-23.11%204.844-30.092-4.766-6.983-9.609-4.845-23.108%204.765-30.091zm49.746%2036.12c2.88%205.738%207.122%2010.893%2012.664%2014.919%205.43%203.945%2011.592%206.465%2018.04%207.459-4.63%204.593-8.139%2010.248-10.213%2016.63-2.078%206.395-2.561%2013.048-1.506%2019.498-5.695-2.939-12.147-4.611-18.985-4.611-6.839%200-13.291%201.671-18.986%204.611%201.055-6.451.572-13.103-1.506-19.499-2.077-6.391-5.593-12.053-10.234-16.651%206.333-.97%2012.531-3.421%2018.061-7.438%205.543-4.026%209.785-9.181%2012.665-14.918zm33.713-39.969c1.142-.181%202.282-.27%203.416-.27%204.512%200%208.896%201.416%2012.617%204.119%209.611%206.982%2011.749%2020.481%204.766%2030.092-3.382%204.655-8.375%207.715-14.059%208.615s-11.377-.468-16.033-3.85c-9.611-6.982-11.749-20.482-4.767-30.092%203.383-4.655%208.376-7.714%2014.06-8.614zm-114.204%2098.472c-3.671-11.297%202.534-23.476%2013.832-27.146%202.204-.716%204.441-1.057%206.642-1.057%209.083%200%2017.55%205.794%2020.504%2014.889%201.778%205.473%201.319%2011.311-1.293%2016.438-2.613%205.127-7.065%208.93-12.539%2010.708-11.295%203.671-23.475-2.534-27.146-13.832zm58.948%2036.936c0-11.879%209.665-21.544%2021.544-21.544s21.544%209.665%2021.544%2021.544-9.665%2021.544-21.544%2021.544c-11.88%200-21.544-9.664-21.544-21.544zm61.056-50.251c2.955-9.095%2011.421-14.889%2020.504-14.889%202.201%200%204.439.341%206.642%201.057%2011.298%203.671%2017.503%2015.849%2013.832%2027.146-3.671%2011.298-15.85%2017.501-27.146%2013.832-11.298-3.67-17.503-15.848-13.832-27.146zm71.925-166.22c-.656%2020.372-10.147%2045.073-26.217%2067.192-1.491%202.052-3.055%204.071-4.641%206.055-3.352%201.489-6.655%203.042-9.908%204.656-2.495-3.435-5.554-6.545-9.17-9.172-3.575-2.598-7.471-4.568-11.554-5.902.529-3.587.984-7.203%201.364-10.846%201.395-2.121%202.833-4.231%204.325-6.285%2016.07-22.118%2036.629-38.778%2055.801-45.698zm-111.437-90.132c20.397%2026.153%2032.767%2068.654%2032.767%20114.184%200%2012.709-.959%2025.246-2.829%2037.375-7.481%201.304-14.316%204.554-19.938%209.404v-31.725c0-5.523-4.477-10-10-10s-10%204.477-10%2010v31.725c-5.622-4.851-12.457-8.101-19.938-9.404-1.871-12.129-2.828-24.666-2.828-37.375-.001-45.53%2012.368-88.031%2032.766-114.184zm-55.637%20135.83c1.491%202.053%202.928%204.163%204.325%206.285.38%203.643.835%207.26%201.364%2010.846-4.083%201.334-7.979%203.304-11.554%205.901-3.616%202.627-6.675%205.737-9.17%209.171-3.252-1.614-6.556-3.167-9.908-4.656-1.584-1.98-3.147-3.998-4.641-6.055-16.07-22.118-25.562-46.82-26.218-67.192%2019.172%206.922%2039.732%2023.582%2055.802%2045.7zm-175.959%2032.433c31.177-11.313%2075.423-9.946%20118.721%204.122%2012.092%203.929%2023.726%208.718%2034.69%2014.249-1.036%207.288-.152%2014.85%202.781%2021.864l-34.943-11.354c-5.251-1.704-10.894%201.168-12.601%206.42-1.707%205.253%201.168%2010.894%206.42%2012.601l34.943%2011.354c-6.496%203.951-11.656%209.549-15.102%2016.054-12.119-1.969-24.345-4.933-36.44-8.863-43.3-14.067-79.899-38.965-98.469-66.447zm51.285%20133.837c12.505-16.096%2034.703-30.5%2060.705-38.949%202.411-.784%204.863-1.499%207.314-2.171%203.587.766%207.172%201.451%2010.752%202.057%200%204.245.647%208.559%202.028%2012.81%201.366%204.203%203.36%208.087%205.879%2011.566-2.536%202.591-5.03%205.249-7.479%207.973-2.375.896-4.777%201.758-7.193%202.543-26.003%208.448-52.428%209.843-72.006%204.171zm37.176%20138.42c-1.129-33.148%2013.845-74.802%2040.607-111.636%207.471-10.284%2015.616-19.863%2024.26-28.577%205.764%202.825%2011.968%204.267%2018.221%204.267%201.142%200%202.286-.051%203.428-.146l-21.581%2029.703c-3.246%204.468-2.256%2010.722%202.212%2013.968%201.775%201.29%203.832%201.911%205.87%201.911%203.092%200%206.142-1.43%208.099-4.123l21.596-29.724c1.75%207.399%205.479%2014.036%2010.602%2019.324-5.617%2010.917-12.214%2021.629-19.69%2031.918-26.761%2036.832-61.749%2063.946-93.624%2073.115zm143.135-7.417c-11.444-16.867-18.284-42.43-18.284-69.77%200-2.534.078-5.086.195-7.626%201.837-3.176%203.596-6.373%205.279-9.591%204.038%201.312%208.341%202.03%2012.81%202.03s8.772-.718%2012.809-2.03c1.682%203.217%203.442%206.415%205.279%209.59.118%202.534.195%205.085.195%207.626%200%2027.341-6.84%2052.904-18.283%2069.771zm143.132%207.418c-31.873-9.171-66.864-36.285-93.624-73.117-7.475-10.288-14.072-21.001-19.689-31.918%205.122-5.287%208.852-11.924%2010.602-19.323l21.595%2029.723c1.957%202.693%205.006%204.123%208.099%204.123%202.038%200%204.095-.621%205.87-1.911%204.468-3.247%205.458-9.5%202.212-13.968l-21.581-29.703c1.143.095%202.286.146%203.428.146%206.252%200%2012.459-1.442%2018.222-4.267%208.643%208.713%2016.788%2018.294%2024.259%2028.577%2026.763%2036.835%2041.737%2078.49%2040.607%20111.638zm37.178-138.421c-19.579%205.671-46.005%204.278-72.005-4.171-2.412-.784-4.815-1.646-7.193-2.543-2.449-2.724-4.943-5.382-7.479-7.973%202.519-3.479%204.513-7.363%205.879-11.566%201.381-4.251%202.028-8.565%202.028-12.81%203.58-.606%207.165-1.291%2010.752-2.057%202.449.672%204.899%201.386%207.314%202.171%2026.001%208.449%2048.199%2022.854%2060.704%2038.949zm-47.185-67.388c-12.093%203.93-24.319%206.893-36.44%208.863-3.445-6.505-8.606-12.103-15.101-16.054l34.943-11.354c5.252-1.707%208.127-7.348%206.42-12.601-1.707-5.252-7.347-8.127-12.601-6.42l-34.943%2011.354c2.933-7.014%203.817-14.576%202.781-21.865%2010.961-5.531%2022.596-10.319%2034.691-14.248%2043.3-14.07%2087.543-15.44%20118.72-4.122-18.572%2027.478-55.173%2052.378-98.47%2066.447z%22%2F%3E%3Cpath%20d%3D%22m256%20131.424c5.523%200%2010-4.477%2010-10s-4.477-10-10-10h-.007c-5.523%200-9.996%204.477-9.996%2010s4.48%2010%2010.003%2010z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}" alt="Logo" />
      <p class="${n}">
        Light JS-library for building beautiful web-apps.
      </p>
      <button
        @click=${()=>ne.to("/docs")}
        class="main ${a}"
      >
        Get started
      </button>
    </div>
  `},docsPage:function(){const e={start:{title:"Get started",content:P`
      Documentation tells about main classes and functions that are exported
      from library.

      <h1>Edelweiss</h1>

      <p>
        This is web framework that can be used with ES modules or with CommonJS.
      </p>

      <p>
        ES modules are supported by almost all modern browser from 2017-2018
        year.
      </p>
      <ul>
        <li><b>Edge</b>: from 16 version and 79 (Chromium).</li>
        <li><b>Firefox</b>: from 60.</li>
        <li><b>Chrome</b>: from 61.</li>
        <li><b>Safari</b>: from 11.</li>
        <li><b>Opera</b>: from 48.</li>
      </ul>

      <a href="https://caniuse.com/#search=es%20modules"
        >More info at caniuse.</a
      >

      <h2>Installation</h2>

      <code class="bash">$ npm i @prostory/edelweiss</code>

      <p>
        For easier creation of edelweiss powered apps, use
        <strong>Edelweiss CLI</strong>. More info about using CLI
        <a href="https://github.com/YevhenKap/edelweiss-cli">here</a>.
      </p>
    `},html:{title:"# HTML",content:P`
      <p>
        Templates are created as HTML in template literals (similar to
        <b>JSX</b>) using <em>html</em> function (exported from framework).
      </p>

      <code
        >
        ${ue("const paragraph: Promise<string> = html`<p>Hello world!</p>`;")}
        </code
      >

      <p>
        You should pass valid HTML to <em>html</em>. But for convenience there
        is special syntax for event listeners, boolean attributes and for
        defining custom elements.
      </p>

      <h3>Event listeners</h3>
      <p>
        In order to attach event listener to element you can define
        <strong>@eventName</strong> attribute to element. Note
        <strong>@</strong> followed by <strong>eventName</strong>(<i>click</i>,
        <i>input</i>, <i>change</i> etc.). The value of the attribute must be
        function, that accepts native <em>event</em> object, or object with
        <em>handleEvent(event)</em> method. Otherwise an error will be thrown.
      </p>

      <blockquote>
          ${de("lightbulb")}
          Note that if you call <b>this</b> inside such function, in production you can receive <i>undefined</i> behavior <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">more detailed here</a>.
      </blockquote>

      <code>
        ${ue("function handleClick(event: MouseEvent) {\n          =: console.log('Clicked!');\n          }\n          const button: Promise<string> = html`\n          =: <button @click=${handleClick}>Click me</button>\n          `;\n          ")}
      </code>

      <h3>Boolean attributes</h3>
      <p>
        For defining attributes that do not have special values (truthy or falsy
        attributes: <i>required</i>, <i>disabled</i>, <i>controls</i> etc.), you
        can append <strong>?</strong> to name of that attribute and give him
        <b>true</b> of <b>false</b> value.
      </p>

      <blockquote>
        ${de("lightbulb")} Actually that attribute can accept not only boolean
        values, but all truthy and falsy values. Though <b>boolean</b> is
        recommended.
      </blockquote>

      <code>
        ${ue('function mustBeButtonDisabled() {\n           =: // some calculation here\n           =: return false;\n          }\n          const button: Promise<string> = html`\n          =:  <button class="disabled" ?disabled=${mustBeButtonDisabled()}>Click me</button>\n          `;\n          \n          const nextButton: Promise<string> = html`\n          =:  <button class="disabled" ?disabled=${false}>Click me</button>\n          `;\n          \n          // You can define it as regular attribute.\n          const thirdButton: Promise<string> = html`\n          =:  <button class="disabled" disabled>Click me</button>\n          `;\n          ')}
      </code>

      <p>
        Regular attributes can be defined as all above. They do not need special
        syntax. But all inserted values must be type of <b>string</b> or coerce
        to it. Also you can omit <b>"</b> and <b>'</b> around attribute value.
      </p>

      <code>
        ${ue("const button: Promise<string> = html`\n         =: <button class=\"${isDisabled ? 'disabled' : ''}\" disabled>Click me</button>\n         =: \x3c!-- or --\x3e\n         =: <button class=${isDisabled ? 'disabled' : ''} disabled>Click me</button>\n        `;\n          ")}
      </code>

      <p>As children of the elements you can pass values of types:</p>

      <ul>
        <li><b>string</b></li>
        <li><b>Component</b></li>
        <li><b>Promise<string></b></li>
        <li>array of them</li>
      </ul>

      <code>
        ${ue('function spans(): Array<Promise<string>> {\n           =: return strings.map((str) => html`<span>${str}</span>`);\n          }\n          \n          const template: Promise<string> = html`\n          =:   ${new MyComponent()}\n          =:   \x3c!-- Note we do not await for Component --\x3e\n          =:   <button class="disabled" ?disabled=${mustBeButtonDisabled()}>\n          =:=:     \x3c!-- Note we do not await for Array<Promise<string>> --\x3e\n          =: =:    ${spans()}\n          =:  </button>\n          `;\n          ')}
      </code>

      <p>
        As you already saw <em>html</em> funtion returns <i>Promise</i>, but you
        should not handle returning value itself. <em>html</em> handles it for
        you. Think of it like function returns <b>string</b>.
      </p>

      <h3>Element hooks</h3>
      <p>
        It is possible to react on node lifecycle: on inserting node into DOM,
        updating this node or on removing node from DOM. This is done by
        providing <i>hooks:</i>
      </p>

      <ol>
        <li>
          <strong>mounted</strong> - invokes only on inserting node into DOM
          (one time).
        </li>
        <li>
          <strong>rendered</strong> - invokes every time node is rendered.
        </li>
        <li>
          <strong>updated</strong> - invokes on every change is made with node.
        </li>
        <li>
          <strong>removed</strong> - invokes only on removing node from DOM (one
          time).
        </li>
      </ol>

      <p>
        Hook's value is function that has one parameter - <em>self</em>. This is
        element for which hook is provided.
      </p>

      <code>
        ${ue("// Hook signature, you can provide more consise type by yourself.\n           type HookCallback = (self: Element) => void | Promise<void>;\n          ")}
      </code>

      <p>
        For defining hook write it as regular attribute with preceeding
        <strong>:</strong> character.
        <b>Hook's callback must not be surrounded by " and ' characters.</b>
      </p>

      <code>
        ${ue("html`\n          =: <p\n          =: =:   :mounted=${(self: HTMLParagraphElement) => {\n          =: =: =:     /* Do some work */\n          =:   }}\n          =: ></p>\n        `;\n          ")}
      </code>

      <h3>Custom elements</h3>
      <p>
        For defining custom elements you may write it as regular tags, but with
        some rules (<b>element definition</b>):
      </p>

      <ol>
        <li>
          After tag you type <strong>=</strong> sign followed by element
          constructor (<em>No " or ' symbols!</em>).
        </li>
        <li>
          If custom element extend some included element (e.g.
          <b>HTMLDivElement</b>), after tag name you may define
          <i>extend</i> clause by adding double colon (<b>:</b>) and name of the
          extended tag, otherwise omit it.
        </li>
      </ol>

      <blockquote>
        ${de("lightbulb")} Name of the tag of custom element must be in
        <em>kebab-case</em>. <a href="https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name">Name must contain
        dash</a>.
      </blockquote>

      <blockquote>
        ${de("lightbulb")} <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">Detailed about custom elements
        here.</a>
      </blockquote>

      <code>
        ${ue('// With extending built-in element\n          class MyP extends HTMLParagraphElement {}\n          \n          // name-of-the-custom-tag:name-of-the-extended-tag=${constructor}\n          const text = html`<long-list:p=${MyP}></long-list>`; // Note that after "=" does not follow " or \' and after constructor.\n          \n          // Without extending built-in element\n          class SomeElement extends HTMLElement {}\n          \n          // name-of-the-custom-tag=${constructor}\n          const text = html`<long-list =${SomeElement}></long-list>`; // Note that after "=" does not follow " or \' and after constructor.\n          ')}
      </code>

      <p>
        Write <i>element definition</i> rule only once for certain custom
        element and on next using write as regular HTML element. Element
        definition <i>can be</i> or <i>can not be</i> in first using of custom
        element. But it <em>should be</em> in template, which has first using of
        certain custom element.
      </p>

      <code>
          ${ue('// This template first use <custom-p> custom element.\n            // Element definition contains second occurrence of <custom-p>\n            html`\n            =:  <custom-p class="custom-p">Hello</custom-p>\n            =:  <custom-p:p=${class extends HTMLParagraphElement {}}>I am custom element</custom-p>\n            =:  <custom-p class="custom-p">I am next custom element</custom-p>\n            =:  <custom-p class="custom-p">I am last custom element in this template</custom-p>\n            `;\n            ')}
      </code
      >
    `},component:{title:"# Component",content:P`
      <p>
        If you create template that can be used in two or more places of your
        site you can group it in plain function that will returns them or define
        <i>Component</i>.
      </p>

      <p>
        It can be achieved by creating class that extends
        <em>Component</em> class. You <i>must</i> override
      </p>

      <code>${ue("template(): string | Promise<string>")}</code>

      <p>Also you <i>can</i> override</p>

      <code>${ue("beforeBuild(): void | Promise<void>")}</code>

      <p>
        method that invokes before <b>template</b> method and
      </p>

      <code>${ue("afterBuild(): void | Promise<void>")}</code>

      <p>
        that invokes after template. You can use them for getting data for your
        view or other tasks that need to be finished before or after building
        template. All methods can be asyncrounous so you can accomplish
        asyncrounous operation (like fetching for some data) in rendering order
        without creating additional asyncrounous functions.
      </p>

      <blockquote>
        ${de("lightbulb")} Note that <b>beforeBuild</b> and
        <b>afterBuild</b> methods are executing when template is not inserted
        into DOM yet, so you can't access elements that <b>template</b> method
        returns.
      </blockquote>

      <code>
        ${ue("class MyComponent extends Component {\n            =: async beforeBuild() {\n            =: =:   // Some useful work\n            =:  }\n          \n            =:  async template() {\n            =: =: return html`<p>Hello</p>`;\n            =:  }\n          \n            =:  async afterBuild() {\n            =: =:  // Some useful work\n            =:  }\n          }\n          ")}
      </code>

      <p>
        For binding styles to concrete component (they will be loaded to page
        right before first component rendering) define <em>styles</em> method
        and return css file name or array of css file names from it.
      </p>

      <code>
        ${ue("class MyComponent extends Component {\n            =: styles() {\n            =:  =:   return 'my_component.css'; // or array of stylesheets\n            =: }\n          \n            =: template() {\n            =: =:   return html`<p>Hello</p>`;\n            =: }\n          }\n          ")}
      </code>
    `},router:{title:"# Router",content:P`
      <p>
        It is used for navigating through site and rendering. It interacts with
        browser's <i>History API</i> and, based on path of the page, renders
        needed nodes. <strong>Router</strong> has only static methods and static
        fields.
      </p>

      <code>
        ${ue("\n          import { Router } from '@prostory/edelweiss';\n          // Navigates to root page.\n          Router.to('/');\n          \n          // It will navigate to page based on path in address bar. \n          // Reloading window in browser will not\n          // return to home page but stay in current page.\n          // It need to be put in script that is directly defined in HTML.\n          Router.to(window.location.pathname);\n        ")}
      </code>

      <p>You must set up <b>Router</b> with routes. Route is a plain object:</p>

      <code>
        ${ue("\n        type Route = {\n          =: path: string | RegExp;\n          =: container?: string;\n          =: before?: () => Promise<void> | void;\n          =: view: () =>\n          =: =: | string\n          =: =: | Component\n          =: =: | Promise<string>\n          =: =: | Array<string | Component | Promise<string>>;\n          =:  after?: () => Promise<void> | void;\n        };\n      ")}
      </code>

      <ol>
        <li>
          <strong>path</strong> - path of the page that will be visible in
          browser's search box. If you defines path as <b>RegExp</b> always
          insert start (<em>^</em>) and end (<em>$</em>) symbols. If path will
          be type of <i>string</i> you can not do this.
        </li>
        <li>
          <strong>container</strong> - selector of element which nodes will be
          replaced. You can not provide it. In this case you must define global
          <em>Route.container</em>.
        </li>
        <li>
          <strong>view</strong> - function that returns nodes that need to be
          rendered.
        </li>
        <li>
          <strong>before</strong> - hook that invokes before rendering route in
          which hook is defined. If exists, invokes on every moving to this
          route and reloading page.
        </li>
        <li>
          <strong>after</strong> - hook that invokes after rendering route is
          finished in which hook is defined. If exists, invokes on every moving
          to this route and reloading page.
        </li>
      </ol>

      <blockquote>
        ${de("lightbulb")} Does not set changes to state in route hooks. This
        may lead to infinite rendering route.
      </blockquote>

      <code>
        ${ue("\n          Router.add([\n          =:  {\n          =: =:    path: '/',\n          =: =:    container: '.body',\n          =: =:    view() {\n          =: =: =:      // We will think that HomePage is the component\n          =: =: =:       return new HomePage({\n          =: =: =: =:        // Custom component may accept some properties\n          =: =: =:       });\n          =: =:  },\n          =: },\n          =: // Many others routes\n          ]);\n        ")}
      </code>

      <p><strong>Router</strong> have five static methods:</p>

      <ol>
        <li>
          <code
            >${ue("to(path: string, options?: { willStateChange?: boolean }): Promise<void>")}</code
          >
          - Renders needed page. In some rare situations
          <b>window.history</b> does not need to be updated. In such cases
          provide object with <em>willStateChange</em> property setted to
          <i>false</i> as second parameter.
        </li>
        <li>
          <code>${ue("reload(): Promise<void>")}</code> - Reloads
          current page.
        </li>
        <li>
          <code>${ue("back(): void")}</code> - return to previous
          page.
        </li>
        <li>
          <code>${ue("forward(): void")}</code> - forwards to next
          page if it is in history.
        </li>
        <li>
          <code>${ue("add(routes: Route | Route[]): void")}</code> -
          add routes to Router. May be called many times.
        </li>
      </ol>

      <p>
        Also it has static getter <em>current</em> that returns information
        about current route (it returns all fields from <b>Route</b> object and
        field <em>parameters</em> that contains matched path variables, if they
        was defined in <b>Route.path</b>).
      </p>

      <p>
        In order to define path variable, you must define path in
        <b>Route</b> object as <b>RegExp</b> and needed part of path enclose in
        brackets:
      </p>

      <code>
        ${ue("\n            const path: Route = {\n            =:  path: /^/root(/[w]+)$/,\n            =:  container: '.page',\n            =:  view() {\n            =: =:  return html`<p>Hello</p>`;\n            =:  },\n            };\n          ")}
      </code>

      <p>
        Then you can get value of captured group (path variable) in
        <em>Route.current.parameters</em>.
      </p>

      <code class="typescript">
        ${ue('\n          // Example: path === "/root/asdf"\n          Router.current.parameters; // Will be ["/root/asdf", "/asdf"]\n        ')}
      </code>

      <blockquote>
        ${de("lightbulb")} Actually <strong>parameters</strong> is result of
        <b>RegExp.exec</b> method, so variables will start from index <i>1</i>.
        And index <i>0</i> is path itself.
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"
          >RegExp.exec at MDN</a
        >.
      </blockquote>

      <p>
        If your routes have the same container you may define global container
        and omit <em>container</em> property in <b>Route</b> object:
      </p>

      <code class="typescript">
        ${ue('Router.container = ".page"; // You can read and write this property')}
      </code>

      <p>
        If both global and local containers will be defined, local's one will be
        used.
      </p>
    `},state:{title:"# State",content:P`
      <p>
        Every site need to have a state. For creating it use
        <em>createState</em>
        function. It accepts object with properties that need to be reactive.
      </p>

      <p>
        Function returns <i>state</i> object that has properties from
        parameter's object. You can use that object to get or to update
        properties like in plain objects.
      </p>

      <code>
        ${ue("\n          const state = createState({ clicks: 0 });\n\n          const clicks = state.clicks;\n          \n          state.clicks++; // Elements that depends from this property will be rerendered\n        ")}
      </code>

      <blockquote>
        ${de("lightbulb")} Object that is returned by
        <em>createState</em> function is fully reactive and can also be modified
        with other properties than was defined on initialization. You can add
        more properties and even delete them and all these changes will be
        reactive.
      </blockquote>

      <code>
        ${ue("\n          const state = createState({ clicks: 0 });\n\n          // This is reactive\n          delete state.clicks;\n          // This is reactive too (setting new variable)\n          state.clicks = 0;\n        ")}
      </code>
    `},styles:{title:"# Styles",content:P`
      <p>Styles can be loaded <i>immediately</i> and <i>lazingly</i>.</p>

      <p>
        Global stylesheets should be connected directly to <b>index.html</b>.
      </p>

      <p>
        For lazily loading stylesheets into the page, you must register it at
        first. Use
      </p>
      <code>
        ${ue("registerCss(name: string | Array<string>): (immediately?: boolean) => void")}
      </code>
      <p>
        function. By default such stylesheets must be set to
        <i>/public/styles</i> directory. You can change directory -
        <a href="https://github.com/YevhenKap/edelweiss#Config">
          see <strong>Config</strong> </a
        >.
      </p>

      <code>
        ${ue("registerCss('header'); // Note that you may not provide extension\n            // or\n            registerCss('main.css');\n          ")}
      </code>

      <blockquote>
        ${de("lightbulb")} This function is not load stylesheet immediately,
        but register is to be loaded on next rendering step (any of the page
        that you defined).
      </blockquote>

      <blockquote>
        ${de("lightbulb")} If you use
        <a href="https://github.com/YevhenKap/edelweiss-cli">edelweiss-cli</a>
        for bootstrapping app, you can also import css and images directly in
        js. Same as in <b>React</b>. Note that such css and images will be
        loaded to page immediately on first rendering.
      </blockquote>

      <p>
        <em>registerCss</em> returns function that allow unregister css which
        was registered. By default it unregisters css on next rendering step,
        Provide <i>immediately</i> attribute if you don't want to wait for it.
      </p>

      <code>
        ${ue("const unregister = registerCss('footer');\n\n            // some meaningful code\n            \n            unregister(); // removes footer.css on next rendering step\n            //or\n            unregister(true); // removes footer.css immediately\n          ")}
      </code>
    `},i18n:{title:"# I18n",content:P`
      <p>
        Framework has <strong>I18n</strong> class for internationalization
        purposes.
      </p>

      <p><strong>I18n</strong> has three static methods:</p>

      <ol>
        <li>
          <code
            >${ue("setLanguage(tag: string): Promise<void>")}</code
          >
          - change language on site. Reactively changes language on site.
        </li>
        <li>
          <code
            >${ue("translate(path: string, variables?: { [string]: string }): string")}</code
          >
          - returns translated text for current language. <b>path</b> is string
          that provide path to text as object keys limited by dot and optional
          <b>variables</b> is object that pass variables into translated text.

          <code class="typescript">
            ${ue("I18n.translate('home.menu.about');")}
          </code>

          <p>
            For defining place for variable you must type
            <em>\${variableName}</em> in translation object.
          </p>

          <code>
            ${ue("\n          const en = {\n          =:  greeting: 'Hello, ${name}!',\n          };\n        ")}
          </code>

          <p>And then provide variable <i>name</i>:</p>

          <code>
            ${ue("I18n.translate('greeting', { name: 'Peter' }); // Output will be \"Hello, Peter!\"")}
          </code>

          <p>You may have many variables inside one text.</p>

          <code>
            ${ue("const en = {\n          =:  greeting: 'Hello, ${name} ${surname}!',\n          };\n          \n          I18n.translate('greeting', { name: 'Peter', surname: 'Dal' }); // Output will be \"Hello, Peter Dal!\"\n          ")}
          </code>

          <blockquote>
            ${de("lightbulb")} The <em>translate</em> function is also
            exported as a standalone function for convenience.
          </blockquote>
        </li>

        <li>
          <code
            >${ue("add(languages: I18nLanguagesSet, initial?: string): void")}</code
          >
          <p>
            - add languages set to <strong>I18n</strong> object.
            <i>initial</i> is a optional tag that, if provided, will be used as
            initial language on the site. If it is omitted first language in set
            will be used.
          </p>

          <code>
            ${ue("I18n.add(\n                =: {\n                =: =: uk: {\n                =: =: =: home: {\n                =: =: =: =: title: 'Ще один набридливий фреймворк.',\n                =: =: =: =: menu: {\n                =: =: =: =: =: docs: 'Документація',\n                =: =: =: =: =: about: 'Про проект',\n                =: =: =: =: },\n                =: =: =: },\n                =: =: },\n                =: =: en: {\n                =: =: =:  home: {\n                =: =: =: =: title: 'Another boring framework.',\n                =: =: =: =: menu: {\n                =: =: =: =: =: docs: 'Documentation',\n                =: =: =: =: =: about: 'About project',\n                =: =: =: =:},\n                =: =: =:},\n                =: =: },\n                =: }\n                =: // initial is optional. From example: will be \"uk\"\n                );")}
          </code>
        </li>
      </ol>

      <p><strong>I18n</strong> has two static getters:</p>

      <ol>
        <li>
          <code class="typescript">
            ${ue("languagesTags: Array<string>")}
          </code>
          - returns all tags for languages, that you set to I18n.add method.
        </li>
        <li>
          <code class="typescript">
            ${ue("currentLanguage: string | undefined")}
          </code>
          - returns tag of current language or undefined if there is not setted
          any.
        </li>
      </ol>

      <code class="typescript">
        ${ue("I18n.languagesTags; // returns ['uk', 'en']\n           I18n.currentLanguage; // 'uk'\n           ")}
      </code>
    `},config:{title:"# Config",content:P`
      <p>
        For configuration available points of framework use
        <strong>Config</strong> class. It has:
      </p>

      <ol>
        <li>
          <code class="typescript">
            ${ue("static get cssRootFolder(): string")}
          </code>
          - returns css root folder.
        </li>
        <li>
          <code class="typescript">
            ${ue("static set cssRootFolder(dir: string): void")}
          </code>
          - change css root folder.
        </li>
      </ol>
    `}},[,t="start"]=ne.current.parameters||[];return P`<div class=${ae}>
    ${P`
    <nav class="${ge}">
      <button
        @click=${e=>{ne.to("/docs").then(()=>{pe("start")})}}
        class="${me}  ${be("start")}"
      >
        Get started
      </button>
      <button
        @click=${e=>{ne.to("/docs-html").then(()=>{pe("html")})}}
        class="${me}  ${be("html")}"
      >
        HTML
      </button>
      <button
        @click=${e=>{ne.to("/docs-component").then(()=>{pe("component")})}}
        class="${me}  ${be("component")}"
      >
        Component
      </button>
      <button
        @click=${e=>{ne.to("/docs-router").then(()=>{pe("router")})}}
        class="${me}  ${be("router")}"
      >
        Router
      </button>
      <button
        @click=${e=>{ne.to("/docs-state").then(()=>{pe("state")})}}
        class="${me}  ${be("state")}"
      >
        State
      </button>
      <button
        @click=${e=>{ne.to("/docs-styles").then(()=>{pe("styles")})}}
        class="${me}  ${be("styles")}"
      >
        Styles
      </button>
      <button
        @click=${e=>{ne.to("/docs-i18n").then(()=>{pe("i18n")})}}
        class="${me}  ${be("i18n")}"
      >
        I18n
      </button>
      <button
        @click=${e=>{ne.to("/docs-config").then(()=>{pe("config")})}}
        class="${me}  ${be("config")}"
      >
        Config
      </button>
    </nav>
  `}
    <div
      class="${oe} ${re.UI.isSidebarOpened?se:""}"
    >
      <section>
        <h2>${e[t].title}</h2>
        <article>${e[t].content}</article>
      </section>
    </div>
  </div>`}},Ce="header-module_header__L1ZnK",Ee="header-module_col__kbp4m",ve="header-module_menu__ZYk9A";var ye="footer-module_footer__3zCYC";function we(e){return P`
    ${P`
    <header class="${Ce}">
      <div class=${Ee}>
        <button
          aria-label="Toggle menu button"
          @click=${()=>{re.UI.isSidebarOpened=!re.UI.isSidebarOpened}}
          class="${ve}"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button aria-label="Home button" @click=${()=>ne.to("/")}>
          ${de("home","Home icon")}
        </button>
      </div>
      <button @click=${()=>ne.to("/docs")}>Documentation</button>
    </header>
  `}
    <main class="content">${fe[e]()}</main>
    ${P`
    <footer class="${ye}">
      ${(new Date).getFullYear()}. Created by Kapelianovych Yevhen
    </footer>
  `}
  `}var _e,xe,Ne=(function(e,t){var n=function(){function e(t){Object.freeze(t);var n="function"==typeof t;return Object.getOwnPropertyNames(t).forEach((function(a){!Object.hasOwnProperty.call(t,a)||null===t[a]||"object"!=typeof t[a]&&"function"!=typeof t[a]||n&&("caller"===a||"callee"===a||"arguments"===a)||Object.isFrozen(t[a])||e(t[a])})),t}class t{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e,...t){var n={};for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}function s(e){return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,escapeHTML:a,inherit:o,nodeStream:function(e){var t=[];return function e(n,a){for(var o=n.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:a,node:o}),a=e(o,a),s(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:o}));return a}(e,0),t},mergeStreams:function(e,t,n){var o=0,i="",r=[];function c(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){i+="<"+s(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+a(e.value)+'"'})).join("")+">"}function d(e){i+="</"+s(e)+">"}function u(e){("start"===e.event?l:d)(e.node)}for(;e.length||t.length;){var g=c();if(i+=a(n.substring(o,g[0].offset)),o=g[0].offset,g===e){r.reverse().forEach(d);do{u(g.splice(0,1)[0]),g=c()}while(g===e&&g.length&&g[0].offset===o);r.reverse().forEach(l)}else"start"===g[0].event?r.push(g[0].node):r.pop(),u(g.splice(0,1)[0])}return i+a(n.substr(o))}});const r=e=>!!e.kind;class c{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!r(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){r(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{l._collapse(e)}))}}class d extends l{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function u(e){return e?"string"==typeof e?e:e.source:null}const g="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",m={begin:"\\\\[\\s\\S]",relevance:0},h={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[m]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[m]},b={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},f=function(e,t,n={}){var a=o({className:"comment",begin:e,end:t,contains:[]},n);return a.contains.push(b),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},C=f("//","$"),E=f("/\\*","\\*/"),v=f("#","$");var y=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:g,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>u(e)).join("")}(t,/.*\b/,e.binary,/\b.*/)),o({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:h,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:b,COMMENT:f,C_LINE_COMMENT_MODE:C,C_BLOCK_COMMENT_MODE:E,HASH_COMMENT_MODE:v,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:g,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}}),w="of and for in not or if then".split(" ");function _(e,t){return t?+t:function(e){return w.includes(e.toLowerCase())}(e)?0:1}const x={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!n.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let e;return this.autoDetect?(e=n.highlightAuto(this.code),this.detectedLanguage=e.language):(e=n.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},N={install(e){e.component("highlightjs",x)}},M=a,k=o,{nodeStream:D,mergeStreams:O}=i,R=Symbol("nomatch");return function(n){var a=[],s=Object.create(null),i=Object.create(null),r=[],c=!0,l=/(^(<[^>]+>|\t|)+|\n)/gm,g="Could not find the language '{}', did you forget to load/include a language module?";const m={disableAutodetect:!0,name:"Plain text",contains:[]};var h={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function p(e){return h.noHighlightRe.test(e)}function b(e,t,n,a){var o={code:t,language:e};S("before:highlight",o);var s=o.result?o.result:f(o.language,o.code,n,a);return s.code=o.code,S("after:highlight",s),s}function f(e,n,a,i){var r=n;function l(e,t){var n=v.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function d(){null!=N.subLanguage?function(){if(""!==O){var e=null;if("string"==typeof N.subLanguage){if(!s[N.subLanguage])return void D.addText(O);e=f(N.subLanguage,O,!0,k[N.subLanguage]),k[N.subLanguage]=e.top}else e=C(O,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&($+=e.relevance),D.addSublanguage(e.emitter,e.language)}}():function(){if(!N.keywords)return void D.addText(O);let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(O),n="";for(;t;){n+=O.substring(e,t.index);const a=l(N,t);if(a){const[e,o]=a;D.addText(n),n="",$+=o,D.addKeyword(t[0],e)}else n+=t[0];e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(O)}n+=O.substr(e),D.addText(n)}(),O=""}function m(e){return e.className&&D.openNode(e.className),N=Object.create(e,{parent:{value:N}})}function p(e){return 0===N.matcher.regexIndex?(O+=e[0],1):(F=!0,0)}var b={};function E(n,o){var s=o&&o[0];if(O+=n,null==s)return d(),0;if("begin"===b.type&&"end"===o.type&&b.index===o.index&&""===s){if(O+=r.slice(o.index,o.index+1),!c){const t=Error("0 width match regex");throw t.languageName=e,t.badRule=b.rule,t}return 1}if(b=o,"begin"===o.type)return function(e){var n=e[0],a=e.rule;const o=new t(a),s=[a.__beforeBegin,a["on:begin"]];for(const t of s)if(t&&(t(e,o),o.ignore))return p(n);return a&&a.endSameAsBegin&&(a.endRe=RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),a.skip?O+=n:(a.excludeBegin&&(O+=n),d(),a.returnBegin||a.excludeBegin||(O=n)),m(a),a.returnBegin?0:n.length}(o);if("illegal"===o.type&&!a){const e=Error('Illegal lexeme "'+s+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===o.type){var i=function(e){var n=e[0],a=r.substr(e.index),o=function e(n,a,o){let s=function(e,t){var n=e&&e.exec(t);return n&&0===n.index}(n.endRe,o);if(s){if(n["on:end"]){const e=new t(n);n["on:end"](a,e),e.ignore&&(s=!1)}if(s){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,a,o)}(N,e,a);if(!o)return R;var s=N;s.skip?O+=n:(s.returnEnd||s.excludeEnd||(O+=n),d(),s.excludeEnd&&(O=n));do{N.className&&D.closeNode(),N.skip||N.subLanguage||($+=N.relevance),N=N.parent}while(N!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),m(o.starts)),s.returnEnd?0:n.length}(o);if(i!==R)return i}if("illegal"===o.type&&""===s)return 1;if(S>1e5&&S>3*o.index)throw Error("potential infinite loop, way more iterations than matches");return O+=s,s.length}var v=x(e);if(!v)throw console.error(g.replace("{}",e)),Error('Unknown language: "'+e+'"');var y=function(e){function t(t,n){return RegExp(u(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,t="|"){for(var n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,o="",s=0;s<e.length;s++){var i=a+=1,r=u(e[s]);for(s>0&&(o+=t),o+="(";r.length>0;){var c=n.exec(r);if(null==c){o+=r;break}o+=r.substring(0,c.index),r=r.substring(c.index+c[0].length),"\\"===c[0][0]&&c[1]?o+="\\"+(+c[1]+i):(o+=c[0],"("===c[0]&&a++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex((e,t)=>t>0&&void 0!==e),a=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!=this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;const n=t.exec(e);return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&(this.regexIndex=0)),n}}function s(e,t){const n=e.input[e.index-1],a=e.input[e.index+e[0].length];"."!==n&&"."!==a||t.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function n(i,r){const c=i;if(i.compiled)return c;i.compiled=!0,i.__beforeBegin=null,i.keywords=i.keywords||i.beginKeywords;let l=null;if("object"==typeof i.keywords&&(l=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=function(e,t){var n={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(t){a(t,e[t])})),n;function a(e,a){t&&(a=a.toLowerCase()),a.split(" ").forEach((function(t){var a=t.split("|");n[a[0]]=[e,_(a[0],a[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemes&&l)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return c.keywordPatternRe=t(i.lexemes||l||/\w+/,!0),r&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",i.__beforeBegin=s),i.begin||(i.begin=/\B|\b/),c.beginRe=t(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(c.endRe=t(i.end)),c.terminator_end=u(i.end)||"",i.endsWithParent&&r.terminator_end&&(c.terminator_end+=(i.end?"|":"")+r.terminator_end)),i.illegal&&(c.illegalRe=t(i.illegal)),void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(t){return o(e,{variants:null},t)}))),e.cached_variants?e.cached_variants:function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(e)?o(e,{starts:e.starts?o(e.starts):null}):Object.isFrozen(e)?o(e):e}("self"===e?i:e)}))),i.contains.forEach((function(e){n(e,c)})),i.starts&&n(i.starts,r),c.matcher=function(e){const t=new a;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&t.addRule(e.terminator_end,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(c),c}(e)}(v),w="",N=i||y,k={},D=new h.__emitter(h);!function(){for(var e=[],t=N;t!==v;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>D.openNode(e))}();var O="",$=0,A=0,S=0,F=!1;try{for(N.matcher.considerAll();;){S++,F?F=!1:(N.matcher.lastIndex=A,N.matcher.considerAll());const e=N.matcher.exec(r);if(!e&&N.matcher.resumingScanAtSamePosition()){O+=r[A],A+=1;continue}if(!e)break;const t=E(r.substring(A,e.index),e);A=e.index+t}return E(r.substr(A)),D.closeAllNodes(),D.finalize(),w=D.toHTML(),{relevance:$,value:w,language:e,illegal:!1,emitter:D,top:N}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:r.slice(A-100,A+100),mode:t.mode},sofar:w,relevance:0,value:M(r),emitter:D};if(c)return{illegal:!1,relevance:0,value:M(r),emitter:D,language:e,top:N,errorRaised:t};throw t}}function C(e,t){t=t||h.languages||Object.keys(s);var n=function(e){const t={relevance:0,emitter:new h.__emitter(h),value:M(e),illegal:!1,top:m};return t.emitter.addText(e),t}(e),a=n;return t.filter(x).filter(A).forEach((function(t){var o=f(t,e,!1);o.language=t,o.relevance>a.relevance&&(a=o),o.relevance>n.relevance&&(a=n,n=o)})),a.language&&(n.second_best=a),n}function E(e){return h.tabReplace||h.useBR?e.replace(l,e=>"\n"===e?h.useBR?"<br>":e:h.tabReplace?e.replace(/\t/g,h.tabReplace):e):e}function v(e){let t=null;const n=function(e){var t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=h.languageDetectRe.exec(t);if(n){var a=x(n[1]);return a||(console.warn(g.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>p(e)||x(e))}(e);if(p(n))return;S("before:highlightBlock",{block:e,language:n}),h.useBR?(t=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"):t=e;const a=t.textContent,o=n?b(n,a,!0):C(a),s=D(t);if(s.length){const e=document.createElement("div");e.innerHTML=o.value,o.value=O(s,D(e),a)}o.value=E(o.value),S("after:highlightBlock",{block:e,result:o}),e.innerHTML=o.value,e.className=function(e,t,n){var a=t?i[t]:n,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.includes(a)||o.push(a),o.join(" ").trim()}(e.className,n,o.language),e.result={language:o.language,re:o.relevance,relavance:o.relevance},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.relevance,relavance:o.second_best.relevance})}const w=()=>{if(!w.called){w.called=!0;var e=document.querySelectorAll("pre code");a.forEach.call(e,v)}};function x(e){return e=(e||"").toLowerCase(),s[e]||s[i[e]]}function $(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{i[e]=t})}function A(e){var t=x(e);return t&&!t.disableAutodetect}function S(e,t){var n=e;r.forEach((function(e){e[n]&&e[n](t)}))}Object.assign(n,{highlight:b,highlightAuto:C,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),E(e)},highlightBlock:v,configure:function(e){h=k(h,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(e,t){var a=null;try{a=t(n)}catch(t){if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),!c)throw t;console.error(t),a=m}a.name||(a.name=e),s[e]=a,a.rawDefinition=t.bind(null,n),a.aliases&&$(a.aliases,{languageName:e})},listLanguages:function(){return Object.keys(s)},getLanguage:x,registerAliases:$,requireLanguage:function(e){var t=x(e);if(t)return t;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:A,inherit:k,addPlugin:function(e){r.push(e)},vuePlugin:N}),n.debugMode=function(){c=!1},n.safeMode=function(){c=!0},n.versionString="10.2.0";for(const t in y)"object"==typeof y[t]&&e(y[t]);return Object.assign(n,y),n}({})}();e.exports=n,n.registerLanguage("css",(function(e){var t={begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{name:"CSS",case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:!0,contains:[{className:"keyword",begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}})),n.registerLanguage("bash",(function(e){const t={};Object.assign(t,{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{/,end:/\}/,contains:[{begin:/:-/,contains:[t]}]}]});const n={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,n]};n.contains.push(a);const o={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},s=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10}),i={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b-?[a-z\._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[s,e.SHEBANG(),i,o,e.HASH_COMMENT_MODE,a,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}})),n.registerLanguage("xml",(function(e){var t={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},n={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},a=e.inherit(n,{begin:"\\(",end:"\\)"}),o=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),i={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[n,s,o,a,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[n,a,s,o]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},t,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[i],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[i],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},i]}]}})),n.registerLanguage("typescript",function(){const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],n=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);return function(a){var o={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:e.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),literal:t.join(" "),built_in:n.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")},s={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},i={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:a.C_NUMBER_RE+"n?"}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},c={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,r],subLanguage:"xml"}},l={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,r],subLanguage:"css"}},d={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,r]};r.contains=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,c,l,d,i,a.REGEXP_MODE];var u={begin:"\\(",end:/\)/,keywords:o,contains:["self",a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,a.NUMBER_MODE]},g={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,s,u]};return{name:"TypeScript",aliases:["ts"],keywords:o,contains:[a.SHEBANG(),{className:"meta",begin:/^\s*['"]use strict['"]/},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,c,l,d,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,i,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,a.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:u.contains}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[\{;]/,excludeEnd:!0,keywords:o,contains:["self",a.inherit(a.TITLE_MODE,{begin:"[A-Za-z$_][0-9A-Za-z$_]*"}),g],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/[\{;]/,excludeEnd:!0,contains:["self",g]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+a.IDENT_RE,relevance:0},s,u]}}}()),n.registerLanguage("json",(function(e){var t={literal:"true false null"},n=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],a=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],o={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:t},s={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(o,{begin:/:/})].concat(n),illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(o)],illegal:"\\S"};return a.push(s,i),n.forEach((function(e){a.push(e)})),{name:"JSON",contains:a,keywords:t,illegal:"\\S"}})),n.registerLanguage("javascript",function(){const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],n=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function a(e){return o("(?=",e,")")}function o(...e){return e.map(e=>function(e){return e?"string"==typeof e?e:e.source:null}(e)).join("")}return function(s){var i="[A-Za-z$_][0-9A-Za-z$_]*",r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},c={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:e.join(" "),literal:t.join(" "),built_in:n.join(" ")},l={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:s.C_NUMBER_RE+"n?"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},u={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,d],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,d]};d.contains=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,u,g,m,l,s.REGEXP_MODE];var h=d.contains.concat([{begin:/\(/,end:/\)/,contains:["self"].concat(d.contains,[s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE])},s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]),p={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:h};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,contains:[s.SHEBANG({binary:"node",relevance:5}),{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,u,g,m,s.C_LINE_COMMENT_MODE,s.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,l,{begin:o(/[{,\n]\s*/,a(o(/(((\/\/.*$)|(\/\*(.|\n)*\*\/))\s*)*/,i+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:i+a("\\s*:"),relevance:0}]},{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE,s.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:h}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:r.begin,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[s.inherit(s.TITLE_MODE,{begin:i}),p],illegal:/\[|%/},{begin:/\$[(.]/},s.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},s.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0},{begin:"(get|set)\\s+(?="+i+"\\()",end:/{/,keywords:"get set",contains:[s.inherit(s.TITLE_MODE,{begin:i}),{begin:/\(\)/},p]}],illegal:/#(?!!)/}}}()),n.registerLanguage("markdown",(function(e){const t={begin:"<",end:">",subLanguage:"xml",relevance:0},n={begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},a={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},o={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};a.contains.push(o),o.contains.push(a);var s=[t,n];return a.contains=a.contains.concat(s),o.contains=o.contains.concat(s),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:s=s.concat(a,o)},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:s}]}]},t,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},a,o,{className:"quote",begin:"^>\\s+",contains:s,end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},n,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}))}(xe={path:_e,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&xe.path)}},xe.exports),xe.exports);class Me{constructor(e,t){this._value=e,this._type=t}static just(e){return new Me(e,"Just")}static nothing(){return new Me(null,"Nothing")}static maybeOf(e){const t=function(e){return e instanceof Me}(e)?e.extract():e;return function(e){return null==e}(t)?Me.nothing():Me.just(t)}isJust(){return"Just"===this._type}isNothing(){return"Nothing"===this._type}map(e){return this.isJust()?Me.maybeOf(e(this._value)):Me.nothing()}apply(e){return e.isNothing()?Me.nothing():this.map(e.extract())}chain(e){return this.isJust()?e(this._value):Me.nothing()}extract(){return this._value}}const{just:ke,nothing:De,maybeOf:Oe}=Me;function Re(){(function(e,t=document){const n=[];return Oe(t).map(t=>t.querySelectorAll(e).forEach(e=>n.push(e))),Object.freeze(n)})("code").forEach(async e=>{Ne.highlightBlock(e)})}Ne.configure({useBR:!0}),ne.container="#app",ne.add([{path:/^\/docs-?(\w+)?$/,view:()=>we("docsPage"),after(){Re()}},{path:"/",view:()=>we("homePage")}]),ne.to(window.location.pathname),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("service_worker.js").then(e=>console.log("Service worker is registered. Scope is "+e.scope)).catch(e=>console.error("Registration of service worker is failed with "+e))});