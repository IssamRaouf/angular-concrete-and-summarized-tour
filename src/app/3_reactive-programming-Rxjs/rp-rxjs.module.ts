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
import {LastComponent} from './operator-mixed/filtering/last/last.component';
import {SampleComponent} from './operator-mixed/filtering/sample/sample.component';
import {SkipComponent} from './operator-mixed/filtering/skip/skip.component';
import {SkipUntilComponent} from './operator-mixed/filtering/skip-until/skip-until.component';
import {SkipWhileComponent} from './operator-mixed/filtering/skip-while/skip-while.component';
import {TakeComponent} from './operator-mixed/filtering/take/take.component';
import {TakeLastComponent} from './operator-mixed/filtering/take-last/take-last.component';
import {TakeUntilComponent} from './operator-mixed/filtering/take-until/take-until.component';
import {TakeWhileComponent} from './operator-mixed/filtering/take-while/take-while.component';
import {ThrottleComponent} from './operator-mixed/filtering/throttle/throttle.component';
import {ThrottleTimeComponent} from './operator-mixed/filtering/throttle-time/throttle-time.component';
import {TransformationComponent} from './operator-mixed/transformation/transformation.component';
import {BufferComponent} from './operator-mixed/transformation/buffer/buffer.component';
import {BufferCountComponent} from './operator-mixed/transformation/buffer-count/buffer-count.component';
import {BufferTimeComponent} from './operator-mixed/transformation/buffer-time/buffer-time.component';
import {ConcatMapComponent} from './operator-mixed/transformation/concat-map/concat-map.component';
import {GroupByComponent} from './operator-mixed/transformation/group-by/group-by.component';
import {MapComponent} from './operator-mixed/transformation/map/map.component';
import {MapToComponent} from './operator-mixed/transformation/map-to/map-to.component';
import {MergeMapComponent} from './operator-mixed/transformation/merge-map/merge-map.component';
import {PartitionComponent} from './operator-mixed/transformation/partition/partition.component';
import {PulckComponent} from './operator-mixed/transformation/pulck/pulck.component';
import {ReduceComponent} from './operator-mixed/transformation/reduce/reduce.component';
import {ScanComponent} from './operator-mixed/transformation/scan/scan.component';
import {SwitchMapComponent} from './operator-mixed/transformation/switch-map/switch-map.component';
import {ToArrayComponent} from './operator-mixed/transformation/to-array/to-array.component';
import {UtilComponent} from './operator-mixed/util/util.component';
import {TapComponent} from './operator-mixed/util/tap/tap.component';
import { DelayComponent } from './operator-mixed/util/delay/delay.component';
import { DelayWhenComponent } from './operator-mixed/util/delay-when/delay-when.component';
import { FinalizeComponent } from './operator-mixed/util/finalize/finalize.component';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RpRxjsRoutingModule],
    declarations: [TodoComponent, CreationComponent, PipeComponent, OperatorMixedComponent,
        CombinationComponent, CombinelatestComponent, ConcatComponent, StartwithComponent
        , EndwithComponent, MergeComponent, PairwiseComponent, RaceComponent, ForkjoinComponent, MergeallComponent, ZipComponent,
        ConditionalComponent, DefaultifemptyComponent, EveryComponent, SequenceEqualComponent,
        ErrorHandlingComponent, CatchErrorComponent, RetryComponent, MulticastingComponent, PublishComponent,
        ShareComponent, FilteringComponent, AuditComponent, AuditTimerComponent, DebounceComponent,
        DebounceTimeComponent, DistinctComponent, DistinctUntilChangedComponent, DistinctUntilKeyChangedComponent,
        FilterComponent, FindComponent, FirstComponent, LastComponent, SampleComponent,
        SkipComponent, SkipUntilComponent, SkipWhileComponent, TakeComponent, TakeLastComponent, TakeUntilComponent,
        TakeWhileComponent, ThrottleComponent, ThrottleTimeComponent, TransformationComponent, BufferComponent,
        BufferCountComponent, BufferTimeComponent, ConcatMapComponent, GroupByComponent, MapComponent, MapToComponent, MergeMapComponent,
        PartitionComponent, PulckComponent, ReduceComponent, ScanComponent, SwitchMapComponent,
        ToArrayComponent, UtilComponent, TapComponent, DelayComponent, DelayWhenComponent, FinalizeComponent],
    providers: [ServiceMockDataService]
})
export class RpRxjsModule {

}
