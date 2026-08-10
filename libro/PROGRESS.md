# Derecho de Seguros de Hogar — estado de redacción

Manual práctico de ~350-400 páginas. Se construye con `docx` (docx-js) en `libro/`.

- `build.js` — helpers de maquetado (títulos, cajas de texto legal / jurisprudencia / ficha práctica, numeración, notas al pie).
- `capituloNN.js` — contenido de cada capítulo, un módulo por capítulo (numeración de 2 dígitos, 01-27).
- `main.js` — ensambla portada, créditos, presentación, índice y capítulos, y genera `Derecho_Seguros_Hogar.docx`.
- `footnotes.js` — registro compartido de notas al pie doctrinales.
- `anexo1_glosario.js`, `anexo2_legislacion.js`, `anexo3_jurisprudencia.js`, `anexo4_formularios.js`, `anexo5_plazos.js`, `anexo6_bibliografia.js` — Anexos I-VI, todos incorporados al ensamblado (Parte V).

Para regenerar tras editar contenido: `cd libro && node main.js`.

## Estructura del libro (27 capítulos, 4 partes + anexos)

| Parte | Capítulo | Estado |
|---|---|---|
| I | 1. El contrato de seguro de hogar: concepto, fuentes y principios | ✅ redactado |
| I | 2. Sujetos y objeto del contrato | ✅ redactado |
| I | **3. Fase precontractual y distribución de seguros** *(nuevo)* | ✅ redactado |
| I | 4. Formación del contrato y deber de declaración del riesgo (art. 10 LCS) | ✅ redactado |
| I | 5. Condiciones generales, particulares y especiales (profundización) | ✅ redactado |
| I | **6. Interpretación contractual en el seguro de hogar** *(nuevo)* | ✅ redactado |
| II | 7. Incendio, explosión y fenómenos eléctricos | ✅ redactado |
| II | 8. Daños por agua | ✅ redactado |
| II | 9. Robo, expoliación y hurto | ✅ redactado |
| II | 10. Fenómenos atmosféricos y riesgos extraordinarios (CCS) | ✅ redactado |
| II | **11. Rotura de cristales, sanitarios y elementos fijos** *(nuevo)* | ✅ redactado |
| II | **12. Daños estéticos, inhabitabilidad y pérdida de alquileres** *(nuevo)* | ✅ redactado |
| II | 13. Responsabilidad civil de la vida privada / cabeza de familia | ✅ redactado |
| II | 14. Defensa jurídica y asistencia en el hogar | ✅ redactado |
| II | 15. Coberturas especiales (joyas, objetos de valor, comunidades, nuevos riesgos) | ✅ redactado |
| II | 16. Exclusiones generales y particulares | ✅ redactado — Parte II completa |
| III | 17. Declaración y comunicación del siniestro (art. 16 LCS) | ✅ redactado |
| III | 18. Peritación (art. 38 LCS) | ✅ redactado |
| III | 19. Infraseguro, sobreseguro y regla proporcional (arts. 27 y 30 LCS) | ✅ redactado |
| III | 20. Mora del asegurador e intereses (art. 20 LCS) | ✅ redactado |
| III | 21. Dolo y culpa grave | ✅ redactado |
| III | 22. Prescripción de acciones (art. 23 LCS) | ✅ redactado — Parte III completa |
| IV | 23. Reclamación extrajudicial (SAC, Defensor del Asegurado, DGSFP, MASC) | ✅ redactado |
| IV | 24. Vía judicial | ✅ redactado |
| IV | 25. Cláusulas abusivas y protección de consumidores | ✅ redactado |
| IV | **26. Jurisprudencia sistematizada: líneas jurisprudenciales por materia** *(nuevo)* | ✅ redactado |
| IV | 27. Casos prácticos resueltos | ✅ redactado |
| IV | **28. El seguro de hogar en perspectiva comparada** *(nuevo)* | ✅ redactado — **libro base completo: 28 capítulos, Partes I-IV** |
| V | Anexo I. Glosario | ✅ redactado — ~50 voces, cada una remitida al capítulo correspondiente |
| V | Anexo II. Índice de legislación citada | ✅ redactado — LCS, CC, LEC, LECrim, TRLGDCU, LCGC, RD-ley 3/2020, Ley 5/2019, LPH, RDL 7/2004, LO 1/2025 |
| V | Anexo III. Índice de jurisprudencia citada | ✅ redactado — 24 fichas completas (19 STS + 5 SAP) con ROJ/ECLI/ponente/materia, más apartado de transparencia sobre precedentes de segunda mano |
| V | Anexo IV. Modelos y formularios | ✅ redactado — 8 modelos (se añadieron escrito de acreditación MASC y contestación a la demanda por exclusión de cobertura) |
| V | Anexo V. Tabla resumen de plazos | ✅ redactado — tabla de ~17 plazos con fundamento y capítulo de referencia |
| V | Anexo VI. Bibliografía general | ✅ redactado — tratados, tesis doctoral y artículos de revista verificados de forma independiente (Dialnet / Boletín del Ministerio de Justicia) |

## Historial de la renumeración (10/8/2026)

El libro se redactó originalmente con 22 capítulos. A petición del cliente, se incorporaron 5 capítulos nuevos procedentes de un proyecto editorial de referencia aportado por él, lo que exigió renumerar los capítulos 3 a 22 (mapa: 3→4, 4→5, 5→7, 6→8, 7→9, 8→10, 9→13, 10→14, 11→15, 12→16, 13→17, 14→18, 15→19, 16→20, 17→21, 18→22, 19→23, 20→24, 21→25, 22→27). La renumeración se hizo con un script (`renumber.js`, ya eliminado tras su uso) que actualizó de forma automática: el nombre de la función y el `module.exports` de cada capítulo, el número pasado a `B.chapterHeading()`, y **todas las referencias cruzadas internas** ("capítulo N", "capítulos N y M", listas de capítulos) mediante una única pasada con diccionario de mapeo, evitando dobles sustituciones encadenadas. Se ha verificado manualmente una muestra de capítulos para confirmar que las referencias cruzadas quedaron correctamente remapeadas.

## Método de trabajo (pautas)

1. Cada capítulo se investiga primero con el MCP `jurisprudenciator` (texto BOE consolidado + sentencias reales del TS y de Audiencias Provinciales por ROJ/ECLI). No se inventan citas legales ni jurisprudenciales.
2. Estructura fija por capítulo: **Sumario** (estilo revista jurídica) → **Resumen/Abstract** con palabras clave (ES/EN) → epígrafes numerados con **notas al pie doctrinales** → cajas de "Texto legal" → cajas de "Jurisprudencia" con cita completa en formato académico (Sala, fecha, ROJ, ECLI, magistrado ponente) → "Ficha para el profesional" → "Ficha para el asegurado" → checklist → **Bibliografía citada**.
3. Presupuesto orientativo de páginas por capítulo: 12–18 pp. en Partes II y III (mayor densidad práctica), 8–15 pp. en Partes I y IV, 2–8 pp. por anexo.
4. **Citas doctrinales**: se citan tratados y comentarios reales y verificables por autor/título/editorial (Sánchez Calero, Veiga Copo, Bataller Grau et al., Tirado Suárez, Revista Española de Seguros), organizados como comentarios "ad artículo" — formato estándar en estas obras. No se inventan números de página, año de edición concreto ni referencias a números de revista que no se han podido verificar con una fuente oficial.
5. **Citas jurisprudenciales**: formato "STS/SAP, Sala de lo Civil, de [fecha] (ROJ: ...; ECLI:...; MP: [ponente])". Se evita atribuir un número de resolución oficial ("núm. NNN/AAAA") salvo que conste verificado en el propio texto de la sentencia.
6. **Modelos y formularios (Anexo IV)**: 8 modelos completos redactados (burofax, escrito de acreditación de actividad negociadora MASC, SAC/Defensor, designación e impugnación pericial, demanda de juicio verbal, contestación a la demanda por exclusión de cobertura, intereses del art. 20 LCS, reclamación DGSFP).
7. **Jurisprudencia de Audiencias Provinciales**: incorporada en los capítulos 8, 9 y 14 (numeración vigente), y sistematizada transversalmente en el nuevo capítulo 26.
8. **Ideas incorporadas desde el proyecto editorial de referencia** (documento aportado por el cliente el 10/8/2026): duración/prórroga (art. 22 LCS, cap. 5 antes de la renumeración, ahora íntegramente dentro del cap. correspondiente a formación del contrato); nuevos riesgos del hogar (cap. 15); fase precontractual y distribución de seguros (cap. 3, nuevo); interpretación contractual (cap. 6, nuevo); rotura de cristales (cap. 11, nuevo); daños estéticos/inhabitabilidad/pérdida de alquileres (cap. 12, nuevo); jurisprudencia sistematizada (cap. 26, nuevo); MASC y requisito de procedibilidad de la Ley Orgánica 1/2025 (cap. 23); triple control de condiciones generales (cap. 25). No se ha incorporado la cita "vLex, STS 603/2025" del documento de referencia por no haber podido verificarse contra fuente oficial.

## Ampliación de anexos y aparato bibliográfico (10/8/2026)

A petición del cliente ("anexos ampliados... busca artículos y tesis doctorales e introduce notas bibliográficas"), se completó la Parte V con los 6 anexos y se amplió el aparato crítico del libro:

- **Anexo I (Glosario)**, **Anexo II (Legislación)** y **Anexo III (Jurisprudencia)**: redactados desde cero. El Anexo III ofrece ficha completa (tribunal, fecha, ROJ, ECLI, ponente, materia, capítulo donde se desarrolla) para las 24 resoluciones verificadas contra CENDOJ que se citan en el cuerpo del libro, y señala aparte, por transparencia, los precedentes citados de segunda mano (mencionados dentro de otras sentencias pero no leídos ni verificados de forma independiente).
- **Anexo IV**: se añadieron 2 modelos nuevos (escrito de acreditación de actividad negociadora previa por MASC, ex art. 264.4º LEC tras la LO 1/2025; y contestación a la demanda por exclusión de cobertura), pasando de 6 a 8 modelos.
- **Anexo V (Tabla de plazos)** y **Anexo VI (Bibliografía general)**: redactados desde cero.
- **Búsqueda de fuentes doctrinales reales**: se localizaron y verificaron mediante WebSearch (Dialnet y Boletín del Ministerio de Justicia) 4 artículos de revista y 1 tesis doctoral, incorporados como notas al pie con cita completa en los capítulos 1, 8 y 20, y recogidos en el Anexo VI:
  - LARRAYA RUIZ, L. J., tesis doctoral sobre cláusulas limitativas (art. 3.1 LCS), Universidad de Navarra, 2001.
  - MIRANDA SERRANO, L. M. (2 artículos): cláusulas limitativas y sorprendentes (RCDI, 2017) y protección del asegurado 40 años después de la LCS (RES, 2022).
  - GARCÍA PALACIOS, N., concurrencia de seguros en multirriesgos (RAEA, 2012).
  - JIMÉNEZ BAUTISTA, S., intereses de mora del art. 20 LCS (BMJ, 2003).
- No se han incorporado citas doctrinales que no pudieran verificarse por su título/autor/revista real; donde no fue posible verificar con el mismo nivel de detalle, se ha dejado constancia expresa en el Anexo VI ("Líneas de ampliación bibliográfica pendientes") en lugar de inventar la referencia.
- Verificación final: `node main.js` genera el documento sin errores; `validate.py` confirma el esquema OOXML correcto; verificación estructural con python-docx confirma el orden de la Parte V y las 24 fichas del Anexo III.

## Incorporación de los dos documentos de trabajo del cliente (10/8/2026)

El cliente aportó dos documentos propios —una relación doctrinal ordenada por problemas y un estudio de Derecho comparado— con el encargo de incorporarlos "todo verificado". Se hizo lo siguiente:

**Nuevo capítulo 28, «El seguro de hogar en perspectiva comparada»** (España, Francia, Alemania, Reino Unido, Italia y Portugal), con cuadro sinóptico de cinco columnas, análisis de los cuatro problemas comunes (control de exclusiones, declaración del riesgo, infraseguro y catástrofes), los cuatro modelos europeos de cobertura catastrófica, y una ficha de seis argumentos comparados utilizables en el litigio español. Toda la normativa extranjera se contrastó vía WebSearch antes de citarla:
- Francia: art. L. 113-1 Code des assurances (texto literal verificado — nótese el **singular** «exclusion formelle et limitée», no el plural que figuraba en el documento de partida); art. L. 112-4; régimen CatNat con surprima 12 %→20 % desde 1.1.2025 y franquicias de 380 € / 1.520 €.
- Alemania: §§ 305c y 307 BGB; § 19 VVG (forma de texto y sanción escalonada por grado de culpa); § 195 BGB.
- Reino Unido: CIDRA 2012 (supresión del deber de declaración espontánea del consumidor); Insurance Act 2015, sección 13A, introducida por la Enterprise Act 2016 y en vigor desde el 4.5.2017; Flood Re (Water Act 2014), caducidad en 2039 y exclusión de la edificación posterior al 1.1.2009.
- Italia: Ley 213/2023, art. 1, apartados 101-111 (obligación limitada a empresas; vivienda voluntaria).
- Portugal: DL 72/2008 (RJCS), deber reforzado de esclarecimiento.
El capítulo incorpora una advertencia metodológica expresa: el derecho extranjero se ofrece como argumento interpretativo, no como derecho aplicable (art. 281.2 LEC), y debe verificarse en su versión vigente antes de citarlo.

**Ampliación del capítulo 10 (Consorcio)**, la de mayor rendimiento práctico:
- Transcripción literal del art. 2.1.c) del RD 300/2004 (definición de inundación extraordinaria), verificado contra BOE consolidado. La clave del deslinde no es la intensidad del episodio sino el mecanismo físico del daño: el Consorcio cubre el anegamiento del terreno y el desbordamiento de cauces naturales, pero **no** la lluvia recogida por cubierta, azotea, red de desagüe o patios, que se reconduce al seguro privado. Un mismo temporal puede exigir dos reclamaciones simultáneas.
- STS 1081/2021 (verificada): en póliza multirriesgo familia-hogar, el umbral de «lluvia anormal» de 40 litros/m²/hora es cláusula limitativa inoponible por no destacada ni aceptada. Se explica que ese umbral procede del art. 2.1.e) del RD 300/2004, que define la tempestad ciclónica atípica: la aseguradora importaba al clausulado privado el umbral de lo catastrófico, vaciando su propia garantía.
- STS 6939/2007 (verificada): la calificación del evento es un concepto jurídico indeterminado sometido al control pleno de los tribunales. Se advierte expresamente que aplicó normativa hoy derogada (Ley de 1954 y RD 2022/1986).

**Ampliación del capítulo 19 (infraseguro)** con la línea argumental del deber de asesoramiento: cuando la suma asegurada la fija la propia entidad mediante sus tablas de valoración, aplicar después la regla proporcional es discutible a la luz del art. 175.1 del RD-ley 3/2020 (verificado contra BOE). Se presenta honestamente como línea en construcción y no como doctrina consolidada, con sus tres pasos de articulación y sus límites.

**Corrección de un defecto editorial preexistente**: 19 capítulos arrastraban desde la renumeración anterior una numeración de epígrafes desajustada respecto del número de capítulo (el cap. 20 tenía epígrafes 16.x, el 25 epígrafes 21.x, etc.). Se corrigió con script (`fix_epigrafes.js`, ejecutado con ensayo en seco previo y eliminado tras su uso): 322 sustituciones, más 8 referencias cruzadas en prosa ajustadas a mano. Verificado en el .docx final: 0 epígrafes desalineados.

**Bibliografía**: se añadieron Guisasola Paredes (verificado: la editorial es **Editoriales de Derecho Reunidas**, no Fundación MAPFRE como indicaba el documento de partida), Girgado Perandones (Comares, 2005, verificado), Garrigues y el artículo de la RCDI núm. 807/2025 (verificado título, número, páginas y DOI; autoría no identificada, se cita por título). Las referencias que no pudieron verificarse con el mismo detalle se recogen en un apartado propio del Anexo VI, «Referencias identificadas y no incorporadas», en lugar de citarse como si lo estuvieran.

**Anexos**: Anexo II incorpora el RD 300/2004 y el RD-ley 3/2020, más una nota sobre normativa extranjera; el Anexo III pasa de 29 a 31 fichas verificadas.

## Ideas del proyecto de referencia aún no incorporadas

- Ampliación del Anexo III con más fichas jurisprudenciales si se desea acercar el número al de 40-60 fichas del proyecto de referencia (actualmente 31 fichas de resoluciones verificadas y citadas en el cuerpo del libro).
- Ampliación del Anexo VI con las referencias del apartado «Referencias identificadas y no incorporadas», si se logra verificar su autoría y paginación exactas.
- Seguimiento de la jurisprudencia que vaya generando la DANA de octubre de 2024 sobre el deslinde Consorcio/aseguradora privada: a fecha de redacción no consta todavía doctrina de la Sala Primera específica sobre ese episodio, por lo que el capítulo 10 se apoya en la definición reglamentaria y en la jurisprudencia anterior.

## Incorporación de tres artículos doctrinales aportados por el cliente (10/8/2026)

A petición del cliente ("coge ideas e introduce los datos que sean interesantes para la obra"), se revisaron tres artículos de la Revista de Responsabilidad Civil y Seguro (INESE) aportados en PDF y se incorporaron a la obra las ideas y datos verificables:

- **CARVIA PONSAILLE, M.**, «El seguro de hogar, el "gran desconocido" y "un gran aliado"» (RC Seguro núm. 71): aportó, entre otras cosas, la referencia a MAGRO SERVET sobre menores y hechos dolosos (incorporada al capítulo 13, con footnote y bibliografía) y la cita de la STS de Pleno de 14 de julio de 2015 sobre los requisitos formales del art. 3 LCS, que se localizó, verificó contra CENDOJ (ROJ: STS 3754/2015; ECLI:ES:TS:2015:3754) e incorporó como nueva jurisBox al capítulo 5.
- **TAPIA HERMIDA, A. J.**, «Los seguros de daños de las comunidades de propietarios y las acciones subrogatorias de las aseguradoras» (RC Seguro núm. 84): aportó la trilogía de sentencias del Tribunal Supremo (2021-2022) sobre si el comunero es "asegurado" o "tercero responsable" a efectos de la acción subrogatoria del art. 43 LCS. Las tres se verificaron de forma independiente contra CENDOJ y se incorporaron como nueva subsección 11.5.1 del capítulo 15, con sus jurisBox correspondientes:
  - STS 21 julio 2021 (ROJ: STS 3162/2021; ECLI:ES:TS:2021:3162) — el comunero es asegurado si la póliza así lo prevé.
  - STS 13 diciembre 2021 (ROJ: STS 4579/2021; ECLI:ES:TS:2021:4579) — regla general: el comunero es tercero responsable.
  - STS 5 julio 2022 (ROJ: STS 2904/2022; ECLI:ES:TS:2022:2904) — confirma y sistematiza la regla general.
- **DACHS, M.**, «El seguro de defensa jurídica: cuestiones suscitadas en la praxis aseguradora en el ámbito del automóvil» (RC Seguro): aportó la problemática doctrinal, muy trasladable al hogar, de la distinción entre los arts. 74 y 76 LCS y de la calificación de la cláusula de límite cuantitativo. Se incorporó como footnote y bibliografía en el capítulo 14, junto con el tratado de referencia de OLMOS PILDÁIN sobre el seguro de defensa jurídica que cita el propio artículo. Las numerosas SSAP de los años noventa y principios de los 2000 citadas por Dachs (Zaragoza, Jaén, Cáceres, Huesca, Lugo, etc.) no se han incorporado como citas directas por no haber podido verificarse contra CENDOJ (anteriores a la generalización del ROJ/ECLI); se deja constancia de ello en el Anexo VI en lugar de citarlas sin verificar.
- Adicionalmente, se localizó y verificó contra CENDOJ la STS de 7 de julio de 2006 (ROJ: STS 5884/2006; ECLI:ES:TS:2006:5884), precedente fundacional de la doctrina —después reiterada por la STS 1544/2023 ya citada en el capítulo 13— según la cual la intencionalidad excluyente de cobertura se predica del resultado dañoso, no de cualquier conducta previa arriesgada; se incorporó al capítulo 21 y se referenció desde el capítulo 13 a propósito de los menores.
- El Anexo III pasa de 24 a 29 fichas jurisprudenciales verificadas; el Anexo VI incorpora las nuevas referencias reales (Carvia Ponsaille, Tapia Hermida —artículo y tratado—, Dachs, Magro Servet, Olmos Pildaín, Sánchez Calero/Sánchez-Calero Guilarte).
- Verificación final: `node main.js` → 181205 bytes sin errores; `validate.py` → 2510 párrafos, todas las validaciones superadas; verificación con python-docx confirma 29 fichas en el Anexo III y la presencia de las nuevas citas y notas al pie en el cuerpo del texto y en las cajas de jurisprudencia.
