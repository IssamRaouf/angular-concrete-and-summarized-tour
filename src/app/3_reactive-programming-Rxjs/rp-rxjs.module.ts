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
import {ForkjoinComponent} from './operator-mixed/combination/forkjoin/forkjoin.component';
import {MergeallComponent} from './operator-mixed/combination/mergeall/mergeall.component';
import {ZipComponent} from './operator-mixed/combination/zip/zip.component';
import {ConditionalComponent} from './operator-mixed/conditional/conditional.component';
import {DefaultifemptyComponent} from './operator-mixed/conditional/defaultifempty/defaultifempty.component';
import {EveryComponent} from './operator-mixed/conditional/every/every.component';
import {SequenceEqualComponent} from './operator-mixed/conditional/sequence-equal/sequence-equal.component';
import {ErrorHandlingComponent} from './operator-mixed/error-handling/error-handling.component';
import {CatchErrorComponent} from './operator-mixed/error-handling/catch-error/catch-error.component';
import {RetryComponent} from './operator-mixed/error-handling/retry/retry.component';
import {MulticastingComponent} from './operator-mixed/multicasting/multicasting.component';
import {PublishComponent} from './operator-mixed/multicasting/publish/publish.component';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RpRxjsRoutingModule],
    declarations: [TodoComponent, CreationComponent, PipeComponent, OperatorMixedComponent,
        CombinationComponent, CombinelatestComponent, ConcatComponent, StartwithComponent
        , EndwithComponent, MergeComponent, PairwiseComponent, RaceComponent, ForkjoinComponent, MergeallComponent, ZipComponent,
        ConditionalComponent, DefaultifemptyComponent, EveryComponent, SequenceEqualComponent,
        ErrorHandlingComponent, CatchErrorComponent, RetryComponent, MulticastingComponent, PublishComponent],
    providers: [ServiceMockDataService]
})
export class RpRxjsModule {

}
