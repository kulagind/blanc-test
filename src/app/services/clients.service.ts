import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Client} from "../interfaces/client.interface";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clients = new BehaviorSubject<Client[] | null>(null);

  clients$ = this.clients.asObservable();

  constructor(private httpService: HttpService) { }

  getClients(): void {
    this.httpService.getClients$().subscribe(clients => {
      this.clients.next(clients);
    });
  }
}
