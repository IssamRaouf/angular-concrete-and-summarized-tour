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
     * Un @ViewChild décorateur signifie, recherchez dans ce modèle de composants, sa vue, ces components enfant.
     * S'il y a une liste des (TicketComponent) , il nous donnera simplement le premier.
     *
     * @ViewChild(Selector,{Read,Static})
     * - Selector : le sélecteur de l'élément à interroger. Cela peut être un type de directive ou un nom. ici TicketComponent
     * - Read : lit un jeton différent des éléments interrogés.
     * - Static : Ceci est nouveau dans Angular 8 et indique si les résultats de la requête doivent être résolus avant l'exécution de
     *           la détection des modifications.
     * NB : ici ticketViewChild c'est pas une instance d'une Ticket class, c'est l'instance réelle de l'enfant TicketComponent
     *      qui existe dans cette vue des composants.
     */
    @ViewChild(TicketComponent, {static: false}) ticketViewChild: TicketComponent;


    /**
     *  Un @ViewViewChildrenChild décorateur signifie, recherchez dans ce modèle de composants, sa vue, ces components enfant.
     * @ViewChildrenChild(Selector)
     * Nous utilisons le  @ViewChildren décorateur qui correspond à tous ceux TikcetComponents et les stocke
     * dans une QueryList,appelée ticketViewChildren.
     * NB : ici ticketViewChildren c'est pas une instance des Tickets classes, c'est l'instance réelle des l'enfants TicketsComponents
     *     qui existent dans cette vue des composants.
     */

    @ViewChildren(TicketComponent) ticketViewChildren: QueryList<TicketComponent>;


    /**
     *  nous pouvons également passer le nom d'une variable locale de modèle et faire en sorte que
     *  Angular stocke une référence à cette variable sur notre composant
     *  ...
     */
    @ViewChild('header', {static: false}) headerRefElem: ElementRef;

    /**
     * meme que @ViewChild mais il nous donne juste les components projecté par le component hote ici (TodoComponent)
     */
    @ContentChild(TicketComponent, {static: false}) ticketContentChild: TicketComponent;

    /**
     * meme que @ViewChildren mais il nous donne juste les components projecté par le component hote ici (TodoComponent)
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
        console.log(`constructor - ticketViewChild is ${this.ticketContentChild}`);

        // @ContentChildren content childrenb
        console.log(`constructor - ticketContentChildren is ${this.ticketContentChildren}`);
    }

    ngOnInit(): void {
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
