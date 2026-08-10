const B = require("./build");

function capitulo20() {
  return [
    B.chapterHeading(20, "Vía judicial: competencia, procedimiento y costas"),

    B.sumario([
      "20.1. Competencia territorial: el fuero especial del domicilio del asegurado",
      "20.2. Elección de procedimiento según la cuantía",
      "20.3. Legitimación activa y pasiva",
      "20.4. La prueba en el proceso de seguro de hogar",
      "20.5. Costas procesales",
      "20.6. Ficha para el profesional",
      "20.7. Ficha para el asegurado",
      "20.8. Checklist: preparación de la demanda o de la contestación",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo sistematiza el marco procesal civil aplicable a las acciones derivadas del seguro de hogar: el fuero especial en materia de seguros del art. 52.2 LEC, que favorece sistemáticamente al asegurado; la elección entre juicio verbal y ordinario según la cuantía tras la reforma de 2023; las reglas de legitimación, con particular atención a la acción directa del tercero perjudicado; y el régimen de la prueba y de las costas, con el principio del vencimiento objetivo como telón de fondo de toda la estrategia procesal.",
      "competencia territorial, fuero del asegurado, juicio verbal, juicio ordinario, legitimación, costas procesales",
      "This chapter systematises the civil procedural framework applicable to actions arising from homeowners' insurance: the special insurance jurisdiction rule of Article 52.2 of the Civil Procedure Act, which consistently favours the insured; the choice between summary and ordinary proceedings depending on the amount in dispute following the 2023 reform; standing rules, with particular attention to the injured third party's direct action; and the evidence and costs regime, with the objective-defeat principle underlying the entire procedural strategy.",
      "territorial jurisdiction, insured's forum, summary proceedings, ordinary proceedings, standing, costs"
    ),
    B.spacer(200),

    B.h2("20.1. Competencia territorial: el fuero especial del domicilio del asegurado"),
    B.p(["La LEC dedica al contrato de seguro un fuero especial que constituye, en la práctica, una de las ventajas procesales más señaladas del asegurado frente a la aseguradora, y que el profesional debe invocar sistemáticamente al redactar cualquier demanda", B.fn("El fuero especial en materia de seguros responde a la misma lógica tuitiva del asegurado que informa el conjunto de la LCS, evitando que el asegurado se vea forzado a litigar en un partido judicial distante del propio, elegido unilateralmente por la aseguradora en sus condiciones generales; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., epígrafe sobre competencia judicial en el contrato de seguro."), ":"]),
    B.legalBox("Art. 52.2 LEC", "Cuando las normas del apartado anterior no fueren de aplicación a los litigios en materia de seguros [...] será competente el tribunal del domicilio del asegurado, comprador o prestatario o el del domicilio de quien hubiere aceptado la oferta, respectivamente, o el que corresponda conforme a las normas de los artículos 50 y 51, a elección del demandante."),
    B.p("El precepto atribuye al asegurado demandante —o a la aseguradora que actúa como demandante frente a su propio asegurado, en los infrecuentes supuestos en que esto ocurre— la facultad de elegir entre el domicilio del asegurado y los fueros generales de los arts. 50 y 51 LEC (domicilio del demandado). En la inmensa mayoría de los casos, esta elección beneficia al asegurado, que puede litigar en su propio partido judicial frente a aseguradoras cuyo domicilio social se encuentra, típicamente, en otra provincia, evitando así los costes y complejidades logísticas de un litigio a distancia."),

    B.h2("20.2. Elección de procedimiento según la cuantía"),
    B.p("La determinación del cauce procesal aplicable —juicio verbal u ordinario— depende, en la generalidad de las reclamaciones de seguro de hogar por incumplimiento contractual, de la cuantía litigiosa, conforme a la reforma operada por el Real Decreto-ley 6/2023, vigente desde el 20 de marzo de 2024 y ya avanzada en el Anexo IV de esta obra:"),
    B.legalBox("Arts. 249.2 y 250.2 LEC", "Art. 249.2: Se decidirán también en el juicio ordinario las demandas cuya cuantía exceda de quince mil euros [...]. Art. 250.2: Se decidirán también en el juicio verbal las demandas cuya cuantía no exceda de quince mil euros [...]."),
    B.p("El umbral de 15.000 euros, sensiblemente elevado respecto del régimen anterior a la reforma de 2023, determina que la inmensa mayoría de las reclamaciones ordinarias de daños por agua, robo o incendio en el seguro de hogar —cuya cuantía media rara vez supera esa cifra— se tramiten por los cauces, más ágiles y económicos, del juicio verbal, reservándose el juicio ordinario a los siniestros de mayor entidad económica (destrucción total del inmueble, responsabilidad civil de cuantía elevada) o a aquellos en los que, con independencia de la cuantía, resulte de aplicación alguno de los supuestos del art. 249.1 LEC."),

    B.h2("20.3. Legitimación activa y pasiva"),
    B.p("La legitimación activa corresponde, con carácter general, al asegurado (no necesariamente al tomador, si son personas distintas, según se estudió en el capítulo 2) para reclamar la indemnización derivada de su propia póliza. Cuando el siniestro involucra a la garantía de responsabilidad civil estudiada en el capítulo 9, la legitimación activa se extiende, mediante la acción directa del art. 76 LCS, al tercero perjudicado, que puede dirigir su reclamación directamente contra la aseguradora sin necesidad de demandar previa o simultáneamente al asegurado causante, aunque en la práctica forense es frecuente y prudente demandar conjuntamente a ambos, en litisconsorcio pasivo voluntario, para evitar cuestiones de oponibilidad de la sentencia."),
    B.p("La legitimación pasiva corresponde, naturalmente, a la aseguradora, y en los supuestos de concurrencia de seguros estudiados en el capítulo 6, puede extenderse a varias aseguradoras simultáneamente cuando exista identidad de riesgo e interés asegurado, en régimen de litisconsorcio pasivo necesario o voluntario según las circunstancias del caso concreto."),

    B.h2("20.4. La prueba en el proceso de seguro de hogar"),
    B.p("La estrategia probatoria en un proceso de seguro de hogar gira, de forma casi invariable, en torno a tres ejes que el profesional debe planificar desde el primer momento del expediente, no solo al redactar la demanda:"),
    B.bullet([B.bold("Prueba documental: "), B.run("póliza, condiciones generales y particulares, parte de siniestro, correspondencia con la aseguradora, facturas y presupuestos, y toda la documentación acreditativa de la preexistencia y valor de los bienes afectados.")]),
    B.bullet([B.bold("Prueba pericial: "), B.run("elemento central en la práctica totalidad de los litigios de seguro de hogar, según se ha reiterado a lo largo de esta obra; su correcta preparación, incluida la ratificación del perito en el acto del juicio y su sometimiento a contradicción, resulta decisiva en la generalidad de los casos.")]),
    B.bullet([B.bold("Interrogatorio de parte: "), B.run("particularmente relevante cuando se discuten hechos relativos al conocimiento de circunstancias declaradas o no declaradas al contratar (capítulo 3), o a la diligencia empleada por el asegurado en la custodia de los bienes (capítulo 7).")]),

    B.h2("20.5. Costas procesales"),
    B.p(["El régimen de costas en el proceso civil español se rige por el principio del vencimiento objetivo, que en la práctica de la litigación de seguros opera como un poderoso incentivo adicional —junto con los intereses del art. 20 LCS ya estudiados— para la resolución extrajudicial temprana de las reclamaciones fundadas"]),
    B.legalBox("Art. 394.1 LEC", "En los procesos declarativos, las costas de la primera instancia se impondrán a la parte que haya visto rechazadas todas sus pretensiones, salvo que el tribunal aprecie, y así lo razone, que el caso presentaba serias dudas de hecho o de derecho."),
    B.p("La combinación de la condena en costas con los intereses del art. 20 LCS explica por qué, en la práctica, una aseguradora que deniega infundadamente una cobertura clara asume un riesgo económico muy superior al de la propia indemnización debida, lo que el profesional debe hacer explícito en cualquier negociación previa a la interposición de la demanda."),

    B.h2("20.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control al preparar la demanda", B.AZUL, [
      "Invocar sistemáticamente el fuero especial del art. 52.2 LEC cuando resulte más favorable que los fueros generales, especialmente si el domicilio social de la aseguradora está en otra provincia.",
      "Verificar la cuantía exacta de la reclamación para determinar el cauce procesal correcto (verbal u ordinario) conforme a los arts. 249.2 y 250.2 LEC.",
      "En reclamaciones de responsabilidad civil, valorar la conveniencia de demandar conjuntamente al asegurado causante y a su aseguradora, sin perjuicio de la inmunidad de la acción directa del art. 76 LCS.",
      "Planificar la prueba pericial desde el inicio del expediente extrajudicial, no solo al redactar la demanda, dada su centralidad en la práctica totalidad de los litigios del ramo.",
      "Cuantificar en la demanda, junto con la indemnización principal, los intereses del art. 20 LCS y advertir sobre el riesgo de condena en costas de la aseguradora demandada.",
    ]),

    B.h2("20.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber antes de demandar a su aseguradora", "8A5A00", [
      "Puede demandar a su aseguradora en el juzgado de su propio domicilio, aunque la sede social de la compañía esté en otra ciudad.",
      "Si la cantidad reclamada no supera los 15.000 euros, el proceso será, normalmente, más rápido y sencillo (juicio verbal).",
      "Si su aseguradora pierde el pleito, normalmente deberá pagar también las costas del proceso, lo que incluye en gran medida los honorarios de su abogado.",
    ]),

    B.h2("20.8. Checklist: preparación de la demanda o de la contestación"),
    B.bullet("1. ¿Cuál es el domicilio del asegurado demandante y el de la aseguradora demandada?"),
    B.bullet("2. ¿Cuál es la cuantía exacta de la reclamación, incluidos los intereses del art. 20 LCS?"),
    B.bullet("3. ¿Procede juicio verbal u ordinario conforme a dicha cuantía?"),
    B.bullet("4. ¿Quiénes deben ser demandados (aseguradora, asegurado causante, otras aseguradoras concurrentes)?"),
    B.bullet("5. ¿Está preparada la prueba pericial y garantizada la disponibilidad del perito para su ratificación en juicio?"),
    B.bullet("6. ¿Se ha acreditado el intento de negociación previa conforme al art. 264.4.º LEC (capítulo 19)?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo20 };
