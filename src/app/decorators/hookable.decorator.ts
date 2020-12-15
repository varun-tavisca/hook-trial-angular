import "reflect-metadata";

// const Reflect = global["Reflect"];
export function Hookable(configuration?) {
  return function (target) {
    console.log(target.prototype);
    console.log(`In Hookable ${configuration.selector}`);
    // console.log(args);
    if (configuration && configuration.hooks) {
      configuration.hooks.forEach((hook) => {
        const original = target.prototype[hook];
        // Check if hook is registered for target.name_hook
        const key = `${configuration.selector}_${hook}`;
        console.log(key);

        console.log("in if");
        target.prototype[hook] = function (...args) {
          if (window["registeredHooks"] && window["registeredHooks"][key]) {
            window["registeredHooks"][key].before(...args).then(() => {
              if (
                window["registeredHooks"][key]["configuration"][
                  "executeOriginal"
                ]
              ) {
                original.apply(this, args);
              }
              window["registeredHooks"][key].after(...args);
            });
          }
        };
      });
    }
  };
}
