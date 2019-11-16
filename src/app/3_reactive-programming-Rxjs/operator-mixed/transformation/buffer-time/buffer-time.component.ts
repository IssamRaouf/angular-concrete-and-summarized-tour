import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {bufferCount, bufferTime, take} from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss']
})
export class BufferTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = interval(500).pipe(take(10));
    const result = source.pipe(bufferTime(2000));
    //result.subscribe(res => console.log('Result : ', res));
  }

}
