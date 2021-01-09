### Intro

* En informatique, la programmation réactive est un paradigme de programmation déclarative qui concerne les flux (stream) de données et la propagation du changement.

* La programmation réactive se base sur le concept d'observateur. Si vous n'êtes pas familier avec ce principe, le principe est tout simplement que l'on définit des observables et des observateurs. Les observables vont émettre des événements qui seront interceptés par les observateurs.

### Details

* Les flux (stream) ne sont qu'une séquence de valeurs dans le temps.

* La programmation réactive est l’idée que nous pouvons définir une application comme une série de différents flux (stream) avec des opérations reliant les différents flux (stream) entre eux 
  et qui sont automatiquement appelées lorsque de nouvelles valeurs sont envoyées sur ces flux (stream).
  
* RxJS est une bibliothèque qui nous permet de créer et de travailler avec des observables.
  
* Nous pouvons nous abonner à une chaîne observable et recevoir un rappel chaque fois que quelque chose est poussé dans le  dernier flux.
  
* Par défaut, les éléments observables sont froids et ne deviennent chauds que lorsqu'ils obtiennent leur premier abonné.
  
* Apprendre à utiliser RxJS implique de comprendre tous les opérateurs disponibles et comment les utiliser ensemble.
  



### Exemple
**of** : of est la méthode la plus simple et permet de créer un observable n'envoyant qu'une seule valeur

```javascript
import { of } from 'rxjs';
   
const myObservable = of(42);

// 1
myObservable.subscribre((result) => console.log('Result is ',result)); // output  'Result is 42'

// 2
myObservable.subscribre(
(result) => console.log('Result is ',result) (1),
(error) => console.log(error) (2),
(complete) => console.log('obs is complete') (3);
);

/* NB:
 Les arguments de subscribre : 
 une fonction appelée lorsque l'observable a une valeur suivante (1)
 une fonction appelée en cas d'erreur (2), 
 une fonction appelée une fois l'observable fini (un observable fini n'enverra plus de données) (3).
*/
```







