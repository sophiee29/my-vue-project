<script setup>
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
        <div  @click="pagpelicula" class="card" v-for="pelicula in pelistore.peliculas"  ><!--se agrega por pelicula, recorre el array peliculas, es ref-->
        <!--solo muestro la imagen y la peli dn la home-->
        <img :src="pelicula.image_url" alt="" width="200">
        <h3 class="titulo-pelicula">{{ pelicula.title }}</h3>
       
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
}
.card{
  width: 25%;

}
.titulo-pelicula{
background-color: rgb(48, 48, 48);
padding: 1em;
color: rgb(119, 119, 119);
text-align: center;
font-size: 1.5em;
font-family: Verdana, Geneva, Tahoma, sans-serif
}
</style>