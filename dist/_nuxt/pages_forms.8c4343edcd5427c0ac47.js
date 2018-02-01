webpackJsonp([13],{"7UL4":function(e,a,l){"use strict";var s=function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"forms"}},[a("h1",{staticClass:"hx-title"},[this._v("Form")]),this._m(0),a("hr"),this._l(this.examples,function(e,l){return a("expanding-code-example",{key:l,attrs:{title:e.title,code:e.code,example:e.code,visible:!1}})})],2)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{staticClass:"hx-subtitle"},[this._v("Forms are the standard way to receive user inputted data. "),a("br"),this._v("The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.")])}]};a.a=n},Q0R6:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=l("TPGC"),n=l("7UL4"),i=!1;var t=function(e){i||l("teeI")},o=l("VU/8")(s.a,n.a,!1,t,null,null);o.options.__file="pages\\forms.vue",a.default=o.exports},R7UG:function(e,a,l){"use strict";a.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},R9iE:function(e,a,l){var s=l("uCJM");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);l("rjj0")("6679862f",s,!1)},TPGC:function(e,a,l){"use strict";var s=l("Zjej");a.a={data:function(){return{examples:[{title:"Input field",code:'\n<p>Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a  <code>.hx-input-control</code> div wrapping your input and label.</p>\n<br />\n<div class="hx-input-control">\n  <input class="hx-input" type="text" required>\n  <label class="hx-label">Full Name <sup>*</sup></label>\n  <div class="hx-help">Please enter your full name</div>\n</div>\n<div class="hx-input-control">\n  <input class="hx-input" type="password" required>\n  <label class="hx-label">Password <sup>*</sup></label>\n  <div class="hx-help">Please enter your password</div>\n</div>\n<div class="hx-input-control">\n  <input class="hx-input" type="text" pattern= "[0-9]" required>\n  <label class="hx-label">Phone Number <sup>*</sup></label>\n  <div class="hx-help">Please enter your phone number</div>\n</div>\n<div class="hx-input-control is-info">\n  <input class="hx-input" type="email" required>\n  <label class="hx-label">Email <sup>*</sup></label>\n  <div class="hx-help">Info!</div>\n</div>\n<div class="hx-input-control is-success">\n  <input class="hx-input" type="text" required>\n  <label class="hx-label">Email <sup>*</sup></label>\n  <div class="hx-help">Success!</div>\n</div>\n<div class="hx-input-control is-warning">\n  <input class="hx-input" type="text" required>\n  <label class="hx-label">Email <sup>*</sup></label>\n  <div class="hx-help">Warning!</div>\n</div>\n<div class="hx-input-control is-danger">\n  <input class="hx-input" type="text" value="joe.chan@medicaldirector.c">\n  <label class="hx-label">Email <sup>*</sup></label>\n  <div class="hx-help">Danger!</div>\n</div>\n<div class="hx-input-control">\n  <input class="hx-input" type="text" disabled placeholder="I am disabled" required>\n  <label class="hx-label">This is Disabled</label>\n  <div class="hx-help">Danger!</div>\n</div>\n<div class="hx-input-group">\n  <div class="hx-input-control">\n    <input class="hx-input" type="text" required>\n    <label class="hx-label">Date <sup>*</sup></label>\n    <div class="hx-help">Please select a date</div>\n  </div>\n   <i class="hx-icon icon-calendar"></i>\n</div>\n<div class="hx-input-group">\n <i class="hx-icon icon-search"></i>\n  <div class="hx-input-control">\n    <input class="hx-input" type="text" required>\n    <label class="hx-label">Search <sup>*</sup></label>\n    <div class="hx-help">Please search by patient name</div>\n  </div>\n</div>\n<div class="hx-input-group">\n <i class="hx-icon icon-person"></i>\n  <div class="hx-input-control">\n    <input class="hx-input" type="text" value="JG001" required>\n    <label class="hx-label">Username <sup>*</sup></label>\n    <div class="hx-help">Please enter your username</div>\n  </div>\n  <i class="hx-icon icon-check-empty is-medium is-success"></i>\n</div>\n<div class="hx-input-group">\n  <div class="hx-input-control">\n    <input class="hx-input" type="text"  required>\n    <label class="hx-label">Search <sup>*</sup></label>\n    <div class="hx-help">Please enter a search term</div>\n  </div>\n  <button class="hx-button is-transparent">GO</button>\n</div>\n  '},{title:"Textarea",code:'\n<p>Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a <code>.hx-input-control</code> div wrapping your input and label.</p>\n<br />\n<div class="hx-input-control">\n  <textarea name="textarea-sample" class="hx-textarea" required></textarea>\n  <label for="textarea-sample" class="hx-label">Textarea</label>\n</div>\n<div class="hx-input-control">\n  <textarea name="textarea-sample" class="hx-textarea" placeholder="Placeholder text..."></textarea>\n  <label for="textarea-sample" class="hx-label">Textarea with Placeholder</label>\n</div>\n<div class="hx-input-control is-info">\n  <textarea name="textarea-sample" class="hx-textarea" required></textarea>\n  <label for="textarea-sample" class="hx-label">Textarea</label>\n</div>\n<div class="hx-input-control is-success">\n  <textarea name="textarea-sample" class="hx-textarea" required></textarea>\n  <label for="textarea-sample" class="hx-label">Textarea</label>\n</div>\n<div class="hx-input-control is-warning">\n  <textarea name="textarea-sample" class="hx-textarea" required></textarea>\n  <label for="textarea-sample" class="hx-label">Textarea</label>\n</div>\n<div class="hx-input-control is-danger">\n  <textarea name="textarea-sample" class="hx-textarea" required></textarea>\n  <label for="textarea-sample" class="hx-label">Textarea</label>\n</div>\n          '},{title:"Select list",code:'\n<p>Select allows user input through specified options. Make sure you wrap it in a <code>.hx-select-control</code> for proper alignment with other text fields. </p>\n<br />\n<div class="hx-input-control">\n  <div class="hx-select-control">\n    <select class="hx-select" id="state">\n      <option value="">Please select</option>\n      <option>New South Wales</option>\n      <option>Victoria</option>\n      <option>South Australia</option>\n      <option>Tasmania</option>\n      <option>Northern Territory</option>\n      <option>Western Australia</option>\n      <option>Queensland</option>\n    </select>\n    <label for="state" class="hx-label">Suburb <sup>*</sup></label>\n  </div>\n</div>\n<div class="hx-input-control">\n  <div class="hx-select-control">\n    <select class="hx-select" disabled>\n      <option>This is disabled</option>\n      <option>New South Wales</option>\n      <option>Victoria</option>\n      <option>South Australia</option>\n      <option>Tasmania</option>\n      <option>Northern Territory</option>\n      <option>Western Australia</option>\n      <option>Queensland</option>\n    </select>\n    <label for="" class="hx-label">This is disabled <sup>*</sup></label>\n  </div>\n</div>\n          '},{title:"Radio buttons",code:'\n<p>Radio Buttons are used when the user must make only one selection out of a group of items.</p>\n<div class="hx-columns">\n  <div class="hx-column is-2 is-offset-4">\n    <div class="hx-input-control">\n      <div class="hx-radio-control">\n        <input name="radioGroup1" type="radio" class="hx-radio" id="yes" checked />\n        <label for="yes" class="hx-label">Yes</label>\n      </div>\n      <div class="hx-radio-control">\n        <input name="radioGroup1" type="radio" class="hx-radio" id="no"/>\n        <label for="no" class="hx-label">No</label>\n      </div>\n    </div>\n    <div class="hx-input-control">\n      <div class="hx-radio-control">\n        <input name="radioGroup2" type="radio" class="hx-radio" id="true" checked />\n        <label for="true" class="hx-label">True</label>\n      </div>\n      <div class="hx-radio-control">\n        <input name="radioGroup2" type="radio" class="hx-radio" id="false"/>\n        <label for="false" class="hx-label">False</label>\n      </div>\n    </div>\n  </div>\n  <div class="hx-column is-2">\n    <div class="hx-input-control">\n      <div class="hx-radio-control is-inline">\n        <input name="radioGroup3" type="radio" class="hx-radio is-danger" id="male" checked/>\n        <label for="male" class="hx-label">Male</label>\n      </div>\n      <div class="hx-radio-control is-inline">\n        <input name="radioGroup3" type="radio" class="hx-radio" id="female"/>\n        <label for="female" class="hx-label">Female</label>\n      </div>\n    </div>\n    <div class="hx-input-control">\n      <div class="hx-radio-control">\n        <input name="radioGroup4" type="radio" class="hx-radio" id="top" checked/>\n        <label for="top" class="hx-label">Top</label>\n      </div>\n      <div class="hx-radio-control">\n        <input name="radioGroup4" type="radio" class="hx-radio" id="left" disabled />\n        <label for="left" class="hx-label">Disabled</label>\n      </div>\n      <div class="hx-radio-control">\n        <input name="radioGroup4" type="radio" class="hx-radio" id="bottom"/>\n        <label for="bottom" class="hx-label">Bottom</label>\n      </div>\n      <div class="hx-radio-control">\n        <input name="radioGroup4" type="radio" class="hx-radio" id="right" disabled />\n        <label for="right" class="hx-label">Disabled</label>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Checkboxes",code:'\n<p>Use checkboxes when looking for yes or no answers. The <code>for</code> attribute is necessary to bind our custom checkbox with the input. Add the input\'s <code>id</code> as the value of the <code>for</code> attribute of the label.</p>\n<div class="hx-columns">\n  <div class="hx-column is-2 is-offset-3">\n    <div class="hx-input-control">\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option1" />\n        <label for="option1" class="hx-label">Option 1</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option2" checked />\n        <label for="option2" class="hx-label">Option 2</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup1" type="checkbox" class="hx-checkbox" id="option3" disabled />\n        <label for="option3" class="hx-label">Option 3</label>\n      </div>\n    </div>\n  </div>\n  <div class="hx-column is-2">\n    <div class="hx-input-control">\n      <strong>Notification Settings</strong>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="email" checked />\n        <label for="email" class="hx-label">Email</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="slack"/>\n        <label for="slack" class="hx-label">Slack</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="hipchat" disabled/>\n        <label for="hipchat" class="hx-label">Hipchat</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="sms" disabled />\n        <label for="sms" class="hx-label">SMS</label>\n      </div>\n    </div>\n  </div>\n  <div class="hx-column is-2">\n    <div class="hx-input-control is-small">\n      <strong>Small Variation</strong>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="email2" checked />\n        <label for="email2" class="hx-label">Email</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="slack2"/>\n        <label for="slack2" class="hx-label">Slack</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox " id="hipchat2" disabled/>\n        <label for="hipchat2" class="hx-label">Hipchat</label>\n      </div>\n      <div class="hx-checkbox-control">\n        <input name="checkboxGroup2" type="checkbox" class="hx-checkbox" id="sms2" disabled />\n        <label for="sms2" class="hx-label">SMS</label>\n      </div>\n    </div>\n  </div>\n</div>\n          '},{title:"Sizes",code:'\n<h5>Medium</h5>\n<p>Simply add class <code>.is-medium</code> to the base class <code>.hx-input-control</code>.</p>\n<br />\n<div class="hx-input-control is-medium">\n  <input class="hx-input" type="text" required>\n  <label class="hx-label">Full Name <sup>*</sup></label>\n  <div class="hx-help">Please enter your full name</div>\n</div>\n<br />\n<h5>Large</h5>\n<p>Simply add class <code>.is-large</code> to the base class <code>.hx-input-control</code>.</p>\n<br />\n<div class="hx-input-control is-large">\n<input class="hx-input" type="text" required>\n<label class="hx-label">Full Name <sup>*</sup></label>\n<div class="hx-help">Please enter your full name</div>\n</div>\n          '}]}},components:{ExpandingCodeExample:s.a}}},UEhm:function(e,a,l){"use strict";var s=function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"hx-card example is-flat mb-3"},[a("div",{staticClass:"hx-card-header"},[a("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?a("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),a("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[a("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),a("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("span",{staticClass:"hx-icon-control"},[a("i",{staticClass:"hx-icon icon-code is-medium"})])}]};a.a=n},Zjej:function(e,a,l){"use strict";var s=l("R7UG"),n=l("UEhm"),i=!1;var t=function(e){i||l("R9iE")},o=l("VU/8")(s.a,n.a,!1,t,"data-v-a0505dc6",null);o.options.__file="components\\ExpandingCodeExample.vue",a.a=o.exports},squA:function(e,a,l){(e.exports=l("FZ+f")(!1)).push([e.i,"",""])},teeI:function(e,a,l){var s=l("squA");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);l("rjj0")("0b704b4b",s,!1)},uCJM:function(e,a,l){(e.exports=l("FZ+f")(!1)).push([e.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});