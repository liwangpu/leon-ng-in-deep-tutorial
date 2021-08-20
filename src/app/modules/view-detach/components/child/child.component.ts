import { ChangeDetectionStrategy, Component, OnInit, DoCheck, ChangeDetectorRef, OnDestroy, Inject } from '@angular/core';
import { SubSink } from 'subsink';
import { dataMap, OpsatService } from '../../../../services';
import { TAB_PAGE_METADATA, IChildMetadata } from '../../tokens';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, DoCheck, OnDestroy {

    public title?: string;
    public isDetached: boolean = false;
    public updateTime: string = new Date().toISOString();
    private subs = new SubSink();
    public constructor(
        @Inject(TAB_PAGE_METADATA)
        private metadata: IChildMetadata,
        private opsat: OpsatService,
        private cd: ChangeDetectorRef
    ) {
        this.title = this.metadata.title;
    }

    public ngOnDestroy(): void {
        console.log(`${this.title} destroy`);
        this.subs.unsubscribe();
    }

    public ngDoCheck(): void {
        console.log('child component do check');
    }

    public ngOnInit(): void {
        this.subs.sink = this.opsat.message$
            .pipe(dataMap)
            .subscribe(ms => {
                // console.log(ms);
                this.updateTime = ms;
            });
    }

    public refreshUpdateTime(): void {
        this.updateTime = new Date().toISOString();
    }

    public detachView(): void {
        this.isDetached = true;
        this.cd.detach();
    }

    public reattachView(): void {
        this.isDetached = false;
        this.cd.reattach();
    }

    public destroy(): void {
        // this.cd.
    }

}
