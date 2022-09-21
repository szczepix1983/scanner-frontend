import {EventEmitter, Injectable} from '@angular/core';
import {DictionaryDto} from 'src/app/generic/models/dictionary-dto';

export class DictionaryChangeEvent {
  dictionary?: DictionaryDto;
}

export class DictionaryListChangeEvent {
  dictionaryList?: DictionaryDto[];
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public onCreateChange: EventEmitter<DictionaryChangeEvent> = new EventEmitter<DictionaryChangeEvent>();
  public onReadChange: EventEmitter<DictionaryListChangeEvent> = new EventEmitter<DictionaryListChangeEvent>();
  public onUpdateChange: EventEmitter<DictionaryChangeEvent> = new EventEmitter<DictionaryChangeEvent>();
  public onDeleteChange: EventEmitter<DictionaryChangeEvent> = new EventEmitter<DictionaryChangeEvent>();

  public create(dictionary: DictionaryDto) {
    this.onCreateChange.emit({dictionary: dictionary});
  }

  public read(dictionaryList: DictionaryDto[]) {
    this.onReadChange.emit({dictionaryList: dictionaryList});
  }

  public update(dictionary: DictionaryDto) {
    this.onUpdateChange.emit({dictionary: dictionary});
  }

  public delete(dictionary: DictionaryDto) {
    this.onDeleteChange.emit({dictionary: dictionary});
  }
}
