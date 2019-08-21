### Intro


Dans l'architecture Angular, les directives sont finalement partout. Les Components sont des directives à la seule différence qu'ils possèdent une fonctionnalité de templating.
<br>En TypeScript, une directive est une classe à laquelle on applique le décorateur @Directive. Il existe deux sortes de directives :

* Les directives structurelles : Elles ont pour but de modifier le DOM en ajoutant, enlevant ou replaçant un élément du DOM. 

* Les attribute directives : Elles ont pour but de modifier l'apparence ou le comportement d'un élément.

Exemples :

* Pour *ngFor , *ngIf , *ngSwitch voir todo-list (html)

* NgStyle & ngCLass
NgStyle vous donne un contrôle fin sur les propriétés individuelles. Mais si vous souhaitez modifier plusieurs propriétés à la fois, il NgClass est plus judicieux de créer une classe qui regroupe ces propriétés et d'ajouter la classe .


