const B = require("./build");

function entrada(texto) {
  return new B.Paragraph({
    spacing: { after: 160, line: 300 },
    alignment: B.AlignmentType.JUSTIFIED,
    indent: { left: 400, hanging: 400 },
    children: [new B.TextRun({ text: texto, font: "Archivo", size: 21 })],
  });
}

function anexoVI() {
  return [
    new B.Paragraph({
      heading: B.HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 300 },
      children: [new B.TextRun({ text: "Anexo VI. Bibliografía general", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })],
    }),
    B.p("Se recoge, ordenada alfabéticamente por autor, la bibliografía doctrinal citada a lo largo de la obra: tratados y comentarios de referencia sobre el contrato de seguro, y artículos de revista y tesis doctorales que abordan monográficamente algunas de las cuestiones más discutidas del seguro de hogar. Los tratados y comentarios se citan, conforme a la práctica habitual en este tipo de obras, por su estructura de comentario «ad artículo», sin pretensión de indicar una paginación o edición concretas; los artículos de revista y la tesis doctoral, verificados de forma independiente a través de su repertorio bibliográfico de origen (Dialnet, y en su caso el Boletín del Ministerio de Justicia), se citan con su referencia completa."),
    B.spacer(160),
    B.box("Advertencia metodológica", B.AZUL, [B.p("Todas las citas legales y jurisprudenciales de esta obra han sido verificadas contra fuente oficial (BOE consolidado y CENDOJ, respectivamente). Las citas doctrinales de tratados y comentarios generales se ofrecen por autor, título y editorial, verificables como obras reales y de referencia en la materia, pero sin pinpoint de página por no disponer de una base de datos bibliográfica que permita verificar la edición exacta manejada. Los artículos de revista y la tesis doctoral que se añaden en esta edición sí han sido localizados y verificados de forma independiente, con indicación de su referencia completa (autor, título, revista, número y año, o universidad y director en el caso de la tesis).")]),
    B.spacer(240),

    B.h2("Tratados, manuales y comentarios"),
    entrada("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
    entrada("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    entrada("TIRADO SUÁREZ, F. J., en URÍA, R.; MENÉNDEZ, A.; OLIVENCIA, M. (dirs.), Comentarios al Código de Comercio y legislación mercantil especial, tomo XXIV, vol. 1.º, Edersa/Civitas, Madrid."),
    entrada("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
    entrada("VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, Civitas-Thomson Reuters, Cizur Menor."),

    B.spacer(160),
    B.h2("Tesis doctorales"),
    entrada("LARRAYA RUIZ, L. J., Las cláusulas limitativas de los derechos de los asegurados: (artículo 3.1 de la Ley 50/1980, de contrato de seguro), tesis doctoral dirigida por V. San Julián Puig, Universidad de Navarra, Pamplona, 2001."),

    B.spacer(160),
    B.h2("Artículos de revista"),
    entrada("GARCÍA PALACIOS, N., «La concurrencia de seguros en los ramos de multirriesgos», Revista de la Asociación Española de Abogados Especializados en Responsabilidad Civil y Seguro, núm. 43, 2012."),
    entrada("JIMÉNEZ BAUTISTA, S., «Los intereses de mora de las aseguradoras, artículo 20 de la Ley del Contrato de Seguro: examen especial de la consignación», Boletín del Ministerio de Justicia, vol. 57, núm. 1942, 2003, pp. 1773-1800."),
    entrada("MIRANDA SERRANO, L. M., «Cláusulas limitativas y sorprendentes en contratos de seguro: protección de las expectativas y el consentimiento de los asegurados», Revista Crítica de Derecho Inmobiliario, núm. 761, 2017."),
    entrada("MIRANDA SERRANO, L. M., «La protección del asegurado en la ley de contrato de seguro: el art. 3 LCS cuarenta años después», Revista Española de Seguros, núm. 189-190, 2022 (ejemplar monográfico del IV Congreso Nacional de SEAIDA, «El contrato de seguro: digitalización, transparencia y protección del asegurado»)."),

    B.spacer(160),
    B.h2("Publicaciones periódicas"),
    entrada("Revista Española de Seguros: Publicación doctrinal de Derecho y Economía de los Seguros Privados, Sección Española de la Asociación Internacional de Derecho de Seguros (SEAIDA), Madrid."),

    B.spacer(240),
    B.h2("Líneas de ampliación bibliográfica pendientes"),
    B.p("Para una eventual edición ampliada de esta obra, quedan identificadas como líneas de investigación bibliográfica adicional, no incorporadas en la presente edición por no haberse podido verificar con el mismo grado de detalle: la producción doctrinal específica sobre el seguro de robo y el umbral de la negligencia grave; los estudios monográficos sobre el seguro de defensa jurídica más allá de los ya citados en el capítulo 14; y la bibliografía comparada sobre la reasonable expectations doctrine anglosajona en su proyección sobre el derecho español de seguros, apuntada en el capítulo 1."),
  ];
}

module.exports = { anexoVI };
