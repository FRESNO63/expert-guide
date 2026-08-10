const B = require("./build");

function capitulo07() {
  return [
    B.chapterHeading(7, "Incendio, explosión y fenómenos eléctricos"),

    B.sumario([
      "5.1. El concepto legal de incendio (art. 45 LCS)",
      "5.2. Extensión de la cobertura y daños indemnizables (art. 49 LCS)",
      "5.3. Objetos de valor y bienes excluidos de la cobertura estándar (art. 46 LCS)",
      "5.4. Causas de exoneración: caso fortuito, malquerencia de extraños y dolo o culpa grave (art. 48 LCS)",
      "5.5. El desplazamiento del objeto asegurado (art. 47 LCS)",
      "5.6. Los fenómenos eléctricos como riesgo asimilado",
      "5.7. Ficha para el profesional",
      "5.8. Ficha para el asegurado",
      "5.9. Checklist: acreditación de un siniestro de incendio",
    ]),
    B.spacer(160),
    B.abstractBlock(
      "El capítulo analiza el régimen especial del seguro contra incendios (arts. 45 a 49 LCS), aplicable con carácter supletorio a la garantía de incendio del seguro multirriesgo de hogar, con particular atención al concepto legal de incendio, a las causas legales de exoneración del art. 48 LCS —caso fortuito, malquerencia de extraños, negligencia propia y dolo o culpa grave— y a la reciente doctrina de la Sala Primera sobre el alcance de la expresión «malquerencia de extraños».",
      "seguro de incendio, art. 45 LCS, art. 48 LCS, malquerencia de extraños, dolo, culpa grave, fenómenos eléctricos",
      "This chapter examines the special fire insurance regime under Articles 45 to 49 of the Spanish Insurance Contract Act, applicable on a suppletory basis to the fire cover of homeowners' multi-risk policies, focusing on the statutory definition of fire and on the exoneration grounds of Article 48 —fortuitous event, malice of strangers, the insured's own negligence, and wilful misconduct or gross negligence— together with recent Supreme Court case law on the scope of the 'malice of strangers' clause.",
      "fire insurance, exoneration grounds, malice of strangers, wilful misconduct, gross negligence, electrical damage"
    ),
    B.spacer(200),

    B.h2("5.1. El concepto legal de incendio"),
    B.p(["El seguro multirriesgo de hogar incorpora, como garantía troncal, la cobertura de incendio, cuyo régimen específico se contiene en los arts. 45 a 49 LCS, dentro del Título II de la Ley, dedicado al seguro contra daños. Estas disposiciones se aplican, con el carácter imperativo relativo propio de toda la LCS (art. 2), incluso cuando la garantía de incendio se integra, como es habitual, en una póliza combinada de hogar", B.fn("La aplicación supletoria de las disposiciones específicas del seguro de incendio (arts. 45-49 LCS) al seguro multirriesgo, en la parte relativa a esta garantía, es doctrina y práctica pacífica; cfr. SÁNCHEZ CALERO, F. (dir.), op. cit., ad art. 45, sobre la naturaleza de estas normas como «núcleo mínimo» irrenunciable del seguro de incendio cualquiera que sea el producto en que se integre."), ":"]),
    B.legalBox("Art. 45 LCS", "Por el seguro contra incendios el asegurador se obliga dentro de los límites establecidos en la Ley y en el contrato a indemnizar los daños producidos por incendio en el objeto asegurado. Se considera incendio la combustión y el abrasamiento con llama, capaz de propagarse, de un objeto u objetos que no estaban destinados a ser quemados en el lugar y momento en que se produce."),
    B.p("La definición legal exige tres elementos acumulativos que conviene tener presentes al calificar un siniestro: (i) combustión con llama —lo que excluye, en rigor, los daños por mero calentamiento, chamuscado o carbonización sin llama propiamente dicha—; (ii) capacidad de propagación; y (iii) que el objeto quemado no estuviera destinado a serlo en ese lugar y momento, elemento que separa el incendio asegurado de la combustión controlada (chimenea, barbacoa, velas) que forma parte del uso normal de la vivienda."),

    B.h2("5.2. Extensión de la cobertura y daños indemnizables"),
    B.p("El artículo 49 LCS extiende la cobertura más allá del daño directo del fuego, incorporando una relación de daños conexos que resulta de gran utilidad práctica al cuantificar un siniestro:"),
    B.legalBox("Art. 49 LCS", "El asegurador indemnizará todos los daños y pérdidas materiales causados por la acción directa del fuego, así como los producidos por las consecuencias inevitables del incendio y en particular: 1.º Los daños que ocasionen las medidas necesarias adoptadas por la autoridad o el asegurado para impedir, cortar o extinguir el incendio [...]. 2.º Los gastos que ocasione al asegurado el transporte de los efectos asegurados o cualesquiera otras medidas adoptadas con el fin de salvarlos del incendio. 3.º Los menoscabos que sufran los objetos salvados por las circunstancias descritas en los dos números anteriores. 4.º El valor de los objetos desaparecidos, siempre que el asegurado acredite su preexistencia y salvo que el asegurador pruebe que fueron robados o hurtados. 5.º Cualesquiera otros que se consignen en la póliza."),
    B.p("De especial interés práctico es la regla 4.ª: ante la desaparición de objetos con ocasión de un incendio (frecuente en la confusión de las labores de extinción y salvamento), la carga de la prueba se invierte parcialmente a favor del asegurado, a quien basta con acreditar la preexistencia del objeto, correspondiendo a la aseguradora probar, si quiere excluir la indemnización, que en realidad fue sustraído."),

    B.h2("5.3. Objetos de valor y bienes excluidos de la cobertura estándar"),
    B.p("El artículo 46 LCS excluye, salvo pacto expreso en contrario, determinados bienes de especial valor de la cobertura estándar de incendio, exclusión que la práctica aseguradora traslada sistemáticamente a las condiciones generales de las pólizas de hogar mediante los sublímites para joyas, dinero en efectivo y objetos de arte estudiados en el capítulo 15:"),
    B.legalBox("Art. 46 LCS (párrafo segundo)", "Salvo pacto expreso en contrario, no quedarán comprendidos en la cobertura del seguro los daños que cause el incendio en los valores mobiliarios públicos o privados, efectos de comercio, billetes de Banco, piedras y metales preciosos, objetos artísticos o cualesquiera otros objetos de valor que se hallaren en el objeto asegurado, aun cuando se pruebe su preexistencia y su destrucción o deterioro por el siniestro."),
    B.p("La norma legal es, en rigor, más restrictiva que la práctica aseguradora habitual, que suele ofrecer cobertura de estos bienes hasta ciertos sublímites mediante «pacto expreso» incorporado en las condiciones particulares; de ahí la importancia, ya destacada en el capítulo 5, de verificar que dichos sublímites figuren efectivamente pactados y no se limiten a una remisión genérica."),

    B.h2("5.4. Causas de exoneración: caso fortuito, malquerencia de extraños y dolo o culpa grave"),
    B.p("El artículo 48 LCS articula el régimen causal del seguro de incendio en dos párrafos de sentido inverso, cuya correcta lectura conjunta es imprescindible:"),
    B.legalBox("Art. 48 LCS", "El asegurador estará obligado a indemnizar los daños producidos por el incendio cuando éste se origine por caso fortuito, por malquerencia de extraños, por negligencia propia o de las personas de quienes se responda civilmente. El asegurador no estará obligado a indemnizar los daños provocados por el incendio cuando éste se origine por dolo o culpa grave del asegurado."),
    B.p(["El precepto consagra una regla de cobertura amplísima: el incendio causado por negligencia —incluso propia del asegurado, siempre que no alcance el umbral de la culpa grave— está cubierto, lo que distingue nítidamente el seguro de incendio de otras coberturas en las que la negligencia leve del asegurado puede jugar un papel exonerador distinto. Solo el dolo o la culpa grave liberan al asegurador, y la carga de su prueba corresponde, conforme a las reglas generales, a quien los alega", B.fn("La amplitud de la cobertura del art. 48 LCS a favor del asegurado, cubriendo incluso su propia negligencia leve, es una de las notas que distinguen históricamente al seguro de incendio de otras modalidades de seguro de daños, heredada de la tradición aseguradora continental; cfr. VEIGA COPO, A. B., Tratado del Contrato de Seguro, op. cit., tomo dedicado a los seguros de daños patrimoniales, capítulo sobre el seguro de incendio."), ", es decir, a la aseguradora."]),
    B.p("La expresión «malquerencia de extraños» —heredera de una terminología decimonónica pero plenamente vigente— ha sido recientemente objeto de interpretación por la Sala Primera en un supuesto que, aunque referido a un local de negocio, fija un criterio de aplicación directa al ámbito doméstico cuando el incendio es provocado intencionadamente por alguien vinculado al entorno del asegurado:"),
    B.jurisBox("STS, Sala de lo Civil, de 15 de julio de 2026 (ROJ: STS 3443/2026; ECLI:ES:TS:2026:3443; MP: Almenar Belenguer)", "«El art. 48 LCS dispone en su párrafo primero que ‘el asegurador estará obligado a indemnizar los daños producidos por el incendio cuando éste se origine por caso fortuito, por malquerencia de extraños, por negligencia propia o de las personas de quienes se responda civilmente’ [...]. La obligación del asegurador de indemnizar los daños producidos por el incendio en el caso de que éste se origine ‘por malquerencia de extraños’ se refiere al incendio provocado por la acción u omisión deliberada de terceras personas ajenas al asegurado y a su entorno directo, lo que implica que carezcan de una vinculación [societaria, familiar o de convivencia] con aquel.»"),
    B.p("La ratio decidendi es plenamente trasladable al hogar: si el incendio es provocado intencionadamente por un familiar conviviente, una pareja, un empleado del hogar o, en general, una persona vinculada al círculo íntimo o de convivencia del asegurado, no podrá invocarse la cobertura por «malquerencia de extraños», y la aseguradora deberá, en su caso, analizar el supuesto bajo la óptica del dolo o culpa grave del propio asegurado (si le es imputable la actuación de la persona con quien convive) o, alternativamente, bajo la cobertura de daños causados por terceros no extraños, que en la práctica de las pólizas de hogar suele quedar sujeta a condiciones particulares específicas."),

    B.h2("5.5. El desplazamiento del objeto asegurado"),
    B.p("El artículo 47 LCS introduce una regla de frecuente aplicación práctica cuando el siniestro afecta a contenido que, en el momento del incendio, no se encontraba en la vivienda asegurada (por ejemplo, mobiliario trasladado temporalmente a un guardamuebles con ocasión de una reforma):"),
    B.legalBox("Art. 47 LCS", "La destrucción o deterioro de los objetos asegurados fuera del lugar descrito en la póliza excluirá la indemnización del asegurador, a menos que su traslado o cambio le hubiere sido previamente comunicado por escrito y éste no hubiese manifestado en el plazo de quince días su disconformidad."),
    B.p("La norma configura, en la práctica, un mecanismo de silencio positivo a favor del asegurado: comunicado el traslado por escrito, la falta de respuesta de la aseguradora en quince días equivale a la aceptación de la extensión de cobertura al nuevo emplazamiento."),

    B.h2("5.6. Los fenómenos eléctricos como riesgo asimilado"),
    B.p("Las condiciones generales de las pólizas de hogar incorporan, junto a la garantía de incendio propiamente dicha, una garantía asimilada de daños eléctricos (cortocircuitos, sobretensiones, descargas atmosféricas indirectas) que, en sentido estricto, no siempre reúne los elementos del concepto legal de incendio del art. 45 LCS —en particular, la combustión con llama—, por lo que su alcance depende enteramente de la extensión pactada en condiciones particulares. Se trata, por ello, de una garantía predominantemente contractual, sometida al régimen general del art. 3 LCS y a la distinción entre cláusulas delimitadoras y limitativas estudiada en el capítulo 1, más que al régimen legal específico e imperativo de los arts. 45 a 49 LCS."),

    B.h2("5.7. Ficha para el profesional"),
    B.fichaBox("Puntos de control en un siniestro de incendio", B.AZUL, [
      "Verificar si concurren los tres elementos del concepto legal de incendio (art. 45 LCS): combustión, llama con capacidad de propagación, y objeto no destinado a ser quemado en ese lugar y momento.",
      "Ante la invocación de dolo o culpa grave por la aseguradora, exigir la prueba cumplida de dicha causa de exoneración, recordando que la negligencia leve —incluso del propio asegurado— está cubierta ex art. 48 LCS.",
      "Ante la invocación de «malquerencia de extraños» como base de la reclamación, o de su exclusión por la aseguradora, aplicar el criterio de la STS de 15 de julio de 2026 (ROJ: STS 3443/2026): solo excluye la vinculación directa con el entorno del asegurado.",
      "Verificar la cobertura efectiva de objetos de valor (art. 46 LCS) mediante pacto expreso en condiciones particulares, no presunta.",
      "En caso de desplazamiento temporal de contenido fuera de la vivienda, comprobar si se comunicó por escrito y si la aseguradora guardó silencio durante quince días (art. 47 LCS).",
    ]),

    B.h2("5.8. Ficha para el asegurado"),
    B.fichaBox("Qué debe hacer tras un incendio en su vivienda", "8A5A00", [
      "Comunique el siniestro a la aseguradora dentro del plazo de la póliza (nunca superior a siete días desde que tuvo conocimiento, salvo plazo más amplio pactado).",
      "Conserve, en la medida de lo posible, los restos y objetos dañados hasta la inspección pericial; no los deseche antes de que un perito los examine.",
      "Si va a trasladar temporalmente sus enseres (por ejemplo, con ocasión de una reforma tras el incendio), comuníquelo por escrito a la aseguradora.",
      "Guarde facturas o cualquier prueba de la preexistencia de los objetos desaparecidos: la ley le favorece con una presunción, pero cuanta más prueba aporte, más sólida será su reclamación.",
    ]),

    B.h2("5.9. Checklist: acreditación de un siniestro de incendio"),
    B.bullet("1. ¿Existe informe de bomberos o atestado policial sobre el origen y las circunstancias del incendio?"),
    B.bullet("2. ¿Se ha designado perito de parte conforme al art. 38 LCS (capítulo 18)?"),
    B.bullet("3. ¿Existe prueba de la preexistencia de los objetos desaparecidos (facturas, fotografías, tasaciones)?"),
    B.bullet("4. ¿Se han conservado los restos y objetos dañados para su inspección?"),
    B.bullet("5. ¿Existen indicios de intervención de terceros? En tal caso, ¿cuál es su vinculación con el asegurado?"),
    B.bullet("6. ¿Se comunicaron a la aseguradora traslados temporales del contenido asegurado?"),
    B.bullet("7. ¿Se ha verificado la cobertura efectiva de objetos de valor mediante pacto expreso?"),

    B.h2("Bibliografía citada"),
    B.p("SÁNCHEZ CALERO, F. (dir.), Ley de Contrato de Seguro. Comentarios a la Ley 50/1980, de 8 de octubre, y a sus modificaciones, Aranzadi-Thomson Reuters, Cizur Menor."),
    B.p("VEIGA COPO, A. B., Tratado del Contrato de Seguro, Civitas-Thomson Reuters, Cizur Menor."),
  ];
}

module.exports = { capitulo07 };
