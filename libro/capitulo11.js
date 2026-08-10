const B = require("./build");

function capitulo11() {
  return [
    B.chapterHeading(11, "Coberturas especiales: joyas, objetos de valor, equipos electrónicos y comunidades de propietarios"),

    B.sumario([
      "11.1. El régimen de sublímites en el seguro de hogar",
      "11.2. Joyas y objetos de valor",
      "11.3. Equipos electrónicos, informáticos y de telefonía",
      "11.4. Obras de arte y colecciones",
      "11.5. El seguro de la comunidad de propietarios y su interacción con la póliza individual",
      "11.6. Nuevos riesgos del hogar: domótica, autoconsumo eléctrico y ciberriesgos domésticos",
      "11.7. Ficha para el profesional",
      "11.8. Ficha para el asegurado",
      "11.9. Checklist: revisión de sublímites y coberturas especiales",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo sistematiza las coberturas especiales o adicionales del seguro de hogar —joyas, dinero en efectivo, equipos electrónicos, obras de arte— estructuradas técnicamente como sublímites dentro de la suma asegurada general del contenido, y su calificación como cláusulas delimitadoras o limitativas conforme a la doctrina ya expuesta en los capítulos 1 y 4. Se completa con el estudio de la interacción entre el seguro individual del propietario y el seguro de la comunidad de propietarios en régimen de propiedad horizontal.",
      "sublímites, joyas, objetos de valor, equipos electrónicos, comunidad de propietarios, seguro de comunidad",
      "This chapter systematises the special or additional covers of homeowners' insurance —jewellery, cash, electronic equipment, artwork— structured technically as sub-limits within the overall contents sum insured, and their classification as risk-delimiting or rights-limiting clauses under the doctrine already set out in Chapters 1 and 4. It closes with an examination of the interaction between an individual owner's policy and the homeowners' association's own insurance under the condominium regime.",
      "sub-limits, jewellery, valuables, electronic equipment, condominium insurance"
    ),
    B.spacer(200),

    B.h2("11.1. El régimen de sublímites en el seguro de hogar"),
    B.p(["Como se anticipó en el capítulo 1, la práctica aseguradora somete determinadas categorías de bienes del contenido a sublímites cuantitativos específicos, inferiores a la suma asegurada general del contenido. Técnicamente, un sublímite es una cláusula delimitadora del objeto de la cobertura —concreta hasta qué importe responde la aseguradora respecto de una determinada categoría de bienes—, pero su calificación puede mudar a limitativa, e incluso lesiva, cuando se aparta de forma sorpresiva de las expectativas razonables del asegurado sobre el alcance de su cobertura general", B.fn("La frontera entre el sublímite como mera concreción cuantitativa del riesgo (delimitador) y el sublímite como vaciamiento encubierto de la cobertura general (limitativo o lesivo) es una de las cuestiones más debatidas en la doctrina reciente sobre el art. 3 LCS aplicado a coberturas especiales; cfr. VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, op. cit."), ", conforme a la metodología de análisis fijada en el capítulo 4."]),

    B.h2("11.2. Joyas y objetos de valor"),
    B.p("El artículo 46 LCS, estudiado en el capítulo 5, excluye de la cobertura estándar de incendio, «salvo pacto expreso en contrario», los valores mobiliarios, billetes de banco, piedras y metales preciosos y objetos artísticos. La práctica aseguradora traduce esta reserva legal en un sublímite específico para joyas y objetos de valor, normalmente fijado como un porcentaje reducido de la suma asegurada general del contenido, que conviene verificar expresamente en las condiciones particulares. Además del límite cuantitativo, es habitual que estas garantías exijan la acreditación reforzada de la preexistencia (facturas, tasaciones, fotografías) y, en ocasiones, la custodia en caja fuerte como condición de cobertura para determinados umbrales de valor —cláusula cuyo carácter limitativo, si no está debidamente destacada y aceptada conforme al art. 3 LCS, puede ser cuestionado con los mismos argumentos ya expuestos en el capítulo 4."),

    B.h2("11.3. Equipos electrónicos, informáticos y de telefonía"),
    B.p("La cobertura de equipos electrónicos plantea una problemática específica derivada de su rápida obsolescencia y depreciación: la distinción, ya analizada en el capítulo 1 a propósito de la STS 2233/2020 (ROJ: STS 2233/2020) sobre prendas de vestir, entre valoración por «valor real» y por «valor de reposición» adquiere aquí especial relevancia económica, dada la disparidad frecuente entre ambos criterios en bienes tecnológicos. El profesional debe verificar con particular atención qué criterio de valoración aplica la póliza a esta categoría de bienes, por ser habitualmente la fuente de mayor discrepancia económica entre la expectativa del asegurado y la oferta de la aseguradora."),

    B.h2("11.4. Obras de arte y colecciones"),
    B.p("Las pólizas de hogar de gama alta incorporan, en ocasiones mediante condiciones especiales específicas, coberturas para obras de arte, antigüedades o colecciones, sujetas normalmente a la aportación de una tasación pericial previa a la contratación (declaración de valor) que, a diferencia del régimen general, puede vincular contractualmente a las partes sobre el valor del bien a efectos de la indemnización, atemperando en la práctica la aplicación de la regla proporcional del infraseguro estudiada en el capítulo 15 respecto de estos bienes concretos, siempre que la declaración de valor haya sido expresamente aceptada por la aseguradora."),

    B.h2("11.5. El seguro de la comunidad de propietarios y su interacción con la póliza individual"),
    B.p(["La Ley de Propiedad Horizontal no impone con carácter general la obligación de asegurar el edificio, pero sí prevé expresamente la posibilidad de que la comunidad, con cargo al fondo de reserva obligatorio, suscriba un contrato de seguro que cubra los daños causados en la finca", B.fn("La ausencia de una obligación legal general de aseguramiento de la comunidad contrasta con la extendidísima práctica de suscribirlo, impulsada tanto por la prudencia de las juntas de propietarios como, en ocasiones, por su previsión expresa en los estatutos de la comunidad; cfr. BATALLER GRAU, J. et al., op. cit., epígrafe sobre seguros en la propiedad horizontal."), ":"]),
    B.legalBox("Art. 9.1.f) LPH (extracto)", "Con cargo al fondo de reserva la comunidad podrá suscribir un contrato de seguro que cubra los daños causados en la finca o bien concluir un contrato de mantenimiento permanente del inmueble y sus instalaciones generales."),
    B.p("Cuando existe seguro de comunidad, su interacción con la póliza individual de cada propietario debe analizarse, como se expuso en el capítulo 6 a propósito de la STS 1227/2025 (ROJ: STS 1227/2025), verificando la identidad de riesgo e interés asegurado en cada caso concreto: la propia sentencia distingue expresamente los supuestos de «coberturas concurrentes de elementos privativos de inmuebles en propiedad horizontal» —en los que resulta más fácil apreciar dicha identidad y, por tanto, aplicar la contribución proporcional del art. 32 LCS— de otros supuestos, como el arrendamiento, en los que el interés asegurado por cada póliza puede ser sustancialmente distinto."),

    B.h2("11.6. Nuevos riesgos del hogar: domótica, autoconsumo eléctrico y ciberriesgos domésticos"),
    B.p(["La transformación tecnológica de la vivienda española plantea, con una velocidad muy superior a la de la reforma legislativa, cuestiones de cobertura que ni la LCS ni buena parte del clausulado tradicional resuelven de forma expresa, lo que exige del profesional un ejercicio de encaje analógico particularmente cuidadoso", B.fn("La brecha entre la evolución técnica del riesgo doméstico y la actualización del clausulado estándar es un fenómeno señalado con frecuencia por la doctrina más reciente en seguros de consumo; ante la falta de previsión expresa, el criterio interpretativo aplicable sigue siendo el de la expectativa razonable del asegurado medio y el contenido natural del ramo, ya estudiados en el capítulo 1."), ":"]),
    B.bullet([B.bold("Instalaciones de autoconsumo eléctrico (placas solares) y baterías domésticas: "), B.run("su condición de elementos fijos incorporados a la vivienda permite, en principio, reconducirlos al concepto de continente estudiado en el capítulo 1, pero su elevado valor unitario y su exposición diferenciada a determinados riesgos (fenómenos atmosféricos, sobretensiones) aconsejan verificar si están sujetas a un sublímite propio o exigen declaración expresa al contratar, dado su carácter de circunstancia potencialmente relevante para la valoración del riesgo a efectos del art. 10 LCS (capítulo 3).")]),
    B.bullet([B.bold("Cargadores de vehículo eléctrico: "), B.run("plantean una doble problemática de cobertura (el propio equipo, como contenido o instalación fija, y los daños que su mal funcionamiento pueda causar, reconducibles a la garantía de daños eléctricos del capítulo 5 o a la de responsabilidad civil del capítulo 9) que exige revisar expresamente su tratamiento en condiciones particulares.")]),
    B.bullet([B.bold("Domótica y dispositivos conectados: "), B.run("su valor como contenido está normalmente cubierto por las garantías estándar de incendio, agua o robo, pero los daños derivados específicamente de su mal funcionamiento informático (no físico) plantean una cuestión de encaje más compleja, próxima a los ciberriesgos.")]),
    B.bullet([B.bold("Ciberriesgos domésticos: "), B.run("fraude informático, suplantación de identidad o ataques a la red doméstica son, en la generalidad de las pólizas de hogar españolas actuales, riesgos no cubiertos por defecto, salvo que se haya contratado expresamente una garantía específica de ciberprotección doméstica, cada vez más ofrecida como cobertura opcional autónoma y sujeta a su propio clausulado, ajeno al régimen de las garantías materiales tradicionales estudiadas en esta obra.")]),
    B.bullet([B.bold("Alquiler vacacional y teletrabajo: "), B.run("el uso de la vivienda para alquiler turístico de corta duración o para el desarrollo de una actividad profesional o empresarial puede constituir, si no fue declarado al contratar, una circunstancia relevante para la valoración del riesgo (art. 10 LCS) o una agravación sobrevenida (art. 11 LCS) sujeta al régimen ya estudiado en el capítulo 3, por lo que su comunicación expresa a la aseguradora es una cautela elemental antes de destinar la vivienda a estos usos.")]),
    B.p("La pauta metodológica general ante cualquiera de estos supuestos es la misma que rige el resto de la obra: en ausencia de previsión expresa en la póliza, debe estarse al contenido natural y a la expectativa razonable del asegurado medio del producto contratado (capítulo 1), sin que la mera novedad técnica del riesgo permita presumir ni su cobertura automática ni su exclusión automática."),

    B.h2("11.7. Ficha para el profesional"),
    B.fichaBox("Puntos de control sobre coberturas especiales", B.AZUL, [
      "Verificar la existencia y cuantía de cada sublímite (joyas, dinero, equipos electrónicos, obras de arte) frente a la suma asegurada general del contenido.",
      "Aplicar la metodología del capítulo 4 (incorporación, calificación, requisitos formales, interpretación) a cada sublímite controvertido, con particular atención a su carácter sorpresivo.",
      "En equipos electrónicos, verificar expresamente el criterio de valoración pactado (valor real o de reposición), invocando en su caso la doctrina de la STS 2233/2020 (ROJ: STS 2233/2020).",
      "Ante un siniestro que afecte a elementos comunes y privativos simultáneamente, verificar la existencia de seguro de comunidad y la identidad de riesgo e interés con la póliza individual, conforme a la STS 1227/2025 (ROJ: STS 1227/2025).",
      "Ante nuevos riesgos del hogar (placas solares, domótica, ciberriesgos, alquiler vacacional), verificar expresamente su tratamiento contractual y, en su caso, su relevancia a efectos del deber de declaración del riesgo del art. 10 LCS.",
    ]),

    B.h2("11.8. Ficha para el asegurado"),
    B.fichaBox("Qué debe revisar sobre sus bienes de especial valor", "8A5A00", [
      "Si posee joyas, dinero en efectivo u objetos de valor por encima del sublímite estándar de su póliza, valore contratar una ampliación específica de esta garantía.",
      "Conserve facturas, tasaciones y fotografías de sus bienes de mayor valor: son la prueba más eficaz en caso de siniestro.",
      "Pregunte a su aseguradora si su comunidad de propietarios tiene contratado un seguro propio y qué cubre exactamente, para evitar solapamientos o lagunas de cobertura.",
    ]),

    B.h2("11.9. Checklist: revisión de sublímites y coberturas especiales"),
    B.bullet("1. ¿Qué sublímite tiene pactado para joyas y objetos de valor, y es suficiente para los bienes que realmente posee?"),
    B.bullet("2. ¿Qué sublímite tiene para dinero en efectivo dentro y fuera de la vivienda?"),
    B.bullet("3. ¿Qué criterio de valoración aplica a los equipos electrónicos (valor real o de reposición)?"),
    B.bullet("4. ¿Existe cobertura específica para obras de arte o colecciones, con declaración de valor aceptada por la aseguradora?"),
    B.bullet("5. ¿Existe seguro de la comunidad de propietarios? ¿Qué elementos cubre?"),
    B.bullet("6. ¿Podría existir concurrencia entre la póliza individual y la de la comunidad respecto de algún elemento?"),
    B.bullet("7. ¿Tiene la vivienda placas solares, baterías, cargador de vehículo eléctrico o domótica declarados a la aseguradora?"),
    B.bullet("8. ¿Se destina la vivienda, total o parcialmente, a alquiler turístico o actividad profesional? En tal caso, ¿se ha comunicado a la aseguradora?"),

    B.h2("Bibliografía citada"),
    B.p("BATALLER GRAU, J.; BOQUERA MATARREDONA, J.; OLAVARRÍA IGLESIA, J. (coords.), Comentarios a la Ley de Contrato de Seguro, Tirant lo Blanch, Valencia."),
    B.p("VEIGA COPO, A. B., Condiciones generales y particulares en el contrato de seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo11 };
