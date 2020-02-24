### Intro `<ng-content></ng-content>`:

* Plutôt que d'essayer de prédire toutes les propriétés de configuration différentes pour prendre en charge tous les cas d'utilisation sur un component, nous pouvons utiliser la projection de contenu. 

* Contenu dynamique. C'est le moyen le plus simple d'expliquer ce que propose ng-content. Vous utilisez la balise **<ng-content></ng-content>** comme espace réservé pour ce contenu dynamique, puis lorsque le modèle est analysé, Angular remplacera cette balise d'espace réservé par votre contenu. Pensez-y comme une interpolation des accolades, mais à plus grande échelle. Le terme technique pour cela est "projection de contenu" car vous projetez du contenu du composant parent dans le composant enfant désigné.
#### Exemples`
* <strong>Exemples 1</strong> : <br>
voir `todo-form.component.html & todo.component.html` 

* <strong>Exemples 2</strong> : <br>
voir `todo-list.component.html & todo.component.html`
