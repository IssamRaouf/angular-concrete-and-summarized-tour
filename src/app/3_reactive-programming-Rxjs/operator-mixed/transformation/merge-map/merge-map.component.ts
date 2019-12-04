import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Component({
    selector: 'app-merge-map',
    templateUrl: './merge-map.component.html',
    styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const sourceOne = of('Symfony', 'Angular', 'Drupal8', 'Reactjs');
        const sourceTow = of('Issam Raouf', 'Soufiane Ramouda', 'Fouzi ben tounsi', 'Khalil khalil');
        const result = sourceOne.pipe(mergeMap(tech => sourceTow.pipe(
            map(name => ({tech, name}))
            )
        ));
       // result.subscribe(res => console.log('Result :', res));
    }

}
