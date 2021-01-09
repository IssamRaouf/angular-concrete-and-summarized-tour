### `<ng-content></ng-content>` :

* Plutôt qu'on essayer de prédire toutes les propriétés de configuration différentes pour prendre en charge tous les cas d'utilisation sur un component,on peut utiliser la projection de contenu. 

* Contenu dynamique. C'est le moyen le plus simple d'expliquer ce que propose ng-content. on utilise la balise **<ng-content></ng-content>** comme espace reservé pour ce contenu dynamique, puis lorsque le modèle est analysé, Angular remplacera cette balise d'espace réservé par notre contenu.
 on peut dire c'est comme une interpolation des accolades, mais à plus grande échelle. Le terme technique pour cela est "projection de contenu" car on projete du contenu du composant parent dans le composant enfant.

#### Sans projection avec configs

Tout simplement on mis des conditions sur le component child ,selon ces conditions on affiche ou cache des fonctionnalités ..

**Par exemple  *Ajouter* ou *Edit*  component form** :

  *Ajout* affiche titre 'Ajouter des tickets!'
  
  *Edit* affiche titre 'Modifier le Ticket N° 9843!'

**NB** mais avec reutilisation de ce component et avec cette methode , notre component child devient plus lourd .., a chaque fois , qu'on veut le reutiliser on doit mettre en place des conditions ..

```html

<!--todo.component.html-->

<div class="container container-todo">

        <app-todo-form (sendTicket)="addTicket($event)" [displayDetails]="isDisplayDetails"></app-todo-form>
        // ...
</div>

<!--todo-form.component.html-->
<div class="container container-todo-form">
        
        <ng-container *ngIf="displayDetails">
          <h3>Form simple pour ajouter des ticket </h3>
          <p>Enjoy Projection de contenu</p>
        </ng-container>

    <form [formGroup]="formTicket" class="form-container" novalidate>
          <!--...-->
    </form>
</div>
```
#### Avec projection de contenu

```html
<!--todo.component.html-->
<div class="container container-todo">

        <app-todo-form (sendTicket)="addTicket($event)">
            <!--BEGIN Projection de contenur simple -->
            <h3>Form simple pour ajouter des ticket </h3>
            <p>Enjoy Projection de contenu</p>
            <!--END Projection de contenur simple  -->
        </app-todo-form>
        // ...
</div>

<!--todo-form.component.html-->
<div class="container container-todo-form">

    <!--BEGIN  projection de contenu simple.-->
    <ng-content></ng-content>
    <!--END  projection de contenu simple.-->

    <form [formGroup]="formTicket" class="form-container" novalidate>
          <!--...-->
    </form>
</div>

```
