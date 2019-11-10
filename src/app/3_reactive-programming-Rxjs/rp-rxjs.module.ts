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
import {ShareComponent} from './operator-mixed/multicasting/share/share.component';
import {FilteringComponent} from './operator-mixed/filtering/filtering.component';
import {AuditComponent} from './operator-mixed/filtering/audit/audit.component';
import {AuditTimerComponent} from './operator-mixed/filtering/audit-timer/audit-timer.component';
import {DebounceComponent} from './operator-mixed/filtering/debounce/debounce.component';
import {DebounceTimeComponent} from './operator-mixed/filtering/debounce-time/debounce-time.component';
import {DistinctComponent} from './operator-mixed/filtering/distinct/distinct.component';
import {DistinctUntilChangedComponent} from './operator-mixed/filtering/distinct-until-changed/distinct-until-changed.component';
import {DistinctUntilKeyChangedComponent} from './operator-mixed/filtering/distinct-until-key-changed/distinct-until-key-changed.component';
import {FilterComponent} from './operator-mixed/filtering/filter/filter.component';
import {FindComponent} from './operator-mixed/filtering/find/find.component';
import {FirstComponent} from './operator-mixed/filtering/first/first.component';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RpRxjsRoutingModule],
    declarations: [TodoComponent, CreationComponent, PipeComponent, OperatorMixedComponent,
        CombinationComponent, CombinelatestComponent, ConcatComponent, StartwithComponent
        , EndwithComponent, MergeComponent, PairwiseComponent, RaceComponent, ForkjoinComponent, MergeallComponent, ZipComponent,
        ConditionalComponent, DefaultifemptyComponent, EveryComponent, SequenceEqualComponent,
        ErrorHandlingComponent, CatchErrorComponent, RetryComponent, MulticastingComponent, PublishComponent,
        ShareComponent, FilteringComponent, AuditComponent, AuditTimerComponent, DebounceComponent,
        DebounceTimeComponent, DistinctComponent, DistinctUntilChangedComponent, DistinctUntilKeyChangedComponent,
        FilterComponent, FindComponent, FirstComponent],
    providers: [ServiceMockDataService]
})
export class RpRxjsModule {

}
