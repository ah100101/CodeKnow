(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(t,e,n){"use strict";n(165),n(21);var i=[{key:"javascript",text:"⚛️ Javascript",buttonText:"Javascript"},{key:"csharp",text:"⚛️ C#",buttonText:"C#"},{key:"elm",text:"⚛️ Elm",buttonText:"Elm"}],r=[{key:"computer",text:"💻 Computer required",buttonText:"Computer"},{key:"nocomputer",text:"⛔️💻 No computer needed",buttonText:"No Computer"},{key:"whiteboard",text:"✏️ You may want a whiteboard",buttonText:"Whiteboard"},{key:"nowhiteboard",text:"⛔️✏️ No whiteboarding",buttonText:"No Whiteboard"}],o=[{key:"easy",text:"😅 Easy",buttonText:"😅 Easy"},{key:"medium",text:"🤔 Medium",buttonText:"🤔 Medium"},{key:"hard",text:"😨 Hard",buttonText:"😨 Hard"},{key:"unknown",text:"😵 Not so sure about this one",buttonText:"😵 Unknown"},{key:"impossible",text:"☠️ Impossible",buttonText:"☠️ Impossible"}],u=i.concat(r).reduce(function(t,e){return t[e.key]=e.text,t},{}),a=o.reduce(function(t,e){return t[e.key]=e.text,t},{});e.a={difficultyRatings:o,languages:i,categories:r,categoryText:u,difficultyRatingText:a,isValidDifficulty:function(t){return o.filter(function(e){return e.key===t}).length>0},isValidCategory:function(t){return r.filter(function(e){return e.key===t}).length>0}}},165:function(t,e,n){"use strict";var i=n(2),r=n(166);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},166:function(t,e,n){var i=n(22),r=n(23),o=n(51),u=n(50);t.exports=function(t,e,n,a,s){i(e);var c=r(t),f=o(c),l=u(c.length),d=s?l-1:0,x=s?-1:1;if(n<2)for(;;){if(d in f){a=f[d],d+=x;break}if(d+=x,s?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;s?d>=0:l>d;d+=x)d in f&&(a=e(a,f[d],d,c));return a}},170:function(t,e,n){},175:function(t,e,n){"use strict";var i=n(170);n.n(i).a},182:function(t,e,n){"use strict";n.r(e);var i=n(164),r={data:function(){return{}},props:["rating"],computed:{text:function(){return i.a.difficultyRatingText[this.rating]?i.a.difficultyRatingText[this.rating]:"😵 Not so sure about this one"}}},o=(n(175),n(0)),u=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"difficulty"},[this._m(0),e("p",{domProps:{innerHTML:this._s(this.text)}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Difficulty")])])}],!1,null,null,null);u.options.__file="Difficulty.vue";e.default=u.exports}}]);