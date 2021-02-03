import { Component, OnChanges, OnInit } from "@angular/core";

import { Hookable } from "../decorators/hookable.decorator";
// import { Hookable } from "@orxe-sdk/hooks";

@Component({
  selector: "app-my-search",
  templateUrl: "./my-search.component.html",
  styleUrls: ["./my-search.component.scss"],
})
@Hookable({
  selector: "app-my-search",
  hooks: ["getResults"],
})
export class MySearchComponent implements OnInit, OnChanges {
  results: any[];
  constructor() {
    this.results = this.getResultData('qwe');
  }

  ngOnInit() {
    console.log("Initing....");
    this.results = this.getResultData('112');
    console.log(this.results);
  }

  ngOnChanges(chnages) {
    console.log('on chnage', chnages);
  }

  getResults() {
    console.log("Results...");
    this.results = this.getResultData('hwehj');
  }
  
  getResultData(rw) {
    console.log(rw);
    
    return [
      {
        id: 1,
        name: rw,
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
    // const test = this.results[0]
    // return test;
  }
}
