<template>
  <div>
    <div class="banner"></div>
    <div class="bienvenida">
      <div class="mensaje">
        <h2>Bienvenidos a Serenia</h2>
        <h6>Descubre una experiencia de hospitalidad única donde el lujo se combina con la comodidad. En nuestro
          hotel,
          nos
          esforzamos por ofrecer no solo un lugar donde
          hospedarse, sino un refugio donde encontrar tranquilidad y bienestar.
          Cada detalle está diseñado para asegurar que tu estancia sea memorable.</h6>

        <h6> Explora nuestras instalaciones, disfruta de la calidez de nuestro servicio y déjanos ser parte de tu
          próxima
          aventura. Estamos aquí para hacer de cada momento una
          experiencia especial.</h6>
        <div>
        </div>
      </div>
      <img id="logo" src='img/logo.png' alt="">
    </div>
    <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="/img/imgHabitaciones/doble.png" />
      <q-carousel-slide :name="2" img-src="/img/imgHabitaciones/estandar.png" />
      <q-carousel-slide :name="3" img-src="/img/imgHabitaciones/familiar.png" />
      <q-carousel-slide :name="4" img-src="/img/imgHabitaciones/deluxSuite.png" />
    </q-carousel>
  </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';


const slide = ref(1);
const autoplay = ref(true);
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
}

.banner img {
  width: 100%;
  margin-top: 18%;
}

.banner {
  background-image: url('/img/serenia.jpeg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(60%);
  background-position: center center;
  height: 100vh;
  text-align: center;
}

.bienvenida {
  position: relative;
  top: 140%;
  left: 50%;
  transform: translate(-50%, -10%);
  background-color: rgb(255, 255, 255);
  width: 45%;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 20px;

}

.mensaje {
  margin: 2%;
  padding: 8%;
  border: 2px solid rgb(183, 149, 11);
}
#logo{
position: absolute;
width: 40%;
left: -100px;
top: 85%;
}

.gallery-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.gallery {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.gallery-image {
  display: none;
  width: 100%;
  height: auto;
}

.gallery-image.active {
  display: block;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.indicadores {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background-color: white;
}
</style>
