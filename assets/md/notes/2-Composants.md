* Le mot Component n'est pas aléatoire. 
Les composants sont une fonctionnalité d’Angular qui nous permet de créer
un nouveau langage HTML et de structurer les applications Angular.

* Une application angulaire est donc simplement 
un ensemble de balises personnalisées qui interagissent 
les unes avec les autres, nous appelons ces balises Composants .

# Liaisons composent
Nous utilisons une nouvelle fonctionnalité de TypeScript appelée annotations,
Une annotation ajoute automatiquement un code boilerplate (au temps de compilation) à la classe, 
la fonction ou la propriété de son attaché.et plus précisément une annotation appelée @Component, comme ceci:

```javascript
  @Component({
      selector: 'magie'
    })
    class MagieComponent {
    }
```

En définissant le sélecteur **magie** nous avons dit à Angular que chaque fois qu'il trouve une balise dans le code HTML,
 **<magie></magie>** utiliser une instance de la classe `MagieComponent pour la contrôler.

# Importations
Avant de pouvoir utiliser, **@Component** nous devons l'importer, comme ceci:
```javascript
import { Component } from '@angular/core';
```

# Utilisation
il nous faut d'ajouter le tag `<magie></magie>` sur un code html
```
<body>
<magie></magie>
</body>
```

### Style
```javascript
@Component({
  selector: "magie",
  templateUrl: "magie-component.html",
  styleUrls: ["magie-component.css"]
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
})
// magie-component.css
 p {
    color:red;
 }
```
* **ViewEncapsulation.Emulated** is default :
Les autres composants de la page n'ont pas ces  attributs (_ngcontent-lo_3) générés automatiquement, 
comme ca le style appliquer juste pour le component MagieComponent 

* **ViewEncapsulation.Native**  :
il s'appel dom fontome ignore tout le style de notre application par exemple bootsrap 
ou material design qu'on va integrer sur notre application
come ca notre component est isolé des styles globaux définis pour notre application

* **ViewEncapsulation.None** exactement c'est le contraire de Emulated , 
comme ca ,il va appliquer le style de component par tout sur notre application.

