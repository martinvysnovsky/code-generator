import generator from "./generator.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("cg:generator", generator);
}
