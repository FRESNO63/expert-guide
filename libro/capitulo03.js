const B = require("./build");

function capitulo03() {
  return [
    B.chapterHeading(3, "Fase precontractual y distribución de seguros"),

    B.sumario([
      "3.1. El régimen de distribución de seguros: mediadores, agentes, corredores y banca-seguros",
      "3.2. Deberes generales de información precontractual del distribuidor",
      "3.3. El deber de asesoramiento y el test de exigencias y necesidades",
      "3.4. Agentes y corredores: independencia y responsabilidad",
      "3.5. El seguro de hogar vinculado a préstamo hipotecario",
      "3.6. Ficha para el profesional",
      "3.7. Ficha para el asegurado",
      "3.8. Checklist: revisión de la fase precontractual",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo antecede al estudio de la formación del contrato propiamente dicha para examinar la fase precontractual del seguro de hogar y el régimen de distribución de seguros introducido por el Real Decreto-ley 3/2020, en transposición de la Directiva (UE) 2016/97: los deberes de información y asesoramiento de mediadores y aseguradoras, la distinción funcional entre agentes y corredores, y el régimen especial del seguro vinculado a préstamo hipotecario, contexto en el que se contrata una parte muy significativa de las pólizas de hogar en España.",
      "distribución de seguros, mediador de seguros, agente, corredor, deber de asesoramiento, seguro vinculado a hipoteca",
      "This chapter precedes the study of contract formation proper to examine the pre-contractual phase of homeowners' insurance and the insurance distribution regime introduced by Royal Decree-Law 3/2020, transposing Directive (EU) 2016/97: the information and advice duties of intermediaries and insurers, the functional distinction between tied agents and independent brokers, and the special regime for insurance linked to a mortgage loan, the context in which a very significant share of Spanish homeowners' policies are sold.",
      "insurance distribution, insurance intermediary, agent, broker, duty to advise, mortgage-linked insurance"
    ),
    B.spacer(200),

    B.h2("3.1. El régimen de distribución de seguros: mediadores, agentes, corredores y banca-seguros"),
    B.p(["Una parte sustancial de la litigiosidad del seguro de hogar tiene su origen, no en el clausulado de la póliza, sino en lo ocurrido antes de firmarla: en qué se le explicó —o no se le explicó— al tomador sobre el alcance real de su cobertura. El Real Decreto-ley 3/2020, de 4 de febrero, que incorpora al ordenamiento español la Directiva (UE) 2016/97 sobre distribución de seguros, disciplina esta fase con un grado de detalle desconocido en la LCS de 1980", B.fn("La Ley 26/2006, de mediación de seguros y reaseguros privados, que rigió esta materia hasta 2020, ya había avanzado buena parte de este régimen; el RD-ley 3/2020 lo refuerza y lo alinea con el estándar comunitario, ampliando su ámbito subjetivo a la propia aseguradora cuando distribuye directamente sus productos, no solo a los mediadores independientes; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado a la distribución de seguros."), "."]),
    B.p("El régimen distingue varias figuras de distribuidor que el profesional debe saber identificar en cada expediente, porque el origen de la contratación condiciona buena parte de la estrategia probatoria cuando se discute qué se explicó al tomador: la propia aseguradora, cuando vende directamente sus productos (incluida la contratación telefónica o por internet); los agentes de seguros, vinculados en exclusiva o casi exclusiva a una o varias aseguradoras determinadas; los corredores de seguros, que actúan con independencia de cualquier aseguradora concreta; y los operadores de banca-seguros, canal de distribución muy relevante en la práctica española por su conexión con la contratación de préstamos hipotecarios."),

    B.h2("3.2. Deberes generales de información precontractual del distribuidor"),
    B.p("Los arts. 173 y 174 del RD-ley 3/2020 imponen, respectivamente al mediador y a la propia aseguradora, un catálogo detallado de información que debe suministrarse al cliente con carácter previo a la contratación:"),
    B.legalBox("Art. 173.1 RD-ley 3/2020 (extracto)", "Antes de la celebración de un contrato de seguro, el mediador de seguros deberá proporcionar al cliente, con suficiente antelación, la información siguiente: a) Su identidad y dirección, así como su condición de mediador de seguros. b) Si ofrece asesoramiento en relación con los productos de seguro comercializados. [...] i) [...] si facilita asesoramiento basándose en un análisis objetivo y personalizado; está contractualmente obligado a realizar actividades de distribución de seguros exclusivamente con una, o [...] varias entidades aseguradoras [...]; o no está contractualmente obligado a realizar actividades de distribución de seguros exclusivamente con una o varias entidades aseguradoras [...]. j) La naturaleza de la remuneración recibida en relación con el contrato de seguro."),
    B.p("Esta información —en particular, si el distribuidor asesora con base en un análisis objetivo del mercado o se limita a ofrecer los productos de una o varias aseguradoras determinadas— resulta decisiva para valorar posteriormente el alcance del deber de asesoramiento efectivamente exigible en cada contratación concreta, estudiado en el epígrafe siguiente."),

    B.h2("3.3. El deber de asesoramiento y el test de exigencias y necesidades"),
    B.p(["Más allá de la mera información sobre su propia condición, el distribuidor de seguros está sujeto a un deber activo de determinar las necesidades del cliente y de ofrecerle un producto adecuado a ellas, deber que se intensifica cuando el distribuidor declara prestar asesoramiento"]),
    B.legalBox("Art. 175.1 y 175.2 RD-ley 3/2020", "Antes de la celebración de un contrato de seguro, el distribuidor de seguros determinará, basándose en informaciones obtenidas del cliente, las exigencias y las necesidades de dicho cliente y facilitará al mismo información objetiva acerca del producto de seguro de forma comprensible, de modo que el cliente pueda tomar una decisión fundada. Cualquier contrato que se proponga debe respetar las exigencias y necesidades del cliente en materia de seguros. Si se facilita asesoramiento antes de la celebración de un contrato determinado, el distribuidor de seguros facilitará al cliente una recomendación personalizada en la que explique por qué un producto concreto satisfará mejor las exigencias y necesidades del cliente."),
    B.p("Trasladado a la práctica del hogar, este deber exige del distribuidor —sea agente, corredor o la propia aseguradora— algo más que limitarse a recabar los datos identificativos y la dirección del inmueble: debe indagar sobre el uso de la vivienda, la existencia de objetos de valor, la composición del núcleo familiar a efectos de la responsabilidad civil, y explicar de forma comprensible por qué el producto ofrecido, y no otro, se adapta a esas circunstancias. El incumplimiento de este deber, cuando resulta determinante de una contratación inadecuada a las necesidades reales del cliente, puede fundar una reclamación de responsabilidad frente al distribuidor —civil, e incluso profesional, distinta de la propia reclamación de cobertura frente a la aseguradora— cuya naturaleza y régimen se estudian en el epígrafe siguiente."),

    B.h2("3.4. Agentes y corredores: independencia y responsabilidad"),
    B.p(["La distinción entre agentes y corredores de seguros, que la normativa vigente de distribución hereda de la ya derogada Ley 26/2006 y, antes, de la Ley 9/1992, tiene una relevancia práctica que trasciende lo puramente terminológico, según explica con particular claridad una sentencia ya clásica de la Sala Primera"]),
    B.jurisBox("STS, Sala de lo Civil, de 7 de febrero de 2007 (ROJ: STS 696/2007; ECLI:ES:TS:2007:696; MP: Marín Castán)", "«Mientras los agentes de seguros actúan ante el consumidor de seguros creando necesariamente una apariencia de prolongación de la entidad aseguradora a la que se encuentran vinculados y ofrecen al posible tomador los seguros de dicha aseguradora, los corredores de seguros deben ofrecer un asesoramiento profesional fundado en su independencia y explicar al posible tomador del seguro las coberturas que, de entre las existentes en el mercado, mejor se adapten, a su juicio profesional, a las necesidades de quien se encuentra expuesto al riesgo [...]. El corredor de seguros [...] no sólo no actúa con el respaldo de las entidades de seguros sino que [...] debe estar libre de cualquier vínculo que suponga afección a las mismas.»"),
    B.p("De esta distinción se deriva una consecuencia práctica de primer orden para el profesional que evalúa una eventual responsabilidad del distribuidor: el estándar de diligencia exigible a un corredor —comparar el mercado y recomendar la opción objetivamente más adecuada— es sustancialmente más exigente que el exigible a un agente, cuyo papel es representar y ofrecer los productos de la aseguradora a la que está vinculado, sin que quepa reprocharle, con carácter general, no haber comparado con ofertas de la competencia."),

    B.h2("3.5. El seguro de hogar vinculado a préstamo hipotecario"),
    B.p(["Una parte muy relevante de la contratación de seguros de hogar en España se produce en el contexto de la formalización de un préstamo hipotecario, en el que la entidad financiera exige la contratación de un seguro de daños sobre el inmueble como condición del préstamo. La Ley 5/2019, reguladora de los contratos de crédito inmobiliario, disciplina con detalle esta práctica, en principio prohibida como venta vinculada salvo la excepción específica que la propia ley contempla para el seguro de daños del inmueble hipotecado"]),
    B.legalBox("Art. 17.3 Ley 5/2019 (extracto)", "Como excepción a la prohibición de las prácticas de venta vinculada [...], los prestamistas o intermediarios de crédito inmobiliario podrán exigir al prestatario la suscripción de una póliza de seguro en garantía del cumplimiento de las obligaciones del contrato de préstamo, así como la suscripción de un seguro de daños respecto del inmueble objeto de hipoteca [...]. En este caso el prestamista deberá aceptar pólizas alternativas de todos aquellos proveedores que ofrezcan unas condiciones y un nivel de prestaciones equivalentes a la que aquel hubiera propuesto [...]. El prestamista no podrá cobrar comisión o gasto alguno por el análisis de las pólizas alternativas [...]. La aceptación por el prestamista de una póliza alternativa [...] no podrá suponer empeoramiento en las condiciones de cualquier naturaleza del préstamo."),
    B.p("El derecho del prestatario a sustituir la póliza ofrecida por la propia entidad financiera por una póliza alternativa de condiciones equivalentes, sin coste de análisis ni empeoramiento de las condiciones del préstamo, es una de las herramientas de mayor rentabilidad práctica —y más desconocidas por el consumidor medio— en la contratación del seguro de hogar vinculado a hipoteca: permite, en la práctica, contratar la cobertura de daños con la aseguradora que el cliente prefiera, siempre que acredite un nivel de prestaciones equivalente al exigido por la entidad prestamista."),

    B.h2("3.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control en la fase precontractual", B.AZUL, [
      "Identificar el canal de distribución por el que se contrató la póliza (aseguradora directa, agente, corredor, banca-seguros) y su relevancia sobre el estándar de asesoramiento exigible.",
      "Reclamar y conservar la documentación de información precontractual (arts. 173-174 RD-ley 3/2020) y, en su caso, la recomendación personalizada del art. 175.2.",
      "Ante un corredor, valorar si concurrió un auténtico análisis comparativo del mercado adecuado a las necesidades del cliente, conforme al estándar reforzado de la STS 696/2007 (ROJ: STS 696/2007).",
      "En seguros vinculados a préstamo hipotecario, verificar si el cliente conocía y pudo ejercer su derecho a la póliza alternativa del art. 17.3 de la Ley 5/2019.",
    ]),

    B.h2("3.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber antes de contratar su seguro de hogar", "8A5A00", [
      "Pregunte a quien le vende el seguro si le asesora comparando el mercado (corredor) o solo le ofrece los productos de una compañía (agente): el nivel de comparación que puede esperar es distinto.",
      "Exija que le expliquen por qué ese producto concreto se adapta a sus necesidades, no solo su precio.",
      "Si su banco le exige un seguro de hogar para concederle la hipoteca, sepa que tiene derecho a contratarlo con la aseguradora que prefiera, siempre que ofrezca coberturas equivalentes, sin que ello pueda empeorar las condiciones de su préstamo.",
      "Guarde toda la documentación informativa que le entreguen antes de firmar: puede ser decisiva si más adelante hay una discrepancia sobre lo que se le explicó.",
    ]),

    B.h2("3.8. Checklist: revisión de la fase precontractual"),
    B.bullet("1. ¿Por qué canal se contrató la póliza (aseguradora directa, agente, corredor, banca-seguros)?"),
    B.bullet("2. ¿Se entregó la información precontractual exigida por los arts. 173-174 RD-ley 3/2020?"),
    B.bullet("3. ¿Se ofreció asesoramiento? En tal caso, ¿existe recomendación personalizada documentada (art. 175.2)?"),
    B.bullet("4. Si el distribuidor era corredor, ¿comparó realmente el mercado o se limitó a ofrecer un único producto?"),
    B.bullet("5. Si el seguro está vinculado a una hipoteca, ¿se informó al cliente de su derecho a una póliza alternativa (art. 17.3 Ley 5/2019)?"),
    B.bullet("6. ¿Existen indicios de incumplimiento del deber de asesoramiento que puedan fundar una reclamación autónoma frente al distribuidor?"),

    B.h2("Bibliografía citada"),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo03 };
