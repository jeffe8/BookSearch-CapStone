webpackJsonp([1],{"+RUl":function(e,t){},"1cGm":function(e,t){},FwYh:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:o("a05L")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App"},r,!1,function(e){o("1cGm")},null,null).exports,n=o("/ocq"),i=o("mtWM");const u=o.n(i).a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"});u.interceptors.request.use(function(e){return e.params.APPID="AIzaSyAEtKsm-i2k83YtTpz4Z4fKDAbAnn1EDv0",e},function(e){return Promise.reject(e)});var l={name:"FavoriteBooks",data:()=>({}),props:{favoriteBooks:Array},methods:{removeBook:function(e){this.favoriteBooks.splice(this.favoriteBooks.indexOf(book),1),this.$ls.set("favoriteBooks",this.favoriteBooks)}}},v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",{staticClass:"favorite-books"},[e._m(0),e._v(" "),e.favoriteBooks.length<1?o("li",[e._v("No favorites books to display.")]):e._e(),e._v(" "),e._l(e.favoriteBooks,function(t){return o("li",[o("router-link",{attrs:{to:{name:"BookSearchApp",params:{bookId:t.id}}}},[e._v(e._s(t.name))]),e._v(" "),o("button",{staticClass:"remove",on:{click:function(o){e.removeBook(t)}}},[e._v("x")])],1)})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("h2",[this._v("Favorite Books")])])}]};var c={name:"BookSearchApp",components:{"favorite-books":o("VU/8")(l,v,!1,function(e){o("+RUl")},"data-v-fd17596c",null).exports},data:()=>({query:"",results:void 0,selected:"10"}),methods:{saveBook:function(e){this.favorites.push(e),this.$ls.set("favoriteBooks",this.favorites)},getBooks(){u.get("",{params:{q:this.query,maxResults:this.selected}}).then(e=>{this.results=e.data}).catch(e=>{this.errors.push(e)})}}},p={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"begin"},[o("favorite-books",{attrs:{favoriteBooks:e.favorites}}),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.getBooks(t)}}},[o("label",{attrs:{for:"query"}},[e._v("Enter Title/Subject/Author:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"The Grapes of Wrath",id:"query"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),o("br"),e._v(" "),o("label",{attrs:{for:"pages"}},[e._v("Results per Page")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"pages"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?o:o[0]}}},[o("option",[e._v("10")]),e._v(" "),o("option",[e._v("20")]),e._v(" "),o("option",[e._v("40")])]),o("br"),e._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Go")])]),e._v(" "),o("div",{staticClass:"container-fluid results"},[o("form",{on:{save:function(t){return t.preventDefault(),e.saveBooks(t)}}},[e.results&&e.results.items.length>0?o("ul",{staticClass:"booklist"},e._l(e.results.items,function(t){return o("li",[o("h2",[e._v("\n        "+e._s(t.volumeInfo.title)+"\n        ")]),e._v(" "),o("ul",e._l(t.volumeInfo.authors,function(t){return o("li",[e._v(e._s(t))])})),e._v(" "),o("p",[o("img",{attrs:{src:t.volumeInfo.imageLinks.thumbnail}})]),e._v(" "),o("p",[e._v(e._s(t.volumeInfo.description))]),e._v(" "),o("h3",[e._v("\n          Publisher:  "+e._s(t.volumeInfo.publisher)+"\n          "),o("ul",[o("li",[e._v("First Published:  "+e._s(t.volumeInfo.publishedDate))])])]),e._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"save"}},[e._v("Save Book")])])})):e._e()])])],1)},staticRenderFns:[]};var f=o("VU/8")(c,p,!1,function(e){o("FwYh")},"data-v-486daff1",null).exports;s.a.use(n.a);var m=new n.a({routes:[{path:"/",name:"BookSearchApp",component:f}]}),_=o("yXtV"),h=o.n(_);s.a.use(h.a,{namespace:"book__"}),s.a.config.productionTip=!1,new s.a({el:"#app",router:m,components:{App:a},template:"<App/>"})},a05L:function(e,t,o){e.exports=o.p+"static/img/BookSearchApp.14fab5c.jpg"}},["NHnr"]);