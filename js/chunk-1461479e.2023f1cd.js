(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1461479e"],{"0423":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=(i("159b"),i("d81d"),i("313e")),r=i.n(s),o=i("6e44");i("817d");var d={name:"",mixins:[o["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"60vh"},dataInfo:{type:Object}},data:function(){return{chart:null,legendData:"",textname:"",dataInfo1:[],legendData1:[]}},computed:{title:function(){if(this.dataInfo)return this.dataInfo.title},legend:function(){if(this.dataInfo)return this.dataInfo.legend},subTitle:function(){if(this.dataInfo)return this.dataInfo.subTitle}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=this;this.chart=r.a.init(this.$el,"macarons"),this.dataInfo1=[],this.dataInfo.seriesArr.forEach((function(e){var i={itemStyle:{normal:{label:{show:!1,position:"right",textStyle:{color:"#000"}}}},barWidth:4,type:"bar"};i.name=e[0].username,i.data=e.map((function(t){return t.number})),t.legendData1.push(e[0].username),t.dataInfo1.push(i)})),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData;this.chart.setOption({color:["#7CB5EC"],title:{text:this.textname,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:this.legendData1,top:30},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.dataInfo.xAxisArr}],yAxis:[{type:"value"}],series:this.dataInfo1})}}},l=d,h=i("2877"),c=Object(h["a"])(l,a,n,!1,null,"ee2e6ecc",null);e["default"]=c.exports},"16a3":function(t,e,i){"use strict";i("b5a2")},"6e44":function(t,e,i){"use strict";var a=i("cf45");e["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(a["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}}},a3d8f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container graph-box"},[i("div",{staticClass:"flex justify-start"},t._l(t.typeList,(function(e,a){return i("div",{key:a,staticClass:"padding-right-10"},[i("el-button",{attrs:{type:e.value==t.typeId?"primary":"default"},on:{click:function(i){return t.changeTypeClick(e)}}},[t._v(" "+t._s(e.btnText)+" ")])],1)})),0),i("div",{staticClass:"flex echart-title webkit-transition"},[t._v(" 个人工作量统计 "+t._s(t.echartTitle)+" ")]),i("div",{staticClass:"flex echart-subtitle webkit-transition"},[t._v(" 来源： "+t._s(t.websiteName)+" ")]),"line"==t.typeId?i("basic-line",{ref:"line",attrs:{dataInfo:t.dataInfo}}):t._e(),"bar"==t.typeId?i("basic-bar",{ref:"bar",attrs:{dataInfo:t.dataInfo}}):t._e()],1)},n=[],s=(i("7db0"),i("b0c0"),i("d81d"),i("0779")),r=i("3cee"),o=i("fc5f"),d=i("0423"),l={components:{DictSelectTag:s["default"],TinymceEditor:r["default"],BasicLine:o["default"],BasicBar:d["default"]},props:{title:{type:String,default:"统计图表"}},data:function(){return{visible:!0,loading:!1,typeId:"line",typeList:[{value:"line",name:"折线图",btnText:"折线统计图表"},{value:"bar",name:"条形图",btnText:"条形统计图表"}],dataInfo:{title:"数量（次）",subTitle:"",legend:"",seriesArr:[],xAxisArr:[]}}},computed:{websiteName:{get:function(){return this.$store.state.settings.websiteName},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"websiteName",value:t})}},echartTitle:function(){var t=this,e="",i=this.typeList.find((function(e){return e.value==t.typeId}));return i&&(e=i.name),e}},created:function(){var t=this.$route.query;if(t&&(this.typeId=t.type,t.allData)){var e=decodeURIComponent(t.allData),i=JSON.parse(e);this.dataInfo.seriesArr=i,this.dataInfo.xAxisArr=i[0].map((function(t){return t.name}))}},methods:{init:function(t){this.visible=!0,this.showEchart()},changeTypeClick:function(t){var e=this;this.typeId=t.value,this.$nextTick((function(){e.showEchart()}))},showEchart:function(){this.$refs[this.typeId].initChart()},submit:function(t){},cancelModal:function(){this.visible=!1,this.$emit("close")}}},h=l,c=(i("16a3"),i("2877")),u=Object(c["a"])(h,a,n,!1,null,"b8ba183a",null);e["default"]=u.exports},b5a2:function(t,e,i){},fc5f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=i("ade3"),r=(i("159b"),i("d81d"),i("313e")),o=i.n(r),d=i("6e44");i("817d");var l={name:"",mixins:[d["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"60vh"},dataInfo:{type:Object}},data:function(){return{chart:null,dataInfo1:[],legendData:[]}},computed:{title:function(){if(this.dataInfo)return this.dataInfo.title},legend:function(){if(this.dataInfo)return this.dataInfo.legend},subTitle:function(){if(this.dataInfo)return this.dataInfo.subTitle}},watch:{chartData:{deep:!0,handler:function(t){var e=this;this.legend,this.dataInfo.seriesArr;this.dataInfo.seriesArr.forEach((function(t){var i={type:"line",color:["#FF7F50"],smooth:0,itemStyle:{normal:{label:{show:!0}}}};i.name=t.username,i.data=t.map((function(t){return t.number})),e.legendData.push(t.username),e.dataInfo1.push(i)})),this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=this;this.chart=o.a.init(this.$el,"macarons"),this.dataInfo1=[],this.dataInfo.seriesArr.forEach((function(e){var i={type:"line",smooth:0,itemStyle:{normal:{label:{show:!1}}}};i.name=e[0].username,i.data=e.map((function(t){return t.number})),t.legendData.push(e[0].username),t.dataInfo1.push(i)})),this.setOptions(this.chartData)},setOptions:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.expectedData,e.actualData;this.chart.setOption({text:"标题文本",title:{text:this.title,padding:[0,0,0,50],textStyle:(t={color:"#000",fontWeight:"bold",fontStyle:"normal"},Object(s["a"])(t,"fontWeight","bold"),Object(s["a"])(t,"fontFamily","sans-serif"),Object(s["a"])(t,"fontSize",14),t),subtext:this.subTitle},tooltip:{trigger:"axis"},legend:{},xAxis:{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#4488BB",width:1}},axisLabel:{textStyle:{}},data:this.dataInfo.xAxisArr},yAxis:{type:"value",axisLine:{lineStyle:{color:"#4488BB",width:1}},axisLabel:{textStyle:{}}},series:this.dataInfo1})}}},h=l,c=i("2877"),u=Object(c["a"])(h,a,n,!1,null,"2906d5f2",null);e["default"]=u.exports}}]);