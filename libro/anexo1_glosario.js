const B = require("./build");

function termino(voz, definicion) {
  return new B.Paragraph({
    spacing: { after: 160, line: 300 },
    alignment: B.AlignmentType.JUSTIFIED,
    children: [
      new B.TextRun({ text: voz + ". ", bold: true, color: B.NAVY, font: "Archivo", size: 21 }),
      new B.TextRun({ text: definicion, font: "Archivo", size: 21 }),
    ],
  });
}

function letra(l) {
  return new B.Paragraph({
    heading: B.HeadingLevel.HEADING_3,
    spacing: { before: 300, after: 120 },
    children: [new B.TextRun({ text: l, bold: true, color: B.AZUL, font: "Archivo", size: 22, allCaps: true })],
  });
}

function anexoI() {
  return [
    new B.Paragraph({
      heading: B.HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 300 },
      children: [new B.TextRun({ text: "Anexo I. Glosario de términos", bold: true, color: B.NAVY, font: "Fraunces", size: 30 })],
    }),
    B.p("El glosario recoge los términos técnicos empleados a lo largo de la obra, con una definición breve orientada a la práctica del seguro de hogar y no a su tratamiento doctrinal exhaustivo, que se encuentra en el capítulo correspondiente. Los términos se ordenan alfabéticamente; entre paréntesis se indica el capítulo donde cada concepto se desarrolla con mayor detalle."),
    B.spacer(200),

    letra("A"),
    termino("Acción directa", "Acción que la ley reconoce al tercero perjudicado por un hecho de responsabilidad civil para reclamar directamente a la aseguradora del causante, inmune a las excepciones que esta pudiera oponer a su propio asegurado, salvo la culpa exclusiva del perjudicado y las excepciones personales frente a él (art. 76 LCS; capítulo 13)."),
    termino("Actio nata", "Principio conforme al cual el plazo de prescripción de una acción no comienza a correr hasta que esta puede efectivamente ejercitarse, es decir, hasta que su titular dispone de los elementos fácticos y jurídicos necesarios (capítulo 22)."),
    termino("Agente de seguros", "Distribuidor de seguros vinculado, en exclusiva o casi exclusiva, a una o varias aseguradoras determinadas, cuya función es ofrecer los productos de estas, sin el deber de comparación de mercado propio del corredor (capítulo 3)."),
    termino("Agravación del riesgo", "Alteración, durante la vigencia del contrato, de las circunstancias declaradas en el cuestionario inicial que aumenta la probabilidad o la entidad del riesgo cubierto, sujeta a un deber de comunicación al asegurador (art. 11 LCS; capítulo 4)."),
    termino("Asegurado", "Titular del interés objeto de cobertura, a quien corresponden los derechos derivados del contrato de seguro, coincida o no con el tomador (art. 7 LCS; capítulo 2)."),

    letra("B"),
    termino("Beneficiario", "Persona designada en la póliza para percibir la indemnización o prestación, que puede coincidir con el asegurado o ser un tercero (por ejemplo, la entidad acreedora hipotecaria) (capítulo 2)."),
    termino("Burofax", "Servicio postal certificado con acuse de recibo utilizado habitualmente para las comunicaciones fehacientes entre asegurado y aseguradora, en particular la reclamación previa que interrumpe la prescripción (art. 1973 CC; Anexo IV, Modelo 1)."),

    letra("C"),
    termino("Cláusula delimitadora del riesgo", "Estipulación que concreta el objeto del contrato, fijando qué riesgos, de producirse, hacen surgir el derecho a la prestación; se incorpora al contrato mediante aceptación genérica, sin necesidad de destacado especial (art. 3 LCS; capítulo 1)."),
    termino("Cláusula lesiva", "Estipulación que produce un desequilibrio importante e injustificado en perjuicio del asegurado, nula de pleno derecho y no subsanable por aceptación expresa, a diferencia de la limitativa (art. 3 LCS; capítulo 1)."),
    termino("Cláusula limitativa de derechos", "Estipulación que, una vez nacido el derecho del asegurado a la prestación, lo restringe, condiciona o modifica; exige destacado formal especial y aceptación específica y por escrito distinta de la firma general de la póliza (art. 3 LCS; capítulo 1)."),
    termino("Cláusula sorpresiva", "Cláusula que, aunque formalmente delimitadora, se aparta del contenido natural o usual del ramo contratado y frustra las expectativas razonables del asegurado, recibiendo en la práctica el tratamiento de las cláusulas limitativas (capítulo 1)."),
    termino("Concurrencia de seguros", "Situación en la que dos o más contratos de seguro cubren el mismo riesgo sobre el mismo interés durante el mismo período, lo que determina la contribución proporcional de los aseguradores concurrentes (art. 32 LCS; capítulos 8 y 19)."),
    termino("Condiciones especiales", "Estipulaciones que modulan, para un contrato o producto concreto, alguna previsión de las condiciones generales (capítulo 5)."),
    termino("Condiciones generales", "Clausulado estándar predispuesto por la aseguradora para la generalidad de los contratos de un determinado producto (capítulo 5)."),
    termino("Condiciones particulares", "Datos y pactos específicos de cada contrato concreto: sumas aseguradas, franquicias, dirección del inmueble, sublímites contratados (capítulo 5)."),
    termino("Consorcio de Compensación de Seguros (CCS)", "Entidad pública empresarial que indemniza, en régimen de compensación financiado mediante recargo obligatorio, las pérdidas derivadas de acontecimientos extraordinarios (inundación extraordinaria, terremoto, tempestad ciclónica atípica, entre otros) (RDL 7/2004; capítulo 10)."),
    termino("Contenido", "Los bienes muebles del hogar asegurado: mobiliario, electrodomésticos, ropa, y, con sublímites específicos, joyas, dinero en efectivo y objetos de valor (capítulo 1)."),
    termino("Continente", "La construcción en sí —muros, techos, suelos, instalaciones fijas— y, en su caso, los elementos comunes, en la proporción correspondiente (capítulo 1)."),
    termino("Contra proferentem", "Regla de interpretación conforme a la cual las cláusulas oscuras de un contrato no deben favorecer a la parte que ocasionó la oscuridad, es decir, al asegurador que redactó unilateralmente las condiciones generales (art. 1288 CC; capítulos 5 y 6)."),
    termino("Corredor de seguros", "Distribuidor de seguros independiente de cualquier aseguradora concreta, obligado a ofrecer un asesoramiento profesional fundado en el análisis objetivo del mercado (capítulo 3)."),
    termino("Culpa grave", "Grado de negligencia especialmente intenso, próximo al dolo aunque sin la intención de causar el daño, que en determinadas coberturas (robo, incendio) exonera al asegurador de su obligación de indemnizar (arts. 48 y 52 LCS; capítulo 21)."),
    termino("Cuestionario de riesgo", "Conjunto de preguntas que el asegurador somete al tomador antes de la conclusión del contrato para valorar el riesgo; su ausencia exonera al tomador del deber de declaración (art. 10 LCS; capítulo 4)."),

    letra("D"),
    termino("Declaración del riesgo", "Deber precontractual del tomador de responder con veracidad al cuestionario que le somete el asegurador sobre las circunstancias que puedan influir en la valoración del riesgo (art. 10 LCS; capítulo 4)."),
    termino("Defensor del Asegurado", "Órgano interno o externo de la aseguradora encargado de resolver las reclamaciones de los clientes en segunda instancia, tras el Servicio de Atención al Cliente (capítulo 23)."),
    termino("DGSFP", "Dirección General de Seguros y Fondos de Pensiones, organismo público de supervisión del sector asegurador español, ante cuyo Servicio de Reclamaciones puede acudirse una vez agotada la vía interna de la aseguradora (capítulo 23)."),
    termino("Dies a quo", "Fecha en la que comienza a computarse un plazo, en particular el de prescripción de la acción derivada del contrato de seguro (capítulo 22)."),
    termino("Dolo", "Provocación consciente y deliberada del siniestro por el propio asegurado, único supuesto que exonera al asegurador conforme a la regla general del art. 19 LCS (capítulo 21)."),

    letra("E"),
    termino("Expectativa razonable del asegurado", "Canon interpretativo conforme al cual el alcance de una cobertura debe medirse con arreglo a lo que un asegurado medio razonablemente esperaría del producto contratado, atendido su contenido natural y la práctica aseguradora (capítulos 1 y 6)."),

    letra("F"),
    termino("Franquicia", "Cantidad o porcentaje del daño que queda a cargo del propio asegurado en cada siniestro, pactada en las condiciones particulares."),

    letra("I"),
    termino("Importe mínimo", "Cantidad que el asegurador debe abonar dentro de los cuarenta días desde la declaración del siniestro, según las circunstancias por él conocidas, con independencia de que la liquidación definitiva requiera más tiempo (art. 18 LCS; capítulo 20)."),
    termino("Infraseguro", "Situación en la que la suma asegurada es inferior al valor real del interés asegurado en el momento del siniestro, lo que determina la aplicación de la regla proporcional (art. 30 LCS; capítulo 19)."),
    termino("Interés asegurable", "Relación económica lícita del asegurado con el bien objeto de cobertura, presupuesto de validez del seguro de daños, cuya ausencia determina la nulidad del contrato (art. 25 LCS; capítulo 2)."),

    letra("M"),
    termino("Malquerencia de extraños", "Causa legal de cobertura en el seguro de incendio referida al incendio provocado deliberadamente por terceros ajenos al asegurado y a su círculo de convivencia (art. 48 LCS; capítulo 7)."),
    termino("MASC", "Medios adecuados de solución de controversias: cauces de resolución negociada de conflictos (negociación, mediación, conciliación) cuyo intento previo constituye, desde la Ley Orgánica 1/2025, requisito de procedibilidad para determinadas acciones civiles (capítulo 23)."),
    termino("Mediador de seguros", "Categoría genérica que engloba a agentes, corredores y operadores de banca-seguros, sujetos al régimen de distribución de seguros del RD-ley 3/2020 (capítulo 3)."),
    termino("Mora del asegurador", "Situación de retraso del asegurador en el pago de la indemnización más allá de los plazos legales, que genera el devengo de los intereses especiales del art. 20 LCS (capítulo 20)."),

    letra("P"),
    termino("Peritación contradictoria", "Procedimiento extrajudicial de determinación del daño mediante peritos designados por cada parte y, en su caso, un tercer perito, cuyo dictamen es vinculante en cuanto a la liquidación del daño salvo impugnación judicial en plazo (art. 38 LCS; capítulo 18)."),
    termino("Prescripción", "Extinción de la acción derivada del contrato de seguro por el transcurso del plazo legal sin haberse ejercitado ni interrumpido; dos años en el seguro de daños (art. 23 LCS; capítulo 22)."),
    termino("Prima", "Contraprestación económica que el tomador satisface al asegurador a cambio de la cobertura del riesgo."),
    termino("Principio indemnizatorio", "Principio conforme al cual el seguro de daños no puede ser fuente de enriquecimiento para el asegurado, que solo tiene derecho al resarcimiento del daño realmente sufrido (art. 26 LCS; capítulo 2)."),

    letra("R"),
    termino("Regla proporcional", "Fórmula de reducción de la indemnización aplicable en caso de infraseguro: indemnización = daño × (suma asegurada / valor real del interés) (art. 30 LCS; capítulo 19)."),
    termino("Reposición uniforme", "Criterio jurisprudencial conforme al cual, cuando no existen en el mercado materiales idénticos a los dañados, la indemnización puede extenderse a la sustitución de todo el conjunto homogéneo para evitar un desajuste estético (capítulo 12)."),

    letra("S"),
    termino("Seguro a primer riesgo", "Modalidad de cobertura, pactada por exclusión convencional de la regla proporcional, en la que el asegurador indemniza el daño real hasta el límite pactado con independencia de la relación entre la suma asegurada y el valor total del interés (art. 30 LCS; capítulo 19)."),
    termino("Servicio de Atención al Cliente (SAC)", "Órgano interno que toda aseguradora debe habilitar para la resolución de quejas y reclamaciones de sus clientes, primer escalón de la vía extrajudicial de reclamación (capítulo 23)."),
    termino("Sobreseguro", "Situación en la que la suma asegurada excede notablemente el valor real del interés, sin que ello genere, por sí mismo, derecho a una indemnización superior al daño realmente sufrido (art. 27 LCS; capítulo 19)."),
    termino("Sublímite", "Límite cuantitativo específico, inferior a la suma asegurada general, aplicable a una categoría concreta de bienes (joyas, dinero en efectivo, equipos electrónicos) (capítulo 15)."),
    termino("Suma asegurada", "Límite máximo de la indemnización a pagar por el asegurador en cada siniestro, pactado en la póliza (art. 27 LCS; capítulo 19)."),

    letra("T"),
    termino("Tercer perito", "Perito designado de común acuerdo por las partes, o en su defecto mediante expediente de jurisdicción voluntaria o notarial, cuando los peritos de parte no alcanzan acuerdo en la peritación contradictoria (art. 38 LCS; capítulo 18)."),
    termino("Tomador del seguro", "Quien suscribe el contrato con la aseguradora y asume las obligaciones que de él derivan, en particular el pago de la prima, coincida o no con el asegurado (art. 7 LCS; capítulo 2)."),
    termino("Transparencia (control de)", "Control de comprensibilidad real del clausulado, distinto del control de incorporación, que examina si el adherente pudo conocer la carga económica y jurídica real de una cláusula; reservado a los consumidores en su vertiente cualificada (capítulos 6 y 25)."),
  ];
}

module.exports = { anexoI };
