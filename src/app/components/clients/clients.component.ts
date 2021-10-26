import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../interfaces/client.interface";
import {ClientsService} from "../../services/clients.service";
import {Column} from "../../interfaces/column.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[] | null>;
  columns: Column<Client>[] = [
    {
      title: 'Наименование организации',
      key: 'organisation'
    },
    {
      title: 'ИНН',
      key: 'TIN'
    },
  ];
  dateColumns: Column<Client>[] = [
    {
      title: 'Дата открытия',
      key: 'openingDate'
    }
  ];
  currencyColumns: Column<Client>[] = [
    {
      title: 'Остаток на счете',
      key: 'balance'
    },
  ];

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {
    this.clients$ = this.clientsService.clients$;
  }

  ngOnInit(): void {
    this.clientsService.getClients();
  }

  navigateToClient(value: Client) {
    this.router.navigate(['clients', value.id]);
  }
}
