import {EventEmitter, Injectable} from '@angular/core';
import {Facade} from "../generic/models/facade";

export class FacadeChangeEvent {
    facade?: Facade;
}

@Injectable({
    providedIn: 'root'
})
export class EventService {

    public onFacadeChange: EventEmitter<FacadeChangeEvent> = new EventEmitter<FacadeChangeEvent>();

    public facadeChange(facade: Facade) {
        this.onFacadeChange.emit({facade: facade});
    }
}
