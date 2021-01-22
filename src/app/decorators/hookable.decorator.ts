import { windowManager } from '@orxe-sdk/window-manager';

const _hookKey = 'registeredHooks';
export function Hookable(configuration?) {
  return function (target) {
    console.log('T', target.prototype);
    console.log('T', typeof target);
    console.log(configuration);
    
    if (configuration && configuration.hooks) {
      configuration.hooks.forEach((hook) => {
        console.log('T', hook);
        const original = target.prototype[hook];
        const key = `${configuration.selector}_${hook}`;
        console.log('T', key);
        if (!windowManager.get(_hookKey)) {
          windowManager.set(_hookKey, { registeredHooks: {} });
        }
        console.log('T', target[hook]);

        target.prototype[hook] = function (...args) {
          const sdkInstance = windowManager.get(_hookKey)[_hookKey];
          if (sdkInstance && sdkInstance[key]) {
            sdkInstance[key].before(this,  ...args).then(() => {
              if (sdkInstance[key]['configuration']['executeOriginal']) {
                original.apply(this, args);
              }
              sdkInstance[key].after(this, ...args);
            });
          } else {
            original.apply(this, args);
          }
        };
      });
    }
  };
}
