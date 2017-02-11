import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BaseComponent} from '../common/base.component';
import {SearchAPIService} from './search.api.service';
import {Prediction} from './interfaces/prediction.interface';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit{
     searchFrom: FormGroup;
     predictions: Array<Prediction>;
constructor(private searchAPI: SearchAPIService, private formBuilder: FormBuilder){
    super();
    this.searchFrom = formBuilder.group({search: ''});
    this.predictions = [];
}

    ngOnInit() {
        this.subscriptions.push(
            this.searchFrom
                .valueChanges
                .subscribe((changes: {search: string}) => {
                    this.searchAPI
                        .searchPredictions(changes.search)
                        .first()
                        .subscribe((dto: any) => {
                            this.predictions = dto.predictions;
                        });
                })
        )
    }

}

