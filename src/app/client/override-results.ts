import { Hooks, OrxeHook } from '@orxe-sdk/hooks';

@OrxeHook({
    selector: 'app-my-search',
    method: 'getResults',
    executeOriginal: true
})
export class OverrideResults implements Hooks {
    before() {
        console.log('before override');
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
        console.log('after override');
    }
}
