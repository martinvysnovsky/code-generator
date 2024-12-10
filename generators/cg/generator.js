const subschema = {
  description: "Mongoose nested schema",
  prompts: [
    {
      type: "rawlist",
      name: "category",
      message: "Category:",
      choices: [
        { name: "Expo", value: "expo" },
        { name: "Nest", value: "nest" },
        { name: "React", value: "react" },
        { name: "Redux", value: "redux" },
        { name: "Remix", value: "remix" },
      ],
    },
    {
      type: "input",
      name: "name",
      message: "Generator name:",
    },
    {
      type: "input",
      name: "description",
      message: "Description:",
    },
  ],
  actions: [
    {
      type: "add",
      path: "generators/{{category}}/{{kebabCase name}}.js",
      templateFile: "./templates/generator.hbs",
    },
    {
      type: "add",
      path: "generators/{{category}}/templates/{{kebabCase name}}.hbs",
      template: "",
    },
    {
      type: "modify",
      path: "generators/{{category}}/index.js",
      pattern: /\n?(export default function \()/i,
      template:
        'import {{camelCase name}} from "./{{kebabCase name}}.js";\n\n$1',
    },
    {
      type: "modify",
      path: "generators/{{category}}/index.js",
      pattern: /}\n$/i,
      template:
        '  plop.setGenerator("{{category}}:{{camelCase name}}", {{camelCase name}});\n}\n',
    },
  ],
};

export default subschema;
