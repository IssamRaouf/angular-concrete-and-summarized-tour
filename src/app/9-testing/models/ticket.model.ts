import {TicketTypeEnum} from '../enum/ticket-type.enum';

/**
 * this model is view object for ticket
 */
export class Ticket {
    public name: string;
    public description: string;
    public type: TicketTypeEnum;

    constructor(json?: any) {

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
        }
    }

}
