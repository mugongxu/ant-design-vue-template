webpackJsonp([1],{S1bF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("YaEn"),r={name:"mainContainer",data:function(){return{navRouter:n.b}},computed:{nav:function(){return this.$route.path}},created:function(){console.log(this.navRouter)}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{staticClass:"main-container"},[a("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%"}},[a("div",{staticClass:"logo"}),e._v(" "),a("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]}},e._l(e.navRouter,function(t){return a("a-menu-item",{key:t.path,attrs:{index:t.path,selectedKeys:[e.nav]}},[a("router-link",{attrs:{to:t.path}},[e._v("\n          "+e._s(t.name)+"\n        ")])],1)}),1)],1),e._v(" "),a("a-layout-content",{style:{padding:"0 50px",marginTop:"64px"}},[a("a-breadcrumb",{style:{margin:"16px 0"}},[a("a-breadcrumb-item",[e._v("Home")]),e._v(" "),a("a-breadcrumb-item",[e._v("List")]),e._v(" "),a("a-breadcrumb-item",[e._v("App")])],1),e._v(" "),a("div",{style:{background:"#fff",padding:"24px",minHeight:"380px"}},[a("router-view")],1)],1),e._v(" "),a("a-layout-footer",{style:{textAlign:"center"}},[e._v("\n    Ant Design ©2018 Created by Ant UED\n  ")])],1)},staticRenderFns:[]};var o=a("C7Lr")(r,i,!1,function(e){a("pFa3")},"data-v-acdbd7c2",null);t.default=o.exports},pFa3:function(e,t){}});
//# sourceMappingURL=1.4db9622d74b1bd7b72dc.js.map