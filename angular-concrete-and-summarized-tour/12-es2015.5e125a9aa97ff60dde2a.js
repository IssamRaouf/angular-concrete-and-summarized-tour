(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{XmIg:function(t,e,i){"use strict";i.r(e),i.d(e,"PipesCustomModule",function(){return M});var c=i("ofXK"),n=i("3Pt+"),o=i("smnK"),r=i("tyNb");class s{constructor(t){this.hideDesc=!0,null!=t&&(t.hasOwnProperty("name")&&(this.name=t.name),t.hasOwnProperty("description")&&(this.description=t.description),t.hasOwnProperty("type")&&(this.type=t.type),t.hasOwnProperty("hideDesc")&&(this.hideDesc=t.hideDesc),t.hasOwnProperty("price")&&(this.price=t.price))}toggleDesc(){this.hideDesc=!this.hideDesc}}var a=function(t){return t.DEV="Developement",t.INTE="Integration",t.DESIGN="Design",t.CONCEPTION="Conception",t.MANAGEMENT="Gestion",t}({}),p=i("fXoL"),l=i("kmnG"),d=i("d3UM"),b=i("qFsG"),u=i("Wp6s"),h=i("bTqV");let m=(()=>{class t{transform(t){return t<1e3?t:t>1e3&&t<1e6?(t/1e3).toFixed(1)+"K":t>1e6&&t<1e9?(t/1e6).toFixed(1)+"M":(t/1e9).toFixed(1)+"B"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=p.Jb({name:"appCurrencyToKMB",type:t,pure:!0}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Eb({type:t,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},decls:17,vars:12,consts:[["color","primary"],[3,"hidden"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(p.Pb(0,"mat-card"),p.Pb(1,"mat-card-header"),p.Pb(2,"mat-card-title"),p.Ac(3),p.bc(4,"titlecase"),p.Ob(),p.Pb(5,"mat-card-subtitle",0),p.Ac(6),p.bc(7,"titlecase"),p.Ob(),p.Ob(),p.Pb(8,"mat-card-content"),p.Pb(9,"p"),p.Ac(10),p.bc(11,"appCurrencyToKMB"),p.Ob(),p.Pb(12,"p",1),p.Ac(13),p.Ob(),p.Ob(),p.Pb(14,"mat-card-actions"),p.Pb(15,"button",2),p.Wb("click",function(){return e.ticket.toggleDesc()}),p.Ac(16),p.Ob(),p.Ob(),p.Ob()),2&t&&(p.zb(3),p.Bc(p.cc(4,6,e.ticket.name)),p.zb(3),p.Bc(p.cc(7,8,e.ticket.type)),p.zb(4),p.Cc(" ",p.cc(11,10,e.ticket.price),"$"),p.zb(2),p.hc("hidden",e.ticket.hideDesc),p.zb(1),p.Cc(" ",e.ticket.description," "),p.zb(3),p.Cc("",e.ticket.hideDesc?"Afficher":"Cacher"," description "))},directives:[u.a,u.d,u.g,u.f,u.c,u.b,h.a],pipes:[c.A,m],styles:[""]}),t})();function y(t,e){1&t&&(p.Pb(0,"div",4),p.Ac(1," aucune Ticket n'existe, pouvez-vous l'ajouter !"),p.Ob())}function k(t,e){1&t&&p.yc(0,y,2,0,"ng-template")}function O(t,e){if(1&t&&(p.Pb(0,"div",6),p.Lb(1,"app-ticket",7),p.Ob()),2&t){const t=e.$implicit;p.zb(1),p.hc("ticket",t)}}function g(t,e){if(1&t&&p.yc(0,O,2,1,"div",5),2&t){const t=p.ac();p.hc("ngForOf",t.ticketList)}}const w=[[["h3"]],[["",8,"hello-world"]]],P=["h3",".hello-world"];let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Eb({type:t,selectors:[["app-todo-list"]],inputs:{ticketList:"ticketList"},ngContentSelectors:P,decls:7,vars:2,consts:[[1,"container-todo-list"],[1,"row"],[4,"ngIf","ngIfElse"],["ticketsShow",""],[1,"alert","alert-info"],["class","col-lg-4",4,"ngFor","ngForOf"],[1,"col-lg-4"],[3,"ticket"]],template:function(t,e){if(1&t&&(p.gc(w),p.Pb(0,"div",0),p.fc(1),p.Pb(2,"div",1),p.yc(3,k,1,0,void 0,2),p.yc(4,g,1,1,"ng-template",null,3,p.zc),p.Ob(),p.fc(6,1),p.Ob()),2&t){const t=p.oc(5);p.zb(3),p.hc("ngIf",0==e.ticketList.length)("ngIfElse",t)}},directives:[c.s,c.r,f],styles:[".container-todo-list[_ngcontent-%COMP%]   app-ticket[_ngcontent-%COMP%]{margin:5px}"]}),t})();var v=i("FKr1");let D=(()=>{class t{transform(t=[],e="name",i=null){if(0===t.length||null===i)return t;const c=this.checkFieldExistOnType(e);return c?(alert(c),t):t.filter(t=>-1!==t[e].toLocaleLowerCase().indexOf(i.toLocaleLowerCase()))}checkFieldExistOnType(t){let e=null;return new s({name:"",description:"",type:"aaa",price:0,hideDesc:!1}).hasOwnProperty(t)&&"hideDesc"!==t||(e="hideDesc"===t?`Cannot filter with this field ${t}  , try with other`:`This is ${t}  not exist on type Ticket , try with other`),e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=p.Jb({name:"appfilterTickets",type:t,pure:!0}),t})();function F(t,e){if(1&t&&(p.Pb(0,"mat-option",7),p.Ac(1),p.Ob()),2&t){const t=e.$implicit;p.hc("value",t),p.zb(1),p.Cc(" ",t," ")}}const I=[{path:"",component:(()=>{class t{constructor(){this.ticketListMook=[],this.descriptionMook="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",this.likeTerm=new n.c(""),this.byField=new n.c("name"),this.fields=["name","type","description"],this.ticketListMook=[new s({name:"Content projection",price:19000990,description:this.descriptionMook,type:a.DEV}),new s({name:"Filtre ticket",price:1200,description:this.descriptionMook,type:a.DEV}),new s({name:"Integration dashboard",price:5e3,description:this.descriptionMook,type:a.INTE}),new s({name:"Gestion utilisateur",price:3e7,description:this.descriptionMook,type:a.CONCEPTION}),new s({name:"Gestion utilisateur",price:7e9,description:this.descriptionMook,type:a.DESIGN})]}ngOnInit(){}addTicket(t){this.ticketListMook.unshift(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Eb({type:t,selectors:[["app-todo"]],decls:15,vars:17,consts:[[1,"container","container-todo"],[1,"d-flex","flex-row","justify-content-md-start","p-2"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"ml-5"],["matInput","",3,"placeholder","formControl"],[3,"ticketList"],[3,"value"]],template:function(t,e){1&t&&(p.Pb(0,"div",0),p.Pb(1,"div",1),p.Pb(2,"mat-form-field"),p.Pb(3,"mat-label"),p.Ac(4,"by Field"),p.Ob(),p.Pb(5,"mat-select",2),p.yc(6,F,2,2,"mat-option",3),p.Ob(),p.Ob(),p.Pb(7,"mat-form-field",4),p.Lb(8,"input",5),p.bc(9,"async"),p.bc(10,"async"),p.Ob(),p.Ob(),p.Lb(11,"app-todo-list",6),p.bc(12,"appfilterTickets"),p.bc(13,"async"),p.bc(14,"async"),p.Ob()),2&t&&(p.zb(5),p.hc("formControl",e.byField),p.zb(1),p.hc("ngForOf",e.fields),p.zb(2),p.jc("placeholder","Search by ",p.cc(9,5,e.byField.valueChanges)?p.cc(10,7,e.byField.valueChanges):"name",""),p.hc("formControl",e.likeTerm),p.zb(3),p.hc("ticketList",p.ec(12,9,e.ticketListMook,p.cc(13,13,e.byField.valueChanges),p.cc(14,15,e.likeTerm.valueChanges))))},directives:[l.c,l.g,d.a,n.m,n.d,c.r,b.a,n.b,C,v.j],pipes:[c.b,D],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(I)],r.f]}),t})(),M=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[c.c,o.a,n.i,n.s,L]]}),t})()}}]);