(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1441:function(t,e,a){"use strict";a(806)},1572:function(t,e,a){"use strict";a.r(e);a(45);var i=a(328),l=a.n(i),s=a(661),o={name:"singleEllipsis",data:function(){return{width:200,selectedType:"ellipsis",overflowValue:"hidden",whiteSpaceValue:"nowrap",overflow:["hidden","visible","scroll","auto"],whiteSpace:["normal","wrap","nowrap"],textOverflow:["clip","ellipsis","…"],tableAttrData:s.b,tabcolums:s.c}},watch:{width:function(){this.updateCss()},overflowValue:function(){this.updateCss()},selectedType:function(){this.updateCss()},whiteSpaceValue:function(){this.updateCss()}},methods:{styleToString:function(t){var e="";for(var a in t)e+="".concat(a,": ").concat(t[a],";\n");return e},updateCss:function(){this.$refs.css.innerHTML=l.a.highlight("width: ".concat(this.width,"px;\noverflow: ").concat(this.overflowValue,";\ntext-overflow: ").concat(this.selectedType,";\nwhite-space: ").concat(this.whiteSpaceValue),l.a.languages.css)}},mounted:function(){this.updateCss()}},r=(a(1441),a(12)),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"effect-display-wrap",style:{width:t.width+"px",overflow:t.overflowValue,textOverflow:t.selectedType,whiteSpace:t.whiteSpaceValue}},[t._v("单行溢出省略号显示-固定宽度是必须的-文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏,文本内容超出部分溢出隐藏")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css",staticStyle:{"margin-bottom":"30px"}},[a("code",{ref:"css"})])]),t._v(" "),a("div",{staticClass:"attr-operate-wrap"},[a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("宽度-width:")]),t._v(" "),a("el-slider",{staticClass:"slider",attrs:{min:200,max:705,"show-input":"","input-size":"mini"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("内容溢出-overflow:")]),t._v(" "),a("el-radio-group",{staticClass:"el-radio-group",model:{value:t.overflowValue,callback:function(e){t.overflowValue=e},expression:"overflowValue"}},t._l(t.overflow,(function(e){return a("el-radio",{key:e,staticClass:"radio",attrs:{label:e}},[t._v(t._s(e))])})),1)],1),t._v(" "),a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("文本溢出-text-overflow:")]),t._v(" "),a("el-radio-group",{staticClass:"el-radio-group",model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}},t._l(t.textOverflow,(function(e){return a("el-radio",{key:e,staticClass:"radio",attrs:{label:e}},[t._v(t._s(e))])})),1)],1),t._v(" "),a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("段落文本换行-white-space:")]),t._v(" "),a("el-radio-group",{staticClass:"el-radio-group",model:{value:t.whiteSpaceValue,callback:function(e){t.whiteSpaceValue=e},expression:"whiteSpaceValue"}},t._l(t.whiteSpace,(function(e){return a("el-radio",{key:e,staticClass:"radio",attrs:{label:e}},[t._v(t._s(e))])})),1)],1)]),t._v(" "),a("div",{staticClass:"attr-table-desc"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableAttrData}},t._l(t.tabcolums,(function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,align:"center","header-align":"center"}})})),1)],1)])}),[],!1,null,"60cedc46",null);e.default=n.exports},661:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s}));var i=[{attr:"width",type:"Number",value:"500",descption:"宽度值必须固定"},{attr:"overflow",type:"String",value:"hidden/visible/scroll/auto",descption:"hidden-内容溢出隐藏 | visible(默认-不会被裁剪) | scroll/auto(内容溢出-水平垂直方向会出现滚动条)"},{attr:"text-overflow",type:"String",value:"ellipsis",descption:"多出部分省略号显示"},{attr:"white-space",type:"String",value:"nowrap",descption:"不换行"}],l=[{attr:"width",type:"Number",value:"500",descption:"宽度值必须固定"},{attr:"display",type:"String",value:"-webkit-box(-m/-moz)",descption:"老版本-声明盒子弹性收缩,必须要加上浏览器前缀,chrome(-webkit),IE(-moz),firefox(-moz)"},{attr:"overflow",type:"String",value:"hidden/visible/scroll/auto",descption:"hidden-内容溢出隐藏"},{attr:"text-overflow",type:"String",value:"ellipsis",descption:"多出部分省略号显示"},{attr:"box-orient",type:"String",value:"vertical",descption:"vertical垂直方向/horizontal水平方向"},{attr:"line-clamp",type:"Number",value:2,descption:"控制显示行数"}],s=[{prop:"attr",label:"属性"},{prop:"type",label:"类型"},{prop:"value",label:"值",width:"200px"},{prop:"descption",label:"说明"}]},806:function(t,e,a){}}]);