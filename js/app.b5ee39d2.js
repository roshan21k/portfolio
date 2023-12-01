(function(){"use strict";var A={80:function(A,a,i){var t=i(963),e=i(252);function n(A,a,i,n,s,o){const c=(0,e.up)("nav-bar-vue"),l=(0,e.up)("hamburger-menu-vue"),r=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.wy)((0,e.Wm)(c,{onMobileView:o.handleMobile},null,8,["onMobileView"]),[[t.F8,!s.isMobile]]),(0,e.wy)((0,e.Wm)(l,null,null,512),[[t.F8,s.isMobile]]),(0,e.Wm)(r)],64)}var s=i(577);const o=A=>((0,e.dD)("data-v-5da4854d"),A=A(),(0,e.Cn)(),A),c={style:{height:"75px"}},l=o((()=>(0,e._)("h1",null,"Roshan",-1))),r=o((()=>(0,e._)("div",{class:"bar"},null,-1))),g=o((()=>(0,e._)("div",{class:"bar"},null,-1))),d=o((()=>(0,e._)("div",{class:"bar"},null,-1))),v=[r,g,d];function p(A,a,i,t,n,o){const r=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("div",c,[(0,e._)("header",null,[l,(0,e._)("button",{onClick:a[0]||(a[0]=A=>n.isOpen=!n.isOpen),class:"hamburger-button"},v)])]),(0,e._)("nav",null,[(0,e._)("ul",{class:(0,s.C_)({open:n.isOpen,close:!n.isOpen}),onClick:a[1]||(a[1]=A=>n.isOpen=!n.isOpen)},[(0,e.Wm)(r,{class:"link",to:{name:"home"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Home")])),_:1}),(0,e.Wm)(r,{class:"link",to:{name:"skill"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Skills")])),_:1}),(0,e.Wm)(r,{class:"link",to:{name:"project"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Projects")])),_:1}),(0,e.Wm)(r,{class:"link",to:{name:"contact"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Contact")])),_:1})],2)])])}var m={data(){return{isOpen:!1}}},u=i(744);const b=(0,u.Z)(m,[["render",p],["__scopeId","data-v-5da4854d"]]);var h=b;const f=A=>((0,e.dD)("data-v-c57279f6"),A=A(),(0,e.Cn)(),A),E={style:{height:"75px"}},k=f((()=>(0,e._)("h1",null,"Roshan",-1)));function B(A,a,i,t,n,s){const o=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",E,[(0,e._)("header",null,[k,(0,e._)("nav",null,[(0,e._)("ul",null,[(0,e.Wm)(o,{class:"link",to:{name:"home"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Home")])),_:1}),(0,e.Wm)(o,{class:"link",to:{name:"skill"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Skills")])),_:1}),(0,e.Wm)(o,{class:"link",to:{name:"project"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Projects")])),_:1})])]),(0,e._)("button",{onClick:a[0]||(a[0]=a=>A.$router.push("/contact"))},"Contact")])])}var I={data(){return{isMobile:!1}},emits:["mobile-view"],methods:{checkIsMobile(){window.innerWidth<=764?(this.isMobile=!0,this.$emit("mobile-view",this.isMobile)):(this.isMobile=!1,this.$emit("mobile-view",this.isMobile))}},created(){setInterval((()=>{this.blink?this.blink=!1:this.blink=!0}),500),this.checkIsMobile(),window.addEventListener("resize",this.checkIsMobile)}};const w=(0,u.Z)(I,[["render",B],["__scopeId","data-v-c57279f6"]]);var C=w,y={components:{NavBarVue:C,HamburgerMenuVue:h},data(){return{isMobile:!1}},methods:{handleMobile(A){this.isMobile=!!A}}};const M=(0,u.Z)(y,[["render",n]]);var U=M,j=i(201),G=i.p+"img/python.0f62c929.png",O=i.p+"img/javascript.590c040f.png";const L=A=>((0,e.dD)("data-v-70895c04"),A=A(),(0,e.Cn)(),A),S={class:"container"},R={class:"info"},W={class:"job"},T={class:"highlight"},Z=L((()=>(0,e._)("span",{class:"highlight"}," Data Analyst",-1))),D=L((()=>(0,e._)("img",{class:"python",src:G,alt:""},null,-1))),x=L((()=>(0,e._)("img",{class:"javascript",src:O,alt:""},null,-1)));function Y(A,a,i,t,n,o){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",S,[(0,e._)("div",R,[(0,e._)("span",{class:(0,s.C_)({"hello-big":!n.isMobile,"hello-small":n.isMobile})},"Hello! I'm Roshan",2),(0,e._)("span",W,[(0,e.Uk)("A "),(0,e._)("span",T," Full Stack "+(0,s.zw)(n.text)+" Developer ",1),(0,e.Uk)(" and "),Z,(0,e.Uk)("..."),(0,e._)("span",{class:(0,s.C_)({hide:n.blink})},"|",2)])])]),D,x],64)}var H={name:"HomeView",components:{},data(){return{blink:!0,text:"</>",isMobile:!1}},methods:{checkIsMobile(){window.innerWidth<=764?this.isMobile=!0:this.isMobile=!1}},created(){setInterval((()=>{this.blink?this.blink=!1:this.blink=!0}),500),this.checkIsMobile(),window.addEventListener("resize",this.checkIsMobile)}};const z=(0,u.Z)(H,[["render",Y],["__scopeId","data-v-70895c04"]]);var V=z,F=i.p+"img/grocery-store.750bdb72.png",Q=i.p+"img/todo list.c98d86b0.png",P=i.p+"img/timer.2b176cd6.png",J=i.p+"img/simon.3453eb49.png";const _=A=>((0,e.dD)("data-v-15cc034e"),A=A(),(0,e.Cn)(),A),N=_((()=>(0,e._)("div",{class:"my-proj"},[(0,e._)("span",null,"My Projects")],-1))),X={class:"container"},K=_((()=>(0,e._)("img",{src:F,alt:"Grocery Store Image"},null,-1))),q=_((()=>(0,e._)("figcaption",null,"Grocery Store V2",-1))),$=_((()=>(0,e._)("p",null," Multi-user grocery store web app, leveraging Flask and Vue CLI, backed by Redis and Celery. Shop collaboratively, manage orders, and stay updated in real-time ",-1))),AA=_((()=>(0,e._)("span",{class:"view-project"},"View Project ",-1))),aA=[K,q,$,AA],iA=_((()=>(0,e._)("img",{src:Q,alt:"Todo List Image"},null,-1))),tA=_((()=>(0,e._)("figcaption",null,"Todo List",-1))),eA=_((()=>(0,e._)("p",null," A web-based to-do list application powered by Node.js and Express.js, designed to help users efficiently manage their tasks and stay organized. ",-1))),nA=_((()=>(0,e._)("span",{class:"view-project"},"View Project ",-1))),sA=[iA,tA,eA,nA],oA=_((()=>(0,e._)("img",{src:P,alt:"Timer app Image"},null,-1))),cA=_((()=>(0,e._)("figcaption",null,"Timer",-1))),lA=_((()=>(0,e._)("p",null," A sleek timer app with beautiful design and plain JavaScript for efficient DOM manipulation. Stay organized and manage your time effectively. ",-1))),rA=_((()=>(0,e._)("span",{class:"view-project"},"View Project ",-1))),gA=[oA,cA,lA,rA],dA=_((()=>(0,e._)("img",{src:J,alt:"Simon Game Image"},null,-1))),vA=_((()=>(0,e._)("figcaption",null,"Simon",-1))),pA=_((()=>(0,e._)("p",null," Enjoy the classic Simon Game, elevated with jQuery for interactive gameplay. Test memory, follow patterns, and level up in this engaging challenge. ",-1))),mA=_((()=>(0,e._)("span",{class:"view-project"},"View Project ",-1))),uA=[dA,vA,pA,mA];function bA(A,a,i,t,n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[N,(0,e._)("div",X,[(0,e._)("div",{class:"box",onClick:a[0]||(a[0]=A=>s.redirectToURL("https://youtu.be/W4YQrcDyZTc"))},aA),(0,e._)("div",{class:"box",onClick:a[1]||(a[1]=A=>s.redirectToURL("https://todolist2-0-lqu8.onrender.com/"))},sA),(0,e._)("div",{class:"box",onClick:a[2]||(a[2]=A=>s.redirectToURL("https://roshan21k.github.io/timer/"))},gA),(0,e._)("div",{class:"box",onClick:a[3]||(a[3]=A=>s.redirectToURL("https://roshan21k.github.io/simon/"))},uA)])],64)}var hA={methods:{redirectToURL(A){window.open(A,"_blank")}}};const fA=(0,u.Z)(hA,[["render",bA],["__scopeId","data-v-15cc034e"]]);var EA=fA,kA=i.p+"img/vuejs.a6ee96e5.png",BA=i.p+"img/react.f05c4554.png",IA=i.p+"img/html.9bdc086a.png",wA=i.p+"img/css.37e91ffa.png",CA=i.p+"img/nodejs.37cdf96e.png",yA=i.p+"img/flask.a9bc5044.png",MA=i.p+"img/celery.58214955.png",UA=i.p+"img/express.c0e95830.png",jA=i.p+"img/sqlite.986d0d16.png",GA=i.p+"img/mongodb.83f6e87f.png",OA=i.p+"img/redis.5a14c13c.png",LA=i.p+"img/github.687d6c69.png";const SA=(0,e.uE)('<div class="container" data-v-299b2e14><div class="box" data-v-299b2e14><h2 data-v-299b2e14>Front-End</h2><div class="img" data-v-299b2e14><div class="image" data-v-299b2e14><img src="'+kA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>VueJS</figcaption></div><div class="image" data-v-299b2e14><img src="'+BA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>ReactJS</figcaption></div><div class="image" data-v-299b2e14><img src="'+IA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>HTML</figcaption></div><div class="image" data-v-299b2e14><img src="'+wA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>CSS</figcaption></div></div></div><div class="box" data-v-299b2e14><h2 data-v-299b2e14>Back-End</h2><div class="img" data-v-299b2e14><div class="image" data-v-299b2e14><img src="'+CA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>NodeJS</figcaption></div><div class="image" data-v-299b2e14><img src="'+yA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>Flask</figcaption></div><div class="image" data-v-299b2e14><img src="'+MA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>Celery</figcaption></div><div class="image" data-v-299b2e14><img src="'+UA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>express</figcaption></div></div></div><div class="box" data-v-299b2e14><h2 data-v-299b2e14>Database and Others</h2><div class="img" data-v-299b2e14><div class="image" data-v-299b2e14><img src="'+jA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>SQLite</figcaption></div><div class="image" data-v-299b2e14><img src="'+GA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>MongoDB</figcaption></div><div class="image" data-v-299b2e14><img src="'+OA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>Redis</figcaption></div><div class="image" data-v-299b2e14><img src="'+LA+'" alt="" data-v-299b2e14><figcaption data-v-299b2e14>GitHub</figcaption></div></div></div></div>',1);function RA(A,a,i,t,n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[SA,(0,e.Uk)(" = ")],64)}var WA={};const TA=(0,u.Z)(WA,[["render",RA],["__scopeId","data-v-299b2e14"]]);var ZA=TA,DA="data:image/png;base64,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",xA=i.p+"img/github.4f994f1f.png",YA=i.p+"img/instagram.a9bc5d55.png",HA=i.p+"img/resume.bf5a9d9b.png";const zA=(0,e.uE)('<h1 class="title" data-v-6c8a907c>Let&#39;s Get Connected!</h1><div class="container" data-v-6c8a907c><a href="mailto:k.roshan21k@gmail.com" data-v-6c8a907c><div class="image" data-v-6c8a907c><img src="'+DA+'" alt="" data-v-6c8a907c><figcaption data-v-6c8a907c>Gmail</figcaption></div></a><a href="https://github.com/roshan21k" target="_blank" data-v-6c8a907c><div class="image" data-v-6c8a907c><img src="'+xA+'" alt="" data-v-6c8a907c><figcaption data-v-6c8a907c>GitHub</figcaption></div></a><a href="https://www.instagram.com/roshan21k_/?igshid=MmlzYWVINDQ5Yg" target="_blank" data-v-6c8a907c><div class="image" data-v-6c8a907c><img src="'+YA+'" alt="" data-v-6c8a907c><figcaption data-v-6c8a907c>Instagram</figcaption></div></a><a href="https://drive.google.com/file/d/12Vb-kNEpBJhEYA6zJDca5Os7PYE9FrQM/view?usp=sharing" target="_blank" data-v-6c8a907c><div class="image" data-v-6c8a907c><img src="'+HA+'" alt="" data-v-6c8a907c><figcaption data-v-6c8a907c>Resume</figcaption></div></a></div>',2);function VA(A,a,i,t,e,n){return zA}var FA={};const QA=(0,u.Z)(FA,[["render",VA],["__scopeId","data-v-6c8a907c"]]);var PA=QA;const JA=A=>((0,e.dD)("data-v-2b23b228"),A=A(),(0,e.Cn)(),A),_A={class:"center"},NA={class:"not-found"},XA=JA((()=>(0,e._)("span",{class:"number"},"404",-1))),KA=JA((()=>(0,e._)("span",null,"The page you are looking for is not found in our server!",-1)));function qA(A,a,i,t,n,s){const o=(0,e.up)("spa");return(0,e.wg)(),(0,e.iD)("div",_A,[(0,e._)("div",NA,[XA,(0,e.Wm)(o,{class:"text"},{default:(0,e.w5)((()=>[(0,e.Uk)("Not Found")])),_:1}),KA])])}var $A={};const Aa=(0,u.Z)($A,[["render",qA],["__scopeId","data-v-2b23b228"]]);var aa=Aa;const ia=[{path:"/",name:"home",component:V},{path:"/skill",name:"skill",component:ZA},{path:"/project",name:"project",component:EA},{path:"/contact",name:"contact",component:PA},{path:"/:catchAll(.*)",component:aa}],ta=(0,j.p7)({history:(0,j.PO)("/portfolio/"),base:"/portfolio/",routes:ia});var ea=ta;(0,t.ri)(U).use(ea).mount("#app")}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={exports:{}};return A[t](n,n.exports,i),n.exports}i.m=A,function(){var A=[];i.O=function(a,t,e,n){if(!t){var s=1/0;for(r=0;r<A.length;r++){t=A[r][0],e=A[r][1],n=A[r][2];for(var o=!0,c=0;c<t.length;c++)(!1&n||s>=n)&&Object.keys(i.O).every((function(A){return i.O[A](t[c])}))?t.splice(c--,1):(o=!1,n<s&&(s=n));if(o){A.splice(r--,1);var l=e();void 0!==l&&(a=l)}}return a}n=n||0;for(var r=A.length;r>0&&A[r-1][2]>n;r--)A[r]=A[r-1];A[r]=[t,e,n]}}(),function(){i.d=function(A,a){for(var t in a)i.o(a,t)&&!i.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:a[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){i.o=function(A,a){return Object.prototype.hasOwnProperty.call(A,a)}}(),function(){i.p="/portfolio/"}(),function(){var A={143:0};i.O.j=function(a){return 0===A[a]};var a=function(a,t){var e,n,s=t[0],o=t[1],c=t[2],l=0;if(s.some((function(a){return 0!==A[a]}))){for(e in o)i.o(o,e)&&(i.m[e]=o[e]);if(c)var r=c(i)}for(a&&a(t);l<s.length;l++)n=s[l],i.o(A,n)&&A[n]&&A[n][0](),A[n]=0;return i.O(r)},t=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(80)}));t=i.O(t)})();
//# sourceMappingURL=app.b5ee39d2.js.map