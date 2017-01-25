import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BaseComponent} from '../common/base.component';
import {SearchAPIService} from './search.api.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit{
     searchFrom: FormGroup;
     predictions: Array<any>;
constructor(private searchAPI: SearchAPIService, private formBuilder: FormBuilder){
    super();
    this.searchFrom = formBuilder.group({
        search: ''
    });
}

    ngOnInit() {
        this.subscriptions.push(
            this.searchFrom
                .valueChanges
                .subscribe((changes: {search: string}) => {
                    this.searchAPI
                        .searchPredictions(changes.search)
                        .first()
                        .subscribe((searchPredictions: any) => {
                            this.predictions = searchPredictions;
                        });
                })
        )
    }

}


//TODO turn search into its own module
// TODO Subscribe to user input