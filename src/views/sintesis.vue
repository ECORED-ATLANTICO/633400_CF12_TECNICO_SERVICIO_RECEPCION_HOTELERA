<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-right") El componente formativo Formas de pago permite comprender la importancia de los procesos financieros y administrativos relacionados con el cobro de servicios dentro de los establecimientos de alojamiento. A lo largo de los contenidos se abordan aspectos relacionados con la evolución de los medios de pago, las formas de pago tradicionales y digitales, la facturación hotelera, las garantías de pago y los procedimientos operativos asociados al registro, validación y conciliación de transacciones financieras en hotelería.
        p.mb-0 Asimismo, se reconoce la importancia de la tecnología aplicada a los pagos hoteleros mediante el uso de sistemas PMS, plataformas de pago electrónico, facturación digital y herramientas automatizadas que optimizan la operación y fortalecen la experiencia del huésped. De igual manera, se analizan aspectos relacionados con transparencia en cobros, atención al cliente durante el proceso de pago, riesgos operativos y transformación digital de los servicios financieros, fortaleciendo competencias técnicas, operativas y organizacionales necesarias para la gestión eficiente de pagos dentro del sector hotelero contemporáneo.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Formas de pago permite comprender la importancia de los procesos financieros y administrativos relacionados con el cobro de servicios dentro de los establecimientos de alojamiento. A lo largo de los contenidos se abordan aspectos relacionados con la evolución de los medios de pago, las formas de pago tradicionales y digitales, la facturación hotelera, las garantías de pago y los procedimientos operativos asociados al registro, validación y conciliación de transacciones financieras en hotelería. Asimismo, se reconoce la importancia de la tecnología aplicada a los pagos hoteleros mediante el uso de sistemas PMS, plataformas de pago electrónico, facturación digital y herramientas automatizadas que optimizan la operación y fortalecen la experiencia del huésped. De igual manera, se analizan aspectos relacionados con transparencia en cobros, atención al cliente durante el proceso de pago, riesgos operativos y transformación digital de los servicios financieros, fortaleciendo competencias técnicas, operativas y organizacionales necesarias para la gestión eficiente de pagos dentro del sector hotelero contemporáneo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
