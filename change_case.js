const splitWords = (str) =>
  str.replace(/(?<=[a-z0-9])(?=[A-Z0-9])|([^\na-zA-Z0-9]+)/g, "-").split("-");

const alfredItem = (type, arg) => ({
  title: arg,
  subtitle: type,
  arg,
  autocomplete: type,
});

// camelCase
const camelCase = (str) => {
  const words = splitWords(str);
  const format = words
    .map((word, i) =>
      i
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join("");
  return alfredItem("camelCase", format);
};

// PascalCase
const pascalCase = (str) => {
  const words = splitWords(str);
  const format = words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
  return alfredItem("PascalCase", format);
};

// kebab-case
const kebabCase = (str) => {
  const words = splitWords(str);
  const format = words.map((word) => word.toLowerCase()).join("-");
  return alfredItem("kebab-case", format);
};

// snake_case
const snakeCase = (str) => {
  const words = splitWords(str);
  const format = words.map((word) => word.toLowerCase()).join("_");
  return alfredItem("snake_case", format);
};

// SCREAMING_CASE
const screamingCase = (str) => {
  const words = splitWords(str);
  const format = words.map((word) => word.toUpperCase()).join("_");
  return alfredItem("SCREAMING_CASE", format);
};

// dot.case
const dotCase = (str) => {
  const words = splitWords(str);
  const format = words.map((word) => word.toLowerCase()).join(".");
  return alfredItem("dot.case", format);
};

// path/case
const pathCase = (str) => {
  const words = splitWords(str);
  const format = words.map((word) => word.toLowerCase()).join("/");
  return alfredItem("path/case", format);
};

// Sentence case
const sentenceCase = (str) => {
  const words = splitWords(str);
  const format = words
    .map((word, i) =>
      i === 0
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join(" ");
  return alfredItem("Sentence case", format);
};

// Title Case
const titleCase = (str) => {
  const words = splitWords(str);
  const format = words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return alfredItem("Title Case", format);
};

// UPPERCASE
const uppercase = (str) => {
  const format = str?.toLowerCase();
  return alfredItem("UPPERCASE", format);
};

// lowercase
const lowercase = (str) => {
  const format = str?.toLowerCase();
  return alfredItem("lowercase", format);
};

function run(argv) {
  const text = argv[0];
  const query = argv[1];
  let items = [
    camelCase(text),
    pascalCase(text),
    kebabCase(text),
    snakeCase(text),
    screamingCase(text),
    sentenceCase(text),
    titleCase(text),
    dotCase(text),
    pathCase(text),
    uppercase(text),
    lowercase(text),
  ].map((item, i) => ({ ...item }));
  if (query)
    items = items.filter((item) => RegExp(query, "i").test(item.subtitle));
  return JSON.stringify({ skipknowledge: true, items: items });
}
