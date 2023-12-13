"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[462],{462:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});var a=l(6252),n=l(3577);const o={class:"card-body"},s={class:"table align-middle table-light table-striped-columns"},i=(0,a._)("th",{scope:"row",class:""},[(0,a.Uk)("會員帳號"),(0,a._)("br"),(0,a.Uk)("ID")],-1),r=(0,a._)("th",{scope:"row"},[(0,a.Uk)("生日"),(0,a._)("br"),(0,a.Uk)("Birth")],-1),d=(0,a._)("th",{scope:"row"},[(0,a.Uk)("姓名"),(0,a._)("br"),(0,a.Uk)("Name")],-1),u=(0,a._)("th",{scope:"row"},[(0,a.Uk)("性別"),(0,a._)("br"),(0,a.Uk)("Gender")],-1),c=(0,a._)("th",{scope:"row"},[(0,a.Uk)("行動電話"),(0,a._)("br"),(0,a.Uk)("Mobile")],-1),m=(0,a._)("th",{scope:"row"},[(0,a.Uk)("聯絡地址"),(0,a._)("br"),(0,a.Uk)("Location")],-1),p=(0,a._)("div",{class:""},"本地址將作為您日後購物預設寄送地址，請勿填寫郵政信箱",-1),h={class:"d-flex mb-2"},_=(0,a._)("option",{value:"",disabled:""},"Select a town",-1),g=["value"],w=(0,a._)("option",{value:"",disabled:""},"Select a town",-1),f=["value"],b=(0,a._)("input",{type:"text",class:"ms-2 col-1 text-center",disabled:""},null,-1),k={class:"text-center"},U=["disabled"];function v(e,t,l,v,y,V){const L=(0,a.up)("VField"),W=(0,a.up)("ErrorMessage"),C=(0,a.up)("VForm");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Uk)((0,n.zw)(y.profile)+" ",1),(0,a.Wm)(C,null,{default:(0,a.w5)((({errors:l,meta:o})=>[(0,a._)("table",s,[(0,a._)("tbody",null,[(0,a._)("tr",null,[i,(0,a._)("td",null,(0,n.zw)(y.profile.email),1)]),(0,a._)("tr",null,[r,(0,a._)("td",null,(0,n.zw)(y.profile.birth),1)]),(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(L,{name:"姓名",type:"text",rules:"required",modelValue:y.profile.name,"onUpdate:modelValue":t[0]||(t[0]=e=>y.profile.name=e)},null,8,["modelValue"]),(0,a.Wm)(W,{name:"姓名",class:"text-danger ms-3"})])]),(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(L,{name:"gender",type:"radio",value:"男",modelValue:y.profile.gender,"onUpdate:modelValue":t[1]||(t[1]=e=>y.profile.gender=e)},null,8,["modelValue"]),(0,a.Uk)(" 男 "),(0,a.Wm)(L,{name:"gender",type:"radio",value:"女",modelValue:y.profile.gender,"onUpdate:modelValue":t[2]||(t[2]=e=>y.profile.gender=e)},null,8,["modelValue"]),(0,a.Uk)(" 女 "),(0,a.Wm)(L,{name:"gender",type:"radio",value:"不提供",modelValue:y.profile.gender,"onUpdate:modelValue":t[3]||(t[3]=e=>y.profile.gender=e)},null,8,["modelValue"]),(0,a.Uk)(" 不提供 "),(0,a.Wm)(W,{name:"gender"})])]),(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(L,{name:"電話",type:"text",class:(0,n.C_)({"is-invalid":l["電話"]}),rules:V.isPhone,modelValue:y.profile.phone,"onUpdate:modelValue":t[4]||(t[4]=e=>y.profile.phone=e)},null,8,["class","rules","modelValue"]),(0,a.Wm)(W,{name:"電話",class:"text-danger ms-3"})])]),(0,a._)("tr",null,[m,(0,a._)("td",null,[p,(0,a._)("div",h,[(0,a.Wm)(L,{name:"city",as:"select",class:"form-select",onChange:V.changeTown},{default:(0,a.w5)((()=>[_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.cityList,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:e.name},(0,n.zw)(e.name),9,g)))),128))])),_:1},8,["onChange"]),(0,a.Wm)(L,{name:"township",as:"select",class:"form-select ms-2",onChange:V.changePostal},{default:(0,a.w5)((()=>[w,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.townList,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.CODE,value:e.name},(0,n.zw)(e.name),9,f)))),128))])),_:1},8,["onChange"]),b]),(0,a.Wm)(L,{name:"地址",type:"text",class:"form-control"})])])])]),(0,a._)("div",k,[(0,a._)("button",{type:"button",class:(0,n.C_)([{"btn-info":!o.valid},"btn btn-dark"]),disabled:!o.valid,onClick:t[5]||(t[5]=t=>e.$emit("modify",this.user))}," 確認修改 ",10,U)])])),_:1})])}var y={inheritAttrs:!1,data(){return{profile:{},cityList:[],townList:[],isLoading:!1}},props:["user"],watch:{user(){this.profile={...this.user}}},methods:{isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},getMap(){this.isLoading=!0;const e="http://127.0.0.1:3000/api/map/getMap";this.$http.get(e).then((e=>{this.cityList=e.data.data,this.changeTown(),this.isLoading=!1})).catch((e=>{console.log(e),this.isLoading=!1}))},changeTown(){this.cityList.forEach((e=>{e.name===this.user.address.city&&(this.townList=e.districts)}))},changePostal(){this.townList.forEach((e=>{e.name,this.user.address.town}))}}},V=l(3744);const L=(0,V.Z)(y,[["render",v]]);var W=L}}]);
//# sourceMappingURL=462.4a7cd745.js.map