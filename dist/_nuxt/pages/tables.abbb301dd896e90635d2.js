webpackJsonp([6],{"+5Ym":function(t,e,a){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(t,e,a){var n=a("gIdq");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("27cae0c4",n,!1)},"1e7C":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("t4z0"),s=a("9WF1"),d=!1;var i=function(t){d||a("UeBJ")},h=a("VU/8")(n.a,s.a,!1,i,null,null);h.options.__file="pages/tables.vue",e.default=h.exports},"9HKM":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hx-card example is-flat mb-3"},[a("div",{staticClass:"hx-card-header"},[a("h4",{staticClass:"hx-card-header-title my-2"},[t._v(t._s(t.title))]),"<h1>Code here</h1>"!==t.code?a("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:t.toggleCode}},[t._m(0)]):t._e()]),a("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:t.ht+"px"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[a("code",{staticClass:"html"},[t._v("\n"+t._s(t.code)+"\n      ")])])]),a("div",{staticClass:"hx-card-content",class:t.background,domProps:{innerHTML:t._s(t.example)}})])};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=s},"9WF1":function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tables"}},[e("h1",{staticClass:"hx-title"},[this._v("Tables")]),e("h2",{staticClass:"hx-subtitle"},[this._v("The inevitable HTML table, with special case cells")]),e("hr"),this._l(this.examples,function(t,a){return e("expanding-code-example",{key:a,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},UeBJ:function(t,e,a){var n=a("vn4L");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4b2ed872",n,!1)},Zjej:function(t,e,a){"use strict";var n=a("+5Ym"),s=a("9HKM"),d=!1;var i=function(t){d||a("0dgp")},h=a("VU/8")(n.a,s.a,!1,i,"data-v-735a47f0",null);h.options.__file="components/ExpandingCodeExample.vue",e.a=h.exports},gIdq:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},t4z0:function(t,e,a){"use strict";var n=a("Zjej");e.a={data:function(){return{examples:[{title:"Default table",code:'\n<p>Tables are borderless by default.</p>\n<p>Add <code>class="hx-table"</code> to the table tag for a HxUI styled table.</p>\n<p>You can set a table row as <strong>selected</strong> by appending the <code>is-selected</code> modifier on a <code>&#x3C;tr&#x3E;</code>.</p>\n<table class="hx-table is-striped mt-5">\n  <thead>\n    <tr>\n      <th><abbr title="Position">Pos</abbr></th>\n      <th>Team</th>\n      <th class="has-text-right"><abbr title="Played">Pld</abbr></th>\n      <th class="has-text-right"><abbr title="Won">W</abbr></th>\n      <th class="has-text-right"><abbr title="Drawn">D</abbr></th>\n      <th class="has-text-right"><abbr title="Lost">L</abbr></th>\n      <th class="has-text-right"><abbr title="Goals for">GF</abbr></th>\n      <th class="has-text-right"><abbr title="Goals against">GA</abbr></th>\n      <th class="has-text-right"><abbr title="Goal difference">GD</abbr></th>\n      <th class="has-text-right"><abbr title="Points">Pts</abbr></th>\n      <th>Qualification or relegation</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>1</th>\n      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">23</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">3</td>\n      <td class="has-text-right">68</td>\n      <td class="has-text-right">36</td>\n      <td class="has-text-right">+32</td>\n      <td class="has-text-right">81</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">20</td>\n      <td class="has-text-right">11</td>\n      <td class="has-text-right">7</td>\n      <td class="has-text-right">65</td>\n      <td class="has-text-right">36</td>\n      <td class="has-text-right">+29</td>\n      <td class="has-text-right">71</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">19</td>\n      <td class="has-text-right">13</td>\n      <td class="has-text-right">6</td>\n      <td class="has-text-right">69</td>\n      <td class="has-text-right">35</td>\n      <td class="has-text-right">+34</td>\n      <td class="has-text-right">70</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\n    </tr>\n    <tr class="is-selected">\n      <th>4</th>\n      <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">19</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">10</td>\n      <td class="has-text-right">71</td>\n      <td class="has-text-right">41</td>\n      <td class="has-text-right">+30</td>\n      <td class="has-text-right">66</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">19</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">10</td>\n      <td class="has-text-right">49</td>\n      <td class="has-text-right">35</td>\n      <td class="has-text-right">+14</td>\n      <td class="has-text-right">66</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>\n    </tr>\n    <tr>\n      <th>6</th>\n      <td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">18</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">11</td>\n      <td class="has-text-right">59</td>\n      <td class="has-text-right">41</td>\n      <td class="has-text-right">+18</td>\n      <td class="has-text-right">63</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>\n    </tr>\n    <tr>\n      <th>7</th>\n      <td><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">16</td>\n      <td class="has-text-right">14</td>\n      <td class="has-text-right">8</td>\n      <td class="has-text-right">65</td>\n      <td class="has-text-right">51</td>\n      <td class="has-text-right">+14</td>\n      <td class="has-text-right">62</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a></td>\n    </tr>\n    <tr>\n      <th>8</th>\n      <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">16</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">10</td>\n      <td class="has-text-right">63</td>\n      <td class="has-text-right">50</td>\n      <td class="has-text-right">+13</td>\n      <td class="has-text-right">60</td>\n      <td></td>\n    </tr>\n    <tr>\n      <th>9</th>\n      <td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">14</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">15</td>\n      <td class="has-text-right">41</td>\n      <td class="has-text-right">55</td>\n      <td class="has-text-right">−14</td>\n      <td class="has-text-right">51</td>\n      <td></td>\n    </tr>\n    <tr>\n      <th>10</th>\n      <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">14</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">59</td>\n      <td class="has-text-right">53</td>\n      <td class="has-text-right">+6</td>\n      <td class="has-text-right">50</td>\n      <td></td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Narrow table",code:'\n<p>Add <code>class="hx-table is-narrow"</code> to the table tag to make the cells narrower.</p>\n<table class="hx-table is-narrow">\n  <thead>\n    <tr>\n      <th>One</th>\n      <th>Two</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Three</td>\n      <td>Four</td>\n    </tr>\n    <tr>\n      <td>Five</td>\n      <td>Six</td>\n    </tr>\n    <tr>\n      <td>Seven</td>\n      <td>Eight</td>\n    </tr>\n    <tr>\n      <td>Nine</td>\n      <td>Ten</td>\n    </tr>\n    <tr>\n      <td>Eleven</td>\n      <td>Twelve</td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Hover table",code:'\n            <p>Add <code>class="hx-table is-hover"</code> to the table tag for a hover state on rows</p>\n            <table class="hx-table is-hover">\n              <thead>\n                <tr>\n                  <th>One</th>\n                  <th>Two</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Three</td>\n                  <td>Four</td>\n                </tr>\n                <tr>\n                  <td>Five</td>\n                  <td>Six</td>\n                </tr>\n                <tr>\n                  <td>Seven</td>\n                  <td>Eight</td>\n                </tr>\n                <tr>\n                  <td>Nine</td>\n                  <td>Ten</td>\n                </tr>\n                <tr>\n                  <td>Eleven</td>\n                  <td>Twelve</td>\n                </tr>\n              </tbody>\n            </table>\n          '},{title:"Contextual",code:'\n            <p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code>, <code>class="is-info"</code> to the tr tag </p>\n            <table class="hx-table">\n              <thead>\n                <tr>\n                  <th>Context</th>\n                  <th>Icon</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class="is-danger">\n                  <td>Danger</td>\n                   <td><i class="hx-icon icon-exclamation"></i></td>\n                </tr>\n                <tr class="is-warning">\n                  <td>Warning</td>\n                   <td><i class="hx-icon icon-exclamation-outline"></i></td>\n                </tr>\n                <tr class="is-success">\n                  <td>Success</td>\n                   <td><i class="hx-icon icon-check"></i></td>\n                </tr>\n                <tr class="is-info">\n                  <td>Info</td>\n                   <td><i class="hx-icon icon-information"></i></td>\n                </tr>\n                <tr>\n                  <td>Default</td>\n                   <td><i class="hx-icon icon-information-outline"></i></td>\n                </tr>\n              </tbody>\n            </table>\n          '},{title:"Table with text field",code:'\n            <p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code>, <code>class="is-info"</code> to the tr tag </p>\n            <table class="hx-table">\n              <thead>\n                <tr>\n                  <th>Dessert (100g)</th>\n                  <th class="has-text-right"><a href="#"><i class="hx-icon icon-arrow-down"></i> Calories</a></th>\n                  <th class="has-text-right">Fat (g)</th>\n                  <th class="has-text-right">Carbs (g)</th>\n                  <th class="has-text-right">Protein (g)</th>\n                  <th class="has-text-right">Iron (%)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class="">\n                  <td>Frozen Yoghurt</td>\n                  <td width="110" class="has-text-right">159</td>\n                  <td width="90" class="has-text-right">6</td>\n                  <td width="90" class="has-text-right">24</td>\n                  <td width="90" class="has-text-right">4</td>\n                  <td width="90" class="has-text-right">1</td>\n                </tr>\n                <tr class="">\n                  <td class="has-text-field">\n                    <input class="hx-input" type="text" placeholder="Name of dessert" required>\n                  </td>\n                  <td width="110" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan="6">\n                    <a href="#" class="is-gray is-flex hx-flex-align-center">\n                      <i class="hx-icon icon-plus-outline mr-2"></i>\n                      Add new row\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          '},{title:"Grouped rows table",code:'\n            <p>Add <code>class="hx-table-group"</code> to the tbody tag proceeding tbody related rows.</p>\n            <table class="hx-table is-striped">\n              <thead>\n                <tr>\n                  <th width="1"><div class="hx-checkbox-control">\n                      <input id="checkbox-all" name="all-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-all" class="hx-label"></label>\n                    </div></th>\n                  <th>Id</th>\n                  <th>User Code</th>\n                  <th>Firstname</th>\n                  <th>Surname</th>\n                </tr>\n              </thead>\n              <tbody class="hx-table-group">\n                <tr>\n                  <th colspan="5"><div>Administrators <small>People who have access to all areas of the application</small> <span class="hx-icon icon-angle-down"></span></div></th>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-19" name="19-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-19" class="hx-label"></label>\n                    </div></td>\n                  <td>19</td>\n                  <td>TS001</td>\n                  <td>Tupac</td>\n                  <td>Shakur</td>\n                </tr>\n                 <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-20" name="20-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-20" class="hx-label"></label>\n                    </div></td>\n                  <td>20</td>\n                  <td>BP001</td>\n                  <td>Brian</td>\n                  <td>Pulliese</td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-21" name="21-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-21" class="hx-label"></label>\n                    </div></td>\n                  <td>21</td>\n                  <td>JS001</td>\n                  <td>John</td>\n                  <td>Smith</td>\n                </tr>\n              </tbody>\n              <tbody class="hx-table-group">\n                <tr>\n                  <th colspan="5"><div>General Practice <small>People who have access to patient clinical records</small> <span class="hx-icon icon-angle-down"></span></div></th>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-1" name="1-checkbox" type="checkbox" class="hx-checkbox" checked title="Select All" />\n                      <label for="checkbox-1" class="hx-label"></label>\n                    </div></td>\n                  <td>1</td>\n                  <td>BR001</td>\n                  <td>Branda</td>\n                  <td>Reed</td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-2" name="2-checkbox" type="checkbox" class="hx-checkbox" checked title="Select All" />\n                      <label for="checkbox-2" class="hx-label"></label>\n                    </div></td>\n                  <td>2</td>\n                  <td>MR001</td>\n                  <td>Mercedes</td>\n                  <td>Mendez</td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-3" name="3-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-3" class="hx-label"></label>\n                    </div></td>\n                  <td>3</td>\n                  <td>HS001</td>\n                  <td>Harry</td>\n                  <td>Sechi</td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-4" name="4-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-4" class="hx-label"></label>\n                    </div></td>\n                  <td>4</td>\n                  <td>CY001</td>\n                  <td>Chris</td>\n                  <td>Yap</td>\n                </tr>\n                 <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-5" name="5-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-5" class="hx-label"></label>\n                    </div></td>\n                  <td>5</td>\n                  <td>KL001</td>\n                  <td>Kevin</td>\n                  <td>Liang</td>\n                </tr>\n              </tbody>\n               <tbody class="hx-table-group">\n                <tr>\n                  <th colspan="5"><div>Specialist <small>People who are an expert on a specific aspect of a job</small> <span class="hx-icon icon-angle-down"></span></div></th>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-6" name="checkbox-6" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-6" class="hx-label"></label>\n                    </div></td>\n                  <td>6</td>\n                  <td>BS001</td>\n                  <td>Biggie</td>\n                  <td>Smalls</td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-7" name="checkbox-7" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-7" class="hx-label"></label>\n                    </div></td>\n                  <td>7</td>\n                  <td>JS001</td>\n                  <td>Julia</td>\n                  <td>Sampson</td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-8" name="checkbox-8" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-8" class="hx-label"></label>\n                    </div></td>\n                  <td>8</td>\n                  <td>GP001</td>\n                  <td>John</td>\n                  <td>Pipps</td>\n                </tr>\n              </tbody>\n            </table>\n          '}]}},components:{ExpandingCodeExample:n.a}}},vn4L:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])}});