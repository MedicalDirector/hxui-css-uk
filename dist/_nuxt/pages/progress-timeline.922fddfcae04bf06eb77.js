webpackJsonp([10],{"+5Ym":function(s,n,i){"use strict";n.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(s,n,i){var e=i("gIdq");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("rjj0")("27cae0c4",e,!1)},"5Szx":function(s,n,i){var e=i("mfIB");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("rjj0")("60cb42c6",e,!1)},"6uZb":function(s,n,i){"use strict";var e=function(){var s=this.$createElement,n=this._self._c||s;return n("div",{attrs:{id:"progress-timeline"}},[n("h1",{staticClass:"hx-title"},[this._v("Progress Timeline")]),n("h2",{staticClass:"hx-subtitle"},[this._v("A progress timeline component communicates to the user the progress of a particular process.")]),n("hr"),this._l(this.examples,function(s,i){return n("expanding-code-example",{key:i,attrs:{title:s.title,code:s.code,example:s.code,visible:!1,background:s.bg}})})],2)};e._withStripped=!0;var t={render:e,staticRenderFns:[]};n.a=t},"9HKM":function(s,n,i){"use strict";var e=function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"hx-card example is-flat mb-3"},[n("div",{staticClass:"hx-card-header"},[n("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?n("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),n("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[n("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),n("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};e._withStripped=!0;var t={render:e,staticRenderFns:[function(){var s=this.$createElement,n=this._self._c||s;return n("span",{staticClass:"hx-icon-control"},[n("i",{staticClass:"hx-icon icon-code is-medium"})])}]};n.a=t},"PP/F":function(s,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("WYP7"),t=i("6uZb"),a=!1;var c=function(s){a||i("5Szx")},l=i("VU/8")(e.a,t.a,!1,c,null,null);l.options.__file="pages/progress-timeline.vue",n.default=l.exports},WYP7:function(s,n,i){"use strict";var e=i("Zjej");n.a={data:function(){return{examples:[{title:"Example",code:'\n<div class="hx-columns">\n  <div class="hx-column is-6 is-offset-3">\n    <div class="hx-card">\n      <div class="hx-card-content">\n        <ul class="hx-list has-status is-joined">\n          <li class="is-success is-checked">\n            <h6 class="hx-title">Booked <i class="icon icon-angle-up"></i></h6>\n            <div class="hx-collapsible">\n              <div class="hx-group">\n                <p><strong>SMS sent: Appointment Reminder</strong><p>\n                <p><em>16.04.2017</em></p>\n              </div>\n              <div class="hx-group">\n                <p><strong>SMS sent: Appointment booked</strong><p>\n                <p><em>20.04.2017</em></p>\n              </div>\n              <div class="hx-group">\n                <p>You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.\n          You can reply \'YES\' to this message to confirm, or \'NO\' to cancel.\n          If you need to reschedule. please call us at 03 3482 2181.</p>\n              </div>\n            </div>\n          </li>\n          <li class="is-not-checked is-success">\n            <h6 class="hx-title">Confirmed <i class="hx-icon icon-angle-up"></i></h6>\n            <div class="hx-collapsible">\n              <div class="hx-group">\n                <p><strong>SMS rec\'d: Patient Confirmed</strong><p>\n                <p><em>20.03.2017</em></p>\n                <p>YES</p>\n              </div>\n            </div>\n          </li>\n          <li class="is-not-checked is-warning">\n            <h6 class="hx-title">Checked in <i class="hx-icon icon-angle-up"></i></h6>\n            <div class="hx-collapsible">\n              <div class="hx-group">\n                <p class="is-warning"><strong>SMS rec\'d: Patient Replied at 3:55pm.</strong><p>\n                <p><em>20.03.2017</em></p>\n                <p>YES</p>\n              </div>\n            </div>\n          </li>\n          <li class="is-not-checked is-danger">\n            <h6 class="hx-title">Waiting <i class="hx-icon icon-angle-up"></i></h6>\n            <div class="hx-collapsible">\n              <div class="hx-group">\n                <p class="is-danger"><strong>SMS rec\'d: Patient Declined at 4:05pm.</strong><p>\n                <p><em>20.03.2017</em></p>\n                <p>YES</p>\n              </div>\n            </div>\n          </li>\n          <li></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Progress timeline in popover",code:'\n<div class="hx-card" style="margin-bottom: 32rem">\n  <div class="hx-card-content">\n    <div class="hx-flex hx-flex-justify-between">\n      <h4 class="is-marginless">Current Visit</h4>\n      <div class="hx-flex hx-flex-align-center">\n        <div class="hx-progress-timeline-status">\n          <span class="hx-marker is-success is-animated"><i class="icon icon-check-empty"></i></span>\n          <div class="hx-popover is-opened">\n            <ul class="hx-list has-status is-joined">\n              <li class="is-success is-checked">\n                <h6 class="hx-title">Booked <i class="icon icon-angle-up"></i></h6>\n                <div class="hx-collapsible">\n                  <div class="hx-group">\n                    <p><strong>SMS sent: Appointment Reminder</strong><p>\n                    <p><em>16.04.2017</em></p>\n                  </div>\n                  <div class="hx-group">\n                    <p><strong>SMS sent: Appointment booked</strong><p>\n                    <p><em>20.04.2017</em></p>\n                  </div>\n                  <div class="hx-group">\n                    <p>You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.\n              You can reply \'YES\' to this message to confirm, or \'NO\' to cancel.\n              If you need to reschedule. please call us at 03 3482 2181.</p>\n                  </div>\n                </div>\n              </li>\n              <li class="is-not-checked is-success">\n                <h6 class="hx-title">Confirmed <i class="hx-icon icon-angle-up"></i></h6>\n                <div class="hx-collapsible">\n                  <div class="hx-group">\n                    <p><strong>SMS rec\'d: Patient Confirmed</strong><p>\n                    <p><em>20.03.2017</em></p>\n                    <p>YES</p>\n                  </div>\n                </div>\n              </li>\n              <li class="is-not-checked is-warning">\n                <h6 class="hx-title">Checked in <i class="hx-icon icon-angle-up"></i></h6>\n                <div class="hx-collapsible">\n                  <div class="hx-group">\n                    <p class="is-warning"><strong>SMS rec\'d: Patient Replied at 3:55pm.</strong><p>\n                    <p><em>20.03.2017</em></p>\n                    <p>YES</p>\n                  </div>\n                </div>\n              </li>\n              <li class="is-not-checked is-danger">\n                <h6 class="hx-title">Waiting <i class="hx-icon icon-angle-up"></i></h6>\n                <div class="hx-collapsible">\n                  <div class="hx-group">\n                    <p class="is-danger"><strong>SMS rec\'d: Patient Declined at 4:05pm.</strong><p>\n                    <p><em>20.03.2017</em></p>\n                    <p>YES</p>\n                  </div>\n                </div>\n              </li>\n              <li></li>\n            </ul>\n          </div>\n        </div>\n        <strong class="is-success">Booked</strong>\n        <i class="icon icon-angle-right"></i>\n        <a class="hx-button is-primary">\n          <span>Add to queue</span>\n          <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Progress timeline marker states",code:'\n<div class="hx-card">\n  <div class="hx-card-content">\n    <div class="hx-flex hx-flex-justify-between">\n      <div class="hx-flex hx-flex-align-center">\n        <ul class="hx-list has-status is-horizontal pr-1">\n          <li class="is-success is-checked">\n            <strong class="is-success">Success</strong>\n          </li>\n        </ul>\n        <i class="hx-icon icon-angle-right"></i>\n        <button class="hx-button is-primary">\n          <span>Next action</span>\n          <span class="hx-icon-control"><i class="hx-icon icon-angle-down"></i></span>\n        </button>\n      </div>\n      <div class="hx-flex hx-flex-align-center">\n        <ul class="hx-list has-status is-horizontal pr-1">\n          <li class="is-warning is-not-checked">\n            <strong class="is-warning">Attention</strong>\n          </li>\n        </ul>\n        <i class="hx-icon icon-angle-right"></i>\n        <button class="hx-button is-primary">\n          <span>Next action</span>\n          <span class="hx-icon-control"><i class="hx-icon icon-angle-down"></i></span>\n        </button>\n      </div>\n      <div class="hx-flex hx-flex-align-center">\n        <ul class="hx-list has-status is-horizontal pr-1">\n          <li class="is-danger is-not-checked">\n            <strong class="is-danger">Declined</strong>\n          </li>\n        </ul>\n        <i class="hx-icon icon-angle-right"></i>\n        <button class="hx-button is-primary">\n          <span>Next action</span>\n          <span class="hx-icon-control"><i class="hx-icon icon-angle-down"></i></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:e.a}}},Zjej:function(s,n,i){"use strict";var e=i("+5Ym"),t=i("9HKM"),a=!1;var c=function(s){a||i("0dgp")},l=i("VU/8")(e.a,t.a,!1,c,"data-v-735a47f0",null);l.options.__file="components/ExpandingCodeExample.vue",n.a=l.exports},gIdq:function(s,n,i){(s.exports=i("FZ+f")(!1)).push([s.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},mfIB:function(s,n,i){(s.exports=i("FZ+f")(!1)).push([s.i,"",""])}});