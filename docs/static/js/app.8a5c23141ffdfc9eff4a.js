webpackJsonp([1],{"34KM":function(n,t){},"7W+8":function(n,t){},"8PW/":function(n,t){n.exports="#work-text {\r\n  width: 99%;\r\n}\r\n  \r\n#style-text {\r\n  display: none;\r\n}\r\n\r\n#work-text .text {\r\n  margin-bottom: 400px;\r\n}\r\n\r\nli img:hover {\r\n  animation:fadenum 2s;\r\n}\r\n\r\n@keyframes fadenum {\r\n   100%{ transform:rotate(360deg); }\r\n}"},KOIO:function(n,t){n.exports="/**\n * 好像不太美观~\n * \n * 现在做一些适当调整\n */\n\n\n/**\n * 先加个头像^^\n */\n\nli img {\n  zoom: 30%;\n  float: right;\n  content: url(static/avatar.png);\n}\n\n/**\n * 接着修改下字体\n */\n\nli,.md > p {\n  font-size: 1.3em;\n}\n\nblockquote {\n  margin: 0.1rem 0px;\n  border-left: 3px solid #dfe2e5;\n  padding: 0 1px;\n  color: #a69f9f;\n  font-size: 1.3em;\n}\n\nh1 {\n  font-size: 2em;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\nh3 {\n  font-size: 1.6em;\n}\n\nh4 {\n  font-size: 1.4em;\n}\n\nh5 {\n  font-size: 1.2em;\n}\n\nh6 {\n  font-size: 1em;\n}\n\n\n/**\n * 还差最后一点就结束了\n */\n\n@keyframes md {\n  from { box-shadow: 0 0 30px rgb(79, 65, 57); }\n  50% { box-shadow: 0 0 10px rgb(146, 181, 225); }\n  to { box-shadow: 0 0 30px rgb(79, 65, 57); }\n}\n\n/**\n * 如果你觉得我还不错，可以与我联系~\n */\n"},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("/5sW"),s=e("Xxa5"),i=e.n(s),o=e("exGp"),a=e.n(o),c=e("0Qa9"),l=e.n(c),h=!1,p=/(\/\*(?:[^](?!\/\*))*\*)$/,u=/([a-zA-Z- ^\n]*)$/,d=/([^:]*)$/,f=/(.*)$/,m=/\dp/,x=/p$/,w=/\de/,v=/e$/;function g(n,t){return h&&"/"!==t?n+=t:"/"===t&&!1===h?(h=!0,n+=t):"/"===t&&"*"===n.slice(-1)&&!0===h?(h=!1,n=n.replace(p,'<span class="comment">$1/</span>')):":"===t?n=n.replace(u,'<span class="key">$1</span>:'):""===t?n=n.replace(d,'<span class="value">$1</span>'):"{"===t?n=n.replace(f,'<span class="selector">$1</span>{'):"x"===t&&m.test(n.slice(-2))?n=n.replace(x,'<span class="px">px</span>'):"m"===t&&w.test(n.slice(-2))?n=n.replace(v,'<span class="em">em</span>'):n+=t,n}var k=/[？！。~：]$/,C=/\D[，；、]$/,b=/[^/]\n\n$/,S={data:function(){return{text:"",speed:35}},created:function(){this.styleBuffer=""},methods:{writeTo:function(n,t,e,r,s,o){var c=this;return a()(i.a.mark(function a(){var h,p,u;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!c.$root.animationSkipped){i.next=2;break}throw new Error("SKIP IT");case 2:if(h=t.slice(e,e+o),e+=o,n.scrollTop=n.scrollHeight,s?c.writeChar(h,e===t.length):c.writeSimpleChar(h),!(e<t.length)){i.next=17;break}p=r,u=t.slice(e-2,e),C.test(u)&&(p=1*r),k.test(u)&&(p=1*r),u=t.slice(e-2,e+1),b.test(u)&&(p=1*r);case 13:return i.next=15,l.a.delay(p);case 15:if(c.$root.paused){i.next=13;break}case 16:return i.abrupt("return",c.writeTo(n,t,e,r,s,o));case 17:case"end":return i.stop()}},a,c)}))()},writeChar:function(n,t){this.text=g(this.text,n),this.styleBuffer+=n,(";"===n||t)&&(this.$root.$emit("styleAppend",this.styleBuffer),this.styleBuffer="")},writeSimpleChar:function(n){this.text+=n}}},y=[0,1,2].map(function(n){return e("WKMY")("./styles"+n+".css")}),$={name:"style-text",mixins:[S],methods:{write:function(n){var t=this;return a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.writeTo(t.$el,y[n],0,t.speed,!0,1);case 2:case"end":return e.stop()}},e,t)}))()},writeToEnd:function(){for(var n=y.join("\n"),t="",e=0;e<n.length;e++)t=g(t,n[e]);this.text=t,this.$root.$emit("styleOverwrite","#work-text * {transition: none; }"+n)}}},T={render:function(){var n=this.$createElement;return(this._self._c||n)("pre",{attrs:{id:"style-text",contenteditable:""},domProps:{innerHTML:this._s(this.text)}})},staticRenderFns:[]},M=e("VU/8")($,T,!1,null,null,null).exports,E=e("Q3oH"),_=e.n(E),P=e("uN3R"),H=e.n(P),L=e("EFqf"),N=e.n(L),A={name:"work-text",mixins:[S],data:function(){return{flipped:!1,preview:!0,show:!1,showMd:!0,workText:_.a,mdText:N()(_.a)}},computed:{workCls:function(){return this.flipped?"flipped":""}},methods:{write:function(){var n=this;return a()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.show=!0,t.next=3,n.writeTo(n.$el,_.a,0,n.speed,!1,1);case 3:case"end":return t.stop()}},t,n)}))()},showWorkBox:function(){var n=this;this.show=!0,this.preview=!1,this.flipped=!0,this.$nextTick(function(){n.$el.scrollTop=9999;var t,e=!1;H()(n.$el,(t=a()(i.a.mark(function n(t,r){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return");case 2:if(!(this.flipped?this.$el.scrollTop<=0:this.$el.scrollTop+this.$el.clientHeight>=this.$el.scrollHeight-10)){n.next=11;break}return this.showMd=!this.showMd,this.flipped=!this.flipped,e=!0,n.next=9,l.a.delay(500);case 9:this.$el.scrollTop=this.flipped?9999:0,e=!1;case 11:this.$el.scrollTop+=r*(this.flipped?-1:1);case 12:case"end":return n.stop()}},n,this)})),function(n,e){return t.apply(this,arguments)}).bind(n),!0)})}}},V={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("pre",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],class:n.workCls,attrs:{id:"work-text"}},[n._v("  "),n.preview?e("div",{domProps:{innerHTML:n._s(n.text)}}):e("div",[n._v("\n    "),e("div",{directives:[{name:"show",rawName:"v-show",value:!n.showMd,expression:"!showMd"}],staticClass:"text",domProps:{innerHTML:n._s(n.workText)}}),n._v("\n    "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showMd,expression:"showMd"}],staticClass:"md",domProps:{innerHTML:n._s(n.mdText)}}),n._v("\n  ")]),n._v("\n")])},staticRenderFns:[]},B=e("VU/8")(A,V,!1,null,null,null).exports,z=['<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12V36" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 12V36" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>','<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z" fill="#000000" stroke="#000000" stroke-width="3" stroke-linejoin="round"/></svg>'],J=["暂停","继续"],K={name:"v-footer",data:function(){return{state:0,isEnd:!1,target:"_blank",qrcodeShow:!1}},computed:{text:function(){return z[this.state]},tips:function(){return J[this.state]}},methods:{togglePause:function(){this.state=0===this.state?1:0,this.$root.$emit("togglePause",this.state)},skip:function(){this.$root.$emit("skip"),this.$root.$emit("togglePause",0)},end:function(){this.isEnd=!0}}},W={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",[e("a",{directives:[{name:"show",rawName:"v-show",value:!n.isEnd,expression:"!isEnd"}],attrs:{href:"#",title:n.tips},domProps:{innerHTML:n._s(n.text)},on:{click:function(t){return t.preventDefault(),n.togglePause(t)}}}),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:!n.isEnd,expression:"!isEnd"}],attrs:{href:"#",title:"跳过"},on:{click:function(t){return t.preventDefault(),n.skip(t)}}},[e("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z",fill:"#000000",stroke:"#000000","stroke-width":"3","stroke-linejoin":"round"}})])]),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:n.isEnd,expression:"isEnd"}],attrs:{href:"https://github.com/xmxe",title:"GitHub",target:n.target}},[e("svg",{staticClass:"icon",attrs:{width:"22",height:"22",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:n.isEnd,expression:"isEnd"}],attrs:{href:"https://gitee.com/xmxe",title:"码云",target:n.target}},[e("svg",{staticClass:"icon",attrs:{width:"22",height:"21",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"991","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{d:"M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z",fill:"#000","p-id":"992"}})])]),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:n.isEnd,expression:"isEnd"}],attrs:{href:"https://xmxe.github.io/blog",title:"博客",target:n.target}},[e("svg",{staticClass:"icon",attrs:{width:"22",height:"22",viewBox:"0 0 480 542",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"}})])]),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:n.isEnd,expression:"isEnd"}],attrs:{href:"javascript:;",title:"微信"},on:{mouseenter:function(t){n.qrcodeShow=!n.qrcodeShow},mouseleave:function(t){n.qrcodeShow=!n.qrcodeShow}}},[e("svg",{staticClass:"icon",attrs:{width:"24",height:"24",viewBox:"0 0 340 195",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M240.489202,85.4155522 C237.300416,85.1728806 234.070779,85.0488907 230.806619,85.0488907 C172.371237,85.0488907 125,124.78592 125,173.80403 C125,183.912009 127.014329,193.625337 130.724628,202.67696 C127.516696,202.890956 124.273529,203 121,203 C105.109229,203 94.9015748,200.147332 81,195.476497 C77.4345683,194.440025 65.6464559,200.392116 45.6356627,213.332769 C44.1611712,214.065139 42.6748998,213.930026 41.1768484,212.927432 C39.6787971,211.924838 39.2798584,210.395832 39.9800323,208.340415 C45.3636651,190.797986 46.8940027,181.061245 44.5710452,179.130192 C16.157209,160.556795 0,134.05785 0,101.5 C0,45.4430979 54.1735453,0 121,0 C181.301419,0 231.300195,37.0020806 240.489202,85.4155522 Z M81,86 C90.3888407,86 98,78.3888407 98,69 C98,59.6111593 90.3888407,52 81,52 C71.6111593,52 64,59.6111593 64,69 C64,78.3888407 71.6111593,86 81,86 Z M162,86 C171.388841,86 179,78.3888407 179,69 C179,59.6111593 171.388841,52 162,52 C152.611159,52 145,59.6111593 145,69 C145,78.3888407 152.611159,86 162,86 Z"}}),n._v(" "),e("path",{attrs:{d:"M235.306619,262.960691 C222.002154,262.960691 213.455848,260.57231 201.816827,256.661677 C198.831688,255.793897 188.962153,260.777254 172.208221,271.611748 C170.97371,272.22492 169.729337,272.111798 168.475102,271.272381 C167.220866,270.432965 166.886856,269.152813 167.473073,267.431926 C171.980492,252.744618 173.261759,244.592583 171.316875,242.975819 C147.527539,227.425339 134,205.239236 134,177.980345 C134,131.046997 179.356518,93 235.306619,93 C291.256719,93 336.613237,131.046997 336.613237,177.980345 C336.613237,224.913694 291.256719,262.960691 235.306619,262.960691 Z M201.816827,165.003051 C209.677585,165.003051 216.049989,158.630648 216.049989,150.76989 C216.049989,142.909132 209.677585,136.536729 201.816827,136.536729 C193.956069,136.536729 187.583666,142.909132 187.583666,150.76989 C187.583666,158.630648 193.956069,165.003051 201.816827,165.003051 Z M269.633655,165.003051 C277.494413,165.003051 283.866816,158.630648 283.866816,150.76989 C283.866816,142.909132 277.494413,136.536729 269.633655,136.536729 C261.772897,136.536729 255.400493,142.909132 255.400493,150.76989 C255.400493,158.630648 261.772897,165.003051 269.633655,165.003051 Z",transform:"translate(235.306619, 182.500000) scale(-1, 1) translate(-235.306619, -182.500000) "}})])]),n._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:n.qrcodeShow,expression:"qrcodeShow"}],staticClass:"qrcode",attrs:{src:"static/wechat.jpg"}})])},staticRenderFns:[]};var j=e("VU/8")(K,W,!1,function(n){e("7W+8")},"data-v-4a641f75",null).exports,F=e("8PW/"),R=e.n(F),U={name:"App",components:{VFooter:j,StyleText:M,WorkText:B},mounted:function(){this.done=!1,this.startAnimation()},methods:{startAnimation:function(){var n=this;return a()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.$refs.styleText.write(0);case 3:return t.next=5,n.$refs.workText.write();case 5:return t.next=7,n.$refs.styleText.write(1);case 7:return n.$refs.workText.showWorkBox(),t.next=10,l.a.delay(2e3);case 10:return t.next=12,n.$refs.styleText.write(2);case 12:return n.$refs.footer.end(),t.next=15,l.a.delay(2e3);case 15:n.fullScreenResume(),t.next=25;break;case 18:if(t.prev=18,t.t0=t.catch(0),"SKIP IT"!==t.t0.message){t.next=24;break}n.surprisinglyShortAttentionSpan(),t.next=25;break;case 24:throw t.t0;case 25:case"end":return t.stop()}},t,n,[[0,18]])}))()},surprisinglyShortAttentionSpan:function(){this.$refs.styleText.writeToEnd(),this.$refs.workText.showWorkBox(),this.$refs.footer.end(),this.fullScreenResume()},fullScreenResume:function(){this.$root.$emit("styleAppend",R.a)}}},Z={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("style-text",{ref:"styleText"}),this._v(" "),t("work-text",{ref:"workText"}),this._v(" "),t("v-footer",{ref:"footer"})],1)},staticRenderFns:[]};var q=e("VU/8")(U,Z,!1,function(n){e("rEha")},null,null).exports;e("34KM");r.a.config.productionTip=!0;var D=new r.a({el:"#app",created:function(){this.paused=!1,this.animationSkipped=!1},render:function(n){return n(q)}}),I=document.getElementById("style-tag");D.$on("styleAppend",function(n){I.textContent+=n}),D.$on("styleOverwrite",function(n){I.textContent=n}),D.$on("togglePause",function(n){this.paused=1===n}),D.$on("skip",function(){this.animationSkipped=!0})},Q3oH:function(n,t){n.exports="#### ![](static/me.svg)基本信息\n\n - xmxe/男/1993 ![]()\n - 13111111111\n - 学校/计算机科学与技术/本科\n - 软件设计师\n - 年工作经验\n\n---\n\n#### ![](static/work.svg)工作经历\n\n##### 山东华科信息技术有限公司(2018.10~至今)\n\n###### 项目介绍\n\n> 山东省网源监督服务平台是山东电科院推出的能够实时监督机组涉网功能，诊断机组运行状态，保障源网协调正常运行的在线监督服务平台。\n\n###### 职责\n\n- 采集各电厂天气预报数据，使用HttpClient+JSoup对中央气象网历史天气、未来天气的数据进行抓取，将结果生成Excel。\n- 采用Nginx+Keepalived搭建HA服务，Nginx实现了应用的反向代理、负载均衡、跨域协作，Keepalived对Nginx进行心跳检测，使用主从架构保证了服务的稳定运行。\n- 搭建持续集成服务Jenkins，编写Ant脚本对项目进行编译、打包，优化了部署流程，提高了部署效率。\n- 基于Dubbo进行调控云接口服务端的开发，调控云提供注册方式，编写业务接口后将接口以服务的方式注册到调控云集群供客户端调用。\n- 运维大数据集群部分调度任务，主要是将PMU的数据写入到Kafka并启动Spark任务。\n- 在调度系统中增加Java调用Python的功能(Runtime库)，后期使用开源调度框架XXL-JOB来运行部分调度任务及Python算法。\n- 由于实时数据库接口没有提供Python版本SDK，增加Python调用Java功能(Jpype库)。\n- 后台相关子系统Restful接口及前端页面的开发。\n- 参与其他项目，协助其他团队，与团队成员一起负责不同项目的设计、编码、单元测试等工作。\n- 技术文档的编写以及维护，定期Review团队代码，参与需求分析、概要设计、文档编写、项目实施、系统维护等工作。\n\n##### 山东中住地产经纪有限公司(2016.8~2018.10)\n\n###### 项目介绍\n\n> 济房网后台管理系统通过对中住地产内部房源数据的处理,实现置业顾问对房源申请、审批、取代、统计、合同签约、客户管理等功能。\n\n###### 职责\n\n- 针对数据库进行了架构改造，使用MyCat中间件实现MySQL的读写分离。\n- 结合Nginx搭建分布式文件系统FastDFS，并提供上传下载接口，解决了服务器大容量存储和负载均衡的问题。\n- 针对静态页面重复开发的问题采用FreeMarker模板引擎生成HTML，提高了整体的开发效率。\n- 使用WebSocket进行用户管理，当相同用户同时登陆时服务端主动推送消息实现多余用户的登出。\n- 进行Linux操作系统的运行维护工作，编写简单的Shell脚本供Java任务的自启动。\n- 针对线上频繁FullGC、CPU负载过高进行问题排查，并对Tomcat的JVM参数调优。\n- 对济房网App等产品提供整体开发及组内外管理协调工作，并提供APP后台接口服务。\n- 参与软件项目的需求分析、设计、开发及测试等阶段。\n\n##### 山东益信通网络科技股份有限公司(2015.9~2016.8)\n\n###### 项目介绍\n\n> 电信集成家庭医生签约服务信息系统是以病人为中心，面向家庭和社区，向病人提供一种连续性的签约式服务，有利于转变医疗卫生服务模式，推动医疗卫生工作重心下移，资源下沉，让居民在家门口就能得到便利的医疗卫生服务，为实现基层首诊、分级诊疗奠定基础。\n\n###### 职责\n\n- 使用SpringAop搭建日志切面，通过自定义注解实现注解方法的日志记录。\n- 参与业务功能表结构设计，在部分业务不明确的情况下最大程度的保留表结构的扩展性及兼容性。\n- 通过慢查询定位数据库SQL查询瓶颈，通过SQL优化以及修改索引大幅缩减查询时间。\n- 对代码库进行封装以及维护，单独抽离出来作为公共库，并且根据业务需求对代码库进行更新，提高代码复用率，减少冗余代码。\n- 为软件测试提供设计、编码等支持工作，并编写软件开发过程中的相关技术文档。\n- 负责软件系统的日常维护和故障排除，参与后端系统的架构设计以及研发流程的改进及优化，协动完成代码审核、Bug修复等工作。\n\n---\n\n#### ![](static/github.svg)开源项目\n\n- [blog](https://github.com/xmxe/blog): 使用Hexo+Matery主题搭建的个人博客。\n- [jwt](https://github.com/xmxe/jwt)：使用JWT替代Cookie及Session认证，结合Spring Security实现鉴别、授权。\n- [oauth2](https://github.com/xmxe/oauth2)：第三方授权登录，如使用GitHub账号登录第三方网站。\n- [springboot](https://github.com/xmxe/springboot)：将主流技术集成到Spring Boot，如Sa-Token,Shiro,CAS单点登陆,Jasypt,Sharding-jdbc,WebSocket等。\n- [springcloud](https://github.com/xmxe/springcloud)：测试主流微服务组件及新生组件，如Apache ShenYu,Spring Cloud Netflix, Spring Cloud Alibaba,Spring Cloud Tencent等。\n\n---\n\n#### ![](static/code.svg)专业技能\n\n- 有着扎实的Java编程基础，熟悉JAVAEE相关技术，能够掌握面向对象的编程及开发。\n- 熟悉HTML、CSS、JavaScript等前端技术，了解主流框架如NodeJS。\n- 掌握Oracle、MySQL、SQL Server等关系型数据库，能够灵活运用SQL进行数据的增删查改及调优，了解主流开源NoSQL系统如MongoDB，ElasticSearch等。\n- 熟练使用Spring、SpringMVC、Spring Boot、Spring Cloud等框架进行集成开发。\n- 熟练使用Eclipse、IntelliJ IDEA、VS Code等IDE，熟悉Tomcat、Jetty中间件，熟练使用Git、SVN等版本控制工具。\n- 熟悉Linux操作系统及常用命令，可以编写简单的Shell脚本。\n- 熟练搭建主流技术栈集群，如Redis，Nginx，Keepalived，Zookeeper，Kafka，Docker等。\n\n---\n\n#### ![](static/blog.svg)社交主页\n\n- GitHub：https://github.com/xmxe\n- Gitee：https://gitee.com/xmxe\n- 博客：https://xmxe.github.io/blog\n\n---\n\n#### ![](static/q.svg)自我评价与致谢\n\n- 有良好的代码风格，注重代码质量，具备良好的代码编程习惯及文档编写能力，善于利用工具和代码减少重复性劳动，能进行技术攻关，突破关键技术瓶颈。\n- 感谢您花时间阅读我的简历，我的[GitHub](https://github.com/xmxe)上集成了很多小demo。期待能有机会和您共事。"},UXP2:function(n,t){n.exports='/** \n * 左侧的markdown看起来并不直观\n *\n * 我们稍作修饰\n */\n\n#work-text {\n  max-height: 95.5%;\n  animation-name: md; \n  animation-duration: 3s;\n  animation-iteration-count: infinite; \n}\n\n#work-text.flipped {\n  transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);\n}\n\n#work-text .md {\n  transform: rotateY(190deg) rotateZ(180deg);\n  margin-top: 400px;\n  font-family: "KaiTi";\n}\n\n/**\n * 可以使用npm库marked来使markdown转换为html\n * \n * 下面就是见证奇迹的时刻\n */\n\n\n'},WKMY:function(n,t,e){var r={"./styles0.css":"amUk","./styles1.css":"UXP2","./styles2.css":"KOIO"};function s(n){return e(i(n))}function i(n){var t=r[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}s.keys=function(){return Object.keys(r)},s.resolve=i,n.exports=s,s.id="WKMY"},amUk:function(n,t){n.exports="/**\n * 你好，我叫zhengfl。想找一份高级java工程师或架构师的工作。\n * 我喜欢研究一些有趣的技术，这个就是从https://github.com/ustbhuangyi/resume fork而来\n */\n\n/**\n * 那么开始吧\n * 首先给所有元素加上过渡效果~\n */\n\n* {\n  transition: all 1s;\n}\n\n/**\n * 白色背景太单调了，我们来做一些变化\n */\n\nhtml {\n  background: rgb(63, 82, 99);\n}\n\n/**\n * 等等\n */\n\npre {\n  color: #d5cece;\n}\n\na {\n  color: #64d5ea;\n}\n\n/**\n * 看上去好多了，但是有点刺眼了\n *\n * 而且在整个屏幕上写代码有点浪费空间了\n */\n\npre:not(:empty) {\n  background: rgb(48, 48, 48);\n  border: 1px solid #ccc;\n  max-height: 44.6%;\n  width: 49%;\n  font-size: 14px;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0, 0, 0, 0.3);\n  outline: 0;\n}\n\n/**\n * 接下来我们在把它移到屏幕右侧\n */\n\n#style-text {\n  transform: translateX(95%);\n  position: absolute;\n}\n\n/**\n * 看上去还不错，但是所有的字体颜色是白色的\n *\n * 那么，我们来把代码变的更加可读吧~\n */\n\n.comment {\n  color: #857f6b;\n  font-style: italic;\n}\n.selector {\n  color: #e69f0f;\n}\n.key {\n  color: #64d5ea;\n}\n.px {\n  color: #be84f2;\n}\n.em {\n  color: #f92772;\n}\n\n#style-text {\n  transform: translateX(98.5%) rotateY(-10deg);\n  transform-origin: right;\n  max-height: 95.5%;\n}\n\n/**\n * 好吧差不多了，接下来就聊聊我吧\n */\n\npre:not(#style-text) {\n  transform: rotateY(10deg);\n}\n\n\n"},rEha:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.8a5c23141ffdfc9eff4a.js.map