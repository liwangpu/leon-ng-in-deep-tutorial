import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {

    public constructor() {

    }

    public ngDoCheck(): void {
        console.log('app component do check');
    }

    public ngOnInit(): void {

    }
}
