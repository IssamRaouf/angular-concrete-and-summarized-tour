###Intro

La gestion des entrées utilisateur avec des formulaires est la pierre angulaire de nombreuses applications courantes. Les applications utilisent des formulaires pour permettre aux utilisateurs de se connecter, de mettre à jour un profil, d'entrer des informations sensibles et d'effectuer de nombreuses autres tâches de saisie de données.

Angular propose deux approches différentes pour gérer les entrées des utilisateurs via des formulaires: réactive et basée sur des modèles. Les deux capturent les événements d'entrée utilisateur à partir de la vue, valident l'entrée utilisateur, créent un modèle de formulaire et un modèle de données à mettre à jour et fournissent un moyen de suivre les modifications.

Les formulaires réactifs et basés sur des modèles traitent et gèrent les données de formulaire différemment. Chacun offre des avantages différents.

En général:

####Les formulaires réactifs  (Model driven forms ,Reactive forms )
sont plus robustes: ils sont plus évolutifs, réutilisables et testables. Si les formulaires sont un élément clé de votre application, ou si vous utilisez déjà des modèles réactifs pour créer votre application, utilisez des formulaires réactifs.
####Les formulaires basés sur des modèles(Template-driven forms)
sont utiles pour ajouter un formulaire simple à une application, tel qu'un formulaire d'inscription à une liste de diffusion. Ils sont faciles à ajouter à une application, mais ils ne s'adaptent pas aussi bien que les formes réactives. Si vous avez des exigences et une logique de formulaire très basiques qui peuvent être gérées uniquement dans le modèle, utilisez des formulaires basés sur des modèles.
