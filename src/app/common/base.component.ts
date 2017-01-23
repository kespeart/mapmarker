import { Component,OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
    selector: ''
})
export class BaseComponent implements OnDestroy {
     subscriptions: Array<Subscription>;

    constructor(){
        this.subscriptions =  [];
    }

    ngOnDestroy(){
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}
