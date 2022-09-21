import {Component} from '@angular/core';
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialogService: DialogService) {
  }
}
