# GiphyApp - Buscador de Gifs

Es una SPA interactiva que te permite buscar los gifs que desees. Esta aplicación tiene modo oscuro, animaciones, historial de búsquedas, paginación y persistencia de datos.

![Mockup](/public/miniature.webp)

## 💻 Tecnologias

- **Context API** (`useContext`)

- **Limpieza de eventos** (`useEffect` con `return`)

- **Custom Hooks** (`useBooks`)

- **Variables de entorno** (`.env`)

- **Persistencia local** (`localStorage`)

- **Consumo de APIs** con `fetch` y `async/await`

- **Manejo de errores** con `try/catch` y `throw new Error()`

- **Modularización y delegación de responsabilidades** (`/hooks`, `/pages`, `/services`, `files.js`, etc.)

- **Animaciones** (Tansiciones, fades, animaciones al aparecer y desaparecer un componente en el DOM)

- **Tailwind CSS** (modo oscuro, diseño responsive, transiciones, clases personalizadas con `@apply`, etc.)

## 📖 Librerias usadas (Animaciones):

- AutoAnimate
- Notion

---

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuUsuario/book-search-mvp.git
cd book-search-mvp
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade tu clave de la API de Google Books:

```bash
VITE_API_KEY=tu_clave_aqui
```

Puedes obtener una clave gratuita desde:
[https://developers.giphy.com/dashboard/](https://developers.giphy.com/dashboard/)

### 4. Ejecutar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en:
[http://localhost:5173](http://localhost:5173) _(por defecto con Vite)_


## 🔗 Link del proyecto

https://giphy-app-ledtius.vercel.app/
