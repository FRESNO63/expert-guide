const B = require("./build");

function capitulo11() {
  return [
    B.chapterHeading(11, "Rotura de cristales, sanitarios y elementos fijos"),

    B.sumario([
      "11.1. Una garantía de origen exclusivamente contractual",
      "11.2. Elementos típicamente cubiertos",
      "11.3. Causas cubiertas y exclusiones habituales",
      "11.4. La relación con la garantía de responsabilidad civil",
      "11.5. Ficha para el profesional",
      "11.6. Ficha para el asegurado",
      "11.7. Checklist: acreditación de un siniestro de rotura",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia la garantía de rotura de cristales, espejos, sanitarios, encimeras y demás elementos fijos frágiles de la vivienda, cobertura de origen puramente contractual —sin correlato en un régimen legal específico de la LCS— cuyo tratamiento jurídico debe reconstruirse íntegramente a partir del clausulado concreto de cada póliza y de los principios generales de calificación de cláusulas ya desarrollados en los capítulos 1 y 5.",
      "rotura de cristales, elementos fijos, sanitarios, encimeras, garantía contractual",
      "This chapter examines the glass, mirror, sanitary ware, worktop and other fixed fragile element breakage cover, a cover of purely contractual origin —without a specific statutory counterpart in the Insurance Contract Act— whose legal treatment must be reconstructed entirely from the specific wording of each policy and the general clause-classification principles already developed in Chapters 1 and 5.",
      "glass breakage, fixed elements, sanitary ware, worktops, contractual cover"
    ),
    B.spacer(200),

    B.h2("11.1. Una garantía de origen exclusivamente contractual"),
    B.p(["Al igual que ocurre con los daños por agua estudiados en el capítulo 8, la garantía de rotura de cristales y elementos fijos carece de régimen legal propio en la LCS: es una cobertura de creación puramente contractual, incorporada de forma prácticamente universal a las pólizas de hogar como garantía complementaria de las troncales de incendio, agua y robo", B.fn("La ausencia de régimen legal específico para esta garantía —al igual que para la de daños por agua— exige proyectar sobre ella, con toda su intensidad, el régimen general de los arts. 1 a 44 LCS y, muy especialmente, el art. 3 LCS sobre condiciones generales y limitativas; cfr. capítulo 8, epígrafe 8.1, cuyo razonamiento es plenamente trasladable a esta garantía."), ". Su alcance exacto —qué elementos cubre, con qué franquicia, con qué sublímite— debe reconstruirse en cada caso a partir de las condiciones generales y particulares de la póliza concreta."]),

    B.h2("11.2. Elementos típicamente cubiertos"),
    B.p("La práctica aseguradora española incluye, con distinta amplitud según el producto contratado, los siguientes elementos dentro de esta garantía:"),
    B.bullet([B.bold("Cristales y vidrios: "), B.run("ventanas, puertas acristaladas, mamparas de ducha, espejos fijos, y, en pólizas más completas, mobiliario con superficies de cristal.")]),
    B.bullet([B.bold("Sanitarios: "), B.run("inodoros, lavabos, bidés y bañeras, cuya rotura, además del coste de reposición del propio elemento, puede generar un daño por agua conexo sujeto a la garantía específica del capítulo 8.")]),
    B.bullet([B.bold("Encimeras y superficies de mármol o piedra natural: "), B.run("frecuentemente sujetas a sublímites propios, dado su elevado coste de reposición y la dificultad de encontrar piezas de idénticas características, cuestión que conecta directamente con el criterio de reposición uniforme estudiado en el capítulo 12.")]),
    B.bullet([B.bold("Placas vitrocerámicas y de inducción: "), B.run("incluidas en algunas pólizas dentro de esta garantía y, en otras, tratadas como electrodoméstico sujeto a la garantía general de contenido.")]),

    B.h2("11.3. Causas cubiertas y exclusiones habituales"),
    B.p("La garantía cubre, con carácter general, la rotura accidental y súbita de los elementos descritos, con las exclusiones habituales ya sistematizadas con carácter general en el capítulo 16: desgaste, vicio propio del material, y daños causados durante obras o reformas no comunicadas a la aseguradora. La calificación de estas exclusiones como delimitadoras o limitativas sigue exactamente la misma metodología expuesta en los capítulos 1, 5 y 6: verificación de los requisitos formales del art. 3 LCS cuando proceda, contraste con el contenido natural de la garantía, e interpretación contra proferentem ante la duda razonable."),
    B.p("Una precisión práctica de utilidad: a diferencia de la garantía de incendio, cuyo art. 48 LCS cubre incluso la negligencia leve del propio asegurado (capítulo 7), esta garantía contractual no está sujeta a dicho régimen legal específico, por lo que el umbral de imputación subjetiva —si la póliza excluye la rotura causada por negligencia del propio asegurado, y con qué intensidad— depende enteramente de lo pactado, sin la red de seguridad legal que sí opera en el incendio."),

    B.h2("11.4. La relación con la garantía de responsabilidad civil"),
    B.p("Cuando la rotura de un elemento fijo causa, además, un daño a un tercero —por ejemplo, el estallido de una mampara que causa lesiones a un visitante, o la rotura de una encimera que daña bienes de un tercero durante una mudanza—, se activa simultáneamente la garantía de responsabilidad civil del cabeza de familia estudiada en el capítulo 13, en los mismos términos de coordinación entre garantías ya explicados en el capítulo 8 a propósito de los daños por agua a terceros."),

    B.h2("11.5. Ficha para el profesional"),
    B.fichaBox("Puntos de control en un siniestro de rotura", B.AZUL, [
      "Verificar exactamente qué elementos incluye esta garantía en la póliza concreta: su alcance varía notablemente de un producto a otro.",
      "Comprobar la existencia de sublímites específicos para encimeras y superficies de piedra natural, dado su elevado coste de reposición.",
      "Ante una exclusión por negligencia del asegurado, recordar que esta garantía no goza del régimen legal protector del art. 48 LCS aplicable al incendio (capítulo 7): el umbral depende íntegramente de lo pactado.",
      "Si la rotura ha causado además daños a un tercero, coordinar esta garantía con la de responsabilidad civil (capítulo 13).",
    ]),

    B.h2("11.6. Ficha para el asegurado"),
    B.fichaBox("Qué debe revisar sobre esta cobertura", "8A5A00", [
      "Compruebe si su póliza cubre cristales, sanitarios y encimeras, y con qué franquicia y sublímite para cada elemento.",
      "Si tiene encimeras de piedra natural o mármol de cierto valor, verifique el sublímite específico: puede no ser suficiente para su reposición completa.",
      "Conserve facturas o presupuestos de instalación de estos elementos: facilitan enormemente la valoración pericial en caso de siniestro.",
    ]),

    B.h2("11.7. Checklist: acreditación de un siniestro de rotura"),
    B.bullet("1. ¿Qué elemento se ha roto y está expresamente incluido en la garantía contratada?"),
    B.bullet("2. ¿Cuál es la causa de la rotura (accidental, negligencia, desgaste)?"),
    B.bullet("3. ¿Existe sublímite específico aplicable y es suficiente para la reposición?"),
    B.bullet("4. ¿Es posible encontrar en el mercado un elemento idéntico, o será necesario aplicar el criterio de reposición uniforme (capítulo 12)?"),
    B.bullet("5. ¿Ha causado la rotura, además, daños a un tercero que activen la garantía de responsabilidad civil?"),

    B.h2("Bibliografía citada"),
    B.p("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
  ];
}

module.exports = { capitulo11 };
