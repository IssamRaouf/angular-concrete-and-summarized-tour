import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notes-general',
    templateUrl: './notes-general.component.html',
    styleUrls: ['./notes-general.component.scss']
})
export class NotesGeneralComponent implements OnInit {

    mapMds: Map<string, string> = new Map<string, string>([
        ['1. EcmaScript new features & Typescript', '/assets/md/notes/1-es-new-features-and-ts.md'],
        ['2. Component ', '/assets/md/notes/2-Composants.md'],
        ['3. Angular modules', '/assets/md/notes/3-Modules_Angulaires.md'],
        ['4. Domaine modeles', '/assets/md/notes/4-Domaine_Modeles.md'],
        ['5. input & output', '/assets/md/notes/5-Input_Output.md'],
        ['7. Material design', '/assets/md/notes/6-material-design-setup-theming.md'],

    ]);

    constructor() {
    }

    ngOnInit(): void {

    }

}
