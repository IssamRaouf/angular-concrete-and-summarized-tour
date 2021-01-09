### Intro

* Imaginons que s’il s’agisse d’une application beaucoup plus volumineuse,<br> 
si toutes les données étaient stockées dans des composants sous forme d’objets simples,
il serait difficile pour un nouveau développeur de savoir où les données sont stockées
et quelle fonction éditer, ansi que resoudre beaucoup des problématique qu'on va rencontrer au moment de développement..
* Cette classe est ce que nous appelons un  modèle de domaine , c'est simplement une classe simple que nous allons utiliser pour stocker des données et des fonctions.

````javascript
class Magie {
  id: number;
  name: string;
  hide: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.hide = false;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
````
