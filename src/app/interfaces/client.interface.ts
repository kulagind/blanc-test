import {Transaction} from "./transaction.interface";

export interface Client {
  id: number,
  organisation: string,
  /*
  * TIN (Taxpayer Identification Number) = ИНН
  * */
  TIN: number,
  openingDate: number,
  balance: number,
  phone: string,
  transactions: Transaction[]
}
