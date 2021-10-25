import {Injectable} from "@angular/core";
import {Client} from "../interfaces/client.interface";
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
    return this.http.get(this.clientsUrl);
  }

  getClient$(id: number): Observable<Client> {
    return this.http.get(`${this.clientsUrl}/${id}`);
  }

  setPhone$(clientId: number, phone: string): Observable<void> {
    return this.http.post(`${this.apiUrl}/${clientId}/changephone`, { phone });
  }
}
