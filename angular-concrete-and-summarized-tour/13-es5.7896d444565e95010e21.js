!function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{SjR9:function(t,o,i){"use strict";i.r(o),i.d(o,"ReactiveFormModule",function(){return et});var n=i("ofXK"),c=i("3Pt+"),a=i("smnK"),s=i("tyNb"),m=function t(e){r(this,t),null!=e&&(e.hasOwnProperty("firstName")&&(this.firstName=e.firstName),e.hasOwnProperty("lastName")&&(this.lastName=e.lastName),e.hasOwnProperty("email")&&(this.email=e.email),e.hasOwnProperty("grade")&&(this.grade=e.grade))},u=function(){function t(e){r(this,t),this.hideDesc=!0,null!=e&&(e.hasOwnProperty("name")&&(this.name=e.name),e.hasOwnProperty("description")&&(this.description=e.description),e.hasOwnProperty("type")&&(this.type=e.type),e.hasOwnProperty("hideDesc")&&(this.hideDesc=e.hideDesc),e.hasOwnProperty("author")&&(this.author=new m(e.author)))}return e(t,[{key:"toggleDesc",value:function(){this.hideDesc=!this.hideDesc}}]),t}(),f=function(t){return t.DEV="Developement",t.INTE="Integration",t.DESIGN="Design",t.CONCEPTION="Conception",t.MANAGEMENT="Gestion",t}({}),l=function(t){return t.DEV="Lead developer",t.MANAGER="Project Manager",t.Client="Client",t}({}),b=i("fXoL"),d=i("kmnG"),h=i("qFsG"),p=i("d3UM"),k=i("bTqV"),g=i("FKr1");function y(t,e){1&t&&(b.Pb(0,"mat-error"),b.Ac(1," Champ obligatoire "),b.Ob())}function O(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}function T(t,e){if(1&t&&(b.Pb(0,"mat-option",13),b.Ac(1),b.Ob()),2&t){var r=e.$implicit;b.hc("value",r.val),b.zb(1),b.Bc(r.text)}}function v(t,e){1&t&&(b.Pb(0,"mat-error"),b.Ac(1," Champ obligatoire "),b.Ob())}function P(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}function N(t,e){1&t&&(b.Pb(0,"mat-error"),b.Ac(1," Champ obligatoire "),b.Ob())}function w(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}function A(t,e){1&t&&(b.Nb(0),b.Ac(1," Champ obligatoire "),b.Mb())}function I(t,e){1&t&&(b.Nb(0),b.Ac(1," 10 caract\xe9re au minimum "),b.Mb())}function z(t,e){if(1&t&&(b.Pb(0,"mat-error"),b.yc(1,A,2,0,"ng-container",3),b.yc(2,I,2,0,"ng-container",3),b.Ob()),2&t){var r=b.ac();b.zb(1),b.hc("ngIf",r.formTicket.get("author").controls.firstName.errors&&r.formTicket.get("author").controls.firstName.errors.required),b.zb(1),b.hc("ngIf",r.formTicket.get("author").controls.firstName.errors&&r.formTicket.get("author").controls.firstName.errors.minlength)}}function C(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}function L(t,e){1&t&&(b.Pb(0,"mat-error"),b.Ac(1," Champ obligatoire "),b.Ob())}function M(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}function q(t,e){1&t&&(b.Nb(0),b.Ac(1," Champ obligatoire "),b.Mb())}function E(t,e){1&t&&(b.Nb(0),b.Ac(1," Email est invalide "),b.Mb())}function D(t,e){if(1&t&&(b.Pb(0,"mat-error"),b.yc(1,q,2,0,"ng-container",3),b.yc(2,E,2,0,"ng-container",3),b.Ob()),2&t){var r=b.ac();b.zb(1),b.hc("ngIf",r.formTicket.get("author").controls.email.errors&&r.formTicket.get("author").controls.email.errors.required),b.zb(1),b.hc("ngIf",r.formTicket.get("author").controls.email.errors&&r.formTicket.get("author").controls.email.errors.pattern)}}function F(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}function G(t,e){if(1&t&&(b.Pb(0,"mat-option",13),b.Ac(1),b.Ob()),2&t){var r=e.$implicit;b.hc("value",r.val),b.zb(1),b.Bc(r.text)}}function S(t,e){1&t&&(b.Pb(0,"mat-error"),b.Ac(1," Champ obligatoire "),b.Ob())}function x(t,e){1&t&&(b.Pb(0,"mat-hint"),b.Ac(1,"required "),b.Ob())}var j,_,B=((j=function(){function t(){r(this,t),this.sendTicket=new b.n}return e(t,[{key:"constructForm",value:function(){this.formTicket=new c.f({name:new c.c("",c.u.required),type:new c.c("",c.u.required),description:new c.c("",c.u.required),author:new c.f({firstName:new c.c("",[c.u.required,c.u.minLength(10)]),lastName:new c.c("",c.u.required),email:new c.c("",[c.u.required,c.u.pattern("[^ @]*@[^ @]*")]),grade:new c.c("",c.u.required)})})}},{key:"ngOnInit",value:function(){this.constructForm(),this.typesAsSelect=this.enumToSelectList(f),this.gradeAsSelect=this.enumToSelectList(l)}},{key:"onSubmit",value:function(){this.markFormAsTouched(this.formTicket),this.formTicket.valid&&(console.log("formTicket",this.formTicket),this.sendTicket.emit(new u(this.formTicket.value)))}},{key:"isRequired",value:function(t){return t.errors&&void 0!==t.errors.required}},{key:"enumToSelectList",value:function(t){return Object.keys(t).map(function(e){return{val:t[e],text:t[e]}})}},{key:"markFormAsTouched",value:function(t){var e=this;Object.values(t.controls).forEach(function(t){t.controls?e.markFormAsTouched(t):t.markAsTouched()})}},{key:"controls",get:function(){return this.formTicket.controls?this.formTicket.controls:null}}]),t}()).\u0275fac=function(t){return new(t||j)},j.\u0275cmp=b.Eb({type:j,selectors:[["app-todo-form"]],outputs:{sendTicket:"sendTicket"},decls:37,vars:17,consts:[[1,"container","container-todo-form"],["novalidate","",1,"form-container",3,"formGroup"],["matInput","","placeholder","Le nom de ticket","formControlName","name"],[4,"ngIf"],["placeholder","type de ticket","formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Description du ticket","formControlName","description"],["formGroupName","author",1,"form-container"],["matInput","","placeholder","First name","formControlName","firstName"],["matInput","","placeholder","Last name","formControlName","lastName"],["matInput","","placeholder","Email","formControlName","email"],["placeholder","Grade","formControlName","grade"],["type","submit","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"form",1),b.Pb(2,"mat-form-field"),b.Lb(3,"input",2),b.yc(4,y,2,0,"mat-error",3),b.yc(5,O,2,0,"mat-hint",3),b.Ob(),b.Pb(6,"mat-form-field"),b.Pb(7,"mat-select",4),b.yc(8,T,2,2,"mat-option",5),b.Ob(),b.yc(9,v,2,0,"mat-error",3),b.yc(10,P,2,0,"mat-hint",3),b.Ob(),b.Pb(11,"mat-form-field"),b.Lb(12,"textarea",6),b.yc(13,N,2,0,"mat-error",3),b.yc(14,w,2,0,"mat-hint",3),b.Ob(),b.Pb(15,"div",7),b.Pb(16,"h3"),b.Ac(17,"Auteur"),b.Ob(),b.Pb(18,"mat-form-field"),b.Lb(19,"input",8),b.yc(20,z,3,2,"mat-error",3),b.yc(21,C,2,0,"mat-hint",3),b.Ob(),b.Pb(22,"mat-form-field"),b.Lb(23,"input",9),b.yc(24,L,2,0,"mat-error",3),b.yc(25,M,2,0,"mat-hint",3),b.Ob(),b.Pb(26,"mat-form-field"),b.Lb(27,"input",10),b.yc(28,D,3,2,"mat-error",3),b.yc(29,F,2,0,"mat-hint",3),b.Ob(),b.Pb(30,"mat-form-field"),b.Pb(31,"mat-select",11),b.yc(32,G,2,2,"mat-option",5),b.Ob(),b.yc(33,S,2,0,"mat-error",3),b.yc(34,x,2,0,"mat-hint",3),b.Ob(),b.Ob(),b.Pb(35,"button",12),b.Wb("click",function(){return e.onSubmit()}),b.Ac(36,"Envoyer"),b.Ob(),b.Ob(),b.Ob()),2&t&&(b.zb(1),b.hc("formGroup",e.formTicket),b.zb(3),b.hc("ngIf",e.formTicket.controls.name.invalid&&(e.formTicket.controls.name.dirty||e.formTicket.controls.name.touched)),b.zb(1),b.hc("ngIf",e.formTicket.controls.name.errors&&e.formTicket.controls.name.errors.required),b.zb(3),b.hc("ngForOf",e.typesAsSelect),b.zb(1),b.hc("ngIf",e.formTicket.controls.type.invalid&&(e.formTicket.controls.type.dirty||e.formTicket.controls.type.touched)),b.zb(1),b.hc("ngIf",e.formTicket.controls.type.errors&&e.formTicket.controls.type.errors.required),b.zb(3),b.hc("ngIf",e.formTicket.controls.description.invalid&&(e.formTicket.controls.description.dirty||e.formTicket.controls.description.touched)),b.zb(1),b.hc("ngIf",e.formTicket.controls.description.errors&&e.formTicket.controls.description.errors.required),b.zb(6),b.hc("ngIf",e.formTicket.get("author").controls.firstName.invalid&&(e.formTicket.get("author").controls.firstName.dirty||e.formTicket.get("author").controls.firstName.touched)),b.zb(1),b.hc("ngIf",e.formTicket.get("author").controls.firstName.errors&&e.formTicket.get("author").controls.firstName.errors.required),b.zb(3),b.hc("ngIf",e.formTicket.get("author").controls.lastName.invalid&&(e.formTicket.get("author").controls.lastName.dirty||e.formTicket.get("author").controls.lastName.touched)),b.zb(1),b.hc("ngIf",e.formTicket.get("author").controls.lastName.errors&&e.formTicket.get("author").controls.lastName.errors.required),b.zb(3),b.hc("ngIf",e.formTicket.get("author").controls.email.invalid&&(e.formTicket.get("author").controls.email.dirty||e.formTicket.get("author").controls.email.touched)),b.zb(1),b.hc("ngIf",e.formTicket.get("author").controls.email.errors&&e.formTicket.get("author").controls.email.errors.required),b.zb(3),b.hc("ngForOf",e.gradeAsSelect),b.zb(1),b.hc("ngIf",e.formTicket.get("author").controls.grade.invalid&&(e.formTicket.get("author").controls.grade.dirty||e.formTicket.get("author").controls.grade.touched)),b.zb(1),b.hc("ngIf",e.formTicket.get("author").controls.grade.errors&&e.formTicket.get("author").controls.grade.errors.required))},directives:[c.v,c.n,c.g,d.c,h.a,c.b,c.m,c.e,n.s,p.a,n.r,c.h,k.a,d.b,d.f,g.j],styles:["div.container-todo-form[_ngcontent-%COMP%]{background:#fff;margin:10px 0}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;margin-bottom:5px}"]}),j),V=i("Wp6s"),R=((_=function(){function t(){r(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=b.Eb({type:_,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},decls:27,vars:13,consts:[["color","primary"],[3,"hidden"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(b.Pb(0,"mat-card"),b.Pb(1,"mat-card-header"),b.Pb(2,"mat-card-title"),b.Ac(3),b.bc(4,"titlecase"),b.Ob(),b.Pb(5,"mat-card-subtitle",0),b.Ac(6),b.bc(7,"titlecase"),b.Ob(),b.Ob(),b.Pb(8,"mat-card-content"),b.Pb(9,"p"),b.Pb(10,"strong"),b.Ac(11,"Auteur"),b.Ob(),b.Lb(12,"br"),b.Pb(13,"small"),b.Ac(14),b.Ob(),b.Lb(15,"br"),b.Pb(16,"small"),b.Ac(17),b.Ob(),b.Lb(18,"br"),b.Pb(19,"small"),b.Ac(20),b.Ob(),b.Lb(21,"br"),b.Ob(),b.Pb(22,"p",1),b.Ac(23),b.Ob(),b.Ob(),b.Pb(24,"mat-card-actions"),b.Pb(25,"button",2),b.Wb("click",function(){return e.ticket.toggleDesc()}),b.Ac(26),b.Ob(),b.Ob(),b.Ob()),2&t&&(b.zb(3),b.Bc(b.cc(4,9,e.ticket.name)),b.zb(3),b.Bc(b.cc(7,11,e.ticket.type)),b.zb(8),b.Dc("",e.ticket.author.firstName," ",e.ticket.author.firstName,""),b.zb(3),b.Bc(e.ticket.author.email),b.zb(3),b.Bc(e.ticket.author.grade),b.zb(2),b.hc("hidden",e.ticket.hideDesc),b.zb(1),b.Cc(" ",e.ticket.description," "),b.zb(3),b.Cc("",e.ticket.hideDesc?"Afficher":"Cacher"," description "))},directives:[V.a,V.d,V.g,V.f,V.c,V.b,k.a],pipes:[n.A],styles:[""]}),_);function W(t,e){1&t&&(b.Pb(0,"div",4),b.Ac(1," aucune Ticket n'existe, pouvez-vous l'ajouter !"),b.Ob())}function K(t,e){1&t&&b.yc(0,W,2,0,"ng-template")}function $(t,e){if(1&t&&(b.Pb(0,"div",6),b.Lb(1,"app-ticket",7),b.Ob()),2&t){var r=e.$implicit;b.zb(1),b.hc("ticket",r)}}function H(t,e){if(1&t&&b.yc(0,$,2,1,"div",5),2&t){var r=b.ac();b.hc("ngForOf",r.ticketList)}}var J,X,U,Q,Y=((J=function(){function t(){r(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||J)},J.\u0275cmp=b.Eb({type:J,selectors:[["app-todo-list"]],inputs:{ticketList:"ticketList"},decls:5,vars:2,consts:[[1,"container-todo-list"],[1,"row"],[4,"ngIf","ngIfElse"],["ticketsShow",""],[1,"alert","alert-info"],["class","col-lg-4",4,"ngFor","ngForOf"],[1,"col-lg-4"],[3,"ticket"]],template:function(t,e){if(1&t&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.yc(2,K,1,0,void 0,2),b.yc(3,H,1,1,"ng-template",null,3,b.zc),b.Ob(),b.Ob()),2&t){var r=b.oc(4);b.zb(2),b.hc("ngIf",0==e.ticketList.length)("ngIfElse",r)}},directives:[n.s,n.r,R],styles:[".container-todo-list[_ngcontent-%COMP%]   app-ticket[_ngcontent-%COMP%]{margin:5px}"]}),J),Z=[{path:"",component:(X=function(){function t(){r(this,t),this.ticketListMock=[],this.descriptionMock="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut";var e=new m({firstName:"Issam",lastName:"Raouf",email:"iraouf.soft@gmail.com",grade:l.DEV});this.ticketListMock=[new u({name:"Content projection",description:this.descriptionMock,type:f.DEV,author:e}),new u({name:"Filtre ticket",description:this.descriptionMock,type:f.DEV,author:e}),new u({name:"Integration dashboard",description:this.descriptionMock,type:f.INTE,author:e}),new u({name:"Gestion utilisateur",description:this.descriptionMock,type:f.CONCEPTION,author:e}),new u({name:"Gestion utilisateur",description:this.descriptionMock,type:f.DESIGN,author:e})]}return e(t,[{key:"ngOnInit",value:function(){}},{key:"addTicket",value:function(t){this.ticketListMock.unshift(t)}}]),t}(),X.\u0275fac=function(t){return new(t||X)},X.\u0275cmp=b.Eb({type:X,selectors:[["app-todo"]],decls:3,vars:1,consts:[[1,"container","container-todo"],[3,"sendTicket"],[3,"ticketList"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"app-todo-form",1),b.Wb("sendTicket",function(t){return e.addTicket(t)}),b.Ob(),b.Lb(2,"app-todo-list",2),b.Ob()),2&t&&(b.zb(2),b.hc("ticketList",e.ticketListMock))},directives:[B,Y],styles:[""]}),X)}],tt=((Q=function t(){r(this,t)}).\u0275mod=b.Ib({type:Q}),Q.\u0275inj=b.Hb({factory:function(t){return new(t||Q)},imports:[[s.f.forChild(Z)],s.f]}),Q),et=((U=function t(){r(this,t)}).\u0275mod=b.Ib({type:U}),U.\u0275inj=b.Hb({factory:function(t){return new(t||U)},imports:[[n.c,a.a,c.i,c.s,tt]]}),U)}}])}();