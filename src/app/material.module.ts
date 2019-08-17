import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatCardModule
} from '@angular/material';


@NgModule({
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ],
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ]
})

export class MaterialModule {

}
