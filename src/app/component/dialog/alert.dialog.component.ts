import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class AlertMessage {
  message?: string;
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.html',
})
export class AlertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertMessage,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
