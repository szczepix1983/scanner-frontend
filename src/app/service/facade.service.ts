import {Injectable} from '@angular/core';
import {take} from 'rxjs/operators';
import {EventService} from 'src/app/service/event.service';
import {FacadeControllerService} from "../generic/services/facade-controller.service";

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private eventService: EventService, private facadeControllerService: FacadeControllerService) {
  }

  public read(facade: string) {
    this.facadeControllerService.getByFacade2({facade: facade}).pipe(take(1))
      .subscribe(response => this.eventService.facadeChange(response));
  }
}
