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
      path: "hooks/{{camelCase name}}.ts",
      templateFile: "../react/templates/hook.hbs",
    },
    // TODO: add test file
    // {
    //   type: "add",
    //   path: "hooks/{{camelCase name}}/{{camelCase name}}.test.ts",
    //   templateFile: "./templates/test.hbs",
    // },
  ],
};

export default hook;
