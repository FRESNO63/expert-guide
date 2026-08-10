const B = require("./build");

function capitulo14() {
  return [
    B.chapterHeading(14, "Defensa jurídica y asistencia en el hogar"),

    B.sumario([
      "10.1. El seguro de defensa jurídica como garantía autónoma",
      "10.2. El derecho de libre elección de abogado y procurador",
      "10.2.1. La delimitación del ámbito de cobertura por las Audiencias Provinciales",
      "10.3. Los límites cuantitativos a la libre elección: delimitadores, limitativos o lesivos",
      "10.4. Conflicto de intereses y defensa independiente en la garantía de responsabilidad civil",
      "10.5. La garantía de asistencia en el hogar",
      "10.6. Ficha para el profesional",
      "10.7. Ficha para el asegurado",
      "10.8. Checklist: activación de la cobertura de defensa jurídica",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia la garantía de defensa jurídica del seguro de hogar, regulada como submodalidad autónoma en los arts. 76.a) a 76.g) LCS, con particular atención al derecho de libre elección de abogado y procurador y a la controvertida calificación —delimitadora, limitativa o lesiva— de las cláusulas que fijan un límite cuantitativo a dicho derecho, resuelta por la jurisprudencia mediante un examen casuístico de la suficiencia real del límite pactado. Se completa con el estudio de la garantía, contractual y heterogénea, de asistencia en el hogar.",
      "seguro de defensa jurídica, libre elección de abogado, art. 76 LCS, cláusula limitativa, asistencia en el hogar",
      "This chapter examines the legal expenses cover of homeowners' insurance, regulated as an autonomous sub-type under Articles 76.a) to 76.g) of the Insurance Contract Act, focusing on the policyholder's right to freely choose legal counsel and on the contested classification —risk-delimiting, rights-limiting or unfair— of clauses capping that right in quantitative terms, resolved by case law through a case-by-case assessment of whether the agreed cap is genuinely sufficient. It closes with an examination of the contractual, heterogeneous home-assistance cover.",
      "legal expenses insurance, free choice of lawyer, limiting clause, home assistance cover"
    ),
    B.spacer(200),

    B.h2("10.1. El seguro de defensa jurídica como garantía autónoma"),
    B.p(["La LCS dedica a esta garantía un régimen propio, distinto del general de responsabilidad civil, en los arts. 76.a) a 76.g), incorporados por la Ley 21/1990 en trasposición de la normativa comunitaria sobre seguro de defensa jurídica. Aunque en la práctica del hogar se contrata siempre integrada en la póliza multirriesgo, conserva su autonomía funcional: cubre los gastos derivados de la defensa jurídica del asegurado, no la indemnización de un daño causado a un tercero", B.fn("La autonomía del seguro de defensa jurídica frente al de responsabilidad civil, pese a su frecuente coexistencia en una misma póliza y a su origen normativo común en la transposición de la Directiva 87/344/CEE, es un rasgo estructural destacado unánimemente por la doctrina; cfr. BATALLER GRAU, J. et al., op. cit., ad arts. 76.a) a 76.g)."), "."]),
    B.p("El artículo 74 LCS, ya estudiado en el capítulo 13 a propósito de la dirección jurídica del siniestro de responsabilidad civil, contiene una previsión que conecta ambas garantías: cuando el asegurado, ante un conflicto de intereses, opta por confiar su defensa a un profesional distinto del designado por el asegurador, este «quedará obligado a abonar los gastos de tal dirección jurídica hasta el límite pactado en la póliza» (art. 74, párrafo segundo, in fine). La garantía específica de defensa jurídica extiende y generaliza este derecho de libre elección más allá del supuesto concreto de conflicto de intereses."),

    B.h2("10.2. El derecho de libre elección de abogado y procurador"),
    B.p(["El régimen propio del seguro de defensa jurídica reconoce al asegurado el derecho a elegir libremente los profesionales que le representen y defiendan en cualquier procedimiento, derecho que la STS 584/2021 (ROJ: STS 584/2021) sitúa expresamente en el art. 76.d) LCS", B.fn("El derecho de libre elección de abogado y procurador constituye, según ha destacado la doctrina, el núcleo mismo de la protección que el legislador comunitario quiso otorgar al asegurado de defensa jurídica frente al riesgo de que el asegurador, al controlar la elección del profesional, subordinase la calidad de la defensa a sus propios intereses económicos como pagador; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado al seguro de defensa jurídica."), ", y que la propia Sala Primera resume con cita de sus propios precedentes:"]),
    B.jurisBox("STS, Sala de lo Civil, de 24 de febrero de 2021 (ROJ: STS 584/2021; ECLI:ES:TS:2021:584; MP: Parra Lucán)", "«En el ámbito del seguro de defensa jurídica, conforme al art. 76.a) LCS, el asegurador queda obligado a hacerse cargo de los gastos de la defensa jurídica libremente elegida ‘dentro de los límites establecidos en la ley y en el contrato’ [...]. La claridad y precisión es exigible a todas las cláusulas del contrato de seguro, tanto si están incluidas en las condiciones generales como en las particulares, y con independencia de que se califiquen de delimitadoras del riesgo o limitativas de los derechos del asegurado.»"),

    B.h3("10.2.1. La delimitación del ámbito de cobertura por las Audiencias Provinciales"),
    B.p("La jurisprudencia menor ha tenido ocasión de precisar, en supuestos de seguro de hogar con garantía de defensa jurídica, la frontera entre la cláusula que delimita el ámbito objetivo de esta cobertura (por ejemplo, restringiéndola a hechos derivados de la vida privada del asegurado en el ámbito del hogar) y la que, una vez definido ese ámbito, restringe adicionalmente el derecho ya reconocido:"),
    B.jurisBox("SAP Jaén (Sección 1.ª), de 15 de septiembre de 2021 (ROJ: SAP J 1184/2021; ECLI:ES:APJ:2021:1184; MP: Carrascosa González)", "«Esta Sala [...] considera que nos encontramos ante una cláusula que configura o delimita el riesgo objeto de cobertura (la ‘protección jurídica’); y no ante una cláusula limitativa de derechos. Debemos partir de que nos encontramos ante un seguro de ‘combinado del hogar’ [...], cuyo objeto y finalidad es en esencia garantizar los riesgos que puedan generarse en dicho ámbito (la vivienda) del asegurado [...]. En la doctrina se ha destacado la problemática delimitación entre la defensa jurídica propia del seguro de responsabilidad civil y el seguro de defensa jurídica [...]: en el seguro de defensa jurídica el asegurado puede adoptar una posición activa, como parte demandante, o también pasiva, como parte demandada, mientras que en el seguro de responsabilidad civil dicho sujeto sólo puede asumir aquella última condición, siempre frente a una reclamación del perjudicado.»"),
    B.p("La resolución resulta especialmente ilustrativa porque distingue con nitidez dos coberturas que, aunque próximas, responden a lógicas distintas y así deben analizarse separadamente ante cada siniestro: la defensa jurídica en sentido propio —que ampara tanto la reclamación activa del asegurado frente a terceros como su defensa pasiva— y la dirección jurídica accesoria a la responsabilidad civil estudiada en el capítulo 13 —limitada, por definición, a la posición pasiva del asegurado frente a la reclamación de un perjudicado—. La correcta calificación de en cuál de las dos coberturas encaja un siniestro concreto condiciona tanto el límite económico aplicable como el propio alcance del derecho de libre elección de profesional."),

    B.h2("10.3. Los límites cuantitativos a la libre elección: delimitadores, limitativos o lesivos"),
    B.p("La práctica totalidad de las pólizas de hogar fijan un límite económico a la cobertura de defensa jurídica en caso de libre designación de profesionales. La calificación jurídica de estos límites —cuestión sobre la que, según reconoce la propia Sala Primera, «ante el silencio del legislador, corresponde a los tribunales»— ha sido resuelta mediante un criterio funcional que atiende a la suficiencia real del límite pactado en relación con el tipo de procedimiento cubierto:"),
    B.jurisBox("STS, Sala de lo Civil, de 24 de febrero de 2021 (ROJ: STS 584/2021; ECLI:ES:TS:2021:584; MP: Parra Lucán), con cita de la STS 421/2020, de 4 de julio", "«Aunque en principio la cláusula puede calificarse como delimitadora del riesgo, en atención a las circunstancias del caso será limitativa de los derechos del asegurado, incluso lesiva, si fija unos límites notoriamente insuficientes en relación con la cuantía cubierta por el seguro de responsabilidad civil.»"),
    B.p("De esta doctrina se extrae una metodología de análisis en tres escalones que el profesional debe aplicar sistemáticamente ante cualquier límite cuantitativo de defensa jurídica: primero, verificar los requisitos formales del art. 3 LCS (destacado y, en su caso, aceptación específica); segundo, comparar el importe del límite con el coste real y previsible de una defensa jurídica adecuada al tipo de procedimiento cubierto (un límite de 600 euros, como el enjuiciado en la propia STS 584/2021, puede resultar manifiestamente insuficiente para un procedimiento ordinario o incluso para un juicio verbal de cierta complejidad); y tercero, si el límite vacía de contenido efectivo el derecho de libre elección reconocido por la ley, concluir su carácter limitativo —o, en los casos más extremos, lesivo y por tanto nulo— con independencia de su ubicación formal en el condicionado."),

    B.h2("10.4. Conflicto de intereses y defensa independiente en la garantía de responsabilidad civil"),
    B.p("Como se anticipó en el capítulo 13, cuando la reclamación de responsabilidad civil enfrenta al asegurado con otro cliente de la misma aseguradora, o concurre cualquier otro conflicto de intereses, el asegurado puede optar por una dirección jurídica independiente conforme al art. 74 LCS, sujeta también al límite cuantitativo pactado en póliza y al mismo escrutinio de suficiencia que se acaba de exponer para la garantía específica de defensa jurídica."),

    B.h2("10.5. La garantía de asistencia en el hogar"),
    B.p("Junto a la defensa jurídica propiamente dicha, la práctica aseguradora incorpora con frecuencia una garantía de «asistencia en el hogar» de naturaleza puramente contractual y heterogénea —sin correlato en un régimen legal específico de la LCS— que suele comprender servicios de urgencia (cerrajería, fontanería o electricidad de urgencia), envío de profesionales para reparaciones menores, y en ocasiones asistencia informática o telefónica. Por su naturaleza de prestación de servicios más que de indemnización dineraria, su régimen de cláusulas limitativas y su interpretación se rigen íntegramente por el art. 3 LCS y por la metodología general expuesta en el capítulo 5, sin las especialidades del régimen legal propio del seguro de defensa jurídica."),

    B.h2("10.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante un límite de defensa jurídica insuficiente", B.AZUL, [
      "Comprobar el cumplimiento de los requisitos formales del art. 3 LCS respecto del límite cuantitativo pactado.",
      "Cuantificar el coste real y previsible de una defensa jurídica adecuada al procedimiento concreto, comparándolo con el límite pactado, siguiendo la metodología de la STS 584/2021 (ROJ: STS 584/2021).",
      "Si el límite resulta notoriamente insuficiente, plantear alternativamente su calificación como cláusula limitativa mal incorporada o como cláusula lesiva nula de pleno derecho.",
      "En los seguros de responsabilidad civil con dirección jurídica del asegurador, verificar si concurre conflicto de intereses que habilite la defensa independiente del art. 74 LCS.",
    ]),

    B.h2("10.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre la defensa jurídica de su seguro de hogar", "8A5A00", [
      "Tiene derecho a elegir a su propio abogado y procurador en caso de litigio cubierto por esta garantía, no solo a los designados por la aseguradora.",
      "Revise el límite económico de esta cobertura en sus condiciones particulares: si es muy reducido en relación con el tipo de procedimiento previsible, puede no cubrir realmente los honorarios de un profesional independiente.",
      "Si su aseguradora le abona solo una parte de los honorarios de su abogado alegando el límite de la póliza, consulte si ese límite podría ser insuficiente y, por tanto, impugnable.",
    ]),

    B.h2("10.8. Checklist: activación de la cobertura de defensa jurídica"),
    B.bullet("1. ¿El conflicto está cubierto por la garantía de defensa jurídica de la póliza (materia, cuantía, momento de origen)?"),
    B.bullet("2. ¿Se ha ejercitado o comunicado el derecho de libre elección de abogado y procurador?"),
    B.bullet("3. ¿Cuál es el límite económico pactado, y resulta razonablemente suficiente para el tipo de procedimiento?"),
    B.bullet("4. ¿Existe conflicto de intereses con la propia aseguradora u otro asegurado de la misma compañía?"),
    B.bullet("5. ¿Se ha reclamado, en su caso, la diferencia entre lo abonado por la aseguradora y el coste real de la defensa?"),

    B.h2("Bibliografía citada"),
    B.p("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo14 };
