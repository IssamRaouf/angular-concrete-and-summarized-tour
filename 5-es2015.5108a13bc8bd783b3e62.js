(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QuKJ:function(t,e,o){"use strict";o.r(e),o.d(e,"ContentProjectionModule",function(){return F});var n=o("ofXK"),c=o("tyNb");class i{constructor(t){this.hideDesc=!0,null!=t&&(t.hasOwnProperty("name")&&(this.name=t.name),t.hasOwnProperty("description")&&(this.description=t.description),t.hasOwnProperty("type")&&(this.type=t.type),t.hasOwnProperty("hideDesc")&&(this.hideDesc=t.hideDesc))}toggleDesc(){this.hideDesc=!this.hideDesc}}var r=function(t){return t.DEV="Developement",t.INTE="Integration",t.DESIGN="Design",t.CONCEPTION="Conception",t.MANAGEMENT="Gestion",t}({}),s=o("fXoL"),a=o("3Pt+"),d=o("kmnG"),l=o("qFsG"),p=o("d3UM"),m=o("bTqV"),u=o("FKr1");function b(t,e){1&t&&(s.Pb(0,"mat-error"),s.Ac(1,"Champ obligatoire"),s.Ob())}function f(t,e){1&t&&(s.Pb(0,"mat-hint"),s.Ac(1,"required"),s.Ob())}function h(t,e){if(1&t&&(s.Pb(0,"mat-option",8),s.Ac(1),s.Ob()),2&t){const t=e.$implicit;s.hc("value",t.val),s.zb(1),s.Bc(t.text)}}function k(t,e){1&t&&(s.Pb(0,"mat-error"),s.Ac(1,"Champ obligatoire"),s.Ob())}function g(t,e){1&t&&(s.Pb(0,"mat-hint"),s.Ac(1,"required"),s.Ob())}function O(t,e){1&t&&(s.Pb(0,"mat-error"),s.Ac(1,"Champ obligatoire"),s.Ob())}function y(t,e){1&t&&(s.Pb(0,"mat-hint"),s.Ac(1,"required"),s.Ob())}const P=["*"];let v=(()=>{class t{constructor(){this.sendTicket=new s.n,this.formTicket=new a.f({name:new a.c("",a.u.required),type:new a.c("",a.u.required),description:new a.c("",a.u.required)}),this.typesAsSelect=this.enumToSelectList(r)}ngOnInit(){}onSubmit(){this.markFormAsTouched(this.formTicket),this.formTicket.valid&&(console.log("formTicket",this.formTicket),this.sendTicket.emit(new i(this.formTicket.value)))}isRequired(t){return t.errors&&void 0!==t.errors.required}get controls(){return this.formTicket.controls?this.formTicket.controls:null}enumToSelectList(t){return Object.keys(t).map(e=>({val:t[e],text:t[e]}))}markFormAsTouched(t){Object.values(t.controls).forEach(t=>{t.controls?t.controls.forEach(t=>this.markFormAsTouched(t)):t.markAsTouched()})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-todo-form"]],outputs:{sendTicket:"sendTicket"},ngContentSelectors:P,decls:18,vars:8,consts:[[1,"container","container-todo-form"],["novalidate","",1,"form-container",3,"formGroup"],["matInput","","placeholder","Le nom de ticket","formControlName","name"],[4,"ngIf"],["placeholder","type de ticket","formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Description du ticket","formControlName","description"],["type","submit","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(s.gc(),s.Pb(0,"div",0),s.fc(1),s.Pb(2,"form",1),s.Pb(3,"mat-form-field"),s.Lb(4,"input",2),s.yc(5,b,2,0,"mat-error",3),s.yc(6,f,2,0,"mat-hint",3),s.Ob(),s.Pb(7,"mat-form-field"),s.Pb(8,"mat-select",4),s.yc(9,h,2,2,"mat-option",5),s.Ob(),s.yc(10,k,2,0,"mat-error",3),s.yc(11,g,2,0,"mat-hint",3),s.Ob(),s.Pb(12,"mat-form-field"),s.Lb(13,"textarea",6),s.yc(14,O,2,0,"mat-error",3),s.yc(15,y,2,0,"mat-hint",3),s.Ob(),s.Pb(16,"button",7),s.Wb("click",function(){return e.onSubmit()}),s.Ac(17,"Envoyer"),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.zb(2),s.hc("formGroup",e.formTicket),s.zb(3),s.hc("ngIf",e.controls.name.hasError("required")),s.zb(1),s.hc("ngIf",e.isRequired(e.controls.name)),s.zb(3),s.hc("ngForOf",e.typesAsSelect),s.zb(1),s.hc("ngIf",e.controls.type.hasError("required")),s.zb(1),s.hc("ngIf",e.isRequired(e.controls.type)),s.zb(3),s.hc("ngIf",e.controls.description.hasError("required")),s.zb(1),s.hc("ngIf",e.isRequired(e.controls.description)))},directives:[a.v,a.n,a.g,d.c,l.a,a.b,a.m,a.e,n.s,p.a,n.r,m.a,d.b,d.f,u.j],styles:["div.container-todo-form[_ngcontent-%COMP%]{background:#fff;margin:10px 0}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;margin-bottom:5px}"]}),t})();var w=o("Wp6s");let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},decls:14,vars:9,consts:[["color","primary"],[3,"hidden"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(s.Pb(0,"mat-card"),s.Pb(1,"mat-card-header"),s.Pb(2,"mat-card-title"),s.Ac(3),s.bc(4,"titlecase"),s.Ob(),s.Pb(5,"mat-card-subtitle",0),s.Ac(6),s.bc(7,"titlecase"),s.Ob(),s.Ob(),s.Pb(8,"mat-card-content"),s.Pb(9,"p",1),s.Ac(10),s.Ob(),s.Ob(),s.Pb(11,"mat-card-actions"),s.Pb(12,"button",2),s.Wb("click",function(){return e.ticket.toggleDesc()}),s.Ac(13),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.zb(3),s.Bc(s.cc(4,5,e.ticket.name)),s.zb(3),s.Bc(s.cc(7,7,e.ticket.type)),s.zb(3),s.hc("hidden",e.ticket.hideDesc),s.zb(1),s.Cc(" ",e.ticket.description," "),s.zb(3),s.Cc("",e.ticket.hideDesc?"Afficher":"Cacher"," description "))},directives:[w.a,w.d,w.g,w.f,w.c,w.b,m.a],pipes:[n.A],styles:[""]}),t})();function T(t,e){1&t&&(s.Pb(0,"div",4),s.Ac(1," aucune Ticket n'existe, pouvez-vous l'ajouter !"),s.Ob())}function C(t,e){1&t&&s.yc(0,T,2,0,"ng-template")}function I(t,e){if(1&t&&(s.Pb(0,"div",6),s.Lb(1,"app-ticket",7),s.Ob()),2&t){const t=e.$implicit;s.zb(1),s.hc("ticket",t)}}function E(t,e){if(1&t&&s.yc(0,I,2,1,"div",5),2&t){const t=s.ac();s.hc("ngForOf",t.ticketList)}}const M=[[["h3"]],[["",8,"hello-world"]]],z=["h3",".hello-world"];let D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-todo-list"]],inputs:{ticketList:"ticketList"},ngContentSelectors:z,decls:7,vars:2,consts:[[1,"container-todo-list"],[1,"row"],[4,"ngIf","ngIfElse"],["ticketsShow",""],[1,"alert","alert-info"],["class","col-lg-4",4,"ngFor","ngForOf"],[1,"col-lg-4"],[3,"ticket"]],template:function(t,e){if(1&t&&(s.gc(M),s.Pb(0,"div",0),s.fc(1),s.fc(2,1),s.Pb(3,"div",1),s.yc(4,C,1,0,void 0,2),s.yc(5,E,1,1,"ng-template",null,3,s.zc),s.Ob(),s.Ob()),2&t){const t=s.oc(6);s.zb(4),s.hc("ngIf",0==e.ticketList.length)("ngIfElse",t)}},directives:[n.s,n.r,A],styles:[".container-todo-list[_ngcontent-%COMP%]   app-ticket[_ngcontent-%COMP%]{margin:5px}"]}),t})();const L=[{path:"",component:(()=>{class t{constructor(){this.ticketListMock=[],this.descriptionMock="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",this.ticketListMock=[new i({name:"Content projection",description:this.descriptionMock,type:r.DEV}),new i({name:"Filtre ticket",description:this.descriptionMock,type:r.DEV}),new i({name:"Integration dashboard",description:this.descriptionMock,type:r.INTE}),new i({name:"Gestion utilisateur",description:this.descriptionMock,type:r.CONCEPTION}),new i({name:"Gestion utilisateur",description:this.descriptionMock,type:r.DESIGN})]}ngOnInit(){}addTicket(t){this.ticketListMock.unshift(t)}onAlert(){alert("Alert button project on child component from parent")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-todo"]],decls:11,vars:1,consts:[["id","demo",1,"container","container-todo"],[3,"sendTicket"],[3,"ticketList"],["mat-raised-button","",1,"hello-world",3,"click"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"app-todo-form",1),s.Wb("sendTicket",function(t){return e.addTicket(t)}),s.Pb(2,"h3"),s.Ac(3,"Form simple pour ajouter des ticket (project sur le component child app-todo-form)"),s.Ob(),s.Pb(4,"p"),s.Ac(5,"Enjoy Projection de contenu (project sur le component child app-todo-form)"),s.Ob(),s.Ob(),s.Pb(6,"app-todo-list",2),s.Pb(7,"h3"),s.Ac(8," Prejection de contenu par element tag (project sur le component child app-todo-list)"),s.Ob(),s.Pb(9,"button",3),s.Wb("click",function(){return e.onAlert()}),s.Ac(10,"Button projet sur child app-todo-list"),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.zb(6),s.hc("ticketList",e.ticketListMock))},directives:[v,D,m.a],styles:[""]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[c.f.forChild(L)],c.f]}),t})();var q=o("smnK"),N=o("lR5k");let F=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[n.c,q.a,a.i,a.s,j,N.c.forChild()]]}),t})()}}]);