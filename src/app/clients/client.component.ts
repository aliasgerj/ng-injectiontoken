import {Component, Inject} from "@angular/core";
import {ClientConf, ClientToken} from "./client.module";

@Component({
    selector: 'app-client',
    template: `
        <h1>{{ title }}!</h1>
    `,
    styles: []
})
export class ClientComponent {
    // constructor using the injection token
    constructor(
        @Inject(ClientToken) private config: ClientConf
    ) {
        this.title = this.config.url;
    }

    title = 'Client';
}