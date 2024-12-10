import { camelCase } from "change-case";

import pluralize from "./pluralize.js";

export default function camelCasePlural(text) {
  return camelCase(pluralize(text));
}
