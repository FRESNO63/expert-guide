const B = require("./build");

function caso(numero, titulo, hechos, cuestion, doctrina, solucion, ensenanza) {
  return [
    B.h2(`Caso ${numero}. ${titulo}`),
    B.box("Hechos", B.GRIS, [B.p(hechos)]),
    B.spacer(100),
    B.box("Cuestión jurídica", B.AZUL, [B.p(cuestion)]),
    B.spacer(100),
    B.box("Doctrina aplicable", "8A5A00", [B.p(doctrina)]),
    B.spacer(100),
    B.box("Solución razonada", B.AZUL, [B.p(solucion)]),
    B.spacer(100),
    B.box("Enseñanza práctica", B.GRIS, [B.p(ensenanza)]),
    B.spacer(240),
  ];
}

function capitulo27() {
  return [
    B.chapterHeading(27, "Casos prácticos resueltos"),

    B.sumario([
      "Caso 1. Filtración por falta de mantenimiento frente a defecto constructivo",
      "Caso 2. Infraseguro en un incendio parcial",
      "Caso 3. Robo y alegación de negligencia grave",
      "Caso 4. Responsabilidad civil del cabeza de familia por incendio causado por un hijo",
      "Caso 5. Límite insuficiente en la cobertura de defensa jurídica",
      "Caso 6. Prescripción de la acción con proceso penal previo",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo cierra la Parte IV con seis casos prácticos que integran, de forma aplicada, la doctrina legal, jurisprudencial y de las Audiencias Provinciales desarrollada a lo largo de la obra. Cada caso sigue una estructura homogénea —hechos, cuestión jurídica, doctrina aplicable, solución razonada y enseñanza práctica— pensada como ejercicio de repaso transversal y como plantilla de análisis reutilizable ante un expediente real.",
      "casos prácticos, metodología de análisis, aplicación jurisprudencial",
      "This closing chapter of Part IV presents six practical case studies that apply, in integrated form, the statutory, Supreme Court and provincial appellate court doctrine developed throughout the book. Each case follows a consistent structure — facts, legal issue, applicable doctrine, reasoned solution and practical lesson — designed as a cross-cutting review exercise and as a reusable analysis template for real case files.",
      "case studies, analysis methodology, applied case law"
    ),
    B.spacer(200),

    ...caso(
      1,
      "Filtración por falta de mantenimiento frente a defecto constructivo",
      "Una comunidad de propietarios sufre filtraciones reiteradas en la última planta del edificio, con daños en varias viviendas. La aseguradora de la comunidad deniega la cobertura invocando la cláusula de exclusión por «falta de mantenimiento y desgaste notorio del inmueble», destacada en las condiciones generales. El informe pericial de parte de la comunidad concluye que el origen real de las filtraciones es un defecto de ejecución en la impermeabilización de la cubierta, ejecutada pocos años antes.",
      "¿Es oponible a la comunidad la exclusión por falta de mantenimiento cuando el informe pericial atribuye el daño a un defecto constructivo de origen y no a un deterioro progresivo por desgaste?",
      "Conforme al capítulo 8, la exclusión por falta de mantenimiento, cuando está redactada con claridad y destacada en la póliza, se califica como cláusula delimitadora y no sorpresiva (SAP Valencia, Sección 5.ª, de 30 de junio de 2021, ROJ: SAP V 2845/2021). Sin embargo, su aplicación exige que la aseguradora acredite que el presupuesto fáctico de la exclusión —el desgaste o la falta de mantenimiento— es efectivamente la causa del daño; si la causa real es un defecto de ejecución de origen, la exclusión no resulta aplicable por falta de acreditación de su presupuesto (SAP Barcelona, Sección 1.ª, de 29 de junio de 2018, ROJ: SAP B 6782/2018).",
      "Procede reclamar la cobertura, centrando la controversia no en la validez de la cláusula —formalmente correcta— sino en la prueba de la causa técnica del daño. La estrategia procesal debe dirigirse a que el informe pericial acredite, con el mayor rigor técnico posible, que el defecto es de ejecución (por ejemplo, mediante cala física en la impermeabilización) y no de mantenimiento, desplazando así la controversia del terreno de la calificación de la cláusula al terreno, más favorable al asegurado, de la prueba de los hechos.",
      "En daños por agua, la discusión jurídica sobre la naturaleza de la cláusula (capítulo 5) es solo la mitad de la batalla: la otra mitad, con frecuencia decisiva, se libra en el terreno pericial sobre la causa técnica exacta del daño (capítulo 8)."
    ),

    ...caso(
      2,
      "Infraseguro en un incendio parcial",
      "Un propietario asegura su vivienda por un valor de continente de 180.000 euros. Un incendio en la cocina causa daños parciales tasados por el perito en 40.000 euros. La aseguradora, al revisar el expediente, constata que el valor de reconstrucción real del inmueble en la fecha del siniestro asciende a 300.000 euros, y aplica la regla proporcional del art. 30 LCS, ofreciendo una indemnización de 24.000 euros.",
      "¿Es correcta la reducción proporcional aplicada por la aseguradora? ¿Existe algún mecanismo contractual que hubiera podido evitarla?",
      "Conforme al capítulo 19, el art. 30 LCS impone la regla proporcional cuando la suma asegurada es inferior al valor real del interés en el momento del siniestro: indemnización = daño × (suma asegurada / valor real) = 40.000 × (180.000/300.000) = 24.000 euros. El cálculo de la aseguradora es aritméticamente correcto. El propio art. 30 LCS permite, no obstante, la exclusión convencional de esta regla, habitualmente mediante cláusulas de «primer riesgo» que el asegurado no había contratado en este caso.",
      "Salvo que se acredite un error de la aseguradora o del mediador en la determinación de la suma asegurada al contratar —lo que podría reconducirse, en su caso, a un incumplimiento del deber de asesoramiento del distribuidor, ajeno al contrato de seguro propiamente dicho—, la liquidación de 24.000 euros es correcta y difícilmente impugnable en sus propios términos. La actuación profesional útil en este momento no es litigar la liquidación del siniestro ya producido, sino advertir inmediatamente al cliente de la necesidad de actualizar la suma asegurada de cara al futuro, para evitar la repetición del infraseguro en un siniestro posterior.",
      "La revisión periódica de la suma asegurada es una de las actuaciones preventivas de mayor rentabilidad práctica que puede recomendar un profesional a su cliente, y con frecuencia se pasa por alto hasta que ya es demasiado tarde, es decir, hasta después del siniestro."
    ),

    ...caso(
      3,
      "Robo y alegación de negligencia grave",
      "Una vivienda sufre un robo mientras sus propietarios están de vacaciones. La aseguradora deniega la cobertura alegando negligencia grave, al constatar que la alarma contratada no había sido activada durante la ausencia, pese a figurar como condición de la póliza. Los propietarios alegan que la alarma llevaba meses defectuosa y que habían solicitado, sin éxito, su reparación a la empresa instaladora.",
      "¿Constituye la falta de activación de la alarma, en estas circunstancias, negligencia grave a efectos del art. 52.1.ª LCS?",
      "El capítulo 9 explica que el umbral de negligencia grave en el seguro de robo es más exigente que la negligencia leve, pero exige una situación de auténtico abandono o dejación en la custodia del bien (SAP Barcelona, Sección 16.ª, de 11 de enero de 2017, ROJ: SAP B 5946/2017, sobre una embarcación amarrada de forma manifiestamente precaria). El capítulo 21 recuerda, además, que la carga de la prueba de la negligencia grave corresponde siempre a la aseguradora que la invoca (STS de 17 de julio de 2012, ROJ: STS 5990/2012).",
      "La circunstancia de que el sistema estuviera averiado y su reparación hubiera sido solicitada con antelación —extremo que debe acreditarse documentalmente, mediante la comunicación a la empresa instaladora— desplaza el supuesto desde la mera pasividad negligente hacia una imposibilidad sobrevenida no exclusivamente imputable a los asegurados, lo que debilita sustancialmente la tesis de la negligencia grave de la aseguradora. La estrategia procesal debe centrarse en acreditar tanto la avería como la diligencia empleada en intentar repararla antes del siniestro.",
      "Ante una alegación de negligencia grave, la primera pregunta no es «¿se cumplió la condición pactada?», sino «¿por qué no se cumplió, y es esa razón imputable a una conducta gravemente negligente del asegurado?». La distinción es sutil pero, con frecuencia, decisiva."
    ),

    ...caso(
      4,
      "Responsabilidad civil del cabeza de familia por incendio causado por un hijo",
      "El hijo mayor de edad de los tomadores de una póliza de hogar provoca, de forma imprudente, un incendio en un local ajeno mientras manipulaba productos inflamables sustraídos sin autorización. El propietario del local, perjudicado, reclama la indemnización a la aseguradora de la póliza de hogar de los padres, invocando la cobertura de responsabilidad civil del cabeza de familia. La aseguradora opone que el hijo actuó con mala fe al sustraer los productos, lo que excluiría la cobertura conforme al art. 19 LCS.",
      "¿Puede la aseguradora oponer al perjudicado la eventual mala fe del asegurado causante del incendio?",
      "El capítulo 13 desarrolla en detalle este supuesto, prácticamente idéntico al resuelto por la STS de 20 de abril de 2023 (ROJ: STS 1544/2023): el dolo relativo a un acto inicial (la sustracción) no se extiende automáticamente al resultado dañoso final (el incendio) si este no fue querido ni aceptado como consecuencia altamente probable. Y, en todo caso, conforme al art. 76 LCS, la acción directa del perjudicado es inmune a las excepciones personales del asegurador frente al asegurado, incluida su eventual mala fe.",
      "El perjudicado tiene derecho a la indemnización con independencia de que prospere o no, en la relación interna entre la aseguradora y sus propios asegurados, la excepción de mala fe: esta última cuestión, de ser fundada, solo legitimaría a la aseguradora para repetir posteriormente contra el asegurado causante (art. 76 LCS, inciso primero), pero no para denegar el pago al tercero perjudicado.",
      "En responsabilidad civil, conviene recordar siempre desde qué posición se analiza el dolo: la posición del asegurado frente a su aseguradora (donde el dolo sí exonera, art. 19 LCS) es jurídicamente independiente de la posición del tercero perjudicado frente a la aseguradora (donde esa misma excepción resulta inoponible, art. 76 LCS)."
    ),

    ...caso(
      5,
      "Límite insuficiente en la cobertura de defensa jurídica",
      "Un asegurado es demandado en un procedimiento civil derivado de un siniestro de agua causado a un vecino. Ante un conflicto de intereses con su propia aseguradora (que asegura también al vecino demandante), designa abogado de su libre elección. La factura de honorarios asciende a 3.200 euros; la póliza fija un límite de 500 euros para los supuestos de libre designación.",
      "¿Es oponible al asegurado el límite de 500 euros pactado en la póliza?",
      "El capítulo 14 desarrolla precisamente este supuesto con apoyo en la STS de 24 de febrero de 2021 (ROJ: STS 584/2021), que califica como limitativa —e incluso potencialmente lesiva— la cláusula que fija un límite notoriamente insuficiente en relación con el coste razonable de una defensa jurídica adecuada al tipo de procedimiento, con independencia de su ubicación formal en el condicionado.",
      "Procede reclamar la diferencia entre los 500 euros abonados y el coste real y razonable de la defensa, argumentando que el límite pactado vacía de contenido efectivo el derecho de libre elección reconocido por el art. 76.d) LCS para un procedimiento civil de la complejidad del descrito, con apoyo pericial (informe de honorarios conforme a los criterios orientadores del colegio de abogados correspondiente) sobre la razonabilidad de la minuta reclamada.",
      "Un límite cuantitativo de defensa jurídica no es, por sí solo, ni válido ni inválido: su oponibilidad depende siempre de una comparación funcional entre su importe y el coste razonable de una defensa adecuada al procedimiento concreto, comparación que debe documentarse con prueba pericial sobre honorarios."
    ),

    ...caso(
      6,
      "Prescripción de la acción con proceso penal previo",
      "Un incendio provocado intencionadamente por un tercero desconocido destruye parcialmente una vivienda en enero de 2023. Se incoan diligencias penales que concluyen, en marzo de 2025, con un auto de sobreseimiento provisional por no haberse identificado al autor. El propietario, que había esperado la resolución del proceso penal antes de reclamar formalmente a su propia aseguradora, presenta la reclamación extrajudicial en junio de 2025. La aseguradora opone la prescripción de la acción.",
      "¿Ha prescrito la acción del asegurado frente a su propia aseguradora derivada del contrato de seguro?",
      "El capítulo 22 resuelve este supuesto con apoyo directo en la STS de 15 de febrero de 2022 (ROJ: STS 517/2022), recaída precisamente sobre un seguro multirriesgo de hogar: la acción de cumplimiento contractual del asegurado frente a su propia aseguradora, derivada de los arts. 1 y 45 LCS, sigue el plazo autónomo de dos años del art. 23 LCS, cuyo cómputo no queda suspendido por la mera pendencia de un proceso penal contra un tercero por los mismos hechos, salvo que la acción ejercitada coincida sustancialmente con la que pudo ventilarse en el proceso penal.",
      "Contado el plazo de dos años desde enero de 2023 (fecha del siniestro, sin que conste incumplimiento del deber de comunicación), la acción contractual frente a la propia aseguradora habría prescrito, en principio, en enero de 2025, varios meses antes de la reclamación de junio de 2025, con independencia de que el proceso penal siguiera abierto. Solo si se acredita un acto interruptivo dentro de ese plazo —una reclamación extrajudicial previa no mencionada en el relato de hechos, o un reconocimiento de deuda por la aseguradora— podría salvarse la acción.",
      "La regla es de aplicación tan sencilla como peligrosa si se ignora: nunca debe esperarse a la resolución de un proceso penal paralelo para activar la reclamación contractual frente a la propia aseguradora. Ante cualquier siniestro con origen potencialmente delictivo, la agenda procesal civil corre de forma autónoma desde el primer día."
    ),

    B.h2("Bibliografía citada"),
    B.p("Los casos de este capítulo se apoyan íntegramente en la normativa y jurisprudencia ya citada y verificada en los capítulos correspondientes de esta obra, a los que se remite para la cita completa de cada resolución."),
  ];
}

module.exports = { capitulo27 };
