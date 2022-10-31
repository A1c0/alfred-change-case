import alfy from 'alfy';
import clipboard from 'clipboardy';
import {
  camelCase,
  capitalCase,
  constantCase,
  headerCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

const clipboardRead = clipboard.readSync();

const list = [
  {name: "Camel Case", fn: camelCase},
  {name: "Capital Case", fn: capitalCase},
  {name: "Constant Case", fn: constantCase},
  {name: "Header Case", fn: headerCase},
  {name: "Kebab Case", fn: paramCase},
  {name: "Pascal Case", fn: pascalCase},
  {name: "Path Case", fn: pathCase},
  {name: "Sentence Case", fn: sentenceCase},
  {name: "Snake Case", fn: snakeCase},
  {name: "Upper Case", fn: (str) => str.toUpperCase()},
  {name: "Lower Case", fn: (str) => str.toLowerCase()},
];

const items = alfy
  .inputMatches(list, 'name')
  .map(element => ({
    title: element.fn(clipboardRead),
    subtitle: element.fn(element.name),
    arg: element.fn(clipboardRead)
  }));

alfy.output(items);
