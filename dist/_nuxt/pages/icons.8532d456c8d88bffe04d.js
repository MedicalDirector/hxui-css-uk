webpackJsonp([31],{BO1k:function(e,n,a){e.exports={default:a("fxRn"),__esModule:!0}},CpWQ:function(e,n,a){"use strict";var t=a("BO1k"),i=a.n(t);n.a={data:function(){return{searchTerm:"",filterResults:[],code:'<i class="hx-icon icon-helix"></i>',icons:[{name:"helix"},{name:"recall"},{name:"power"},{name:"login"},{name:"logout"},{name:"navicon"},{name:"language"},{name:"html-css"},{name:"angular"},{name:"react"},{name:"vue"},{name:"batch"},{name:"batch-outline"},{name:"bell"},{name:"bell-outline"},{name:"body"},{name:"body-outline"},{name:"box"},{name:"box-outline"},{name:"calendar"},{name:"calendar-outline"},{name:"chat-bubble"},{name:"chat-bubble-outline"},{name:"circle"},{name:"circle-outline"},{name:"square"},{name:"square-outline"},{name:"check"},{name:"check-outline"},{name:"check-empty"},{name:"close"},{name:"close-outline"},{name:"close-empty"},{name:"minus"},{name:"minus-outline"},{name:"minus-empty"},{name:"plus"},{name:"plus-outline"},{name:"plus-empty"},{name:"information"},{name:"information-outline"},{name:"information-empty"},{name:"help"},{name:"help-outline"},{name:"help-empty"},{name:"clock"},{name:"clock-outline"},{name:"cloud-download"},{name:"cloud-download-outline"},{name:"cloud-upload"},{name:"cloud-upload-outline"},{name:"email"},{name:"email-outline"},{name:"exclamation"},{name:"exclamation-outline"},{name:"file"},{name:"file-outline"},{name:"filing"},{name:"filing-outline"},{name:"flag"},{name:"flag-outline"},{name:"heart"},{name:"heart-outline"},{name:"flask"},{name:"flask-reverse"},{name:"list"},{name:"list-outline"},{name:"carrot"},{name:"carrot-outline"},{name:"nutrition"},{name:"nutrition-outline"},{name:"pie"},{name:"pie-outline"},{name:"telephone"},{name:"telephone-outline"},{name:"alcohol"},{name:"alcohol-outline"},{name:"wine"},{name:"wine-outline"},{name:"patient"},{name:"patient-outline"},{name:"patient-add"},{name:"patient-add-outline"},{name:"user"},{name:"user-outline"},{name:"person"},{name:"person-outline"},{name:"printer"},{name:"printer-outline"},{name:"stopwatch"},{name:"stopwatch-outline"},{name:"star"},{name:"star-outline"},{name:"queue"},{name:"search"},{name:"injection"},{name:"heartbeat"},{name:"pulse"},{name:"medications"},{name:"iphone"},{name:"mobile"},{name:"credit-card"},{name:"cash"},{name:"attachment"},{name:"paperclip"},{name:"settings"},{name:"settings-outline"},{name:"cog"},{name:"cog-outline"},{name:"note"},{name:"note-outline"},{name:"man"},{name:"woman"},{name:"male"},{name:"female"},{name:"more"},{name:"more-vertical"},{name:"grid"},{name:"sort"},{name:"sort-asc"},{name:"sort-desc"},{name:"caret-up"},{name:"caret-down"},{name:"arrow-up"},{name:"arrow-right"},{name:"arrow-down"},{name:"arrow-left"},{name:"angle-up"},{name:"angle-right"},{name:"angle-down"},{name:"angle-left"},{name:"dashboard"},{name:"dashboard-outline"},{name:"speedometer"},{name:"speedometer-outline"},{name:"appointment"},{name:"appointment-outline"},{name:"calendar"},{name:"calendar-outline"},{name:"today"},{name:"today-outline"},{name:"filter"},{name:"filter-outline"},{name:"funnel"},{name:"funnel-outline"},{name:"code"},{name:"lock"},{name:"lock-outline"},{name:"bin"},{name:"bin-outline"},{name:"send"},{name:"home"},{name:"home-outline"},{name:"compass-outline"},{name:"compass"},{name:"edit-outline"},{name:"edit"},{name:"recalls"},{name:"pathology-outline"},{name:"pathology"},{name:"imaging-outline"},{name:"imaging"},{name:"radiology-outline"},{name:"radiology"},{name:"prescription"},{name:"external-link"}]}},mounted:function(){0===this.searchTerm.length&&(this.filterResults=this.icons)},watch:{searchTerm:function(){if(this.searchTerm.length>0){this.filterResults=[];var e=!0,n=!1,a=void 0;try{for(var t,s=i()(this.icons);!(e=(t=s.next()).done);e=!0){var o=t.value;o.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())>=0&&this.filterResults.push({name:o.name})}}catch(e){n=!0,a=e}finally{try{!e&&s.return&&s.return()}finally{if(n)throw a}}}else this.filterResults=this.icons}}}},O8dN:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"icons"}},[a("h1",{staticClass:"hx-title"},[e._v("Icons")]),a("h2",{staticClass:"hx-subtitle"},[e._v("Hx/Ui comes with its own custom icons.")]),a("hr"),a("section",{staticClass:"hx-section"},[a("div",{staticClass:"hx-columns"},[a("div",{staticClass:"hx-column is-6-widescreen is-offset-3-widescreen"},[a("div",{staticClass:"hx-input-control has-text-centered"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"hx-input",attrs:{type:"text",required:""},domProps:{value:e.searchTerm},on:{input:function(n){n.target.composing||(e.searchTerm=n.target.value)}}}),e._m(0)])])])]),a("section",{staticClass:"hx-section content is-small"},[a("div",{staticClass:"hx-columns is-mobile"},e._l(e.filterResults,function(n){return a("div",{staticClass:"hx-column is-2 has-text-centered"},[a("i",{staticClass:"hx-icon is-large",class:"icon-"+n.name}),a("p",{domProps:{textContent:e._s(n.name)}})])}))]),a("hr"),a("section",{staticClass:"hx-section"},[a("p",[e._v("Because the icons can take a few seconds to load, and because you want control over the space the icons will take, you can use the icon class as a container:")]),a("p",[e._v("Usage")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[e._v("\n"+e._s(e.code)+"\n      ")])]),e._m(1)]),a("hr"),e._m(2)])};t._withStripped=!0;var i={render:t,staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("label",{staticClass:"hx-label"},[n("i",{staticClass:"hx-icon icon-search is-small"}),this._v("\n              Search icons\n            ")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("The "),n("code",[this._v("icon")]),this._v(" container will take up exactly "),n("strong",[this._v("1.5rem x 1.5rem")]),this._v(". The icon itself is sized at "),n("strong",[this._v("21px")]),this._v(".")])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"hx-section"},[a("h3",[e._v("Sizes")]),a("p",[e._v("Font Awesome icons use a font-size of 28px by default, and are best rendered when using multiples of 7. The icon container is always slightly bigger than the font-size used:")]),a("table",{staticClass:"hx-table is-striped"},[a("thead",[a("tr",[a("th",[e._v("Class")]),a("th"),a("th",[e._v("Font-size")]),a("th",[e._v("Container size")])])]),a("tbody",[a("tr",[a("td",[a("code",[e._v("icon is-small")])]),a("td",{staticClass:"has-text-centered"},[a("i",{staticClass:"hx-icon icon-helix is-small"})]),a("td",[e._v("14px")]),a("td",[e._v("1rem x 1rem")])]),a("tr",[a("td",[a("code",[e._v("icon")])]),a("td",{staticClass:"has-text-centered"},[a("i",{staticClass:"hx-icon icon-helix"})]),a("td",[e._v("21px")]),a("td",[e._v("1.5rem x 1.5rem")])]),a("tr",[a("td",[a("code",[e._v("icon is-medium")])]),a("td",{staticClass:"has-text-centered"},[a("i",{staticClass:"hx-icon icon-helix is-medium"})]),a("td",[e._v("28px")]),a("td",[e._v("2rem x 2rem")])]),a("tr",[a("td",[a("code",[e._v("icon is-large")])]),a("td",{staticClass:"has-text-centered"},[a("i",{staticClass:"hx-icon icon-helix is-large"})]),a("td",[e._v("42px")]),a("td",[e._v("3rem x 3rem")])])])])])}]};n.a=i},fxRn:function(e,n,a){a("+tPU"),a("zQR9"),e.exports=a("g8Ux")},g8Ux:function(e,n,a){var t=a("77Pl"),i=a("3fs2");e.exports=a("FeBl").getIterator=function(e){var n=i(e);if("function"!=typeof n)throw TypeError(e+" is not iterable!");return t(n.call(e))}},hBdm:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("CpWQ"),i=a("O8dN"),s=!1;var o=function(e){s||a("wU8S")},l=a("VU/8")(t.a,i.a,!1,o,null,null);l.options.__file="pages/icons.vue",n.default=l.exports},wU8S:function(e,n,a){var t=a("znDz");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("rjj0")("39f42700",t,!1,{sourceMap:!1})},znDz:function(e,n,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])}});