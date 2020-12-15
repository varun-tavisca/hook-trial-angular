import { Hook } from "../decorators/hook.interface";
import { OrxeHook } from "../decorators/orxe-hook.decorator";

@OrxeHook({
  selector: "app-my-search",
  method: "getResults",
  executeOriginal: true,
})
export class OverrideResults implements Hook {
  before() {
    console.log("before results override");
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  override() {
    return [{ a: 1 }];
  }

  after(): void {
    console.log("after results override");
    // throw new Error("Method not implemented.");
  }
}
