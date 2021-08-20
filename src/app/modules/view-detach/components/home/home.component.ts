import { Component, OnInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { OpsatService } from '../../../../services';
import { IChildMetadata, TAB_PAGE_METADATA } from '../../tokens';
import { ChildComponent } from '../child/child.component';
import * as fa from 'faker';

function remove<T>(arr: Array<T>, func: (value: T, index?: number, array?: Array<T>) => boolean): Array<T> {
    if (arr && Array.isArray(arr)) {
        return arr.filter(func).reduce((acc, val) => {
            arr.splice(arr.indexOf(val), 1);
            return acc.concat(val as any);
        }, []);
    }
    return [];
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        OpsatService
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {


    public childArr: Array<string> = [];
    @ViewChild('container', { static: true, read: ViewContainerRef })
    private readonly container!: ViewContainerRef;
    private fac: any;
    public constructor(
        private opsat: OpsatService,
        private cd: ChangeDetectorRef,
        private cfr: ComponentFactoryResolver,
        private injector: Injector
    ) {
        this.fac = this.cfr.resolveComponentFactory(ChildComponent);
    }

    public ngDoCheck(): void {
        console.log('home component do check');
    }

    public ngOnInit(): void {
        this.updateInfo();

        this.generateChild();
    }

    public refresh(): void {
        this.updateInfo();
    }

    public generateChild(): void {
        const metadata: IChildMetadata = {
            key: fa.datatype.uuid(),
            title: fa.name.findName()
        };
        this.childArr.push(metadata.title);
        const ij = Injector.create({
            providers: [
                { provide: TAB_PAGE_METADATA, useValue: metadata }
            ],
            parent: this.injector
        });
        this.container.createComponent(this.fac, undefined, ij);
    }

    public deleteChild(title: string): void {
        let idx = this.childArr.findIndex(t => t === title);
        remove(this.childArr, it => it === title);
        this.container.remove(idx);
    }

    public detachChild(title: string): void {

    }

    private updateInfo(): void {
        this.opsat.publishMessage('info', new Date().toISOString());
    }

}
