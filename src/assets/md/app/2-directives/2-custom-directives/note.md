### Intro
* Nous créons une directive en décorant une classe avec le  @Directive décorateur.

* La convention consiste à associer une directive à un élément via un sélecteur d'attribut ,
 c'est-à-dire le nom de l'attribut encapsulé  [].
 ```javascript
  @Directive({
  selector:'[apphelloWorld]'
  })
  ...
 ```

 
* Nous pouvons injecter une référence à l'élément auquel la directive est associée, au constructeur de la directive.
 Ensuite, nous pouvons interagir et modifier certaines propriétés de cet élément.
 
 1) Avec **nativeElement** (on le fais direct avec l’élément DOM) 
 
 2) Avec **renderer2** (nous le fais en passant par le moteur de rendu)


### exemple : 

* nativeElement
```javascript
@Directive({
selector:'[appTikcetCss]'
})
export class TicketCssEffet {
    consturctor(el:ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}
<!-- component.test.ts-->
<!--  color de h1 est 'red'-->
 <h1 appTikcetCss>Hello world</h1>
```



* renderer2
````javascript
@Directive({
selector:'[appTikcetCss]'
})
export class TicketCssEffet {
    consturctor(el:ElementRef,renderer:Renderer2) {
        renderer.setElementStyle(el.nativeElement,'color','red');
    }
}
<!-- component.test.ts-->
<!--  color de h1 est 'red'-->
 <h1 appTikcetCss>Hello world</h1>
````


* **@HostListener** Nous décorons une méthode de classe par @HostListener pour appeler la fonction à chaque événement.
* **@HostBinding** décorateur prend un paramètre, le nom de la propriété sur l'élément hôte auquel nous voulons nous lier.

* <strong>Exemple 1</strong> sur directives/ticket-Interactive-element.directive.ts && ticket.component.html
* <strong>Exemple 2</strong> sur directives/caractere-only.directive.ts && todo.form.component.html

#### Pour chaque ticket component:
* (on construct) backgroud & color ont changé par le directive 'TicketInteractiveElementDirective'
* HostListner -> Change le button style on 'mouserover' & 'mouseout' par le directive 'TicketInteractiveElementDirective'
* HostBinding -> change border color on on 'mouserover' & 'mouseout' par le directive 'TicketInteractiveElementDirective'
* Nous pouvons configurer nos directives avec des liaisons de propriétés d'entrée standard @Input. pour changer un element précis.. ,changer font-size du titre
