<script setup>
import { RouterLink } from 'vue-router';
import { usepeliculasStore } from '../stores/ingresopeliculas';
import { onMounted } from 'vue'

const pelistore= usepeliculasStore();
onMounted(() => {
  pelistore.getpeli()//ejecuto la funcion de ingreso de peliculas
})
//como hacer para que al tocar una card cargue otra pagina 
//const pagpelicula=()=>{
  //<router-link class="" to="/">PeliculaInfo</router-link>//carga la pagina de la peli selecionada
//}
</script>
<template>
  <section class="gallery-peliculas">
    <div class="cards-container"> <!--agrego evento por peli -->
      <!--siempre que use un v-for uso una key -->
        <div class="card" v-for="pelicula in pelistore.peliculas" :key="pelicula.id"><!--se agrega por pelicula, recorre el array peliculas, es ref-->
          <!--solo muestro la imagen y la peli dn la home(pongo como clave un id)-->
          <router-link :to="{name:'movie', params:{id:pelicula.id}}"><!--carga la pag pelicula info, coloco parametro id-->
            <div class="image-film marginR">
              <img  :src="pelicula.image_url" alt="" width="200">
            </div>
            <div class="titulo-pelicula">
                <h3>{{ pelicula.title }}</h3>
            </div> 
          </router-link>
        </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-peliculas{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards-container{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card{
  width: 25%;
  margin: 1em;
  

}
.image-film{
  height: 40em;
	transition: 0.2s;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image-film img{
  object-fit: cover;
  object-position: 30% 80%;
  height: 100%;
  width: 100%;
}



.titulo-pelicula{
background-color: rgb(48, 48, 48);
padding: 1em;
height: 7em;
display: flex;
justify-content: center;
align-items: center;

}
.titulo-pelicula h3{
text-align: center;
color: rgb(119, 119, 119);
font-size: 1.5em;
font-family: Verdana, Geneva, Tahoma, sans-serif;
}
@media (max-width: 700px) {
  body {
 
    font-size: 0.5em;
  }
  .card{
	width: 40%;
  	margin: 1em;
  }

  .titulo-pelicula{
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;

  }  
  .titulo-pelicula h3{
    font-size: 1.3em;

  }
 .image-film{
    height: 25em;
  }
}
@media (max-width: 480px) {
  body {
    font-size: 0.5em;
    
  }
  .card{
	width: 100%;
  	margin: 1em;
  }
   .titulo-pelicula{
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;

  }  
  .titulo-pelicula h3{
    font-size: 1.2em;
  }
}
</style>