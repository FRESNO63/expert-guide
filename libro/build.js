const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, ShadingType, PageBreak, PageNumber, Footer, Header,
  Table, TableRow, TableCell, WidthType, TabStopType, TabStopPosition,
  PositionalTab, PositionalTabAlignment, PositionalTabLeader,
  LevelFormat, convertInchesToTwip, VerticalAlign, ExternalHyperlink
} = require("docx");

const NAVY = "0A2540";
const AZUL = "1B6DF0";
const GRIS = "6B7A8F";
const GRIS_CLARO = "F4F6F9";
const BORDE = "CBD5E1";

// ---------- helpers ----------

function partTitle(numero, texto) {
  return [
    new Paragraph({
      pageBreakBefore: true,
      spacing: { before: 2000, after: 200 },
      children: [new TextRun({ text: `PARTE ${numero}`, bold: true, size: 28, color: AZUL, font: "Archivo" })],
    }),
    new Paragraph({
      spacing: { after: 600 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BORDE, space: 12 } },
      children: [new TextRun({ text: texto, bold: true, size: 44, color: NAVY, font: "Fraunces" })],
    }),
  ];
}

function chapterHeading(numero, texto) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    pageBreakBefore: true,
    spacing: { before: 200, after: 300 },
    children: [
      new TextRun({ text: `Capítulo ${numero}. `, bold: true, color: AZUL, font: "Archivo", size: 22 }),
      new TextRun({ text: texto, bold: true, color: NAVY, font: "Fraunces", size: 30 }),
    ],
  });
}

function h2(texto) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 400, after: 160 },
    children: [new TextRun({ text: texto, bold: true, color: NAVY, font: "Fraunces", size: 24 })],
  });
}

function h3(texto) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text: texto, bold: true, color: AZUL, font: "Archivo", size: 21 })],
  });
}

function p(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [new TextRun({ text, font: "Archivo", size: 21 })];
  return new Paragraph({
    spacing: { after: 180, line: 300 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    children: runs,
  });
}

function bold(text) { return new TextRun({ text, bold: true, font: "Archivo", size: 21 }); }
function italic(text) { return new TextRun({ text, italics: true, font: "Archivo", size: 21 }); }
function run(text) { return new TextRun({ text, font: "Archivo", size: 21 }); }

function bullet(text, level = 0) {
  const runs = Array.isArray(text) ? text : [run(text)];
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 100, line: 290 },
    children: runs,
  });
}

// boxed content (borders + shading) — used for citas legales, jurisprudencia y fichas
function box(titleText, titleColor, paragraphs) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: BORDE },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDE },
      left: { style: BorderStyle.SINGLE, size: 24, color: titleColor },
      right: { style: BorderStyle.SINGLE, size: 4, color: BORDE },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { type: ShadingType.CLEAR, fill: GRIS_CLARO },
            margins: { top: 160, bottom: 160, left: 220, right: 220 },
            children: [
              new Paragraph({
                spacing: { after: 100 },
                children: [new TextRun({ text: titleText, bold: true, color: titleColor, font: "Archivo", size: 18, allCaps: true })],
              }),
              ...paragraphs,
            ],
          }),
        ],
      }),
    ],
  });
}

function legalBox(articulo, texto) {
  return box(`Texto legal · ${articulo}`, AZUL, [
    new Paragraph({
      spacing: { after: 0, line: 280 },
      alignment: AlignmentType.JUSTIFIED,
      children: [new TextRun({ text: texto, italics: true, font: "IBM Plex Mono", size: 18, color: NAVY })],
    }),
  ]);
}

function jurisBox(cabecera, texto) {
  return box(`Jurisprudencia · ${cabecera}`, "8A5A00", [
    new Paragraph({
      spacing: { after: 0, line: 280 },
      alignment: AlignmentType.JUSTIFIED,
      children: [new TextRun({ text: texto, font: "Archivo", size: 19, color: NAVY })],
    }),
  ]);
}

function fichaBox(titulo, color, items) {
  return box(titulo, color, items.map((t) =>
    new Paragraph({
      numbering: { reference: "bullets", level: 0 },
      spacing: { after: 80, line: 280 },
      children: [new TextRun({ text: t, font: "Archivo", size: 19 })],
    })
  ));
}

function spacer(h = 200) {
  return new Paragraph({ spacing: { after: h }, children: [] });
}

module.exports = {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle,
  ShadingType, PageBreak, PageNumber, Footer, Header, Table, TableRow, TableCell,
  WidthType, TabStopType, TabStopPosition, PositionalTab, PositionalTabAlignment,
  PositionalTabLeader, LevelFormat, convertInchesToTwip, VerticalAlign, ExternalHyperlink,
  NAVY, AZUL, GRIS, GRIS_CLARO, BORDE,
  partTitle, chapterHeading, h2, h3, p, bold, italic, run, bullet,
  box, legalBox, jurisBox, fichaBox, spacer,
};
