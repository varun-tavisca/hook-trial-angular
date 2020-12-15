import { Hook } from "../decorators/hook.interface";
import { OrxeHook } from "../decorators/orxe-hook.decorator";

@OrxeHook({
  component: "MySearchComponent",
  method: "getResults",
  executeOriginal: false,
})
export class OverrideResults implements Hook {
  before(): void {
    console.log("before results override");
    // throw new Error("Method not implemented.");
  }
  after(): void {
    console.log("after results override");
    // throw new Error("Method not implemented.");
  }
}
