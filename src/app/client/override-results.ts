import { Hook } from "../decorators/hook.interface";
import { OrxeHook } from "../decorators/orxe-hook.decorator";

@OrxeHook({
  selector: "app-my-search",
  method: "getResults",
  executeOriginal: true,
})
export class OverrideResults implements Hook {
  before(instance) {
    console.log("before results override");
    console.log(instance.results);
    console.log(instance);
    console.log(instance.forTest2());
    
    // return new Promise<any>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 2000);
    // });
  }

  override() {
    return [{ a: 1 }];
  }

  after(instance): void {
    console.log("after results override");
    // throw new Error("Method not implemented.");
  }
}
