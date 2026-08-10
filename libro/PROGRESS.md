# Derecho de Seguros de Hogar — estado de redacción

Manual práctico de ~350-400 páginas. Se construye con `docx` (docx-js) en `libro/`.

- `build.js` — helpers de maquetado (títulos, cajas de texto legal / jurisprudencia / ficha práctica, numeración, notas al pie).
- `capituloNN.js` — contenido de cada capítulo, un módulo por capítulo (numeración de 2 dígitos, 01-27).
- `main.js` — ensambla portada, créditos, presentación, índice y capítulos, y genera `Derecho_Seguros_Hogar.docx`.
- `footnotes.js` — registro compartido de notas al pie doctrinales.
- `anexo4_formularios.js` — borrador de modelos y formularios, **no incluido aún en el ensamblado**; se retoma al final para ampliarlo.

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
| V | Anexo I. Glosario | ⬜ pendiente — se redacta al final |
| V | Anexo II. Índice de legislación citada | ⬜ pendiente — se redacta al final |
| V | Anexo III. Índice de jurisprudencia citada | ⬜ pendiente — se redacta al final |
| V | Anexo IV. Modelos y formularios | ⬜ borrador guardado en `anexo4_formularios.js` (**no incluido en el ensamblado actual**); se retoma al final para ampliarlo (más modelos, variantes por cuantía/procedimiento, notas de cumplimentación) |
| V | Anexo V. Tabla resumen de plazos | ⬜ pendiente — se redacta al final |

## Historial de la renumeración (10/8/2026)

El libro se redactó originalmente con 22 capítulos. A petición del cliente, se incorporaron 5 capítulos nuevos procedentes de un proyecto editorial de referencia aportado por él, lo que exigió renumerar los capítulos 3 a 22 (mapa: 3→4, 4→5, 5→7, 6→8, 7→9, 8→10, 9→13, 10→14, 11→15, 12→16, 13→17, 14→18, 15→19, 16→20, 17→21, 18→22, 19→23, 20→24, 21→25, 22→27). La renumeración se hizo con un script (`renumber.js`, ya eliminado tras su uso) que actualizó de forma automática: el nombre de la función y el `module.exports` de cada capítulo, el número pasado a `B.chapterHeading()`, y **todas las referencias cruzadas internas** ("capítulo N", "capítulos N y M", listas de capítulos) mediante una única pasada con diccionario de mapeo, evitando dobles sustituciones encadenadas. Se ha verificado manualmente una muestra de capítulos para confirmar que las referencias cruzadas quedaron correctamente remapeadas.

## Método de trabajo (pautas)

1. Cada capítulo se investiga primero con el MCP `jurisprudenciator` (texto BOE consolidado + sentencias reales del TS y de Audiencias Provinciales por ROJ/ECLI). No se inventan citas legales ni jurisprudenciales.
2. Estructura fija por capítulo: **Sumario** (estilo revista jurídica) → **Resumen/Abstract** con palabras clave (ES/EN) → epígrafes numerados con **notas al pie doctrinales** → cajas de "Texto legal" → cajas de "Jurisprudencia" con cita completa en formato académico (Sala, fecha, ROJ, ECLI, magistrado ponente) → "Ficha para el profesional" → "Ficha para el asegurado" → checklist → **Bibliografía citada**.
3. Presupuesto orientativo de páginas por capítulo: 12–18 pp. en Partes II y III (mayor densidad práctica), 8–15 pp. en Partes I y IV, 2–8 pp. por anexo.
4. **Citas doctrinales**: se citan tratados y comentarios reales y verificables por autor/título/editorial (Sánchez Calero, Veiga Copo, Bataller Grau et al., Tirado Suárez, Revista Española de Seguros), organizados como comentarios "ad artículo" — formato estándar en estas obras. No se inventan números de página, año de edición concreto ni referencias a números de revista que no se han podido verificar con una fuente oficial.
5. **Citas jurisprudenciales**: formato "STS/SAP, Sala de lo Civil, de [fecha] (ROJ: ...; ECLI:...; MP: [ponente])". Se evita atribuir un número de resolución oficial ("núm. NNN/AAAA") salvo que conste verificado en el propio texto de la sentencia.
6. **Modelos y formularios (Anexo IV)**: 6 modelos completos redactados (burofax, SAC/Defensor, designación e impugnación pericial, demanda de juicio verbal, intereses del art. 20 LCS, reclamación DGSFP), pendientes de ampliación al cierre del libro.
7. **Jurisprudencia de Audiencias Provinciales**: incorporada en los capítulos 8, 9 y 14 (numeración vigente), y sistematizada transversalmente en el nuevo capítulo 26.
8. **Ideas incorporadas desde el proyecto editorial de referencia** (documento aportado por el cliente el 10/8/2026): duración/prórroga (art. 22 LCS, cap. 5 antes de la renumeración, ahora íntegramente dentro del cap. correspondiente a formación del contrato); nuevos riesgos del hogar (cap. 15); fase precontractual y distribución de seguros (cap. 3, nuevo); interpretación contractual (cap. 6, nuevo); rotura de cristales (cap. 11, nuevo); daños estéticos/inhabitabilidad/pérdida de alquileres (cap. 12, nuevo); jurisprudencia sistematizada (cap. 26, nuevo); MASC y requisito de procedibilidad de la Ley Orgánica 1/2025 (cap. 23); triple control de condiciones generales (cap. 25). No se ha incorporado la cita "vLex, STS 603/2025" del documento de referencia por no haber podido verificarse contra fuente oficial.

## Ideas del proyecto de referencia aún no incorporadas

- Modelos procesales adicionales (contestación a la demanda, recursos, ejecución) más allá de los 6 del Anexo IV actual — se abordarán en la ampliación de anexos al cierre del libro.
- Mayor desglose de "seguro de comunidad y otros seguros concurrentes" como capítulo propio (actualmente integrado en los capítulos 8 y 15).
- Ampliación del capítulo 26 con más fichas jurisprudenciales si se desea acercar el número al de 40-60 fichas del proyecto de referencia (actualmente sistematiza ~24 resoluciones ya verificadas y citadas en el cuerpo del libro).
