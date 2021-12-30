(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1780:function(t,e,a){"use strict";a.r(e);var s=a(12),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"如何将-github-pages-迁移到-vercel-上托管"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何将-github-pages-迁移到-vercel-上托管"}},[t._v("#")]),t._v(" 如何将 github pages 迁移到 vercel 上托管")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("早期网站使用 "),a("code",[t._v("github pages")]),t._v(",后来迁移到 coding,最近又放到腾讯云网站静态托管,无论是 coding 的 cos 存储桶,还是静态网站托管")]),t._v(" "),a("p",[t._v("他们都是收费的,那有没有免费的托管商呢,既不影响网站的访问速度还免费,于是,找了一下,还真有,"),a("a",{attrs:{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vercel"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),a("OutboundLink")],1),t._v(",就是免费的")]),t._v(" "),a("p",[t._v("其中大名顶顶的"),a("code",[t._v("Next.js")]),t._v(","),a("code",[t._v("create-react-app")]),t._v(","),a("code",[t._v("Nuxt.js")]),t._v("等就是部署在部署托管在"),a("code",[t._v("vercel")]),t._v("的,而"),a("code",[t._v("vuejs")]),t._v(","),a("code",[t._v("reactjs")]),t._v("等就是托管在"),a("code",[t._v("Netlify")]),t._v("上的")]),t._v(" "),a("p",[t._v("想必经常打开这些鼎鼎大名官网的时候,访问速度还是可以的")]),t._v(" "),a("p",[t._v("今天说一下这个"),a("code",[t._v("vercel")]),t._v(",Vercel 可以部署任何前端应用程序的最佳场所。号称以零配置部署到我们的全球边缘网络,动态扩展到数百万个页面而不会费力")]),t._v(" "),a("p",[t._v("一键导入(支持 github,gitlab,BitBucket),自己的存储库，然后推送。vercel 内置的"),a("code",[t._v("CI / CD")]),t._v("系统会在每次代码更改时触发")]),t._v(" "),a("p",[t._v("体验过后,确实方便,强大")]),t._v(" "),a("h2",{attrs:{id:"为什么选择-vercel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-vercel"}},[t._v("#")]),t._v(" 为什么选择 vercel")]),t._v(" "),a("p",[t._v("⒈ 免费部署托管前端应用")]),t._v(" "),a("p",[t._v("⒉ 支持一键导入(github,gitlab),零配置")]),t._v(" "),a("p",[t._v("⒊ 支持自定义域名以及配置 ssl 证书,https.")]),t._v(" "),a("p",[t._v("⒋ 简单友好,个人账户免费,可以部署 next.js,Nuxt.js,Gatsby.js,Angular,Ember.js,Hexo,Eleventy,Hugo,Docusaurus2,Preact,Dojo,Vue.js,Jekyll 等")]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("p",[t._v("⒈ 先成功部署 github pages(本文以 github pages 为例,其他类似的应用也是如此)")]),t._v(" "),a("p",[t._v("⒉ 然后登陆 vercel 官网, 一键导入")]),t._v(" "),a("h2",{attrs:{id:"怎么使用呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么使用呢"}},[t._v("#")]),t._v(" 怎么使用呢")]),t._v(" "),a("p",[t._v("在自己的 github 仓库中找到 github pages 仓库")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("div",[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607689315260-01-github.png",alt:"github"}})]),t._v(" "),a("p",[t._v("(找到自己github pages的仓库)")]),t._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607689480201-02-github.png",alt:"github"}}),t._v(" "),a("p",[t._v("(在vercel上导入github 仓库的代码)")]),t._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607689554950-03-github.png",alt:"github"}})]),t._v("\n等待导入部署即可\n"),a("h2",{attrs:{id:"自定义域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名解析"}},[t._v("#")]),t._v(" 自定义域名解析")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607690100246-04-github.png",alt:"github"}})]),t._v(" "),a("p",[t._v("点击 Settings👉Domains👉 输入自己的域名，并在域名购买方控制台(在阿里买的域名就去阿里控制台,在腾讯云买的域名,就去腾讯云的控制台)添加域名解析（CNAME）")]),t._v(" "),a("p",[t._v("解析完成后即可通过自己的域名访问自己的博客了")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/vercel-hosting/1607690180347-05-github.png",alt:"github"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("当你不满足于 github pages,嫌弃它访问得慢,是可以选择 vercel 来进行托管的,也支持自定义域名,免费的一个 ssl 证书")]),t._v(" "),a("p",[t._v("只要一键导入代码就可以了的,非常简单方便,可以一键部署前端很多应用..")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vercel 官网"),a("OutboundLink")],1)])]),t._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),t._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);e.default=r.exports}}]);