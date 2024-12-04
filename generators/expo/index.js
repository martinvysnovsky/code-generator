import hook from "./hook.js";
import component from "./component.js";
import reduxSlice from "./redux-slice.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("expo:component", component);
  plop.setGenerator("expo:hook", hook);
  plop.setGenerator("expo:redux:slice", reduxSlice);
}
