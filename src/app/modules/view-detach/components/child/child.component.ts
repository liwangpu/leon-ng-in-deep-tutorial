import { ChangeDetectionStrategy, Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    providers: [
        MessageService
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, DoCheck {

    public updateTime: string = new Date().toISOString();
    public constructor(
        private cd: ChangeDetectorRef
    ) { }

    public ngDoCheck(): void {
        console.log('child component do check');
    }

    public ngOnInit(): void {
    }

    public refreshUpdateTime(): void {
        this.updateTime = new Date().toISOString();
    }

    public detachView(): void {
        this.cd.detach();
    }

    public reattachView(): void {
        this.cd.reattach();
    }

}
