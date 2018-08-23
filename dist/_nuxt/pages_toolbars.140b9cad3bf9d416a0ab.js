webpackJsonp([3],{GMuZ:function(t,s,n){"use strict";var i=n("Zjej");s.a={data:function(){return{examples:[{title:"Basic",code:'\n<p>The most common use case for this component, will be a single row toolbar with a title and/or actions.</p>\n\n  <div class="hx-toolbar">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n          '},{title:"Contextual",code:'\n<p>Toolbars can be themed using one of the existing contextual modifiers</p>\n\n  <div class="hx-toolbar">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-primary">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-warning">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-danger">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-info">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n          '},{title:"Inverted",code:'\n<p>Toolbar themes support the inverted modifier</p>\n\n  <div class="hx-toolbar is-primary is-inverted">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-warning is-inverted">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-danger is-inverted">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar is-info is-inverted">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n          '},{title:"Examples",code:'\n<p>Other examples of how the toolbar can be configured</p>\n\n  <div class="hx-toolbar is-info">\n   <button class="hx-button is-flat"><i class="hx-icon icon-navicon"></i></button>\n    <div class="hx-spacer"></div>\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <br>\n  <div class="hx-toolbar">\n    <div class="hx-spacer"></div>\n      <button class="hx-button is-flat"><i class="hx-icon icon-star"></i></button>\n      <button class="hx-button is-flat"><i class="hx-icon icon-plus"></i></button>\n      <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n    <div class="hx-spacer"></div>\n  </div>\n          '},{title:"Sizes",code:'\n<p>Toolbar supports 3 sizes.</p>\n<ul>\n  <li><span class="hx-badge is-warning"><span class="hx-badge-content">Default</span></span> - no modifier</li>\n  <li><code>.is-small</code> modifier</li>\n  <li><code>.is-xsmall</code> modifier</li>\n</ul>\n\n <div class="hx-toolbar is-info">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n   <div class="hx-toolbar is-info is-small  mt-2">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n  <div class="hx-toolbar is-info is-xsmall mt-2">\n    <span>Title</span>\n    <div class="hx-spacer"></div>\n    <button class="hx-button is-flat"><i class="hx-icon icon-more"></i></button>\n  </div>\n          '}]}},components:{ExpandingCodeExample:i.a}}},NmoD:function(t,s,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},UEhm:function(t,s,n){"use strict";var i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"hx-card example is-flat mb-3"},[n("div",{staticClass:"hx-card-header"},[n("h4",{staticClass:"hx-card-header-title my-2"},[t._v(t._s(t.title))]),"<h1>Code here</h1>"!==t.code?n("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:t.toggleCode}},[t._m(0)]):t._e()]),n("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:t.ht+"px"}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[n("code",{staticClass:"html"},[t._v("\n"+t._s(t.code)+"\n      ")])])]),n("div",{staticClass:"hx-card-content",class:t.background,domProps:{innerHTML:t._s(t.example)}})])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hx-icon-control"},[s("i",{staticClass:"hx-icon icon-code is-medium"})])}]};s.a=o},YPVj:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("GMuZ"),o=n("hE7f"),a=!1;var c=function(t){a||n("qkwK")},l=n("VU/8")(i.a,o.a,!1,c,null,null);l.options.__file="pages\\toolbars.vue",s.default=l.exports},Zjej:function(t,s,n){"use strict";var i=n("deq0"),o=n("UEhm"),a=!1;var c=function(t){a||n("lj5b")},l=n("VU/8")(i.a,o.a,!1,c,"data-v-a0505dc6",null);l.options.__file="components\\ExpandingCodeExample.vue",s.a=l.exports},deq0:function(t,s,n){"use strict";s.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},hE7f:function(t,s,n){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"alerts"}},[s("h1",{staticClass:"hx-title"},[this._v("Toolbars")]),s("h2",{staticClass:"hx-subtitle"},[this._v("The toolbar component is a container for headers, titles, or actions.")]),s("hr"),this._l(this.examples,function(t,n){return s("expanding-code-example",{key:n,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};s.a=o},lj5b:function(t,s,n){var i=n("x8Dn");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("a8db8192",i,!1)},qkwK:function(t,s,n){var i=n("NmoD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("a33db17a",i,!1)},x8Dn:function(t,s,n){(t.exports=n("FZ+f")(!1)).push([t.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});