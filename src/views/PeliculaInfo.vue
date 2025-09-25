<script setup>

import { useRoute } from "vue-router";
import HeaderComponent from '../components/HeaderComponent.vue';
import { onMounted } from "vue"
import { usepeliculasStore } from '../stores/ingresopeliculas';


//const peliRetrive= ref(getpeliById(1))
const route = useRoute()
const pelistores= usepeliculasStore();
onMounted(() => {
  pelistores.getpeli()//ejecuto la funcion de ingreso de peliculas
})
</script>

<template>
<HeaderComponent></HeaderComponent>
<section class="section-container">
 <div class="container-info" v-if="pelistores.getpeliById(route.params.id)">
    <!--<p>ID: {{ route.params.id }}</p>-->
    <div class="datos">
        <h2 class="title">{{ pelistores.getpeliById(route.params.id).title }}</h2>
        <h3 class="margintext">Fecha de publicación: {{ pelistores.getpeliById(route.params.id).year }}</h3>
        <h3 class="margintext">Género: {{ pelistores.getpeliById(route.params.id).genre }}</h3>
        <h3 class="margintext">Clasificación:{{ pelistores.getpeliById(route.params.id).stars }} estrellas</h3>
        <h3>Descripción</h3>
        <p >{{ pelistores.getpeliById(route.params.id).description }}</p>
    </div>
    <div class="imagen">
         <img  :src="pelistores.getpeliById(route.params.id).image_url" alt="" width="200">
    </div>
  </div>
  </section>
</template>

<style scoped>
.imagen{
    height: 50em;

}
.margintext{
    margin-bottom: 1em;
}
.imagen img{
    object-fit: cover;
    
    height: 100%;
    width: 100%;
}
.section-container{
    display: flex;
    justify-content: center;
}
.container-info{
    margin-top: 4em;
    width: 90%;
    display: flex;
    justify-content: center;
    
}
.title{
    font-size: 3.5em;
    margin-bottom: 1.5em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.datos{
    width: 40%;
    margin-right: 6em;
}
.datos h3{
    font-size: 2em;
}
.datos p{
    font-size: 1.7em;
}
</style>