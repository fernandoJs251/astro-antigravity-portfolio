export interface PortfolioItem {
  id: string;
  title: string;
  category: 'materia' | 'proyecto';
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
  icon: string;
  stats?: { label: string; value: string }[];
  highlights?: string[];
  link?: string;
}

export interface TimelineMilestone {
  id: string;
  semester: string;
  periodLabel: string;
  category: 'actual' | 'core' | 'fundamentos' | 'proyectos';
  title: string;
  status: 'En Curso' | 'Completado' | 'Destacado';
  statusColor: string;
  description: string;
  competencies: string[];
  associatedSubjectId?: string;
  color: string;
  icon: string;
}

export const portfolioItems: PortfolioItem[] = [
  // --- MATERIAS DE LA CARRERA (5to Semestre) ---
  {
    id: 'sistemas-operativos',
    title: 'Sistemas Operativos',
    category: 'materia',
    categoryLabel: 'Materia Académica',
    subtitle: 'Gestión de Procesos, Memoria y Concurrencia POSIX',
    description: 'Estudio profundo de la arquitectura de SO, hilos, sincronización (semáforos/mutex) y sistemas de archivos.',
    longDescription: 'Materia fundamental enfocada en la administración eficiente de recursos de hardware. Se cubren algoritmos de planificación de CPU (Round Robin, SRTF, Multinivel), memoria virtual y paginación, administración de I/O, llamadas al sistema (syscalls) en entornos POSIX/Linux y desarrollo de aplicaciones concurrentes multihilo en C/C++.',
    tags: ['C/C++', 'Linux POSIX', 'Concurrencia', 'Hilos & Mutex', 'Syscalls', 'Gestión de Memoria', 'Semáforos'],
    color: '#38bdf8', // Soft Sky Cyan
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(14, 116, 144, 0.35))',
    borderColor: '#7dd3fc',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    icon: 'cpu',
    stats: [
      { label: 'Enfoque', value: 'Bajo Nivel & POSIX' },
      { label: 'Algoritmos', value: 'Planificación & Paginación' },
      { label: 'Práctica', value: 'Simuladores y C Kernels' }
    ],
    highlights: [
      'Implementación de problemas clásicos de concurrencia (Filósofos comensales, Productor-Consumidor con semáforos).',
      'Desarrollo de simuladores de planificación de CPU (RR, SJF) y asignación de memoria dinámica.',
      'Manejo de señales y pipes para comunicación entre procesos (IPC) en Linux.'
    ]
  },
  {
    id: 'investigacion-operativa-ii',
    title: 'Investigación Operativa II',
    category: 'materia',
    categoryLabel: 'Materia Académica',
    subtitle: 'Modelos Estocásticos, Teoría de Colas y Optimización',
    description: 'Modelado matemático probabilístico, cadenas de Markov, teoría de colas, programación dinámica y simulación.',
    longDescription: 'Especialización en toma de decisiones bajo incertidumbre y optimización matemática de sistemas complejos. Incluye formulación de problemas estocásticos, matrices de transición en cadenas de Markov, análisis de líneas de espera (colas M/M/1, M/M/k), programación dinámica determinística y probabilística, y simulación de eventos discretos.',
    tags: ['Cadenas de Markov', 'Teoría de Colas', 'Programación Dinámica', 'Modelado Matemático', 'Python / Simulación', 'Optimización'],
    color: '#818cf8', // Soft Violet-Blue
    gradient: 'linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(99, 102, 241, 0.35))',
    borderColor: '#a5b4fc',
    glowColor: 'rgba(129, 140, 248, 0.35)',
    icon: 'trending-up',
    stats: [
      { label: 'Especialidad', value: 'Modelos Estocásticos' },
      { label: 'Herramientas', value: 'Python, SimPy & Solver' },
      { label: 'Objetivo', value: 'Optimización de Costos' }
    ],
    highlights: [
      'Optimización de tiempos de espera y capacidad de servicio en modelos de colas multicanal.',
      'Cálculo de estados estables y probabilidades de absorción mediante Cadenas de Markov.',
      'Resolución de problemas de rutas mínimas, reemplazo de equipos y asignación con Programación Dinámica.'
    ]
  },
  {
    id: 'analisis-diseno-ii',
    title: 'Análisis y Diseño II',
    category: 'materia',
    categoryLabel: 'Materia Académica',
    subtitle: 'Arquitectura de Software, Principios SOLID y Patrones GoF',
    description: 'Diseño arquitectónico robusto, metodologías ágiles, patrones GoF, DDD, Clean Architecture y modelado UML avanzado.',
    longDescription: 'Materia orientada a la ingeniería de software a escala empresarial. Se estudian patrones arquitectónicos (Hexagonal, Microservicios, N-Capas, MVC), patrones de diseño GoF (Creacionales, Estructurales, Comportamiento), principios SOLID, Domain-Driven Design (DDD) y modelado exhaustivo mediante diagramas de secuencia, clases y casos de uso.',
    tags: ['Clean Architecture', 'Patrones GoF', 'SOLID', 'UML 2.0', 'DDD', 'Metodologías Ágiles', 'Diseño Modular'],
    color: '#c084fc', // Soft Purple
    gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(147, 51, 234, 0.35))',
    borderColor: '#d8b4fe',
    glowColor: 'rgba(192, 132, 252, 0.35)',
    icon: 'layers',
    stats: [
      { label: 'Metodología', value: 'Scrum & Clean Code' },
      { label: 'Arquitectura', value: 'Hexagonal / N-Capas' },
      { label: 'Estándar', value: 'SOLID & GoF' }
    ],
    highlights: [
      'Diseño modular de sistemas escalables aplicando Clean Architecture y principios SOLID.',
      'Definición integral de diagramas UML para trazabilidad de requerimientos a código.',
      'Evaluación de métricas de acoplamiento y cohesión en arquitecturas de software modernas.'
    ]
  },

  // --- PROYECTOS PERSONALES ---
  {
    id: 'revenge-gym',
    title: 'RevengeGym (Gym System)',
    category: 'proyecto',
    categoryLabel: 'Proyecto Personal',
    subtitle: 'Sistema Integral de Gestión y Control para Gimnasios',
    description: 'Plataforma SaaS para administración de membresías, control de accesos QR, rutinas personalizadas y facturación.',
    longDescription: 'Aplicación full-stack diseñada para la administración integral de centros de acondicionamiento físico. Permite gestionar socios, inscripciones, control de aforo por torniquetes / QR, creación de rutinas de entrenamiento interactivas, seguimiento biométrico y pasarela de cobros recurrentes.',
    tags: ['Full Stack', 'Dashboard', 'Gestión de Membresías', 'Control QR', 'Facturación', 'Node.js', 'React', 'SQL'],
    color: '#fb923c', // Soft Amber Orange
    gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(194, 65, 12, 0.35))',
    borderColor: '#fdba74',
    glowColor: 'rgba(251, 146, 60, 0.35)',
    icon: 'dumbbell',
    stats: [
      { label: 'Tipo', value: 'Full-Stack Web App' },
      { label: 'Módulos', value: 'Membresías + QR + Rutinas' },
      { label: 'Estado', value: 'Producción / Listo' }
    ],
    highlights: [
      'Panel administrativo en tiempo real con estadísticas financieras y afluencia de usuarios.',
      'Módulo de escaneo QR instantáneo para control de acceso de clientes.',
      'Generador de rutinas dinámicas con cálculo automático de progreso.'
    ],
    link: 'https://github.com/fernandoJSiles'
  },
  {
    id: 'taller-miki',
    title: 'Taller de Miki',
    category: 'proyecto',
    categoryLabel: 'Proyecto Personal',
    subtitle: 'Software de Gestión Automotriz, Repuestos y Órdenes de Trabajo',
    description: 'Solución digital para talleres mecánicos con seguimiento de repuestos, historial vehicular y cotizaciones en PDF.',
    longDescription: 'Sistema creado para optimizar el flujo operativo de talleres mecánicos. Facilita la recepción de vehículos, diagnóstico fotográfico, asignación de mecánicos, control de stock de repuestos en tiempo real, emisión de presupuestos y notificaciones automatizadas a clientes vía WhatsApp/Email.',
    tags: ['Gestión de Taller', 'Inventario', 'Órdenes de Trabajo', 'Historial Vehicular', 'Reportes PDF', 'TypeScript'],
    color: '#E8F982', // Modern Pastel Lime
    gradient: 'linear-gradient(135deg, rgba(232, 249, 130, 0.2), rgba(163, 230, 53, 0.35))',
    borderColor: '#f0fba6',
    glowColor: 'rgba(232, 249, 130, 0.35)',
    icon: 'wrench',
    stats: [
      { label: 'Sector', value: 'Automotriz / ERP' },
      { label: 'Control', value: 'Inventario & Órdenes' },
      { label: 'Notificaciones', value: 'WhatsApp / Email' }
    ],
    highlights: [
      'Trazabilidad completa del historial de servicios por matrícula o chasis.',
      'Control de inventario automatizado que descuenta piezas al cerrar órdenes.',
      'Generación de presupuestos y facturas en PDF descargables con un clic.'
    ],
    link: 'https://github.com/fernandoJSiles'
  },
  {
    id: 'login-3d-lamborghini',
    title: 'Login 3D Lamborghini',
    category: 'proyecto',
    categoryLabel: 'Proyecto Personal',
    subtitle: 'Experiencia Web 3D Interactiva con Three.js y WebGL',
    description: 'Portal de autenticación futurista con un modelo 3D interactivo de Lamborghini, shaders y efectos de iluminación en tiempo real.',
    longDescription: 'Concepto de interfaz de usuario de vanguardia que fusiona autenticación segura con gráficos 3D renderizados por GPU mediante Three.js y WebGL. Presenta un modelo fotorrealista de un superdeportivo Lamborghini que responde al movimiento del cursor, con animaciones de cámara cinemáticas, apertura de puertas y efectos neón.',
    tags: ['Three.js', 'WebGL', 'Shaders GLSL', 'UI 3D Interactiva', 'CSS Glassmorphism', 'Vite', 'JavaScript'],
    color: '#34d399', // Soft Emerald Mint
    gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(5, 150, 105, 0.35))',
    borderColor: '#6ee7b7',
    glowColor: 'rgba(52, 211, 153, 0.35)',
    icon: 'box',
    stats: [
      { label: 'Render', value: 'WebGL / Three.js 60 FPS' },
      { label: 'Efectos', value: 'Bloom, Shaders, PBR' },
      { label: 'Interactividad', value: 'Cámara 360° & Luces' }
    ],
    highlights: [
      'Renderizado 3D de alta fidelidad con iluminación PBR y sombras dinámicas.',
      'Interacción fluida con el cursor que orienta el ángulo del automóvil en tiempo real.',
      'Transiciones cinematográficas al validar credenciales de acceso.'
    ],
    link: 'https://github.com/fernandoJSiles'
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  // 5to Semestre - Actual
  {
    id: 'so-milestone',
    semester: '5to Semestre',
    periodLabel: 'Actual / En Curso',
    category: 'actual',
    title: 'Sistemas Operativos (POSIX & C/C++)',
    status: 'En Curso',
    statusColor: '#38bdf8',
    description: 'Arquitectura de núcleos, gestión de procesos e hilos, concurrencia con semáforos/mutex y administración de memoria paginada.',
    competencies: ['Linux POSIX', 'Concurrencia & Hilos', 'Syscalls', 'Memoria Virtual'],
    associatedSubjectId: 'sistemas-operativos',
    color: '#38bdf8',
    icon: '⚡'
  },
  {
    id: 'io2-milestone',
    semester: '5to Semestre',
    periodLabel: 'Actual / En Curso',
    category: 'actual',
    title: 'Investigación Operativa II (Estocástica)',
    status: 'En Curso',
    statusColor: '#818cf8',
    description: 'Toma de decisiones bajo incertidumbre, cadenas de Markov, teoría de colas y programación dinámica aplicada a optimización.',
    competencies: ['Cadenas de Markov', 'Teoría de Colas', 'Programación Dinámica', 'Python Solver'],
    associatedSubjectId: 'investigacion-operativa-ii',
    color: '#818cf8',
    icon: '📊'
  },
  {
    id: 'ad2-milestone',
    semester: '5to Semestre',
    periodLabel: 'Actual / En Curso',
    category: 'actual',
    title: 'Análisis y Diseño II (Arquitectura & GoF)',
    status: 'En Curso',
    statusColor: '#c084fc',
    description: 'Ingeniería de software modular, Clean Architecture, principios SOLID, patrones GoF y modelado UML integral.',
    competencies: ['Clean Architecture', 'Patrones GoF', 'Principios SOLID', 'UML 2.0'],
    associatedSubjectId: 'analisis-diseno-ii',
    color: '#c084fc',
    icon: '📐'
  },

  // 3ro y 4to Semestre - Core
  {
    id: 'eda-milestone',
    semester: '3er & 4to Semestre',
    periodLabel: 'Semestres Superados',
    category: 'core',
    title: 'Estructuras de Datos & Algoritmos Avanzados',
    status: 'Completado',
    statusColor: '#4ade80',
    description: 'Dominio de árboles balanceados (AVL, B+), grafos, algoritmos de búsqueda/ordenamiento y análisis asintótico de complejidad O(n).',
    competencies: ['Complejidad O(n)', 'Árboles & Grafos', 'Dijkstra / DFS / BFS', 'Algoritmos Voraces'],
    color: '#4ade80',
    icon: '🌳'
  },
  {
    id: 'db-milestone',
    semester: '3er & 4to Semestre',
    periodLabel: 'Semestres Superados',
    category: 'core',
    title: 'Bases de Datos & Sistemas RDBMS',
    status: 'Completado',
    statusColor: '#a5b4fc',
    description: 'Diseño entidad-relación, normalización formal (1FN a BCNF), consultas SQL avanzadas, índices y transacciones ACID.',
    competencies: ['SQL Avanzado', 'PostgreSQL / MySQL', 'Normalización', 'Transacciones ACID'],
    color: '#a5b4fc',
    icon: '🗄️'
  },
  {
    id: 'arq-milestone',
    semester: '3er & 4to Semestre',
    periodLabel: 'Semestres Superados',
    category: 'core',
    title: 'Arquitectura de Computadoras & Lógica Digital',
    status: 'Completado',
    statusColor: '#fbbf24',
    description: 'Organización de CPU, registros, memoria caché, lenguaje ensamblador e interrupciones a nivel de hardware.',
    competencies: ['Ensamblador x86/ARM', 'Lógica Secuencial', 'Microarquitectura', 'Jerarquía de Memoria'],
    color: '#fbbf24',
    icon: '💻'
  },

  // Hitos de Proyectos y Aplicación Real
  {
    id: 'projs-milestone',
    semester: 'Proyectos & Especialización',
    periodLabel: 'Desarrollo Práctico',
    category: 'proyectos',
    title: 'Desarrollo Full-Stack & Experiencias 3D',
    status: 'Destacado',
    statusColor: '#E8F982',
    description: 'Construcción y despliegue de sistemas reales (RevengeGym, Taller de Miki, Login 3D Lamborghini) aplicando todo el stack técnico.',
    competencies: ['React / Astro / Node', 'Three.js & WebGL', 'TypeScript', 'Arquitectura SaaS'],
    color: '#E8F982',
    icon: '🚀'
  }
];
