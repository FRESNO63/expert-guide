const B = require("./build");

function norma(titulo, articulos) {
  return [
    B.h3(titulo),
    ...articulos.map(([art, contenido, cap]) =>
      new B.Paragraph({
        spacing: { after: 100, line: 280 },
        alignment: B.AlignmentType.JUSTIFIED,
        tabStops: [{ type: B.TabStopType.RIGHT, position: B.TabStopPosition.MAX, leader: "dot" }],
        children: [
          new B.TextRun({ text: art + ". ", bold: true, color: B.NAVY, font: "Archivo", size: 20 }),
          new B.TextRun({ text: contenido + " ", font: "Archivo", size: 20 }),
          new B.TextRun({ text: `(cap. ${cap})`, italics: true, color: B.GRIS, font: "Archivo", size: 18 }),
        ],
      })
    ),
    B.spacer(200),
  ];
}

function anexoII() {
  return [
    new B.Paragraph({
      heading: B.HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 300 },
      children: [new B.TextRun({ text: "Anexo II. Índice de legislación citada", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })],
    }),
    B.p("Se relacionan a continuación, organizados por norma y en orden creciente de articulado, todos los preceptos legales reproducidos o comentados a lo largo de la obra, con indicación de su contenido esencial y del capítulo donde se desarrollan. El texto íntegro de cada precepto, verificado contra el BOE consolidado en la fecha de cierre de cada capítulo, se encuentra en la caja de «Texto legal» correspondiente; este índice cumple una función de localización rápida, no de sustitución de la consulta de la norma vigente."),
    B.spacer(200),

    ...norma("Ley 50/1980, de 8 de octubre, de Contrato de Seguro (LCS)", [
      ["Art. 1", "Concepto legal del contrato de seguro.", 1],
      ["Art. 2", "Carácter imperativo relativo de la Ley; validez de las cláusulas más beneficiosas para el asegurado.", 1],
      ["Art. 3", "Condiciones generales y particulares; cláusulas limitativas, delimitadoras y lesivas.", 1],
      ["Art. 5", "Formalización escrita del contrato y entrega de la póliza o el documento de cobertura provisional.", 4],
      ["Art. 6", "Solicitud y proposición de seguro; vinculación de la proposición durante quince días.", 4],
      ["Art. 7", "Seguro por cuenta propia o ajena; reparto de obligaciones y derechos entre tomador y asegurado.", 2],
      ["Art. 8", "Contenido documental mínimo de la póliza; mecanismo de subsanación en un mes.", 2],
      ["Art. 10", "Deber precontractual de declaración del riesgo; modelo de declaración-cuestionario.", 4],
      ["Art. 11", "Deber de comunicación de la agravación del riesgo durante la vigencia del contrato.", 4],
      ["Art. 12", "Consecuencias del incumplimiento del deber de comunicación de la agravación del riesgo.", 4],
      ["Art. 15", "Consecuencias del impago de la prima, primera y sucesivas.", 4],
      ["Art. 16", "Deber de comunicación del siniestro en el plazo de siete días; deber de información sobre sus circunstancias.", 17],
      ["Art. 18", "Obligación de pago del importe mínimo dentro de los cuarenta días desde la declaración del siniestro.", 20],
      ["Art. 19", "Exoneración del asegurador por mala fe del asegurado (régimen general).", 21],
      ["Art. 20", "Mora del asegurador; régimen especial de intereses moratorios.", 20],
      ["Art. 22", "Duración del contrato, prórroga y plazos de oposición a la renovación.", 4],
      ["Art. 23", "Prescripción de las acciones derivadas del contrato de seguro: dos años en el seguro de daños.", 22],
      ["Art. 25", "El interés asegurable como presupuesto de validez del seguro de daños.", 2],
      ["Art. 26", "Principio indemnizatorio; prohibición de enriquecimiento injusto.", 2],
      ["Art. 27", "La suma asegurada como límite máximo de la indemnización; sobreseguro.", 19],
      ["Art. 30", "Regla proporcional del infraseguro y su exclusión convencional.", 19],
      ["Art. 32", "Concurrencia de seguros: comunicación y contribución proporcional entre aseguradores.", 8],
      ["Art. 38", "Procedimiento de peritación contradictoria; designación de peritos, tercer perito e impugnación del dictamen.", 18],
      ["Art. 43", "Subrogación del asegurador en los derechos del asegurado frente a terceros responsables.", 8],
      ["Art. 45", "Concepto legal de incendio a efectos del seguro.", 7],
      ["Art. 46", "Exclusión legal de valores, dinero y objetos de arte, salvo pacto expreso.", 7],
      ["Art. 47", "Desplazamiento del objeto asegurado fuera del lugar descrito en la póliza.", 7],
      ["Art. 48", "Causas de cobertura y de exoneración en el seguro de incendio; malquerencia de extraños.", 7],
      ["Art. 49", "Extensión de la cobertura de incendio a daños conexos.", 7],
      ["Art. 50", "Concepto legal de robo a efectos aseguraticios: sustracción ilegítima.", 9],
      ["Art. 51", "Alcance de la indemnización en el seguro de robo.", 9],
      ["Art. 52", "Causas legales de exoneración en el seguro de robo: negligencia grave, lugar, riesgos extraordinarios.", 9],
      ["Art. 53", "Recuperación del objeto sustraído, antes y después del pago de la indemnización.", 9],
      ["Art. 73", "Concepto del seguro de responsabilidad civil.", 13],
      ["Art. 74", "Dirección jurídica del siniestro por el asegurador y conflicto de intereses.", 13],
      ["Art. 76", "Acción directa del perjudicado; inmunidad frente a las excepciones del asegurador contra el asegurado.", 13],
      ["Arts. 76.a) a 76.g)", "Régimen especial del seguro de defensa jurídica; libre elección de abogado y procurador.", 14],
    ]),

    ...norma("Código Civil (CC)", [
      ["Art. 1089", "Fuentes de las obligaciones, entre ellas el acto ilícito generador de responsabilidad civil.", 22],
      ["Art. 1108", "Régimen general de los intereses moratorios, excluido por el art. 20 LCS.", 20],
      ["Art. 1281", "Interpretación literal del contrato como punto de partida.", 6],
      ["Art. 1284", "Principio de conservación: interpretación que dote de efecto útil a la cláusula.", 6],
      ["Art. 1285", "Interpretación sistemática: las cláusulas se interpretan las unas por las otras.", 6],
      ["Art. 1288", "Regla contra proferentem: la oscuridad no favorece a quien la ocasionó.", 5],
      ["Art. 1289", "Reglas subsidiarias de cierre; nulidad por duda insalvable sobre el objeto principal.", 6],
      ["Art. 1902", "Responsabilidad extracontractual por culpa o negligencia.", 8],
      ["Art. 1903", "Responsabilidad por hecho ajeno; responsabilidad de los padres por los hijos bajo su guarda.", 13],
      ["Art. 1964", "Plazo general de prescripción de las acciones personales sin plazo especial.", 22],
      ["Art. 1969", "Cómputo del plazo de prescripción desde que la acción pudo ejercitarse (actio nata).", 22],
      ["Art. 1973", "Interrupción de la prescripción por reclamación extrajudicial, judicial o reconocimiento de deuda.", 22],
    ]),

    ...norma("Ley 1/2000, de Enjuiciamiento Civil (LEC)", [
      ["Arts. 50 y 51", "Fueros generales de competencia territorial (domicilio del demandado).", 24],
      ["Art. 52.2", "Fuero especial en materia de seguros: domicilio del asegurado, a elección del demandante.", 24],
      ["Arts. 249.1 y 249.2", "Ámbito del juicio ordinario; cuantía superior a 15.000 euros.", 24],
      ["Art. 250.2", "Ámbito del juicio verbal; cuantía no superior a 15.000 euros.", 24],
      ["Art. 264.4.º", "Acreditación de la actividad negociadora previa (MASC) como documento a acompañar a la demanda.", 23],
      ["Art. 394", "Costas procesales; principio del vencimiento objetivo.", 24],
      ["Art. 399", "Contenido de la demanda; mención de la actividad negociadora previa.", 23],
      ["Art. 403", "Casos excepcionales de inadmisión de la demanda por falta de acreditación del MASC.", 23],
      ["Art. 576", "Intereses procesales, con las salvedades del art. 20 LCS.", 20],
    ]),

    ...norma("Ley de Enjuiciamiento Criminal (LECrim)", [
      ["Arts. 111 y 114", "Preferencia de la jurisdicción penal y su incidencia en el cómputo de la prescripción civil.", 22],
    ]),

    ...norma("Real Decreto Legislativo 1/2007, Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (TRLGDCU)", [
      ["Art. 80", "Requisitos de concreción, claridad, accesibilidad y legibilidad de las cláusulas no negociadas individualmente.", 25],
      ["Art. 82", "Concepto legal de cláusula abusiva.", 25],
      ["Art. 83", "Nulidad de pleno derecho de las cláusulas abusivas y subsistencia del contrato.", 25],
      ["Arts. 85 a 90", "Catálogo casuístico de cláusulas abusivas.", 25],
    ]),

    ...norma("Ley 7/1998, sobre Condiciones Generales de la Contratación (LCGC)", [
      ["Art. 5", "Requisitos de incorporación de las condiciones generales al contrato.", 5],
      ["Art. 7", "Supuestos de no incorporación: falta de oportunidad real de conocer la cláusula; cláusulas ilegibles u oscuras.", 5],
    ]),

    ...norma("Real Decreto-ley 3/2020, de distribución de seguros y reaseguros privados", [
      ["Art. 173", "Deberes de información precontractual del mediador de seguros.", 3],
      ["Art. 174", "Deberes de información precontractual de la aseguradora que distribuye directamente sus productos.", 3],
      ["Art. 175", "Test de exigencias y necesidades; deber de asesoramiento y recomendación personalizada.", 3],
    ]),

    ...norma("Ley 5/2019, reguladora de los Contratos de Crédito Inmobiliario", [
      ["Art. 17", "Prohibición general de venta vinculada y excepción para el seguro de daños del inmueble hipotecado; derecho a póliza alternativa.", 3],
    ]),

    ...norma("Ley 49/1960, de Propiedad Horizontal (LPH)", [
      ["Art. 9.1.f)", "Facultad de la comunidad de propietarios de suscribir un seguro con cargo al fondo de reserva.", 15],
      ["Art. 10", "Deber de conservación de los elementos comunes del edificio.", 8],
    ]),

    ...norma("Real Decreto Legislativo 7/2004, Texto Refundido del Estatuto Legal del Consorcio de Compensación de Seguros", [
      ["Art. 6", "Ámbito de los acontecimientos extraordinarios cubiertos por el Consorcio.", 10],
      ["Art. 8", "Presupuestos y límites de la obligación indemnizatoria del Consorcio.", 10],
    ]),

    ...norma("Ley Orgánica 1/2025, de medidas en materia de eficiencia del Servicio Público de Justicia", [
      ["Disposición general", "Introduce los medios adecuados de solución de controversias (MASC) como requisito de procedibilidad, modificando los arts. 264 y 403 LEC.", 23],
    ]),
  ];
}

module.exports = { anexoII };
