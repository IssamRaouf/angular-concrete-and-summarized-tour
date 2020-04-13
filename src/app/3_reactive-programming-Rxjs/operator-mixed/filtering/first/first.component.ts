import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {find, first} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public demos = Demos;
  constructor() { }

  ngOnInit() {

    const source = of(1, 2, 3, 4, 5, 6);
    const result = source.pipe(first(num => num  === 7, 'nothing'));

     //result.subscribe(res => console.log('Result : ', res));
  }

}
