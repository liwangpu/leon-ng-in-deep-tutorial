import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, OperatorFunction, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface IMessage {
    topic: string;
    data: any;
}

export function topicFilter(topic: string): OperatorFunction<IMessage, IMessage> {
    return pipe(filter(x => x.topic === topic));
}

export const dataMap: OperatorFunction<IMessage, any> = map(x => x.data);

@Injectable()
export class OpsatService {

    private _message$ = new BehaviorSubject<IMessage>({ topic: 'default', data: null });
    public get message$(): Observable<IMessage> {
        return this._message$.asObservable();
    }

    public publishMessage(topic: string, data: any): void {
        this._message$.next({ topic, data });
    }
}
