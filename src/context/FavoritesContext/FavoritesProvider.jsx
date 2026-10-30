import { useState } from "react"
import FavoritesContext from "./Favorites"
import useLocalStorage from "../../hooks/useLocalStorage";

const FavoritesProvider = ({children}) => {
    const [favorites,setFavorites]=useState([]);
    const toggleFavorite = (book) => {
  setFavorites((prev) => {
    const exists = prev.some((item) => item.id === book.id);

    if (exists) {
      return prev.filter((item) => item.id !== book.id);
    }

    return [...prev, book];
  });
};
  return (
    <FavoritesContext.Provider value={{favorites,toggleFavorite}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider