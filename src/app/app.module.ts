import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './MaterialModule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingTestComponent} from './9-testing/9-routing-test/routing-test.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        RoutingTestComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MarkdownModule.forRoot({loader: HttpClient})

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
