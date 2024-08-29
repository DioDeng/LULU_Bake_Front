"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[108],{4108:function(t,e,i){i.r(e),i.d(e,{default:function(){return A}});var s=i(641),a=i(33),r=i(3751);const o={class:"card border-0 h-100"},n={class:"card-body d-flex flex-column"},l={class:"card-title mb-2 text-body-secondary d-flex justify-content-between"},c={key:0,class:"fst-italic text-secondary"},d={key:1,class:"fst-italic text-secondary"},p={key:2,class:"fst-italic text-secondary"},u=["disabled"],k={class:"progress mb-3",role:"progressbar","aria-label":"Animated striped example","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},h=(0,s.Lk)("p",{class:"card-text"},"目前尚未付款，請選擇付款方式",-1),m={class:"card-text mb-3"},g={clas:"w-100"},L={key:0,class:"mb-0 text-dark-emphasis"},v={class:"fst-italic text-secondary"},f={class:"fst-italic text-secondary"},b={class:"fst-italic text-secondary"},y={class:"d-flex justify-content-between"},O={class:"fw-bold"},x={class:"fw-bold"},w=(0,s.Lk)("div",{class:"card-footer"},[(0,s.Lk)("h5",null,"付款方式：")],-1);function $(t,e,i,$,C,_){return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",n,[(0,s.Lk)("h5",l,[(0,s.Lk)("div",null,[(0,s.eW)((0,a.v_)(t.$t("orderView.orderStatus"))+"：",1),25===C.tempData.mealStatus?((0,s.uX)(),(0,s.CE)("span",c,(0,a.v_)(t.$t("orderView.payment")),1)):50===C.tempData.mealStatus?((0,s.uX)(),(0,s.CE)("span",d,(0,a.v_)(t.$t("orderView.diningOut")),1)):((0,s.uX)(),(0,s.CE)("span",p,(0,a.v_)(t.$t("orderView.finish")),1))]),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(0,r.D$)((t=>_.cancleOrder(C.tempData._id)),["prevent"])),class:(0,a.C4)(["card-link h6 text-decoration-underline border-0 bg-body",{"text-decoration-line-through":25!==C.tempData.mealStatus}]),disabled:25!==C.tempData.mealStatus}," 取消訂單 ",10,u)]),(0,s.Lk)("div",k,[(0,s.Lk)("div",{class:"progress-bar progress-bar-striped progress-bar-animated",style:(0,a.Tr)(`width: ${C.tempData.mealStatus}%`)},null,4)]),h,(0,s.Lk)("div",m,[(0,s.Lk)("ol",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(C.tempData.productList,((e,i)=>((0,s.uX)(),(0,s.CE)("li",{key:i,class:"border-bottom mb-3"},[(0,s.Lk)("div",g,[(0,s.Lk)("h5",{class:(0,a.C4)(["mb-0 d-flex justify-content-between align-items-center w-100",{"text-decoration-line-through":"100%"===C.tempData.mealStatus}])},[(0,s.Lk)("div",null,(0,a.v_)(t.$t(e.flavor))+" - $"+(0,a.v_)(e.price)+" X "+(0,a.v_)(e.qty),1),(0,s.Lk)("div",null,"$"+(0,a.v_)(e.price*e.qty),1)],2),"drink"===e.type||"coffee"===e.type?((0,s.uX)(),(0,s.CE)("p",L,[(0,s.eW)((0,a.v_)(t.$t("orderView.size"))+":",1),(0,s.Lk)("span",v,(0,a.v_)(e.size),1),(0,s.eW)(", "+(0,a.v_)(t.$t("orderView.ice"))+":",1),(0,s.Lk)("span",f,(0,a.v_)(t.$t(C.iceList[e.ice].title)),1),(0,s.eW)(", "+(0,a.v_)(t.$t("orderView.sugar"))+":",1),(0,s.Lk)("span",b,(0,a.v_)(t.$t(C.sugarList[e.sugar].title)),1)])):(0,s.Q3)("",!0)])])))),128))]),(0,s.Lk)("div",y,[(0,s.Lk)("h4",O,(0,a.v_)(t.$t("orderView.total"))+"：",1),(0,s.Lk)("h4",x,"$"+(0,a.v_)(t.$toCurrency(1080)),1)])]),w])])}i(4114);var C=i(8987),_=i(2582),S=i(5579),D=i(433),E={data(){return{cookieList:[],tempData:{},iceList:_,sugarList:S,tempCookie:""}},methods:{cancleOrder(t){console.log(t),25===this.tempData.mealStatus&&(0,D.Er)(t).then((()=>{const e=this.cookieList.findIndex((e=>e.orderId===t));this.cookieList.splice(e,1),0===this.cookieList.length?C.A.remove("luluBakeOrder"):(this.tempCookie="",this.cookieList.forEach((t=>{this.tempCookie+=`${JSON.stringify(t)};`})),this.tempCookie=this.tempCookie.replace(/.$/,""),C.A.set("luluBakeOrder",this.tempCookie)),this.$emitter.emit("getCookieOrder")})).catch((t=>{console.log(t)}))}},mounted(){if(this.$emitter.on("getOrderData",(t=>{this.tempData=t})),C.A.get("luluBakeOrder")){const t=C.A.get("luluBakeOrder").split(";");Object.values(t).forEach((t=>{this.cookieList.push(JSON.parse(t))})),this.cookieList.reverse()}}},V=i(6262);const X=(0,V.A)(E,[["render",$]]);var A=X},2582:function(t){t.exports=JSON.parse('[{"title":"shoppingOptions.drink.iceList.normal"},{"title":"shoppingOptions.drink.iceList.lessIce"},{"title":"shoppingOptions.drink.iceList.lightIce"},{"title":"shoppingOptions.drink.iceList.noIce"},{"title":"shoppingOptions.drink.iceList.warm"},{"title":"shoppingOptions.drink.iceList.hot"}]')},5579:function(t){t.exports=JSON.parse('[{"title":"shoppingOptions.drink.sugarList.standard"},{"title":"shoppingOptions.drink.sugarList.lessSugar"},{"title":"shoppingOptions.drink.sugarList.halfSugar"},{"title":"shoppingOptions.drink.sugarList.lightSugar"},{"title":"shoppingOptions.drink.sugarList.noSugar"}]')}}]);
//# sourceMappingURL=108.1cdbf4f8.js.map