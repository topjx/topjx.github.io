(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35d3ca90"],{3375:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"incubationApplication common"},[a("div",{staticClass:"back",on:{click:e.goBack}},[a("i",{staticClass:"el-icon-arrow-left"}),a("span",[e._v(e._s(e.$t("lang.back")))])]),a("div",{staticClass:"incubationApplicationMain"},[a("div",{staticClass:"menu"},[a("router-link",{class:e.$route.query.name===encodeURI(e.releaseServiceRoute.name)||encodeURI(e.activeName)===encodeURI(e.releaseServiceRoute.name)?"yellow":"",attrs:{to:{path:e.releaseServiceRoute.path,query:{name:encodeURI(e.releaseServiceRoute.name),detail:e.releaseServiceRoute.Details}}}},[e._v(e._s(e.releaseServiceRoute.name))]),e._l(e.data,(function(t,n){return a("router-link",{key:n,class:[e.$route.query.name===encodeURI(t.name)?"yellow":"",encodeURI(e.activeName)===encodeURI(t.name)?"yellow":"",e.$route.query.detailId==t.detailId?"yellow":""],attrs:{to:{path:t.path,query:{name:encodeURI(t.name),detail:t.Details,detailId:t.detailId}}}},[e._v(e._s(t.name))])}))],2),a("div",{staticClass:"incubationApplicationMainRight"},[a("div",{staticClass:"title"},[e._v(e._s(e.activeName))]),a("router-view")],1)])])},i=[],r=(a("4160"),a("b0c0"),a("159b"),a("bdc1")),c={name:"need",props:{},components:{},data:function(){return{activeName:"",activeIndex:0,data:[],releaseServiceRoute:{name:this.$t("lang.community_service_send_title"),path:"/serveRelease/serveReleaseIndex",Title:"",Details:""},lawRoute:{name:this.$t("lang.community_service_send_title"),path:"/serveRelease/publicServe",Title:"",Details:""}}},created:function(){this.$route.query.name?this.activeName=decodeURI(this.$route.query.name):this.activeName=this.data.length>0?this.data[0].name:this.releaseServiceRoute.name,this.getBaseInformationSettingsList()},watch:{$route:function(e){e.query.name?this.activeName=decodeURI(e.query.name):this.activeName=this.data.length>0?this.data[0].name:this.releaseServiceRoute.name}},methods:{goBack:function(){this.$router.go(-1)},changeMenu:function(e,t,a){this.activeName=a,this.activeIndex=e,this.$router.push(t)},getBaseInformationSettingsList:function(){var e=this,t={firstLevelTitle:7,type:2,searchDetail:!1};Object(r["b"])(t).then((function(t){0==t.data.Code&&(e.data=[],t.data.Data.forEach((function(t){var a={name:"",path:"/serveRelease/publicServe",Title:"",Details:""};a.name=t.Title,a.Title=t.Title,a.Details=t.Details,a.detailId=t.Id,e.data.push(a)})))}))}}},o=c,s=(a("a884"),a("2877")),u=Object(s["a"])(o,n,i,!1,null,"253c64c9",null);t["default"]=u.exports},a884:function(e,t,a){"use strict";var n=a("c192"),i=a.n(n);i.a},bdc1:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return u})),a.d(t,"j",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"f",(function(){return h}));var n=a("b775");function i(e){return Object(n["a"])({url:"api/CilentIncubator/Mechanism_MemberPageList",method:"post",data:e})}function r(e){return Object(n["a"])({url:"api/CilentIncubator/Mechanism_MemberDateil/"+e,method:"post",data:null})}function c(e){return Object(n["a"])({url:"api/CilentIncubator/InitMember/"+e,method:"get",data:null})}function o(e){return Object(n["a"])({url:"api/CilentIncubator/SaveIncubato",method:"post",data:e})}function s(e){return Object(n["a"])({url:"api/CilentIncubator/SaveMemberStep2",method:"post",data:e})}function u(e){return Object(n["a"])({url:"api/ClientProjectAssessment/InitProject",method:"get",data:null})}function l(e){return Object(n["a"])({url:"api/ClientProjectAssessment/SaveProject",method:"post",data:e})}function d(e){return Object(n["a"])({url:"api/CilentIncubator/GetBaseInformationSettingsList",method:"post",data:e})}function m(e){return Object(n["a"])({url:"api/CilentIncubator/GetBaseInformationSettingsDateil/"+e,method:"post",data:null})}function h(e){return Object(n["a"])({url:"/api/CilentIncubator/RegisterTutorMember",method:"post",data:e})}},c192:function(e,t,a){}}]);