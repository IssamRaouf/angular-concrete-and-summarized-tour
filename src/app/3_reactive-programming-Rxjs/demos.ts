import {ConnectableObservable, from, fromEvent, interval, of, throwError, timer} from 'rxjs';
import {audit, catchError, debounce, defaultIfEmpty, map, mapTo, publish, retry, share, switchMap, take, tap} from 'rxjs/operators';

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

    /**
     * pairewisel
     */
    public static readonly demoPairewise = `
    // Implementation
       const observ = of( {name: 'issam raouf', job: 'Lead developer'},
                          {name: 'khalil boukhari', job: 'full stack developer'},
                          {name: 'Fouzi ben tounssi', job: 'Architect technique'}
                         ).pipe(
                                 pairwise()
                         ).subscribe(res => console.log('result: ', res))
    //  Results
         result : [{name: 'issam raouf', job: 'Lead developer'},{name: 'khalil boukhari', job: 'full stack developer'}]
         result : [{name: 'khalil boukhari', job: 'full stack developer'},{name: 'Fouzi ben tounssi', job: 'Architect technique'}]
   `;


    /**
     * race
     */
    public static readonly demoRace = `
    // Implementation
        const obser1 = interval(2000).pipe(take(3), mapTo('First obser1, emet chaque 2 seconde'));
        const obser2 = interval(1000).pipe(take(3), mapTo('First obser2, emet chaque 1 seconde'));
        const obser3 = interval(3000).pipe(take(3), mapTo('First obser3, emet chaque 3 seconde'));

        race(obser1, obser2, obser3).subscribe(res => console.log('race result is :', res));

    //  Results
        race result is : First obser2, emet chaque 1 seconde
        race result is : First obser2, emet chaque 1 seconde
        race result is : First obser2, emet chaque 1 seconde
   `;

    /**
     * forkjoin
     */
    public static readonly demoforkjoin = `
    // Implementation
         const obser1 = of('Hello');
         const obser2 = of('2018', '2008', '2004');
         const obser3 = of( {name: 'issam raouf', job: 'Lead developer'},
                            {name: 'khalil boukhari', job: 'full stack developer'},
                            {name: 'Fouzi ben tounssi', job: 'Architect technique'}
                            );
         forkJoin([obser1, obser2, obser3]).subscribe(res => console.log('ForkJoin res is ', res));

    //  Results
        ['Hello','2004',{name: 'Fouzi ben tounssi', job: 'Architect technique'}]
   `;


    /**
     * zip
     */
    public static readonly demoZip = `
    // Implementation
         const obser1 = interval(1000).pipe(map(val => 'obser1 :'+val), take(3));
         const obser2 = interval(2000).pipe(map(val => 'obser2 :' +val), take(3));
         const obser3 = interval(3000).pipe(map(val => 'obser3 :' +val), take(3));
         const obser4 = interval(6000).pipe(map(val => 'obser4 :' +val), take(3));

      zip(obser1, obser2, obser3, obser4).subscribe(res => console.log('Result : ', res));

    //  Results
            Result :   ["obser1 : 0", "obser2 : 0", "obser3 : 0", "obser4 : 0"]
            Result :   ["obser1 : 1", "obser2 : 1", "obser3 : 1", "obser4 : 1"]
            Result :   ["obser1 : 2", "obser2 : 2", "obser3 : 2", "obser4 : 2"]
   `;

    /**
     * defaultifempty
     */
    public static readonly demoDefaultIfEmpty = `
    // Implementation
           const observ = of().pipe(defaultIfEmpty('hello world'));
           observ.subscribe(res => console.log('Result is :', res));

    //  Results
           Result is : Hello world
   `;

    /**
     * every
     */
    public static readonly demoEvery = `
    // Implementation
         const observ = of(4, 8, 9, 3).pipe(
                         every(val => val % 2 === 0)
                    ).subscribe(res => console.log('Result : ', res));

    //  Results
           Result is : false
   `;

    /**
     * sequenceequal
     */
    public static readonly demoSequenceEqual = `
    // Implementation

         const observ = from([99, 33, 44]);
         of([1, 2, 3], [4, 5, 6], [99, 33, 44])
                        .pipe(
                              switchMap(arr => from(arr)
                                            .pipe(
                                                 sequenceEqual(observ)
                                             )
                              ) 
                        ).subscribe(res => console.log('Result : ', res));

    //  Results
          Result : false
          Result : false
          Result : true
   `;
    /**
     * catchError
     */
    public static readonly demoCatchError = `
    // Implementation
        const errorTh = throwError('ERROR 404!');
        const obser = errorTh.pipe(catchError(error => of('Error '+error)));

    //  Results
           Result : Error, ERROR 404
   `;

    /**
     * Retry
     */
    public static readonly demoRetry = `
    // Implementation
            const observ = interval(1000).pipe(take(10));
            let checkIn = false;
            const observIn = observ.pipe(
                switchMap(val => {
                    if (val > 4 && checkIn === false) {
                        checkIn = true;
                        return throwError('Error!');
                    }
                    return of(val);
                }),
                retry(1)
            );

            observIn.subscribe(
                 result => console.log(result),
                 error => console.log(error +'Retried 2 times then quit!')
                 );

    //  Results
            Result : 0
            Result : 1
            Result : 2
            Result : 3
            Result : 4

           // NB: on va déclencher un erreur et on change la variable checkIn pour le laisse réussir la deuxieme fois..

            Result : 0
            Result : 1
            Result : 2
            Result : 3
            Result : 4
            Result : 5
            Result : 6
            Result : 7
            Result : 8
            Result : 9`;


    /**
     * Publish
     */
    public static readonly demoPublish = `
    // Implementation
            observ: ConnectableObservable<string>;
            //...
            const source = interval(1000).pipe(take(5));
            this.observ = source.pipe(
                   // Les effets secondaires seront exécutés une fois meme au va l'abonner 100 fois...
                  // Pour bien comprendre faire meme exmple sans publish et ConnectableObservable ,
                 // à chaque subscribe il va declanche Augmentation le number de la vue..
                tap(() => console.log('Augmenter le number de vue d\'un ticket (Par exemple... )')),
                map(val =>'Result :'+val),
                publish()
            ) as ConnectableObservable<string>;

            const subscribeOne = this.observ.subscribe(val =>
                console.log('subscribeOne :' + val)
            );
            const subscribeTwo = this.observ.subscribe(val =>
                console.log('subscribeTwo :'+ val)
            );

    //  Results
         Augmenter le number de vue d'un ticket (Par exemple... )
         subscribeOne , Result : 0
         subscribeTwo , Result : 0
         Augmenter le number de vue d'un ticket (Par exemple... )
         subscribeOne , Result : 1
         subscribeTwo , Result : 1
         Augmenter le number de vue d'un ticket (Par exemple... )
         subscribeOne , Result : 2
         subscribeTwo , Result : 2
         Augmenter le number de vue d'un ticket (Par exemple... )
         subscribeOne , Result : 3
         subscribeTwo , Result : 3
         Augmenter le number de vue d'un ticket (Par exemple... )
         subscribeOne , Result : 4
         subscribeTwo , Result : 4
           `;

    /**
     * Share
     */
    public static readonly demoShare = `
    // Implementation
        const source = timer(1000);
        const observ = source.pipe(
            tap(() => console.log('TRAITEMENT UNE SEULE FOIS, MÊME S\'IL Y A MULTI SUBSCRIBE (Partage source..)')),
            mapTo('Result : Hello ')
        );
        const sharedObserv = observ.pipe(share());

        const subscribeOne = sharedObserv.subscribe(val => console.log('subscribeOne ', val));
        const subscribeTow = sharedObserv.subscribe(val => console.log('subscribeTow ', val));
    //  Results
        TRAITEMENT UNE SEULE FOIS, MÊME S'IL Y A MULTI SUBSCRIBE (Partage source..)
        subscribeOne Result : Hello
        subscribeTow Result : Hello
           `;

    /**
     * audit
     */
    public static readonly demoAudit = `
    // Implementation
         const source = fromEvent(document, 'click');
         const result = source.pipe(audit(ev => interval(3000)));
         result.subscribe(element => {
              console.log(element);
          });
    //  Results
        Result  (aller au component , enlever le commentaire et voir résultat sur la console)
           `;
    /**
     * auditTime
     */
    public static readonly demoAuditTime = `
    // Implementation
         const source = fromEvent(document, 'click');
        const result = source.pipe(auditTime(1000));
        result.subscribe(res => console.log('Result : ', res));
    //  Results
        Result  (aller au component , enlever le commentaire et voir résultat sur la console)
           `;
    /**
     * debounce
     */
    public static readonly demoDebounce = `
    // Implementation
             const source = fromEvent(document, 'click');
             const result = source.pipe(debounce(() => timer(1000)));
             result.subscribe(element => console.log('element :', element));
    //  Results
        Result  (aller au component , enlever le commentaire et voir résultat sur la console)
           `;


}