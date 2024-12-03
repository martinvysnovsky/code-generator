import mongooseSubschema from "./mongoose-subschema.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
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
}
