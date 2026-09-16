<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/2.png", data-aos="zoom-in")
      .col-lg-9
        p El componente formativo Formas de pago permite comprender la importancia de los procesos de cobro y gestión financiera dentro de los establecimientos de alojamiento. Actualmente, la operación hotelera integra múltiples medios de pago tradicionales y digitales que facilitan las transacciones económicas, optimizan los procesos administrativos y fortalecen la experiencia del huésped durante su estadía.
        .bg-fondo-1.p-4
          p.mb-0 A lo largo de este componente se abordarán temas relacionados con las formas de pago utilizadas en hotelería, la facturación, la conciliación operativa, las plataformas tecnológicas de cobro y las tendencias digitales aplicadas a los servicios de alojamiento. De esta manera, se fortalecerán competencias técnicas y operativas necesarias para gestionar procesos de pago de manera organizada, segura y orientada a la calidad del servicio hotelero.
    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
