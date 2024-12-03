const hook = {
  description: "⚛ react hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Hook name:",
    },
    {
      type: "list",
      name: "folder",
      message: "Project src root:",
      choices: [".", "src"],
    },
  ],
  actions: [
    {
      type: "add",
      path: "{{folder}}/hooks/{{camelCase name}}.ts",
      templateFile: "./templates/hook.hbs",
    },
    // TODO: add test file
    // {
    //   type: "add",
    //   path: "src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts",
    //   templateFile: "./templates/test.hbs",
    // },
  ],
};

export default hook;
