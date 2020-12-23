import { Component, OnInit } from "@angular/core";

import { Hookable } from "../decorators/hookable.decorator";

@Component({
  selector: "app-my-search",
  templateUrl: "./my-search.component.html",
  styleUrls: ["./my-search.component.scss"],
})
@Hookable({
  selector: "app-my-search",
  hooks: [ "getResults"],
})
export class MySearchComponent implements OnInit {
  results: any[];
  constructor() {
    // this.results = this.getResultData();
  }

  ngOnInit() {
    console.log("Initing....");
    this.results = this.getResultData();
    console.log(this.results);
  }

  getResults() {
    this.results = this.getResultData();
  }
  
  getResultData() {
    console.log("Results...");
    return [
      {
        id: 1,
        name: "A",
      },
      {
        id: 2,
        name: "B",
      },
      {
        id: 3,
        name: "C",
      },
      {
        id: 4,
        name: "D",
      },
    ];
  }

  private forTest() {
    console.log('test----->>>>>>>');
    console.log(this.results);
  }

  private forTesting() {
    console.log('forTesting');
    this.forTest();
    const test = this.results[0]
    return test;
  }
}
