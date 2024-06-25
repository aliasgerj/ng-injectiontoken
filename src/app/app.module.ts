import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientModule} from "./clients/client.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClientModule.forRoot({url: 'http://localhost:3000'})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
