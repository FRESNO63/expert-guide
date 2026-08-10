const B = require("./build");

function capitulo18() {
  return [
    B.chapterHeading(18, "Prescripción de acciones"),

    B.sumario([
      "18.1. El plazo de dos años del art. 23 LCS",
      "18.2. La interrupción de la prescripción (art. 1973 CC)",
      "18.3. El dies a quo: la regla de la actio nata",
      "18.4. Incidencia de un proceso penal previo sobre el cómputo",
      "18.5. Prescripción de la acción de subrogación (art. 43 LCS)",
      "18.6. Ficha para el profesional",
      "18.7. Ficha para el asegurado",
      "18.8. Checklist: cómputo del plazo de prescripción",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo cierra la Parte III con el estudio de la prescripción de las acciones derivadas del contrato de seguro de hogar, fijada en dos años por el art. 23 LCS por tratarse de un seguro de daños, con atención especial a la regla de la actio nata como criterio de determinación del dies a quo y a la incidencia, frecuente en la práctica cuando el siniestro tiene origen delictivo, de un proceso penal previo sobre el cómputo del plazo civil, cuestión resuelta con precisión por una reciente sentencia de la Sala Primera recaída precisamente sobre un seguro multirriesgo de hogar.",
      "prescripción, art. 23 LCS, actio nata, interrupción, proceso penal previo",
      "This chapter closes Part III with an examination of the limitation period for actions arising from homeowners' insurance contracts, set at two years under Article 23 of the Insurance Contract Act as a property/damage insurance line, focusing on the actio nata rule for determining the starting point and on the frequent practical question — when the loss has a criminal origin — of how prior criminal proceedings affect the running of the civil limitation period, recently clarified by the Supreme Court in a case concerning precisely a homeowners' multi-risk policy.",
      "limitation period, actio nata, interruption, prior criminal proceedings"
    ),
    B.spacer(200),

    B.h2("18.1. El plazo de dos años del art. 23 LCS"),
    B.legalBox("Art. 23 LCS", "Las acciones que se deriven del contrato de seguro prescribirán en el término de dos años si se trata de seguro de daños y de cinco si el seguro es de personas."),
    B.p(["El seguro de hogar, en su vertiente de daños propios (continente y contenido) y en su vertiente de responsabilidad civil, queda sometido al plazo breve de dos años, sensiblemente inferior al plazo general de cinco años de las acciones personales sin plazo especial del art. 1964 CC", B.fn("La brevedad relativa del plazo de prescripción del seguro de daños frente al plazo general de las acciones personales responde a la necesidad de certidumbre y liquidación ágil propia de la actividad aseguradora, que no puede mantener sus provisiones técnicas indefinidamente abiertas frente a reclamaciones potenciales; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado a la extinción del contrato de seguro."), ". Este plazo se aplica tanto a la acción del asegurado frente a su propia aseguradora (reclamación de la indemnización) como, en principio, a la acción directa del tercero perjudicado frente a la aseguradora de responsabilidad civil, sin perjuicio de las especialidades de cómputo que se exponen en los epígrafes siguientes."]),

    B.h2("18.2. La interrupción de la prescripción"),
    B.p("La LCS no contiene un régimen propio de interrupción de la prescripción, por lo que resulta de aplicación el régimen general del Código Civil, ya estudiado en el capítulo del Anexo IV a propósito del burofax de reclamación previa:"),
    B.legalBox("Art. 1973 CC", "La prescripción de las acciones se interrumpe por su ejercicio ante los Tribunales, por reclamación extrajudicial del acreedor y por cualquier acto de reconocimiento de la deuda por el deudor."),
    B.p("La reclamación extrajudicial —el burofax de reclamación previa a la aseguradora, estudiado en el epígrafe correspondiente de los anexos de esta obra— interrumpe eficazmente el plazo de dos años del art. 23 LCS, comenzando este a computarse de nuevo íntegramente desde la fecha de dicha reclamación, práctica que todo profesional debe activar sistemáticamente ante cualquier expediente que se aproxime al plazo de prescripción sin resolución definitiva."),

    B.h2("18.3. El dies a quo: la regla de la actio nata"),
    B.p("El cómputo del plazo de prescripción se rige por la regla general del art. 1969 CC, que la jurisprudencia interpreta conforme al principio actio nondum nata non praescribitur (la acción que todavía no ha nacido no puede prescribir): el plazo no comienza a correr desde la mera producción del siniestro, sino desde que el titular de la acción dispone de los elementos fácticos y jurídicos necesarios para ejercitarla con posibilidades razonables de éxito, lo que en la práctica del seguro de hogar suele identificarse con el momento en que se conoce, con suficiente certeza, tanto la existencia del daño como su alcance definitivo y la identidad del obligado a indemnizar."),

    B.h2("18.4. Incidencia de un proceso penal previo sobre el cómputo"),
    B.p(["Una cuestión de gran relevancia práctica en el ramo de hogar —dada la frecuencia con que un incendio, un robo o unos daños dolosos tienen origen en hechos con relevancia penal— es la de si la tramitación de un proceso penal previo suspende o retrasa el cómputo del plazo de prescripción de la acción derivada del propio contrato de seguro. La Sala Primera ha resuelto esta cuestión con notable precisión en un supuesto de seguro multirriesgo de hogar"]),
    B.jurisBox("STS, Sala de lo Civil, de 15 de febrero de 2022 (ROJ: STS 517/2022; ECLI:ES:TS:2022:517; MP: Seoane Spiegelberg)", "«El hecho del proceso penal es el acto ilícito tanto penal [...] como civil, dado que produce un daño del que nace la obligación de indemnizar y el correlativo derecho del perjudicado a ser resarcido (art. 1089 CC). La acción civil de ese proceso es una acción reparatoria que no deriva de una relación contractual. Y su plazo de prescripción no es el del art. 23 LCS. [...] El hecho del proceso civil es el contrato de seguro del que deriva la obligación de la aseguradora de indemnizar, así como el correlativo derecho de la asegurada a ser indemnizada por los daños producidos por incendio en el objeto asegurado (arts. 1 y 45 LCS). La acción ejercitada es una acción de cumplimiento contractual. Y su plazo de prescripción es el del art. 23 LCS.»"),
    B.p("La sentencia distingue así, con toda nitidez, dos acciones de naturaleza y régimen distintos que pueden coexistir tras un mismo hecho delictivo: la acción de responsabilidad civil extracontractual contra el autor del delito —cuyo plazo de prescripción sí puede quedar afectado por la pendencia del proceso penal, conforme a la doctrina general sobre preferencia de la jurisdicción penal (arts. 111 y 114 LECrim)— y la acción de cumplimiento contractual del asegurado frente a su propia aseguradora, derivada del contrato de seguro y sometida al plazo autónomo del art. 23 LCS, cuyo cómputo no queda suspendido por la mera existencia de un proceso penal seguido contra un tercero por los mismos hechos, salvo que la propia acción ejercitada en el proceso civil coincida sustancialmente con la que pudo o debió ventilarse en el penal."),
    B.p("La consecuencia práctica es de gran relevancia: el asegurado que sufre un incendio o un robo con origen delictivo no puede esperar tranquilamente a la resolución del proceso penal contra el autor de los hechos para reclamar a su propia aseguradora, pues el plazo de dos años del art. 23 LCS corre de forma autónoma desde que dispuso de los elementos fácticos y jurídicos para reclamar contractualmente a su aseguradora, con independencia del estado del proceso penal paralelo."),

    B.h2("18.5. Prescripción de la acción de subrogación"),
    B.p("Distinta de la prescripción de la acción del asegurado frente a su aseguradora es la prescripción de la acción de subrogación que, conforme al art. 43 LCS ya mencionado en el capítulo 6, corresponde a la propia aseguradora frente al tercero responsable del daño una vez satisfecha la indemnización a su asegurado. Esta acción, de naturaleza derivada pero autónoma en su cómputo, sigue reglas de dies a quo propias vinculadas al momento del pago efectivo de la indemnización por la aseguradora, cuestión de creciente relevancia práctica en los supuestos de siniestros de agua con origen en elementos comunes o en viviendas vecinas estudiados en el capítulo 6."),

    B.h2("18.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control sobre la prescripción de la acción del seguro de hogar", B.AZUL, [
      "No esperar a la resolución de un eventual proceso penal paralelo para reclamar a la aseguradora: el plazo del art. 23 LCS corre de forma autónoma (STS 517/2022, ROJ: STS 517/2022).",
      "Activar sistemáticamente la interrupción mediante reclamación extrajudicial fehaciente (burofax) antes de que se aproxime el cumplimiento del plazo de dos años.",
      "Determinar con precisión el dies a quo conforme a la regla de la actio nata: no siempre coincide con la fecha material del siniestro.",
      "Distinguir la prescripción de la acción del asegurado frente a su aseguradora de la prescripción de la acción de subrogación de la aseguradora frente a terceros responsables.",
    ]),

    B.h2("18.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre el plazo para reclamar a su aseguradora", "8A5A00", [
      "Tiene dos años desde que puede conocer razonablemente el alcance del daño y la negativa o insuficiencia de la respuesta de su aseguradora para reclamar judicialmente.",
      "Si hay una denuncia o proceso penal por los mismos hechos, no espere a que termine para reclamar a su aseguradora: son plazos independientes.",
      "Si el plazo se aproxima y su reclamación sigue sin resolverse, envíe un burofax de reclamación a la aseguradora: interrumpe el plazo y le da dos años más desde esa fecha.",
    ]),

    B.h2("18.8. Checklist: cómputo del plazo de prescripción"),
    B.bullet("1. ¿Cuándo se produjo el siniestro y cuándo se conoció con certeza su alcance definitivo?"),
    B.bullet("2. ¿Existe algún acto interruptivo (reclamación extrajudicial, judicial, reconocimiento de deuda)?"),
    B.bullet("3. ¿Existe un proceso penal paralelo? En su caso, ¿coincide su objeto con la acción contractual frente a la aseguradora?"),
    B.bullet("4. ¿Cuánto tiempo resta hasta el cumplimiento del plazo de dos años?"),
    B.bullet("5. ¿Es necesario, además, valorar la prescripción de una eventual acción de subrogación de la aseguradora frente a un tercero?"),

    B.h2("Bibliografía citada"),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo18 };
