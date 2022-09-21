import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {DictionaryDto} from 'src/app/generic/models/dictionary-dto';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DictionaryChangeEvent, DictionaryListChangeEvent, EventService} from 'src/app/service/event.service';
import {DictionaryService} from 'src/app/service/dictionary.service';
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-crud',
  templateUrl: './dictionary-view.component.html',
  styleUrls: ['./dictionary-view.component.scss']
})
export class DictionaryViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'key', 'value', 'active', 'actions'];
  dataSource: MatTableDataSource<DictionaryDto> = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<DictionaryDto> | undefined;

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  constructor(public dialogService: DialogService, private dictionaryService: DictionaryService, private eventService: EventService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;

    this.eventService.onCreateChange.subscribe({
        next: (event: DictionaryChangeEvent) => {
          this.onCreationChange(event);
        }
      }
    );
    this.eventService.onUpdateChange.subscribe({
        next: (event: DictionaryChangeEvent) => {
          this.onModificationChange(event);
        }
      }
    );
    this.eventService.onDeleteChange.subscribe({
        next: (event: DictionaryChangeEvent) => {
          this.onDeletionChange(event);
        }
      }
    );
    this.eventService.onReadChange.subscribe({
        next: (event: DictionaryListChangeEvent) => {
          this.onListChange(event);
        }
      }
    );
    this.dictionaryService.read();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private onCreationChange(event: DictionaryChangeEvent) {
    if (this.table && event.dictionary) {
      this.dataSource.data.push(event.dictionary);
      this.table.renderRows();
    }
  }

  private onModificationChange(event: DictionaryChangeEvent) {
    if (this.table && event.dictionary) {
      this.table.renderRows();
    }
  }

  private onDeletionChange(event: DictionaryChangeEvent) {
    if (this.table && event.dictionary) {
      this.dataSource.data.splice(this.dataSource.data.indexOf(event.dictionary), 1);
      this.table.renderRows();
    }
  }

  private onListChange(event: DictionaryListChangeEvent) {
    if (this.table && event.dictionaryList) {
      for (let dictionary of event.dictionaryList) {
        this.dataSource.data.push(dictionary);
      }
      this.table.renderRows();
    }
  }
}


