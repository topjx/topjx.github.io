(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5acc9dff"],{3735:function(t,e,i){},"7b0a":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"d",(function(){return r})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"e",(function(){return u}));i("6b54"),i("c5f6");function n(t,e,i){if(!e)return i(new Error("输入不可以为空"));setTimeout((function(){if(Number(e)){var t=/^[0-9]*[1-9][0-9]*$/,n=t.test(e);n?i():i(new Error("请输入正整数"))}else i(new Error("请输入正整数"))}),0)}function r(t,e,i){var n=/^[1][3-9][0-9]{9}$/;""==e||void 0==e||null==e?i(new Error("请输入正确的电话号码")):n.test(e)||""==e?i():i(new Error("请输入正确的电话号码"))}function o(t,e,i){var n=/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;""==e||void 0==e||null==e?i(new Error("请输入正确的邮箱")):n.test(e)?i():i(new Error("请输入正确的邮箱"))}function a(t,e,i){""==e||void 0==e||null==e||-1==e.indexOf("@")?i(new Error("请输入正确的邮箱")):i()}function u(t,e,i){if(void 0==e||null==e)return i(new Error("输入不可以为空"));setTimeout((function(){e=e.toString(),e.length>0?e.length>3||parseFloat(e)<.1||parseFloat(e)>.9?i(new Error("输入0.1-0.9之间")):i():i(new Error("输入不可以为空"))}),0)}},b9a2:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"maindetail"},[i("div",{staticClass:"titleTel"},[t._v(t._s(0===t.isEdit?"新增设备":1===t.isEdit?"编辑设备":"查看设备"))]),i("div",{staticStyle:{width:"100%"}},[i("el-form",{ref:"formInit",attrs:{model:t.formInit,"label-width":"150px",rules:t.rules}},[i("el-form-item",{attrs:{label:"设备照片",prop:"CoverPicture"}},[t.formInit.CoverPicture?i("div",{staticClass:"FileUpload",staticStyle:{width:"148px",height:"148px","line-height":"148px"}},[i("div",{staticClass:"fileDiv",staticStyle:{width:"148px",height:"148px","line-height":"148px",margin:"0px"}},[i("img",{attrs:{src:t.formInit.CoverPictureInfo.ShowLink,alt:""}}),i("div",{staticClass:"fileDivBg",on:{click:t.imgDeleteClick}},[i("i",{staticClass:"el-icon-delete"})])])]):i("div",{staticClass:"avatar-uploader"},[i("ul",{staticClass:"el-upload-list el-upload-list--picture-card"}),i("div",{staticClass:"el-upload el-upload--picture-card",attrs:{tabindex:"0"},on:{click:t.imgChoseClick}},[i("i",{staticClass:"el-icon-plus"}),i("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"logoImage",accept:".jpg, .png, .jpeg"}})]),i("div",{staticClass:"el-upload__tip"},[t._v("只能上传jpg/png文件，且不超过2MB,建议尺寸568*300")])])]),i("el-form-item",{attrs:{label:"设备类型",prop:"EquipmentType"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInit.EquipmentType,callback:function(e){t.$set(t.formInit,"EquipmentType",e)},expression:"formInit.EquipmentType"}},t._l(t.equipmentTypes,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("el-form-item",{attrs:{label:"中文设备名称",prop:"Name"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formInit.Name,callback:function(e){t.$set(t.formInit,"Name",e)},expression:"formInit.Name"}})],1),i("el-form-item",{attrs:{label:"英文设备名称",prop:"Name_EN"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formInit.Name_EN,callback:function(e){t.$set(t.formInit,"Name_EN",e)},expression:"formInit.Name_EN"}})],1),i("el-form-item",{attrs:{label:"设备编号",prop:"Number"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formInit.Number,callback:function(e){t.$set(t.formInit,"Number",e)},expression:"formInit.Number"}})],1),i("el-form-item",{attrs:{label:"中文所在位置",prop:"Position"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formInit.Position,callback:function(e){t.$set(t.formInit,"Position",e)},expression:"formInit.Position"}})],1),i("el-form-item",{attrs:{label:"英文所在位置",prop:"Position_EN"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formInit.Position_EN,callback:function(e){t.$set(t.formInit,"Position_EN",e)},expression:"formInit.Position_EN"}})],1),i("el-form-item",{attrs:{label:"中文设备说明",prop:"Desc"}},[i("editTinymce",{attrs:{val:t.formInit.Desc,disabled:2==t.isEdit},on:{getval:t.changvalCN}})],1),i("el-form-item",{attrs:{label:"英文设备说明",prop:"Desc_EN"}},[i("editTinymce",{attrs:{val:t.formInit.Desc_EN,disabled:2==t.isEdit},on:{getval:t.changvalEN}})],1),i("el-form-item",{attrs:{label:"设备状态",prop:"Status"}},[i("el-radio-group",{attrs:{disabled:2===t.isEdit},model:{value:t.formInit.Status,callback:function(e){t.$set(t.formInit,"Status",e)},expression:"formInit.Status"}},[i("el-radio",{attrs:{label:0,size:"small"}},[t._v("空闲")]),0!=t.isEdit?i("el-radio",{attrs:{label:1,size:"small"}},[t._v("已借出")]):t._e(),i("el-radio",{attrs:{label:2,size:"small"}},[t._v("维护中")])],1)],1)],1)],1),i("div",{staticClass:"bottomButton"},[i("el-button",{attrs:{icon:"el-icon-back",size:"small",type:"info"},on:{click:t.goBack}},[t._v("返回")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:2!=t.isEdit,expression:"isEdit != 2"}],attrs:{icon:"el-icon-circle-check",size:"small",type:"primary"},on:{click:function(e){return t.onSubmit("formInit")}}},[t._v("保存")])],1)])},r=[],o=(i("7f7f"),i("c5f6"),i("f564")),a=(i("7b0a"),i("95797")),u={name:"index",components:{editTinymce:a["a"]},props:{isEdit:{type:Number,default:0}},computed:{},data:function(){return{formInit:{EquipmentType:"",Name:"",Name_EN:"",Number:"",CoverPicture:"",CoverPictureInfo:{ShowLink:""},Position:"",Position_EN:"",Desc:"",Desc_EN:"",Status:0},equipmentTypes:[],rules:{CoverPicture:[{required:!0,message:"请选择封面图",trigger:"blur"}],EquipmentType:[{required:!0,message:"请选择设备类型",trigger:"blur"}],Name:[{required:!0,message:"请输入设备名称",trigger:"blur"}],Name_EN:[{required:!0,message:"请输入设备英文名称",trigger:"blur"}],Number:[{required:!0,message:"请输入设备编号",trigger:"blur"}],Position:[{required:!0,message:"请输入设备位置",trigger:"blur"}],Position_EN:[{required:!0,message:"请输入设备英文位置 ",trigger:"blur"}],Desc:[{required:!0,message:"请输入设备说明",trigger:"blur"}],Desc_EN:[{required:!0,message:"请输入设备英文说明",trigger:"blur"}],Status:[{required:!0,message:"请输入设备状态",trigger:"blur"}]},isCropper:!1}},created:function(){this.isCropper=this.$route.query.isCropper,this.getEquipmentTypeList(),1===this.isEdit||2===this.isEdit?this.getDetail():this.setCropperImg()},methods:{changvalCN:function(t){this.formInit.Desc=t},changvalEN:function(t){this.formInit.Desc_EN=t},getEquipmentTypeList:function(){var t=this;Object(o["o"])().then((function(e){0===e.data.Code&&(t.equipmentTypes=e.data.Data)}))},getDetail:function(){var t=this;Object(o["j"])(this.$route.query.id).then((function(e){0===e.data.Code&&(t.formInit=e.data.Data,t.setCropperImg())}))},setCropperImg:function(){this.isCropper&&(localStorage.getItem("cropperFileId")&&(this.formInit.CoverPicture=localStorage.getItem("cropperFileId"),this.formInit.CoverPictureInfo.FileId=localStorage.getItem("cropperFileId")),localStorage.getItem("cropperShowLink")&&(this.formInit.CoverPictureInfo.ShowLink=localStorage.getItem("cropperShowLink")))},clearCropperImg:function(){localStorage.removeItem("cropperFileId"),localStorage.removeItem("cropperShowLink")},goBack:function(){this.clearCropperImg(),this.$router.push("/equipment_info")},onSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;1===e.isEdit?e.onUpdate():0===e.isEdit&&e.onAdd()}))},onAdd:function(){var t=this;Object(o["a"])(this.formInit).then((function(e){0===e.data.Code&&(t.goBack(),t.$message.success("保存成功"))}))},onUpdate:function(){var t=this;this.formInit.Id=this.$route.query.id,Object(o["f"])(this.formInit).then((function(e){0===e.data.Code&&(t.goBack(),t.$message.success("保存成功"))}))},imgChoseClick:function(){this.$router.push({path:"/equipment_info_cropper",query:{id:this.$route.query.id,width:568,height:300,key:this.$route.name}})},imgDeleteClick:function(){this.formInit.CoverPictureInfo.ShowLink="",this.formInit.CoverPicture=""}}},s=u,l=(i("f922"),i("2877")),c=Object(l["a"])(s,n,r,!1,null,null,null);e["a"]=c.exports},ca05:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("edit-template",{attrs:{"is-edit":1}})},r=[],o=i("b9a2"),a={name:"EditeForm",components:{editTemplate:o["a"]}},u=a,s=i("2877"),l=Object(s["a"])(u,n,r,!1,null,null,null);e["default"]=l.exports},f564:function(t,e,i){"use strict";i.d(e,"p",(function(){return r})),i.d(e,"o",(function(){return o})),i.d(e,"n",(function(){return a})),i.d(e,"b",(function(){return u})),i.d(e,"e",(function(){return s})),i.d(e,"g",(function(){return l})),i.d(e,"l",(function(){return c})),i.d(e,"j",(function(){return p})),i.d(e,"a",(function(){return m})),i.d(e,"d",(function(){return d})),i.d(e,"f",(function(){return f})),i.d(e,"k",(function(){return g})),i.d(e,"i",(function(){return h})),i.d(e,"c",(function(){return E})),i.d(e,"h",(function(){return b})),i.d(e,"m",(function(){return v})),i.d(e,"r",(function(){return I})),i.d(e,"q",(function(){return q}));var n=i("b775");function r(t){return Object(n["a"])({url:"api/EquipmentManage/GetEquipmentTypePageList",method:"post",data:t})}function o(){return Object(n["a"])({url:"api/EquipmentManage/GetEquipmentTypeList",method:"post"})}function a(t){return Object(n["a"])({url:"api/EquipmentManage/GetEquipmentTypeInfo/"+t,method:"post",data:null})}function u(t){return Object(n["a"])({url:"api/EquipmentManage/AddEquipmentType",method:"post",data:t})}function s(t){return Object(n["a"])({url:"api/EquipmentManage/DelEquipmentType/"+t,method:"post",data:null})}function l(t){return Object(n["a"])({url:"api/EquipmentManage/EditEquipmentType",method:"post",data:t})}function c(t){return Object(n["a"])({url:"api/EquipmentManage/GetEquipmentInfoPageList",method:"post",data:t})}function p(t){return Object(n["a"])({url:"api/EquipmentManage/GeEquipmentInfoInfo/"+t,method:"post",data:null})}function m(t){return Object(n["a"])({url:"api/EquipmentManage/AddEquipmentInfo",method:"post",data:t})}function d(t){return Object(n["a"])({url:"api/EquipmentManage/DelEquipmentInfo/"+t,method:"post",data:null})}function f(t){return Object(n["a"])({url:"api/EquipmentManage/EditEquipmentInfo",method:"post",data:t})}function g(t){return Object(n["a"])({url:"api/EquipmentManage/GetEquipmentBorrowPageList",method:"post",data:t})}function h(t){return Object(n["a"])({url:"api/EquipmentManage/GeEquipmentBorrowInfo/"+t,method:"post",data:null})}function E(t){return Object(n["a"])({url:"api/EquipmentManage/ApprovalEquipmentBorrow",method:"post",data:t})}function b(t){return Object(n["a"])({url:"api/EquipmentManage/EscheatEquipmentBorrow/"+t,method:"post",data:null})}function v(t){return Object(n["a"])({url:"api/EquipmentManage/GetEquipmentInfoStatisticsPageList",method:"post",data:t})}function I(t){return Object(n["a"])({url:"api/EquipmentManage/ReceiptConfirmationEquipment/"+t,method:"post",data:null})}function q(t){return Object(n["a"])({url:"api/EquipmentManage/InvalidEquipment/"+t,method:"post",data:null})}},f922:function(t,e,i){"use strict";var n=i("3735"),r=i.n(n);r.a}}]);