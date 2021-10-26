import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column} from "../../interfaces/column.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() title: string = '';
  @Input() columns: Column<any>[] = [];
  @Input() dateColumns: Column<any>[] = [];
  @Input() currencyColumns: Column<any>[] = [];
  @Input() values: any[] = [];
  @Input() dateFormat: string = 'dd MMMM YYYY';

  @Output() onValueClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(value: any): void {
    this.onValueClick.emit(value);
  }
}
