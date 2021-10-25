import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ClientDetails} from "../interfaces/client.interface";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsService {

  private client = new BehaviorSubject<ClientDetails | null>(null);

  client$ = this.client.asObservable();

  constructor(private httpService: HttpService) {
  }

  getClientDetails(id: string): void {
    const subscription = this.httpService.getClient$(id).subscribe(client => {
      this.client.next(client);
      if (subscription) {
        subscription.unsubscribe();
      }
    })
  }
}
