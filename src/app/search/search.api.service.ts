import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {API_KEY} from '../common/constant';

@Injectable()
export class SearchAPIService{

    constructor(private http: Http){}

    /**
     * @desc when called will leverage the google places predictgion api to predict the
     *       location tha the the user is attempting to complete.
     * @param searchText: string for which search predictions should be made
     */
    searchPredictions(searchText: string): Observable<any>{
        let url: string = '/maps/api/place/autocomplete/json?input='
            .concat(searchText)
            .concat('&key=')
            .concat(API_KEY);
        return this.http.get(url);
    }

}