### NB
**sur cette exemple On peut faire simple service avec simple subject<{operation:'EDIT'|'DELETE':'ADD',ticket:ticket}>
etc pour la cominication entre les components de multi niveaux (child, parent ...)
mais C'est le temps de voir le fonctionnement de input output par sur multi niveaux (child, parent & child to child...)**




### Intro
* En JavaScript, faire des requêtes HTTP est une opération asynchrone . Il envoie simplement la  demande HTTP à l' API et  n'attend pas de réponse avant de continuer avec la ligne de code suivante.
* La plupart des applications frontales communiquent avec les services principaux via le protocole HTTP. Les navigateurs modernes prennent en charge deux API différentes pour effectuer des requêtes HTTP: l'interface XMLHttpRequest et l'API fetch ().

* Le HttpClient dans  `@angular/common/http`  propose une API HTTP client simplifiée pour les applications angulaires qui repose sur l'interface XMLHttpRequest exposée par les navigateurs.
 Les avantages supplémentaires de HttpClient sont :
 
  * Les fonctionnalités de testabilité, 
  * Les objets de demande et de réponse typés,
  * L'interception des demandes et des réponses, 
  * Les API observables et la gestion simplifiée des erreurs.

* Dans Angular, il existe deux façons de gérer ces opérations asynchrones:
  * On peut utiliser des promesses .
  * On peut utiliser des observables . 

