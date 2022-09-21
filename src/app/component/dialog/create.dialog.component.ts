import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DictionaryDto} from "src/app/generic/models/";
import {DictionaryService} from "../../service/dictionary.service";
import {isValidDictionary} from "../../utils";
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.html',
})
export class CreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DictionaryDto,
    private dialogService: DialogService,
    private dictionaryService: DictionaryService,
  ) {
    this.dialogRef.afterClosed().subscribe(result => {
      if (isValidDictionary(result as DictionaryDto)) {
        this.dictionaryService.create(result);
      } else if (result) {
        this.dialogService.openAlertDialog('Podane dane nie mogły zostać poprawnie przetworzone.');
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
