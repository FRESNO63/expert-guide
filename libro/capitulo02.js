const B = require("./build");

function capitulo02() {
  return [
    B.chapterHeading(2, "Sujetos y objeto del contrato: tomador, asegurado, beneficiario, continente y contenido"),

    B.sumario([
      "2.1. Las partes y los sujetos protegidos: tomador, asegurado y beneficiario (art. 7 LCS)",
      "2.2. El seguro por cuenta ajena en la práctica del hogar",
      "2.3. El objeto del contrato: el interés asegurable (art. 25 LCS)",
      "2.4. El principio indemnizatorio y la prohibición de enriquecimiento injusto (art. 26 LCS)",
      "2.5. Contenido documental de la póliza (art. 8 LCS)",
      "2.6. Ficha para el profesional",
      "2.7. Ficha para el asegurado",
      "2.8. Checklist: quién es quién en la póliza de hogar",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo examina la estructura subjetiva del contrato de seguro de hogar —tomador, asegurado y beneficiario— y su objeto, centrado en la noción de interés asegurable del art. 25 LCS, cuya ausencia sobrevenida determina la nulidad del contrato. Se estudia, con apoyo en la jurisprudencia más reciente de la Sala Primera, la aplicación de estos conceptos a los supuestos característicos del ramo de hogar: propietarios no ocupantes, inquilinos, seguros vinculados a préstamo hipotecario y comunidades de propietarios.",
      "tomador del seguro, asegurado, beneficiario, interés asegurable, art. 25 LCS, principio indemnizatorio, seguro por cuenta ajena",
      "This chapter examines the subjective structure of the homeowners' insurance contract —policyholder, insured and beneficiary— and its object, centred on the insurable interest requirement of Article 25 of the Spanish Insurance Contract Act, whose subsequent absence renders the contract void. Drawing on recent Supreme Court case law, it applies these concepts to typical cases in the home insurance line: non-occupying owners, tenants, mortgage-linked policies and homeowners' associations.",
      "policyholder, insured party, beneficiary, insurable interest, indemnity principle, insurance for another's account"
    ),
    B.spacer(200),

    B.h2("2.1. Las partes y los sujetos protegidos: tomador, asegurado y beneficiario"),
    B.p(["El contrato de seguro de hogar puede llegar a implicar hasta tres posiciones jurídicas distintas, que conviene no confundir desde el primer momento", B.fn("La disociación entre tomador, asegurado y beneficiario, extraña a otras figuras contractuales, es una de las notas más singulares del contrato de seguro; sobre su fundamento estructural, vid. SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios..., op. cit., ad art. 7."), ":"]),
    B.bullet([B.bold("Tomador del seguro: "), B.run("quien suscribe el contrato con la aseguradora y asume las obligaciones que de él derivan (fundamentalmente, el pago de la prima y los deberes de declaración del riesgo y comunicación del siniestro).")]),
    B.bullet([B.bold("Asegurado: "), B.run("el titular del interés objeto de cobertura, a quien corresponden los derechos derivados del contrato.")]),
    B.bullet([B.bold("Beneficiario: "), B.run("la persona designada para percibir la indemnización, figura de mayor relevancia en el seguro de vida que en el de daños, donde el beneficiario coincide normalmente con el propio asegurado, salvo pacto de designación de un tercero (por ejemplo, la entidad acreedora hipotecaria hasta el importe del capital pendiente).")]),
    B.p("El artículo 7 LCS regula esta posible disociación con una regla de reparto de cargas y derechos que resulta esencial para determinar, ante cualquier incidencia, a quién corresponde actuar:"),
    B.legalBox("Art. 7 LCS", "El tomador del seguro puede contratar el seguro por cuenta propia o ajena. En caso de duda se presumirá que el tomador ha contratado por cuenta propia. [...] Si el tomador del seguro y el asegurado son personas distintas, las obligaciones y los deberes que derivan del contrato corresponden al tomador del seguro, salvo aquellos que por su naturaleza deban ser cumplidos por el asegurado. No obstante, el asegurador no podrá rechazar el cumplimiento por parte del asegurado de las obligaciones y deberes que correspondan al tomador del seguro. Los derechos que derivan del contrato corresponderán al asegurado o, en su caso, al beneficiario, salvo los especiales derechos del tomador en los seguros de vida."),
    B.p("La regla, trasladada a la práctica del hogar, tiene una consecuencia procesal de primer orden: cuando el tomador (por ejemplo, el propietario que asegura una vivienda arrendada) y el asegurado no coinciden, es el asegurado —o, en su caso, quien acredite ostentar tal condición sobre el bien siniestrado— quien está legitimado activamente para reclamar la indemnización, sin perjuicio de que los deberes de comunicación del siniestro y de declaración del riesgo recaigan primariamente sobre el tomador."),

    B.h2("2.2. El seguro por cuenta ajena en la práctica del hogar"),
    B.p("El seguro por cuenta ajena, lejos de ser una hipótesis académica, es extraordinariamente frecuente en el ramo de hogar. Los supuestos más habituales que el profesional debe saber reconducir al artículo 7 LCS son los siguientes:"),
    B.bullet([B.bold("Seguro vinculado a préstamo hipotecario: "), B.run("la entidad financiera exige la contratación de un seguro de hogar (o, más específicamente, de daños sobre el continente) como condición del préstamo, y en ocasiones se designa a la propia entidad como beneficiaria hasta el importe del capital pendiente de amortizar mediante cláusula de designación de beneficiario, cuya validez exige que se articule con la debida transparencia y sin desnaturalizar el derecho del asegurado a la reparación del daño en la parte excedente.")]),
    B.bullet([B.bold("Vivienda arrendada: "), B.run("es habitual que el propietario asegure el continente (y, en ocasiones, su responsabilidad civil como propietario) mientras que el inquilino contrata, de forma independiente, un seguro sobre el contenido y su propia responsabilidad civil como ocupante; ambas pólizas coexisten sin solaparse, salvo previsión expresa de concurrencia de seguros (art. 32 LCS).")]),
    B.bullet([B.bold("Comunidades de propietarios: "), B.run("el seguro de la comunidad (Ley 49/1960, de Propiedad Horizontal) cubre elementos comunes y, en ocasiones, por extensión pactada, ciertos elementos privativos; su articulación con el seguro individual de cada propietario plantea cuestiones de concurrencia de seguros que se estudian en el capítulo 11.")]),

    B.h2("2.3. El objeto del contrato: el interés asegurable"),
    B.p(["El seguro de hogar es, en su vertiente de daños, un seguro de interés: no protege un bien en abstracto, sino la relación económica lícita que el asegurado mantiene con ese bien. El artículo 25 LCS erige esta relación en presupuesto de validez del contrato", B.fn("La función del interés asegurable es doble: de un lado, causal (evita que el seguro degenere en apuesta); de otro, preventiva (desincentiva la provocación intencionada del siniestro por quien no sufre pérdida alguna con su producción); cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo I, capítulo dedicado al interés en el seguro."), ":"]),
    B.legalBox("Art. 25 LCS", "Sin perjuicio de lo establecido en el artículo cuarto, el contrato de seguro contra daños es nulo si en el momento de su conclusión no existe un interés del asegurado a la indemnización del daño."),
    B.p("La aplicación de este precepto al seguro de hogar ha sido recientemente clarificada por la STS, Sala de lo Civil, de 1 de marzo de 2023 (ROJ: STS 671/2023; ECLI:ES:TS:2023:671; MP: Seoane Spiegelberg), que distingue con precisión el interés asegurado (objeto del contrato) del riesgo cubierto (evento cuya producción activa la cobertura), y fija un criterio muy práctico para el profesional que defiende al asegurado frente a una aseguradora que invoca la falta de interés como causa de nulidad:"),
    B.jurisBox("STS, Sala de lo Civil, de 1 de marzo de 2023 (ROJ: STS 671/2023; ECLI:ES:TS:2023:671; MP: Seoane Spiegelberg)", "«El interés deviene en elemento esencial del contrato de seguro, y no solo en el seguro contra daños sino también en los seguros de persona. De no ser así, el seguro se convertiría en una simple apuesta [...]. Al propietario que no se le solicita prueba de aseguramiento ni al contratar el seguro, ni al cobrar la prima, no puede alegarse cuando ocurre el siniestro la inexistencia de interés, teniendo en cuenta que es propietario de un bien, que contrata el seguro poniendo de manifiesto que otros van a usar el inmueble.»"),
    B.p("De esta doctrina se extrae una regla de gran utilidad práctica: la mera titularidad dominical del bien asegurado es, por sí sola, prueba suficiente del interés asegurable, y corresponde a la aseguradora —que aceptó la prima sin exigir acreditación adicional al contratar— la carga de probar cumplidamente la inexistencia de interés si pretende invocar la nulidad del contrato ex art. 25 LCS, sin que baste para ello la mera existencia de dudas sobre las circunstancias periféricas del siniestro (por ejemplo, la fecha exacta de su producción)."),

    B.h2("2.4. El principio indemnizatorio y la prohibición de enriquecimiento injusto"),
    B.p("Correlativo al interés asegurable es el principio indemnizatorio, que el artículo 26 LCS formula como prohibición de enriquecimiento injusto:"),
    B.legalBox("Art. 26 LCS", "El seguro no puede ser objeto de enriquecimiento injusto para el asegurado. Para la determinación del daño se atenderá al valor del interés asegurado en el momento inmediatamente anterior a la realización del siniestro."),
    B.bullet([B.bold("Consecuencia sobre la suma asegurada: "), B.run("la suma asegurada no es más que el límite máximo de la indemnización pactado por las partes; el daño efectivamente indemnizable se mide, en todo caso, por el valor del interés en el momento inmediatamente anterior al siniestro, lo que constituye el fundamento último tanto de la regla proporcional del infraseguro (art. 30 LCS, capítulo 15) como de la eventual reducción cuando la suma asegurada excede el valor real del interés (sobreseguro, art. 27 LCS).")]),
    B.bullet([B.bold("Consecuencia sobre la subrogación: "), B.run("cuando el daño ha sido causado por un tercero (por ejemplo, el vecino cuya tubería provoca la filtración), el pago de la indemnización por la aseguradora no libera a dicho tercero de su responsabilidad, sino que determina la subrogación de la aseguradora en los derechos del asegurado frente a él, hasta el límite de lo indemnizado (art. 43 LCS), precisamente para evitar que el asegurado obtenga una doble reparación por el mismo daño.")]),

    B.h2("2.5. Contenido documental de la póliza"),
    B.p("El artículo 8 LCS enumera el contenido mínimo obligatorio de la póliza, cuya relevancia práctica desborda lo puramente formal: constituye, con frecuencia, el primer y principal elemento probatorio en cualquier disputa sobre el alcance de la cobertura contratada."),
    B.legalBox("Art. 8 LCS (extracto)", "Contendrá, como mínimo, las indicaciones siguientes: 1. Nombre y apellidos o denominación social de las partes contratantes y su domicilio, así como la designación del asegurado y beneficiario, en su caso. 2. El concepto en el cual se asegura. 3. Naturaleza del riesgo cubierto, describiendo, de forma clara y comprensible, las garantías y coberturas otorgadas en el contrato, así como respecto a cada una de ellas, las exclusiones y limitaciones que les afecten destacadas tipográficamente. 4. Designación de los objetos asegurados y de su situación. 5. Suma asegurada o alcance de la cobertura. 6. Importe de la prima, recargos e impuestos. 7. Vencimiento de las primas, lugar y forma de pago. 8. Duración del contrato, con expresión del día y la hora en que comienzan y terminan sus efectos. 9. Si interviene un mediador en el contrato, el nombre y tipo de mediador."),
    B.p("El propio artículo 8 LCS prevé, además, un mecanismo correctivo de gran utilidad práctica y escasamente invocado: si el contenido de la póliza difiere de la proposición de seguro o de lo acordado, el tomador dispone de un mes desde la entrega de la póliza para reclamar la subsanación de la divergencia; transcurrido ese plazo sin reclamación, se estará al contenido de la póliza. El profesional que asesora a un asegurado inmediatamente después de la contratación debe, por tanto, cotejar sistemáticamente póliza y proposición dentro de ese plazo perentorio de un mes."),

    B.h2("2.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control sobre sujetos y objeto del contrato", B.AZUL, [
      "Verificar quién ostenta la condición de tomador y quién la de asegurado: los deberes de declaración del riesgo y comunicación del siniestro recaen sobre el tomador; los derechos, sobre el asegurado (art. 7 LCS).",
      "Ante una excepción de falta de interés asegurable (art. 25 LCS) opuesta por la aseguradora, invocar la doctrina de la STS 671/2023 (ROJ: STS 671/2023): la titularidad dominical acreditada desplaza la carga de la prueba a quien pretende la nulidad.",
      "Distinguir siempre la suma asegurada (límite contractual) del daño indemnizable (medido por el valor del interés ex art. 26 LCS), especialmente al preparar la prueba pericial.",
      "Cotejar póliza y proposición de seguro dentro del plazo de un mes del art. 8 LCS cuando se detecten divergencias entre lo pactado y lo documentado.",
    ]),

    B.h2("2.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe verificar el asegurado sobre su posición contractual", "8A5A00", [
      "Si usted no es quien firmó la póliza (por ejemplo, porque la contrató el banco o el propietario del piso que alquila), compruebe igualmente si figura como asegurado: solo esa condición le da derecho a reclamar la indemnización.",
      "Si su vivienda tiene un préstamo hipotecario asociado, revise si la entidad financiera figura como beneficiaria de la indemnización hasta el capital pendiente: es una cláusula habitual y lícita, pero debe conocerla.",
      "Conserve la proposición de seguro (oferta inicial) junto con la póliza definitiva: si detecta diferencias entre ambas, tiene un mes desde la entrega de la póliza para reclamar la subsanación (art. 8 LCS).",
    ]),

    B.h2("2.8. Checklist: quién es quién en la póliza de hogar"),
    B.bullet("1. ¿Quién firma como tomador? ¿Coincide con el propietario, el inquilino o una entidad financiera?"),
    B.bullet("2. ¿Quién figura como asegurado? ¿Es la misma persona que el tomador?"),
    B.bullet("3. ¿Existe beneficiario designado distinto del asegurado (por ejemplo, entidad hipotecaria)?"),
    B.bullet("4. ¿El interés asegurado se corresponde con la titularidad real sobre el inmueble (propiedad, usufructo, arrendamiento)?"),
    B.bullet("5. ¿La suma asegurada de continente y de contenido se corresponde razonablemente con su valor real?"),
    B.bullet("6. ¿Existe seguro de la comunidad de propietarios que pueda concurrir con la póliza individual?"),
    B.bullet("7. ¿Se ha comprobado la proposición de seguro frente a la póliza definitiva dentro del plazo de un mes del art. 8 LCS?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo02 };
