import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Directive, DoCheck, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SubSink } from 'subsink';
import { dataMap, OpsatService, topicFilter } from '../services/opsat.service';

export function getToggleValue(toggle: string): boolean {
    let str = localStorage.getItem(toggle);
    return typeof str === 'string' ? (str === 'true') : false;
}

export function setToggleValue(toggle: string, value: boolean): void {
    localStorage.setItem(toggle, `${value}`);
}

@Directive()
export abstract class Logger implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public abstract key: string;
    public logTitle: boolean;
    public logUserNameChange: boolean;
    public logOnChanges: boolean;
    public logOnInit: boolean;
    public logDoCheck: boolean;
    public logAfterContentInit: boolean;
    public logAfterContentChecked: boolean;
    public logAfterViewInit: boolean;
    public logAfterViewChecked: boolean;
    public logOnDestroy: boolean;
    public userName?: string;
    private subs = new SubSink();
    public constructor(
        protected injector: Injector
    ) {
        this.logTitle = getToggleValue('logTitle');
        this.logUserNameChange = getToggleValue('logUserNameChange');
        this.logOnChanges = getToggleValue('logOnChanges');
        this.logOnInit = getToggleValue('logOnInit');
        this.logDoCheck = getToggleValue('logDoCheck');
        this.logAfterContentInit = getToggleValue('logAfterContentInit');
        this.logAfterContentChecked = getToggleValue('logAfterContentChecked');
        this.logAfterViewInit = getToggleValue('logAfterViewInit');
        this.logAfterViewChecked = getToggleValue('logAfterViewChecked');
        this.logOnDestroy = getToggleValue('logOnDestroy');
    }

    public get title(): string {
        if (this.logTitle) { console.log(`${this.key} title`); }
        return this.key;
    }

    public get opsat(): OpsatService {
        return this.injector.get(OpsatService);
    }

    public get cd(): ChangeDetectorRef {
        return this.injector.get(ChangeDetectorRef);
    }


    public ngOnChanges(changes: SimpleChanges): void {
        if (this.logOnChanges) { console.log(`${this.key} onChanges`); }
    }

    public ngOnInit(): void {
        if (this.logOnInit) { console.log(`${this.key} onInit`); }

        this.subs.sink = this.opsat.message$.pipe(topicFilter('user'), dataMap).subscribe(({ name }) => {
            if (this.logUserNameChange) {
                console.log(`${this.title} user name change:`, name);
            }
            this.userName = name;
        });
        // this.cd.markForCheck();
    }


    public ngDoCheck(): void {
        if (this.logDoCheck) { console.log(`${this.key} doCheck`); }
    }

    public ngAfterContentInit(): void {
        if (this.logAfterContentInit) { console.log(`${this.key} afterContentInit`); }
    }

    public ngAfterContentChecked(): void {
        if (this.logAfterContentChecked) { console.log(`${this.key} afterContentChecked`); }
    }

    public ngAfterViewInit(): void {
        if (this.logAfterViewInit) { console.log(`${this.key} afterViewInit`); }
    }

    public ngAfterViewChecked(): void {
        if (this.logAfterViewChecked) { console.log(`${this.key} afterViewInitCheck`); }
    }

    public ngOnDestroy(): void {
        if (this.logOnDestroy) { console.log(`${this.key} destroy`); }
        this.subs.unsubscribe();
    }

}
