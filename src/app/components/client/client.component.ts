import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {distinctUntilChanged, map, takeUntil, tap} from "rxjs/operators";
import {Destroy} from "../../services/destroy.service";
import {Observable} from "rxjs";
import {ClientDetails} from "../../interfaces/client.interface";
import {ClientDetailsService} from "../../services/client-details.service";
import {Transaction} from "../../interfaces/transaction.interface";
import {Column} from "../../interfaces/column.interface";
import {FormControl} from "@angular/forms";

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
  ];
  currencyColumns: Column<Transaction>[] = [
    {
      title: 'Сумма',
      key: 'total'
    },
  ];

  phoneControl = new FormControl('');

  constructor(
    private activatedRoute: ActivatedRoute,
    private destroy$: Destroy,
    private clientDetailsService: ClientDetailsService
  ) {
    this.client$ = this.clientDetailsService.client$
      .pipe(
        tap(clientDetails => this.phoneControl.setValue(clientDetails?.phone, {emitEvent: false}))
      );
  }

  ngOnInit(): void {
    this.getClientDetails();
    this.listenPhoneChanging();
  }

  private getClientDetails(): void {
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

  private listenPhoneChanging(): void {
    this.phoneControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(phone => {
        this.clientDetailsService.setPhone(this.id, phone);
      });
  }
}
