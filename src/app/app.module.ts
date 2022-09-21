import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApiModule as ApiBackendModule} from 'src/app/generic/api.module';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {AppComponent} from 'src/app/app.component';
import {environment} from 'src/environments/environment';
import {FooterComponent} from 'src/app/component/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {DictionaryViewComponent} from 'src/app/component/view/dictionary-view.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {HeaderComponent} from 'src/app/component/header/header.component';
import {CreateDialogComponent} from 'src/app/component/dialog/create.dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {EventService} from 'src/app/service/event.service';
import {MatButtonModule} from '@angular/material/button';
import {EditDialogComponent} from 'src/app/component/dialog/edit.dialog.component';
import {AlertDialogComponent} from 'src/app/component/dialog/alert.dialog.component';
import {DeleteDialogComponent} from 'src/app/component/dialog/delete.dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DictionaryService} from 'src/app/service/dictionary.service';
import {DialogService} from './service/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DictionaryViewComponent,
    HeaderComponent,
    CreateDialogComponent,
    EditDialogComponent,
    AlertDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDialogModule,
    ApiBackendModule.forRoot({rootUrl: environment.apiBackend}),
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
  ],
  providers: [{provide: DialogService}, {provide: EventService}, {provide: DictionaryService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
