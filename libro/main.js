const fs = require("fs");
const B = require("./build");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle,
  Table, TableRow, TableCell, WidthType, TabStopType, TabStopPosition,
  PositionalTab, PositionalTabAlignment, PositionalTabLeader,
  LevelFormat, Header, Footer, PageNumber, VerticalAlign,
} = B;
const { capitulo01 } = require("./capitulo01");
const { capitulo02 } = require("./capitulo02");
const { capitulo03 } = require("./capitulo03");
const { capitulo04 } = require("./capitulo04");
const { capitulo05 } = require("./capitulo05");
const { capitulo06 } = require("./capitulo06");
const { capitulo07 } = require("./capitulo07");
const { capitulo08 } = require("./capitulo08");
const FN = require("./footnotes");

const FECHA = "Agosto de 2026";

// ---------------- PORTADA ----------------
const portada = [
  new Paragraph({ spacing: { before: 2600 }, children: [] }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [new TextRun({ text: "DERECHO DE SEGUROS DE HOGAR", bold: true, size: 56, color: B.NAVY, font: "Fraunces" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 500 },
    children: [new TextRun({ text: "Manual práctico para profesionales y asegurados", size: 26, color: B.AZUL, font: "Archivo" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60 },
    children: [new TextRun({ text: "Coberturas, siniestros y reclamación con doctrina y jurisprudencia del Tribunal Supremo", italics: true, size: 21, color: B.GRIS, font: "Archivo" })],
  }),
  new Paragraph({ spacing: { before: 3200 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Fresno Abogados", bold: true, size: 24, color: B.NAVY, font: "Archivo" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: FECHA, size: 20, color: B.GRIS, font: "Archivo" })] }),
];

// ---------------- CRÉDITOS ----------------
const creditos = [
  new Paragraph({ pageBreakBefore: true, spacing: { before: 3000, after: 200 },
    children: [new TextRun({ text: "Derecho de Seguros de Hogar. Manual práctico para profesionales y asegurados", size: 19, font: "Archivo" })] }),
  new Paragraph({ spacing: { after: 200 },
    children: [new TextRun({ text: "© Fresno Abogados, " + FECHA, size: 19, font: "Archivo" })] }),
  new Paragraph({ spacing: { after: 200 },
    children: [new TextRun({ text: "Edición de trabajo en curso de redacción. Las citas legales reproducen el texto consolidado publicado en el Boletín Oficial del Estado (BOE) y las citas jurisprudenciales reproducen resoluciones oficiales del Tribunal Supremo (CENDOJ), verificadas en la fecha de cierre de cada capítulo. Esta obra tiene finalidad divulgativa y de apoyo profesional y no sustituye el asesoramiento jurídico individualizado sobre un caso concreto.", size: 18, color: B.GRIS, font: "Archivo" })] }),
];

// ---------------- PRESENTACIÓN ----------------
const presentacion = [
  new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, spacing: { after: 300 },
    children: [new TextRun({ text: "Presentación", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })] }),
  B.p("El seguro de hogar acompaña, casi sin excepción, a cualquier propietario o inquilino en España. Su contratación es en muchos casos obligatoria de facto —la exige la entidad que concede el préstamo hipotecario— y su gestión, sin embargo, sigue generando cada año miles de reclamaciones ante los servicios de atención al cliente de las aseguradoras, ante el Defensor del Asegurado, ante la Dirección General de Seguros y Fondos de Pensiones y, en última instancia, ante los juzgados de primera instancia de toda España."),
  B.p("Esta obra nace con una vocación doble. Para el profesional del Derecho —abogado, procurador, perito, mediador de seguros o gestor de siniestros— pretende ser un manual de consulta rápida que, capítulo a capítulo, sitúe la norma aplicable, la sistematice con la doctrina jurisprudencial más reciente del Tribunal Supremo y la traduzca en pautas de actuación verificables. Para el asegurado, pretende ser una guía que le permita entender qué ha firmado, qué puede exigir y cómo debe actuar ante un siniestro, sin necesidad de conocimientos jurídicos previos."),
  B.p("Cada capítulo combina tres planos de lectura: el texto legal vigente, reproducido literalmente y con indicación de su fuente oficial; la doctrina jurisprudencial aplicable, con cita completa (número de resolución, fecha, ECLI y ponente) para que pueda verificarse y citarse en cualquier escrito profesional; y una traducción práctica, en forma de fichas y checklists, dirigida respectivamente al profesional y al asegurado."),
  B.p("El resultado es un libro pensado para leerse de principio a fin, pero también, y sobre todo, para consultarse por capítulos sueltos cuando surge un problema concreto: una gotera que discute la aseguradora, un robo cuya indemnización se demora, una cláusula que nadie explicó con claridad antes de firmar."),
];

// ---------------- CÓMO USAR ESTE LIBRO ----------------
const comoUsar = [
  new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, spacing: { after: 300 },
    children: [new TextRun({ text: "Cómo usar este libro", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })] }),
  B.p("A lo largo de la obra se emplean tres recursos gráficos recurrentes que conviene identificar desde el principio:"),
  B.box("Texto legal", B.AZUL, [B.p("Los recuadros con este encabezado reproducen el texto legal vigente en la fecha de redacción del capítulo, con indicación de la norma y del artículo citados. El profesional debe verificar siempre, antes de invocarlo en un escrito, que no se ha producido una modificación posterior consultando el BOE consolidado.")]),
  B.spacer(120),
  B.box("Jurisprudencia", "8A5A00", [B.p("Los recuadros con este encabezado reproducen pasajes literales de sentencias del Tribunal Supremo, identificadas por número de resolución, fecha y ECLI (código europeo de identificación de jurisprudencia), lo que permite su localización y verificación directa en el buscador del Centro de Documentación Judicial (CENDOJ).")]),
  B.spacer(120),
  B.fichaBox("Ficha práctica", B.AZUL, ["Los recuadros de ficha traducen el contenido del capítulo en pautas de actuación concretas, diferenciadas según se dirijan al profesional o al asegurado."]),
  B.p("Al final de la obra se incluyen anexos con un glosario de términos, un índice de la legislación citada, un índice de la jurisprudencia citada con enlace a su ECLI, modelos de escritos de reclamación y una tabla resumen de plazos, pensada como referencia de consulta inmediata."),
];

// ---------------- ÍNDICE ----------------
const indiceEntries = [
  ["Presentación", null],
  ["Cómo usar este libro", null],
  ["PARTE I. FUNDAMENTOS DEL SEGURO DE HOGAR", "part"],
  ["Capítulo 1. El contrato de seguro de hogar: concepto, fuentes y principios", 1],
  ["Capítulo 2. Sujetos y objeto del contrato: tomador, asegurado, beneficiario, continente y contenido", 2],
  ["Capítulo 3. Formación del contrato y deber de declaración del riesgo (art. 10 LCS)", 3],
  ["Capítulo 4. Condiciones generales, particulares y especiales: profundización práctica", 4],
  ["PARTE II. LAS COBERTURAS DEL SEGURO MULTIRRIESGO DE HOGAR", "part"],
  ["Capítulo 5. Incendio, explosión y fenómenos eléctricos", 5],
  ["Capítulo 6. Daños por agua", 6],
  ["Capítulo 7. Robo, expoliación y hurto", 7],
  ["Capítulo 8. Fenómenos atmosféricos y riesgos extraordinarios: el Consorcio de Compensación de Seguros", 8],
  ["Capítulo 9. Responsabilidad civil de la vida privada y del cabeza de familia", 9],
  ["Capítulo 10. Defensa jurídica y asistencia en el hogar", 10],
  ["Capítulo 11. Coberturas especiales: joyas, objetos de valor, equipos electrónicos y comunidades de propietarios", 11],
  ["Capítulo 12. Exclusiones generales y particulares", 12],
  ["PARTE III. LA GESTIÓN DEL SINIESTRO", "part"],
  ["Capítulo 13. Declaración y comunicación del siniestro (art. 16 LCS)", 13],
  ["Capítulo 14. Peritación: designación, procedimiento y tercer perito (art. 38 LCS)", 14],
  ["Capítulo 15. Infraseguro, sobreseguro y regla proporcional (arts. 26 y 30 LCS)", 15],
  ["Capítulo 16. Pago de la indemnización, mora del asegurador e intereses (art. 20 LCS)", 16],
  ["Capítulo 17. Dolo y culpa grave: causas de exoneración del asegurador", 17],
  ["Capítulo 18. Prescripción de acciones (art. 23 LCS)", 18],
  ["PARTE IV. CONFLICTOS Y VÍAS DE RECLAMACIÓN", "part"],
  ["Capítulo 19. Reclamación extrajudicial: servicio de atención al cliente, Defensor del Asegurado y DGSFP", 19],
  ["Capítulo 20. Vía judicial: competencia, procedimiento y costas", 20],
  ["Capítulo 21. Cláusulas abusivas y protección de los consumidores", 21],
  ["Capítulo 22. Casos prácticos resueltos", 22],
  ["PARTE V. ANEXOS PRÁCTICOS", "part"],
  ["Anexo I. Glosario de términos", "A"],
  ["Anexo II. Índice de legislación citada", "A"],
  ["Anexo III. Índice de jurisprudencia citada", "A"],
  ["Anexo IV. Modelos y formularios de reclamación", "A"],
  ["Anexo V. Tabla resumen de plazos", "A"],
];

function indiceLine(texto, tipo) {
  const isPart = tipo === "part";
  return new Paragraph({
    spacing: { after: isPart ? 160 : 90, before: isPart ? 260 : 0 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX, leader: "dot" }],
    children: [
      new TextRun({
        text: texto,
        bold: isPart,
        color: isPart ? B.AZUL : B.NAVY,
        allCaps: isPart,
        size: isPart ? 20 : 21,
        font: "Archivo",
      }),
    ],
  });
}

const indice = [
  new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, spacing: { after: 300 },
    children: [new TextRun({ text: "Índice", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })] }),
  ...indiceEntries.map(([texto, tipo]) => indiceLine(texto, tipo)),
];

// ---------------- ENSAMBLADO ----------------
const numbering = {
  config: [
    {
      reference: "bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "—", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 400, hanging: 260 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "·", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 700, hanging: 260 } } } },
      ],
    },
  ],
};

const doc = new Document({
  numbering,
  styles: {
    default: {
      document: { run: { font: "Archivo", size: 21, color: B.NAVY } },
    },
  },
  sections: [
    {
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1418, bottom: 1418, left: 1418, right: 1418 } } },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ text: "Derecho de Seguros de Hogar · Manual práctico", size: 15, color: B.GRIS, font: "Archivo" })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ children: [PageNumber.CURRENT], size: 17, color: B.GRIS, font: "Archivo" })],
          })],
        }),
      },
      children: [
        ...portada,
        ...creditos,
        ...presentacion,
        ...comoUsar,
        ...indice,
        ...B.partTitle("I", "Fundamentos del seguro de hogar"),
        ...capitulo01(),
        ...capitulo02(),
        ...capitulo03(),
        ...capitulo04(),
        ...B.partTitle("II", "Las coberturas del seguro multirriesgo de hogar"),
        ...capitulo05(),
        ...capitulo06(),
        ...capitulo07(),
        ...capitulo08(),
      ],
    },
  ],
  footnotes: FN.getRegistry(),
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(__dirname + "/Derecho_Seguros_Hogar.docx", buf);
  console.log("OK", buf.length, "bytes");
});
