(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07286e98"],{"0b52":function(t,e,n){"use strict";var i=n("7f7a"),a=n.n(i);a.a},"25a6":function(t,e,n){t.exports=n.p+"static/img/banner.png"},"56f9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"noticeInfo"},[t._m(0),n("div",{staticClass:"content commonMargin"},[n("div",{staticClass:"tabs"},[n("router-link",{staticClass:"home",attrs:{to:{path:"/"}}},[t._v(t._s(t.$t("lang.topBar_homepage")))]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:"list"==t.frompage,expression:"frompage == 'list'"}],staticClass:"home",attrs:{to:{path:"/notice"}}},[t._v(">"+t._s(t.$t("lang.homepage_notice")))]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:"search"==t.frompage,expression:"frompage == 'search'"}],staticClass:"home",attrs:{to:{path:"/search"}}},[t._v(">"+t._s(t.$t("lang.search")))]),n("span",{staticClass:"greyTabs"},[t._v("> "+t._s(t.$t("lang.detail")))])],1),n("div",{staticClass:"title"},[t._v(t._s(t.noticeInfo.Title))]),n("div",{staticClass:"time"},[t._v(t._s(t._f("filterDate")(t.noticeInfo.PublisherDate)))]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.noticeInfo.Details)}})])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("img",{attrs:{src:n("25a6"),alt:""}})])}],o=n("c6aa"),r={name:"info",components:{},data:function(){return{noticeInfo:{},frompage:""}},filters:{filterDate:function(t){return t&&t.length>10&&(t=t.substring(0,10)),t}},created:function(){this.frompage=this.$route.query.frompage,this.getNoticeDetail()},methods:{getNoticeDetail:function(){var t=this;Object(o["e"])(this.$route.query.id).then((function(e){0==e.data.Code&&(t.noticeInfo=e.data.Data)}))}}},s=r,c=(n("0b52"),n("2877")),u=Object(c["a"])(s,i,a,!1,null,null,null);e["default"]=u.exports},"7f7a":function(t,e,n){},c6aa:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"j",(function(){return r})),n.d(e,"l",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"h",(function(){return m})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"a",(function(){return h}));var i=n("b775");function a(t){return Object(i["a"])({url:"api/ClientHome/GetBannerList",method:"post",data:t})}function o(t){return Object(i["a"])({url:"api/ClientHome/GetBannerInfoList/"+t,method:"post",data:null})}function r(){return Object(i["a"])({url:"api/ClientHome/GetHomeCarouselScrollTime",method:"post",data:null})}function s(t){return Object(i["a"])({url:"api/ClientHome/GetInformationActivitiesList",method:"post",data:t})}function c(t){return Object(i["a"])({url:"api/ClientHome/GetAnnouncementList",method:"post",data:t})}function u(t){return Object(i["a"])({url:"api/ClientHome/GetHomePublicityVideoPageList",method:"post",data:t})}function l(t){return Object(i["a"])({url:"api/ClientHome/GetClientHomeSearchList",method:"post",data:t})}function f(t){return Object(i["a"])({url:"api/ClientInformationActivities/GetClientInformationActivitiesList",method:"post",data:t})}function m(t){return Object(i["a"])({url:"api/ClientInformationActivities/GetClientInformationActivitiesById/"+t,method:"post",data:null})}function d(t){return Object(i["a"])({url:"api/ClientAnnouncement/GetClientHomeAnnouncementList",method:"post",data:t})}function p(t){return Object(i["a"])({url:"api/ClientAnnouncement/GetClientHomeAnnouncementById/"+t,method:"post",data:null})}function h(){return Object(i["a"])({url:"api/ClientHome/GetAboutWe",method:"post",data:null})}}}]);