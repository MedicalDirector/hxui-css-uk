webpackJsonp([10],{"+5Ym":function(e,i,t){"use strict";i.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0rXN":function(e,i,t){var s=t("LCq1");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("fb13c6e6",s,!1,{sourceMap:!1})},"2WXM":function(e,i,t){"use strict";var s=function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"sidebar"}},[i("h1",{staticClass:"hx-title"},[this._v("Sidebar / Drawer")]),i("h2",{staticClass:"hx-subtitle"},[this._v("Primarily used for navigation or meta data.")]),i("hr"),this._l(this.examples,function(e,t){return i("expanding-code-example",{key:t,attrs:{title:e.title,code:e.code,example:e.code,visible:!1,background:e.bg}})})],2)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};i.a=n},"9HKM":function(e,i,t){"use strict";var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"hx-card example is-flat mb-3"},[t("div",{staticClass:"hx-card-header"},[t("h4",{staticClass:"hx-card-header-title my-2"},[e._v(e._s(e.title))]),"<h1>Code here</h1>"!==e.code?t("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:e.toggleCode}},[e._m(0)]):e._e()]),t("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:e.ht+"px"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[t("code",{staticClass:"html"},[e._v("\n"+e._s(e.code)+"\n      ")])])]),t("div",{staticClass:"hx-card-content",class:e.background,domProps:{innerHTML:e._s(e.example)}})])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("span",{staticClass:"hx-icon-control"},[i("i",{staticClass:"hx-icon icon-code is-medium"})])}]};i.a=n},FeEH:function(e,i,t){"use strict";var s=t("Zjej");i.a={data:function(){return{examples:[{title:"Default",code:'\n<div class="hx-card is-flex mb-2 hx-nav-drawer" style="height: 10rem">\n  \x3c!-- no gradient (.hx-sidebar still works)--\x3e\n  <div class="hx-drawer is-active"></div>\n  \x3c!-- Main content --\x3e\n  <div class="content py-3 px-6">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n\n<div class="hx-card is-flex  hx-nav-drawer" style="height: 10rem">\n  \x3c!--  purple gradient --\x3e\n  <div class="hx-drawer has-purple-gradient is-active"></div>\n  \x3c!-- Main content --\x3e\n  <div class="content py-3 px-6">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n\n\x3c!--\n<div class="hx-card mb-2  hx-nav-drawer" style="height: 10rem">\n  <div class="hx-drawer has-purple-gradient"></div>\n</div>\n\n<div class="hx-card mb-2  hx-nav-drawer" style="height: 10rem">\n  <div class="hx-drawer has-orange-gradient"></div>\n</div>\n--\x3e\n        '},{title:"Navigation drawer",code:'\n<div class="hx-card is-flex  hx-nav-drawer" style="height: 10rem">\n  <div class="is-flex">\n    <div class="hx-drawer has-purple-gradient is-minified is-active"></div>\n    <div class="hx-drawer is-active"></div>\n  </div>\n  \x3c!-- Main content --\x3e\n  <div class="content py-3 px-6">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n        '},{title:"Sizes",code:'\n<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-active is-minified"></div>\n  <div class="content py-4 px-6">\n    <h3>Minimised</h3>\n    <p>Add class <code>is-minified</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-active"></div>\n  <div class="content py-4 px-6">\n    <h3>Default</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-active is-expanded"></div>\n  <div class="content py-4 px-6">\n    <h3>Expanded</h3>\n    <p>Add class <code>is-expanded</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n        '},{title:"Right aligned",code:'\n<div class="hx-card is-flex mb-2  hx-nav-drawer" style="height: 10rem">\n  <div class="content py-3 px-6">\n    <p>Add class <code>is-right</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n  <div class="hx-drawer hx-bg-purple is-active is-right"></div>\n</div>\n        '},{title:"With overlay",code:'\n<div class="hx-card is-flex  hx-nav-drawer" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-absolute is-active"></div>\n  <div class="hx-drawer-bg is-active"></div>\n  <div class="content py-4 px-6">\n    <p>Add class <code>is-expanded</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n        '},{title:"Top level",code:"\n<p>To have the drawer on the top level and not in a container, add class <code>is-fixed</code> to the drawer.</p>\n        "}]}},components:{ExpandingCodeExample:s.a}}},LCq1:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},MjQU:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("FeEH"),n=t("2WXM"),a=!1;var r=function(e){a||t("0rXN")},d=t("VU/8")(s.a,n.a,!1,r,null,null);d.options.__file="pages/sidebar.vue",i.default=d.exports},PoMR:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},TGhW:function(e,i,t){var s=t("PoMR");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("7c1bd6b0",s,!1,{sourceMap:!1})},Zjej:function(e,i,t){"use strict";var s=t("+5Ym"),n=t("9HKM"),a=!1;var r=function(e){a||t("TGhW")},d=t("VU/8")(s.a,n.a,!1,r,"data-v-735a47f0",null);d.options.__file="components/ExpandingCodeExample.vue",i.a=d.exports}});