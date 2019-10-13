import {UserInterface} from './user.interface';

export class UserMock {

    public static readonly USERS_DATA: Array<UserInterface> = [
        {name: 'author N1', uuid: '7524f269-430b-4ab4-9dfc-33c8076a8cf5'},
        {name: 'author N2', uuid: 'c7e11d05-8a75-4632-88f4-86596766b84d'},
        {name: 'author N3', uuid: 'dda0e030-24ca-41ab-a80c-d8e29c992a18'},
        {name: 'author N4', uuid: '4e9a907c-8688-4a7d-9dbb-a2b006341182'},
        {name: 'author N5', uuid: '219a1e6e-0c16-4164-aef4-50aea4728f9f'}
        ];
}
