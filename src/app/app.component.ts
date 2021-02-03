import { Component, OnInit } from '@angular/core';
import { Hookable } from './decorators/hookable.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Hookable({
  selector: "app-root",
  hooks: ["forTest"],
})

export class AppComponent implements OnInit {
  title = 'hook-trial';
  ngOnInit() {
    console.log("Initing....");
    this.forTest();
  }

  forTest() {
    console.log("as....");
  }

}
