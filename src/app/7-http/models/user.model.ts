import {CompanyModel} from './company.model';

export class UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    company: CompanyModel;

    constructor(json?: any) {
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('id')) {
                this.id = json.id as number;
            }
            if (json.hasOwnProperty('name')) {
                this.name = json.name as string;
            }
            if (json.hasOwnProperty('id')) {
                this.username = json.username as string;
            }
            if (json.hasOwnProperty('id')) {
                this.email = json.email as string;
            }
            if (json.hasOwnProperty('company')) {
                this.company = new CompanyModel(json.company);
            }
        }
    }
}
