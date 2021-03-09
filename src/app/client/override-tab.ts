import { Hooks, OrxeHook  } from '@orxe-sdk/hooks';

@OrxeHook({
  selector: "app-root",
  method: "ngOnInit",
  executeOriginal: true,
})
export class OverrideTabs implements Hooks {
  before(instance) {
    console.log("before test override");
    
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  after(instance): void {
    console.log("after results override");
  }
}
