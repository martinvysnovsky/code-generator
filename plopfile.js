export default async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  await plop.load("./generators/nest");
  await plop.load("./generators/react");
  await plop.load("./generators/remix");
  await plop.load("./generators/expo");
}
