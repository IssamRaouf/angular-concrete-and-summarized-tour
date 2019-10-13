import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RpRxjsRoutingModule} from './rp-rxjs-routing.module';
import {MaterialModule} from '../MaterialModule';
import {CreationComponent} from './creation/creation.component';
import {PipeComponent} from './pipe/pipe.component';
import {OperatorMixedComponent} from './operator-mixed/operator-mixed.component';
import {ServiceMockDataService} from './mock/service-mock-data.service';
import {CombinationComponent} from './operator-mixed/combination/combination.component';
import {CombinelatestComponent} from './operator-mixed/combination/combinelatest/combinelatest.component';
import {ConcatComponent} from './operator-mixed/combination/concat/concat.component';
import {EndwithComponent} from './operator-mixed/combination/endwith/endwith.component';
import {StartwithComponent} from './operator-mixed/combination/startwith/startwith.component';
import {MergeComponent} from './operator-mixed/combination/merge/merge.component';
import {PairwiseComponent} from './operator-mixed/combination/pairwise/pairwise.component';
import {RaceComponent} from './operator-mixed/combination/race/race.component';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RpRxjsRoutingModule],
    declarations: [TodoComponent, CreationComponent, PipeComponent, OperatorMixedComponent,
        CombinationComponent, CombinelatestComponent, ConcatComponent, StartwithComponent
        , EndwithComponent, MergeComponent, PairwiseComponent, RaceComponent],
    providers: [ServiceMockDataService]
})
export class RpRxjsModule {

}
