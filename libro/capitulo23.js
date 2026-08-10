const B = require("./build");

function capitulo23() {
  return [
    B.chapterHeading(23, "Reclamación extrajudicial: servicio de atención al cliente, Defensor del Asegurado y DGSFP"),

    B.sumario([
      "19.1. El deber de atención al reclamante: SAC y Defensor del Asegurado",
      "19.2. La reclamación ante la Dirección General de Seguros y Fondos de Pensiones",
      "19.3. Los medios adecuados de solución de controversias como requisito de procedibilidad",
      "19.4. Los intereses del art. 20 LCS como palanca de negociación extrajudicial",
      "19.5. Ficha para el profesional",
      "19.6. Ficha para el asegurado",
      "19.7. Checklist: itinerario extrajudicial antes de demandar",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo abre la Parte IV con el estudio de la vía extrajudicial de reclamación en el seguro de hogar: el servicio de atención al cliente y el defensor del asegurado de la propia entidad, la reclamación ante el Servicio de Reclamaciones de la Dirección General de Seguros y Fondos de Pensiones, y la reciente incorporación de los medios adecuados de solución de controversias (MASC) como auténtico requisito de procedibilidad para el acceso a la jurisdicción civil, tras la reforma operada por la Ley Orgánica 1/2025.",
      "servicio de atención al cliente, defensor del asegurado, DGSFP, MASC, requisito de procedibilidad, Ley Orgánica 1/2025",
      "This chapter opens Part IV with the extrajudicial claims route in homeowners' insurance: the insurer's own customer service and ombudsman, the complaint before the Spanish insurance supervisor's Claims Service, and the recent introduction of adequate dispute resolution means as a genuine procedural admissibility requirement for access to the civil courts, following the reform enacted by Organic Act 1/2025.",
      "customer service, insurance ombudsman, supervisory complaint, alternative dispute resolution, procedural requirement"
    ),
    B.spacer(200),

    B.h2("19.1. El deber de atención al reclamante: SAC y Defensor del Asegurado"),
    B.p(["La Ley 20/2015, de Ordenación, Supervisión y Solvencia de las Entidades Aseguradoras y Reaseguradoras (LOSSEAR), y su normativa de desarrollo imponen a toda aseguradora la obligación de disponer de un servicio de atención al cliente (SAC) y, en su caso, de un defensor del cliente, ante el que el asegurado debe formular su reclamación como paso previo e ineludible antes de acudir a la supervisión pública", B.fn("La articulación de un sistema de protección del cliente financiero en dos niveles —interno, a través del SAC/defensor de la propia entidad, y externo, a través del supervisor— sigue el modelo general de protección del cliente de servicios financieros en España, común a banca, seguros y valores; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado a la supervisión y protección del asegurado."), "."]),
    B.p("La reclamación ante el SAC o el defensor del asegurado cumple una doble función que el profesional no debe subestimar: de un lado, ofrece una última oportunidad de resolución negociada antes de escalar el conflicto; de otro —y esto es lo más relevante en términos procesales—, constituye un presupuesto documental necesario para poder acceder posteriormente al Servicio de Reclamaciones de la DGSFP, que exige acreditar dicha reclamación previa como requisito de admisión."),

    B.h2("19.2. La reclamación ante la Dirección General de Seguros y Fondos de Pensiones"),
    B.p("Agotada o transcurrido el plazo de resolución de la reclamación interna, el asegurado puede acudir al Servicio de Reclamaciones de la DGSFP, órgano de supervisión que emite un informe motivado sobre el ajuste de la actuación de la aseguradora a la normativa de transparencia y protección de la clientela y a las buenas prácticas y usos financieros. Es fundamental que el profesional transmita con precisión al cliente el alcance real de esta vía: el informe de la DGSFP no tiene carácter vinculante ni ejecutivo, no puede imponer el pago de una indemnización ni sustituye a la vía judicial, pero constituye un elemento de prueba documental de notable valor persuasivo —tanto en una negociación posterior como, eventualmente, en el propio proceso judicial— cuando resulta favorable al reclamante, precisamente por proceder de un organismo técnico independiente y especializado."),

    B.h2("19.3. Los medios adecuados de solución de controversias como requisito de procedibilidad"),
    B.p(["La Ley Orgánica 1/2025, de 2 de enero, de medidas en materia de eficiencia del Servicio Público de Justicia, ha introducido una modificación de primer orden en la arquitectura procesal civil española, con impacto directo y sistemático en la litigación de seguros de hogar: la actividad negociadora previa a través de un medio adecuado de solución de controversias (MASC) pasa a configurarse, en los términos que la propia ley establece, como un auténtico requisito de procedibilidad para el acceso a la jurisdicción civil", B.fn("La introducción de los MASC como requisito de procedibilidad, inspirada en experiencias comparadas de justicia negociada, persigue reducir la litigiosidad civil ordinaria y fomentar la resolución temprana de conflictos patrimoniales de cuantía moderada, categoría en la que encaja la inmensa mayoría de los siniestros de seguro de hogar; cfr. la explicación del propio preámbulo de la LO 1/2025."), ":"]),
    B.legalBox("Art. 264.4.º LEC (redacción LO 1/2025)", "Con la demanda o la contestación habrán de presentarse: [...] 4.º El documento que acredite haberse intentado la actividad negociadora previa a la vía judicial cuando la ley exija dicho intento como requisito de procedibilidad, o declaración responsable de la parte de la imposibilidad de llevar a cabo la actividad negociadora previa a la vía judicial por desconocer el domicilio de la parte demandada o el medio por el que puede ser requerido."),
    B.legalBox("Art. 403.2 LEC (redacción LO 1/2025)", "No se admitirán las demandas cuando no se acompañen a ella los documentos que la ley expresamente exija para la admisión de aquellas, cuando no se hagan constar las circunstancias a las que se refiere el segundo párrafo del apartado 3 del artículo 399 en los casos en que se haya acudido a un medio adecuado de solución de controversias por exigirlo la ley como requisito de procedibilidad [...]."),
    B.p("La consecuencia práctica para el profesional del seguro de hogar es inmediata: una demanda presentada sin acreditar el intento de negociación previa —o, en su caso, sin la declaración responsable sobre la imposibilidad de llevarla a cabo— corre el riesgo de inadmisión conforme al art. 403.2 LEC. La buena noticia es que, en la práctica del seguro de hogar, esta exigencia rara vez supone una carga añadida sustancial: la reclamación extrajudicial ante la propia aseguradora y, en su caso, ante el SAC, el defensor del asegurado o la DGSFP, estudiadas en los epígrafes anteriores, cumplen ya de forma natural la función de actividad negociadora previa, siempre que se documenten adecuadamente y se incorporen como anexo a la demanda."),
    B.p("La recomendación práctica que se extrae de esta reforma es, por ello, doble: primera, nunca prescindir de la reclamación extrajudicial previa a la aseguradora (burofax de reclamación, reclamación ante el SAC), ni siquiera cuando el asegurado tenga prisa por litigar, precisamente porque ahora es también un presupuesto de admisibilidad de la demanda; segunda, conservar y aportar escrupulosamente la documentación acreditativa de ese intento negociador, con indicación de fechas, medios empleados y, en su caso, respuesta recibida."),

    B.h2("19.4. Los intereses del art. 20 LCS como palanca de negociación extrajudicial"),
    B.p("Como se explicó en el capítulo 20, los intereses de demora del art. 20 LCS —de cuantía muy superior a la de los intereses legales ordinarios y con un suelo del 20 % anual a partir de los dos años desde el siniestro— constituyen, en la práctica, el principal incentivo económico para que una aseguradora acepte negociar y pagar tempranamente. El profesional debe, por ello, incorporar sistemáticamente a toda reclamación extrajudicial —burofax, reclamación ante el SAC, escrito de negociación MASC— una referencia expresa y cuantificada a estos intereses, no como mera fórmula de estilo, sino como argumento de negociación con peso económico real y creciente con el paso del tiempo."),

    B.h2("19.5. Ficha para el profesional"),
    B.fichaBox("Itinerario extrajudicial recomendado antes de demandar", B.AZUL, [
      "Burofax de reclamación previa a la aseguradora, con cuantificación de la indemnización reclamada y de los intereses del art. 20 LCS (capítulo 20 y Anexo IV).",
      "Reclamación ante el SAC o el defensor del asegurado de la entidad, conservando acuse de recibo y, en su caso, respuesta motivada.",
      "En caso de persistir la discrepancia, valorar la reclamación ante la DGSFP, teniendo presente su carácter no vinculante pero su valor probatorio indirecto.",
      "Documentar escrupulosamente todo el itinerario negociador para su incorporación a la demanda conforme al art. 264.4.º LEC, evitando el riesgo de inadmisión del art. 403.2 LEC.",
      "Si el domicilio de la aseguradora es desconocido o resulta imposible el intento negociador por causas objetivas, preparar la declaración responsable alternativa prevista en el propio art. 264.4.º LEC.",
    ]),

    B.h2("19.6. Ficha para el asegurado"),
    B.fichaBox("Qué esperar de cada vía de reclamación", "8A5A00", [
      "El servicio de atención al cliente de su aseguradora debe responder a su reclamación en un plazo determinado; guarde siempre el justificante de presentación.",
      "La Dirección General de Seguros y Fondos de Pensiones no puede obligar a su aseguradora a pagarle, pero su informe, si le da la razón, es un argumento de peso para negociar o, en su caso, para un futuro pleito.",
      "Antes de demandar, su abogado deberá acreditar que intentó negociar con la aseguradora: no lo viva como un trámite burocrático, sino como una oportunidad real de resolver el conflicto sin ir a juicio.",
    ]),

    B.h2("19.7. Checklist: itinerario extrajudicial antes de demandar"),
    B.bullet("1. ¿Se ha remitido burofax de reclamación previa con cuantificación de la indemnización e intereses?"),
    B.bullet("2. ¿Se ha presentado reclamación ante el SAC o el defensor del asegurado? ¿Con qué resultado?"),
    B.bullet("3. ¿Se ha acudido, en su caso, a la DGSFP? ¿Cuál es el contenido de su informe?"),
    B.bullet("4. ¿Está documentado el conjunto del itinerario negociador para su incorporación a la demanda (art. 264.4.º LEC)?"),
    B.bullet("5. ¿Existe riesgo de inadmisión de la demanda por falta de acreditación del intento negociador (art. 403.2 LEC)?"),

    B.h2("Bibliografía citada"),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo23 };
