const B = require("./build");

function filaPlazo(plazo, concepto, fundamento, capitulo) {
  return new B.TableRow({
    children: [
      new B.TableCell({
        width: { size: 18, type: B.WidthType.PERCENTAGE },
        shading: { type: B.ShadingType.CLEAR, fill: B.GRIS_CLARO },
        margins: { top: 120, bottom: 120, left: 140, right: 140 },
        children: [new B.Paragraph({ children: [new B.TextRun({ text: plazo, bold: true, color: B.AZUL, font: "Archivo", size: 19 })] })],
      }),
      new B.TableCell({
        width: { size: 47, type: B.WidthType.PERCENTAGE },
        margins: { top: 120, bottom: 120, left: 140, right: 140 },
        children: [new B.Paragraph({ children: [new B.TextRun({ text: concepto, font: "Archivo", size: 19 })] })],
      }),
      new B.TableCell({
        width: { size: 22, type: B.WidthType.PERCENTAGE },
        margins: { top: 120, bottom: 120, left: 140, right: 140 },
        children: [new B.Paragraph({ children: [new B.TextRun({ text: fundamento, font: "IBM Plex Mono", size: 17, color: B.NAVY })] })],
      }),
      new B.TableCell({
        width: { size: 13, type: B.WidthType.PERCENTAGE },
        margins: { top: 120, bottom: 120, left: 140, right: 140 },
        children: [new B.Paragraph({ alignment: B.AlignmentType.CENTER, children: [new B.TextRun({ text: `cap. ${capitulo}`, italics: true, color: B.GRIS, font: "Archivo", size: 17 })] })],
      }),
    ],
  });
}

function tablaPlazos(filas) {
  return new B.Table({
    width: { size: 100, type: B.WidthType.PERCENTAGE },
    columnWidths: [1800, 4700, 2200, 1300],
    borders: {
      top: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      bottom: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      left: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      right: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      insideHorizontal: { style: B.BorderStyle.SINGLE, size: 2, color: B.BORDE },
      insideVertical: { style: B.BorderStyle.SINGLE, size: 2, color: B.BORDE },
    },
    rows: [
      new B.TableRow({
        tableHeader: true,
        children: ["Plazo", "Concepto", "Fundamento", "Cap."].map((t, i) =>
          new B.TableCell({
            width: { size: [18, 47, 22, 13][i], type: B.WidthType.PERCENTAGE },
            shading: { type: B.ShadingType.CLEAR, fill: B.NAVY },
            margins: { top: 100, bottom: 100, left: 140, right: 140 },
            children: [new B.Paragraph({ children: [new B.TextRun({ text: t, bold: true, color: "FFFFFF", font: "Archivo", size: 18, allCaps: true })] })],
          })
        ),
      }),
      ...filas,
    ],
  });
}

function anexoV() {
  return [
    new B.Paragraph({
      heading: B.HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 300 },
      children: [new B.TextRun({ text: "Anexo V. Tabla resumen de plazos", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })],
    }),
    B.p("Se recogen, ordenados de menor a mayor duración, todos los plazos legales relevantes para la gestión de un siniestro de hogar mencionados a lo largo de la obra. La tabla tiene finalidad de consulta rápida; su fundamento jurídico completo, con las matizaciones y excepciones aplicables, se encuentra en el capítulo indicado."),
    B.spacer(200),

    tablaPlazos([
      filaPlazo("7 días", "Plazo máximo para comunicar el siniestro al asegurador desde que se tuvo conocimiento (ampliable por póliza, no reducible).", "Art. 16 LCS", 17),
      filaPlazo("8 días", "Plazo para designar perito de parte tras el requerimiento de la otra parte en el procedimiento del art. 38 LCS.", "Art. 38 LCS", 18),
      filaPlazo("10 días", "Plazo habitual (contractual/práctica) concedido en el burofax de reclamación previa para el pago.", "Práctica / Anexo IV", 23),
      filaPlazo("15 días", "Plazo del asegurador para manifestar disconformidad ante la comunicación de desplazamiento del objeto asegurado.", "Art. 47 LCS", 7),
      filaPlazo("30 días", "Plazo del asegurador para impugnar judicialmente el dictamen pericial desde su notificación.", "Art. 38 LCS", 18),
      filaPlazo("40 días", "Plazo máximo para el pago del importe mínimo desde la recepción de la declaración del siniestro.", "Art. 18 LCS", 20),
      filaPlazo("1 mes", "Plazo del asegurador para rescindir el contrato desde que conoce la reserva o inexactitud en la declaración del riesgo.", "Art. 10 LCS", 4),
      filaPlazo("1 mes", "Plazo del tomador para reclamar la subsanación de divergencias entre la proposición y la póliza.", "Art. 8 LCS", 2),
      filaPlazo("1 mes", "Preaviso mínimo del tomador para oponerse a la prórroga anual de la póliza.", "Art. 22 LCS", 4),
      filaPlazo("1 mes", "Suspensión de la cobertura tras el impago de una prima sucesiva (transcurrido desde el vencimiento).", "Art. 15 LCS", 4),
      filaPlazo("3 meses", "Plazo máximo para satisfacer la indemnización antes de que el asegurador incurra en mora.", "Art. 20.3.º LCS", 20),
      filaPlazo("2 meses", "Preaviso mínimo del asegurador para oponerse a la prórroga o para comunicar modificaciones del contrato.", "Art. 22 LCS", 4),
      filaPlazo("6 meses", "Plazo del asegurador para reclamar la prima impagada antes de que el contrato se entienda extinguido.", "Art. 15 LCS", 4),
      filaPlazo("180 días", "Plazo del asegurado para impugnar judicialmente el dictamen pericial desde su notificación.", "Art. 38 LCS", 18),
      filaPlazo("2 años", "Prescripción de la acción derivada del contrato de seguro de daños (continente, contenido, responsabilidad civil).", "Art. 23 LCS", 22),
      filaPlazo("2 años", "Tramo inicial de aplicación del interés moratorio del legal del dinero incrementado en un 50 %.", "Art. 20.4.º LCS", 20),
      filaPlazo("5 años", "Prescripción de la acción derivada del seguro de personas (referencia comparativa; no aplicable al seguro de hogar en sentido estricto).", "Art. 23 LCS", 22),
    ]),

    B.spacer(240),
    B.h2("Cuantías relevantes en la vía judicial"),
    B.p("Junto a los plazos, conviene tener presente el umbral cuantitativo que determina el cauce procesal aplicable a una reclamación derivada del seguro de hogar: las demandas de cuantía no superior a 15.000 euros se tramitan por el juicio verbal (art. 250.2 LEC); las de cuantía superior a 15.000 euros, o de cuantía indeterminable, por el juicio ordinario (art. 249.2 LEC). El interés de demora del art. 20 LCS no podrá ser, transcurridos dos años desde el siniestro sin pago, inferior al 20 % anual (capítulo 20)."),
  ];
}

module.exports = { anexoV };
