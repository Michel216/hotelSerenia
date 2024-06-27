<template>
    <div class="habitaciones">
            <div class="text-h6"><h2 style="text-align: center;">Habitaciones</h2></div>

        <div class="q-pa-md row items-start q-gutter-md">
            <q-card>
                <q-card-section horizontal>
                    <div>
                        <div class="q-pa-md row items-start q-gutter-md">
                            <div class="image-container" @click="showCarousel = true">
                                <img src="/img/imgHabitaciones/doble.png" class="my-image">
                                <div class="overlay">
                                    <q-icon name="visibility" size="2rem" />
                                </div>
                            </div>
                            <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                transition-hide="slide-up">
                                <q-card class="q-pa-none q-ma-none">
                                    <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                        transition-prev="slide-right" transition-next="slide-left">
                                        <q-carousel-slide :name="1" img-src="/img/imgHabitaciones/doble.png" />
                                        <q-carousel-slide :name="2" img-src="/img/imgHabitaciones/doble1.png" />
                                        <q-carousel-slide :name="3" img-src="/img/imgHabitaciones/dobleBaño.png" />
                                    </q-carousel>
                                    <q-btn round flat dense icon="close" @click="showCarousel = false"
                                        class="close-button" />
                                </q-card>
                            </q-dialog>
                        </div>
                        <q-card-section>
                            <div>
                                <ul class="custom-list">
                                    <li>
                                        <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                        Se admiten mascotas
                                    </li>
                                    <li>
                                        <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                        No fumadores
                                    </li>
                                    <li>
                                        <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                        Wifi gratuito
                                    </li>
                                    <li>
                                        <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                            class="list-icon" />
                                        Climatización incluida
                                    </li>
                                </ul>
                            </div>
                            <q-btn to="/reserva" label="Reserva" />
                        </q-card-section>
                    </div>

                    <q-card-section>
                        <h4>Habitación Doble Individual</h4>
                        <div class="datos" style="display: flex; align-items: center;">
                            <span style="padding: 0 5px;">Duerme 2</span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">1 Cama Doble </span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">24 m²</span>
                        </div>
                        <p>Disfrute de un descanso reparador en nuestras habitaciones dobles para uso individual,
                            ideales para viajeros de negocios o de placer.</p>

                        <ul>
                            <li>Mini Salón</li>
                            <li>Área de almacenamiento a medida</li>
                            <li>Por noche $400,000</li>
                        </ul>
                        <q-btn  label="Detalles de la Habitaciones" color="primary"
                            @click="habIndividual = true" />

                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card>
                <q-card-section horizontal>
                    <div>
                        <div class="q-pa-md row items-start q-gutter-md">
                            <div class="image-container" @click="showCarousel = true">
                                <img src="/img/imgHabitaciones/estandar.png" class="my-image">
                                <div class="overlay">
                                    <q-icon name="visibility" size="2rem" />
                                </div>
                            </div>
                            <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                transition-hide="slide-up">
                                <q-card class="q-pa-none q-ma-none">
                                    <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                        transition-prev="slide-right" transition-next="slide-left">
                                        <q-carousel-slide :name="1" img-src="/img/imgHabitaciones/estandar.png" />
                                        <q-carousel-slide :name="2" img-src="/img/imgHabitaciones/estandar1.png" />
                                        <q-carousel-slide :name="3" img-src="/img/imgHabitaciones/bañoEstandar.png" />
                                    </q-carousel>
                                    <q-btn round flat dense icon="close" @click="showCarousel = false"
                                        class="close-button" />
                                </q-card>
                            </q-dialog>
                        </div>
                        <q-card-section>
                            <div>
                                <ul class="custom-list">
                                    <li>
                                        <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                        Se admiten mascotas
                                    </li>
                                    <li>
                                        <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                        No fumadores
                                    </li>
                                    <li>
                                        <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                        Wifi gratuito
                                    </li>
                                    <li>
                                        <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                            class="list-icon" />
                                        Climatización incluida
                                    </li>
                                </ul>
                            </div>
                            <q-btn to="/reserva" label="Reserva" />
                        </q-card-section>
                    </div>

                    <q-card-section>
                        <h4>Habitación Estandar</h4>
                        <div class="datos" style="display: flex; align-items: center;">
                            <span style="padding: 0 5px;">2 personas</span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">1 Cama King </span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">35 m²</span>
                        </div>
                        <p>Diseñadas para proporcionar un descanso excelente a todos los viajeros, ya sea por placer o
                            por negocios.</p>

                        <ul>
                            <li>Minibar de pago</li>
                            <li>Televisión y teléfono</li>
                            <li>Por noche $500,000</li>
                        </ul>

                        <q-btn  label="Detalles de la Habitaciones" color="primary"
                            @click="habEstandar = true" />


                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card>
                <q-card-section horizontal>
                    <div>
                        <div class="q-pa-md row items-start q-gutter-md">
                            <div class="image-container" @click="showCarousel = true">
                                <img src="/img/imgHabitaciones/familiar.png" class="my-image">
                                <div class="overlay">
                                    <q-icon name="visibility" size="2rem" />
                                </div>
                            </div>
                            <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                transition-hide="slide-up">
                                <q-card class="q-pa-none q-ma-none">
                                    <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                        transition-prev="slide-right" transition-next="slide-left">
                                        <q-carousel-slide :name="1" img-src="/img/imgHabitaciones/familiar.png" />
                                        <q-carousel-slide :name="2" img-src="/img/imgHabitaciones/familiar1.png" />
                                        <q-carousel-slide :name="3" img-src="/img/imgHabitaciones/BañoFamiliar.png" />
                                    </q-carousel>
                                    <q-btn round flat dense icon="close" @click="showCarousel = false"
                                        class="close-button" />
                                </q-card>
                            </q-dialog>
                        </div>
                        <q-card-section>
                            <div>
                                <ul class="custom-list">
                                    <li>
                                        <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                        Se admiten mascotas
                                    </li>
                                    <li>
                                        <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                        No fumadores
                                    </li>
                                    <li>
                                        <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                        Wifi gratuito
                                    </li>
                                    <li>
                                        <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                            class="list-icon" />
                                        Climatización incluida
                                    </li>
                                </ul>
                            </div>
                            <q-btn to="/reserva" label="Reserva" />
                        </q-card-section>
                    </div>

                    <q-card-section>
                        <h4>Habitación Familiar</h4>
                        <div class="datos" style="display: flex; align-items: center;">
                            <span style="padding: 0 5px;">4 personas</span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">Cama matrimonial e individuales</span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">56 m²</span>
                        </div>
                        <p>Disfrute de una estancia inolvidable con su familia en nuestras amplias y modernas
                            habitaciones familiares.</p>

                        <ul>
                            <li>Mini Salón</li>
                            <li>Dos dormitorios y un mini salón</li>
                            <li>Por noche $800,000</li>
                        </ul>

                        <p  @mouseover="isHovered = true" @mouseleave="isHovered = false"
                            @click="habFamiliar = true">Detalles de la Habitaciones</p>


                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card>
                <q-card-section horizontal>
                    <div>
                        <div class="q-pa-md row items-start q-gutter-md">
                            <div class="image-container" @click="showCarousel = true">
                                <img src="/img/imgHabitaciones/deluxSuite.png" class="my-image">
                                <div class="overlay">
                                    <q-icon name="visibility" size="2rem" />
                                </div>
                            </div>
                            <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                transition-hide="slide-up">
                                <q-card class="q-pa-none q-ma-none">
                                    <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                        transition-prev="slide-right" transition-next="slide-left">
                                        <q-carousel-slide :name="1" img-src="/img/imgHabitaciones/deluxSuite.png" />
                                        <q-carousel-slide :name="2" img-src="/img/imgHabitaciones/deluxSuite1.png" />
                                        <q-carousel-slide :name="3" img-src="/img/imgHabitaciones/BañoDelux.png" />
                                    </q-carousel>
                                    <q-btn round flat dense icon="close" @click="showCarousel = false"
                                        class="close-button" />
                                </q-card>
                            </q-dialog>
                        </div>
                        <q-card-section>
                            <div>
                                <ul class="custom-list">
                                    <li>
                                        <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                        Se admiten mascotas
                                    </li>
                                    <li>
                                        <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                        No fumadores
                                    </li>
                                    <li>
                                        <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                        Wifi gratuito
                                    </li>
                                    <li>
                                        <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                            class="list-icon" />
                                        Climatización incluida
                                    </li>
                                </ul>
                            </div>
                            <q-btn to="/reserva" label="Reserva" />
                        </q-card-section>
                    </div>

                    <q-card-section>
                        <h4>Habitación Delux Suite</h4>
                        <div class="datos" style="display: flex; align-items: center;">
                            <span style="padding: 0 5px;">2 personas</span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">1 Cama King </span>
                            <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                            <span style="padding: 0 5px;">93 m²</span>
                        </div>
                        <p>Diseñadas para proporcionar un descanso excelente a todos los viajeros, ya sea por placer o
                            por negocios.</p>

                        <ul>
                            <li>Terraza y salón</li>
                            <li>Acceso al VIP Lounge</li>
                            <li>Techos altos y ventanas insonorizadas</li>

                            <li>Por noche $900,000</li>
                        </ul>
                        <q-btn label="Detalles de la Habitaciones" @click="habDelux = true" />

                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>


        <q-dialog v-model="habIndividual">

            <q-card style="width: 800px; max-width: 100vw; height: 100%; padding: 0%;">


                <q-card-section class="scroll">
                    <!-- <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p> -->
                    <div class="q-pa-md row items-start q-gutter-md" id="modalHabitacion">
                        <q-card-actions align="right">
                            <q-icon name="close" size="2rem" v-close-popup />
                        </q-card-actions>
                        <q-card-section horizontal>
                            <div>
                                <q-card-section>
                                    <h4>Habitación Doble Individual</h4>
                                    <div class="datos" style="display: flex; align-items: center;">
                                        <span style="padding: 0 5px;">Duerme 2</span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 2px;"></span>
                                        <span style="padding: 0 5px;">1 Cama Doble </span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 2px;"></span>
                                        <span style="padding: 0 5px;">24 m²</span>
                                    </div>



                                    <ul class="custom-list">
                                        <li>
                                            <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                            Se admiten mascotas
                                        </li>
                                        <li>
                                            <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                            No fumadores
                                        </li>
                                        <li>
                                            <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                            Wifi gratuito
                                        </li>
                                        <li>
                                            <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                                class="list-icon" />
                                            Climatización incluida
                                        </li>
                                    </ul>

                                </q-card-section>

                            </div>
                            <!--  -->
                            <div class="q-pa-md row items-start q-gutter-md">
                                <div class="image-container" @click="showCarousel = true">
                                    <img src="/img/imgHabitaciones/doble.png" class="image" id="image">
                                    <div class="overlay">
                                        <q-icon name="visibility" size="2rem" />
                                    </div>
                                </div>
                                <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                    transition-hide="slide-up">
                                    <q-card class="q-pa-none q-ma-none">
                                        <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                            transition-prev="slide-right" transition-next="slide-left">
                                            <q-carousel-slide :name="1" img-src="/img/imgHabitaciones/doble.png" />
                                            <q-carousel-slide :name="2" img-src="/img/imgHabitaciones/doble1.png" />
                                            <q-carousel-slide :name="3" img-src="/img/imgHabitaciones/dobleBaño.png" />
                                        </q-carousel>
                                        <q-btn round flat dense icon="close" @click="showCarousel = false"
                                            class="close-button" />
                                    </q-card>
                                </q-dialog>
                            </div>

                        </q-card-section>

                    </div>
                    <hr>
                    <div class="caracteristicas">
                        <p>Disfrute de un descanso reparador en nuestras habitaciones dobles para uso individual,
                            ideales
                            para viajeros de negocios o de placer.</p>


                        <h5>Características de la Habitación Doble Uso Individual:</h5>
                        <ul>
                            <li>Tamaño de la habitación: 24 metros cuadrados</li>
                            <li>Capacidad: Máximo 1 persona</li>
                            <li>Cama: 1 cama doble (150 cm)</li>
                        </ul>

                        <h5>Equipamiento y Servicios Incluidos:</h5>
                        <ul>
                            <li>Calefacción y aire acondicionado centralizados</li>
                            <li>Plancha</li>
                            <li>Lavamanos</li>
                            <li>Escritorio y tocador</li>
                            <li>Televisión y teléfono</li>
                            <li>Minibar de pago</li>
                            <li>Caja fuerte gratis</li>
                            <li>Internet Wi-Fi gratuito</li>
                            <li>Suelo de parquet</li>
                            <li>Servicio despertador</li>
                            <li>Bañera con ducha</li>
                            <li>Bidet</li>
                            <li>Secador de pelo</li>
                            <li>Espejo de maquillaje</li>
                            <li>Albornoz y zapatillas</li>
                        </ul>
                    </div>
                </q-card-section>

                <!-- <q-separator /> -->


            </q-card>
        </q-dialog>
        <q-dialog v-model="habEstandar">
            <q-card style="width: 800px; max-width: 100vw; height: 100%">



                <!-- <q-separator /> -->

                <q-card-section class="scroll">
                    <!-- <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p> -->
                    <div class="q-pa-md row items-start q-gutter-md">
                        <q-card-actions align="right">
                            <q-icon name="close" size="2rem" v-close-popup />
                        </q-card-actions>
                        <q-card-section horizontal>
                            <div>
                                <q-card-section>
                                    <h4>Habitación Estandar</h4>
                                    <div class="datos" style="display: flex; align-items: center;">
                                        <span style="padding: 0 5px;">2 personas</span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                                        <span style="padding: 0 5px;">1 Cama King </span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                                        <span style="padding: 0 5px;">35 m²</span>
                                    </div>


                                    <div>
                                        <ul class="custom-list">
                                            <li>
                                                <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                                Se admiten mascotas
                                            </li>
                                            <li>
                                                <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                                No fumadores
                                            </li>
                                            <li>
                                                <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                                Wifi gratuito
                                            </li>
                                            <li>
                                                <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                                    class="list-icon" />
                                                Climatización incluida
                                            </li>
                                        </ul>
                                    </div>
                                </q-card-section>
                            </div>

                            <q-card-section>

                                <div class="q-pa-md row items-start q-gutter-md">
                                    <div class="image-container" @click="showCarousel = true">
                                        <img src="/img/imgHabitaciones/estandar.png" class="image">
                                        <div class="overlay">
                                            <q-icon name="visibility" size="2rem" />
                                        </div>
                                    </div>
                                    <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                        transition-hide="slide-up">
                                        <q-card class="q-pa-none q-ma-none">
                                            <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                                transition-prev="slide-right" transition-next="slide-left">
                                                <q-carousel-slide :name="1"
                                                    img-src="/img/imgHabitaciones/estandar.png" />
                                                <q-carousel-slide :name="2"
                                                    img-src="/img/imgHabitaciones/estandar1.png" />
                                                <q-carousel-slide :name="3"
                                                    img-src="/img/imgHabitaciones/bañoEstandar.png" />
                                            </q-carousel>
                                            <q-btn round flat dense icon="close" @click="showCarousel = false"
                                                class="close-button" />
                                        </q-card>
                                    </q-dialog>
                                </div>



                            </q-card-section>
                        </q-card-section>
                    </div>
                    <hr>
                    <div class="caracteristicas">
                        <p>Diseñadas para proporcionar un descanso excelente a todos los viajeros, ya sea por placer o
                            por negocios.</p>


                        <h5>Características de la Habitación Doble:</h5>
                        <ul>
                            <li>Tamaño de la habitación: 35 metros cuadrados</li>
                            <li>Capacidad: Máximo 2 personas</li>
                            <li>Camas: Opción de una cama de matrimonio o dos camas individuales</li>
                        </ul>

                        <h5>Equipamiento y Servicios Incluidos:</h5>
                        <ul>
                            <li>Calefacción y aire acondicionado centralizados</li>
                            <li>Plancha</li>
                            <li>Lavamanos</li>
                            <li>Escritorio y tocador</li>
                            <li>Televisión y teléfono</li>
                            <li>Minibar de pago</li>
                            <li>Caja fuerte gratis</li>
                            <li>Internet Wi-Fi gratuito</li>
                            <li>Suelo de parquet</li>
                            <li>Servicio despertador</li>
                            <li>Bañera con ducha</li>
                            <li>Bidet</li>
                            <li>Secador de pelo</li>
                            <li>Espejo de maquillaje</li>
                            <li>Albornoz y zapatillas</li>
                        </ul>
                    </div>
                </q-card-section>

                <!-- <q-separator /> -->


            </q-card>
        </q-dialog>
        <q-dialog v-model="habFamiliar">
            <q-card style="width: 800px; max-width: 100vw; height: 100%">
                <q-card-section class="scroll">
                    <div class="q-pa-md row items-start q-gutter-md">
                        <q-card-actions align="right">
                            <q-icon name="close" size="2rem" v-close-popup />
                        </q-card-actions>
                        <q-card-section horizontal>
                            <div>
                                <q-card-section>
                                    <h4>Habitación Familiar</h4>
                                    <div class="datos" style="display: flex; align-items: center;">
                                        <span style="padding: 0 5px;">4 personas</span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 2px;"></span>
                                        <span style="padding: 0 5px;">opciones</span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 2px;"></span>
                                        <span style="padding: 0 5px;">56 m²</span>
                                    </div>


                                    <div>
                                        <ul class="custom-list">
                                            <li>
                                                <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                                Se admiten mascotas
                                            </li>
                                            <li>
                                                <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                                No fumadores
                                            </li>
                                            <li>
                                                <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                                Wifi gratuito
                                            </li>
                                            <li>
                                                <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                                    class="list-icon" />
                                                Climatización incluida
                                            </li>
                                        </ul>
                                    </div>
                                </q-card-section>
                            </div>

                            <q-card-section>

                                <div class="q-pa-md row items-start q-gutter-md">
                                    <div class="image-container" @click="showCarousel = true">
                                        <img src="/img/imgHabitaciones/familiar.png" class="image">
                                        <div class="overlay">
                                            <q-icon name="visibility" size="2rem" />
                                        </div>
                                    </div>
                                    <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                        transition-hide="slide-up">
                                        <q-card class="q-pa-none q-ma-none">
                                            <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                                transition-prev="slide-right" transition-next="slide-left">
                                                <q-carousel-slide :name="1"
                                                    img-src="/img/imgHabitaciones/familiar.png" />
                                                <q-carousel-slide :name="2"
                                                    img-src="/img/imgHabitaciones/familiar1.png" />
                                                <q-carousel-slide :name="3"
                                                    img-src="/img/imgHabitaciones/BañoFamiliar.png" />
                                            </q-carousel>
                                            <q-btn round flat dense icon="close" @click="showCarousel = false"
                                                class="close-button" />
                                        </q-card>
                                    </q-dialog>
                                </div>



                            </q-card-section>
                        </q-card-section>
                    </div>
                    <hr>
                    <div class="caracteristicas">
                        <p>Disfrute de una estancia inolvidable con su familia en nuestras amplias y modernas
                            habitaciones
                            familiares.</p>


                        <h5>Características de la Habitación Familiar:</h5>
                        <ul>
                            <li>Tamaño de la habitación: 56 metros cuadrados</li>
                            <li>Capacidad: Dos dormitorios para 4 personas</li>
                            <li>Camas: 1 cama king-size y 2 camas individuales</li>
                            <li>Mini salón</li>
                            <li>Baño: Bañera, ducha, 2 aseos separados</li>
                            <li>Área de almacenamiento a medida</li>
                        </ul>

                        <h5>Equipamiento y Servicios Incluidos:</h5>
                        <ul>
                            <li>Wi-Fi de alta velocidad de cortesía</li>
                            <li>Televisor LED de 49"</li>
                            <li>Lujoso baño de mármol con artículos de aseo a medida</li>
                            <li>Secador de pelo</li>
                            <li>Albornoces Lancaster y ropa de cama</li>
                            <li>Menaje para preparar té y café</li>
                            <li>Minibar</li>
                            <li>Servicio de lustrado de zapatos de cortesía</li>
                            <li>Servicio nocturno de cobertura</li>
                            <li>Enchufes de clavija universales</li>
                            <li>Caja fuerte en la habitación</li>
                            <li>Tableta en la habitación</li>
                            <li>Desayuno incluido</li>
                        </ul>
                    </div>
                </q-card-section>

                <!-- <q-separator /> -->


            </q-card>
        </q-dialog>
        <q-dialog v-model="habDelux">
            <q-card style="width: 800px; max-width: 100vw; height: 100%">

                <q-card-section class="scroll">
                    <!-- <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p> -->
                    <div class="q-pa-md row items-start q-gutter-md">
                        <q-card-actions align="right">
                            <q-icon name="close" size="2rem" v-close-popup />
                        </q-card-actions>
                        <q-card-section class="responsive-section">
                            <div>
                                <q-card-section>
                                    <h4>Habitación Delux Suite</h4>
                                    <div class="datos" style="display: flex; align-items: center;">
                                        <span style="padding: 0 5px;">2 personas</span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                                        <span style="padding: 0 5px;">1 Cama King </span>
                                        <span style="border-left: 1px solid black; height: 1em; margin: 0 1px;"></span>
                                        <span style="padding: 0 5px;">93 m²</span>
                                    </div>


                                    <div>
                                        <ul class="custom-list">
                                            <li>
                                                <img src="/img/iconos/huella.png" alt="Huella" class="list-icon" />
                                                Se admiten mascotas
                                            </li>
                                            <li>
                                                <img src="/img/iconos/no-fumar.png" alt="No Fumar" class="list-icon" />
                                                No fumadores
                                            </li>
                                            <li>
                                                <img src="/img/iconos/wifi.png" alt="Wifi" class="list-icon" />
                                                Wifi gratuito
                                            </li>
                                            <li>
                                                <img src="/img/iconos/aire-acondicionado.png" alt="No Fumar"
                                                    class="list-icon" />
                                                Climatización incluida
                                            </li>
                                        </ul>
                                    </div>
                                </q-card-section>
                            </div>

                            <q-card-section>

                                <div class="q-pa-md row items-start q-gutter-md">
                                    <div class="image-container" @click="showCarousel = true">
                                        <img src="/img/imgHabitaciones/deluxSuite.png" class="image">
                                        <div class="overlay">
                                            <q-icon name="visibility" size="2rem" />
                                        </div>
                                    </div>
                                    <q-dialog v-model="showCarousel" full-width full-height transition-show="slide-down"
                                        transition-hide="slide-up">
                                        <q-card class="q-pa-none q-ma-none">
                                            <q-carousel v-model="slide" navigation infinite arrows height="100%"
                                                transition-prev="slide-right" transition-next="slide-left">
                                                <q-carousel-slide :name="1"
                                                    img-src="/img/imgHabitaciones/deluxSuite.png" />
                                                <q-carousel-slide :name="2"
                                                    img-src="/img/imgHabitaciones/deluxSuite1.png" />
                                                <q-carousel-slide :name="3"
                                                    img-src="/img/imgHabitaciones/BañoDelux.png" />
                                            </q-carousel>
                                            <q-btn round flat dense icon="close" @click="showCarousel = false"
                                                class="close-button" />
                                        </q-card>
                                    </q-dialog>
                                </div>



                            </q-card-section>
                        </q-card-section>
                    </div>
                    <hr>
                    <div class="caracteristicas">
                        <p>Diseñadas para proporcionar un descanso excelente a todos los viajeros, ya sea por placer o
                            por negocios.</p>


                        <h5>Características de la Deluxe Suite:</h5>
                        <ul>
                            <li>Superficie: 93 metros cuadrados</li>
                            <li>Camas: 1 cama king o 2 camas individuales</li>
                            <li>Capacidad máxima: 2 personas</li>
                            <li>Vista: Ciudad de Río de Janeiro</li>
                            <li>Distribución: Terraza y salón</li>
                            <li>Baño: Ducha y bañera</li>
                        </ul>

                        <h5>Funciones y Amenidades:</h5>
                        <ul>
                            <li>Acceso al VIP Lounge</li>
                            <li>Techos altos y ventanas insonorizadas</li>
                            <li>Bar en la habitación bien surtido, máquina de café espresso y agua embotellada</li>
                            <li>Televisor de alta definición Smart LED de 50 pulgadas con cable y canales premium</li>
                            <li>Altavoz de audio Bluetooth</li>
                            <li>Carta de almohadas y ropa de cama de lujo</li>
                            <li>Climatizador en la habitación</li>
                            <li>Caja fuerte del tamaño de un equipo portátil</li>
                            <li>Escritorio</li>
                            <li>Sistema de llamada de emergencia</li>
                            <li>Detector de humo</li>
                            <li>Perros pequeños y gatos de menos de 5 kg / 11 libras son bienvenidos</li>
                            <li>Conexión a una suite de un dormitorio con vista a la ciudad de Avenue o a una suite de
                                un
                                dormitorio con vista a la ciudad</li>
                        </ul>
                    </div>
                </q-card-section>

                <!-- <q-separator /> -->


            </q-card>
        </q-dialog>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
const showCarousel = ref(false)
const habIndividual = ref('false');
const habEstandar = ref('false');
const habFamiliar = ref('false');
const isHovered = ref(false);

</script>

<style scoped>
.habitaciones {
    margin-top: 3% !important;
    width: 55%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    margin: auto auto;
}

.image-container {
    position: relative;
    width: 300px;
    /* max-width: 300px;
    max-height: 300px; */
    cursor: pointer;
}

.my-image {
    width: 100%;
    height: auto;
}

.image {
    width: 100%;
    height: auto;
    margin-left: -30%;
}

.q-pa-none {
    filter: brightness(80%);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.image-container:hover .overlay {
    opacity: 1;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    /* Asegura que el botón esté sobre el carrusel */
    color: white;
    /* Color del icono del botón */
    background-color: rgba(0, 0, 0, 0.256);
    /* Fondo semi-transparente */
}

.custom-list {
    list-style: none;
    /* Elimina los puntos de la lista */
    padding: 0;
}

.custom-list li {
    display: flex;
    align-items: center;
    /* Centra verticalmente el contenido */
    margin-bottom: 10px;
    /* Espaciado entre elementos de la lista */
}

.list-icon {
    width: 20px;
    /* Ajusta el tamaño del icono */
    height: 20px;
    margin-right: 8px;
    /* Espaciado entre el icono y el texto */
}

h4,
h5 {
    margin: 0%;
    padding: 0%;
    font-weight: bold;
}

.datos {
    font-size: 120%;
    margin-bottom: 10px;
}

p {
    font-size: 130%;
}

ul {
    font-size: 120%;
}

.q-card-section.horizontal {
    display: flex;
    flex-direction: row;
    /* Horizontal por defecto */
}

.caracteristicas {
    padding: .5%;
    margin: 10%;
}

.btnDetalles {
    color: #000000;
    /* Color del texto */
    cursor: pointer;
    /* Cambia el cursor a mano para indicar interactividad */
    position: relative;
    /* Asegura que el pseudo-elemento ::before esté posicionado correctamente */
    display: inline-block;
    /* Para que el ancho se ajuste al contenido */
}

.btnDetalles::before {
    content: '';
    /* Pseudo-elemento para simular la línea subrayada */
    position: absolute;
    /* Posición absoluta para estar sobre el texto */
    bottom: 0;
    /* Al fondo del contenedor */
    left: 0;
    /* A la izquierda del contenedor */
    width: 100%;
    /* Ancho completo del contenedor */
    height: 2px;
    /* Grosor de la línea */
    background-image: linear-gradient(to right, transparent 50%, #007bff 50%);
    /* Gradiente lineal transparente a azul */
    background-size: 200% 100%;
    /* Tamaño del gradiente extendido */
    background-position: right;
    /* Posición inicial a la derecha */
    transition: background-position 0.3s ease;
    /* Transición suave de la posición del fondo */
}

.btnDetalles:hover::before {
    background-position: right left;
    /* Mueve el gradiente hacia la izquierda al pasar el cursor */
}

.btnDetalles:active {
    color: #171f28;
    /* Cambia el color del texto al hacer clic */
}

@media screen and (max-width: 1200px) {
    .habitaciones {
        margin-top: 3% !important;
        width: 800px;
        font-size: 1.3rem;
    }

}

@media screen and (max-width:800px) {

    .image {
        margin-top: -10%;
        width: 130%;
        /* Ocupar el ancho completo del contenedor */
        height: auto;
        /* Ajustar la altura automáticamente */
        margin-left: -50%;
        /* Eliminado para centrar la imagen automáticamente */
    }

    .habitacionModal {
        width: 160%;
        /* Ocupar el ancho completo del contenedor */
        top: 100%;
        /* Posición inicial en la parte superior */
        margin-left: 50%;
        /* Eliminado para centrar automáticamente */
        margin-top: -70%;
        /* Ajuste opcional para el margen superior */
    }


}

@media screen and (max-width:570px) {
    #modalHabitacion {
        height: 100%;
    }

    .image {
        /* Cambiado a posición relativa */
        margin-top: -80%;
        width: 100%;
        /* Ocupar el ancho completo del contenedor */
        height: auto;
        /* Ajustar la altura automáticamente */
        align-content: center;
        margin-left: -60%;
        /* Eliminado para centrar la imagen automáticamente */
    }

    .habitacionModal {

        width: 160%;
        /* Ocupar el ancho completo del contenedor */
        top: 100%;
        /* Posición inicial en la parte superior */
        margin: auto auto;
        margin-top: -70%;
        /* Ajuste opcional para el margen superior */
    }


}

@media screen and (max-width:570px) {
    #modalHabitacion {
        height: 100%;
    }

    .image {
        position: relative;
        /* Cambiado a posición relativa */
        margin-top: -150%;
        width: 80%;
        /* Ocupar el ancho completo del contenedor */
        height: auto;
        /* Ajustar la altura automáticamente */
        align-content: center;
        margin-left: -70%;
    }

    .habitacionModal {
        position: relative;
        /* Cambiado a posición relativa */
        width: 160%;
        /* Ocupar el ancho completo del contenedor */
        top: 100%;
        /* Posición inicial en la parte superior */
        margin: auto auto;
        margin-left: -10%;
        margin-top: -70%;
        /* Ajuste opcional para el margen superior */
    }


}
</style>
