const resolverSpec = {
  description: "Tests for NestJS resolver",
  prompts: [
    {
      type: "input",
      name: "module",
      message: "Module name:",
    },
    {
      type: "input",
      name: "name",
      message: "Resolver spec name:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/{{module}}/{{kebabCasePlural name}}.resolver.spec.ts",
      templateFile: "./templates/resolver-spec.hbs",
    },
  ],
};

export default resolverSpec;
