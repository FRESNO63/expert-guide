const B = require("./build");

function capitulo09() {
  return [
    B.chapterHeading(9, "Responsabilidad civil de la vida privada y del cabeza de familia"),

    B.sumario([
      "9.1. El seguro de responsabilidad civil en la póliza de hogar",
      "9.2. La dirección jurídica del siniestro por el asegurador (art. 74 LCS)",
      "9.3. La acción directa del perjudicado (art. 76 LCS)",
      "9.4. La responsabilidad civil por hecho ajeno: hijos, dependientes y mascotas (art. 1903 CC)",
      "9.5. Inoponibilidad del dolo del asegurado al tercero perjudicado",
      "9.6. Ficha para el profesional",
      "9.7. Ficha para el asegurado",
      "9.8. Checklist: gestión de una reclamación de responsabilidad civil del hogar",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo analiza la garantía de responsabilidad civil de la vida privada o del cabeza de familia, presente en la práctica totalidad de las pólizas de hogar, que traslada al asegurado el régimen especial de los arts. 73 a 76 LCS: dirección jurídica del siniestro por el asegurador, acción directa del perjudicado e inoponibilidad a este de las excepciones personales del asegurador frente al asegurado, incluida la propia mala fe de este último, conforme a la reciente doctrina de la Sala Primera aplicada precisamente a un seguro multirriesgo del hogar.",
      "responsabilidad civil, cabeza de familia, art. 73 LCS, art. 76 LCS, acción directa, inoponibilidad, dolo",
      "This chapter examines the private/family liability cover present in virtually every homeowners' policy, which imports the special regime of Articles 73 to 76 of the Insurance Contract Act: the insurer's conduct of the claim's legal defence, the injured third party's direct action, and the inopposability to that party of the insurer's personal defences against the insured — including the insured's own bad faith — under recent Supreme Court case law applied precisely to a homeowners' multi-risk policy.",
      "liability insurance, family liability cover, direct action, inopposability of defences, wilful misconduct"
    ),
    B.spacer(200),

    B.h2("9.1. El seguro de responsabilidad civil en la póliza de hogar"),
    B.p(["Prácticamente ninguna póliza de hogar española prescinde de una garantía de responsabilidad civil de la vida privada o del cabeza de familia, que cubre la responsabilidad extracontractual en que puedan incurrir el asegurado y las personas con él convivientes en su vida privada, distinta y adicional a la cobertura de daños propios estudiada en los capítulos anteriores. Esta garantía traslada al contrato el régimen especial que la LCS reserva al seguro de responsabilidad civil en sus arts. 73 a 76", B.fn("La inserción de una garantía de responsabilidad civil dentro de una póliza multirriesgo no altera su naturaleza jurídica: sigue rigiéndose por el régimen especial de los arts. 73 y siguientes LCS, y no por el régimen general del seguro de daños propios; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 73."), ":"]),
    B.legalBox("Art. 73 LCS", "Por el seguro de responsabilidad civil el asegurador se obliga, dentro de los límites establecidos en la Ley y en el contrato, a cubrir el riesgo del nacimiento a cargo del asegurado de la obligación de indemnizar a un tercero los daños y perjuicios causados por un hecho previsto en el contrato de cuyas consecuencias sea civilmente responsable el asegurado, conforme a derecho."),
    B.p("La cláusula de definición de «asegurados» a efectos de esta garantía es, en la práctica del hogar, de importancia capital: suele extenderse, más allá del tomador, al cónyuge o pareja, a los hijos y demás familiares convivientes, e incluso, en ocasiones, al personal doméstico al servicio del hogar, configurando lo que la práctica del sector denomina «responsabilidad civil del cabeza de familia», precisamente porque cubre la responsabilidad de todo el núcleo de convivencia y no solo la del tomador individual."),

    B.h2("9.2. La dirección jurídica del siniestro por el asegurador"),
    B.p("Producida una reclamación de responsabilidad civil, el artículo 74 LCS atribuye al asegurador, salvo pacto en contrario, la dirección jurídica de la defensa frente al perjudicado:"),
    B.legalBox("Art. 74 LCS", "Salvo pacto en contrario, el asegurador asumirá la dirección jurídica frente a la reclamación del perjudicado, y serán de su cuenta los gastos de defensa que se ocasionen. El asegurado deberá prestar la colaboración necesaria en orden a la dirección jurídica asumida por el asegurador. No obstante lo dispuesto en el párrafo anterior, cuando quien reclame esté también asegurado con el mismo asegurador o exista algún otro posible conflicto de intereses, éste comunicará inmediatamente al asegurado la existencia de esas circunstancias [...]. El asegurado podrá optar entre el mantenimiento de la dirección jurídica por el asegurador o confiar su propia defensa a otra persona. En este último caso, el asegurador quedará obligado a abonar los gastos de tal dirección jurídica hasta el límite pactado en la póliza."),
    B.p("La regla de conflicto de intereses del párrafo segundo tiene particular relevancia en el ámbito doméstico: si el perjudicado por el siniestro (por ejemplo, un vecino dañado por una filtración de agua imputable al asegurado) está asegurado con la misma compañía, el asegurador debe comunicarlo de inmediato al asegurado, que puede entonces optar por una defensa independiente, con cargo a la aseguradora hasta el límite pactado en póliza."),

    B.h2("9.3. La acción directa del perjudicado"),
    B.p(["El precepto más relevante en la práctica litigiosa de esta cobertura es, sin duda, el artículo 76 LCS, que reconoce al tercero perjudicado —no asegurado, ni tomador, ni beneficiario en sentido técnico— una acción directa contra el asegurador, dotada de un régimen de oponibilidad de excepciones singularmente restrictivo", B.fn("La acción directa del art. 76 LCS es una de las manifestaciones más características del carácter tuitivo del seguro de responsabilidad civil hacia el tercero perjudicado, ajeno por completo a la relación contractual entre tomador y asegurador; sobre su naturaleza jurídica (¿acción propia iure proprio o subrogación legal?), cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado al seguro de responsabilidad civil."), ":"]),
    B.legalBox("Art. 76 LCS", "El perjudicado o sus herederos tendrán acción directa contra el asegurador para exigirle el cumplimiento de la obligación de indemnizar, sin perjuicio del derecho del asegurador a repetir contra el asegurado, en el caso de que sea debido a conducta dolosa de éste, el daño o perjuicio causado a tercero. La acción directa es inmune a las excepciones que puedan corresponder al asegurador contra el asegurado. El asegurador puede, no obstante, oponer la culpa exclusiva del perjudicado y las excepciones personales que tenga contra éste."),
    B.p("La «inmunidad» de la acción directa frente a las excepciones que el asegurador tendría frente a su propio asegurado —por ejemplo, el impago de la prima, una reserva o inexactitud en la declaración del riesgo, o la propia mala fe del asegurado en la causación del daño— constituye el rasgo más distintivo de esta acción y la principal fuente de litigiosidad sobre su alcance, según se desarrolla en el epígrafe siguiente."),

    B.h2("9.4. La responsabilidad civil por hecho ajeno: hijos, dependientes y mascotas"),
    B.p("La garantía de responsabilidad civil del hogar opera con frecuencia en conexión con los supuestos de responsabilidad por hecho ajeno del artículo 1903 CC, particularmente relevante en el contexto familiar:"),
    B.legalBox("Art. 1903 CC (extracto)", "La obligación que impone el artículo anterior es exigible no sólo por los actos u omisiones propios, sino por los de aquellas personas de quienes se debe responder. Los padres son responsables de los daños causados por los hijos que se encuentren bajo su guarda. [...] La responsabilidad de que trata este artículo cesará cuando las personas en él mencionadas prueben que emplearon toda la diligencia de un buen padre de familia para prevenir el daño."),
    B.p("Cuando un hijo menor conviviente causa un daño a un tercero (por ejemplo, un incendio accidental, la rotura de un objeto ajeno o una lesión durante un juego), la responsabilidad civil de los padres ex art. 1903 CC queda, en la práctica, cubierta por la póliza de responsabilidad civil del hogar en la medida en que la cláusula de «asegurados» de la póliza —y no solo la ley civil— extienda la cobertura a los hijos convivientes, extremo que debe verificarse en las condiciones particulares de cada contrato concreto."),

    B.h2("9.5. Inoponibilidad del dolo del asegurado al tercero perjudicado"),
    B.p(["El supuesto más delicado —y de mayor relevancia doctrinal— es el de la eventual mala fe o dolo del propio asegurado en la causación del daño, que conforme al art. 19 LCS exoneraría al asegurador frente a su asegurado (capítulo 17), pero cuya oponibilidad al tercero perjudicado plantea un problema distinto. La STS, Sala de lo Civil, de 20 de abril de 2023 (ROJ: STS 1544/2023; ECLI:ES:TS:2023:1544; MP: Vela Torres), resuelve precisamente un supuesto de seguro multirriesgo de hogar en el que el hijo del tomador, asegurado por la cláusula de cabeza de familia, provocó un incendio al sustraer gasolina, siendo condenado penalmente por un delito imprudente"]),
    B.jurisBox("STS, Sala de lo Civil, de 20 de abril de 2023 (ROJ: STS 1544/2023; ECLI:ES:TS:2023:1544; MP: Vela Torres)", "«No puede afirmarse que el incendio dependiera de la voluntad del demandado, por más imprudente o temeraria que fuera su conducta [...]; lo que dependió de su voluntad —intención o dolo— fue la sustracción de la gasolina, pero no la producción del incendio posterior. Pero es que, en cualquier caso, al tratarse de un seguro de responsabilidad civil, en el que la acción del perjudicado contra el asegurador es inmune a las excepciones que puedan corresponder al asegurador contra el asegurado (art. 76 LCS), la inasegurabilidad por dolo no sería oponible al tercero perjudicado.»"),
    B.p("La sentencia fija así una doble ratio de gran utilidad práctica. En primer lugar, distingue con precisión el dolo referido al acto inicial (la sustracción de gasolina, voluntaria) del dolo referido al resultado dañoso (el incendio, no querido ni siquiera aceptado como consecuencia probable), rechazando extender automáticamente la calificación dolosa del primero al segundo. En segundo lugar —y esta es la regla de mayor alcance—, incluso si existiera dolo del asegurado que exonerase al asegurador en su relación interna con este (art. 19 LCS), tal circunstancia sería una excepción personal inoponible frente al tercero perjudicado en virtud del art. 76 LCS, que únicamente permite al asegurador oponer a este la culpa exclusiva del propio perjudicado y las excepciones personales que tenga frente a él, no frente al asegurado."),

    B.h2("9.6. Ficha para el profesional"),
    B.fichaBox("Puntos de control en una reclamación de responsabilidad civil del hogar", B.AZUL, [
      "Verificar el ámbito subjetivo de la cláusula de «asegurados» a efectos de responsabilidad civil del cabeza de familia: ¿incluye a hijos, pareja, personal doméstico?",
      "Ante un conflicto de intereses (perjudicado también asegurado con la misma compañía), comprobar que el asegurador comunicó la circunstancia y ofreció la opción de dirección jurídica independiente (art. 74 LCS).",
      "Si se representa al tercero perjudicado, recordar que la acción directa del art. 76 LCS es inmune a las excepciones personales del asegurador contra el asegurado, incluida —conforme a la STS 1544/2023 (ROJ: STS 1544/2023)— la propia mala fe de este último.",
      "Distinguir, en los siniestros con origen en una conducta inicialmente voluntaria del asegurado, el dolo referido al acto del dolo referido al resultado dañoso finalmente producido.",
    ]),

    B.h2("9.7. Ficha para el asegurado"),
    B.fichaBox("Qué debe saber sobre la responsabilidad civil de su seguro de hogar", "8A5A00", [
      "Compruebe quién está cubierto como «asegurado» a efectos de responsabilidad civil: no siempre incluye automáticamente a todos los convivientes.",
      "Si alguien de su entorno familiar causa un daño a un tercero (un vecino, un invitado), comuníquelo a su aseguradora incluso si tiene dudas sobre su responsabilidad: la aseguradora asumirá, salvo pacto en contrario, la dirección jurídica de su defensa.",
      "Si el perjudicado también es cliente de su misma aseguradora, tiene derecho a que se lo comuniquen y a elegir defensa independiente si lo prefiere.",
    ]),

    B.h2("9.8. Checklist: gestión de una reclamación de responsabilidad civil del hogar"),
    B.bullet("1. ¿Quién causó el daño y qué relación tiene con el asegurado (hijo, pareja, personal doméstico, el propio asegurado)?"),
    B.bullet("2. ¿La cláusula de «asegurados» de la póliza cubre a esa persona?"),
    B.bullet("3. ¿Existe conflicto de intereses (perjudicado asegurado con la misma compañía)?"),
    B.bullet("4. ¿Existe resolución penal previa sobre los hechos? ¿Califica la conducta como dolosa o imprudente, y respecto de qué elemento (acto o resultado)?"),
    B.bullet("5. ¿Se ha ejercitado o se va a ejercitar la acción directa del art. 76 LCS frente al asegurador?"),
    B.bullet("6. ¿Qué límite de indemnización y de gastos de defensa jurídica establece la póliza para esta garantía?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo09 };
