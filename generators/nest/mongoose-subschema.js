const subschema = {
  description: "Mongoose nested schema",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Schema name:",
    },
    {
      type: "input",
      name: "module",
      message: "Module name:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/{{module}}/interfaces/{{kebabCase name}}-document.interface.ts",
      templateFile: "./templates/mongoose-subschema-interface.hbs",
    },
  ],
};

export default subschema;
