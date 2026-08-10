const B = require("./build");

function ficha(tribunal, fecha, roj, ecli, ponente, materia, capitulo) {
  return [
    B.box(`${tribunal}, de ${fecha}`, B.AZUL, [
      new B.Paragraph({ spacing: { after: 60 }, children: [
        new B.TextRun({ text: "ROJ: ", bold: true, size: 19, font: "Archivo" }),
        new B.TextRun({ text: roj + "    ", size: 19, font: "Archivo" }),
        new B.TextRun({ text: "ECLI: ", bold: true, size: 19, font: "Archivo" }),
        new B.TextRun({ text: ecli, size: 19, font: "Archivo" }),
      ]}),
      new B.Paragraph({ spacing: { after: 60 }, children: [
        new B.TextRun({ text: "Ponente: ", bold: true, size: 19, font: "Archivo" }),
        new B.TextRun({ text: ponente, size: 19, font: "Archivo" }),
      ]}),
      new B.Paragraph({ spacing: { after: 60 }, children: [
        new B.TextRun({ text: "Materia: ", bold: true, size: 19, font: "Archivo" }),
        new B.TextRun({ text: materia, size: 19, font: "Archivo" }),
      ]}),
      new B.Paragraph({ spacing: { after: 0 }, children: [
        new B.TextRun({ text: "Desarrollada en: ", bold: true, size: 19, font: "Archivo" }),
        new B.TextRun({ text: `capítulo ${capitulo}`, size: 19, font: "Archivo" }),
      ]}),
    ]),
    B.spacer(160),
  ];
}

function anexoIII() {
  return [
    new B.Paragraph({
      heading: B.HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 300 },
      children: [new B.TextRun({ text: "Anexo III. Índice de jurisprudencia citada", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })],
    }),
    B.p("Se relacionan, por orden cronológico, las veinticuatro resoluciones del Tribunal Supremo y de Audiencias Provinciales citadas y transcritas literalmente a lo largo de la obra, todas ellas verificadas contra la fuente oficial (CENDOJ) en la fecha de redacción del capítulo correspondiente. Para el texto completo de cada pasaje citado, véase la caja de «Jurisprudencia» del capítulo indicado. El capítulo 26 ofrece, además, una sistematización de esta misma jurisprudencia agrupada por líneas temáticas."),
    B.spacer(200),

    B.h2("A. Sentencias del Tribunal Supremo (Sala de lo Civil)"),
    ...ficha("STS", "14 de noviembre de 2002", "STS 7531/2002", "ES:TS:2002:7531", "Francisco Marín Castán", "Distinción entre infraseguro y concurrencia de seguros; incomunicabilidad de pólizas distintas.", 19),
    ...ficha("STS", "7 de febrero de 2007", "STS 696/2007", "ES:TS:2007:696", "Francisco Marín Castán", "Distribución de seguros: independencia funcional del corredor frente al agente.", 3),
    ...ficha("STS", "17 de julio de 2012", "STS 5990/2012", "ES:TS:2012:5990", "Francisco Javier Arroyo Fiestas", "Carga de la prueba del dolo o la culpa grave y de su nexo causal con el siniestro, a cargo del asegurador.", 21),
    ...ficha("STS", "16 de marzo de 2016", "STS 1208/2016", "ES:TS:2016:1208", "Francisco Javier Orduña Moreno", "El art. 10 LCS impone un deber de contestación al cuestionario, no de declaración espontánea.", 4),
    ...ficha("STS", "3 de junio de 2016", "STS 2550/2016", "ES:TS:2016:2550", "Pedro José Vela Torres", "El control de transparencia cualificada/abusividad queda reservado a los adherentes consumidores.", 25),
    ...ficha("STS", "14 de septiembre de 2016", "STS 4056/2016", "ES:TS:2016:4056", "Eduardo Baena Ruiz", "La impugnación del dictamen pericial del art. 38 LCS debe ser expresa y dentro de plazo.", 18),
    ...ficha("STS", "2 de marzo de 2017", "STS 732/2017", "ES:TS:2017:732", "Francisco Javier Orduña Moreno", "Principio de transparencia y cláusulas introductorias con «insólito plus» restrictivo.", 1),
    ...ficha("STS", "6 de julio de 2020", "STS 2233/2020", "ES:TS:2020:2233", "José Luis Seoane Spiegelberg", "Cláusula de valoración por «valor real» en el seguro multirriesgo de hogar, limitativa e inoponible.", 1),
    ...ficha("STS", "24 de febrero de 2021", "STS 584/2021", "ES:TS:2021:584", "María de los Ángeles Parra Lucán", "Límite cuantitativo insuficiente en la cobertura de defensa jurídica: limitativo o lesivo.", 14),
    ...ficha("STS", "26 de julio de 2021", "STS 3193/2021", "ES:TS:2021:3193", "José Luis Seoane Spiegelberg", "El dictamen pericial del art. 38 LCS solo vincula en la liquidación del daño, no en la cobertura.", 18),
    ...ficha("STS", "15 de febrero de 2022", "STS 517/2022", "ES:TS:2022:517", "José Luis Seoane Spiegelberg", "Cómputo autónomo del plazo de prescripción del art. 23 LCS frente a un proceso penal paralelo.", 22),
    ...ficha("STS", "1 de marzo de 2023", "STS 671/2023", "ES:TS:2023:671", "José Luis Seoane Spiegelberg", "El interés asegurable se acredita con la titularidad dominical del bien asegurado.", 2),
    ...ficha("STS", "24 de abril de 2023", "STS 1701/2023", "ES:TS:2023:1701", "José Luis Seoane Spiegelberg", "Falta de entrega de condiciones generales e interpretación contra proferentem.", 5),
    ...ficha("STS", "20 de abril de 2023", "STS 1544/2023", "ES:TS:2023:1544", "Pedro José Vela Torres", "Inoponibilidad al tercero perjudicado de la mala fe del asegurado (acción directa, art. 76 LCS).", 13),
    ...ficha("STS", "27 de septiembre de 2023", "STS 3983/2023", "ES:TS:2023:3983", "José Luis Seoane Spiegelberg", "La pendencia de un proceso judicial no es, por sí sola, causa justificada de exoneración de intereses.", 20),
    ...ficha("STS", "3 de octubre de 2023", "STS 3996/2023", "ES:TS:2023:3996", "José Luis Seoane Spiegelberg", "Síntesis de la doctrina sobre cláusulas delimitadoras y limitativas del art. 3 LCS.", 1),
    ...ficha("STS", "25 de marzo de 2025", "STS 1227/2025", "ES:TS:2025:1227", "Pedro José Vela Torres", "Concurrencia de seguros entre propietario-arrendador y arrendatario: exige identidad de interés.", 8),
    ...ficha("STS", "21 de abril de 2025", "STS 1751/2025", "ES:TS:2025:1751", "Antonio García Martínez", "Reitera el criterio de la cláusula sorpresiva como indicio de limitatividad.", 1),
    ...ficha("STS", "15 de julio de 2026", "STS 3443/2026", "ES:TS:2026:3443", "Manuel Almenar Belenguer", "Alcance de la «malquerencia de extraños» del art. 48 LCS: excluye a quien tiene vinculación con el asegurado.", 7),

    B.h2("B. Sentencias de Audiencias Provinciales"),
    ...ficha("SAP Barcelona (Sección 16.ª)", "11 de enero de 2017", "SAP B 5946/2017", "ES:APB:2017:5946", "María Teresa Martín de la Sierra García-Fogeda", "La negligencia grave del art. 52.1.ª LCS exige abandono o precariedad en la custodia del bien.", 9),
    ...ficha("SAP Barcelona (Sección 1.ª)", "29 de junio de 2018", "SAP B 6782/2018", "ES:APB:2018:6782", "Federico Holgado Madruga", "La exclusión por falta de mantenimiento decae si el daño obedece a un defecto constructivo de origen.", 8),
    ...ficha("SAP Alicante (Sección 5.ª)", "12 de mayo de 2020", "SAP A 614/2020", "ES:APA:2020:614", "Edmundo Tomás García Ruiz", "Criterio de reposición uniforme para el daño estético cuando no existen materiales idénticos en el mercado.", 12),
    ...ficha("SAP Valencia (Sección 5.ª)", "30 de junio de 2021", "SAP V 2845/2021", "ES:APV:2021:2845", "Pedro Luis Viguer Soler", "La exclusión por falta de mantenimiento, clara y destacada, es delimitadora y no sorpresiva.", 8),
    ...ficha("SAP Jaén (Sección 1.ª)", "15 de septiembre de 2021", "SAP J 1184/2021", "ES:APJ:2021:1184", "Antonio Carrascosa González", "Distinción entre la defensa jurídica propia (activa o pasiva) y la dirección jurídica accesoria a la RC (solo pasiva).", 14),

    B.h2("C. Precedentes citados de segunda mano"),
    B.p("Las resoluciones anteriores citan, a su vez, otros precedentes de la propia Sala Primera que se reproducen entre comillas dentro de los pasajes transcritos, pero que no han sido objeto de verificación independiente contra su ROJ y ECLI propios en esta obra (por ejemplo, la STS del Pleno 853/2006, de 11 de septiembre, sobre cláusulas delimitadoras y limitativas, o las SSTS 273/2016, 541/2016, 147/2017, 58/2019, 661/2019, 87/2021, 498/2016 y 31/2020, citadas dentro de los pasajes reproducidos en los capítulos 1, 4 y 5). Se consignan por su número y fecha tal como aparecen citadas en la resolución verificada que las menciona, y su cita debe contrastarse de forma independiente antes de su empleo autónomo en un escrito profesional."),

    B.h2("Bibliografía citada"),
    B.p("Todas las resoluciones de este anexo son de acceso público y verificable en el Centro de Documentación Judicial (CENDOJ) del Consejo General del Poder Judicial, mediante su ROJ o su ECLI."),
  ];
}

module.exports = { anexoIII };
