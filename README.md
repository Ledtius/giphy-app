# Buscador de Gifs

Es una SPA interactiva que te permite buscar gifs que desees. La API que consume esta aplicación viene de parte del equipo de Giphy.

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

- **Ciclo de vida de componentes**: montaje, actualización (re-render) y desmontaje

- **Tailwind CSS** (modo oscuro, diseño responsive, transiciones, clases personalizadas con `@apply`, etc.)

## 📖 Librerias

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
