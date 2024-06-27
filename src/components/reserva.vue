<template>
    <div class="q-pa-md">
      <q-card class="formulario">
        <q-card-section>
          <div class="text-h6">Reserva tu Habitación</div>
        </q-card-section>
  
        <q-card-section>
          <!-- Formulario de reserva -->
          <q-form @submit="submitReservation" ref="reservationFormRef">
            <!-- Selección de fechas -->
            <q-input
              v-model="reservationData.checkInDate"
              label="Fecha de Entrada"
              type="date"
              outlined
              dense
              required
              :rules="[v => !!v || 'Este campo es requerido', dateValidator]"
            />
  
            <q-input
              v-model="reservationData.checkOutDate"
              label="Fecha de Salida"
              type="date"
              outlined
              dense
              required
              :rules="[v => !!v || 'Este campo es requerido']"
            />
  
            <!-- Selección de habitación -->
            <q-select
              v-model="reservationData.roomType"
              label="Tipo de Habitación"
              outlined
              dense
              :options="roomOptions"
              option-label="label"
              option-value="value"
              required
              :rules="[v => !!v || 'Este campo es requerido']"
            />
  
            <!-- Información de contacto -->
            <q-input
              v-model="reservationData.fullName"
              label="Nombre Completo"
              outlined
              dense
              required
              :rules="[v => !!v || 'Este campo es requerido']"
            />
  
            <q-input
              v-model="reservationData.email"
              label="Correo Electrónico"
              type="email"
              outlined
              dense
              required
              :rules="[v => !!v || 'Este campo es requerido', v => isValidEmail(v) || 'Correo electrónico no válido']"
            />
  
            <q-input
              v-model="reservationData.phoneNumber"
              label="Número de Teléfono"
              type="tel"
              outlined
              dense
              required
              :rules="[v => !!v || 'Este campo es requerido', v => /^\d{7,14}$/.test(v) || 'Teléfono inválido']"
            />
  
            <!-- Aceptar términos y condiciones -->
            <q-checkbox
              v-model="reservationData.acceptTerms"
              label="Acepto los términos y condiciones"
              required
              :rules="[v => v === true || 'Debe aceptar los términos y condiciones para continuar']"
              :error="!reservationData.acceptTerms && errorAcceptTerms"
            />
  
            <br>
  
            <!-- Botón de enviar -->
            <q-btn
              type="submit"
              label="Reservar"
              color="primary"
              class="q-mt-md"
              :loading="isLoading"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script setup>
  import { ref, } from 'vue';
  // import { QForm, QInput, QSelect, QCheckbox, QBtn, QCard, QCardSection } from 'quasar';
  
  const reservationFormRef = ref(null);
  import { useRouter } from 'vue-router';

const router = useRouter();
  
  const reservationData = ref({
    checkInDate: '',
    checkOutDate: '',
    roomType: null,
    fullName: '',
    email: '',
    phoneNumber: '',
    acceptTerms: false
  });
  
  const isLoading = ref(false);
  const errorAcceptTerms = ref('');
  
  const roomOptions = [
    { label: 'Habitación Estándar - $100 por noche', value: 'standard', price: 100 },
    { label: 'Habitación Deluxe - $150 por noche', value: 'deluxe', price: 150 },
    { label: 'Suite - $200 por noche', value: 'suite', price: 200 }
  ];
  
  // Función para validar correo electrónico
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validador personalizado para la fecha de entrada
  const dateValidator = (v) => {
    if (!v) return 'Este campo es requerido';
    
    // Obtener la fecha actual
    const currentDate = new Date();
    const selectedDate = new Date(v);
  
    // Verificar que la fecha seleccionada no sea hoy ni anterior a hoy
    if (selectedDate <= currentDate) {
      return 'La fecha de entrada debe ser posterior a hoy';
    }
  
    return true;
  };
  
  // Función para enviar el formulario de reserva
  const submitReservation = () => {
    errorAcceptTerms.value = '';
  
    if (!reservationFormRef.value) return;
  
    // Validar el formulario
    reservationFormRef.value.validate().then((isValid) => {
      if (!isValid) return;
  
      if (!reservationData.value.acceptTerms) {
        errorAcceptTerms.value = 'Debe aceptar los términos y condiciones para continuar';
        return;
      }
  
      isLoading.value = true;
  
      // Simular envío del formulario (aquí puedes implementar tu lógica real)
      setTimeout(() => {
        // Aquí colocas la lógica real para enviar el formulario (ejemplo: enviar a un servidor, etc.)
  
        // Limpiar campos y resetear formulario
        reservationData.value.checkInDate = '';
        reservationData.value.checkOutDate = '';
        reservationData.value.roomType = null;
        reservationData.value.fullName = '';
        reservationData.value.email = '';
        reservationData.value.phoneNumber = '';
        reservationData.value.acceptTerms = false;
  
        reservationFormRef.value.resetValidation();
  
        isLoading.value = false;
  
        // Mostrar alerta de éxito
        alert('Reserva enviada correctamente');
        router.push('/');
      }, 1500);
    });
  };
  </script>
  
  <style scoped>
  .formulario {
    max-width: 600px; /* Ajusta el ancho máximo según tu diseño */
    margin: auto; /* Centra el formulario horizontalmente */
  }
  </style>
  