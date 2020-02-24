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
    MatCheckboxModule,
    MatBottomSheetModule
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
        MatCheckboxModule,
        MatBottomSheetModule
    ]
})
export class MaterialModule {
}
