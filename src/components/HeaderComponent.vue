<script setup>

</script>
<template>

<header class="header">
    <div class="menu">
        <div><!--logo-->
            
        </div>
        <nav class="navegador">
            <ul class="lista">
                <!--creo enlaces con router link-->
                <li class="item">
                    <router-link class="" to="/">Home</router-link><!--carga la pagina home-->
                </li>
                <li class="item">
                    <router-link class="" to="/">AddMovie</router-link><!--carga la pagina de movies, formulario para cargar peliculas-->
                </li>
            </ul>
        </nav>
    </div>
</header>

</template>
<style scoped>

.header{
    width: 100%;
    height: 6em;
    background-color: rgb(39, 38, 38);
    display: flex;
     align-items: center;
    justify-content: center;
}

.menu{
    width: 80%;
    display: flex;
    justify-content: space-between;
}
.navegador{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.lista{
    width: 100%;
    display: flex;
    justify-content: space-between;
} .item{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    color: rgb(196, 196, 196);
    padding: 0.5em;
    

}
</style>