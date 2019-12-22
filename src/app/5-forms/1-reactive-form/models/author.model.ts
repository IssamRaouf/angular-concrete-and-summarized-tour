import {GradeEnum} from '../enum/grade.enum';

/**
 * this model is view object for author
 */
export class Author {

    public firstName: string;
    public lastName: string;
    public email: string;
    public grade: GradeEnum;


    constructor(json?: any) {
        if (json !== undefined && json !== null) {
            if (json.hasOwnProperty('firstName')) {
                this.firstName = json.firstName as string;
            }
            if (json.hasOwnProperty('lastName')) {
                this.lastName = json.lastName as string;
            }
            if (json.hasOwnProperty('email')) {
                this.email = json.email as string;
            }
            if (json.hasOwnProperty('grade')) {
                this.grade = json.grade as GradeEnum;
            }
        }
    }

}
