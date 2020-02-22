### Intro
 Dans Angular, votre code est structuré en packages modules appelés Angular Modules,
 ou NgModules en abrégé. Chaque application nécessite au moins un module, 
 le module racine, que nous appelons AppModule par convention.
NB
```
Nous utilisons le terme module pour deux concepts différents.
En JavaScript, le terme module fait généralement référence au code existant dans un seul fichier.
Un NgModule est un concept différent, il combine le code de différents fichiers dans un même paquet. 
Un NgModule contient donc des fonctionnalités provenant de plusieurs fichiers, 
un module se réfère à la fonctionnalité dans un seul fichier.
```

#### @NgModule a quelques paramètres:

* <strong>importations</strong>:<br>
Les autres modules angulaires qui exportent le matériel dont nous avons besoin dans ce module angulaire.
Le module racine de presque toutes les applications doit importer le BrowserModule.

* <strong>déclarations</strong>:<br>
La liste des composants ou des directives appartenant à ce module.

* <strong>bootstrap</strong>:<br>
Identifie le composant racine que Angular devrait bootsraping au démarrage de l'application.

Nous savons NgModule que BrowserModule le module angulaire contient tous les éléments angulaires nécessaires à l’exécution de notre application dans le navigateur.

Angular lui-même est divisé en modules angulaires distincts. Nous n'avons donc besoin d'importer que ceux que nous utilisons réellement. 

D'autres modules communs que vous verrez à l'avenir sont  FormsModule, RouterModule et HttpModule.
