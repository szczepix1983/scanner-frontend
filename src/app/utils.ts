import {DictionaryDto} from 'src/app/generic/models/dictionary-dto';

export function isValidDictionary(dictionary: DictionaryDto): boolean {
  return dictionary && !!dictionary.key && dictionary.active !== undefined;
}

