(function(){"use strict";var e={7584:function(e,t,n){var i=n(9242),o=n(3396);function r(e,t,n,i,r,a){const c=(0,o.up)("Header"),s=(0,o.up)("Devices");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{title:"Smart Home"}),(0,o.Wm)(s)],64)}var a=n(7139);const c=e=>((0,o.dD)("data-v-4356f686"),e=e(),(0,o.Cn)(),e),s=c((()=>(0,o._)("div",null,"My Devices",-1)));function l(e,t,n,i,r,c){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o._)("h1",null,(0,a.zw)(n.title),1)]),s],64)}var d={props:["title"]},u=n(89);const v=(0,u.Z)(d,[["render",l],["__scopeId","data-v-4356f686"]]);var p=v;const m={class:"container"};function f(e,t,n,r,a,c){const s=(0,o.up)("Device"),l=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.smartDevice,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,onDeviceClick:c.showModal,device:e},null,8,["onDeviceClick","device"])))),128)),(0,o.wy)((0,o.Wm)(l,{onClose:c.closeModal,deviceDetails:a.deviceDetails},null,8,["onClose","deviceDetails"]),[[i.F8,a.isModalVisible]])])}const h={class:"visualization"},D=["src"],b={class:"description"},g={class:"connection"};function y(e,t,n,i,r,c){return(0,o.wg)(),(0,o.iD)("div",{class:"device",onClick:t[0]||(t[0]=t=>e.$emit("device-click",n.device.id))},[(0,o._)("div",h,[(0,o._)("img",{src:c.devicesVisualization[n.device.type]},null,8,D)]),(0,o._)("div",b,[(0,o._)("h3",null,(0,a.zw)(n.device.name),1),(0,o._)("p",null,(0,a.zw)(n.device.type),1)]),(0,o._)("div",g,[(0,o._)("div",{class:"connection-icon",style:(0,a.j5)({"background-color":this.devicesConnection[n.device.connectionState]})},null,4),(0,o._)("i",null,(0,a.zw)(n.device.connectionState),1)])])}var S={name:"Devices",props:["device"],computed:{devicesVisualization(){return{bulb:n(3807),outlet:n(2323),temperatureSensor:n(8409)}},devicesConnection(){return{connected:"#00db2c",disconnected:"#808080",poorConnection:"#ff7b00"}}}};const _=(0,u.Z)(S,[["render",y],["__scopeId","data-v-5e4e4dc4"]]);var w=_;const M={class:"modal-backdrop"},O={class:"modal-header",id:"modalTitle"},C={class:"modal-body",id:"modalDescription"};function k(e,t,n,r,c,s){return(0,o.wg)(),(0,o.j4)(i.uT,{name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",M,[(0,o._)("div",{class:(0,a.C_)(["modal",{isCurrent:n.isCurrent}]),role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription",style:(0,a.j5)({transform:s.transformString}),ref:"interactElement"},[(0,o._)("header",O,[(0,o._)("div",null,[(0,o._)("b",null,(0,a.zw)(n.deviceDetails.name),1),(0,o.Uk)(" ("+(0,a.zw)(n.deviceDetails.type)+") ",1)]),(0,o._)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=t=>e.$emit("close")),"aria-label":"Close modal"}," x ")]),(0,o._)("section",C,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.detailesList(n.deviceDetails),(e=>((0,o.wg)(),(0,o.iD)("li",null,(0,a.zw)(`${e[0]}: ${e[1]}`),1)))),256))])])],6)])])),_:1})}var x=n(9528),I=n.n(x),j={name:"Modal",props:["isCurrent","deviceDetails"],data(){return{interactPosition:{x:0,y:0}}},computed:{transformString(){const{x:e,y:t}=this.interactPosition;return`translate3D(${e}px, ${t}px, 0)`}},mounted(){const e=this.$refs.interactElement;I()(e).draggable({onmove:e=>{const t=this.interactPosition.x+e.dx,n=this.interactPosition.y+e.dy;this.interactSetPosition({x:t,y:n})}})},beforeUnmount(){I()(this.$refs.interactElement).unset()},methods:{interactSetPosition(e){const{x:t=0,y:n=0}=e;this.interactPosition={x:t,y:n}},detailesList(e){return Object.entries(e).filter((e=>!["id","name","type"].includes(e[0])))}}};const z=(0,u.Z)(j,[["render",k],["__scopeId","data-v-5558778e"]]);var $=z;const P={1:{type:"bulb",id:1,name:"MyBulb",connectionState:"connected",isTurnedOn:!0,brightness:50,color:"red"},2:{type:"outlet",id:2,name:"My outlet",connectionState:"poorConnection",isTurnedOn:!0,powerConsumption:"5"},3:{type:"temperatureSensor",id:3,name:"My Sensor",connectionState:"disconnected",temperature:"22"}},J=[{type:"bulb",id:1,name:"MyBulb",connectionState:"connected"},{type:"outlet",id:2,name:"My Outlet",connectionState:"poorConnection"},{type:"temperatureSensor",id:3,name:"My Sensor",connectionState:"disconnected"}];setInterval((()=>{T()}),5e3);const N=e=>"/api/v1/devices"===e?JSON.parse(JSON.stringify(J)):e.includes("/api/v1/devices/")&&/\d$/.test(e)?JSON.parse(JSON.stringify(P[e.split("/").pop()])):void 0;var H=N;const T=()=>{const e=["connected","disconnected","poorConnection"];let t=V(1,3),n=J[t-1].connectionState,i=e.filter((e=>e!==n))[V(0,1)];J[t-1].connectionState=i,P[t]["connectionState"]=i,console.log("Connection changed")},V=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e);var U={name:"Devices",components:{Device:w,Modal:$},data(){return{isModalVisible:!1,deviceDetails:{},smartDevice:[]}},methods:{showModal(e){this.isModalVisible=!0,this.deviceDetails=this.getSmartDeviceDetails(e),clearInterval(this.updateInteval),this.handleDetailsUpdate(e)},closeModal(){this.isModalVisible=!1},getSmartDevice(){return H("/api/v1/devices")},getSmartDeviceDetails(e){return H(`/api/v1/devices/${e}`)},handleDeviceUpdate(){setInterval((()=>{let e=this.getSmartDevice();JSON.stringify(e)!==JSON.stringify(this.smartDevice)&&(this.smartDevice=e)}),1e3)},handleDetailsUpdate(e){this.updateInteval=setInterval((()=>{this.isModalVisible||clearInterval(this.updateInteval);let t=this.getSmartDeviceDetails(e);JSON.stringify(t)!==JSON.stringify(this.deviceDetails)&&(this.deviceDetails=t)}),1e3)}},created(){this.smartDevice=this.getSmartDevice(),this.handleDeviceUpdate()}};const Z=(0,u.Z)(U,[["render",f],["__scopeId","data-v-7a6f033a"]]);var E=Z,Y={name:"App",components:{Header:p,Devices:E}};const W=(0,u.Z)(Y,[["render",r]]);var B=W;(0,i.ri)(B).mount("#app")},3807:function(e,t,n){e.exports=n.p+"img/bulb.87994f3d.svg"},2323:function(e,t,n){e.exports=n.p+"img/plug.c5e892b5.svg"},8409:function(e,t,n){e.exports=n.p+"img/temperature.cb6a4589.svg"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,r){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],r=e[d][2];for(var c=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/smart-home-task/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,r,a=i[0],c=i[1],s=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(t&&t(i);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=self["webpackChunksmart_home_task"]=self["webpackChunksmart_home_task"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7584)}));i=n.O(i)})();
//# sourceMappingURL=app.90b75a5d.js.map