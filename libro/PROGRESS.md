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
| I | 2. Sujetos y objeto del contrato | ⬜ pendiente |
| I | 3. Formación del contrato y deber de declaración del riesgo (art. 10 LCS) | ⬜ pendiente |
| I | 4. Condiciones generales, particulares y especiales (profundización) | ⬜ pendiente |
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
| V | Anexos I–V (glosario, índices, formularios, tabla de plazos) | ⬜ pendiente |

## Método de trabajo (pautas)

1. Cada capítulo se investiga primero con el MCP `jurisprudenciator` (texto BOE consolidado + sentencias reales del TS por ROJ/ECLI). No se inventan citas legales ni jurisprudenciales.
2. Estructura fija por capítulo: epígrafes numerados → cajas de "Texto legal" → cajas de "Jurisprudencia" con cita completa (nº, fecha, ECLI, ponente) → "Ficha para el profesional" → "Ficha para el asegurado" (cuando aplique) → checklist o modelo.
3. Presupuesto orientativo de páginas por capítulo: 12–18 pp. en Partes II y III (mayor densidad práctica), 8–15 pp. en Partes I y IV, 2–8 pp. por anexo.
