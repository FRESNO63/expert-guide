const B = require("./build");

function capitulo05() {
  return [
    B.chapterHeading(5, "Condiciones generales, particulares y especiales: profundización práctica"),

    B.sumario([
      "4.1. Jerarquía y articulación entre condiciones generales, particulares y especiales",
      "4.2. El control de incorporación: entrega de la póliza y accesibilidad real de las condiciones",
      "4.3. El control de interpretación: la regla contra proferentem (art. 1288 CC)",
      "4.4. Casuística de cláusulas típicas en el seguro de hogar",
      "4.5. El control de contenido cuando el tomador es consumidor: remisión",
      "4.6. Ficha para el profesional",
      "4.7. Ficha para el asegurado",
      "4.8. Checklist: banderas rojas en la redacción de una póliza",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo completa el estudio iniciado en el Capítulo 1 sobre el artículo 3 LCS, añadiendo los dos controles adicionales a los que se somete el clausulado del seguro de hogar como contrato de adhesión: el control de incorporación (arts. 5 y 7 LCGC) y el control de interpretación, con particular atención a la regla contra proferentem del art. 1288 CC, aplicada de forma constante por la Sala Primera del Tribunal Supremo a favor del asegurado cuando la póliza no ha sido entregada o resulta oscura o contradictoria.",
      "condiciones generales, control de incorporación, control de interpretación, contra proferentem, art. 1288 CC, transparencia",
      "This chapter completes the analysis begun in Chapter 1 of Article 3 of the Insurance Contract Act, adding the two further controls applicable to homeowners' insurance policies as adhesion contracts: the incorporation control under the General Terms Act and the interpretation control, focusing on the contra proferentem rule of Article 1288 of the Civil Code, consistently applied by the Supreme Court in favour of the insured when the policy was not delivered or is obscure or contradictory.",
      "general terms and conditions, incorporation control, interpretation control, contra proferentem rule, transparency"
    ),
    B.spacer(200),

    B.h2("4.1. Jerarquía y articulación entre condiciones generales, particulares y especiales"),
    B.p("La póliza de hogar se estructura habitualmente en tres capas normativas de origen contractual, cuya prelación conviene fijar desde el principio:"),
    B.bullet([B.bold("Condiciones generales: "), B.run("el clausulado estándar, predispuesto por la aseguradora para la generalidad de los contratos de un determinado producto, con vocación de aplicarse a una pluralidad indeterminada de asegurados.")]),
    B.bullet([B.bold("Condiciones particulares: "), B.run("los datos y pactos específicos de cada contrato concreto (sumas aseguradas, franquicias elegidas, dirección del inmueble, sublímites contratados, garantías adicionales suscritas).")]),
    B.bullet([B.bold("Condiciones especiales: "), B.run("las que modulan, para un contrato concreto o para una modalidad particular de producto, alguna previsión de las condiciones generales (por ejemplo, la ampliación de una cobertura estándar de defensa jurídica o la inclusión de una garantía de asistencia informática).")]),
    B.p("En caso de contradicción entre estos tres niveles, rige el criterio de especialidad: las condiciones particulares y especiales, por reflejar la voluntad negocial específica de las partes, prevalecen sobre las condiciones generales predispuestas. Este criterio, de raigambre en la teoría general del contrato, se combina en la práctica con la regla contra proferentem cuando la contradicción, además de existir, genera oscuridad sobre el alcance real de la cobertura, como se desarrolla en el epígrafe 4.3."),

    B.h2("4.2. El control de incorporación: entrega de la póliza y accesibilidad real de las condiciones"),
    B.p(["Antes de discutir qué dice una cláusula, es necesario comprobar si esa cláusula llegó siquiera a formar parte del contrato. Es lo que la doctrina denomina control de incorporación, regulado, para el tomador que actúa como adherente, por la Ley 7/1998, de Condiciones Generales de la Contratación (LCGC)", B.fn("El control de incorporación opera con independencia de que el adherente sea o no consumidor, a diferencia del control de contenido (cláusulas abusivas), reservado a los adherentes que ostenten la condición de consumidor o usuario; cfr. capítulo 25 de esta obra."), ":"]),
    B.legalBox("Art. 7 LCGC", "No quedarán incorporadas al contrato las siguientes condiciones generales: a) Las que el adherente no haya tenido oportunidad real de conocer de manera completa al tiempo de la celebración del contrato o cuando no hayan sido firmadas, cuando sea necesario, en los términos resultantes del artículo 5. b) Las que sean ilegibles, ambiguas, oscuras e incomprensibles, salvo, en cuanto a estas últimas, que hubieren sido expresamente aceptadas por escrito por el adherente y se ajusten a la normativa específica que discipline en su ámbito la necesaria transparencia de las cláusulas contenidas en el contrato."),
    B.p("La aplicación de este control al seguro de hogar es especialmente relevante en los supuestos —nada infrecuentes en la contratación telefónica o por internet— en los que la póliza y sus condiciones generales no llegan a entregarse materialmente al tomador antes del siniestro, o se entregan de forma incompleta. La STS, Sala de lo Civil, de 24 de abril de 2023 (ROJ: STS 1701/2023; ECLI:ES:TS:2023:1701; MP: Seoane Spiegelberg), aunque referida a un seguro de invalidez, fija una doctrina plenamente trasladable al seguro de daños sobre las consecuencias de la falta de entrega:"),
    B.jurisBox("STS, Sala de lo Civil, de 24 de abril de 2023 (ROJ: STS 1701/2023; ECLI:ES:TS:2023:1701; MP: Seoane Spiegelberg)", "«[...] no se especifica el ámbito concreto de cobertura de dicho riesgo, al no haber sido entregadas a la demandante las condiciones generales de la póliza, que lo definían contractualmente, lo que dejaba a la asegurada en una situación de incertidumbre sobre el concreto alcance de la cobertura pactada [...]. Es reiterada jurisprudencia la que sostiene que las contradicciones y correlativas dudas existentes sobre el alcance e interpretación de las condiciones generales de la póliza pesan contra la compañía aseguradora, en tanto en cuanto las predispuso e impuso en sus relaciones contractuales con terceros.»"),
    B.p("La consecuencia práctica es contundente: la falta de entrega o de acreditación de la entrega de las condiciones generales no determina automáticamente la nulidad del contrato, pero sí desplaza la incertidumbre sobre el alcance de la cobertura en contra de la aseguradora, que es quien tenía la carga de documentar y entregar el clausulado conforme al art. 3 LCS."),

    B.h2("4.3. El control de interpretación: la regla contra proferentem"),
    B.p(["Superado el control de incorporación, la cláusula efectivamente incorporada al contrato puede, no obstante, resultar oscura o admitir varios sentidos razonables. Para estos casos, el ordenamiento español dispone, desde el Código Civil, de una regla de cierre que la jurisprudencia de seguros aplica de forma sistemática", B.fn("La regla contra proferentem tiene una larga tradición en el derecho romano (in dubio contra stipulatorem) y se ha convertido, en el derecho contractual moderno, en instrumento privilegiado de control de las condiciones generales predispuestas; sobre su función en el contrato de seguro, vid. VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, op. cit., capítulo dedicado a la interpretación del contrato de seguro."), ":"]),
    B.legalBox("Art. 1288 CC", "La interpretación de las cláusulas oscuras de un contrato no deberá favorecer a la parte que hubiese ocasionado la oscuridad."),
    B.p("La STS 1701/2023, ya citada, sistematiza con precisión la aplicación de esta regla al contrato de seguro, con cita de precedentes que conviene tener presentes por su valor de cita reiterada en la práctica forense:"),
    B.jurisBox("STS, Sala de lo Civil, de 24 de abril de 2023 (ROJ: STS 1701/2023; ECLI:ES:TS:2023:1701; MP: Seoane Spiegelberg)", "«La técnica de las condiciones generales impuestas y predispuestas por las compañías determinan la vigencia de la interpretación contra proferentem (contra el proponente), conforme a la cual ‘la interpretación de las cláusulas oscuras de un contrato no deberá favorecer a la parte que hubiese ocasionado la oscuridad’ (SSTS 248/2009, de 2 de abril [...]). [...] toda la normativa de seguros está enfocada a la protección del asegurado, resolviéndose a su favor las dudas interpretativas derivadas de la redacción del contrato o de sus cláusulas oscuras o confusas (STS 498/2016, de 19 de julio); ‘[...] la técnica de las condiciones generales impuestas y predispuestas por las compañías determinan la vigencia de la interpretación contra proferentem’ (STS 31/2020, de 21 de enero).»"),
    B.p("Dos precisiones son esenciales para el uso correcto de esta doctrina en un escrito profesional. Primera, la regla contra proferentem es un criterio de cierre: opera únicamente cuando, agotados los criterios generales de interpretación contractual (arts. 1281 y siguientes CC) y el criterio del contenido natural del contrato ya visto en el capítulo 1, subsiste una duda razonable sobre el sentido de la cláusula; no permite descartar el sentido literal claro de una cláusula válidamente incorporada. Segunda, se proyecta con especial intensidad sobre las cláusulas delimitadoras redactadas de forma ambigua, reforzando en la práctica la distinción del art. 3 LCS: una cláusula delimitadora oscura, además de someterse a la interpretación contra proferentem, corre el riesgo de ser recalificada como limitativa por su carácter «sorpresivo» conforme a la doctrina ya estudiada en el capítulo 1."),

    B.h2("4.4. Casuística de cláusulas típicas en el seguro de hogar"),
    B.p("La aplicación combinada de los controles de incorporación, interpretación y de la distinción delimitadora/limitativa a las cláusulas más frecuentes del ramo de hogar permite fijar algunas pautas de calificación, que se retoman con mayor detalle en los capítulos dedicados a cada cobertura:"),
    B.bullet([B.bold("Definición del riesgo cubierto (p. ej. «daños por agua»): "), B.run("cláusula delimitadora en su núcleo (qué se entiende por daño por agua a efectos de la póliza), pero susceptible de tratamiento como limitativa en sus exclusiones periféricas si se formulan de manera sorpresiva respecto del contenido típico del ramo (véase capítulo 8).")]),
    B.bullet([B.bold("Franquicias: "), B.run("generalmente calificadas como cláusulas delimitadoras del alcance económico de la cobertura, siempre que figuren en las condiciones particulares con la claridad exigida por el art. 3 LCS.")]),
    B.bullet([B.bold("Sublímites cuantitativos (joyas, dinero en efectivo, equipos electrónicos): "), B.run("delimitadoras en su formulación estándar, pero limitativas cuando se apartan sensiblemente de lo que un asegurado medio esperaría de la suma asegurada general del contenido sin advertencia destacada.")]),
    B.bullet([B.bold("Cláusulas de valoración (valor real, valor de reposición, valor de nuevo): "), B.run("como se vio en el capítulo 1 a propósito de la STS 2233/2020 (ROJ: STS 2233/2020), la fijación del criterio de valoración por «valor real» sin cumplir los requisitos formales del art. 3 LCS ha sido calificada como cláusula limitativa inoponible al asegurado.")]),
    B.bullet([B.bold("Cláusulas de exclusión por falta de mantenimiento o vetustez de instalaciones: "), B.run("requieren especial atención al requisito de destacado formal y aceptación específica, por su potencial de vaciar de contenido la cobertura típica de daños por agua en viviendas de cierta antigüedad (capítulo 8 y capítulo 16).")]),

    B.h2("4.5. El control de contenido cuando el tomador es consumidor: remisión"),
    B.p("Cuando el tomador del seguro de hogar tiene la condición de consumidor o usuario —el supuesto ampliamente mayoritario en la práctica—, a los controles de incorporación e interpretación se añade un tercer control, el de contenido, que permite declarar la nulidad de las cláusulas abusivas conforme al Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios, con independencia de que superen o no los controles anteriores. Este control de contenido, con su propia metodología y casuística, se desarrolla con detalle en el capítulo 25 de esta obra."),

    B.h2("4.6. Ficha para el profesional"),
    B.fichaBox("Metodología de análisis de una cláusula controvertida", B.AZUL, [
      "Paso 1 — Incorporación: ¿tuvo el tomador oportunidad real de conocer la cláusula? ¿Se entregó la póliza y sus condiciones generales antes del siniestro? (arts. 5 y 7 LCGC).",
      "Paso 2 — Calificación: ¿la cláusula delimita el riesgo o limita un derecho ya nacido? Aplicar el test de la cláusula sorpresiva (capítulo 1).",
      "Paso 3 — Requisitos formales: si es limitativa, ¿cumple el destacado tipográfico y la aceptación específica del art. 3 LCS?",
      "Paso 4 — Interpretación: si persiste la duda sobre su sentido, aplicar el art. 1288 CC (contra proferentem) con cita de la STS 1701/2023 y de los precedentes que cita.",
      "Paso 5 — Contenido: si el tomador es consumidor, verificar adicionalmente su conformidad con el TRLGDCU (capítulo 25).",
    ]),

    B.h2("4.7. Ficha para el asegurado"),
    B.fichaBox("Señales de alerta al leer su póliza", "8A5A00", [
      "Si no recibió las condiciones generales completas al contratar (solo un resumen o las condiciones particulares), reclame su entrega por escrito y conserve copia de la reclamación: puede ser decisivo si más adelante hay una disputa sobre el alcance de su cobertura.",
      "Si una cláusula admite dos lecturas razonables y la aseguradora la interpreta siempre en su contra, recuerde que la ley dice justamente lo contrario: la duda debe resolverse a su favor (art. 1288 CC).",
      "Desconfíe de las definiciones que reducen, en la letra pequeña de las condiciones generales, lo que las condiciones particulares o la publicidad del producto le hicieron esperar.",
    ]),

    B.h2("4.8. Checklist: banderas rojas en la redacción de una póliza"),
    B.bullet("1. Ausencia de acuse de recibo o firma de entrega de las condiciones generales."),
    B.bullet("2. Definiciones de riesgo con múltiples remisiones cruzadas entre condiciones generales, particulares y especiales."),
    B.bullet("3. Exclusiones formuladas de forma genérica, sin destacado tipográfico ni firma específica."),
    B.bullet("4. Sublímites que no aparecen destacados frente a la suma asegurada general."),
    B.bullet("5. Discrepancias entre lo publicitado o explicado verbalmente y el texto de las condiciones generales."),
    B.bullet("6. Cláusulas de valoración del contenido no explicitadas con claridad en las condiciones particulares."),
    B.bullet("7. Referencias a normativa técnica o estándares de mantenimiento sin concreción de su contenido exigible."),

    B.h2("Bibliografía citada"),
    B.p("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    B.p("VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo05 };
