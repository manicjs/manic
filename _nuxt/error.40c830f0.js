import{_ as i}from"./_plugin-vue_export-helper.c27b6911.js";import{o as r,c as s,a as t,t as o}from"./entry.0935a0d2.js";const c={layout:"errorLayout",props:{error:{type:Object,default:null}},data(){return{Error:{noPage:"404 Not Found",other:"An error occurred",createdAt:new Date,body:"The page you are looking for could not be found."}}},head(){return{title:this.error.statusCode===404?this.pageNotFound:this.otherError}}},d={class:"main-article two-thirds column"},l={class:"article-layer"},_={key:0,id:"main-title",style:{"font-size":"5em"}},u={key:1,id:"main-title",style:{"font-size":"5em"}},p=["title"],h={id:"main-body",style:{"font-size":"3em"}};function y(n,f,a,m,e,E){return r(),s("div",d,[t("div",l,[a.error.statusCode===404?(r(),s("h1",_,[t("p",null,o(e.Error.noPage),1)])):(r(),s("h1",u,[t("p",null,o(e.Error.other),1)])),t("p",{id:"main-date",title:[e.Error.createdAt]},o(e.Error.createdAt),9,p),t("p",h,o(e.Error.body),1)])])}const k=i(c,[["render",y],["__scopeId","data-v-f1d00eaa"]]);export{k as default};