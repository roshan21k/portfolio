(function(){"use strict";var A={461:function(A,a,i){var t=i(963),n=i(252);function e(A,a,i,e,c,s){const o=(0,n.up)("nav-bar-vue"),l=(0,n.up)("hamburger-menu-vue"),d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n.Wm)(o,{onMobileView:s.handleMobile},null,8,["onMobileView"]),[[t.F8,!c.isMobile]]),(0,n.wy)((0,n.Wm)(l,null,null,512),[[t.F8,c.isMobile]]),(0,n.Wm)(d)],64)}var c=i(577);const s=A=>((0,n.dD)("data-v-5da4854d"),A=A(),(0,n.Cn)(),A),o={style:{height:"75px"}},l=s((()=>(0,n._)("h1",null,"Roshan",-1))),d=s((()=>(0,n._)("div",{class:"bar"},null,-1))),r=s((()=>(0,n._)("div",{class:"bar"},null,-1))),g=s((()=>(0,n._)("div",{class:"bar"},null,-1))),v=[d,r,g];function p(A,a,i,t,e,s){const d=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[(0,n._)("header",null,[l,(0,n._)("button",{onClick:a[0]||(a[0]=A=>e.isOpen=!e.isOpen),class:"hamburger-button"},v)])]),(0,n._)("nav",null,[(0,n._)("ul",{class:(0,c.C_)({open:e.isOpen,close:!e.isOpen}),onClick:a[1]||(a[1]=A=>e.isOpen=!e.isOpen)},[(0,n.Wm)(d,{class:"link",to:{name:"home"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Wm)(d,{class:"link",to:{name:"skill"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Skills")])),_:1}),(0,n.Wm)(d,{class:"link",to:{name:"project"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Projects")])),_:1}),(0,n.Wm)(d,{class:"link",to:{name:"contact"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Contact")])),_:1})],2)])])}var m={data(){return{isOpen:!1}}},u=i(744);const f=(0,u.Z)(m,[["render",p],["__scopeId","data-v-5da4854d"]]);var h=f;const b=A=>((0,n.dD)("data-v-c57279f6"),A=A(),(0,n.Cn)(),A),E={style:{height:"75px"}},B=b((()=>(0,n._)("h1",null,"Roshan",-1)));function k(A,a,i,t,e,c){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("header",null,[B,(0,n._)("nav",null,[(0,n._)("ul",null,[(0,n.Wm)(s,{class:"link",to:{name:"home"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Wm)(s,{class:"link",to:{name:"skill"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Skills")])),_:1}),(0,n.Wm)(s,{class:"link",to:{name:"project"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Projects")])),_:1})])]),(0,n._)("button",{onClick:a[0]||(a[0]=a=>A.$router.push("/contact"))},"Contact")])])}var I={data(){return{isMobile:!1}},emits:["mobile-view"],methods:{checkIsMobile(){window.innerWidth<=764?(this.isMobile=!0,this.$emit("mobile-view",this.isMobile)):(this.isMobile=!1,this.$emit("mobile-view",this.isMobile))}},created(){setInterval((()=>{this.blink?this.blink=!1:this.blink=!0}),500),this.checkIsMobile(),window.addEventListener("resize",this.checkIsMobile)}};const w=(0,u.Z)(I,[["render",k],["__scopeId","data-v-c57279f6"]]);var C=w,y={components:{NavBarVue:C,HamburgerMenuVue:h},data(){return{isMobile:!1}},methods:{handleMobile(A){this.isMobile=!!A}}};const M=(0,u.Z)(y,[["render",e]]);var j=M,U=i(201),G=i.p+"img/python.0f62c929.png",O=i.p+"img/javascript.590c040f.png";const S=A=>((0,n.dD)("data-v-70895c04"),A=A(),(0,n.Cn)(),A),L={class:"container"},W={class:"info"},R={class:"job"},x={class:"highlight"},Z=S((()=>(0,n._)("span",{class:"highlight"}," Data Analyst",-1))),D=S((()=>(0,n._)("img",{class:"python",src:G,alt:""},null,-1))),T=S((()=>(0,n._)("img",{class:"javascript",src:O,alt:""},null,-1)));function H(A,a,i,t,e,s){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",L,[(0,n._)("div",W,[(0,n._)("span",{class:(0,c.C_)({"hello-big":!e.isMobile,"hello-small":e.isMobile})},"Hello! I'm Roshan",2),(0,n._)("span",R,[(0,n.Uk)("A "),(0,n._)("span",x," Full Stack "+(0,c.zw)(e.text)+" Developer ",1),(0,n.Uk)(" and "),Z,(0,n.Uk)("..."),(0,n._)("span",{class:(0,c.C_)({hide:e.blink})},"|",2)])])]),D,T],64)}var Y={name:"HomeView",components:{},data(){return{blink:!0,text:"</>",isMobile:!1}},methods:{checkIsMobile(){window.innerWidth<=764?this.isMobile=!0:this.isMobile=!1}},created(){setInterval((()=>{this.blink?this.blink=!1:this.blink=!0}),500),this.checkIsMobile(),window.addEventListener("resize",this.checkIsMobile)}};const z=(0,u.Z)(Y,[["render",H],["__scopeId","data-v-70895c04"]]);var F=z,V=i.p+"img/grocery-store.750bdb72.png",Q=i.p+"img/todo list.c98d86b0.png",_=i.p+"img/timer.2b176cd6.png",J=i.p+"img/simon.3453eb49.png";const P=A=>((0,n.dD)("data-v-408cf029"),A=A(),(0,n.Cn)(),A),N=P((()=>(0,n._)("div",{class:"my-proj"},[(0,n._)("span",null,"My Projects")],-1))),X={class:"container"},K=P((()=>(0,n._)("div",{class:"box"},[(0,n._)("img",{src:V,alt:"Grocery Store Image"}),(0,n._)("figcaption",null,"Grocery Store V2"),(0,n._)("p",null," Multi-user grocery store web app, leveraging Flask and Vue CLI, backed by Redis and Celery. Shop collaboratively, manage orders, and stay updated in real-time "),(0,n._)("span",{class:"view-project"},"Coming Soon ")],-1))),q=P((()=>(0,n._)("img",{src:Q,alt:"Todo List Image"},null,-1))),$=P((()=>(0,n._)("figcaption",null,"Todo List",-1))),AA=P((()=>(0,n._)("p",null," A web-based to-do list application powered by Node.js and Express.js, designed to help users efficiently manage their tasks and stay organized. ",-1))),aA=P((()=>(0,n._)("span",{class:"view-project"},"View Project ",-1))),iA=[q,$,AA,aA],tA=P((()=>(0,n._)("img",{src:_,alt:"Timer app Image"},null,-1))),nA=P((()=>(0,n._)("figcaption",null,"Timer",-1))),eA=P((()=>(0,n._)("p",null," A sleek timer app with beautiful design and plain JavaScript for efficient DOM manipulation. Stay organized and manage your time effectively. ",-1))),cA=P((()=>(0,n._)("span",{class:"view-project"},"View Project ",-1))),sA=[tA,nA,eA,cA],oA=P((()=>(0,n._)("img",{src:J,alt:"Simon Game Image"},null,-1))),lA=P((()=>(0,n._)("figcaption",null,"Simon",-1))),dA=P((()=>(0,n._)("p",null," Enjoy the classic Simon Game, elevated with jQuery for interactive gameplay. Test memory, follow patterns, and level up in this engaging challenge. ",-1))),rA=P((()=>(0,n._)("span",{class:"view-project"},"View Project ",-1))),gA=[oA,lA,dA,rA];function vA(A,a,i,t,e,c){return(0,n.wg)(),(0,n.iD)(n.HY,null,[N,(0,n._)("div",X,[K,(0,n._)("div",{class:"box",onClick:a[0]||(a[0]=A=>c.redirectToURL("https://todolist2-0-lqu8.onrender.com/"))},iA),(0,n._)("div",{class:"box",onClick:a[1]||(a[1]=A=>c.redirectToURL("https://roshan21k.github.io/timer/"))},sA),(0,n._)("div",{class:"box",onClick:a[2]||(a[2]=A=>c.redirectToURL("https://roshan21k.github.io/simon/"))},gA)])],64)}var pA={methods:{redirectToURL(A){window.open(A,"_blank")}}};const mA=(0,u.Z)(pA,[["render",vA],["__scopeId","data-v-408cf029"]]);var uA=mA,fA=i.p+"img/vuejs.a6ee96e5.png",hA=i.p+"img/html.9bdc086a.png",bA=i.p+"img/css.37e91ffa.png",EA=i.p+"img/js.dc19f33f.png",BA=i.p+"img/nodejs.37cdf96e.png",kA=i.p+"img/flask.a9bc5044.png",IA=i.p+"img/celery.58214955.png",wA=i.p+"img/express.c0e95830.png",CA=i.p+"img/sqlite.986d0d16.png",yA=i.p+"img/mongodb.83f6e87f.png",MA=i.p+"img/redis.5a14c13c.png",jA=i.p+"img/github.687d6c69.png";const UA=(0,n.uE)('<div class="container" data-v-c3491296><div class="box" data-v-c3491296><h2 data-v-c3491296>Front-End</h2><div class="img" data-v-c3491296><div class="image" data-v-c3491296><img src="'+fA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>VueJS</figcaption></div><div class="image" data-v-c3491296><img src="'+hA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>HTML</figcaption></div><div class="image" data-v-c3491296><img src="'+bA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>CSS</figcaption></div><div class="image" data-v-c3491296><img src="'+EA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>JS</figcaption></div></div></div><div class="box" data-v-c3491296><h2 data-v-c3491296>Back-End</h2><div class="img" data-v-c3491296><div class="image" data-v-c3491296><img src="'+BA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>NodeJS</figcaption></div><div class="image" data-v-c3491296><img src="'+kA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>Flask</figcaption></div><div class="image" data-v-c3491296><img src="'+IA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>Celery</figcaption></div><div class="image" data-v-c3491296><img src="'+wA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>express</figcaption></div></div></div><div class="box" data-v-c3491296><h2 data-v-c3491296>Database and Others</h2><div class="img" data-v-c3491296><div class="image" data-v-c3491296><img src="'+CA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>SQLite</figcaption></div><div class="image" data-v-c3491296><img src="'+yA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>MongoDB</figcaption></div><div class="image" data-v-c3491296><img src="'+MA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>Redis</figcaption></div><div class="image" data-v-c3491296><img src="'+jA+'" alt="" data-v-c3491296><figcaption data-v-c3491296>GitHub</figcaption></div></div></div></div>',1);function GA(A,a,i,t,e,c){return(0,n.wg)(),(0,n.iD)(n.HY,null,[UA,(0,n.Uk)(" = ")],64)}var OA={};const SA=(0,u.Z)(OA,[["render",GA],["__scopeId","data-v-c3491296"]]);var LA=SA,WA="data:image/png;base64,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",RA=i.p+"img/github.4f994f1f.png",xA=i.p+"img/instagram.a9bc5d55.png",ZA=i.p+"img/resume.bf5a9d9b.png";const DA=(0,n.uE)('<h1 class="title" data-v-a80dc910>Let&#39;s Get Connected!</h1><div class="container" data-v-a80dc910><a href="mailto:k.roshan21k@gmail.com" data-v-a80dc910><div class="image" data-v-a80dc910><img src="'+WA+'" alt="" data-v-a80dc910><figcaption data-v-a80dc910>Gmail</figcaption></div></a><a href="https://github.com/roshan21k" target="_blank" data-v-a80dc910><div class="image" data-v-a80dc910><img src="'+RA+'" alt="" data-v-a80dc910><figcaption data-v-a80dc910>GitHub</figcaption></div></a><a href="https://www.instagram.com/roshan21k_/?igshid=MmlzYWVINDQ5Yg" target="_blank" data-v-a80dc910><div class="image" data-v-a80dc910><img src="'+xA+'" alt="" data-v-a80dc910><figcaption data-v-a80dc910>Instagram</figcaption></div></a><a href="https://drive.google.com/file/d/11czmZEW6vOzxJbxtf04cvGj-y3bvBj7D/view?usp=drive_link" target="_blank" data-v-a80dc910><div class="image" data-v-a80dc910><img src="'+ZA+'" alt="" data-v-a80dc910><figcaption data-v-a80dc910>Resume</figcaption></div></a></div>',2);function TA(A,a,i,t,n,e){return DA}var HA={};const YA=(0,u.Z)(HA,[["render",TA],["__scopeId","data-v-a80dc910"]]);var zA=YA;const FA=A=>((0,n.dD)("data-v-2b23b228"),A=A(),(0,n.Cn)(),A),VA={class:"center"},QA={class:"not-found"},_A=FA((()=>(0,n._)("span",{class:"number"},"404",-1))),JA=FA((()=>(0,n._)("span",null,"The page you are looking for is not found in our server!",-1)));function PA(A,a,i,t,e,c){const s=(0,n.up)("spa");return(0,n.wg)(),(0,n.iD)("div",VA,[(0,n._)("div",QA,[_A,(0,n.Wm)(s,{class:"text"},{default:(0,n.w5)((()=>[(0,n.Uk)("Not Found")])),_:1}),JA])])}var NA={};const XA=(0,u.Z)(NA,[["render",PA],["__scopeId","data-v-2b23b228"]]);var KA=XA;const qA=[{path:"/",name:"home",component:F},{path:"/skill",name:"skill",component:LA},{path:"/project",name:"project",component:uA},{path:"/contact",name:"contact",component:zA},{path:"/:catchAll(.*)",component:KA}],$A=(0,U.p7)({history:(0,U.PO)("/portfolio/"),base:"/portfolio/",routes:qA});var Aa=$A;(0,t.ri)(j).use(Aa).mount("#app")}},a={};function i(t){var n=a[t];if(void 0!==n)return n.exports;var e=a[t]={exports:{}};return A[t](e,e.exports,i),e.exports}i.m=A,function(){var A=[];i.O=function(a,t,n,e){if(!t){var c=1/0;for(d=0;d<A.length;d++){t=A[d][0],n=A[d][1],e=A[d][2];for(var s=!0,o=0;o<t.length;o++)(!1&e||c>=e)&&Object.keys(i.O).every((function(A){return i.O[A](t[o])}))?t.splice(o--,1):(s=!1,e<c&&(c=e));if(s){A.splice(d--,1);var l=n();void 0!==l&&(a=l)}}return a}e=e||0;for(var d=A.length;d>0&&A[d-1][2]>e;d--)A[d]=A[d-1];A[d]=[t,n,e]}}(),function(){i.d=function(A,a){for(var t in a)i.o(a,t)&&!i.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:a[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){i.o=function(A,a){return Object.prototype.hasOwnProperty.call(A,a)}}(),function(){i.p="/portfolio/"}(),function(){var A={143:0};i.O.j=function(a){return 0===A[a]};var a=function(a,t){var n,e,c=t[0],s=t[1],o=t[2],l=0;if(c.some((function(a){return 0!==A[a]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(o)var d=o(i)}for(a&&a(t);l<c.length;l++)e=c[l],i.o(A,e)&&A[e]&&A[e][0](),A[e]=0;return i.O(d)},t=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(461)}));t=i.O(t)})();
//# sourceMappingURL=app.a97f4cd2.js.map