import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {
}
