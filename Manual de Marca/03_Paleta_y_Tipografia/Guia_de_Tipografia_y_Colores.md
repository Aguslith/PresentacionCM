# Guía de Color y Tipografía — ALPACLADD

---

## 1. Paleta Cromática Oficial

La paleta cromática de **ALPACLADD** proyecta serenidad técnica, rigor industrial y modernidad limpia.

```
+-----------------------------------------------------------------------------------+
|  #0D1D34           #1D5A8F           #5FA8D3           #666666          #F2F2F2   |
|  NAVY BLUE         CORP BLUE         SKY BLUE          COOL GRAY        OFF WHITE |
|  (60% Dominio)     (25% Estructura)  (10% Acento)      (5% Técnico)     (Fondo)   |
+-----------------------------------------------------------------------------------+
```

### Tabla de Especificaciones Técnicas

| Muestra Visual | Nombre Oficial | Código HEX | RGB | CMYK | Pantone Aprox. | Rol en Piezas Gráficas |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| ![#0D1D34](https://placehold.co/24x24/0D1D34/0D1D34.png) | **Navy Blue** | `#0D1D34` | `13, 29, 52` | `95, 75, 45, 50` | Pantone 296 C | Fondo principal en piezas institucionales y modo oscuro. Color primario de texto sobre fondo claro. |
| ![#1D5A8F](https://placehold.co/24x24/1D5A8F/1D5A8F.png) | **Corporate Blue** | `#1D5A8F` | `29, 90, 143` | `88, 62, 18, 5` | Pantone 7686 C | Marca corporativa, botones de llamado a la acción (CTA), marcos y contrastes intermedios. |
| ![#5FA8D3](https://placehold.co/24x24/5FA8D3/5FA8D3.png) | **Sky Blue** | `#5FA8D3` | `95, 168, 211` | `58, 22, 5, 0` | Pantone 2915 C | Acento dinámico, iluminación de filamentos, badges destacados y microinteracciones. |
| ![#666666](https://placehold.co/24x24/666666/666666.png) | **Cool Gray** | `#666666` | `102, 102, 102` | `0, 0, 0, 70` | Cool Gray 9 C | Datos técnicos secundarios, subtítulos de fichas técnicas y líneas divisorias. |
| ![#F2F2F2](https://placehold.co/24x24/F2F2F2/F2F2F2.png) | **Off White** | `#F2F2F2` | `242, 242, 242` | `3, 2, 2, 0` | Pantone 705 C | Fondo en piezas positivas/claras, tarjetas de producto y texto claro sobre fondo Navy. |

### Regla Proporcional para Redes Sociales (Regla 60-30-10)
- **60% Navy Blue (#0D1D34) o Fondos Limpios:** Proporciona elegancia y sobriedad.
- **30% Corporate Blue (#1D5A8F) / Off-White (#F2F2F2):** Da estructura, legibilidad y jerarquía al contenido.
- **10% Sky Blue (#5FA8D3):** Guía el ojo hacia el punto focal (gancho del copy, datos numéricos o botón de contacto).

---

## 2. Tipografía Institucional

La tipografía única y oficial de **ALPACLADD** es **Raleway**, una familia tipográfica geométrica sans-serif creada por Matt McInerney, disponible libremente en [Google Fonts](https://fonts.google.com/specimen/Raleway).

### Pesos y Usos Autorizados

| Peso Tipográfico | Código CSS | Aplicación Exclusiva |
| :--- | :--- | :--- |
| **ExtraBold (800) / Black (900)** | `font-weight: 800` | Logotipo ALPACLADD, títulos de portada, cifras clave y ganchos de alto impacto. |
| **Bold (700)** | `font-weight: 700` | Títulos de publicaciones, cabeceras de carruseles y subtítulos H2. |
| **SemiBold (600)** | `font-weight: 600` | Descriptor *"Fábrica de Hilados"*, nombres de producto y botones CTA. |
| **Regular (400)** | `font-weight: 400` | Párrafos descriptivos, copys de publicaciones y fichas técnicas. |
| **Light (300)** | `font-weight: 300` | Citas inspiracionales y notas al pie editoriales. |

### Jerarquía Tipográfica Recomendada para Piezas de Feed (1080×1080 px)

```
[ TÍTULO PRINCIPAL / GANCHO ]  -> Raleway Bold (700) | 42 - 48 px | Interlineado 1.15 | Mayúsculas
[ Subtítulo / Categoría ]      -> Raleway SemiBold (600) | 16 - 18 px | Tracking expandido (+0.2em)
[ Párrafo de Lectura ]         -> Raleway Regular (400) | 14 - 16 px | Interlineado 1.5 | Minúsculas
[ Tagline / Descriptor ]       -> Raleway SemiBold (600) | 10 - 12 px | Tracking +0.35em | Mayúsculas
```

### Fuentes de Respaldo (Fallback de Sistema)
En entornos donde no sea posible cargar fuentes web (por ejemplo, remitos de facturación o documentos internos de Excel):
1. **Segoe UI** (Windows)
2. **SF Pro Display** (macOS / iOS)
3. **Helvetica Neue / Arial** (Sistemas genéricos)
