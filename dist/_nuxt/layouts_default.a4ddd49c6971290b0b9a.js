webpackJsonp([0],{"2Xr6":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},"5buK":function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".navs{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;overflow:auto;-webkit-box-shadow:inset 0 -1px 0 0 rgba(0,0,0,.05);box-shadow:inset 0 -1px 0 0 rgba(0,0,0,.05)}",""])},"5c3/":function(t,a,s){var i=s("pPaY");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("0bcbcf28",i,!1)},"9cJM":function(t,a,s){"use strict";var i=s("BOFB"),e=s("SiY1"),n=s("jB3p");a.a={components:{NavContainer:i.a,MainNav:e.a,SubNav:n.a}}},BOFB:function(t,a,s){"use strict";var i=s("eVa8"),e=s("NGU+"),n=!1;var o=function(t){n||s("5c3/")},c=s("VU/8")(i.a,e.a,!1,o,null,null);c.options.__file="components\\NavContainer.vue",a.a=c.exports},"Ea/y":function(t,a,s){var i=s("HsW8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("2b7826a5",i,!1)},H5mr:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"panel"},[s("div",{staticClass:"hx-header hx-flex py-2 has-pointer",on:{click:t.toggleItem}},[s("span",{staticClass:"hx-flex-1 py-2"},[t._v(t._s(t.title))]),s("span",{staticClass:"hx-icon-control  py-1"},[s("i",{staticClass:"hx-icon is-small my-0",class:{"icon-angle-down":t.show,"icon-angle-up":!t.show}})])]),s("div",{staticClass:"navs",style:{height:t.ht+"px"}},[s("ul",{ref:"navs",staticClass:"hx-nav hx-nav-vertical py-4"},t._l(t.items,function(a){return s("li",{staticClass:"hx-nav-item"},[s("router-link",{staticClass:"hx-nav-link",attrs:{to:{path:a.path},"exact-active-class":"is-active",exact:""},nativeOn:{click:function(a){t.closeNav(a)}}},[t._v("\n          "+t._s(a.name)+"\n        ")])],1)}))])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};a.a=e},HsW8:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".hx-nav-brand[data-v-fd0cac5c]{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.hxui-logo[data-v-fd0cac5c]{-webkit-transition:.3s;transition:.3s;max-height:32px;max-height:2rem}.hxui-logo.is-white[data-v-fd0cac5c]{fill:#fff}",""])},JNbh:function(t,a,s){var i=s("2Xr6");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("7fe02c08",i,!1)},LM1x:function(t,a,s){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hx-sidebar is-medium-width is-scrollable py-0"},this._l(this.sections,function(t,s){return a("expanding-nav-item",{key:s,attrs:{title:t.title,items:t.items}})}))};i._withStripped=!0;var e={render:i,staticRenderFns:[]};a.a=e},LziB:function(t,a,s){var i=s("5buK");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("614f90da",i,!1)},Ma2J:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("9cJM"),e=s("STrE"),n=!1;var o=function(t){n||s("w9dq")},c=s("VU/8")(i.a,e.a,!1,o,null,null);c.options.__file="layouts\\default.vue",a.default=c.exports},"NGU+":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hx-nav-drawer"},[s("transition",{attrs:{name:"slide-left"}},[t.showNav?s("span",[t._t("default")],2):t._e()]),s("transition",{attrs:{name:"fade"}},[t.showNav?s("div",{staticClass:"hx-overlay",on:{click:function(a){t.showNav=!1}}}):t._e()]),s("div",{staticClass:"hx-nav-navicon",class:{"is-closed":!t.showNav},on:{click:function(a){t.showNav=!t.showNav}}},[s("i",{staticClass:"hx-icon icon-navicon"})])],1)};i._withStripped=!0;var e={render:i,staticRenderFns:[]};a.a=e},R2sn:function(t,a,s){"use strict";var i=s("tiyn"),e=s("H5mr"),n=!1;var o=function(t){n||s("LziB")},c=s("VU/8")(i.a,e.a,!1,o,null,null);c.options.__file="components\\ExpandingNavItem.vue",a.a=c.exports},STrE:function(t,a,s){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hxui-reset",attrs:{id:"app"}},[a("div",{staticClass:"hx-page"},[a("div",{staticClass:"hx-page-body"},[a("nav-container",[a("main-nav"),a("sub-nav")],1),a("div",{staticClass:"hx-section scrollable-y"},[a("div",{staticClass:"hx-section is-comfortable"},[a("transition",{attrs:{name:"slide-x",mode:"out-in"}},[a("nuxt")],1)],1)])],1)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};a.a=e},SiY1:function(t,a,s){"use strict";var i=s("bFd/"),e=s("UYz+"),n=!1;var o=function(t){n||s("Ea/y")},c=s("VU/8")(i.a,e.a,!1,o,"data-v-fd0cac5c",null);c.options.__file="components\\MainNav.vue",a.a=c.exports},"UYz+":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("aside",{staticClass:"hx-sidebar has-blue-gradient",class:{"is-minified":t.isMini}},[s("ul",{staticClass:"hx-nav hx-nav-vertical hx-flex-auto"},[s("li",{staticClass:"hx-nav-item hx-nav-brand"},[s("svg",{staticClass:"hxui-logo is-white"},[s("use",{attrs:{"xlink:href":"/static/assets/images/hxui.svg#hxui"}})])]),t._l(t.mainNavItems,function(a){return s("li",{staticClass:"hx-nav-item"},[s("a",{staticClass:"hx-nav-link",class:{"is-active":"http://gethxui.com"===a.link,"is-disabled":"disabled"===a.status},attrs:{href:a.link}},[s("i",{staticClass:"hx-icon",class:a.icon}),s("span",{staticClass:"ml-1"},[t._v(t._s(a.name))])])])})],2),s("ul",{staticClass:"hx-nav hx-nav-vertical is-bottom"},[t._m(0),s("li",{staticClass:"hx-nav-item"},[s("a",{staticClass:"hx-nav-link",on:{click:t.toggleNav}},[s("i",{staticClass:"hx-icon icon-more"}),s("span",{staticClass:"ml-1"},[t._v("Collapse")])])])])])};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"hx-nav-item"},[a("a",{staticClass:"hx-nav-link is-disabled",attrs:{href:""}},[a("i",{staticClass:"hx-icon icon-chat-bubble"}),a("span",{staticClass:"ml-1"},[this._v("Feedback")])])])}]};a.a=e},"bFd/":function(t,a,s){"use strict";a.a={data:function(){return{isMini:!0,mainNavItems:[{name:"HTML & CSS",link:"http://gethxui.com",icon:"icon-html-css",status:"active"},{name:"Angular",link:"http://angular.gethxui.com",icon:"icon-angular",status:"active"},{name:"ReactJS",link:"http://react.gethxui.com",icon:"icon-react",status:"disabled"},{name:"VueJS",link:"http://vue.gethxui.com",icon:"icon-vue",status:"active"}]}},methods:{toggleNav:function(){this.isMini=!this.isMini}}}},eVa8:function(t,a,s){"use strict";a.a={data:function(){return{showNav:!0,windowWidth:0}},methods:{getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}),this.$on("toggleNav",function(){t.windowWidth<1264&&(t.showNav=!t.showNav)})}}},jB3p:function(t,a,s){"use strict";var i=s("wsmD"),e=s("LM1x"),n=!1;var o=function(t){n||s("JNbh")},c=s("VU/8")(i.a,e.a,!1,o,null,null);c.options.__file="components\\SubNav.vue",a.a=c.exports},mzpX:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.slide-x-enter-active,.slide-x-leave-active{-webkit-transition:.5s;transition:.5s}.slide-x-enter{-webkit-transform:translateX(-10%);transform:translateX(-10%);opacity:0}.slide-x-leave-to{-webkit-transform:translateX(10%);transform:translateX(10%);opacity:0}",""])},pPaY:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".slide-left-enter-active,.slide-left-leave-active{-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.slide-left-enter,.slide-left-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.fade-enter-active,.fade-leave-active{-webkit-transition:.5s;transition:.5s}.fade-enter,.fade-leave-to{opacity:0}",""])},tiyn:function(t,a,s){"use strict";a.a={props:["title","items"],data:function(){return{show:!1,ht:0}},methods:{toggleItem:function(){this.show=!this.show,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.navs.clientHeight},closeNav:function(){this.$emit("toggleNav")}},mounted:function(){this.getHeight()}}},w9dq:function(t,a,s){var i=s("mzpX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("0d8db07d",i,!1)},wsmD:function(t,a,s){"use strict";var i=s("R2sn");a.a={data:function(){return{sections:[{title:"Getting started",items:[{name:"Welcome",path:"/"},{name:"Install guide",path:"/install"}]},{title:"Page layouts",items:[{name:"Containers",path:"/containers"},{name:"Elevation",path:"/elevation"},{name:"Grid",path:"/grid"},{name:"Pages",path:"/pages"},{name:"Sections",path:"/sections"},{name:"Spacing",path:"/spacing"}]},{title:"Elements",items:[{name:"Badges",path:"/badges"},{name:"Buttons",path:"/buttons"},{name:"Icons",path:"/icons"},{name:"Tables",path:"/tables"},{name:"Typography",path:"/typography"}]},{title:"Components",items:[{name:"Alerts",path:"/alerts"},{name:"Cards",path:"/cards"},{name:"Dropdowns",path:"/dropdowns"},{name:"Forms",path:"/forms"},{name:"Lists & list group",path:"/lists"},{name:"Modals",path:"/modals"},{name:"Nav",path:"/nav"},{name:"Pagination",path:"/pagination"},{name:"Progress timeline",path:"/progress-timeline"},{name:"Sidebar",path:"/sidebar"},{name:"Snackbars & toasts",path:"/snackbars-toasts"},{name:"Tabs",path:"/tabs"},{name:"Toggle",path:"/toggle"},{name:"Tooltips",path:"/tooltips"}]},{title:"Resources",items:[{name:"Downloads",path:"/downloads"}]}]}},components:{ExpandingNavItem:i.a}}}});