import mongooseSubschema from "./mongoose-subschema.js";
import resolver from "./resolver.js";
import resolverSpec from "./resolver-spec.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.load("../../helpers", {}, { helpers: true });

  plop.setGenerator("nest:mongoose:subschema", mongooseSubschema);

  // controller generator
  plop.setGenerator("nest:controller", {
    description: "NestJS controller",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Controller name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}.js",
        templateFile: "templates/nest/controller.hbs",
      },
    ],
  });
  plop.setGenerator("nest:resolver", resolver);
  plop.setGenerator("nest:resolverSpec", resolverSpec);
}
