const B = require("./build");

function capitulo19() {
  return [
    B.chapterHeading(19, "Infraseguro, sobreseguro y regla proporcional"),

    B.sumario([
      "15.1. El principio indemnizatorio como fundamento de la regla proporcional",
      "15.2. El infraseguro y la regla proporcional del art. 30 LCS",
      "15.3. La exclusión pactada de la regla proporcional",
      "15.4. El sobreseguro (art. 27 LCS)",
      "15.5. Infraseguro y concurrencia de seguros: dos figuras que no deben confundirse",
      "15.6. Partidas excluidas de la regla proporcional por pacto expreso",
      "15.7. Ficha para el profesional",
      "15.8. Ficha para el asegurado",
      "15.9. Checklist: verificación de la suma asegurada",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo analiza la regla proporcional del art. 30 LCS, aplicable cuando la suma asegurada es inferior al valor real del interés asegurado en el momento del siniestro, y su reverso, el sobreseguro del art. 27 LCS. Se dedica especial atención a la distinción, frecuentemente confundida en la práctica y clarificada por la jurisprudencia, entre el infraseguro (defecto de suma asegurada en una única póliza) y la concurrencia de seguros (pluralidad de pólizas sobre un mismo interés), cuyos regímenes jurídicos, aunque inspirados en el mismo principio indemnizatorio, son sustancialmente distintos.",
      "infraseguro, regla proporcional, art. 30 LCS, sobreseguro, concurrencia de seguros",
      "This chapter examines the proportional rule of Article 30 of the Insurance Contract Act, applicable when the sum insured is lower than the actual value of the insured interest at the time of loss, and its counterpart, over-insurance under Article 27. Particular attention is paid to the distinction — frequently blurred in practice and clarified by case law — between under-insurance (an insufficient sum insured under a single policy) and concurrent insurance (multiple policies over the same interest), whose legal regimes, though both rooted in the indemnity principle, differ substantially.",
      "under-insurance, proportional rule, over-insurance, concurrent insurance"
    ),
    B.spacer(200),

    B.h2("15.1. El principio indemnizatorio como fundamento de la regla proporcional"),
    B.p(["Como se anticipó en el capítulo 2, el seguro de daños está gobernado por el principio indemnizatorio del art. 26 LCS, que prohíbe el enriquecimiento del asegurado a través del seguro. La regla proporcional del infraseguro es una manifestación directa de este principio: si el asegurado ha declarado y asegurado un valor inferior al real del interés, pagando en consecuencia una prima también inferior a la que técnicamente correspondería al riesgo real, resultaría contrario a la mutualidad aseguradora que, producido un siniestro parcial, percibiera una indemnización íntegra sin haber soportado el coste actuarial correspondiente", B.fn("La regla proporcional del infraseguro traduce en el plano indemnizatorio el mismo principio de equivalencia entre prima y riesgo que informa el deber precontractual de declaración (art. 10 LCS) y la agravación del riesgo (art. 11 LCS), estudiados en el capítulo 4: en los tres casos, la ley ajusta la prestación del asegurador a la prima efectivamente cobrada en relación con la que correspondería al riesgo real; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado a la suma asegurada y sus vicisitudes."), "."]),

    B.h2("15.2. El infraseguro y la regla proporcional del art. 30 LCS"),
    B.legalBox("Art. 30 LCS", "Si en el momento de la producción del siniestro la suma asegurada es inferior al valor del interés, el asegurador indemnizará el daño causado en la misma proporción en la que aquélla cubre el interés asegurado. Las partes, de común acuerdo, podrán excluir en la póliza o con posterioridad a la celebración del contrato, la aplicación de la regla proporcional prevista en el párrafo anterior."),
    B.p("La aplicación práctica de la regla se resume en una fórmula que todo profesional del ramo debe manejar con soltura: indemnización = daño × (suma asegurada / valor real del interés). Así, si una vivienda tiene un valor de reconstrucción de 300.000 euros y solo está asegurada por 200.000 euros, y sufre un daño parcial de 30.000 euros, la indemnización se reducirá a 20.000 euros (30.000 × 200.000/300.000), con independencia de que el daño concreto no agote la suma asegurada contratada. Esta consecuencia —contraintuitiva para el asegurado medio, que suele creer que basta con que el daño no supere la suma asegurada para obtener indemnización íntegra— exige una labor pedagógica constante del profesional al explicar el resultado de la liquidación."),

    B.h2("15.3. La exclusión pactada de la regla proporcional"),
    B.p("El segundo párrafo del art. 30 LCS permite a las partes excluir convencionalmente la regla proporcional, posibilidad que la práctica aseguradora ha convertido en habitual mediante las cláusulas de «seguro a primer riesgo», frecuentes en pólizas de hogar para determinadas partidas (por ejemplo, gastos de desescombro, honorarios de arquitecto, o incluso el contenido en su conjunto en determinados productos), en las que la aseguradora renuncia a aplicar la regla proporcional hasta el límite pactado, indemnizando el daño real hasta dicho límite con independencia de la relación entre suma asegurada y valor total del interés."),

    B.h2("15.4. El sobreseguro"),
    B.legalBox("Art. 27 LCS", "La suma asegurada representa el límite máximo de la indemnización a pagar por el asegurador en cada siniestro."),
    B.p("El reverso del infraseguro es el sobreseguro: la suma asegurada excede notablemente el valor real del interés. Puesto que el art. 27 LCS fija la suma asegurada como límite máximo —nunca como derecho a una indemnización automática por ese importe—, el sobreseguro no genera, por sí mismo, derecho a una indemnización superior al daño realmente sufrido; su efecto práctico principal es, más bien, el pago de una prima superior a la técnicamente necesaria, sin beneficio indemnizatorio correlativo, lo que aconseja al profesional revisar periódicamente la adecuación de la suma asegurada al valor real del inmueble, tanto para evitar el infraseguro como el sobreseguro."),

    B.h2("15.5. Infraseguro y concurrencia de seguros: dos figuras que no deben confundirse"),
    B.p(["La distinción entre infraseguro (defecto de suma asegurada dentro de una misma póliza) y concurrencia de seguros (pluralidad de pólizas sobre un mismo riesgo e interés, estudiada en el capítulo 8 a propósito del art. 32 LCS) es, pese a su aparente sencillez conceptual, fuente frecuente de confusión práctica, como ilustra una sentencia ya clásica de la Sala Primera dictada precisamente en un supuesto en que el asegurado pretendió, sin éxito, reconducir un problema de infraseguro a la figura de la concurrencia de seguros"]),
    B.jurisBox("STS, Sala de lo Civil, de 14 de noviembre de 2002 (ROJ: STS 7531/2002; ECLI:ES:TS:2002:7531; MP: Marín Castán)", "«[La parte recurrente] vuelve a insistir aquí en mezclar el infraseguro con la concurrencia de seguros [...]. [No] es que a los gastos de desescombro no se les deba aplicar la regla proporcional como seguro a primer riesgo, sino la interpretación de las cláusulas de la póliza concretamente dedicadas a este punto estableciendo una suma porcentual, supuesto habitual en la práctica aseguradora que modifica esa pauta general de inaplicabilidad de la regla proporcional a este concepto.»"),
    B.p("La sentencia ilustra dos ideas de utilidad práctica constante. Primera, la incomunicabilidad de pólizas distintas —aunque suscritas con el mismo tomador para centros o inmuebles diferentes— impide sumar sus respectivas sumas aseguradas para evitar la aplicación de la regla proporcional a una de ellas: cada póliza responde con su propia suma asegurada en relación con el interés que específicamente cubre. Segunda, determinadas partidas (como los gastos de desescombro) pueden quedar excluidas de la regla proporcional general no por la vía del art. 30, párrafo segundo, sino por la propia configuración de la cláusula que las regula como garantía a primer riesgo con un porcentaje o cuantía autónoma sobre la suma general."),

    B.h2("15.6. Partidas excluidas de la regla proporcional por pacto expreso"),
    B.p("En la práctica de las pólizas de hogar, es habitual encontrar excluidas de la regla proporcional general —mediante su configuración como garantías a primer riesgo— partidas como los gastos de desescombro y demolición, los honorarios técnicos de reconstrucción, los gastos de realojo provisional y, en ocasiones, la propia garantía de contenido hasta un determinado porcentaje de la suma de continente. La correcta identificación de estas partidas exige una lectura atenta de las condiciones particulares, pues su existencia puede alterar sustancialmente el resultado económico de una liquidación afectada por infraseguro en el resto de la póliza."),

    B.h2("15.7. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante la aplicación de la regla proporcional", B.AZUL, [
      "Verificar el valor real del interés asegurado en el momento del siniestro (normalmente, el valor de reconstrucción del continente o de reposición del contenido) frente a la suma asegurada contratada.",
      "Comprobar si existe pacto expreso de exclusión de la regla proporcional, general o limitado a determinadas partidas (garantías a primer riesgo).",
      "Distinguir con precisión el infraseguro de la concurrencia de seguros, conforme a la doctrina de la STS de 14 de noviembre de 2002 (ROJ: STS 7531/2002): pólizas distintas no se suman para evitar la regla proporcional.",
      "Recalcular la fórmula de la regla proporcional (daño × suma asegurada / valor real) con precisión aritmética antes de aceptar o impugnar la liquidación de la aseguradora.",
    ]),

    B.h2("15.8. Ficha para el asegurado"),
    B.fichaBox("Cómo evitar el infraseguro en su vivienda", "8A5A00", [
      "Revise periódicamente si la suma asegurada de su póliza (continente y contenido) sigue correspondiéndose con el valor real de su vivienda y sus enseres, especialmente tras reformas o revalorizaciones.",
      "Recuerde que un daño parcial no se indemniza necesariamente en su totalidad si su vivienda está infraasegurada: la indemnización se reduce proporcionalmente aunque el daño no agote la suma asegurada.",
      "Pregunte a su aseguradora si existen garantías contratadas «a primer riesgo» (sin regla proporcional) para gastos de desescombro, honorarios técnicos o realojo.",
    ]),

    B.h2("15.9. Checklist: verificación de la suma asegurada"),
    B.bullet("1. ¿Cuál es la suma asegurada de continente y de contenido, por separado?"),
    B.bullet("2. ¿Cuál es el valor real del interés asegurado en el momento del siniestro?"),
    B.bullet("3. ¿Existe infraseguro? En su caso, ¿cuál es la proporción aplicable?"),
    B.bullet("4. ¿Existe pacto de exclusión de la regla proporcional, general o para partidas concretas?"),
    B.bullet("5. ¿Existen otras pólizas sobre el mismo inmueble? ¿Se trata de infraseguro o de concurrencia de seguros?"),
    B.bullet("6. ¿Es la suma asegurada manifiestamente superior al valor real (sobreseguro), con la consiguiente prima excesiva?"),

    B.h2("Bibliografía citada"),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo19 };
