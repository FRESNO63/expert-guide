# Derecho de Seguros de Hogar — estado de redacción

Manual práctico de ~350 páginas. Se construye con `docx` (docx-js) en `libro/`.

- `build.js` — helpers de maquetado (títulos, cajas de texto legal / jurisprudencia / ficha práctica, numeración).
- `capituloNN.js` — contenido de cada capítulo, un módulo por capítulo.
- `main.js` — ensambla portada, créditos, presentación, índice y capítulos, y genera `Derecho_Seguros_Hogar.docx`.

Para regenerar tras editar contenido: `cd libro && node main.js`.

## Avance

| Parte | Capítulo | Estado |
|---|---|---|
| I | 1. El contrato de seguro de hogar: concepto, fuentes y principios | ✅ redactado |
| I | 2. Sujetos y objeto del contrato | ✅ redactado |
| I | 3. Formación del contrato y deber de declaración del riesgo (art. 10 LCS) | ✅ redactado |
| I | 4. Condiciones generales, particulares y especiales (profundización) | ✅ redactado |
| II | 5. Incendio, explosión y fenómenos eléctricos | ✅ redactado |
| II | 6. Daños por agua | ✅ redactado |
| II | 7. Robo, expoliación y hurto | ✅ redactado |
| II | 8. Fenómenos atmosféricos y riesgos extraordinarios (CCS) | ✅ redactado |
| II | 9. Responsabilidad civil de la vida privada / cabeza de familia | ✅ redactado |
| II | 10. Defensa jurídica y asistencia en el hogar | ✅ redactado |
| II | 11. Coberturas especiales (joyas, objetos de valor, comunidades) | ✅ redactado |
| II | 12. Exclusiones generales y particulares | ✅ redactado — Parte II completa |
| III | 13. Declaración y comunicación del siniestro (art. 16 LCS) | ✅ redactado |
| III | 14. Peritación (art. 38 LCS) | ✅ redactado |
| III | 15. Infraseguro, sobreseguro y regla proporcional (arts. 26 y 30 LCS) | ✅ redactado |
| III | 16. Mora del asegurador e intereses (art. 20 LCS) | ✅ redactado |
| III | 17. Dolo y culpa grave | ✅ redactado |
| III | 18. Prescripción de acciones (art. 23 LCS) | ✅ redactado — Parte III completa |
| IV | 19. Reclamación extrajudicial (SAC, Defensor del Asegurado, DGSFP, MASC) | ✅ redactado |
| IV | 20. Vía judicial | ✅ redactado |
| IV | 21. Cláusulas abusivas y protección de consumidores | ✅ redactado |
| IV | 22. Casos prácticos resueltos | ✅ redactado — **libro base completo: 22 capítulos, Partes I-IV** |
| V | Anexo I. Glosario | ⬜ pendiente — se redacta al final |
| V | Anexo II. Índice legislativo | ⬜ pendiente — se redacta al final |
| V | Anexo III. Índice de jurisprudencia citada | ⬜ pendiente — se redacta al final |
| V | Anexo IV. Modelos y formularios | ⬜ borrador guardado en `anexo4_formularios.js` (**no incluido en el ensamblado actual**); se retoma al final para ampliarlo y elevar su nivel profesional (más modelos, variantes por cuantía/procedimiento, notas de cumplimentación) |
| V | Anexo V. Tabla resumen de plazos | ⬜ pendiente — se redacta al final |

## Método de trabajo (pautas)

1. Cada capítulo se investiga primero con el MCP `jurisprudenciator` (texto BOE consolidado + sentencias reales del TS por ROJ/ECLI). No se inventan citas legales ni jurisprudenciales.
2. Estructura fija por capítulo: **Sumario** (estilo revista jurídica) → **Resumen/Abstract** con palabras clave (ES/EN) → epígrafes numerados con **notas al pie doctrinales** → cajas de "Texto legal" → cajas de "Jurisprudencia" con cita completa en formato académico (Sala, fecha, ROJ, ECLI, magistrado ponente) → "Ficha para el profesional" → "Ficha para el asegurado" → checklist → **Bibliografía citada**.
3. Presupuesto orientativo de páginas por capítulo: 12–18 pp. en Partes II y III (mayor densidad práctica), 8–15 pp. en Partes I y IV, 2–8 pp. por anexo.
4. **Citas doctrinales**: se citan tratados y comentarios reales y verificables por autor/título/editorial (Sánchez Calero, Veiga Copo, Bataller Grau et al., Tirado Suárez, Revista Española de Seguros), organizados como comentarios "ad artículo" — formato estándar en estas obras. No se inventan números de página, año de edición concreto ni referencias a números de revista que no se han podido verificar con una fuente oficial (a diferencia de la legislación y la jurisprudencia, para las que sí existe verificación oficial vía BOE/CENDOJ).
5. **Citas jurisprudenciales**: formato "STS, Sala de lo Civil, de [fecha] (ROJ: STS NNNN/AAAA; ECLI:...; MP: [ponente])". Se evita atribuir un número de resolución oficial ("núm. NNN/AAAA") salvo que conste verificado en el propio texto de la sentencia, para no confundirlo con el número ROJ/CENDOJ (que es el que devuelve la fuente oficial consultada).
6. **Modelos y formularios (Anexo IV)**: 6 modelos completos — burofax de reclamación previa, escrito ante el SAC/Defensor del Asegurado, designación e impugnación pericial (art. 38 LCS), demanda de juicio verbal, fundamentación específica de intereses del art. 20 LCS, y reclamación ante la DGSFP. Competencia y procedimiento verificados contra LEC vigente (arts. 52.2, 249.2, 250.2, 399, 394).
7. **Jurisprudencia de Audiencias Provinciales**: además de la doctrina del Tribunal Supremo, se han incorporado SSAP verificadas (Valencia, Barcelona, Jaén) en los capítulos 6, 7 y 10, citadas con el mismo formato académico (Sección, fecha, ROJ, ECLI, ponente). Pendiente: ampliar esta búsqueda a más capítulos si se solicita.
8. **Ideas incorporadas desde el proyecto editorial de referencia** (documento aportado por el cliente el 10/8/2026): duración/prórroga/oposición a la renovación (art. 22 LCS, cap. 3); nuevos riesgos del hogar — domótica, autoconsumo eléctrico, ciberriesgos, alquiler vacacional (cap. 11); MASC y requisito de procedibilidad de la Ley Orgánica 1/2025 (cap. 19); triple control de condiciones generales — incorporación/art. 3 LCS/transparencia-abusividad (cap. 21); capítulo de casos prácticos integrados (cap. 22). No se ha incorporado la cita "vLex, STS 603/2025" del documento de referencia por no haber podido verificarse contra fuente oficial.

## Ideas del proyecto de referencia aún no incorporadas (pendientes de decisión)

El documento de referencia (proyecto editorial de ~555 páginas, 42 capítulos) contiene varias líneas de trabajo valiosas que exceden la estructura actual de 22 capítulos + anexos y que convendría decidir cómo encajar:
- Un capítulo dedicado a interpretación contractual (actualmente integrado dentro del capítulo 4).
- Fase precontractual y distribución de seguros (mediadores, corredores, banca-seguros) — no desarrollada de forma autónoma.
- Rotura de cristales/sanitarios/mármoles como epígrafe o capítulo propio (actualmente no cubierto).
- Daños estéticos, inhabitabilidad y pérdida de alquileres como epígrafe o capítulo propio.
- Una "Parte X. Jurisprudencia comentada" con 40-60 fichas jurisprudenciales como bloque autónomo (más allá de las citas ya integradas en cada capítulo).
- Modelos procesales adicionales (contestación a la demanda, recursos, ejecución) más allá de los 6 del Anexo IV actual.

Insertar estos contenidos como nuevos capítulos numerados obligaría a renumerar todo el libro (los capítulos existentes se citan entre sí constantemente: "capítulo 6", "capítulo 11", etc.). La alternativa más segura es añadirlos como epígrafes dentro de capítulos existentes (como ya se ha hecho con duración/prórroga y nuevos riesgos) o como capítulos "bis" al final de la parte correspondiente. Pendiente de confirmación del cliente sobre qué prioridad dar a cada bloque.
