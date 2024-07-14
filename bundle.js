(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,"html{\n    font-family: system-ui;\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.background{\n    background: #2863b0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    transform: skewY(-15deg);\n    transform-origin: 0;\n}\n\nheader{\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.header-main-container{\n    display: grid;\n    grid-template-columns: fit-content(400px) 1fr;\n    position: relative;\n    width:1200px;\n    padding: 2rem;\n\n\n}\n\n.header-img{\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n\n}\n\n\n.img-container{\n    position: relative;\n    div{\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n        font-size: 2rem;\n        font-weight: bold;\n        color: white;\n        position: absolute;\n        bottom: 1rem;\n    }\n}\n\n.shadow{\n    box-shadow: 0 0 20px 0;\n\n}\n\n\nul{\n    list-style-type: none;\n\n}\n\n.header-text-container{\n    display: flex;\n    flex-direction: column;\n    background: white;\n    padding: 1rem;\n    margin: 1rem 0;\n    p{\n        font-size: 1.2rem;\n    }\n    ul{\n        display: flex;\n        gap: 0.5rem;\n        justify-content: end;\n\n    }\n}\nsection{\n    padding: 2rem;\n}\n\n\n\n.section-card-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(305px,1fr));\n    column-gap: 1rem;\n    row-gap: 1rem;\n}\n\n.section-card:hover{\n    transform:translateY(-30%);\n\n}\n\n\n.section-card{\n    height: 300px;\n    transition: transform 0.3s;\n    position: relative;\n    z-index: 12;\n    .above{\n        height: 40%;\n        img{\n            height: 100%;\n            width: 100%;\n            object-fit: cover;\n        }\n\n    }\n    .below{\n        h2{\n            text-align: center;\n        }\n        height: 60%;\n        display: grid;\n        grid-template-columns: 3fr 2fr;\n\n        p{\n            grid-column: span 2;\n            padding-left: 0.5rem;\n        }\n\n    ul{\n        display: flex;\n        gap: 0.5rem;\n        align-items: center;\n    }\n    }\n}\n\nimg{\n    transition: height 2s;\n}\n\n\n\nfooter{\n    background: #2863b0;\n    display: flex;\n    justify-content: center;\n    .footer-container{\n        display: flex;\n        padding: 2rem 0 ;\n        justify-content: center;\n        gap: 1rem;\n\n        .left{\n            max-width: 500px;\n            font-size: 1.6rem;\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n\n        }\n        .right{\n            flex: 1;\n            display: flex;\n            justify-content: center;\n            img{\n                width: 100%;\n                aspect-ratio: 16/9;\n                object-fit: cover;\n            }\n        }\n    }\n\n}\n\n\n\n\n\n.icon{\n    width: 24px;\n}\n.icon-text{\n    display: flex;\n    gap: 0.5rem;\n}\n\n@media (max-width: 1200px) and (min-width: 701px){\n\n    .header-main-container{\n        display: block;\n    }\n\n    .header-text-container{\n        display: block;\n        width: 80%;\n        margin: 3rem auto auto;\n\n    }\n    .img-container{\n        float: left;\n        width: 300px;\n        margin-right: 1.5rem;\n    }\n    .left{\n        width: auto;\n    }\n\n}\n\n\n\n@media (max-width: 700px) {\n    .header-main-container{\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        align-items: center;\n\n    }\n    footer{\n        .footer-container{\n            flex-direction: column;\n            width: 100%;\n            padding: 0;\n            .left{\n                align-items: center;\n                max-width: none;\n                padding: 0 2rem;\n            }\n        }\n    }\n\n    .section-card-container{\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    }\n\n}\n\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var f=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=i(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),i=t.n(r),o=t(825),a=t.n(o),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),f=t.n(p),u=t(113),m=t.n(u),h=t(365),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),i()(h.A,g),h.A&&h.A.locals&&h.A.locals})();