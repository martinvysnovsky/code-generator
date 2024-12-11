import hook from "./hook.js";
import component from "./component.js";
import route from "./route.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.load("../../helpers", {}, { helpers: true });

  plop.setGenerator("remix:route", route);
  plop.setGenerator("remix:component", component);
  plop.setGenerator("remix:hook", hook);
}
