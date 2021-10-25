import {Injectable} from "@angular/core";
import {Client, ClientDetails} from "../interfaces/client.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiUrl = '/api'
  private readonly clientsUrl = `${this.apiUrl}/clients`;

  constructor(
    private http: HttpClient
  ) { }

  getClients$(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  getClient$(id: string): Observable<ClientDetails> {
    return this.http.get<ClientDetails>(`${this.clientsUrl}/${id}`);
  }

  setPhone$(clientId: string, phone: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${clientId}/changephone`, { phone });
  }
}
