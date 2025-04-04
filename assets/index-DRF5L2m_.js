(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();(function(){document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("keydown",function(e){if(e.key==="F12"||e.ctrlKey&&e.shiftKey&&(e.key==="I"||e.key==="i"||e.key==="J"||e.key==="j")||e.ctrlKey&&(e.key==="U"||e.key==="u"))return e.preventDefault(),!1})})();const m=[{name:"Non VIP",chineseName:"非 VIP",wagerRequirement:0,reward:0},{name:"Bronze",chineseName:"青铜",wagerRequirement:1e4,reward:15},{name:"Silver",chineseName:"白银",wagerRequirement:5e4,reward:50},{name:"Gold",chineseName:"黄金",wagerRequirement:1e5,reward:110},{name:"Platinum I",chineseName:"铂金 I",wagerRequirement:25e4,reward:200},{name:"Platinum II",chineseName:"铂金 II",wagerRequirement:5e5,reward:400},{name:"Platinum III",chineseName:"铂金 III",wagerRequirement:1e6,reward:800},{name:"Platinum IV",chineseName:"铂金 IV",wagerRequirement:25e5,reward:1600},{name:"Platinum V",chineseName:"铂金 V",wagerRequirement:5e6,reward:3200},{name:"Platinum VI",chineseName:"铂金 VI",wagerRequirement:1e7,reward:6400},{name:"Diamond I",chineseName:"钻石 I",wagerRequirement:25e6,reward:12800},{name:"Diamond II",chineseName:"钻石 II",wagerRequirement:5e7,reward:25600},{name:"Diamond III",chineseName:"钻石 III",wagerRequirement:1e8,reward:51200},{name:"Diamond IV",chineseName:"钻石 IV",wagerRequirement:25e7,reward:102400},{name:"Diamond V",chineseName:"钻石 V",wagerRequirement:5e8,reward:204800},{name:"Obsidian",chineseName:"黑曜石",wagerRequirement:1e9,reward:409600}],s=document.getElementById("vipProgress"),u=document.getElementById("progressBar"),I=document.querySelector(".progress-bar-container"),f=document.getElementById("current_rank"),g=document.getElementById("result");function d(e){return(typeof e=="string"?parseFloat(e):e).toLocaleString("zh-CN")}function p(e){const r=Math.min(Math.max(e,0),100);u.style.width=`${r}%`,r<33?u.style.background="rgb(239, 68, 68)":r<66?u.style.background="rgb(249, 115, 22)":u.style.background="rgb(34, 197, 94)",I.setAttribute("aria-valuenow",r.toString())}function c(){let e=parseFloat(s.value)||0;e<0?(e=0,s.value="0"):e>100&&(e=100,s.value="100");const r=f.value,a=m.find(o=>o.name===r);if(!a)return;const i=m.findIndex(o=>o.name===r),n=m[i+1];if(!n){g.innerHTML=`您已经达到了最高VIP等级 (${a.chineseName})`;return}const t=n.wagerRequirement-a.wagerRequirement,l=t*(e/100),v=t-l;g.innerHTML=`
    <div class="result-item">
      <span class="result-label">您当前的VIP等级是：</span>
      <span class="result-value">${a.chineseName}</span>
    </div>
    <div class="result-item">
      <span class="result-label">下一个VIP等级是：</span>
      <span class="result-value">${n.chineseName}</span>
    </div>
    <div class="result-item">
      <span class="result-label">下一个VIP等级官方奖励：</span>
      <span class="result-value">$${d(n.reward)}</span>
    </div>
    <div class="result-item">
      <span class="result-label">达到下一个VIP等级还需要投注：</span>
      <span class="result-value">$${d(v.toFixed(2))}</span>
    </div>
    <div class="result-item">
      <span class="result-label">总投注额要求：</span>
      <span class="result-value">$${d(t.toFixed(2))}</span>
    </div>
  `}function w(){if(window.addEventListener("resize",()=>{s.value&&c()}),s.addEventListener("input",e=>{let r=e.target.value;if(r.includes(".")){const i=r.split(".");i[1].length>2&&(r=i[0]+"."+i[1].substring(0,2),s.value=r)}let a=parseFloat(r)||0;a<0?(a=0,s.value="0"):a>100&&(a=100,s.value="100"),p(a),c()}),s.addEventListener("touchend",()=>{s.blur()}),f.addEventListener("change",c),p(0),c(),s.value){const e=parseFloat(s.value)||0;p(e)}}document.addEventListener("DOMContentLoaded",w);
