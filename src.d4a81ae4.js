parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"/home/runner/work/go-web/go-web/src/images/home/showcase.jpg":[["showcase.9009afcc.jpg","kJ9j"],"kJ9j"]}],"Focm":[function(require,module,exports) {
"use strict";function e(e){let t=!0;const s=document.getElementsByClassName("validation-error");for(;s.length>0;)s[0].parentNode.removeChild(s[0]);document.getElementById("author").value||(document.querySelector('label[for="author"]').innerHTML+=' <span class="validation-error">This is a required field</span>',t=!1);const l=document.getElementById("email");if(l.value){/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(l.value).toLowerCase())||(document.querySelector('label[for="email"]').innerHTML+=' <span class="validation-error">Некорректный email</span>',t=!1)}else document.querySelector('label[for="email"]').innerHTML+=' <span class="validation-error">This is a required field</span>',t=!1;return 0==t&&e.preventDefault(),t}require("./sass/main.scss"),window.onscroll=function(){window.screen.width>=768?scrollY<=70?document.getElementById("header").classList.remove("scroll"):document.getElementById("header").classList.add("scroll"):scrollY<=120?document.getElementById("header").classList.remove("scroll"):document.getElementById("header").classList.add("scroll")};const t=document.getElementById("form");t.addEventListener("submit",e);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.d4a81ae4.js.map