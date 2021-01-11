### Intro


Dans l'architecture Angular, les directives sont finalement partout. Les Components sont des directives à la seule différence qu'ils possèdent une fonctionnalité de templating.
<br>En TypeScript, une directive est une classe à laquelle on applique le décorateur **@Directive**,Il existe trois sortes de directives :

* Composants directives avec un template.
* Directives structurelles: modifiez la disposition DOM en ajoutant et en supprimant des éléments DOM,
  Les directives structurelles modifient la structure de la vue. Deux exemples sont **NgFor** et **NgIf**.
* Directives d'attribut: modifiez l'apparence ou le comportement d'un élément, d'un composant ou d'une autre directive,
  Les directives d'attribut sont utilisées comme attributs d'éléments. La directive **NgStyle**.

Exemples :

* Pour *ngFor , *ngIf , *ngSwitch , afficher le code

* **NgStyle** & **ngCLass**

**NgStyle** vous donne un contrôle fin sur les propriétés individuelles.
Mais si on souhaite modifier plusieurs propriétés à la fois, la **NgClass** est plus judicieux de créer une classe qui regroupe ces propriétés et d'ajouter la classe .

#### ngStyle
1 ) 

```html
<div [ngStyle]="{'color':group.name === ticketEnum.DEV ? 'blue' : 'green' }"></div>
```

2 ) 

```javascript
// ts
    getTicketColor(ticket:tikcet) : string {
        if(ticket.type === ticketEnum.DEV) {
            return 'black';
        } else {
            return 'green'
        }
    }
```
```html
<!--Exp 1-->
    <div [ngStyle]="{'color':getTicketColor(ticket)}"></div>
<!--Exp 2-->
  <div [style.color]="getTicketColor(ticket)"></div>
```

#### ngClass

1 ) 
```html
<div [ngClass]="{'alert alert-success':ticket.type === ticketEnum.DEV}"></div>
```

2 ) 

```html
<div [ngClass]="{
    'alert alert-danger':ticket.type === ticketEnum.INTE
    'alert alert-success':ticket.type === ticketEnum.DEV,
    'alert alert-primary':ticket.type === ticketEnum.CONCEPTION,}">HELLO</div>
```
3 )
```html
<div [class.custom-class]="ticket.ticket === ticketEnum.INTE"></div>
```
