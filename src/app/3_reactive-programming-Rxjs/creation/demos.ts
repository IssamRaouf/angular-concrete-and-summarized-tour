import {Observable} from 'rxjs';

export class Demos {
    /**
     * new observable
     */
    public static readonly demoNewObs = `
    // Implementation
        const obsCreate = new Observable((observer) => {
             observer.next('Hello');
             observer.next(' from');
             observer.next(' Observable creation');
             observer.complete();
        }); 
    // Subscribre
        obsCreate.subscribe((res) => {
         this.observableCreateResult += res;
        });`;

    /**
     * of
     */

    public static readonly demoOf = `
    // Implementation
        const observableOf = of('Hello form obervable of');
    // Subscribre
         observableOf.subscribe((res) = > {
            this.observableOfResult = res;
          });`;
    /**
     * from
     */
    public static readonly demoFrom = `
    // Implementation
        const observableFrom = from(['Symfony and', ' Angular', ' hese', ' are', ' my', ' loves']);
    // Subscribre
        observableFrom.subscribe(res = > {
            this.observableFromResult + = res;
        });`;

    /**
     * fromEvent
     */
    public static readonly demoFromEvent = `
    // Implementation
         @ViewChild('btnFromEvent') btnFEvent: ElementRef;
         const obsFromEvent = fromEvent(this.btnFEvent.nativeElement, 'click');
    // Subscribre
       obsFromEvent.subscribe((isClicked) => {
            this.observableFromEventResult = 'Yes';
        });`;

    /**
     * Interval
     */
    public static readonly demoInterval = `
    // Implementation
        obsInterval: Observable<number>;
         ...
         this.obsInterval = interval(2000);
    // Subscribre
        public startInterval(): void {
            this.obsInterval.subscribe((res) => {
                this.observableIntervalResult = res;
                });
         }`;

    /**
     * timer
     */
    public static readonly demoTimer = `
    // Implementation
          obsTimer: Observable<number>;
          ..
          this.obsTimer = timer(1000, 5000);
    // Subscribre
       public startTimer(): void {
          this.obsTimer.subscribe(res => this.observableTimerResult += res);
        }
       `;

    /**
     * timer
     */
    public static readonly demoRange = `
    // Implementation
       obsRange: Observable<number>;
        ..
       this.obsRange = range(11, 33);
     // Subscribre
       public startRange(): void {
           this.obsRange.subscribe(res => this.observableRangeResult = res);
       }`;

}
