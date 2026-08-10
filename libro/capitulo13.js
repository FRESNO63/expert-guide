const B = require("./build");

function capitulo13() {
  return [
    B.chapterHeading(13, "Declaración y comunicación del siniestro"),

    B.sumario([
      "13.1. El deber de comunicación del siniestro (art. 16 LCS)",
      "13.2. Plazo y consecuencias del incumplimiento",
      "13.3. El deber de información sobre las circunstancias del siniestro",
      "13.4. La prueba del conocimiento del siniestro por otro medio",
      "13.5. Ficha para el profesional",
      "13.6. Ficha para el asegurado",
      "13.7. Checklist: comunicación de un siniestro de hogar",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo abre la Parte III, dedicada a la gestión del siniestro, con el estudio del deber de comunicación del art. 16 LCS: su plazo de siete días —dispositivo al alza pero no a la baja—, el régimen de consecuencias limitado a la indemnización de los daños y perjuicios efectivamente causados por el retraso (y no a la pérdida automática del derecho a la prestación), y el deber adicional de información sobre las circunstancias del siniestro, sometido a un estándar de dolo o culpa grave que lo diferencia sustancialmente del régimen del deber precontractual de declaración del riesgo estudiado en el capítulo 3.",
      "comunicación del siniestro, art. 16 LCS, plazo de siete días, deber de información",
      "This chapter opens Part III, devoted to claims handling, examining the notification duty under Article 16 of the Insurance Contract Act: its seven-day period —which may be extended but not shortened by policy terms—, the consequences regime limited to indemnifying the loss actually caused by the delay (rather than automatic forfeiture of the claim), and the further duty to inform the insurer of the circumstances of the loss, subject to a wilful misconduct or gross negligence standard distinct from the pre-contractual disclosure duty examined in Chapter 3.",
      "claim notification, seven-day period, duty to inform, forfeiture"
    ),
    B.spacer(200),

    B.h2("13.1. El deber de comunicación del siniestro"),
    B.p(["Producido el siniestro, el primer deber que recae sobre el tomador, el asegurado o el beneficiario es el de comunicarlo al asegurador, deber que la LCS configura con un rigor sensiblemente menor que el deber precontractual de declaración del riesgo estudiado en el capítulo 3, como revela la comparación de sus respectivos regímenes de consecuencias", B.fn("El distinto rigor de ambos deberes —precontractual y de comunicación del siniestro— obedece a su distinta función: el primero protege la correcta tarificación del riesgo ex ante, mientras que el segundo persigue únicamente permitir al asegurador una gestión diligente del siniestro ya acaecido; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 16."), ":"]),
    B.legalBox("Art. 16 LCS", "El tomador del seguro o el asegurado o el beneficiario deberán comunicar al asegurador el acaecimiento del siniestro dentro del plazo máximo de siete días de haberlo conocido, salvo que se haya fijado en la póliza un plazo más amplio. En caso de incumplimiento, el asegurador podrá reclamar los daños y perjuicios causados por la falta de declaración. Este efecto no se producirá si se prueba que el asegurador ha tenido conocimiento del siniestro por otro medio. El tomador del seguro o el asegurado deberá, además, dar al asegurador toda clase de informaciones sobre las circunstancias y consecuencias del siniestro. En caso de violación de este deber, la pérdida del derecho a la indemnización sólo se producirá en el supuesto de que hubiese concurrido dolo o culpa grave."),
    B.p("El plazo legal de siete días es, expresamente, un mínimo dispositivo al alza: la póliza puede ampliarlo (y así lo hacen, en la práctica, numerosas condiciones generales, que conceden plazos de hasta treinta días), pero nunca reducirlo por debajo del umbral legal, por tratarse de una previsión de carácter imperativo relativo a favor del asegurado, en línea con la regla general del art. 2 LCS estudiada en el capítulo 1."),

    B.h2("13.2. Plazo y consecuencias del incumplimiento"),
    B.p("La consecuencia legal del incumplimiento del plazo de comunicación es, a diferencia de lo que erróneamente cree buena parte del público asegurado, no la pérdida automática del derecho a la indemnización, sino una acción de resarcimiento del asegurador limitada a los daños y perjuicios que la falta de declaración le haya efectivamente causado (por ejemplo, la imposibilidad de determinar con precisión la causa del siniestro por haberse alterado irreversiblemente el lugar de los hechos, o el agravamiento del daño por la demora en adoptar medidas de contención). En la práctica, esta consecuencia es de difícil aplicación efectiva, porque exige a la aseguradora acreditar tanto el daño concreto causado por el retraso como su cuantía, prueba que rara vez se aporta con el rigor exigible, lo que explica que la denegación total de cobertura por simple retraso en la comunicación —sin acreditación de un perjuicio concreto— carezca, en rigor, de cobertura legal en el art. 16 LCS."),

    B.h2("13.3. El deber de información sobre las circunstancias del siniestro"),
    B.p("El segundo párrafo del art. 16 LCS impone, además de la comunicación del acaecimiento del siniestro, un deber más amplio de suministrar «toda clase de informaciones sobre las circunstancias y consecuencias del siniestro» —lo que en la práctica incluye responder a los requerimientos del perito, facilitar el acceso a la vivienda para su inspección, y aportar la documentación acreditativa de los daños—, cuyo incumplimiento se somete a un estándar de imputación subjetiva mucho más exigente que el de la mera comunicación tardía: solo el dolo o la culpa grave del tomador o del asegurado en el incumplimiento de este deber de información determinan la pérdida del derecho a la indemnización, en un paralelismo estructural con el régimen del art. 10 LCS (deber precontractual) y del art. 48 LCS (seguro de incendio) ya estudiados."),

    B.h2("13.4. La prueba del conocimiento del siniestro por otro medio"),
    B.p("El propio art. 16 LCS neutraliza la consecuencia indemnizatoria del retraso cuando se acredita que el asegurador tuvo conocimiento del siniestro «por otro medio», previsión de notable relevancia práctica en el ramo de hogar cuando, por ejemplo, el mismo siniestro de agua o de incendio ha sido ya comunicado por un vecino afectado, por la comunidad de propietarios, o por el propio perito designado por otra póliza concurrente (capítulo 6): en tales casos, el asegurado que comunicó tardíamente su propio siniestro puede oponer válidamente que la aseguradora ya conocía los hechos por esa vía alternativa."),

    B.h2("13.5. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante una denegación por comunicación tardía", B.AZUL, [
      "Exigir a la aseguradora que concrete y acredite el daño y perjuicio efectivamente causado por el retraso en la comunicación, no una alegación genérica de incumplimiento del plazo.",
      "Verificar si el plazo aplicable es el legal de siete días o un plazo ampliado pactado en las condiciones particulares o generales.",
      "Explorar si existe prueba de que la aseguradora tuvo conocimiento del siniestro por otro medio (comunidad de propietarios, otro asegurado, actuación policial o de bomberos).",
      "Distinguir con precisión el incumplimiento del deber de comunicación (régimen de resarcimiento de daños concretos) del incumplimiento del deber de información sobre las circunstancias del siniestro (régimen de dolo o culpa grave).",
    ]),

    B.h2("13.6. Ficha para el asegurado"),
    B.fichaBox("Cómo y cuándo comunicar un siniestro", "8A5A00", [
      "Comunique el siniestro a su aseguradora lo antes posible, idealmente el mismo día en que lo detecte, aunque el plazo legal sea de siete días: cuanto antes actúe, más fácil será probar la causa y el alcance del daño.",
      "Conserve el justificante de la comunicación (número de expediente, correo electrónico, grabación telefónica).",
      "Colabore con el perito y facilite toda la información y documentación que le soliciten sobre las circunstancias del siniestro: negarse u ocultar información deliberadamente sí puede hacerle perder el derecho a la indemnización.",
      "Si se ha retrasado en la comunicación por causa justificada (por ejemplo, ausencia prolongada), explíquelo y aporte prueba: la ley solo permite a la aseguradora reclamar el perjuicio concreto causado, no denegar la cobertura sin más.",
    ]),

    B.h2("13.7. Checklist: comunicación de un siniestro de hogar"),
    B.bullet("1. ¿Cuándo tuvo conocimiento el asegurado del siniestro y cuándo lo comunicó?"),
    B.bullet("2. ¿Qué plazo de comunicación establece la póliza concreta (legal o ampliado)?"),
    B.bullet("3. Si hubo retraso, ¿qué daño o perjuicio concreto alega la aseguradora, y lo acredita?"),
    B.bullet("4. ¿Existe prueba de que la aseguradora conocía el siniestro por otro medio?"),
    B.bullet("5. ¿Se ha cumplido el deber de información sobre las circunstancias del siniestro (documentación, acceso a la vivienda, colaboración con el perito)?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo13 };
