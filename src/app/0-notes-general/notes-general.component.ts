import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notes-general',
    templateUrl: './notes-general.component.html',
    styleUrls: ['./notes-general.component.scss']
})
export class NotesGeneralComponent implements OnInit {

    mapMds: Map<string, string> = new Map<string, string>([
        ['1. Es6 & new features', '/assets/md/notes/1-es-new-features-and-ts.md'],
        ['4. Component ', '/assets/md/notes/2-Composants.md'],
        ['5. Angular modules', '/assets/md/notes/3-Modules_Angulaires.md'],
        ['6. Event binding', '/assets/md/notes/4-Property_Event_Binding.md'],
        ['7. Domaine modeles', '/assets/md/notes/5-Domaine_Modeles.md'],
        ['8. Architucture components', '/assets/md/notes/6-Architucture_components.md'],
        ['9. input & output', '/assets/md/notes/7-Input_Output.md'],
        ['Material design', '/assets/md/notes/8-material-design-setup-theming.md'],

    ]);


    constructor() {
    }

    ngOnInit(): void {
    }

}
