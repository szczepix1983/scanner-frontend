import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DictionaryDto} from 'src/app/generic/models/dictionary-dto';
import {isValidDictionary} from "../../utils";
import {DictionaryService} from "../../service/dictionary.service";
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.html',
})
export class EditDialogComponent {

  previousDictionaryCopy?: DictionaryDto;
  previousDictionaryOriginal?: DictionaryDto;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DictionaryDto,
    private dictionaryService: DictionaryService,
    private dialogService: DialogService,
  ) {
    this.storeDictionary();
    this.dialogRef.afterClosed().subscribe(result => {
      if (isValidDictionary(result as DictionaryDto)) {
        this.dictionaryService.update(result);
      } else if (result) {
        this.dialogService.openAlertDialog('Podane dane nie mogły zostać poprawnie przetworzone.');
      } else {
        this.restoreDictionary();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private restoreDictionary() {
    if (this.previousDictionaryCopy && this.previousDictionaryOriginal) {
      this.previousDictionaryOriginal.key = this.previousDictionaryCopy.key;
      this.previousDictionaryOriginal.value = this.previousDictionaryCopy.value;
      this.previousDictionaryOriginal.active = this.previousDictionaryCopy.active;
    }
  }

  private storeDictionary() {
    this.previousDictionaryCopy = {
      id: this.data.id,
      key: this.data.key,
      value: this.data.value,
      active: this.data.active
    };
    this.previousDictionaryOriginal = this.data;
  }
}
