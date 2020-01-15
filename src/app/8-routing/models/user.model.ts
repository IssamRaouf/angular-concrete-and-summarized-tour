
export class UserModel {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;

    constructor(json?: any) {
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('id')) {
                this.id = json.id as number;
            }
            if (json.hasOwnProperty('username')) {
                this.username = json.username as string;
            }
            if (json.hasOwnProperty('email')) {
                this.email = json.email as string;
            }
            if (json.hasOwnProperty('isAdmin')) {
                this.isAdmin = json.isAdmin as boolean;
            }
        }
    }
}
