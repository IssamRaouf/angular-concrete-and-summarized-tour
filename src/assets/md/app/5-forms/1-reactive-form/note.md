### Intro
* Les formulaires réactifs utilisent une approche explicite et immuable pour gérer l'état d'un formulaire à un moment donné. Chaque modification de l'état du formulaire renvoie un nouvel état, qui maintient l'intégrité du modèle entre les modifications. Les formulaires réactifs sont construits autour de flux observables, où les entrées et les valeurs des formulaires sont fournies sous forme de flux de valeurs d'entrée, accessibles de manière synchrone.

* Les formulaires réactifs fournissent également un chemin simple vers les tests, car vous êtes assuré que vos données sont cohérentes et prévisibles lorsqu'elles sont demandées. Tous les consommateurs des flux ont accès pour manipuler ces données en toute sécurité.

* Les formulaires réactifs diffèrent des formulaires basés sur des modèles de différentes manières. Les formes réactives offrent plus de prévisibilité avec un accès synchrone au modèle de données, une immuabilité avec les opérateurs observables et un suivi des changements à travers des flux observables. Si vous préférez un accès direct pour modifier les données de votre modèle, les formulaires basés sur un modèle sont moins explicites car ils s'appuient sur des directives intégrées dans le modèle, ainsi que sur des données modifiables pour suivre les modifications de manière asynchrone


#### Exemples
* <strong>Exemples 2</strong> : <br>
voir `todo-form.component.html`
