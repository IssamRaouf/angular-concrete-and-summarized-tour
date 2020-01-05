

/**
 * this model is view object for ticket (https://jsonplaceholder.typicode.com/todos)
 */
export class Ticket {
    public userId: number;
    public id: string;
    public title: string;
    public completed: boolean;

    constructor(json?: any) {
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('userId')) {
                this.userId = json.userId as number;
            }
            if (json.hasOwnProperty('id')) {
                this.id = json.id as string;
            }
            if (json.hasOwnProperty('title')) {
                this.title = json.title as string;
            }
            if (json.hasOwnProperty('completed')) {
                this.completed = json.completed as boolean;
            }
        }
    }

}
