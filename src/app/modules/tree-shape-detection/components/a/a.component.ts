import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';
import { dataMap, topicFilter } from '../../services/opsat.service';

@Component({
    selector: 'app-a',
    templateUrl: './a.component.html',
    styleUrls: ['./a.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => AComponent)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent extends Logger {

    public key: string = 'A';
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

    }
}
