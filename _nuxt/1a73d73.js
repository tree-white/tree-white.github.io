(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{538:function(t,e,l){t.exports=l.p+"img/定位.0c890c5.png"},539:function(t,e,l){var content=l(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(21).default)("59fcd7ee",content,!0,{sourceMap:!1})},570:function(t,e,l){"use strict";l(539)},571:function(t,e,l){var o=l(20)(!1);o.push([t.i,".main[data-v-146696d9]{padding:20px 0;border-bottom:1px solid #999}.coverImg[data-v-146696d9]{width:100%;height:210px;-o-object-fit:cover;object-fit:cover}.hotelMessage[data-v-146696d9]{padding:0 15px;cursor:default}.hotelMessage h1[data-v-146696d9]{font-weight:400;cursor:pointer;font-size:28px}.hotelMessage p[data-v-146696d9]{color:#999}.hotelMessage span i[data-v-146696d9]{color:#f90}.evaluate[data-v-146696d9]{margin:10px 0}.localtion[data-v-146696d9]{display:flex;align-items:center}.localtion img[data-v-146696d9]{width:18px;height:18px}.el-menu-vertical-demo[data-v-146696d9]{border-right:0}.el-menu-vertical-demo[data-v-146696d9] .el-menu-item{padding:0!important}.el-menu-vertical-demo .title[data-v-146696d9]{display:flex;justify-content:space-between;border-bottom:1px solid #ddd;padding-left:20px}.el-menu-vertical-demo .title i[data-v-146696d9],.el-menu-vertical-demo .title span[data-v-146696d9]{display:flex;align-items:center;font-size:16px;color:#666}.el-menu-vertical-demo .title span em[data-v-146696d9]{color:#f90;font-size:18px;margin-right:2px}.el-menu-vertical-demo .title span b[data-v-146696d9]{margin-top:4px}",""]),t.exports=o},631:function(t,e,l){"use strict";l.r(e);var o={props:{hotelList:{type:Object}},data:function(){return{score:this.hotelList.stars||3.7}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},n=(l(570),l(22)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("el-row",{staticClass:"main",attrs:{type:"flex",align:"center"}},[o("el-col",{attrs:{span:8}},[o("img",{staticClass:"coverImg",attrs:{src:t.hotelList.photos,alt:""}})]),t._v(" "),o("el-col",{staticClass:"hotelMessage",attrs:{span:12}},[o("nuxt-link",{attrs:{to:"/hotel/detail?id="+t.hotelList.id}},[o("h1",[t._v(t._s(t.hotelList.name))])]),t._v(" "),o("p",[t._v(t._s(t.hotelList.alias))]),t._v(" "),o("el-row",{staticClass:"evaluate",attrs:{type:"flex",align:"center",justify:"space-between"}},[o("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}分"},model:{value:t.score,callback:function(e){t.score=e},expression:"score"}}),t._v(" "),o("span",[o("i",[t._v(t._s(t.hotelList.common_remarks))]),t._v(" 条评价")]),t._v(" "),o("span",[o("i",[t._v(t._s(t.hotelList.all_remarks))]),t._v(" 条篇游记")])],1),t._v(" "),o("div",{staticClass:"localtion"},[o("img",{attrs:{src:l(538),alt:""}}),t._v(" "),o("span",[t._v("位于："+t._s(t.hotelList.address))])])],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-menu",{staticClass:"el-menu-vertical-demo",on:{open:t.handleOpen,close:t.handleClose}},t._l(t.hotelList.products,(function(e,l){return o("el-menu-item",{key:l,attrs:{index:l.toString()}},[o("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[o("i",[t._v(t._s(e.name))]),t._v(" "),o("span",[o("em",[t._v("￥"+t._s(e.price))]),t._v("起 "),o("b",{staticClass:"el-icon-arrow-right"})])])])})),1)],1)],1)],1)}),[],!1,null,"146696d9",null);e.default=component.exports}}]);