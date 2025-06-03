# Classify Course Frontend

This is the frontend for the **Classify Course** application, built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).

## Features

- User authentication (login/signup)
- Browse, view, and enroll in courses
- Admin dashboard to add new courses
- View enrolled courses
- Responsive UI with React Router

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/classify-course-frontend.git
   cd classify-course-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Variables

If your backend runs on a different port or host, update the API base URL in `src/services/course.js`.

## Project Structure

```
src/
  components/      # Reusable UI components (Navbar, etc.)
  pages/           # Page components (Home, Login, Dashboard, etc.)
  services/        # API service functions
  utils/           # Utility functions (auth, etc.)
  App.jsx          # Main app component with routing
  main.jsx         # Entry point
public/
  index.html       # HTML template
```

## API

The frontend expects a backend running at `http://localhost:8082` with CORS enabled.

## Troubleshooting

- **CORS errors:**  
  Make sure your backend allows requests from `http://localhost:5173`.

- **.env configuration:**  
  If needed, create a `.env` file for custom environment variables.

## License

This project is licensed under the MIT License.

---

Made with ❤️ using React + Vite.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
