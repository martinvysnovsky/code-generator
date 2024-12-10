import camelCasePlural from "./camel-case-plural.js";
import kebabCasePlural from "./kebab-case-plural.js";
import pascalCasePlural from "./pascal-case-plural.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setHelper("camelCasePlural", camelCasePlural);
  plop.setHelper("kebabCasePlural", kebabCasePlural);
  plop.setHelper("pascalCasePlural", pascalCasePlural);
}
