import { RouterProvider, useSearchParams } from "react-router";
import { router } from "./routes/routes";
import FavoritesProvider from "./context/FavoritesContext/FavoritesProvider";
import { Toaster } from "sonner";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    
    <AuthProvider>
      <FavoritesProvider>
        <Toaster position="top-right"className="z-200" toastOptions={
          {
            style:{
              fontFamily:"morabba",
              fontSize:"17px"
            }
          }
        } />
        <RouterProvider router={router} />
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;