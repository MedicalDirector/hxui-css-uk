webpackJsonp([6],{"+5Ym":function(t,n,e){"use strict";n.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"05OJ":function(t,n,e){var s=e("krIM");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("0605eb71",s,!1)},"0dgp":function(t,n,e){var s=e("gIdq");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("27cae0c4",s,!1)},"1e7C":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("t4z0"),a=e("9WF1"),i=!1;var d=function(t){i||e("05OJ")},h=e("VU/8")(s.a,a.a,!1,d,null,null);h.options.__file="pages/tables.vue",n.default=h.exports},"9HKM":function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[t._v(t._s(t.title))]),"<h1>Code here</h1>"!==t.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:t.toggleCode}},[t._m(0)]):t._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:t.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[t._v("\n"+t._s(t.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:t.background,domProps:{innerHTML:t._s(t.example)}})])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"hx-icon-control"},[n("i",{staticClass:"hx-icon icon-code is-medium"})])}]};n.a=a},"9WF1":function(t,n,e){"use strict";var s=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"tables"}},[n("h1",{staticClass:"hx-title"},[this._v("Tables")]),n("h2",{staticClass:"hx-subtitle"},[this._v("The inevitable HTML table, with special case cells")]),n("hr"),this._l(this.examples,function(t,e){return n("expanding-code-example",{key:e,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};n.a=a},Zjej:function(t,n,e){"use strict";var s=e("+5Ym"),a=e("9HKM"),i=!1;var d=function(t){i||e("0dgp")},h=e("VU/8")(s.a,a.a,!1,d,"data-v-735a47f0",null);h.options.__file="components/ExpandingCodeExample.vue",n.a=h.exports},gIdq:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},krIM:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".actions{width:5%}",""])},t4z0:function(t,n,e){"use strict";var s=e("Zjej");n.a={data:function(){return{examples:[{title:"Default table",code:'\n<p>Tables are borderless by default.</p>\n<p>Add <code>class="hx-table"</code> to the table tag for a HxUI styled table.</p>\n<p>You can set a table row as <strong>selected</strong> by appending the <code>is-selected</code> modifier on a <code>&#x3C;tr&#x3E;</code>.</p>\n<table class="hx-table is-striped mt-5">\n  <thead>\n    <tr>\n      <th><abbr title="Position">Pos</abbr></th>\n      <th>Team</th>\n      <th class="has-text-right"><abbr title="Played">Pld</abbr></th>\n      <th class="has-text-right"><abbr title="Won">W</abbr></th>\n      <th class="has-text-right"><abbr title="Drawn">D</abbr></th>\n      <th class="has-text-right"><abbr title="Lost">L</abbr></th>\n      <th class="has-text-right"><abbr title="Goals for">GF</abbr></th>\n      <th class="has-text-right"><abbr title="Goals against">GA</abbr></th>\n      <th class="has-text-right"><abbr title="Goal difference">GD</abbr></th>\n      <th class="has-text-right"><abbr title="Points">Pts</abbr></th>\n      <th>Qualification or relegation</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>1</th>\n      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">23</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">3</td>\n      <td class="has-text-right">68</td>\n      <td class="has-text-right">36</td>\n      <td class="has-text-right">+32</td>\n      <td class="has-text-right">81</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">20</td>\n      <td class="has-text-right">11</td>\n      <td class="has-text-right">7</td>\n      <td class="has-text-right">65</td>\n      <td class="has-text-right">36</td>\n      <td class="has-text-right">+29</td>\n      <td class="has-text-right">71</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">19</td>\n      <td class="has-text-right">13</td>\n      <td class="has-text-right">6</td>\n      <td class="has-text-right">69</td>\n      <td class="has-text-right">35</td>\n      <td class="has-text-right">+34</td>\n      <td class="has-text-right">70</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\n    </tr>\n    <tr class="is-selected">\n      <th>4</th>\n      <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">19</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">10</td>\n      <td class="has-text-right">71</td>\n      <td class="has-text-right">41</td>\n      <td class="has-text-right">+30</td>\n      <td class="has-text-right">66</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">19</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">10</td>\n      <td class="has-text-right">49</td>\n      <td class="has-text-right">35</td>\n      <td class="has-text-right">+14</td>\n      <td class="has-text-right">66</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>\n    </tr>\n    <tr>\n      <th>6</th>\n      <td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">18</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">11</td>\n      <td class="has-text-right">59</td>\n      <td class="has-text-right">41</td>\n      <td class="has-text-right">+18</td>\n      <td class="has-text-right">63</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>\n    </tr>\n    <tr>\n      <th>7</th>\n      <td><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">16</td>\n      <td class="has-text-right">14</td>\n      <td class="has-text-right">8</td>\n      <td class="has-text-right">65</td>\n      <td class="has-text-right">51</td>\n      <td class="has-text-right">+14</td>\n      <td class="has-text-right">62</td>\n      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a></td>\n    </tr>\n    <tr>\n      <th>8</th>\n      <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">16</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">10</td>\n      <td class="has-text-right">63</td>\n      <td class="has-text-right">50</td>\n      <td class="has-text-right">+13</td>\n      <td class="has-text-right">60</td>\n      <td></td>\n    </tr>\n    <tr>\n      <th>9</th>\n      <td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">14</td>\n      <td class="has-text-right">9</td>\n      <td class="has-text-right">15</td>\n      <td class="has-text-right">41</td>\n      <td class="has-text-right">55</td>\n      <td class="has-text-right">−14</td>\n      <td class="has-text-right">51</td>\n      <td></td>\n    </tr>\n    <tr>\n      <th>10</th>\n      <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>\n      <td class="has-text-right">38</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">14</td>\n      <td class="has-text-right">12</td>\n      <td class="has-text-right">59</td>\n      <td class="has-text-right">53</td>\n      <td class="has-text-right">+6</td>\n      <td class="has-text-right">50</td>\n      <td></td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Narrow table",code:'\n<p>Add <code>class="hx-table is-narrow"</code> to the table tag to make the cells narrower.</p>\n<table class="hx-table is-narrow">\n  <thead>\n    <tr>\n      <th>One</th>\n      <th>Two</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Three</td>\n      <td>Four</td>\n    </tr>\n    <tr>\n      <td>Five</td>\n      <td>Six</td>\n    </tr>\n    <tr>\n      <td>Seven</td>\n      <td>Eight</td>\n    </tr>\n    <tr>\n      <td>Nine</td>\n      <td>Ten</td>\n    </tr>\n    <tr>\n      <td>Eleven</td>\n      <td>Twelve</td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Hover table",code:'\n            <p>Add <code>class="hx-table is-hover"</code> to the table tag for a hover state on rows</p>\n            <table class="hx-table is-hover">\n              <thead>\n                <tr>\n                  <th>One</th>\n                  <th>Two</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Three</td>\n                  <td>Four</td>\n                </tr>\n                <tr>\n                  <td>Five</td>\n                  <td>Six</td>\n                </tr>\n                <tr>\n                  <td>Seven</td>\n                  <td>Eight</td>\n                </tr>\n                <tr>\n                  <td>Nine</td>\n                  <td>Ten</td>\n                </tr>\n                <tr>\n                  <td>Eleven</td>\n                  <td>Twelve</td>\n                </tr>\n              </tbody>\n            </table>\n          '},{title:"Contextual",code:'\n            <p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code>, <code>class="is-info"</code> to the tr tag </p>\n            <table class="hx-table">\n              <thead>\n                <tr>\n                  <th>Context</th>\n                  <th>Icon</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class="is-danger">\n                  <td>Danger</td>\n                   <td><i class="hx-icon icon-exclamation"></i></td>\n                </tr>\n                <tr class="is-warning">\n                  <td>Warning</td>\n                   <td><i class="hx-icon icon-exclamation-outline"></i></td>\n                </tr>\n                <tr class="is-success">\n                  <td>Success</td>\n                   <td><i class="hx-icon icon-check"></i></td>\n                </tr>\n                <tr class="is-info">\n                  <td>Info</td>\n                   <td><i class="hx-icon icon-information"></i></td>\n                </tr>\n                <tr>\n                  <td>Default</td>\n                   <td><i class="hx-icon icon-information-outline"></i></td>\n                </tr>\n              </tbody>\n            </table>\n          '},{title:"Table with text field",code:'\n            <p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code>, <code>class="is-info"</code> to the tr tag </p>\n            <table class="hx-table">\n              <thead>\n                <tr>\n                  <th>Dessert (100g)</th>\n                  <th class="has-text-right"><a href="#"><i class="hx-icon icon-arrow-down"></i> Calories</a></th>\n                  <th class="has-text-right">Fat (g)</th>\n                  <th class="has-text-right">Carbs (g)</th>\n                  <th class="has-text-right">Protein (g)</th>\n                  <th class="has-text-right">Iron (%)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class="">\n                  <td>Frozen Yoghurt</td>\n                  <td width="110" class="has-text-right">159</td>\n                  <td width="90" class="has-text-right">6</td>\n                  <td width="90" class="has-text-right">24</td>\n                  <td width="90" class="has-text-right">4</td>\n                  <td width="90" class="has-text-right">1</td>\n                </tr>\n                <tr class="">\n                  <td class="has-text-field">\n                    <input class="hx-input" type="text" placeholder="Name of dessert" required>\n                  </td>\n                  <td width="110" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                  <td width="90" class="has-text-field has-text-right">\n                    <input class="hx-input" type="text" placeholder="" required>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan="6">\n                    <a href="#" class="is-gray is-flex hx-flex-align-center">\n                      <i class="hx-icon icon-plus-outline mr-2"></i>\n                      Add new row\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          '},{title:"Grouped rows table",code:'\n            <p>Add <code>class="hx-table-group"</code> to the tbody tag proceeding tbody related rows.</p>\n            <table class="hx-table is-hover">\n              <thead>\n                <tr>\n                  <th width="1"><div class="hx-checkbox-control">\n                      <input id="checkbox-all" name="all-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-all" class="hx-label">ID</label>\n                    </div></th>\n                  <th>User Code</th>\n                  <th>Firstname</th>\n                  <th>Surname</th>\n                  <th class="actions is-text-center">Actions</th>\n                </tr>\n              </thead>\n              <tbody class="hx-table-group">\n                <tr>\n                  <th colspan="6"><div>Administrators <small>People who have access to all areas of the application</small> <span class="hx-icon icon-angle-down"></span></div></th>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr class="is-selected">\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-19" name="19-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-19" class="hx-label">19</label>\n                    </div></td>\n                  <td>TS001</td>\n                  <td>Tupac</td>\n                  <td>Shakur</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                 <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-20" name="20-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-20" class="hx-label">20</label>\n                    </div></td>\n                  <td>BP001</td>\n                  <td>Brian</td>\n                  <td>Pulliese</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-21" name="21-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-21" class="hx-label">21</label>\n                    </div></td>\n                  <td>JS001</td>\n                  <td>John</td>\n                  <td>Smith</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n              <tbody class="hx-table-group">\n                <tr>\n                  <th colspan="6"><div>General Practice <small>People who have access to patient clinical records</small> <span class="hx-icon icon-angle-down"></span></div></th>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-1" name="1-checkbox" type="checkbox" class="hx-checkbox" checked title="Select All" />\n                      <label for="checkbox-1" class="hx-label">1</label>\n                    </div></td>\n                  <td>BR001</td>\n                  <td>Branda</td>\n                  <td>Reed</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-2" name="2-checkbox" type="checkbox" class="hx-checkbox" checked title="Select All" />\n                      <label for="checkbox-2" class="hx-label">2</label>\n                    </div></td>\n                  <td>MR001</td>\n                  <td>Mercedes</td>\n                  <td>Mendez</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-3" name="3-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-3" class="hx-label">3</label>\n                    </div></td>\n                  <td>HS001</td>\n                  <td>Harry</td>\n                  <td>Sechi</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-4" name="4-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-4" class="hx-label">4</label>\n                    </div></td>\n                  <td>CY001</td>\n                  <td>Chris</td>\n                  <td>Yap</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                 <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-5" name="5-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-5" class="hx-label">5</label>\n                    </div></td>\n                  <td>KL001</td>\n                  <td>Kevin</td>\n                  <td>Liang</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n               <tbody class="hx-table-group">\n                <tr>\n                  <th colspan="6"><div>Specialist <small>People who are an expert on a specific aspect of a job</small> <span class="hx-icon icon-angle-down"></span></div></th>\n                </tr>\n              </tbody>\n              <tbody>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-6" name="checkbox-6" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-6" class="hx-label">6</label>\n                    </div></td>\n                  <td>BS001</td>\n                  <td>Biggie</td>\n                  <td>Smalls</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-7" name="checkbox-7" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-7" class="hx-label">7</label>\n                    </div></td>\n                  <td>JS001</td>\n                  <td>Julia</td>\n                  <td>Sampson</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class="hx-checkbox-control">\n                      <input id="checkbox-8" name="checkbox-8" type="checkbox" class="hx-checkbox" title="Select All" />\n                      <label for="checkbox-8" class="hx-label">8</label>\n                    </div></td>\n                  <td>GP001</td>\n                  <td>John</td>\n                  <td>Pipps</td>\n                  <td>\n                    <div class="hx-button-split">\n                      <button type="button" class="hx-button is-flat"><i class="hx-icon icon-edit"></i></button>\n                      <button type="button" class="hx-button is-flat"><i class="icon icon-more"></i></button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          '}]}},components:{ExpandingCodeExample:s.a}}}});