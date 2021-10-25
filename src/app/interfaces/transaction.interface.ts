import {Types} from "./type.interface";

export interface Transaction {
  paymentDate: number,
  /*
  * Контрагент
  * */
  partner: string,
  total: number,
  type: Types
}
