!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QuKJ:function(e,o,i){"use strict";i.r(o),i.d(o,"ContentProjectionModule",function(){return K});var c=i("ofXK"),r=i("tyNb"),s=function(){function e(n){t(this,e),this.hideDesc=!0,null!=n&&(n.hasOwnProperty("name")&&(this.name=n.name),n.hasOwnProperty("description")&&(this.description=n.description),n.hasOwnProperty("type")&&(this.type=n.type),n.hasOwnProperty("hideDesc")&&(this.hideDesc=n.hideDesc))}return n(e,[{key:"toggleDesc",value:function(){this.hideDesc=!this.hideDesc}}]),e}(),a=function(t){return t.DEV="Developement",t.INTE="Integration",t.DESIGN="Design",t.CONCEPTION="Conception",t.MANAGEMENT="Gestion",t}({}),u=i("fXoL"),l=i("3Pt+"),d=i("kmnG"),p=i("qFsG"),f=i("d3UM"),m=i("bTqV"),b=i("FKr1");function h(t,e){1&t&&(u.Pb(0,"mat-error"),u.Ac(1,"Champ obligatoire"),u.Ob())}function k(t,e){1&t&&(u.Pb(0,"mat-hint"),u.Ac(1,"required"),u.Ob())}function y(t,e){if(1&t&&(u.Pb(0,"mat-option",8),u.Ac(1),u.Ob()),2&t){var n=e.$implicit;u.hc("value",n.val),u.zb(1),u.Bc(n.text)}}function g(t,e){1&t&&(u.Pb(0,"mat-error"),u.Ac(1,"Champ obligatoire"),u.Ob())}function O(t,e){1&t&&(u.Pb(0,"mat-hint"),u.Ac(1,"required"),u.Ob())}function v(t,e){1&t&&(u.Pb(0,"mat-error"),u.Ac(1,"Champ obligatoire"),u.Ob())}function P(t,e){1&t&&(u.Pb(0,"mat-hint"),u.Ac(1,"required"),u.Ob())}var w,T,A=["*"],C=((w=function(){function e(){t(this,e),this.sendTicket=new u.n,this.formTicket=new l.f({name:new l.c("",l.u.required),type:new l.c("",l.u.required),description:new l.c("",l.u.required)}),this.typesAsSelect=this.enumToSelectList(a)}return n(e,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){this.markFormAsTouched(this.formTicket),this.formTicket.valid&&(console.log("formTicket",this.formTicket),this.sendTicket.emit(new s(this.formTicket.value)))}},{key:"isRequired",value:function(t){return t.errors&&void 0!==t.errors.required}},{key:"enumToSelectList",value:function(t){return Object.keys(t).map(function(e){return{val:t[e],text:t[e]}})}},{key:"markFormAsTouched",value:function(t){var e=this;Object.values(t.controls).forEach(function(t){t.controls?t.controls.forEach(function(t){return e.markFormAsTouched(t)}):t.markAsTouched()})}},{key:"controls",get:function(){return this.formTicket.controls?this.formTicket.controls:null}}]),e}()).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=u.Eb({type:w,selectors:[["app-todo-form"]],outputs:{sendTicket:"sendTicket"},ngContentSelectors:A,decls:18,vars:8,consts:[[1,"container","container-todo-form"],["novalidate","",1,"form-container",3,"formGroup"],["matInput","","placeholder","Le nom de ticket","formControlName","name"],[4,"ngIf"],["placeholder","type de ticket","formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Description du ticket","formControlName","description"],["type","submit","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(u.gc(),u.Pb(0,"div",0),u.fc(1),u.Pb(2,"form",1),u.Pb(3,"mat-form-field"),u.Lb(4,"input",2),u.yc(5,h,2,0,"mat-error",3),u.yc(6,k,2,0,"mat-hint",3),u.Ob(),u.Pb(7,"mat-form-field"),u.Pb(8,"mat-select",4),u.yc(9,y,2,2,"mat-option",5),u.Ob(),u.yc(10,g,2,0,"mat-error",3),u.yc(11,O,2,0,"mat-hint",3),u.Ob(),u.Pb(12,"mat-form-field"),u.Lb(13,"textarea",6),u.yc(14,v,2,0,"mat-error",3),u.yc(15,P,2,0,"mat-hint",3),u.Ob(),u.Pb(16,"button",7),u.Wb("click",function(){return e.onSubmit()}),u.Ac(17,"Envoyer"),u.Ob(),u.Ob(),u.Ob()),2&t&&(u.zb(2),u.hc("formGroup",e.formTicket),u.zb(3),u.hc("ngIf",e.controls.name.hasError("required")),u.zb(1),u.hc("ngIf",e.isRequired(e.controls.name)),u.zb(3),u.hc("ngForOf",e.typesAsSelect),u.zb(1),u.hc("ngIf",e.controls.type.hasError("required")),u.zb(1),u.hc("ngIf",e.isRequired(e.controls.type)),u.zb(3),u.hc("ngIf",e.controls.description.hasError("required")),u.zb(1),u.hc("ngIf",e.isRequired(e.controls.description)))},directives:[l.v,l.n,l.g,d.c,p.a,l.b,l.m,l.e,c.s,f.a,c.r,m.a,d.b,d.f,b.j],styles:["div.container-todo-form[_ngcontent-%COMP%]{background:#fff;margin:10px 0}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}div.container-todo-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;margin-bottom:5px}"]}),w),I=i("Wp6s"),E=((T=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=u.Eb({type:T,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},decls:14,vars:9,consts:[["color","primary"],[3,"hidden"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(u.Pb(0,"mat-card"),u.Pb(1,"mat-card-header"),u.Pb(2,"mat-card-title"),u.Ac(3),u.bc(4,"titlecase"),u.Ob(),u.Pb(5,"mat-card-subtitle",0),u.Ac(6),u.bc(7,"titlecase"),u.Ob(),u.Ob(),u.Pb(8,"mat-card-content"),u.Pb(9,"p",1),u.Ac(10),u.Ob(),u.Ob(),u.Pb(11,"mat-card-actions"),u.Pb(12,"button",2),u.Wb("click",function(){return e.ticket.toggleDesc()}),u.Ac(13),u.Ob(),u.Ob(),u.Ob()),2&t&&(u.zb(3),u.Bc(u.cc(4,5,e.ticket.name)),u.zb(3),u.Bc(u.cc(7,7,e.ticket.type)),u.zb(3),u.hc("hidden",e.ticket.hideDesc),u.zb(1),u.Cc(" ",e.ticket.description," "),u.zb(3),u.Cc("",e.ticket.hideDesc?"Afficher":"Cacher"," description "))},directives:[I.a,I.d,I.g,I.f,I.c,I.b,m.a],pipes:[c.A],styles:[""]}),T);function M(t,e){1&t&&(u.Pb(0,"div",4),u.Ac(1," aucune Ticket n'existe, pouvez-vous l'ajouter !"),u.Ob())}function z(t,e){1&t&&u.yc(0,M,2,0,"ng-template")}function j(t,e){if(1&t&&(u.Pb(0,"div",6),u.Lb(1,"app-ticket",7),u.Ob()),2&t){var n=e.$implicit;u.zb(1),u.hc("ticket",n)}}function D(t,e){if(1&t&&u.yc(0,j,2,1,"div",5),2&t){var n=u.ac();u.hc("ngForOf",n.ticketList)}}var L,q,N,F,S=[[["h3"]],[["",8,"hello-world"]]],x=["h3",".hello-world"],G=((L=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||L)},L.\u0275cmp=u.Eb({type:L,selectors:[["app-todo-list"]],inputs:{ticketList:"ticketList"},ngContentSelectors:x,decls:7,vars:2,consts:[[1,"container-todo-list"],[1,"row"],[4,"ngIf","ngIfElse"],["ticketsShow",""],[1,"alert","alert-info"],["class","col-lg-4",4,"ngFor","ngForOf"],[1,"col-lg-4"],[3,"ticket"]],template:function(t,e){if(1&t&&(u.gc(S),u.Pb(0,"div",0),u.fc(1),u.fc(2,1),u.Pb(3,"div",1),u.yc(4,z,1,0,void 0,2),u.yc(5,D,1,1,"ng-template",null,3,u.zc),u.Ob(),u.Ob()),2&t){var n=u.oc(6);u.zb(4),u.hc("ngIf",0==e.ticketList.length)("ngIfElse",n)}},directives:[c.s,c.r,E],styles:[".container-todo-list[_ngcontent-%COMP%]   app-ticket[_ngcontent-%COMP%]{margin:5px}"]}),L),_=[{path:"",component:(q=function(){function e(){t(this,e),this.ticketListMock=[],this.descriptionMock="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",this.ticketListMock=[new s({name:"Content projection",description:this.descriptionMock,type:a.DEV}),new s({name:"Filtre ticket",description:this.descriptionMock,type:a.DEV}),new s({name:"Integration dashboard",description:this.descriptionMock,type:a.INTE}),new s({name:"Gestion utilisateur",description:this.descriptionMock,type:a.CONCEPTION}),new s({name:"Gestion utilisateur",description:this.descriptionMock,type:a.DESIGN})]}return n(e,[{key:"ngOnInit",value:function(){}},{key:"addTicket",value:function(t){this.ticketListMock.unshift(t)}},{key:"onAlert",value:function(){alert("Alert button project on child component from parent")}}]),e}(),q.\u0275fac=function(t){return new(t||q)},q.\u0275cmp=u.Eb({type:q,selectors:[["app-todo"]],decls:11,vars:1,consts:[["id","demo",1,"container","container-todo"],[3,"sendTicket"],[3,"ticketList"],["mat-raised-button","",1,"hello-world",3,"click"]],template:function(t,e){1&t&&(u.Pb(0,"div",0),u.Pb(1,"app-todo-form",1),u.Wb("sendTicket",function(t){return e.addTicket(t)}),u.Pb(2,"h3"),u.Ac(3,"Form simple pour ajouter des ticket (project sur le component child app-todo-form)"),u.Ob(),u.Pb(4,"p"),u.Ac(5,"Enjoy Projection de contenu (project sur le component child app-todo-form)"),u.Ob(),u.Ob(),u.Pb(6,"app-todo-list",2),u.Pb(7,"h3"),u.Ac(8," Prejection de contenu par element tag (project sur le component child app-todo-list)"),u.Ob(),u.Pb(9,"button",3),u.Wb("click",function(){return e.onAlert()}),u.Ac(10,"Button projet sur child app-todo-list"),u.Ob(),u.Ob(),u.Ob()),2&t&&(u.zb(6),u.hc("ticketList",e.ticketListMock))},directives:[C,G,m.a],styles:[""]}),q)}],R=((N=function e(){t(this,e)}).\u0275mod=u.Ib({type:N}),N.\u0275inj=u.Hb({factory:function(t){return new(t||N)},imports:[[r.f.forChild(_)],r.f]}),N),W=i("smnK"),B=i("lR5k"),K=((F=function e(){t(this,e)}).\u0275mod=u.Ib({type:F}),F.\u0275inj=u.Hb({factory:function(t){return new(t||F)},imports:[[c.c,W.a,l.i,l.s,R,B.c.forChild()]]}),F)}}])}();