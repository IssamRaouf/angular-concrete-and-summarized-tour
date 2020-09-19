import * as introJs from 'intro.js/intro.js';
import {Injectable} from '@angular/core';
import {Step} from 'intro.js';


@Injectable({
    providedIn: 'root'
})
export class IntroJsHelperService {


    public static introJsInit(steps: Array<Step>): void {
        const intro = introJs();
        intro.setOptions({
            nextLabel: 'Suivant',
            prevLabel: 'Précédent',
            doneLabel: 'Ok',
            steps
        });

        intro.start();
    }
}
