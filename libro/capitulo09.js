const B = require("./build");

function capitulo09() {
  return [
    B.chapterHeading(9, "Robo, expoliación y hurto"),

    B.sumario([
      "9.1. El concepto legal de robo a efectos aseguraticios (art. 50 LCS)",
      "9.2. Alcance de la indemnización (art. 51 LCS)",
      "9.3. Causas legales de exoneración (art. 52 LCS)",
      "9.4. La recuperación del objeto sustraído (art. 53 LCS)",
      "9.5. Hurto y expoliación: la frontera con el robo en sentido técnico",
      "9.6. La prueba del siniestro de robo",
      "9.7. Ficha para el profesional",
      "9.8. Ficha para el asegurado",
      "9.9. Checklist: acreditación de un siniestro de robo",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo estudia el régimen legal del seguro contra robo (arts. 50 a 53 LCS), de aplicación supletoria a la garantía homónima del seguro multirriesgo de hogar, con atención especial a las causas legales de exoneración del art. 52 LCS —negligencia grave del asegurado, sustracción fuera del lugar asegurado y sustracción con ocasión de riesgos extraordinarios— y a la problemática probatoria que domina la litigiosidad de esta cobertura, estructuralmente más compleja que la de incendio por la dificultad de acreditar la preexistencia y sustracción de los bienes reclamados.",
      "seguro de robo, art. 50 LCS, art. 52 LCS, hurto, expoliación, carga de la prueba, preexistencia",
      "This chapter examines the statutory theft insurance regime under Articles 50 to 53 of the Spanish Insurance Contract Act, suppletorily applicable to the theft cover of homeowners' multi-risk policies, focusing on the exoneration grounds of Article 52 —the insured's gross negligence, theft occurring outside the insured location, and theft arising from extraordinary risks— and on the evidentiary difficulties that dominate litigation in this line, structurally more complex than fire claims given the burden of proving the pre-existence and theft of the claimed items.",
      "theft insurance, burglary, gross negligence, burden of proof, pre-existence of goods"
    ),
    B.spacer(200),

    B.h2("9.1. El concepto legal de robo a efectos aseguraticios"),
    B.p(["El seguro de robo cuenta, al igual que el de incendio, con un régimen legal propio en los arts. 50 a 53 LCS, de aplicación supletoria a la garantía de robo del seguro multirriesgo de hogar. El concepto legal de robo a efectos aseguraticios es, significativamente, más amplio que el concepto técnico-penal", B.fn("El art. 50 LCS emplea la expresión «sustracción ilegítima» y remite a «cualquiera de sus formas» de comisión del delito, lo que en la práctica aseguradora se interpreta en sentido amplio, comprensivo tanto del robo con fuerza o violencia como, cuando así se pacte, del hurto y de la apropiación indebida; sobre esta amplitud conceptual, cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 50."), ":"]),
    B.legalBox("Art. 50 LCS", "Por el seguro contra robo, el asegurador se obliga, dentro de los límites establecidos en la Ley y en el contrato a indemnizar los daños derivados de la sustracción ilegítima por parte de terceros de las cosas aseguradas. La cobertura comprende el daño causado por la comisión del delito en cualquiera de sus formas."),
    B.p("La remisión a «cualquiera de sus formas» de comisión del delito permite entender cubiertos, salvo exclusión expresa, tanto el robo con fuerza en las cosas (la modalidad más habitual en el ámbito doméstico: fractura de puerta, ventana o cerradura) como el robo con violencia o intimidación en las personas, mientras que el hurto (sustracción sin fuerza ni violencia) y la apropiación indebida quedan, en la práctica de las pólizas de hogar, sujetos a régimen contractual específico, según se analiza en el epígrafe 9.5."),

    B.h2("9.2. Alcance de la indemnización"),
    B.legalBox("Art. 51 LCS", "La indemnización del asegurador comprenderá necesariamente, de acuerdo con lo dispuesto en el artículo veintisiete: 1.º El valor del interés asegurado cuando el objeto asegurado, efectivamente sea sustraído y no fuera hallado en el plazo señalado en el contrato. 2.º El daño que la comisión del delito, en cualquiera de sus formas, causare en el objeto asegurado."),
    B.p("La norma diferencia, con ello, dos partidas indemnizables que en la práctica pericial conviene documentar por separado: el valor de los bienes efectivamente sustraídos y no recuperados, de un lado, y los daños materiales causados en el proceso de comisión del delito (por ejemplo, la puerta forzada, la cerradura dañada o el mobiliario destrozado durante el registro de la vivienda), de otro, partida esta última que con frecuencia se indemniza incluso cuando la sustracción resulta frustrada o de escasa entidad."),

    B.h2("9.3. Causas legales de exoneración"),
    B.p("El artículo 52 LCS, a diferencia del amplio régimen de cobertura del incendio, restringe la obligación del asegurador en tres supuestos legales, aplicables salvo pacto en contrario:"),
    B.legalBox("Art. 52 LCS", "El asegurador, salvo pacto en contrario, no vendrá obligado a reparar los efectos del siniestro cuando éste se haya producido por cualquiera de las siguientes causas: 1.ª Por negligencia grave del asegurado, del tomador del seguro o de las personas que de ellos dependan o con ellos convivan. 2.ª Cuando el objeto asegurado sea sustraído fuera del lugar descrito en la póliza o con ocasión de su transporte, a no ser que una u otras circunstancias hubieran sido expresamente consentidas por el asegurador. 3.ª Cuando la sustracción se produzca con ocasión de siniestros derivados de riesgos extraordinarios."),
    B.p("A diferencia del régimen del incendio (donde solo el dolo o la culpa grave exoneran, y la negligencia leve del propio asegurado está cubierta), en el seguro de robo la negligencia grave —no solo el dolo— exonera al asegurador, umbral de diligencia sensiblemente más exigente para el asegurado. En la práctica del hogar, esta causa se invoca con frecuencia en supuestos de puertas o ventanas dejadas abiertas, ausencia de activación de sistemas de alarma contratados como condición de la cobertura, o entrega de llaves a terceros sin la diligencia debida, correspondiendo en todo caso a la aseguradora la prueba de que el estándar de negligencia grave —y no meramente leve— resulta superado."),
    B.p("La tercera causa legal de exoneración —sustracción con ocasión de riesgos extraordinarios, como los disturbios o tumultos populares— conecta directamente con el régimen del Consorcio de Compensación de Seguros estudiado en el capítulo 10, al que corresponde, en su caso, la cobertura de estos supuestos excluidos del seguro privado."),
    B.p(["La aplicación práctica del umbral de negligencia grave por las Audiencias Provinciales exige algo más que un simple descuido: la jurisprudencia menor reserva la exoneración a supuestos de auténtico abandono o dejación en la custodia del bien, como ilustra un caso en el que el objeto sustraído —una embarcación— se hallaba amarrada de forma manifiestamente precaria e insegura"]),
    B.jurisBox("SAP Barcelona (Sección 16.ª), de 11 de enero de 2017 (ROJ: SAP B 5946/2017; ECLI:ES:APB:2017:5946; MP: Martín de la Sierra García-Fogeda)", "«De conformidad con lo dispuesto en el artículo 52.1 de la LCS [...], la aseguradora demandada estaría exonerada de abonar cantidad de tipo alguna, dada la situación de abandono y precariedad en que tenía el objeto asegurado.»"),
    B.p("La sentencia recuerda, además, un matiz conceptual importante sobre el propio concepto de robo a efectos civiles: el art. 50 LCS, al emplear la expresión «sustracción ilegítima por parte de terceros», elude deliberadamente la calificación técnico-penal definitiva del hecho, lo que permite calificar el siniestro como «robo» a efectos de la póliza aunque las diligencias penales se archiven por no haberse identificado al autor, sin que ello prive al asegurado de la cobertura contratada."),

    B.h2("9.4. La recuperación del objeto sustraído"),
    B.p("El artículo 53 LCS regula un supuesto de frecuente aparición práctica: la recuperación del bien sustraído, ya sea antes o después del pago de la indemnización."),
    B.legalBox("Art. 53 LCS", "Producido y debidamente comunicado el siniestro al asegurador, se observarán las reglas siguientes: 1.ª Si el objeto asegurado es recuperado antes del transcurso del plazo señalado en la póliza, el asegurado deberá recibirlo, a menos que en ella le hubiera reconocido expresamente la facultad de su abandono al asegurador. 2.ª Si el objeto asegurado es recuperado transcurrido el plazo pactado, y una vez pagada la indemnización, el asegurado podrá retener la indemnización percibida abandonando al asegurador la propiedad del objeto asegurado, o readquirirlo, restituyendo, en este caso, la indemnización percibida por la cosa o cosas restituidas."),
    B.p("La regla articula un mecanismo de opción a favor del asegurado en el segundo supuesto —recuperación tras el pago— que conviene explicar con claridad al cliente: puede quedarse con el dinero y renunciar al bien recuperado (que pasa a ser propiedad de la aseguradora), o recuperar el bien devolviendo la indemnización percibida por él."),

    B.h2("9.5. Hurto y expoliación: la frontera con el robo en sentido técnico"),
    B.p("La práctica aseguradora distingue, dentro de la cobertura genérica de «robo» de las pólizas de hogar, entre el robo en sentido estricto (con fuerza en las cosas o violencia/intimidación en las personas) y otras figuras afines cuyo tratamiento contractual conviene verificar en cada póliza:"),
    B.bullet([B.bold("Hurto: "), B.run("sustracción sin fuerza ni violencia (por ejemplo, el descuido de un bolso en una terraza); frecuentemente excluido de la cobertura estándar de robo en el hogar, salvo pacto expreso o garantía específica de «expoliación» fuera del domicilio.")]),
    B.bullet([B.bold("Expoliación o robo con violencia o intimidación en las personas (atraco): "), B.run("generalmente cubierta como submodalidad agravada, con posible sublímite propio para el dinero en efectivo y objetos personales sustraídos fuera del domicilio (por ejemplo, en el trayecto al banco).")]),
    B.bullet([B.bold("Apropiación indebida por personal doméstico o de confianza: "), B.run("sujeta, en la mayoría de las pólizas, a exclusión expresa o a condiciones particulares específicas, por no encajar con naturalidad en el concepto de «sustracción ilegítima por parte de terceros» del art. 50 LCS cuando el autor tenía acceso lícito a los bienes.")]),

    B.h2("9.6. La prueba del siniestro de robo"),
    B.p("La cobertura de robo plantea, con mayor intensidad que la de incendio, un problema probatorio estructural: el asegurado debe acreditar tanto la preexistencia de los bienes sustraídos como su sustracción efectiva, sin que exista, a diferencia del art. 49.4.º LCS para el incendio, una presunción legal equivalente que invierta la carga de la prueba de la preexistencia. La práctica pericial y judicial admite, no obstante, prueba indiciaria suficiente (fotografías, facturas de compra, tasaciones previas, testificales, denuncia policial coetánea con descripción de los efectos sustraídos), correspondiendo a los tribunales ponderar el conjunto de la prueba indiciaria aportada conforme a las reglas generales de la sana crítica."),

    B.h2("9.7. Ficha para el profesional"),
    B.fichaBox("Puntos de control en un siniestro de robo", B.AZUL, [
      "Verificar si la denuncia penal describe con suficiente detalle los objetos sustraídos: es el primer documento de prueba indiciaria y conviene que el asegurado la presente con la mayor precisión posible.",
      "Reunir toda la prueba disponible sobre la preexistencia de los bienes (facturas, fotografías, tasaciones, garantías, capturas de compra online).",
      "Ante la invocación de negligencia grave (art. 52.1.ª LCS), exigir a la aseguradora la prueba cumplida de que el estándar de diligencia superado es el grave, no el leve.",
      "Verificar si existían medidas de seguridad pactadas como condición de la cobertura (alarma conectada, cerraduras de seguridad) y si su falta de activación es realmente imputable al asegurado.",
      "Distinguir con precisión, según la póliza concreta, la cobertura de robo en sentido estricto, hurto, expoliación y apropiación indebida por personal doméstico, cada una con su propio régimen contractual.",
    ]),

    B.h2("9.8. Ficha para el asegurado"),
    B.fichaBox("Qué hacer tras un robo en su vivienda", "8A5A00", [
      "Denuncie el robo ante la Policía o la Guardia Civil lo antes posible, describiendo con el mayor detalle posible los objetos sustraídos.",
      "No toque ni limpie las zonas de acceso forzado hasta que la Policía Científica o el perito de la aseguradora las hayan examinado, si es razonablemente posible.",
      "Reúna toda la documentación que acredite que tenía esos bienes antes del robo: facturas, fotografías, tasaciones, capturas de pantalla de compras.",
      "Revise si su póliza cubre el robo fuera de casa (expoliación, hurto en la calle) y si tiene sublímite propio, distinto del aplicable dentro de la vivienda.",
    ]),

    B.h2("9.9. Checklist: acreditación de un siniestro de robo"),
    B.bullet("1. ¿Existe denuncia penal presentada y con qué grado de detalle describe los objetos sustraídos?"),
    B.bullet("2. ¿Hay indicios de fuerza en las cosas o violencia/intimidación, o se trata de un hurto sin fuerza?"),
    B.bullet("3. ¿Qué prueba de preexistencia se puede aportar respecto de cada bien reclamado?"),
    B.bullet("4. ¿Existían medidas de seguridad pactadas como condición de la cobertura? ¿Estaban activas?"),
    B.bullet("5. ¿La sustracción se produjo dentro o fuera del lugar descrito en la póliza?"),
    B.bullet("6. ¿Se han producido, además de la sustracción, daños materiales por la comisión del delito (puertas, cerraduras)?"),
    B.bullet("7. ¿Existe posibilidad de recuperación posterior de los bienes? ¿Qué opción del art. 53 LCS interesa al asegurado?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo09 };
