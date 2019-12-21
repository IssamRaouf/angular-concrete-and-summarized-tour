import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
    // description
    public titleCase: string = '{{\'issam raouf\' | titlecase}}';
    public upperCase: string = '{{\'issam raouf\' | uppercase}}';
    public lowerCase: string = '{{\'ISSAM RAOUF\' | lowercase}}';
    public i18NSelect: string = '{{\'other\' | i18nSelect:inviteMap}}';
    public i18NPlural: string = '{{ 2 | i18nPlural: messageMapping }}';
    public json: string = '{{inviteMap | json}}';
    public decimalPipe: string = '{{numberFt | number:\'1.1-6\'}}';


    // vars
    public numberFt = 8.718281828459045;
    public inviteMap: any = {male: 'Invite-le.', female: 'Invite-la.', other: 'Invite-les.'};
    public messageMapping: { [k: string]: string } = {'=0': 'No message.', '=1': 'One message', 'other': '# messages .'};


    constructor() {

    }

    ngOnInit() {
    }


}
