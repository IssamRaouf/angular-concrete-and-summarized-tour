export class UserModel {
    username: string;
    password: string;

    constructor(json?: any) {
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('username')) {
                this.username = json.username as string;
            }
            if (json.hasOwnProperty('password')) {
                this.password = json.password as string;
            }
        }
    }
}
