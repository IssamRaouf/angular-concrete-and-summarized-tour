import {Component, OnInit} from '@angular/core';
import {ServiceMockDataService} from '../mock/service-mock-data.service';

@Component({
    selector: 'app-operator-mixed',
    templateUrl: './operator-mixed.component.html',
    styleUrls: ['./operator-mixed.component.scss']
})
export class OperatorMixedComponent implements OnInit {

    constructor(private serviceMockData: ServiceMockDataService) {
    }

    ngOnInit() {
        this.serviceMockData.getPosts();
    }

}
