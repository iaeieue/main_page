import{S as M,i as Q,s as W,c as X,e as b,t as A,a as q,b as p,d as g,f as F,g as N,h,j as a,k as H,l as Y,m as Z,n as u,o as G,p as U,q as J,u as $,r as ee,v as te,w as ae,x as se,y as le,z as re}from"./index.vKvP1g4G.js";import{g as oe,a as K,s as ne}from"./setting-utils.CQZuYMgl.js";const ie=e=>({}),L=e=>({});function ue(e){let t,s,l,r,o,c,n,i,d,v,f,m,x,k,y,w,D,E,I=e[0].themeColor+"";const V=e[5]["restore-icon"],C=X(V,e,e[4],L);return{c(){t=b("div"),s=b("div"),l=b("div"),r=A(I),o=q(),c=b("button"),n=b("div"),C&&C.c(),i=q(),d=b("div"),v=b("div"),f=A(e[1]),m=q(),x=b("div"),k=b("input"),this.h()},l(a){t=p(a,"DIV",{id:!0,class:!0});var u=g(t);s=p(u,"DIV",{class:!0});var b=g(s);l=p(b,"DIV",{class:!0});var $=g(l);r=F($,I),o=N($),c=p($,"BUTTON",{"aria-label":!0,class:!0});var y=g(c);n=p(y,"DIV",{class:!0});var w=g(n);C&&C.l(w),w.forEach(h),y.forEach(h),$.forEach(h),i=N(b),d=p(b,"DIV",{class:!0});var D=g(d);v=p(D,"DIV",{id:!0,class:!0});var E=g(v);f=F(E,e[1]),E.forEach(h),D.forEach(h),b.forEach(h),m=N(u),x=p(u,"DIV",{class:!0});var V=g(x);k=p(V,"INPUT",{"aria-label":!0,type:!0,min:!0,max:!0,class:!0,id:!0,step:!0,style:!0}),V.forEach(h),u.forEach(h),this.h()},h(){a(n,"class","text-[var(--btn-content)] svelte-3akcb9"),a(c,"aria-label","Reset to Default"),a(c,"class","btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9"),H(c,"opacity-0",e[1]===e[2]),H(c,"pointer-events-none",e[1]===e[2]),a(l,"class","flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9"),a(v,"id","hueValue"),a(v,"class","transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9"),a(d,"class","flex gap-1 svelte-3akcb9"),a(s,"class","flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9"),a(k,"aria-label",y=e[0].themeColor),a(k,"type","range"),a(k,"min","0"),a(k,"max","360"),a(k,"class","slider svelte-3akcb9"),a(k,"id","colorSlider"),a(k,"step","5"),Y(k,"width","100%"),a(x,"class","w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9"),a(t,"id","display-setting"),a(t,"class","float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4 svelte-3akcb9")},m(a,b){Z(a,t,b),u(t,s),u(s,l),u(l,r),u(l,o),u(l,c),u(c,n),C&&C.m(n,null),u(s,i),u(s,d),u(d,v),u(v,f),u(t,m),u(t,x),u(x,k),G(k,e[1]),w=!0,D||(E=[U(c,"click",e[3]),U(k,"change",e[6]),U(k,"input",e[6])],D=!0)},p(e,[t]){(!w||1&t)&&I!==(I=e[0].themeColor+"")&&J(r,I),C&&C.p&&(!w||16&t)&&$(C,V,e,e[4],w?te(V,e[4],t,ie):ee(e[4]),L),(!w||6&t)&&H(c,"opacity-0",e[1]===e[2]),(!w||6&t)&&H(c,"pointer-events-none",e[1]===e[2]),(!w||2&t)&&J(f,e[1]),(!w||1&t&&y!==(y=e[0].themeColor))&&a(k,"aria-label",y),2&t&&G(k,e[1])},i(e){w||(ae(C,e),w=!0)},o(e){se(C,e),w=!1},d(e){e&&h(t),C&&C.d(e),D=!1,le(E)}}}function ce(e,a,t){let{$$slots:s={},$$scope:l}=a,r=oe();const o=K();let{text:c={themeColor:""}}=a;return e.$$set=e=>{"text"in e&&t(0,c=e.text),"$$scope"in e&&t(4,l=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&(r||0===r)&&ne(r)},[c,r,o,function(){t(1,r=K())},l,s,function(){r=re(this.value),t(1,r)}]}class ve extends M{constructor(e){super(),Q(this,e,ce,ue,W,{text:0})}}export{ve as default};