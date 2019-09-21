### Intro
* En informatique, la programmation réactive est un paradigme de programmation déclarative qui concerne les flux (stream) de données et la propagation du changement. Avec ce paradigme, il est possible d’exprimer facilement des flux (stream) de données statiques (par exemple, des tableaux) ou dynamiques (par exemple, des émetteurs d’événements) et également de signaler l’existence d’une dépendance inférée au sein du modèle d’exécution associé, ce qui facilite
la propagation automatique des données modifiées. flux (stream).

* Les flux (stream) ne sont qu'une séquence de valeurs dans le temps.

* La programmation réactive est l’idée que nous pouvons définir une application comme une série de différents flux (stream) avec des opérations reliant les différents flux (stream) entre eux et qui sont automatiquement appelées lorsque de nouvelles valeurs sont envoyées sur ces flux (stream).

* Les observables sont un modèle pour créer des flux et  de plomberie ensemble avec les opérateurs de créer des chaînes observables .
  
* RxJS est une bibliothèque qui nous permet de créer et de travailler avec des observables.
  
* Nous pouvons nous abonner à une chaîne observable et recevoir un rappel chaque fois que quelque chose est poussé dans le  dernier flux.
  
* Par défaut, les éléments observables sont froids et ne deviennent chauds que lorsqu'ils obtiennent leur premier abonné.
  
* Apprendre à utiliser RxJS implique de comprendre tous les opérateurs disponibles et comment les utiliser ensemble.
  
