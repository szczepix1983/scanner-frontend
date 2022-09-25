import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Error} from '../../../generic/models/error';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {ErrorsControllerService} from '../../../generic/services/errors-controller.service';
import {take} from 'rxjs/operators';
import {Errors} from '../../../generic/models/errors';

@Component({
  selector: 'app-errors-summary',
  templateUrl: './errors-summary.component.html',
  styleUrls: ['./errors-summary.component.scss'],
  standalone: true,
  imports: [CommonModule, MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule]
})
export class ErrorsSummaryComponent implements AfterViewInit {
  displayedColumns: string[] = ['uid', 'priority', 'message', 'actions'];
  dataSource: MatTableDataSource<Error> = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<Error> | undefined;

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  constructor(private errorService: ErrorsControllerService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;

    this.errorService.process3({}).pipe(take(1))
        .subscribe(response => this.onLoaded(response));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUrl(url: string) {
    window.open(url, "_blank");
  }

  private onLoaded(errors: Errors) {
    if (this.table && errors && errors.data) {
      for (let error of errors.data) {
        this.dataSource.data.push(error);
      }
      this.table.renderRows();
    }
  }
}
