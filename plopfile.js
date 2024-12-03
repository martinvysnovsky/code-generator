export default async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  await plop.load("./generators/react");

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
