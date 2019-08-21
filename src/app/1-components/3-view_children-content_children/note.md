### Intro
 Une application angulaire est composée d’un certain nombre de components imbriqués.

* Ces components peuvent s'emboîter de deux manières, en tant qu'enfants de vue (view children), dans le modèle de ce component. 
Ils peuvent également imbriquer en tant qu'enfants de contenu (content children), via la projection de contenu à partir d'un component hôte.

* Nous pouvons accéder à ces components enfants via les  décorateurs `@ViewChildand`  `@ContentChild` (et  `@ViewChildrenand  `@ContentChildren`).

* Les enfants de vue (view children) d'un component sont les components et les éléments de cette vue.

* Les enfants de contenu (content children) d'un component sont les components et les éléments projetés dans cette vue des components par un component hôte.

* Les enfants de vue (view children) ne sont initialisés qu'au moment où la  AfterViewInit phase de cycle de vie a été exécutée.

* Les enfants de contenu ne sont initialisés qu'au moment où la  AfterContentInit phase de cycle de vie a été exécutée.
### Exemples
* Voir todo-list & todo component
