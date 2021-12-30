(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1814:function(v,_,e){"use strict";e.r(_);var t=e(12),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("hr"),v._v(" "),e("p",[v._v("title: vue 基础面试题 3\nautoGroup-1: vue 基础面试题")]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"vue-基础面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-基础面试题"}},[v._v("#")]),v._v(" vue 基础面试题")]),v._v(" "),e("TOC"),v._v(" "),e("h2",{attrs:{id:"第-1-题-vue-中key的作用和工作原理-说说你对它的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-1-题-vue-中key的作用和工作原理-说说你对它的理解"}},[v._v("#")]),v._v(" 第 1 题-Vue 中"),e("code",[v._v("key")]),v._v("的作用和工作原理,说说你对它的理解")]),v._v(" "),e("p",[e("code",[v._v("key")]),v._v("的作用主要是为了高效的更新虚拟 DOM,其原理是"),e("code",[v._v("vue")]),v._v("在"),e("code",[v._v("patch")]),v._v("过程中通过"),e("code",[v._v("key")]),v._v("可以精准判断两个节点是否是同一个,从而避免频繁更新不同的元素,使得整个"),e("code",[v._v("patch")]),v._v("过程更加高效,减少"),e("code",[v._v("DOM")]),v._v("操作量,提高性能")]),v._v(" "),e("ol",[e("li",[v._v("若不设置"),e("code",[v._v("key")]),v._v("还可能在列表更新时引发一些隐蔽的"),e("code",[v._v("bug")])]),v._v(" "),e("li",[e("code",[v._v("vue")]),v._v("中在使用相同标签名元素的过度切换时,也会使用到"),e("code",[v._v("key")]),v._v("属性,其目的是为了让"),e("code",[v._v("vue")]),v._v("可以区分它们,否则"),e("code",[v._v("vue")]),v._v("只会替换其内部属性而不回触发过度效果")])]),v._v(" "),e("h2",{attrs:{id:"第-2-题-vue-中的-diff-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-2-题-vue-中的-diff-原理"}},[v._v("#")]),v._v(" 第 2 题-Vue 中的 diff 原理")]),v._v(" "),e("p",[e("code",[v._v("vue")]),v._v("的"),e("code",[v._v("diff")]),v._v("算法是平级比较,不考虑跨级比较的情况,内部采用深度递归的方式+双指针的方式进行比较")]),v._v(" "),e("ol",[e("li",[v._v("先比较是否相同的节点")]),v._v(" "),e("li",[v._v("相同节点比较属性,并复用老节点")]),v._v(" "),e("li",[v._v("比较儿子节点,考虑旧节点和新节点儿子的情况")]),v._v(" "),e("li",[v._v("比对查找进行复用")])]),v._v(" "),e("p",[e("code",[v._v("vue2")]),v._v("的核心"),e("code",[v._v("Diff")]),v._v("算法采用了双端比较的算法,同时从新旧"),e("code",[v._v("children")]),v._v("的两端开始进行比较,借助"),e("code",[v._v("key")]),v._v("值找到可复用的节点,在进行相关的操作")]),v._v(" "),e("p",[e("code",[v._v("vue3.x")]),v._v("借鉴了"),e("code",[v._v("ivi算法")]),v._v("和"),e("code",[v._v("inferno")]),v._v("算法,该算法中还运用了动态规划的思想求解最长递归子序列")]),v._v(" "),e("h2",{attrs:{id:"第-3-题-v-if-与-v-for-的优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-3-题-v-if-与-v-for-的优先级"}},[v._v("#")]),v._v(" 第 3 题-v-if 与 v-for 的优先级")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("v-for")]),v._v("优先于"),e("code",[v._v("v-if")]),v._v("被解析")]),v._v(" "),e("li",[v._v("如果同时出现,每次渲染都会先执行循环在判断条件,无论如何循环都不可避免,浪费了性能")]),v._v(" "),e("li",[v._v("要避免出现这种情况则在"),e("code",[v._v("外层嵌套template")]),v._v(",在这一层进行"),e("code",[v._v("v-if")]),v._v("判断,然后在内部进行"),e("code",[v._v("v-for")]),v._v("循环")]),v._v(" "),e("li",[v._v("如果条件出现在循环内部,可通过计算属性提前过滤掉那些不需要显示的项")])]),v._v(" "),e("h2",{attrs:{id:"第-4-题-v-if-与-v-show-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-4-题-v-if-与-v-show-的区别"}},[v._v("#")]),v._v(" 第 4 题-v-if 与 v-show 的区别")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("v-if")]),v._v("是真正的条件渲染,直到条件第一次变为真时，才会开始渲染")]),v._v(" "),e("li",[e("code",[v._v("v-show")]),v._v("不管初始条件是什么会渲染,并且只是简单基于"),e("code",[v._v("css")]),v._v("的"),e("code",[v._v("display")]),v._v("属性进行切换")])]),v._v(" "),e("p",[e("strong",[v._v("注意")]),v._v(": "),e("code",[v._v("v-if")]),v._v("适用于不需要频繁切换条件的场景,"),e("code",[v._v("v-show")]),v._v("则适用于需要非常频繁切换条件的场景")]),v._v(" "),e("h2",{attrs:{id:"第-5-题-computed-和-watch-的区别和运用的场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-5-题-computed-和-watch-的区别和运用的场景"}},[v._v("#")]),v._v(" 第 5 题-computed 和 watch 的区别和运用的场景？")]),v._v(" "),e("p",[e("code",[v._v("computed")]),v._v(":计算属性,依赖其他属性值,并且"),e("code",[v._v("computed")]),v._v("的值有缓存,只有它依赖的属性值发生改变,下一次获取"),e("code",[v._v("computed")]),v._v("的值才会重新计算"),e("code",[v._v("computed")]),v._v("的值")]),v._v(" "),e("p",[e("code",[v._v("watch")]),v._v(":监听数据的变化,更多的是观察的作用,类似于某些数据的监听回调,每当监听的数据变化时都会执行回调进行后续操作")]),v._v(" "),e("p",[e("strong",[v._v("运用场景")]),v._v(":")]),v._v(" "),e("ol",[e("li",[v._v("当我们需要进行数值计算,并且依赖于其他数据时,应该使用"),e("code",[v._v("watch")]),v._v(",使用"),e("code",[v._v("watch")]),v._v("选项允许我们执行异步操作(访问一个 API),限制我们执行该操作的频率,并且我们得到最终的结果前,设置中间状态,这些都是计算属性无法做到的")]),v._v(" "),e("li",[v._v("当我们需要进行数值计算,并且依赖于其他数据时,应该使用"),e("code",[v._v("computed")]),v._v(",因为可以利用"),e("code",[v._v("computed")]),v._v("的缓存特性,避免每次获取值时,都要重新计算")])]),v._v(" "),e("h2",{attrs:{id:"第-6-题-如何理解自定义指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-6-题-如何理解自定义指令"}},[v._v("#")]),v._v(" 第 6 题-如何理解自定义指令?")]),v._v(" "),e("p",[v._v("指令的实现原理,可以从编译原理->代码生成->指令钩子实现进行概述")]),v._v(" "),e("ol",[e("li",[v._v("在生成"),e("code",[v._v("ast")]),v._v("语法树时,遇到指令会给当前元素添加"),e("code",[v._v("directives")]),v._v("属性")]),v._v(" "),e("li",[v._v("通过"),e("code",[v._v("genDirectives")]),v._v("生成指令代码")]),v._v(" "),e("li",[v._v("在"),e("code",[v._v("patch")]),v._v("前将指令的钩子提取到"),e("code",[v._v("cbs")]),v._v("中,在"),e("code",[v._v("patch")]),v._v("过程中调用对应的钩子")]),v._v(" "),e("li",[v._v("当执行指令对应的钩子函数时,调用对应指令定义的方法")])]),v._v(" "),e("h2",{attrs:{id:"第-7-题-v-model的原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-7-题-v-model的原理是什么"}},[v._v("#")]),v._v(" 第 7 题-"),e("code",[v._v("v-model")]),v._v("的原理是什么?")]),v._v(" "),e("p",[e("code",[v._v("v-model")]),v._v("本质就是一个语法糖,可以看成是"),e("code",[v._v("value+input")]),v._v("方法的语法糖,可以通过"),e("code",[v._v("model")]),v._v("属性的"),e("code",[v._v("prop")]),v._v("和"),e("code",[v._v("event")]),v._v("属性来进行自定义,原生的"),e("code",[v._v("v-model")]),v._v(",会更具标签的不同生成不同的事件和属性,"),e("code",[v._v("v-model")]),v._v("在内部为不同的输入元素使用不同的属性并抛出不同的事件")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("text")]),v._v("和"),e("code",[v._v("textarea")]),v._v("元素使用"),e("code",[v._v("value")]),v._v("属性和"),e("code",[v._v("input")]),v._v("事件")]),v._v(" "),e("li",[e("code",[v._v("checkbox")]),v._v("和"),e("code",[v._v("radio")]),v._v("使用"),e("code",[v._v("checked")]),v._v("属性和"),e("code",[v._v("change")]),v._v("事件")]),v._v(" "),e("li",[e("code",[v._v("select")]),v._v("字段将"),e("code",[v._v("value")]),v._v("作为"),e("code",[v._v("prop")]),v._v("并将"),e("code",[v._v("change")]),v._v("作为事件")])]),v._v(" "),e("h2",{attrs:{id:"第-8-题-vue-的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-8-题-vue-的优点"}},[v._v("#")]),v._v(" 第 8 题-Vue 的优点")]),v._v(" "),e("h2",{attrs:{id:"第-9-题-请谈一谈-vue-中的-mvvm-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-9-题-请谈一谈-vue-中的-mvvm-模式"}},[v._v("#")]),v._v(" 第 9 题-请谈一谈 Vue 中的 MVVM 模式")]),v._v(" "),e("p",[v._v("m(数据)v(视图)c(控制器)--\x3emvvm")]),v._v(" "),e("p",[v._v("数据是核心,分离")]),v._v(" "),e("p",[v._v("MVVM 模式的指令 v-bind,将传统的 c 控制层变成"),e("code",[v._v("vm")])]),v._v(" "),e("h2",{attrs:{id:"第-10-题-渐进式框架的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-10-题-渐进式框架的理解"}},[v._v("#")]),v._v(" 第 10 题-渐进式框架的理解")]),v._v(" "),e("h2",{attrs:{id:"第-11-题-vue-中双向数据绑定是如何实现的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-11-题-vue-中双向数据绑定是如何实现的"}},[v._v("#")]),v._v(" 第 11 题-Vue 中双向数据绑定是如何实现的")]),v._v(" "),e("p",[v._v("视图层--数据层")]),v._v(" "),e("p",[v._v("vue2.0 defineProperty\nvue3.0 proxy")]),v._v(" "),e("h2",{attrs:{id:"第-12-题-单页面应用和多页面应用区别以及优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-12-题-单页面应用和多页面应用区别以及优缺点"}},[v._v("#")]),v._v(" 第 12 题-单页面应用和多页面应用区别以及优缺点")]),v._v(" "),e("h2",{attrs:{id:"第-13-题-vue-和-jquery-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-13-题-vue-和-jquery-的区别"}},[v._v("#")]),v._v(" 第 13 题-Vue 和 jQuery 的区别")]),v._v(" "),e("h2",{attrs:{id:"第-14-题-axios-的特点有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-14-题-axios-的特点有哪些"}},[v._v("#")]),v._v(" 第 14 题-axios 的特点有哪些")]),v._v(" "),e("h2",{attrs:{id:"第-15-题-请谈一谈-vue-框架和-angularjs-和-react-的不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-15-题-请谈一谈-vue-框架和-angularjs-和-react-的不同"}},[v._v("#")]),v._v(" 第 15 题-请谈一谈 Vue 框架和 Angularjs 和 React 的不同")])],1)}),[],!1,null,null,null);_.default=a.exports}}]);