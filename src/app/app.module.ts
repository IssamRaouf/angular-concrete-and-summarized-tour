import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './MaterialModule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownDocsComponent} from './markdown-docs/markdown-docs.component';

@NgModule({
    declarations: [
        AppComponent,
        MarkdownDocsComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MarkdownModule.forRoot({loader: HttpClient}),


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
