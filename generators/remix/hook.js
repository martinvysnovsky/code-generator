const hook = {
  description: "⚛ react hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Hook name:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/hooks/{{camelCase name}}.ts",
      templateFile: "../react/templates/hook.hbs",
    },
    // TODO: add test file
    // {
    //   type: "add",
    //   path: "src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts",
    //   templateFile: "../react/templates/test.hbs",
    // },
  ],
};

export default hook;
