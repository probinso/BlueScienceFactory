import { Component, ViewChild } from "@angular/core";
import { MatDatepicker } from "@angular/material";
import { NgxMaterialTimepickerModule as TimePicker } from "ngx-material-timepicker";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "aco-page",
  templateUrl: "./aco-page.component.html"
})
export class AcoPageComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  @ViewChild(TimePicker) timepicker: TimePicker;
  public queryDate: Date;
  public queryTime: any;

  constructor(private httpClient: HttpClient) {}

  submitRequest() {
    if (this.queryDate && this.queryTime) {
      console.log(JSON.stringify(this.queryDate));
      console.log(JSON.stringify(this.queryTime));
    }

    this.httpClient.get("http://127.0.0.1:5000/").subscribe(data => {
      console.log(data as JSON);
    });
  }
}
