import { pascalCase } from "change-case";

import pluralize from "./pluralize.js";

export default function pascalCasePlural(text) {
  return pascalCase(pluralize(text));
}
