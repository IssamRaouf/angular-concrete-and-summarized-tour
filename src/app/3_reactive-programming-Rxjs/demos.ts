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


    /**
     * pipe without
     */

    public static readonly demoWithoutPipe = `
// Implementation
  const result =  of(1,2,3,4,5)
                    .map(value => value *2 )
                    .filter(value => value > 4)
// Subscribre
result.subscribe(
    data => console.log(data)
); // 6 , 8 , 10 
    `;
    /**
     * with pipe
     */

    public static readonly demoWithPipe = `
// Implementation
 const result =  of(1,2,3,4,5).pipe(
         map(value => value *2 ),
         filter(value => value > 4)
);
// Subscribre
result.subscribe(
data => console.log(data)
); // 6 , 8 , 10
`;

    /**
     * combineLatest blabla
     */

    public static readonly demoCombineLatestBlabla = `
    // Implementation
    combineLatest(observable1,observable2).subscribe(
        result => console.log(result)
    );
    
    // Results
    
    //    seconde 0 => [1,11]
    //    seconde 1 => [8,11]
    //    secondes 3 => [8,13]
    //    secondes 6 => [8,18]  (Résultat final aprés les deux 'observable' ont fini (observables émettent complete func)`;
    /**
     * combineLatest
     */

    public static readonly demoCombineLatest = `
    // Implementation
     const Observable1 = timer(1000, 1000).pipe(
                                 take(3),
                                 map(res => 'Observable One Val: ' + res})
                                 );
     const Observable2 = timer(1000, 3000).pipe(
                                take(5), 
                                map(res => 'Observable Tow Val: ' +res})
                                );
    combineLatest(Observable1, Observable2).subscribe(
                            result => console.log(result)
                            );
    // Results
        ["Observable One Val: 0", "Observable Tow Val: 0"]
        ["Observable One Val: 1", "Observable Tow Val: 0"]
        ["Observable One Val: 2", "Observable Tow Val: 0"]
        ["Observable One Val: 2", "Observable Tow Val: 1"]
        ["Observable One Val: 2", "Observable Tow Val: 2"]
        ["Observable One Val: 2", "Observable Tow Val: 3"]
        ["Observable One Val: 2", "Observable Tow Val: 4"] Résultat final aprés les deux 'observable' 
                                                           ont fini  (observables émettent complete func)
    `;

    /**
     * concat blabla
     */
    public static readonly demoConcatBlabla = `
     // Implementation
        concat(observable1,observable2,observable3).subscribe(
            res => console.log('res',res)
        );
      //  Results
       1
       2 
       3 
       8
       13 
       19 
       33 
       44 
       99`;

    /**
     * concat
     */
    public static readonly demoConcat = `
     // Implementation
        const obser1 = of(11, 22, 'Issam');
        const obser2 = of(33, 77, 'Raouf');
        const obser3 = of(99, 88, 'Issam Raouf');
        concat(obser1, obser2, obser3).subscribe(
        res => console.log('res concat', res)
        );
       //  Results
       11
       22 
       Issam 
       33 
       77 
       Raouf
       99 
       88 
       Issam Raouf(Résultat final aprés le 'obser3' a fini)`;


    /**
     * startWith blabla
     */
    public static readonly demoStartWithBlabla = `
     // Implementation
       observable1.pipe(startWith(88888));
        );
       //  Results
       8888
       1
       2
       2 `;

    /**
     * startWith
     */
    public static readonly demoStartWith = `
     // Implementation
        const obser = of('Issam', 'Raouf');
        obser.pipe(
         startWith('Hello')
        ).subscribe( res => console.log('res startWith', res));
        );
       //  Results
       Hello 
       Issam 
       Raouf `;

    /**
     * endWith blabla
     */
    public static readonly demoEndWithBlabla = `
     // Implementation
        observable1.pipe(endWidth(999));
       //  Results
       1 
       2 
       3 
       999;`;

    /**
     * endWith
     */
    public static readonly demoEndWith = `
    // Implementation
    const obser = of('Issam', 'Raouf','Hello and');
    obser.pipe(
        endWith('Goodbye')
        ).subscribe( res => console.log('res endWith', res));
    //  Results
    Issam , Raouf , Hello and , Goodbye;`;

    /**
     * Merge
     */
    public static readonly demoMerge = `
    // Implementation
    const interval1 = interval(1000).pipe(
                                     take(3),
                                     map(val => 'interval First' +val)
     const interval2 = interval(2000).pipe(
                                     take(3),
                                     map(val => 'interval tow' +val)
                                     );                                     );
                                     );
     const interval3 = interval(3000).pipe(
                                     take(3),
                                     map(val => 'interval three' +val)
                                     );      
     merge(interval1, interval2, interval3).subscribe(
            result => console.log('merge result is ', result)
     );
    //  Results
      interval First 0
      interval First 1
      interval tow 0
      interval First 2
      interval three 0
      interval tow 1
      interval tow 2
      interval three 1
      interval three 2`;

    /**
     * MergeAll
     */
    public static readonly demoMergeAll = `
    // Implementation
         const obserTr = val => of(val).pipe(map(val => val * 3));
         const obser = of(1, 2, 3, 4);
         obser.pipe(
                   map(val => obserTr(val)),
                   mergeAll()
               ).subscribe(res => console.log('result: ', res))
    //  Results
         result : 3
         result : 6
         result : 9
         result : 12`;

}
