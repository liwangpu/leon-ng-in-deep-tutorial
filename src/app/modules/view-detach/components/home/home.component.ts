import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers:[
        MessageService
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {

    public constructor() { }

    public ngDoCheck(): void {
        console.log('home component do check');
    }

    public ngOnInit(): void {
    }

    public refresh(): void {

    }

}
