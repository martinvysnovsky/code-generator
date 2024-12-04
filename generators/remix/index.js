import hook from "./hook.js";
import component from "./component.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("remix:component", component);
  plop.setGenerator("remix:hook", hook);
}
