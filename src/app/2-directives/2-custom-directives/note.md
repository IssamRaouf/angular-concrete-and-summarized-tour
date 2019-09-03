### Intro
* Nous créons une directive en décorant une classe avec le  @Directive décorateur.

* La convention consiste à associer une directive à un élément via un  sélecteur d'attribut ,
 c'est-à-dire le nom de l'attribut encapsulé  [].
 ```
  @Directive({
  selector:'[gelloDir]'
  })
  ...
 ```

 
* Nous pouvons injecter une référence à l'élément auquel la directive est associée, au constructeur de la directive.
 Ensuite, nous pouvons interagir  et modifier certaines propriétés de cet élément.
 
 1) Avec `nativeElement` (nous le faisons  direct avec l’élément DOM) 
 2) Avec `renderer2` (nous le faisons en passant par le moteur de rendu)


### exemple : 
* nativeElement
````
@Directive({
selector:'TikcetCss'
})
export class TicketCssEffet {
    consturctor(el:ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}
````

* renderer2
````
@Directive({
selector:'TikcetCss'
})
export class TicketCssEffet {
    consturctor(el:ElementRef,renderer:Renderer2) {
        renderer.setElementStyle(el.nativeElement,'color','red');
    }
}
````
