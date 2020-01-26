export class UserModel {
    public fullName: string;
    public role: string;

    public constructor(json?: any) {
        if (json !== null && json !== undefined) {
            if (json.hasOwnProperty('fullName')) {
                this.fullName = json.fullName as string;
            }
            if (json.hasOwnProperty('role')) {
                this.role = json.role as string;
            }
        }

    }

}
