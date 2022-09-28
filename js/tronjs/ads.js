(()=>{var t={597:()=>{window.formatWeb3=new class{constructor(){}formatAmount(t,e=18){if(!t)return"0";const n=(t=new BigNumber(t,10).toString(10)).substring(0,t.length-e)||"0",o=t.substring(t.length-e).padStart(e,"0").substring(0,e);return this.trimTrailingZeroes(`${n}.${o}`)}cleanupAmount(t){return t.replace(/,/g,"").trim()}trimLeadingZeroes(t){return""===(t=t.replace(/^0+/,""))?"0":t}parseAmount(t="1",e=18){if(!t)return"0";const n=(t=this.cleanupAmount(t)).split("."),o=n[0],a=n[1]||"";if(n.length>2||a.length>e)throw new Error(`Cannot parse '${t}' as bignumber`);return this.trimLeadingZeroes(o+a.padEnd(e,"0"))}trimTrailingZeroes(t){return t.replace(/\.?0*$/,"")}toFixed(t,e){let n=isNaN(t)||!t?0:t;const o=isNaN(e)||!e?0:e;n=this.getFullNum(n);const a=(n+"").split(".");let s=a.length>1?a[1]:"";return s.length>o?s=s.substr(0,o):s+=Array(o-s.length+1).join("0"),a[0]+(""==s?"":"."+s)}getFullNum(t){if(isNaN(t))return t;const e=String(t);return/e/i.test(e)?Number(t).toFixed(18).replace(/\.?0+$/,""):t}accMul(t,e){return t&&e?new BigNumber(t).times(new BigNumber(e)).toString():"0"}accAdd(t,e){return new BigNumber(t).plus(new BigNumber(e)).toFixed()}accSub(t,e){return new BigNumber(t).minus(new BigNumber(e)).toFixed()}accDiv(t,e){return t&&e?new BigNumber(t).div(new BigNumber(e)).toFixed():"0"}}},995:()=>{/msie [6|7|8|9]/i.test(navigator.userAgent)||(new WOW).init(),$((function(){$(".gh").click((function(){$(".naver").slideToggle(),$(".layout").toggleClass("selected")})),$(".header .item .icon").click((function(){$(".header .item-menu").slideToggle()})),$(".header .item-menu .item-sub").click((function(){$(".header .item-menu").hide()})),$(document).click((function(t){$(t.target).closest(".header").length||$(".header .item-menu").hide()})),$(".header .item-menu .add").click((function(){connweb3.addTokenToTronLink()})),$(".header .item-menu .view a").attr("href","https://tronscan.io/#/token20/"+connweb3.addaoAddress),$(".header .naver li").hover((function(){$(".header .naver li .nli").stop().slideUp(),$(this).find(".nli").stop().slideDown()}),(function(){$(".header .naver li .nli").stop().slideUp()}))})),window.successToast=function(t,e,n){$(".toast-close").trigger("click"),$.Toast(t,e,"success",{has_icon:!0,has_close_btn:!0,fullscreen:!1,timeout:n,sticky:!1,has_progress:!0,rtl:!1})},window.errorToast=function(t){$.Toast("info",t,"info",{has_icon:!0,has_close_btn:!0,fullscreen:!1,timeout:1e4,sticky:!1,has_progress:!0,rtl:!1})},window.successToastj=function(t){showToast(t,{duration:3e3,background:"#f0f9eb",color:"#67c23a",borderRadius:"15px"})},window.errorToastj=function(t){showToast(t,{duration:3e3,background:"#fef0f0",color:"#f56c6c",borderRadius:"15px"})},window.copystr=function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.onfocus=function(t){t.preventDefault()},e.select(),document.execCommand("Copy"),e.blur(),document.body.removeChild(e),successToastj("复制成功")},window.showhash=function(t){let e=t.substring(0,6)+"..."+t.substring(t.length-4);successToast("Pending","交易哈希：<a href='https://tronscan.io/#/transaction/"+t+"' target='_blank'>"+e+"</a>",6e4)}},880:()=>{"use strict";window.connweb3=new class{constructor(t,e,n,o){this.usdtAddress=t,this.addaoAddress=e,this.symbol=n,this.logo=o,this.usdtDecimals=6,this.addaoDecimals=8,this.max256="115792089237316195423570985008687907853269984665640564039457584007913129639935",this.locked=!1,this.apikeyItems=[],this.apikeyItems.push("1db33163-ca52-4b3b-94cd-16134a9ef525"),this.apikeyItems.push("c2ec6190-e7dd-45fb-9298-9c90bb974eb0"),this.apikeyItems.push("e1db95f1-781a-41a4-a9e0-e8e5f13a6946"),this.apikeyItems.push("2570dcc8-c98b-403f-94e7-faf9d15d73a2"),this.apikeyItems.push("2f746fd8-7da6-4ab1-b05c-9da05ae9cabd"),this.apikeyItems.push("dc5f26fd-df6d-48b4-ad4b-d835047efe3a"),this.apikeyItems.push("dbb1f8a7-96d1-43ff-be6e-90c1f9324920"),this.apikeyItems.push("48f4c695-0315-4e6f-9591-2b204a78a542"),this.apikeyItems.push("151f2eee-e50c-4a2f-ae40-cd32d0899140"),this.apikeyItems.push("49919ec4-2aee-4c3d-a147-9fbc8d79bf70"),this.apikeyItems.push("3cfc5dd1-2be3-4674-b62a-978032345da4"),this.apikeyItems.push("8690f39b-0761-4172-aa8d-043d77333bdb"),this.apikeyNumber=0}static tronWeb;static addaoAbi;static erc20Abi;static selectedAccount;getTronWeb(){var t=setInterval((async()=>{window.tronWeb&&null!=window.tronWeb.defaultAddress.base58&&0!=window.tronWeb.defaultAddress.base58&&(clearInterval(t),console.log("tronWeb successfully detected!"))}),10)}async init(){this.getTronWeb(),this.apikeyNumber=Math.floor(Math.random()*this.apikeyItems.length);var t=this.apikeyItems[this.apikeyNumber];this.tronWeb=new TronWeb({fullHost:"https://api.trongrid.io",headers:{"TRON-PRO-API-KEY":t},privateKey:"c45d961218eafee43edd6420f7d7a0391362d5c4f5dc4b2910d842d5383db022"}),await this.refreshAccountData()}async changeApiKey(){this.apikeyNumber=this.apikeyNumber+1,this.apikeyNumber==this.apikeyItems.length&&(this.apikeyNumber=0);var t=this.apikeyItems[this.apikeyNumber];return await this.tronWeb.setHeader({"TRON-PRO-API-KEY":t}),t}async onConnect(){location.reload()}async onDisconnect(){this.tronWeb=null,this.selectedAccount=null,document.querySelector("#btn-connect").style.display="block",document.querySelector("#btn-disconnect").style.display="none"}async fetchAccountData(){tronWeb.defaultAddress.base58&&(this.selectedAccount=tronWeb.defaultAddress.base58,document.querySelector("#btn-connect").style.display="none",document.querySelector("#btn-disconnect").style.display="block",document.querySelector("#selected-account").textContent=this.shortAccount(this.selectedAccount))}async refreshAccountData(){document.querySelector("#btn-connect").setAttribute("disabled","disabled"),await this.fetchAccountData(),document.querySelector("#btn-connect").removeAttribute("disabled")}setLock(t){this.locked=t}shortAccount(t,e=6,n=4){return t?t.substring(0,e)+"..."+t.substring(t.length-n):""}getAddaoAbi(){return new Promise(((t,e)=>{let n,o;$.ajaxSettings.async=!1,$.getJSON("./js/abis/implementation.json",(function(o,a){"success"==a?(n=o,t()):e()})),$.getJSON("./js/abis/addao.json",(function(n,a){"success"==a?(o=n,t()):e()})),$.ajaxSettings.async=!0,this.addaoAbi=o.concat(n)}))}getErc20Abi(){return new Promise(((t,e)=>{let n;$.ajaxSettings.async=!1,$.getJSON("./js/abis/tether.json",(function(o,a){"success"==a?(n=o,t()):e()})),$.ajaxSettings.async=!0,this.erc20Abi=n}))}async getUsdtContract(){return await this.tronWeb.contract(this.erc20Abi,this.usdtAddress)}async getAddaoContract(){return await this.tronWeb.contract(this.addaoAbi,this.addaoAddress)}async addTokenToTronLink(){var t=await tronWeb.request({method:"wallet_watchAsset",params:{type:"trc20",options:{address:this.addaoAddress,symbol:this.symbol,decimals:this.addaoDecimals,image:this.logo}}});console.log("tx",t)}async tj(t){var e={serv:"tj",site:"addao",Address:t};try{await $.post("https://tronserver.quest/tronscan/",e,(function(t,e){}))}catch(t){}}}("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","TSo7b9eDcnbALh1sqdqkBr6MNgkvQ8EBvX","ADC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKQWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNy0wNlQxNTo0MjoxOSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOS0wMVQxOToxOCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDktMDFUMTk6MTgrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVhZTg1NDhmLTIwYjgtOTA0MS1iYmZlLTQ0NTk1NTNlOGVkZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmFhMWQ5NzNiLWRhNGItOTU0MS04OGQ5LWIxNmU3ZGI2NWZmMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjk3MjZiZGRiLTYzOGEtMmY0OS1iZWI1LTEzZDlmOGU3MTliMCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI2YmRkYi02MzhhLTJmNDktYmViNS0xM2Q5ZjhlNzE5YjAiIHN0RXZ0OndoZW49IjIwMjItMDctMDZUMTU6NDI6MTkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGU1YmVmYjktOTg3NS05MzQyLTkyYzctZjBlNDNiNzVkZjhjIiBzdEV2dDp3aGVuPSIyMDIyLTA3LTA2VDE1OjQ0OjA3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJlZjUzNzZmLWQxNzktZmI0Mi05NTE2LWFmOGZkMGI3MTM4YSIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0wNlQxNjoxMDo1OSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZjRkZjM5ZC00NmE2LTNlNDUtOTIxOS1iYjNjNGZjMzU0NDciIHN0RXZ0OndoZW49IjIwMjItMDctMDZUMTY6MTA6NTkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWFlODU0OGYtMjBiOC05MDQxLWJiZmUtNDQ1OTU1M2U4ZWRmIiBzdEV2dDp3aGVuPSIyMDIyLTA5LTAxVDE5OjE4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJlZjUzNzZmLWQxNzktZmI0Mi05NTE2LWFmOGZkMGI3MTM4YSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI2YmRkYi02MzhhLTJmNDktYmViNS0xM2Q5ZjhlNzE5YjAiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI2YmRkYi02MzhhLTJmNDktYmViNS0xM2Q5ZjhlNzE5YjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WDdR/AAAJqklEQVRo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"),$((function(){window.addEventListener("message",(function(t){t.data.message&&"tabReply"==t.data.message.action&&(!1===t.data.message.data.data.address&&(connweb3.setLock(!0),connweb3.onDisconnect(),console.log("账号已锁定")),1==connweb3.locked&&t.data.message.data.data.address&&(connweb3.setLock(!1),console.log("账号已解锁"),connweb3.onConnect()),connweb3.selectedAccount&&t.data.message.data.data.address&&connweb3.selectedAccount!=t.data.message.data.data.address&&(console.log("切换账号"),setTimeout((function(){connweb3.onConnect()}),3e3))),t.data.message&&t.data.message.action,t.data.message&&"setNode"==t.data.message.action&&("_"==t.data.message.data.node.chain?console.log("setNode","tronLink currently selects the main chain"):console.log("setNode","tronLink currently selects the side chain"),t.data.message&&"connect"==t.data.message.action&&console.log("connect event",t.data.message.isTronLink),t.data.message&&"disconnect"==t.data.message.action&&console.log("disconnect event",t.data.message.isTronLink),t.data.message&&"accountsChanged"==t.data.message.action&&(console.log("accountsChanged event",t.data.message),console.log("current address:",t.data.message.data.address)),t.data.message&&"connectWeb"==t.data.message.action&&(console.log("connectWeb event",t.data.message),console.log("current address:",t.data.message.data.address)),t.data.message&&"acceptWeb"==t.data.message.action&&console.log("acceptWeb event",t.data.message),t.data.message&&"disconnectWeb"==t.data.message.action&&console.log("disconnectWeb event",t.data.message),t.data.message&&"rejectWeb"==t.data.message.action&&console.log("rejectWeb event",t.data.message))}))}))}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(995),n(597),n(880);let t=0,e="",o=0,a="",s=0,c="",i=[];async function r(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");const t=await connweb3.getUsdtContract();let e=await t.allowance(connweb3.selectedAccount,connweb3.addaoAddress).call();e=connweb3.tronWeb.toDecimal(e),0==e?($("#approve1").show(),$("#approve2").show(),$("#newsubmit").hide(),$("#buysubmit").hide()):($("#approve1").hide(),$("#approve2").hide(),$("#newsubmit").show(),$("#buysubmit").show())}async function d(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");let t=!1;var e=connweb3.usdtAddress;let n=[{type:"address",value:connweb3.addaoAddress},{type:"uint256",value:connweb3.max256}],o=await tronWeb.transactionBuilder.triggerSmartContract(e,"approve(address,uint256)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},n).catch((t=>(console.log("err1",t),!1))),a=await tronWeb.trx.sign(o.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(a).then((e=>{$("#approve1").text("正在授权"),$("#approve2").text("正在授权"),showhash(e.txid),connweb3.tj(connweb3.selectedAccount),t=!0})).catch((t=>{console.log(t)})),1==t){let t=a.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?(successToast("Confirmed","授权成功",5e3),r()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}async function l(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");const t=await connweb3.getAddaoContract();let n=await t.myAdList(0).call({from:connweb3.selectedAccount});const o=n.map((e=>(connweb3.changeApiKey(),t.getAd(e).call()))),s=await Promise.all(o);i=s;let r="",d="";s.forEach(((t,e)=>{const o=n[e]+"",s=(t[0].IsExist,t[0].operator,connweb3.tronWeb.toDecimal(t[0].status)),c=connweb3.tronWeb.toDecimal(t[0].stakingTokens),i=connweb3.tronWeb.toDecimal(t[0].startingTime),l=connweb3.tronWeb.toDecimal(t[0].startingPrice),b=connweb3.tronWeb.toDecimal(t[0].startingUSDT),m=(connweb3.tronWeb.toDecimal(t[0].endTime),connweb3.tronWeb.toDecimal(t[0].endPrice),connweb3.tronWeb.toDecimal(t[0].endUSDT),t[0].language,t[0].keywords),u=t[0].title,h=t[0].content,w=t[0].url,f=t[0].resourceUrl,g=t[0].remark,p=connweb3.tronWeb.toDecimal(t[1]),v=connweb3.tronWeb.toDecimal(t[2][0]),$=connweb3.tronWeb.toDecimal(t[2][1]),W=connweb3.tronWeb.toDecimal(t[2][2]),A=connweb3.tronWeb.toDecimal(t[2][3]),y=t[3][0];var D=dayjs(1e3*i).format("YYYY-MM-DD HH:mm");r+='<tr class="list">',r+=`<td>${o}</td>`,r+=`<td>${formatWeb3.formatAmount(c,connweb3.addaoDecimals)}</td>`,r+=`<td>${formatWeb3.formatAmount(p,connweb3.addaoDecimals)}</td>`,r+=`<td>${D}</td>`,r+=`<td>${formatWeb3.toFixed(formatWeb3.formatAmount(l,connweb3.usdtDecimals),6)}</td>`,r+=`<td>${formatWeb3.formatAmount(b,connweb3.usdtDecimals)}</td>`,r+=`<td>${m}</td>`,r+=`<td>${u}</td>`,r+=`<td>${h}</td>`,r+=`<td><a href="${w}" target="_blank">${w}</a></td>`,r+=`<td>${f}</td>`,r+=`<td>${g}</td>`,r+=`<td>${1==v?"已激活":"未激活"}</td>`,r+=`<td>${$}</td>`,r+=`<td>${y}</td>`,r+=`<td>${W}/${A}</td>`,r+=" </tr >";let k="";k=0==s?"正常":1==s?"下线":"完成";const T=formatWeb3.formatAmount(.996*c,connweb3.addaoDecimals),x=formatWeb3.formatAmount(a,connweb3.usdtDecimals),I=formatWeb3.toFixed(formatWeb3.accMul(T,x),6),Z=formatWeb3.formatAmount(b,connweb3.usdtDecimals);let N=formatWeb3.toFixed(I-Z,6);N<0&&(N=0),d+='<tr class="list">',d+=`<td><h5 class="on">${k}</h5></td>`,d+=`<td>$${N}</td>`,d+=`<td><h6 class="editads" value="${o}" aValue="${e}">操作</h6></td>`,d+="</tr>"})),$(".list").remove(),$(".table1title1").append(r),$(".table1title2").append(d),$(".adsgg .box .bds table h6.editads").unbind("click"),$(".adsgg .box .bds table h6.editads").click((function(){$(".btn_edit").text("确定"),$(".mask").show(),$(".editwin").show(),e=$(this).attr("value"),c=i[$(this).attr("aValue")],m()}))}async function b(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");const t=await connweb3.getAddaoContract();let e=await t.myAdList(1).call({from:connweb3.selectedAccount});const n=e.map((e=>(connweb3.changeApiKey(),t.getAd(e).call()))),o=await Promise.all(n);let a="",s="";o.forEach(((t,n)=>{const o=e[n]+"",c=(t[0].IsExist,t[0].operator,connweb3.tronWeb.toDecimal(t[0].status)),i=connweb3.tronWeb.toDecimal(t[0].stakingTokens),r=connweb3.tronWeb.toDecimal(t[0].startingTime),d=connweb3.tronWeb.toDecimal(t[0].startingPrice),l=connweb3.tronWeb.toDecimal(t[0].startingUSDT),b=connweb3.tronWeb.toDecimal(t[0].endTime),m=connweb3.tronWeb.toDecimal(t[0].endPrice),u=connweb3.tronWeb.toDecimal(t[0].endUSDT),h=(t[0].language,t[0].keywords),w=t[0].title,f=t[0].content,g=t[0].url,p=t[0].resourceUrl,v=t[0].remark,$=(connweb3.tronWeb.toDecimal(t[1]),connweb3.tronWeb.toDecimal(t[2][0])),W=connweb3.tronWeb.toDecimal(t[2][1]),A=connweb3.tronWeb.toDecimal(t[2][2]),y=connweb3.tronWeb.toDecimal(t[2][3]),D=t[3][0];var k=dayjs(1e3*r).format("YYYY-MM-DD HH:mm"),T=dayjs(1e3*b).format("YYYY-MM-DD HH:mm");a+='<tr class="list">',a+=`<td>${o}</td>`,a+=`<td>${formatWeb3.formatAmount(i,connweb3.addaoDecimals)}</td>`,a+=`<td>${k}</td>`,a+=`<td>${formatWeb3.toFixed(formatWeb3.formatAmount(d,connweb3.usdtDecimals),6)}</td>`,a+=`<td>${formatWeb3.formatAmount(l,connweb3.usdtDecimals)}</td>`,a+=`<td>${T}</td>`,a+=`<td>${formatWeb3.toFixed(formatWeb3.formatAmount(m,connweb3.usdtDecimals),6)}</td>`,a+=`<td>${formatWeb3.toFixed(formatWeb3.formatAmount(u,connweb3.usdtDecimals),6)}</td>`,a+=`<td>${h}</td>`,a+=`<td>${w}</td>`,a+=`<td>${f}</td>`,a+=`<td><a href="${g}" target="_blank">${g}</a></td>`,a+=`<td>${p}</td>`,a+=`<td>${v}</td>`,a+=`<td>${1==$?"已激活":"未激活"}</td>`,a+=`<td>${W}</td>`,a+=`<td>${D}</td>`,a+=`<td>${A}/${y}</td>`,a+=" </tr >";let x="";x=0==c?"正常":1==c?"下线":"完成";const I=formatWeb3.formatAmount(.996*i,connweb3.addaoDecimals),Z=formatWeb3.formatAmount(m,connweb3.usdtDecimals),N=formatWeb3.toFixed(formatWeb3.accMul(I,Z),6),R=formatWeb3.formatAmount(l,connweb3.usdtDecimals);let S=formatWeb3.toFixed(N-R,6);S<0&&(S=0),s+='<tr class="list">',s+=`<td><h5 class="on">${x}</h5></td>`,s+=`<td>$${S}</td>`,s+=`<td><h6 class="delads" value="${o}" aValue="${n}">删除</h6></td>`,s+="</tr>"})),$(".list").remove(),$(".table2title1").append(a),$(".table2title2").append(s),$(".adsgg .box .bds table h6.delads").unbind("click"),$(".adsgg .box .bds table h6.delads").click((function(){!async function(t){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");let e=!1;var n=connweb3.addaoAddress;let o=[{type:"bytes4",value:t}],a=await tronWeb.transactionBuilder.triggerSmartContract(n,"adDelete(bytes4)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},o).catch((t=>(console.log("err1",t),!1))),s=await tronWeb.trx.sign(a.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(s).then((t=>{showhash(t.txid),e=!0})).catch((t=>{console.log(t)})),1==e){let t=s.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?(successToast("Confirmed","交易成功",5e3),b()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}($(this).attr("value"))}))}function m(){let t="";c[0].IsExist,c[0].operator;const e=connweb3.tronWeb.toDecimal(c[0].status),n=connweb3.tronWeb.toDecimal(c[0].stakingTokens),s=(connweb3.tronWeb.toDecimal(c[0].startingTime),connweb3.tronWeb.toDecimal(c[0].startingPrice),connweb3.tronWeb.toDecimal(c[0].startingUSDT)),i=(connweb3.tronWeb.toDecimal(c[0].endTime),connweb3.tronWeb.toDecimal(c[0].endPrice),connweb3.tronWeb.toDecimal(c[0].endUSDT),c[0].language,c[0].keywords),r=c[0].title,d=c[0].content,l=c[0].url,b=c[0].resourceUrl,m=c[0].remark,h=(connweb3.tronWeb.toDecimal(c[1][0]),connweb3.tronWeb.toDecimal(c[2][0])),w=connweb3.tronWeb.toDecimal(c[2][1]),f=(connweb3.tronWeb.toDecimal(c[2][2]),connweb3.tronWeb.toDecimal(c[2][3]),c[3][0]);let g=[2,3,4,5,6,7];if(g.includes(o))2==o?t=i:3==o?t=r:4==o?t=d:5==o?t=l:6==o?t=b:7==o&&(t=m),$(".bds .val").val(t),$(".bds .token").val("");else if(1==o||8==o)1==o&&(t=e,$("#onoffswitch").attr("checked",0==t)),8==o&&(t=h,$("#onoffswitch").attr("checked",1==t)),$(".bds .token").val("");else if(9==o)t=w,$(".bds .val").val(t),$(".modifyfontsize").removeClass("on"),$(".bds .token").val("");else if(10==o)t=$(".bds .fontColor").val(f),$(".bds .token").val("");else if(11==o)$(".bds .token").val("");else if(12==o){const t=formatWeb3.formatAmount(n,connweb3.addaoDecimals),e=.996*t,o=formatWeb3.formatAmount(a,connweb3.usdtDecimals),c=formatWeb3.toFixed(formatWeb3.accMul(e,o),6),i=formatWeb3.formatAmount(s,connweb3.usdtDecimals),r=formatWeb3.toFixed(c+i,6),d=formatWeb3.toFixed(c-i,6);d<0&&(d=0),$(".bds .msg").text(`该广告已质押${t}ADC，系统将销毁ADC，并兑换出USDT自动转入您的钱包地址。预计总金额$${r}，预计收益$${d}`)}if(g=[1,2,3,4,5,6,7,8,9,10],g.includes(o)){let t=u();$(".bds .msg").show(),$(".bds .msg").text(`修改广告需至少销毁 ${t}ADC`)}2==o?$(".bds .val").attr("maxlength",15):3==o?$(".bds .val").attr("maxlength",30):4==o?$(".bds .val").attr("maxlength",140):$(".bds .val").attr("maxlength",200)}function u(){h();let t="1.1";t=formatWeb3.parseAmount(t,connweb3.usdtDecimals);let e=formatWeb3.accDiv(t,a);return e=formatWeb3.toFixed(e,connweb3.addaoDecimals),e}async function h(){const t=await connweb3.getAddaoContract();a=await t.tokenPrice().call(),a=connweb3.tronWeb.toDecimal(a),$(".childwin .adcprice").text(`${formatWeb3.toFixed(formatWeb3.formatAmount(a,connweb3.usdtDecimals),6)}`),$(".editwin .adcprice").text(`${formatWeb3.toFixed(formatWeb3.formatAmount(a,connweb3.usdtDecimals),6)}`)}async function w(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");const e=await connweb3.getAddaoContract();t=await e.balanceOf(connweb3.selectedAccount).call(),t=connweb3.tronWeb.toDecimal(t),$(".myadc").text(`${formatWeb3.formatAmount(t,connweb3.addaoDecimals)}`),$(".mytoken").text(`${formatWeb3.formatAmount(t,connweb3.addaoDecimals)}`)}async function f(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");const t=await connweb3.getAddaoContract();let e=await t.balanceOfUSDT(connweb3.selectedAccount).call();e=connweb3.tronWeb.toDecimal(e),$(".myusdt").text(`${formatWeb3.toFixed(formatWeb3.formatAmount(e,connweb3.usdtDecimals),6)}`)}window.addEventListener("load",(async()=>{await connweb3.init(),await connweb3.getAddaoAbi(),await connweb3.getErc20Abi(),r(),await h(),await w(),await f(),l(),document.querySelector("#btn-connect").addEventListener("click",(()=>{location.reload()})),document.querySelector("#btn-disconnect").addEventListener("click",(()=>{copystr(connweb3.selectedAccount)}))})),$((function(){jscolor.presets.default={palette:["#000000","#7d7d7d","#870014","#ec1c23","#ff7e26","#fef100","#22b14b","#00a1e7","#3f47cc","#a349a4","#ffffff","#c3c3c3","#b87957","#feaec9","#ffc80d","#eee3af","#b5e61d","#99d9ea","#7092be","#c8bfe7"]},$("#_usdt").on("input",(function(t){!function(){const t=formatWeb3.parseAmount($("#_usdt").val(),connweb3.usdtDecimals),e=formatWeb3.accDiv(t,a);e>0?$("#_token").val(formatWeb3.toFixed(e,connweb3.addaoDecimals)):$("#_token").val("")}()})),$(".btnbuy").click((function(){$("#approve1").text("授权"),$("#buysubmit").text("确定"),$(".mask").show(),$(".buytoken").show()})),$(".btnadd").click((function(){$("#approve2").text("授权"),$("#newsubmit").text("确定"),$(".mask").show(),$(".childwin").show()})),$(".btn_getmyadlist").click((function(){l()})),$(".btn_getmyadfinishlist").click((function(){b()})),$("#buysubmit").click((function(){!async function(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");const t=$("#buyAmount").val(),e=formatWeb3.parseAmount(t,connweb3.addaoDecimals);let n=!1;var o=connweb3.addaoAddress;let a=[{type:"uint256",value:e}],s=await tronWeb.transactionBuilder.triggerSmartContract(o,"buyToken(uint256)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},a).catch((t=>(console.log("err1",t),!1))),c=await tronWeb.trx.sign(s.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(c).then((t=>{$("#buysubmit").text("交易中"),showhash(t.txid),n=!0})).catch((t=>{console.log(t)})),1==n){let t=c.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?($("#buysubmit").text("确定"),$(".mask").hide(),$(".buytoken").hide(),successToast("Confirmed","交易成功",5e3),w(),f()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}()})),$("#approve1").click((function(){d()})),$(".childwin .quxia").click((function(){$(".mask").hide(),$(".childwin").hide()})),$("#newsubmit").click((function(){!async function(){const t=formatWeb3.parseAmount($("#_usdt").val(),connweb3.usdtDecimals),e=$("#_keywords").val(),n=$("#_title").val(),o=$("#_content").val(),a=$("#_url").val(),s=$("#_resourceUrl").val();if(!connweb3.selectedAccount)return void errorToast("请链接钱包");let c=!1;var i=connweb3.addaoAddress;let r=[{type:"uint256",value:t},{type:"string",value:""},{type:"string",value:e},{type:"string",value:n},{type:"string",value:o},{type:"string",value:a},{type:"string",value:s},{type:"string",value:""}],d=await tronWeb.transactionBuilder.triggerSmartContract(i,"adNew(uint256,string,string,string,string,string,string,string)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},r).catch((t=>(console.log("err1",t),!1))),b=await tronWeb.trx.sign(d.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(b).then((t=>{$("#newsubmit").hide("交易中"),showhash(t.txid),c=!0})).catch((t=>{console.log(t)})),1==c){let t=b.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?($("#newsubmit").hide("确定"),$(".mask").hide(),$(".childwin").hide(),successToast("Confirmed","交易成功",5e3),w(),f(),l()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}()})),$("#approve2").click((function(){d()})),$(".modifyfontsize").click((function(){$(".modifyfontsize").removeClass("on"),$(this).addClass("on"),s="字体增大"==$(this).context.innerText?1:0})),$(".editwin .quxia").click((function(){$(".mask").hide(),$(".editwin").hide()})),$(".btn_edit").click((function(){!async function(){if(!connweb3.selectedAccount)return void errorToast("请链接钱包");let n="",a="";if([2,3,4,5,6,7].includes(o))n=$(".bds .val").val(),a=$(".bds .token").val(),a=formatWeb3.parseAmount(a,connweb3.addaoDecimals);else if(1==o)n=1==$("#onoffswitch").is(":checked")?"0":"1",a=$(".bds .token").val(),a=formatWeb3.parseAmount(a,connweb3.addaoDecimals);else if(8==o)n=1==$("#onoffswitch").is(":checked")?"1":"0",a=$(".bds .token").val(),a=formatWeb3.parseAmount(a,connweb3.addaoDecimals);else if(9==o){n=s;let t=Number($(".bds .val").val());if(a=$(".bds .token").val(),a=formatWeb3.parseAmount(a,connweb3.addaoDecimals),0==n&&t<=0)return void errorToast("字体不能减小了");if(1==n&&t>=3)return void errorToast("字体不能增大了")}else 10==o?(n=$(".bds .fontColor").val(),a=$(".bds .token").val(),a=formatWeb3.parseAmount(a,connweb3.addaoDecimals)):11==o?(n=$(".bds .token").val(),n=formatWeb3.parseAmount(n,connweb3.addaoDecimals),a=0):12==o&&(n=0,a=0);let c=u();if(11==o){if(t<n)return void errorToast("竞价排名需要销毁ADC，请先购买ADC");if(c>n)return void errorToast("销毁ADC数量太少");let o=!1;var i=connweb3.addaoAddress;let a="adBid(bytes4,uint256)";var r={feeLimit:1e9,callValue:0,shouldPollResponse:!0};let s=[{type:"bytes4",value:e},{type:"uint256",value:n}],d=await tronWeb.transactionBuilder.triggerSmartContract(i,a,r,s).catch((t=>(console.log("err1",t),!1))),b=await tronWeb.trx.sign(d.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(b).then((t=>{$(".btn_edit").text("交易中"),showhash(t.txid),o=!0})).catch((t=>{console.log(t)})),1==o){let t=b.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?($(".btn_edit").text("确定"),$(".mask").hide(),$(".editwin").hide(),successToast("Confirmed","交易成功",5e3),l(),w(),f()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}return}if(12==o){let t=!1;i=connweb3.addaoAddress;let n="adFinish(bytes4)";r={feeLimit:1e9,callValue:0,shouldPollResponse:!0};let o=[{type:"bytes4",value:e}],a=await tronWeb.transactionBuilder.triggerSmartContract(i,n,r,o).catch((t=>(console.log("err1",t),!1))),s=await tronWeb.trx.sign(a.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(s).then((e=>{$(".btn_edit").text("交易中"),showhash(e.txid),t=!0})).catch((t=>{console.log(t)})),1==t){let t=s.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?($(".btn_edit").text("确定"),$(".mask").hide(),$(".editwin").hide(),successToast("Confirmed","交易成功",5e3),l(),w(),f()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}return}if(t<a)return void errorToast("修改广告需要销毁ADC，请先购买ADC");if(c>a)return void errorToast("销毁ADC数量太少");let d=!1;i=connweb3.addaoAddress,r={feeLimit:1e9,callValue:0,shouldPollResponse:!0};let b=[{type:"bytes4",value:e},{type:"uint256",value:o},{type:"string",value:n},{type:"uint256",value:a}],m=await tronWeb.transactionBuilder.triggerSmartContract(i,"modifyAd(bytes4,uint256,string,uint256)",r,b).catch((t=>(console.log("err1",t),!1))),h=await tronWeb.trx.sign(m.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(h).then((t=>{$(".btn_edit").text("交易中"),showhash(t.txid),d=!0})).catch((t=>{console.log(t)})),1==d){let t=h.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{"SUCCESS"===t.ret[0].contractRet?($(".btn_edit").text("确定"),$(".mask").hide(),$(".editwin").hide(),successToast("Confirmed","交易成功",5e3),l(),w(),f()):(console.log(t),errorToast("交易失败"))})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}()})),$(".editwin li").click((function(t){$(".editwin li").removeClass("on"),$(this).addClass("on");const e=$(this).context.innerText,n=$(this).context.value;o=n;let a=[2,3,4,5,6,7];if(a.includes(o)?($(".subtitle").show(),$(".subtitle").text(`修改${e}`),$(".bds .val").show(),6==n?$(".bds .val").attr("placeholder","网址结尾是 .jpg .png .mp4 .mpeg 等等"):$(".bds .val").attr("placeholder",`输入${e}`),$(".bds .token").show(),$(".testswitch").hide(),$(".ziti").hide(),$(".fontColor").hide()):1==n||8==n?($(".subtitle").show(),1==n?$(".subtitle").text("开启时，广告正常显示，否则隐藏广告"):8==n&&$(".subtitle").text("开启时，点击广告网址可直接打开网站，否则点击只能复制网址"),$(".bds .val").hide(),$(".bds .val").attr("placeholder",""),$(".bds .token").show(),$(".testswitch").show(),$(".ziti").hide(),$(".fontColor").hide()):9==n?($(".subtitle").hide(),$(".subtitle").text(""),$(".bds .val").hide(),$(".bds .val").attr("placeholder",""),$(".bds .token").show(),$(".testswitch").hide(),$(".ziti").show(),$(".fontColor").hide()):10==n?($(".subtitle").hide(),$(".subtitle").text(""),$(".bds .val").hide(),$(".bds .val").attr("placeholder",""),$(".bds .token").show(),$(".testswitch").hide(),$(".ziti").hide(),$(".fontColor").show()):11==n?($(".subtitle").hide(),$(".subtitle").text(""),$(".bds .val").hide(),$(".bds .val").attr("placeholder",""),$(".bds .token").show(),$(".testswitch").hide(),$(".ziti").hide(),$(".fontColor").hide()):12==n&&($(".subtitle").hide(),$(".subtitle").text(""),$(".bds .val").hide(),$(".bds .val").attr("placeholder",""),$(".bds .token").hide(),$(".testswitch").hide(),$(".ziti").hide(),$(".fontColor").hide()),a=[1,2,3,4,5,6,7,8,9,10],a.includes(o)){let t=u();$(".bds .msg").show(),$(".bds .msg").text(`修改广告需至少销毁 ${t}ADC`)}else 11==n?($(".bds .msg").show(),$(".bds .msg").text("近期销毁ADC越多，排名越靠前")):12==n?($(".bds .msg").show(),$(".bds .msg").text("收益估算 --")):$(".bds .msg").hide();$(".bds .btn .b1.on").show(),m()})),$(".adsgg .box .tps li").click((function(){$(this).addClass("on").siblings("li").removeClass("on"),$(".adsgg .box .ovs .bds").hide().eq($(this).index()).show()}))}))})()})();