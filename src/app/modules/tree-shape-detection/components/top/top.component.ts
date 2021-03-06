import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';
import * as faker from 'faker';
import { OpsatService } from '../../../../services';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => TopComponent)
        },
        OpsatService
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopComponent extends Logger {

    public key: string = 'TOP';
    public constructor(
        injector: Injector
    ) {
        super(injector);
        console.log(`${this.key} ctor`);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }


    public ngDoCheck(): void {
        super.ngDoCheck();
    }

    public ngAfterContentInit(): void {
        super.ngAfterContentInit();
    }

    public ngAfterContentChecked(): void {
        super.ngAfterContentChecked();
    }

    public ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    public ngAfterViewChecked(): void {
        super.ngAfterViewChecked();
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public refresh(): void {
        this.userName = faker.name.findName();
        this.opsat.publishMessage('user', { name: this.userName });
    }
}
