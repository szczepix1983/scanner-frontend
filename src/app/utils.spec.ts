import {isValidDictionary} from './utils';

describe('utils', () => {
  it('should be false when everything is bad', () => {
    expect(isValidDictionary({id:undefined, key:'', value:'', active: false})).toBeFalsy();
  });

  it('should be false when only key is correct', () => {
    expect(isValidDictionary({id:undefined, key:'key', value:'', active: false})).toBeTruthy();
  });

  it('should be false when only value is correct', () => {
    expect(isValidDictionary({id:undefined, key:'', value:'value', active: false})).toBeFalsy();
  });

  it('should be true', () => {
    expect(isValidDictionary({id:undefined, key:'key', value:'value', active: false})).toBeTruthy();
  });
});
