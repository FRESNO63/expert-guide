const B = require("./build");

// Tabla sinóptica de derecho comparado (5 columnas)
const ANCHOS = [14, 20, 26, 26, 14];

function filaComparada(sistema, norma, exclusiones, catastrofes, prescripcion) {
  const celdas = [sistema, norma, exclusiones, catastrofes, prescripcion];
  return new B.TableRow({
    children: celdas.map((t, i) =>
      new B.TableCell({
        width: { size: ANCHOS[i], type: B.WidthType.PERCENTAGE },
        shading: i === 0 ? { type: B.ShadingType.CLEAR, fill: B.GRIS_CLARO } : undefined,
        margins: { top: 120, bottom: 120, left: 130, right: 130 },
        children: [
          new B.Paragraph({
            spacing: { line: 260 },
            children: [
              new B.TextRun({
                text: t,
                bold: i === 0,
                color: i === 0 ? B.AZUL : undefined,
                font: "Archivo",
                size: i === 0 ? 18 : 17,
              }),
            ],
          }),
        ],
      })
    ),
  });
}

function tablaComparada(filas) {
  return new B.Table({
    width: { size: 100, type: B.WidthType.PERCENTAGE },
    columnWidths: [1400, 2000, 2600, 2600, 1400],
    borders: {
      top: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      bottom: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      left: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      right: { style: B.BorderStyle.SINGLE, size: 4, color: B.BORDE },
      insideHorizontal: { style: B.BorderStyle.SINGLE, size: 2, color: B.BORDE },
      insideVertical: { style: B.BorderStyle.SINGLE, size: 2, color: B.BORDE },
    },
    rows: [
      new B.TableRow({
        tableHeader: true,
        children: ["Sistema", "Norma nuclear", "Control de exclusiones", "Catástrofes naturales", "Prescripción"].map(
          (t, i) =>
            new B.TableCell({
              width: { size: ANCHOS[i], type: B.WidthType.PERCENTAGE },
              shading: { type: B.ShadingType.CLEAR, fill: B.NAVY },
              margins: { top: 100, bottom: 100, left: 130, right: 130 },
              children: [
                new B.Paragraph({
                  children: [new B.TextRun({ text: t, bold: true, color: "FFFFFF", font: "Archivo", size: 17, allCaps: true })],
                }),
              ],
            })
        ),
      }),
      ...filas,
    ],
  });
}

function capitulo28() {
  return [
    B.chapterHeading(28, "El seguro de hogar en perspectiva comparada"),

    B.sumario([
      "28.1. Objeto y método: por qué comparar",
      "28.2. Cuadro sinóptico de los seis ordenamientos",
      "28.3. El control de las exclusiones de cobertura",
      "28.3.1. España: una distinción sin apoyo en el texto legal",
      "28.3.2. Francia: una regla de redacción, no de calificación",
      "28.3.3. Alemania: cláusulas sorprendentes y mandato de transparencia",
      "28.3.4. Reino Unido: del contrato a la supervisión de conducta",
      "28.3.5. Italia: el formalismo de la doble firma como espejo del sistema español",
      "28.3.6. Portugal: información precontractual y expectativas del tomador",
      "28.4. La declaración del riesgo",
      "28.5. Infraseguro y regla proporcional",
      "28.6. Catástrofes naturales: cuatro modelos europeos",
      "28.7. Liquidación del siniestro y sanción del retraso",
      "28.8. Derecho de la Unión y textos armonizadores",
      "28.9. Ficha para el profesional: conclusiones utilizables en el litigio español",
      "28.10. Ficha para el asegurado",
      "28.11. Checklist: cuándo merece la pena el argumento comparado",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo aborda el seguro de hogar en los ordenamientos español, francés, alemán, británico, italiano y portugués, partiendo de la constatación de que los cuatro problemas nucleares del ramo —control de las exclusiones, declaración del riesgo, infraestimación del capital y cobertura de catástrofes naturales— son comunes a todos ellos y solo difiere la técnica jurídica empleada para resolverlos. El análisis no persigue una finalidad académica sino argumental: identificar qué soluciones extranjeras han sido ya asumidas por la Sala Primera por vía interpretativa y cuáles son utilizables de lege ferenda o como refuerzo dialéctico en un recurso.",
      "derecho comparado, exclusiones de cobertura, declaración del riesgo, regla proporcional, catástrofes naturales, PEICL",
      "This chapter examines homeowners' insurance across the Spanish, French, German, British, Italian and Portuguese legal systems, starting from the observation that the four core problems of the branch —control of exclusions, disclosure of the risk, under-valuation of the sum insured and coverage of natural catastrophes— are common to all of them, and that only the legal technique used to solve them differs. The analysis is argumentative rather than academic: it identifies which foreign solutions the Spanish Supreme Court has already absorbed by way of interpretation, and which remain usable de lege ferenda or as dialectical reinforcement on appeal.",
      "comparative law, coverage exclusions, duty of disclosure, proportional rule, natural catastrophes, PEICL"
    ),
    B.spacer(200),

    B.h2("28.1. Objeto y método: por qué comparar"),
    B.p("El seguro de hogar plantea en todos los ordenamientos europeos los mismos cuatro problemas: cómo se controlan las exclusiones de cobertura, qué ocurre cuando el tomador declara mal el riesgo, qué se hace con la infraestimación del capital asegurado y quién paga las catástrofes naturales. Lo que cambia de un sistema a otro no es el problema, sino la técnica jurídica con que se resuelve. Esa constatación es la que dota de interés práctico —y no meramente erudito— a la comparación: varias de las soluciones extranjeras han sido ya asumidas por el Tribunal Supremo español por vía interpretativa, aunque sin cita de su origen, y otras siguen disponibles como argumento de refuerzo o de lege ferenda."),
    B.p("Se examinan seis ordenamientos y dos bloques de textos supranacionales, con un criterio de selección estrictamente utilitario. Francia, por la proximidad de su técnica legislativa y por la madurez de su régimen de catástrofes. Alemania, por la calidad dogmática de su reforma de 2008 y por resolver el problema de las exclusiones sin necesidad de una norma especial de seguros. El Reino Unido, por haber hecho lo que España no ha hecho —reformar la ley— y por haber suprimido de raíz el problema de la declaración espontánea del riesgo. Italia y Portugal, como contraste latino de técnica próxima a la española."),
    B.p(["Una advertencia metodológica se impone antes de continuar, y debe trasladarse íntegra a cualquier escrito que se apoye en este capítulo: las referencias de derecho extranjero que siguen se ofrecen con finalidad orientativa y han sido contrastadas en fuentes accesibles en la fecha de redacción, pero no gozan de la misma garantía de verificación oficial que las citas de derecho español manejadas en el resto de la obra, todas ellas comprobadas contra el BOE consolidado y el CENDOJ", B.fn("Ningún tribunal español aplicará de oficio una norma extranjera por el hecho de que se cite en un escrito: conforme al art. 281.2 de la Ley de Enjuiciamiento Civil, el derecho extranjero debe ser probado en su contenido y vigencia. En la práctica que aquí se propone, sin embargo, el derecho comparado no se invoca como derecho aplicable, sino como argumento interpretativo y de autoridad persuasiva sobre el sentido de una norma española, uso que no exige prueba pero sí exactitud. Antes de citar cualquiera de los preceptos extranjeros mencionados en este capítulo, verifíquese su versión vigente en la fuente oficial correspondiente."), "."]),

    B.h2("28.2. Cuadro sinóptico de los seis ordenamientos"),
    B.p("El cuadro siguiente resume, con la inevitable simplificación de toda sinopsis, las cuatro variables analizadas en el capítulo:"),
    B.spacer(120),
    tablaComparada([
      filaComparada(
        "España",
        "Ley 50/1980, de Contrato de Seguro",
        "Art. 3 LCS: distinción pretoriana entre cláusula limitativa y delimitadora; destacado especial y aceptación específica por escrito",
        "Consorcio de Compensación de Seguros: recargo obligatorio y cobertura automática (RDL 7/2004 y RD 300/2004)",
        "2 años (art. 23 LCS)"
      ),
      filaComparada(
        "Francia",
        "Code des assurances",
        "Art. L. 113-1: la exclusión ha de ser «formelle et limitée»; art. L. 112-4: caracteres muy aparentes",
        "Régimen CatNat: garantía obligatoria por ley con reaseguro estatal; surprima del 20 % desde 1.1.2025; exige arrêté de reconocimiento",
        "2 años (art. L. 114-1)"
      ),
      filaComparada(
        "Alemania",
        "VVG de 2008 y BGB",
        "§ 305c BGB (cláusulas sorprendentes, que no se incorporan) y § 307 BGB (mandato de transparencia)",
        "Elementarschadenversicherung voluntaria, con cobertura minoritaria del parque de edificios; debate abierto sobre seguro obligatorio con opt-out",
        "3 años (§ 195 BGB)"
      ),
      filaComparada(
        "Reino Unido",
        "Insurance Act 2015; CIDRA 2012; Consumer Rights Act 2015",
        "Doble test de equidad y transparencia de la CRA 2015, más las reglas de conducta de la FCA",
        "Flood Re: pool de reaseguro creado por la Water Act 2014, con caducidad prevista en 2039 y exclusión de la edificación posterior a 2009",
        "6 años (Limitation Act 1980)"
      ),
      filaComparada(
        "Italia",
        "Codice civile, arts. 1882 y ss.",
        "Arts. 1341-1342 CC: cláusulas vejatorias sujetas a doble firma específica",
        "Voluntario para viviendas; obligación introducida por la Ley 213/2023 limitada a las empresas",
        "2 años (art. 2952 CC)"
      ),
      filaComparada(
        "Portugal",
        "Decreto-Lei 72/2008 (RJCS)",
        "Deber reforzado de información y esclarecimiento, con advertencia expresa de las cláusulas que puedan frustrar las expectativas del cliente",
        "Voluntario para catástrofes; seguro de incendio obligatorio en propiedad horizontal",
        "Régimen del RJCS y reglas generales"
      ),
    ]),
    B.spacer(200),

    B.h2("28.3. El control de las exclusiones de cobertura"),

    B.h3("28.3.1. España: una distinción sin apoyo en el texto legal"),
    B.p("Conviene partir de una constatación incómoda pero difícilmente rebatible: el artículo 3 LCS no distingue entre cláusulas limitativas y delimitadoras. La summa divisio sobre la que se ha construido buena parte de la litigiosidad del ramo, estudiada en los capítulos 1 y 5, es enteramente pretoriana. Y ahí reside su debilidad estructural: más de cuarenta años de jurisprudencia no han producido un criterio que permita anticipar con seguridad, ante una exclusión concreta de una póliza de hogar, si necesitará o no aceptación específica. El resultado es una litigiosidad de segundo grado —se pleitea sobre la calificación de la cláusula antes que sobre el siniestro— que los ordenamientos vecinos han sabido evitar."),
    B.p(["Esta afirmación debe matizarse, no obstante, en un punto importante, para no incurrir en la exageración de sostener que no existe criterio alguno. El criterio existe y está consolidado desde la sentencia de Pleno de 11 de septiembre de 2006, reiterada sin fisuras hasta hoy: es delimitadora la condición que concreta el objeto del contrato y determina qué riesgos, en caso de producirse, hacen surgir el derecho a la prestación, y es limitativa la que restringe, condiciona o modifica ese derecho una vez producido el riesgo. Lo que ocurre es que se trata de un criterio funcional, que solo puede aplicarse caso a caso sobre el condicionado concreto y sobre las expectativas que ese condicionado generó", B.fn("Lo ilustra bien la STS, Sala de lo Civil, de 12 de diciembre de 2019 (ROJ: STS 3943/2019; ECLI:ES:TS:2019:3943; MP: Seoane Spiegelberg), que tras recordar la doctrina del Pleno de 2006 concluye que la cláusula litigiosa era delimitadora y no limitativa, porque «en tan esencial función delimitadora no se aparta del contenido natural o usual de un seguro de tal clase, ni entra en abierta contradicción con la práctica del sector», sin que quedaran frustradas las expectativas razonables del asegurado. Es un recordatorio útil de que el criterio funcional no opera automáticamente en favor del asegurado: exige acreditar la defraudación concreta de una expectativa razonable."), ". La incertidumbre, por tanto, no se ha eliminado: se ha desplazado del plano dogmático al probatorio, que es donde hoy se ganan y se pierden estos pleitos."]),

    B.h3("28.3.2. Francia: una regla de redacción, no de calificación"),
    B.p("El Derecho francés resuelve el mismo problema por una vía distinta y, en su sencillez, notablemente más eficaz: no pregunta qué naturaleza tiene la cláusula, sino cómo está redactada."),
    B.legalBox("Art. L. 113-1 del Code des assurances (extracto)", "Les pertes et les dommages occasionnés par des cas fortuits ou causés par la faute de l'assuré sont à la charge de l'assureur, sauf exclusion formelle et limitée contenue dans la police. [Las pérdidas y los daños ocasionados por casos fortuitos o causados por culpa del asegurado corren a cargo del asegurador, salvo exclusión formal y limitada contenida en la póliza.]"),
    B.p(["La jurisprudencia francesa ha extraído de esa fórmula dos exigencias acumulativas de gran rendimiento práctico. La exclusión es «formal» solo si se apoya en criterios precisos y no necesita ser interpretada para saber qué excluye: una cláusula que exige interpretación no es, por definición, formal. Y es «limitada» solo si no vacía la garantía de su sustancia, esto es, si tras su aplicación no queda una cobertura irrisoria", B.fn("A ello se añade una exigencia formal complementaria, contenida en el art. L. 112-4 del propio Code des assurances, conforme a la cual las cláusulas de nulidad, caducidad o exclusión deben figurar impresas en caracteres muy aparentes («caractères très apparents»), previsión funcionalmente equivalente al requisito español de destacado especial del art. 3 LCS, pero desligada de cualquier debate previo sobre la naturaleza de la cláusula."), "."]),
    B.p("La diferencia práctica es considerable. En Francia el debate se agota en la lectura de la cláusula; en España obliga a un juicio previo sobre su naturaleza jurídica que ni la ley resuelve ni la jurisprudencia ha logrado estabilizar. Es razonable sostener —y este es el primer argumento comparado aprovechable— que la técnica francesa es la que debería inspirar la lectura del art. 3 LCS, y que el criterio de las expectativas razonables que maneja nuestra Sala Primera, examinado en el capítulo 1, apunta ya materialmente en esa dirección aunque conserve el ropaje conceptual de la distinción."),

    B.h3("28.3.3. Alemania: cláusulas sorprendentes y mandato de transparencia"),
    B.p("El Derecho alemán no ha necesitado una norma especial de seguros para resolver el problema, porque le basta con el control general de condiciones generales del Código Civil. Dos preceptos concentran la solución:"),
    B.bullet([B.bold("§ 305c BGB (cláusulas sorprendentes): "), B.run("las estipulaciones de condiciones generales que, atendidas las circunstancias y en particular la apariencia externa del contrato, resulten tan insólitas que la contraparte no tenía por qué contar con ellas, no llegan a incorporarse al contrato. Nótese la consecuencia: no son inoponibles ni anulables, sencillamente no forman parte del contrato.")]),
    B.bullet([B.bold("§ 307 BGB (Transparenzgebot): "), B.run("el mandato de transparencia, en su apartado primero, determina la ineficacia de la cláusula intransparente por sí sola, sin necesidad de acreditar además un desequilibrio material adicional, en línea con el art. 5 de la Directiva 93/13/CEE.")]),
    B.p("Aplicado a una póliza de hogar, esto significa que la exclusión de las humedades por defecto de mantenimiento —cuestión estudiada en el capítulo 8— se juzgaría en Alemania por si un tomador medio podía razonablemente esperarla, y no por si aparece o no destacada en negrita. Es exactamente el razonamiento material que emplea nuestra Sala Primera cuando recurre al criterio de la cláusula sorpresiva, con la diferencia de que allí cuenta con anclaje legal expreso y aquí ha debido construirse por vía interpretativa sobre un precepto que no lo contempla."),

    B.h3("28.3.4. Reino Unido: del contrato a la supervisión de conducta"),
    B.p("El sistema británico ha desplazado buena parte del problema desde el terreno contractual al de la supervisión administrativa. La Consumer Rights Act 2015 somete el clausulado al doble test de equidad (fairness) y transparencia, y las reglas de conducta del supervisor financiero exigen que la cobertura ofrecida sea consistente con las expectativas razonables del cliente. La consecuencia de una exclusión oscura no se agota, por tanto, en su inoponibilidad en el pleito concreto: se convierte además en un problema regulatorio para la entidad, con capacidad de afectar a toda su cartera. Es un modelo de incentivos sensiblemente más eficaz que el español, donde el coste de una cláusula mal redactada se limita, en la práctica, a perder los litigios que el asegurado tenga la energía de plantear."),

    B.h3("28.3.5. Italia: el formalismo de la doble firma como espejo del sistema español"),
    B.p("Italia representa la solución opuesta a la francesa y es, precisamente por ello, el espejo más útil del sistema español. Los arts. 1341 y 1342 del Codice civile someten las llamadas cláusulas vejatorias —entre las que se cuentan las limitaciones de responsabilidad y las exclusiones de cobertura— a un requisito de aprobación específica y separada por escrito, la doble firma, sin cuyo cumplimiento no producen efecto alguno. Se trata de un control estrictamente de forma, no de contenido: acreditada la firma separada, la cláusula despliega su eficacia sin más examen."),
    B.p(["El paralelismo con el art. 3 LCS es evidente, y también lo es la lección que cabe extraer. Allí donde el control se agota en el cumplimiento de un requisito formal, la aseguradora aprende pronto a cumplirlo —basta con un recuadro y una firma— y el problema de fondo, que es una exclusión capaz de vaciar la cobertura anunciada, queda intacto. Ese es exactamente el riesgo que corre toda lectura formalista del art. 3 LCS, y la razón de que el criterio realmente operativo en nuestra jurisprudencia no sea el del destacado tipográfico sino el funcional de la cláusula sorpresiva", B.fn("La comparación permite además situar en su justo término una crítica frecuente al sistema español: el problema del art. 3 LCS no es que exija requisitos formales —Italia los exige también, y más rígidos—, sino que la jurisprudencia haya tenido que construir sobre ellos, sin apoyo legal expreso, un control material que la ley no contempla. El resultado es un sistema materialmente más protector que el italiano pero dogmáticamente menos previsible que el francés."), ". Cuando en un pleito español la aseguradora sostiene que basta con haber destacado y hecho firmar la cláusula, el contraste italiano permite responder que ese es precisamente el modelo que la Sala Primera ha rechazado al reconducir las cláusulas sorpresivas al régimen de las limitativas con independencia de su ubicación y de su presentación tipográfica."]),

    B.h3("28.3.6. Portugal: información precontractual y expectativas del tomador"),
    B.p("El Regime Jurídico do Contrato de Seguro portugués, aprobado por el Decreto-Lei 72/2008, articula el control por una tercera vía, distinta tanto de la calificación española como del formalismo italiano: lo sitúa en la fase de información precontractual. El asegurador soporta un deber reforzado de esclarecimiento sobre el contenido de la cobertura y sus exclusiones, con especial atención a aquellas estipulaciones que puedan contradecir las expectativas legítimas del tomador, y el incumplimiento de ese deber proyecta consecuencias sobre la oponibilidad de la cláusula."),
    B.p(["La técnica portuguesa interesa por una razón de método que la hace especialmente aprovechable: sitúa el problema antes del contrato, en el momento de la contratación, y no después, en el de la calificación de la cláusula. Es la misma dirección que marca la Directiva (UE) 2016/97 examinada en el epígrafe 28.8, y ofrece un argumento poco explorado en la práctica española", B.fn("El argumento no es meramente comparado: la normativa española de distribución impone ya deberes precontractuales de contenido equivalente —el art. 175.1 del RD-ley 3/2020 obliga al distribuidor a determinar las exigencias y necesidades del cliente y a proponer un contrato que las respete, y el art. 176 impone el documento de información previa sobre el producto—, de modo que la construcción portuguesa puede trasladarse sin forzar nuestro ordenamiento. Véanse los capítulos 3 y 19 de esta obra, donde se desarrolla esta misma línea aplicada a la fijación del capital asegurado."), ": la exclusión sobre la que nunca se informó no es solo una cláusula limitativa mal incorporada, es una cláusula sobre la que no llegó a formarse un consentimiento informado. Planteada así, la cuestión se desplaza del terreno del art. 3 LCS —donde la aseguradora suele estar bien pertrechada— al del incumplimiento de deberes precontractuales de información, donde su posición es sensiblemente más débil."]),

    B.h2("28.4. La declaración del riesgo"),
    B.p("Es en esta materia donde el contraste resulta más nítido y, para el litigante español, más rentable. El art. 10 LCS, estudiado en el capítulo 4, mantiene un deber de declaración articulado sobre el cuestionario, con la sanción abrupta de la liberación del asegurador cuando media dolo o culpa grave y la reducción proporcional de la prestación en los demás casos. La jurisprudencia española ha ido corrigiendo el precepto por vía interpretativa, exigiendo que el cuestionario sea concreto y que haya sido efectivamente sometido al tomador, pero el esquema legal sigue siendo el de un efecto de todo o nada."),
    B.p("El Derecho francés llegó antes al mismo destino: el asegurador solo puede prevalerse de las respuestas a preguntas precisas que él mismo haya formulado, con nulidad del contrato por declaración falsa intencionada y aplicación de una regla proporcional de prima cuando no concurre intención. El § 19 VVG alemán, por su parte, exige que el asegurador pregunte en forma de texto y gradúa la sanción en función del grado de culpa —dolo o fraude, culpa grave, negligencia simple y ausencia de culpa—, evitando así el efecto de todo o nada mediante un sistema escalonado de remedios."),
    B.p(["La solución más radical, y la más útil para el abogado español, es la británica. La Consumer Insurance (Disclosure and Representations) Act 2012 suprimió lisa y llanamente el deber de declaración espontánea del consumidor —que hasta entonces debía volunteer toda información material— y lo sustituyó por un deber de emplear una diligencia razonable para no incurrir en declaración inexacta, con remedios proporcionales que sitúan al asegurador en la posición en la que habría estado de haber conocido el riesgo real", B.fn("La reforma británica de 2012 no fue fruto de una intuición legislativa aislada, sino de un largo trabajo previo de las comisiones de reforma legislativa inglesa y escocesa, y descansa en una constatación empírica difícilmente discutible: el consumidor medio no sabe qué información es «material» para un asegurador, de modo que hacerle soportar las consecuencias de no haberla ofrecido espontáneamente equivale a sancionarle por no ser experto en una técnica que no domina. El mismo razonamiento late en la exigencia jurisprudencial española de un cuestionario concreto y efectivamente sometido al tomador, aunque nuestra Sala Primera haya debido alcanzarlo sin apoyo legal expreso."), ". Cuando se defiende a un asegurado a quien se opone la omisión de una circunstancia sobre la que nunca fue preguntado, este es el mejor argumento comparado disponible: demuestra que el efecto de todo o nada no es una exigencia lógica del contrato de seguro, sino una opción legislativa que otros ordenamientos han abandonado por injusta."]),

    B.h2("28.5. Infraseguro y regla proporcional"),
    B.p("Aquí conviene ser prudente y no prometer al cliente más de lo que el derecho comparado puede dar. El art. 30 LCS aplica la regla proporcional de forma automática salvo pacto en contrario, pero Francia y Alemania conservan reglas equivalentes, de modo que España no constituye en este punto anomalía continental alguna. Sí lo es frente al Reino Unido, donde la cláusula de average ha desaparecido en la práctica de las pólizas de consumo, pero se trata de un dato aislado sobre el que resulta arriesgado construir una impugnación."),
    B.p("El ángulo verdaderamente aprovechable es otro, y no se dirige contra la regla sino contra su aplicación: como se ha desarrollado en el capítulo 19, el problema español no es la regla proporcional en sí, sino quién fija el capital asegurado. En el multirriesgo del hogar la suma la propone habitualmente la entidad mediante sus propias tablas de valoración por metro cuadrado, y aplicar después la regla proporcional al asegurado por una infraestimación que no diseñó resulta difícilmente compatible con el deber de asesoramiento que impone la normativa de distribución. La conexión entre la Directiva (UE) 2016/97 y el infraseguro está poco explorada en nuestros tribunales y constituye, hoy por hoy, la línea de mayor recorrido en esta materia."),

    B.h2("28.6. Catástrofes naturales: cuatro modelos europeos"),
    B.p("Es la cuestión donde la comparación resulta más instructiva, porque los cuatro modelos teóricamente posibles están todos representados en Europa y todos se encuentran simultáneamente en revisión:"),
    B.bullet([B.bold("España — cobertura pública automática: "), B.run("el Consorcio cubre los riesgos extraordinarios mediante un recargo obligatorio sobre toda póliza de daños. La cobertura es universal y no depende de que la póliza privada contemple el riesgo. El punto crítico no es la existencia de cobertura, sino la calificación del evento y el deslinde entre lo ordinario y lo extraordinario, estudiado en detalle en el capítulo 10.")]),
    B.bullet([B.bold("Francia — garantía obligatoria con reaseguro estatal: "), B.run("la garantía CatNat se incorpora por ley a todo contrato de daños y se financia con una surprima que pasó del 12 % al 20 % el 1 de enero de 2025, con franquicias legales de 380 euros con carácter general y de 1.520 euros para la sequía geotécnica. La cobertura exige, además, un arrêté interministerial de reconocimiento del estado de catástrofe natural, requisito administrativo que España no conoce y que genera su propia litigiosidad sobre la delimitación geográfica y temporal del evento reconocido.")]),
    B.bullet([B.bold("Alemania — mercado libre y déficit de cobertura: "), B.run("la cobertura de riesgos elementales es voluntaria y solo una fracción minoritaria del parque de edificios la tiene contratada. Tras las inundaciones de 2021 el debate sobre un seguro obligatorio se ha instalado en la agenda legislativa, con un modelo discutido de oferta obligatoria y opt-out del cliente. Es el ejemplo, útil como contraste, de lo que ocurre cuando no existe un consorcio.")]),
    B.bullet([B.bold("Reino Unido — pool temporal: "), B.run("Flood Re, creado por la Water Act 2014, reasegura el componente de inundación de las pólizas domésticas mediante una exacción sobre todo el mercado, con fecha de extinción prevista en 2039 y el objetivo declarado de retornar entonces a precios ajustados al riesgo. Excluye deliberadamente la edificación terminada a partir del 1 de enero de 2009, para no incentivar la construcción en zona inundable.")]),
    B.bullet([B.bold("Italia — obligación limitada a las empresas: "), B.run("la Ley 213/2023 introdujo por primera vez un deber de aseguramiento frente a riesgos catastróficos, pero circunscrito a las empresas inscritas en el Registro Mercantil y con un calendario escalonado de entrada en vigor a lo largo de 2025. La vivienda particular permanece en el ámbito voluntario.")]),
    B.p("La conclusión comparada merece subrayarse, porque contradice un lugar común: el sistema español, tan criticado, es estructuralmente el más sólido de los cuatro. Es universal, se financia ex ante y carece de fecha de caducidad, frente al modelo británico —temporal por diseño—, al alemán —con un déficit de cobertura estructural— y al francés, que depende de una decisión administrativa previa de reconocimiento. Sus problemas son de gestión y de deslinde, no de diseño. Conviene tenerlo presente antes de construir una demanda sobre la premisa de que el Consorcio es el eslabón débil del sistema: casi siempre es el más fuerte, y el esfuerzo argumental rinde más dirigido a la calificación del evento concreto que a la crítica del modelo."),

    B.h2("28.7. Liquidación del siniestro y sanción del retraso"),
    B.p("El procedimiento pericial del art. 38 LCS, estudiado en el capítulo 18, tiene equivalentes funcionales en Francia y en Alemania, con recurso a un tercer perito dirimente en caso de desacuerdo. La singularidad española no está en el mecanismo sino en su régimen de plazos —treinta días para el asegurador y ciento ochenta para el asegurado— y en el efecto preclusivo del dictamen no impugnado."),
    B.p(["Donde España es claramente más protectora que sus vecinos es en la sanción del retraso. El interés del art. 20 LCS, punitivo y de devengo automático, no tiene parangón continental: Francia y Alemania se limitan al interés legal desde la exigibilidad de la prestación. El Reino Unido tardó en llegar, y lo hizo por la vía de la reforma de 2016, que introdujo en la Insurance Act 2015 una sección 13A conforme a la cual se entiende implícito en todo contrato de seguro el deber de pagar las cantidades debidas en un plazo razonable, con acción de daños por su incumplimiento", B.fn("La reforma británica entró en vigor el 4 de mayo de 2017 y ofrece, además, un matiz de interés para el debate español sobre la «causa justificada» del art. 20.8.º LCS estudiada en el capítulo 20: la norma británica prevé expresamente que el asegurador que tenga motivos razonables para discutir la reclamación no incumple el deber por el mero hecho de retrasar el pago mientras dura la discusión, si bien la forma en que haya conducido la tramitación se tendrá en cuenta. Es una solución de equilibrio próxima, en su resultado, a la doctrina restrictiva de nuestra Sala Primera."), "."]),
    B.p("Este dato desactiva un argumento habitual de las aseguradoras en los pleitos españoles —que el art. 20 LCS resultaría desproporcionado en términos comparados— y conviene tenerlo a mano: la tendencia europea de la última década es a sancionar el retraso del asegurador, no a suavizarlo."),

    B.h2("28.8. Derecho de la Unión y textos armonizadores"),
    B.p(["La Directiva 93/13/CEE opera sobre la póliza de hogar como sobre cualquier contrato celebrado con consumidores, con la salvedad capital de su art. 4.2: la definición del riesgo asegurado pertenece al objeto principal del contrato y, por tanto, solo se somete a control de contenido si no es transparente. De ahí la importancia decisiva del control de transparencia material, que constituye la vía por la que un juez español puede fiscalizar una exclusión que no supere el escrutinio de comprensibilidad real aunque esté formalmente destacada y firmada", B.fn("Esta es, probablemente, la conclusión de mayor rendimiento práctico de todo el capítulo, y merece ser subrayada: el control de transparencia material de matriz comunitaria permite alcanzar, respecto de un tomador consumidor, un resultado que la distinción interna entre cláusulas delimitadoras y limitativas no siempre permite obtener, porque no depende de la calificación previa de la cláusula sino de su comprensibilidad real. Véase, sobre el triple control de las condiciones generales cuando el tomador es consumidor, el capítulo 25 de esta obra."), "."]),
    B.p("La Directiva (UE) 2016/97, de distribución de seguros, incorporada a nuestro ordenamiento por el RD-ley 3/2020, impone deberes de asesoramiento y el documento de información normalizado sobre el producto. Su conexión con el problema del infraseguro es directa y ha sido desarrollada en el capítulo 19."),
    B.p("Los Principios de Derecho Europeo del Contrato de Seguro (PEICL) constituyen, finalmente, el mejor material disponible de lege ferenda. Resuelven la declaración del riesgo mediante el modelo de preguntas del asegurador con remedios proporcionales, y prescinden por completo de la distinción entre cláusulas limitativas y delimitadoras. Su valor en un escrito es el de mostrar que la solución española no es la única concebible ni la técnicamente preferible, aunque carezcan por completo de fuerza vinculante y deban invocarse siempre como lo que son: un texto académico de referencia."),

    B.h2("28.9. Ficha para el profesional: conclusiones utilizables en el litigio español"),
    B.fichaBox("Seis argumentos comparados y cuándo emplearlos", B.AZUL, [
      "Frente a una exclusión oscura, el argumento más fuerte no es que sea limitativa, sino que no es «formal y limitada» en el sentido del art. L. 113-1 francés y que resulta sorprendente en el del § 305c BGB. Reconduce el debate del formalismo a la sustancia y evita el terreno resbaladizo de la calificación.",
      "Frente a la excepción de reticencia del art. 10 LCS, el modelo británico de 2012 y el escalonamiento del § 19 VVG acreditan que el efecto de todo o nada es una opción legislativa abandonada por otros ordenamientos, y no una exigencia lógica del contrato de seguro.",
      "Frente a la regla proporcional, no impugne la regla —común a Francia y Alemania— sino su aplicación a quien no fijó el capital, por la vía del deber de asesoramiento de la normativa de distribución (capítulo 19).",
      "Frente a la alegación de desproporción del art. 20 LCS, la reforma británica de 2016 demuestra que la tendencia europea es a sancionar el retraso, no a suavizarlo.",
      "En materia de catástrofes, el modelo español es el más protector de Europa: dirija el esfuerzo a la calificación del evento y al deslinde entre aseguradora y Consorcio (capítulo 10), no a cuestionar el sistema.",
      "El control de transparencia material de la Directiva 93/13 es la vía de entrada del Derecho europeo en el art. 3 LCS y, hoy por hoy, la más fértil cuando el tomador es consumidor (capítulo 25).",
    ]),

    B.h2("28.10. Ficha para el asegurado"),
    B.fichaBox("Qué aporta la comparación con otros países", "8A5A00", [
      "Su seguro de hogar se rige por la ley española, y ningún tribunal aplicará una ley francesa o alemana a su póliza: lo que sigue no cambia sus derechos, pero ayuda a entender su posición.",
      "En materia de catástrofes naturales usted está mejor protegido que la mayoría de los europeos: el recargo del Consorcio que paga en su recibo le da una cobertura automática que en Alemania es voluntaria y en el Reino Unido tiene fecha de caducidad.",
      "En materia de retrasos en el pago también está mejor protegido: los intereses del artículo 20 son de los más severos de Europa, y esa es precisamente la razón de que las aseguradoras intenten discutir su aplicación.",
      "Donde su posición es comparativamente más débil es en la letra pequeña: otros países exigen que las exclusiones se redacten de forma precisa y no puedan vaciar la garantía, mientras que en España el debate se desplaza a discutir qué clase de cláusula es cada una.",
    ]),

    B.h2("28.11. Checklist: cuándo merece la pena el argumento comparado"),
    B.bullet("1. ¿El debate central del pleito es la calificación de una cláusula? En tal caso, el argumento francés y el alemán permiten reconducirlo a la sustancia de la redacción."),
    B.bullet("2. ¿Se opone al asegurado una omisión sobre la que nunca fue preguntado? El modelo británico de 2012 es el contraste más eficaz."),
    B.bullet("3. ¿Se discute la regla proporcional? Verifique antes quién fijó el capital: sin ese dato, el argumento comparado no aporta nada."),
    B.bullet("4. ¿Alega la aseguradora que el art. 20 LCS es desproporcionado? La reforma británica de 2016 desactiva la alegación."),
    B.bullet("5. ¿Es el tomador consumidor? Priorice entonces el control de transparencia material de la Directiva 93/13 sobre cualquier otro argumento comparado."),
    B.bullet("6. ¿Se ha verificado la vigencia actual de cada precepto extranjero antes de citarlo en el escrito?"),

    B.h2("Bibliografía citada"),
    B.p("Advertencia: las referencias normativas extranjeras citadas en este capítulo se ofrecen a título orientativo y fueron contrastadas en fuentes accesibles en la fecha de redacción. A diferencia de las citas de derecho español manejadas en el resto de la obra —verificadas contra el BOE consolidado y el CENDOJ—, deben comprobarse en su versión vigente antes de emplearlas en un escrito."),
    B.spacer(120),
    B.p("Code des assurances (Francia), arts. L. 112-4, L. 113-1, L. 114-1 y L. 121-5."),
    B.p("Bürgerliches Gesetzbuch (Alemania), §§ 195, 305c y 307; Versicherungsvertragsgesetz de 2008, §§ 19, 75 y 84."),
    B.p("Consumer Insurance (Disclosure and Representations) Act 2012; Insurance Act 2015, sección 13A, introducida por la Enterprise Act 2016; Consumer Rights Act 2015; Water Act 2014 (Reino Unido)."),
    B.p("Codice civile (Italia), arts. 1341, 1342, 1882 y ss. y 2952; Legge 213/2023, art. 1, apartados 101 a 111."),
    B.p("Decreto-Lei 72/2008, de 16 de abril, Regime Jurídico do Contrato de Seguro (Portugal)."),
    B.p("Directiva 93/13/CEE del Consejo, de 5 de abril de 1993, sobre las cláusulas abusivas en los contratos celebrados con consumidores."),
    B.p("Directiva (UE) 2016/97 del Parlamento Europeo y del Consejo, de 20 de enero de 2016, sobre la distribución de seguros."),
    B.p("Principios de Derecho Europeo del Contrato de Seguro (PEICL), elaborados por el Project Group on a Restatement of European Insurance Contract Law."),
  ];
}

module.exports = { capitulo28 };
