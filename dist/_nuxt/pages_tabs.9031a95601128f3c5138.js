webpackJsonp([6],{UEhm:function(n,a,s){"use strict";var i=function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("div",{staticClass:"hx-card example is-flat mb-3"},[s("div",{staticClass:"hx-card-header"},[s("h4",{staticClass:"hx-card-header-title my-2"},[n._v(n._s(n.title))]),"<h1>Code here</h1>"!==n.code?s("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:n.toggleCode}},[n._m(0)]):n._e()]),s("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:n.ht+"px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[s("code",{staticClass:"html"},[n._v("\n"+n._s(n.code)+"\n      ")])])]),s("div",{staticClass:"hx-card-content",class:n.background,domProps:{innerHTML:n._s(n.example)}})])};i._withStripped=!0;var t={render:i,staticRenderFns:[function(){var n=this.$createElement,a=this._self._c||n;return a("span",{staticClass:"hx-icon-control"},[a("i",{staticClass:"hx-icon icon-code is-medium"})])}]};a.a=t},Xugc:function(n,a,s){"use strict";var i=s("Zjej");a.a={data:function(){return{examples:[{title:"Default tab",code:'\n<p>The tab component only works in the HxUi-angular or HxUi-react web component libraries.</p>\n\n<br>\n<div class="hx-tab-container">\n  <ul class="hx-nav hx-nav-tabs">\n    <li class="hx-nav-item is-active">\n      <a class="hx-nav-link is-active" href="javascript:void(0);">\n        <span>Template</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Typescript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Javascript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Other</span>\n      </a>\n    </li>\n  </ul>\n  <div class="hx-tab-content">\n        Tab content container\n  </div>\n</div>\n          '},{title:"Center aligned",code:'\n<p>Centering the nav can be easily done by adding the modifier <code>.is-centered</code> to the <code>.hx-nav</code> base class.</p>\n\n<br>\n<div class="hx-tab-container">\n  <ul class="hx-nav hx-nav-tabs is-centered">\n    <li class="hx-nav-item is-active">\n      <a class="hx-nav-link is-active" href="javascript:void(0);">\n        <span>Template</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Typescript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Javascript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Other</span>\n      </a>\n    </li>\n  </ul>\n  <div class="hx-tab-content">\n        Tab content container\n  </div>\n</div>\n          '},{title:"Right aligned",code:'\n<p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>\n\n<br>\n<div class="hx-tab-container">\n  <ul class="hx-nav hx-nav-tabs is-right">\n    <li class="hx-nav-item is-active">\n      <a class="hx-nav-link is-active" href="javascript:void(0);">\n        <span>Template</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Typescript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Javascript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Other</span>\n      </a>\n    </li>\n  </ul>\n  <div class="hx-tab-content">\n        Tab content container\n  </div>\n</div>\n          '},{title:"Justified aligned",code:'\n<p>To justify align the nav, simply add the modifier <code>.is-justified</code> to the <code>.hx-nav</code> base class.</p>\n\n<br>\n<div class="hx-tab-container">\n  <ul class="hx-nav hx-nav-tabs is-justified">\n    <li class="hx-nav-item is-active">\n      <a class="hx-nav-link is-active" href="javascript:void(0);">\n        <span>Template</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Typescript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Javascript</span>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <span>Other</span>\n      </a>\n    </li>\n  </ul>\n  <div class="hx-tab-content">\n    Tab content container\n  </div>\n</div>\n          '},{title:"Info tabs",code:'\n<p>To justify align the nav, simply add the modifier <code>.is-justified</code> to the <code>.hx-nav</code> base class.</p>\n\n<br>\n<div class="hx-tab-container">\n  <ul class="hx-nav hx-nav-tabs is-justified has-info">\n    <li class="hx-nav-item is-active">\n      <a class="hx-nav-link is-active" href="javascript:void(0);">\n        <h6 class="mt-0 mb-1">Unbatched</strong></h6>\n        <div class="hx-columns mt-0 pt-0">\n          <div class="hx-column hx-flex-grow">\n            <h6 class="mt-0 mb-0">75 <small>vouchers</small></h6>\n            <h6 class="mt-0 mb-0">-300 <small>claims</small></h6>\n          </div>\n          <div class="hx-column has-text-right">\n            <h5 class="mb-0">$3,766.00</h4>\n          </div>\n        </div>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <h6 class="mt-0 mb-1">Batched</strong></h6>\n        <div class="hx-columns mt-0 pt-0">\n          <div class="hx-column hx-flex-grow">\n            <h6 class="mt-0 mb-0">6,899 <small>vouchers</small></h6>\n            <h6 class="mt-0 mb-0">300 <small>claims</small></h6>\n          </div>\n          <div class="hx-column has-text-right">\n            <h5 class="mb-0">$3,766.00</h5>\n          </div>\n        </div>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <h6 class="mt-0 mb-1">Awaiting response</strong></h6>\n        <div class="hx-columns mt-0 pt-0">\n          <div class="hx-column hx-flex-grow">\n            <h6 class="mt-0 mb-0">75 <small>vouchers</small></h6>\n            <h6 class="mt-0 mb-0">4 <small>claims</small></h6>\n          </div>\n          <div class="hx-column has-text-right">\n            <h5 class="mb-0">$3,766.00</h5>\n          </div>\n        </div>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <h6 class="mt-0 mb-1">Exceptions</strong></h6>\n        <div class="hx-columns mt-0 pt-0">\n          <div class="hx-column hx-flex-grow">\n            <h6 class="mt-0 mb-0">34 <small>vouchers</small></h6>\n            <h6 class="mt-0 mb-0">4 <small>claims</small></h6>\n          </div>\n          <div class="hx-column has-text-right">\n            <h5 class="mb-0">$3,766.00</h5>\n          </div>\n        </div>\n      </a>\n    </li>\n    <li class="hx-nav-item">\n      <a class="hx-nav-link" href="javascript:void(0);">\n        <h6 class="mt-0 mb-1">Resolved</strong></h6>\n        <div class="hx-columns mt-0 pt-0">\n          <div class="hx-column hx-flex-grow">\n            <h6 class="mt-0 mb-0">9,728 <small>vouchers</small></h6>\n            <h6 class="mt-0 mb-0">4 <small>claims</small></h6>\n          </div>\n          <div class="hx-column has-text-right">\n            <h5 class="mb-0">$3,766.00</h5>\n          </div>\n        </div>\n      </a>\n    </li>\n  </ul>\n  <div class="hx-tab-content">\n    Tab content container\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:i.a}}},YXyL:function(n,a,s){var i=s("YiXI");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);s("rjj0")("f813cbc6",i,!1)},YiXI:function(n,a,s){(n.exports=s("FZ+f")(!1)).push([n.i,"",""])},Zjej:function(n,a,s){"use strict";var i=s("deq0"),t=s("UEhm"),e=!1;var l=function(n){e||s("lj5b")},c=s("VU/8")(i.a,t.a,!1,l,"data-v-a0505dc6",null);c.options.__file="components\\ExpandingCodeExample.vue",a.a=c.exports},deq0:function(n,a,s){"use strict";a.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},hD7D:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("Xugc"),t=s("heOX"),e=!1;var l=function(n){e||s("YXyL")},c=s("VU/8")(i.a,t.a,!1,l,null,null);c.options.__file="pages\\tabs.vue",a.default=c.exports},heOX:function(n,a,s){"use strict";var i=function(){var n=this.$createElement,a=this._self._c||n;return a("div",{attrs:{id:"tabs"}},[a("h1",{staticClass:"hx-title"},[this._v("Tabs")]),a("h2",{staticClass:"hx-subtitle"},[this._v("The tab component is used for hiding content behind a selectable item.")]),a("hr"),this._l(this.examples,function(n,s){return a("expanding-code-example",{key:s,attrs:{title:n.title,code:n.code,example:n.code,visible:!1}})})],2)};i._withStripped=!0;var t={render:i,staticRenderFns:[]};a.a=t},lj5b:function(n,a,s){var i=s("x8Dn");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);s("rjj0")("a8db8192",i,!1)},x8Dn:function(n,a,s){(n.exports=s("FZ+f")(!1)).push([n.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});