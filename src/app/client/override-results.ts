import { Hook } from "../decorators/hook.interface";
import { OrxeHook } from "../decorators/orxe-hook.decorator";

@OrxeHook({
  selector: "app-my-search",
  method: "getResultData",
  executeOriginal: true,
})
export class OverrideResults implements Hook {
  before(instance) {
    console.log("before results override");
    console.log(instance.results);
    // console.log(instance);
    console.log(instance.forTest());
    
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
    instance.results = [
      {
        id: 1,
        name: 23,
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
    ];;
    console.log(instance.forTest());
    // throw new Error("Method not implemented.");
  }
}
