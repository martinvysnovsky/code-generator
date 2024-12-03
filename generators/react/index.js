import hook from "./hook.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("react:hook", hook);
}
