export default function includes(array, string, options) {
  if (array.includes(string)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
