const { Paragraph, TextRun } = require("docx");

let counter = 0;
const registry = {};

function addFootnote(text) {
  counter += 1;
  registry[counter] = {
    children: [
      new Paragraph({
        children: [new TextRun({ text, size: 17, font: "Archivo" })],
      }),
    ],
  };
  return counter;
}

function getRegistry() {
  return registry;
}

module.exports = { addFootnote, getRegistry };
