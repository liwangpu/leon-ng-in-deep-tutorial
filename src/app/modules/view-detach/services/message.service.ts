import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {

    public message = new Subject<string>();
    public constructor() { }
}
