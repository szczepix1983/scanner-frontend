import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
      RouterModule,
      FooterComponent,
      HeaderComponent,
  ]
})
export class AppComponent {
  title = 'Crud';

  constructor() {
  }
}
