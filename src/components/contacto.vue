<template>
    <div>
      <div class="contacto">
  <div class="contacto-imagen">
    <img src="/img/contactanos.jpg" alt="">
    <h3 class="contacta">Contactanos</h3>
  </div>
  <div class="infoContacto">
    <section>
      <h4>Información de Contacto</h4>
      <p>
        <strong>Dirección Física:</strong><br>
        Hotel Serenia<br>
        27 St James's Pl, St. James's, London SW1A 1NR, Reino Unido
      </p>
      <p>
        <strong>Números de Teléfono:</strong><br>
        Recepción: +34 123 456 789<br>
        Reservas: +34 987 654 321<br>
        Atención al Cliente: +34 456 789 123
      </p>
      <p>
        <strong>Dirección de Correo Electrónico:</strong><br>
        Información General: info@hotelelegancia.com<br>
        Reservas: reservas@hotelelegancia.com<br>
        Eventos: eventos@hotelelegancia.com
      </p>
      <p>
        <strong>Horarios de Atención:</strong><br>
        Recepción: 24 horas<br>
        Reservas: Lunes a Viernes, 9:00 AM - 8:00 PM<br>
        Atención al Cliente: Lunes a Viernes, 9:00 AM - 6:00 PM
      </p>
    </section>
  </div>
</div>
  
      <div class="mapa">
        <section class="formulario">
          <q-card>
            <q-card-section>
              <q-card-title>Contacto</q-card-title>
  
              <!-- Formulario de contacto -->
              <q-form @submit="submitForm" ref="form">
                <q-input
                  v-model="formData.nombre"
                  label="Nombre"
                  outlined
                  dense
                  required
                  :rules="[v => !!v || 'Este campo es requerido']"
                />
  
                <q-input
                  v-model="formData.email"
                  label="Correo Electrónico"
                  outlined
                  dense
                  type="email"
                  required
                  :rules="[v => !!v || 'Este campo es requerido', v => isValidEmail(v) || 'Correo electrónico no válido']"
                />
  
                <q-input
                  v-model="formData.telefono"
                  label="Teléfono"
                  outlined
                  dense
                  :rules="[v => !v || /^\d{7,14}$/.test(v) || 'Teléfono inválido']"
                />
  
                <q-input
                  v-model="formData.mensaje"
                  label="Mensaje"
                  outlined
                  dense
                  type="textarea"
                  rows="4"
                  required
                  :rules="[v => !!v || 'Este campo es requerido']"
                />
  
                <q-checkbox
                  v-model="formData.aceptaTerminos"
                  label="Acepto los términos y condiciones"
                  required
                  :rules="[v => v === true || 'Debe aceptar los términos y condiciones para continuar']"
                  :error-message="errorAceptaTerminos"
                />
  <br>
                <q-btn
                
                  type="submit"
                  label="Enviar"
                  color="primary"
                  class="q-mt-md"
                  :loading="isLoading"
                />
              </q-form>
            </q-card-section>
          </q-card>
        </section>
  
          <!-- Mapa -->
          <l-map
        :zoom="16"
        :center="hotelLocation"
        style="height: 500px; width: 100%;"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        ></l-tile-layer>
        <l-marker :lat-lng="hotelLocation">
          <l-popup>Hotel Serenia</l-popup>
        </l-marker>
      </l-map>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
const hotelLocation= ref([50.783432, -1.065528])

  
  const formRef = ref(null);

const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
  aceptaTerminos: false
});

const isLoading = ref(false);
const errorAceptaTerminos = ref('');

// Función para validar correo electrónico
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para enviar el formulario
const submitForm = () => {
  errorAceptaTerminos.value = '';

  if (!formRef.value.validate()) {
    return;
  }

  if (!formData.value.aceptaTerminos) {
    errorAceptaTerminos.value = 'Debe aceptar los términos y condiciones para continuar';
    return;
  }

  isLoading.value = true;

  // Simular envío del formulario (aquí puedes implementar tu lógica real)
  setTimeout(() => {
    // Aquí colocas la lógica real para enviar el formulario (ejemplo: enviar a un servidor, etc.)

    // Mostrar alerta de éxito
    alert('Formulario enviado correctamente');

    // Limpiar campos
    formData.value.nombre = '';
    formData.value.email = '';
    formData.value.telefono = '';
    formData.value.mensaje = '';
    formData.value.aceptaTerminos = false;

    isLoading.value = false;
  }, 1500);
};
  

  </script>
  
 <style scoped>
 .contacto {
  display: grid;
  grid-template-columns: 60% 40%;
  position: relative; /* Asegura el contexto de posicionamiento */
  overflow: hidden; /* Evita que el texto se salga de la imagen */
  height: 100%;
}

.contacto-imagen {
  position: relative; /* Añade posición relativa al contenedor de la imagen */
}

.contacto-imagen img {
  width: 100%;
  height: 100%;
  filter: grayscale(80%);
}

.contacta {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-left: 10px solid rgb(241, 174, 5);
  color: white;
  font-size: 6em;
  padding-left: 4px;
  text-shadow: 0 0 15px black;
}

.infoContacto {
  background-color: rgba(241, 174, 5, 0.894);
  padding: 5%;
}


  .map-container {
    height: 400px;
  }

  .mapa {
    display: grid;
    grid-template-columns: 1fr; /* Cambiamos a una columna para móviles */
    gap: 4%;
    margin-top: 2%;
    margin-bottom: 30px;
  }
  .mapa {
  display: flex;
  justify-content: space-between;
}

.formulario {
  width: 35%;
  margin-right: 20px;
}
  .formulario {
    text-align: center;
    width: 80%;
    margin: auto; /* Centrar el formulario */
  }

  /* Media Query para pantallas pequeñas */
 
  /* Media Query para pantallas pequeñas */
  @media (max-width: 360px) {
    .infoContacto {
      padding: 10px; /* Reducir el padding para dispositivos pequeños */
    }

    .contacta {
      font-size: 1.2em; /* Reducir el tamaño del título */
    }

    .formulario {
      width: 100%; /* Ocupar todo el ancho disponible */
    }

    .mapa {
      gap: 10px; /* Reducir el espacio entre los elementos */
    }

    .map-container {
      height: 300px; /* Ajustar la altura del mapa */
    }
  }

  
</style>
