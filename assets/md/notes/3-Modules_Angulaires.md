### Intro
* NgModules configure l'injecteur et le compilateur et aide à organiser les choses liées ensemble
* Un NgModule est une classe marquée par le décorateur @NgModule. @NgModule prend un objet de métadonnées qui décrit comment compiler le modèle d'un composant et comment créer un injecteur lors de l'exécution. 
 Il identifie les propres composants, directives et pipes du module, en rendant certains d'entre eux publics, via la propriété exports, afin que les composants externes puissent les utiliser.
 @NgModule peut également ajouter des fournisseurs (Providers) de services aux injecteurs de dépendance d'application.
* Dans Angular, votre code est structuré en packages modules appelés Angular Modules,
 ou NgModules en abrégé. Chaque application nécessite au moins un module, 
 le module racine, que nous appelons AppModule par convention.

* Nous utilisons le terme module pour deux concepts différents.
* En JavaScript, le terme module fait généralement référence au code existant dans un seul fichier.
* Un NgModule est un concept différent, il combine le code de différents fichiers dans un même paquet. 
* Un NgModule contient donc des fonctionnalités provenant de plusieurs fichiers, un module se réfère à la fonctionnalité dans un seul fichier.

#### @NgModule a quelques paramètres:

* **importations**:<br>
Les autres modules angulaires qui exportent le matériel dont nous avons besoin dans ce module angulaire.
Le module racine de presque toutes les applications doit importer le BrowserModule.

 


* **déclarations**:
La liste des composants , des directives et des pipes appartenant à ce module.

* **bootstrap**:
dentifie le composant racine que Angular devrait bootsraping au démarrage de l'application.

Nous savons NgModule que BrowserModule le module angulaire contient tous les éléments angulaires nécessaires à l’exécution de notre application dans le navigateur.

Angular lui-même est divisé en modules angulaires distincts. Nous n'avons donc besoin d'importer que ceux que nous utilisons réellement. 


```javascript
 @NgModule({
      declarations: [
       TodoListComponent,
       customPipe,
       CustomDirective
      ],
  
      imports: [
          BrowserModule,
          BrowserAnimationsModule,
          HttpClientModule,
          ReactiveFormsModule,
          FormsModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
  })
  export class AppModule {
  }

```
