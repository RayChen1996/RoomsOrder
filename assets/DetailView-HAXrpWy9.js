import{K as Yt,L as It,M as Vt,O as rt,Q as Pt,R as Ot,d as ut,v as F,T as mt,o as I,c as H,a as R,w as pt,F as lt,g as vt,n as Ht,b as t,u as r,q as ct,N as jt,P as Lt,t as v,h as Tt,p as $t,e as wt,_ as gt,s as xt,U as yt,m as Mt,r as Dt,z as tt,V as et,f as bt,W as Ct,I as st,l as Bt,x as Nt,J as Ut}from"./index-RAPve43g.js";import{_ as At,a as Et}from"./next-dumaYCFJ.js";import{S as Ft,a as Rt}from"./pagination-VM_gTYU_.js";import{R as ft}from"./RoomService-ZEFzGeyY.js";function Wt(){return typeof window<"u"}function Zt(i){return Wt()&&i in window}function _t({"min-width":i,min:d=i,max:b,raw:w}={}){return{min:d,max:b,raw:w}}function kt(i,d=!0){return Array.isArray(i)?i.map(b=>{if(d&&Array.isArray(b))throw new Error("The tuple syntax is not supported for `screens`.");if(typeof b=="string")return{name:b.toString(),values:[{min:b,max:void 0}]};let[w,$]=b;return w=w.toString(),typeof $=="string"?{name:w,values:[{min:$,max:void 0}]}:Array.isArray($)?{name:w,values:$.map(k=>_t(k))}:{name:w,values:[_t($)]}}):kt(Object.entries(i??{}),!1)}function qt(i){return i.map(d=>d.raw!==void 0?d.raw:[d.min&&`(min-width: ${d.min})`,d.max&&`(max-width: ${d.max})`].filter(Boolean).join(" and ")).join(", ")}var zt={xs:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"};const Jt="$screens";function Qt(i){const d=Vt({screens:kt(i||zt),queries:{},matches:{},hasSetup:!1});function b(){Object.entries(d.queries).forEach(([a,f])=>{d.matches[a]=f.matches})}function w(a){return rt(()=>Object.keys(d.matches).filter(f=>d.matches[f]===!0&&a.hasOwnProperty(f)).map(f=>a[f]))}const $=rt(()=>Object.keys(d.matches).filter(a=>d.matches[a]));function k(a,f){return rt(()=>{const V=h.value;return V&&a.hasOwnProperty(V)?a[V]:f})}const h=rt(()=>{const a=$.value;return a.length?a[a.length-1]:""});function m(){Object.values(d.queries).forEach(a=>a.removeEventListener("change",b)),d.queries={},d.matches={}}return!d.hasSetup&&Zt("matchMedia")&&(m(),d.queries=d.screens.reduce((a,{name:f,values:V})=>{const y=window.matchMedia(qt(V));return y.addEventListener("change",b),a[f]=y,a},{}),b(),d.hasSetup=!0),{matches:d.matches,list:$,mapList:w,current:h,mapCurrent:k,cleanup:m}}function Kt(i,d){const b=Qt(i);return Yt((d==null?void 0:d.injectKey)||Jt,b),It(()=>b.cleanup()),b}var St={exports:{}};(function(i,d){(function(b,w){i.exports=w()})(Pt,function(){var b=1e3,w=6e4,$=36e5,k="millisecond",h="second",m="minute",a="hour",f="day",V="week",y="month",L="quarter",T="year",A="date",M="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var n=["th","st","nd","rd"],e=l%100;return"["+l+(n[(e-20)%10]||n[e]||n[0])+"]"}},B=function(l,n,e){var o=String(l);return!o||o.length>=n?l:""+Array(n+1-o.length).join(e)+l},dt={s:B,z:function(l){var n=-l.utcOffset(),e=Math.abs(n),o=Math.floor(e/60),s=e%60;return(n<=0?"+":"-")+B(o,2,"0")+":"+B(s,2,"0")},m:function l(n,e){if(n.date()<e.date())return-l(e,n);var o=12*(e.year()-n.year())+(e.month()-n.month()),s=n.clone().add(o,y),c=e-s<0,u=n.clone().add(o+(c?-1:1),y);return+(-(o+(e-s)/(c?s-u:u-s))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:y,y:T,w:V,d:f,D:A,h:a,m,s:h,ms:k,Q:L}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},j="en",x={};x[j]=K;var Z="$isDayjsObject",U=function(l){return l instanceof at||!(!l||!l[Z])},ot=function l(n,e,o){var s;if(!n)return j;if(typeof n=="string"){var c=n.toLowerCase();x[c]&&(s=c),e&&(x[c]=e,s=c);var u=n.split("-");if(!s&&u.length>1)return l(u[0])}else{var _=n.name;x[_]=n,s=_}return!o&&s&&(j=s),s||!o&&j},D=function(l,n){if(U(l))return l.clone();var e=typeof n=="object"?n:{};return e.date=l,e.args=arguments,new at(e)},p=dt;p.l=ot,p.i=U,p.w=function(l,n){return D(l,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var at=function(){function l(e){this.$L=ot(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[Z]=!0}var n=l.prototype;return n.parse=function(e){this.$d=function(o){var s=o.date,c=o.utc;if(s===null)return new Date(NaN);if(p.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var u=s.match(E);if(u){var _=u[2]-1||0,g=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],_,u[3]||1,u[4]||0,u[5]||0,u[6]||0,g)):new Date(u[1],_,u[3]||1,u[4]||0,u[5]||0,u[6]||0,g)}}return new Date(s)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return p},n.isValid=function(){return this.$d.toString()!==M},n.isSame=function(e,o){var s=D(e);return this.startOf(o)<=s&&s<=this.endOf(o)},n.isAfter=function(e,o){return D(e)<this.startOf(o)},n.isBefore=function(e,o){return this.endOf(o)<D(e)},n.$g=function(e,o,s){return p.u(e)?this[o]:this.set(s,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,o){var s=this,c=!!p.u(o)||o,u=p.p(e),_=function(z,O){var W=p.w(s.$u?Date.UTC(s.$y,O,z):new Date(s.$y,O,z),s);return c?W:W.endOf(f)},g=function(z,O){return p.w(s.toDate()[z].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(O)),s)},C=this.$W,S=this.$M,N=this.$D,Q="set"+(this.$u?"UTC":"");switch(u){case T:return c?_(1,0):_(31,11);case y:return c?_(1,S):_(0,S+1);case V:var q=this.$locale().weekStart||0,G=(C<q?C+7:C)-q;return _(c?N-G:N+(6-G),S);case f:case A:return g(Q+"Hours",0);case a:return g(Q+"Minutes",1);case m:return g(Q+"Seconds",2);case h:return g(Q+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,o){var s,c=p.p(e),u="set"+(this.$u?"UTC":""),_=(s={},s[f]=u+"Date",s[A]=u+"Date",s[y]=u+"Month",s[T]=u+"FullYear",s[a]=u+"Hours",s[m]=u+"Minutes",s[h]=u+"Seconds",s[k]=u+"Milliseconds",s)[c],g=c===f?this.$D+(o-this.$W):o;if(c===y||c===T){var C=this.clone().set(A,1);C.$d[_](g),C.init(),this.$d=C.set(A,Math.min(this.$D,C.daysInMonth())).$d}else _&&this.$d[_](g);return this.init(),this},n.set=function(e,o){return this.clone().$set(e,o)},n.get=function(e){return this[p.p(e)]()},n.add=function(e,o){var s,c=this;e=Number(e);var u=p.p(o),_=function(S){var N=D(c);return p.w(N.date(N.date()+Math.round(S*e)),c)};if(u===y)return this.set(y,this.$M+e);if(u===T)return this.set(T,this.$y+e);if(u===f)return _(1);if(u===V)return _(7);var g=(s={},s[m]=w,s[a]=$,s[h]=b,s)[u]||1,C=this.$d.getTime()+e*g;return p.w(C,this)},n.subtract=function(e,o){return this.add(-1*e,o)},n.format=function(e){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||M;var c=e||"YYYY-MM-DDTHH:mm:ssZ",u=p.z(this),_=this.$H,g=this.$m,C=this.$M,S=s.weekdays,N=s.months,Q=s.meridiem,q=function(O,W,X,it){return O&&(O[W]||O(o,c))||X[W].slice(0,it)},G=function(O){return p.s(_%12||12,O,"0")},z=Q||function(O,W,X){var it=O<12?"AM":"PM";return X?it.toLowerCase():it};return c.replace(P,function(O,W){return W||function(X){switch(X){case"YY":return String(o.$y).slice(-2);case"YYYY":return p.s(o.$y,4,"0");case"M":return C+1;case"MM":return p.s(C+1,2,"0");case"MMM":return q(s.monthsShort,C,N,3);case"MMMM":return q(N,C);case"D":return o.$D;case"DD":return p.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return q(s.weekdaysMin,o.$W,S,2);case"ddd":return q(s.weekdaysShort,o.$W,S,3);case"dddd":return S[o.$W];case"H":return String(_);case"HH":return p.s(_,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return z(_,g,!0);case"A":return z(_,g,!1);case"m":return String(g);case"mm":return p.s(g,2,"0");case"s":return String(o.$s);case"ss":return p.s(o.$s,2,"0");case"SSS":return p.s(o.$ms,3,"0");case"Z":return u}return null}(O)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,o,s){var c,u=this,_=p.p(o),g=D(e),C=(g.utcOffset()-this.utcOffset())*w,S=this-g,N=function(){return p.m(u,g)};switch(_){case T:c=N()/12;break;case y:c=N();break;case L:c=N()/3;break;case V:c=(S-C)/6048e5;break;case f:c=(S-C)/864e5;break;case a:c=S/$;break;case m:c=S/w;break;case h:c=S/b;break;default:c=S}return s?c:p.a(c)},n.daysInMonth=function(){return this.endOf(y).$D},n.$locale=function(){return x[this.$L]},n.locale=function(e,o){if(!e)return this.$L;var s=this.clone(),c=ot(e,o,!0);return c&&(s.$L=c),s},n.clone=function(){return p.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},l}(),ht=at.prototype;return D.prototype=ht,[["$ms",k],["$s",h],["$m",m],["$H",a],["$W",f],["$M",y],["$y",T],["$D",A]].forEach(function(l){ht[l[1]]=function(n){return this.$g(n,l[0],l[1])}}),D.extend=function(l,n){return l.$i||(l(n,at,D),l.$i=!0),D},D.locale=ot,D.isDayjs=U,D.unix=function(l){return D(1e3*l)},D.en=x[j],D.Ls=x,D.p={},D})})(St);var Gt=St.exports;const Y=Ot(Gt),Xt={key:0,class:"d-md-none"},te=["src"],ee=t("div",{class:"swiper-pagination"},null,-1),se=t("div",{class:"swiper-btn bg-white d-none d-lg-flex swiper-btn-prev"},[t("img",{src:At,alt:"prev arrow"})],-1),ne=t("div",{class:"swiper-btn bg-white d-none d-lg-flex swiper-btn-next"},[t("img",{src:Et,alt:"next arrow"})],-1),oe={class:"banner d-none d-md-flex"},ae={class:"left"},ie=["src"],re={class:"right"},le=["src"],ce=ut({__name:"RoomBanner",props:{roomInfo:{type:Object,required:!0}},setup(i){const d=F(!1);mt(()=>window.innerWidth>767?d.value=!1:d.value=!0);const b=[jt,Lt],w={nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},$={clickable:!0,el:".swiper-pagination"};return(k,h)=>(I(),H(lt,null,[i.roomInfo&&i.roomInfo.imageUrlList&&i.roomInfo.imageUrlList.length>0?(I(),H("div",Xt,[R(r(Rt),{class:"swiper",modules:b,pagination:$,navigation:w,slidesPerView:1,loop:d.value},{default:pt(()=>[(I(!0),H(lt,null,vt(i.roomInfo.imageUrlList,(m,a)=>(I(),Ht(r(Ft),{key:a},{default:pt(()=>[t("img",{src:m,class:"room-img card-img-top rounded-0",alt:"room"},null,8,te)]),_:2},1024))),128)),ee,se,ne]),_:1},8,["loop"])])):ct("",!0),t("div",oe,[t("div",ae,[t("img",{src:i.roomInfo.imageUrl,alt:""},null,8,ie)]),t("div",re,[(I(!0),H(lt,null,vt(i.roomInfo.imageUrlList,(m,a)=>(I(),H("div",{key:a},[t("img",{src:m,alt:""},null,8,le)]))),128))])])],64))}}),ue="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_Size'%3e%3cpath%20id='Vector'%20d='M2%207.25C2%206.52065%202.28973%205.82118%202.80546%205.30546C3.32118%204.78973%204.02065%204.5%204.75%204.5H19.25C19.9793%204.5%2020.6788%204.78973%2021.1945%205.30546C21.7103%205.82118%2022%206.52065%2022%207.25V17.75C22%2018.1111%2021.9289%2018.4687%2021.7907%2018.8024C21.6525%2019.136%2021.4499%2019.4392%2021.1945%2019.6945C20.9392%2019.9499%2020.636%2020.1525%2020.3024%2020.2907C19.9687%2020.4289%2019.6111%2020.5%2019.25%2020.5H4.75C4.38886%2020.5%204.03127%2020.4289%203.69762%2020.2907C3.36398%2020.1525%203.06082%2019.9499%202.80546%2019.6945C2.5501%2019.4392%202.34753%2019.136%202.20933%2018.8024C2.07113%2018.4687%202%2018.1111%202%2017.75V7.25ZM16.78%207.72C16.6395%207.57931%2016.4488%207.50017%2016.25%207.5H13.75C13.5511%207.5%2013.3603%207.57902%2013.2197%207.71967C13.079%207.86032%2013%208.05109%2013%208.25C13%208.44891%2013.079%208.63968%2013.2197%208.78033C13.3603%208.92098%2013.5511%209%2013.75%209H14.44L12.72%2010.719C12.6463%2010.7877%2012.5872%2010.8705%2012.5462%2010.9625C12.5052%2011.0545%2012.4832%2011.1538%2012.4814%2011.2545C12.4796%2011.3552%2012.4982%2011.4552%2012.5359%2011.5486C12.5736%2011.642%2012.6297%2011.7268%2012.701%2011.798C12.7722%2011.8693%2012.857%2011.9254%2012.9504%2011.9631C13.0438%2012.0008%2013.1438%2012.0194%2013.2445%2012.0176C13.3452%2012.0158%2013.4445%2011.9938%2013.5365%2011.9528C13.6285%2011.9118%2013.7113%2011.8527%2013.78%2011.779L15.5%2010.06V10.75C15.5%2010.9489%2015.579%2011.1397%2015.7197%2011.2803C15.8603%2011.421%2016.0511%2011.5%2016.25%2011.5C16.4489%2011.5%2016.6397%2011.421%2016.7803%2011.2803C16.921%2011.1397%2017%2010.9489%2017%2010.75V8.25C16.9998%208.05115%2016.9207%207.86052%2016.78%207.72ZM7.75%2017.5H10.251C10.4499%2017.5%2010.6407%2017.421%2010.7813%2017.2803C10.922%2017.1397%2011.001%2016.9489%2011.001%2016.75C11.001%2016.5511%2010.922%2016.3603%2010.7813%2016.2197C10.6407%2016.079%2010.4499%2016%2010.251%2016H9.561L11.281%2014.28C11.4176%2014.1385%2011.4931%2013.949%2011.4913%2013.7523C11.4895%2013.5557%2011.4105%2013.3676%2011.2714%2013.2286C11.1322%2013.0896%2010.9441%2013.0109%2010.7475%2013.0092C10.5508%2013.0076%2010.3614%2013.0833%2010.22%2013.22L8.5%2014.938V14.248C8.5%2014.0491%208.42098%2013.8583%208.28033%2013.7177C8.13968%2013.577%207.94891%2013.498%207.75%2013.498C7.55109%2013.498%207.36032%2013.577%207.21967%2013.7177C7.07902%2013.8583%207%2014.0491%207%2014.248V16.748C7%2016.9469%207.07902%2017.1377%207.21967%2017.2783C7.36032%2017.419%207.55109%2017.498%207.75%2017.498V17.5Z'%20fill='%23BF9D7D'/%3e%3c/g%3e%3c/svg%3e",de="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_40_7563)'%3e%3cpath%20d='M20%2010.5V7.5C20%206.4%2019.1%205.5%2018%205.5H6C4.9%205.5%204%206.4%204%207.5V10.5C2.9%2010.5%202%2011.4%202%2012.5V17.5H3.33L4%2019.5H5L5.67%2017.5H18.34L19%2019.5H20L20.67%2017.5H22V12.5C22%2011.4%2021.1%2010.5%2020%2010.5ZM11%2010.5H6V7.5H11V10.5ZM18%2010.5H13V7.5H18V10.5Z'%20fill='%23BF9D7D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_40_7563'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",fe="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_Person'%20clip-path='url(%23clip0_40_7566)'%3e%3cpath%20id='Vector'%20d='M12%2012.5C14.21%2012.5%2016%2010.71%2016%208.5C16%206.29%2014.21%204.5%2012%204.5C9.79%204.5%208%206.29%208%208.5C8%2010.71%209.79%2012.5%2012%2012.5ZM12%2014.5C9.33%2014.5%204%2015.84%204%2018.5V20.5H20V18.5C20%2015.84%2014.67%2014.5%2012%2014.5Z'%20fill='%23BF9D7D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_40_7566'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",J=i=>($t("data-v-f2120eb4"),i=i(),wt(),i),me={key:0,class:"left"},he={class:"mb-4 fs-1 fw-bold"},pe=J(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"房型基本資訊")],-1)),ve={class:"d-flex gap-3"},be={class:"white-box box-97px p-3"},_e=J(()=>t("img",{src:ue,alt:""},null,-1)),$e={class:"mb-0 mt-2"},we={class:"white-box box-97px p-3"},ge=J(()=>t("img",{src:de,alt:""},null,-1)),xe={class:"mb-0 mt-2"},ye={class:"white-box box-97px p-3"},Me=J(()=>t("img",{src:fe,alt:""},null,-1)),De={class:"mb-0 mt-2"},Ce=J(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"房間格局")],-1)),ke={class:"d-flex gap-7 white-box w-100 p-5"},Se={key:0},Ye=J(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"房內設備")],-1)),Ie={class:"d-flex gap-1 white-box w-100 p-5 flex-column"},Ve={key:1},Pe=J(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"備品提供")],-1)),Oe={class:"d-flex gap-1 white-box w-100 p-5 flex-column"},He=Tt('<div data-v-f2120eb4><div class="d-flex align-items-center mb-5" data-v-f2120eb4><span class="color-block" data-v-f2120eb4></span><h5 class="fw-bold mb-0" data-v-f2120eb4>訂房須知</h5></div><ol class="list" data-v-f2120eb4><li data-v-f2120eb4>入住時間為下午3點，退房時間為上午12點。</li><li data-v-f2120eb4>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li><li data-v-f2120eb4>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li><li data-v-f2120eb4>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li><li data-v-f2120eb4>請愛惜我們的房間與公共空間，並保持整潔。</li><li data-v-f2120eb4>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li><li data-v-f2120eb4>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li><li data-v-f2120eb4>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li><li data-v-f2120eb4>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li><li data-v-f2120eb4>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li></ol></div>',1),je=ut({__name:"RoomDetail",props:{roomInfo:{type:Object,required:!0}},setup(i){return(d,b)=>i.roomInfo?(I(),H("div",me,[t("div",null,[t("h2",he,v(i.roomInfo.name),1),t("p",null,v(i.roomInfo.description),1)]),t("div",null,[pe,t("div",ve,[t("div",be,[_e,t("p",$e,v(i.roomInfo.areaInfo),1)]),t("div",we,[ge,t("p",xe,v(i.roomInfo.bedInfo),1)]),t("div",ye,[Me,t("p",De,"1-"+v(i.roomInfo.maxPeople)+" 人",1)])])]),t("div",null,[Ce,t("div",ke,[R(ft,{service:[{title:"市景",isProvide:!0},{title:"獨立衛浴",isProvide:!0},{title:"客廳",isProvide:!0},{title:"書房",isProvide:!0},{title:"樓層電梯",isProvide:!0}]})])]),i.roomInfo.facilityInfo?(I(),H("div",Se,[Ye,t("div",Ie,[R(ft,{service:i.roomInfo.facilityInfo},null,8,["service"])])])):ct("",!0),i.roomInfo.amenityInfo?(I(),H("div",Ve,[Pe,t("div",Oe,[R(ft,{service:i.roomInfo.amenityInfo},null,8,["service"])])])):ct("",!0),He])):ct("",!0)}}),Le=gt(je,[["__scopeId","data-v-f2120eb4"]]),Te={class:"d-md-none mobile-datepicker-bar"},Be={key:0,class:"container d-flex justify-content-between align-items-center"},Ne={class:"mb-0 fs-small"},Ue={key:1,class:"container d-flex justify-content-between align-items-center"},Ae={class:"d-flex flex-column"},Ee={class:"mb-0 fs-small text-neutral-80"},Fe={class:"mb-0 fs-tiny text-decoration-underline"},Re={class:"mobile-datepicker-box"},We={class:"bg-neutral-40 p-2"},Ze={type:"button",class:"btn btn-transparent px-2"},qe={key:0,class:"fw-bold mx-3"},ze={key:1,class:"fw-bold mx-3"},Je={class:"fs-small fw-normal ms-2"},Qe={class:"mobile-datepicker-box"},Ke={class:"bg-neutral-40 p-2"},Ge={type:"button",class:"btn btn-transparent px-2"},Xe={class:"fw-bold mx-3"},ts={class:"fs-small fw-normal ms-2"},es={class:"container p-3"},ss=t("h6",{class:"fw-bolder"},"選擇人數",-1),ns={class:"fs-small"},os={class:"d-flex align-items-center justify-content-center gap-3"},as=["disabled"],is={class:"fw-bold"},rs=["disabled"],ls={class:"container mobile-datepicker-bar d-flex align-items-center justify-content-between"},cs=ut({__name:"RoomDatePickerMobile",props:{roomInfo:{type:Object,required:!0}},setup(i){const d=xt(),b=yt(),{id:w}=b.params,{moneyFormat:$}=Mt.methods,k=i,h=F(!1),m=F(!1);let a=F({start:null,end:null});const f=F(2);function V(){h.value=!0,m.value=!1}function y(){h.value=!1,m.value=!0}const L=F(0);mt(()=>{L.value=Y(a.value.end).diff(a.value.start,"day")});function T(){f.value<k.roomInfo.maxPeople&&(f.value+=1)}function A(){f.value>1&&(f.value-=1)}function M(){if(a.value&&a.value.start){const E=new Date(a.value.start.toISOString()).getTime();d.push({name:"roomsReserved",params:{id:w,startdate:E,days:L.value,people:f.value}})}}return(E,P)=>{const K=Dt("VDatePicker");return I(),H(lt,null,[tt(t("section",Te,[r(a).end===null?(I(),H("div",Be,[t("p",Ne,"ＮＴ$ "+v(r($)(i.roomInfo.price))+" / 晚",1),t("button",{type:"button",class:"btn btn-primary px-6 py-3 fw-bold",onClick:P[0]||(P[0]=B=>h.value=!0)}," 查看可訂日期 ")])):(I(),H("div",Ue,[t("div",Ae,[t("p",Ee,"ＮＴ$ "+v(r($)(i.roomInfo.price*L.value))+" / "+v(L.value)+" 晚 / "+v(f.value)+"人",1),t("p",Fe,v(r(Y)(r(a).start).format("MM / D"))+" - "+v(r(Y)(r(a).end).format("MM / D")),1)]),t("button",{type:"button",class:"btn btn-primary px-6 py-3 fw-bold",onClick:M}," 立即預定 ")]))],512),[[et,!m.value]]),tt(t("section",Re,[t("div",We,[t("button",Ze,[t("span",{class:"material-symbols-outlined",onClick:P[1]||(P[1]=B=>h.value=!1)}," Close ")]),r(a).start===null?(I(),H("h6",qe,"選擇入住日期")):(I(),H("h6",ze,[bt(v(L.value)+" 晚 ",1),t("span",Je,v(r(Y)(r(a).start).format("YYYY/ MM / DD"))+" - "+v(r(Y)(r(a).end).format("YYYY/ MM / DD")),1)]))]),R(K,{modelValue:r(a),"onUpdate:modelValue":P[2]||(P[2]=B=>Ct(a)?a.value=B:a=B),modelModifiers:{range:!0},mode:"date",columns:1,expanded:!0,rows:2,masks:{title:"YYYY 年 MM 月"},timezone:"UTC"},null,8,["modelValue"]),t("div",{class:"container mobile-datepicker-bar text-end"},[t("button",{type:"button",class:"btn btn-primary px-6 py-3 fw-bold",onClick:y}," 確定日期 ")])],512),[[et,h.value]]),tt(t("section",Qe,[t("div",Ke,[t("button",Ge,[t("span",{class:"material-symbols-outlined",onClick:P[3]||(P[3]=B=>m.value=!1)}," Close ")]),t("h6",Xe,[bt(v(L.value)+" 晚 ",1),t("span",ts,v(r(Y)(r(a).start).format("YYYY/ MM / DD"))+" - "+v(r(Y)(r(a).end).format("YYYY/ MM / DD")),1)])]),t("div",es,[ss,t("p",ns,"此房型最多供 "+v(i.roomInfo.maxPeople)+" 人居住，不接受寵物入住。",1),t("div",os,[t("button",{type:"button",class:"btn rounded-circle btn-outline-neutral-40 lh-0 p-3",onClick:A,disabled:f.value===1},[t("span",{class:st(["material-symbols-outlined",{"text-black":f.value!==1,"text-neutral-40":f.value===1}])}," remove ",2)],8,as),t("h6",is,v(f.value),1),t("button",{type:"button",class:"btn rounded-circle btn-outline-neutral-40 lh-0 p-3",onClick:T,disabled:f.value===i.roomInfo.maxPeople},[t("span",{class:st(["material-symbols-outlined",{"text-black":f.value!==i.roomInfo.maxPeople,"text-neutral-40":f.value===i.roomInfo.maxPeople}])}," add ",2)],8,rs)])]),t("div",ls,[t("button",{type:"button",class:"btn btn-white px-6 py-3 fw-bold",onClick:V}," 重新選擇日期 "),t("button",{type:"button",class:"btn btn-primary px-6 py-3 fw-bold",onClick:P[4]||(P[4]=B=>m.value=!1)}," 儲存 ")])],512),[[et,m.value]])],64)}}}),nt=i=>($t("data-v-6988289f"),i=i(),wt(),i),us={class:"bg-primary-10"},ds={class:"rooms-detail container"},fs={class:"right d-none d-md-block"},ms={class:"booking-box gap-7 d-flex flex-column"},hs=nt(()=>t("h5",{class:"fw-bold border-bottom border-neutral-40 pb-3"},"預訂房型",-1)),ps={class:"fw-bold text-neutral-80"},vs={class:"text-neutral-80"},bs={class:"d-flex gap-2 mb-3 position-relative"},_s=nt(()=>t("p",{class:"mb-0 fs-tiny"},"入住",-1)),$s={class:"mb-0"},ws=nt(()=>t("p",{class:"mb-0 fs-tiny"},"退房",-1)),gs={class:"mb-0"},xs={class:"card-box"},ys={class:"card text-start"},Ms={class:"card-top"},Ds={class:"d-flex gap-2 flex-column"},Cs={class:"mb-2 fw-bold"},ks={class:"d-flex gap-2"},Ss={class:"text-neutral-80 mb-0"},Ys=nt(()=>t("p",{class:"text-neutral-80 mb-0"},"-",-1)),Is={class:"text-neutral-80 mb-0"},Vs={class:"card-body"},Ps={class:"card-footer gap-3"},Os={class:"d-flex justify-content-between align-items-center"},Hs=nt(()=>t("p",{class:"fw-bold mb-0"},"人數",-1)),js={class:"d-flex align-items-center justify-content-center gap-3"},Ls=["disabled"],Ts={class:"fw-bold"},Bs=["disabled"],Ns={class:"text-primary fw-bold"},Us=ut({__name:"DetailView",setup(i){const{moneyFormat:d}=Mt.methods,b=xt(),w=yt(),$=Bt(),{id:k}=w.params,h=F(2);Nt(async()=>{const{end:j,people:x,start:Z}=w.query;j&&x&&Z&&(M.value={start:Y.unix(Number(Z)/1e3).format("YYYY-MM-DD"),end:Y.unix(Number(j)/1e3).format("YYYY-MM-DD")},h.value=Number(x));const U=Array.isArray(k)?k[0]:k.toString();await $.getRoomInfo(U)});const{roomInfo:m,isShowDatePicker:a}=Ut($),{mapCurrent:f}=Kt({xs:"0px",sm:"640px",md:"768px",lg:"1024px"}),V=f({lg:2},1),y=f({lg:1},2),L=Y().add(1,"day"),T=L.add(5,"day");function A(){const j=new Date(M.value.start.toISOString()).getTime();b.push({name:"roomsReserved",params:{id:k,startdate:j,days:E.value,people:h.value}})}let M=F({start:new Date(L.format("YYYY-MM-DD")),end:new Date(T.format("YYYY-MM-DD"))});const E=F(0);mt(()=>{E.value=Y(M.value.end).diff(M.value.start,"day")});function P(){M.value={start:new Date,end:new Date}}function K(){h.value<m.value.maxPeople&&(h.value+=1)}function B(){h.value>1&&(h.value-=1)}function dt(j){j.target.classList.contains("full-bg-black")&&$.showDatePicker(!1)}return(j,x)=>{const Z=Dt("VDatePicker");return I(),H("div",us,[R(ce,{"room-info":r(m)},null,8,["room-info"]),t("main",ds,[R(Le,{"room-info":r(m)},null,8,["room-info"]),t("section",fs,[t("div",ms,[hs,t("div",null,[t("h2",ps,v(r(m).name),1),t("p",vs,v(r(m).description),1)]),t("div",null,[t("div",bs,[t("div",{class:"check-date-box",onClick:x[0]||(x[0]=U=>r($).showDatePicker(!0))},[_s,t("p",$s,v(r(Y)(r(M).start).format("YYYY/MM/DD")),1)]),t("div",{class:"check-date-box",onClick:x[1]||(x[1]=U=>r($).showDatePicker(!0))},[ws,t("p",gs,v(r(Y)(r(M).end).format("YYYY/MM/DD")),1)]),tt(t("div",{class:"full-bg-black",onClick:dt},null,512),[[et,r(a)]]),t("div",{class:st({"dialog-wrapper":r(a)})},[tt(t("div",xs,[t("div",ys,[t("div",Ms,[t("div",Ds,[t("h5",Cs,v(E.value)+" 晚",1),t("div",ks,[t("p",Ss,v(r(Y)(r(M).start).format("YYYY/ MM / DD")),1),Ys,t("p",Is,v(r(Y)(r(M).end).format("YYYY/ MM / DD")),1)])])]),t("div",Vs,[R(Z,{modelValue:r(M),"onUpdate:modelValue":x[2]||(x[2]=U=>Ct(M)?M.value=U:M=U),modelModifiers:{range:!0},mode:"date",columns:r(V),expanded:!0,rows:r(y),masks:{title:"YYYY 年 MM 月"},timezone:"UTC"},null,8,["modelValue","columns","rows"])]),t("div",Ps,[t("button",{type:"button",class:"btn btn-white px-6 py-3",onClick:P}," 清除日期 "),t("button",{type:"button",class:"btn btn-primary px-6 py-3",onClick:x[3]||(x[3]=U=>r($).showDatePicker(!1))}," 確定日期 ")])])],512),[[et,r(a)]])],2)]),t("div",Os,[Hs,t("div",js,[t("button",{type:"button",class:"btn rounded-circle btn-outline-neutral-40 lh-0 p-3",onClick:B,disabled:h.value===1},[t("span",{class:st(["material-symbols-outlined",{"text-black":h.value!==1,"text-neutral-40":h.value===1}])}," remove ",2)],8,Ls),t("h6",Ts,v(h.value),1),t("button",{type:"button",class:"btn rounded-circle btn-outline-neutral-40 lh-0 p-3",onClick:K,disabled:h.value===r(m).maxPeople},[t("span",{class:st(["material-symbols-outlined",{"text-black":h.value!==r(m).maxPeople,"text-neutral-40":h.value===r(m).maxPeople}])}," add ",2)],8,Bs)])])]),t("h5",Ns,"NT$ "+v(r(d)(r(m).price*E.value)),1),t("button",{type:"button",class:"btn btn-primary w-100 px-6 py-3 fw-bold",onClick:A}," 立即預訂 ")])])]),R(cs,{"room-info":r(m)},null,8,["room-info"])])}}}),Ws=gt(Us,[["__scopeId","data-v-6988289f"]]);export{Ws as default};
