import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs';
import {API_KEY} from '../common/constant';

@Injectable()
export class SearchAPIService{

    constructor(private http: Http){}

    /**
     * @desc when called will leverage the google places prediction api to predict the location of interest
     * @param searchText: string for which search predictions should be made
     */
    searchPredictions(searchText: string): Observable<any>{
        let url: string = '/maps/api/place/autocomplete/json';
        let searchParams = new URLSearchParams();
        searchParams.set('input', searchText);
        searchParams.set('key', API_KEY);
        return this.http.get(url, {search: searchParams}).map((res: any) => res.json());
    }

}