webpackJsonp([18],{"4z2y":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("uFF0"),n=i("tXig"),a=!1;var o=function(t){a||i("bg+k")},d=i("VU/8")(s.a,n.a,!1,o,null,null);d.options.__file="pages\\dividers.vue",e.default=d.exports},R7UG:function(t,e,i){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},R9iE:function(t,e,i){var s=i("uCJM");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("6679862f",s,!1)},UEhm:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=n},VLND:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},Zjej:function(t,e,i){"use strict";var s=i("R7UG"),n=i("UEhm"),a=!1;var o=function(t){a||i("R9iE")},d=i("VU/8")(s.a,n.a,!1,o,"data-v-a0505dc6",null);d.options.__file="components\\ExpandingCodeExample.vue",e.a=d.exports},"bg+k":function(t,e,i){var s=i("VLND");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("3510d4e8",s,!1)},tXig:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"spacing"}},[e("h1",{staticClass:"hx-title"},[this._v("Dividers")]),e("h2",{staticClass:"hx-subtitle"},[this._v("These dividers are useful to divide content, indicating what is related or not.")]),e("hr"),e("h4",{staticClass:"mt-10"},[this._v("Type")]),this._m(0),e("br"),this._l(this.examples,function(t,i){return e("expanding-code-example",{key:i,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("is-perforated")]),this._v(" - to divide related content. Just like perforated paper.\n    ")]),e("li",[e("code",[this._v("is-divided")]),this._v(" - to divide none related content\n    ")])])}]};e.a=n},uCJM:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},uFF0:function(t,e,i){"use strict";var s=i("Zjej");e.a={data:function(){return{examples:[{title:"Examples",code:'\n<div class="hx-columns">\n  <div class="hx-column">\n    <div class="hx-card">\n        <div class="is-perforated py-8 px-4">Content</div>\n        <div class="py-4 px-4">Related Content</div>\n    </div>\n  </div>\n   <div class="hx-column">\n    <div class="hx-card">\n        <div class="py-8 px-4">Content</div>\n        <div class="is-divided py-4 px-4">Non Related Content</div>\n    </div>\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:s.a}}}});