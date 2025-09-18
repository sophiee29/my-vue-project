import { defineStore } from "pinia";
import { ref } from "vue";

export const usepeliculasStore= defineStore("peliculas",()=>{
    const peliculas=ref([]);//que sea reactiva
    const API_URL = "https://devsapihub.com/api-movies";
      const getpeli = async () => {
        try {
          const response = await fetch(API_URL); // hacemos la request
          if (!response.ok) {
            throw new Error("Estado: " + response.status);
          }
          const data = await response.json(); 
          console.log("Películas obtenidas:", data); 

          // Guardamos en peliculas.value
          peliculas.value = data; 
        } catch (err) {
            console.error("Error al obtener películas:", err);
        }
      };
      return {
        peliculas,
        getpeli
      };
})

