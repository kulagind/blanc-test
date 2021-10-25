import {Transaction} from "./transaction.interface";

export interface Client {
  id: string,
  organisation: string,
  /*
  * TIN (Taxpayer Identification Number) = ИНН
  * */
  TIN: number,
  openingDate: number,
  balance: number
}

export interface ClientDetails {
  phone: string,
  transactions: Transaction[]
}
