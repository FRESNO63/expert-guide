const B = require("./build");

function capitulo21() {
  return [
    B.chapterHeading(21, "Dolo y culpa grave: causas de exoneración del asegurador"),

    B.sumario([
      "17.1. Sistemática general: dolo, mala fe y culpa grave en la LCS",
      "17.2. El estándar probatorio: la carga de la prueba corresponde al asegurador",
      "17.3. La exigencia de nexo causal entre el dolo y el siniestro",
      "17.4. El umbral de la culpa grave frente a la negligencia simple",
      "17.5. Proyección sobre las distintas coberturas del hogar",
      "17.6. Ficha para el profesional",
      "17.7. Ficha para el asegurado",
      "17.8. Checklist: análisis de una imputación de dolo o culpa grave",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo sistematiza el tratamiento del dolo y la culpa grave como causas de exoneración del asegurador a lo largo de la LCS —arts. 19, 48 y 52, entre otros—, con atención especial a dos reglas jurisprudenciales de aplicación transversal: la carga de la prueba del dolo o la culpa grave corresponde siempre a quien los invoca, es decir, al asegurador, y dicha prueba debe extenderse tanto a la conducta subjetivamente reprochable como a su nexo causal específico con el siniestro finalmente producido.",
      "dolo, mala fe, culpa grave, art. 19 LCS, carga de la prueba, nexo causal",
      "This chapter systematises the treatment of wilful misconduct and gross negligence as grounds for insurer exoneration throughout the Insurance Contract Act — Articles 19, 48 and 52, among others — focusing on two cross-cutting case-law rules: the burden of proving wilful misconduct or gross negligence always falls on the party invoking it, namely the insurer, and that proof must extend both to the subjectively reprehensible conduct and to its specific causal link with the loss that actually occurred.",
      "wilful misconduct, bad faith, gross negligence, burden of proof, causation"
    ),
    B.spacer(200),

    B.h2("17.1. Sistemática general: dolo, mala fe y culpa grave en la LCS"),
    B.p(["La LCS emplea, a lo largo de su articulado, una terminología que conviene sistematizar antes de entrar en el análisis probatorio: «mala fe» (art. 19 LCS, regla general del seguro de daños), «dolo o culpa grave» (arts. 10, 11, 12, 48 y 52 LCS, entre otros, en contextos más específicos), términos que la doctrina y la jurisprudencia consideran, en lo sustancial, equivalentes a efectos de exoneración del asegurador, aunque con matices de umbral según el precepto y la cobertura concreta de que se trate", B.fn("La aparente disparidad terminológica entre «mala fe» y «dolo» a lo largo de la LCS ha sido objeto de estudio doctrinal detenido, concluyéndose mayoritariamente que ambas expresiones designan, en el contexto del art. 19 LCS, la provocación consciente y deliberada del siniestro por el propio asegurado, sin que quepa identificar la «mala fe» del art. 19 con la mera falta de lealtad contractual de menor intensidad; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 19; TIRADO SUÁREZ, F. J., en URÍA, MENÉNDEZ y OLIVENCIA (dirs.), op. cit., epígrafe sobre causas de exclusión del riesgo."), ":"]),
    B.legalBox("Art. 19 LCS", "El asegurador estará obligado al pago de la prestación, salvo en el supuesto de que el siniestro haya sido causado por mala fe del asegurado."),
    B.p("Se trata de la norma más severa de todo el sistema: exige la provocación intencionada del propio siniestro por el asegurado, sin que la negligencia, por grave que sea, baste por sí sola para exonerar al asegurador bajo este precepto general (a diferencia de lo que ocurre en el régimen específico del seguro de incendio y del seguro de robo, según se expone en el epígrafe 17.4)."),

    B.h2("17.2. El estándar probatorio: la carga de la prueba corresponde al asegurador"),
    B.p(["La regla probatoria aplicable a toda invocación de dolo o culpa grave por la aseguradora es de una claridad meridiana en la jurisprudencia reciente, y constituye, junto con la doctrina sobre cláusulas limitativas del capítulo 1, uno de los pilares de protección del asegurado en todo el sistema de la LCS"]),
    B.jurisBox("STS, Sala de lo Civil, de 17 de julio de 2012 (ROJ: STS 5990/2012; ECLI:ES:TS:2012:5990; MP: Arroyo Fiestas)", "«El propio art. 48 LCS [...] solo exime al asegurador de su obligación de indemnizar los daños cuando el incendio ‘se origine por dolo o culpa grave del asegurado’, lo que exige probar no solo el dolo o la culpa grave del asegurado sino también su relación causal con el origen del incendio, incumbiendo al asegurador, según la doctrina científica y la jurisprudencia, la carga de esta prueba. [...] Si no consta probado que el incendio haya sido provocado, directa ni indirectamente, por el asegurado no se da el supuesto contemplado en la norma [...], y huelga discurrir acerca del dolo o culpa grave del asegurado y del nexo causal.»"),
    B.p("De esta doctrina se extrae una regla de aplicación general a cualquier cobertura del hogar: no basta con que existan indicios de que el siniestro pudo ser provocado —por ejemplo, la presencia de trazas de un acelerante en un incendio—; es necesario que la aseguradora acredite, con la certeza exigible en el proceso civil, tanto la conducta dolosa o gravemente negligente como su autoría por el asegurado. Indicios débiles, ambiguos o que «abren el campo más a las dudas y a las hipótesis» que a la certeza —en los términos empleados por la propia sentencia— no son suficientes para exonerar al asegurador de su obligación de indemnizar."),

    B.h2("17.3. La exigencia de nexo causal entre el dolo y el siniestro"),
    B.p("Como se anticipó en el capítulo 13 a propósito de la STS 1544/2023 (ROJ: STS 1544/2023), la exigencia de nexo causal no se limita a la autoría material del hecho inicial, sino que debe extenderse específicamente al resultado dañoso finalmente producido. La distinción es sutil pero decisiva: un acto inicial voluntario o incluso doloso (por ejemplo, sustraer combustible) no determina automáticamente la calificación dolosa del siniestro final (el incendio subsiguiente) si este último no fue querido ni siquiera aceptado como consecuencia altamente probable de aquel. El profesional debe, por ello, descomponer analíticamente la cadena causal completa del siniestro antes de aceptar o rechazar una imputación de dolo formulada por la aseguradora."),
    B.p(["Esta regla no nace con la STS 1544/2023, sino que reitera una doctrina consolidada casi dos décadas antes, formulada con particular claridad a propósito de un seguro de accidentes pero de proyección general sobre el requisito de la «intencionalidad» en todo el sistema de la LCS"]),
    B.jurisBox("STS, Sala de lo Civil, de 7 de julio de 2006 (ROJ: STS 5884/2006; ECLI:ES:TS:2006:5884; MP: Xiol Ríos)", "«La intencionalidad que exige la LCS para que concurra esta exclusión no se refiere en abstracto a cualquier conducta de la que se siga el resultado del siniestro, sino a la causación o provocación de éste [...]. [E]sto es, los supuestos de dolo directo o eventual sobre el resultado, sin extenderlo a supuestos en que se comete intencionadamente una infracción, pero no se persigue la consecuencia dañosa producida o no se asume o representa como altamente probable. No todo supuesto de dolo penal, en su modalidad de dolo eventual, comporta dolo del asegurado equivalente a la producción intencional del siniestro [...]. La exclusión de las conductas dolosas del ámbito del seguro no responde [...] como un reproche de la conducta en sí misma, sino en cuanto integra una intencionalidad del asegurado en la provocación del siniestro.»"),
    B.p(["Esta doctrina de 2006 —que distingue con precisión el dolo referido a una conducta arriesgada o incluso ilícita del dolo referido específicamente al resultado dañoso— es el precedente directo sobre el que se construye la más reciente STS 1544/2023 en materia de responsabilidad civil del hogar, y resulta de particular utilidad práctica en los siniestros protagonizados por menores convivientes, en los que con frecuencia concurre un acto inicial imprudente o incluso deliberado (un juego de riesgo, la manipulación de un objeto peligroso) sin que el resultado dañoso final haya sido ni querido ni aceptado como probable", B.fn("Sobre la proyección de esta doctrina a los supuestos, frecuentes en la práctica forense, de responsabilidad civil de los padres por hechos de sus hijos menores cubiertos por el seguro de hogar —incluidos los casos de hechos inicialmente dolosos del menor con resultado dañoso no querido—, vid. MAGRO SERVET, V., «Alcance de la responsabilidad por daños del seguro de hogar ante perjudicados por delitos dolosos del asegurado», Diario LA LEY, núm. 9327, 2018; véase también el capítulo 13 de esta obra."), "."]),

    B.h2("17.4. El umbral de la culpa grave frente a la negligencia simple"),
    B.p("Como se estudió en los capítulos 7 y 9, el umbral de imputación subjetiva varía según la cobertura y el precepto aplicable, lo que exige al profesional identificar con precisión cuál es el estándar exigible en cada caso concreto:"),
    B.bullet([B.bold("Régimen general del art. 19 LCS: "), B.run("solo la mala fe (dolo) exonera; la negligencia, incluso grave, no exonera bajo este precepto en su formulación general.")]),
    B.bullet([B.bold("Seguro de incendio (art. 48 LCS): "), B.run("el dolo o la culpa grave exoneran; la negligencia leve o simple, incluso propia del asegurado, está expresamente cubierta.")]),
    B.bullet([B.bold("Seguro de robo (art. 52.1.ª LCS): "), B.run("la negligencia grave, no solo el dolo, exonera al asegurador, umbral más exigente para el asegurado que en el régimen del incendio.")]),
    B.bullet([B.bold("Deber de declaración del riesgo (art. 10 LCS) y agravación (art. 11-12 LCS): "), B.run("el dolo o la culpa grave determinan la liberación total; la reserva o inexactitud sin dolo ni culpa grave da lugar únicamente a reducción proporcional (capítulo 4).")]),
    B.p("Esta heterogeneidad de umbrales, lejos de ser una incoherencia del sistema, refleja una ponderación legislativa deliberada del distinto grado de control que el asegurado puede razonablemente ejercer sobre cada tipo de riesgo: mayor tolerancia a la negligencia propia en el incendio (donde el origen accidental es estadísticamente más frecuente) y mayor exigencia de diligencia en el robo (donde las medidas de precaución del propio asegurado inciden más directamente en la probabilidad de siniestro)."),

    B.h2("17.5. Proyección sobre las distintas coberturas del hogar"),
    B.p("La sistemática expuesta en este capítulo debe proyectarse, en cada caso concreto, sobre el régimen específico de la cobertura afectada: el capítulo 7 desarrolla su aplicación al incendio (con la doctrina de la «malquerencia de extraños»), el capítulo 9 su aplicación al robo, y el capítulo 13 su proyección —de especial complejidad— sobre la garantía de responsabilidad civil, donde la inoponibilidad de las excepciones personales del asegurador al tercero perjudicado (art. 76 LCS) determina que ni siquiera el dolo probado del asegurado sea oponible a quien reclama como perjudicado ajeno a la relación contractual."),

    B.h2("17.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante una imputación de dolo o culpa grave", B.AZUL, [
      "Identificar el precepto exacto aplicable (art. 19, 48, 52, 10 u 11-12 LCS) y el umbral subjetivo específico que exige (solo dolo, o dolo y culpa grave).",
      "Exigir a la aseguradora prueba cumplida, no meramente indiciaria o ambigua, tanto de la conducta reprochable como de su nexo causal específico con el siniestro (STS 5990/2012, ROJ: STS 5990/2012).",
      "Descomponer la cadena causal del siniestro cuando exista un acto inicial voluntario, para determinar si el dolo alcanza también al resultado dañoso finalmente producido, conforme a la doctrina fundacional de la STS 5884/2006 (ROJ: STS 5884/2006), reiterada por la STS 1544/2023.",
      "En coberturas de responsabilidad civil, recordar la inoponibilidad al tercero perjudicado del dolo del asegurado (art. 76 LCS, capítulo 13), con independencia de su eventual prueba en la relación interna asegurador-asegurado.",
    ]),

    B.h2("17.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber si le imputan dolo o mala fe", "8A5A00", [
      "No basta con que la aseguradora sospeche o alegue que usted provocó el siniestro: debe probarlo con certeza, no con meras conjeturas.",
      "Si existió algún acto voluntario suyo relacionado con el siniestro, pero no quiso ni pudo prever razonablemente el resultado dañoso final, eso no equivale automáticamente a dolo respecto de ese resultado.",
      "Consulte a un profesional antes de aceptar una denegación de cobertura basada en dolo o culpa grave: es una de las causas de exoneración más exigentes de probar para la aseguradora.",
    ]),

    B.h2("17.8. Checklist: análisis de una imputación de dolo o culpa grave"),
    B.bullet("1. ¿Qué precepto invoca la aseguradora (art. 19, 48, 52, 10 u 11-12 LCS) y qué umbral exige?"),
    B.bullet("2. ¿Qué prueba concreta aporta la aseguradora de la conducta reprochable?"),
    B.bullet("3. ¿Prueba también el nexo causal específico entre esa conducta y el siniestro finalmente producido?"),
    B.bullet("4. ¿Existe un acto inicial voluntario distinto del resultado dañoso final?"),
    B.bullet("5. ¿Se trata de una cobertura de daños propios o de responsabilidad civil frente a terceros (con la consiguiente inoponibilidad del art. 76 LCS)?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    B.p("TIRADO SUÁREZ, F. J., en URÍA, R.; MENÉNDEZ, A.; OLIVENCIA, M. (dirs.), Comentarios al Código de Comercio y legislación mercantil especial, tomo XXIV, vol. 1.º, Edersa/Civitas, Madrid."),
    B.p("MAGRO SERVET, V., «Alcance de la responsabilidad por daños del seguro de hogar ante perjudicados por delitos dolosos del asegurado», Diario LA LEY, núm. 9327, 2018."),
  ];
}

module.exports = { capitulo21 };
