const resolver = {
  description: "NestJS resolver",
  prompts: [
    {
      type: "input",
      name: "module",
      message: "Module name:",
    },
    {
      type: "input",
      name: "name",
      message: "Resolver name:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/{{module}}/{{kebabCasePlural name}}.resolver.ts",
      templateFile: "./templates/resolver.hbs",
    },
  ],
};

export default resolver;
