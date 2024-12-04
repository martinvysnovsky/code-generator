const hook = {
  description: "Redux slice",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Slice name:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "store/features/{{camelCase name}}.ts",
      templateFile: "../redux/templates/slice.hbs",
    },
    // TODO: add test file
    // {
    //   type: "add",
    //   path: "store/features/{{camelCase name}}.test.ts",
    //   templateFile: "./templates/test.hbs",
    // },
  ],
};

export default hook;
