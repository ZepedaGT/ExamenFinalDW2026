import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RecipesPage from './pages/RecipesPage'
import RecipeDetailPage from './pages/RecipeDetailPage'

// TODO 1.4 (Autenticación): las rutas /recetas y /recetas/:id deben quedar dentro de
// <Route element={<ProtectedRoute />}>.
// TODO 5.3 (Errores): agregue la ruta comodín path="*" que muestre NotFoundPage.
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recetas" element={<RecipesPage />} />
      <Route path="/recetas/:id" element={<RecipeDetailPage />} />
      <Route path="/" element={<Navigate to="/recetas" replace />} />
    </Routes>
  )
}

export default App
