### Intro

Angular propose deux approches différentes pour gérer les entrées des utilisateurs via des formulaires: réactive et basée sur des modèles. Les deux capturent les événements d'entrée utilisateur à partir de la vue, valident l'entrée utilisateur, créent un modèle de formulaire et un modèle de données à mettre à jour et fournissent un moyen de suivre les modifications.

En général:

#### Les formulaires réactifs  (Model driven forms ou Reactive forms )

sont plus robustes: ils sont plus évolutifs, réutilisables et testables. Si les formulaires sont un élément clé de votre application, ou si vous utilisez déjà des modèles réactifs pour créer votre application, utilisez des formulaires réactifs.
#### Les formulaires basés sur des modèles(Template-driven forms)
sont utiles pour ajouter un formulaire simple à une application, tel qu'un formulaire d'inscription à une liste de diffusion. Ils sont faciles à ajouter à une application, mais ils ne s'adaptent pas aussi bien que les formes réactives. Si vous avez des exigences et une logique de formulaire très basiques qui peuvent être gérées uniquement dans le modèle, utilisez des formulaires basés sur des modèles.

