const B = require("./build");

function capitulo03() {
  return [
    B.chapterHeading(3, "Formación del contrato y deber de declaración del riesgo"),

    B.sumario([
      "3.1. Fases de formación del contrato: solicitud, proposición y perfección (arts. 5 y 6 LCS)",
      "3.2. El deber precontractual de declaración del riesgo (art. 10 LCS)",
      "3.3. Consecuencias del incumplimiento del deber de declaración",
      "3.4. La agravación del riesgo durante la vigencia del contrato (arts. 11 y 12 LCS)",
      "3.5. El pago de la prima y sus consecuencias (art. 15 LCS)",
      "3.6. Ficha para el profesional",
      "3.7. Ficha para el asegurado",
      "3.8. Checklist: el cuestionario de riesgo en el seguro de hogar",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia el iter contractual del seguro de hogar desde la solicitud hasta la perfección del contrato, con especial atención al deber precontractual de declaración del riesgo del art. 10 LCS —cuya reforma por el Real Decreto-ley 5/2023 reforzó la exigencia de cuestionario a cargo del asegurador— y a la agravación sobrevenida del riesgo del art. 11 LCS, dos de los mecanismos de control de la asimetría informativa entre tomador y asegurador más invocados en la litigación del ramo.",
      "formación del contrato de seguro, cuestionario de riesgo, art. 10 LCS, declaración del riesgo, agravación del riesgo, dolo, culpa grave",
      "This chapter traces the formation of the homeowners' insurance contract, from application to perfection, focusing on the policyholder's pre-contractual duty to disclose risk-relevant circumstances under Article 10 of the Spanish Insurance Contract Act —reinforced by the 2023 reform requiring a insurer-drafted questionnaire— and on the aggravation-of-risk duty under Article 11, two of the principal mechanisms addressing information asymmetry in insurance litigation.",
      "contract formation, risk questionnaire, disclosure duty, risk aggravation, wilful misconduct, gross negligence"
    ),
    B.spacer(200),

    B.h2("3.1. Fases de formación del contrato: solicitud, proposición y perfección"),
    B.p("La LCS distingue con precisión tres momentos en el iter contractual, cuya correcta identificación resulta relevante para determinar, entre otras cosas, desde cuándo corre la cobertura provisional:"),
    B.legalBox("Art. 6 LCS", "La solicitud de seguro no vinculará al solicitante. La proposición de seguro por el asegurador vinculará al proponente durante un plazo de quince días. Por acuerdo de las partes, los efectos del seguro podrán retrotraerse al momento en que se presentó la solicitud o se formuló la proposición."),
    B.bullet([B.bold("Solicitud: "), B.run("la petición inicial del futuro tomador, que no genera vínculo alguno; puede retirarse libremente.")]),
    B.bullet([B.bold("Proposición de seguro: "), B.run("la oferta formal del asegurador, que sí le vincula durante quince días. Es sobre este documento —cuando existe— sobre el que debe verificarse la coherencia posterior de la póliza, conforme al mecanismo de subsanación del art. 8 LCS estudiado en el capítulo 2.")]),
    B.bullet([B.bold("Perfección y formalización: "), B.run("el contrato de seguro es consensual, pero la LCS exige su formalización escrita como requisito de constancia y prueba, no de validez ad solemnitatem.")]),
    B.legalBox("Art. 5 LCS", "El contrato de seguro y sus modificaciones o adiciones deberán ser formalizadas por escrito. El asegurador está obligado a entregar al tomador del seguro la póliza o, al menos, el documento de cobertura provisional."),

    B.h2("3.2. El deber precontractual de declaración del riesgo"),
    B.p(["El artículo 10 LCS es, junto con el artículo 3, el precepto que con mayor frecuencia protagoniza la litigación sobre denegación de cobertura en el seguro de hogar. Su redacción vigente —resultante de la reforma operada por el Real Decreto-ley 5/2023, de 27 de junio— acentuó sustancialmente la posición del tomador frente a la práctica anterior, centrada en un modelo de \"declaración espontánea\" del riesgo", B.fn("Antes de la reforma de 2023, el precepto obligaba al tomador a declarar «todas las circunstancias por él conocidas que puedan influir en la valoración del riesgo», lo que la práctica aseguradora instrumentalizaba mediante cuestionarios de alcance muy amplio; la reforma de 2023 reforzó el modelo de «declaración-cuestionario» en detrimento del modelo de «declaración espontánea», acercando el régimen español al de otros ordenamientos de nuestro entorno; sobre esta evolución, vid. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 10, en sus últimas actualizaciones."), ":"]),
    B.legalBox("Art. 10 LCS", "El tomador del seguro tiene el deber, antes de la conclusión del contrato, de declarar al asegurador, de acuerdo con el cuestionario que éste le someta, todas las circunstancias por él conocidas que puedan influir en la valoración del riesgo. Quedará exonerado de tal deber si el asegurador no le somete cuestionario o cuando, aun sometiéndoselo, se trate de circunstancias que puedan influir en la valoración del riesgo y que no estén comprendidas en él. [...] Si el siniestro sobreviene antes de que el asegurador haga la declaración [de rescisión por reserva o inexactitud], la prestación de éste se reducirá proporcionalmente a la diferencia entre la prima convenida y la que se hubiese aplicado de haberse conocido la verdadera entidad del riesgo. Si medió dolo o culpa grave del tomador del seguro quedará el asegurador liberado del pago de la prestación."),
    B.p("El modelo vigente es, por tanto, un modelo de declaración-cuestionario y no de declaración espontánea: el tomador únicamente está obligado a responder con veracidad a lo que se le pregunta expresamente. Si el asegurador no somete cuestionario alguno al tomador —por ejemplo, en una contratación telefónica o por internet en la que se limita a recabar los datos identificativos y la dirección del inmueble— el tomador queda enteramente exonerado del deber de declaración, con independencia de cuán relevante fuera la circunstancia omitida."),
    B.p(["La doctrina jurisprudencial insiste en la carga que este modelo hace pesar sobre la aseguradora: es esta quien debe acreditar la existencia de un cuestionario, su contenido concreto y la falta de veracidad o la reserva del tomador al responderlo", B.fn("La STS, Sala de lo Civil, de 16 de marzo de 2016 (ROJ: STS 1208/2016; ECLI:ES:TS:2016:1208; MP: Orduña Moreno) —que recoge, a su vez, la doctrina de las SSTS 1200/2007, de 15 de noviembre, y 600/2006, de 1 de junio— resume el criterio con especial claridad: el art. 10 LCS «ha concebido más que un deber de declaración, un deber de contestación o respuesta del tomador de lo que se le pregunta por el asegurador», de manera que no basta la simple declaración genérica de «buen estado de salud» o «riesgo normal» sin preguntas específicas, ni exonera al asegurador el hecho de que el cuestionario lo cumplimente materialmente un mediador o el personal de una entidad financiera actuando por su cuenta; cfr. BATALLER GRAU, J. et al., op. cit., ad art. 10."), ", correspondiendo al tomador únicamente acreditar, en su caso, que respondió con veracidad a lo efectivamente preguntado."]),

    B.h2("3.3. Consecuencias del incumplimiento del deber de declaración"),
    B.p("El artículo 10 LCS anuda al incumplimiento del deber de declaración un régimen escalonado que distingue tres situaciones:"),
    B.bullet([B.bold("Descubrimiento antes del siniestro: "), B.run("el asegurador dispone de un mes desde que conoce la reserva o inexactitud para rescindir el contrato, conservando las primas del período en curso salvo que medie dolo o culpa grave del propio asegurador.")]),
    B.bullet([B.bold("Siniestro antes de la declaración de rescisión, sin dolo ni culpa grave del tomador: "), B.run("la prestación del asegurador se reduce proporcionalmente, en la misma proporción entre la prima realmente pagada y la que se hubiera fijado de haberse conocido el riesgo real (regla proporcional del art. 10, no confundir con la del infraseguro del art. 30, estudiada en el capítulo 15).")]),
    B.bullet([B.bold("Siniestro antes de la declaración de rescisión, con dolo o culpa grave del tomador: "), B.run("el asegurador queda enteramente liberado del pago de la prestación.")]),
    B.p("En la práctica del seguro de hogar, este último supuesto se plantea con frecuencia en relación con circunstancias del inmueble no declaradas al contratar —por ejemplo, un estado de conservación deficiente de las instalaciones, obras estructurales pendientes de licencia, o el uso efectivo de la vivienda como local de negocio o alquiler turístico cuando se contrató como vivienda habitual—, siempre que tales circunstancias hubieran sido objeto de pregunta expresa en el cuestionario."),

    B.h3("3.3.1. La agravación del riesgo durante la vigencia del contrato"),
    B.p("Distinto del deber precontractual de declaración es el deber, ya durante la vigencia del contrato, de comunicar las circunstancias sobrevenidas que agraven el riesgo asegurado:"),
    B.legalBox("Art. 11 LCS", "El tomador del seguro o el asegurado deberán durante la vigencia del contrato comunicar al asegurador, tan pronto como le sea posible, la alteración de los factores y las circunstancias declaradas en el cuestionario previsto en el artículo anterior que agraven el riesgo y sean de tal naturaleza que si hubieran sido conocidas por éste en el momento de la perfección del contrato no lo habría celebrado o lo habría concluido en condiciones más gravosas."),
    B.p("El precepto se limita, tras la reforma de 2023, a las circunstancias que fueron objeto del cuestionario inicial: si una determinada circunstancia (por ejemplo, el número de ocupantes de la vivienda o la existencia de una alarma conectada) no fue objeto de pregunta al contratar, su alteración posterior no genera deber de comunicación alguno. El régimen de consecuencias del incumplimiento (art. 12 LCS) reproduce, mutatis mutandis, el esquema del art. 10 LCS: liberación del asegurador en caso de mala fe, reducción proporcional de la prestación en los demás casos."),

    B.h2("3.4. El pago de la prima y sus consecuencias"),
    B.p("El deber capital del tomador es, naturalmente, el pago de la prima. El artículo 15 LCS regula con detalle las consecuencias de su impago, distinción esencial para el profesional que defiende a un asegurado al que se deniega la cobertura por esta causa:"),
    B.legalBox("Art. 15 LCS", "Si por culpa del tomador la primera prima no ha sido pagada, o la prima única no lo ha sido a su vencimiento, el asegurador tiene derecho a resolver el contrato o a exigir el pago de la prima debida en vía ejecutiva con base en la póliza. Salvo pacto en contrario, si la prima no ha sido pagada antes de que se produzca el siniestro, el asegurador quedará liberado de su obligación. En caso de falta de pago de una de las primas siguientes, la cobertura del asegurador queda suspendida un mes después del día de su vencimiento. Si el asegurador no reclama el pago dentro de los seis meses siguientes al vencimiento de la prima se entenderá que el contrato queda extinguido."),
    B.p("La distinción entre primera prima (o prima única) y primas sucesivas es determinante: el impago de la primera prima libera al asegurador de forma prácticamente automática si el siniestro ocurre antes del pago, mientras que el impago de una prima sucesiva únicamente suspende la cobertura transcurrido un mes desde su vencimiento —no de forma inmediata— y exige, además, que la aseguradora no haya dejado transcurrir seis meses sin reclamar el pago, pues en tal caso el contrato se entiende extinguido y no meramente suspendido."),

    B.h2("3.5. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante una denegación de cobertura por el art. 10 LCS", B.AZUL, [
      "Reclamar a la aseguradora la aportación del cuestionario efectivamente sometido al tomador: sin cuestionario documentado, no puede prosperar la excepción del art. 10 LCS.",
      "Verificar que las preguntas del cuestionario fueran lo suficientemente concretas y específicas sobre la circunstancia que se dice omitida; las cláusulas de estilo genérico («declaro que el riesgo es normal») no equivalen a cuestionario en sentido del art. 10 LCS.",
      "Distinguir con precisión el régimen de exoneración total (dolo o culpa grave) del de reducción proporcional (reserva o inexactitud sin dolo ni culpa grave): la carga de la prueba del dolo o la culpa grave corresponde a la aseguradora.",
      "Ante la agravación sobrevenida del riesgo (art. 11 LCS), comprobar que la circunstancia alegada por la aseguradora hubiera sido objeto del cuestionario inicial: si no lo fue, no existe deber de comunicación posterior.",
      "En materia de impago de primas, diferenciar primera prima (liberación cuasi automática del asegurador) de primas sucesivas (suspensión al mes, extinción a los seis meses de inactividad de la aseguradora).",
    ]),

    B.h2("3.6. Ficha para el asegurado"),
    B.fichaBox("Recomendaciones al contratar y durante la vigencia de la póliza", "8A5A00", [
      "Responda con veracidad a todas las preguntas del cuestionario de contratación, por muy irrelevantes que le parezcan: una respuesta inexacta puede dar lugar a la pérdida total de la indemnización si concurre mala fe.",
      "Conserve una copia del cuestionario cumplimentado (o de la grabación, si la contratación fue telefónica) junto con la póliza.",
      "Si durante la vigencia de la póliza cambian de forma relevante las circunstancias que le preguntaron al contratar (por ejemplo, realiza obras estructurales, cambia el uso de la vivienda o instala/retira sistemas de seguridad que se le preguntaron), comuníquelo a la aseguradora tan pronto como sea posible.",
      "Domicilie el pago de la prima y revise que no se produzcan devoluciones bancarias: el impago, aunque sea involuntario, puede suspender o extinguir su cobertura conforme al art. 15 LCS.",
    ]),

    B.h2("3.7. Checklist: el cuestionario de riesgo en el seguro de hogar"),
    B.bullet("1. ¿Existió cuestionario escrito o grabado, cumplimentado por o a instancia de la aseguradora?"),
    B.bullet("2. ¿Las preguntas eran específicas y concretas sobre la circunstancia controvertida, o meramente genéricas?"),
    B.bullet("3. ¿La circunstancia omitida era conocida efectivamente por el tomador en el momento de contratar?"),
    B.bullet("4. ¿La aseguradora ejerció su facultad de rescisión en el plazo de un mes desde que conoció la reserva o inexactitud (art. 10 LCS)?"),
    B.bullet("5. ¿Se invoca dolo o culpa grave? En tal caso, ¿qué prueba aporta la aseguradora?"),
    B.bullet("6. En caso de agravación sobrevenida, ¿la circunstancia agravante había sido objeto del cuestionario inicial (art. 11 LCS)?"),
    B.bullet("7. ¿Está la prima al corriente de pago? ¿Se trata de la primera prima o de una sucesiva?"),

    B.h2("Bibliografía citada"),
    B.p("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo03 };
