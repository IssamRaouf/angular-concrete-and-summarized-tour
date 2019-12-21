import {Component, OnInit} from '@angular/core';
import {from, of} from 'rxjs';
import {reject} from 'q';

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
    public percentPipe = '{{aPer | percent}}';
    public datePipeSimple = '{{dateNow |date}}';
    public datePipeFullDate = '{{dateNow |date:\'fullDate\'}}';
    public datePipeMedium = '{{dateNow |date:\'medium\'}}';
    public datePipeFormat = '{{dateNow |date:\'dd/M/y h:m:s\'}}';
    public AsyncPipeObserv = '{{sourceObserv| async}}';
    public AsyncPipePromisse = '{{sourcePromi| async}}';
    // vars
    public numberFt = 8.718281828459045;
    public aPer = 0.759;
    public inviteMap: any = {male: 'Invite-le.', female: 'Invite-la.', other: 'Invite-les.'};
    public messageMapping: { [k: string]: string } = {'=0': 'No message.', '=1': 'One message', 'other': '# messages .'};
    public dateNow = Date.now();

    public sourceObserv = of('Hello form observable of :D');
    public sourcePromi = new Promise((resolve, reject) => resolve('Hello from promissse :D'));

    constructor() {

    }

    ngOnInit() {
    }


}
