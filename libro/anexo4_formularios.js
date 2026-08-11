const B = require("./build");

function modeloHeading(numero, titulo, descripcion) {
  return [
    B.h2(`Modelo ${numero}. ${titulo}`),
    B.p([B.italic(descripcion)]),
    B.spacer(120),
  ];
}

function documentoBox(paragraphs) {
  return new (require("docx").Table)({
    width: { size: 100, type: require("docx").WidthType.PERCENTAGE },
    borders: {
      top: { style: require("docx").BorderStyle.SINGLE, size: 4, color: B.BORDE },
      bottom: { style: require("docx").BorderStyle.SINGLE, size: 4, color: B.BORDE },
      left: { style: require("docx").BorderStyle.SINGLE, size: 4, color: B.BORDE },
      right: { style: require("docx").BorderStyle.SINGLE, size: 4, color: B.BORDE },
    },
    rows: [
      new (require("docx").TableRow)({
        children: [
          new (require("docx").TableCell)({
            margins: { top: 260, bottom: 260, left: 320, right: 320 },
            children: paragraphs,
          }),
        ],
      }),
    ],
  });
}

function anexoIV() {
  const D = require("docx");
  return [
    new D.Paragraph({
      heading: D.HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 300 },
      children: [new D.TextRun({ text: "Anexo IV. Modelos y formularios", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })],
    }),
    B.p("Se recogen a continuación ocho modelos de escritos de uso frecuente en la práctica del seguro de hogar, ordenados según la secuencia habitual de una reclamación: de la vía extrajudicial (burofax de reclamación previa, acreditación del intento de negociación MASC, escrito ante el Servicio de Atención al Cliente, escrito de designación e impugnación pericial) a la vía judicial (demanda de juicio verbal, contestación a la demanda y reclamación de intereses del art. 20 LCS) y a la vía administrativa de supervisión (queja ante la DGSFP)."),
    B.p(["Los modelos se ofrecen como plantilla de trabajo y no como escrito cerrado: los datos entre corchetes deben sustituirse por los del caso concreto, y los fundamentos jurídicos deben completarse y adaptarse a las circunstancias fácticas y a la póliza efectivamente contratada. Los preceptos legales citados en cada modelo se corresponden con el texto consolidado vigente en la fecha de cierre de este anexo. Cada modelo remite, entre paréntesis, al capítulo de la obra donde se desarrolla con detalle su fundamento jurídico."]),
    B.spacer(200),

    // ============ MODELO 1 ============
    ...modeloHeading(1, "Burofax de reclamación previa a la aseguradora",
      "Escrito extrajudicial dirigido a la aseguradora para reclamar el pago de la indemnización, dejar constancia fehaciente de la reclamación e interrumpir el plazo de prescripción de dos años del art. 23 LCS, conforme al art. 1973 CC (capítulo 22). Es, además, presupuesto habitual —y, desde la Ley Orgánica 1/2025, elemento acreditativo de la actividad negociadora previa exigida como requisito de procedibilidad (capítulo 23, y Modelo 2 de este mismo anexo)— antes de acudir a la vía judicial."),
    documentoBox([
      B.formCenter("RECLAMACIÓN PREVIA DE INDEMNIZACIÓN DERIVADA DE CONTRATO DE SEGURO", { bold: true }),
      B.formField("Remite"),
      B.formField("Destinatario (aseguradora)"),
      B.formField("Referencia de póliza n.º"),
      B.formField("Referencia de siniestro / expediente n.º"),
      B.spacer(120),
      B.formPara("Muy Sres. míos:"),
      B.formPara(["Por medio de la presente, en mi condición de ", B.bold("[tomador / asegurado]"), " de la póliza de seguro multirriesgo de hogar arriba referenciada, suscrita con esa aseguradora con efectos desde el [fecha], me dirijo a Vds. para formular reclamación previa en relación con el siniestro ocurrido el día [fecha del siniestro], consistente en [breve descripción del siniestro: daños por agua / incendio / robo / responsabilidad civil], y que fue comunicado a esa compañía el día [fecha de comunicación] mediante [parte de siniestro / llamada telefónica / correo electrónico], quedando registrado con el número de expediente arriba indicado."], { indent: true }),
      B.formPara("PRIMERO.- Que, pese al tiempo transcurrido desde la comunicación del siniestro, esa aseguradora [no ha emitido pronunciamiento alguno sobre la cobertura / ha denegado la cobertura mediante comunicación de fecha (...) por el motivo de (...) / ha ofrecido una indemnización que se considera insuficiente por importe de (...) euros, frente a los daños reales tasados en (...) euros].", { indent: true }),
      B.formPara("SEGUNDO.- Que, de conformidad con el art. 1 de la Ley 50/1980, de Contrato de Seguro, la aseguradora se obliga, mediante el cobro de la prima, a indemnizar el daño producido al asegurado dentro de los límites pactados en la póliza, sin que conste causa de exclusión de cobertura aplicable al presente siniestro conforme a las condiciones generales y particulares suscritas.", { indent: true }),
      B.formPara("TERCERO.- Que, conforme al art. 20 LCS, la aseguradora incurre en mora si no satisface la indemnización, o el importe mínimo de lo que pueda deber, en los plazos legalmente establecidos, lo que determina el devengo de los intereses moratorios previstos en dicho precepto desde la fecha del siniestro.", { indent: true }),
      B.formPara("Por todo lo expuesto, formalmente:", { indent: true }),
      B.formPara("REQUIERO a esa aseguradora para que, en el plazo de DIEZ (10) DÍAS naturales desde la recepción de la presente, proceda al abono de la indemnización que corresponda por el siniestro referenciado, por importe de [cantidad] euros, más los intereses del art. 20 LCS que resulten de aplicación, con la advertencia de que, transcurrido dicho plazo sin haber obtenido respuesta satisfactoria, me veré obligado a ejercitar las acciones legales que en Derecho me asisten, con expresa reserva de acciones y sin perjuicio de cuantos daños y perjuicios adicionales se deriven de la demora.", { indent: true }),
      B.formPara("Esta comunicación se realiza, además, a los efectos previstos en el art. 1973 del Código Civil, en orden a la interrupción del plazo de prescripción de la acción derivada del contrato de seguro (art. 23 LCS).", { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
      B.spacer(400),
      B.formCenter("Fdo.: [nombre y apellidos / DNI]", { after: 0 }),
    ]),

    // ============ MODELO 2 ============
    ...modeloHeading(2, "Escrito de acreditación de la actividad negociadora previa (MASC)",
      "Declaración que documenta el intento de negociación previa a la vía judicial, exigido como requisito de procedibilidad por la Ley Orgánica 1/2025 y por los arts. 264.4.º y 403.2 LEC (capítulo 23). En la práctica del seguro de hogar, el propio burofax de reclamación previa (Modelo 1) y, en su caso, la reclamación ante el SAC (Modelo 3), constituyen ya esa actividad negociadora; este escrito recopila y certifica dicha actuación para su acompañamiento a la demanda, evitando el riesgo de inadmisión del art. 403.2 LEC."),
    documentoBox([
      B.formCenter("ACREDITACIÓN DE LA ACTIVIDAD NEGOCIADORA PREVIA A LA VÍA JUDICIAL", { bold: true }),
      B.formField("Reclamante"),
      B.formField("Entidad aseguradora"),
      B.formField("Póliza n.º / Siniestro n.º"),
      B.spacer(120),
      B.formPara("De conformidad con el art. 399.3, párrafo segundo, y el art. 264.4.º de la Ley de Enjuiciamiento Civil, en su redacción dada por la Ley Orgánica 1/2025, de 2 de enero, de medidas en materia de eficiencia del Servicio Público de Justicia, se hace constar que, con carácter previo al ejercicio de la acción judicial, se ha intentado la actividad negociadora con la entidad aseguradora arriba referenciada, mediante las siguientes actuaciones:", { indent: true }),
      B.formPara("PRIMERA.- Burofax de reclamación previa remitido con fecha [fecha], con acuse de recibo de fecha [fecha] (Documento n.º 1), en el que se cuantificó la indemnización reclamada y se requirió su pago en el plazo de diez días.", { indent: true }),
      B.formPara("SEGUNDA.- [En su caso] Reclamación presentada ante el Servicio de Atención al Cliente de la entidad con fecha [fecha], con número de expediente [ ] (Documento n.º 2).", { indent: true }),
      B.formPara("TERCERA.- Respuesta de la aseguradora de fecha [fecha], por la que [deniega la cobertura / ofrece una indemnización insuficiente de (...) euros / no da respuesta alguna, pese al tiempo transcurrido] (Documento n.º 3).", { indent: true }),
      B.formPara("En consecuencia, se deja constancia de que la actividad negociadora previa exigida como requisito de procedibilidad se ha intentado de buena fe, sin haberse alcanzado acuerdo, lo que habilita el ejercicio de la acción judicial correspondiente conforme al art. 403.2 LEC.", { indent: true }),
      B.formPara(["Alternativa (imposibilidad de negociación): "], { indent: false }),
      B.formPara("Se hace constar, mediante declaración responsable, la imposibilidad de llevar a cabo la actividad negociadora previa por [desconocerse el domicilio de la aseguradora a efectos de requerimiento / concurrir riesgo de pérdida del derecho por el transcurso del plazo de prescripción sin margen para la negociación / otra causa justificada], conforme habilita el propio art. 264.4.º LEC.", { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
      B.spacer(400),
      B.formCenter("Fdo.: [nombre y apellidos / DNI, o abogado/a con número de colegiado/a]", { after: 0 }),
    ]),

    // ============ MODELO 3 ============
    ...modeloHeading(3, "Reclamación ante el Servicio de Atención al Cliente y el Defensor del Asegurado",
      "Escrito con el que se agota la vía interna de reclamación de la aseguradora (art. 30 LOSSEAR y normativa de protección del cliente financiero), requisito habitual antes de acceder a la vía de reclamación ante la DGSFP (Modelo 8 de este anexo) y elemento de prueba de la diligencia del reclamante (capítulo 23)."),
    documentoBox([
      B.formCenter("RECLAMACIÓN ANTE EL SERVICIO DE ATENCIÓN AL CLIENTE / DEFENSOR DEL ASEGURADO", { bold: true }),
      B.formField("Reclamante"),
      B.formField("Entidad aseguradora"),
      B.formField("Póliza n.º / Siniestro n.º"),
      B.spacer(120),
      B.formPara("EXPONE:", { indent: false }),
      B.formPara("PRIMERO.- Que es tomador/asegurado de la póliza arriba referenciada y que con fecha [fecha] sufrió el siniestro consistente en [descripción], comunicado a la compañía el [fecha].", { indent: true }),
      B.formPara("SEGUNDO.- Que no está conforme con [la denegación de cobertura / la valoración pericial practicada / el importe ofrecido / la demora en la resolución del expediente], por los motivos que se exponen a continuación: [desarrollo de los motivos de disconformidad, con referencia a las condiciones de la póliza y, en su caso, a la normativa aplicable].", { indent: true }),
      B.formPara("TERCERO.- Que se acompañan como documentos justificativos de la presente reclamación: (i) copia de la póliza y condiciones generales y particulares; (ii) parte de comunicación del siniestro; (iii) informe pericial de parte, en su caso; (iv) reclamación previa remitida a la aseguradora y, en su caso, respuesta recibida; (v) [otros documentos relevantes].", { indent: true }),
      B.formPara("SOLICITA que, teniendo por presentado este escrito, se admita a trámite la presente reclamación, se dicte resolución motivada en el plazo máximo legalmente establecido y se acuerde [el reconocimiento de la cobertura / el abono de la indemnización solicitada por importe de (...) euros / la revisión del dictamen pericial], con expresa mención de que, de no obtener respuesta o de resultar esta desestimatoria, se acudirá a la Dirección General de Seguros y Fondos de Pensiones y, en su caso, a la vía judicial.", { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
      B.spacer(400),
      B.formCenter("Fdo.: [nombre y apellidos / DNI]", { after: 0 }),
    ]),

    // ============ MODELO 4 ============
    ...modeloHeading(4, "Designación de perito de parte e impugnación del dictamen pericial (art. 38 LCS)",
      "Escrito dirigido a la aseguradora para (a) designar perito de parte al inicio del procedimiento de peritación del art. 38 LCS, o (b) impugnar judicialmente el dictamen pericial contradictorio dentro de los plazos del propio art. 38 LCS (treinta días para el asegurador, ciento ochenta para el asegurado, desde la notificación del dictamen). Véase el desarrollo doctrinal y jurisprudencial en el capítulo 18."),
    documentoBox([
      B.formCenter("DESIGNACIÓN DE PERITO DE PARTE / IMPUGNACIÓN DEL DICTAMEN PERICIAL", { bold: true }),
      B.formField("Remite"),
      B.formField("Destinatario (aseguradora)"),
      B.formField("Póliza n.º / Siniestro n.º"),
      B.spacer(120),
      B.formPara("A) Designación de perito de parte", { indent: false }),
      B.formPara("De conformidad con el art. 38 LCS, y no habiéndose alcanzado acuerdo sobre el importe y la forma de la indemnización correspondiente al siniestro referenciado, comunico a esa aseguradora la designación como perito de parte de D./D.ª [nombre, titulación y colegiación del perito], con domicilio profesional en [dirección] y datos de contacto [teléfono / correo electrónico], a los efectos de la práctica de la peritación contradictoria prevista en dicho precepto, requiriendo a esa compañía para que, en el plazo de ocho días desde la recepción de este escrito, comunique la identidad de su propio perito, con la advertencia legal de que, de no hacerlo, se entenderá que acepta el dictamen que emita el perito designado por esta parte, quedando vinculada por el mismo.", { indent: true }),
      B.spacer(160),
      B.formPara("B) Impugnación del dictamen pericial", { indent: false }),
      B.formPara(["Habiéndose notificado con fecha [fecha] el dictamen pericial emitido con [unanimidad / mayoría / por el tercer perito] en el expediente de referencia, y no estando conforme esta parte con su contenido por los motivos que se exponen [error en la valoración de los daños, causa del siniestro incorrectamente atribuida, aplicación indebida de la regla proporcional del art. 30 LCS, etc.], se comunica la impugnación del citado dictamen dentro del plazo legal establecido en el art. 38 LCS, quedando anunciado el ejercicio de las acciones judiciales correspondientes si no se alcanza acuerdo en el plazo de [plazo], sin perjuicio de la obligación de la aseguradora de abonar, entre tanto, el importe mínimo debido conforme al art. 18 LCS."], { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
      B.spacer(400),
      B.formCenter("Fdo.: [nombre y apellidos / DNI]", { after: 0 }),
    ]),

    // ============ MODELO 5 ============
    ...modeloHeading(5, "Demanda de juicio verbal reclamando indemnización derivada de contrato de seguro de hogar",
      "Modelo de demanda por reclamación de cantidad frente a la aseguradora por incumplimiento del contrato de seguro (denegación de cobertura o indemnización insuficiente) por daños por agua, para cuantías que no excedan de 15.000 euros, tramitable por los cauces del juicio verbal (art. 250.2 LEC). Para cuantías superiores, el mismo esquema es trasladable al juicio ordinario (art. 249.2 LEC), sustituyendo las referencias de trámite. Véase el capítulo 24 sobre competencia, procedimiento y costas."),
    documentoBox([
      B.formCenter("AL JUZGADO DE PRIMERA INSTANCIA DE [PARTIDO JUDICIAL] QUE POR TURNO CORRESPONDA", { bold: true, caps: false }),
      B.spacer(160),
      B.formPara(["D./D.ª [Procurador/a], Procurador/a de los Tribunales, en nombre y representación de D./D.ª [demandante], mayor de edad, con DNI n.º [ ] y domicilio a efectos de notificaciones en [dirección], representación que acredito mediante escritura de poder que acompaño como Documento n.º 1, y bajo la dirección letrada de D./D.ª [abogado/a], Colegiado/a n.º [ ] del Ilustre Colegio de la Abogacía de [ ], ante el Juzgado comparezco y, como mejor proceda en Derecho, DIGO:"], { indent: true }),
      B.formPara(["Que, por medio del presente escrito, formulo DEMANDA DE JUICIO VERBAL por reclamación de cantidad contra ", B.bold("[razón social de la aseguradora], "), "con NIF [ ] y domicilio social en [dirección], en su condición de aseguradora del contrato de seguro multirriesgo de hogar póliza n.º [ ], con base en los siguientes"], { indent: true }),
      B.formCenter("HECHOS", { bold: true }),
      B.formPara("PRIMERO.- Contrato de seguro. Mi mandante es tomador y asegurado de la póliza de seguro multirriesgo de hogar n.º [ ], suscrita con la demandada con efectos desde el [fecha], que cubre, entre otros riesgos, los daños por agua en la vivienda sita en [dirección], con una suma asegurada de continente de [ ] euros y de contenido de [ ] euros (Documento n.º 2: póliza, condiciones generales y particulares).", { indent: true }),
      B.formPara("SEGUNDO.- Siniestro. El día [fecha] se produjo en la vivienda asegurada un siniestro consistente en [descripción: rotura de la tubería de suministro de agua bajo el pavimento de la cocina, con filtración a la vivienda inferior y daños en solado, tabiquería y mobiliario], que fue comunicado a la demandada el día [fecha] (Documento n.º 3: parte de siniestro).", { indent: true }),
      B.formPara("TERCERO.- Peritación y valoración de los daños. Personado el perito designado por la demandada el día [fecha], se emitió informe pericial que cuantificó los daños en [ ] euros (Documento n.º 4). [En su caso: mi mandante encargó a su vez informe pericial de parte, que cuantifica los daños en (...) euros, Documento n.º 5].", { indent: true }),
      B.formPara("CUARTO.- Postura de la aseguradora. Con fecha [fecha], la demandada comunicó [la denegación de cobertura por (motivo) / el ofrecimiento de una indemnización de (...) euros, inferior a la debida], sin que hasta la fecha se haya abonado cantidad alguna [o: habiéndose abonado únicamente (...) euros] (Documento n.º 6).", { indent: true }),
      B.formPara("QUINTO.- Reclamación previa y actividad negociadora. Con fecha [fecha] se remitió a la demandada burofax de reclamación previa, sin que se haya obtenido respuesta satisfactoria, lo que constituye la actividad negociadora previa exigida como requisito de procedibilidad por el art. 264.4.º LEC (Documento n.º 7, y Modelo 2 de esta obra).", { indent: true }),
      B.formCenter("FUNDAMENTOS DE DERECHO", { bold: true }),
      B.formPara(["I. Jurisdicción y competencia. Corresponde el conocimiento del presente asunto a los Juzgados de Primera Instancia del orden civil (arts. 9.2 y 45 LEC), siendo competente territorialmente el Juzgado de [domicilio del asegurado], por aplicación del fuero especial en materia de seguros del art. 52.2 LEC, que atribuye la competencia, a elección del demandante, al tribunal del domicilio del asegurado."], { indent: true }),
      B.formPara("II. Procedimiento. Al no exceder la cuantía litigiosa de 15.000 euros, procede la tramitación por los cauces del juicio verbal, conforme al art. 250.2 LEC.", { indent: true }),
      B.formPara("III. Legitimación. La activa corresponde a mi mandante en su condición de tomador y asegurado (art. 7 LCS); la pasiva, a la demandada en su condición de aseguradora (art. 1 LCS).", { indent: true }),
      B.formPara("IV. Fondo del asunto. El art. 1 LCS obliga a la aseguradora a indemnizar el daño producido al asegurado, dentro de los límites pactados, cuando se produce el riesgo objeto de cobertura. No constando causa de exclusión aplicable al siniestro [ni cláusula limitativa válidamente incorporada conforme al art. 3 LCS, a cuyo respecto se invoca la doctrina fijada por la STS (Pleno) núm. 853/2006, de 11 de septiembre, y reiterada, entre otras, por la STS de 3 de octubre de 2023 (ROJ: STS 3996/2023)], procede la condena de la demandada al pago de la indemnización reclamada.", { indent: true }),
      B.formPara("V. Intereses. Procede la condena al pago de los intereses del art. 20 LCS desde la fecha del siniestro, al no concurrir causa justificada que exonere a la aseguradora de la mora en que ha incurrido.", { indent: true }),
      B.formPara("VI. Costas. Procede la condena en costas a la demandada conforme al principio del vencimiento objetivo del art. 394 LEC.", { indent: true }),
      B.formCenter("SUPLICO AL JUZGADO", { bold: true }),
      B.formPara("Que, teniendo por presentado este escrito con sus documentos y copias, se sirva admitirlo, tener por formulada DEMANDA DE JUICIO VERBAL contra [aseguradora demandada] y, previos los trámites legales oportunos, dicte Sentencia por la que:", { indent: true }),
      B.formPara("1.º Se condene a la demandada a abonar a mi mandante la cantidad de [ ] euros en concepto de indemnización derivada del contrato de seguro referenciado.", { indent: true }),
      B.formPara("2.º Se condene a la demandada al pago de los intereses del art. 20 LCS desde la fecha del siniestro hasta su completo pago.", { indent: true }),
      B.formPara("3.º Se condene a la demandada al pago de las costas procesales.", { indent: true }),
      B.formPara("OTROSÍ DIGO: Que, para el acto de la vista, se propone desde este momento la siguiente prueba: documental (la ya aportada, cuya autenticidad se dará por reconocida en su caso), interrogatorio de la parte demandada y pericial (ratificación del perito autor del Documento n.º 5), solicitando su admisión.", { indent: true }),
      B.formPara("SUPLICO AL JUZGADO que tenga por hecha la anterior manifestación a los efectos oportunos.", { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
    ]),

    // ============ MODELO 6 ============
    ...modeloHeading(6, "Contestación a la demanda por exclusión de cobertura",
      "Modelo de contestación desde la perspectiva de la aseguradora demandada, articulada sobre una exclusión de cobertura debidamente incorporada y acreditada (falta de mantenimiento, capítulo 8) y sobre la ausencia de causa justificada para no haberla opuesto ya en vía extrajudicial. Se ofrece como herramienta de doble uso: para el profesional que defiende a la aseguradora, como esqueleto de contestación; para el profesional del asegurado, como mapa de los argumentos que debe anticipar y neutralizar en la demanda (capítulo 24)."),
    documentoBox([
      B.formCenter("AL JUZGADO DE PRIMERA INSTANCIA N.º [ ] DE [PARTIDO JUDICIAL]", { bold: true, caps: false }),
      B.spacer(160),
      B.formPara(["D./D.ª [Procurador/a], Procurador/a de los Tribunales, en nombre y representación de ", B.bold("[aseguradora demandada], "), "según acredito mediante escritura de poder ya obrante en autos, bajo la dirección letrada de D./D.ª [abogado/a], Colegiado/a n.º [ ], en el juicio verbal n.º [ ], ante el Juzgado comparezco y, como mejor proceda en Derecho, DIGO:"], { indent: true }),
      B.formPara("Que, dentro de plazo, formulo CONTESTACIÓN A LA DEMANDA interpuesta de contrario, oponiéndome a la misma con base en los siguientes", { indent: true }),
      B.formCenter("HECHOS", { bold: true }),
      B.formPara("PRIMERO.- Se admite la existencia del contrato de seguro y su vigencia en la fecha del siniestro.", { indent: true }),
      B.formPara("SEGUNDO.- Se admite la producción material del siniestro descrito en el hecho segundo de la demanda, sin perjuicio de lo que se dirá sobre su causa.", { indent: true }),
      B.formPara("TERCERO.- Causa del siniestro. Se niega que el siniestro obedezca a una rotura súbita y accidental. El informe pericial de esta parte (Documento n.º 1), elaborado tras inspección de [fecha], concluye que el daño obedece a [falta de mantenimiento / desgaste / vicio propio de la instalación], circunstancia expresamente excluida de la cobertura conforme a la cláusula [ ] de las condiciones generales, debidamente destacada y no impugnada en su incorporación por la parte actora.", { indent: true }),
      B.formPara("CUARTO.- Tramitación del expediente. Esta parte procedió a la valoración pericial del siniestro dentro de los plazos legales, comunicando de forma motivada la denegación de cobertura con fecha [fecha] (Documento n.º 2), con expresión concreta de la causa de exclusión aplicada.", { indent: true }),
      B.formCenter("FUNDAMENTOS DE DERECHO", { bold: true }),
      B.formPara("I. Jurisdicción y competencia. No se formula objeción a la competencia del Juzgado.", { indent: true }),
      B.formPara("II. Sobre la exclusión de cobertura. La cláusula de exclusión aplicada tiene naturaleza delimitadora del riesgo, no limitativa de derechos, al concretar objetivamente el ámbito de la cobertura contratada, sin apartarse del contenido natural del ramo (capítulo 1), por lo que no le resulta de aplicación el régimen de aceptación específica del art. 3 LCS, conforme a la doctrina jurisprudencial que distingue ambas categorías (STS de 3 de octubre de 2023, ROJ: STS 3996/2023).", { indent: true }),
      B.formPara("III. Sobre la causa técnica del siniestro. La distinción entre rotura súbita cubierta y desgaste o falta de mantenimiento excluido exige, conforme a la metodología expuesta en el capítulo 8 de esta obra, una prueba pericial concluyente sobre la causa técnica del daño, cuya carga corresponde a esta parte por invocar la exclusión (art. 217 LEC), carga que se entiende cumplida con el informe pericial acompañado.", { indent: true }),
      B.formPara("IV. Sobre los intereses del art. 20 LCS. Subsidiariamente, para el caso de que se desestimara la excepción anterior, se opone la existencia de causa justificada para la falta de pago, dado que la determinación de la causa del siniestro exigía la práctica de la prueba pericial contradictoria del art. 38 LCS, sin que la mera discrepancia técnica entre peritos, resuelta de buena fe, equivalga a una resistencia injustificada al pago (capítulo 20).", { indent: true }),
      B.formPara("V. Costas. Para el caso de desestimación íntegra de la demanda, procede la condena en costas a la actora conforme al art. 394 LEC.", { indent: true }),
      B.formCenter("SUPLICO AL JUZGADO", { bold: true }),
      B.formPara("Que, teniendo por presentada esta contestación con sus documentos, se sirva admitirla, y previos los trámites legales, dicte Sentencia por la que se desestime íntegramente la demanda, con expresa condena en costas a la parte actora.", { indent: true }),
      B.formPara("OTROSÍ DIGO: Que se propone como prueba para el acto de la vista la documental ya aportada y la pericial, con ratificación y sometimiento a contradicción del perito autor del Documento n.º 1, solicitando su admisión.", { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
    ]),

    // ============ MODELO 7 ============
    ...modeloHeading(7, "Demanda reclamando intereses de demora del art. 20 LCS por mora del asegurador",
      "Modelo de fundamentación jurídica específica para los supuestos en que la aseguradora ha abonado la indemnización principal fuera de plazo o solo tras la interposición de la demanda, y se reclama exclusivamente —o de forma destacada— la condena a los intereses moratorios del art. 20 LCS. Se integra en el esquema de demanda del Modelo 5, sustituyendo el fundamento de derecho V y el suplico. Véase el capítulo 20."),
    documentoBox([
      B.formCenter("FUNDAMENTO DE DERECHO ESPECÍFICO SOBRE LA MORA DEL ASEGURADOR", { bold: true }),
      B.formPara("V. Intereses del artículo 20 LCS. Conforme al art. 20.3.º LCS, se entenderá que el asegurador incurre en mora cuando no hubiere cumplido su prestación en el plazo de tres meses desde la producción del siniestro, o no hubiere procedido al pago del importe mínimo de lo que pueda deber dentro de los cuarenta días desde la recepción de la declaración del siniestro. En el presente caso, [el siniestro se produjo el (fecha) y la demandada no ha abonado cantidad alguna hasta la fecha / la demandada abonó el importe de (...) euros el (fecha), transcurridos (...) meses desde el siniestro], sin que conste causa justificada de exoneración conforme al art. 20.8.º LCS.", { indent: true }),
      B.formPara("El interés de demora, conforme al art. 20.4.º LCS, será el legal del dinero vigente incrementado en el 50 por 100 durante los dos primeros años desde la fecha del siniestro (que será el término inicial del cómputo, art. 20.6.º LCS) y, transcurridos dos años sin haberse satisfecho la indemnización, no podrá ser inferior al 20 por 100 anual, devengándose día a día sin necesidad de reclamación judicial.", { indent: true }),
      B.formPara(["Procede recordar que, conforme a reiterada doctrina jurisprudencial, la aplicación de estos intereses es prácticamente automática y de imposición de oficio por el órgano judicial (art. 20.4.º LCS), correspondiendo a la aseguradora la carga de acreditar la concurrencia de una causa justificada que excluya la mora, sin que constituya causa justificada per se la mera existencia de un proceso judicial ni la discrepancia sobre la cuantía de la indemnización cuando la obligación de pago del importe mínimo resulta indiscutida."], { indent: true }),
      B.formCenter("SUPLICO (variante)", { bold: true }),
      B.formPara("Que se condene a la demandada a abonar a mi mandante, además de la indemnización principal de [ ] euros [o, en su caso, dejando constancia del abono extraprocesal de dicha suma a los solos efectos de la condena en costas], los intereses del art. 20 LCS devengados desde la fecha del siniestro [(fecha)] hasta su completo pago, calculados conforme a las reglas legales expuestas, con expresa condena en costas a la demandada.", { indent: true }),
    ]),

    // ============ MODELO 8 ============
    ...modeloHeading(8, "Reclamación ante la Dirección General de Seguros y Fondos de Pensiones (DGSFP)",
      "Escrito de reclamación en vía administrativa de supervisión, procedente una vez agotada o transcurrido el plazo de resolución de la reclamación ante el Servicio de Atención al Cliente o el Defensor del Asegurado de la entidad (Modelo 3), conforme al régimen de protección del cliente de servicios financieros y a la normativa de ordenación y supervisión de los seguros privados (capítulo 23)."),
    documentoBox([
      B.formCenter("RECLAMACIÓN ANTE LA DIRECCIÓN GENERAL DE SEGUROS Y FONDOS DE PENSIONES", { bold: true }),
      B.formField("Reclamante"),
      B.formField("Entidad aseguradora reclamada"),
      B.formField("Póliza n.º / Siniestro n.º"),
      B.spacer(120),
      B.formPara("EXPONE:", { indent: false }),
      B.formPara("PRIMERO.- Que con fecha [fecha] presentó reclamación ante el Servicio de Atención al Cliente / Defensor del Asegurado de la entidad [aseguradora], sin haber obtenido respuesta en el plazo legalmente establecido / habiendo recibido respuesta desestimatoria de fecha [fecha] (se acompaña como Documento n.º 1).", { indent: true }),
      B.formPara("SEGUNDO.- Que los hechos objeto de la reclamación son los siguientes: [resumen de los hechos: contrato, siniestro, postura de la aseguradora y motivos de disconformidad, con remisión a la documentación aportada].", { indent: true }),
      B.formPara("TERCERO.- Que se considera que la actuación de la entidad reclamada resulta contraria a las buenas prácticas y usos financieros y, en particular, [a lo dispuesto en los arts. 1, 3 y 20 de la Ley 50/1980, de Contrato de Seguro / a las condiciones de la póliza suscrita], por los motivos ya expuestos ante el Servicio de Atención al Cliente.", { indent: true }),
      B.formPara("SOLICITA que, teniendo por presentado este escrito con la documentación que se acompaña, se admita a trámite la presente reclamación, se dé traslado de la misma a la entidad reclamada y se emita el informe correspondiente sobre el ajuste de su actuación a la normativa de ordenación y supervisión de los seguros privados y a las buenas prácticas del sector, dejando constancia de que el presente escrito no suspende ni sustituye el plazo de prescripción de las acciones civiles que puedan corresponder al reclamante, ni impide el ejercicio de la acción judicial conforme al art. 23 LCS.", { indent: true }),
      B.spacer(200),
      B.formPara("En [lugar], a [fecha]."),
      B.spacer(400),
      B.formCenter("Fdo.: [nombre y apellidos / DNI]", { after: 0 }),
    ]),
  ];
}

module.exports = { anexoIV };
