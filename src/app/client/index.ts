import { OverrideResults } from "./override-results";
import { OverrideTabs } from "./override-tab";

export function registerHooks() {
  const hooks = [];
  hooks.push(new OverrideResults());
  hooks.push(new OverrideTabs());

}
