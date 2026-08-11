const B = require("./build");

function capitulo12() {
  return [
    B.chapterHeading(12, "Daños estéticos, inhabitabilidad y pérdida de alquileres"),

    B.sumario([
      "12.1. El daño estético como partida indemnizable autónoma",
      "12.2. El criterio de reposición uniforme",
      "12.3. Gastos de alojamiento provisional e inhabitabilidad",
      "12.4. Pérdida de alquileres y rentas",
      "12.5. Ficha para el profesional",
      "12.6. Ficha para el asegurado",
      "12.7. Checklist: partidas indemnizables más allá del daño material directo",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia tres partidas indemnizables que trascienden el daño material directo y que con frecuencia se olvidan o se infravaloran en la práctica de la reclamación de siniestros de hogar: el daño estético derivado de la imposibilidad de encontrar materiales idénticos a los dañados, resuelto por la jurisprudencia menor mediante el criterio de la reposición uniforme; los gastos de alojamiento provisional cuando el siniestro deja la vivienda inhabitable; y la pérdida de rentas de alquiler cuando el inmueble siniestrado se encontraba arrendado.",
      "daño estético, reposición uniforme, inhabitabilidad, gastos de alojamiento, pérdida de alquileres",
      "This chapter examines three heads of loss that go beyond direct material damage and are frequently overlooked or undervalued in practice when claiming homeowners' insurance losses: aesthetic damage arising from the impossibility of sourcing materials identical to those damaged, addressed by appellate case law through the uniform-replacement criterion; temporary accommodation costs when a loss renders the home uninhabitable; and lost rental income when the damaged property was let to a tenant.",
      "aesthetic damage, uniform replacement, uninhabitability, temporary accommodation costs, lost rental income"
    ),
    B.spacer(200),

    B.h2("12.1. El daño estético como partida indemnizable autónoma"),
    B.p(["Cuando un siniestro afecta solo a una parte de un conjunto homogéneo —los azulejos de un baño, el suelo de una estancia, la pintura de una pared—, la reparación limitada estrictamente a la zona dañada deja, con frecuencia, un resultado visualmente discordante que la jurisprudencia menor reconoce como daño estético autónomo, indemnizable con independencia y además del coste material de reparación en sentido estricto", B.fn("El reconocimiento del daño estético como partida autónoma en el ámbito de los daños materiales a inmuebles —a diferencia del daño estético en su acepción más conocida de responsabilidad civil por lesiones corporales— es una construcción jurisprudencial de raíz eminentemente práctica, fundada en la insatisfacción real del perjudicado que recibe una reparación materialmente correcta pero estéticamente desigual; cfr. la reseña de esta línea jurisprudencial en Revista Española de Seguros, op. cit."), "."]),

    B.h2("12.2. El criterio de reposición uniforme"),
    B.p("La Audiencia Provincial de Alicante ha sistematizado con particular claridad, en un supuesto de filtraciones de agua entre viviendas, el criterio que debe presidir la valoración de este tipo de daño:"),
    B.jurisBox("SAP Alicante (Sección 5.ª), de 12 de mayo de 2020 (ROJ: SAP A 614/2020; ECLI:ES:APA:2020:614; MP: García Ruiz)", "«Debe valorarse [...] si el perjudicado queda plenamente resarcido del perjuicio sufrido con la indemnización recibida [...], siendo razonable considerar que no va a encontrar satisfacción total de su perjuicio si se le obliga a mantener un cuarto de baño con azulejos de diferente tonalidad [...]. Se evidencia que se sustituyeron más azulejos de los afectados al no existir azulejos iguales en el mercado, así mismo no sólo es necesario el pintar el trozo afectado por la filtración pues para dejar uniforme una pared es necesario la pintura de todo el espacio [...]. El perito también manifestó [...] que esa valoración se ajustaba al valor de reposición de los elementos dañados y a la íntegra sustitución de todos los azulejos del cuarto de baño pues actualmente no era posible adquirir azulejos de igual clase que los que ya estaban colocados.»"),
    B.p("La propia resolución matiza, no obstante, que este criterio no ampara una extensión indiscriminada de la reparación: cuando la sustitución completa del conjunto resulta desproporcionada en relación con el daño real (por ejemplo, levantar la totalidad de un solado extenso para reparar una zona puntual y de escasa entidad visual, en un espacio de uso secundario como una cochera), los tribunales optan por una indemnización prudencial y específica por el concepto de daño estético, en lugar de la sustitución íntegra del elemento. La aplicación práctica de este criterio exige, en consecuencia, una valoración pericial que pondere tanto la imposibilidad real de encontrar materiales idénticos como la proporcionalidad de la solución propuesta en relación con la entidad del daño y la relevancia estética del espacio afectado."),

    B.h2("12.3. Gastos de alojamiento provisional e inhabitabilidad"),
    B.p("Cuando el siniestro deja la vivienda objetivamente inhabitable —por ejemplo, tras un incendio de entidad o una inundación que afecte a instalaciones esenciales—, la práctica totalidad de las pólizas de hogar incorporan una garantía de gastos de alojamiento provisional, sujeta normalmente a un límite temporal (por ejemplo, mientras duren las obras de reparación, hasta un máximo de meses) y a un límite cuantitativo diario o mensual. La activación de esta garantía exige, en la práctica, acreditar la imposibilidad objetiva de habitar la vivienda —no la mera incomodidad de convivir con obras—, extremo que conviene documentar desde el primer momento con el informe pericial inicial y, en su caso, con un certificado técnico o municipal sobre las condiciones de habitabilidad del inmueble."),

    B.h2("12.4. Pérdida de alquileres y rentas"),
    B.p("Cuando el inmueble siniestrado se encuentra arrendado, la inhabitabilidad temporal genera, además del perjuicio del ocupante (cubierto, en su caso, por su propia garantía de alojamiento si es el arrendatario quien la contrató), un perjuicio económico distinto para el propietario-arrendador: la pérdida de la renta que dejará de percibir mientras dure la reparación. Esta partida, de naturaleza análoga al lucro cesante, solo está cubierta si la póliza del propietario incorpora expresamente una garantía de pérdida de alquileres —de contratación relativamente frecuente en viviendas destinadas a arrendamiento, pero no universal en las pólizas de vivienda habitual—, cuya existencia y límites deben verificarse específicamente en cada caso, sin poder presumirse incluida dentro de la cobertura general de daños al continente."),

    B.h2("12.5. Ficha para el profesional"),
    B.fichaBox("Puntos de control sobre partidas indirectas", B.AZUL, [
      "Reclamar expresamente el daño estético como partida autónoma cuando la reparación puntual deje un resultado visualmente discordante, con apoyo pericial sobre la imposibilidad de encontrar materiales idénticos (SAP Alicante 614/2020, ROJ: SAP A 614/2020).",
      "Ponderar la proporcionalidad entre la sustitución completa de un elemento y la entidad real del daño, para evitar el riesgo de enriquecimiento injusto que limitaría la reclamación.",
      "Verificar la existencia, límite temporal y cuantitativo de la garantía de gastos de alojamiento, y documentar la inhabitabilidad objetiva del inmueble desde el primer momento.",
      "Comprobar expresamente si la póliza del propietario-arrendador incluye garantía de pérdida de alquileres antes de asumir que está cubierta.",
    ]),

    B.h2("12.6. Ficha para el asegurado"),
    B.fichaBox("Qué partidas puede reclamar además de la reparación", "8A5A00", [
      "Si tras un siniestro parcial (por ejemplo, en el baño o la cocina) no es posible encontrar azulejos o materiales idénticos, puede tener derecho a que se indemnice el desajuste estético, no solo la zona estrictamente dañada.",
      "Si su vivienda queda inhabitable, revise si su póliza cubre gastos de alojamiento provisional y durante cuánto tiempo.",
      "Si alquila su vivienda y esta queda inhabitable por el siniestro, compruebe si su póliza cubre la pérdida de la renta que dejará de percibir: no siempre está incluida por defecto.",
    ]),

    B.h2("12.7. Checklist: partidas indemnizables más allá del daño material directo"),
    B.bullet("1. ¿Existe desajuste estético tras la reparación puntual del elemento dañado?"),
    B.bullet("2. ¿Es posible encontrar en el mercado materiales idénticos a los dañados?"),
    B.bullet("3. ¿Resulta proporcionada la sustitución completa del elemento en relación con la entidad del daño?"),
    B.bullet("4. ¿Queda la vivienda objetivamente inhabitable? ¿Existe prueba técnica de ello?"),
    B.bullet("5. ¿Cubre la póliza gastos de alojamiento provisional, con qué límite temporal y cuantitativo?"),
    B.bullet("6. Si el inmueble está arrendado, ¿existe garantía específica de pérdida de alquileres?"),

    B.h2("Bibliografía citada"),
    B.p("Revista Española de Seguros (RES), Sección Española de la Asociación Internacional de Derecho de Seguros (SEAIDA), Madrid."),
  ];
}

module.exports = { capitulo12 };
