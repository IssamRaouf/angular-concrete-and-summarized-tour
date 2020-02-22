### Intro

* <strong>@Input</strong><br>
Passer des données d'un parent à un enfant avec une liaison d'entrée
exemple
```
export class MagieChildComponent {
  @Input() magie: Magie;
  @Input('master') masterName: string;
}
in component father 
<magie [magie]='magieIn' [master]="masterIn">
```
* <strong>@Output</strong><br>
Passer des données d'un enfant à un parent avec une liaison de sortie
1) Comme pour les propriétés d'entrée, nous pouvons également créer des propriétés de sortie sur nos composants personnalisés à l'aide de l'annotation @Output.<br>
2) Ces propriétés de sortie sont toujours des instances de la classe EventEmitter et nous produisons des événements en appelant la fonction emit. Tout ce que nous transmettons à la fonction emit est affiché sous forme de variable de modèle $event

exemple:
```
export class MagieChildComponent {
  @Input() magie: Magie;
  @Input('master') masterName: string;
  
  @Output() remove:EventEmitter<Magie> = new EventEmitter<Magie>();
  removeMe(magie): void {
   this.remove.emit(magie);
  }
}
```
