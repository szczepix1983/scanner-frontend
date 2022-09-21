import {Injectable} from '@angular/core';
import {DictionaryControllerService} from 'src/app/generic/services/dictionary-controller.service';
import {take} from 'rxjs/operators';
import {EventService} from 'src/app/service/event.service';
import {DictionaryDto} from 'src/app/generic/models/dictionary-dto';

@Injectable()
export class DictionaryService {

  constructor(private eventService: EventService, private dictionaryControllerService: DictionaryControllerService) {
  }

  public create(dictionary: DictionaryDto) {
    this.dictionaryControllerService.create({body: dictionary}).pipe(take(1))
      .subscribe(it => this.eventService.create(it));
  }

  public read() {
    this.dictionaryControllerService.find().pipe(take(1))
      .subscribe(it => this.eventService.read(it));
  }

  public update(result: DictionaryDto) {
    this.dictionaryControllerService.update({body: result}).pipe(take(1))
      .subscribe(it => this.eventService.update(it));
  }

  public delete(dictionary: DictionaryDto) {
    if (dictionary && dictionary.id) {
      this.dictionaryControllerService.delete({id: dictionary.id}).pipe(take(1))
        .subscribe(() => this.eventService.delete(dictionary));
    }
  }
}
