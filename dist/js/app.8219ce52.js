(function(i){function t(t){for(var o,l,a=t[0],n=t[1],r=t[2],A=0,L=[];A<a.length;A++)l=a[A],Object.prototype.hasOwnProperty.call(u,l)&&u[l]&&L.push(u[l][0]),u[l]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o]);V&&V(t);while(L.length)L.shift()();return e.push.apply(e,r||[]),s()}function s(){for(var i,t=0;t<e.length;t++){for(var s=e[t],o=!0,a=1;a<s.length;a++){var n=s[a];0!==u[n]&&(o=!1)}o&&(e.splice(t--,1),i=l(l.s=s[0]))}return i}var o={},u={app:0},e=[];function l(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return i[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=i,l.c=o,l.d=function(i,t,s){l.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:s})},l.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},l.t=function(i,t){if(1&t&&(i=l(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var o in i)l.d(s,o,function(t){return i[t]}.bind(null,o));return s},l.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return l.d(t,"a",t),t},l.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],n=a.push.bind(a);a.push=t,a=a.slice();for(var r=0;r<a.length;r++)t(a[r]);var V=n;e.push([0,"chunk-vendors"]),s()})({0:function(i,t,s){i.exports=s("56d7")},"1dc1":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAKbBAMAAACUTL0MAAAAKlBMVEXG5tTrq7EAkkfOKzcAk0bOKzf////a8OTqpKkAkkbOKzcAkkbOKzf///8YYRtkAAAAC3RSTlOPj6amp6enxsb9/Xmb5Q4AAAQVSURBVHja7dHBCcAgFETBbyrxEKzDPlOEDYqki8CSeRUsO+3pFdAeCStrzYSV5yr9LujQBV3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QoQu6oAu6oAu6oAu6oAu6oAu6oAu6oAu6oEMXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdEGHLuiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCDl3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QoQu6oAu6oAu6oAu6oAu6oAu6oAu6oAu6oEMXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdEGHLuiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCDl3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QBR26oAu6oAu6oAu6oAu6oAu6oAu6oAu6oAu6oEMXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdEGHLuiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCDl3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QBR26oAu6oAu6oAu6oAu6oAu6oAu6oAu6oAs6dEEXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdEGHLuiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCDl3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QBR26oAu6oAu6oAu6oAu6oAu6oAu6oAu6oAs6dEEXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdOiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCDl3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QBR26oAu6oAu6oAu6oAu6oAu6oAu6oAu6oAs6dEEXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdOiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCLujQBV3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QBR26oAu6oAu6oAu6oAu6oAu6oAu6oAu6oAs6dEEXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdOiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCLujQBV3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QoQu6oAu6oAu6oAu6oAu6oAu6oAu6oAu6oAs6dEEXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdOiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCLujQBV3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QoQu6oAu6oAu6oAu6oAu6oAu6oAu6oAu6oEMXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdEEXdOiCLuiCLuiCLuiCLuiCLuiCLuiCLuiCLujQBV3QBV3QBV3QBV3QBV3QBV3QBV3QBV3QoQu6oAu6oAu6oAu6oAu6oAu6oAu6oAu6oEMXdEEXdEEXdEEXdEEXdH1Tu3vCzD0i3lwzYeV5Ab9JDFKbJ8q/AAAAAElFTkSuQmCC"},"410f":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgAgMAAABOjnORAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAI5X////tKTkDtutPAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+EICgkcMIF+n1wAAAQ4SURBVHja7dAxAQAACAOglbSkKa3gtQsikBRMwRZElixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsv4OUYJZujGf1S4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDgtMTBUMDk6Mjg6NDgrMDA6MDDqLAQJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA4LTEwVDA5OjI4OjQ4KzAwOjAwm3G8tQAAAABJRU5ErkJggg=="},"56d7":function(i,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),u=function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("div",{attrs:{id:"app"}},[o("nav",{staticClass:"navbar"},[o("img",{attrs:{src:s("cf05"),alt:"logo"}}),o("div",{staticClass:"input-group search-bar mb-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:i.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cerca..."},domProps:{value:i.search},on:{keydown:function(t){return!t.type.indexOf("key")&&i._k(t.keyCode,"enter",13,t.key,"Enter")?null:i.searchAll.apply(null,arguments)},input:function(t){t.target.composing||(i.search=t.target.value)}}}),o("button",{staticClass:"btn",attrs:{type:"button ",id:"button-addon2"},on:{click:i.searchAll}},[i._v(" Search ")])])]),o("main",[o("div",{staticClass:"container"},[o("div",{staticClass:"movies py-5"},[!1===i.empty?o("h1",{staticClass:"title"},[i._v("FILM")]):i._e(),""==!i.search?o("div",{staticClass:"row row-cols-3 g-3"},i._l(i.movies,(function(i){return o("Card",{key:i.id,attrs:{data:i}})})),1):i._e()]),o("div",{staticClass:"tvShows py-5"},[!1===i.empty?o("h1",{staticClass:"title"},[i._v("SERIE TV")]):i._e(),!i.movies==[]?o("div",{staticClass:"row row-cols-3 g-3"},i._l(i.tvShows,(function(i){return o("Card",{key:i.id,attrs:{data:i}})})),1):i._e()])])])])},e=[],l=(s("ac1f"),s("841c"),s("bc3a")),a=s.n(l),n=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"col mt-5"},[s("div",{staticClass:"product-card"},[s("div",{staticClass:"info p-5"},[s("div",{staticClass:"info-content mb-2"},[s("strong",{staticClass:"text-big"},[i._v("Titolo: ")]),i._v(i._s(i.data.title||i.data.name)+" ")]),s("div",{staticClass:"info-content mb-2"},[s("strong",{staticClass:"text-big"},[i._v("Titolo Originale: ")]),i._v(i._s(i.data.original_title||i.data.original_name)+" ")]),s("div",{staticClass:"info-content mb-2"},[s("strong",{staticClass:"text-big"},[i._v("Lingua: ")]),s("img",{staticClass:"flag-img ms-2",attrs:{src:i.flags[i.data.original_language]||i.flags.default,alt:"flag"}})]),s("div",{staticClass:"info-content"},[s("strong",{staticClass:"text-big"},[i._v("Voto: ")]),i._v(i._s(i.voteRound)+" ")])]),s("div",{staticClass:"poster"},[s("img",{staticClass:"poster-img",attrs:{src:i.imgPath,alt:"poster"}})])])])},r=[],V={name:"Card",data:function(){return{flags:{en:s("70ff"),it:s("1dc1"),fr:s("410f"),es:s("b8cf"),default:s("d2c9")}}},props:{data:Object},computed:{imgPath:function(){var i="https://image.tmdb.org/t/p/",t="w342",o=i+t+this.data.poster_path;return this.data.poster_path?o:s("cf05")},voteRound:function(){var i=this.data.vote_average,t=Math.round(i/2);switch(t){case 1:t="⭐";break;case 2:t="⭐⭐";break;case 3:t="⭐⭐⭐";break;case 4:t="⭐⭐⭐⭐";break;case 5:t="⭐⭐⭐⭐⭐";break;default:t="ND"}return t}}},A=V,L=(s("e60d"),s("2877")),d=Object(L["a"])(A,n,r,!1,null,null,null),m=d.exports,E={name:"App",components:{Card:m},data:function(){return{apiKey:"4da53067624ff511e71f704a970e4a73",apiUrl:"https://api.themoviedb.org/3",movies:[],tvShows:[],search:"",empty:!0}},methods:{searchMovie:function(i){var t=this;a.a.get(this.apiUrl+"/search/"+i,{params:{api_key:this.apiKey,query:this.search,language:"it"}}).then((function(s){t.empty=!1,"movie"==i?t.movies=s.data.results:t.tvShows=s.data.results}))},searchAll:function(){this.searchMovie("movie"),this.searchMovie("tv")}}},c=E,k=(s("5c0b"),Object(L["a"])(c,u,e,!1,null,null,null)),x=k.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(i){return i(x)}}).$mount("#app")},"5c0b":function(i,t,s){"use strict";s("9c0c")},"70ff":function(i,t,s){i.exports=s.p+"img/en.f3bbc8ec.png"},"9c0c":function(i,t,s){},b8cf:function(i,t,s){i.exports=s.p+"img/es.94782893.png"},cf05:function(i,t,s){i.exports=s.p+"img/logo.0341e7f6.png"},d2c9:function(i,t,s){i.exports=s.p+"img/earth.953ecd63.png"},e60d:function(i,t,s){"use strict";s("e9ec")},e9ec:function(i,t,s){}});
//# sourceMappingURL=app.8219ce52.js.map