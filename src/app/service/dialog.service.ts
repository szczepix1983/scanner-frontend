import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AlertDialogComponent} from 'src/app/component/dialog/alert.dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openAlertDialog(message: string) {
    this.dialog.open(AlertDialogComponent, DialogService.createConfigurationWithMessage(message));
  }

  private static createConfigurationWithMessage(message: string) {
    return {width: '450px', data: {message: message}}
  }
}
