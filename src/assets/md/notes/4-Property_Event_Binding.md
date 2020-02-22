###  Intro

La manière de penser à ces deux manières différentes de lier est en termes d'entrées et de sorties.

* Avec le  [] nous nous lions à une entrée d'un composant ou element. `<p [hidden]="true">..</p>`

* Avec  () nous nous lions à la sortie d’un composant ou element.`<p (click)="lol()">..</p>`

C'est ce que nous appelons la liaison de données unidirectionnelle , 

car les données ne circulent que dans un sens, dans ou hors d'un composant.

Il est possible de simuler une liaison de données bidirectionnelle dans Angular.
