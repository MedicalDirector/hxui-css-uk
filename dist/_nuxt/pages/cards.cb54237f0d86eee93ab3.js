webpackJsonp([17],{"+5Ym":function(i,n,s){"use strict";n.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(i,n,s){var d=s("gIdq");"string"==typeof d&&(d=[[i.i,d,""]]),d.locals&&(i.exports=d.locals);s("rjj0")("27cae0c4",d,!1)},"4CT5":function(i,n,s){(i.exports=s("FZ+f")(!1)).push([i.i,"",""])},"9HKM":function(i,n,s){"use strict";var d=function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"hx-card example is-flat mb-3"},[n("div",{staticClass:"hx-card-header"},[n("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?n("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),n("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[n("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),n("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};d._withStripped=!0;var l={render:d,staticRenderFns:[function(){var i=this.$createElement,n=this._self._c||i;return n("span",{staticClass:"hx-icon-control"},[n("i",{staticClass:"hx-icon icon-code is-medium"})])}]};n.a=l},A4KX:function(i,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var d=s("iQQG"),l=s("DtCa"),a=!1;var t=function(i){a||s("jF0M")},e=s("VU/8")(d.a,l.a,!1,t,null,null);e.options.__file="pages/cards.vue",n.default=e.exports},DtCa:function(i,n,s){"use strict";var d=function(){var i=this.$createElement,n=this._self._c||i;return n("div",{attrs:{id:"cards"}},[n("h1",{staticClass:"hx-title"},[this._v("Card")]),n("h2",{staticClass:"hx-subtitle"},[this._v("An all-around flexible and composable component")]),n("hr"),this._m(0),this._m(1),n("br"),this._l(this.examples,function(i,s){return n("expanding-code-example",{key:s,attrs:{title:i.title,code:i.code,example:i.code,visible:!1}})})],2)};d._withStripped=!0;var l={render:d,staticRenderFns:[function(){var i=this.$createElement,n=this._self._c||i;return n("p",[this._v("The "),n("strong",[this._v("card")]),this._v(" component comprises several elements that you can mix and match:")])},function(){var i=this.$createElement,n=this._self._c||i;return n("ul",[n("li",[n("code",[this._v("hx-card")]),this._v(": the main container\n      "),n("ul",[n("li",[n("code",[this._v("hx-card-header")]),this._v(": a horizontal bar with a shadow\n          "),n("ul",[n("li",[n("code",[this._v("hx-card-header-title")]),this._v(": a left-aligned bold text\n            ")]),n("li",[n("code",[this._v("hx-card-header-icon")]),this._v(": a placeholder for an icon\n            ")])])]),n("li",[n("code",[this._v("hx-card-image")]),this._v(": a fullwidth container for a reponsive image\n        ")]),n("li",[n("code",[this._v("hx-card-content")]),this._v(": a multi-purpose container for "),n("em",[this._v("any")]),this._v(" other element\n        ")]),n("li",[n("code",[this._v("hx-card-footer")]),this._v(": a horizontal list of controls\n          "),n("ul",[n("li",[n("code",[this._v("hx-card-footer-item")]),this._v(": a repeatable list item\n            ")])])])])])])}]};n.a=l},Zjej:function(i,n,s){"use strict";var d=s("+5Ym"),l=s("9HKM"),a=!1;var t=function(i){a||s("0dgp")},e=s("VU/8")(d.a,l.a,!1,t,"data-v-735a47f0",null);e.options.__file="components/ExpandingCodeExample.vue",n.a=e.exports},gIdq:function(i,n,s){(i.exports=s("FZ+f")(!1)).push([i.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},iQQG:function(i,n,s){"use strict";var d=s("Zjej");n.a={data:function(){return{examples:[{title:"Default card",code:'\n<div class="hx-columns">\n  <div class="hx-column is-one-third is-offset-one-third">\n    <div class="hx-card">\n      <div class="hx-card-content">\n        <div>\n          <div><strong class="h4">Choi</strong></div>\n          <div>Ella</div>\n          <br>\n          <i class="hx-icon icon-clock-outline is-small"></i> <small>11:09 PM - 1 Jan 2016</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Border highlighted card",code:'\n<div class="hx-columns">\n  <div class="hx-column">\n    <p>Add <code>is-border-highlighted</code> to the card for border highlighted card.</p>\n    <p>You can also add modifiers for different colour border.</p>\n    <ul>\n      <li><code>is-info</code></li>\n      <li><code>is-success</code></li>\n      <li><code>is-warning</code></li>\n      <li><code>is-danger</code></li>\n    </ul>\n  </div>\n  <div class="hx-column">\n    <div class="hx-columns">\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-info">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-success">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-warning">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-danger">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Border sizes",code:'\n<div class="hx-columns">\n  <div class="hx-column">\n    <p>You can add modifiers for different border sizes.</p>\n    <ul>\n      <li><code>is-small</code></li>\n      <li><code>is-medium</code></li>\n      <li><code>is-large</code></li>\n    </ul>\n  </div>\n  <div class="hx-column">\n    <div class="hx-columns">\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-small">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-medium">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-large">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"States",code:'\n<div class="hx-columns">\n  <div class="hx-column">\n    <p>You can add modifiers for different border states.</p>\n    <ul>\n      <li><code>is-hovered</code></li>\n      <li><code>is-focused</code></li>\n      <li><code>is-active</code></li>\n    </ul>\n  </div>\n  <div class="hx-column">\n    <div class="hx-columns">\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-hovered">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-focused">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-active">\n          <div class="hx-card-content">\n            <div class="">\n              <div><strong>Choi</strong></div>\n              <div>Ella</div>\n              <br>\n              <small>11:09 PM - 1 Jan 2016</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Using HxUI grid",code:'\n<div class="hx-columns">\n  <div class="hx-column">\n    <p>You can create complex layouts using HxUI Grid and Form in Card.</p>\n  </div>\n  <div class="hx-column is-two-thirds">\n    <div class="hx-columns">\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-warning">\n          <div class="hx-card-content">\n            <div class="hx-columns">\n              <div class="hx-column">\n                  <p>\n                    <strong>09:37</strong> <a href="#">@Liz</a>: Please call James Meadows asap re: his test result. 2nd time he has called.\n                  </p>\n              </div>\n            </div>\n              <div class="hx-input-control is-warning">\n                <input class="hx-input" type="text" placeholder="Enter your notes">\n                <label class="hx-label">Add Notes</label>\n              </div>\n              <a class="hx-button is-warning is-fullwidth">\n                <span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span>\n                <span>Add</span>\n              </a>\n          </div>\n        </div>\n      </div>\n      <div class="hx-column is-half">\n        <div class="hx-card is-border-highlighted is-info">\n          <div class="hx-card-content has-padding-small">\n            <div class="hx-columns">\n              <div class="hx-column is-2">\n                <div class="hx-card-icon">\n                  <i class="hx-icon icon-calendar-outline is-large"></i>\n                </div>\n              </div>\n              <div class="hx-column"><p>Lunch/catch-up on patient notes</p></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:d.a}}},jF0M:function(i,n,s){var d=s("4CT5");"string"==typeof d&&(d=[[i.i,d,""]]),d.locals&&(i.exports=d.locals);s("rjj0")("adf45a84",d,!1)}});