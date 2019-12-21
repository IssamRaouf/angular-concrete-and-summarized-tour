import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
    // description
    public titleCase = '{{\'issam raouf\' | titlecase}}';
    public upperCase = '{{\'issam raouf\' | uppercase}}';
    public lowerCase = '{{\'ISSAM RAOUF\' | lowercase}}';
    public i18NSelect = '{{\'other\' | i18nSelect:inviteMap}}';
    public i18NPlural = '{{ 2 | i18nPlural: messageMapping }}';
    public json = '{{inviteMap | json}}';
    public decimalPipe = '{{numberFt | number:\'1.1-6\'}}';
    public currencyPipe = '{{numberFt | currency:\'EUR\'}}';

    // vars
    public numberFt = 8.718281828459045;
    public aPer = 0.759;
    public inviteMap: any = {male: 'Invite-le.', female: 'Invite-la.', other: 'Invite-les.'};
    public messageMapping: { [k: string]: string } = {'=0': 'No message.', '=1': 'One message', 'other': '# messages .'};


    constructor() {

    }

    ngOnInit() {
    }


}
