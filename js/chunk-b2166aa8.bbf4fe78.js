(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2166aa8"],{1158:function(e,t,r){},"1cb2":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container auto-scroll"},[r("div",{staticClass:"form-title"},[e._v(" 我的资料 ")]),r("div",{staticClass:"info-box"},[r("basic-form",{ref:e.formModelObject.formName,attrs:{formModel:e.formModelObject.formModel,refName:e.formModelObject.formName+"RefName",halfFormFlag:e.formModelObject.halfFormFlag,defaultTextareaWidth:"400px"},on:{submit:e.submitForm}}),r("div",{staticClass:"btn-list"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确认修改")]),r("el-button",{attrs:{type:"default"},on:{click:e.reset}},[e._v("重新填写")])],1)],1)])},i=[],l=r("5530"),a=(r("b0c0"),r("d3b7"),r("25f0"),r("159b"),r("b64b"),r("2f62")),s=r("9962"),n=r("ac4a"),u={name:"BasicInformation",mixins:[n["a"]],components:{BasicForm:s["default"]},props:{},data:function(){return{url:{edit:"/sys/user/updateBaseInfo"}}},watch:{},computed:Object(l["a"])({},Object(a["c"])(["userInfo"])),methods:{submit:function(){this.$refs[this.formModelObject.formName].submit()},submitForm:function(e){var t=this,r=(e.refName,e.formData);r.id=this.userInfo.id;this.active;var o=this.url.edit,i="post";this.$api.httpAction(o,r,i).then((function(e){t.loading=!1,200==e.code?(t.setUserInfo(r),t.$sweetAlert.successWithTimer(e.msg)):t.$sweetAlert.errorWithTimer(e.msg)}))},reset:function(){var e=this;this.$nextTick((function(){e.$refs[e.formModelObject.formName].resetFields(),e.initData()}))},initData:function(){var e=this,t=JSON.parse(JSON.stringify(this.userInfo));t.roleList&&t.roleList.length>0&&(t.roleName||(t.roleName=t.roleList[0].name));var r=t;r.sex=r.sex.toString(),Object.keys(this.formModelObject).forEach((function(t){var o=e.formModelObject.formModel;o.formList.forEach((function(e){e.value=e.prop&&r[e.prop]?r[e.prop]:null}))}))},setUserInfo:function(e){var t=Object.assign(this.userInfo,e);this.$store.commit("SET_INFO",t)}},created:function(){this.initData()},mounted:function(){}},d=u,c=(r("d142"),r("2877")),m=Object(c["a"])(d,o,i,!1,null,"7bf2ec42",null);t["default"]=m.exports},"6b58":function(e,t,r){"use strict";r("eaa5")},"6f68":function(e,t,r){},9962:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basic-form"},[e.formModel&&e.formModel.formList&&e.formModel.formList.length>0?r("el-form",{ref:e.refName,class:{"half-form":e.halfFormFlag},attrs:{model:e.formModel,"label-width":e.formModel.labelWidth||"9rem"}},e._l(e.formModel.formList,(function(t,o){return r("div",{key:o},[(!t.hideFormItem||!e.formModel.hideFormFlag)&&!t.showFormItem&&!e.formModel.showFormItemValue||e.formModel.hideFormFlag&&t.showFormItem||e.showFormItemValue&&(!t.showFormItemValue||e.showFormItemValue==t.showFormItemValue)?r("el-form-item",{class:{"max-form":t.maxForm,"clear-form":t.clearForm},style:{width:t.formItemWidth},attrs:{label:t.label,prop:"formList."+o+".value",rules:t.rules.value}},[r("div",{staticClass:"form-item-flex"},["radio"==t.type?r("div",{staticClass:"radio-group"},[r("el-radio-group",{on:{change:function(r){return e.radioGroupChange(r,t)}},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}},e._l(t.selectOptions,(function(t,o){return r("el-radio",{key:o,attrs:{label:t.value}},[e._v(e._s(t.text))])})),1)],1):e._e(),"select"==t.type?r("div",[r("el-select",{style:{width:t.selectWidth?t.selectWidth:e.defaultSelectWidth},attrs:{placeholder:t.placeHolder,clearable:""},on:{change:function(r){return e.selectChange(r,t)}},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}},e._l(t.selectOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1):e._e(),"password"==t.type?r("div",[r("el-input",{attrs:{type:"password",maxlength:t.maxLength,placeholder:t.placeHolder,"show-password":""},model:{value:t.value,callback:function(r){e.$set(t,"value","string"===typeof r?r.trim():r)},expression:"item.value"}})],1):e._e(),"textarea"==t.type?r("div",[r("el-input",{style:{width:e.defaultTextareaWidth},attrs:{type:"textarea",rows:t.rows||5,maxlength:t.maxLength,placeholder:t.placeHolder,"show-password":""},model:{value:t.value,callback:function(r){e.$set(t,"value","string"===typeof r?r.trim():r)},expression:"item.value"}})],1):e._e(),t.prop?e._e():r("div",["tips"==t.type?r("div",{staticClass:"tips-title"},[r("div",[e._v(e._s(t.text))])]):e._e(),"empty"==t.type?r("div",[r("div")]):e._e()]),"uploadPicture"==t.type||"upload"==t.type?r("div",{class:{"id-card":"idCardIcon"==t.prop||"idCardEmblem"==t.prop}},[r("el-upload",{staticClass:"upload-demo",class:{hide:t.fileList.length>=t.limit},attrs:{action:e.uploadUrl,"list-type":"picture-card","on-remove":function(r,o){return e.handleRemove(r,o,t)},"file-list":t.fileList,"on-change":function(r,o){return e.changeFile(r,o,t)},"on-success":function(r,o){return e.upLoadSuccess(r,o,t)},"before-remove":e.beforeRemove,"before-upload":e.beforeAvatarUpload,headers:e.uploadHeader,multiple:"",limit:t.limit||2}},[0!=t.fileList.length||"idCardIcon"!=t.prop&&"idCardEmblem"!=t.prop?r("i",{staticClass:"el-icon-plus"}):r("div",["idCardIcon"==t.prop?r("img",{attrs:{src:"static/img/default/idCardIcon.png"}}):e._e(),"idCardEmblem"==t.prop?r("img",{attrs:{src:"static/img/default/idCardEmblem.png"}}):e._e()])])],1):e._e(),"uploadFile"==t.type?r("div",[r("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-remove":function(r,o){return e.handleRemove(r,o,t)},"file-list":t.fileList,"on-change":function(r,o){return e.changeFile(r,o,t)},"on-success":function(r,o){return e.upLoadSuccess(r,o,t)},"before-remove":e.beforeRemove,"before-upload":e.beforeFileUpload,headers:e.uploadHeader,multiple:"",limit:t.limit||2}},[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload2",disabled:t.fileList.length>=t.limit}},[e._v("点击上传")])],1)],1):e._e(),"number"==t.type?r("div",[r("el-input-number",{staticStyle:{"text-align":"center"},attrs:{placeholder:t.placeHolder,min:t.min,max:t.max},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1):e._e(),"number-right"==t.type?r("div",[r("el-input-number",{attrs:{"controls-position":"right",placeholder:t.placeHolder,min:t.min,max:t.max},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1):e._e(),"integer"==t.type?r("div",[r("el-input",{style:{width:t.inputWidth?t.inputWidth:e.defaultInputWidth},attrs:{maxlength:t.maxLength,placeholder:t.placeHolder,disabled:t.disabled},on:{input:function(r){return t.value=e.integerCheck(r)}},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1):e._e(),"color-picker"==t.type?r("div",{staticClass:"auto-width",staticStyle:{height:"100%"}},[r("el-color-picker",{attrs:{"popper-class":"color-picker-popper"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1):e._e(),t.type?e._e():r("div",[r("el-input",{style:{width:t.inputWidth?t.inputWidth:e.defaultInputWidth},attrs:{maxlength:t.maxLength,placeholder:t.placeHolder,disabled:t.disabled},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}})],1),void 0!=t.unit?r("div",{staticClass:"item-unit"},[e._v(" "+e._s(t.unit)+" ")]):e._e(),void 0!=t.tips?r("div",{staticClass:"item-tips",style:{color:t.tipsColor}},[e._v(" "+e._s(t.tips)+" ")]):e._e()])]):e._e()],1)})),0):e._e(),r("div",{staticClass:"clearfix"})],1)},i=[],l=(r("7db0"),r("ac1f"),r("5319"),r("d81d"),r("a434"),r("b0c0"),r("159b"),r("caad"),r("2532"),r("a15b"),r("cf45")),a=r("5f87"),s={name:"",components:{},props:{formModel:{type:Object,default:function(){return null}},formList:{type:Array,default:function(){return null}},refName:{type:String,default:"refForm"},halfFormFlag:{type:Boolean,default:!1},defaultInputWidth:{type:String,default:"100%"},defaultTextareaWidth:{type:String,default:"100%"},defaultSelectWidth:{type:String,default:"100%"}},data:function(){return{}},watch:{},computed:{uploadUrl:function(){return window._CONFIG["VUE_APP_UPLOAD_FILE"]+"?__sid="+Object(l["e"])("ARCAMEL-JESSIONID")},uploadHeader:function(){return{"X-Access-Token":Object(a["a"])()}},showFormItemValue:function(){var e=this.formModel.formList.find((function(e){return e.showFormItemValueFlag}));return e&&(this.formModel.showFormItemValue=e.value),this.formModel.showFormItemValue},showFormItemFlag:function(e,t){var r=!0;return t.hideFormItem?e.hideFormFlag&&(r=!1):t.showFormItem&&(e.hideFormFlag||(r=!1)),r}},methods:{integerCheck:function(e){return 0==e&&(e=""),e=e.replace(/[^0-9]/gi,""),e},radioGroupChange:function(e,t){var r=t.hideFormSwitch;r&&(this.formModel.hideFormFlag=!this.formModel.hideFormFlag)},selectChange:function(e,t){if(this.formModel.showFormItemValue)this.formModel.showFormItemValue=e;else{var r=t.hideFormSwitch;this.formModel.hideFormFlag=r!=e}},upLoadSuccess:function(e,t,r){var o=this.formModel.formList.find((function(e){return e.prop==r.prop})).fileList;o[o.length-1].url=window._CONFIG["BASE_API"]+"/"+e.message,o[o.length-1].fieldUrl=e.message},changeFile:function(e,t,r){this.formModel.formList.find((function(e){return e.prop==r.prop})).fileList=t,t.length>0?this.formModel.formList.find((function(e){return e.prop==r.prop})).value="upload":this.formModel.formList.find((function(e){return e.prop==r.prop})).value=""},handleRemove:function(e,t,r){var o=-1;this.formModel.formList.find((function(e){return e.prop==r.prop})).fileList.map((function(t,r){t===e&&(o=r)})),o>-1&&this.formModel.formList.find((function(e){return e.prop==r.prop})).fileList.splice(o,1),t.length>0?this.formModel.formList.find((function(e){return e.prop==r.prop})).value="upload":this.formModel.formList.find((function(e){return e.prop==r.prop})).value=""},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传图片只能是 JPG/png 格式!"),r||this.$message.error("上传图片大小不能超过 2MB!"),t&&r},beforeFileUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传图片只能是 JPG/png 格式!"),r||this.$message.error("上传图片大小不能超过 2MB!"),t&&r},submit:function(){var e=this,t=this;this.$refs[this.refName].validate((function(r){if(!r)return!1;var o={},i=e.refName,l=!1;t.formModel.formList.forEach((function(e){e.type&&e.type.includes("upload")&&e.fileList&&e.fileList.length>0&&(e.value=e.fileList.map((function(e){return e.fieldUrl||e.url||e.response.message})).join(","),0==e.value.indexOf("blob:")&&(l=!0)),o[e.prop]=e.value})),l?e.$message.warning("还未上传完成！"):e.$emit("submit",{refName:i,formData:o})}))},resetFields:function(){this.$refs[this.refName].resetFields()}},created:function(){},mounted:function(){}},n=s,u=(r("6b58"),r("c68b"),r("2877")),d=Object(u["a"])(n,o,i,!1,null,"a95c7b88",null);t["default"]=d.exports},ac4a:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("61f7"),i={data:function(){return{formModelObject:{formName:"backUp",formModel:{formList:[{value:"",prop:"roleName",label:"我的角色",placeHolder:"",disabled:!0,tips:"",rules:{value:[{required:!1,message:"",trigger:"blur"}]}},{value:"",prop:"loginName",label:"登录帐号",placeHolder:"",disabled:!0,tips:"不可修改。一般用于后台登入名",tipsColor:"#606266",rules:{value:[{required:!1,message:"",trigger:"blur"}]}},{value:"",prop:"userName",label:"用户名",placeHolder:"请输入用户名",tips:"",rules:{value:[{required:!0,message:"请输入用户名",trigger:"blur"}]}},{value:"",prop:"sex",label:"性别",placeHolder:"",tips:"",type:"radio",selectOptions:[{value:"0",text:"男"},{value:"1",text:"女"}],rules:{value:[{required:!0,message:"请选择性别",trigger:"blur"}]}},{value:"",prop:"phone",label:"手机",placeHolder:"请输入您的手机号码",tips:"",rules:{value:[{required:!1,trigger:"change",validator:o["d"]}]}},{value:"",prop:"email",label:"邮箱",placeHolder:"请输入您的邮箱",tips:"",rules:{value:[{required:!1,trigger:"change",validator:o["c"]}]}},{value:"",prop:"remark",label:"备注",placeHolder:"请输入备注",type:"textarea",rules:{value:[{required:!1,message:"请输入备注",trigger:"blur"}]}}]},halfFormFlag:!1}}},methods:{}}},c68b:function(e,t,r){"use strict";r("6f68")},d142:function(e,t,r){"use strict";r("1158")},eaa5:function(e,t,r){}}]);