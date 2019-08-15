### Intro
```
Le mot Component n'est pas aléatoire. 
Les composants sont une fonctionnalité d’Angular qui nous permet de créer
un nouveau langage HTML et de structurer les applications Angular.
```

Une application angulaire est donc simplement 
un ensemble de balises personnalisées qui interagissent 
les unes avec les autres, nous appelons ces balises Composants .

#### Liaisons composent
Nous utilisons une nouvelle fonctionnalité de TypeScript appelée annotations,
Une annotation ajoute automatiquement un code boilerplate à la classe, 
la fonction ou la propriété de son attaché.
et plus précisément une annotation appelée @Component, comme ceci:
```
  @Component({
      selector: 'magie'
    })
    class MagieComponent {
    }
```

En définissant le sélecteur sur,magie nous avons dit à Angular que chaque fois qu'il trouve une balise dans le code HTML,
elle souhaite `<magie></magie>`
utiliser une instance de la classe `MagieComponent pour la contrôler.

#### Importations
Avant de pouvoir utiliser, `@Component` nous devons l'imp`orter, comme ceci:
import { Component } from '@angular/core';`
### utilisation
il nous faut d'ajouter le tag `<magie></magie>` sur un code html
exemple:
```
<body>
<magie></magie>
</body>
```

