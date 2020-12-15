import { OverrideResults } from "./override-results";

export function registerHooks() {
  const hooks = [];
  hooks.push(new OverrideResults());
}
