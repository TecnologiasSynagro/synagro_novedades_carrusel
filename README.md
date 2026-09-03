# Novedades Carrusel - Synagro

Una página web responsive con carrusel de imágenes interactivo diseñada con la identidad visual de Synagro. Cada imagen puede contener un botón que dirige a enlaces externos o archivos dentro del repositorio.

## Características

✅ **Diseño Responsive** - Se adapta perfectamente a cualquier dispositivo (móvil, tablet, escritorio)
✅ **Identidad Synagro** - Colores, logo y estilos siguiendo la línea visual de Synagro
✅ **Carrusel de Imágenes** - Transiciones suaves entre diapositivas con auto-play
✅ **Navegación Intuitiva** - Botones, indicadores y navegación por teclado
✅ **Enlaces Flexibles** - Soporta links externos (nueva pestaña) y rutas internas
✅ **Sin Dependencias** - Código vanilla JavaScript, sin librerías externas
✅ **Accesible** - Etiquetas ARIA y navegación intuitiva

## Estructura de Archivos

```
synagro_novedades_carrusel/
├── index.html           # Estructura HTML principal
├── style.css            # Estilos CSS responsive
├── script.js            # Lógica JavaScript del carrusel
├── carousel-config.json # Configuración de diapositivas (opcional)
└── README.md           # Este archivo
```

## Cómo Usar

### 1. Abrir en el navegador
Simplemente abre `index.html` en tu navegador web.

### 2. Personalizar las diapositivas

Edita el array `carouselData` en `script.js`:

```javascript
const carouselData = [
    {
        id: 1,
        image: 'URL_DE_IMAGEN',
        title: 'Título de la Diapositiva',
        description: 'Descripción o subtítulo',
        buttonText: 'Texto del botón',
        link: 'https://ejemplo.com' // URL externa o ruta interna
    },
    // Agregar más diapositivas...
];
```

### Parámetros de cada diapositiva:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `id` | number | Identificador único |
| `image` | string | URL de la imagen (soporta URLs locales o remotas) |
| `title` | string | Título principal |
| `description` | string | Descripción o subtítulo |
| `buttonText` | string | Texto del botón |
| `link` | string | URL externa o ruta interna |

### 3. Tipos de Enlaces

#### Link Externo
```javascript
link: 'https://www.google.com'
// Se abre en una nueva pestaña
```

#### Ruta Interna
```javascript
link: '/pages/about.html'
link: './images/galeria.html'
// Se abre en la misma pestaña
```

#### Sin enlace
```javascript
link: '#'
// El botón no navega a ningún lado
```

## Uso de Imágenes Locales

Si quieres usar imágenes del repositorio:

1. Crea una carpeta `images/` en el proyecto
2. Coloca las imágenes ahí
3. Referencia la ruta en `carouselData`:

```javascript
image: './images/mi-imagen.jpg'
```

## Controles

### Mouse/Touchpad
- **Click en flechas** → Cambiar diapositiva
- **Click en indicadores** → Ir a diapositiva específica
- **Hover sobre carrusel** → Pausa el auto-play

### Teclado
- **Flecha Derecha** → Siguiente diapositiva
- **Flecha Izquierda** → Diapositiva anterior

### Móvil
- **Deslizar derecha** → Diapositiva anterior
- **Deslizar izquierda** → Siguiente diapositiva


