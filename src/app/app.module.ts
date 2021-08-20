import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule, NgZone } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceService } from './services';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ResourceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    public constructor(
        private zone: NgZone,
        private app: ApplicationRef
    ) {
        this.zone.onMicrotaskEmpty.subscribe(() => {
            console.log('micro task empty');
        });

        // this.zone.onStable.subscribe((r) => {
        //     console.log('on stable',r);
        // });

        // this.app.isStable.subscribe(t => {
        //     // console.log('_views', this.app['_views']);

        //     console.log('isStable status:', t);
        // });
    }

}
