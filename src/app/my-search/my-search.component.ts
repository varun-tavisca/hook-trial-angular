import { Component, OnChanges, OnInit } from "@angular/core";
import { Hookable } from "@orxe-sdk/hooks";

@Component({
  selector: "app-my-search",
  templateUrl: "./my-search.component.html",
  styleUrls: ["./my-search.component.scss"],
})
@Hookable({
  selector: "app-my-search",
  hooks: ["ngOnInit"],
})
export class MySearchComponent implements OnInit, OnChanges {
  results: any[];

  ngOnInit() {
    console.log("Initing....");
  }

  ngOnChanges(chnages) {
    console.log("on chnage", chnages);
  }

  getResults() {
    console.log("Results...");
  }
}
