import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-startwith',
  templateUrl: './startwith.component.html',
  styleUrls: ['./startwith.component.scss']
})
export class StartwithComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const obser = of('Issam', 'Raouf');
    // enlever le commentaire et voir résultat sur la console
    // obser.pipe(startWith('Hello')).subscribe( res => console.log('res startWith', res));
  }

}
