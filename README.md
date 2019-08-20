# Revision
### Motivation
Aprés avoir cumulé quelques années sur le développement sur le framwork angular , et par exprience , j'avais vu qu'il faut créer ce petit projet pour que je puisse rappler et voir le fonctionement des choses de maniere vite avec lire et tester le truc,
parce que au moment de developpement on n'oublie quelque choses et comme ca nous allons prendre un peu de temps pour les rappler (doc ,debug etc ) , 
exctement si nous partons au doc et nous sommes curieux et nous aimons beaucoup ce que nous faisons , nous nous trouvons lire des choses loin de ce que nous avons besoin..

### Le contenu de ce petit projet
* Documentations et codes
c'est la resume d'expérience , documentation officiel , 
et beaucoup des cours que j'avais suivi ,lors de lapprentisage d"angular

### Project requirements
- NodeJS 
_ @angular-cli

### Guide
1) git clone projet 
2) npm install 
3) Enjoy
```

├── src
│   ├── app
* premier exemple

│   │   ├── 1-content-projection
│   │   │   ├── enum
│   │   │   ├── models
│   │   │   ├── todo
│   │   │   ├── todo-form
│   │   │   ├── todo-list
│   │   │   ├── todo-list
│   │   │   ├── exports.index.ts
│   │   │   └── ...
            ...
            
* deuxieme exemple

│   │   ├── 2-lifecycle-hooks
│   │   │   ├── enum
│   │   │   ├── models
│   │   │   ├── todo
│   │   │   ├── todo-form
│   │   │   ├── todo-list
│   │   │   ├── todo-list
│   │   │   ├── exports.index.ts
│   │   │   └── ...

* etc.. 
```
<br>

Nous partons a `/src/app/exports.index.ts` 
et on va changer ce qu'on veut voir 
par exemple : on veux voir `Content-projection` ,on met tout en commentaire ,on laisse juste exports de `Content-projection` 

```
/src/app/exports.index.ts

// 1 - Projection Content

 export {TodoComponent, TodoListComponent, TodoFormComponent} from './1-content-projection/index';


/* 2 - Lifecycle Hooks

export {TodoComponent, TodoListComponent, TodoFormComponent} from './2-lifecycle-hooks/index';
* /
```
<br>

* <strong>NB :</strong>  pour chaque partie on va jouer avec les memes components {TodoComponent, TodoListComponent, TodoFormComponent} , mais chaque partie a ses propres fonctionalité etc ..
Sur le AppModule nous allons importer juste ce qu'on a expoter sur `/src/app/exports.index.ts,
aussi on peut ajouter des nouvelles components sur autres parties si on aurait besoin.

* <strong>NB :</strong>  aprés je vais integer Routing & dashboard & lazyloading (chaque partie est un module)

