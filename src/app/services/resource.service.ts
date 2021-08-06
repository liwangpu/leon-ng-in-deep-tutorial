import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from "query-string";

export interface IQueryOption {
    page: number;
    limit: number;
}

@Injectable()
export class ResourceService {

    private uri: string = `http://localhost:3005`;
    public constructor(
        private httpClient: HttpClient
    ) { }

    public query(resource: string, option: IQueryOption = { page: 1, limit: 30 }): Observable<any> {
        let queryObs = {
            _page: option.page,
            _limit: option.limit
        };
        return this.httpClient.get(`${this.uri}/${resource}?${stringify(queryObs)}`);
    }

}
