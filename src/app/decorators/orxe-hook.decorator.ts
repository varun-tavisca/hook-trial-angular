export function OrxeHook(configuration?) {
  return function (target) {
    if (!window["registeredHooks"]) {
      window["registeredHooks"] = {};
    }
    const key = `${configuration.component}_${configuration.method}`;
    window["registeredHooks"][key] = {
      configuration,
      before: target.prototype["before"],
      after: target.prototype["after"],
    };
  };
}
