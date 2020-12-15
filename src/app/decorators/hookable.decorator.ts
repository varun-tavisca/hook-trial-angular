export function Hookable(configuration?) {
  return function (target) {
    // console.log(target.prototype);
    console.log(`In Hookable ${target.name}`);
    // console.log(args);
    if (configuration && configuration.hooks) {
      configuration.hooks.forEach((hook) => {
        const original = target.prototype[hook];
        // Check if hook is registered for target.name_hook
        const key = `${target.name}_${hook}`;
        console.log(key);

        console.log("in if");
        target.prototype[hook] = function (...args) {
          if (window["registeredHooks"] && window["registeredHooks"][key]) {
            window["registeredHooks"][key].before();
            if (
              window["registeredHooks"][key]["configuration"]["executeOriginal"]
            ) {
              original.apply(this, args);
            }
            window["registeredHooks"][key].after();
          }
        };
      });
    }
  };
}
