import{S as ye,i as De,s as Te,k,q as d,a as I,l as b,m as E,r as m,h as f,c as N,n as p,b as C,D as t,M as ie,R as Ce,B as be,P as Pe,o as Se,e as Z,T as Ue,C as ge,u as K,w as Ve,x as Ie,U as Be,y as Ne,f as ne,t as ce,d as Ke,z as Ae,I as Oe,g as je}from"../../../chunks/index-5c602095.js";import{L as Fe}from"../../../chunks/Login-f1b0ae75.js";import{_ as Me}from"../../../chunks/preload-helper-41c905a7.js";import{p as qe,c as ze}from"../../../chunks/pocketbase-fd348e37.js";function Ee(r,e,n){const a=r.slice();return a[8]=e[n],a}function $e(r){let e,n,a,l,s,_,u,i,c,O,S=r[8].typavkop.toLocaleLowerCase()+"",y,M,U=r[8].vara+"",D,q,L,A,$=r[8].typavkop.toLocaleLowerCase()+"",z,H,j=r[8].pris+"",B,Q,o,v,T,w=r[8].typavkop.toLocaleLowerCase()+"",R,W,F=r[8].kategori+"",G,X,V,ue,x=r[8].typavkop.toLocaleLowerCase()+"",oe,ve,ee=r[8].datum.slice(0,10)+"",re,_e,J,pe,te=r[8].swish+"",fe,de;return{c(){e=k("div"),n=k("div"),a=k("a"),l=k("img"),u=I(),i=k("div"),c=k("p"),O=d("Namn på "),y=d(S),M=d("en: "),D=d(U),q=I(),L=k("p"),A=d("Summa på "),z=d($),H=d("en: "),B=d(j),Q=d("kr"),o=I(),v=k("p"),T=d("Kategori på "),R=d(w),W=d("en: "),G=d(F),X=I(),V=k("p"),ue=d("Datum "),oe=d(x),ve=d("en skedde: "),re=d(ee),_e=I(),J=k("p"),pe=d("Swish-nummer: "),fe=d(te),de=I(),this.h()},l(g){e=b(g,"DIV",{class:!0});var h=E(e);n=b(h,"DIV",{class:!0});var he=E(n);a=b(he,"A",{href:!0});var ke=E(a);l=b(ke,"IMG",{src:!0,alt:!0,width:!0,height:!0,loading:!0}),ke.forEach(f),he.forEach(f),u=N(h),i=b(h,"DIV",{class:!0});var P=E(i);c=b(P,"P",{class:!0});var le=E(c);O=m(le,"Namn på "),y=m(le,S),M=m(le,"en: "),D=m(le,U),le.forEach(f),q=N(P),L=b(P,"P",{class:!0});var Y=E(L);A=m(Y,"Summa på "),z=m(Y,$),H=m(Y,"en: "),B=m(Y,j),Q=m(Y,"kr"),Y.forEach(f),o=N(P),v=b(P,"P",{class:!0});var ae=E(v);T=m(ae,"Kategori på "),R=m(ae,w),W=m(ae,"en: "),G=m(ae,F),ae.forEach(f),X=N(P),V=b(P,"P",{class:!0});var se=E(V);ue=m(se,"Datum "),oe=m(se,x),ve=m(se,"en skedde: "),re=m(se,ee),se.forEach(f),_e=N(P),J=b(P,"P",{class:!0});var me=E(J);pe=m(me,"Swish-nummer: "),fe=m(me,te),me.forEach(f),P.forEach(f),de=N(h),h.forEach(f),this.h()},h(){ge(l.src,s=`https://nfdatabas.fly.dev/api/files/kvitton/${r[8].id}/${r[8].bild}?thumb=100x100`)||p(l,"src",s),p(l,"alt","bild på kvittot"),p(l,"width",80),p(l,"height",80),p(l,"loading","lazy"),p(a,"href",_=`/admin/${r[8].id}`),p(n,"class","kvittoBild svelte-nlbsc4"),p(c,"class","kvittoDetaljer svelte-nlbsc4"),p(L,"class","kvittoDetaljer svelte-nlbsc4"),p(v,"class","kvittoDetaljer svelte-nlbsc4"),p(V,"class","kvittoDetaljer svelte-nlbsc4"),p(J,"class","kvittoDetaljer svelte-nlbsc4"),p(i,"class","kvittoText svelte-nlbsc4"),p(e,"class","kvittoStil svelte-nlbsc4")},m(g,h){C(g,e,h),t(e,n),t(n,a),t(a,l),t(e,u),t(e,i),t(i,c),t(c,O),t(c,y),t(c,M),t(c,D),t(i,q),t(i,L),t(L,A),t(L,z),t(L,H),t(L,B),t(L,Q),t(i,o),t(i,v),t(v,T),t(v,R),t(v,W),t(v,G),t(i,X),t(i,V),t(V,ue),t(V,oe),t(V,ve),t(V,re),t(i,_e),t(i,J),t(J,pe),t(J,fe),t(e,de)},p(g,h){h&2&&!ge(l.src,s=`https://nfdatabas.fly.dev/api/files/kvitton/${g[8].id}/${g[8].bild}?thumb=100x100`)&&p(l,"src",s),h&2&&_!==(_=`/admin/${g[8].id}`)&&p(a,"href",_),h&2&&S!==(S=g[8].typavkop.toLocaleLowerCase()+"")&&K(y,S),h&2&&U!==(U=g[8].vara+"")&&K(D,U),h&2&&$!==($=g[8].typavkop.toLocaleLowerCase()+"")&&K(z,$),h&2&&j!==(j=g[8].pris+"")&&K(B,j),h&2&&w!==(w=g[8].typavkop.toLocaleLowerCase()+"")&&K(R,w),h&2&&F!==(F=g[8].kategori+"")&&K(G,F),h&2&&x!==(x=g[8].typavkop.toLocaleLowerCase()+"")&&K(oe,x),h&2&&ee!==(ee=g[8].datum.slice(0,10)+"")&&K(re,ee),h&2&&te!==(te=g[8].swish+"")&&K(fe,te)},d(g){g&&f(e)}}}function Le(r,e){let n,a,l=(e[2]=="alla"?!0:e[2]=="inteFixade"?e[8].fixad===!1:e[2]=="Intäkt"?e[8].typavkop==="Intäkt":e[2]=="Avgift"?e[8].typavkop==="Avgift":!1)&&$e(e);return{key:r,first:null,c(){n=Z(),l&&l.c(),a=Z(),this.h()},l(s){n=Z(),l&&l.l(s),a=Z(),this.h()},h(){this.first=n},m(s,_){C(s,n,_),l&&l.m(s,_),C(s,a,_)},p(s,_){e=s,e[2]=="alla"||(e[2]=="inteFixade"?e[8].fixad===!1:e[2]=="Intäkt"?e[8].typavkop==="Intäkt":e[2]=="Avgift"&&e[8].typavkop==="Avgift")?l?l.p(e,_):(l=$e(e),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(s){s&&f(n),l&&l.d(s),s&&f(a)}}}function He(r){let e,n,a,l,s,_,u,i,c,O,S,y,M,U,D,q,L,A,$=[],z=new Map,H,j,B=r[1];const Q=o=>o[8].id;for(let o=0;o<B.length;o+=1){let v=Ee(r,B,o),T=Q(v);z.set(T,$[o]=Le(T,v))}return{c(){e=k("span"),n=k("button"),a=d("Exportera till excel"),l=I(),s=k("div"),_=k("button"),u=d("Visa alla"),i=I(),c=k("button"),O=d("Visa inte fixade"),S=I(),y=k("button"),M=d("Visa intäkter"),U=I(),D=k("button"),q=d("Visa avgifter"),L=I(),A=k("div");for(let o=0;o<$.length;o+=1)$[o].c();this.h()},l(o){e=b(o,"SPAN",{class:!0});var v=E(e);n=b(v,"BUTTON",{class:!0});var T=E(n);a=m(T,"Exportera till excel"),T.forEach(f),v.forEach(f),l=N(o),s=b(o,"DIV",{class:!0});var w=E(s);_=b(w,"BUTTON",{name:!0});var R=E(_);u=m(R,"Visa alla"),R.forEach(f),i=N(w),c=b(w,"BUTTON",{name:!0});var W=E(c);O=m(W,"Visa inte fixade"),W.forEach(f),S=N(w),y=b(w,"BUTTON",{name:!0});var F=E(y);M=m(F,"Visa intäkter"),F.forEach(f),U=N(w),D=b(w,"BUTTON",{name:!0});var G=E(D);q=m(G,"Visa avgifter"),G.forEach(f),w.forEach(f),L=N(o),A=b(o,"DIV",{class:!0});var X=E(A);for(let V=0;V<$.length;V+=1)$[V].l(X);X.forEach(f),this.h()},h(){p(n,"class","excelKnapp svelte-nlbsc4"),p(e,"class","spanStilen svelte-nlbsc4"),p(_,"name","visaalla"),_.value="alla",p(c,"name","visaintefixade"),c.value="intefixade",p(y,"name","visaintäkter"),y.value="visaintäkter",p(D,"name","visautgifter"),D.value="visautgifter",p(s,"class","filterStilen svelte-nlbsc4"),p(A,"class","kvittoHuvud svelte-nlbsc4")},m(o,v){C(o,e,v),t(e,n),t(n,a),C(o,l,v),C(o,s,v),t(s,_),t(_,u),t(s,i),t(s,c),t(c,O),t(s,S),t(s,y),t(y,M),t(s,U),t(s,D),t(D,q),C(o,L,v),C(o,A,v);for(let T=0;T<$.length;T+=1)$[T].m(A,null);H||(j=[ie(n,"click",r[3]),ie(_,"click",r[4]),ie(c,"click",r[5]),ie(y,"click",r[6]),ie(D,"click",r[7])],H=!0)},p(o,[v]){v&6&&(B=o[1],$=Ce($,v,Q,1,o,B,z,A,Ue,Le,null,Ee))},i:be,o:be,d(o){o&&f(e),o&&f(l),o&&f(s),o&&f(L),o&&f(A);for(let v=0;v<$.length;v+=1)$[v].d();H=!1,Pe(j)}}}function Re(r,e,n){let a,l=[],s="alla";return Se(async()=>{n(1,l=await qe.collection("kvitton").getFullList(20,{sort:"-datum"})),n(0,a=(await Me(()=>import("../../../chunks/excel-ac2310f2.js"),[],import.meta.url)).default)}),[a,l,s,()=>a(l),()=>n(2,s="alla"),()=>n(2,s="inteFixade"),()=>n(2,s="Intäkt"),()=>n(2,s="Avgift")]}class Ge extends ye{constructor(e){super(),De(this,e,Re,He,Te,{})}}function we(r){let e,n;return e=new Ge({}),{c(){Ve(e.$$.fragment)},l(a){Ie(e.$$.fragment,a)},m(a,l){Ne(e,a,l),n=!0},i(a){n||(ne(e.$$.fragment,a),n=!0)},o(a){ce(e.$$.fragment,a),n=!1},d(a){Ae(e,a)}}}function Je(r){let e,n,a,l,s,_;e=new Fe({});let u=r[0]&&we();return{c(){Ve(e.$$.fragment),n=I(),a=k("html"),l=I(),u&&u.c(),s=Z(),this.h()},l(i){Ie(e.$$.fragment,i),n=N(i);const c=Be("svelte-mqn2rx",document.head);a=b(c,"HTML",{lang:!0}),E(a).forEach(f),c.forEach(f),l=N(i),u&&u.l(i),s=Z(),this.h()},h(){document.title="Admin för NF-Kvitton",p(a,"lang","se")},m(i,c){Ne(e,i,c),C(i,n,c),t(document.head,a),C(i,l,c),u&&u.m(i,c),C(i,s,c),_=!0},p(i,[c]){i[0]?u?c&1&&ne(u,1):(u=we(),u.c(),ne(u,1),u.m(s.parentNode,s)):u&&(je(),ce(u,1,1,()=>{u=null}),Ke())},i(i){_||(ne(e.$$.fragment,i),ne(u),_=!0)},o(i){ce(e.$$.fragment,i),ce(u),_=!1},d(i){Ae(e,i),i&&f(n),f(a),i&&f(l),u&&u.d(i),i&&f(s)}}}function Qe(r,e,n){let a;return Oe(r,ze,l=>n(0,a=l)),[a]}class xe extends ye{constructor(e){super(),De(this,e,Qe,Je,Te,{})}}export{xe as default};
