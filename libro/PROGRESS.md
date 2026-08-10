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
| II | 5. Incendio, explosión y fenómenos eléctricos | ⬜ pendiente |
| II | 6. Daños por agua | ⬜ pendiente |
| II | 7. Robo, expoliación y hurto | ⬜ pendiente |
| II | 8. Fenómenos atmosféricos y riesgos extraordinarios (CCS) | ⬜ pendiente |
| II | 9. Responsabilidad civil de la vida privada / cabeza de familia | ⬜ pendiente |
| II | 10. Defensa jurídica y asistencia en el hogar | ⬜ pendiente |
| II | 11. Coberturas especiales (joyas, objetos de valor, comunidades) | ⬜ pendiente |
| II | 12. Exclusiones generales y particulares | ⬜ pendiente |
| III | 13. Declaración y comunicación del siniestro (art. 16 LCS) | ⬜ pendiente |
| III | 14. Peritación (art. 38 LCS) | ⬜ pendiente |
| III | 15. Infraseguro, sobreseguro y regla proporcional (arts. 26 y 30 LCS) | ⬜ pendiente |
| III | 16. Mora del asegurador e intereses (art. 20 LCS) | ⬜ pendiente |
| III | 17. Dolo y culpa grave | ⬜ pendiente |
| III | 18. Prescripción de acciones (art. 23 LCS) | ⬜ pendiente |
| IV | 19. Reclamación extrajudicial (SAC, Defensor del Asegurado, DGSFP) | ⬜ pendiente |
| IV | 20. Vía judicial | ⬜ pendiente |
| IV | 21. Cláusulas abusivas y protección de consumidores | ⬜ pendiente |
| IV | 22. Casos prácticos resueltos | ⬜ pendiente |
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
