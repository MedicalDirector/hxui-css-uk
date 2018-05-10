webpackJsonp([2],{"7LsI":function(t,i,e){var n=e("YVny");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("63eb146c",n,!1)},"7ejp":function(t,i,e){"use strict";var n=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"tooltips"}},[i("h1",{staticClass:"hx-title"},[this._v("Tooltips")]),i("h2",{staticClass:"hx-subtitle"},[this._v("This component is used to display extra information to a user about an element by displaying a floating description.")]),i("hr"),this._l(this.examples,function(t,e){return i("expanding-code-example",{key:e,attrs:{title:t.title,code:t.code,example:t.code,visible:!1,background:t.bg}})})],2)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};i.a=o},I5XY:function(t,i,e){"use strict";var n=e("Zjej");i.a={data:function(){return{examples:[{title:"Example",code:'\n<p>The tooltip structure is simple:</p>\n<ul>\n  <li>\n    <code>.hx-tooltip</code>: The tooltip container\n    <ul>\n      <li>\n        <code>.hx-tooltip-content</code>: The tooltip content\n      </li>\n    </ul>\n  </li>\n</ul>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-active">\n    <div class="hx-tooltip-content">\n      A Simple Tooltip\n    </div>\n  </div>\n</div>\n          '},{title:"Arrow positions",code:'\n<p>There are four modifiers to change the tooltip arrow alignment: <br /><code>.is-top</code>, <code>.is-right</code>, <code>.is-bottom</code>, and <code>.is-left</code></p>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-top is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the top\n    </div>\n  </div>\n  <div class="hx-tooltip is-right is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the right\n    </div>\n  </div>\n  <div class="hx-tooltip is-bottom is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the bottom\n    </div>\n  </div>\n  <div class="hx-tooltip is-left is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the left\n    </div>\n  </div>\n</div>\n          '},{title:"Contextual",code:'\n<p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code> to the tooltip.</p>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-top is-success is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the top\n    </div>\n  </div>\n  <div class="hx-tooltip is-right is-success is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the right\n    </div>\n  </div>\n  <div class="hx-tooltip is-bottom is-success is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the bottom\n    </div>\n  </div>\n  <div class="hx-tooltip is-left is-success is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the left\n    </div>\n  </div>\n</div>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-top is-warning is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the top\n    </div>\n  </div>\n  <div class="hx-tooltip is-right is-warning is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the right\n    </div>\n  </div>\n  <div class="hx-tooltip is-bottom is-warning is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the bottom\n    </div>\n  </div>\n  <div class="hx-tooltip is-left is-warning is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the left\n    </div>\n  </div>\n</div>\n<br />\n<div class="hx-example has-text-centered">\n  <div class="hx-tooltip is-top is-danger is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the top\n    </div>\n  </div>\n  <div class="hx-tooltip is-right is-danger is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the right\n    </div>\n  </div>\n  <div class="hx-tooltip is-bottom is-danger is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the bottom\n    </div>\n  </div>\n  <div class="hx-tooltip is-left is-danger is-active">\n    <div class="hx-tooltip-content">\n      Tooltip on the left\n    </div>\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:n.a}}},"K/An":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("I5XY"),o=e("7ejp"),s=!1;var l=function(t){s||e("7LsI")},a=e("VU/8")(n.a,o.a,!1,l,null,null);a.options.__file="pages\\tooltips.vue",i.default=a.exports},R7UG:function(t,i,e){"use strict";i.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},R9iE:function(t,i,e){var n=e("uCJM");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("6679862f",n,!1)},UEhm:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[t._v(t._s(t.title))]),"<h1>Code here</h1>"!==t.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:t.toggleCode}},[t._m(0)]):t._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:t.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[t._v("\n"+t._s(t.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:t.background,domProps:{innerHTML:t._s(t.example)}})])};n._withStripped=!0;var o={render:n,staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("span",{staticClass:"hx-icon-control"},[i("i",{staticClass:"hx-icon icon-code is-medium"})])}]};i.a=o},YVny:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".hx-example .hx-tooltip{display:inline-block;margin:0 16px;margin:0 1rem;position:relative}",""])},Zjej:function(t,i,e){"use strict";var n=e("R7UG"),o=e("UEhm"),s=!1;var l=function(t){s||e("R9iE")},a=e("VU/8")(n.a,o.a,!1,l,"data-v-a0505dc6",null);a.options.__file="components\\ExpandingCodeExample.vue",i.a=a.exports},uCJM:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});