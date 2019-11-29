import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "aco-page",
  templateUrl: "./aco-page.component.html"
})
export class AcoPageComponent {
  // public
  constructor(private httpClient: HttpClient, private datepipe: DatePipe) {}

  submitRequest(date: Date) {
    const formatdate = date
      ? this.datepipe.transform(date, "MM:dd:yyyy:HH:mm:ss")
      : "";

    this.httpClient
      .get(`http://127.0.0.1:5000/retrieve/${formatdate}`)
      .subscribe(data => {
        console.log(data as JSON);
      });
  }
}
