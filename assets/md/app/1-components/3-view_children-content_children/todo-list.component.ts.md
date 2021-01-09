```javascript
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ViewChildren,
    AfterViewInit,
    QueryList,
    ElementRef,
    ContentChild,
    ContentChildren, AfterContentInit
} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketComponent} from '../ticket/ticket.component';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit, AfterContentInit {

    @Input() ticketList: Array<Ticket>;

    /**
     * @ViewChild(Selector)
     * Un @ViewChild décorateur signifie recherchez dans ce modèle de composants, sa vue, ces components enfant.
     * S'il y a une liste des (TicketComponent) , il nous donnera simplement le premier.
     * - Selector : le sélecteur de l'élément à interroger. Cela peut être un type de directive ou un nom. ici TicketComponent
     * NB : ici ticketViewChild c'est pas une nouvelle instance d'une TicketComponent, c'est l'instance réelle de l'enfant TicketComponent
     *      qui existe dans cette vue des composants.
     */
    @ViewChild(TicketComponent) ticketViewChild: TicketComponent;


    /**
     * @ViewChildren(Selector)
     *  Un @ViewChildren décorateur signifie, recherchez dans ce modèle de composants, sa vue, ces components enfant.
     * Nous utilisons le  @ViewChildren décorateur qui correspond à tous ceux TikcetComponents et les stocke
     * dans un @var  ticketViewChildren de type QueryList.
     * NB : ici ticketViewChildren ne sont pas des nouvelles instances des TicketComponent,
     * ce sont les instance réelles des l'enfants TicketsComponents   qui existent dans cette vue des composants.
     */

    @ViewChildren(TicketComponent) ticketViewChildren: QueryList<TicketComponent>;


    /**
     *  Nous pouvons également passer le nom d'une variable locale de modèle et faire en sorte que
     *  Angular stocke une référence à cette variable sur notre composant
     *  ...
     */
    @ViewChild('header') headerRefElem: ElementRef;

    /**
     * meme que @ViewChild mais il nous donne juste le premie components projecté par le component hote ici (projecté par TodoComponent)
     */
    @ContentChild(TicketComponent) ticketContentChild: TicketComponent;

    /**
     * meme que @ViewChildren mais il nous donne juste list des components projecté par le component hote
     * ici on a qu'un (projecté par TodoComponent)
     */
    @ContentChildren(TicketComponent) ticketContentChildren: QueryList<TicketComponent>;

    constructor() {
        // @viewChild
        // ici lorsqu'un composant parent est construit, cela signifie que les enfants ne sont pas encore créés.
        // comme ca on recoit undefined
        console.log(`constructor - ticketViewChild is ${this.ticketViewChild}`);

        // @viewChildren
        // ..
        // comme ca on recoit undefined
        console.log(`constructor - ticketViewChildren is ${this.ticketViewChildren}`);

        // @viewChild  headerRefElem
        // ..
        // comme ca on recoit undefined
        console.log(`constructor - headerRefElem is ${this.headerRefElem}`);


        // @ContentChild ticketContentChild
        // ..
        // comme ca on recoit undefined
        console.log(`constructor - ticketViewChild is ${this.ticketContentChild}`);

        // @ContentChildren content childrenb
        // ..
        // comme ca on recoit undefined
        console.log(`constructor - ticketContentChildren is ${this.ticketContentChildren}`);
    }

    ngOnInit(): void {
        // @viewChild
        // meme blabla sur le hook onInit
        // comme ca on recoit undefined
        console.log(`ngOnInit - ticketViewChild is ${this.ticketViewChild}`);

        // @viewChildren
        // ..
        // comme ca on recoit undefined
        console.log(`ngOnInit - ticketViewChildren is ${this.ticketViewChildren}`);

        // @viewChild  headerRefElem
        // ..
        // comme ca on recoit undefined
        console.log(`ngOnInit - headerRefElem is ${this.headerRefElem}`);


        // @ContentChild ticketContentChild
        // ..
        // comme ca on recoit undefined
        console.log(`ngOnInit - ticketViewChild is ${this.ticketContentChild}`);

        // @ContentChildren content childrenb
        // ..
        // comme ca on recoit undefined
        console.log(`ngOnInit - ticketContentChildren is ${this.ticketContentChildren}`);
    }

    ngAfterViewInit(): void {
        // @ViewChild
        // ici le ticketViewChild été initialisée , cela signifie que les enfants sont créés.
        // ici vous pouvez voir name (index actuel en ngFor) voir l'html ,comme ca on recoit le premier enfant
        console.log('ngAfterViewInit - ticketViewChild', this.ticketViewChild);


        // @ViewChildren
        // on peut obtenir result(Array<ticketComponent>) comme array avec toArray
        // voir @QueryList class..
        console.log('ngAfterViewInit - ticketViewChildren', this.ticketViewChildren.toArray());

        // interagir avec le dom direct
        console.log('ngAfterViewInit - headerRefElem is', this.headerRefElem);
        this.headerRefElem.nativeElement.innerHTML = 'hello form native Element';


    }

    ngAfterContentInit(): void {

        // @ContentChild ticketContentChild
        console.log('ngAfterContentInit - ticketViewChild is ', this.ticketContentChild);


        // @ContentChildren content childrenb
        console.log('ngAfterContentInit - ticketContentChildren is ', this.ticketContentChildren);
    }

}


```

