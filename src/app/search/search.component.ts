import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BaseComponent} from '../common/base.component';
import {SearchAPIService} from './search.api.service';
import {Prediction} from './interfaces/prediction.interface';
import event = google.maps.event;

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
    searchFrom: FormGroup;
    predictions: Array<Prediction>;
    trackingIndex: number;
    showPredictions: boolean;

    @Output()
    item: EventEmitter<any> = new EventEmitter<any>();


    constructor(private searchAPI: SearchAPIService, private formBuilder: FormBuilder) {
        super();
        this.searchFrom = formBuilder.group({search: ''});
        this.predictions = [];
        this.setIndex(0);
    }

    ngOnInit() {
        this.subscriptions.push(
            this.searchFrom
                .valueChanges
                .subscribe((changes: {search: string}) => {
                    this.searchAPI
                        .searchPredictions(changes.search)
                        .subscribe((dto: any) => {
                            this.predictions = dto.predictions;
                            this.setIndex(0);
                            this.showPredictions = this.predictions.length ? true : false;
                        });
                })
        )
    }

    setIndex(index: number): void {
        this.trackingIndex = index;
    }

    /**
     * @desc called when the user hits the enter key while focused on the input field
     */
    submit(): void {
        if (!this.predictions.length)return;
        this.item.emit(this.predictions[this.trackingIndex]);
        this.showPredictions = false;
        this.searchFrom.setValue({search: ''})
    }

    /**
     * @desc called when the user clicks off the search result drop down
     * @param event
     */
    offClick(event: MouseEvent): void {
        this.showPredictions = false;
    }

    /**
     * @desc allows the user to navigate the result set using the arrow keys
     */
    arrowKeyNavigation(event: KeyboardEvent): void {
        let keyCode: any = {
            up: 38,
            down: 40
        };
        let keyUp: number = +(event.keyCode === keyCode.up);
        let keyDown: number = +(event.keyCode === keyCode.down);
        let len: number = this.predictions.length;
        let index: number;
        if (!(keyUp ^ keyDown) || !this.showPredictions || len === 0) return;

        index = (keyUp) ? (this.trackingIndex <= 0 ) ? len - 1 : this.trackingIndex - 1 :
            (this.trackingIndex >= len - 1) ? 0 : this.trackingIndex + 1;
        this.setIndex(index);


    }

    /**
     * @desc when the search field is focused show the predictions if any
     * @param event
     */
    onFocus(event: MouseEvent): void {
        if (this.predictions.length) {
            this.showPredictions = true;
        }
    }
}

