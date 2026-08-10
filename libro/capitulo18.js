const B = require("./build");

function capitulo18() {
  return [
    B.chapterHeading(18, "Peritación: designación, procedimiento y tercer perito"),

    B.sumario([
      "18.1. El procedimiento pericial del art. 38 LCS: naturaleza y función",
      "18.2. Fases del procedimiento: designación, acuerdo y tercer perito",
      "18.3. El alcance vinculante del dictamen: la distinción clave entre liquidación del daño e interpretación del contrato",
      "18.4. La impugnación judicial del dictamen: plazos y requisitos",
      "18.5. Retraso del asegurado en la iniciación del expediente y sus consecuencias sobre los intereses",
      "18.6. Ficha para el profesional",
      "18.7. Ficha para el asegurado",
      "18.8. Checklist: gestión del procedimiento pericial",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia en profundidad el procedimiento de peritación contradictoria del art. 38 LCS, con especial atención a la distinción, fijada por reiterada jurisprudencia de la Sala Primera, entre el ámbito estrictamente vinculante del dictamen pericial —la liquidación cuantitativa del daño— y las cuestiones de naturaleza jurídica —interpretación del contrato y alcance de la cobertura— que quedan extramuros de dicho carácter vinculante y corresponden en exclusiva a los tribunales.",
      "peritación, art. 38 LCS, tercer perito, dictamen vinculante, interpretación del contrato",
      "This chapter examines in depth the contradictory expert appraisal procedure under Article 38 of the Insurance Contract Act, focusing on the distinction, established by consistent Supreme Court case law, between the strictly binding scope of the expert report —the quantitative assessment of the loss— and matters of a legal nature —contract interpretation and the scope of cover— which fall outside that binding effect and remain exclusively within the courts' competence.",
      "expert appraisal, third expert, binding report, contract interpretation"
    ),
    B.spacer(200),

    B.h2("18.1. El procedimiento pericial del art. 38 LCS: naturaleza y función"),
    B.p(["El artículo 38 LCS regula, con un grado de detalle procedimental infrecuente en la propia Ley, el mecanismo de determinación pericial contradictoria del daño en el seguro contra daños, aplicable con carácter general al seguro de hogar salvo que las partes alcancen un acuerdo directo sobre el importe de la indemnización", B.fn("El procedimiento del art. 38 LCS es, en la caracterización de la propia jurisprudencia, un cauce extrajudicial de naturaleza pericial y liquidadora, no arbitral en sentido técnico, cuya función se agota en la fijación cuantitativa del daño cuando las partes discrepan sobre su importe; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado a la liquidación del siniestro."), "."]),
    B.legalBox("Art. 38 LCS (extracto)", "Si las partes se pusiesen de acuerdo en cualquier momento sobre el importe y la forma de la indemnización, el asegurador deberá pagar la suma convenida [...]. Si no se lograse el acuerdo [...], cada parte designará un Perito, debiendo constar por escrito la aceptación de éstos. [...] Cuando no haya acuerdo entre los peritos, ambas partes designarán un tercer perito de conformidad. De no existir esta, se podrá promover expediente en la forma prevista en la Ley de la Jurisdicción Voluntaria o en la legislación notarial [...]. El dictamen de los Peritos, por unanimidad o por mayoría, se notificará a las partes de manera inmediata y en forma indubitada, siendo vinculante para éstas, salvo que se impugne judicialmente por alguna de las partes, dentro del plazo de treinta días, en el caso del asegurador y ciento ochenta en el del asegurado, computados ambos desde la fecha de su notificación."),

    B.h2("18.2. Fases del procedimiento: designación, acuerdo y tercer perito"),
    B.bullet([B.bold("Designación de peritos de parte: "), B.run("cada parte nombra su propio perito; si una de ellas no lo hace en los ocho días siguientes al requerimiento de la otra, se entiende que acepta el dictamen del perito de la parte diligente, quedando vinculada por él.")]),
    B.bullet([B.bold("Acuerdo entre peritos: "), B.run("si los peritos de parte alcanzan acuerdo, lo reflejan en un acta conjunta con las causas del siniestro, la valoración de los daños y la propuesta de indemnización.")]),
    B.bullet([B.bold("Tercer perito: "), B.run("de no alcanzarse acuerdo, las partes designan de común acuerdo un tercer perito; en su defecto, cualquiera de ellas puede promover expediente de jurisdicción voluntaria o notarial para su designación judicial o notarial.")]),
    B.bullet([B.bold("Dictamen final: "), B.run("el dictamen de los peritos, por unanimidad o mayoría, se notifica a las partes y deviene vinculante, salvo impugnación judicial en plazo.")]),

    B.h2("18.3. El alcance vinculante del dictamen: liquidación del daño frente a interpretación del contrato"),
    B.p(["La cuestión de mayor trascendencia práctica en este ámbito es la del alcance exacto del carácter vinculante del dictamen pericial. La jurisprudencia más reciente de la Sala Primera ha fijado, con particular claridad, una distinción capital que el profesional debe dominar", B.fn("Esta distinción resuelve una tensión estructural del art. 38 LCS: si el dictamen fuera vinculante en toda cuestión, incluida la de si un determinado daño está o no cubierto por la póliza, se estaría desplazando a los peritos —técnicos en la valoración del daño, no en Derecho— una función jurisdiccional que la Constitución reserva a los tribunales; cfr. BATALLER GRAU, J. et al., op. cit., ad art. 38."), ":"]),
    B.jurisBox("STS, Sala de lo Civil, de 26 de julio de 2021 (ROJ: STS 3193/2021; ECLI:ES:TS:2021:3193; MP: Seoane Spiegelberg)", "«El ámbito vinculante del informe pericial [está] circunscrito a la determinación de la valoración de las cosas y no a la decisión sobre el ámbito de la cobertura del seguro litigioso, al ser la primera una cuestión propia de la pericia, mientras que la segunda es de naturaleza jurídica reservada a los órganos jurisdiccionales con intervención de los letrados de las partes [...]. La discrepancia de las partes en la valoración del daño convierte en preceptivo el procedimiento extrajudicial, constituyendo objeto exclusivo de la actividad pericial que se desarrolla la función liquidadora del mismo, determinando la fuerza vinculante del dictamen [...] una vez firme, que, en buena lógica, alcanza exclusivamente a lo que es objeto de la actividad pericial, la liquidación del daño.»"),
    B.p("La consecuencia práctica de esta doctrina es doble y de enorme utilidad para el profesional. De un lado, un dictamen pericial firme e inatacado por el cauce específico del art. 38 LCS impide reabrir, por vía judicial ordinaria, la discusión sobre el importe del daño ya liquidado. De otro lado —y este es el matiz decisivo—, dicho dictamen no impide en absoluto discutir judicialmente si un determinado concepto está o no cubierto por la póliza, si resulta aplicable una exclusión, o cuál es la interpretación correcta de una cláusula controvertida: estas son, en toda circunstancia, cuestiones jurídicas ajenas al objeto de la pericia y reservadas a los tribunales, con independencia de que el dictamen pericial haya adquirido firmeza."),

    B.h2("18.4. La impugnación judicial del dictamen: plazos y requisitos"),
    B.p("La firmeza del dictamen —y, con ella, su fuerza vinculante en el ámbito estrictamente liquidador— exige que no se impugne judicialmente dentro de los plazos legales (treinta días para el asegurador, ciento ochenta para el asegurado, desde la notificación). La jurisprudencia exige que dicha impugnación sea expresa, no bastando reservas genéricas o disconformidades extraprocesales:"),
    B.jurisBox("STS, Sala de lo Civil, de 14 de septiembre de 2016 (ROJ: STS 4056/2016; ECLI:ES:TS:2016:4056; MP: Baena Ruiz)", "«El dictamen por unanimidad o por mayoría es vinculante para las partes, salvo que se impugne judicialmente dentro de los plazos que se establecen. Tal impugnación ha de ser expresa y si no se lleva a cabo el dictamen pericial deviene en inatacable [...]. El dictamen de peritos [...] será vinculante cuando adquiera firmeza por no haber sido impugnado expresamente en los plazos que establece el artículo 38 LCS, pero, sin embargo, en el presente supuesto se ha impugnado de modo expreso, detallándose minuciosamente las causas de impugnación, por lo que procede decidir sobre ella.»"),
    B.p("La determinación del dies a quo del plazo de impugnación puede complicarse cuando la designación del tercer perito se ha tramitado mediante expediente de jurisdicción voluntaria, supuesto en el que la Sala Primera ha debido precisar desde qué notificación concreta —la del propio dictamen o la de la resolución del expediente de designación— comienza a correr el plazo, remitiendo en todo caso a la fecha de notificación indubitada del dictamen definitivo conforme al tenor literal del art. 38 LCS."),

    B.h2("18.5. Retraso del asegurado en la iniciación del expediente y sus consecuencias sobre los intereses"),
    B.p("Cuando el retraso en la tramitación del expediente pericial es imputable al propio asegurado —por ejemplo, por demorar la designación de su perito o la aportación de la documentación necesaria—, dicho retraso puede repercutir en el cómputo de los intereses de demora del art. 20 LCS, estudiados en el capítulo 20, en la medida en que la falta de liquidez de la indemnización durante ese período pueda considerarse, según las circunstancias del caso, causa justificada de exoneración parcial de la aseguradora, sin que ello suponga alterar el término inicial legal del cómputo (la fecha del siniestro), sino modular la eventual concurrencia de causa justificada durante el período de demora efectivamente imputable al asegurado."),

    B.h2("18.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control en el procedimiento del art. 38 LCS", B.AZUL, [
      "Distinguir siempre si la discrepancia versa sobre la valoración cuantitativa del daño (vinculante tras la firmeza del dictamen) o sobre la interpretación del contrato y el alcance de la cobertura (siempre revisable judicialmente, conforme a la STS 3193/2021, ROJ: STS 3193/2021).",
      "Verificar el cumplimiento estricto de los plazos de designación de peritos y de impugnación (treinta días para la aseguradora, ciento ochenta para el asegurado), y que la impugnación, si procede, sea expresa y motivada (STS 4056/2016, ROJ: STS 4056/2016).",
      "Ante un dictamen desfavorable por cuestiones de cobertura, no combatirlo únicamente como error pericial, sino plantear directamente la cuestión jurídica de interpretación del contrato ante los tribunales.",
      "Evaluar si el retraso en la tramitación del expediente pericial es imputable al asegurado, a efectos de su incidencia en los intereses del art. 20 LCS.",
    ]),

    B.h2("18.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre la peritación de su siniestro", "8A5A00", [
      "Si no está de acuerdo con la valoración del perito de la aseguradora, tiene derecho a designar su propio perito: hágalo cuanto antes para no demorar el proceso.",
      "Si tras el dictamen de los peritos sigue sin estar de acuerdo, puede impugnarlo judicialmente, pero debe hacerlo dentro del plazo de ciento ochenta días desde su notificación.",
      "Recuerde que, aunque el dictamen pericial sobre el importe del daño llegue a ser firme, usted siempre puede discutir judicialmente si ese daño estaba o no cubierto por su póliza.",
      "Colabore diligentemente con el proceso pericial: los retrasos que le sean imputables pueden afectar a los intereses de demora que, en otro caso, le corresponderían.",
    ]),

    B.h2("18.8. Checklist: gestión del procedimiento pericial"),
    B.bullet("1. ¿Se ha designado perito de parte por ambas partes en el plazo debido?"),
    B.bullet("2. ¿Existe acuerdo entre los peritos, o es necesario acudir a un tercer perito?"),
    B.bullet("3. ¿El dictamen se ha notificado de forma indubitada y en qué fecha?"),
    B.bullet("4. ¿La discrepancia versa sobre la valoración del daño o sobre la interpretación del contrato/cobertura?"),
    B.bullet("5. Si procede impugnación, ¿se ha formulado expresamente y dentro de plazo?"),
    B.bullet("6. ¿Existe retraso imputable a alguna de las partes con incidencia en los intereses del art. 20 LCS?"),

    B.h2("Bibliografía citada"),
    B.p("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo18 };
