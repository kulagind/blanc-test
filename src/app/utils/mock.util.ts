import {Client, ClientDetails} from "../interfaces/client.interface";
import {CLIENT_DETAILS, CLIENTS} from "../mocks/clients.mock";

export function getMockData(id: string = ''): Client[] | ClientDetails {
  if (id) {
    return CLIENT_DETAILS[id];
  } else {
    return CLIENTS;
  }
}
