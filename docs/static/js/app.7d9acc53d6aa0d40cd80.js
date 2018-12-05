webpackJsonp([1],{"6hQZ":function(t,e){},A4IC:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),r={name:"App",data:()=>({query:"",results:void 0,selected:"10",favorites:[]})},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=o("VU/8")(r,a,!1,function(t){o("OalK")},null,null).exports,n=o("/ocq"),l=o("mtWM");const u=o.n(l).a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"});u.interceptors.request.use(function(t){return t.params.APPID="AIzaSyAEtKsm-i2k83YtTpz4Z4fKDAbAnn1EDv0",t},function(t){return Promise.reject(t)});var c={name:"BookSummary",data:()=>({}),props:{bookData:Array}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.results.items,function(e){return o("div",{class:t.bookSummary},[o("img",{attrs:{src:e.volumeInfo.imageLinks.thumbnail,alt:t.bookSummary.main}}),t._v(" "),o("br"),t._v(" "),o("b",[t._v(t._s(e.volumeInfo.description))])])}))},staticRenderFns:[]};o("VU/8")(c,v,!1,function(t){o("A4IC")},"data-v-37f504d1",null).exports;var f={name:"FavoriteBooks",data:()=>({}),props:{favoriteBooks:Array},methods:{removeBook:function(t){this.favoriteBooks.splice(this.favoriteBooks.indexOf(t),1),this.$ls.set("favoriteBooks",this.favoriteBooks)}}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"favorite-books"},[t._m(0),t._v(" "),t.favoriteBooks.length<1?o("li",[t._v("No favorites books to display.")]):t._e(),t._v(" "),t._l(t.favoriteBooks,function(e){return o("li",[o("router-link",{attrs:{to:{name:"BookSearchApp",params:{bookId:e.id}}}},[t._v(t._s(e.volumeInfo.title))]),t._v(" "),o("button",{staticClass:"remove",on:{click:function(o){t.removeBook(e)}}},[t._v("x")])],1)})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("h2",[this._v("Favorite Books")])])}]};var p={name:"BookSearchApp",components:{"favorite-books":o("VU/8")(f,m,!1,function(t){o("6hQZ")},"data-v-75f76d63",null).exports},data:()=>({query:"",results:void 0,selected:"10",favorites:[]}),created(){this.$ls.get("favoriteBooks")&&(this.favorites=this.$ls.get("favoriteBooks"))},methods:{saveBook:function(t){this.favorites.push(t),this.$ls.set("favoriteBooks",this.favorites)},getBooks:function(){this.results=null,this.showloading=!0;let t=`bookSearch_${this.query}`;this.$ls.get(t)?(console.log(`Valid Cache detected for ${t}.`),this.results=this.$ls.get(t),this.showLoading=!1):(console.log(`No cache detected for ${t}.`),u.get("",{params:{q:this.query,maxResults:this.selected}}).then(t=>{this.results=t.data}).catch(t=>{this.errors.push(t)}))}}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"}),t._v(" "),t._m(0),t._v(" "),o("section",{staticClass:"col-md-4"},[o("favorite-books",{attrs:{favoriteBooks:t.favorites}})],1)]),t._v(" "),o("section",[o("form",{on:{submit:function(e){return e.preventDefault(),t.getBooks(e)}}},[o("label",{attrs:{for:"query"}},[t._v("Enter Title/Subject/Author:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"The Grapes of Wrath",id:"query"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),o("br"),t._v(" "),o("label",{attrs:{for:"pages"}},[t._v("Results per Page")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{id:"pages"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?o:o[0]}}},[o("option",[t._v("10")]),t._v(" "),o("option",[t._v("20")]),t._v(" "),o("option",[t._v("40")])]),o("br"),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Go")])])]),t._v(" "),o("section",[o("div",{staticClass:"results"},[o("div",[t.results&&t.results.items.length>0?o("ul",{staticClass:"booklist"},t._l(t.results.items,function(e){return o("li",[o("h2",[t._v(t._s(e.volumeInfo.title))]),t._v(" "),o("ul",t._l(e.volumeInfo.authors,function(e){return o("li",[t._v(t._s(e))])})),t._v(" "),e.volumeInfo.imageLinks?o("p",[o("img",{attrs:{src:e.volumeInfo.imageLinks.thumbnail}})]):t._e(),t._v(" "),o("p",[t._v(t._s(e.volumeInfo.description))]),t._v(" "),o("h3",[t._v("Publisher: "+t._s(e.volumeInfo.publisher)+"\n              "),o("ul",[o("li",[t._v("First Published: "+t._s(e.volumeInfo.publishedDate))])])]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"save"},on:{click:function(o){t.saveBook(e)}}},[t._v("Save Book to Favorites")])])})):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"col-md-4 headliner"},[e("img",{attrs:{src:o("a05L")}})])}]};var _=o("VU/8")(p,d,!1,function(t){o("x7Ta")},"data-v-e4d934b6",null).exports;s.a.use(n.a);var h=new n.a({routes:[{path:"/",name:"BookSearchApp",component:_}]}),k=o("yXtV"),b=o.n(k);o("AYPi");s.a.use(b.a,{namespace:"book__"}),s.a.config.productionTip=!1,new s.a({el:"#app",router:h,components:{App:i},template:"<App/>"})},OalK:function(t,e){},a05L:function(t,e,o){t.exports=o.p+"static/img/BookSearchApp.14fab5c.jpg"},x7Ta:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7d9acc53d6aa0d40cd80.js.map