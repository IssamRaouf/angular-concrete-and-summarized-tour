(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uhKA:function(t,e,i){"use strict";i.r(e),i.d(e,"RoutingModule",function(){return B});var o=i("ofXK"),r=i("3Pt+"),n=i("smnK"),c=i("tk/3"),s=i("tyNb"),a=i("fXoL"),d=i("wZkO");let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-dashboard"]],decls:14,vars:4,consts:[[1,"container","container-todo"],[1,"lead"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","",3,"active","routerLink"],["todoList","routerLinkActive"],["todoForm","routerLinkActive"]],template:function(t,e){if(1&t&&(a.Pb(0,"div",0),a.Pb(1,"h1"),a.Ac(2,"Hello Dashboard!"),a.Ob(),a.Pb(3,"p",1),a.Ac(4,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),a.Ob(),a.Pb(5,"nav",2),a.Pb(6,"a",3,4),a.Ac(8,"Todos List"),a.Ob(),a.Pb(9,"a",3,5),a.Ac(11,"Todo Form"),a.Ob(),a.Ob(),a.Pb(12,"div"),a.Lb(13,"router-outlet"),a.Ob(),a.Ob()),2&t){const t=a.oc(7),e=a.oc(10);a.zb(6),a.hc("active",t.isActive)("routerLink","./todo-list"),a.zb(3),a.hc("active",e.isActive)("routerLink","./todo-form")}},directives:[d.d,s.e,d.c,s.d,s.g],styles:[""]}),t})();class m{constructor(t){this.hideDesc=!0,null!=t&&(t.hasOwnProperty("name")&&(this.name=t.name),t.hasOwnProperty("id")&&(this.id=t.id),t.hasOwnProperty("description")&&(this.description=t.description),t.hasOwnProperty("type")&&(this.type=t.type),t.hasOwnProperty("hideDesc")&&(this.hideDesc=t.hideDesc))}toggleDesc(){this.hideDesc=!this.hideDesc}}var l=function(t){return t.DEV="Developement",t.INTE="Integration",t.DESIGN="Design",t.CONCEPTION="Conception",t.MANAGEMENT="Gestion",t}({}),p=i("Wp6s"),b=i("bTqV");let h=(()=>{class t{constructor(t,e){this.router=t,this.activatedRoute=e}ngOnInit(){}details(){this.router.navigate(["../todo-details",this.ticket.id],{relativeTo:this.activatedRoute}).then(t=>console.log("navigation success"))}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(s.c),a.Kb(s.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},decls:16,vars:9,consts:[["color","primary"],[3,"hidden"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(a.Pb(0,"mat-card"),a.Pb(1,"mat-card-header"),a.Pb(2,"mat-card-title"),a.Ac(3),a.bc(4,"titlecase"),a.Ob(),a.Pb(5,"mat-card-subtitle",0),a.Ac(6),a.bc(7,"titlecase"),a.Ob(),a.Ob(),a.Pb(8,"mat-card-content"),a.Pb(9,"p",1),a.Ac(10),a.Ob(),a.Ob(),a.Pb(11,"mat-card-actions"),a.Pb(12,"button",2),a.Wb("click",function(){return e.ticket.toggleDesc()}),a.Ac(13),a.Ob(),a.Pb(14,"button",2),a.Wb("click",function(){return e.details()}),a.Ac(15,"Details "),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(3),a.Bc(a.cc(4,5,e.ticket.name)),a.zb(3),a.Bc(a.cc(7,7,e.ticket.type)),a.zb(3),a.hc("hidden",e.ticket.hideDesc),a.zb(1),a.Cc(" ",e.ticket.description," "),a.zb(3),a.Cc("",e.ticket.hideDesc?"Afficher":"Cacher"," description "))},directives:[p.a,p.d,p.g,p.f,p.c,p.b,b.a],pipes:[o.A],styles:[""]}),t})();function f(t,e){1&t&&(a.Pb(0,"div",4),a.Ac(1," aucune Ticket n'existe, pouvez-vous l'ajouter !"),a.Ob())}function k(t,e){1&t&&a.yc(0,f,2,0,"ng-template")}function g(t,e){if(1&t&&(a.Pb(0,"div",6),a.Lb(1,"app-ticket",7),a.Ob()),2&t){const t=e.$implicit;a.zb(1),a.hc("ticket",t)}}function v(t,e){if(1&t&&a.yc(0,g,2,1,"div",5),2&t){const t=a.ac();a.hc("ngForOf",t.ticketListMock)}}let y=(()=>{class t{constructor(){this.ticketListMock=[],this.descriptionMock="accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",this.ticketListMock=[new m({id:1,name:"Content projection",description:this.descriptionMock,type:l.DEV}),new m({id:2,name:"Filtre ticket",description:this.descriptionMock,type:l.DEV}),new m({id:3,name:"Integration dashboard",description:this.descriptionMock,type:l.INTE}),new m({id:4,name:"Gestion utilisateur",description:this.descriptionMock,type:l.CONCEPTION}),new m({id:5,name:"Gestion utilisateur",description:this.descriptionMock,type:l.DESIGN}),new m({id:6,name:"Content projection",description:this.descriptionMock,type:l.DEV}),new m({id:7,name:"Filtre ticket",description:this.descriptionMock,type:l.DEV}),new m({id:8,name:"Integration dashboard",description:this.descriptionMock,type:l.INTE}),new m({id:9,name:"Gestion utilisateur",description:this.descriptionMock,type:l.CONCEPTION}),new m({id:10,name:"Gestion utilisateur",description:this.descriptionMock,type:l.DESIGN})]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-todo-list"]],decls:5,vars:2,consts:[[1,"container-todo-list"],[1,"row"],[4,"ngIf","ngIfElse"],["ticketsShow",""],[1,"alert","alert-info"],["class","col-lg-4 p-3",4,"ngFor","ngForOf"],[1,"col-lg-4","p-3"],[3,"ticket"]],template:function(t,e){if(1&t&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.yc(2,k,1,0,void 0,2),a.yc(3,v,1,1,"ng-template",null,3,a.zc),a.Ob(),a.Ob()),2&t){const t=a.oc(4);a.zb(2),a.hc("ngIf",0==e.ticketListMock.length)("ngIfElse",t)}},directives:[o.s,o.r,h],styles:[""]}),t})();var O=i("kmnG"),A=i("qFsG"),P=i("d3UM"),w=i("FKr1");function T(t,e){1&t&&(a.Pb(0,"mat-error"),a.Ac(1,"Champ obligatoire"),a.Ob())}function I(t,e){1&t&&(a.Pb(0,"mat-hint"),a.Ac(1,"required"),a.Ob())}function E(t,e){if(1&t&&(a.Pb(0,"mat-option",8),a.Ac(1),a.Ob()),2&t){const t=e.$implicit;a.hc("value",t.val),a.zb(1),a.Bc(t.text)}}function D(t,e){1&t&&(a.Pb(0,"mat-error"),a.Ac(1,"Champ obligatoire"),a.Ob())}function L(t,e){1&t&&(a.Pb(0,"mat-hint"),a.Ac(1,"required"),a.Ob())}function M(t,e){1&t&&(a.Pb(0,"mat-error"),a.Ac(1,"Champ obligatoire"),a.Ob())}function C(t,e){1&t&&(a.Pb(0,"mat-hint"),a.Ac(1,"required"),a.Ob())}let z=(()=>{class t{constructor(){this.sendTicket=new a.n,this.formTicket=new r.f({name:new r.c("",r.u.required),type:new r.c("",r.u.required),description:new r.c("",r.u.required)}),this.typesAsSelect=this.enumToSelectList(l)}ngOnInit(){this.isFormSubmitted=!1}canExit(){return!(!this.isFormSubmitted&&this.formTicket.dirty&&this.formTicket.touched)||window.confirm("Etes-vous sur?")}onSubmit(){this.markFormAsTouched(this.formTicket),this.formTicket.valid&&(this.isFormSubmitted=!0,this.sendTicket.emit(new m(this.formTicket.value)))}isRequired(t){return t.errors&&void 0!==t.errors.required}get controls(){return this.formTicket.controls?this.formTicket.controls:null}enumToSelectList(t){return Object.keys(t).map(e=>({val:t[e],text:t[e]}))}markFormAsTouched(t){Object.values(t.controls).forEach(t=>{t.controls?t.controls.forEach(t=>this.markFormAsTouched(t)):t.markAsTouched()})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-todo-form"]],outputs:{sendTicket:"sendTicket"},decls:19,vars:8,consts:[[1,"container","container-todo-form"],["novalidate","",1,"form-container",3,"formGroup"],["matInput","","placeholder","Le nom de ticket","formControlName","name"],[4,"ngIf"],["placeholder","type de ticket","formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Description du ticket","formControlName","description"],["type","submit","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.Pb(1,"h1"),a.Ac(2,"Remplir la form et essaie de quitter ! pour voir le fonctionement de canDeactivate"),a.Ob(),a.Pb(3,"form",1),a.Pb(4,"mat-form-field"),a.Lb(5,"input",2),a.yc(6,T,2,0,"mat-error",3),a.yc(7,I,2,0,"mat-hint",3),a.Ob(),a.Pb(8,"mat-form-field"),a.Pb(9,"mat-select",4),a.yc(10,E,2,2,"mat-option",5),a.Ob(),a.yc(11,D,2,0,"mat-error",3),a.yc(12,L,2,0,"mat-hint",3),a.Ob(),a.Pb(13,"mat-form-field"),a.Lb(14,"textarea",6),a.yc(15,M,2,0,"mat-error",3),a.yc(16,C,2,0,"mat-hint",3),a.Ob(),a.Pb(17,"button",7),a.Wb("click",function(){return e.onSubmit()}),a.Ac(18,"Envoyer"),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(3),a.hc("formGroup",e.formTicket),a.zb(3),a.hc("ngIf",e.controls.name.hasError("required")),a.zb(1),a.hc("ngIf",e.isRequired(e.controls.name)),a.zb(3),a.hc("ngForOf",e.typesAsSelect),a.zb(1),a.hc("ngIf",e.controls.type.hasError("required")),a.zb(1),a.hc("ngIf",e.isRequired(e.controls.type)),a.zb(3),a.hc("ngIf",e.controls.description.hasError("required")),a.zb(1),a.hc("ngIf",e.isRequired(e.controls.description)))},directives:[r.v,r.n,r.g,O.c,A.a,r.b,r.m,r.e,o.s,P.a,o.r,b.a,O.b,O.f,w.j],styles:["div.container-todo-form[_ngcontent-%COMP%]{background:#fff;margin:10px 0}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;margin-bottom:5px}"]}),t})(),G=(()=>{class t{constructor(t){this.activatedRoute=t}ngOnInit(){this.ticket=this.activatedRoute.snapshot.data.detailsTodo,console.log("this.ticket",this.ticket)}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(s.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-details-todo"]],decls:13,vars:3,consts:[[1,"conatiner"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.Pb(1,"p"),a.Pb(2,"strong"),a.Ac(3,"Id"),a.Ob(),a.Ac(4),a.Ob(),a.Pb(5,"p"),a.Pb(6,"strong"),a.Ac(7,"Name"),a.Ob(),a.Ac(8),a.Ob(),a.Pb(9,"p"),a.Pb(10,"strong"),a.Ac(11,"Description"),a.Ob(),a.Ac(12),a.Ob(),a.Ob()),2&t&&(a.zb(4),a.Cc(" ",e.ticket.id,""),a.zb(4),a.Cc(" ",e.ticket.name,""),a.zb(4),a.Cc(" ",e.ticket.description,""))},styles:[""]}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-not-found"]],decls:2,vars:0,template:function(t,e){1&t&&(a.Pb(0,"p"),a.Ac(1,"not-found works!"),a.Ob())},styles:[""]}),t})();var q=i("LRne");let F=(()=>{class t{getDetailsTodoMock(t){return Object(q.a)(new m({id:t,name:"Filtre ticket",description:"accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",type:l.DEV}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),R=(()=>{class t{constructor(t){this.todoRest=t}resolve(t,e){const i=+t.paramMap.get("id");return this.todoRest.getDetailsTodoMock(i)}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(F))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();class N{constructor(t){null!=t&&(t.hasOwnProperty("id")&&(this.id=t.id),t.hasOwnProperty("username")&&(this.username=t.username),t.hasOwnProperty("email")&&(this.email=t.email),t.hasOwnProperty("isAdmin")&&(this.isAdmin=t.isAdmin))}}let j=(()=>{class t{constructor(){this.user=new N({id:9999,username:"issam raouf",email:"iraouf.soft@gmail.com",isAdmin:!1})}get isAdmin(){return this.user.isAdmin}get isAuth(){return this.user instanceof N}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),x=(()=>{class t{constructor(t,e){this.userRightsService=t,this.router=e}canActivate(t,e){return!!this.userRightsService.isAdmin||(this.router.navigate(["routing"]),alert("Impossible d'acc\xe9der \xe0 cette page , FROM GUARD OnlyAdminGuard"),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(j),a.Tb(s.c))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),K=(()=>{class t{constructor(t,e){this.userRightsService=t,this.router=e}canActivateChild(t,e){return!!this.userRightsService.isAuth||(this.router.navigate(["content-projection"]),alert("Impossible d'acc\xe9der \xe0 cette page, FORM GUARD DashboardGuard"),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(j),a.Tb(s.c))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),V=(()=>{class t{canDeactivate(t,e){return t.canExit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();const _=[{path:"",component:u,canActivateChild:[K],children:[{path:"",redirectTo:"todo-list",pathMatch:"full"},{path:"todo-list",component:y},{path:"todo-form",component:z,canDeactivate:[V]},{path:"todo-details/:id",component:G,resolve:{detailsTodo:R},canActivate:[x]},{path:"**",component:S}]}];let W=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(_)],s.f]}),t})(),B=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[F,R,j,x,K,V],imports:[[o.c,r.i,r.s,n.a,c.b,W]]}),t})()}}]);