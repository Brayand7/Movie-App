# ChillFlix  — Buscador de Películas 

<p align="center">
  <img src="./public/logo.png" alt="ChillFlix Logo" width="120" />
</p>

<p align="center">
  <strong>ChillFlix</strong> es una aplicación web moderna y reactiva para buscar y explorar películas en tiempo real. Está construida utilizando <strong>React 19</strong>, <strong>Vite</strong> y el nuevo <strong>Tailwind CSS v4</strong>. La aplicación consume los servicios REST de <strong>The Movie Database (TMDB)</strong> para listar y filtrar los títulos más populares de forma fluida.
</p>

---

##  Características Principales

*   ** Búsqueda Optimizada con Debouncing**: Integra un retraso controlado de 500 ms tras la escritura del usuario antes de realizar la petición HTTP, previniendo la saturación del API y mejorando el rendimiento de red.
*   ** Diseño Totalmente Responsivo**: Interfaz fluida y adaptada a dispositivos móviles, tablets y pantallas de escritorio.
*   ** Estética Premium**: Acabado oscuro moderno, con un menú de navegación translúcido (`backdrop-blur-md`), gradientes dinámicos y sombras suaves que realzan la experiencia visual.
*   ** Micro-animaciones**: Transiciones de escala y transformaciones al interactuar con las tarjetas de películas e imágenes principales para dar dinamismo a la interfaz.
*   ** Arquitectura Rápida**: HMR ultrarrápido impulsado por Vite en un entorno sin sobrecarga de código.

---

##  Tecnologías y Herramientas

El proyecto está desarrollado con las siguientes tecnologías:

*   **React 19** - Librería para la construcción de interfaces de usuario.
*   **Vite 7** - Bundler de desarrollo y compilación ultrarrápido.
*   **Tailwind CSS v4** - Framework de estilos CSS mediante utilidades, configurado nativamente con el nuevo plugin de Vite.
*   **React Use (`useDebounce`)** - Hooks utilitarios para React.
*   **TMDB API** - Fuente de datos para películas, calificaciones, portadas e información de lanzamientos.

---

##  Instalación y Configuración Local

Sigue estos pasos para clonar el repositorio e iniciar la aplicación en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/movie-app-2.git
cd movie-app-2
```

### 2. Instalar las dependencias
Asegúrate de tener instalado [Node.js](https://nodejs.org/). Luego ejecuta:
```bash
npm install
```

### 3. Configurar las variables de entorno
Crea un archivo llamado `.env.local` en la raíz del proyecto y añade tu API Key (Token de acceso de lectura de TMDB) en la siguiente variable:
```env
VITE_TMDB_API_KEY=tu_token_de_lectura_tmdb_aqui
```
> **Nota**: Para obtener tu token de acceso, regístrate en [The Movie Database](https://www.themoviedb.org/), dirígete a la sección de configuración de tu cuenta y solicita una clave de desarrollador en el apartado de **API**.

### 4. Ejecutar el servidor de desarrollo
Inicia el servidor local:
```bash
npm run dev
```
Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación funcionando.

---

##  Estructura del Proyecto

La organización principal del código fuente se detalla a continuación:

```text
├── public/                # Recursos estáticos (Logos, SVGs, fondos)
├── src/
│   ├── assets/            # Archivos multimedia adicionales
│   ├── components/        # Componentes reutilizables
│   │   ├── MovieCard.jsx  # Tarjeta individual de cada película
│   │   ├── Navbar.jsx     # Barra de navegación fija y responsiva
│   │   ├── Search.jsx     # Campo de entrada de búsqueda
│   │   └── Spinner.jsx    # Indicador visual de carga
│   ├── App.css            # Estilos CSS específicos de la aplicación
│   ├── App.jsx            # Componente raíz y control de peticiones al API
│   ├── index.css          # Estilos CSS globales y configuración de temas de Tailwind v4
│   └── main.jsx           # Punto de entrada de React
├── .env.local             # Variables de entorno locales (Excluido en .gitignore)
├── index.html             # Documento HTML principal (Optimizado para SEO)
├── package.json           # Dependencias y scripts del proyecto
└── vite.config.js         # Configuración de Vite y plugin de Tailwind CSS v4
```

---

##  Comandos Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo local con recarga rápida.
*   `npm run build`: Compila y optimiza la aplicación para producción en la carpeta `dist`.
*   `npm run preview`: Sirve localmente los archivos compilados en la carpeta `dist` para pruebas de producción.
*   `npm run lint`: Ejecuta el analizador de código estático ESLint para detectar posibles errores.

---

##  Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.
