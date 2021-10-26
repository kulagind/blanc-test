import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneInputComponent,
      multi: true
    }
  ]
})
export class PhoneInputComponent implements ControlValueAccessor {

  private bufferedValue: string = '';

  _value: string = '';
  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val: string) {
    this._value = val;
  };

  get value() {
    return this._value;
  }

  disabled: boolean = true;

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabled(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (!this.disabled) {
      this.bufferedValue = this.value;
    } else {
      this.restoreValue();
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  save(): void {
    this.setDisabled(true);
    this.trim();
    this.onChange(this.value);
    this.onTouch();
  }

  private restoreValue(): void {
    const phoneRegex = /^[+]\s[1-9]\s[(]\d{3}[)]\s\d{3}\s\d{2}\s\d{2}/;
    if (!this.value.match(phoneRegex)) {
      this.value = this.bufferedValue;
    }
  }

  private trim(): void {
    const trimRegex = /[()\s]/g;
    this.value = this.value.replace(trimRegex, '');
  }
}
