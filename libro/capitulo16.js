const B = require("./build");

function capitulo16() {
  return [
    B.chapterHeading(16, "Exclusiones generales y particulares"),

    B.sumario([
      "16.1. Sistemática de las exclusiones en el seguro de hogar",
      "16.2. Exclusiones legales de orden público: dolo y mala fe (art. 19 LCS)",
      "16.3. Exclusiones típicas de riesgos catastróficos y bélicos",
      "16.4. Exclusiones por vicio propio, desgaste y falta de mantenimiento",
      "16.5. Exclusiones por desocupación prolongada de la vivienda",
      "16.6. El control de las exclusiones conforme al art. 3 LCS: síntesis metodológica",
      "16.7. Ficha para el profesional",
      "16.8. Ficha para el asegurado",
      "16.9. Checklist: análisis de una exclusión invocada por la aseguradora",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo cierra la Parte II sistematizando el régimen de exclusiones del seguro de hogar, distinguiendo las exclusiones legales de orden público —inderogables por pacto— de las exclusiones convencionales, sujetas al régimen general de control del art. 3 LCS ya desarrollado en los capítulos 1 y 5. Se examinan las categorías de exclusión más frecuentes en la práctica: dolo y mala fe, riesgos catastróficos y bélicos, vicio propio y falta de mantenimiento, y desocupación prolongada de la vivienda.",
      "exclusiones, art. 19 LCS, orden público, vicio propio, desocupación de la vivienda",
      "This closing chapter of Part II systematises the exclusions applicable to homeowners' insurance, distinguishing mandatory statutory exclusions from contractual exclusions subject to the general control regime of Article 3 already developed in Chapters 1 and 4. It examines the most frequent exclusion categories in practice: wilful misconduct and bad faith, catastrophic and war risks, inherent defect and lack of maintenance, and prolonged vacancy of the dwelling.",
      "policy exclusions, public order, inherent vice, prolonged vacancy"
    ),
    B.spacer(200),

    B.h2("16.1. Sistemática de las exclusiones en el seguro de hogar"),
    B.p(["Toda póliza de hogar combina dos tipos de exclusiones de naturaleza jurídica muy distinta, cuya confusión es fuente frecuente de error en la práctica profesional", B.fn("La distinción entre exclusiones legales imperativas y exclusiones convencionales sujetas al art. 3 LCS, aunque conceptualmente sencilla, exige un ejercicio constante de calificación en la práctica, dado que muchas condiciones generales reproducen o parafrasean exclusiones legales sin indicar su origen normativo; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., epígrafe introductorio al régimen de exclusiones del seguro de daños."), ":"]),
    B.bullet([B.bold("Exclusiones legales de orden público: "), B.run("derivan directamente de la LCS (arts. 19 y 48, entre otros) y no pueden ser alteradas por pacto en perjuicio del asegurado; su fundamento no es contractual sino de orden público asegurador.")]),
    B.bullet([B.bold("Exclusiones convencionales: "), B.run("son fruto de la libertad de pactos de las partes dentro de los límites de la LCS, y quedan sometidas íntegramente al régimen de control de incorporación, calificación e interpretación estudiado en los capítulos 1 y 5 (arts. 3 LCS, 5 y 7 LCGC, 1288 CC).")]),

    B.h2("16.2. Exclusiones legales de orden público: dolo y mala fe"),
    B.p("La exclusión legal por excelencia en el seguro de daños es la del artículo 19 LCS, ya estudiada en su proyección general en el capítulo 1 y que se desarrolla con detalle en el capítulo 21 de esta obra:"),
    B.legalBox("Art. 19 LCS", "El asegurador estará obligado al pago de la prestación, salvo en el supuesto de que el siniestro haya sido causado por mala fe del asegurado."),
    B.p("Esta exclusión, a diferencia de las convencionales, no necesita figurar destacada en la póliza para desplegar sus efectos: opera ope legis como límite estructural de la propia institución aseguradora, pues un seguro que cubriera el siniestro provocado de mala fe por el propio asegurado dejaría de cumplir su función de traslación de un riesgo incierto y ajeno a la voluntad del asegurado."),

    B.h2("16.3. Exclusiones típicas de riesgos catastróficos y bélicos"),
    B.p("Las condiciones generales de las pólizas de hogar excluyen de forma prácticamente universal los daños derivados de conflictos armados, energía nuclear y, como se estudió en el capítulo 10, los acontecimientos calificados como «extraordinarios» conforme al RDL 7/2004, cuya cobertura corresponde al Consorcio de Compensación de Seguros y no a la aseguradora privada. Estas exclusiones, aunque formuladas contractualmente, responden a una lógica de distribución legal de riesgos entre el mercado privado y el sistema público de compensación, por lo que su control de incorporación e interpretación, sin dejar de aplicarse, opera con menor intensidad que respecto de exclusiones puramente convencionales sin ese correlato en la distribución legal de riesgos."),

    B.h2("16.4. Exclusiones por vicio propio, desgaste y falta de mantenimiento"),
    B.p("Como se estudió con detalle en el capítulo 8 a propósito de los daños por agua, la exclusión del vicio propio, el desgaste natural y la falta de mantenimiento es una de las más invocadas —y más litigiosas— en la práctica del seguro de hogar, por la dificultad de distinguir, en el plano técnico, entre el evento súbito y accidental (cubierto) y el proceso de deterioro progresivo (excluido). La metodología de análisis expuesta en el capítulo 8 —prueba pericial sobre la causa técnica del daño, carga de la prueba de la aseguradora que invoca la exclusión, y proyección de la regla contra proferentem ante la duda razonable— es plenamente aplicable a esta categoría de exclusión con independencia de la garantía concreta afectada (agua, incendio, estructura)."),

    B.h2("16.5. Exclusiones por desocupación prolongada de la vivienda"),
    B.p(["Es habitual que las condiciones generales excluyan, o limiten severamente, la cobertura de determinados riesgos (típicamente, robo y daños por agua) cuando la vivienda ha permanecido desocupada durante un período prolongado —normalmente entre treinta y noventa días consecutivos, según póliza—, por el incremento objetivo de riesgo que la desocupación comporta", B.fn("La exclusión por desocupación prolongada guarda una relación funcional con el deber de comunicación de la agravación del riesgo del art. 11 LCS estudiado en el capítulo 4, en la medida en que un cambio duradero en el patrón de ocupación de la vivienda puede constituir, en sí mismo, una circunstancia agravante sujeta a dicho deber si fue objeto de pregunta en el cuestionario inicial; cfr. capítulo 4, epígrafe 4.3.1."), ". Esta exclusión, formulada en términos objetivos de días de desocupación, se califica generalmente como delimitadora del riesgo si está formulada con claridad en las condiciones particulares, pero puede recalificarse como limitativa —y exigir, por tanto, el cumplimiento de los requisitos del art. 3 LCS— cuando su aplicación se extiende de forma sorpresiva a supuestos de desocupación ordinaria y previsible (vacaciones, segunda residencia de uso esporádico) no anunciados con claridad al contratar."]),

    B.h2("16.6. El control de las exclusiones conforme al art. 3 LCS: síntesis metodológica"),
    B.p("Cierra este capítulo, y con él la Parte II de la obra, una síntesis de la metodología de análisis de cualquier exclusión invocada por una aseguradora, que recoge y unifica los criterios desarrollados a lo largo de los capítulos 1, 5, 8 y 16:"),
    B.bullet("1. Calificar la naturaleza de la exclusión: legal de orden público (inderogable) o convencional (sujeta al art. 3 LCS)."),
    B.bullet("2. Si es convencional, verificar su incorporación efectiva al contrato (arts. 5 y 7 LCGC, capítulo 5)."),
    B.bullet("3. Calificarla como delimitadora o limitativa conforme al test de la cláusula sorpresiva (capítulo 1)."),
    B.bullet("4. Si es limitativa, verificar el cumplimiento de los requisitos formales del art. 3 LCS (destacado y aceptación específica)."),
    B.bullet("5. Ante la persistencia de duda razonable sobre su alcance, proyectar la regla contra proferentem del art. 1288 CC (capítulo 5)."),
    B.bullet("6. Si el tomador es consumidor, verificar adicionalmente su conformidad con el TRLGDCU y la LCGC (capítulo 25)."),

    B.h2("16.7. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante cualquier exclusión invocada", B.AZUL, [
      "Aplicar sistemáticamente la síntesis metodológica del epígrafe 16.6 antes de aceptar o impugnar una exclusión invocada por la aseguradora.",
      "Distinguir siempre las exclusiones legales de orden público (dolo, mala fe) de las convencionales, porque su régimen de control es radicalmente distinto.",
      "En exclusiones por vicio propio o desgaste, exigir prueba pericial cumplida de la causa técnica del daño, sin admitir afirmaciones genéricas de la aseguradora.",
      "En exclusiones por desocupación, verificar si el período aplicado a la vivienda concreta constituye realmente un supuesto excepcional o una desocupación ordinaria y previsible.",
    ]),

    B.h2("16.8. Ficha para el asegurado"),
    B.fichaBox("Qué debe comprobar sobre las exclusiones de su póliza", "8A5A00", [
      "Lea con atención el apartado de exclusiones de sus condiciones generales, no solo el de coberturas: le indicará qué situaciones quedan fuera de su protección.",
      "Si va a dejar su vivienda desocupada por un período prolongado (obras, viaje largo, cambio de residencia), consulte a su aseguradora si esto afecta a su cobertura y, si es preciso, comunique la circunstancia.",
      "Si le deniegan un siniestro invocando una exclusión, pida que se la citen literalmente y le expliquen por qué se aplica a su caso concreto.",
    ]),

    B.h2("16.9. Checklist: análisis de una exclusión invocada por la aseguradora"),
    B.bullet("1. ¿Es una exclusión legal de orden público o una exclusión convencional?"),
    B.bullet("2. ¿Está la cláusula efectivamente incorporada al contrato (entrega y accesibilidad real)?"),
    B.bullet("3. ¿Es delimitadora o limitativa conforme al test de la cláusula sorpresiva?"),
    B.bullet("4. Si es limitativa, ¿cumple los requisitos formales del art. 3 LCS?"),
    B.bullet("5. ¿Existe duda razonable sobre su alcance que deba resolverse a favor del asegurado (art. 1288 CC)?"),
    B.bullet("6. ¿Aporta la aseguradora prueba pericial suficiente de los hechos en que basa la exclusión?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo16 };
