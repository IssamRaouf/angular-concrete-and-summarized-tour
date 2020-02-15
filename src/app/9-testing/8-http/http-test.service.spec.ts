import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import 'zone.js/dist/zone-testing';
import {HttpTestService} from './http-test.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {Ticket} from './ticket.model';


describe('HttpTestService', () => {

    let service: HttpTestService;
    // ce controller nous permet de se moquer et de flush les demandes.
    let httpTestingController: HttpTestingController;

    // environment clear and init
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpTestService]
        });

        service = TestBed.get(HttpTestService);
        httpTestingController = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        // Après chaque test, assurez-vous qu'il n'y a plus de demandes en attente.
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    // Le Http est une activité asynchrone, nous utilisons donc l'une des méthodes de test asynchrones (done de jasmine)
    it('should return list todos', (done: DoneFn) => {
        // Nous créons des fausses données avec lesquelles l'API doit répondre.
        const response = [
            {
                userId: 1,
                id: 1,
                title: 'delectus aut autem',
                completed: false
            }];
        // appel a notre methode pour declanche & recupérer la liste des todos..
        service.getListTodo().subscribe((ticket: Array<Ticket>) => {
            const firstTicket = (ticket[0] || {}) as Ticket;
            expect(firstTicket.userId).toBe(response[0].userId);
            expect(firstTicket.id).toBe(response[0].id);
            expect(firstTicket.title).toBe(response[0].title);
            expect(firstTicket.completed).toBe(response[0].completed);
            done();
        });

        // attend notre demande qui correspond à l'URL donnée et return sa mock.
        const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/todos');

        /// Affirme que la requête est un GET.
        expect(req.request.method).toEqual('GET');

        // Résolvez la demande en renvoyant un corps ainsi que des informations HTTP supplémentaires
        // (telles que des en-têtes de réponse), le cas échéant
        req.flush(response);

    });
});

