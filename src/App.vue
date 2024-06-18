<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn to="/habitaciones">
          <div>Habitaciones</div>
        </q-btn>
        <q-btn to="/">
          <div>Bienvenidos</div>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- Aquí es donde se renderizan los componentes según la ruta -->
    <router-view></router-view>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
.bg-primary {
  background-color: black !important;
}
.serviciosHotel {
  background-color: transparent;
  border: 0px;
}
</style>
