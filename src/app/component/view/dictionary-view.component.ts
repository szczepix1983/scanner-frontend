import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {EventService, FacadeChangeEvent} from 'src/app/service/event.service';
import {FacadeService} from 'src/app/service/facade.service';
import {DialogService} from "../../service/dialog.service";
import {Product} from "../../generic/models/product";

@Component({
  selector: 'app-crud',
  templateUrl: './dictionary-view.component.html',
  styleUrls: ['./dictionary-view.component.scss']
})
export class DictionaryViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'key', 'value', 'active', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<Product> | undefined;

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  constructor(public dialogService: DialogService, private facadeService: FacadeService, private eventService: EventService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;

    this.eventService.onFacadeChange.subscribe({
        next: (event: FacadeChangeEvent) => {
          this.onFacadeChange(event);
        }
      }
    );
    this.facadeService.read('ascoin');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // private onCreationChange(event: DictionaryChangeEvent) {
  //   if (this.table && event.dictionary) {
  //     this.dataSource.data.push(event.dictionary);
  //     this.table.renderRows();
  //   }
  // }
  //
  // private onModificationChange(event: DictionaryChangeEvent) {
  //   if (this.table && event.dictionary) {
  //     this.table.renderRows();
  //   }
  // }
  //
  // private onDeletionChange(event: DictionaryChangeEvent) {
  //   if (this.table && event.dictionary) {
  //     this.dataSource.data.splice(this.dataSource.data.indexOf(event.dictionary), 1);
  //     this.table.renderRows();
  //   }
  // }

  private onFacadeChange(event: FacadeChangeEvent) {
    if (this.table && event.facade) {
      console.log(event.facade.description);
    }
  }
}


