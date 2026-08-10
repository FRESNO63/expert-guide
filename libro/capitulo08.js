const B = require("./build");

function capitulo08() {
  return [
    B.chapterHeading(8, "Fenómenos atmosféricos y riesgos extraordinarios: el Consorcio de Compensación de Seguros"),

    B.sumario([
      "8.1. Riesgos ordinarios y riesgos extraordinarios: dos regímenes distintos",
      "8.2. Fenómenos atmosféricos ordinarios en el clausulado privado",
      "8.3. El Consorcio de Compensación de Seguros: naturaleza y ámbito",
      "8.4. Los acontecimientos extraordinarios legalmente tipificados",
      "8.5. Presupuestos y límites de la cobertura del Consorcio",
      "8.6. Riesgos expresamente excluidos de la cobertura del Consorcio",
      "8.7. Procedimiento de reclamación ante el Consorcio",
      "8.8. Ficha para el profesional",
      "8.9. Ficha para el asegurado",
      "8.10. Checklist: seguro privado o Consorcio",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo delimita la frontera, con frecuencia mal comprendida por el asegurado medio, entre los fenómenos atmosféricos cubiertos por el clausulado ordinario de la póliza de hogar y los acontecimientos extraordinarios cuya cobertura corresponde, por mandato legal, al Consorcio de Compensación de Seguros (RDL 7/2004), examinando los presupuestos, límites y procedimiento de esta cobertura pública complementaria, esencial en episodios de inundación, tempestad ciclónica atípica o terremoto.",
      "Consorcio de Compensación de Seguros, riesgos extraordinarios, inundación, tempestad ciclónica atípica, recargo obligatorio",
      "This chapter draws the often misunderstood line between ordinary weather perils covered by standard homeowners' policy wording and extraordinary events whose coverage is, by statutory mandate, assumed by the Spanish Insurance Compensation Consortium, examining the requirements, limits and claims procedure of this complementary public scheme, essential in episodes of flooding, atypical cyclonic storms or earthquakes.",
      "Insurance Compensation Consortium, extraordinary risks, flooding, atypical cyclonic storm, mandatory surcharge"
    ),
    B.spacer(200),

    B.h2("8.1. Riesgos ordinarios y riesgos extraordinarios: dos regímenes distintos"),
    B.p(["El sistema español de cobertura de catástrofes se articula sobre una summa divisio esencial que el profesional debe explicar con claridad a cualquier asegurado: los fenómenos atmosféricos ordinarios (viento, lluvia y pedrisco de intensidad habitual) se cubren, cuando la póliza lo prevea, por la propia aseguradora privada conforme a sus condiciones generales; los acontecimientos extraordinarios legalmente tipificados —inundación extraordinaria, terremoto, tempestad ciclónica atípica, entre otros— quedan excluidos, con carácter general, del seguro privado y son asumidos, en régimen de compensación, por el Consorcio de Compensación de Seguros (CCS), entidad pública empresarial adscrita al Ministerio de Economía", B.fn("El sistema dual español —aseguramiento privado de riesgos ordinarios y cobertura pública complementaria de riesgos catastróficos mediante recargo obligatorio— es una de las señas de identidad del ordenamiento asegurador español, sin equivalente exacto en otros ordenamientos de nuestro entorno; sobre su fundamento y funcionamiento, vid. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado al Consorcio de Compensación de Seguros."), "."]),

    B.h2("8.2. Fenómenos atmosféricos ordinarios en el clausulado privado"),
    B.p("Las condiciones generales de las pólizas de hogar suelen incorporar una garantía de «fenómenos atmosféricos» que cubre daños causados por viento, lluvia, pedrisco o nieve de intensidad ordinaria, normalmente sujeta a umbrales técnicos de intensidad (por ejemplo, viento con rachas superiores a un determinado número de kilómetros por hora, medido por estaciones meteorológicas de referencia) por debajo de los cuales el daño se reconduce a la garantía general de daños al continente y por encima de los cuales, si alcanza la calificación de «extraordinario» conforme al RDL 7/2004, la cobertura corresponde al Consorcio y no a la aseguradora privada."),

    B.h2("8.3. El Consorcio de Compensación de Seguros: naturaleza y ámbito"),
    B.p("El régimen legal del Consorcio se contiene en el Real Decreto Legislativo 7/2004, de 29 de octubre, por el que se aprueba el texto refundido del Estatuto Legal del Consorcio de Compensación de Seguros, desarrollado reglamentariamente por el Real Decreto 300/2004. Su función, en materia de riesgos extraordinarios sobre bienes, es indemnizar, en régimen de compensación (no de seguro en sentido estricto), las pérdidas derivadas de acontecimientos extraordinarios:"),
    B.legalBox("Art. 6.1 del Estatuto Legal del CCS (RDL 7/2004)", "El Consorcio, en materia de riesgos extraordinarios, tendrá por objeto indemnizar, en la forma establecida en este Estatuto Legal, en régimen de compensación, las pérdidas derivadas de acontecimientos extraordinarios acaecidos en España y que afecten a riesgos en ella situados. [...] A estos efectos, serán pérdidas los daños directos en las personas y en los bienes, así como [...] las pérdidas pecuniarias como consecuencia de aquéllos."),
    B.p("La cobertura del Consorcio no es, técnicamente, un seguro adicional que el asegurado contrate de forma independiente, sino un régimen de compensación financiado mediante un recargo obligatorio que se aplica automáticamente a determinadas pólizas de seguro de daños —entre ellas, las de hogar— y cuya gestión corresponde íntegramente al propio Consorcio, al margen de la aseguradora privada."),

    B.h2("8.4. Los acontecimientos extraordinarios legalmente tipificados"),
    B.p("El artículo 6.1 del Estatuto Legal enumera con carácter tasado los acontecimientos que reciben la calificación de «extraordinarios» a efectos de esta cobertura:"),
    B.legalBox("Art. 6.1.a)-c) del Estatuto Legal del CCS (RDL 7/2004)", "Se entenderán [...] por acontecimientos extraordinarios: a) Los siguientes fenómenos de la naturaleza: terremotos y maremotos, las inundaciones extraordinarias, las erupciones volcánicas, la tempestad ciclónica atípica y las caídas de cuerpos siderales y aerolitos. b) Los ocasionados violentamente como consecuencia de terrorismo, rebelión, sedición, motín y tumulto popular. c) Hechos o actuaciones de las Fuerzas Armadas o de las Fuerzas y Cuerpos de Seguridad en tiempo de paz."),
    B.p("La calificación técnica de un episodio concreto como «inundación extraordinaria» o «tempestad ciclónica atípica» —a diferencia de una lluvia o un viento intensos pero ordinarios— corresponde al propio Consorcio, con arreglo a criterios técnicos e hidrológicos o meteorológicos objetivos, lo que en la práctica exige al profesional verificar, ante cada episodio de fuertes lluvias o viento, si el Consorcio ha calificado el evento como extraordinario para la zona y fecha del siniestro, dato habitualmente publicado por el propio organismo."),

    B.h2("8.5. Presupuestos y límites de la cobertura del Consorcio"),
    B.p("La obligación del Consorcio de indemnizar un siniestro derivado de un acontecimiento extraordinario está sujeta a presupuestos precisos que conviene verificar sistemáticamente:"),
    B.legalBox("Art. 8.1 y 8.2 del Estatuto Legal del CCS (RDL 7/2004)", "El Consorcio estará obligado a satisfacer las indemnizaciones derivadas de siniestros producidos por acontecimientos extraordinarios a los asegurados que hayan satisfecho los correspondientes recargos en favor de aquel y se encuentren en alguna de las situaciones siguientes: a) Que el riesgo extraordinario cubierto por el Consorcio no esté amparado por póliza de seguro. b) Que, aun estando amparado por póliza de seguro, las obligaciones de la entidad aseguradora no pudieran ser cumplidas por haber sido declarada judicialmente en concurso [...]. La obligación del Consorcio amparará necesaria y exclusivamente a las mismas personas o bienes y por las mismas sumas aseguradas que se hayan establecido en las pólizas de seguro [...]. Esta obligación se limitará a las indemnizaciones que proceda abonar conforme a la ley española de contrato de seguro."),
    B.bullet([B.bold("Existencia de póliza de seguro de daños vigente: "), B.run("el Consorcio actúa, con carácter general, como complemento de una póliza privada de daños que incluya el recargo obligatorio; un inmueble sin ningún seguro de daños contratado no queda, con carácter general, amparado por el Consorcio para riesgos extraordinarios sobre bienes.")]),
    B.bullet([B.bold("Pago del recargo: "), B.run("el recargo se incorpora automáticamente al recibo de la póliza privada por mandato legal, sin que el tomador pueda, en la práctica, excluirlo respecto de los riesgos y bienes amparados por la póliza.")]),
    B.bullet([B.bold("Límite cuantitativo: "), B.run("la indemnización del Consorcio se limita a las mismas personas, bienes y sumas aseguradas que figuren en la póliza privada subyacente, sin que pueda exceder dichos límites.")]),

    B.h2("8.6. Riesgos expresamente excluidos de la cobertura del Consorcio"),
    B.p("El artículo 6.3 del Estatuto Legal excluye expresamente determinados supuestos, de particular relevancia práctica en el ramo de hogar:"),
    B.bullet([B.bold("Vicio o defecto propio de la cosa asegurada: "), B.run("un daño causado por defectos constructivos previos, aunque coincida temporalmente con un episodio de lluvias intensas, no queda amparado por esta vía.")]),
    B.bullet([B.bold("Mera acción del tiempo o agentes atmosféricos ordinarios: "), B.run("distintos de los fenómenos de la naturaleza expresamente tipificados como extraordinarios, lo que reconduce estos daños a la cobertura ordinaria de la póliza privada, si existe.")]),
    B.bullet([B.bold("Siniestros no indemnizables conforme a la LCS: "), B.run("el Consorcio no amplía el régimen causal de la LCS; si un daño no sería indemnizable por un asegurador privado conforme a la Ley (por ejemplo, por dolo del asegurado), tampoco lo es por el Consorcio.")]),

    B.h2("8.7. Procedimiento de reclamación ante el Consorcio"),
    B.p("Cuando un siniestro se atribuye a un acontecimiento extraordinario, el asegurado debe dirigir su reclamación directamente al Consorcio de Compensación de Seguros, no a su aseguradora privada, sin perjuicio de que esta última pueda —y en la práctica suela— colaborar en la tramitación inicial del expediente. El Consorcio dispone de su propio cuerpo de peritos y de un procedimiento de valoración específico, regulado reglamentariamente, cuyos plazos y trámites, aunque inspirados en el régimen general de la LCS, presentan especialidades administrativas propias que exceden el objeto de esta obra y que conviene verificar en cada caso en la normativa reglamentaria y en la información oficial del propio organismo."),

    B.h2("8.8. Ficha para el profesional"),
    B.fichaBox("Puntos de control ante un siniestro atmosférico de entidad", B.AZUL, [
      "Verificar si el Consorcio ha calificado oficialmente el episodio como «acontecimiento extraordinario» para la zona y fecha del siniestro, antes de dirigir la reclamación a la aseguradora privada o al propio Consorcio.",
      "Comprobar que la póliza de hogar del cliente está vigente y al corriente de pago (incluido el recargo del Consorcio) en la fecha del siniestro.",
      "Distinguir con prueba pericial entre el daño atribuible al fenómeno extraordinario y el atribuible a un vicio o defecto constructivo preexistente, expresamente excluido de la cobertura del Consorcio.",
      "Tener presente que la indemnización del Consorcio se limita a los mismos bienes y sumas aseguradas de la póliza privada subyacente: revisar la suficiencia de dichas sumas es tan relevante como en el seguro ordinario.",
    ]),

    B.h2("8.9. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre la cobertura de catástrofes", "8A5A00", [
      "Si su vivienda sufre daños por una inundación, un terremoto o un temporal de gran intensidad, es posible que la reclamación deba dirigirse al Consorcio de Compensación de Seguros y no (solo) a su aseguradora habitual.",
      "El recargo del Consorcio ya está incluido en el recibo de su seguro de hogar: no es una contratación adicional ni puede excluirla si su póliza cubre los bienes correspondientes.",
      "Guarde el recibo de su póliza y compruebe que está al corriente de pago: es requisito para la cobertura del Consorcio.",
      "La indemnización del Consorcio nunca superará la suma asegurada de su propia póliza: si su vivienda está infraasegurada, esa limitación también le afectará en un siniestro extraordinario.",
    ]),

    B.h2("8.10. Checklist: seguro privado o Consorcio"),
    B.bullet("1. ¿El fenómeno ha sido calificado oficialmente como acontecimiento extraordinario?"),
    B.bullet("2. ¿La póliza de hogar estaba vigente y al corriente de pago del recargo en la fecha del siniestro?"),
    B.bullet("3. ¿El daño obedece al fenómeno extraordinario o a un vicio/defecto constructivo preexistente?"),
    B.bullet("4. ¿Las sumas aseguradas de la póliza privada son suficientes, dado que limitan también la cobertura del Consorcio?"),
    B.bullet("5. ¿Se ha presentado la reclamación ante el organismo competente (Consorcio o aseguradora privada) según la calificación del riesgo?"),

    B.h2("Bibliografía citada"),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo08 };
