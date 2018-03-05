webpackJsonp([2],{"+5Ym":function(t,e,i){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"//LE":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".hx-example .hx-tooltip{display:inline-block;margin:0 16px;margin:0 1rem;position:relative}",""])},"0dgp":function(t,e,i){var o=i("gIdq");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("27cae0c4",o,!1)},"7GIq":function(t,e,i){"use strict";var o=i("Zjej");e.a={data:function(){return{examples:[{title:"Example",code:'\n<p>The tooltip structure is simple:</p>\n<ul>\n  <li>\n    <code>.hx-tooltip</code>: The tooltip container\n    <ul>\n      <li>\n        <code>.hx-tooltip-content</code>: The tooltip content\n      </li>\n    </ul>\n  </li>\n</ul>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-active">\n    <div class="hx-tooltip-content">\n      A Simple Tooltip\n    </div>\n  </div>\n</div>\n          '},{title:"Arrow positions",code:'\n<p>There are four modifiers to change the tooltip arrow alignment: <br /><code>.is-top</code>, <code>.is-right</code>, <code>.is-bottom</code>, and <code>.is-left</code></p>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-top is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the top\n    </div>\n  </div>\n  <div class="hx-tooltip is-right is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the right\n    </div>\n  </div>\n  <div class="hx-tooltip is-bottom is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the bottom\n    </div>\n  </div>\n  <div class="hx-tooltip is-left is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the left\n    </div>\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:o.a}}},"9HKM":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hx-card example is-flat mb-3"},[i("div",{staticClass:"hx-card-header"},[i("h4",{staticClass:"hx-card-header-title my-2"},[t._v(t._s(t.title))]),"<h1>Code here</h1>"!==t.code?i("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:t.toggleCode}},[t._m(0)]):t._e()]),i("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:t.ht+"px"}},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[i("code",{staticClass:"html"},[t._v("\n"+t._s(t.code)+"\n      ")])])]),i("div",{staticClass:"hx-card-content",class:t.background,domProps:{innerHTML:t._s(t.example)}})])};o._withStripped=!0;var n={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=n},F3Hf:function(t,e,i){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tooltips"}},[e("h1",{staticClass:"hx-title"},[this._v("Tooltips")]),e("h2",{staticClass:"hx-subtitle"},[this._v("This component is used to display extra information to a user about an element by displaying a floating description.")]),e("hr"),this._l(this.examples,function(t,i){return e("expanding-code-example",{key:i,attrs:{title:t.title,code:t.code,example:t.code,visible:!1,background:t.bg}})})],2)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},"K/An":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7GIq"),n=i("F3Hf"),s=!1;var a=function(t){s||i("kDsY")},l=i("VU/8")(o.a,n.a,!1,a,null,null);l.options.__file="pages/tooltips.vue",e.default=l.exports},Zjej:function(t,e,i){"use strict";var o=i("+5Ym"),n=i("9HKM"),s=!1;var a=function(t){s||i("0dgp")},l=i("VU/8")(o.a,n.a,!1,a,"data-v-735a47f0",null);l.options.__file="components/ExpandingCodeExample.vue",e.a=l.exports},gIdq:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},kDsY:function(t,e,i){var o=i("//LE");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("095bdea6",o,!1)}});