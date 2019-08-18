import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
} from '@angular/material';


@NgModule({
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule
    ],
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule
    ]
})

export class MaterialModule {

}
