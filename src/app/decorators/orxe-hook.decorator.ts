export function OrxeHook(configuration?) {
  return function (target) {
    if (!window["registeredHooks"]) {
      window["registeredHooks"] = {};
    }
    const key = `${configuration.selector}_${configuration.method}`;
    console.log(`Registering: ${key}`);
    window["registeredHooks"][key] = {
      configuration,
      before: target.prototype["before"],
      after: target.prototype["after"],
    };
  };
}
