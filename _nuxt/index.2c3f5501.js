import p from"./ContentRenderer.210e23a6.js";import u from"./ContentDoc.7d5d9229.js";import{g as _,k as c,u as f,o as h,c as A,b as o,w as g,a as t,t as a,d as l,i as n,l as s}from"./entry.1cf70a84.js";import"./ContentRendererMarkdown.381dc971.js";import"./index.a6ef77ff.js";import"./head.11c0f08b.js";import"./ContentQuery.9b43382f.js";import"./asyncData.67c00262.js";const b={id:"article-timestamp"},N=["datetime","title"],w=t("br",{class:"bigScreen"},null,-1),k=t("span",{class:"mobileScreen"},", ",-1),C=["datetime","title"],I=_({__name:"index",setup($){const{t:r}=c();return f({title:r("get-started")}),(i,x)=>{const m=p,d=u;return h(),A("main",null,[o(d,{path:"/get-started"},{default:g(({doc:e})=>[t("article",null,[t("header",null,[t("h1",null,a(e.title),1),t("section",b,[t("i",null,[t("b",null,a(i.$t("created")),1)]),l(),t("time",{datetime:e.createdAt,title:e.createdAt},a(n(s)(e.createdAt).fromNow()),9,N),w,k,t("i",null,[t("b",null,a(i.$t("updated")),1)]),l(),t("time",{datetime:e.updatedAt,title:e.updatedAt},a(typeof e.updatedAt=="string"?n(s)(e.updatedAt).fromNow():n(s)(e.updatedAt[e.updatedAt.length-1]).fromNow()),9,C)])]),o(m,{value:e},null,8,["value"])])]),_:1})])}}});export{I as default};