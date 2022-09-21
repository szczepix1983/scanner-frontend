import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DictionaryDto} from "../../generic/models/dictionary-dto";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.html',
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DictionaryDto,
    private dictionaryService: DictionaryService,
  ) {
    this.dialogRef.afterClosed().subscribe(result => {
      this.dictionaryService.delete(result);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
