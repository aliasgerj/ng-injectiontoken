import {InjectionToken, NgModule} from "@angular/core";
import {ClientComponent} from "./client.component";

// injection token
export interface ClientConf {
    url: string;
}

export const ClientToken = new InjectionToken<ClientConf>('ClientConf');


@NgModule({
    declarations: [ClientComponent],
    exports: [ClientComponent]
})
export class ClientModule {
    // forRoot method
    static forRoot(config: ClientConf) {
        return {
            ngModule: ClientModule,
            providers: [
                {provide: ClientToken, useValue: config}
            ]
        };
    }
}