import p from"./ContentRenderer.d0657c47.js";import u from"./ContentDoc.f887d116.js";import{a as _,W as c,C as f,t as h,o as A,j as N,U as i,w as g,X as t,Y as a,Z as r,u as n,$ as s}from"./entry.3b7bf3c8.js";import"./ContentRendererMarkdown.a811da2a.js";import"./index.a6ef77ff.js";import"./head.a3d5ea41.js";import"./ContentQuery.cedf9fed.js";import"./asyncData.160f321d.js";const b={id:"article-timestamp"},w=["datetime","title"],C=t("br",{class:"bigScreen"},null,-1),$=t("span",{class:"mobileScreen"},", ",-1),x=["datetime","title"],I=_({__name:"index",setup(k){const{t:l}=c();return f(),h({title:l("get-started")}),(o,B)=>{const m=p,d=u;return A(),N("main",null,[i(d,{path:"/get-started"},{default:g(({doc:e})=>[t("article",null,[t("header",null,[t("h1",null,a(e.title),1),t("section",b,[t("i",null,[t("b",null,a(o.$t("created")),1)]),r(),t("time",{datetime:e.createdAt,title:e.createdAt},a(n(s)(e.createdAt).fromNow()),9,w),C,$,t("i",null,[t("b",null,a(o.$t("updated")),1)]),r(),t("time",{datetime:e.updatedAt,title:e.updatedAt},a(typeof e.updatedAt=="string"?n(s)(e.updatedAt).fromNow():n(s)(e.updatedAt[e.updatedAt.length-1]).fromNow()),9,x)])]),i(m,{value:e},null,8,["value"])])]),_:1})])}}});export{I as default};