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
| IV | 27. Casos prácticos resueltos | ✅ redactado — **libro base completo: 27 capítulos, Partes I-IV** |
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

## Ideas del proyecto de referencia aún no incorporadas

- Mayor desglose de "seguro de comunidad y otros seguros concurrentes" como capítulo propio (actualmente integrado en los capítulos 8 y 15).
- Ampliación del Anexo III con más fichas jurisprudenciales si se desea acercar el número al de 40-60 fichas del proyecto de referencia (actualmente 24 fichas de resoluciones verificadas y citadas en el cuerpo del libro).
- Ampliación del Anexo VI con más artículos/tesis doctrinales sobre las líneas señaladas como pendientes (seguro de robo/negligencia grave, seguro de defensa jurídica, reasonable expectations doctrine comparada).
