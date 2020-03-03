### Intro

Un components dans Angular a un cycle de vie, un certain nombre de phases différentes,
qu'il traverse de la naissance à la mort.

Nous pouvons nous connecter à ces différentes phases pour obtenir un contrôle assez fin de notre application.

### Crochets de component (hooks)

* **Constructor** : Ceci est appelé lorsque Angular créé un component ou une directive en appelant *new class*
 
* **ngOnChanges** : Appelé à chaque fois qu'il y a un changement dans l'une des proprietés d'entrée du component *@Inputs*.

* **ngOnInit** : Invoqué lorsque le component donné a été initialisé ce hook n'est appelé qu'une fois aprés le premier *ngOnchanges*
 
* **ngDoCheck** : Invoqué lorsque le détecteur de changement du component donné est appelé, 
Cela nous permet d'implémenter notre propre algorithme de déctation de changement pour le component donné.

* **ngAfterContentInit** : Invoqué après Angular exécute une projection de contenu dans la vue des components Appelé une fois après le premier *ngDoCheck()*

* **ngAfterContentChecked**: Appelé à chaque fois que le contenu du components donné a été vérifié par le mécanisme de détection de changement de Angular.
Appelé après le *ngAfterContentInit()* et tous les suivants *ngDoCheck()*.

* **ngAfterViewInit** : Appelé après angulaire initialise les vues du components et les vues enfants / la vue dans laquelle se trouve une directive.
Appelé une fois après le premier *ngAfterContentChecked()*

* **ngAfterViewChecked** : Appelé après Angular vérifie les vues du composant et les vues enfants / la vue dans laquelle se trouve une directive.
  Appelé après le *ngAfterViewInit()* et tous les suivants *ngAfterContentChecked()*.
                                    
* **ngOnDestroy** : cette méthode sera invoquée juste avant qu'Angular ne détruise le component ,
  *NB*: Utilisez ce crochet pour désabonner des observables et détacher des gestionnaires d'événements pour éviter les fuites de mémoire.

### Exemples : 
* voir console et la rebrique 'DETAILS HOOKS' 
* Enjoy avec la form d'ajouter ticket pour voir details des hooks
* voir todo-list.compnent.ts  & todo.component.ts 

