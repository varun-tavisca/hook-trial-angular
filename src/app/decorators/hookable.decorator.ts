import { windowManager } from '@orxe-sdk/window-manager';

const _hookKey = 'registeredHooks';
export function Hookable(configuration?) {
  return function (target) {
    console.log('T', target.prototype);
    console.log('T', typeof target);
    if (configuration && configuration.hooks) {
      configuration.hooks.forEach((hook) => {
        console.log('T', hook);
        const original = target.prototype[hook];
        // Check if hook is registered for target.name_hook
        const key = `${configuration.selector}_${hook}`;
        console.log('T', key);
        if (!windowManager.get(_hookKey)) {
          windowManager.set(_hookKey, { registeredHooks: {} });
        }
        // const sdkInstance = windowManager.get(_hookKey)[_hookKey];
        // console.log('T', sdkInstance);

        console.log('T', target[hook]);

        target.prototype[hook] = function (...args) {
          const sdkInstance = windowManager.get(_hookKey)[_hookKey];
          console.log('T', sdkInstance);
          console.log('T---------', this.results, target);
          if (sdkInstance && sdkInstance[key]) {
            sdkInstance[key].before(this,  ...args).then(() => {
              if (sdkInstance[key]['configuration']['executeOriginal']) {
                original.apply(this, args);
              }
              sdkInstance[key].after(this, ...args);
            });
          }
        };
      });
    }
  };
}
