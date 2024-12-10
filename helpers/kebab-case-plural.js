import { kebabCase } from "change-case";

import pluralize from "./pluralize.js";

export default function kebabCasePlural(text) {
  return kebabCase(pluralize(text));
}
