(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92814f14"],{"1edc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"extract-box flex flex-column max-height"},[a("h1",{staticClass:"title"},[t._v("电子文件提取")]),1==t.showExtractFileFlag?a("div",{staticClass:"input-box flex"},[a("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"input-with-select",attrs:{placeholder:"请输入提取码",maxlength:"50"},model:{value:t.retPwd,callback:function(e){t.retPwd=e},expression:"retPwd"}}),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.checkPwdDowNum}},[t._v(" 提取文件 ")])],1):t._e(),0==t.showExtractFileFlag?a("div",{staticClass:"link-failure"},[t._v(" 链接已失效，您无法访问文件！ ")]):t._e()])},r=[],c=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("cf45")),n={name:"ExtractBox",components:{},props:{typeFlag:{type:String,default:"myFile"}},data:function(){return{retPwd:"",key:"",url:{dowExtData:"/shareExternal/dowExtData",checkPwdDowNum:"/shareExternal/checkPwdDowNum",checkUrl:"/shareExternal/checkUrl",dowExtDataC:"/shareExternalC/dowExtData",checkPwdDowNumC:"/shareExternalC/checkPwdDowNum",checkUrlC:"/shareExternalC/checkUrl"},showExtractFileFlag:-1,loading:!1}},watch:{},computed:{},methods:{init:function(t){this.key=t,this.checkUrl()},checkPwdDowNum:function(){var t=this;if(this.retPwd){var e=this.url.checkPwdDowNum;"fileShare"==this.typeFlag&&(e=this.url.checkPwdDowNumC);var a={retPwd:this.retPwd,key:this.key},i="post";this.loading=!0,this.$api.httpAction(e,a,i).then((function(e){setTimeout((function(){t.loading=!1}),300),200==e.code?t.dowExtData():t.$sweetAlert.errorWithTimer(e.msg)}))}else this.$sweetAlert.warnWithTimer("提取码不能为空！")},dowExtData:function(){var t=this,e=this.url.dowExtData;"fileShare"==this.typeFlag&&(e=this.url.dowExtDataC);var a={retPwd:this.retPwd,key:this.key},i=Object(c["h"])(new Date,"{y}-{m}-{d}");this.$api.downFile(e,a).then((function(e){if(e)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([e]),i+".zip");else{var a=window.URL.createObjectURL(new Blob([e])),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",i+".zip"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}else t.$sweetAlert.errorWithTimer("文件下载失败！")}))},checkUrl:function(){var t=this,e=this.url.checkUrl;"fileShare"==this.typeFlag&&(e=this.url.checkUrlC);var a={key:this.key},i="post";this.$api.httpAction(e,a,i).then((function(e){200==e.code?t.showExtractFileFlag=1:t.showExtractFileFlag=0}))}},created:function(){},mounted:function(){}},o=n,l=(a("878f"),a("2877")),s=Object(l["a"])(o,i,r,!1,null,"bee4626a",null);e["default"]=s.exports},5363:function(t,e,a){},"878f":function(t,e,a){"use strict";a("5363")},be13:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"extract-box flex flex-column max-height"},[a("extract-box",{ref:"extract",attrs:{typeFlag:"fileShare"}})],1)},r=[],c=a("1edc"),n={name:"ExtractFile",components:{ExtractBox:c["default"]},props:{},data:function(){return{}},watch:{},computed:{},methods:{},created:function(){var t=this,e=this.$route.query;if(e&&e.key){var a=e.key;this.$nextTick((function(){t.$refs.extract.init(a)}))}},mounted:function(){}},o=n,l=a("2877"),s=Object(l["a"])(o,i,r,!1,null,"2d36a6fd",null);e["default"]=s.exports}}]);