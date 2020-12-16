import { Hooks, OrxeHook } from "@orxe-sdk/hooks";

@OrxeHook({
  selector: "app-my-search",
  method: "getResults",
  executeOriginal: false,
})
export class OverrideResults implements Hooks {
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
