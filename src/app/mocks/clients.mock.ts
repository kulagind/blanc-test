import {Client, ClientDetails} from "../interfaces/client.interface";
import {Types} from "../interfaces/type.interface";

export const CLIENTS: Client[] = [
  {
    id: '1',
    balance: 100000000,
    openingDate: Date.now(),
    TIN: 123456789,
    organisation: 'Organization 1'
  },
  {
    id: '2',
    balance: 200000000,
    openingDate: Date.now(),
    TIN: 100000000,
    organisation: 'Organization 2'
  },
  {
    id: '3',
    balance: 300000000,
    openingDate: Date.now(),
    TIN: 444444444,
    organisation: 'Organization 3'
  },
];

export const CLIENT_DETAILS: { [id: string]: ClientDetails } = {
  '1': {
    phone: '+79999999999',
    transactions: [
      {
        paymentDate: Date.now(),
        partner: 'Partner 1',
        total: 100000000,
        type: Types.incoming
      },
      {
        paymentDate: Date.now(),
        partner: 'Partner 2',
        total: 200000000,
        type: Types.incoming
      },
      {
        paymentDate: Date.now(),
        partner: 'Partner 3',
        total: 50,
        type: Types.outgoing
      },
    ]
  },
  '2': {
    phone: '+71111111111',
    transactions: [
      {
        paymentDate: Date.now(),
        partner: 'Partner 1',
        total: 11111111,
        type: Types.incoming
      },
      {
        paymentDate: Date.now(),
        partner: 'Partner 2',
        total: 222222222,
        type: Types.incoming
      },
      {
        paymentDate: Date.now(),
        partner: 'Partner 3',
        total: 5000,
        type: Types.outgoing
      },
    ]
  },
  '3': {
    phone: '+78888888888',
    transactions: [
      {
        paymentDate: Date.now(),
        partner: 'Partner 1',
        total: 9090909090,
        type: Types.incoming
      },
      {
        paymentDate: Date.now(),
        partner: 'Partner 2',
        total: 3042345685,
        type: Types.incoming
      },
      {
        paymentDate: Date.now(),
        partner: 'Partner 3',
        total: 55550,
        type: Types.outgoing
      },
    ]
  }
}
