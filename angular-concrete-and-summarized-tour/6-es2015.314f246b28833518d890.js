(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7gKs":function(t,e,n){"use strict";n.r(e),n.d(e,"LifecycleHooksModule",function(){return x});var i=n("ofXK"),o=n("3Pt+"),c=n("smnK"),s=n("tyNb");class r{constructor(t){this.hideDesc=!0,null!=t&&(t.hasOwnProperty("name")&&(this.name=t.name),t.hasOwnProperty("description")&&(this.description=t.description),t.hasOwnProperty("type")&&(this.type=t.type),t.hasOwnProperty("hideDesc")&&(this.hideDesc=t.hideDesc))}toggleDesc(){this.hideDesc=!this.hideDesc}}var a=function(t){return t.DEV="Developement",t.INTE="Integration",t.DESIGN="Design",t.CONCEPTION="Conception",t.MANAGEMENT="Gestion",t}({}),l=n("fXoL"),b=n("kmnG"),d=n("qFsG"),u=n("d3UM"),f=n("bTqV"),m=n("FKr1");function p(t,e){1&t&&(l.Pb(0,"mat-error"),l.Ac(1,"Champ obligatoire"),l.Ob())}function h(t,e){1&t&&(l.Pb(0,"mat-hint"),l.Ac(1,"required"),l.Ob())}function g(t,e){if(1&t&&(l.Pb(0,"mat-option",8),l.Ac(1),l.Ob()),2&t){const t=e.$implicit;l.hc("value",t.val),l.zb(1),l.Bc(t.text)}}function k(t,e){1&t&&(l.Pb(0,"mat-error"),l.Ac(1,"Champ obligatoire"),l.Ob())}function O(t,e){1&t&&(l.Pb(0,"mat-hint"),l.Ac(1,"required"),l.Ob())}function y(t,e){1&t&&(l.Pb(0,"mat-error"),l.Ac(1,"Champ obligatoire"),l.Ob())}function P(t,e){1&t&&(l.Pb(0,"mat-hint"),l.Ac(1,"required"),l.Ob())}let v=(()=>{class t{constructor(){this.sendTicket=new l.n,this.formTicket=new o.f({name:new o.c("",o.u.required),type:new o.c("",o.u.required),description:new o.c("",o.u.required)}),this.typesAsSelect=this.enumToSelectList(a)}ngOnInit(){}onSubmit(){this.markFormAsTouched(this.formTicket),this.formTicket.valid&&this.sendTicket.emit(new r(this.formTicket.value))}isRequired(t){return t.errors&&void 0!==t.errors.required}get controls(){return this.formTicket.controls?this.formTicket.controls:null}enumToSelectList(t){return Object.keys(t).map(e=>({val:t[e],text:t[e]}))}markFormAsTouched(t){Object.values(t.controls).forEach(t=>{t.controls?t.controls.forEach(t=>this.markFormAsTouched(t)):t.markAsTouched()})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Eb({type:t,selectors:[["app-todo-form"]],outputs:{sendTicket:"sendTicket"},decls:17,vars:8,consts:[[1,"container","container-todo-form"],["novalidate","",1,"form-container",3,"formGroup"],["matInput","","placeholder","Le nom de ticket","formControlName","name"],[4,"ngIf"],["placeholder","type de ticket","formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Description du ticket","formControlName","description"],["type","submit","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.Pb(1,"form",1),l.Pb(2,"mat-form-field"),l.Lb(3,"input",2),l.yc(4,p,2,0,"mat-error",3),l.yc(5,h,2,0,"mat-hint",3),l.Ob(),l.Pb(6,"mat-form-field"),l.Pb(7,"mat-select",4),l.yc(8,g,2,2,"mat-option",5),l.Ob(),l.yc(9,k,2,0,"mat-error",3),l.yc(10,O,2,0,"mat-hint",3),l.Ob(),l.Pb(11,"mat-form-field"),l.Lb(12,"textarea",6),l.yc(13,y,2,0,"mat-error",3),l.yc(14,P,2,0,"mat-hint",3),l.Ob(),l.Pb(15,"button",7),l.Wb("click",function(){return e.onSubmit()}),l.Ac(16,"Envoyer"),l.Ob(),l.Ob(),l.Ob()),2&t&&(l.zb(1),l.hc("formGroup",e.formTicket),l.zb(3),l.hc("ngIf",e.controls.name.hasError("required")),l.zb(1),l.hc("ngIf",e.isRequired(e.controls.name)),l.zb(3),l.hc("ngForOf",e.typesAsSelect),l.zb(1),l.hc("ngIf",e.controls.type.hasError("required")),l.zb(1),l.hc("ngIf",e.isRequired(e.controls.type)),l.zb(3),l.hc("ngIf",e.controls.description.hasError("required")),l.zb(1),l.hc("ngIf",e.isRequired(e.controls.description)))},directives:[o.v,o.n,o.g,b.c,d.a,o.b,o.m,o.e,i.s,u.a,i.r,f.a,b.b,b.f,m.j],styles:["div.container-todo-form[_ngcontent-%COMP%]{background:#fff;margin:10px 0}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;margin-bottom:5px}"]}),t})();var A=n("Wp6s");let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Eb({type:t,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},decls:14,vars:9,consts:[["color","primary"],[3,"hidden"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(l.Pb(0,"mat-card"),l.Pb(1,"mat-card-header"),l.Pb(2,"mat-card-title"),l.Ac(3),l.bc(4,"titlecase"),l.Ob(),l.Pb(5,"mat-card-subtitle",0),l.Ac(6),l.bc(7,"titlecase"),l.Ob(),l.Ob(),l.Pb(8,"mat-card-content"),l.Pb(9,"p",1),l.Ac(10),l.Ob(),l.Ob(),l.Pb(11,"mat-card-actions"),l.Pb(12,"button",2),l.Wb("click",function(){return e.ticket.toggleDesc()}),l.Ac(13),l.Ob(),l.Ob(),l.Ob()),2&t&&(l.zb(3),l.Bc(l.cc(4,5,e.ticket.name)),l.zb(3),l.Bc(l.cc(7,7,e.ticket.type)),l.zb(3),l.hc("hidden",e.ticket.hideDesc),l.zb(1),l.Cc(" ",e.ticket.description," "),l.zb(3),l.Cc("",e.ticket.hideDesc?"Afficher":"Cacher"," description "))},directives:[A.a,A.d,A.g,A.f,A.c,A.b,f.a],pipes:[i.A],styles:[""]}),t})();function I(t,e){if(1&t&&(l.Pb(0,"div"),l.Pb(1,"strong"),l.Ac(2),l.Ob(),l.Ob()),2&t){const t=l.ac().$implicit;l.zb(2),l.Cc("* length : ",t.value.length,"")}}function D(t,e){if(1&t&&(l.Pb(0,"div",9),l.Ac(1," * "),l.Pb(2,"strong"),l.Ac(3),l.Ob(),l.Ac(4),l.bc(5,"json"),l.yc(6,I,3,1,"div",11),l.Ob()),2&t){const t=e.$implicit,n=l.ac(5);l.zb(3),l.Bc(t.key),l.zb(1),l.Cc(" : ",l.cc(5,3,t.value)," "),l.zb(2),l.hc("ngIf",n.isArray(t.value))}}function L(t,e){if(1&t&&(l.Pb(0,"div"),l.Pb(1,"div",9),l.Ac(2," - "),l.Pb(3,"strong"),l.Ac(4),l.bc(5,"uppercase"),l.Ob(),l.yc(6,D,7,5,"div",10),l.bc(7,"keyvalue"),l.Ob(),l.Lb(8,"br"),l.Lb(9,"br"),l.Ob()),2&t){const t=e.$implicit;l.zb(4),l.Bc(l.cc(5,2,t.key)),l.zb(2),l.hc("ngForOf",l.cc(7,4,t.value))}}function w(t,e){if(1&t&&(l.Nb(0,9),l.Lb(1,"br"),l.Pb(2,"strong",9),l.Ac(3,"Details:"),l.Ob(),l.Lb(4,"br"),l.yc(5,L,10,6,"div",7),l.bc(6,"keyvalue"),l.Mb()),2&t){const t=l.ac().$implicit;l.zb(5),l.hc("ngForOf",l.cc(6,1,t.details))}}function z(t,e){if(1&t&&(l.Pb(0,"p"),l.Ac(1),l.yc(2,w,7,3,"ng-container",8),l.Ob()),2&t){const t=e.$implicit;l.zb(1),l.Dc(" - N\xb0 ",t.num," , hook name :",t.name," "),l.zb(1),l.hc("ngIf",t.details)}}function T(t,e){if(1&t){const t=l.Qb();l.Pb(0,"div",5),l.Pb(1,"h2"),l.Ac(2,"DETAILS HOOKS LOG"),l.Ob(),l.Pb(3,"button",6),l.Wb("click",function(){return l.pc(t),l.ac().clear()}),l.Ac(4,"R\xe9initialiser la list"),l.Ob(),l.yc(5,z,3,3,"p",7),l.Ob()}if(2&t){const t=l.ac();l.zb(5),l.hc("ngForOf",t.listDetailsHooks)}}function M(t,e){1&t&&(l.Pb(0,"div",12),l.Ac(1," aucune Ticket n'existe, pouvez-vous l'ajouter !"),l.Ob())}function E(t,e){1&t&&l.yc(0,M,2,0,"ng-template")}function F(t,e){if(1&t&&(l.Pb(0,"div",14),l.Lb(1,"app-ticket",15),l.Ob()),2&t){const t=e.$implicit;l.zb(1),l.hc("ticket",t)}}function H(t,e){if(1&t&&l.yc(0,F,2,1,"div",13),2&t){const t=l.ac();l.hc("ngForOf",t.ticketList)}}let q=(()=>{class t{constructor(){this.listDetailsHooks=[],this.counter=0}ngOnChanges(t){console.log("ngOnChanges");for(const e in t)console.log("changes isFirstChange : "+t[e].isFirstChange()),console.log(`Current Value for ${e} is `,t[e].currentValue),console.log(`Previous Value for ${e} is :`,t[e].previousValue);this.setListDetailsHooks("ngOnChanges",t)}ngOnInit(){this.setListDetailsHooks("ngOnInit"),console.log("ngOnInit  - ticketList is "+this.ticketList)}ngDoCheck(){this.setListDetailsHooks("ngDoCheck"),console.log("ngDoCheck")}ngAfterContentInit(){this.setListDetailsHooks("ngAfterContentInit"),console.log("ngAfterContentInit")}ngAfterContentChecked(){this.setListDetailsHooks("ngAfterContentChecked"),console.log("ngAfterContentChecked")}ngAfterViewInit(){this.setListDetailsHooks("ngAfterViewInit"),console.log("ngAfterViewInit")}ngAfterViewChecked(){this.setListDetailsHooks("ngAfterViewChecked"),console.log("ngAfterViewChecked")}ngOnDestroy(){this.setListDetailsHooks("ngOnDestroy"),console.log("ngOnDestroy")}setListDetailsHooks(t,e={}){this.counter++;const n={num:this.counter,name:t};Object.keys(e).length>0&&(n.details=e),this.listDetailsHooks.push(n)}clear(){this.counter=0,this.listDetailsHooks=[]}isArray(t){return Array.isArray(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Eb({type:t,selectors:[["app-todo-list"]],inputs:{ticketList:"ticketList"},features:[l.xb],decls:6,vars:3,consts:[[1,"container-todo-list"],["class","hooks-details",4,"ngIf"],[1,"row"],[4,"ngIf","ngIfElse"],["ticketsShow",""],[1,"hooks-details"],["mat-raised-button","",3,"click"],[4,"ngFor","ngForOf"],["class","marginLeft",4,"ngIf"],[1,"marginLeft"],["class","marginLeft",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"alert","alert-info"],["class","col-lg-4",4,"ngFor","ngForOf"],[1,"col-lg-4"],[3,"ticket"]],template:function(t,e){if(1&t&&(l.Pb(0,"div",0),l.yc(1,T,6,1,"div",1),l.Pb(2,"div",2),l.yc(3,E,1,0,void 0,3),l.yc(4,H,1,1,"ng-template",null,4,l.zc),l.Ob(),l.Ob()),2&t){const t=l.oc(5);l.zb(1),l.hc("ngIf",e.listDetailsHooks.length>0),l.zb(2),l.hc("ngIf",0==e.ticketList.length)("ngIfElse",t)}},directives:[i.s,f.a,i.r,C],pipes:[i.l,i.B,i.k],styles:[".container-todo-list[_ngcontent-%COMP%]   app-ticket[_ngcontent-%COMP%]{margin:5px}.container-todo-list[_ngcontent-%COMP%]   .marginLeft[_ngcontent-%COMP%]{margin-left:10px}"]}),t})();const N=[{path:"",component:(()=>{class t{constructor(){this.descriptionMock="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",this.ticketListMock=[new r({name:"Content projection",description:this.descriptionMock,type:a.DEV}),new r({name:"Filtre ticket",description:this.descriptionMock,type:a.DEV}),new r({name:"Integration dashboard",description:this.descriptionMock,type:a.INTE}),new r({name:"Gestion utilisateur",description:this.descriptionMock,type:a.CONCEPTION}),new r({name:"Gestion utilisateur",description:this.descriptionMock,type:a.DESIGN})]}ngOnInit(){}addTicket(t){this.ticketListMock=[t,...this.ticketListMock]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Eb({type:t,selectors:[["app-todo"]],decls:3,vars:1,consts:[[1,"container","container-todo"],[3,"sendTicket"],[3,"ticketList"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.Pb(1,"app-todo-form",1),l.Wb("sendTicket",function(t){return e.addTicket(t)}),l.Ob(),l.Lb(2,"app-todo-list",2),l.Ob()),2&t&&(l.zb(2),l.hc("ticketList",e.ticketListMock))},directives:[v,q],styles:[""]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(N)],s.f]}),t})(),x=(()=>{class t{}return t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({factory:function(e){return new(e||t)},imports:[[i.c,c.a,o.i,o.s,V]]}),t})()}}]);