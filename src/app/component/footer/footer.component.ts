import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  fullYear: number = new Date().getFullYear();
  version = 'v.1.0.1';
  projectUrl = 'https://github.com/szczepix1983/scanner-frontend';
  documentationUrl = 'https://github.com/szczepix1983/scanner-frontend/blob/master/README.md';

  constructor() {
  }
}
