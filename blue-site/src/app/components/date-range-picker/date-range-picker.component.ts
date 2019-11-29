import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "date-range-picker",
  templateUrl: "./date-range-picker.component.html"
})
export class DateRangePickerComponent {
  public queryDatetime: Date;
  @Output() result: EventEmitter<Date> = new EventEmitter();

  submit() {
    this.result.emit(this.queryDatetime);
  }
}
