const o="light",s="dark",a="auto",r=a,u=52;function c(){const e=document.getElementById("config-carrier");return Number.parseInt(e?.dataset.hue||"250")}function m(){const e=localStorage.getItem("hue");return e?Number.parseInt(e):c()}function d(e){localStorage.setItem("hue",String(e));const t=document.querySelector(":root");t&&t.style.setProperty("--hue",String(e))}function n(e){switch(e){case o:document.documentElement.classList.remove("dark");break;case s:document.documentElement.classList.add("dark");break;case a:window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}function l(e){localStorage.setItem("theme",e),n(e)}function i(){return localStorage.getItem("theme")||r}export{a as A,s as D,o as L,u as P,c as a,i as b,l as c,n as d,m as g,d as s};