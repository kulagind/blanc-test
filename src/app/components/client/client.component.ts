import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, takeUntil} from "rxjs/operators";
import {Destroy} from "../../services/destroy.service";
import {Observable} from "rxjs";
import {ClientDetails} from "../../interfaces/client.interface";
import {ClientDetailsService} from "../../services/client-details.service";
import {Transaction} from "../../interfaces/transaction.interface";
import {Column} from "../../interfaces/column.interface";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Destroy]
})
export class ClientComponent implements OnInit {

  client$: Observable<ClientDetails | null>;
  id: string = '';
  columns: Column<Transaction>[] = [
    {
      title: 'Контрагент',
      key: 'partner'
    },
    {
      title: 'Тип',
      key: 'type'
    },
  ];
  dateColumns: Column<Transaction>[] = [
    {
      title: 'Дата платежа',
      key: 'paymentDate'
    },
  ]
  currencyColumns: Column<Transaction>[] = [
    {
      title: 'Сумма',
      key: 'total'
    },
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private destroy$: Destroy,
    private clientDetailsService: ClientDetailsService
  ) {
    this.client$ = this.clientDetailsService.client$;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map(params => {
          this.clientDetailsService.clear();
          this.id = params.get('id') as string;
          return this.id;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(id => {
        this.clientDetailsService.getClientDetails(id);
      });
  }
}
