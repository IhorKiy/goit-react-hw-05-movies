"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),a=n(791),c=n(689),o=n(761),u={},i=n(184),s=function(){var e=(0,c.UO)().MoviesID,t=(0,a.useState)(),n=(0,r.Z)(t,2),s=n[0],p=n[1];return(0,a.useEffect)((function(){return(0,o.yo)(e).then((function(e){p(e)})).catch((function(e){console.error()})),function(){}}),[e]),(0,i.jsx)(i.Fragment,{children:s&&(0,i.jsx)("ul",{className:u.list,children:s.cast.map((function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.profile_path);return e.profile_path?(0,i.jsxs)("li",{className:u.item,children:[(0,i.jsx)("img",{width:"200px",src:t,alt:e.name}),(0,i.jsxs)("p",{children:["Name: ",e.name]}),(0,i.jsxs)("p",{children:["Character: ",e.character]})]},e.id):(0,i.jsxs)("p",{children:[" ",e.name,":No image found"]},e.id)}))})})}},761:function(e,t,n){function r(e,t,n,r,a,c,o){try{var u=e[c](o),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function u(e){r(o,a,c,u,i,"next",e)}function i(e){r(o,a,c,u,i,"throw",e)}u(void 0)}))}}n.d(t,{Ew:function(){return i},aQ:function(){return h},zi:function(){return p},yo:function(){return d},MW:function(){return v}});var c=n(757),o=n.n(c),u="0eb6fe6e84ef57a3582e47f666d7118a";function i(){return s.apply(this,arguments)}function s(){return(s=a(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=a(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Not found");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=a(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US&page=1&include_adult=false"));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=a(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Not found");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=a(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Not found");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=76.0ecccf1a.chunk.js.map