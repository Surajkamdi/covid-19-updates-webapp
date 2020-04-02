(this["webpackJsonpcovid-19-update-app"]=this["webpackJsonpcovid-19-update-app"]||[]).push([[0],{210:function(e,a,t){e.exports=t(406)},215:function(e,a,t){},216:function(e,a,t){},406:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(28),o=t.n(i),c=(t(215),t(216),t(429)),s=t(431),l=t(432),d=t(433),p=t(441),m=Object(c.a)((function(e){return{root:{flexGrow:1,marginBottom:15},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function u(){var e=m();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(l.a,null,r.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),r.a.createElement(d.a,{variant:"h6",className:e.title},"Covid-19 (Corona) Updates From India"))))}var f=t(14),h=t.n(f),b=t(20),x=t(12),v=t(435),g=t(436),E=t(434),y=t(165),w=t.n(y),j=new Date,S=j.toLocaleString("en-us",{day:"2-digit"}),O=j.toLocaleString("en-us",{month:"2-digit"}),k=j.toLocaleString("en-us",{year:"numeric"})+"-"+O+"-"+S,D=Object(c.a)((function(e){return{root:{color:"#fff",maxWidth:300,background:"linear-gradient(45deg, #f44336 30%, #ef9a9a 90%)",boxShadow:"0 3px 5px 2px rgba(96, 125, 139, .3)"},title:{fontSize:14,color:"#fff","@media (max-width:414px)":{fontSize:"0.4rem"}},heading_4:{"@media (max-width:414px)":{fontSize:"4.5vw"}}}}));function I(){var e=D(),a=Object(n.useState)(),t=Object(x.a)(a,2),i=t[0],o=t[1];function c(){return s.apply(this,arguments)}function s(){return(s=Object(b.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=india",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o(t.response[0].deaths.total);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){setInterval((function(){return c()}),6e6),c()}),[]),r.a.createElement(E.a,{fixed:!0},r.a.createElement(v.a,{className:e.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(w.a,null),r.a.createElement(d.a,{variant:"h5",className:e.title,gutterBottom:!0},"Deaths"),r.a.createElement(d.a,{variant:"h4",className:e.heading_4},i||"..."))))}var N=t(440),C=t(438),T=t(77),z=t(183),R=Object(z.a)({palette:{primary:{main:"#37474f"},secondary:{main:"#000"},error:{main:T.a.A400},background:{default:"#455a64"}}}),G=t(439),L=t(166),W=t.n(L),B=Object(c.a)((function(e){return{root:{color:"#fff",maxWidth:300,background:"linear-gradient(45deg, #8bc34a 30%, #c5e1a5 90%)",border:"1px solid #64dd17",boxShadow:"0 3px 5px 2px rgba(96, 125, 139, .3)"},title:{fontSize:14,color:"#fff","@media (max-width:414px)":{fontSize:"0.4rem"}},heading_4:{"@media (max-width:414px)":{fontSize:"4.5vw"}}}}));function K(){var e=B(),a=Object(n.useState)(),t=Object(x.a)(a,2),i=t[0],o=t[1];function c(){return s.apply(this,arguments)}function s(){return(s=Object(b.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=india",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o(t.response[0].cases.recovered);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){setInterval((function(){return c()}),6e6),c()}),[]),r.a.createElement(E.a,{fixed:!0},r.a.createElement(v.a,{className:e.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(W.a,null),r.a.createElement(d.a,{variant:"h5",className:e.title,gutterBottom:!0},"Recovered"),r.a.createElement(d.a,{variant:"h4",className:e.heading_4},i||"..."))))}var A=t(167),_=t.n(A),U=Object(c.a)((function(e){return{root:{color:"#fff",maxWidth:200,background:"linear-gradient(45deg, #2196f3 30%, #90caf9 90%)",border:"1px solid #01579b",boxShadow:"0 3px 5px 2px rgba(96, 125, 139, .3)"},title:{fontSize:14,color:"#fff","@media (max-width:414px)":{fontSize:"0.4rem"}},heading_4:{"@media (max-width:414px)":{fontSize:"4.5vw"}}}}));function H(){var e=U(),a=Object(n.useState)(),t=Object(x.a)(a,2),i=t[0],o=t[1];function c(){return s.apply(this,arguments)}function s(){return(s=Object(b.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=india",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o(t.response[0].cases.total);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){setInterval((function(){return c()}),6e6),c()}),[]),r.a.createElement(E.a,{fixed:!0},r.a.createElement(v.a,{className:e.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(_.a,null),r.a.createElement(d.a,{variant:"h5",className:e.title,gutterBottom:!0},"Confirmed"),r.a.createElement(d.a,{variant:"h4",className:e.heading_4},i||"..."))))}var F=t(437),J=t(168),M=t.n(J),P=t(169),V=t.n(P),$=t(170),q=t.n($),Q=Object(c.a)((function(e){return{root:{display:"flex",background:"linear-gradient(45deg, #4fc3f7 30%, #e1f5fe 90%)",borderRadius:3,border:0,maxWidth:600,padding:"0px 30px 0px 50px",boxShadow:"0 3px 5px 2px rgba(96, 125, 139, .3)","@media (max-width:558px)":{padding:"0px 0px"}},box:{backgroundColor:"#fff",borderRadius:50},currentTime:{color:"#fff",marginTop:20,marginBottom:5,"@media (max-width:558px)":{fontSize:17}},currentDateStamp:{color:"#fff",marginTop:5,"@media (max-width:558px)":{fontSize:10}},sunnyIcon:{color:"yellow",marginTop:24,fontSize:"5vw","@media (max-width:558px)":{fontSize:"7vw"}},nightIcon:{color:"#fff",marginTop:24,fontSize:"5vw","@media (max-width:558px)":{fontSize:"7vw"}}}}));var X=function(){var e=Object(n.useState)([{date:new Date}]),a=Object(x.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(),c=Object(x.a)(o,2),s=c[0],l=c[1],p=Object(n.useState)(),m=Object(x.a)(p,2),u=m[0],f=m[1],h=Object(n.useState)("false"),b=Object(x.a)(h,2),y=b[0],w=b[1];Object(n.useEffect)((function(){setInterval((function(){return i({date:new Date},O())}),1e3),O(),function(){var e=new Date,a=e.toLocaleDateString("en-us",{weekday:"long"}),t=e.toLocaleDateString("en-us",{day:"2-digit"}),n=e.toLocaleDateString("en-us",{month:"long",year:"numeric"});f(a+", "+t+" "+n)}(),function(){var e=new Date,a=new Date;a.setHours(6);var t=new Date;t.setHours(18,30),e>a&&e<t&&w("true")}()}),[]);var j,S=Q();function O(){var e=new Date;l(e.toLocaleString("en-US",{hour:"2-digit",minute:"numeric",hour12:!0}))}return j="true"===y?r.a.createElement(V.a,{className:S.sunnyIcon}):r.a.createElement(q.a,{className:S.nightIcon}),r.a.createElement(E.a,{fixed:!0},r.a.createElement(v.a,{className:S.root,variant:"elevation"},r.a.createElement(g.a,null,j),r.a.createElement(g.a,null,r.a.createElement(d.a,{variant:"h4",className:S.currentTime},s),r.a.createElement(F.a,{variant:"middle"}),r.a.createElement(d.a,{className:S.currentDateStamp},u)),r.a.createElement(g.a,null,r.a.createElement(M.a,{value:t.date,size:100,renderNumbers:!0,hourMarksWidth:3,className:S.box}))))},Y=t(15),Z=Object(c.a)((function(e){return{root:{color:"#fff",background:"linear-gradient(45deg, #bcaaa4 30%, #d7ccc8 90%)",border:"1px solid #01579b",boxShadow:"0 3px 5px 2px rgba(96, 125, 139, .3)",maxWidth:600}}}));var ee=function(){var e=[],a=Z(),t=Object(n.useState)(),i=Object(x.a)(t,2),o=i[0],c=i[1];function s(){return l.apply(this,arguments)}function l(){return(l=Object(b.a)(h.a.mark((function a(){var t,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=usa",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 2:return t=a.sent,a.next=5,t.json();case 5:return n=a.sent,e.push({Country:n.response[0].country,Confirmed:n.response[0].cases.total,Deaths:n.response[0].deaths.total,Recovered:n.response[0].cases.recovered}),a.next=9,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=Italy",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 9:return t=a.sent,a.next=12,t.json();case 12:return n=a.sent,e.push({Country:n.response[0].country,Confirmed:n.response[0].cases.total,Deaths:n.response[0].deaths.total,Recovered:n.response[0].cases.recovered}),a.next=16,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=spain",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 16:return t=a.sent,a.next=19,t.json();case 19:return n=a.sent,e.push({Country:n.response[0].country,Confirmed:n.response[0].cases.total,Deaths:n.response[0].deaths.total,Recovered:n.response[0].cases.recovered}),a.next=23,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=china",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 23:return t=a.sent,a.next=26,t.json();case 26:return n=a.sent,e.push({Country:n.response[0].country,Confirmed:n.response[0].cases.total,Deaths:n.response[0].deaths.total,Recovered:n.response[0].cases.recovered}),a.next=30,fetch("https://covid-193.p.rapidapi.com/history?day="+k+"&country=india",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 30:return t=a.sent,a.next=33,t.json();case 33:n=a.sent,e.push({Country:n.response[0].country,Confirmed:n.response[0].cases.total,Deaths:n.response[0].deaths.total,Recovered:n.response[0].cases.recovered}),c(e);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){setInterval((function(){return s()}),6e6),s()}),[]),r.a.createElement(E.a,{fixed:!0},r.a.createElement(v.a,{className:a.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(d.a,{variant:"h6"},"Top countries vs India"),o?"":"Loading...",r.a.createElement(Y.b,{width:500,height:300,data:o,margin:{top:20,right:30,left:20,bottom:5}},r.a.createElement(Y.c,{strokeDasharray:"5 5"}),r.a.createElement(Y.h,{dataKey:"Country"}),r.a.createElement(Y.i,null),r.a.createElement(Y.g,{coordinate:{x:10,y:5}}),r.a.createElement(Y.d,null),r.a.createElement(Y.a,{dataKey:"Confirmed",fill:"#039be5"}),r.a.createElement(Y.a,{dataKey:"Deaths",fill:"#ef5350"}),r.a.createElement(Y.a,{dataKey:"Recovered",fill:"#9ccc65"})))))},ae=Object(c.a)((function(e){return{root:{color:"#fff",maxWidth:600,background:"linear-gradient(45deg, #757575 30%, #9e9e9e 90%)",border:"1px solid #01579b",boxShadow:"0 3px 5px 2px rgba(96, 125, 139, .3)"},heading_6:{"@media (max-width:414px)":{fontSize:"4.5vw"}}}}));function te(){var e=ae(),a=[],t=Object(n.useState)(),i=Object(x.a)(t,2),o=i[0],c=i[1];function s(){return l.apply(this,arguments)}function l(){return(l=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-19-data.p.rapidapi.com/totals?format=undefined",{method:"GET",headers:{"x-rapidapi-host":"covid-19-data.p.rapidapi.com","x-rapidapi-key":"6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.push({name:"Deaths",value:parseInt(n[0].deaths),fill:"#ff1744"}),a.push({name:"Recovered",value:parseInt(n[0].recovered),fill:"#8bc34a"}),a.push({name:"Confirmed",value:parseInt(n[0].confirmed),fill:"#2196f3"}),a.push({name:"Critical",value:parseInt(n[0].critical),fill:"#f06292"}),c(a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s(),setInterval((function(){return s()}),6e6)}),[]),r.a.createElement(E.a,{fixed:!0},r.a.createElement(v.a,{className:e.root,variant:"outlined"},r.a.createElement(g.a,null,r.a.createElement(d.a,{variant:"h6",className:e.heading_6},"Global Report"),o?"":"Loading...",r.a.createElement(Y.f,{width:400,height:300},r.a.createElement(Y.e,{dataKey:"value",nameKey:"name",isAnimationActive:!0,data:o,cx:230,cy:120,outerRadius:100,innerRadius:60,fill:"#8884d8",legendType:"circle",label:!0}),r.a.createElement(Y.g,null),r.a.createElement(Y.d,null)))))}var ne=function(){return r.a.createElement(C.a,{theme:R},r.a.createElement(G.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(E.a,{fixed:!0},r.a.createElement(N.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:12,lg:6},r.a.createElement(X,null)),r.a.createElement(N.a,{item:!0,xs:4,lg:2},r.a.createElement(I,null)),r.a.createElement(N.a,{item:!0,xs:4,lg:2},r.a.createElement(K,null)),r.a.createElement(N.a,{item:!0,xs:4,lg:2},r.a.createElement(H,null))),r.a.createElement(N.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:12,lg:6},r.a.createElement(te,null)),r.a.createElement(N.a,{item:!0,xs:12,lg:6},r.a.createElement(ee,null))),r.a.createElement(N.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:12,lg:12,style:{fontSize:10,marginTop:30,color:"#fff"}},r.a.createElement("span",{role:"img","aria-label":"mobile"},"\ud83d\udcf1"),"Best Viewed in Desktop and Tablet. ",r.a.createElement("span",{role:"img","aria-label":"warning"},"\u2757"),"Use Landscape mode on Android/iphone",r.a.createElement("br",null),r.a.createElement("span",{role:"img","aria-label":"hacker-boy"},"\ud83d\udc69\u200d\ud83d\udcbb"),"Designed & Developed by Suraj Kamdi :: I",r.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83e\udde1"),"Open-Source :: (Real-Time updates from Rapid API)",r.a.createElement("span",{role:"img","aria-label":"warning"},"\u2757")," Note: This dashboard is only for informational purpose. Please verify the data from government official resource before publishing/posting.")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=t(107),ie=t(182);re.a.initialize("UA-162326038-1"),re.a.pageview(window.location.pathname+window.location.search),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Covid-19 Updates from India :: Suraj Kamdi"),r.a.createElement("meta",{name:"description",content:"Covid-19 (Corona) Live Updates From India.  WebApp is Designed and Developed by Suraj Kamdi Web site created using create-react-app"}),r.a.createElement("link",{rel:"canonical",href:"https://surajkamdi.github.io/covid-19-updates-webapp/"})),r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.7cb70660.chunk.js.map