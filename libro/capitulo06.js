const B = require("./build");

function capitulo06() {
  return [
    B.chapterHeading(6, "Interpretación contractual en el seguro de hogar"),

    B.sumario([
      "6.1. La interpretación del contrato de seguro: un problema cotidiano, no excepcional",
      "6.2. La interpretación literal como punto de partida (art. 1281 CC)",
      "6.3. Los cánones sistemático y finalista (arts. 1284, 1285 y 1286 CC)",
      "6.4. La expectativa razonable del asegurado como canon específico del seguro",
      "6.5. La regla de cierre: contra proferentem y nulidad por duda insalvable (arts. 1288 y 1289 CC)",
      "6.6. Método integrado de interpretación de una póliza de hogar",
      "6.7. Ficha para el profesional",
      "6.8. Ficha para el asegurado",
      "6.9. Checklist: interpretación de una cláusula controvertida",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo sistematiza los cánones de interpretación contractual del Código Civil (arts. 1281 a 1289) en su aplicación específica al seguro de hogar, completando el estudio de la regla contra proferentem ya avanzado en el capítulo 5, y proponiendo un método integrado de interpretación que combina la literalidad, la sistemática interna del contrato, la finalidad práctica perseguida por el asegurado y, solo como último recurso, las reglas de cierre en favor del adherente.",
      "interpretación del contrato, art. 1281 CC, art. 1288 CC, expectativa razonable, canon finalista",
      "This chapter systematises the Civil Code's contract interpretation canons (Articles 1281 to 1289) as applied specifically to homeowners' insurance, building on the contra proferentem rule already introduced in Chapter 5, and proposing an integrated interpretive method that combines literal wording, the contract's internal coherence, the policyholder's practical purpose and, only as a last resort, the closing rules favouring the adhering party.",
      "contract interpretation, literal interpretation, reasonable expectations, closing interpretive rules"
    ),
    B.spacer(200),

    B.h2("6.1. La interpretación del contrato de seguro: un problema cotidiano, no excepcional"),
    B.p(["Conviene despejar, desde el inicio de este capítulo, una idea errónea pero extendida: la interpretación contractual no es un recurso excepcional, reservado a los casos de cláusulas verdaderamente oscuras o contradictorias, sino la operación intelectual que, en mayor o menor medida, precede a la aplicación de cualquier cláusula de la póliza a un siniestro concreto", B.fn("La distinción entre «interpretación» (fijación del sentido de una declaración de voluntad) y «calificación» (subsunción de esa declaración ya interpretada en una categoría jurídica, como delimitadora o limitativa) es una distinción metodológica clásica que conviene no perder de vista: los cánones de este capítulo operan lógicamente antes de la calificación estudiada en los capítulos 1 y 5; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., epígrafe introductorio a la interpretación del contrato de seguro."), ". El Código Civil dedica a esta operación un conjunto de normas —arts. 1281 a 1289— que, aunque concebidas para el contrato en general, la jurisprudencia aplica de forma constante y especialmente intensa al contrato de seguro, por su condición de contrato de adhesión."]),

    B.h2("6.2. La interpretación literal como punto de partida"),
    B.legalBox("Art. 1281 CC", "Si los términos de un contrato son claros y no dejan duda sobre la intención de los contratantes, se estará al sentido literal de sus cláusulas. Si las palabras parecieren contrarias a la intención evidente de los contratantes, prevalecerá ésta sobre aquéllas."),
    B.p("El punto de partida de cualquier análisis interpretativo es, por tanto, el propio texto de la cláusula. Cuando su sentido literal es claro y no contradice la intención evidente de las partes, no hay margen para acudir a criterios interpretativos adicionales: la cláusula se aplica tal como está redactada. Solo cuando el texto admite varios sentidos razonables, o cuando su aplicación literal conduciría a un resultado manifiestamente contrario a lo que las partes quisieron, se abre paso a los cánones complementarios de los epígrafes siguientes."),

    B.h2("6.3. Los cánones sistemático y finalista"),
    B.p("Superada la interpretación puramente literal, el Código Civil ofrece criterios adicionales que la práctica del seguro de hogar utiliza con frecuencia, particularmente cuando una póliza combina condiciones generales, particulares y especiales de redacción no siempre coherente entre sí (capítulo 5):"),
    B.legalBox("Art. 1285 CC", "Las cláusulas de los contratos deberán interpretarse las unas por las otras, atribuyendo a las dudosas el sentido que resulte del conjunto de todas."),
    B.legalBox("Art. 1284 CC", "Si alguna cláusula de los contratos admitiere diversos sentidos, deberá entenderse en el más adecuado para que produzca efecto."),
    B.p(["El canon sistemático del art. 1285 CC impone leer cada cláusula en el contexto del conjunto de la póliza, no de forma aislada: una definición contenida en las condiciones generales debe interpretarse a la luz de las condiciones particulares efectivamente suscritas, y viceversa. El canon del art. 1284 CC —conocido como principio de conservación o de interpretación útil— impide interpretaciones que vacíen de contenido efectivo una cláusula, criterio de especial utilidad frente a lecturas de la aseguradora que, llevadas a su extremo, dejarían sin sentido práctico alguno una cobertura anunciada", B.fn("El principio de conservación del contrato (favor contractus), del que el art. 1284 CC es una manifestación particular, opera como límite a las interpretaciones extensivas de las exclusiones que, de aceptarse, convertirían la cobertura contratada en ilusoria; sobre su aplicación al contrato de seguro, cfr. VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, op. cit., capítulo dedicado a la interpretación."), "."]),

    B.h2("6.4. La expectativa razonable del asegurado como canon específico del seguro"),
    B.p("Junto a los cánones generales del Código Civil, la jurisprudencia de seguros ha decantado un criterio propio y específico del contrato de seguro, ya estudiado en el capítulo 1 a propósito de la doctrina de la «cláusula sorpresiva»: la interpretación debe atender al contenido natural o usual del ramo contratado, con arreglo a la ley o a la práctica aseguradora (SSTS 273/2016, de 22 de abril; 541/2016, de 14 de septiembre; y 147/2017, de 2 de marzo, ya citadas en el capítulo 1), de manera que una cláusula que se aparta sorprendentemente de esa expectativa razonable recibe, en la práctica, el tratamiento reforzado de las cláusulas limitativas con independencia de su calificación formal. Este criterio opera, en rigor, en un plano distinto mas complementario de los cánones del Código Civil: mientras estos fijan el sentido de la cláusula, aquel condiciona el régimen de oponibilidad de la cláusula una vez interpretada."),

    B.h2("6.5. La regla de cierre: contra proferentem y nulidad por duda insalvable"),
    B.p("Cuando, aplicados los cánones anteriores, subsiste una duda razonable sobre el sentido de una cláusula, entran en juego las reglas de cierre ya avanzadas en el capítulo 5, que el Código Civil articula en dos niveles sucesivos:"),
    B.legalBox("Art. 1288 CC", "La interpretación de las cláusulas oscuras de un contrato no deberá favorecer a la parte que hubiese ocasionado la oscuridad."),
    B.legalBox("Art. 1289 CC (extracto)", "Cuando absolutamente fuere imposible resolver las dudas por las reglas establecidas en los artículos precedentes [...] si el contrato fuere oneroso, la duda se resolverá en favor de la mayor reciprocidad de intereses. Si las dudas [...] recayesen sobre el objeto principal del contrato, de suerte que no pueda venirse en conocimiento de cuál fue la intención o voluntad de los contratantes, el contrato será nulo."),
    B.p("La regla contra proferentem del art. 1288 CC, ya desarrollada con detalle en el capítulo 5 con apoyo en la STS 1701/2023 (ROJ: STS 1701/2023) y en la SAP de Barcelona 6782/2018 (ROJ: SAP B 6782/2018), opera como penúltimo recurso: solo si ni siquiera ella permite despejar la duda —hipótesis excepcional en la práctica— entraría en juego la regla subsidiaria del art. 1289 CC, que en un contrato oneroso como el de seguro se resuelve en favor de la mayor reciprocidad de intereses, y que, en el extremo de que la duda recaiga sobre el objeto principal del contrato sin posibilidad de conocer la voluntad real de las partes, podría llegar a determinar la nulidad del propio contrato, consecuencia de gravedad tal que la práctica forense apenas la invoca fuera de supuestos verdaderamente extremos."),

    B.h2("6.6. Método integrado de interpretación de una póliza de hogar"),
    B.p("La combinación de los epígrafes anteriores permite proponer una secuencia metodológica de aplicación general ante cualquier cláusula controvertida de una póliza de hogar:"),
    B.bullet("1. Fijar el sentido literal de la cláusula (art. 1281 CC): ¿es realmente ambigua, o solo desfavorable al interés que se defiende?"),
    B.bullet("2. Contextualizarla dentro del conjunto de la póliza, cotejando condiciones generales, particulares y especiales (art. 1285 CC)."),
    B.bullet("3. Descartar interpretaciones que vacíen de efecto útil la cobertura contratada (art. 1284 CC)."),
    B.bullet("4. Contrastarla con el contenido natural y la expectativa razonable del ramo (capítulo 1): ¿resulta sorpresiva?"),
    B.bullet("5. Solo si persiste la duda, aplicar la regla contra proferentem a favor del asegurado (art. 1288 CC)."),
    B.bullet("6. En el supuesto excepcional de duda insalvable sobre el objeto principal del contrato, valorar la regla subsidiaria del art. 1289 CC."),

    B.h2("6.7. Ficha para el profesional"),
    B.fichaBox("Cómo argumentar la interpretación de una cláusula", B.AZUL, [
      "No saltar directamente a la regla contra proferentem: agotar primero los cánones literal, sistemático y finalista, que suelen ofrecer argumentos más sólidos y menos discutibles.",
      "Invocar siempre el canon de conservación (art. 1284 CC) frente a interpretaciones de la aseguradora que vacíen de contenido efectivo la cobertura contratada.",
      "Contrastar la cláusula con el contenido natural del ramo y la doctrina de la cláusula sorpresiva (capítulo 1) antes de acudir a los cánones subsidiarios.",
      "Reservar la invocación del art. 1289 CC, párrafo segundo (nulidad por duda insalvable), a los supuestos verdaderamente excepcionales en que ni siquiera contra proferentem permite fijar el sentido de la cláusula.",
    ]),

    B.h2("6.8. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre la interpretación de su póliza", "8A5A00", [
      "Si una cláusula de su póliza puede leerse de dos maneras razonables, la ley favorece la interpretación que le sea más beneficiosa a usted como asegurado.",
      "Una aseguradora no puede interpretar una cláusula de forma que la cobertura que usted contrató quede, en la práctica, vacía de contenido.",
      "Compare siempre lo que dice una cláusula concreta con el conjunto de su póliza: una definición aislada puede tener un sentido distinto cuando se lee junto con el resto del contrato.",
    ]),

    B.h2("6.9. Checklist: interpretación de una cláusula controvertida"),
    B.bullet("1. ¿Es realmente ambigua la cláusula, o solo desfavorable al interés que se defiende?"),
    B.bullet("2. ¿Qué sentido resulta de leerla junto con el resto de las condiciones de la póliza?"),
    B.bullet("3. ¿Alguna interpretación posible dejaría sin efecto útil la cobertura contratada?"),
    B.bullet("4. ¿Se aparta la cláusula del contenido natural y esperable del ramo?"),
    B.bullet("5. Agotados los cánones anteriores, ¿persiste una duda razonable que deba resolverse a favor del asegurado?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    B.p("VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo06 };
