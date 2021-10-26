import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Currency} from "../../interfaces/currency.interface";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit, OnChanges {

  @Input() value: number = 0;
  @Input() currency: Currency = 'RUB';
  @Input() minIntegerDigits: number = 1;
  @Input() fractionDigits: number = 2;

  digits: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.digits = `${this.minIntegerDigits}.${this.fractionDigits}-${this.fractionDigits}`;
  }

}
