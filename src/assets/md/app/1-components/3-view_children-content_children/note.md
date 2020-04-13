### Intro
 Une application angulaire est composée d’un certain nombre de components imbriqués.

* Ces components peuvent s'emboîter de deux manières, en tant qu'enfants de vue (view children), dans le template du component,
ou en tant qu'enfants de contenu, via la projection de contenu à partir d'un composant hôte..

* Nous pouvons accéder à ces components enfants via les  décorateurs (**@ViewChild**,  **@ContentChild** ,  **@ViewChildren** et **@ContentChildren**).

* Les enfants de vue (view children) d'un component sont les components et les éléments de cette vue.

* Les enfants de contenu (content children) d'un component sont les components et les éléments projetés dans cette vue des components par un component hôte.

* Les enfants de vue (view children) ne sont initialisés qu'au moment où la  AfterViewInit phase de cycle de vie a été exécutée.

* Les enfants de contenu ne sont initialisés qu'au moment où la  AfterContentInit phase de cycle de vie a été exécutée.

* Nous pouvons accéder à ces components enfants et faire des modifications ... à vous de jouer

**Aficher le code et concetrez-vous sur todo-list.components.ts**
