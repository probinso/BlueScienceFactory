import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "date-range-picker",
  templateUrl: "./date-range-picker.component.html"
})
export class DateRangePickerComponent {
  public queryDatetimeValue: Date;

  @Input()
  get queryDatetime() {
    return this.queryDatetimeValue;
  }

  @Output() queryDatetimeChange: EventEmitter<Date> = new EventEmitter();

  set queryDatetime(val: Date) {
    this.queryDatetimeValue = val;
    this.queryDatetimeChange.emit(this.queryDatetimeValue);
  }
}
