const component = {
  description: "⚛ react component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "components/{{pascalCase name}}.tsx",
      templateFile: "../react/templates/component.hbs",
    },
    // TODO:
    // {
    //   type: "add",
    //   path: "components/{{pascalCase name}}.test.tsx",
    //   templateFile: "./templates/test.hbs",
    // }
  ],
};

export default component;
