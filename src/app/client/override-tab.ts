import { Hook } from "../decorators/hook.interface";
import { OrxeHook } from "../decorators/orxe-hook.decorator";

@OrxeHook({
  selector: "app-root",
  method: "forTest",
  executeOriginal: false,
})
export class OverrideTabs implements Hook {
  before(instance) {
    console.log("before test override");
    
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  override() {
    return [{ a: 1 }];
  }

  after(instance): void {
    console.log("after results override");
    // throw new Error("Method not implemented.");
  }
}
