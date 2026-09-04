# 🪐 Portafolio Interactivo con Astro y Matter.js (Efecto Antigravedad)

Un portafolio web moderno de alto rendimiento creado con **Astro** y **Matter.js**, donde las materias académicas y proyectos personales caen, rebotan y flotan con física 2D en tiempo real.

---

## 🚀 Características Principales

- **Física 2D en tiempo real (Matter.js)**: Los elementos físicos tienen masa, rebote (restitución), fricción y límites de pantalla reactivos.
- **Interacción táctil y de ratón (Fling & Drag)**: Arrastra, lanza y empuja los elementos por toda la pantalla.
- **Efectos de Gravedad & Antigravedad**:
  - **Zero-G / Antigravedad**: Los elementos flotan en ingravidez como en el espacio.
  - **Caída Normal**: Gravedad estándar hacia el suelo.
  - **Gravedad Invertida**: Los elementos caen hacia el techo.
  - **Impulso / Shake**: Aplica impulsos aleatorios a todos los cuerpos físicos en pantalla.
- **Modal de Detalle Dinámico**: Haz clic en cualquier elemento (o selecciónalo desde la leyenda) para abrir un modal con descripción completa, estadísticas, aspectos clave y tecnologías.
- **Categorías Requeridas**:
  - 🎓 **Materias de la Carrera**: *Sistemas Operativos*, *Investigación Operativa II*, *Análisis y Diseño II*.
  - 💻 **Proyectos Personales**: *RevengeGym (Gym System)*, *Taller de Miki*, *Login 3D Lamborghini*.

---

## 📁 Estructura del Proyecto

```text
astro-antigravity-portfolio/
├── package.json                    # Dependencias y scripts
├── astro.config.mjs                # Configuración de Astro
├── tsconfig.json                   # Configuración de TypeScript
├── README.md                       # Documentación
├── public/
│   └── preview.html                # Demostración autónoma ejecutable en navegador
└── src/
    ├── data/
    │   └── portfolioData.ts        # Datos de materias y proyectos
    ├── layouts/
    │   └── Layout.astro            # Layout principal y estilos base
    ├── components/
    │   ├── AntigravityCanvas.astro # Motor Matter.js y vinculación de física a DOM
    │   ├── HeroHeader.astro        # Encabezado e instrucciones interactivas
    │   ├── PhysicsControls.astro   # Barra de herramientas flotante de gravedad
    │   ├── CategoryLegend.astro    # Leyenda lateral con lista de categorías
    │   └── ItemModal.astro         # Modal de detalles del elemento
    ├── styles/
    │   └── global.css              # Glassmorphism, fuentes y temas oscuros
    └── pages/
        └── index.astro             # Página principal
```

---

## 🛠️ Instalación y Ejecución

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18+ recomendada).

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en `http://localhost:3000` para interactuar con el portafolio.

### 3. Compilar para producción
```bash
npm run build
```

---

## ✏️ ¿Cómo agregar o personalizar elementos?

Edita el archivo `src/data/portfolioData.ts`:

```typescript
{
  id: 'nuevo-proyecto',
  title: 'Nombre de tu Proyecto',
  category: 'proyecto', // 'materia' o 'proyecto'
  categoryLabel: 'Proyecto Personal',
  subtitle: 'Breve subtítulo',
  description: 'Descripción corta...',
  longDescription: 'Descripción extendida para el modal...',
  tags: ['Astro', 'TypeScript', 'Tailwind'],
  color: '#3b82f6',
  gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(29, 78, 216, 0.4))',
  borderColor: '#60a5fa',
  glowColor: 'rgba(59, 130, 246, 0.45)',
  icon: 'layers',
  stats: [
    { label: 'Rol', value: 'Lead Developer' }
  ],
  highlights: [
    'Logro o aprendizaje 1',
    'Logro o aprendizaje 2'
  ],
  link: 'https://github.com/tu-usuario/tu-repo'
}
```
El motor de Matter.js detectará automáticamente el nuevo elemento y creará su cuerpo físico correspondiente.
