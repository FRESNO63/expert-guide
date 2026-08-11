const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, ShadingType, PageBreak, PageNumber, Footer, Header,
  Table, TableRow, TableCell, WidthType, TabStopType, TabStopPosition,
  PositionalTab, PositionalTabAlignment, PositionalTabLeader,
  LevelFormat, convertInchesToTwip, VerticalAlign, ExternalHyperlink,
  FootnoteReferenceRun,
} = require("docx");
const FN = require("./footnotes");

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
  const toRun = (t) => (typeof t === "string" ? new TextRun({ text: t, font: "Archivo", size: 21 }) : t);
  const runs = Array.isArray(text) ? text.map(toRun) : [toRun(text)];
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
  const toRun = (t) => (typeof t === "string" ? run(t) : t);
  const runs = Array.isArray(text) ? text.map(toRun) : [toRun(text)];
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

// ---------- aparato académico (notas al pie con doctrina) ----------

// fn("texto de la nota") -> TextRun de referencia a insertar dentro de un array de runs de p([...])
function fn(text) {
  const id = FN.addFootnote(text);
  return new FootnoteReferenceRun(id);
}

// Bloque "SUMARIO" al inicio de capítulo, al modo de un artículo de revista jurídica (Aranzadi, RES, InDret...)
function sumario(items) {
  return box("Sumario", AZUL, items.map((t, i) =>
    new Paragraph({
      spacing: { after: 40, line: 260 },
      children: [new TextRun({ text: `${t}`, font: "Archivo", size: 18 })],
    })
  ));
}

// Bloque de resumen / palabras clave / abstract, propio de la cabecera de un artículo doctrinal
function abstractBlock(resumen, palabrasClave, abstractEn, keywords) {
  return box("Resumen · Abstract", GRIS, [
    new Paragraph({ spacing: { after: 100 }, alignment: AlignmentType.JUSTIFIED,
      children: [new TextRun({ text: resumen, italics: true, size: 18, font: "Archivo" })] }),
    new Paragraph({ spacing: { after: 160 },
      children: [new TextRun({ text: `Palabras clave: ${palabrasClave}.`, bold: true, size: 17, font: "Archivo" })] }),
    new Paragraph({ spacing: { after: 100 }, alignment: AlignmentType.JUSTIFIED,
      children: [new TextRun({ text: abstractEn, italics: true, size: 18, font: "Archivo" })] }),
    new Paragraph({ spacing: { after: 0 },
      children: [new TextRun({ text: `Keywords: ${keywords}.`, bold: true, size: 17, font: "Archivo" })] }),
  ]);
}

// ---------- formularios / modelos procesales ----------

function formCenter(text, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: opts.after ?? 160 },
    children: [new TextRun({ text, bold: !!opts.bold, size: opts.size || 21, font: "Archivo", allCaps: !!opts.caps })],
  });
}

function formPara(text, opts = {}) {
  const toRun = (t) => (typeof t === "string" ? new TextRun({ text: t, font: "Archivo", size: 20 }) : t);
  const runs = Array.isArray(text) ? text.map(toRun) : [toRun(text)];
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: opts.after ?? 160, line: 300 },
    indent: opts.indent ? { firstLine: 400 } : undefined,
    children: runs,
  });
}

function formField(label) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, font: "Archivo", size: 20 }),
      new TextRun({ text: "……………………………………………………………………………", font: "Archivo", size: 20, color: GRIS }),
    ],
  });
}

module.exports = {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle,
  ShadingType, PageBreak, PageNumber, Footer, Header, Table, TableRow, TableCell,
  WidthType, TabStopType, TabStopPosition, PositionalTab, PositionalTabAlignment,
  PositionalTabLeader, LevelFormat, convertInchesToTwip, VerticalAlign, ExternalHyperlink,
  FootnoteReferenceRun,
  NAVY, AZUL, GRIS, GRIS_CLARO, BORDE,
  partTitle, chapterHeading, h2, h3, p, bold, italic, run, bullet,
  box, legalBox, jurisBox, fichaBox, spacer,
  fn, sumario, abstractBlock,
  formCenter, formPara, formField,
};
