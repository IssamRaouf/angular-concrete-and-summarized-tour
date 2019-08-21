### Intro


Dans l'architecture Angular, les directives sont finalement partout. Les Components sont des directives à la seule différence qu'ils possèdent une fonctionnalité de templating.
<br>En TypeScript, une directive est une classe à laquelle on applique le décorateur @Directive. Il existe deux sortes de directives :

* Les directives structurelles : Elles ont pour but de modifier le DOM en ajoutant, enlevant ou replaçant un élément du DOM. 

* Les attribute directives : Elles ont pour but de modifier l'apparence ou le comportement d'un élément.

Exemples :

* Pour *ngFor , *ngIf , *ngSwitch voir todo-list (html)

* NgStyle & ngCLass
NgStyle vous donne un contrôle fin sur les propriétés individuelles. Mais si vous souhaitez modifier plusieurs propriétés à la fois, il NgClass est plus judicieux de créer une classe qui regroupe ces propriétés et d'ajouter la classe .

#### ngStyle
1 ) 
```
<div [ngStyle]="{'color':group.name === ticketEnum.DEV ? 'blue' : 'green' }"></<div>
```

2 ) 


```
// ts
    getTicketColor(ticket:tikcet) : string {
        if(ticket.type === ticketEnum.DEV) {
            return 'black';
        } else {
            return 'green'
        }
    }
    
1) // html
    <div [ngStyle]="{'color':getTicketColor(ticket)}"></<div>
2) // html 
  <div [style.color]="getTicketColor(ticket)"></<div>
```

#### ngClass

1 ) 
```
<div [ngClass]="{'alert alert-success':ticket.type === ticketEnum.DEV}"></div>
```

2 ) 
```
<div [ngClass]="{
    'alert alert-danger':ticket.type === ticketEnum.INTE
    'alert alert-success':ticket.type === ticketEnum.DEV,
    'alert alert-primary':ticket.type === ticketEnum.CONCEPTION,
   
    }>HELLO</div>
```
3 )
```
<div [class.custom-class]="ticket.ticket === ticketEnum.INTE"
```
