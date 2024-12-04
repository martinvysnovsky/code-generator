import hook from "./hook.js";
import component from "./component.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("expo:component", component);
  plop.setGenerator("expo:hook", hook);
}
