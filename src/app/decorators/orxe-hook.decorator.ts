
import { windowManager } from '@orxe-sdk/window-manager';

const _hookKey = 'registeredHooks';
export function OrxeHook(configuration?) {
    return function (target) {
        console.log('h:', target);
        if (!windowManager.get(_hookKey)) {
          windowManager.set(_hookKey, { registeredHooks: {} });
        } else {
          //   console.warn(Core.getWarning(Keys.Warning.SDKAlreadyInitialized));
        }
        const key = `${configuration.selector}_${configuration.method}`;
        const sdkInstance = windowManager.get(_hookKey);
        console.log('h: ', sdkInstance);
        const newHook = {};
        newHook[key] = {
          configuration,
          before: target.prototype['before'],
          after: target.prototype['after'],
        };
    
        console.log(`registering: ${key}`);
        sdkInstance[_hookKey] = {...sdkInstance[_hookKey], ...newHook};
        // windowManager.set(_hookKey, Object.assign(sdkInstance[_hookKey], newHook));
      };
};

