### Intro global

La gestion des entrées utilisateur avec des formulaires est la pierre angulaire de nombreuses applications courantes. Les applications utilisent des formulaires pour permettre aux utilisateurs de se connecter, de mettre à jour un profil, d'entrer des informations sensibles et d'effectuer de nombreuses autres tâches de saisie de données.

Angular propose deux approches différentes pour gérer les entrées des utilisateurs via des formulaires: réactive et basée sur des modèles. Les deux capturent les événements d'entrée utilisateur à partir de la vue, valident l'entrée utilisateur, créent un modèle de formulaire et un modèle de données à mettre à jour et fournissent un moyen de suivre les modifications.

Les formulaires réactifs et basés sur des modèles traitent et gèrent les données de formulaire différemment. Chacun offre des avantages différents.

En général:

####Les formulaires réactifs  (Model driven forms ,Reactive forms )
sont plus robustes: ils sont plus évolutifs, réutilisables et testables. Si les formulaires sont un élément clé de votre application, ou si vous utilisez déjà des modèles réactifs pour créer votre application, utilisez des formulaires réactifs.
####Les formulaires basés sur des modèles(Template-driven forms)
sont utiles pour ajouter un formulaire simple à une application, tel qu'un formulaire d'inscription à une liste de diffusion. Ils sont faciles à ajouter à une application, mais ils ne s'adaptent pas aussi bien que les formes réactives. Si vous avez des exigences et une logique de formulaire très basiques qui peuvent être gérées uniquement dans le modèle, utilisez des formulaires basés sur des modèles.


### Intro
* Les formulaires réactifs utilisent une approche explicite et immuable pour gérer l'état d'un formulaire à un moment donné. Chaque modification de l'état du formulaire renvoie un nouvel état, qui maintient l'intégrité du modèle entre les modifications. Les formulaires réactifs sont construits autour de flux observables, où les entrées et les valeurs des formulaires sont fournies sous forme de flux de valeurs d'entrée, accessibles de manière synchrone.

* Les formulaires réactifs fournissent également un chemin simple vers les tests, car vous êtes assuré que vos données sont cohérentes et prévisibles lorsqu'elles sont demandées. Tous les consommateurs des flux ont accès pour manipuler ces données en toute sécurité.

* Les formulaires réactifs diffèrent des formulaires basés sur des modèles de différentes manières. Les formes réactives offrent plus de prévisibilité avec un accès synchrone au modèle de données, une immuabilité avec les opérateurs observables et un suivi des changements à travers des flux observables. Si vous préférez un accès direct pour modifier les données de votre modèle, les formulaires basés sur un modèle sont moins explicites car ils s'appuient sur des directives intégrées dans le modèle, ainsi que sur des données modifiables pour suivre les modifications de manière asynchrone


#### Exemples
* <strong>Exemples 2</strong> : <br>
voir `todo-form.component.html`
