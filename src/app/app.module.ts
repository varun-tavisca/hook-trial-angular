import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MySearchComponent } from "./my-search/my-search.component";
import { NgModule } from "@angular/core";
import { registerHooks } from "./client";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, MySearchComponent, TestComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

registerHooks();
