(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14baf309"],{"0321":function(e,t,i){"use strict";var a=i("bd2b"),n=i.n(a);n.a},1084:function(e,t,i){"use strict";i.d(t,"k",(function(){return n})),i.d(t,"j",(function(){return r})),i.d(t,"p",(function(){return o})),i.d(t,"x",(function(){return l})),i.d(t,"a",(function(){return s})),i.d(t,"f",(function(){return u})),i.d(t,"m",(function(){return m})),i.d(t,"l",(function(){return d})),i.d(t,"w",(function(){return c})),i.d(t,"c",(function(){return p})),i.d(t,"t",(function(){return f})),i.d(t,"u",(function(){return h})),i.d(t,"g",(function(){return g})),i.d(t,"i",(function(){return b})),i.d(t,"h",(function(){return I})),i.d(t,"b",(function(){return _})),i.d(t,"e",(function(){return C})),i.d(t,"q",(function(){return D})),i.d(t,"r",(function(){return v})),i.d(t,"s",(function(){return N})),i.d(t,"o",(function(){return H})),i.d(t,"n",(function(){return E})),i.d(t,"d",(function(){return w})),i.d(t,"v",(function(){return y}));var a=i("b775");function n(e){return Object(a["a"])({url:"api/HomeManage/GetHomeBannerPageList",method:"post",data:e})}function r(e){return Object(a["a"])({url:"api/HomeManage/GetHomeBannerById/"+e,method:"post",data:null})}function o(e){return Object(a["a"])({url:"api/HomeManage/UpdateBanner",method:"post",data:e})}function l(e){return Object(a["a"])({url:"api/HomeManage/UploadBannerImage",method:"post",data:e})}function s(e){return Object(a["a"])({url:"api/HomeManage/AddBanner",method:"post",data:e})}function u(e){return Object(a["a"])({url:"api/HomeManage/DelHomeBanner/"+e,method:"post",data:null})}function m(e){return Object(a["a"])({url:"api/HomeManage/GetHomeInformationActivitiesPageList",method:"post",data:e})}function d(e){return Object(a["a"])({url:"api/HomeManage/GetHomeInformationActivitiesById/"+e,method:"post",data:null})}function c(e){return Object(a["a"])({url:"api/HomeManage/UploadActivitiesImage",method:"post",data:e})}function p(e){return Object(a["a"])({url:"api/HomeManage/AddHomeInformationActivities",method:"post",data:e})}function f(e){return Object(a["a"])({url:"api/HomeManage/UpdateHomeInformationActivities",method:"post",data:e})}function h(e){return Object(a["a"])({url:"api/HomeManage/UpdateHomeInformationActivitiesStatus/"+e.id+"?type="+e.type,method:"post",data:null})}function g(e){return Object(a["a"])({url:"api/HomeManage/DelHomeInformationActivities/"+e,method:"post",data:null})}function b(e){return Object(a["a"])({url:"api/HomeManage/GetHomeAnnouncementPageList",method:"post",data:e})}function I(e){return Object(a["a"])({url:"api/HomeManage/GetHomeAnnouncementById/"+e,method:"post",data:null})}function _(e){return Object(a["a"])({url:"api/HomeManage/AddHomeAnnouncement",method:"post",data:e})}function C(e){return Object(a["a"])({url:"api/HomeManage/DelHomeAnnouncement/"+e,method:"post",data:null})}function D(e){return Object(a["a"])({url:"api/HomeManage/UpdateHomeAnnouncement",method:"post",data:e})}function v(e){return Object(a["a"])({url:"api/HomeManage/UpdateHomeAnnouncementPublish/"+e.id,method:"post",data:null})}function N(e){return Object(a["a"])({url:"api/HomeManage/UpdateHomeAnnouncementShelves/"+e.id,method:"post",data:null})}function H(e){return Object(a["a"])({url:"api/HomeManage/GetHomePublicityVideoPageList",method:"post",data:e})}function E(e){return Object(a["a"])({url:"api/HomeManage/GetHomePublicityVideoById/"+e,method:"post",data:null})}function w(e){return Object(a["a"])({url:"api/HomeManage/AddHomePublicityVideo",method:"post",data:e})}function y(e){return Object(a["a"])({url:"api/HomeManage/UpdateHomePublicityVideo",method:"post",data:e})}},"80bb":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bannerTel"},[i("div",{staticClass:"titleTel"},[e._v(e._s(0===e.isEdit?"新建活动资讯":1===e.isEdit?"编辑活动资讯":"查看活动资讯"))]),i("div",{staticStyle:{width:"100%"}},[i("el-form",{ref:"formInit",attrs:{model:e.formInit,"label-width":"80px",rules:e.rules}},[i("el-form-item",{attrs:{label:"封面图",prop:"ImageUrl"}},[e.formInit.ImageUrl?i("div",{staticClass:"FileUpload",staticStyle:{width:"148px",height:"148px","line-height":"148px"}},[i("div",{staticClass:"fileDiv",staticStyle:{width:"148px",height:"148px","line-height":"148px",margin:"0px"}},[i("img",{attrs:{src:e.formInit.ImageUrl,alt:""}}),i("div",{staticClass:"fileDivBg",on:{click:e.newsCoverDeleteClick}},[i("i",{staticClass:"el-icon-delete"})])])]):i("div",{staticClass:"avatar-uploader"},[i("ul",{staticClass:"el-upload-list el-upload-list--picture-card"}),i("div",{staticClass:"el-upload el-upload--picture-card",attrs:{tabindex:"0"},on:{click:e.newsCoverChoseClick}},[i("i",{staticClass:"el-icon-plus"}),i("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"logoImage",accept:".jpg, .png, .jpeg"}})]),i("div",{staticClass:"el-upload__tip"},[e._v("只能上传jpg/png文件，且不超过2MB,建议尺寸290*240")])]),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{staticClass:"ploader-icon",attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),i("el-form-item",{attrs:{label:"中文标题",prop:"Title_CN"}},[i("el-input",{attrs:{placeholder:"请输中文标题",maxlength:this.GLOBAL.MAX_LENGTH_TITLE},model:{value:e.formInit.Title_CN,callback:function(t){e.$set(e.formInit,"Title_CN",t)},expression:"formInit.Title_CN"}})],1),i("el-form-item",{attrs:{label:"英文标题",prop:"Title_EN"}},[i("el-input",{attrs:{placeholder:"请输英文标题"},model:{value:e.formInit.Title_EN,callback:function(t){e.$set(e.formInit,"Title_EN",t)},expression:"formInit.Title_EN"}})],1),i("el-form-item",{attrs:{label:"中文简述",prop:"Des_CN"}},[i("el-input",{attrs:{placeholder:"请输入",type:"textarea",disabled:2===e.isEdit,"show-word-limit":"",maxlength:this.GLOBAL.MAX_LENGTH_DES},model:{value:e.formInit.Des_CN,callback:function(t){e.$set(e.formInit,"Des_CN",t)},expression:"formInit.Des_CN"}})],1),i("el-form-item",{attrs:{label:"英文简述",prop:"Des_EN"}},[i("el-input",{attrs:{placeholder:"请输入",type:"textarea",disabled:2===e.isEdit,"show-word-limit":"",maxlength:this.GLOBAL.MAX_LENGTH_DES},model:{value:e.formInit.Des_EN,callback:function(t){e.$set(e.formInit,"Des_EN",t)},expression:"formInit.Des_EN"}})],1),i("el-form-item",{attrs:{label:"发布人",prop:"Publisher"}},[i("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formInit.Publisher,callback:function(t){e.$set(e.formInit,"Publisher",t)},expression:"formInit.Publisher"}})],1),i("el-form-item",{attrs:{label:"发布日期",prop:"PublisherDate"}},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.formInit.PublisherDate,callback:function(t){e.$set(e.formInit,"PublisherDate",t)},expression:"formInit.PublisherDate"}})],1),i("el-form-item",{attrs:{label:"中文详情",prop:"Details_CN"}},[i("editTinymce",{attrs:{val:e.formInit.Details_CN,disabled:2==e.isEdit},on:{getval:e.changvalCN}})],1),i("el-form-item",{attrs:{label:"英文详情",prop:"Details_EN"}},[i("editTinymce",{attrs:{val:e.formInit.Details_EN,disabled:2==e.isEdit},on:{getval:e.changvalEN}})],1)],1)],1),i("div",{staticClass:"bottomButton"},[i("el-button",{attrs:{icon:"el-icon-circle-close",size:"small",type:"info"},on:{click:e.goBack}},[e._v("取消")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:2!=e.isEdit,expression:"isEdit != 2"}],attrs:{icon:"el-icon-circle-check",size:"small",type:"primary"},on:{click:function(t){return e.onSubmit("formInit")}}},[e._v("保存")])],1)])},n=[],r=(i("c5f6"),i("1084")),o=i("95797"),l={name:"index",components:{editTinymce:o["a"]},props:{isEdit:{type:Number,default:0}},data:function(){return{formInit:{ImageUrl:"",Thumbnail_FileId:"",Title_CN:"",Title_EN:"",Des_CN:"",Des_EN:"",Publisher:"",PublisherDate:"",Details_CN:"",Details_EN:""},isCropper:!1,baseURL:global_config.BASE_URL,api:"/api/HomeManage/UploadActivitiesImage",imagelist:[],myHeaders:{"x-token":""},fileType:".jpg,.png,.jpeg",dialogImageUrl:"",dialogVisible:!1,rules:{ImageUrl:[{required:!0,message:"请选择封面图",trigger:"change"}],Publisher:[{required:!0,message:"请输入发布人",trigger:"blur"}],PublisherDate:[{required:!0,message:"请选择发布时间",trigger:"blur"}],Des_CN:[{required:!0,message:"请输入中文简述",trigger:"blur"}],Des_EN:[{required:!0,message:"请输入英文简述",trigger:"blur"}],Title_CN:[{required:!0,message:"请输入中文标题",trigger:"blur"}],Title_EN:[{required:!0,message:"请输入英文标题",trigger:"blur"}],Details_CN:[{required:!0,message:"请输入中文详情"}],Details_EN:[{required:!0,message:"请输入英文详情"}]}}},created:function(){this.isCropper=this.$route.query.isCropper,1===this.isEdit||2===this.isEdit?this.getDetail():(this.formInit.PublisherDate=this.dataFormat(new Date(Date.now())),this.setCropperImg()),this.myHeaders["x-token"]=localStorage.getItem("mToken")},mounted:function(){},computed:{uploadDisabled:function(){return this.imagelist.length>0}},methods:{dataFormat:function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},changvalCN:function(e){this.formInit.Details_CN=e},changvalEN:function(e){this.formInit.Details_EN=e},newsCoverChoseClick:function(){this.$router.push({path:"/website_news_cropper",query:{Id:this.$route.query.id}})},newsCoverDeleteClick:function(){this.formInit.ImageUrl="",this.formInit.Thumbnail_FileId=""},getDetail:function(){var e=this;Object(r["l"])(this.$route.query.id).then((function(t){0===t.data.Code&&(e.formInit.ImageUrl=t.data.Data.ImageUrl,e.formInit.Thumbnail_FileId=t.data.Data.Thumbnail_FileId,e.formInit.Title_CN=t.data.Data.Title_CN,e.formInit.Title_EN=t.data.Data.Title_EN,e.formInit.Des_CN=t.data.Data.Des_CN,e.formInit.Des_EN=t.data.Data.Des_EN,e.formInit.Publisher=t.data.Data.Publisher,e.formInit.PublisherDate=t.data.Data.PublisherDate,e.formInit.Details_CN=t.data.Data.Details_CN,e.formInit.Details_EN=t.data.Data.Details_EN,e.setCropperImg())}))},setCropperImg:function(){this.isCropper&&(localStorage.getItem("newsCropperFileId")&&(this.formInit.Thumbnail_FileId=localStorage.getItem("newsCropperFileId")),localStorage.getItem("newsCropperShowLink")&&(this.formInit.ImageUrl=localStorage.getItem("newsCropperShowLink")))},clearCropperImg:function(){localStorage.removeItem("newsCropperFileId"),localStorage.removeItem("newsCropperShowLink")},goBack:function(){this.clearCropperImg(),this.$router.push("/website_news")},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;1===t.isEdit?t.onUpdate():0===t.isEdit&&t.onAdd()}))},onAdd:function(){var e=this;Object(r["c"])(this.formInit).then((function(t){0===t.data.Code&&(e.goBack(),e.$message.success("保存成功"))}))},onUpdate:function(){var e=this;this.formInit.Id=this.$route.query.id,Object(r["t"])(this.formInit).then((function(t){0===t.data.Code&&(e.goBack(),e.$message.success("保存成功"))}))},handleRemove:function(e,t){this.imagelist=t},handlePictureCardPreview:function(e){this.formInit.ImageUrl=e.url,this.dialogImageUrl=e.url,this.dialogVisible=!0},uploafPicSuccess:function(e,t,i){0===e.Code?(this.formInit.ImageUrl="",null!=e.Data.FileId?(this.formInit.Thumbnail_FileId=e.Data.FileId,this.imagelist=i,this.formInit.ImageUrl=this.imagelist[0].response.Data.ShowLink):(this.formInit.Thumbnail_FileId="",this.$message.closeAll(),this.$message.error(e.Data.Message))):20002===e.Code?(this.$message.closeAll(),this.$message.error("登录已过期，请重新登录"),this.$router.push("/"),localStorage.setItem("mToken","")):(this.$message.closeAll(),this.$message.error(e.Data.Message))},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t}}},s=l,u=(i("0321"),i("2877")),m=Object(u["a"])(s,a,n,!1,null,null,null);t["a"]=m.exports},bd2b:function(e,t,i){},eb28:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("edit-template",{attrs:{"is-edit":0}})},n=[],r=i("80bb"),o={name:"CreateForm",components:{editTemplate:r["a"]}},l=o,s=i("2877"),u=Object(s["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports}}]);