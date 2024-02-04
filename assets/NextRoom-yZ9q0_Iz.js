import{R as y}from"./RoomService-8lCULqLs.js";import{M as I,O as F}from"./bootstrap.esm-jFZMl1Oc.js";import{ab as g,D as b,C as _,m as D,j as w,_ as A,r as h,o as u,c as i,b as e,t as n,F as p,a as c,n as f,w as x,f as C,p as k,e as B}from"./index-lIHObT2d.js";const O=g("orderStore",{state(){return{orderList:[]}},actions:{async getOrders(){const s=await b("/api/v1/orders","GET");this.orderList=s.result},async deleteOrder(s){const o=await b("/api/v1/admin/orders/65b1138e11f699788b5bc832","DELETE");o.status?_.fire("已成功取消"):_.fire({icon:"error",title:o.message})}}}),E={name:"NextRoom",props:{roomInfo:{type:Object,required:!0,default:()=>({})}},mixins:[D],data(){return{modal:{show(){},hide(){}},offcanvas:{show(){},hide(){}}}},components:{RoomService:y},mounted(){this.modal=new I(this.$refs.cancelModal),this.offcanvas=new F(this.$refs.cancelOffcanvas)},methods:{...w(O,["deleteOrder","getOrders"]),getDiff(s,o){return(new Date(o).getTime()-new Date(s).getTime())/1e3/60/60/24},getPrice(s){const t=this.getDiff(s.checkInDate,s.checkOutDate)*s.roomId.price;return this.moneyFormat(t)},closeMode(){},async cancel(s){await this.deleteOrder(s),this.modal.hide(),this.offcanvas.hide(),this.getOrders()}}},a=s=>(k("data-v-cd51a823"),s=s(),B(),s),S={class:"bg-white p-3 p-lg-7 rounded-6"},T={class:"fw-medium text-neutral-80"},N=a(()=>e("h2",{class:"title"},"即將來的行程",-1)),R=a(()=>e("img",{src:"https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true",alt:"",class:"nextRoomImg rounded-3 mb-5 mb-lg-7"},null,-1)),L={class:"d-flex flex-column gap-5 pb-5 mb-5 border-bottom border-2 border-neutral-40"},M={class:"fw-bold text-neutral-80 fs-lg-5 fs-small"},V={class:"pe-3 me-3 border-end border-neutral-60"},j={class:"sub-title sub-title-primary"},P={class:"sub-title sub-title-neutral-60"},H={class:"fw-bold fs-lg-0 fs-small mb-0"},q={key:0,class:"mb-5 mb-lg-7"},G=a(()=>e("p",{class:"sub-title sub-title-primary"},"房間格局",-1)),z={class:"p-5 border border-neutral-40 rounded-3"},J={key:1,class:"mb-5 mb-lg-7"},K=a(()=>e("p",{class:"sub-title sub-title-primary"},"房內設備",-1)),Q={class:"p-5 border border-neutral-40 rounded-3"},U={key:2,class:"mb-5 mb-lg-7"},W=a(()=>e("p",{class:"sub-title sub-title-primary"},"備品提供",-1)),X={class:"p-5 border border-neutral-40 rounded-3"},Y={class:"d-flex align-items-center gap-3"},Z={key:1,class:"text-center py-3"},$={class:"modal fade",ref:"cancelModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ee={class:"modal-dialog modal-dialog-centered"},oe={class:"modal-content"},te={class:"modal-body position-relative p-0"},se=a(()=>e("p",{class:"h6 text-center mb-0",style:{padding:"100px 0"}},"確定要取消此房型的預訂嗎？",-1)),ne={class:"modal-footer flex-nowrap"},ae={class:"offcanvas offcanvas-bottom rounded-top-3",tabindex:"-1",ref:"cancelOffcanvas","aria-labelledby":"offcanvasTopLabel"},de={class:"offcanvas-header border-bottom"},le=a(()=>e("small",{class:"offcanvas-title fw-bold",id:"offcanvasTopLabel"},"取消預訂",-1)),ue=a(()=>e("div",{class:"offcanvas-body py-7 d-flex align-items-center justify-content-center border-bottom"},[e("small",{class:"fw-bold"},"確定要取消此房型的預訂嗎？")],-1)),ie={class:"offcanvas-footer d-flex p-2_5 gap-3"};function re(s,o,t,ce,l,r){const m=h("RoomService"),v=h("router-link");return u(),i(p,null,[e("section",S,[e("p",T,"預訂參考編號： "+n(t.roomInfo._id||"--"),1),N,t.roomInfo._id?(u(),i(p,{key:0},[R,e("div",L,[e("h3",M,[e("span",V,n(t.roomInfo.roomId.name)+"，"+n(r.getDiff(t.roomInfo.checkInDate,t.roomInfo.checkOutDate))+" 晚",1),e("span",null,"住宿人數："+n(t.roomInfo.peopleNum)+" 位",1)]),e("div",null,[e("p",j," 入住："+n(s.getDate(t.roomInfo.checkInDate))+"，"+n(s.getHour(t.roomInfo.checkInDate))+" 可入住 ",1),e("p",P," 退房："+n(s.getDate(t.roomInfo.checkOutDate))+"，"+n(s.getHour(t.roomInfo.checkOutDate))+" 前退房 ",1)]),e("p",H,"NT$ "+n(r.getPrice(t.roomInfo)),1)]),t.roomInfo.roomId.layoutInfo?(u(),i("div",q,[G,e("div",z,[c(m,{service:t.roomInfo.roomId.layoutInfo},null,8,["service"])])])):f("",!0),t.roomInfo.roomId.facilityInfo?(u(),i("div",J,[K,e("div",Q,[c(m,{service:t.roomInfo.roomId.facilityInfo},null,8,["service"])])])):f("",!0),t.roomInfo.roomId.amenityInfo?(u(),i("div",U,[W,e("div",X,[c(m,{service:t.roomInfo.roomId.amenityInfo},null,8,["service"])])])):f("",!0),e("div",Y,[e("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50 d-none d-lg-block",onClick:o[0]||(o[0]=d=>l.modal.show())}," 取消預訂 "),e("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50 d-lg-none",onClick:o[1]||(o[1]=d=>l.offcanvas.show())}," 取消預訂 "),c(v,{to:{name:"roomDetail",params:{id:t.roomInfo.roomId._id}},class:"btn btn-primary rounded-3 fw-bold py-3 px-6 w-50"},{default:x(()=>[C("查看詳情")]),_:1},8,["to"])])],64)):(u(),i("h2",Z,"無"))]),e("div",$,[e("div",ee,[e("div",oe,[e("div",te,[e("span",{class:"material-symbols-outlined p-2 position-absolute top-0 end-0",onClick:o[2]||(o[2]=d=>l.modal.hide())}," close "),se]),e("div",ne,[e("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:o[3]||(o[3]=d=>l.modal.hide())}," 關閉視窗 "),e("button",{type:"button",class:"btn btn-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:o[4]||(o[4]=d=>r.cancel(t.roomInfo._id))}," 確定取消 ")])])])],512),e("div",ae,[e("div",de,[le,e("span",{class:"material-symbols-outlined",onClick:o[5]||(o[5]=d=>l.offcanvas.hide())}," close ")]),ue,e("div",ie,[e("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:o[6]||(o[6]=d=>l.offcanvas.hide())}," 關閉視窗 "),e("button",{type:"button",class:"btn btn-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:o[7]||(o[7]=d=>r.cancel(t.roomInfo._id))}," 確定取消 ")])],512)],64)}const _e=A(E,[["render",re],["__scopeId","data-v-cd51a823"]]);export{_e as n,O as o};
