import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [MatCardModule]
})
export class FooterComponent {

  fullYear: number = new Date().getFullYear();
  version = environment.version;
  projectUrl = 'https://github.com/szczepix1983/scanner-frontend';
  documentationUrl = 'https://github.com/szczepix1983/scanner-frontend/blob/master/README.md';

  constructor() {
  }
}
