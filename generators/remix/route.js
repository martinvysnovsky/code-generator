const route = {
  description: "Remix route",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Route name",
    },
    {
      type: "checkbox",
      name: "features",
      loop: true,
      choices: [
        {
          name: "Links function",
          value: "links",
          checked: false,
        },
        {
          name: "Meta function",
          value: "meta",
          checked: false,
        },
        {
          name: "Loader function",
          value: "loader",
          checked: false,
        },
        {
          name: "Action function",
          value: "action",
          checked: false,
        },
        {
          name: "Catch boundary",
          value: "catch",
          checked: false,
        },
        {
          name: "Error boundary",
          value: "error",
          checked: false,
        },
      ],
    },
  ],
  actions: [
    {
      type: "add",
      path: "app/routes/{{kebabCase name}}/route.tsx",
      templateFile: "./templates/route.hbs",
    },
  ],
};

export default route;
