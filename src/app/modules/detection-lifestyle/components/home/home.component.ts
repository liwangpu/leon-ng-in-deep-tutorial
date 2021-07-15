import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';

const toggleOutsidePanel: () => void = (window as any)['toggleOutsidePanel'];

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {

    public updateTime: string = new Date().toISOString();
    public constructor(
        private cd: ChangeDetectorRef,
        private appRef: ApplicationRef
    ) { }

    public ngDoCheck(): void {
        console.log('home component do check');
    }

    public ngOnInit(): void {
        (window as any)['getNgComponent'] = () => this;
        console.log('cd:', this.cd);

    }

    public openOutsidePanel(): void {
        toggleOutsidePanel();
    }

    public doMarkForCheck(): void {
        this.cd.markForCheck();
        // console.log('markForCheck trigger!');
    }

    public doAppTick(): void {
        this.appRef.tick();
        // console.log('app tick trigger!');
    }

}
