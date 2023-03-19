import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "2747296d";
  const APP_KEY = "c332ae1e72be821e4061392487a1dbef";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
};

export default App;
