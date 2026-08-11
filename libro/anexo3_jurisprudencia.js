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
    B.p("Se relacionan, por orden cronológico, las treinta y seis resoluciones del Tribunal Supremo y de Audiencias Provinciales citadas y transcritas literalmente a lo largo de la obra, todas ellas verificadas contra la fuente oficial (CENDOJ) en la fecha de redacción del capítulo correspondiente. Para el texto completo de cada pasaje citado, véase la caja de «Jurisprudencia» del capítulo indicado. El capítulo 26 ofrece, además, una sistematización de esta misma jurisprudencia agrupada por líneas temáticas."),
    B.spacer(200),

    B.h2("A. Sentencias del Tribunal Supremo (Sala de lo Civil)"),
    ...ficha("STS", "14 de noviembre de 2002", "STS 7531/2002", "ES:TS:2002:7531", "Francisco Marín Castán", "Distinción entre infraseguro y concurrencia de seguros; incomunicabilidad de pólizas distintas.", 19),
    ...ficha("STS", "7 de julio de 2006", "STS 5884/2006", "ES:TS:2006:5884", "Juan Antonio Xiol Ríos", "La intencionalidad excluyente de cobertura se predica del resultado dañoso, no de cualquier conducta previa arriesgada.", 21),
    ...ficha("STS", "7 de febrero de 2007", "STS 696/2007", "ES:TS:2007:696", "Francisco Marín Castán", "Distribución de seguros: independencia funcional del corredor frente al agente.", 3),
    ...ficha("STS", "31 de octubre de 2007", "STS 6939/2007", "ES:TS:2007:6939", "Román García Varela", "Riesgos extraordinarios: corresponde a los tribunales, y no a la Administración, interpretar el concepto jurídico indeterminado de inundación.", 10),
    ...ficha("STS", "17 de julio de 2012", "STS 5990/2012", "ES:TS:2012:5990", "Francisco Javier Arroyo Fiestas", "Carga de la prueba del dolo o la culpa grave y de su nexo causal con el siniestro, a cargo del asegurador.", 21),
    ...ficha("STS (Pleno)", "14 de julio de 2015", "STS 3754/2015", "ES:TS:2015:3754", "Sebastián Sastre Papiol", "Compendio de los requisitos formales del art. 3 LCS: destacado en condiciones particulares, ausencia de abigarramiento y firma del tomador.", 5),
    ...ficha("STS", "16 de marzo de 2016", "STS 1208/2016", "ES:TS:2016:1208", "Francisco Javier Orduña Moreno", "El art. 10 LCS impone un deber de contestación al cuestionario, no de declaración espontánea.", 4),
    ...ficha("STS", "3 de junio de 2016", "STS 2550/2016", "ES:TS:2016:2550", "Pedro José Vela Torres", "El control de transparencia cualificada/abusividad queda reservado a los adherentes consumidores.", 25),
    ...ficha("STS", "14 de septiembre de 2016", "STS 4056/2016", "ES:TS:2016:4056", "Eduardo Baena Ruiz", "La impugnación del dictamen pericial del art. 38 LCS debe ser expresa y dentro de plazo.", 18),
    ...ficha("STS", "2 de marzo de 2017", "STS 732/2017", "ES:TS:2017:732", "Francisco Javier Orduña Moreno", "Principio de transparencia y cláusulas introductorias con «insólito plus» restrictivo.", 1),
    ...ficha("STS", "12 de diciembre de 2019", "STS 3943/2019", "ES:TS:2019:3943", "José Luis Seoane Spiegelberg", "Aplicación del criterio funcional: la cláusula que no se aparta del contenido natural del ramo ni frustra expectativas razonables es delimitadora.", 1),
    ...ficha("STS", "6 de julio de 2020", "STS 2233/2020", "ES:TS:2020:2233", "José Luis Seoane Spiegelberg", "Cláusula de valoración por «valor real» en el seguro multirriesgo de hogar, limitativa e inoponible.", 1),
    ...ficha("STS", "24 de febrero de 2021", "STS 584/2021", "ES:TS:2021:584", "María de los Ángeles Parra Lucán", "Límite cuantitativo insuficiente en la cobertura de defensa jurídica: limitativo o lesivo.", 14),
    ...ficha("STS", "22 de marzo de 2021", "STS 1081/2021", "ES:TS:2021:1081", "Francisco Javier Arroyo Fiestas", "Multirriesgo familia-hogar: el umbral de «lluvia anormal» de 40 litros por metro cuadrado y hora es cláusula limitativa inoponible si no se destaca ni se acepta expresamente.", 10),
    ...ficha("STS", "21 de julio de 2021", "STS 3162/2021", "ES:TS:2021:3162", "José Luis Seoane Spiegelberg", "Acción subrogatoria del seguro de comunidad: el comunero es asegurado, y no tercero, si la póliza así lo prevé.", 15),
    ...ficha("STS", "26 de julio de 2021", "STS 3193/2021", "ES:TS:2021:3193", "José Luis Seoane Spiegelberg", "El dictamen pericial del art. 38 LCS solo vincula en la liquidación del daño, no en la cobertura.", 18),
    ...ficha("STS", "13 de diciembre de 2021", "STS 4579/2021", "ES:TS:2021:4579", "María de los Ángeles Parra Lucán", "Regla general: el comunero es tercero responsable, no asegurado, a efectos de la acción subrogatoria del art. 43 LCS.", 15),
    ...ficha("STS", "15 de febrero de 2022", "STS 517/2022", "ES:TS:2022:517", "José Luis Seoane Spiegelberg", "Cómputo autónomo del plazo de prescripción del art. 23 LCS frente a un proceso penal paralelo.", 22),
    ...ficha("STS", "5 de julio de 2022", "STS 2904/2022", "ES:TS:2022:2904", "Pedro José Vela Torres", "Confirma y sistematiza la regla general de la acción subrogatoria contra el comunero causante del incendio.", 15),
    ...ficha("STS", "1 de marzo de 2023", "STS 671/2023", "ES:TS:2023:671", "José Luis Seoane Spiegelberg", "El interés asegurable se acredita con la titularidad dominical del bien asegurado.", 2),
    ...ficha("STS", "24 de abril de 2023", "STS 1701/2023", "ES:TS:2023:1701", "José Luis Seoane Spiegelberg", "Falta de entrega de condiciones generales e interpretación contra proferentem.", 5),
    ...ficha("STS", "20 de abril de 2023", "STS 1544/2023", "ES:TS:2023:1544", "Pedro José Vela Torres", "Inoponibilidad al tercero perjudicado de la mala fe del asegurado (acción directa, art. 76 LCS).", 13),
    ...ficha("STS", "27 de septiembre de 2023", "STS 3983/2023", "ES:TS:2023:3983", "José Luis Seoane Spiegelberg", "La pendencia de un proceso judicial no es, por sí sola, causa justificada de exoneración de intereses.", 20),
    ...ficha("STS", "3 de octubre de 2023", "STS 3996/2023", "ES:TS:2023:3996", "José Luis Seoane Spiegelberg", "Síntesis de la doctrina sobre cláusulas delimitadoras y limitativas del art. 3 LCS.", 1),
    ...ficha("STS", "30 de enero de 2025", "STS 442/2025", "ES:TS:2025:442", "Pedro José Vela Torres", "El procedimiento del art. 38 LCS solo es obligatorio si el siniestro fue aceptado y la discrepancia se limita a la valoración; los peritos no deciden sobre cobertura.", 18),
    ...ficha("STS", "25 de marzo de 2025", "STS 1227/2025", "ES:TS:2025:1227", "Pedro José Vela Torres", "Concurrencia de seguros entre propietario-arrendador y arrendatario: exige identidad de interés.", 8),
    ...ficha("STS", "21 de abril de 2025", "STS 1751/2025", "ES:TS:2025:1751", "Antonio García Martínez", "Reitera el criterio de la cláusula sorpresiva como indicio de limitatividad.", 1),
    ...ficha("STS", "15 de julio de 2026", "STS 3443/2026", "ES:TS:2026:3443", "Manuel Almenar Belenguer", "Alcance de la «malquerencia de extraños» del art. 48 LCS: excluye a quien tiene vinculación con el asegurado.", 7),

    B.h2("B. Sentencias de Audiencias Provinciales"),
    ...ficha("SAP Barcelona (Sección 16.ª)", "11 de enero de 2017", "SAP B 5946/2017", "ES:APB:2017:5946", "María Teresa Martín de la Sierra García-Fogeda", "La negligencia grave del art. 52.1.ª LCS exige abandono o precariedad en la custodia del bien.", 9),
    ...ficha("SAP Barcelona (Sección 1.ª)", "29 de junio de 2018", "SAP B 6782/2018", "ES:APB:2018:6782", "Federico Holgado Madruga", "La exclusión por falta de mantenimiento decae si el daño obedece a un defecto constructivo de origen.", 8),
    ...ficha("SAP Alicante (Sección 5.ª)", "12 de mayo de 2020", "SAP A 614/2020", "ES:APA:2020:614", "Edmundo Tomás García Ruiz", "Criterio de reposición uniforme para el daño estético cuando no existen materiales idénticos en el mercado.", 12),
    ...ficha("SAP Valencia (Sección 5.ª)", "30 de junio de 2021", "SAP V 2845/2021", "ES:APV:2021:2845", "Pedro Luis Viguer Soler", "La exclusión por falta de mantenimiento, clara y destacada, es delimitadora y no sorpresiva.", 8),
    ...ficha("SAP Jaén (Sección 1.ª)", "15 de septiembre de 2021", "SAP J 1184/2021", "ES:APJ:2021:1184", "Antonio Carrascosa González", "Distinción entre la defensa jurídica propia (activa o pasiva) y la dirección jurídica accesoria a la RC (solo pasiva).", 14),
    ...ficha("SAP Valencia (Sección 9.ª)", "10 de julio de 2024", "SAP V 1777/2024", "ES:APV:2024:1777", "María del Carmen Escrig Orenga", "Consorcio: la saturación de la red pública por volumen de lluvia es inundación; probado el anegamiento, corresponde al Consorcio acreditar la causa de exclusión.", 10),
    ...ficha("SAP Bizkaia (Sección 4.ª)", "15 de septiembre de 2025", "SAP BI 2048/2025", "ES:APBI:2025:2048", "Edmundo Rodríguez Achútegui", "El perito del art. 38 LCS carece de competencia para interpretar el alcance de la cobertura: el dictamen que lo hace incurre en exceso de función.", 18),
    ...ficha("SAP Barcelona (Sección 4.ª)", "25 de marzo de 2026", "SAP B 2713/2026", "ES:APB:2026:2713", "Fernando Carlos de Valdivia González", "Consorcio absuelto cuando la pericial atribuye la causa eficiente a actuaciones urbanísticas y defectos constructivos, y no a un fenómeno extraordinario.", 10),

    B.h2("C. Precedentes citados de segunda mano"),
    B.p("Las resoluciones anteriores citan, a su vez, otros precedentes de la propia Sala Primera que se reproducen entre comillas dentro de los pasajes transcritos, pero que no han sido objeto de verificación independiente contra su ROJ y ECLI propios en esta obra (por ejemplo, la STS del Pleno 853/2006, de 11 de septiembre, sobre cláusulas delimitadoras y limitativas, o las SSTS 273/2016, 541/2016, 147/2017, 58/2019, 87/2021, 498/2016 y 31/2020, citadas dentro de los pasajes reproducidos en los capítulos 1, 4 y 5). La STS 661/2019, de 12 de diciembre, que figuraba en ediciones anteriores de este anexo entre los precedentes de segunda mano, ha sido localizada y verificada de forma independiente y consta ya en el apartado A con su ROJ y ECLI propios. A las citas de segunda mano se añaden ahora las SSTS 63/2008, de 28 de enero, y 575/2021, de 26 de julio, sobre los límites del procedimiento pericial, citadas dentro de los pasajes reproducidos en el capítulo 18. A esta relación se añaden, tras la verificación de la STS 3754/2015 (Pleno), las SSTS de 1 de octubre de 2010 (RC 2273/2006), de 19 de julio de 2012 (RC 878/2010), de 15 de julio de 2008 (RC 1839/2001), de 17 de octubre de 2007 (RC 3398/2000) y de 22 de diciembre de 2008 (RC 1555/2003), citadas en el fundamento jurídico de dicha sentencia y reseñadas en el capítulo 5 únicamente por referencia a ella; y, tras la verificación de la STS 3162/2021, las SSTS 273/2012, de 3 de mayo, 432/2013, de 12 de junio, y 699/2013, de 19 de noviembre, sobre los presupuestos de la acción subrogatoria del art. 43 LCS, citadas en el capítulo 15 por referencia a la sentencia verificada que las reproduce. Se consignan por su número y fecha tal como aparecen citadas en la resolución verificada que las menciona, y su cita debe contrastarse de forma independiente antes de su empleo autónomo en un escrito profesional."),

    B.h2("Bibliografía citada"),
    B.p("Todas las resoluciones de este anexo son de acceso público y verificable en el Centro de Documentación Judicial (CENDOJ) del Consejo General del Poder Judicial, mediante su ROJ o su ECLI."),
  ];
}

module.exports = { anexoIII };
