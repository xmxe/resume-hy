webpackJsonp([1],{"34KM":function(n,t){},"7WCw":function(n,t){},KOIO:function(n,t){n.exports='/**\n * 好像不太美观~\n * \n * 现在做一些适当调整。\n */\n\n\n/**\n *\n * 先加个头像^^\n *\n */\nimg {\n  zoom: 30%;\n  float: right;\n  content:url(static/avatar.png);\n}\n\n/**\n * 接着修改下字体\n *\n */\n\nli,.md > p {\n  font-size: 1.3em;\n}\n\n.md {\n  font-family: "楷体";\n}\n\nh1,h2,h3,h4,h5,h6,p,ul {\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\nblockquote {\n  margin: 0.1rem 0px;\n  border-left: 3px solid #dfe2e5;\n  padding: 0 1px;\n  color: #a69f9f;\n  font-size: 1.3em;\n}\n\na {\n  color: #64d5ea;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 1.8rem;\n}\n\nh3 {\n  font-size: 1.6rem;\n}\n\nh4 {\n  font-size: 1.4rem;\n}\n\nh5 {\n  font-size: 1.2rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\n\n/**\n * \n * 还差最后一点就结束了。\n */\n\npre:hover {\n  box-shadow: 0px 0px 40px 5px rgba(255, 255, 255, 0.4);\n}\n\n/**\n * \n * 如果你觉得我还不错，可以与我联系~\n */\n'},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("/5sW"),s=e("Xxa5"),o=e.n(s),i=e("exGp"),a=e.n(i),c=e("0Qa9"),p=e.n(c),l=!1,u=/(\/\*(?:[^](?!\/\*))*\*)$/,f=/([a-zA-Z- ^\n]*)$/,h=/([^:]*)$/,d=/(.*)$/,x=/\dp/,m=/p$/;function v(n,t){return l&&"/"!==t?n+=t:"/"===t&&!1===l?(l=!0,n+=t):"/"===t&&"*"===n.slice(-1)&&!0===l?(l=!1,n=n.replace(u,'<span class="comment">$1/</span>')):":"===t?n=n.replace(f,'<span class="key">$1</span>:'):""===t?n=n.replace(h,'<span class="value">$1</span>'):"{"===t?n=n.replace(d,'<span class="selector">$1</span>{'):"x"===t&&x.test(n.slice(-2))?n=n.replace(m,'<span class="value px">px</span>'):n+=t,n}var w=/[？！。~：]$/,g=/\D[，；、]$/,k=/[^/]\n\n$/,y={data:function(){return{text:"",speed:35}},created:function(){this.styleBuffer=""},methods:{writeTo:function(n,t,e,r,s,i){var c=this;return a()(o.a.mark(function a(){var l,u,f;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!c.$root.animationSkipped){o.next=2;break}throw new Error("SKIP IT");case 2:if(l=t.slice(e,e+i),e+=i,n.scrollTop=n.scrollHeight,s?c.writeChar(l):c.writeSimpleChar(l),!(e<t.length)){o.next=17;break}u=r,f=t.slice(e-2,e),g.test(f)&&(u=1*r),w.test(f)&&(u=1*r),f=t.slice(e-2,e+1),k.test(f)&&(u=1*r);case 13:return o.next=15,p.a.delay(u);case 15:if(c.$root.paused){o.next=13;break}case 16:return o.abrupt("return",c.writeTo(n,t,e,r,s,i));case 17:case"end":return o.stop()}},a,c)}))()},writeChar:function(n){this.text=v(this.text,n),this.styleBuffer+=n,";"===n&&(this.$root.$emit("styleAppend",this.styleBuffer),this.styleBuffer="")},writeSimpleChar:function(n){this.text+=n}}},b=[0,1,2].map(function(n){return e("WKMY")("./styles"+n+".css")}),$={name:"style-text",mixins:[y],methods:{write:function(n){var t=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.writeTo(t.$el,b[n],0,t.speed,!0,1);case 2:case"end":return e.stop()}},e,t)}))()},writeToEnd:function(){for(var n=b.join("\n"),t="",e=0;e<n.length;e++)t=v(t,n[e]);this.text=t,this.$root.$emit("styleOverwrite","#work-text * {transition: none; }"+n)}}},T={render:function(){var n=this.$createElement;return(this._self._c||n)("pre",{attrs:{id:"style-text",contenteditable:""},domProps:{innerHTML:this._s(this.text)}})},staticRenderFns:[]},S=e("VU/8")($,T,!1,null,null,null).exports,_=e("Q3oH"),C=e.n(_),A=e("uN3R"),E=e.n(A),M=e("EFqf"),P=e.n(M),H={name:"work-text",mixins:[y],data:function(){return{flipped:!1,preview:!0,show:!1,workText:C.a,mdText:P()(C.a)}},computed:{workCls:function(){return this.flipped?"flipped":""}},methods:{write:function(){var n=this;return a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.show=!0,t.next=3,n.writeTo(n.$el,C.a,0,n.speed,!1,1);case 3:case"end":return t.stop()}},t,n)}))()},showWorkBox:function(){var n=this;this.show=!0,this.preview=!1,this.flipped=!0,this.$nextTick(function(){n.$el.scrollTop=9999;var t,e=!1;E()(n.$el,(t=a()(o.a.mark(function n(t,r){var s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return");case 2:if(s=(this.$el.scrollHeight-this.$el.clientHeight)/2,!(this.flipped?this.$el.scrollTop<s:this.$el.scrollTop>s)){n.next=11;break}return this.flipped=!this.flipped,e=!0,n.next=9,p.a.delay(500);case 9:this.$el.scrollTop=this.flipped?9999:0,e=!1;case 11:this.$el.scrollTop+=r*(this.flipped?-1:1);case 12:case"end":return n.stop()}},n,this)})),function(n,e){return t.apply(this,arguments)}).bind(n),!0)})}}},J={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("pre",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],class:n.workCls,attrs:{id:"work-text"}},[n._v("  "),n.preview?e("div",{domProps:{innerHTML:n._s(n.text)}}):e("div",[n._v("\n    "),e("div",{staticClass:"text",domProps:{innerHTML:n._s(n.workText)}}),n._v("\n    "),e("div",{staticClass:"md",domProps:{innerHTML:n._s(n.mdText)}}),n._v("\n  ")]),n._v("\n")])},staticRenderFns:[]},z=e("VU/8")(H,J,!1,null,null,null).exports,B=["暂停||","继续>>"],L={name:"v-footer",data:function(){return{state:0,isEnd:!1}},computed:{text:function(){return B[this.state]}},methods:{togglePause:function(){this.state=0===this.state?1:0,this.$root.$emit("togglePause",this.state)},skip:function(){this.$root.$emit("skip")},end:function(){this.isEnd=!0}}},K={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",[e("a",{directives:[{name:"show",rawName:"v-show",value:!n.isEnd,expression:"!isEnd"}],attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),n.togglePause(t)}}},[n._v(n._s(n.text))]),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:!n.isEnd,expression:"!isEnd"}],attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),n.skip(t)}}},[n._v("跳过动画 --\x3e")]),n._v(" "),e("span",[e("svg",{staticClass:"icon",attrs:{width:"26",height:"28",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),n._v(" "),e("a",{attrs:{href:"https://github.com/xmxe/"}},[n._v("Github")])])])},staticRenderFns:[]};var N={name:"App",components:{VFooter:e("VU/8")(L,K,!1,function(n){e("wtA0")},"data-v-3ea01a01",null).exports,StyleText:S,WorkText:z},mounted:function(){this.done=!1,this.startAnimation()},methods:{startAnimation:function(){var n=this;return a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.$refs.styleText.write(0);case 3:return t.next=5,n.$refs.workText.write();case 5:return t.next=7,n.$refs.styleText.write(1);case 7:return n.$refs.workText.showWorkBox(),t.next=10,p.a.delay(2e3);case 10:return t.next=12,n.$refs.styleText.write(2);case 12:n.$refs.footer.end(),t.next=22;break;case 15:if(t.prev=15,t.t0=t.catch(0),"SKIP IT"!==t.t0.message){t.next=21;break}n.surprisinglyShortAttentionSpan(),t.next=22;break;case 21:throw t.t0;case 22:case"end":return t.stop()}},t,n,[[0,15]])}))()},surprisinglyShortAttentionSpan:function(){this.$refs.styleText.writeToEnd(),this.$refs.workText.showWorkBox(),this.$refs.footer.end()}}},W={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("style-text",{ref:"styleText"}),this._v(" "),t("work-text",{ref:"workText"}),this._v(" "),t("v-footer",{ref:"footer"})],1)},staticRenderFns:[]};var F=e("VU/8")(N,W,!1,function(n){e("7WCw")},null,null).exports;e("34KM");r.a.config.productionTip=!1;var I=new r.a({el:"#app",created:function(){this.paused=!1,this.animationSkipped=!1},render:function(n){return n(F)}}),O=document.getElementById("style-tag");I.$on("styleAppend",function(n){O.textContent+=n}),I.$on("styleOverwrite",function(n){O.textContent=n}),I.$on("togglePause",function(n){this.paused=1===n}),I.$on("skip",function(){this.animationSkipped=!0})},Q3oH:function(n,t){n.exports="#### 基本信息\n\n - xmxe/男/1993 ![]()\n - 13111111111\n - 学校/计算机科学与技术/本科\n - 软件设计师\n\n---\n\n#### 工作经历\n\n##### 山东华科信息技术有限公司(2018.10~至今)\n\n###### 项目介绍\n\n> 山东省网源监督服务平台是山东电科院推出的能够实时监督机组涉网功能，诊断机组运行状态，保障源网协调正常运行的在线监督服务平台。\n\n###### 职责\n\n- 采集各电厂天气预报数据，通过HttpClient+JSoup对中央气象网历史天气、未来天气的数据进行抓取，将结果生成excel。\n- 采用Nginx+Keepalived搭建HA服务，Nginx负责应用的反向代理、负载均衡、跨域协作，Keepalived对Nginx进行心跳检测，使用主从架构保证服务的稳定运行。\n- 搭建持续集成服务Jenkins，编写Ant脚本对项目进行编译-打包，优化部署流程，提高部署效率。\n- 基于Dubbo进行调控云接口服务端开发，调控云负责提供注册方式，将平台接口以服务的方式注册到调控云集群供客户端调用。\n- 运维大数据集群部分调度任务，主要是将PMU的数据写入到Kafka并启动Spark任务。\n- 在调度系统中增加Java调用Python的功能(Runtime库)，后期使用开源调度框架如XXL-JOB来运行部分调度任务。在业务系统中增加Python调用Java功能(Jpype库)。\n- 后台相关子系统Restful接口及前端页面的开发。\n- 协助其他团队，与开发团队成员一起负责不同项目的设计、编码、单元测试等工作。\n- 技术文档的编写以及维护，定期 Review 团队代码，参与需求分析、概要设计、文档编写、项目实施、系统维护等工作。\n\n\n\n##### 山东中住地产经纪有限公司(2016.8~2018.10)\n\n###### \t项目介绍\n\n> 济房网后台管理系统通过对中住地产内部房源数据的处理,实现置业顾问对房源申请、审批、取代、统计、合同签约、客户管理等功能。\n\n###### 职责\n\n- 针对数据库进行了架构改造，使用MyCat中间件实现MySQL的读写分离。\n- 结合Nginx搭建分布式文件系统FastDFS，并提供上传下载接口。\n- 针对静态页面重复开发的问题采用FreeMarker模板引擎生成HTML。\n- Linux操作系统的运行维护工作，编写简单的shell脚本供java任务的自启动。\n- 针对线上频繁FullGC、CPU负载过高进行问题排查，并对Tomcat的JVM参数调优。\n- 对济房网App等产品提供整体开发及组内外管理协调工作，并提供APP后台接口服务。\n- 参与软件项目的需求分析、设计、开发及测试等阶段。\n\n\n\n##### 山东益信通网络科技股份有限公司(2015.9~2016.8)\n\n###### \t项目介绍\n\n> 电信集成家庭医生签约服务信息系统是以病人为中心，面向家庭和社区，向病人提供一种连续性的签约式服务，有利于转变医疗卫生服务模式，推动医疗卫生工作重心下移，资源下沉，让居民在家门口就能得到便利的医疗卫生服务，为实现基层首诊、分级诊疗奠定基础。\n\n###### 职责\n\n- 使用SpringAop搭建日志切面，通过自定义注解实现注解方法的日志记录。\n- 参与业务功能表结构设计，在部分业务不明确的情况下最大程度的保留表结构的扩展性及兼容性。\n- 为软件测试提供设计、编码等支持工作，并编写软件开发过程中的相关技术文档。\n- 负责软件系统的日常维护和故障排除，参与后端系统的架构设计以及研发流程的改进及优化，协动完成代码审核、Bug修复等工作。\n\n\n---\n\n#### 开源项目\n\n\n- [jwt](https://github.com/xmxe/jwt)：使用jwt替代Cookie及Session，结合Spring Security鉴别授权\n- [oauth2](https://github.com/xmxe/oauth2)：第三方授权登录，如使用GitHub授权登录第三方网站\n- [springboot](https://github.com/xmxe/springboot)：将主流技术集成到Spring Boot，如Sa-Token,CAS单点登陆,Jasypt,Sharding-jdbc,Websocket等\n- [springcloud](https://github.com/xmxe/springcloud)：测试主流微服务组件及新生组件，如Apache ShenYu,Stream,Netflix,Alibaba等\n\n---\n\n#### 专业技能\n\n- 有着扎实的Java编程基础， 熟悉JAVAEE相关技术，能够掌握面向对象编程及开发\n- 熟悉HTML、CSS、JavaScript等前端技术\n- 掌握Oracle、MySQL、SQL Server等关系型数据库，能够灵活运用SQL语言进行数据的增删查改及调优\n- 熟练使用Spring、SpringMVC、Spring Boot、Spring Cloud等框架进行集成开发\n- 熟练使用Eclipse、IntelliJ IDEA、VS Code等IDE，熟悉Tomcat、Jetty中间件，熟练使用Git、SVN等版本控制工具\n- 熟悉Linux操作系统及常用命令\n- 熟练搭建主流技术栈集群，如redis，nginx，keepalived，zookeeper，kafka，docker等\n\n---\n\n#### 自我评价与致谢\n有良好的代码风格，注重代码质量，具备良好的代码编程习惯及文档编写能力，善于利用工具和代码减少重复性劳动，能进行技术攻关，突破关键技术瓶颈。\n感谢您花时间阅读我的简历，我的[GitHub](https://github.com/xmxe)上集成了很多小demo。期待能有机会和您共事。"},UXP2:function(n,t){n.exports="/**\n * 可以使用marked 或者 Markdown库来使markdown转换为html\n * \n * 左侧的 markdown 看起来并不美观。\n *\n * 我们稍作修饰。\n */\n\n#work-text {\n  max-height: 94.5%;\n}\n\n#work-text.flipped {\n  transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);\n}\n\n#work-text .md {\n  transform: rotateY(190deg) rotateZ(180deg);\n  margin-top: 1200px;\n}\n\n/**\n * \n * 下面就是见证奇迹的时刻：\n */\n\n\n"},WKMY:function(n,t,e){var r={"./styles0.css":"amUk","./styles1.css":"UXP2","./styles2.css":"KOIO"};function s(n){return e(o(n))}function o(n){var t=r[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}s.keys=function(){return Object.keys(r)},s.resolve=o,n.exports=s,s.id="WKMY"},amUk:function(n,t){n.exports="/**\n * 你好。我叫xmxe。想找一份高级java工程师或架构师的工作。\n * 我喜欢研究一些有趣的技术，这个就是从https://github.com/ustbhuangyi/resume fork而来\n */\n\n/**\n * 那么开始吧\n * 首先让一切都动起来~\n */\n\n* {\n  transition: all 1s;\n}\n\n/**\n * 黑白配色太无聊了，我们来做一些变化。\n */\n\nhtml {\n  background: rgb(63, 82, 99);\n}\n\n/**\n * 等等。\n */\n\npre,a {\n  color: #d5cece;\n}\n\n/**\n * 看上去好多了。但是有点刺眼了。\n *\n * 而且在整个屏幕上写代码有点浪费空间了。\n */\n\npre:not(:empty) {\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  border: 1px solid #ccc;\n  max-height: 44.6%;\n  width: 49%;\n  font-size: 14px;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0, 0, 0, 0.3);\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n/**\n *\n * 接下来我们在把它移到屏幕右侧。\n */\n\n#style-text {\n  transform: translateX(95%);\n  position: absolute;\n}\n\n/**\n * 看上去还不错喔, 但是所有的字体颜色是白色的！\n *\n * 那么，我们来把代码变的更加可读吧~\n */\n\n.comment {\n  color: #857f6b;\n  font-style: italic;\n}\n.selector {\n  color: #e69f0f;\n}\n.selector .key {\n  color: #64d5ea;\n}\n.key {\n  color: #64d5ea;\n}\n.value {\n  color: #be84f2;\n}\n.value.px {\n  color: #f92772;\n}\n\n/**\n * 现在我们有了一些进展。\n *\n * 再把它变得更立体一些。\n */\n\nbody {\n  perspective: 1000px;\n}\n\n#style-text {\n  transform: translateX(98.5%) rotateY(-10deg);\n  transform-origin: right;\n  max-height: 94.5%;\n}\n\n/**\n *\n * 好吧差不多了，接下来就聊聊我吧。\n */\n\npre:not(#style-text) {\n  transform: rotateY(10deg);\n  transform-origin: left;\n}\n"},wtA0:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.ee0d83d2686883d53481.js.map