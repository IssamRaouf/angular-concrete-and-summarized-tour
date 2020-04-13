import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {filter, find} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  public demos = Demos;
  constructor() { }

  ngOnInit() {
    const source = of(1, 2, 3, 4, 5, 6);
    const result = source.pipe(find(num => num % 2 === 0));

    // result.subscribe(res => console.log('Result : ', res));

  }

}
