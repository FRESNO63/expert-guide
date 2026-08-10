const B = require("./build");

function linea(titulo, intro, items) {
  return [
    B.h3(titulo),
    B.p(intro),
    B.box("Resoluciones de referencia", B.AZUL, items.map((it) =>
      B.p([B.bold(it.cita + ": "), B.run(it.doctrina + " ")])
    )),
    B.spacer(180),
  ];
}

function capitulo26() {
  return [
    B.chapterHeading(26, "Jurisprudencia sistematizada: líneas jurisprudenciales por materia"),

    B.sumario([
      "26.1. Cláusulas delimitadoras, limitativas y lesivas (art. 3 LCS)",
      "26.2. Deber de declaración e incorporación de condiciones",
      "26.3. Daños por agua y falta de mantenimiento",
      "26.4. Robo y responsabilidad civil: umbrales de negligencia y dolo",
      "26.5. Defensa jurídica y libre elección de profesional",
      "26.6. Peritación, infraseguro y regla proporcional",
      "26.7. Mora del asegurador e intereses del art. 20 LCS",
      "26.8. Prescripción y concurrencia de seguros",
      "26.9. Cómo usar este índice jurisprudencial",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo cierra la Parte IV con un índice jurisprudencial razonado que reagrupa, por líneas temáticas y no por orden de aparición en la obra, todas las resoluciones del Tribunal Supremo y de Audiencias Provinciales citadas y verificadas a lo largo del libro, con indicación de su doctrina esencial y del capítulo en el que se desarrolla con detalle. Su función es puramente instrumental: permitir al profesional localizar en segundos el precedente aplicable a un problema concreto sin necesidad de recorrer el índice general de la obra.",
      "índice jurisprudencial, líneas jurisprudenciales, sistematización, doctrina del Tribunal Supremo",
      "This chapter closes Part IV with a reasoned case-law index that regroups, by subject-matter line rather than order of appearance, every Supreme Court and provincial appellate court ruling cited and verified throughout the book, noting its essential holding and the chapter where it is developed in detail. Its function is purely instrumental: to let the practitioner locate the applicable precedent for a specific problem within seconds.",
      "case-law index, jurisprudential lines, systematisation, Supreme Court doctrine"
    ),
    B.spacer(200),

    B.p("Todas las resoluciones que siguen han sido obtenidas y verificadas contra la fuente oficial (CENDOJ/BOE) a lo largo de la redacción de esta obra; se identifican por su ROJ y ECLI para permitir su localización y cita directa en cualquier escrito profesional. La remisión «capítulo N» indica dónde se desarrolla su doctrina con el contexto, la cita literal completa y el análisis práctico correspondiente."),

    ...linea(
      "26.1. Cláusulas delimitadoras, limitativas y lesivas (art. 3 LCS)",
      "El eje doctrinal más citado de toda la obra: la distinción entre cláusulas que concretan el objeto del contrato y cláusulas que, una vez nacido el derecho a la prestación, lo restringen.",
      [
        { cita: "STS (Pleno) 853/2006, de 11 de septiembre", doctrina: "Sentencia matriz que fija los criterios distintivos entre cláusulas delimitadoras y limitativas (capítulo 1)." },
        { cita: "STS de 3/10/2023 (ROJ: STS 3996/2023)", doctrina: "Resume y actualiza la doctrina de 2006; criterio del contenido natural del contrato y de la cláusula sorpresiva (capítulo 1)." },
        { cita: "STS de 21/4/2025 (ROJ: STS 1751/2025)", doctrina: "Reitera el criterio de la cláusula sorpresiva como indicio de limitatividad (capítulo 1)." },
        { cita: "STS de 6/7/2020 (ROJ: STS 2233/2020)", doctrina: "Aplicación al seguro de hogar: valorar el contenido por «valor real» sin cumplir el art. 3 LCS es cláusula limitativa (capítulos 1 y 11)." },
        { cita: "STS de 2/3/2017 (ROJ: STS 732/2017)", doctrina: "Principio de transparencia y «insólito plus» restrictivo en cláusulas introductorias (capítulo 1)." },
      ]
    ),

    ...linea(
      "26.2. Deber de declaración e incorporación de condiciones",
      "El modelo de «declaración-cuestionario» del art. 10 LCS y el control de incorporación de las condiciones generales.",
      [
        { cita: "STS de 16/3/2016 (ROJ: STS 1208/2016)", doctrina: "El art. 10 LCS impone un deber de contestación, no de declaración espontánea (capítulo 4)." },
        { cita: "STS de 1/3/2023 (ROJ: STS 671/2023)", doctrina: "La titularidad dominical acredita, por sí sola, el interés asegurable del art. 25 LCS (capítulo 2)." },
        { cita: "STS de 24/4/2023 (ROJ: STS 1701/2023)", doctrina: "Falta de entrega de condiciones generales: la incertidumbre resultante perjudica a la aseguradora; interpretación contra proferentem (capítulos 5 y 6)." },
        { cita: "STS de 7/2/2007 (ROJ: STS 696/2007)", doctrina: "Distinción entre agentes (vinculados) y corredores (independientes) de seguros a efectos del estándar de asesoramiento exigible (capítulo 3)." },
      ]
    ),

    ...linea(
      "26.3. Daños por agua y falta de mantenimiento",
      "La cobertura más litigiosa del ramo, sin régimen legal propio, y su exclusión típica por desgaste o falta de conservación.",
      [
        { cita: "SAP Valencia (Sección 5.ª) de 30/6/2021 (ROJ: SAP V 2845/2021)", doctrina: "La exclusión por falta de mantenimiento, clara y destacada, es delimitadora y no sorpresiva (capítulo 8)." },
        { cita: "SAP Barcelona (Sección 1.ª) de 29/6/2018 (ROJ: SAP B 6782/2018)", doctrina: "La exclusión decae si el daño real obedece a un defecto constructivo de origen, no a falta de mantenimiento (capítulo 8)." },
        { cita: "STS de 20/2/2019 (ROJ: STS 511/2019)", doctrina: "Daño continuado: el plazo de prescripción no corre hasta la consolidación del resultado (capítulo 8)." },
        { cita: "STS de 25/3/2025 (ROJ: STS 1227/2025)", doctrina: "Concurrencia de seguros entre propietario y arrendatario: exige identidad de riesgo e interés, no solo de inmueble (capítulos 8 y 15)." },
        { cita: "SAP Alicante (Sección 5.ª) de 12/5/2020 (ROJ: SAP A 614/2020)", doctrina: "Criterio de reposición uniforme para el daño estético cuando no existen materiales idénticos en el mercado (capítulo 12)." },
      ]
    ),

    ...linea(
      "26.4. Robo y responsabilidad civil: umbrales de negligencia y dolo",
      "Los distintos umbrales de imputación subjetiva según la cobertura, y la inoponibilidad del dolo del asegurado al tercero perjudicado.",
      [
        { cita: "SAP Barcelona (Sección 16.ª) de 11/1/2017 (ROJ: SAP B 5946/2017)", doctrina: "La negligencia grave del art. 52.1.ª LCS exige abandono o precariedad en la custodia del bien, no un mero descuido (capítulo 9)." },
        { cita: "STS de 17/7/2012 (ROJ: STS 5990/2012)", doctrina: "La carga de la prueba del dolo o la culpa grave, incluido el nexo causal, corresponde siempre a la aseguradora (capítulos 9 y 21)." },
        { cita: "STS de 15/7/2026 (ROJ: STS 3443/2026)", doctrina: "La «malquerencia de extraños» del art. 48 LCS excluye a quien tiene vinculación directa con el entorno del asegurado (capítulo 7)." },
        { cita: "STS de 20/4/2023 (ROJ: STS 1544/2023)", doctrina: "El dolo del asegurado es inoponible al tercero perjudicado por la acción directa del art. 76 LCS (capítulo 13)." },
      ]
    ),

    ...linea(
      "26.5. Defensa jurídica y libre elección de profesional",
      "El derecho de libre designación de abogado y procurador, y la calificación de sus límites cuantitativos.",
      [
        { cita: "STS de 24/2/2021 (ROJ: STS 584/2021)", doctrina: "Un límite económico notoriamente insuficiente para la libre elección puede ser limitativo o incluso lesivo (capítulo 14)." },
        { cita: "SAP Jaén (Sección 1.ª) de 15/9/2021 (ROJ: SAP J 1184/2021)", doctrina: "Distingue la defensa jurídica propia (posición activa o pasiva) de la dirección jurídica accesoria a la RC (solo pasiva) (capítulo 14)." },
      ]
    ),

    ...linea(
      "26.6. Peritación, infraseguro y regla proporcional",
      "El alcance vinculante del dictamen pericial y la correcta aplicación de la regla proporcional del art. 30 LCS.",
      [
        { cita: "STS de 26/7/2021 (ROJ: STS 3193/2021)", doctrina: "El dictamen pericial solo es vinculante en la liquidación del daño, nunca en la interpretación de la cobertura (capítulo 18)." },
        { cita: "STS de 14/9/2016 (ROJ: STS 4056/2016)", doctrina: "La impugnación del dictamen debe ser expresa dentro de los plazos del art. 38 LCS (capítulo 18)." },
        { cita: "STS de 14/11/2002 (ROJ: STS 7531/2002)", doctrina: "El infraseguro no se confunde con la concurrencia de seguros; pólizas distintas no se suman (capítulo 19)." },
      ]
    ),

    ...linea(
      "26.7. Mora del asegurador e intereses del art. 20 LCS",
      "La doctrina restrictiva sobre qué constituye «causa justificada» de exoneración de los intereses moratorios.",
      [
        { cita: "STS de 27/9/2023 (ROJ: STS 3983/2023)", doctrina: "La simple pendencia de un proceso judicial no es, por sí sola, causa justificada (capítulo 20)." },
      ]
    ),

    ...linea(
      "26.8. Prescripción y concurrencia de seguros",
      "El cómputo autónomo del plazo de dos años del art. 23 LCS y el régimen de control de cláusulas cuando el tomador es consumidor.",
      [
        { cita: "STS de 15/2/2022 (ROJ: STS 517/2022)", doctrina: "La acción contractual frente a la propia aseguradora sigue el plazo autónomo del art. 23 LCS, no suspendido por un proceso penal paralelo (capítulo 22)." },
        { cita: "STS de 3/6/2016 (ROJ: STS 2550/2016)", doctrina: "El control de transparencia cualificada/abusividad queda reservado a los consumidores, a diferencia del control de incorporación (capítulo 25)." },
      ]
    ),

    B.h2("26.9. Cómo usar este índice jurisprudencial"),
    B.p("Este capítulo no sustituye la lectura del capítulo correspondiente: cada ficha remite deliberadamente al lugar de la obra donde la resolución se transcribe literalmente, se contextualiza y se traduce en pautas de actuación concretas. Su utilidad es la de un punto de entrada rápido: ante un problema concreto («¿puedo reclamar los intereses del art. 20 LCS aunque estemos en pleito?», «¿es limitativa esta cláusula de defensa jurídica?»), permite localizar en segundos la línea jurisprudencial aplicable y saltar directamente al capítulo que la desarrolla en profundidad."),

    B.h2("Bibliografía citada"),
    B.p("Las referencias doctrinales completas de cada resolución se encuentran en la bibliografía del capítulo correspondiente, al que se remite."),
  ];
}

module.exports = { capitulo26 };
