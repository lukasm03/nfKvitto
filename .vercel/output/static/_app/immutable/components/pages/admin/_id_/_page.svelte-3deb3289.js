import{S as ve,i as _e,s as he,k as l,a as I,e as re,U as fe,l as n,m as s,h as i,c as B,n as o,D as t,b as ht,B as se,o as me,O as de,Q as ue,q as m,r as b,C as ft,M as S,P as ce,J as pe,L as $,K as vt,N as be}from"../../../../chunks/index-5c602095.js";import{p as Gt}from"../../../../chunks/pocketbase-fd348e37.js";import{j as tt}from"../../../../chunks/singletons-62e9cdab.js";tt.disable_scroll_handling;const _t=tt.goto;tt.invalidate;tt.invalidateAll;tt.preload_data;tt.preload_code;tt.before_navigate;tt.after_navigate;function ke(r){let p,a,v,k,e,h,u,d,c,E,z,P,K;return{c(){p=l("div"),a=l("div"),v=l("button"),k=m("Tillbaka till admin"),e=I(),h=l("button"),u=m("Forsätt redigera kvitto"),d=I(),c=l("div"),E=l("img"),this.h()},l(g){p=n(g,"DIV",{class:!0});var f=s(p);a=n(f,"DIV",{class:!0});var U=s(a);v=n(U,"BUTTON",{});var M=s(v);k=b(M,"Tillbaka till admin"),M.forEach(i),e=B(U),h=n(U,"BUTTON",{});var w=s(h);u=b(w,"Forsätt redigera kvitto"),w.forEach(i),U.forEach(i),d=B(f),c=n(f,"DIV",{class:!0});var R=s(c);E=n(R,"IMG",{src:!0,alt:!0,width:!0,height:!0}),R.forEach(i),f.forEach(i),this.h()},h(){o(a,"class","knappStilen svelte-43z2mb"),ft(E.src,z=r[3])||o(E,"src",z),o(E,"alt","QR-kod"),o(E,"width",150),o(E,"height",150),o(c,"class","divByt svelte-43z2mb"),o(p,"class","huvudStilen svelte-43z2mb")},m(g,f){ht(g,p,f),t(p,a),t(a,v),t(v,k),t(a,e),t(a,h),t(h,u),t(p,d),t(p,c),t(c,E),P||(K=[S(v,"click",r[19]),S(h,"click",r[20])],P=!0)},p(g,f){f&8&&!ft(E.src,z=g[3])&&o(E,"src",z)},d(g){g&&i(p),P=!1,ce(K)}}}function ge(r){let p,a,v,k,e,h,u,d,c,E,z,P,K,g,f,U,M,w,R,_,j,ut,D,pt,T,F,V,mt,lt,bt,N,q,kt,C,gt,Q,Et,J,Tt,G,yt,H,Ot,Nt,nt,Lt,W,It,it,Bt,X,Pt,ot,St,Y,wt,rt,Ut,A,Z,Dt,x,Ft,At,et,zt,Kt,Ht;return{c(){p=l("div"),a=l("div"),v=l("button"),k=m("Tillbaka till admin"),e=I(),h=l("button"),u=m("Ta bort kvitto"),d=I(),c=l("button"),E=m("Visa QR-kod"),z=I(),P=l("div"),K=l("div"),g=l("label"),f=l("img"),M=I(),w=l("input"),R=I(),_=l("form"),j=l("label"),ut=m(`Namn på köpet:
					`),D=l("input"),pt=I(),T=l("label"),F=m(`Pris på köpet:
					`),V=l("input"),mt=I(),lt=l("label"),bt=m(`Kategori på köpet:
					`),N=l("select"),q=l("option"),kt=m("Laborationer"),C=l("option"),gt=m("Medlemsavgifter"),Q=l("option"),Et=m("Kök & fester"),J=l("option"),Tt=m("Försäljning"),G=l("option"),yt=m("NF-artiklar"),H=l("option"),Ot=m("Övrigt"),Nt=I(),nt=l("label"),Lt=m(`Datum köpet skedde:
					`),W=l("input"),It=I(),it=l("label"),Bt=m(`Swish-nummer:
					`),X=l("input"),Pt=I(),ot=l("label"),St=m(`Fixad:
					`),Y=l("input"),wt=I(),rt=l("label"),Ut=m(`Typ av köp:
					`),A=l("select"),Z=l("option"),Dt=m("Avgift"),x=l("option"),Ft=m("Intäkt"),At=I(),et=l("button"),zt=m("Spara ändringar"),this.h()},l(y){p=n(y,"DIV",{class:!0});var L=s(p);a=n(L,"DIV",{class:!0});var st=s(a);v=n(st,"BUTTON",{});var Wt=s(v);k=b(Wt,"Tillbaka till admin"),Wt.forEach(i),e=B(st),h=n(st,"BUTTON",{});var Xt=s(h);u=b(Xt,"Ta bort kvitto"),Xt.forEach(i),d=B(st),c=n(st,"BUTTON",{});var Yt=s(c);E=b(Yt,"Visa QR-kod"),Yt.forEach(i),st.forEach(i),z=B(L),P=n(L,"DIV",{class:!0});var dt=s(P);K=n(dt,"DIV",{});var Zt=s(K);g=n(Zt,"LABEL",{class:!0});var ct=s(g);f=n(ct,"IMG",{src:!0,alt:!0,width:!0,height:!0,loading:!0}),M=B(ct),w=n(ct,"INPUT",{type:!0,name:!0,class:!0}),ct.forEach(i),Zt.forEach(i),R=B(dt),_=n(dt,"FORM",{class:!0});var O=s(_);j=n(O,"LABEL",{});var Vt=s(j);ut=b(Vt,`Namn på köpet:
					`),D=n(Vt,"INPUT",{type:!0,name:!0}),Vt.forEach(i),pt=B(O),T=n(O,"LABEL",{});var Mt=s(T);F=b(Mt,`Pris på köpet:
					`),V=n(Mt,"INPUT",{type:!0,name:!0}),Mt.forEach(i),mt=B(O),lt=n(O,"LABEL",{});var Rt=s(lt);bt=b(Rt,`Kategori på köpet:
					`),N=n(Rt,"SELECT",{name:!0});var at=s(N);q=n(at,"OPTION",{});var xt=s(q);kt=b(xt,"Laborationer"),xt.forEach(i),C=n(at,"OPTION",{});var $t=s(C);gt=b($t,"Medlemsavgifter"),$t.forEach(i),Q=n(at,"OPTION",{});var te=s(Q);Et=b(te,"Kök & fester"),te.forEach(i),J=n(at,"OPTION",{});var ee=s(J);Tt=b(ee,"Försäljning"),ee.forEach(i),G=n(at,"OPTION",{});var ae=s(G);yt=b(ae,"NF-artiklar"),ae.forEach(i),H=n(at,"OPTION",{});var le=s(H);Ot=b(le,"Övrigt"),le.forEach(i),at.forEach(i),Rt.forEach(i),Nt=B(O),nt=n(O,"LABEL",{});var jt=s(nt);Lt=b(jt,`Datum köpet skedde:
					`),W=n(jt,"INPUT",{type:!0,name:!0}),jt.forEach(i),It=B(O),it=n(O,"LABEL",{});var qt=s(it);Bt=b(qt,`Swish-nummer:
					`),X=n(qt,"INPUT",{type:!0,name:!0}),qt.forEach(i),Pt=B(O),ot=n(O,"LABEL",{});var Ct=s(ot);St=b(Ct,`Fixad:
					`),Y=n(Ct,"INPUT",{type:!0,name:!0}),Ct.forEach(i),wt=B(O),rt=n(O,"LABEL",{});var Qt=s(rt);Ut=b(Qt,`Typ av köp:
					`),A=n(Qt,"SELECT",{name:!0});var Jt=s(A);Z=n(Jt,"OPTION",{});var ne=s(Z);Dt=b(ne,"Avgift"),ne.forEach(i),x=n(Jt,"OPTION",{});var ie=s(x);Ft=b(ie,"Intäkt"),ie.forEach(i),Jt.forEach(i),Qt.forEach(i),At=B(O),et=n(O,"BUTTON",{class:!0,type:!0});var oe=s(et);zt=b(oe,"Spara ändringar"),oe.forEach(i),O.forEach(i),dt.forEach(i),L.forEach(i),this.h()},h(){o(a,"class","knappStilen svelte-43z2mb"),ft(f.src,U=r[2])||o(f,"src",U),o(f,"alt","bild på kvittot"),o(f,"width",120),o(f,"height",150),o(f,"loading","lazy"),o(w,"type","file"),o(w,"name","Bild"),o(w,"class","hide svelte-43z2mb"),o(g,"class","pekare svelte-43z2mb"),o(D,"type","text"),o(D,"name","Vara"),o(V,"type","number"),o(V,"name","Pris"),q.__value="Laborationer",q.value=q.__value,C.__value="Medlemsavgifter",C.value=C.__value,Q.__value="Kök&fester",Q.value=Q.__value,J.__value="Försäljning",J.value=J.__value,G.__value="NF-artiklar",G.value=G.__value,H.__value="Övrigt",H.value=H.__value,o(N,"name","Kategori"),r[1].kategori===void 0&&pe(()=>r[14].call(N)),o(W,"type","date"),o(W,"name","Datum"),o(X,"type","tel"),o(X,"name","Swish"),o(Y,"type","checkbox"),o(Y,"name","Fixad"),Z.__value="Avgift",Z.value=Z.__value,x.__value="Intäkt",x.value=x.__value,o(A,"name","Typavköp"),r[1].typavkop===void 0&&pe(()=>r[18].call(A)),o(et,"class","skickaKnapp svelte-43z2mb"),o(et,"type","submit"),o(_,"class","formStilen svelte-43z2mb"),o(P,"class","divByt svelte-43z2mb"),o(p,"class","huvudStilen svelte-43z2mb")},m(y,L){ht(y,p,L),t(p,a),t(a,v),t(v,k),t(a,e),t(a,h),t(h,u),t(a,d),t(a,c),t(c,E),t(p,z),t(p,P),t(P,K),t(K,g),t(g,f),t(g,M),t(g,w),t(P,R),t(P,_),t(_,j),t(j,ut),t(j,D),$(D,r[1].vara),t(_,pt),t(_,T),t(T,F),t(T,V),$(V,r[1].pris),t(_,mt),t(_,lt),t(lt,bt),t(lt,N),t(N,q),t(q,kt),t(N,C),t(C,gt),t(N,Q),t(Q,Et),t(N,J),t(J,Tt),t(N,G),t(G,yt),t(N,H),t(H,Ot),vt(N,r[1].kategori),t(_,Nt),t(_,nt),t(nt,Lt),t(nt,W),$(W,r[1].datum),t(_,It),t(_,it),t(it,Bt),t(it,X),$(X,r[1].swish),t(_,Pt),t(_,ot),t(ot,St),t(ot,Y),Y.checked=r[1].fixad,t(_,wt),t(_,rt),t(rt,Ut),t(rt,A),t(A,Z),t(Z,Dt),t(A,x),t(x,Ft),vt(A,r[1].typavkop),t(_,At),t(_,et),t(et,zt),Kt||(Ht=[S(v,"click",r[8]),S(h,"click",r[9]),S(c,"click",r[10]),S(w,"input",r[11]),S(D,"input",r[12]),S(V,"input",r[13]),S(N,"change",r[14]),S(W,"input",r[15]),S(X,"input",r[16]),S(Y,"change",r[17]),S(A,"change",r[18]),S(_,"submit",be(r[6]))],Kt=!0)},p(y,L){L&4&&!ft(f.src,U=y[2])&&o(f,"src",U),L&2&&D.value!==y[1].vara&&$(D,y[1].vara),L&2&&de(V.value)!==y[1].pris&&$(V,y[1].pris),L&2&&vt(N,y[1].kategori),L&2&&$(W,y[1].datum),L&2&&$(X,y[1].swish),L&2&&(Y.checked=y[1].fixad),L&2&&vt(A,y[1].typavkop)},d(y){y&&i(p),Kt=!1,ce(Ht)}}}function Ee(r){let p,a,v,k;document.title=p="Ändra kvitto: "+r[1].vara;function e(d,c){return d[0]?ke:ge}let h=e(r),u=h(r);return{c(){a=l("html"),v=I(),u.c(),k=re(),this.h()},l(d){const c=fe("svelte-87fs03",document.head);a=n(c,"HTML",{lang:!0}),s(a).forEach(i),c.forEach(i),v=B(d),u.l(d),k=re(),this.h()},h(){o(a,"lang","se")},m(d,c){t(document.head,a),ht(d,v,c),u.m(d,c),ht(d,k,c)},p(d,[c]){c&2&&p!==(p="Ändra kvitto: "+d[1].vara)&&(document.title=p),h===(h=e(d))&&u?u.p(d,c):(u.d(1),u=h(d),u&&(u.c(),u.m(k.parentNode,k)))},i:se,o:se,d(d){i(a),d&&i(v),u.d(d),d&&i(k)}}}function Te(r,p,a){let{data:v}=p,k=!1,e={},h,u=new FormData,d;me(async()=>{a(1,e=await Gt.collection("kvitton").getOne(v.kvitto.id)),a(2,h=`https://nfdatabas.fly.dev/api/files/kvitton/${e.id}/${e.bild}?thumb=100x100`);const T={method:"POST",headers:{"Content-Type":"application/json"},body:`{"payee":${JSON.stringify(`${e.swish}`)},"amount":{"value":${e.pris}},"message":{"value":${JSON.stringify(e.vara)}}}`};a(1,e.datum=e.datum.split(" ")[0],e),console.log(e),console.log(e.datum),fetch("https://api.swish.nu/qr/v2/prefilled",T).then(F=>F.blob()).then(F=>URL.createObjectURL(F)).then(F=>a(3,d=F)).catch(F=>console.error(F))});async function c(){await Gt.collection("kvitton").delete(v.kvitto.id),_t("/admin")}async function E(T){a(2,h=URL.createObjectURL(T.currentTarget.files[0])),a(1,e.bild=T.currentTarget.files[0],e)}async function z(){u.append("vara",e.vara),u.append("pris",e.pris.toString()),u.append("datum",e.datum.toString()),u.append("bild",e.bild),u.append("kategori",e.kategori),u.append("swish",e.swish),u.append("fixad",e.fixad),u.append("typavkop",e.typavkop),await Gt.collection("kvitton").update(v.kvitto.id,u),_t("/admin")}const P=()=>{_t("/admin")},K=()=>c(),g=()=>a(0,k=!0),f=T=>E(T);function U(){e.vara=this.value,a(1,e)}function M(){e.pris=de(this.value),a(1,e)}function w(){e.kategori=ue(this),a(1,e)}function R(){e.datum=this.value,a(1,e)}function _(){e.swish=this.value,a(1,e)}function j(){e.fixad=this.checked,a(1,e)}function ut(){e.typavkop=ue(this),a(1,e)}const D=()=>{_t("/admin")},pt=()=>a(0,k=!1);return r.$$set=T=>{"data"in T&&a(7,v=T.data)},[k,e,h,d,c,E,z,v,P,K,g,f,U,M,w,R,_,j,ut,D,pt]}class Le extends ve{constructor(p){super(),_e(this,p,Te,Ee,he,{data:7})}}export{Le as default};
