export class CompanyModel {

    name: string;
    catchPhrase: string;
    bs: string;

    constructor(json?: any) {
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('name')) {
                this.name = json.name as string;
            }
            if (json.hasOwnProperty('catchPhrase')) {
                this.catchPhrase = json.catchPhrase as string;
            }
            if (json.hasOwnProperty('bs')) {
                this.bs = json.bs as string;
            }
        }
    }

}
