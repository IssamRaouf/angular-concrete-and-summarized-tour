import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {Author} from './author.model';

/**
 * this model is view object for ticket
 */
export class Ticket {
    public name: string;
    public description: string;
    public type: TicketTypeEnum;
    public hideDesc: boolean;
    public author: Author;

    constructor(json?: any) {
        this.hideDesc = true;
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('name')) {
                this.name = json.name as string;
            }
            if (json.hasOwnProperty('description')) {
                this.description = json.description as string;
            }
            if (json.hasOwnProperty('type')) {
                this.type = json.type as TicketTypeEnum;
            }
            if (json.hasOwnProperty('hideDesc')) {
                this.hideDesc = json.hideDesc as boolean;
            }
            if (json.hasOwnProperty('author')) {
                this.author = new Author(json.author);
            }
        }
    }

    public toggleDesc(): void {
        this.hideDesc = !this.hideDesc;
    }
}
