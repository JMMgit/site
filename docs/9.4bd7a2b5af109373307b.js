(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7wQB":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),u=l("Zmtf"),a=function(){function n(n,t,l,e){var u=this;this.sanitizer=t,this.http=l,this.a=e,n.paramMap.subscribe(function(n){var t=u.a.urlBackend+"/wp-json/wp/v2/posts/"+n.get("ID");u.http.get(t).subscribe(function(n){u.post=n,u.post.safe_content=u.sanitizer.bypassSecurityTrustHtml(u.post.content.rendered)})},function(n){return e.toast(n)})}return n.prototype.ngOnInit=function(){},n}(),o=function(){},i=l("Ip0R"),c=l("ZYCi"),s=l("ZYjt"),r=l("t/Na"),p=e.Ma({encapsulation:0,styles:[["main[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:4em;background:#fff}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{margin:auto;padding:2em;line-height:1.6em;text-align:center}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2em;line-height:1.2em}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:1em;line-height:1.6em;font-weight:200}@media screen and (min-width:768px){main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{width:60%}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:1.2em}}main[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:center;height:200px;width:100%;overflow:hidden}main[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]],data:{}});function g(n){return e.ib(0,[(n()(),e.Oa(0,0,null,null,4,"div",[["class","post"]],null,null,null,null,null)),(n()(),e.Oa(1,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.Oa(2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.gb(3,null,["",""])),(n()(),e.Oa(4,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){var l=t.component;n(t,3,0,l.post.title.rendered),n(t,4,0,l.post.safe_content)})}function f(n){return e.ib(0,[(n()(),e.Oa(0,0,null,null,4,"main",[],null,null,null,null,null)),(n()(),e.Oa(1,0,null,null,1,"div",[["class","banner"]],null,null,null,null,null)),(n()(),e.Oa(2,0,null,null,0,"img",[["alt",""],["src","../../../assets/img/reminder-photo.jpg"]],null,null,null,null,null)),(n()(),e.Fa(16777216,null,null,1,null,g)),e.Na(4,16384,null,0,i.n,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,4,0,t.component.post)},null)}var m=e.Ka("post-page",a,function(n){return e.ib(0,[(n()(),e.Oa(0,0,null,null,1,"post-page",[],null,null,null,f,p)),e.Na(1,114688,null,0,a,[c.a,s.c,r.c,u.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]);l.d(t,"PostPageModuleNgFactory",function(){return d});var d=e.La(o,[],function(n){return e.Va([e.Wa(512,e.j,e.Aa,[[8,[m]],[3,e.j],e.v]),e.Wa(4608,i.p,i.o,[e.s,[2,i.z]]),e.Wa(4608,r.m,r.s,[i.c,e.z,r.q]),e.Wa(4608,r.t,r.t,[r.m,r.r]),e.Wa(5120,r.a,function(n){return[n]},[r.t]),e.Wa(4608,r.p,r.p,[]),e.Wa(6144,r.n,null,[r.p]),e.Wa(4608,r.l,r.l,[r.n]),e.Wa(6144,r.b,null,[r.l]),e.Wa(4608,r.h,r.o,[r.b,e.p]),e.Wa(4608,r.c,r.c,[r.h]),e.Wa(1073742336,i.b,i.b,[]),e.Wa(1073742336,c.q,c.q,[[2,c.v],[2,c.n]]),e.Wa(1073742336,r.e,r.e,[]),e.Wa(1073742336,r.d,r.d,[]),e.Wa(1073742336,o,o,[]),e.Wa(256,r.q,"XSRF-TOKEN",[]),e.Wa(256,r.r,"X-XSRF-TOKEN",[]),e.Wa(1024,c.l,function(){return[[{path:"",component:a,pathMatch:"full"}]]},[])])})}}]);