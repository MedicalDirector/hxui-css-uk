webpackJsonp([27],{"//eJ":function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"install"},[s("h1",{staticClass:"hx-title"},[this._v("Install Guide")]),s("h2",{staticClass:"hx-subtitle"},[this._v("Adding Hx/UI into a project")]),s("hr"),this._m(0),s("div",{staticClass:"hx-columns"},[s("div",{staticClass:"hx-column"},[s("section",[this._m(1),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"apache"},[this._v("\nnpm install git+https://bitbucket.org/md-design/gethxui.git --save\n          ")])])]),s("br"),s("section",[this._m(2),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n          ")])])]),s("br"),s("section",[this._m(3),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"scss"},[this._v('\n@import "/node_modules/@hxui/css/dist/static/scss/hxui.scss";\n          ')])])]),s("br"),this._m(4),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"scss"},[this._v("\n// set the icon path before you import\n$icons-path: '../fonts/';\n@import \"/node_modules/@hxui/css/dist/static/scss/hxui.scss\";\n        ")])])])]),s("br"),s("h1",{staticClass:"hx-title"},[this._v("Modular")]),s("h2",{staticClass:"hx-subtitle"},[this._v("Just import what you need")]),s("hr"),s("h3",{staticClass:"h5"},[this._v("You can import components individually.")]),this._m(5),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"scss"},[this._v('\n@import "/node_modules/@hxui/css/dist/static/scss/utilities/_all";\n@import "/node_modules/@hxui/css/dist/static/scss/components/grid";\n    ')])]),s("br"),s("h3",{staticClass:"h5"},[this._v("Designed to work in parallel with other frameworks")]),this._m(6),s("br"),s("p",[this._v("For apps that only require HxUI, add this class to the html tag.")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"html"},[this._v('\n<html class="hxui-reset">\n...\n    ')])]),s("p",[this._v("For apps that wish to use multiple frameworks, add this class to any container that is HxUi specific.")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"html"},[this._v('\n<div class="hxui-reset">\n...\n    ')])]),s("br"),s("br"),s("h1",{staticClass:"hx-title"},[this._v("Documentation")]),s("h2",{staticClass:"hx-subtitle"},[this._v("Running documentation locally")]),s("hr"),s("h3",{staticClass:"h5"},[this._v("One command to load them all.")]),s("p",[this._v("You can easily run the documentation locally by running the following command in terminal or command prompt.")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"apache"},[this._v("\nnpm start\n    ")])]),this._m(7)])};e._withStripped=!0;var h={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"h5"},[this._v("You only need "),s("strong",[this._v("1 CSS or SCSS file")]),this._v(" to use Hx/UI")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"h5"},[this._v("1.")]),this._v(" Use "),s("strong",[this._v("NPM")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"h5"},[this._v("2. ")]),s("strong",[this._v("Import the compiled css")]),this._v(" into a index.html file.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"h5"},[this._v("3. ")]),this._v("Alternatively "),s("strong",[this._v("import the uncompiled .scss file")]),this._v(" into an existing projects scss.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Please note that by importing the scss file, icons "),s("strong",[this._v("may not")]),this._v(" work due to the icon font files path."),s("br"),this._v("\n  To change the path simply override it via the "),s("code",[this._v("$icons-path: '../fonts/';")]),this._v(" scss variable.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For example, let's say you only want the HxUI "),s("strong",[this._v("grid")]),this._v(". The file is located in the HxUI/scss/components/grid folder. "),s("br"),this._v("\n    Simply import the utilities dependencies, and then the files you need directly:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In order for HxUI to work with other frameworks, the "),s("code",[this._v(".hxui-reset")]),this._v(" class is required to be the parent class for any HxUi specific styles to work. ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There're basic requirements to run the documentation locally. You will need to install "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank"}},[this._v("Node Package Manager(npm)")]),this._v(" and "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[this._v("VueJS")]),this._v(" in order to run the documentation.")])}]};s.a=h},"6iyd":function(t,s,i){"use strict";s.a={data:function(){return{code:'<link rel="stylesheet" href="/node_modules/@hxui/css/dist/static/css/hxui.css">'}},components:{}}},llwE:function(t,s,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},nMtl:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("6iyd"),h=i("//eJ"),n=!1;var a=function(t){n||i("uWL7")},r=i("VU/8")(e.a,h.a,!1,a,null,null);r.options.__file="pages/install.vue",s.default=r.exports},uWL7:function(t,s,i){var e=i("llwE");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("108dd12c",e,!1)}});