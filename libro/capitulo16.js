const B = require("./build");

function capitulo16() {
  return [
    B.chapterHeading(16, "Pago de la indemnización, mora del asegurador e intereses"),

    B.sumario([
      "16.1. El pago del importe mínimo (art. 18 LCS)",
      "16.2. La mora del asegurador y su régimen especial (art. 20 LCS)",
      "16.3. Cálculo de los intereses de demora",
      "16.4. La causa justificada de exoneración: doctrina restrictiva del Tribunal Supremo",
      "16.5. La pendencia de un proceso judicial como (in)suficiente causa justificada",
      "16.6. Ficha para el profesional",
      "16.7. Ficha para el asegurado",
      "16.8. Checklist: reclamación de intereses del art. 20 LCS",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia el régimen de la mora del asegurador del art. 20 LCS, uno de los preceptos de mayor eficacia disuasoria de todo el ordenamiento asegurador español, con especial atención a la doctrina jurisprudencial —marcadamente restrictiva hacia el asegurador— sobre qué constituye «causa justificada» de exoneración, y en particular a la reiterada afirmación de la Sala Primera de que la simple pendencia de un proceso judicial no exonera, por sí sola, del pago de estos intereses.",
      "mora del asegurador, art. 20 LCS, intereses de demora, causa justificada",
      "This chapter examines the insurer's default regime under Article 20 of the Insurance Contract Act, one of the most deterrent provisions in Spanish insurance law, focusing on the markedly restrictive case law on what constitutes 'justified cause' for exoneration, and in particular on the Supreme Court's consistent holding that the mere pendency of judicial proceedings does not, on its own, excuse the insurer from paying default interest.",
      "insurer default, default interest, justified cause, litigation pendency"
    ),
    B.spacer(200),

    B.h2("16.1. El pago del importe mínimo"),
    B.p("Antes de examinar el régimen de mora propiamente dicho, conviene recordar la obligación, ya avanzada en capítulos anteriores, de pago del importe mínimo debido:"),
    B.legalBox("Art. 18 LCS", "El asegurador está obligado a satisfacer la indemnización al término de las investigaciones y peritaciones necesarias para establecer la existencia del siniestro y, en su caso, el importe de los daños que resulten del mismo. En cualquier supuesto, el asegurador deberá efectuar, dentro de los cuarenta días, a partir de la recepción de la declaración del siniestro, el pago del importe mínimo de lo que el asegurador pueda deber, según las circunstancias por él conocidas."),
    B.p("Esta obligación de pago del importe mínimo dentro de los cuarenta días —con independencia de que la liquidación definitiva del daño requiera más tiempo— es el primer umbral temporal relevante para el cómputo de los intereses de demora, según se desarrolla en el epígrafe siguiente."),

    B.h2("16.2. La mora del asegurador y su régimen especial"),
    B.p(["El artículo 20 LCS, ya reproducido íntegramente en el capítulo 1, articula un régimen de intereses moratorios especial y más gravoso que el general de los arts. 1108 CC y 576 LEC, cuya aplicación excluye expresamente", B.fn("El carácter especial y excluyente del régimen de intereses del art. 20 LCS frente al régimen general de mora del Código Civil y de la Ley de Enjuiciamiento Civil responde a una opción deliberada del legislador de 1995, que quiso dotar al asegurado de un mecanismo disuasorio reforzado frente a la tentación de dilación sistemática por parte de las aseguradoras; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 20, sobre los antecedentes de la reforma operada por la Ley 30/1995."), "."]),
    B.p("Los elementos esenciales de este régimen, sistematizados a partir del art. 20 LCS, son:"),
    B.bullet([B.bold("Presupuesto de la mora: "), B.run("no satisfacer la prestación en tres meses desde el siniestro, o no pagar el importe mínimo en cuarenta días desde la declaración.")]),
    B.bullet([B.bold("Imposición de oficio: "), B.run("el juez debe imponer estos intereses de oficio, sin necesidad de que se soliciten expresamente ni de reclamación judicial previa para su devengo día a día.")]),
    B.bullet([B.bold("Cuantía: "), B.run("interés legal del dinero incrementado en un 50 %; transcurridos dos años desde el siniestro sin pago, el interés anual no podrá ser inferior al 20 %.")]),
    B.bullet([B.bold("Dies a quo: "), B.run("la fecha del siniestro, salvo incumplimiento del deber de comunicación en plazo, en cuyo caso el término inicial se traslada a la fecha de la comunicación (capítulo 13).")]),
    B.bullet([B.bold("Inaplicabilidad del régimen general: "), B.run("expresamente excluidos el art. 1108 CC y el párrafo cuarto del art. 921 LEC (hoy, en sustancia, el art. 576 LEC), salvo las previsiones de este último sobre revocación total o parcial de la sentencia.")]),

    B.h2("16.3. Cálculo de los intereses de demora"),
    B.p("La práctica de la liquidación de estos intereses exige distinguir dos tramos temporales: durante los dos primeros años desde el siniestro, el interés aplicable es el legal del dinero vigente en cada momento incrementado en un 50 %; transcurridos esos dos años sin que la indemnización haya sido satisfecha, el interés no podrá ser en ningún caso inferior al 20 % anual, con independencia de cuál sea el interés legal del dinero vigente en ese momento, lo que en la práctica convierte a este segundo tramo en un severo desincentivo económico a la dilación prolongada por parte de la aseguradora."),

    B.h2("16.4. La causa justificada de exoneración: doctrina restrictiva del Tribunal Supremo"),
    B.p(["El único cauce legal de exoneración de estos intereses es la concurrencia de «causa justificada» (art. 20.8.º LCS) por parte de la aseguradora, concepto jurídico indeterminado cuya interpretación jurisprudencial ha sido, de forma constante, marcadamente restrictiva, en coherencia con la finalidad disuasoria del precepto"]),
    B.jurisBox("STS, Sala de lo Civil, de 27 de septiembre de 2023 (ROJ: STS 3983/2023; ECLI:ES:TS:2023:3983; MP: Seoane Spiegelberg)", "«La simple pendencia de un proceso no puede constituir, por sí solo, causa justificada para obviar la imposición de los intereses moratorios; pues entonces las compañías de seguros no liquidarían los siniestros y esperarían a que se promovieran acciones judiciales contra ellas, lo que conduciría a la frustración de la finalidad perseguida por el art. 20 de la LCS, que se convertiría en papel mojado en contra de la voluntad del legislador.»"),
    B.p("La misma sentencia matiza, no obstante, que esta regla general admite excepciones cuando concurren circunstancias verdaderamente singulares: en el caso concreto enjuiciado, se apreció causa justificada porque existía una vía administrativa previa cuyo pronunciamiento alteraba sustancialmente los conceptos indemnizables respecto de los finalmente reclamados en vía judicial, lo que permitía calificar como razonable la prudencia de la aseguradora en esperar dicho pronunciamiento antes de liquidar. Estas excepciones deben interpretarse, en todo caso, restrictivamente y de forma casuística, sin que puedan generalizarse como excusa sistemática frente a cualquier litigio."),

    B.h2("16.5. La pendencia de un proceso judicial como (in)suficiente causa justificada"),
    B.p("La regla de la STS 3983/2023 no es aislada: la jurisprudencia reciente reitera de forma constante que la mera existencia de un litigio sobre la procedencia o cuantía de la indemnización —incluida la propia discrepancia sobre la interpretación de una cláusula de la póliza— no constituye, por sí misma, causa justificada de exoneración, correspondiendo a la aseguradora acreditar una razón objetiva y específica, distinta de la mera resistencia procesal, que justifique su falta de pago en plazo. Esta doctrina, de aplicación transversal a todas las coberturas del seguro de hogar estudiadas en la Parte II de esta obra, convierte a los intereses del art. 20 LCS en un instrumento de negociación de primer orden en cualquier reclamación extrajudicial: la amenaza fundada de su devengo —especialmente una vez transcurridos los dos años que activan el suelo del 20 % anual— incentiva poderosamente el pago temprano por parte de la aseguradora."),

    B.h2("16.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control para la reclamación de intereses del art. 20 LCS", B.AZUL, [
      "Fijar con precisión la fecha del siniestro como dies a quo, salvo incumplimiento del deber de comunicación en plazo (capítulo 13).",
      "Calcular los intereses por tramos: interés legal + 50 % durante los dos primeros años; suelo del 20 % anual a partir de entonces.",
      "Ante la alegación de causa justificada por la aseguradora, exigir la acreditación de una razón objetiva y específica, recordando que la mera pendencia del proceso no basta (STS 3983/2023, ROJ: STS 3983/2023).",
      "Solicitar la imposición de oficio de estos intereses en la demanda, sin perjuicio de argumentarlos expresamente para reforzar su aplicación.",
    ]),

    B.h2("16.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre los intereses por retraso de su aseguradora", "8A5A00", [
      "Si su aseguradora tarda más de tres meses desde el siniestro en pagarle, o más de cuarenta días en abonarle al menos el importe mínimo, tiene derecho a intereses de demora, que se suman a la indemnización.",
      "Estos intereses son muy superiores a los intereses legales ordinarios: pueden alcanzar el interés legal del dinero incrementado en un 50 %, y un mínimo del 20 % anual si el retraso supera los dos años.",
      "No necesita reclamarlos expresamente ante un tribunal para que se devenguen día a día desde el siniestro, aunque conviene mencionarlos siempre en cualquier reclamación.",
    ]),

    B.h2("16.8. Checklist: reclamación de intereses del art. 20 LCS"),
    B.bullet("1. ¿Cuál es la fecha del siniestro y la de comunicación a la aseguradora?"),
    B.bullet("2. ¿Se abonó el importe mínimo dentro de los cuarenta días desde la declaración?"),
    B.bullet("3. ¿Se satisfizo la indemnización completa dentro de los tres meses desde el siniestro?"),
    B.bullet("4. En caso de retraso, ¿invoca la aseguradora una causa justificada? ¿Es objetiva y específica, o meramente procesal?"),
    B.bullet("5. ¿Han transcurrido más de dos años desde el siniestro sin pago (activación del suelo del 20 % anual)?"),
    B.bullet("6. ¿Se han calculado correctamente los intereses por tramos temporales?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo16 };
