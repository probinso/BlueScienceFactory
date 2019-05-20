import { Component, ViewChild } from "@angular/core";
import { MatDatepicker } from "@angular/material";
import { NgxMaterialTimepickerModule as TimePicker } from "ngx-material-timepicker";

@Component({
  selector: "aco-page",
  templateUrl: "./aco-page.component.html"
})
export class AcoPageComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  @ViewChild(TimePicker) timepicker: TimePicker;
  public queryDate: Date;
  public queryTime: any;

  constructor() {}

  submitRequest() {
    if (this.queryDate && this.queryTime) {
      console.log(JSON.stringify(this.queryDate));
      console.log(JSON.stringify(this.queryTime));
    }
  }
}
