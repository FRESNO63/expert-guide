const B = require("./build");

function capitulo21() {
  return [
    B.chapterHeading(21, "Cláusulas abusivas y protección de los consumidores"),

    B.sumario([
      "21.1. El tomador del seguro de hogar como consumidor",
      "21.2. El triple control de las condiciones generales: incorporación, transparencia y contenido",
      "21.3. El concepto legal de cláusula abusiva y su relación con el art. 3 LCS",
      "21.4. Consecuencias de la abusividad: nulidad y subsistencia del contrato",
      "21.5. Ficha para el profesional",
      "21.6. Ficha para el asegurado",
      "21.7. Checklist: análisis de una cláusula desde la perspectiva de consumo",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo cierra el estudio de las condiciones generales del seguro de hogar iniciado en los capítulos 1 y 4, añadiendo el tercer y último nivel de control aplicable cuando el tomador ostenta la condición de consumidor: el control de contenido o de abusividad del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios, que la jurisprudencia mantiene cuidadosamente diferenciado tanto del control de incorporación —aplicable a todo adherente— como del propio régimen del art. 3 LCS.",
      "cláusulas abusivas, TRLGDCU, control de transparencia cualificado, consumidor, nulidad",
      "This chapter closes the study of homeowners' insurance general terms begun in Chapters 1 and 4, adding the third and final layer of control applicable when the policyholder qualifies as a consumer: the content or unfairness control under the Consumer Protection Act, which case law keeps carefully distinct both from the incorporation control —applicable to any adherent— and from the specific regime of Article 3 of the Insurance Contract Act.",
      "unfair contract terms, consumer protection, qualified transparency control, nullity"
    ),
    B.spacer(200),

    B.h2("21.1. El tomador del seguro de hogar como consumidor"),
    B.p(["La inmensa mayoría de los tomadores de un seguro de hogar contratan la póliza para la protección de su vivienda habitual o segunda residencia al margen de cualquier actividad empresarial o profesional, lo que les atribuye la condición de consumidor o usuario a efectos del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (TRLGDCU), aprobado por Real Decreto Legislativo 1/2007", B.fn("La condición de consumidor puede, no obstante, decaer cuando la vivienda asegurada se afecta significativamente a una actividad económica del tomador (por ejemplo, alquiler turístico profesionalizado o local con actividad económica dentro de la propia vivienda, cuestión ya apuntada en el capítulo 11 a propósito de los nuevos riesgos del hogar), lo que exige un análisis casuístico de cada contratación concreta."), "."]),
    B.p("Esta condición activa, además de las protecciones ya estudiadas del art. 3 LCS —aplicable a todo asegurado, sea o no consumidor—, un nivel adicional y más intenso de control, con su propio fundamento normativo, metodología y consecuencias, objeto de este capítulo."),

    B.h2("21.2. El triple control de las condiciones generales: incorporación, transparencia y contenido"),
    B.p(["La jurisprudencia de la Sala Primera ha sistematizado con precisión los tres niveles de control a los que puede someterse una condición general, precisando —de forma especialmente relevante para el profesional que representa a una aseguradora frente a un tomador que no es consumidor— cuáles de ellos son de aplicación universal y cuáles quedan reservados en exclusiva a la contratación con consumidores"]),
    B.jurisBox("STS, Sala de lo Civil, de 3 de junio de 2016 (ROJ: STS 2550/2016; ECLI:ES:TS:2016:2550; MP: Vela Torres)", "«El concepto de transparencia, configurado como control de fondo o de comprensibilidad real, constituye directamente un control de abusividad y, por tanto, distinto del control de incorporación que es el que podría ser aplicado, en todo caso, de forma extensiva, por lo que al quedar reservado el control de abusividad a la esfera estricta de los consumidores, no puede ser aplicado el control de transparencia/abusividad a la contratación entre empresarios.»"),
    B.p("De esta doctrina se extrae la arquitectura completa de controles aplicable a cualquier cláusula de una póliza de hogar, que el profesional debe recorrer en el siguiente orden lógico:"),
    B.bullet([B.bold("Control de incorporación (arts. 5 y 7 LCGC, capítulo 4): "), B.run("aplicable a todo adherente, sea o no consumidor. Verifica si la cláusula llegó a formar parte del contrato (oportunidad real de conocerla, legibilidad).")]),
    B.bullet([B.bold("Control específico del art. 3 LCS (capítulos 1 y 4): "), B.run("aplicable a todo asegurado, sea o no consumidor, en su condición de destinatario específico de la protección de la LCS. Exige el destacado formal y la aceptación específica de las cláusulas limitativas.")]),
    B.bullet([B.bold("Control de transparencia material o cualificado (este capítulo): "), B.run("reservado a los consumidores. Examina si la cláusula, aunque gramaticalmente comprensible, permite al adherente medio conocer la carga económica y jurídica real que le impone, sin alterar de forma inadvertida el equilibrio del contrato.")]),
    B.bullet([B.bold("Control de contenido o de abusividad en sentido estricto (arts. 82 y siguientes TRLGDCU): "), B.run("igualmente reservado a los consumidores. Examina si la cláusula, con independencia de su transparencia, genera un desequilibrio importante e injustificado en perjuicio del consumidor.")]),

    B.h2("21.3. El concepto legal de cláusula abusiva y su relación con el art. 3 LCS"),
    B.legalBox("Art. 82.1 TRLGDCU", "Se considerarán cláusulas abusivas todas aquellas estipulaciones no negociadas individualmente y todas aquéllas prácticas no consentidas expresamente que, en contra de las exigencias de la buena fe causen, en perjuicio del consumidor y usuario, un desequilibrio importante de los derechos y obligaciones de las partes que se deriven del contrato."),
    B.p("La superposición conceptual con la categoría de las cláusulas lesivas del art. 3 LCS, ya estudiada en el capítulo 1, es evidente y no casual: ambas normas protegen, desde perspectivas complementarias, frente al mismo fenómeno de desequilibrio contractual injustificado. La diferencia práctica relevante es de origen y de alcance: la cláusula lesiva del art. 3 LCS protege a todo asegurado, consumidor o no, mientras que la cláusula abusiva del TRLGDCU exige específicamente la condición de consumidor del tomador, pero ofrece a cambio un catálogo mucho más detallado y casuístico de supuestos de abusividad (arts. 85 a 90 TRLGDCU) que puede resultar de aplicación directa a cláusulas concretas del seguro de hogar —por ejemplo, las que atribuyen a la aseguradora la facultad unilateral de interpretar el contrato, o las que imponen al consumidor cargas probatorias desproporcionadas—, con independencia de que superen o no, individualmente, el test de lesividad del art. 3 LCS."),
    B.p("El artículo 80 TRLGDCU añade, además, exigencias formales de concreción, claridad, accesibilidad y legibilidad —incluyendo, desde la reforma de 2022, un umbral mínimo de tamaño de letra y de interlineado— que complementan, sin sustituir, las exigencias específicas del art. 3 LCS sobre destacado de las cláusulas limitativas."),

    B.h2("21.4. Consecuencias de la abusividad: nulidad y subsistencia del contrato"),
    B.legalBox("Art. 83 TRLGDCU", "Las cláusulas abusivas serán nulas de pleno derecho y se tendrán por no puestas. A estos efectos, el Juez, previa audiencia de las partes, declarará la nulidad de las cláusulas abusivas incluidas en el contrato, el cual, no obstante, seguirá siendo obligatorio para las partes en los mismos términos, siempre que pueda subsistir sin dichas cláusulas. Las condiciones incorporadas de modo no transparente en los contratos en perjuicio de los consumidores serán nulas de pleno derecho."),
    B.p("La consecuencia de la abusividad —nulidad de pleno derecho y tenerla por no puesta, con subsistencia del resto del contrato— es más severa que la de la mera inoponibilidad de las cláusulas limitativas mal incorporadas conforme al art. 3 LCS: mientras que estas últimas simplemente no vinculan al asegurado (que puede, en la práctica, beneficiarse de la cobertura sin la restricción indebidamente impuesta), la cláusula declarada abusiva desaparece del contrato con efecto retroactivo y sin posibilidad de moderación o integración judicial que perjudique al consumidor, conforme a la reiterada jurisprudencia del Tribunal de Justicia de la Unión Europea sobre la Directiva 93/13/CEE, cuya transposición constituye el TRLGDCU."),

    B.h2("21.5. Ficha para el profesional"),
    B.fichaBox("Metodología de control de una cláusula cuando el tomador es consumidor", B.AZUL, [
      "Verificar en primer lugar la condición de consumidor del tomador concreto, sin darla por supuesta automáticamente.",
      "Recorrer los cuatro niveles de control en el orden lógico expuesto: incorporación, art. 3 LCS, transparencia material y contenido/abusividad, conforme a la STS 2550/2016 (ROJ: STS 2550/2016).",
      "Cotejar la cláusula controvertida con el catálogo casuístico de los arts. 85 a 90 TRLGDCU, que puede fundar su abusividad con independencia del resultado del test de lesividad del art. 3 LCS.",
      "Recordar que la declaración de abusividad no admite integración judicial en perjuicio del consumidor: la cláusula desaparece sin más, no se sustituye por una versión moderada.",
    ]),

    B.h2("21.6. Ficha para el asegurado"),
    B.fichaBox("Qué protección adicional tiene como consumidor", "8A5A00", [
      "Si contrató su seguro de hogar como particular, para su vivienda, es usted consumidor a efectos legales y tiene una protección reforzada frente a cláusulas abusivas, además de la protección general de la Ley de Contrato de Seguro.",
      "Una cláusula puede ser válida conforme al art. 3 LCS y, aun así, ser abusiva y nula si le genera un desequilibrio injustificado como consumidor.",
      "Si una cláusula se declara abusiva, desaparece del contrato, pero el resto de su póliza sigue siendo válido.",
    ]),

    B.h2("21.7. Checklist: análisis de una cláusula desde la perspectiva de consumo"),
    B.bullet("1. ¿Ostenta el tomador la condición de consumidor en esta contratación concreta?"),
    B.bullet("2. ¿Ha superado la cláusula el control de incorporación y el específico del art. 3 LCS?"),
    B.bullet("3. ¿Permite la cláusula al consumidor medio conocer la carga económica y jurídica real que le impone (control de transparencia material)?"),
    B.bullet("4. ¿Genera la cláusula un desequilibrio importante e injustificado en perjuicio del consumidor (art. 82 TRLGDCU)?"),
    B.bullet("5. ¿Encaja la cláusula en alguno de los supuestos del catálogo de los arts. 85 a 90 TRLGDCU?"),
    B.bullet("6. ¿Puede el contrato subsistir sin la cláusula declarada abusiva?"),

    B.h2("Bibliografía citada"),
    B.p("VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo21 };
