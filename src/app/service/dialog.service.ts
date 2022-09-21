import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AlertDialogComponent} from 'src/app/component/dialog/alert.dialog.component';
import {DictionaryDto} from 'src/app/generic/models/dictionary-dto';
import {EditDialogComponent} from "../component/dialog/edit.dialog.component";
import {DeleteDialogComponent} from "../component/dialog/delete.dialog.component";
import {CreateDialogComponent} from "../component/dialog/create.dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openAlertDialog(message: string) {
    this.dialog.open(AlertDialogComponent, DialogService.createConfigurationWithMessage(message));
  }

  openCreateDialog(): void {
    this.dialog.open(CreateDialogComponent, DialogService.createConfigurationWithDictionary({
      id: undefined,
      key: "",
      value: "",
      active: true
    }));
  }

  openEditDialog(dictionary: DictionaryDto) {
    this.dialog.open(EditDialogComponent, DialogService.createConfigurationWithDictionary(dictionary));
  }

  openDeleteDialog(dictionary: DictionaryDto) {
    this.dialog.open(DeleteDialogComponent, DialogService.createConfigurationWithDictionary(dictionary));
  }

  private static createConfigurationWithDictionary(dictionary: DictionaryDto) {
    return {width: '450px', data: dictionary}
  }

  private static createConfigurationWithMessage(message: string) {
    return {width: '450px', data: {message: message}}
  }
}
