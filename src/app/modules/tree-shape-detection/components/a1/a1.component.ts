import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { dataMap, topicFilter } from '../../services/opsat.service';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-a1',
    templateUrl: './a1.component.html',
    styleUrls: ['./a1.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => A1Component)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class A1Component extends Logger {

    public key: string = 'A1';
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
