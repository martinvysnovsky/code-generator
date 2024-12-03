export default async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  await plop.load("./generators/nest");
  await plop.load("./generators/react");
}
