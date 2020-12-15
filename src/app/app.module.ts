import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MySearchComponent } from "./my-search/my-search.component";
import { NgModule } from "@angular/core";
import { registerHooks } from "./client";

@NgModule({
  declarations: [AppComponent, MySearchComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

registerHooks();
